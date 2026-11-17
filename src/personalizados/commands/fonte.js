import { randomUUID } from 'node:crypto';

const TEMPO_SELECAO = 10 * 60 * 1000;
const selecoes = new Map();

function normalizar(s) {
  return String(s || '').toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function mapa(origem, destino) {
  const letras = [...origem];
  const simbolos = [...destino];

  return Object.fromEntries(
    letras.map((c, i) => [c, simbolos[i]])
  );
}

function intervalo(mai, min, especiais = {}) {
  const m = {};

  for (let i = 0; i < 26; i++) {
    m[String.fromCharCode(65 + i)] =
      String.fromCodePoint(mai + i);

    m[String.fromCharCode(97 + i)] =
      String.fromCodePoint(min + i);
  }

  return { ...m, ...especiais };
}

const alfabetos = {
  maiusculaspequenas: {
    a:'ᴀ',b:'ʙ',c:'ᴄ',d:'ᴅ',e:'ᴇ',f:'ғ',
    g:'ɢ',h:'ʜ',i:'ɪ',j:'ᴊ',k:'ᴋ',l:'ʟ',
    m:'ᴍ',n:'ɴ',o:'ᴏ',p:'ᴘ',q:'ǫ',r:'ʀ',
    s:'s',t:'ᴛ',u:'ᴜ',v:'ᴠ',w:'ᴡ',x:'x',
    y:'ʏ',z:'ᴢ'
  },

  negrito: intervalo(0x1D400, 0x1D41A),
  italico: intervalo(0x1D434, 0x1D44E, { h: 'ℎ' }),
  negritoitalico: intervalo(0x1D468, 0x1D482),
  sans: intervalo(0x1D5A0, 0x1D5BA),
  sansnegrito: intervalo(0x1D5D4, 0x1D5EE),
  sansitalico: intervalo(0x1D608, 0x1D622),

  duplalinha: intervalo(0x1D538, 0x1D552, {
    C:'ℂ', H:'ℍ', N:'ℕ', P:'ℙ',
    Q:'ℚ', R:'ℝ', Z:'ℤ'
  }),

  gótica: mapa(
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
    '𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷'
  ),

  monoespacada: intervalo(0x1D670, 0x1D68A),

  bolhas: mapa(
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
    'ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ'
  ),

  quadrada: mapa(
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    '🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉'
  ),

  bolhasnegativas: Object.fromEntries(
    Array.from({ length: 26 }, (_, i) => [
      String.fromCharCode(65 + i),
      String.fromCodePoint(0x1F150 + i)
    ])
  )
};

const estilos = [
  ['maiusculaspequenas', 'ᴍᴀɪúsculas pequenas'],
  ['negrito', '𝐍𝐞𝐠𝐫𝐢𝐭𝐨'],
  ['italico', '𝑰𝒕𝒂𝒍𝒊𝒄𝒐'],
  ['negritoitalico', '𝑵𝒆𝒈𝒓𝒊𝒕𝒐 𝒊𝒕á𝒍𝒊𝒄𝒐'],
  ['gótica', '𝕲ó𝖙𝖎𝖈𝖆'],
  ['duplalinha', '𝔻𝕦𝕡𝕝𝕒 𝕝𝕚𝕟𝕙𝕒'],
  ['monoespacada', '𝙼𝚘𝚗𝚘𝚎𝚜𝚙𝚊𝚌̧𝚊𝚍𝚊'],
  ['sans', '𝖲𝖺𝗇𝗌'],
  ['sansnegrito', '𝗦𝗮𝗻𝘀 𝗻𝗲𝗴𝗿𝗶𝘁𝗼'],
  ['sansitalico', '𝘚𝘢𝘯𝘴 𝘪𝘵𝘢𝘭𝘪𝘤𝘰'],
  ['bolhas', 'Ⓑⓞⓛⓗⓐⓢ'],
  ['bolhasnegativas', '🅱🅾🅻🅷🅰🆂'],
  ['quadrada', '🅀🅄🄰🄳🅁🄰🄳🄰'],
  ['riscado', 'R̶i̶s̶c̶a̶d̶o̶'],
  ['sublinhado', 'S̲u̲b̲l̲i̲n̲h̲a̲d̲o̲']
];

function converter(texto, estilo) {
  if (estilo === 'riscado') {
    return [...texto]
      .map(c => /\s/.test(c) ? c : c + '\u0336')
      .join('');
  }

  if (estilo === 'sublinhado') {
    return [...texto]
      .map(c => /\s/.test(c) ? c : c + '\u0332')
      .join('');
  }

  const alfabeto = alfabetos[estilo];
  if (!alfabeto) return texto;

  return [...texto]
    .map(c => alfabeto[c] || alfabeto[c.toLowerCase()] || c)
    .join('');
}

function identificarUsuario(ctx, from) {
  return (
    ctx.info?.sender ||
    ctx.info?.participant ||
    ctx.info?.key?.participant ||
    ctx.sender ||
    from
  );
}

function limparSelecoes() {
  const agora = Date.now();

  for (const [token, dados] of selecoes) {
    if (agora - dados.createdAt > TEMPO_SELECAO) {
      selecoes.delete(token);
    }
  }
}

export default {
  name: 'fonte',
  aliases: ['fontes', 'letras', 'fonte-selecionar'],
  description: 'Converte textos em 15 estilos Unicode.',

  async execute(ctx) {
    const {
      yuta,
      from,
      prefix,
      command,
      q,
      reply,
      relayButtonMessage
    } = ctx;

    limparSelecoes();

    // RESPOSTA DA LISTA DE ESTILOS
    if (command === 'fonte-selecionar') {
      const partes = String(q || '').trim().split(/\s+/);
      const token = partes[0];
      const estilo = partes[1];
      const dados = selecoes.get(token);

      const usuario = identificarUsuario(ctx, from);

      if (
        !dados ||
        dados.from !== from ||
        dados.sender !== usuario ||
        Date.now() - dados.createdAt > TEMPO_SELECAO
      ) {
        if (token) selecoes.delete(token);

        return reply(
          '⌛ Essa seleção expirou ou não pertence a você.\n\n' +
          'Envie novamente #fonte sua frase.'
        );
      }

      const estiloExiste = estilos.some(item => item[0] === estilo);

      if (!estiloExiste) {
        return reply('❌ Estilo inválido. Faça uma nova seleção.');
      }

      selecoes.delete(token);

      const resultado = converter(dados.texto, estilo);

      return reply(
        `✨ *TEXTO CONVERTIDO*\n\n${resultado}`
      );
    }

    // NOVA CONVERSÃO
    const texto = String(q || '').trim();

    if (!texto) {
      return reply(
        '✍️ *CONVERSOR DE FONTES*\n\n' +
        `Use: ${prefix}fonte sua frase aqui\n\n` +
        'Vou apresentar uma lista com 15 estilos para você escolher.'
      );
    }

    if (typeof relayButtonMessage !== 'function') {
      return reply('❌ O sistema de listas interativas não está disponível.');
    }

    const token = randomUUID();

    selecoes.set(token, {
      texto,
      from,
      sender: identificarUsuario(ctx, from),
      createdAt: Date.now()
    });

    const criarLinhas = (inicio, fim) =>
      estilos.slice(inicio, fim).map(([id, nome], posicao) => ({
        header: `ESTILO ${inicio + posicao + 1}`,
        title: nome,
        description: `Converter usando ${id}`,
        id: `${prefix}fonte-selecionar ${token} ${id}`
      }));

    const botoes = [{
      name: 'single_select',
      buttonParamsJson: JSON.stringify({
        title: '✍️ ESCOLHA UMA FONTE',
        sections: [
          {
            title: '✨ ESTILOS 1 A 10',
            rows: criarLinhas(0, 10)
          },
          {
            title: '☠️ ESTILOS 11 A 15',
            rows: criarLinhas(10, 15)
          }
        ]
      })
    }];

    await relayButtonMessage(yuta, from, {
      interactiveMessage: {
        body: {
          text:
            '✍️ *CONVERSOR DE FONTES*\n\n' +
            `📝 Texto original: ${texto}\n\n` +
            'Escolha abaixo o estilo que deseja aplicar.'
        },
        footer: {
          text: `☠️ ${ctx.NomeDoBot || 'KILLUA ZOLDYCK BOT'}`
        },
        nativeFlowMessage: {
          buttons: botoes,
          messageParamsJson: '{}',
          messageVersion: 1
        }
      }
    });

    return;
  }
};
