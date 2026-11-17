import { fileURLToPath as __fileURLToPath } from 'url';
import { dirname as __dirnamePath } from 'path';
import { readFileSync as __readJSONFileSync } from 'fs';
import { writeFile } from 'fs';
import { request } from 'undici';
const __filename = __fileURLToPath(import.meta.url);
const __dirname = __dirnamePath(__filename);
const loadJSON = (file) => JSON.parse(__readJSONFileSync(file, 'utf8'));

'use strict';

const BASE_URL = 'https://translate.google.com/translate_tts';
const MAX_CHARS = 100;

function Text2Speech(lang = 'pt') {
    const idioma = lang.toLowerCase();

    return {
        save: async (filepath, text, callback) => {
            try {
                const partes = dividirTexto(text);
                const total = partes.length;

                for (let i = 0; i < total; i++) {
                    const args = gerarArgs(idioma, partes[i], i, total);
                    const {
                        body
                    } = await request(BASE_URL + args, {
                        method: 'GET',
                        headers: {
                            'User-Agent': 'Mozilla/5.0'
                        }
                    });

                    const buffer = Buffer.from(await body.arrayBuffer());
                    writeFile(filepath, buffer, callback);
                }
            } catch (err) {
                console.error('[GTTS]', err);
                if (callback) callback(err);
            }
        }
    };
}

function gerarArgs(lang, text, index, total) {
    const encoded = encodeURIComponent(text);
    return `?ie=UTF-8&tl=${lang}&q=${encoded}&total=${total}&idx=${index}&client=tw-ob&textlen=${text.length}`;
}

function dividirTexto(text) {
    if (!text) throw new Error('Texto vazio');
    const partes = [];
    let buffer = '';

    for (const palavra of text.split(' ').slice(1)) {
        if ((buffer + palavra).length > MAX_CHARS) {
            partes.push(buffer.trim());
            buffer = palavra + ' ';
        } else {
            buffer += palavra + ' ';
        }
    }
    if (buffer.trim()) partes.push(buffer.trim());
    return partes;
}
export default Text2Speech;
export { Text2Speech };
