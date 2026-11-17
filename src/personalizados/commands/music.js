import ytSearch from "yt-search";
import { randomUUID } from "node:crypto";

const searches = globalThis.__YUTA_MUSIC_SEARCHES ||
  (globalThis.__YUTA_MUSIC_SEARCHES = new Map());

const TEMPO_PESQUISA = 60 * 60 * 1000;

function normalizar(item = {}) {
  const v = item.resultados || item.result || item;
  const id = v.videoId || v.video_id || v.id;
  const url = v.url || v.link || v.videoUrl || v.video_url ||
    (id ? `https://youtu.be/${id}` : "");

  let thumbnail = v.thumbnail || v.thumb || v.image || v.thumbnails || "";

  if (Array.isArray(thumbnail)) {
    thumbnail = thumbnail.at(-1)?.url || thumbnail[0]?.url || "";
  }

  if (typeof thumbnail === "object" && thumbnail !== null) {
    thumbnail = thumbnail.url || "";
  }

  const duracao = v.duration?.timestamp || v.durationText ||
    v.timestamp || v.duration || v.length || "0:00";

  const autor = v.author || v.channel || v.owner || {};

  return {
    title: String(v.title || v.name || "Música"),
    url,
    thumbnail,
    duration: typeof duracao === "number"
      ? `${Math.floor(duracao / 60)}:${String(duracao % 60).padStart(2, "0")}`
      : String(duracao),
    author: autor.name || autor.title || v.authorName ||
      v.channelName || v.creator || "Desconhecido",
    views: v.views || v.viewCount || v.viewsCount || 0
  };
}

function obterLista(resultado) {
  let lista = resultado;

  if (!Array.isArray(lista)) {
    lista = lista?.resultados || lista?.results ||
      lista?.items || lista?.videos || lista?.data || [lista];
  }

  if (!Array.isArray(lista)) lista = [];

  return lista
    .map(normalizar)
    .filter(v => v.url && /^https?:\/\//i.test(v.url))
    .slice(0, 15);
}

function formatarVisualizacoes(valor) {
  const numero = Number(String(valor).replace(/\D/g, ""));

  return numero > 0
    ? numero.toLocaleString("pt-BR")
    : String(valor || "Não informado");
}

function limparPesquisas() {
  const agora = Date.now();

  for (const [id, dados] of searches) {
    if (agora - dados.createdAt > TEMPO_PESQUISA) {
      searches.delete(id);
    }
  }
}

export default {
  name: "music",
  aliases: ["music-selecionar"],
  description: "Pesquisa músicas no YouTube e envia a escolhida em MP3.",

  async execute(ctx) {
    const {
      yuta, from, prefix, command, q, api,
      reply, reagir, relayButtonMessage, yt
    } = ctx;

    if (command === "music-selecionar") {
      const partes = String(q || "").trim().split(/\s+/);
      const token = partes[0];
      const indice = Number.parseInt(partes[1], 10);
      const dados = searches.get(token);

      if (
        !dados ||
        dados.from !== from ||
        Date.now() - dados.createdAt > TEMPO_PESQUISA
      ) {
        if (token) searches.delete(token);
        return reply(
          "⌛ Essa pesquisa expirou. Faça uma nova busca com /music."
        );
      }

      if (
        !Number.isInteger(indice) ||
        indice < 0 ||
        indice >= dados.videos.length
      ) {
        return reply("❌ Opção inválida. Escolha uma música da lista.");
      }

      const video = dados.videos[indice];

      try {
        await reagir(from, "⏳");

        let capa = video.thumbnail;

        try {
          if (api?.canvas?.cardMusic && capa) {
            capa = await api.canvas.cardMusic({
              fundo: video.thumbnail,
              avatar: video.thumbnail,
              titulo: video.title,
              author: video.author,
              atual: "0:00",
              total: video.duration
            });
          }
        } catch {}

        const legenda =
          `🎵 *${video.title}*\n\n` +
          `👤 Artista: ${video.author}\n` +
          `⏱️ Duração: ${video.duration}\n` +
          `👁️ Visualizações: ${formatarVisualizacoes(video.views)}\n` +
          `🔗 ${video.url}\n\n` +
          `☠️ ${ctx.NomeDoBot || "KILLUA ZOLDYCK BOT"}`;

        if (capa) {
          await yuta.sendMessage(
            from,
            { image: capa, caption: legenda },
            { quoted: yt }
          );
        } else {
          await reply(legenda);
        }

        const media = await api.downloads.ytmp3(video.url);

        if (
          !Buffer.isBuffer(media) &&
          !(media instanceof Uint8Array) &&
          !(media instanceof ArrayBuffer)
        ) {
          throw new Error("O download não retornou um arquivo de áudio válido.");
        }

        const nome =
          video.title.replace(/[\\/:*?"<>|]/g, "").slice(0, 80) || "musica";

        await yuta.sendMessage(
          from,
          {
            audio: Buffer.from(media),
            mimetype: "audio/mpeg",
            fileName: `${nome}.mp3`,
            ptt: false
          },
          { quoted: yt }
        );

        await reagir(from, "✅");
      } catch (error) {
        console.error("[MUSIC DOWNLOAD]", error?.stack || error);
        await reagir(from, "❌");
        return reply(
          "❌ Não consegui baixar essa música. Tente escolher outra."
        );
      }

      // A pesquisa permanece disponível para escolher outras músicas.
      return;
    }

    const pesquisa = String(q || "").trim();

    if (!pesquisa) {
      return reply(
        `🎵 *PESQUISAR MÚSICA*\n\n` +
        `Use: ${prefix}music nome da música\n\n` +
        `Vou mostrar até 15 resultados para você escolher.`
      );
    }

    try {
      limparPesquisas();
      await reagir(from, "⏳");

      const resposta = await ytSearch(pesquisa);
      const videos = obterLista(resposta?.videos);

      if (!videos.length) {
        await reagir(from, "❌");
        return reply("❌ Não encontrei músicas para essa pesquisa.");
      }

      const token = randomUUID();

      searches.set(token, {
        from,
        videos,
        createdAt: Date.now()
      });

      const criarLinhas = (inicio, fim) =>
        videos.slice(inicio, fim).map((video, posicao) => ({
          header: `🎵 RESULTADO ${inicio + posicao + 1}`,
          title: video.title.slice(0, 60),
          description: `${video.author} • ${video.duration}`.slice(0, 72),
          id: `${prefix}music-selecionar ${token} ${inicio + posicao}`
        }));

      const botoes = [{
        name: "single_select",
        buttonParamsJson: JSON.stringify({
          title: "🎧 ESCOLHA SUA MÚSICA",
          sections: [
            {
              title: "🎵 RESULTADOS 1 A 10",
              rows: criarLinhas(0, 10)
            },
            ...(videos.length > 10 ? [{
              title: "🎵 RESULTADOS 11 A 15",
              rows: criarLinhas(10, 15)
            }] : [])
          ]
        })
      }];

      await relayButtonMessage(yuta, from, {
        interactiveMessage: {
          body: {
            text:
              `🎧 *PESQUISA MUSICAL*\n\n` +
              `🔎 Pesquisa: ${pesquisa}\n` +
              `📀 Resultados encontrados: ${videos.length}\n\n` +
              `Selecione uma música na lista abaixo.`
          },
          footer: {
            text: `☠️ ${ctx.NomeDoBot || "KILLUA ZOLDYCK BOT"}`
          },
          nativeFlowMessage: {
            buttons: botoes,
            messageParamsJson: "{}",
            messageVersion: 1
          }
        }
      }, { quoted: yt });

      await reagir(from, "✅");
    } catch (error) {
      console.error("[MUSIC SEARCH]", error?.stack || error);
      await reagir(from, "❌");
      return reply("❌ Não foi possível pesquisar músicas agora.");
    }
  }
};
