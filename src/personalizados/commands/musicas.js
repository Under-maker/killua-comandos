import ytSearch from "yt-search";
import { randomUUID } from "node:crypto";
import { prepareWAMessageMedia } from "@whiskeysockets/baileys";
import { relayButtonMessage } from "../../funcoes/buttons.js";

const pesquisas =
  globalThis.__KILLUA_MUSICAS || (globalThis.__KILLUA_MUSICAS = new Map());

const TEMPO_PESQUISA = 60 * 60 * 1000;
const LIMITE_RESULTADOS = 10;

function normalizar(item = {}) {
  const v = item.resultados || item.result || item;
  const id = v.videoId || v.video_id || v.id;

  const url =
    v.url || v.link || v.videoUrl || v.video_url ||
    (id ? `https://youtu.be/${id}` : "");

  let thumbnail =
    v.thumbnail || v.thumb || v.image || v.thumbnails || "";

  if (Array.isArray(thumbnail)) {
    thumbnail = thumbnail.at(-1)?.url || thumbnail[0]?.url || "";
  }

  if (typeof thumbnail === "object" && thumbnail !== null) {
    thumbnail = thumbnail.url || "";
  }

  const duracao =
    v.duration?.timestamp ||
    v.durationText ||
    v.timestamp ||
    v.duration ||
    v.length ||
    "0:00";

  const autor = v.author || v.channel || v.owner || {};

  return {
    title: String(v.title || v.name || "Música"),
    url,
    thumbnail: String(thumbnail || ""),
    duration:
      typeof duracao === "number"
        ? `${Math.floor(duracao / 60)}:${String(duracao % 60).padStart(2, "0")}`
        : String(duracao),
    author:
      autor.name ||
      autor.title ||
      v.authorName ||
      v.channelName ||
      v.creator ||
      "Desconhecido"
  };
}

function limparPesquisas() {
  const agora = Date.now();

  for (const [id, dados] of pesquisas) {
    if (agora - dados.createdAt > TEMPO_PESQUISA) {
      pesquisas.delete(id);
    }
  }
}

function obterMidiaValida(media) {
  if (Buffer.isBuffer(media)) return media;
  if (media instanceof Uint8Array) return Buffer.from(media);
  if (media instanceof ArrayBuffer) return Buffer.from(media);

  throw new Error("O download não retornou um áudio válido.");
}

function criarBotao(texto, id) {
  return {
    name: "quick_reply",
    buttonParamsJson: JSON.stringify({
      display_text: texto,
      id
    })
  };
}

async function baixarMusica(api, video) {
  if (typeof api?.downloads?.ytmp3 !== "function") {
    throw new Error("A função de download ytmp3 não está disponível.");
  }

  const resultado = await api.downloads.ytmp3(video.url);
  return obterMidiaValida(resultado);
}

export default {
  name: "musicas",
  aliases: ["musicas-play", "musicas-baixar"],
  description: "Pesquisa músicas em carrossel horizontal e envia MP3.",

  async execute(ctx) {
    const {
      yuta,
      from,
      prefix,
      command,
      q,
      api,
      reply,
      reagir
    } = ctx;

    const partes = String(q || "").trim().split(/\s+/);
    const token = partes[0];
    const indice = Number.parseInt(partes[1], 10);

    // Ação dos botões: reproduzir ou baixar.
    if (command === "musicas-play" || command === "musicas-baixar") {
      const dados = pesquisas.get(token);

      if (
        !dados ||
        dados.from !== from ||
        Date.now() - dados.createdAt > TEMPO_PESQUISA
      ) {
        if (token) pesquisas.delete(token);
        return reply("⌛ Essa pesquisa expirou. Faça uma nova busca com .musicas.");
      }

      if (
        !Number.isInteger(indice) ||
        indice < 0 ||
        indice >= dados.videos.length
      ) {
        return reply("❌ Música selecionada inválida.");
      }

      const video = dados.videos[indice];

      try {
        await reagir(from, "⏳");

        const audio = await baixarMusica(api, video);
        const nome =
          video.title.replace(/[\\/:*?"<>|]/g, "").slice(0, 80) || "musica";

        if (command === "musicas-play") {
          await yuta.sendMessage(from, {
            audio,
            mimetype: "audio/mpeg",
            fileName: `${nome}.mp3`,
            ptt: false
          });
        } else {
          await yuta.sendMessage(from, {
            document: audio,
            mimetype: "audio/mpeg",
            fileName: `${nome}.mp3`,
            caption:
              `📥 *DOWNLOAD CONCLUÍDO*\n\n` +
              `🎵 ${video.title}\n` +
              `👤 ${video.author}\n\n` +
              `☠️ KILLUA MUSIC`
          });
        }

        await reagir(from, "✅");
      } catch (error) {
        console.error("[KILLUA MUSIC]", error?.message || error);
        await reagir(from, "❌");
        return reply("❌ Não consegui obter essa música. Tente outra.");
      }

      return;
    }

    const pesquisa = String(q || "").trim();

    if (!pesquisa) {
      return reply(
        `☠️ *KILLUA MUSIC*\n\n` +
        `Pesquise sua música favorita:\n` +
        `*${prefix}musicas nome da música*\n\n` +
        `🎧 Resultados em carrossel horizontal.`
      );
    }

    try {
      limparPesquisas();
      await reagir(from, "⏳");

      const resposta = await ytSearch(pesquisa);
      const videos = (resposta?.videos || [])
        .map(normalizar)
        .filter(v => v.url && /^https?:\/\//i.test(v.url))
        .slice(0, LIMITE_RESULTADOS);

      if (!videos.length) {
        await reagir(from, "❌");
        return reply("❌ Não encontrei músicas para essa pesquisa.");
      }

      const idPesquisa = randomUUID();

      pesquisas.set(idPesquisa, {
        from,
        videos,
        createdAt: Date.now()
      });

      const cards = [];

      // Prepara cada capa individualmente para o carrossel.
      for (let i = 0; i < videos.length; i++) {
        const video = videos[i];

        const card = {
          header: {
            title: video.title.slice(0, 60),
            subtitle: `${video.author} • ${video.duration}`.slice(0, 60),
            hasMediaAttachment: false
          },
          body: {
            text:
              `🎵 *${video.title}*\n\n` +
              `👤 ${video.author}\n` +
              `⏱️ ${video.duration}`
          },
          footer: {
            text: "☠️ KILLUA MUSIC"
          },
          nativeFlowMessage: {
            buttons: [
              criarBotao(
                "▶️ Reproduzir",
                `${prefix}musicas-play ${idPesquisa} ${i}`
              ),
              criarBotao(
                "📥 Baixar",
                `${prefix}musicas-baixar ${idPesquisa} ${i}`
              )
            ],
            messageParamsJson: "{}",
            messageVersion: 1
          }
        };

        if (video.thumbnail && yuta.waUploadToServer) {
          try {
            const midia = await prepareWAMessageMedia(
              { image: { url: video.thumbnail } },
              { upload: yuta.waUploadToServer }
            );

            if (midia?.imageMessage) {
              card.header.hasMediaAttachment = true;
              card.header.imageMessage = midia.imageMessage;
            }
          } catch (error) {
            console.error(
              `[KILLUA MUSIC] Falha na capa ${i + 1}:`,
              error?.message || error
            );
          }
        }

        cards.push(card);
      }

      await relayButtonMessage(
        yuta,
        from,
        {
          interactiveMessage: {
            body: {
              text:
                `☠️ *KILLUA MUSIC*\n\n` +
                `🔎 Pesquisa: ${pesquisa}\n` +
                `🎧 ${videos.length} músicas encontradas\n\n` +
                `Deslize para o lado e escolha sua música.`
            },
            footer: {
              text: "KILLUA ZOLDYCK BOT"
            },
            carouselMessage: {
              cards,
              messageVersion: 1,
              carouselCardType: 1
            }
          }
        }
      );

      await reagir(from, "✅");
    } catch (error) {
      console.error("[KILLUA MUSIC SEARCH]", error?.stack || error);
      await reagir(from, "❌");
      return reply("❌ Não foi possível pesquisar músicas agora.");
    }
  }
};
