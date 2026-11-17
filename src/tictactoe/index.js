import fs from 'fs'
import path from 'path'

const DB_DIR = './src/tictactoe/db'

const EMPTY_BOARD = () => [
  ['1️⃣', '2️⃣', '3️⃣'],
  ['4️⃣', '5️⃣', '6️⃣'],
  ['7️⃣', '8️⃣', '9️⃣']
]

function ensureDir() {
  if (!fs.existsSync(DB_DIR)) fs.mkdirSync(DB_DIR, { recursive: true })
}

function filePath(session = '') {
  ensureDir()
  const safe = String(session || 'default').replace(/[\\/]/g, '_')
  return path.join(DB_DIR, `${safe}.json`)
}

function baseGame(session = '') {
  return {
    status: true,
    session,
    turn: 'X',
    X: null,
    O: null,
    isWin: false,
    winner: null,
    nine_push: [],
    _matrix: EMPTY_BOARD()
  }
}

function normalizeGame(game, session = '') {
  const base = baseGame(session)
  const g = game && typeof game === 'object' ? { ...base, ...game } : base

  if (!Array.isArray(g._matrix) || g._matrix.length !== 3) g._matrix = EMPTY_BOARD()
  for (let i = 0; i < 3; i++) {
    if (!Array.isArray(g._matrix[i]) || g._matrix[i].length !== 3) g._matrix[i] = EMPTY_BOARD()[i]
  }

  if (!Array.isArray(g.nine_push)) {
    g.nine_push = g._matrix.flat().filter(v => v === '❌' || v === '⭕')
  }

  g.session = session || g.session || ''
  g.turn = g.turn === 'O' ? 'O' : 'X'
  g.status = g.status === false ? false : true
  g.isWin = !!g.isWin
  g.winner = g.winner || null

  return g
}

function saveGame(session, game) {
  const file = filePath(session)
  const data = normalizeGame(game, session)
  const tmp = `${file}.tmp`
  fs.writeFileSync(tmp, JSON.stringify(data, null, 2))
  fs.renameSync(tmp, file)
  return data
}

function readGame(session) {
  const file = filePath(session)
  if (!fs.existsSync(file)) {
    const created = baseGame(session)
    return saveGame(session, created)
  }

  try {
    const raw = fs.readFileSync(file, 'utf8').trim()
    if (!raw) throw new Error('empty file')
    return normalizeGame(JSON.parse(raw), session)
  } catch {
    const created = baseGame(session)
    return saveGame(session, created)
  }
}

function winnerFromMatrix(matrix) {
  const lines = [
    [matrix[0][0], matrix[0][1], matrix[0][2]],
    [matrix[1][0], matrix[1][1], matrix[1][2]],
    [matrix[2][0], matrix[2][1], matrix[2][2]],
    [matrix[0][0], matrix[1][0], matrix[2][0]],
    [matrix[0][1], matrix[1][1], matrix[2][1]],
    [matrix[0][2], matrix[1][2], matrix[2][2]],
    [matrix[0][0], matrix[1][1], matrix[2][2]],
    [matrix[0][2], matrix[1][1], matrix[2][0]]
  ]

  for (const line of lines) {
    if (line.every(v => v === '❌')) return 'X'
    if (line.every(v => v === '⭕')) return 'O'
  }

  return null
}

function positionToXY(number) {
  const n = Number(number)
  if (!Number.isInteger(n) || n < 1 || n > 9) return null
  const idx = n - 1
  return [Math.floor(idx / 3), idx % 3]
}

function setGame(session) {
  return readGame(session)
}

function validmove(number, session) {
  const pos = positionToXY(number)
  const game = readGame(session)

  if (!pos) {
    return { ...game, moveOk: false, reason: 'invalid_position' }
  }

  if (game.isWin) {
    return { ...game, moveOk: false, reason: 'game_finished' }
  }

  const [x, y] = pos
  const atual = game._matrix[x][y]

  if (atual === '❌' || atual === '⭕') {
    return { ...game, moveOk: false, reason: 'occupied' }
  }

  const playerTurn = game.turn === 'O' ? 'O' : 'X'
  const marker = playerTurn === 'X' ? '❌' : '⭕'

  game._matrix[x][y] = marker
  game.nine_push = game._matrix.flat().filter(v => v === '❌' || v === '⭕')

  const winner = winnerFromMatrix(game._matrix)
  if (winner) {
    game.isWin = true
    game.winner = winner
  } else if (game.nine_push.length >= 9) {
    game.isWin = true
    game.winner = 'SERI'
  } else {
    game.turn = playerTurn === 'X' ? 'O' : 'X'
  }

  return { ...saveGame(session, game), moveOk: true, reason: null }
}

export { setGame, validmove }
