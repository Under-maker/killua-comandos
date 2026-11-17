import { Jimp } from 'jimp';
import path from 'node:path';
import os from 'node:os';
import { execFileSync } from 'node:child_process';
import { mkdtemp, writeFile, readFile, rm } from 'node:fs/promises';

const W = 1000;
const H = 1300;

const aleatorio = lista =>
  lista[Math.floor(Math.random() * lista.length)];

const numero = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

function escapar(valor) {
  return String(valor ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function normalizarId(valor) {
  return String(valor || '')
    .trim()
    .toLowerCase()
    .replace(/:\d+(?=@)/, '');
}

function mesmoId(a, b) {
  const x = normalizarId(a);
  const y = normalizarId(b);

  if (!x || !y) return false;
  if (x === y) return true;

  return x.split('@')[0] === y.split('@')[0];
}

function nomeValido(valor) {
  const nome = String(valor || '').trim();

  return Boolean(
    nome &&
    !nome.includes('@') &&
    !/^\+?[\d\s().-]+$/.test(nome)
  );
}

async function buscarNome(alvo, participante, ctx) {
  const ids = [
    alvo,
    participante?.id,
    participante?.jid,
    participante?.lid,
    participante?.phoneNumber
  ].filter(Boolean);

  for (const campo of ['notify', 'name', 'verifiedName', 'pushName']) {
    if (nomeValido(participante?.[campo])) {
      return String(participante[campo]).trim();
    }
  }

  const registros = Array.isArray(ctx.pushnames)
    ? ctx.pushnames
    : [];

  const registro = registros.find(item =>
    ids.some(id => mesmoId(item?.id, id))
  );

  if (nomeValido(registro?.nick)) {
    return String(registro.nick).trim();
  }

  if (
    [ctx.sender, ctx.info?.sender, ctx.info?.key?.participant]
      .some(id => ids.some(alvoId => mesmoId(id, alvoId))) &&
    nomeValido(ctx.pushname)
  ) {
    return String(ctx.pushname).trim();
  }

  return 'AVENTUREIRO';
}

async function carregarFoto(yuta, ids) {
  for (const jid of ids.filter(Boolean)) {
    try {
      const url = await yuta.profilePictureUrl(jid, 'image');
      if (!url) continue;

      const resposta = await fetch(url);
      if (!resposta.ok) continue;

      const buffer = Buffer.from(await resposta.arrayBuffer());

      if (!buffer.length || buffer.length > 8 * 1024 * 1024) {
        continue;
      }

      const foto = await Jimp.read(buffer);

      const largura = 430;
      const altura = 510;

      const escala = Math.max(
        largura / foto.width,
        altura / foto.height
      );

      const nw = Math.ceil(foto.width * escala);
      const nh = Math.ceil(foto.height * escala);

      foto.resize({ w: nw, h: nh });

      foto.crop({
        x: Math.floor((nw - largura) / 2),
        y: Math.floor((nh - altura) / 2),
        w: largura,
        h: altura
      });

      return await foto.getBuffer('image/png');
    } catch {}
  }

  return null;
}

function gerarAtributos() {
  return {
    nivel: numero(1, 99),
    forca: numero(20, 100),
    velocidade: numero(20, 100),
    inteligencia: numero(20, 100),
    resistencia: numero(20, 100),
    energia: numero(20, 100),
    classe: aleatorio([
      'GUERREIRO',
      'ASSASSINO',
      'MAGO',
      'ESPADACHIM',
      'CAÇADOR',
      'LENDÁRIO'
    ]),
    raridade: aleatorio([
      'COMUM',
      'RARO',
      'ÉPICO',
      'LENDÁRIO',
      'MÍTICO'
    ])
  };
}

async function gerarFicha(nome, foto, atributos) {
  const nomeSVG = escapar(nome.toUpperCase().slice(0, 22));

  const retrato = foto
    ? `<image href="data:image/png;base64,${foto.toString('base64')}"
         x="75" y="255" width="430" height="510"
         preserveAspectRatio="xMidYMid slice"/>`
    : `<text x="290" y="510" text-anchor="middle"
         font-size="35" fill="#c5b4df">SEM FOTO</text>`;

  const atributosSVG = [
    ['FORÇA', atributos.forca],
    ['VELOCIDADE', atributos.velocidade],
    ['INTELIGÊNCIA', atributos.inteligencia],
    ['RESISTÊNCIA', atributos.resistencia],
    ['ENERGIA', atributos.energia]
  ];

  const barras = atributosSVG.map(([label, valor], i) => {
    const y = 390 + i * 105;

    return `
      <text x="570" y="${y}" fill="#e9e0f5"
            font-size="23" font-weight="bold"
            letter-spacing="2">${label}</text>

      <text x="920" y="${y}" text-anchor="end"
            fill="#d9b66f" font-size="25"
            font-weight="bold">${valor}</text>

      <rect x="570" y="${y + 17}" width="350" height="15"
            rx="7" fill="#34283f"/>

      <rect x="570" y="${y + 17}"
            width="${350 * valor / 100}" height="15"
            rx="7" fill="#a77be2"/>
    `;
  }).join('');

  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg"
       width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">

    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#100d19"/>
        <stop offset=".5" stop-color="#21152e"/>
        <stop offset="1" stop-color="#0b0a12"/>
      </linearGradient>

      <linearGradient id="gold">
        <stop offset="0" stop-color="#927044"/>
        <stop offset=".5" stop-color="#f1d394"/>
        <stop offset="1" stop-color="#927044"/>
      </linearGradient>

      <clipPath id="portrait">
        <rect x="75" y="255" width="430" height="510" rx="12"/>
      </clipPath>
    </defs>

    <rect width="1000" height="1300" fill="url(#bg)"/>

    <circle cx="500" cy="550" r="430"
            fill="#8d58bd" opacity=".045"/>

    <rect x="25" y="25" width="950" height="1250"
          rx="25" fill="none" stroke="url(#gold)" stroke-width="3"/>

    <rect x="39" y="39" width="922" height="1222"
          rx="18" fill="none" stroke="#72568c" stroke-width="1"/>

    <text x="500" y="105" text-anchor="middle"
          fill="#d8b875" font-size="25"
          letter-spacing="8" font-weight="bold">
      KILLUA ZOLDYCK BOT
    </text>

    <text x="500" y="180" text-anchor="middle"
          fill="#f1e8fa" font-size="55"
          font-weight="bold" letter-spacing="5">
      CHARACTER CARD
    </text>

    <path d="M100 205 H900" stroke="url(#gold)" stroke-width="2"/>

    <rect x="65" y="245" width="450" height="530"
          rx="16" fill="#c09a61" opacity=".8"/>

    <rect x="75" y="255" width="430" height="510"
          rx="12" fill="#20172a"/>

    <g clip-path="url(#portrait)">
      ${retrato}
    </g>

    <rect x="75" y="255" width="430" height="510"
          rx="12" fill="none" stroke="#d5b578" stroke-width="4"/>

    <text x="550" y="285" fill="#b99bd9"
          font-size="21" letter-spacing="4">
      IDENTIDADE
    </text>

    <text x="550" y="340" fill="#fff"
          font-size="38" font-weight="bold">
      ${nomeSVG}
    </text>

    <text x="550" y="455" fill="#b99bd9"
          font-size="21" letter-spacing="3">
      ATRIBUTOS
    </text>

    ${barras}

    <rect x="65" y="820" width="870" height="220"
          rx="18" fill="#1a1424"
          stroke="#8d6aaa" stroke-width="2"/>

    <text x="110" y="875" fill="#c7a4e8"
          font-size="22" letter-spacing="3">
      INFORMAÇÕES
    </text>

    <text x="110" y="940" fill="#fff"
          font-size="29" font-weight="bold">
      CLASSE
    </text>

    <text x="110" y="990" fill="#d9b66f"
          font-size="30" font-weight="bold">
      ${atributos.classe}
    </text>

    <text x="570" y="940" fill="#fff"
          font-size="29" font-weight="bold">
      RARIDADE
    </text>

    <text x="570" y="990" fill="#d9b66f"
          font-size="30" font-weight="bold">
      ${atributos.raridade}
    </text>

    <rect x="65" y="1080" width="870" height="105"
          rx="15" fill="#2a1d37"
          stroke="url(#gold)" stroke-width="2"/>

    <text x="500" y="1125" text-anchor="middle"
          fill="#c7a4e8" font-size="20"
          letter-spacing="4">
      NÍVEL DO PERSONAGEM
    </text>

    <text x="500" y="1170" text-anchor="middle"
          fill="#f2d69a" font-size="40"
          font-weight="bold">
      ${atributos.nivel}
    </text>

    <text x="500" y="1230" text-anchor="middle"
          fill="#8d7a9f" font-size="16"
          letter-spacing="3">
      FICHA DE PERSONAGEM • KILLUA
    </text>
  </svg>`;

  const pasta = await mkdtemp(
    path.join(process.cwd(), '.ficha-')
  );

  try {
    const arquivoSVG = path.join(pasta, 'ficha.svg');
    const arquivoPNG = path.join(pasta, 'ficha.png');

    await writeFile(arquivoSVG, svg, 'utf8');

    execFileSync('rsvg-convert', [
      '-w', String(W),
      '-h', String(H),
      '-o', arquivoPNG,
      arquivoSVG
    ], { stdio: 'pipe' });

    return await readFile(arquivoPNG);
  } finally {
    await rm(pasta, { recursive: true, force: true });
  }
}

export default {
  name: 'ficha',
  aliases: ['perfilanime', 'personagem'],
  description: 'Cria uma ficha de personagem estilo anime.',

  async execute(ctx) {
    const { yuta, from, info, quoted } = ctx;

    const msg = info?.message || {};

    const contexto =
      msg.extendedTextMessage?.contextInfo ||
      msg.imageMessage?.contextInfo ||
      msg.videoMessage?.contextInfo ||
      {};

    const mencoes = Array.isArray(contexto.mentionedJid)
      ? contexto.mentionedJid
      : [];

    const alvo =
      mencoes[0] ||
      contexto.participant ||
      quoted?.sender ||
      info?.sender ||
      info?.key?.participant;

    const participante = (ctx.groupMembers || []).find(item =>
      [item?.id, item?.jid, item?.lid, item?.phoneNumber]
        .some(id => mesmoId(id, alvo))
    );

    const destinatario = alvo || ctx.sender;

    if (!destinatario) {
      return ctx.reply('Não consegui identificar o participante.');
    }

    await ctx.reply('☠️ Criando ficha do personagem...');

    try {
      const nome = await buscarNome(
        destinatario,
        participante,
        ctx
      );

      const idsFoto = [
        participante?.id,
        participante?.jid,
        participante?.phoneNumber,
        destinatario
      ];

      const foto = await carregarFoto(yuta, idsFoto);
      const atributos = gerarAtributos();
      const imagem = await gerarFicha(nome, foto, atributos);

      const numeroAlvo = destinatario
        .split('@')[0]
        .split(':')[0];

      await yuta.sendMessage(from, {
        image: imagem,
        caption:
          `☠️ *FICHA DE PERSONAGEM*\n\n` +
          `👤 *Personagem:* ${nome}\n` +
          `⭐ *Nível:* ${atributos.nivel}\n` +
          `⚔️ *Classe:* ${atributos.classe}\n` +
          `💎 *Raridade:* ${atributos.raridade}\n\n` +
          `☠️ *KILLUA ZOLDYCK BOT*`,
        mentions: [destinatario]
      });
    } catch (erro) {
      console.error('[FICHA]', erro?.stack || erro);
      return ctx.reply(
        '❌ Não consegui criar a ficha. Verifique se o renderizador está instalado.'
      );
    }
  }
};
