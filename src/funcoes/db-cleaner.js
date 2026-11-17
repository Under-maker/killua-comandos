import { fileURLToPath as __fileURLToPath } from 'url';
import { dirname as __dirnamePath } from 'path';
import { readFileSync as __readJSONFileSync } from 'fs';
import fs from 'fs';
import path from 'path';
import os from 'os';
import { NodeCache } from '@cacheable/node-cache';
import v8 from 'v8';
import vm from 'vm';
let users;

const __filename = __fileURLToPath(import.meta.url);
const __dirname = __dirnamePath(__filename);
const loadJSON = (file) => JSON.parse(__readJSONFileSync(file, 'utf8'));

const ROOT = process.cwd()
const HOME = os.homedir?.() || process.env.HOME || ''
const MB = n => (Number(n || 0) / 1024 / 1024).toFixed(2)
const now = () => Date.now()
const join = (...p) => path.join(ROOT, ...p)
const rel = p => path.relative(ROOT, p).replace(/\\/g, '/')
const exists = p => fs.existsSync(p)
const isGroup = v => /@g\.us$/i.test(String(v || ''))
const num = v => String(v || '').replace(/\D/g, '')
const jsonSize = v => Buffer.byteLength(JSON.stringify(v, null, 2))

const RAM_LIMIT_MB = Number(process.env.DB_CLEANER_RAM_MB || 220)
const RAM_LIMIT = RAM_LIMIT_MB * 1024 * 1024

const cache = global.__BOT_DB_CLEANER_CACHE__ || (global.__BOT_DB_CLEANER_CACHE__ = new NodeCache({
  stdTTL: 300,
  checkperiod: 120,
  useClones: false,
  deleteOnExpire: true
}))

const PROTECT = [
  '.git', '.pm2',
  'auth', 'session', 'sessions',
  'src/dados/qr-code',
  'src/dados/settings/LOGOS',
  'src/dados/data/media/audios'
].map(x => join(...x.split('/')))

const CORE_JSON = new Set([
  'src/dados/settings/media/settings.json',
  'src/dados/settings/media/nescessario.json',
  'src/dados/settings/media/config.json',
  'src/dados/settings/LOGOS/links_img.json'
])

const KEEP = new Set(['index.js', 'convert.js', 'frames.json', 'palavras.json', 'menu.mp3', '.gitkeep', 'package.json', 'package-lock.json'])
const TEMP_EXT = new Set(['.tmp', '.temp', '.cache', '.log', '.webp', '.jpg', '.jpeg', '.png', '.gif', '.mp3', '.mp4', '.m4a', '.ogg', '.opus', '.wav', '.mov', '.mkv', '.bin', '.zip'])
const MEMBER_KEYS = new Set(['participants', 'membros', 'members', 'usuarios', 'users', 'usus', 'numbers', 'ativos', 'inativos', 'rank', 'players', 'jogadores', 'silenciados', 'mutados', 'muted', 'banidos', 'listanegra', 'advertir', 'advertir2', 'ausentes'])

const JSON_ROOTS = ['src/dados', 'src/tictactoe'].map(x => join(...x.split('/')))
const GROUP_DIRS = ['src/dados/grupos/GroupMetadata', 'src/dados/grupos/GroupMetadata/bem-vindo'].map(x => join(...x.split('/')))

const TEMP_ROOTS = [
  'tmp', 'temp', 'cache', '.cache', 'logs', 'download', 'downloads',
  'src/tmp', 'src/temp', 'src/cache', 'src/logs', 'src/downloads',
  'src/dados/tmp', 'src/dados/temp', 'src/dados/cache',
  'src/dados/data/tmp', 'src/dados/data/temp', 'src/dados/data/cache',
  'src/dados/data/media/poll',
  'src/dados/data/media/sticker',
  'src/dados/data/media/sticker/dados',
  'src/dados/data/media/forca/database',
  'src/dados/grupos/games',
  'src/tictactoe/db'
].map(x => join(...x.split('/')))

const NODE_CACHE_ROOTS = [
  join('node_modules', '.cache'),
  join('node_modules', '.tmp'),
  join('node_modules', '.vite'),
  join('node_modules', '.eslintcache'),
  HOME && path.join(HOME, '.npm', '_logs'),
  HOME && path.join(HOME, '.npm', '_cacache', 'tmp'),
  HOME && path.join(HOME, '.npm', '_npx'),
  HOME && path.join(HOME, '.cache')
].filter(Boolean)

function inside(file, dir) {
  const r = path.relative(dir, file)
  return !!r && !r.startsWith('..') && !path.isAbsolute(r)
}

function protectedPath(file) {
  return PROTECT.some(dir => file === dir || inside(file, dir))
}

function safeUnlink(file) {
  try { fs.unlinkSync(file); return true } catch { return false }
}

function safeRmDir(dir) {
  try { fs.rmdirSync(dir); return true } catch { return false }
}

function readJson(file) {
  try {
    const raw = fs.readFileSync(file, 'utf8').trim()
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

function writeJson(file, data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2))
}

function walk(dir, out = [], opt = {}) {
  if (!exists(dir)) return out
  if (!opt.allowProtected && protectedPath(dir)) return out

  let list = []
  try { list = fs.readdirSync(dir) } catch { return out }

  for (const name of list) {
    const file = path.join(dir, name)
    if (!opt.allowProtected && protectedPath(file)) continue

    try {
      const s = fs.statSync(file)
      if (s.isDirectory()) walk(file, out, opt)
      else out.push({ file, name, size: s.size, mtime: s.mtimeMs })
    } catch {}
  }

  return out
}

function addFile(st, f, commit, field = 'files') {
  st[field] = (st[field] || 0) + 1
  st.files++
  st.bytes += f.size || 0
  if (commit) safeUnlink(f.file)
}

function ids(x) {
  const arr = typeof x === 'string'
    ? [x]
    : [x?.id, x?.phoneNumber, x?.jid, x?.lid, x?.sender, x?.user, x?.numero, x?.number, x?.participant].filter(Boolean)

  const out = []
  for (const v of arr) {
    const a = String(v || '').trim()
    const b = num(a)
    if (a) out.push(a)
    if (b) out.push(b)
  }
  return out
}

function groupOf(x) {
  if (typeof x === 'string') return isGroup(x) ? x : ''
  return [x?.id, x?.jid, x?.from, x?.chat, x?.grupo, x?.group, x?.groupId].find(isGroup) || ''
}

function members(meta = {}) {
  const set = new Set()
  for (const p of meta.participants || []) ids(p).forEach(x => set.add(x))
  return set
}

async function liveGroups(sock, force = false) {
  if (!force) {
    const hit = cache.get('live-groups')
    if (hit) return hit
  }

  if (!sock?.groupFetchAllParticipating) throw new Error('socket indisponível para verificar grupos ativos')

  const raw = await sock.groupFetchAllParticipating()
  const live = new Set()
  const groups = new Map()
  const memberMap = new Map()

  for (const g of Object.values(raw || {})) {
    const id = g?.id || g?.jid
    if (!isGroup(id)) continue
    live.add(id)
    groups.set(id, g)
    memberMap.set(id, members(g))
  }

  const data = { live, groups, memberMap, total: live.size }
  cache.set('live-groups', data)
  return data
}

function userInGroup(user, gid, ctx) {
  if (!gid) return true
  const set = ctx.memberMap.get(gid)
  if (!set || !set.size) return true
  const all = ids(user)
  return !all.length || all.some(x => set.has(x))
}

function cleanObject(data, ctx, forcedGroup = '', depth = 0) {
  if (!data || typeof data !== 'object' || depth > 4) return { data, changed: false, users: 0, groups: 0 }

  let changed = false, users = 0, groups = 0

  if (Array.isArray(data)) {
    const out = []
    for (const item of data) {
      const gid = forcedGroup || groupOf(item)
      if (gid && !ctx.live.has(gid)) { changed = true; groups++; continue }

      const r = cleanObject(item, ctx, gid || forcedGroup, depth + 1)
      if (r.changed) changed = true
      users += r.users
      groups += r.groups
      out.push(r.data)
    }
    return { data: out, changed: changed || out.length !== data.length, users, groups }
  }

  const out = { ...data }
  for (const key of Object.keys(out)) {
    const val = out[key]
    const gid = isGroup(key) ? key : forcedGroup || groupOf(val)

    if (gid && !ctx.live.has(gid)) {
      delete out[key]
      changed = true
      groups++
      continue
    }

    if (Array.isArray(val) && MEMBER_KEYS.has(key)) {
      const before = val.length
      out[key] = val.filter(u => userInGroup(u, gid || forcedGroup, ctx))
      const removed = before - out[key].length
      if (removed) { changed = true; users += removed }
      continue
    }

    if (val && typeof val === 'object') {
      const r = cleanObject(val, ctx, gid || forcedGroup, depth + 1)
      if (r.changed) { out[key] = r.data; changed = true }
      users += r.users
      groups += r.groups
    }
  }

  return { data: out, changed, users, groups }
}

function groupFromFile(file) {
  return (path.basename(file).match(/\d+[-\d]*@g\.us/i) || [])[0] || ''
}

function cleanJson(ctx, commit) {
  const jsons = []
  for (const root of JSON_ROOTS) walk(root, jsons)

  for (const f of jsons.filter(x => x.name.endsWith('.json'))) {
    const r = rel(f.file)
    if (CORE_JSON.has(r) || protectedPath(f.file)) continue

    const inGroupDir = GROUP_DIRS.some(d => f.file === d || inside(f.file, d))
    const gid = groupFromFile(f.file)

    if (gid && inGroupDir && !ctx.live.has(gid)) {
      ctx.stats.deadGroupFiles++
      ctx.stats.deadGroups++
      addFile(ctx.stats, f, commit, 'dbFiles')
      continue
    }

    const data = readJson(f.file)
    if (data === null) continue

    const clean = cleanObject(data, ctx, gid && inGroupDir ? gid : '')
    if (!clean.changed) continue

    const after = jsonSize(clean.data)
    ctx.stats.jsons++
    ctx.stats.deadUsers += clean.users
    ctx.stats.deadGroups += clean.groups
    ctx.stats.records += clean.users + clean.groups
    ctx.stats.bytes += Math.max(0, f.size - after)
    if (commit) writeJson(f.file, clean.data)
  }
}

function tempAllowed(f, nodeCache = false) {
  if (KEEP.has(f.name)) return false

  const ext = path.extname(f.name).toLowerCase()
  const name = f.name.toLowerCase()
  const age = now() - f.mtime

  if (nodeCache) return age > 60 * 1000
  if (name.includes('tmp') || name.includes('temp') || name.includes('cache')) return age > 5 * 60 * 1000
  if (name.endsWith('.log')) return age > 5 * 60 * 1000
  if (TEMP_EXT.has(ext)) return age > 20 * 60 * 1000
  if ((ext === '.json' || !ext) && age > 3 * 60 * 60 * 1000) return true

  return false
}

function cleanTempRoots(ctx, commit) {
  const seen = new Set()

  const scan = (dir, nodeCache = false) => {
    for (const f of walk(dir, [], { allowProtected: nodeCache })) {
      if (seen.has(f.file) || protectedPath(f.file) || !tempAllowed(f, nodeCache)) continue
      seen.add(f.file)
      addFile(ctx.stats, f, commit, nodeCache ? 'nodeCacheFiles' : 'temp')
    }
  }

  for (const dir of TEMP_ROOTS) scan(dir, false)
  for (const dir of NODE_CACHE_ROOTS) scan(dir, true)

  for (const f of walk(ROOT, [], { allowProtected: false })) {
    if (path.dirname(f.file) !== ROOT) continue
    if (!/^(tmp|temp|cache|sticker|output|download)|\.log$/i.test(f.name)) continue
    if (seen.has(f.file) || !tempAllowed(f)) continue
    seen.add(f.file)
    addFile(ctx.stats, f, commit, 'temp')
  }
}

function cleanEmpty(dir, st, opt = {}) {
  if (!exists(dir)) return
  if (!opt.allowProtected && protectedPath(dir)) return

  let list = []
  try { list = fs.readdirSync(dir) } catch { return }

  for (const name of list) {
    const p = path.join(dir, name)
    try { if (fs.statSync(p).isDirectory()) cleanEmpty(p, st, opt) } catch {}
  }

  try {
    if (dir !== ROOT && fs.readdirSync(dir).length === 0) {
      if (safeRmDir(dir)) st.emptyDirs++
    }
  } catch {}
}

function memory() {
  const m = process.memoryUsage()
  return { rss: m.rss, heap: m.heapUsed, heapTotal: m.heapTotal, external: m.external, arrayBuffers: m.arrayBuffers || 0 }
}

function ramAlta(mem = memory()) {
  return Number(mem.rss || 0) >= RAM_LIMIT
}

function tryEnableGC() {
  if (typeof global.gc === 'function') return true
  try {
    v8.setFlagsFromString('--expose_gc')
    global.gc = vm.runInNewContext('gc')
    return typeof global.gc === 'function'
  } catch {
    return false
  }
}

function forceGC(st) {
  if (!tryEnableGC()) return false
  try {
    for (let i = 0; i < 5; i++) global.gc()
    st.gc = true
    return true
  } catch {
    return false
  }
}

function cacheKeysCleanable() {
  try { return cache.keys().filter(k => k !== 'live-groups') } catch { return [] }
}

function compactAntiRateCache(sock, st) {
  try {
    const anti = sock?.__antiRateOverlimit
    const map = anti?.cache
    if (!map || typeof map.forEach !== 'function') return

    let total = 0
    map.forEach((item, jid) => {
      const data = item?.data || item
      if (!data || !Array.isArray(data.participants)) return

      const novo = {
        id: data.id || jid,
        subject: data.subject || '',
        owner: data.owner || data.ownerPn || '',
        subjectOwner: data.subjectOwner || data.subjectOwnerPn || '',
        addressingMode: data.addressingMode || 'lid',
        ephemeralDuration: data.ephemeralDuration || 0,
        participants: data.participants.map(p => ({
          id: p?.id || p?.jid || p?.lid || '',
          phoneNumber: p?.phoneNumber || '',
          admin: p?.admin || null
        }))
      }

      if (item?.data) map.set(jid, { ...item, data: novo, time: Date.now() })
      else map.set(jid, novo)
      total++
    })
    st.groupCacheCompacted = total
  } catch {}
}

function clearKnownGlobalCaches(sock, st) {
  const names = [
    '__BOT_DB_CLEANER_CACHE__',
    '__YUTA_DB_CLEANER_CACHE__',
    '__BOT_TEMP_CACHE__',
    '__YUTA_TEMP_CACHE__'
  ]

  for (const name of names) {
    const c = global[name]
    try {
      if (c && typeof c.flushAll === 'function') { c.flushAll(); st.globalCaches++ }
      else if (c && typeof c.clear === 'function') { c.clear(); st.globalCaches++ }
    } catch {}
  }

  try { sock?.ev?.flush?.(); st.globalCaches++ } catch {}
}

function storageWork(r = {}) {
  return !!(
    Number(r.bytes || 0) > 0 || Number(r.jsons || 0) > 0 || Number(r.files || 0) > 0 ||
    Number(r.temp || 0) > 0 || Number(r.nodeCacheFiles || 0) > 0 || Number(r.records || 0) > 0 ||
    Number(r.deadGroups || 0) > 0 || Number(r.deadUsers || 0) > 0 || Number(r.deadGroupFiles || 0) > 0 ||
    Number(r.emptyDirs || 0) > 0 || Number(r.cacheKeysBefore || 0) > 0
  )
}

function hasWork(r = {}) {
  return storageWork(r) || r.memoryHigh === true
}

function base(mode) {
  return {
    ok: true,
    mode,
    skipped: false,
    groupsOnline: 0,
    bytes: 0,
    jsons: 0,
    files: 0,
    temp: 0,
    nodeCacheFiles: 0,
    dbFiles: 0,
    records: 0,
    deadGroups: 0,
    deadUsers: 0,
    deadGroupFiles: 0,
    emptyDirs: 0,
    cacheKeysBefore: cacheKeysCleanable().length,
    cacheKeysAfter: 0,
    cacheCleared: false,
    groupCacheCompacted: 0,
    globalCaches: 0,
    cleanable: false,
    storageCleanable: false,
    nothingToClean: true,
    memoryHigh: false,
    memoryHighAfter: false,
    restartRecommended: false,
    ramLimitMB: RAM_LIMIT_MB,
    gc: false,
    beforeMemory: memory(),
    afterMemory: null
  }
}

function finish(st) {
  st.cacheKeysAfter = cacheKeysCleanable().length
  st.afterMemory = memory()
  st.memoryHigh = ramAlta(st.beforeMemory)
  st.memoryHighAfter = ramAlta(st.afterMemory)
  st.storageCleanable = storageWork(st)
  st.cleanable = hasWork(st)
  st.nothingToClean = !st.cleanable
  st.restartRecommended = st.memoryHighAfter && Number(st.afterMemory.heap || 0) < Number(st.afterMemory.rss || 0) * 0.45
  return st
}

async function run(sock, commit = false) {
  const ctx = await liveGroups(sock, true)
  ctx.stats = base(commit ? 'clear' : 'check')
  ctx.stats.groupsOnline = ctx.total

  cleanJson(ctx, commit)
  cleanTempRoots(ctx, commit)
  ctx.stats.memoryHigh = ramAlta(ctx.stats.beforeMemory)

  if (!commit) return finish(ctx.stats)

  if (!storageWork(ctx.stats) && !ctx.stats.memoryHigh) {
    ctx.stats.skipped = true
    ctx.stats.cacheKeysAfter = ctx.stats.cacheKeysBefore
    ctx.stats.afterMemory = ctx.stats.beforeMemory
    ctx.stats.cleanable = false
    ctx.stats.nothingToClean = true
    return ctx.stats
  }

  cache.flushAll()
  ctx.stats.cacheCleared = true
  clearKnownGlobalCaches(sock, ctx.stats)
  compactAntiRateCache(sock, ctx.stats)

  for (const dir of [...TEMP_ROOTS, ...GROUP_DIRS]) cleanEmpty(dir, ctx.stats)
  for (const dir of NODE_CACHE_ROOTS) cleanEmpty(dir, ctx.stats, { allowProtected: true })

  forceGC(ctx.stats)

  return finish(ctx.stats)
}

function ramLine(r = {}) {
  const b = r.beforeMemory || {}
  const a = r.afterMemory || b
  const rss = r.mode === 'clear' ? `${MB(b.rss)} MB → ${MB(a.rss)} MB` : `${MB(b.rss)} MB`
  const heap = r.mode === 'clear' ? `${MB(b.heap)} → ${MB(a.heap)} MB heap` : `${MB(b.heap)} MB heap`
  return `${rss} (${heap})`
}

function statusLimpo(r = {}) {
  return !hasWork(r) || r.nothingToClean === true || r.skipped === true
}

function formatDbReport(r = {}, prefix = '.', botName = 'Bot') {
  const check = r.mode === 'check'
  const limpo = statusLimpo(r)
  const titulo = check ? 'ᴅʙ ᴄʜᴇᴄᴋ' : 'ᴅʙ ᴄʟᴇᴀʀ'
  const acao = check ? 'ᴘᴏᴅᴇ ʟɪᴍᴘᴀʀ' : 'ʟɪᴍᴘᴏ'
  const cacheLine = `${r.cacheKeysBefore || 0} → ${r.cacheKeysAfter || 0}`

  if (limpo) {
    return `🧹 *${botName} ${titulo}*\n\n` +
      `📦 *ɢʀᴜᴘᴏs ᴀᴛɪᴠᴏs* ↝ ${r.groupsOnline || 0}\n` +
      `💾 *ᴘᴇɴᴅᴇɴᴛᴇ* ↝ 0.00 MB\n` +
      `🧩 *ɴᴏᴅᴇ ᴄᴀᴄʜᴇ* ↝ 0\n` +
      `🗂️ *ᴊsᴏɴs ᴀᴊᴜsᴛᴀᴅᴏs* ↝ 0\n` +
      `🗑️ *ᴛᴇᴍᴘᴏʀᴀ́ʀɪᴏs* ↝ 0\n` +
      `🏚️ *ɢʀᴜᴘᴏs ʀᴇᴍᴏᴠɪᴅᴏs* ↝ 0\n` +
      `👥 *ᴍᴇᴍʙʀᴏs ғᴏʀᴀ* ↝ 0\n` +
      `📁 *ᴅʙs ʀᴇᴍᴏᴠɪᴅᴏs* ↝ 0\n` +
      `🧊 *ᴄᴀᴄʜᴇ* ↝ 0 → 0\n` +
      `🧠 *ʀᴀᴍ* ↝ ${ramLine(r)}\n\n` +
      `✅ *sᴛᴀᴛᴜs* ↝ ᴛᴜᴅᴏ ʟɪᴍᴘᴏ, ɴᴀ̃ᴏ ᴘʀᴇᴄɪsᴀ ʀᴏᴅᴀʀ ᴀᴜᴛᴏʟɪᴍᴘᴇᴢᴀ.`
  }

  const ramAltaTxt = r.memoryHigh ? `⚠️ *ʀᴀᴍ ᴀʟᴛᴀ* ↝ ᴀᴄɪᴍᴀ ᴅᴇ ${r.ramLimitMB || RAM_LIMIT_MB} MB\n` : ''
  const restartTxt = r.restartRecommended ? `🔁 *ᴏʙs* ↝ ʀss ᴀɪɴᴅᴀ ᴀʟᴛᴀ; ᴘᴀʀᴀ ʙᴀɪxᴀʀ ɴᴏ ᴘᴀɪɴᴇʟ, sᴏ́ ʀᴇɪɴɪᴄɪᴀɴᴅᴏ ᴏ ᴘʀᴏᴄᴇssᴏ.\n` : ''

  return `🧹 *${botName} ${titulo}*\n\n` +
    `📦 *ɢʀᴜᴘᴏs ᴀᴛɪᴠᴏs* ↝ ${r.groupsOnline || 0}\n` +
    `💾 *${acao}* ↝ ${MB(r.bytes)} MB\n` +
    `🧩 *ɴᴏᴅᴇ ᴄᴀᴄʜᴇ* ↝ ${r.nodeCacheFiles || 0}\n` +
    `🗂️ *ᴊsᴏɴs ᴀᴊᴜsᴛᴀᴅᴏs* ↝ ${r.jsons || 0}\n` +
    `🗑️ *ᴛᴇᴍᴘᴏʀᴀ́ʀɪᴏs* ↝ ${r.temp || 0}\n` +
    `🏚️ *ɢʀᴜᴘᴏs ʀᴇᴍᴏᴠɪᴅᴏs* ↝ ${r.deadGroups || 0}\n` +
    `👥 *ᴍᴇᴍʙʀᴏs ғᴏʀᴀ* ↝ ${r.deadUsers || 0}\n` +
    `📁 *ᴅʙs ʀᴇᴍᴏᴠɪᴅᴏs* ↝ ${r.deadGroupFiles || 0}\n` +
    `🧊 *ᴄᴀᴄʜᴇ* ↝ ${cacheLine}\n` +
    `${r.groupCacheCompacted ? `🧩 *ᴄᴀᴄʜᴇ ᴅᴇ ɢʀᴜᴘᴏs* ↝ ${r.groupCacheCompacted} ᴄᴏᴍᴘᴀᴄᴛᴀᴅᴏs\n` : ''}` +
    `🧠 *ʀᴀᴍ* ↝ ${ramLine(r)}\n` +
    `${ramAltaTxt}` +
    `${r.gc ? `♻️ *ɢᴄ* ↝ ᴇxᴇᴄᴜᴛᴀᴅᴏ\n` : `♻️ *ɢᴄ* ↝ ɴᴀ̃ᴏ ᴀᴛɪᴠᴏ\n`}` +
    `${restartTxt}` +
    `${check ? `\n⚡ *ᴀᴘʟɪᴄᴀʀ* ↝ ${prefix}db clear` : `\n✅ *ᴏᴛɪᴍɪᴢᴀçᴀ̃ᴏ ғɪɴᴀʟɪᴢᴀᴅᴀ*`}`
}

export const dbCheck = sock => run(sock, false);
export const dbClear = sock => run(sock, true);
export { formatDbReport, hasWork, cache };
