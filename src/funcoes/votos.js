import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const VOTACAO_DIR = path.resolve(__dirname, '../dados/grupos/votacao')
const VOTOS_DIR = path.join(VOTACAO_DIR, 'votos')
const P_VOTOS_DIR = path.join(VOTACAO_DIR, 'p_votos')
const VOTACAO_FILE = path.join(VOTACAO_DIR, 'votacao.json')

function ensureVoteStorage() {
  fs.mkdirSync(VOTOS_DIR, { recursive: true })
  fs.mkdirSync(P_VOTOS_DIR, { recursive: true })

  if (!fs.existsSync(VOTACAO_FILE)) {
    fs.writeFileSync(VOTACAO_FILE, '[]')
  }
}

function readJson(file, fallback = []) {
  try {
    ensureVoteStorage()
    return JSON.parse(fs.readFileSync(file, 'utf8'))
  } catch {
    return fallback
  }
}

function writeJson(file, data) {
  ensureVoteStorage()
  fs.writeFileSync(file, JSON.stringify(data, null, 2))
}

function getVotacao() {
  const data = readJson(VOTACAO_FILE, [])
  return Array.isArray(data) ? data : []
}

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

function delVoto(idGroup) {
  const votacao = getVotacao().filter(id => id !== idGroup)
  writeJson(VOTACAO_FILE, votacao)

  fs.rmSync(path.join(VOTOS_DIR, `${idGroup}.json`), { force: true })
  fs.rmSync(path.join(P_VOTOS_DIR, `${idGroup}.json`), { force: true })
}

async function addVoto(ID, _valor1, _valor2, _valor3, _valor4, reply = () => {}) {
  const votacao = getVotacao()

  if (!votacao.includes(ID)) votacao.push(ID)

  writeJson(VOTACAO_FILE, votacao)
  writeJson(path.join(P_VOTOS_DIR, `${ID}.json`), [])
  writeJson(path.join(VOTOS_DIR, `${ID}.json`), [])

  await sleep(2000)

  const votosFile = path.join(VOTOS_DIR, `${ID}.json`)
  const votos = readJson(votosFile, [])

  votos.push({
    razao: _valor1 || '-',
    votos: `${String(_valor2 || '').trim()}@s.whatsapp.net`,
    votos2: `${String(_valor3 || '').trim()}@s.whatsapp.net`,
    duracao: _valor4
  })

  writeJson(votosFile, votos)

  setTimeout(() => {
    const pVotosFile = path.join(P_VOTOS_DIR, `${ID}.json`)
    const voto = readJson(pVotosFile, [])
    const verdade = voto.filter(dds => dds.votacao === '1')
    const falso = voto.filter(dds => dds.votacao === '2')

    reply(`Votação encerrada.\n\nTotal de votos pro 1° Participante:  ${verdade.length}.\nTotal de votos pro 2° Participante:  ${falso.length}`)

    fs.rmSync(votosFile, { force: true })
    fs.rmSync(pVotosFile, { force: true })

    const atualizado = getVotacao().filter(id => id !== ID)
    writeJson(VOTACAO_FILE, atualizado)
  }, Number(_valor4 || 0) * 60 * 1000)
}

export { delVoto, addVoto }
