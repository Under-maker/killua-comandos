import { spawn } from 'child_process';

const MAX_INPUT = 30 * 1024 * 1024;

function localizarCitado(obj, depth = 0) {
  if (!obj || typeof obj !== 'object' || depth > 12) return null;

  const citado = obj.contextInfo?.quotedMessage;
  if (citado) return citado;

  for (const [chave, valor] of Object.entries(obj)) {
    if (chave === 'contextInfo') continue;
    const resultado = localizarCitado(valor, depth + 1);
    if (resultado) return resultado;
  }

  return null;
}

function localizarAudio(obj, depth = 0) {
  if (!obj || typeof obj !== 'object' || depth > 12) return null;

  if (obj.audioMessage) return obj.audioMessage;

  for (const valor of Object.values(obj)) {
    const resultado = localizarAudio(valor, depth + 1);
    if (resultado) return resultado;
  }

  return null;
}

async function baixarAudio(ctx) {
  const citado = localizarCitado(ctx.info?.message);
  const audio = localizarAudio(citado);

  if (audio && typeof ctx.downloadContentFromMessage === 'function') {
    const stream = await ctx.downloadContentFromMessage(audio, 'audio');
    const partes = [];

    for await (const parte of stream) {
      partes.push(Buffer.from(parte));
    }

    const buffer = Buffer.concat(partes);
    if (buffer.length) return buffer;
  }

  if (typeof ctx.quoted?.download === 'function') {
    const buffer = await ctx.quoted.download();
    if (Buffer.isBuffer(buffer) && buffer.length) return buffer;
  }

  if (typeof ctx.info?.download === 'function') {
    const buffer = await ctx.info.download();
    if (Buffer.isBuffer(buffer) && buffer.length) return buffer;
  }

  throw new Error(
    'Não encontrei um áudio válido na mensagem respondida. Responda diretamente à mensagem de voz.'
  );
}

function processarAudio(input, filtro) {
  return new Promise((resolve, reject) => {
    const args = [
      '-hide_banner',
      '-loglevel', 'error',
      '-i', 'pipe:0',
      '-map', '0:a:0',
      '-vn',
      '-af', filtro,
      '-ac', '1',
      '-ar', '48000',
      '-b:a', '128k',
      '-f', 'mp3',
      'pipe:1'
    ];

    const ff = spawn('ffmpeg', args, {
      stdio: ['pipe', 'pipe', 'pipe']
    });

    const saida = [];
    let erros = '';
    let tamanho = 0;
    let finalizado = false;

    const concluir = (erro, buffer) => {
      if (finalizado) return;
      finalizado = true;
      clearTimeout(limite);
      if (erro) reject(erro);
      else resolve(buffer);
    };

    const limite = setTimeout(() => {
      ff.kill('SIGKILL');
      concluir(new Error('O processamento demorou demais.'));
    }, 120000);

    ff.stdout.on('data', parte => {
      tamanho += parte.length;

      if (tamanho > MAX_INPUT) {
        ff.kill('SIGKILL');
        concluir(new Error('O áudio convertido ficou grande demais.'));
        return;
      }

      saida.push(parte);
    });

    ff.stderr.on('data', parte => {
      erros += parte.toString();
      if (erros.length > 4000) erros = erros.slice(-4000);
    });

    ff.on('error', erro => concluir(erro));

    ff.on('close', codigo => {
      if (codigo !== 0) {
        concluir(new Error(erros.trim() || 'Falha na conversão do áudio.'));
        return;
      }

      const buffer = Buffer.concat(saida);
      if (!buffer.length) {
        concluir(new Error('O FFmpeg não gerou áudio.'));
        return;
      }

      concluir(null, buffer);
    });

    ff.stdin.on('error', () => {});
    ff.stdin.end(input);
  });
}

export async function aplicarEfeito(ctx, nome, filtro) {
  try {
    const input = await baixarAudio(ctx);

    if (input.length > MAX_INPUT) {
      return ctx.reply('❌ O áudio é muito grande. Envie um arquivo menor.');
    }

    await ctx.reply(`🎧 Aplicando efeito: *${nome}*...`);

    const resultado = await processarAudio(input, filtro);

    await ctx.yuta.sendMessage(
      ctx.from,
      {
        audio: resultado,
        mimetype: 'audio/mpeg',
        ptt: false
      },
      { quoted: ctx.yt }
    );

    return true;
  } catch (erro) {
    console.error(`[AUDIO EFFECT ${nome}]`, erro);
    return ctx.reply(`❌ Não consegui aplicar o efeito: ${erro.message}`);
  }
}
