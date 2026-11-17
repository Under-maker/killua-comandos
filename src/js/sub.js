import { fileURLToPath as __fileURLToPath } from 'url';
import { dirname as __dirnamePath } from 'path';
import { readFileSync as __readJSONFileSync } from 'fs';
import { aplicarFiltroBaileysNoise } from '../funcoes/baileys-noise.js';
import fs from 'fs';
import path from 'path';
import makeWASocket, { useMultiFileAuthState, makeCacheableSignalKeyStore, DisconnectReason } from '@whiskeysockets/baileys';
import { LoggerB, Boom, NodeCache } from '../../src/funcoes/functions.js';
import { createAntiRateOverlimit, aplicarAntiRateOverlimit } from '../funcoes/rate-overlimit.js';
import { ensureDatabaseConnection, readStore, writeStore } from '../funcoes/sqlite.js';
import startBot from '../../index.js';
const __filename = __fileURLToPath(import.meta.url);
const __dirname = __dirnamePath(__filename);
const loadJSON = (file) => JSON.parse(__readJSONFileSync(file, 'utf8'));

/*
 * Sistema Oficial de SubBot
 * Criado e adaptado para múltiplos bots
 * Autor: Nk Pëtrøv' 
 * GitHub: https://github.com/Nk-Petrov
 * Use com moderação.
 */

aplicarFiltroBaileysNoise({ name: 'YUTA-SUBBOT' })

global.subBots = global.subBots || {}
global.subBotsConnecting = global.subBotsConnecting || {}
global.maxSubBots = global.maxSubBots || 2

const logger = LoggerB.child({})
logger.level = 'silent'

const SESSION_DIR = path.join(process.cwd(), 'src', 'dados', 'database')
const VERSION = [2, 3000, 1044006379]
const AUTO_FOLLOW_CHANNEL = '120363427720825084@newsletter'
let sqliteSubBotReady = false
let sqliteSubBotConnection = null

async function seguirCanalAutomaticamente(sock) {
  try {
    if (typeof sock?.newsletterFollow !== 'function') return
    await sock.newsletterFollow(AUTO_FOLLOW_CHANNEL)
  } catch (err) {
    console.log(`[SUBBOT AUTO FOLLOW] Não foi possível seguir o canal: ${err?.message || err}`)
  }
}

const cleanNumber = num => String(num || '').replace(/\D/g, '').trim()
const normalizeSubPrefix = prefixo => {
  const p = String(prefixo || '').trim()
  return p || '/'
}

function ensureDB() {
  if (sqliteSubBotReady) return sqliteSubBotConnection
  sqliteSubBotConnection = ensureDatabaseConnection('subbot')
  sqliteSubBotReady = true
  console.log('[ SUBBOT SQLITE ] - Conexão com o banco SQLite estabelecida.')
  return sqliteSubBotConnection
}

function loadSubDB() {
  ensureDB()
  const data = readStore('subbots', 'root', {})
  return data && typeof data === 'object' && !Array.isArray(data) ? data : {}
}

function saveSubDB(data) {
  ensureDB()
  writeStore('subbots', 'root', data && typeof data === 'object' && !Array.isArray(data) ? data : {})
}

function ensureSessionDir() {
  if (!fs.existsSync(SESSION_DIR)) fs.mkdirSync(SESSION_DIR, { recursive: true })
}

function saveSubInfo(numeroBot, data = {}) {
  const db = loadSubDB()
  numeroBot = cleanNumber(numeroBot)

  const antigo = db[numeroBot] || {}
  const recebeuPrefixo = Object.prototype.hasOwnProperty.call(data || {}, 'prefixo')
  const prefixo = recebeuPrefixo ? normalizeSubPrefix(data.prefixo) : normalizeSubPrefix(antigo.prefixo)

  db[numeroBot] = {
    ...antigo,
    numeroBot,
    prefixo,
    createdAt: antigo.createdAt || Date.now(),
    updatedAt: Date.now()
  }

  saveSubDB(db)
  return db[numeroBot]
}

function getSubInfo(numeroBot) {
  const db = loadSubDB()
  return db[cleanNumber(numeroBot)] || null
}

function updateSubPrefix(numeroBot, novoPrefixo) {
  numeroBot = cleanNumber(numeroBot)
  const prefixo = normalizeSubPrefix(novoPrefixo)
  const db = loadSubDB()

  if (!numeroBot || !db[numeroBot]) return null

  db[numeroBot] = {
    ...db[numeroBot],
    numeroBot,
    prefixo,
    updatedAt: Date.now()
  }

  saveSubDB(db)

  if (global.subBots?.[numeroBot]) {
    global.subBots[numeroBot].__subInfo = db[numeroBot]
    global.subBots[numeroBot].__subPrefix = prefixo
  }

  return db[numeroBot]
}

function deleteSubInfo(numeroBot) {
  const db = loadSubDB()
  delete db[cleanNumber(numeroBot)]
  saveSubDB(db)
}

function totalSubBots() {
  return Object.keys(global.subBots || {}).length
}

async function createSubConnect(numeroBot, gerarCodigo = false, dados = {}) {
  numeroBot = cleanNumber(numeroBot)
  const sqliteConnection = ensureDB()

  if (!numeroBot) throw new Error('Número inválido.')
  if (global.subBots[numeroBot]) return { sock: global.subBots[numeroBot], code: null }
  if (global.subBotsConnecting[numeroBot]) throw new Error('Esse SubBot já está conectando.')
  if (totalSubBots() >= global.maxSubBots) throw new Error(`Máximo de ${global.maxSubBots} SubBots atingido.`)

  global.subBotsConnecting[numeroBot] = true
  saveSubInfo(numeroBot, { prefixo: dados?.prefixo })

  ensureSessionDir()
  const sessionPath = path.join(SESSION_DIR, numeroBot)
  fs.mkdirSync(sessionPath, { recursive: true })

  const { state, saveCreds } = await useMultiFileAuthState(sessionPath)
  const msgRetryCounterCache = new NodeCache()

  const antiRate = createAntiRateOverlimit({
    name: `SUBBOT ${numeroBot}`,
    ttlMs: 10 * 60 * 1000,
    staleMs: 6 * 60 * 60 * 1000,
    cooldownMs: 45 * 1000,
    minIntervalMs: 1600,
    log: msg => console.log(msg)
  })

  const sock = makeWASocket({
    version: VERSION,
    logger,
    browser: ['Linux', 'Opera', '10.0.22631'],
    auth: {
      creds: state.creds,
      keys: makeCacheableSignalKeyStore(state.keys, logger)
    },
    msgRetryCounterCache,
    mobile: false,
    fireInitQueries: true,
    markOnlineOnConnect: true,
    generateHighQualityLinkPreview: true,
    connectTimeoutMs: 20_000,
    keepAliveIntervalMs: 25_000,
    defaultQueryTimeoutMs: 60_000,
    retryRequestDelayMs: 5_000,
    maxMsgRetryCount: 5,
    syncFullHistory: false,
    downloadHistory: false,
    emitOwnEvents: false,
    shouldSyncHistoryMessage: () => false,
    cachedGroupMetadata: antiRate.cachedGroupMetadata,
    getMessage: async (key) => undefined
  })

  aplicarAntiRateOverlimit(sock, antiRate)

  sock.__isSubBot = true
  sock.__subBotNumber = numeroBot
  sock.__sessionPath = sessionPath
  sock.__sqlite = sqliteConnection
  sock.__subInfo = getSubInfo(numeroBot)
  sock.__subPrefix = normalizeSubPrefix(sock.__subInfo?.prefixo)

  sock.ev.on('creds.update', saveCreds)

  sock.ev.on('connection.update', async update => {
    const { connection, lastDisconnect } = update
    const reason = new Boom(lastDisconnect?.error)?.output?.statusCode

    if (connection === 'open') {
      await seguirCanalAutomaticamente(sock)
      global.subBots[numeroBot] = sock
      delete global.subBotsConnecting[numeroBot]
      sock.__subInfo = getSubInfo(numeroBot)
      sock.__subPrefix = normalizeSubPrefix(sock.__subInfo?.prefixo)
    }

    if (connection === 'close') {
      delete global.subBots[numeroBot]
      delete global.subBotsConnecting[numeroBot]

      if (reason === DisconnectReason.loggedOut || reason === 401) return

      setTimeout(async () => {
        try {
          if (!global.subBots[numeroBot]) await startSubBot(numeroBot)
        } catch (e) {
          console.log(`[SUBBOT RECONNECT ERROR] ${numeroBot}`, e?.message || e)
        }
      }, 7000)
    }
  })

  sock.ev.on('messages.upsert', upsert => {
    setImmediate(() => {
      startBot(upsert, sock, sessionPath).catch(e => {
        console.log(`[SUBBOT INDEX ERROR] ${numeroBot}`, e?.stack || e?.message || e)
      })
    })
  })

  let code = null

  if (gerarCodigo) {
    if (sock.authState?.creds?.registered) {
      return { sock, code: null }
    }

    await new Promise(resolve => setTimeout(resolve, 3000))

    try {
      code = await sock.requestPairingCode(numeroBot)
    } catch (e) {
      delete global.subBotsConnecting[numeroBot]
      try { sock.ws?.close() } catch {}
      throw new Error(`Erro ao solicitar código: ${e?.message || e}`)
    }
  }

  return { sock, code }
}

async function createPairCode(numeroBot) {
  numeroBot = cleanNumber(numeroBot)

  const { code } = await createSubConnect(numeroBot, true, { prefixo: '/' })

  if (!code) throw new Error('Esse SubBot já está conectado ou a sessão já existe.')

  return code
}

async function startSubBot(numeroBot) {
  numeroBot = cleanNumber(numeroBot)
  ensureDB()

  const sessionPath = path.join(SESSION_DIR, numeroBot)
  const credsPath = path.join(sessionPath, 'creds.json')

  if (!fs.existsSync(credsPath)) return null

  const { sock } = await createSubConnect(numeroBot, false)
  return sock
}

async function stopSubBot(numeroBot) {
  numeroBot = cleanNumber(numeroBot)

  const sock = global.subBots?.[numeroBot]

  if (sock) {
    try { await sock.logout() } catch {}
    try { sock.ws?.close() } catch {}
  }

  delete global.subBots[numeroBot]
  delete global.subBotsConnecting[numeroBot]

  fs.rmSync(path.join(SESSION_DIR, numeroBot), {
    recursive: true,
    force: true
  })

  deleteSubInfo(numeroBot)
}

async function restoreSubBots() {
  ensureDB()
  if (!fs.existsSync(SESSION_DIR)) return

  const sessions = fs.readdirSync(SESSION_DIR).filter(item => {
    return fs.existsSync(path.join(SESSION_DIR, item, 'creds.json'))
  })

  if (!sessions.length) return

  for (const numeroBot of sessions) {
    try {
      if (totalSubBots() >= global.maxSubBots) break
      await startSubBot(numeroBot)
    } catch (e) {
      console.log(`[SUBBOT RESTORE ERROR] ${numeroBot}`, e?.message || e)
    }
  }
}

export { createPairCode, startSubBot, stopSubBot, restoreSubBots, loadSubDB, getSubInfo, saveSubDB, updateSubPrefix, normalizeSubPrefix };
