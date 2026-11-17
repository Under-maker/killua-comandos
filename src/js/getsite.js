import { fileURLToPath as __fileURLToPath } from 'url';
import { dirname as __dirnamePath } from 'path';
import { readFileSync as __readJSONFileSync } from 'fs';
import { writeFileSync } from 'fs';
import axios from 'axios';
import { load } from 'cheerio';
let css, html;

const __filename = __fileURLToPath(import.meta.url);
const __dirname = __dirnamePath(__filename);
const loadJSON = (file) => JSON.parse(__readJSONFileSync(file, 'utf8'));

'use strict';
/**
 * Obtenha a source de um site HTML
 * Suporte a JS, CSS E HTML
 * Após é guardado tudo em 1 arquivo TXT
 * By Lm Only
 *
 * Lm não domina 
 * Nk devs modz domina
 */
 
async function getHtml(url) {
    try {
        const { 
            data 
        } = await axios.get(url);
        
        const $ = load(data);
        
        let javascript = "\n\n//==JAVASCRIPT==\\\n\n", css = "\n\n//==CSS==\\\n\n", html = "\n\n<!--HTML-->\n\n" + data;
        
        $('script').each(function () {
            const element = $(this);
            javascript += "\n" + element.text();
        });
        
        $('style').each(function () {
            const element = $(this);
            css += "\n" + element.text();
        });
        
        const result = javascript + css + html;
        
        const fileName = `./source-${Date.now()}.txt`;
        
        writeFileSync(fileName, result);
        
        return fileName;
    } catch (e) {
        throw new Error(e);
    }
}
export { getHtml as getHtml };
