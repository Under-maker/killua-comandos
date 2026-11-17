import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const YUTA_ROOT = path.resolve(__dirname, '../..');
export const SQLITE_PATH = path.join(YUTA_ROOT, 'src', 'dados', 'yutabot.sqlite');

fs.mkdirSync(path.dirname(SQLITE_PATH), { recursive: true });

const IS_TERMUX = String(process.env.PREFIX || '').includes('com.termux') ||
  String(process.env.TERMUX_VERSION || '').length > 0 ||
  process.platform === 'android';

async function abrirBancoSQLite() {
  const erros = [];

  async function abrirNodeSQLite() {
    try {
      const modulo = await import('node:sqlite');
      const DatabaseSync = modulo.DatabaseSync;

      if (typeof DatabaseSync !== 'function') {
        throw new Error('DatabaseSync não está disponível neste Node.js.');
      }

      return {
        database: new DatabaseSync(SQLITE_PATH),
        backend: 'node:sqlite'
      };
    } catch (error) {
      erros.push(`node:sqlite: ${error?.message || error}`);
      return null;
    }
  }

  async function abrirBetterSQLite() {
    try {
      const modulo = await import('better-sqlite3');
      const Database = modulo.default || modulo.Database || modulo;

      if (typeof Database !== 'function') {
        throw new Error('O módulo não exportou o construtor do banco.');
      }

      return {
        database: new Database(SQLITE_PATH),
        backend: 'better-sqlite3'
      };
    } catch (error) {
      erros.push(`better-sqlite3: ${error?.message || error}`);
      return null;
    }
  }

  const tentativas = IS_TERMUX
    ? [abrirNodeSQLite, abrirBetterSQLite]
    : [abrirBetterSQLite, abrirNodeSQLite];

  for (const tentativa of tentativas) {
    const resultado = await tentativa();
    if (resultado) return resultado;
  }

  throw new Error(`Nenhum backend SQLite pôde ser carregado. ${erros.join(' | ')}`);
}

const { database, backend: SQLITE_BACKEND } = await abrirBancoSQLite();
export { SQLITE_BACKEND };

database.exec(`
  PRAGMA journal_mode = WAL;
  PRAGMA synchronous = NORMAL;
  PRAGMA foreign_keys = ON;
  PRAGMA busy_timeout = 10000;

  CREATE TABLE IF NOT EXISTS json_store (
    namespace TEXT NOT NULL,
    item_key TEXT NOT NULL,
    value TEXT NOT NULL,
    updated_at INTEGER NOT NULL,
    PRIMARY KEY (namespace, item_key)
  );

  CREATE TABLE IF NOT EXISTS legacy_migrations (
    file_path TEXT PRIMARY KEY,
    checksum TEXT NOT NULL,
    migrated_at INTEGER NOT NULL
  );
`);

const selectStore = database.prepare(
  'SELECT value FROM json_store WHERE namespace = ? AND item_key = ?'
);
const upsertStore = database.prepare(`
  INSERT INTO json_store (namespace, item_key, value, updated_at)
  VALUES (?, ?, ?, ?)
  ON CONFLICT(namespace, item_key) DO UPDATE SET
    value = excluded.value,
    updated_at = excluded.updated_at
`);
const deleteStore = database.prepare(
  'DELETE FROM json_store WHERE namespace = ? AND item_key = ?'
);
const selectMigration = database.prepare(
  'SELECT checksum FROM legacy_migrations WHERE file_path = ?'
);
const upsertMigration = database.prepare(`
  INSERT INTO legacy_migrations (file_path, checksum, migrated_at)
  VALUES (?, ?, ?)
  ON CONFLICT(file_path) DO UPDATE SET
    checksum = excluded.checksum,
    migrated_at = excluded.migrated_at
`);
const healthCheck = database.prepare('SELECT 1 AS connected');

// Os dados mais acessados ficam em memória durante a execução. As gravações
// são agrupadas por chave para evitar serializar e escrever o mesmo JSON várias
// vezes dentro do processamento de uma única mensagem.
const storeCache = new Map();
const pendingWrites = new Map();
const STORE_WRITE_DELAY = 650;

function storeKey(namespace, key) {
  return `${String(namespace)}\u0000${String(key)}`;
}

function persistStore(namespace, key, value) {
  try {
    const serialized = JSON.stringify(value);
    if (serialized === undefined) return false;
    upsertStore.run(String(namespace), String(key), serialized, Date.now());
    return true;
  } catch (error) {
    console.error('[YUTA SQLITE] Falha ao salvar dados:', error?.message || error);
    return false;
  }
}

function scheduleStoreWrite(namespace, key, value) {
  const cacheKey = storeKey(namespace, key);
  const current = pendingWrites.get(cacheKey);
  if (current) {
    current.value = value;
    return;
  }

  const pending = { namespace, key, value, timer: null };
  pending.timer = setTimeout(() => {
    pendingWrites.delete(cacheKey);
    persistStore(pending.namespace, pending.key, pending.value);
  }, STORE_WRITE_DELAY);
  pending.timer.unref?.();
  pendingWrites.set(cacheKey, pending);
}

function flushPendingWrites() {
  for (const [cacheKey, pending] of pendingWrites) {
    clearTimeout(pending.timer);
    pendingWrites.delete(cacheKey);
    persistStore(pending.namespace, pending.key, pending.value);
  }
}

process.once('exit', flushPendingWrites);

/**
 * Confirma que a mesma conexão SQLite está disponível para o bot principal,
 * SubBots e qualquer outro módulo que use este arquivo.
 */
export function ensureDatabaseConnection(context = 'app') {
  try {
    const result = healthCheck.get();
    if (Number(result?.connected) !== 1) throw new Error('teste de conexão não retornou sucesso');
    return {
      connected: true,
      context: String(context || 'app'),
      path: SQLITE_PATH
    };
  } catch (error) {
    throw new Error(`[YUTA SQLITE] Falha na conexão (${context}): ${error?.message || error}`);
  }
}

function cloneFallback(value) {
  if (value === undefined) return undefined;
  try {
    return JSON.parse(JSON.stringify(value));
  } catch {
    return value;
  }
}

export function readStore(namespace, key = 'root', fallback = undefined) {
  const namespaceText = String(namespace);
  const keyText = String(key);
  const cacheKey = storeKey(namespaceText, keyText);

  if (storeCache.has(cacheKey)) return storeCache.get(cacheKey).value;

  try {
    const row = selectStore.get(namespaceText, keyText);
    if (!row) return cloneFallback(fallback);

    const value = JSON.parse(row.value);
    storeCache.set(cacheKey, { namespace: namespaceText, key: keyText, value });
    return value;
  } catch {
    return cloneFallback(fallback);
  }
}

export function hasStore(namespace, key = 'root') {
  const namespaceText = String(namespace);
  const keyText = String(key);
  if (storeCache.has(storeKey(namespaceText, keyText))) return true;

  try {
    return !!selectStore.get(namespaceText, keyText);
  } catch {
    return false;
  }
}

export function writeStore(namespace, key = 'root', value, options = {}) {
  if (value === undefined) return false;

  const namespaceText = String(namespace);
  const keyText = String(key);
  const cacheKey = storeKey(namespaceText, keyText);
  storeCache.set(cacheKey, { namespace: namespaceText, key: keyText, value });

  if (options?.immediate) {
    const pending = pendingWrites.get(cacheKey);
    if (pending) {
      clearTimeout(pending.timer);
      pendingWrites.delete(cacheKey);
    }
    return persistStore(namespaceText, keyText, value);
  }

  scheduleStoreWrite(namespaceText, keyText, value);
  return true;
}

export function removeStore(namespace, key = 'root') {
  const namespaceText = String(namespace);
  const keyText = String(key);
  const cacheKey = storeKey(namespaceText, keyText);
  storeCache.delete(cacheKey);

  const pending = pendingWrites.get(cacheKey);
  if (pending) {
    clearTimeout(pending.timer);
    pendingWrites.delete(cacheKey);
  }

  try {
    deleteStore.run(namespaceText, keyText);
    return true;
  } catch {
    return false;
  }
}

function canonicalJson(value) {
  try {
    return JSON.stringify(value);
  } catch {
    return '';
  }
}

function sameJson(left, right) {
  return canonicalJson(left) === canonicalJson(right);
}

function readLegacyJson(filePath) {
  try {
    const absolute = path.resolve(filePath);
    const raw = fs.readFileSync(absolute, 'utf8');
    if (!raw.trim()) return null;
    const value = JSON.parse(raw);
    return {
      path: absolute,
      raw,
      value,
      checksum: crypto.createHash('sha256').update(raw).digest('hex')
    };
  } catch {
    return null;
  }
}

function migrationChecksum(filePath) {
  try {
    const row = selectMigration.get(path.resolve(filePath));
    return row?.checksum || '';
  } catch {
    return '';
  }
}

function markMigrated(filePath, checksum) {
  try {
    upsertMigration.run(path.resolve(filePath), checksum, Date.now());
    return true;
  } catch {
    return false;
  }
}

/**
 * Remove um JSON legado somente quando ele estiver dentro da instalação,
 * for um JSON válido e a migração já tiver sido confirmada no SQLite.
 */
export function safeRemoveMigratedJson(filePath, expectedValue = undefined) {
  try {
    const absolute = path.resolve(filePath);
    const root = `${path.resolve(YUTA_ROOT)}${path.sep}`;
    if (!absolute.startsWith(root) || path.extname(absolute).toLowerCase() !== '.json') return false;
    if (!fs.existsSync(absolute)) return true;

    const entry = readLegacyJson(absolute);
    if (!entry) return false;
    if (migrationChecksum(absolute) && migrationChecksum(absolute) !== entry.checksum) return false;
    if (expectedValue !== undefined && !sameJson(entry.value, expectedValue)) return false;

    fs.unlinkSync(absolute);
    return !fs.existsSync(absolute);
  } catch {
    return false;
  }
}

function migrateCollection(namespace, filePaths, fallback) {
  const entries = filePaths.map(readLegacyJson).filter(Boolean);
  let stored = readStore(namespace, 'root', undefined);

  if (stored === undefined && entries[0]) {
    if (writeStore(namespace, 'root', entries[0].value, { immediate: true })) {
      stored = readStore(namespace, 'root', undefined);
    }
  }

  if (stored === undefined && !entries.length) {
    writeStore(namespace, 'root', fallback, { immediate: true });
    stored = readStore(namespace, 'root', undefined);
  }

  if (stored === undefined) return;

  for (const entry of entries) {
    const oldChecksum = migrationChecksum(entry.path);
    const canRemove = sameJson(stored, entry.value) || (oldChecksum && oldChecksum === entry.checksum);
    if (!canRemove) continue;
    markMigrated(entry.path, entry.checksum);
    safeRemoveMigratedJson(entry.path, entry.value);
  }
}

function listJsonFiles(directory) {
  try {
    return fs.readdirSync(directory, { withFileTypes: true })
      .filter(item => item.isFile() && item.name.toLowerCase().endsWith('.json'))
      .map(item => path.join(directory, item.name));
  } catch {
    return [];
  }
}

function mergeGroupConfig(mainValue, legacyValue) {
  const main = Array.isArray(mainValue) ? mainValue : [mainValue || {}];
  const legacy = Array.isArray(legacyValue) ? legacyValue : [legacyValue || {}];
  const merged = { ...(legacy[0] || {}), ...(main[0] || {}) };
  return [merged];
}

function migrateGroupConfigs() {
  const mainDir = path.join(YUTA_ROOT, 'src', 'dados', 'grupos', 'GroupMetadata');
  const legacyDir = path.join(YUTA_ROOT, 'src', 'dados', 'grupos');
  const entriesByGroup = new Map();

  for (const filePath of listJsonFiles(mainDir)) {
    const groupId = path.basename(filePath, '.json');
    if (!/@g\.us$/i.test(groupId)) continue;
    const entry = readLegacyJson(filePath);
    if (!entry) continue;
    const item = entriesByGroup.get(groupId) || {};
    item.main = entry;
    entriesByGroup.set(groupId, item);
  }

  for (const filePath of listJsonFiles(legacyDir)) {
    const groupId = path.basename(filePath, '.json');
    if (!/@g\.us$/i.test(groupId)) continue;
    const entry = readLegacyJson(filePath);
    if (!entry) continue;
    const item = entriesByGroup.get(groupId) || {};
    item.legacy = entry;
    entriesByGroup.set(groupId, item);
  }

  for (const [groupId, entries] of entriesByGroup) {
    const merged = entries.main && entries.legacy
      ? mergeGroupConfig(entries.main.value, entries.legacy.value)
      : Array.isArray(entries.main?.value)
      ? entries.main.value
      : Array.isArray(entries.legacy?.value)
      ? entries.legacy.value
      : [entries.main?.value || entries.legacy?.value || {}];

    let stored = readStore('group_config', groupId, undefined);
    if (stored === undefined && writeStore('group_config', groupId, merged, { immediate: true })) {
      stored = readStore('group_config', groupId, undefined);
    }
    if (stored === undefined || !sameJson(stored, merged)) continue;

    for (const entry of [entries.main, entries.legacy].filter(Boolean)) {
      markMigrated(entry.path, entry.checksum);
      safeRemoveMigratedJson(entry.path, entry.value);
    }
  }
}

function migrateWelcomeConfigs() {
  const welcomeDir = path.join(YUTA_ROOT, 'src', 'dados', 'grupos', 'GroupMetadata', 'bem-vindo');
  for (const filePath of listJsonFiles(welcomeDir)) {
    const groupId = path.basename(filePath, '.json');
    if (!/@g\.us$/i.test(groupId)) continue;
    const entry = readLegacyJson(filePath);
    if (!entry) continue;

    let stored = readStore('welcome_config', groupId, undefined);
    if (stored === undefined && writeStore('welcome_config', groupId, entry.value, { immediate: true })) {
      stored = readStore('welcome_config', groupId, undefined);
    }
    if (stored === undefined || !sameJson(stored, entry.value)) continue;
    markMigrated(entry.path, entry.checksum);
    safeRemoveMigratedJson(entry.path, entry.value);
  }
}

function migrateLegacyData() {
  const dados = (...parts) => path.join(YUTA_ROOT, 'src', 'dados', ...parts);
  const tictactoe = (...parts) => path.join(YUTA_ROOT, 'src', 'tictactoe', ...parts);

  migrateCollection('count_message', [dados('settings', 'media', 'countmsg.json')], []);
  migrateCollection('coins', [dados('func', 'coins.json')], []);
  migrateCollection('playlists', [dados('func', 'playlists.json')], {});
  migrateCollection('rental_auto', [dados('func', 'aluguel_auto_db.json')], { groups: {}, pend: {} });
  migrateCollection('rental_config', [dados('func', 'aluguel_config.json')], {});
  migrateCollection('rental_groups', [tictactoe('grupos_com_aluguel.json')], []);
  migrateCollection('leveling', [tictactoe('leveling.json')], []);
  migrateCollection('subbots', [dados('database', 'subbots.json')], {});
  migrateGroupConfigs();
  migrateWelcomeConfigs();
}

export function createDefaultGroupConfig({ groupId = '', name = '', prefix = '/' } = {}) {
  return [{
    name,
    groupId,
    x9: false,
    antidelete: false,
    antiimg: false,
    antiligacaogrupo: false,
    antistatus: false,
    antivideo: false,
    antiaudio: false,
    antisticker: false,
    antidoc: false,
    antictt: false,
    antibot: false,
    antiloc: false,
    antilinkgp: false,
    antilinkhard: false,
    antilinkeasy: false,
    antimarcar: false,
    antimsg: false,
    antipayment: false,
    antifake: false,
    antiporn: false,
    Odelete: false,
    antispam: false,
    antinotas: false,
    anticatalogo: false,
    visuUnica: false,
    registrarFIGUS: false,
    noPrefixAtivo: false,
    figComandosAtivo: false,
    comandosNoPrefix: [],
    comandosFigurinha: [],
    figBanStickers: [],
    soadm: false,
    listanegra: [],
    advertir: [],
    prefixos: [prefix],
    advertir2: [],
    legenda_estrangeiro: '0',
    legenda_documento: '0',
    legenda_video: '0',
    legenda_imagem: '0',
    multiprefix: false,
    ausentes: [],
    ANTI_DDD: { active: false, listaProibidos: [] },
    antipalavrao: { active: false, palavras: [] },
    limitec: { active: false, quantidade: null },
    autosticker: false,
    autoresposta: false,
    jogos: false,
    bangp: false,
    modo_rpg: false,
    modomoderador: false,
    moderadores: [],
    cmdsModerador: [],
    ar_permitidos: [],
    ar_permitidos_lid: []
  }];
}

export function getGroupConfig(groupId, fallback = null) {
  if (!groupId) return cloneFallback(fallback);
  const stored = readStore('group_config', groupId, undefined);
  if (stored === undefined || stored === null) return cloneFallback(fallback);
  return Array.isArray(stored) ? stored : [stored];
}

export function ensureGroupConfig(groupId, fallback = createDefaultGroupConfig({ groupId })) {
  const current = getGroupConfig(groupId, null);
  if (Array.isArray(current) && current.length) return current;
  const value = Array.isArray(fallback) ? fallback : [fallback || {}];
  writeStore('group_config', groupId, value);
  return value;
}

export function saveGroupConfig(groupId, value) {
  if (!groupId) return false;
  const data = Array.isArray(value) ? value : [value || {}];
  return writeStore('group_config', groupId, data);
}

export function getWelcomeConfig(groupId, fallback = null) {
  if (!groupId) return cloneFallback(fallback);
  return readStore('welcome_config', groupId, fallback);
}

export function saveWelcomeConfig(groupId, value) {
  if (!groupId) return false;
  return writeStore('welcome_config', groupId, value || {});
}

export function readRentalAuto(fallback = { groups: {}, pend: {} }) {
  const value = readStore('rental_auto', 'root', fallback);
  if (!value || typeof value !== 'object' || Array.isArray(value)) return { groups: {}, pend: {} };
  if (!value.groups || typeof value.groups !== 'object') value.groups = {};
  if (!value.pend || typeof value.pend !== 'object') value.pend = {};
  return value;
}

export function saveRentalAuto(value) {
  return writeStore('rental_auto', 'root', value || { groups: {}, pend: {} });
}

export function readRentalConfig(fallback = {}) {
  const value = readStore('rental_config', 'root', fallback);
  return value && typeof value === 'object' && !Array.isArray(value) ? value : {};
}

export function saveRentalConfig(value) {
  return writeStore('rental_config', 'root', value || {});
}

export function readRentalGroups(fallback = []) {
  const value = readStore('rental_groups', 'root', fallback);
  return Array.isArray(value) ? value : [];
}

export function saveRentalGroups(value) {
  return writeStore('rental_groups', 'root', Array.isArray(value) ? value : []);
}

// A migração é executada uma vez no carregamento e é idempotente.
migrateLegacyData();
