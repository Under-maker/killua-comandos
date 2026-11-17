export default {
  name: 'bam',
  aliases: ['banfake'],
  description: 'Faz uma pegadinha de falso banimento.',

  async execute(ctx) {
    const { yuta, from, info, quoted } = ctx;

    if (!from?.endsWith('@g.us')) {
      return ctx.reply('❌ Esse comando só funciona em grupos.');
    }

    const msg = info?.message || {};
    const contexto =
      msg.extendedTextMessage?.contextInfo ||
      msg.imageMessage?.contextInfo ||
      msg.videoMessage?.contextInfo ||
      msg.documentMessage?.contextInfo ||
      {};

    const mencoes = Array.isArray(contexto.mentionedJid)
      ? contexto.mentionedJid
      : [];

    const alvo = mencoes[0] || contexto.participant || quoted?.sender;

    if (!alvo) {
      return ctx.reply(
        '⚠️ Marque alguém ou responda à mensagem da pessoa!\n\nUso: #bam @pessoa'
      );
    }

    const numero = alvo.split('@')[0].split(':')[0];

    await yuta.sendMessage(from, {
      text:
        `☠️ *SISTEMA DE MODERAÇÃO*\n\n` +
        `⚠️ Atenção, @${numero}!\n\n` +
        `Foi identificada uma violação das regras do grupo.\n\n` +
        `🚨 *STATUS: BANIMENTO PENDENTE*\n\n` +
        `⏳ Você tem 1 minuto para suas últimas palavras...\n\n` +
        `👁️ Aguarde a decisão da administração.\n\n` +
        `☠️ KILLUA ZOLDYCK BOT`,
      mentions: [alvo]
    });

    await new Promise(resolve => setTimeout(resolve, 15000));

    await yuta.sendMessage(from, {
      text:
        `😂 *CAIU NA PEGADINHA!*\n\n` +
        `KKKKKKKKKKKKKK 🤣🤣\n\n` +
        `Relaxa, @${numero}! Você não vai ser banido!\n\n` +
        `Era só uma brincadeira do Killua. 😈\n\n` +
        `☠️ *KILLUA ZOLDYCK BOT*`,
      mentions: [alvo]
    });
  }
};
