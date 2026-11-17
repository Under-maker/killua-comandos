const idiomas = {
  portugues: ["pt", "portugues", "português", "brasileiro", "portugues brasileiro"],
  ingles: ["en", "ingles", "inglês", "english"],
  espanhol: ["es", "espanhol", "espanol", "castelhano"],
  chines: ["zh-CN", "chines", "chinês", "mandarim", "chines simplificado"],
  chinesTradicional: ["zh-TW", "chines tradicional", "chinês tradicional"],
  japones: ["ja", "japones", "japonês"],
  coreano: ["ko", "coreano"],
  frances: ["fr", "frances", "francês"],
  alemao: ["de", "alemao", "alemão"],
  italiano: ["it", "italiano"],
  russo: ["ru", "russo"],
  arabe: ["ar", "arabe", "árabe"],
  hindi: ["hi", "hindi"],
  bengali: ["bn", "bengali"],
  urdu: ["ur", "urdu"],
  turco: ["tr", "turco"],
  grego: ["el", "grego"],
  hebraico: ["he", "hebraico"],
  tailandes: ["th", "tailandes", "tailandês"],
  vietnamita: ["vi", "vietnamita"],
  indonesio: ["id", "indonesio", "indonésio"],
  malaio: ["ms", "malaio"],
  filipino: ["tl", "filipino", "tagalog"],
  holandes: ["nl", "holandes", "holandês", "neerlandes"],
  polones: ["pl", "polones", "polonês"],
  ucraniano: ["uk", "ucraniano"],
  sueco: ["sv", "sueco"],
  noruegues: ["no", "noruegues", "norueguês"],
  dinamarques: ["da", "dinamarques", "dinamarquês"],
  finlandes: ["fi", "finlandes", "finlandês"],
  islandes: ["is", "islandes", "islandês"],
  tcheco: ["cs", "tcheco", "checo"],
  eslovaco: ["sk", "eslovaco"],
  hungaro: ["hu", "hungaro", "húngaro"],
  romeno: ["ro", "romeno"],
  bulgaro: ["bg", "bulgaro", "búlgaro"],
  croata: ["hr", "croata"],
  servio: ["sr", "servio", "sérvio"],
  esloveno: ["sl", "esloveno"],
  albanes: ["sq", "albanes", "albanês"],
  macedonio: ["mk", "macedonio"],
  lituano: ["lt", "lituano"],
  letão: ["lv", "letonio", "letão"],
  estoniano: ["et", "estoniano"],
  persa: ["fa", "persa", "farsi"],
  pashto: ["ps", "pashto"],
  nepalês: ["ne", "nepales", "nepalês"],
  tâmil: ["ta", "tamil", "tâmil"],
  telugu: ["te", "telugu"],
  canarês: ["kn", "kannada", "canarês"],
  marata: ["mr", "marata"],
  gujarati: ["gu", "gujarati"],
  punjabi: ["pa", "punjabi"],
  malaiala: ["ml", "malaiala"],
  suaíli: ["sw", "swahili", "suaíli"],
  africaner: ["af", "africaner", "afrikaans"],
  zulu: ["zu", "zulu"],
  xhosa: ["xh", "xhosa"],
  ioruba: ["yo", "ioruba", "yoruba"],
  igbo: ["ig", "igbo"],
  hausa: ["ha", "hausa"],
  amharico: ["am", "amharico"],
  somali: ["so", "somali"],
  irlandes: ["ga", "irlandes", "irlandês"],
  gales: ["cy", "gales", "galês"],
  basco: ["eu", "basco"],
  catalao: ["ca", "catalao", "catalão"],
  galego: ["gl", "galego"],
  latim: ["la", "latim"],
  esperanto: ["eo", "esperanto"],
  haitiano: ["ht", "haitiano", "creole haitiano"],
  luxemburgues: ["lb", "luxemburgues", "luxemburguês"],
  mongol: ["mn", "mongol"],
  cambojano: ["km", "cambojano", "khmer"],
  lao: ["lo", "laosiano", "lao"],
  birmanes: ["my", "birmanes", "birmanês"],
  cingales: ["si", "cingales", "cingalês"],
  azerbaijano: ["az", "azerbaijano"],
  georgiano: ["ka", "georgiano"],
  armênio: ["hy", "armenio", "armênio"],
  quirguiz: ["ky", "quirguiz"],
  cazaque: ["kk", "cazaque"],
  uzbeque: ["uz", "uzbeque"],
  tajique: ["tg", "tajique"],
  turcomeno: ["tk", "turcomeno"],
  sundanes: ["su", "sundanes", "sundanês"],
  javanes: ["jv", "javanes", "javanês"],
  maori: ["mi", "maori"],
  samoano: ["sm", "samoano"],
  havaiano: ["haw", "havaiano"],
  yiddish: ["yi", "yiddish"],
  basquir: ["ba", "basquir"],
  occitano: ["oc", "occitano"],
  corso: ["co", "corso"],
  frison: ["fy", "frison"],
  maltes: ["mt", "maltes", "maltês"],
  birmanês: ["my", "birmanes", "birmanês"]
};

const nomes = {
  pt: "Português",
  en: "Inglês",
  es: "Espanhol",
  "zh-CN": "Chinês simplificado",
  "zh-TW": "Chinês tradicional",
  ja: "Japonês",
  ko: "Coreano",
  fr: "Francês",
  de: "Alemão",
  it: "Italiano",
  ru: "Russo",
  ar: "Árabe",
  hi: "Hindi",
  tr: "Turco",
  nl: "Holandês",
  pl: "Polonês",
  uk: "Ucraniano",
  el: "Grego",
  he: "Hebraico",
  th: "Tailandês",
  vi: "Vietnamita",
  id: "Indonésio",
  ms: "Malaio",
  fa: "Persa",
  sw: "Suaíli"
};

const bandeiras = {
  pt: "🇧🇷", en: "🇺🇸", es: "🇪🇸",
  "zh-CN": "🇨🇳", "zh-TW": "🇹🇼",
  ja: "🇯🇵", ko: "🇰🇷", fr: "🇫🇷",
  de: "🇩🇪", it: "🇮🇹", ru: "🇷🇺",
  ar: "🇸🇦", hi: "🇮🇳", tr: "🇹🇷",
  nl: "🇳🇱", pl: "🇵🇱", uk: "🇺🇦"
};

function normalizar(texto) {
  return String(texto || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

const mapa = new Map();

for (const [codigo, apelidos] of Object.entries(idiomas)) {
  for (const apelido of apelidos) {
    mapa.set(normalizar(apelido), apelidos[0]);
  }
}

function localizarIdioma(texto) {
  const entrada = String(texto || "").trim();

  const codigo = entrada.match(
    /^([a-z]{2,3}(?:-[a-z0-9]{2,8})?)(?:\s+|$)/i
  );

  if (codigo) {
    return {
      codigo: codigo[1],
      restante: entrada.slice(codigo[0].length).trim()
    };
  }

  const normalizado = normalizar(entrada);
  const encontrados = [...mapa.keys()]
    .sort((a, b) => b.length - a.length);

  for (const nome of encontrados) {
    if (
      normalizado === nome ||
      normalizado.startsWith(nome + " ")
    ) {
      const original = entrada.split(/\s+/);
      const quantidade = nome.split(" ").length;

      return {
        codigo: mapa.get(nome),
        restante: original.slice(quantidade).join(" ").trim()
      };
    }
  }

  return null;
}

function extrairTexto(obj, nivel = 0) {
  if (!obj || typeof obj !== "object" || nivel > 5) return "";

  const campos = [
    "conversation",
    "text",
    "caption",
    "selectedDisplayText",
    "title"
  ];

  for (const campo of campos) {
    if (typeof obj[campo] === "string" && obj[campo].trim()) {
      return obj[campo].trim();
    }
  }

  const mensagens = [
    "extendedTextMessage",
    "imageMessage",
    "videoMessage",
    "documentMessage",
    "conversation",
    "message",
    "ephemeralMessage",
    "viewOnceMessage",
    "viewOnceMessageV2",
    "msg"
  ];

  for (const campo of mensagens) {
    if (obj[campo] && typeof obj[campo] === "object") {
      const resultado = extrairTexto(obj[campo], nivel + 1);
      if (resultado) return resultado;
    }
  }

  return "";
}

export default {
  name: "traduzir",
  aliases: ["traducao", "translate", "traduz", "trans"],
  description: "Traduz textos para diversos idiomas.",

  async execute(ctx) {
    const { q, quoted, reply, fetch } = ctx;

    try {
      const entrada = String(q || "").trim();

      if (!entrada) {
        return reply(
          "☠️ *TRADUTOR KILLUA*\n\n" +
          "Use:\n" +
          ".traduzir idioma texto\n\n" +
          "Exemplos:\n" +
          ".traduzir inglês Olá, amigo!\n" +
          ".traduzir japonês Eu sou forte.\n" +
          ".traduzir chinês Como você está?\n\n" +
          "Também pode responder a uma mensagem usando apenas:\n" +
          ".traduzir japonês"
        );
      }

      const destino = localizarIdioma(entrada);

      if (!destino) {
        return reply(
          "❌ Idioma não reconhecido.\n\n" +
          "Informe o idioma ou seu código.\n" +
          "Exemplos: inglês, chinês, japonês, en, zh-CN, ja."
        );
      }

      let texto = destino.restante;

      if (!texto) {
        texto = extrairTexto(quoted);
      }

      if (!texto) {
        return reply(
          "❌ Você precisa informar uma frase ou responder a uma mensagem.\n\n" +
          "Exemplo: .traduzir japonês Olá!"
        );
      }

      if (texto.length > 4500) {
        return reply("❌ O texto é muito grande. Limite: 4.500 caracteres.");
      }

      const requisicao = new URL(
        "https://translate.googleapis.com/translate_a/single"
      );

      requisicao.searchParams.set("client", "gtx");
      requisicao.searchParams.set("sl", "auto");
      requisicao.searchParams.set("tl", destino.codigo);
      requisicao.searchParams.set("dt", "t");
      requisicao.searchParams.set("q", texto);

      const buscar = fetch || globalThis.fetch;

      const resposta = await buscar(requisicao.toString(), {
        method: "GET",
        headers: {
          "User-Agent": "Mozilla/5.0"
        },
        signal: AbortSignal.timeout(25000)
      });

      if (!resposta.ok) {
        throw new Error("O serviço de tradução está indisponível.");
      }

      const dados = await resposta.json();

      if (!Array.isArray(dados?.[0])) {
        throw new Error("Não foi possível interpretar a tradução.");
      }

      const traduzido = dados[0]
        .map(parte => parte?.[0] || "")
        .join("")
        .trim();

      const origem = dados[2] || "auto";
      const nomeOrigem = nomes[origem] || origem.toUpperCase();
      const nomeDestino =
        nomes[destino.codigo] || destino.codigo.toUpperCase();

      if (!traduzido) {
        throw new Error("O serviço não retornou uma tradução.");
      }

      return reply(
        "☠️ *KILLUA TRANSLATOR*\n" +
        "━━━━━━━━━━━━━━━━━━\n\n" +
        `${bandeiras[origem] || "🌐"} *ORIGINAL (${nomeOrigem})*\n` +
        `${texto}\n\n` +
        `${bandeiras[destino.codigo] || "🌍"} *TRADUÇÃO (${nomeDestino})*\n` +
        `${traduzido}\n\n` +
        "━━━━━━━━━━━━━━━━━━\n" +
        "🌐 Tradução automática"
      );

    } catch (erro) {
      console.log("[TRADUTOR]", erro?.message || erro);

      return reply(
        "❌ Não consegui realizar a tradução.\n" +
        "Tente novamente em alguns instantes."
      );
    }
  }
};
