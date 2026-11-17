import { load } from 'cheerio';
import fs from 'fs';

const EZGIF_URL = 'https://ezgif.com/webp-to-mp4';
const USER_AGENT = 'Mozilla/5.0 (Linux; Android 13) AppleWebKit/537.36 Chrome/120 Mobile Safari/537.36';

function getWebApi() {
  const fetchFn = globalThis.fetch?.bind(globalThis);
  const FormDataCtor = globalThis.FormData;
  const BlobCtor = globalThis.Blob;

  if (!fetchFn || !FormDataCtor || !BlobCtor) {
    throw new Error('Este Node não possui fetch/FormData/Blob global. Use Node 18+ ou Node 20+ no Termux.');
  }

  return { fetchFn, FormDataCtor, BlobCtor };
}

function withTimeout(ms) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), ms);
  return {
    signal: controller.signal,
    done: () => clearTimeout(timer)
  };
}

function normalizeBuffer(file) {
  if (Buffer.isBuffer(file)) return file;
  if (file instanceof Uint8Array) return Buffer.from(file);
  if (typeof file === 'string' && fs.existsSync(file)) return fs.readFileSync(file);
  throw new Error('Arquivo WebP inválido para conversão.');
}

function assertWebp(buffer) {
  if (!Buffer.isBuffer(buffer) || buffer.length < 32) {
    throw new Error('Figurinha vazia ou incompleta.');
  }

  const isWebp = buffer.subarray(0, 4).toString('ascii') === 'RIFF'
    && buffer.subarray(8, 12).toString('ascii') === 'WEBP';

  if (!isWebp) throw new Error('A mídia marcada não veio como WebP válido.');
}

async function post(url, form, timeoutMs = 30000) {
  const timeout = withTimeout(timeoutMs);

  try {
    const { fetchFn } = getWebApi();
    const response = await fetchFn(url, {
      method: 'POST',
      body: form,
      signal: timeout.signal,
      headers: {
        'user-agent': USER_AGENT,
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
      }
    });

    const data = await response.text();
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    return {
      url: response.url,
      data
    };
  } catch (e) {
    throw new Error(`Erro no POST: ${e.message}`);
  } finally {
    timeout.done();
  }
}

class WebToMP4 {
  constructor(url = EZGIF_URL) {
    this.url = url;
  }

  async upload(file) {
    try {
      const buffer = normalizeBuffer(file);
      assertWebp(buffer);

      const { FormDataCtor, BlobCtor } = getWebApi();
      const form = new FormDataCtor();
      form.append('new-image-url', '');
      form.append('new-image', new BlobCtor([buffer], { type: 'image/webp' }), 'image.webp');

      const html = await post(this.url, form);
      return {
        $: load(html.data),
        url: html.url
      };
    } catch (e) {
      throw new Error(`Erro no upload: ${e.message}`);
    }
  }

  async getVideoUrl(uploaded) {
    try {
      const $ = uploaded.$ || uploaded;
      const { FormDataCtor } = getWebApi();
      const form = new FormDataCtor();
      const obj = {};

      const targetForm = $('form').filter((_, el) => {
        const action = String($(el).attr('action') || '').toLowerCase();
        return action.includes('webp-to-mp4') || $(el).find('input[name="file"]').length;
      }).first();

      const formRoot = targetForm.length ? targetForm : $('form').first();
      const action = formRoot.attr('action') || '';

      formRoot.find('input[name]').each((_, el) => {
        const name = $(el).attr('name');
        const value = $(el).val() ?? '';
        obj[name] = value;
        form.append(name, value);
      });

      if (!obj.file) throw new Error('O Ezgif não retornou o arquivo temporário.');
      if (!obj.convert) form.append('convert', 'Convert to MP4!');

      const postUrl = action
        ? new URL(action, uploaded.url || this.url).toString()
        : `${this.url}/${obj.file}`;

      const html = await post(postUrl, form);
      const $$ = load(html.data);
      const src = $$('div#output > p.outfile > video > source').attr('src')
        || $$('div#output video source').attr('src')
        || $$('video source').attr('src');

      if (!src) throw new Error('O Ezgif converteu, mas não retornou a URL do vídeo.');
      return new URL(src, html.url).toString();
    } catch (e) {
      throw new Error(`Erro ao buscar vídeo: ${e.message}`);
    }
  }
}

export async function webp_mp4(file) {
  try {
    const server = new WebToMP4();
    const uploaded = await server.upload(file);
    return await server.getVideoUrl(uploaded);
  } catch (e) {
    throw new Error(`Falha na conversão: ${e.message}`);
  }
}

export const FiguMp4OuGif = webp_mp4;

export default webp_mp4;
