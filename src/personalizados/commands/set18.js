import fs from "node:fs";
import path from "node:path";

const permitidos = [
  "chupar", "bater", "espancar", "comer-cu", "gozar", "humilhar", "mamar",
  "mijar", "punheta", "siririca", "surubao", "transar", "dar", "dar_adm", "dar_under", "melar", "morder", "estuprar", "comedorcasadas", "amamentar", "chuparpeito"
];

function localizarMidia(msg) {
  if (!msg) return null;
  if (msg.ephemeralMessage?.message) return localizarMidia(msg.ephemeralMessage.message);
  if (msg.viewOnceMessage?.message) return localizarMidia(msg.viewOnceMessage.message);
  if (msg.viewOnceMessageV2?.message) return localizarMidia(msg.viewOnceMessageV2.message);
  if (msg.imageMessage) return { dados: msg.imageMessage, tipo: "image" };
  if (msg.videoMessage) return { dados: msg.videoMessage, tipo: "video", gif: msg.videoMessage.gifPlayback === true };
  return null;
}

export default {
  name: "set18",
  aliases: [],
  description: "Salva uma mídia para um comando +18.",
  async execute(ctx) {
    if (ctx.SoDono !== true) {
      await ctx.reply("❌ Este comando é exclusivo do dono do bot.");
      return;
    }

    const comando = String(ctx.args?.[0] || "").toLowerCase();
    if (!permitidos.includes(comando)) {
      await ctx.reply("Uso: marque uma imagem/vídeo e envie set18 <comando>.\nComandos: " + permitidos.join(", "));
      return;
    }

    const mensagem = ctx.info?.message || {};
    const contexto =
      mensagem.extendedTextMessage?.contextInfo ||
      mensagem.imageMessage?.contextInfo ||
      mensagem.videoMessage?.contextInfo ||
      {};
    const citado = contexto.quotedMessage || ctx.quoted?.message || ctx.quoted;
    const midia = localizarMidia(citado);

    if (!midia) {
      await ctx.reply("❌ Responda a uma imagem ou vídeo com set18 <comando>.");
      return;
    }

    if (typeof ctx.downloadContentFromMessage !== "function") {
      await ctx.reply("❌ O download de mídia não está disponível neste contexto.");
      return;
    }

    const pasta = path.join(process.cwd(), "src/dados/data/media/18", comando);
    fs.mkdirSync(pasta, { recursive: true });

    const stream = await ctx.downloadContentFromMessage(midia.dados, midia.tipo);
    const partes = [];
    for await (const parte of stream) partes.push(Buffer.from(parte));

    const extensao = midia.gif ? ".gif" : midia.tipo === "video" ? ".mp4" : ".jpg";
    const nome = comando + "-" + Date.now() + extensao;
    fs.writeFileSync(path.join(pasta, nome), Buffer.concat(partes));

    await ctx.reply("✅ Mídia salva para o comando " + comando + ".");
  }
};
