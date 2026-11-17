export default {
  name: 'enquete',
  aliases: ['votacao', 'votar'],
  description: 'Cria uma enquete de escolha única.',

  async execute(ctx) {
    const { yuta, from, q, info, reply } = ctx

    const partes = String(q || '')
      .split('|')
      .map(v => v.trim())
      .filter(Boolean)

    if (partes.length < 3) {
      return reply(
        `📊 *CRIAR ENQUETE*\n\n` +
        `Use:\n` +
        `.enquete Sua pergunta | Opção 1 | Opção 2\n\n` +
        `Exemplo:\n` +
        `.enquete Melhor anime? | Naruto | One Piece | Hunter x Hunter`
      )
    }

    const pergunta = partes.shift()
    const opcoes = partes

    if (opcoes.length < 2 || opcoes.length > 12) {
      return reply('❌ A enquete precisa ter entre 2 e 12 opções.')
    }

    if (pergunta.length > 255 || opcoes.some(o => o.length > 100)) {
      return reply('❌ A pergunta deve ter até 255 caracteres e cada opção até 100.')
    }

    try {
      await yuta.sendMessage(from, {
        poll: {
          name: pergunta,
          values: opcoes,
          selectableCount: 1
        }
      }, { quoted: info })

    } catch (error) {
      console.error('[ENQUETE]', error?.message || error)
      return reply('❌ Não consegui criar a enquete. Tente novamente.')
    }
  }
}
