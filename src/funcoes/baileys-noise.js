const GUARD_KEY = Symbol.for('yuta.baileys.noise.guard')

const STARTS = [
  'closing session: sessionentry',
  'removing old closed session: sessionentry',
  'closing stale open session',
  'closing open session in favor of incoming prekey bundle',
  'error: rate-overlimit',
  'error: not-acceptable',
  'bad mac',
  'failed to decrypt message',
  'no session found to decrypt message',
  'no matching sessions found for message',
  'decrypted message with closed session',
  'message from an old counter',
  'ignoring message with duplicate id',
  '[anti-rate yuta]',
  '[anti-rate subbot'
]

const CONTINUES = [
  '@whiskeysockets/baileys',
  'assertnodeerrorfree',
  'assertsessions',
  'messages-send.js',
  'generic-utils.js',
  'auth-utils.js',
  'socket.js',
  'sessionentry',
  '_chains:',
  'registrationid:',
  'currentratchet:',
  'ephemeralkeypair:',
  'pubkey: <buffer',
  'privkey: <buffer',
  'lastremoteephemeralkey:',
  'previouscounter:',
  'rootkey:',
  'indexinfo:',
  'basekey:',
  'basekeytype:',
  'remoteidentitykey:',
  'pendingprekey:',
  'signedkeyid:',
  'prekeyid:',
  'data: 429',
  'data: 406',
  'isboom: true',
  'isserver: true',
  'internal server error',
  'not-acceptable',
  'rate-overlimit'
]

const textOf = chunk => {
  try {
    return (Buffer.isBuffer(chunk) ? chunk.toString('utf8') : String(chunk || ''))
      .replace(/\x1b\[[0-?]*[ -/]*[@-~]/g, '')
      .toLowerCase()
  } catch {
    return ''
  }
}

const hasAny = (txt, list) => list.some(word => txt.includes(word))

function aplicarFiltroBaileysNoise() {
  if (global[GUARD_KEY]?.active) return global[GUARD_KEY]

  const state = {
    active: true,
    until: 0,
    stdout: process.stdout.write.bind(process.stdout),
    stderr: process.stderr.write.bind(process.stderr)
  }

  const shouldIgnore = chunk => {
    const txt = textOf(chunk)
    if (!txt) return false

    const start = hasAny(txt, STARTS)
    const cont = hasAny(txt, CONTINUES) || /^[\s{},\[\]():.'"`|0-9a-z_@/\\-]+$/i.test(txt.trim())

    if (start) {
      state.until = Date.now() + 2500
      return true
    }

    if (Date.now() < state.until && cont) return true

    return false
  }

  const filter = original => function(chunk, encoding, callback) {
    const cb = typeof encoding === 'function' ? encoding : callback

    if (shouldIgnore(chunk)) {
      if (typeof cb === 'function') cb()
      return true
    }

    return original(chunk, encoding, callback)
  }

  process.stdout.write = filter(state.stdout)
  process.stderr.write = filter(state.stderr)

  global[GUARD_KEY] = state
  return state
}

export const ehNoiseBaileys = chunk => hasAny(textOf(chunk), STARTS) || hasAny(textOf(chunk), CONTINUES);
export { aplicarFiltroBaileysNoise };
