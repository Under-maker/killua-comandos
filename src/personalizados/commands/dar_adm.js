import fs from "node:fs";
import path from "node:path";

function numeroJid(jid) {
  return String(jid || "").split("@")[0].split(":")[0];
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

async function enviar(ctx, texto, mencoes) {
  const pasta = path.join(
    process.cwd(),
    "src/dados/data/media/18/dar_adm"
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
  name: "dar_adm",
  aliases: ["dar-adm"],
  description: "Sorteia um administrador e envia uma mídia aleatória.",

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

    const ator = String(ctx.sender || "");

    if (!ator) {
      await ctx.reply("❌ Não consegui identificar quem executou o comando.");
      return;
    }

    let metadata;

    try {
      metadata = await ctx.yuta.groupMetadata(ctx.from);
    } catch {
      await ctx.reply("❌ Não consegui consultar os administradores do grupo.");
      return;
    }

    const bot = numeroJid(ctx.yuta.user?.id);

    const admins = (metadata.participants || [])
      .filter(p =>
        p.admin === "admin" ||
        p.admin === "superadmin" ||
        p.isAdmin === true ||
        p.isSuperAdmin === true
      )
      .map(p => p.id || p.jid)
      .filter(Boolean)
      .filter(jid => numeroJid(jid) !== bot);

    if (!admins.length) {
      await ctx.reply("❌ Não encontrei administradores disponíveis para o sorteio.");
      return;
    }

    const adm = admins[Math.floor(Math.random() * admins.length)];

    const texto =
      `🔥 @${numeroJid(ator)} está com muito tesao hoje e precisa de um ADM para apagar seu fogo! ` +
      `@${numeroJid(adm)} foi o escolhido para apagar esse fogo, e ja falou q so vai parar quando gozar dentro da @${numeroJid(ator)}, VAI TREMER AS PERNAS BB🤤🔥`;

    await enviar(ctx, texto, [...new Set([ator, adm])]);
  }
};
