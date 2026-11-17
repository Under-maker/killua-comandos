import { Jimp, loadFont } from 'jimp';
import path from 'node:path';
import os from 'node:os';
import { execFileSync } from 'node:child_process';
import { mkdtemp, writeFile, rm } from 'node:fs/promises';
import { readFile } from 'node:fs/promises';

const W = 900;
const H = 1200;

const FONT_DIR = path.join(
  process.cwd(),
  'node_modules/@jimp/plugin-print/fonts/open-sans'
);

const aleatorio = lista =>
  lista[Math.floor(Math.random() * lista.length)];

function limparNome(nome) {
  return String(nome || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9 ._-]/g, '')
    .trim()
    .toUpperCase()
    .slice(0, 24);
}

function nomeValido(valor) {
  const nome = String(valor || '').trim();

  if (!nome) return false;
  if (nome.includes('@')) return false;
  if (/^\+?[\d\s().-]+$/.test(nome)) return false;

  return true;
}

function normalizarId(valor) {
  let id = String(valor || '').trim().toLowerCase();

  id = id.replace(/:\d+(?=@)/, '');

  if (/^\d+$/.test(id)) {
    id += '@s.whatsapp.net';
  }

  return id;
}

function mesmoId(a, b) {
  const x = normalizarId(a);
  const y = normalizarId(b);

  if (!x || !y) return false;
  if (x === y) return true;

  if (
    x.endsWith('@s.whatsapp.net') &&
    y.endsWith('@s.whatsapp.net')
  ) {
    return x.split('@')[0] === y.split('@')[0];
  }

  return false;
}

function retangulo(img, x, y, w, h, cor) {
  for (let py = Math.max(0, y); py < Math.min(img.height, y + h); py++) {
    for (let px = Math.max(0, x); px < Math.min(img.width, x + w); px++) {
      img.setPixelColor(cor, px, py);
    }
  }
}

function texto(img, fonte, valor, x, y, largura) {
  img.print({
    font: fonte,
    x,
    y,
    text: String(valor),
    maxWidth: largura
  });
}

async function carregarFontes() {
  const fontes = {};

  for (const [chave, tamanho] of [
    ['gigante', 128],
    ['grande', 64],
    ['media', 32],
    ['pequena', 16]
  ]) {
    const arquivo = path.join(
      FONT_DIR,
      `open-sans-${tamanho}-black`,
      `open-sans-${tamanho}-black.fnt`
    );

    fontes[chave] = await loadFont(arquivo);
  }

  return fontes;
}

function criarPapel() {
  const img = new Jimp({
    width: W,
    height: H,
    color: 0xffdfb982
  });

  // Textura de pergaminho envelhecido
  for (let i = 0; i < 38000; i++) {
    const x = Math.floor(Math.random() * W);
    const y = Math.floor(Math.random() * H);

    const cor = aleatorio([
      0xffc99b61,
      0xffe9c99b,
      0xfff0d9ad,
      0xffb98954,
      0xffd5ad78
    ]);

    img.setPixelColor(cor, x, y);
  }

  // Manchas antigas nas bordas
  for (let i = 0; i < 1800; i++) {
    const lado = Math.floor(Math.random() * 4);

    let x, y;

    if (lado === 0) {
      x = Math.random() * W;
      y = Math.random() * 75;
    } else if (lado === 1) {
      x = Math.random() * W;
      y = H - Math.random() * 75;
    } else if (lado === 2) {
      x = Math.random() * 75;
      y = Math.random() * H;
    } else {
      x = W - Math.random() * 75;
      y = Math.random() * H;
    }

    img.setPixelColor(
      aleatorio([0xff9c6638, 0xffa97743, 0xffeacb9c]),
      Math.floor(x),
      Math.floor(y)
    );
  }

  return img;
}

async function carregarFoto(yuta, ids) {
  for (const jid of ids) {
    if (!jid) continue;

    try {
      const url = await yuta.profilePictureUrl(jid, 'image');
      if (!url) continue;

      const resposta = await fetch(url);
      if (!resposta.ok) continue;

      const buffer = Buffer.from(await resposta.arrayBuffer());

      if (!buffer.length || buffer.length > 8 * 1024 * 1024) {
        continue;
      }

      return await Jimp.read(buffer);
    } catch {}
  }

  return null;
}


function escaparSVG(valor) {
  return String(valor)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

async function gerarCartaz(nome, foto) {
  const nomeFinal = escaparSVG(limparNome(nome) || 'DESCONHECIDO');

  const recompensas = [
    '฿ 85.000.000',
    '฿ 120.500.000',
    '฿ 250.000.000',
    '฿ 500.000.000',
    '฿ 999.999.999',
    '฿ 1.500.000.000'
  ];

  const recompensa = aleatorio(recompensas);

  let imagem = '';

  if (foto) {
    const retrato = foto.clone();

    const largura = 650;
    const altura = 470;

    const escala = Math.max(
      largura / retrato.width,
      altura / retrato.height
    );

    const nw = Math.ceil(retrato.width * escala);
    const nh = Math.ceil(retrato.height * escala);

    retrato.resize({ w: nw, h: nh });

    retrato.crop({
      x: Math.floor((nw - largura) / 2),
      y: Math.floor((nh - altura) / 2),
      w: largura,
      h: altura
    });

    const buffer = await retrato.getBuffer('image/png');
    imagem = `data:image/png;base64,${buffer.toString('base64')}`;
  }

  const retratoSVG = imagem
    ? `<image href="${imagem}" x="125" y="275" width="650" height="470" preserveAspectRatio="xMidYMid slice"/>`
    : `<text x="450" y="525" text-anchor="middle" font-size="65">NO PHOTO</text>`;

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink"
     width="900" height="1200" viewBox="0 0 900 1200">

  <defs>
    <linearGradient id="paper" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#f8f0df"/>
      <stop offset=".5" stop-color="#eee1c9"/>
      <stop offset="1" stop-color="#e6d4b8"/>
    </linearGradient>

    <linearGradient id="photo" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#b9a58a"/>
      <stop offset="1" stop-color="#eadbc3"/>
    </linearGradient>

    <filter id="grain">
      <feTurbulence type="fractalNoise" baseFrequency=".65"
                    numOctaves="2" seed="8"/>
      <feColorMatrix values="
        .25 0 0 0 0
        0 .20 0 0 0
        0 0 .12 0 0
        0 0 0 .12 0"/>
      <feBlend in="SourceGraphic" mode="multiply"/>
    </filter>

    <clipPath id="photoClip">
      <rect x="125" y="275" width="650" height="470"/>
    </clipPath>
  </defs>

  <!-- Papel -->
  <rect width="900" height="1200" fill="url(#paper)"/>

  <!-- Manchas antigas -->
  <g fill="#a77c4d" opacity=".12">
    <ellipse cx="80" cy="120" rx="75" ry="105"/>
    <ellipse cx="810" cy="180" rx="65" ry="100"/>
    <ellipse cx="100" cy="1050" rx="85" ry="110"/>
    <ellipse cx="800" cy="1060" rx="80" ry="100"/>
  </g>

  <!-- Bordas discretas -->
  <rect x="35" y="25" width="830" height="1150"
        fill="none" stroke="#4a3324" stroke-width="3"/>
  <rect x="43" y="33" width="814" height="1134"
        fill="none" stroke="#9a7854" stroke-width="1.5"/>

  <!-- Cabeçalho -->
  <text x="450" y="77" text-anchor="middle"
        font-family="Noto Serif, serif"
        font-size="21" letter-spacing="3"
        fill="#38291f">MARINE WORLD GOVERNMENT</text>

  <!-- WANTED -->
  <text x="450" y="235" text-anchor="middle"
        font-family="Noto Serif, serif"
        font-size="150" font-weight="900"
        letter-spacing="-5"
        fill="#251b16">WANTED</text>

  <!-- Ornamentos laterais -->
  <g fill="none" stroke="#57402d" stroke-width="3" opacity=".85">
    <path d="M95 330 C35 290 45 250 90 260 C125 270 110 315 75 300
             M805 330 C865 290 855 250 810 260 C775 270 790 315 825 300"/>
    <path d="M95 760 C35 800 45 840 90 830 C125 820 110 775 75 790
             M805 760 C865 800 855 840 810 830 C775 820 790 775 825 790"/>
    <path d="M85 350 Q45 400 85 440
             M815 350 Q855 400 815 440"/>
  </g>

  <!-- Moldura do retrato -->
  <rect x="112" y="262" width="676" height="496"
        fill="#39291e"/>
  <rect x="119" y="269" width="662" height="482"
        fill="url(#photo)"/>

  <g clip-path="url(#photoClip)">
    ${retratoSVG}
  </g>

  <!-- DEAD OR ALIVE -->
  <text x="450" y="820" text-anchor="middle"
        font-family="Noto Serif, serif"
        font-size="54" font-weight="bold"
        letter-spacing="2"
        fill="#2b2019">DEAD OR ALIVE</text>

  <!-- Nome -->
  <text x="450" y="905" text-anchor="middle"
        font-family="Noto Serif, serif"
        font-size="54" font-weight="bold"
        textLength="700" lengthAdjust="spacingAndGlyphs"
        fill="#241a15">${nomeFinal}</text>

  <!-- Divisor -->
  <path d="M115 940 H785" stroke="#5b402c" stroke-width="2"/>

  <!-- Recompensa -->
  <text x="450" y="1030" text-anchor="middle"
        font-family="Noto Serif, serif"
        font-size="66" font-weight="bold"
        fill="#251b16">${recompensa}</text>

  <!-- Rodapé -->
  <text x="450" y="1100" text-anchor="middle"
        font-family="Noto Serif, serif"
        font-size="25" letter-spacing="2"
        fill="#39291e">KILLUA ZOLDYCK BOT</text>

  <text x="450" y="1140" text-anchor="middle"
        font-family="Noto Serif, serif"
        font-size="17" letter-spacing="3"
        fill="#57402d">FICTIONAL BOUNTY</text>

</svg>`;

  const pasta = await mkdtemp(path.join(os.tmpdir(), 'yuta-wanted-'));
  const arquivoSVG = path.join(pasta, 'cartaz.svg');
  const arquivoPNG = path.join(pasta, 'cartaz.png');

  try {
    await writeFile(arquivoSVG, svg, 'utf8');

    execFileSync('rsvg-convert', [
      '-w', '900',
      '-h', '1200',
      '-o', arquivoPNG,
      arquivoSVG
    ], { stdio: 'pipe' });

    const { readFile } = await import('node:fs/promises');
    return await readFile(arquivoPNG);
  } finally {
    await rm(pasta, { recursive: true, force: true });
  }
}

async function buscarNome(participante, alvo, ctx) {
  const ids = [
    alvo,
    participante?.id,
    participante?.jid,
    participante?.lid,
    participante?.phoneNumber,
    participante?.participant
  ].filter(Boolean);

  // Primeiro: nome oficial disponibilizado pelo grupo
  for (const campo of [
    'notify',
    'name',
    'verifiedName',
    'pushName'
  ]) {
    const valor = participante?.[campo];

    if (nomeValido(valor)) return valor;
  }

  // Segundo: nomes já registrados na memória do Yuta
  const registros = Array.isArray(ctx.pushnames) ? ctx.pushnames : [];

  const registroPushname = registros.find(item =>
    ids.some(id => mesmoId(item?.id, id))
  );

  if (nomeValido(registroPushname?.nick)) {
    return registroPushname.nick;
  }

  // Segundo: cadastro persistente de nomes do Yuta
  try {
    const arquivo = path.join(
      process.cwd(),
      'src/dados/usuarios/users.json'
    );

    const dados = JSON.parse(await readFile(arquivo, 'utf8'));

    if (Array.isArray(dados)) {
      const registro = dados.find(item =>
        ids.some(id => mesmoId(item?.id, id))
      );

      if (nomeValido(registro?.nick)) {
        return registro.nick;
      }
    }
  } catch {}

  // Terceiro: pushname do próprio remetente, se for o alvo
  const remetentes = [
    ctx.sender,
    ctx.info?.sender,
    ctx.info?.key?.participant,
    ctx.info?.key?.participantAlt,
    ctx.info?.key?.senderAlt
  ];

  if (
    remetentes.some(id => ids.some(alvoId => mesmoId(id, alvoId))) &&
    nomeValido(ctx.pushname)
  ) {
    return ctx.pushname;
  }

  return 'DESCONHECIDO';
}

export default {
  name: 'procurado',
  aliases: ['wanted', 'cartaz'],
  description: 'Cria um cartaz de procurado estilo One Piece.',

  async execute(ctx) {
    const { yuta, from, info, quoted } = ctx;

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

    const alvo =
      mencoes[0] ||
      contexto.participant ||
      quoted?.sender ||
      info?.sender ||
      info?.key?.participant ||
      info?.participant;

    if (!alvo) {
      return ctx.reply(
        'Não consegui identificar o participante.'
      );
    }

    await ctx.reply('☠️ Preparando o cartaz de procurado...');

    try {
      const membros = Array.isArray(ctx.groupMembers)
        ? ctx.groupMembers
        : [];

      const participante = membros.find(p => {
        const ids = [
          p?.id,
          p?.jid,
          p?.lid,
          p?.phoneNumber,
          p?.participant
        ];

        return ids.some(id => mesmoId(id, alvo));
      });

      const nome = await buscarNome(
        participante,
        alvo,
        ctx
      );

      const foto = await carregarFoto(yuta, [
        participante?.phoneNumber,
        participante?.id,
        participante?.jid,
        alvo
      ]);

      const buffer = await gerarCartaz(nome, foto);

      const numero = String(
        participante?.phoneNumber || alvo
      ).split('@')[0].split(':')[0];

      const mencaoJid =
        participante?.phoneNumber
          ? (
              String(participante.phoneNumber).includes('@')
                ? participante.phoneNumber
                : `${participante.phoneNumber}@s.whatsapp.net`
            )
          : alvo;

      await yuta.sendMessage(
        from,
        {
          image: buffer,
          caption:
            `☠️ ${nome} está sendo procurado nesse grupo por ser caloteiro.`,
          mentions: [mencaoJid]
        },
        { quoted: info }
      );

    } catch (erro) {
      console.error(
        '[PROCURADO]',
        erro?.stack || erro
      );

      await ctx.reply(
        '❌ Não consegui gerar o cartaz. Verifique o terminal.'
      );
    }
  }
};
