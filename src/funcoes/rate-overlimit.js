const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
const isGroup = jid => String(jid || '').endsWith('@g.us')
const now = () => Date.now()

function errorCode(err = {}) {
  return Number(
    err?.data ||
    err?.status ||
    err?.statusCode ||
    err?.output?.statusCode ||
    err?.response?.status ||
    0
  )
}

function errorText(err = {}) {
  return String(
    err?.message ||
    err?.output?.payload?.message ||
    err?.output?.payload?.error ||
    err?.response?.data?.message ||
    err?.response?.data?.error ||
    err ||
    ''
  ).toLowerCase()
}

function isRateOverlimitError(err = {}) {
  const code = errorCode(err)
  const txt = errorText(err)

  return (
    code === 429 ||
    code === 406 ||
    txt.includes('rate-overlimit') ||
    txt.includes('rate overlimit') ||
    txt.includes('rate limit') ||
    txt.includes('too many requests') ||
    txt.includes('not-acceptable')
  )
}

function fakeMetadata(jid) {
  return {
    id: jid,
    subject: '',
    desc: '',
    participants: [],
    addressingMode: 'lid',
    __fallback: true
  }
}


function cleanParticipantJid(jid) {
  if (!jid) return null
  let raw = String(jid).trim()
  if (!raw) return null
  raw = raw.replace(/:\d+(?=@)/, '')
  if (raw.includes('@')) return raw
  const num = raw.replace(/\D/g, '')
  return num ? `${num}@s.whatsapp.net` : null
}

function participantJids(participant = {}) {
  const ids = [
    typeof participant === 'string' ? participant : null,
    participant?.id,
    participant?.jid,
    participant?.lid,
    participant?.phoneNumber,
    participant?.phone,
    participant?.user
  ].map(cleanParticipantJid).filter(Boolean)

  return [...new Set(ids)]
}

function sameParticipant(a, b) {
  const aIds = participantJids(a)
  const bIds = participantJids(b)

  return aIds.some(x => bIds.includes(x))
}

function createAntiRateOverlimit(options = {}) {
  const ttl = Number(options.ttlMs || 10 * 60 * 1000)
  const stale = Number(options.staleMs || 6 * 60 * 60 * 1000)
  const cooldownMs = Number(options.cooldownMs || 45 * 1000)
  const metaDelay = Number(options.minIntervalMs || 1600)
  const groupDelay = Number(options.sendIntervalGroupMs || 900)
  const privateDelay = Number(options.sendIntervalPrivateMs || 250)

  const cache = new Map()
  const pending = new Map()

  let lastMeta = 0
  let cooldownUntil = 0
  let warming = null
  let warmed = false

  const setCooldown = () => {
    cooldownUntil = now() + cooldownMs
  }

  const waitTurn = async (last, delay) => {
    const rest = delay - (now() - last())
    if (rest > 0) await sleep(rest)
  }

  const save = (jid, data) => {
    jid = String(jid || data?.id || data?.jid || '')
    if (!isGroup(jid) || !data) return null

    const metadata = {
      ...data,
      id: data.id || jid,
      participants: Array.isArray(data.participants) ? data.participants : []
    }

    cache.set(jid, { data: metadata, time: now() })
    return metadata
  }

  const saveMany = groups => {
    if (!groups) return 0

    let total = 0
    const list = Array.isArray(groups) ? groups : Object.values(groups)

    for (const group of list) {
      if (save(group?.id || group?.jid, group)) total++
    }

    return total
  }

  const get = (jid, allowStale = true) => {
    const item = cache.get(String(jid || ''))
    if (!item) return null

    const age = now() - item.time
    if (age <= ttl || (allowStale && age <= stale)) return item.data

    return null
  }

  const cachedGroupMetadata = async jid => {
    jid = String(jid || '')
    if (!isGroup(jid)) return undefined
    return get(jid, true) || fakeMetadata(jid)
  }

  const safeGroupMetadata = async (sock, jid, original, args = []) => {
    jid = String(jid || '')

    if (!isGroup(jid)) return original(jid, ...args)

    const cached = get(jid, false)
    if (cached) return cached

    const old = get(jid, true)
    if (old || now() < cooldownUntil) return old || fakeMetadata(jid)
    if (pending.has(jid)) return pending.get(jid)

    const task = (async () => {
      try {
        await waitTurn(() => lastMeta, metaDelay)
        lastMeta = now()
        return save(jid, await original(jid, ...args)) || fakeMetadata(jid)
      } catch (err) {
        if (!isRateOverlimitError(err)) throw err
        setCooldown()
        return get(jid, true) || fakeMetadata(jid)
      } finally {
        pending.delete(jid)
      }
    })()

    pending.set(jid, task)
    return task
  }

  const warmupGroupCache = async (sock, originalFetchAll) => {
    if (warmed || warming || !originalFetchAll) return warming

    warming = (async () => {
      try {
        await sleep(1800)
        saveMany(await originalFetchAll())
        warmed = true
      } catch (err) {
        if (!isRateOverlimitError(err)) return
        setCooldown()
      } finally {
        warming = null
      }
    })()

    return warming
  }

  const updateByGroupUpdate = update => {
    const jid = update?.id || update?.jid
    if (!isGroup(jid)) return

    save(jid, {
      ...(get(jid, true) || fakeMetadata(jid)),
      ...update,
      id: jid
    })
  }

  const updateByParticipants = event => {
    const jid = event?.id || event?.jid
    const users = Array.isArray(event?.participants) ? event.participants : []
    if (!isGroup(jid) || !users.length) return

    const old = get(jid, true) || fakeMetadata(jid)
    const participants = Array.isArray(old.participants) ? [...old.participants] : []

    for (const user of users) {
      const ids = participantJids(user)
      if (!ids.length) continue

      const i = participants.findIndex(p => sameParticipant(p, user))
      const baseParticipant = typeof user === 'string'
        ? { id: ids[0], phoneNumber: ids.find(id => id.endsWith('@s.whatsapp.net')) || undefined, lid: ids.find(id => id.endsWith('@lid')) || undefined }
        : { ...user, id: user.id || ids[0] }

      if (event.action === 'remove') {
        if (i >= 0) participants.splice(i, 1)
        continue
      }

      if (event.action === 'add') {
        if (i < 0) participants.push({ ...baseParticipant, admin: null })
        continue
      }

      if (event.action === 'promote' || event.action === 'demote') {
        const admin = event.action === 'promote' ? 'admin' : null
        if (i >= 0) participants[i] = { ...participants[i], ...baseParticipant, admin }
        else participants.push({ ...baseParticipant, admin })
      }
    }

    save(jid, { ...old, id: jid, participants })
  }


  const enqueueSend = async (_jid, task) => {
    try {
      return await task()
    } catch (err) {
      if (!isRateOverlimitError(err)) throw err
      setCooldown()
      return null
    }
  }

  return {
    cache,
    setCache: save,
    setManyCache: saveMany,
    getCache: get,
    cachedGroupMetadata,
    safeGroupMetadata,
    warmupGroupCache,
    updateByGroupUpdate,
    updateByParticipants,
    enqueueSend,
    markRateLimit: setCooldown,
    isRateOverlimitError
  }
}

function aplicarAntiRateOverlimit(sock, antiRate) {
  if (!sock || !antiRate || sock.__antiRateOverlimitInstalled) return sock

  sock.__antiRateOverlimitInstalled = true
  sock.__antiRateOverlimit = antiRate

  const groupMetadata = sock.groupMetadata?.bind(sock)
  const fetchAll = sock.groupFetchAllParticipating?.bind(sock)
  const sendMessage = sock.sendMessage?.bind(sock)
  const relayMessage = sock.relayMessage?.bind(sock)

  if (groupMetadata) {
    sock.groupMetadata = (jid, ...args) => antiRate.safeGroupMetadata(sock, jid, groupMetadata, args)
  }

  if (fetchAll) {
    sock.groupFetchAllParticipating = async (...args) => {
      try {
        const groups = await fetchAll(...args)
        antiRate.setManyCache(groups)
        return groups
      } catch (err) {
        if (!antiRate.isRateOverlimitError(err)) throw err
        antiRate.markRateLimit()
        return {}
      }
    }
  }

  if (sendMessage) {
    sock.sendMessage = (jid, content, options = {}) => {
      return antiRate.enqueueSend(jid, () => sendMessage(jid, content, options))
    }
  }

  if (relayMessage) {
    sock.relayMessage = (jid, message, options = {}) => {
      return antiRate.enqueueSend(jid, () => relayMessage(jid, message, options))
    }
  }

  if (sock.ev?.on) {
    sock.ev.on('connection.update', update => {
      if (update?.connection === 'open') {
        antiRate.warmupGroupCache(sock, fetchAll).catch(() => {})
      }
    })

    sock.ev.on('groups.update', updates => {
      for (const update of Array.isArray(updates) ? updates : [updates]) {
        antiRate.updateByGroupUpdate(update)
      }
    })

    sock.ev.on('group-participants.update', event => antiRate.updateByParticipants(event))
  }

  return sock
}

export { createAntiRateOverlimit, aplicarAntiRateOverlimit, isRateOverlimitError };
