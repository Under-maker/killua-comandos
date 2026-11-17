import fetch from 'node-fetch';
import cfonts from 'cfonts';
import fs from 'fs';
import axios from 'axios';
import Crypto from 'crypto';
import chalk from 'chalk';
import { exec } from 'child_process';
import mimetype from 'mime-types';
import * as cheerio from 'cheerio';
import { spawn } from 'child_process';
import ff from 'fluent-ffmpeg';
import { JSDOM } from 'jsdom';
import qs from 'qs';
import { fileTypeFromBuffer } from 'file-type';
import toMs from 'ms';
import request from 'request';
import ffmpeg from 'fluent-ffmpeg';
import moment from 'moment-timezone';
import webp from 'node-webpmux';
import crypto from 'crypto';
import { uploadYuta } from './yuta-api.js';
let a, b, pc;

const log = console.debug;
var corzinhas = ["red", "green", "yellow", "blue","magenta", "cyan", "", "gray", "redBright","greenBright", "yellowBright", "blueBright", "magentaBright", "cyanBright", "whiteBright"];
const cor1 = corzinhas[Math.floor(Math.random() * (corzinhas.length))];	
const cor2 = corzinhas[Math.floor(Math.random() * (corzinhas.length))];	
const cor3 = corzinhas[Math.floor(Math.random() * (corzinhas.length))];
const cor4 = corzinhas[Math.floor(Math.random() * (corzinhas.length))];	
const cor5 = corzinhas[Math.floor(Math.random() * (corzinhas.length))];

const ceemde = JSON.parse(fs.readFileSync('./src/dados/data/totalcmd.json'));

const getpc = async function(totalchat){
pc = [];
a = [];
b = [];
for (var c of totalchat){
a.push(c.id);
}
for (var d of a){
if (d && !d.includes('g.us')){
b.push(d);
}
}
return b;
};

/**
 * Envia arquivos para a Yuta Uploads usando o SDK oficial.
 * O token/site são lidos dinamicamente, então #settoken funciona sem reiniciar.
 */
async function upload(buffer, name) {
    try {
        return await uploadYuta(buffer, name);
    } catch (error) {
        console.error(error?.message || error);
        return null;
    }
}
function convertSticker(webpSticker, author, packname, categories = [''], extra = {}) {
    return new Promise(async (resolve, reject) => {
        try {
            const img = new webp.Image();
            const stickerPackId = crypto.randomBytes(32).toString('hex');
            const json = { 
                'sticker-pack-id': stickerPackId, 
                'sticker-pack-name': packname, 
                'sticker-pack-publisher': author, 
                'emojis': categories, 
                ...extra 
            };
        
            const exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00]);
            const jsonBuffer = Buffer.from(JSON.stringify(json), 'utf8');
            const exif = Buffer.concat([exifAttr, jsonBuffer]);

            exif.writeUIntLE(jsonBuffer.length, 14, 4);
            
            const bufferSticker = Buffer.from(webpSticker.replace(/^data:image\/jpeg;base64,/, ''), 'base64');
            await img.load(bufferSticker);
            img.exif = exif;

            const result = await img.save(null);
            resolve(result);
        } catch (err) {
            reject(new Error("Erro ao processar a figurinha: " + err.message));
        }
    });
}
async function pegarCases(nomes = []) {
  if (!Array.isArray(nomes)) nomes = [nomes];
  const arquivo = fs.readFileSync('./index.js', 'utf8');
  const encontrados = [];
  const naoEncontrados = [];
  for (let nome of nomes) {
    if (!nome) continue; 
    nome = nome.trim();
    const regex = new RegExp(`case '${nome}'[\\s\\S]*?break`, 'm');
    const match = arquivo.match(regex);
    if (!match) {
      naoEncontrados.push(nome);
      continue;
    }
    let caseConteudo = match[0].replace(/break/, 'break; //Nk\' Petrøv');
    encontrados.push(caseConteudo);
  }
  const arquivoFinal = encontrados.length
    ? `/* \n case(s) abaixo, peço que deixe os devidos créditos.\n criador dessa getcase → @Nk Petrøv.\n pegue as cases aí e use com moderação.\n*/\n\n${encontrados.join('\n\n')}` : null;
  return { arquivoFinal, naoEncontrados };
}


const __mediaKeys = { image: 'imageMessage', video: 'videoMessage', audio: 'audioMessage', sticker: 'stickerMessage', document: 'documentMessage' };
const __mediaAliases = { imagem: 'image', foto: 'image', vídeo: 'video', audio: 'audio', áudio: 'audio', figurinha: 'sticker', documento: 'document' };

function __unwrapMedia(message = {}) {
    let current = message || {};
    for (let i = 0; i < 10; i++) {
        const next = current?.ephemeralMessage?.message || current?.viewOnceMessage?.message || current?.viewOnceMessageV2?.message ||
            current?.viewOnceMessageV2Extension?.message || current?.documentWithCaptionMessage?.message;
        if (!next) break;
        current = next;
    }
    return current || {};
}

// Retorna mídia direta/citada já desempacotada: image, video, audio, sticker ou document.
function getAnyMedia(info = {}, tipos = Object.keys(__mediaKeys)) {
    const wanted = (Array.isArray(tipos) ? tipos : [tipos])
        .map(v => __mediaAliases[String(v || '').toLowerCase()] || String(v || '').toLowerCase())
        .filter(v => __mediaKeys[v]);
    const root = __unwrapMedia(info?.message || info || {}), allowed = wanted.length ? wanted : Object.keys(__mediaKeys);
    const ctx = [root?.extendedTextMessage, root?.imageMessage, root?.videoMessage, root?.audioMessage, root?.documentMessage, root?.stickerMessage]
        .map(v => v?.contextInfo).find(v => v?.quotedMessage);
    const sources = [[__unwrapMedia(ctx?.quotedMessage || {}), true], [root, false]];
    for (const [source, quoted] of sources) for (const type of allowed) {
        const key = __mediaKeys[type], message = source?.[key];
        if (message) return { message, type, key, mimetype: message?.mimetype || '', quoted };
    }
    return null;
}

function carregarMidia(customName = "fotomenu") {
    const pasta = './src/dados/settings/LOGOS'
    const image = `${pasta}/${customName}.png`
    const video = `${pasta}/${customName}.mp4`
    if (fs.existsSync(video)) {
        return {
            type: "video",
            data: fs.readFileSync(video)
        }
    }
    if (fs.existsSync(image)) {
        return {
            type: "image",
            data: fs.readFileSync(image)
        }
    }
    return { type: "text" }
}
const fetchJson = (url, options) => new Promise(async (resolve, reject) => {
fetch(url, options).then(response => response.json())
 .then(json => {
//console.log(json)
resolve(json)
}).catch((err) => {
reject(err)
})
})
const fetchText = (url, options) => new Promise(async (resolve, reject) => {
fetch(url, options).then(response => response.text()).then(text => {
// console.log(text)
resolve(text)
}).catch((err) => {
reject(err)
})
})
const createExif = (pack, auth) =>{
const code = [0x00,0x00,0x16,0x00,0x00,0x00]
const exif = {"sticker-pack-id": "com.client.tech", "sticker-pack-name": pack, "sticker-pack-publisher": auth, "android-app-store-link": "https://play.google.com/store/apps/details?id=com.termux", "ios-app-store-link": "https://itunes.apple.com/app/sticker-maker-studio/id1443326857"}
let len = JSON.stringify(exif).length
if (len > 256) {
len = len - 256
code.unshift(0x01)
} else {
code.unshift(0x00)
}
if(len < 16) {
len = len.toString(16)
len = "0" + len
} else {
len = len.toString(16)
}
const _ = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00]);
const __ = Buffer.from(len, "hex")
const ___ = Buffer.from(code)
const ____ = Buffer.from(JSON.stringify(exif))
fs.writeFileSync('./arquivos/sticker/data.exif', Buffer.concat([_, __, ___, ____]), function (err) {
console.log(err)
if (err) return console.error(err)
return `./arquivos/sticker/data.exif`
})
}

/*getBuffer = getBuffer = async (url) => {
const res = await fetch(url, {headers: { 'User-Agent': 'okhttp/4.5.0'}, method: 'GET' })
const anu = fs.readFileSync('./src/emror.jpg')
if (!res.ok) return { type: 'image/jpeg', result: anu }
const buff = await res.buffer()
if(buff)
return { type: res.headers.get('content-type'), result: buff }
}*/

const getBuffer = async (url, opcoes) => {
try {
opcoes ? opcoes : {}
const post = await axios({
method: "get",
url,
headers: {
'user-agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.128 Safari/537.36', 
	'DNT': 1,
	'Upgrade-Insecure-Request': 1
},
...opcoes,
responseType: 'arraybuffer'
})
return post.data
} catch (erro) {
console.log(`Erro identificado: ${erro}`)
}
}

const randomBytes = (length) => {
return Crypto.randomBytes(length);
};

const generateMessageID = () => {
return randomBytes(10).toString('hex').toUpperCase();
};

const getExtension = async (type) => {
return await mimetype.extension(type)
}

function normalizeJid(jid) {
    if (!jid) return null;
    let id = jid.replace(/:.*(?=@)/, '');
    if (id.endsWith('@lid')) {
        id = id.replace('@lid', '@s.whatsapp.net');
    } else if (!id.endsWith('@s.whatsapp.net')) {
        id += '@s.whatsapp.net';
    }
    return id;
}

function limparJidParticipante(valor = '') {
valor = String(valor || '').trim();
if (!valor) return null;
valor = valor.replace(/:.*(?=@)/, '');
if (valor.includes('@s.whatsapp.net')) return valor;
if (valor.includes('@lid')) return valor;
const num = valor.replace(/\D/g, '');
if (num.length >= 10 && num.length <= 15) return `${num}@s.whatsapp.net`;
return null;
}

function jidPrincipalParticipante(p = {}) {
const candidatosTelefone = [
 p.phoneNumber,
 p.jid,
 p.participantAlt,
 p.participant,
 p.remoteJid,
 p.id
];
for (const valor of candidatosTelefone) {
 const jid = limparJidParticipante(valor);
 if (jid && jid.endsWith('@s.whatsapp.net')) return jid;
}
const candidatosLid = [p.lid, p.id, p.jid, p.participant];
for (const valor of candidatosLid) {
 const jid = limparJidParticipante(valor);
 if (jid && jid.endsWith('@lid')) return jid;
}
return null;
}

function idsParticipante(p = {}) {
const principal = jidPrincipalParticipante(p);
return principal ? [principal] : [];
}

function getGroupAdmins(participants = []) {
return [...new Set(
 (Array.isArray(participants) ? participants : [])
 .filter(p => p?.admin === 'admin' || p?.admin === 'superadmin')
 .map(jidPrincipalParticipante)
 .filter(Boolean)
)];
};

function getMembros(participants = []) {
const saida = [];
const vistos = new Set();
for (const p of (Array.isArray(participants) ? participants : [])) {
 if (p?.admin === 'admin' || p?.admin === 'superadmin') continue;
 const jid = jidPrincipalParticipante(p);
 if (!jid) continue;
 const chave = String(jid).split('@')[0].replace(/\D/g, '') || String(jid).replace(/@.+$/, '');
 if (vistos.has(chave)) continue;
 vistos.add(chave);
 saida.push(jid);
}
return saida;
};

const getRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`;
};

const banner2 = cfonts.render((`Copyright 2026 | sempre melhorando e evoluindo.`), {
font: 'console',
align: 'center',
gradient: ['red', 'magenta']
});

const banner3 = cfonts.render((`YUTA|BOT MD`), {
font: 'block',
align: 'center',
gradient: ['red', 'magenta']
});
 

function temporizador(segundos){
function tempo(s){
return (s < 10 ? '0' : '') + s;
}
var horas = Math.floor(segundos / (60*60));
var minutos = Math.floor(segundos % (60*60) / 60);
var segundos = Math.floor(segundos % 60);
return `${tempo(horas)}:${tempo(minutos)}:${tempo(segundos)}`;
}

const color = (text, color) => {
return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

const bgcolor = (text, bgcolor) => {
return !bgcolor ? chalk.green(text) : chalk.bgKeyword(bgcolor)(text)
}

function recognize(filename, config = {}) {
const options = getOptions(config)
const binary = config.binary || "tesseract"
const command = [binary, `"${filename}"`, "stdout", ...options].join(" ")
if (config.debug) log("command", command)
return new Promise((resolve, reject) => {
exec(command, (error, stdout, stderr) => {
if(config.debug) log(stderr)
if(error) reject(error)
resolve(stdout)
})
})
}

function getOptions(config) {
const ocrOptions = ["tessdata-dir", "user-words", "user-patterns", "psm", "oem", "dpi"]
return Object.entries(config).map(([key, value]) => {
if (["debug", "presets", "binary"].includes(key)) return
if (key === "lang") return `-l ${value}`
if (ocrOptions.includes(key)) return `--${key} ${value}`
return `-c ${key}=${value}`
}).concat(config.presets).filter(Boolean)
}

const authorname = "YutaBot-MD"
const packname = "Creat: Nk' Petrøv #Editor"

const chyt = "559183721035@s.whatsapp.net";
const nit = "559183721035@s.whatsapp.net";
const supre = "559183721035@s.whatsapp.net";

const usedCommandRecently = new Set()
const isFiltered = (from) => !!usedCommandRecently.has(from)
const addFilter = (from) => {
usedCommandRecently.add(from)
setTimeout(() => usedCommandRecently.delete(from), 5000)}


const wait = undefined;
const banner = undefined;
const getBase64 = undefined;

export { getBuffer, fetchJson, fetchText, wait, banner, createExif, getBase64, generateMessageID, getGroupAdmins, normalizeJid, getMembros, getRandom, banner2, temporizador, color, recognize, bgcolor, isFiltered, addFilter, banner3, chyt, getExtension, convertSticker, upload, nit, getpc, supre, pegarCases, carregarMidia, getAnyMedia };
