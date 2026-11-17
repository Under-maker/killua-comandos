import perguntasExtras from './quiz-perguntas.js'
import fs from 'fs'
import path from 'path'

const perguntas = [
  { p: 'Qual é o nome do protagonista de Hunter x Hunter?', o: ['Gon Freecss', 'Killua Zoldyck', 'Kurapika', 'Leorio'], r: 0 },
  { p: 'Qual é o sobrenome de Killua?', o: ['Freecss', 'Zoldyck', 'Kurta', 'Lucilfer'], r: 1 },
  { p: 'Quantas esferas existem em Dragon Ball?', o: ['5', '6', '7', '8'], r: 2 },
  { p: 'Qual é o sonho de Luffy?', o: ['Ser Hokage', 'Ser o Rei dos Piratas', 'Ser o mais forte', 'Encontrar as Esferas'], r: 1 },
  { p: 'Quem é o rival de Naruto?', o: ['Sasuke', 'Shikamaru', 'Neji', 'Gaara'], r: 0 },
  { p: 'Qual é o nome da espada de Tanjiro?', o: ['Zangetsu', 'Nichirin', 'Excalibur', 'Enma'], r: 1 },
  { p: 'Em Death Note, quem encontra o caderno?', o: ['L', 'Near', 'Light Yagami', 'Mello'], r: 2 },
  { p: 'Qual é o nome do irmão de Edward Elric?', o: ['Alphonse', 'Roy', 'Ling', 'Scar'], r: 0 },
  { p: 'Quem é o capitão dos Chapéus de Palha?', o: ['Zoro', 'Sanji', 'Luffy', 'Usopp'], r: 2 },
  { p: 'Qual é o nome do professor de Naruto?', o: ['Jiraiya', 'Kakashi', 'Iruka', 'Orochimaru'], r: 1 },
  { p: 'Qual é a transformação Saiyajin clássica de cabelo dourado?', o: ['Super Saiyajin', 'Kaioken', 'Instinto Superior', 'Ozaru'], r: 0 },
  { p: 'Qual é o nome do protagonista de Bleach?', o: ['Ichigo Kurosaki', 'Aizen', 'Renji', 'Uryu'], r: 0 },
  { p: 'Em Pokémon, qual é o Pokémon mais conhecido de Ash?', o: ['Charmander', 'Pikachu', 'Bulbasaur', 'Squirtle'], r: 1 },
  { p: 'Qual é o nome do protagonista de Jujutsu Kaisen?', o: ['Megumi', 'Gojo', 'Yuji Itadori', 'Yuta'], r: 2 },
  { p: 'Quem é o irmão mais velho de Killua?', o: ['Gon', 'Illumi', 'Alluka', 'Kalluto'], r: 1 },
  { p: 'Qual é o nome do protagonista de Tokyo Ghoul?', o: ['Kaneki', 'Touka', 'Hide', 'Juuzou'], r: 0 },
  { p: 'Qual é o nome do vilão principal da primeira parte de JoJo?', o: ['Dio', 'Jotaro', 'Joseph', 'Kira'], r: 0 },
  { p: 'Qual é o nome do titã de Eren?', o: ['Titã Colossal', 'Titã de Ataque', 'Titã Fêmea', 'Titã Bestial'], r: 1 }
]

perguntas.push(...perguntasExtras)

const arquivo = path.join(process.cwd(), 'src/dados/func/quiz-state.json')

function ler() {
  try {
    return JSON.parse(fs.readFileSync(arquivo, 'utf8'))
  } catch {
    return { sessoes: {}, placares: {} }
  }
}

function salvar(db) {
  fs.mkdirSync(path.dirname(arquivo), { recursive: true })
  fs.writeFileSync(arquivo, JSON.stringify(db, null, 2))
}

export default {
  name: 'quiz',
  aliases: ['quiz-responder'],
  description: 'Quiz automático com pontuação.',

  async execute(ctx) {
    const {
      yuta, from, sender, pushname, prefix,
      args = [], command, reply, info, relayButtonMessage
    } = ctx

    const db = ler()
    const usuario = sender || 'desconhecido'
    const nome = pushname || 'Jogador'

    if (command === 'quiz-responder') {
      const token = String(args[0] || '')
      const indice = Number(args[1])
      const sessao = db.sessoes[from]

      if (!sessao || sessao.token !== token)
        return reply('⌛ Essa pergunta já foi substituída. Peça outra com .quiz.')

      if (!Number.isInteger(indice) || indice < 0 || indice >= sessao.opcoes.length)
        return reply('❌ Resposta inválida.')

      if (sessao.respondidos?.[usuario])
        return reply('⚠️ Você já respondeu essa pergunta!')

      sessao.respondidos = sessao.respondidos || {}
      sessao.respondidos[usuario] = true

      db.placares[from] = db.placares[from] || {}
      db.placares[from][usuario] = db.placares[from][usuario] || {
        nome,
        pontos: 0
      }

      const acertou = indice === sessao.resposta

      if (acertou) {
        db.placares[from][usuario].pontos++
      }

      db.placares[from][usuario].nome = nome
      salvar(db)

      const correta = sessao.opcoes[sessao.resposta]

      return reply(
        acertou
          ? `✅ *RESPOSTA CORRETA!*\n\n🎯 ${nome}, você acertou!\n🏆 Pontos: ${db.placares[from][usuario].pontos}`
          : `❌ *RESPOSTA ERRADA!*\n\n👤 ${nome}\n✅ Resposta correta: *${correta}*\n🏆 Pontos: ${db.placares[from][usuario].pontos}`
      )
    }

    const acao = String(args[0] || '').toLowerCase()

    if (acao === 'placar') {
      const placar = Object.entries(db.placares[from] || {})
        .sort((a, b) => b[1].pontos - a[1].pontos)
        .slice(0, 10)

      if (!placar.length)
        return reply('🏆 Ainda não existem pontos registrados neste chat.')

      return reply(
        `🏆 *PLACAR DO QUIZ*\n\n` +
        placar.map(([id, jogador], i) =>
          `${i + 1}º ${jogador.nome || id.split('@')[0]} — *${jogador.pontos} pontos*`
        ).join('\n')
      )
    }

    const anterior = db.sessoes[from]?.pergunta
    let pergunta

    const disponiveis = perguntas.filter(p => p.p !== anterior)
    pergunta = disponiveis[Math.floor(Math.random() * disponiveis.length)]

    const token = `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`

    db.sessoes[from] = {
      token,
      pergunta: pergunta.p,
      opcoes: pergunta.o,
      resposta: pergunta.r,
      respondidos: {}
    }

    salvar(db)

    const rows = pergunta.o.map((opcao, i) => ({
      title: `${String.fromCharCode(65 + i)}. ${opcao}`,
      id: `${prefix}quiz-responder ${token} ${i}`
    }))

    await relayButtonMessage(yuta, from, {
      interactiveMessage: {
        body: {
          text:
            `🧠 *QUIZ KILLUA ZOLDYCK*\n\n` +
            `❓ *${pergunta.p}*\n\n` +
            `🎯 Escolha uma alternativa abaixo.\n` +
            `🏆 Cada acerto vale 1 ponto.`
        },
        footer: {
          text: '☠️ KILLUA ZOLDYCK BOT'
        },
        nativeFlowMessage: {
          buttons: [{
            name: 'single_select',
            buttonParamsJson: JSON.stringify({
              title: '🧠 RESPONDER QUIZ',
              sections: [{
                title: 'ALTERNATIVAS',
                rows
              }]
            })
          }],
          messageParamsJson: '{}',
          messageVersion: 1
        }
      }
    }, { quoted: info })
  }
}
