import fs from "node:fs";
import path from "node:path";

const nomes = [
  "chupar", "bater", "espancar", "comer-cu", "comercu", "gozar", "humilhar",
  "mamar", "mijar", "punheta", "siririca", "surubao", "surubão", "transar", "dar", "melar", "morder", "estuprar", "comedorcasadas", "amamentar", "chuparpeito"
];

const frases = {
  dar: "@Under não resistiu e deu a buceta para @alvo, sentou e rebolou até as pernas ficarem bambas 🤤🔥",
  melar: "@under ficou com tesão ao ver @alvo e ficou com a calcinha toda melada 🤤🔥",
  chupar: "«🔥 @Under chupou a bct da @elfo até ela gozar na sua boca🤤.»",
  bater: "«🔥 @Under bateu forte na raba da @elfo.»",
espancar: "☠️ @Under perdeu a paciência e espancou @alvo! Foi tanta surra, e a fdp ainda ta pedindo mais tapa na cara! 😶‍🌫️🔥",
  "comer-cu": "«😈 @Under comeu sem dó o cu de @elfo, botou sem cuspir ainda.»",
  gozar: "«😈 @Under gozou gostoso na cara de @elfo, quer no peito ou na boca? 🤤.»",
  humilhar: "«😈 @Under hulmilhou o @elfo, e ela gostou tanto q virou submissa a ele🩸🔥.»",
  mamar: "«😏 @Under mamou gostosinho a piroca do @elfo, e ta implorando por mais🌚🌝.»",
  mijar: "«🚽💦 @Under encostou em @elfo e mandou aquela mijada na cara, deixando o desgraçado todo sem moral no grupo! 🤣😈🔥 Pra aprender quem manda aqui?! ☠️💦»",
  punheta: "«🥵 @under nao achou bct, ficou só na punheta🤣👏.»",
  siririca: "«😏 @under siriricou horrores, e ainda esta cheia de tesão🤤🩸.»",
  transar: "«🔥 @Under transou gostoso com @elfo, eu senti o calor da safadeza daqui🔥😏.»",
  morder: "@pessoa deu uma mordida em @pessoa marcada, deixou sua marca nela(e) pra todo mundo saber quem é o dono(a).🌝🔥",
  estuprar: "☠️@pessoa estuprou sem dó a(o) @pessoa marcada hulmilhou, bateu e abandonou num beco qualquer, ativou o instinto de paneleiro ! 👾🩸",
  comedorcasadas: "🔥 @autor é um grande talarico e está querendo comer as casadas do grupo, cadê vocês, safadas? 😈",
  amamentar: "@autor tirou os peitos pra fora pra dar de mamar a @alvo. Chupa meus peitinhos meu amor👉👈🫦!",
  chuparpeito: "@autor não resistiu e beijou gostosinho os peitos de @alvo, deixando ela toda arrepiada 🤤🫦"
};

function normalizar(valor) {
  return String(valor || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ç/g, "c")
    .trim();
}

function numeroJid(jid) {
  return String(jid || "").split("@")[0].split(":")[0];
}

function extrairMencoes(ctx) {
  const msg = ctx.info?.message || {};
  const contexto =
    msg.extendedTextMessage?.contextInfo ||
    msg.imageMessage?.contextInfo ||
    msg.videoMessage?.contextInfo ||
    msg.documentMessage?.contextInfo ||
    {};

  const citados = Array.isArray(contexto.mentionedJid)
    ? contexto.mentionedJid
    : [];

  const citado = contexto.participant || ctx.quoted?.sender || "";

  return [...new Set([...citados, citado].filter(Boolean))];
}

function listarMidias(pasta) {
  if (!fs.existsSync(pasta)) return [];

  return fs.readdirSync(pasta)
    .map(nome => path.join(pasta, nome))
    .filter(arquivo => {
      try {
        return fs.statSync(arquivo).isFile() &&
          /\.(gif|jpe?g|png|webp|mp4|mov|mkv|webm)$/i.test(arquivo);
      } catch {
        return false;
      }
    });
}

async function enviar(ctx, texto, mencoes, comando) {
  const pasta = path.join(
    process.cwd(),
    "src/dados/data/media/18",
    comando
  );

  const arquivos = listarMidias(pasta);
  const arquivo = arquivos.length
    ? arquivos[Math.floor(Math.random() * arquivos.length)]
    : null;

  if (!arquivo) {
    await ctx.yuta.sendMessage(ctx.from, {
      text: texto,
      mentions: mencoes
    });
    return;
  }

  const buffer = fs.readFileSync(arquivo);
  const ext = path.extname(arquivo).toLowerCase();
  let conteudo;

  if (ext === ".gif") {
    conteudo = {
      video: buffer,
      gifPlayback: true,
      caption: texto,
      mentions: mencoes
    };
  } else if ([".mp4", ".mov", ".mkv", ".webm"].includes(ext)) {
    conteudo = {
      video: buffer,
      caption: texto,
      mentions: mencoes
    };
  } else {
    conteudo = {
      image: buffer,
      caption: texto,
      mentions: mencoes
    };
  }

  await ctx.yuta.sendMessage(ctx.from, conteudo);
}

export default {
  name: "chupar",
  aliases: nomes.filter(nome => nome !== "chupar"),
  description: "Comandos +18 com as frases originais do KILLUA ZOLDYCK BOT.",

  async execute(ctx) {
    if (!ctx.isGroup || !ctx.from?.endsWith("@g.us")) {
      await ctx.reply("❌ Este comando só funciona em grupos.");
      return;
    }

    if (ctx.dataGp?.[0]?.modo18 !== true) {
      const aviso = ctx.mess?.modo18Necessario;
      await ctx.reply(
        typeof aviso === "function"
          ? aviso({ prefix: ctx.prefix })
          : "🔞 Ative o modo +18 do grupo antes de usar este comando."
      );
      return;
    }

    const comando = normalizar(ctx.command);
    const ator = String(ctx.sender || "");

    if (!ator) {
      await ctx.reply("Não consegui identificar quem executou o comando.");
      return;
    }

    if (comando === "surubao") {
      const metadata = await ctx.yuta.groupMetadata(ctx.from);
      const bot = numeroJid(ctx.yuta.user?.id);

      const membros = (metadata.participants || [])
        .map(p => p.id || p.jid)
        .filter(Boolean)
        .filter(jid => numeroJid(jid) !== bot);

      if (membros.length < 10) {
        await ctx.reply(
          "Preciso de pelo menos 10 participantes disponíveis no grupo."
        );
        return;
      }

      for (let i = membros.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [membros[i], membros[j]] = [membros[j], membros[i]];
      }

      const escolhidos = membros.slice(0, 10);
      const lista = escolhidos
        .map((jid, index) => `┃ ${index + 1}. @${numeroJid(jid)}`)
        .join("\n");

      const texto = [
        "╭━━━〔 🔥 SURUBÃO DO UNDER 🔥 〕━━━╮",
        "┃",
        "┃ 😈 A NOITE PROMETE PEGAR FOGO!",
        "┃",
        "┃ Os 10 convocados para o maior",
        "┃ SURUBÃO DO MUNDO foram escolhidos! 🍑🔥",
        "┃",
        lista,
        "┃",
        "┃ 🥵 Que comece a ousadia, porque",
        "┃ hoje ninguém vai querer ficar de fora!",
        "┃",
        `┃ 🏠 ${metadata.subject || "Grupo"}`,
        "┃",
        "╰━━━━━━━━━━━━━━━━━━━━━━━━━━╯",
        "",
        "☠️ KILLUA ZOLDYCK BOT"
      ].join("\n");

      await enviar(ctx, texto, escolhidos, "surubao");
      return;
    }

    const chave = comando === "comercu" ? "comer-cu" : comando;
    const solo = chave === "punheta" || chave === "siririca" || chave === "comedorcasadas";
    const alvos = extrairMencoes(ctx).filter(jid => jid !== ator);
    const alvo = alvos[0];

    if (!solo && !alvo) {
      await ctx.reply(
        `Marque alguém para usar este comando.\n\nExemplo: ${ctx.prefix}${chave} @pessoa`
      );
      return;
    }

    if (!solo && numeroJid(alvo) === numeroJid(ator)) {
      await ctx.reply("Você não pode usar esse comando em você mesmo.");
      return;
    }

    let texto = frases[chave];

    if (!texto) {
      await ctx.reply("❌ Não encontrei a frase original deste comando.");
      return;
    }

    texto = texto
      .replaceAll("@pessoa marcada", alvo ? `@${numeroJid(alvo)}` : "")
      .replaceAll("@autor", `@${numeroJid(ator)}`)
      .replaceAll("@pessoa", `@${numeroJid(ator)}`)
      .replaceAll("@Under", `@${numeroJid(ator)}`)
      .replaceAll("@under", `@${numeroJid(ator)}`)
      .replaceAll("@elfo", alvo ? `@${numeroJid(alvo)}` : "")
                                                                                                .replaceAll("@alvo", alvo ? `@${numeroJid(alvo)}` : "");

    await enviar(
      ctx,
      texto,
      alvo ? [ator, alvo] : [ator],
      chave
    );
  }
};
