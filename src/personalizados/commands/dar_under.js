import fs from "node:fs";
import path from "node:path";

function numeroJid(jid) {
  return String(jid || "")
    .split("@")[0]
    .split(":")[0]
    .replace(/\D/g, "");
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
    "src/dados/data/media/18/dar_under"
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
  name: "dar_under",
  aliases: ["dar-under"],
  description: "Envia uma mídia aleatória dedicada ao dono do bot.",

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

    const numero = String(ctx.setting?.ownerNumber || "")
      .replace(/\D/g, "");

    if (!numero) {
      await ctx.reply("❌ Número do dono não configurado.");
      return;
    }

    if (typeof ctx.normalizarAlvosGrupo !== "function") {
      await ctx.reply("❌ Sistema de menções não disponível.");
      return;
    }

    const mencoes = await ctx.normalizarAlvosGrupo([
      ctx.sender,
      `${numero}@s.whatsapp.net`
    ]);

    const underReal = mencoes.find(jid =>
      String(jid).includes("@s.whatsapp.net") &&
      numeroJid(jid) === numero
    );

    if (!underReal) {
      await ctx.reply(
        "❌ Não consegui resolver a menção do Under. Verifique se ele está no grupo."
      );
      return;
    }

    const texto =
      `@${numeroJid(ctx.sender)} sentou gostosinho na pica do @${numero}! quer leitinho na boca amor??🤤🤤`;

    await enviar(ctx, texto, mencoes);
  }
};
