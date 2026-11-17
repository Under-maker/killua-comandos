/*
*  ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
*        YUTA — OFICIAL ✨
* ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
*
* Desenvolvida com dedicação por Nk Petrøv.
* Apoio especial: Equipe oficial do YutaBot-MD
*
* Esta base carrega tempo, cuidado e carinho.
* Não revenda, não repasse e não distribua
* sem autorização.
*
* API oficial dos downloads:
* https://yuta-apis.xyz
*
* Feito para quem valoriza o projeto. 💙
*/
import { fileURLToPath as __fileURLToPath } from 'url';
import { dirname as __dirnamePath } from 'path';
import { execFile } from 'child_process';
import * as __takeFs from 'fs';
import { readFileSync as __readJSONFileSync } from 'fs';
import { downloadContentFromMessage, downloadMediaMessage, Browsers, delay, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, getContentType, prepareWAMessageMedia, jidNormalizedUser } from '@whiskeysockets/baileys';
import { fs, Boom, axios, crypto, util, P, linkfy, request, cheerio, ms, ffmpeg, qrterminal, exec, spawn, execSync, moment, color, time, hora, date, getBuffer, convertSticker, recognize, fetchJson, fetchText, fetch, getBase64, createExif, writeExifImg, upload, nit, addBanned, unBanned, BannedExpired, cekBannedUser, validmove, setGame, addComandosId, deleteComandos, getComandoBlock, getComandos, addComandos, palavrasANA, quizanimais, garticArchives, whatMusicAr, enigmaArchive, quizFutebol, getpc, supre, wait, getExtension, generateMessageID, vyroEngine, getGroupAdmins, normalizeJid, getMembros, emoji, sendPoll, getRandom, banner2, banner3, temporizador, chyt, kyun, TimeCount, botoff, colors, os, addFilter, isFiltered, ytdl, psycatgames, MultiDownload, AssemblyAI, obeso, countDays, timeDate, Limit_CMD, capitalizeFirstLetter, shuffle, pushnames, formatNumber, formatNumberDecimal, awaitMessage, listCommands, extractMetadata, extractDDD, extractStateFromNumber, extractStateFromDDD, obrigadoEXT, addNumberMais, identArroba, pegarCases, carregarMidia } from './src/funcoes/functions.js';
import { v4 as uuidv4 } from 'uuid';
import { createPairCode, startSubBot, stopSubBot, restoreSubBots, loadSubDB, getSubInfo, saveSubDB, updateSubPrefix, normalizeSubPrefix } from './src/js/sub.js';
import { relayButtonMessage, sendLikeInnovators, sendInteractiveImageButtons, generateInnovatorsInteractiveMessage } from './src/funcoes/buttons.js';
import yts from 'yt-search';
import { criarPagamentoPix, verificarPix } from './src/funcoes/pix.js';
import { linguagem, MENU, mess, getInfo, destrava, destrava2, tabela, namoro1, namoro2, tools, advices, ban, joguinhodavelhajs, joguinhodavelhajs2, nescessario, setting, logoslink, vip, muted, sendVideoAsSticker, sendImageAsSticker, sendVideoAsSticker2, sendImageAsSticker2, sotoy, daily, comandos, limitefll, antispam, anotar, enviarfiguUrl, getFileBuffer, getAnyMedia, DLT_FL, speed, sleep, ANT_LTR_MD_EMJ, packname, getName, chaves, grupos } from './src/funcoes/functions.js';
import forca from './src/dados/data/media/forca/index.js';
import { webp, author, matrix as __mx } from './src/js/rename.js';
import path from 'path';
import chalk from 'chalk';
import getSimilarity from './src/js/similaridade.js';
import { registrarNoPrefix, removerNoPrefix, getComandoNoPrefix, registrarFigSticker, removerFigSticker, getComandoFig, listarFigStickers, listarNoPrefix } from './src/funcoes/command.js';
import { getHtml } from './src/js/getsite.js';
import webp_mp4 from './src/funcoes/togif.js';
import { dbCheck, dbClear, formatDbReport, hasWork } from './src/funcoes/db-cleaner.js';
import { api, getYutaConfig, setYutaApiToken, yutaUrl } from './src/funcoes/yuta-api.js';
import { readStore, writeStore, getGroupConfig, ensureGroupConfig, saveGroupConfig, getWelcomeConfig, saveWelcomeConfig, createDefaultGroupConfig, readRentalAuto, saveRentalAuto, readRentalConfig, saveRentalConfig, readRentalGroups, saveRentalGroups } from './src/funcoes/sqlite.js';
let i, C2, CoinsUser, CoinsUser_, DM_, DM_2, RG_US, Return, TAMBOR, adms, adv, afeto, anu, asetrate, atempo, base64, bl, bla, blabla, black, blad, blam, blat, brown, buffimg, caixa, cnvt, countDay, cp1, cp2, cp3, cp4, cpf, create, cstt, dataAB, dataQA, dataQF, ddd, dddlist, ddds, description, dfndofc, dua, duration, dvip, encmediats, enigmaD, enigmaTezt, equalizer, f, findindex, ftgp, garticText, getsmlrt, imageCreate, inff, ip, isAdminRequired, isGroupRequired, isModoBnRequired, isModoCoinsRequired, isOwnerRequired, link_dgp, linkgc, medipp, mega, memberr, men, nivel, owgi, photoG, post, rafa, rcrt, reaction, satu, sd, sendAudio, setpts, sprd, text1_a, text2_b, textM, tkks, tp, txtin, txtz, typeMessage, views, vy, wew, whatMusic, width, width_type, wmusic;
let countMessage = readStore('count_message', 'root', []);
const relayWAMessage = undefined;
const mentionedJid = undefined;
const MediaType = undefined;
const Browser = undefined;
const MessageType = undefined;
const Presence = undefined;
const Mimetype = undefined;
const getLastMessageInChat = undefined;
const logger = undefined;
const makeInMemoryStore = undefined;
const INativeFlowMessage = undefined;
let NkChannelKk = {};
const __filename = __fileURLToPath(import.meta.url);
const __dirname = __dirnamePath(__filename);
const TAKE_DB_PATH = path.resolve(__dirname, 'src/dados/usuarios/take.json');
const TAKE_DB_EXTRA_PATH = path.resolve(process.cwd(), 'src/dados/usuarios/take.json');
const loadJSON = (file) => JSON.parse(__readJSONFileSync(file, 'utf8'));
const directory = `./src/dados/anti_sp.json`;
const ANT_SP = JSON.parse(fs.readFileSync(directory));
const ultimosNicks = {};
const { botoes, antipv, antipv2, antipv3, visualizarmsg, numero_dono1, numero_dono2, numero_dono3, numero_dono4, numero_dono5, numero_dono6, msgantipv1, msgantipv2, API_KEY_INVERTEXTO } = loadJSON(new URL('./src/dados/settings/media/nescessario.json', import.meta.url));
const { NomeDoBot, ownerName, prefix, channel, channelnk, group, CREDENTIALS_USER, SITE } = loadJSON(new URL('./src/dados/settings/media/settings.json', import.meta.url));
const AUDIO_OGG_TMP_DIR = path.resolve(__dirname, 'src/dados/temp/audio-ogg');

/**
 * Transforma áudio para OGG/Opus.
 * Suporta Buffer, URL, caminho local e objeto { url }.
 *
 * @param {Buffer|string|{url:string}} filePathBufferOrUrl
 * @returns {Promise<Buffer>}
 */
export const sendAudioOgg = async (filePathBufferOrUrl) => {
const source = filePathBufferOrUrl?.url || filePathBufferOrUrl;
if (!Buffer.isBuffer(source) && typeof source !== 'string')
throw new TypeError('Áudio inválido: use Buffer, URL ou caminho de arquivo.');

fs.mkdirSync(AUDIO_OGG_TMP_DIR, { recursive: true });
const id = `${Date.now()}_${crypto.randomBytes(6).toString('hex')}`;
const inputPath = path.join(AUDIO_OGG_TMP_DIR, `${id}.input`);
const outputPath = path.join(AUDIO_OGG_TMP_DIR, `${id}.ogg`);

try {
const buffer = Buffer.isBuffer(source)
? source
: /^https?:\/\//i.test(source)
? await getBuffer(source)
: await fs.promises.readFile(source);

await fs.promises.writeFile(inputPath, buffer);

await new Promise((resolve, reject) => {
execFile('ffmpeg', [
'-y', '-loglevel', 'error', '-i', inputPath,
'-vn', '-c:a', 'libopus', '-ac', '1', '-ar', '48000',
'-b:a', '128k', outputPath
], (error, stdout, stderr) => {
if (error) return reject(new Error(`Erro ao converter áudio para OGG: ${stderr || error.message}`));
resolve();
});
});

return await fs.promises.readFile(outputPath);
} finally {
await Promise.allSettled([
fs.promises.unlink(inputPath),
fs.promises.unlink(outputPath)
]);
}
};

const __prepareGlobalAudioOgg = async (content = {}) => {
if (!content?.audio || content?.document || content?.mimetype?.includes('ogg')) return content;

const audio = content.audio;
const supported = Buffer.isBuffer(audio) ||
typeof audio === 'string' ||
(typeof audio === 'object' && typeof audio?.url === 'string');

if (!supported) return content;

try {
const ogg = await sendAudioOgg(audio);
return {
...content,
audio: ogg,
mimetype: 'audio/ogg; codecs=opus',
fileName: content.fileName
? content.fileName.replace(/\.[^.]+$/, '') + '.ogg'
: 'audio.ogg'
};
} catch (error) {
console.error('Erro na conversão global de áudio para OGG:', error?.message || error);
return content;
}
};
const isSiteApiUrl = (valor = '') => typeof valor === 'string' && !!SITE && valor.includes(SITE);
const containsSiteApiUrl = (valor, seen = new WeakSet()) => {
try {
if (!valor) return false;
if (typeof valor === 'string') return isSiteApiUrl(valor);
if (typeof valor !== 'object' || seen.has(valor)) return false;
seen.add(valor);
return Object.values(valor).some(v => containsSiteApiUrl(v, seen));
} catch { return false; }
};
const palavras = JSON.parse(fs.readFileSync('./src/dados/data/media/forca/palavras.json'));
const frames = JSON.parse(fs.readFileSync('./src/dados/data/media/forca/frames.json'));
const { fundolevel, linklogos, imgnazista, imggay, imgcorno, imggostosa, imggostoso, imgfeio, imggado, imgvesgo, imgbebado, tapacmd, matarcmd, beijocmd, chutecmd, cmdmenu, deathcmd, rnkgay, rnkgado, rnkcorno, rnkgostoso, rnkgostosa, rnknazista, rnkotaku, errocmd, rnkpau, suruba, minado_bomb, thumbnail, imgsigma, imgbeta, imgbaiano, imgbaiana, imgcarioca, imglouco, imglouca, imgsafada, imgsafado, imgmacaco, imgmacaca, imgputa, rnksigma, rnkbeta, rnkbaiano, rnkbaiana, rnkcarioca, rnklouco, rnklouca, rnksafada, rnksafado, rnkmacaco, rnkmacaca, rnkputa, rankbct, rankcu, rankfalido, rankcasal, casal, Gozar, imgperfil, enigma, rvenigma, semimg, comer, capinarlote, pgpeito, pgbunda, morder, sentar, tirarft, carinho, soco, namorar, getcase, criador, fundo, idade, boquete, cagar, cu, abraco, lavarlouca, matar, leitada, lindacmd, lindocmd, fielcmd, pgpau, fundoshipp, fundoping, fundoerror } = loadJSON(new URL('./src/dados/settings/LOGOS/links_img.json', import.meta.url));
process.on('uncaughtException', function (err) {
console.error((new Date).toUTCString() + ' uncaughtException:', err.message);
console.error(err.stack);
});
const messageStore = new Map();
const MESSAGE_STORE_MAX = 2500;
const MESSAGE_STORE_TTL = 60 * 60 * 1000;

function trimMessageStore() {
const now = Date.now();
for (const [id, item] of messageStore) {
if (!item || now - (item.savedAt || 0) > MESSAGE_STORE_TTL || messageStore.size > MESSAGE_STORE_MAX)
messageStore.delete(id);
}
}

function readAntiDeleteDb(jid) {
try {
if (!jid?.endsWith('@g.us'))
return [];
return getGroupConfig(jid, []) || [];
}
catch {
return [];
}
}

function antiDeleteAtivo(jid) {
return readAntiDeleteDb(jid)?.[0]?.antidelete === true;
}

function canStoreAntiDelete(from) {
return !!from?.endsWith('@g.us');
}

function storeKey(remoteJid, id) {
return `${remoteJid || ''}:${id || ''}`;
}

function setStoredMessage(remoteJid, id, info) {
try {
if (!remoteJid?.endsWith('@g.us') || !id || !info?.message)
return;
if (info?.key?.fromMe)
return;
const data = { ...info, savedAt: Date.now() };
messageStore.set(id, data);
messageStore.set(storeKey(remoteJid || info.key?.remoteJid, id), data);
if (messageStore.size > MESSAGE_STORE_MAX)
trimMessageStore();
}
catch { }
}

function getStoredMessage(remoteJid, id) {
return messageStore.get(storeKey(remoteJid, id)) || messageStore.get(id);
}

function deleteStoredMessage(remoteJid, id) {
messageStore.delete(storeKey(remoteJid, id));
messageStore.delete(id);
}

function unwrapMessage(msg) {
return msg?.ephemeralMessage?.message ||
msg?.viewOnceMessage?.message ||
msg?.viewOnceMessageV2?.message ||
msg?.viewOnceMessageV2Extension?.message ||
msg?.documentWithCaptionMessage?.message ||
msg;
}

function deepFindKey(obj, keyName, maxDepth = 8, seen = new WeakSet()) {
if (!obj || typeof obj !== 'object' || maxDepth < 0)
return null;
if (seen.has(obj))
return null;
seen.add(obj);
if (obj[keyName])
return obj[keyName];
for (const [childKey, value] of Object.entries(obj)) {
if (childKey === 'contextInfo' || childKey === 'quotedMessage')
continue;
const found = deepFindKey(value, keyName, maxDepth - 1, seen);
if (found)
return found;
}
return null;
}

function getProtocolMessage(info = {}) {
const raw = info?.message || info?.update?.message || info?.protocolMessage || {};
const msg = unwrapMessage(raw) || {};
return msg.protocolMessage ||
raw.protocolMessage ||
raw?.message?.protocolMessage ||
info?.protocolMessage ||
info?.update?.protocolMessage ||
msg.editedMessage?.message?.protocolMessage ||
raw.editedMessage?.message?.protocolMessage ||
raw?.message?.editedMessage?.message?.protocolMessage ||
deepFindKey(raw, 'protocolMessage') ||
deepFindKey(info?.update || {}, 'protocolMessage') ||
null;
}

function extractAntiDeleteText(msg) {
const m = unwrapMessage(msg) || {};
const poll = m.pollCreationMessage || m.pollCreationMessageV3;
if (poll) {
const options = Array.isArray(poll.options) ? poll.options.map(opt => `• ${opt.optionName || opt.name || opt}`).join('\n') : '';
return `📊 *ENQUETE:* ${poll.name || 'sem titulo'}${options ? `\n\n*Opcoes:*\n${options}` : ''}`;
}
if (m.pollResultSnapshotMessage) {
const snap = m.pollResultSnapshotMessage;
const votes = Array.isArray(snap.pollVotes) ? snap.pollVotes.map(v => `• ${v.optionName || 'opcao'} (${v.optionVoteCount || 0} votos)`).join('\n') : '';
return `📈 *RESULTADO DE ENQUETE:* ${snap.name || 'sem titulo'}${votes ? `\n\n*Votos registrados:*\n${votes}` : ''}`;
}
return m.conversation ||
m.extendedTextMessage?.text ||
m.imageMessage?.caption ||
m.videoMessage?.caption ||
m.documentMessage?.caption ||
m.documentWithCaptionMessage?.message?.documentMessage?.caption ||
m.buttonsMessage?.contentText ||
m.templateMessage?.hydratedTemplate?.hydratedContentText ||
m.listMessage?.description ||
m.interactiveResponseMessage?.nativeFlowResponseMessage?.paramsJson ||
'';
}

function hasAntiDeleteMedia(msg) {
const m = unwrapMessage(msg) || {};
return !!(m.imageMessage || m.videoMessage || m.stickerMessage || m.audioMessage || m.documentMessage || m.documentWithCaptionMessage);
}

function getAntiDeleteProtoKey(proto = {}, fallback = {}) {
return proto?.key || proto?.messageKey || proto?.protocolMessage?.key || fallback?.key || {};
}

function getAntiDeleteProtocolKind(proto = {}) {
const rawType = proto?.type;
const typeName = String(rawType ?? '').toLowerCase();
const typeNum = Number(rawType);
const isDelete = (typeNum === 0 ||
typeName.includes('revoke') ||
typeName.includes('delete') ||
typeName === '0');
return { isDelete, typeNum, rawType };
}

function getAntiDeleteUser(original, protoKey, info) {
return original?.key?.participantAlt ||
original?.key?.participant ||
protoKey?.participantAlt ||
protoKey?.participant ||
info?.key?.participantAlt ||
info?.key?.participant ||
original?.participant ||
'';
}

function getAntiDeleteUpdateMessage(update = {}) {
return update?.update?.message ||
update?.message ||
update?.messageStubParameters?.message ||
update?.protocolMessage?.message ||
null;
}

function normalizeAntiDeleteInfo(update = {}, fallback = {}) {
const key = update?.key || fallback?.key || {};
const message = getAntiDeleteUpdateMessage(update) || update?.message || fallback?.message || null;
return {
...fallback,
...update,
key,
message
};
}

async function sendAntiDeleteNotice(sock, remoteJid, payload, opts = {}) {
try {
await sock.sendMessage(remoteJid, payload, opts);
return true;
}
catch {
return false;
}
}

async function processAntiDeleteProtocol(sock, info, proto, fallbackRemoteJid = '') {
try {
if (!proto)
return false;
const kind = getAntiDeleteProtocolKind(proto);
if (!kind.isDelete)
return false;
const key = getAntiDeleteProtoKey(proto, info);
const remoteJid = key?.remoteJid || fallbackRemoteJid || info?.key?.remoteJid;
const msgId = key?.id || info?.key?.id;
if (!remoteJid?.endsWith('@g.us') || !msgId)
return false;
const ativo = antiDeleteAtivo(remoteJid);
const original = getStoredMessage(remoteJid, msgId) || getStoredMessage(info?.key?.remoteJid, msgId) || messageStore.get(msgId);
if (!ativo) {
return false;
}
if (!original?.message) {
return false;
}
if (original?.key?.fromMe)
return false;
const user = getAntiDeleteUser(original, key, info) || original?.key?.remoteJid || '';
const userNumber = user?.split('@')[0] || 'desconhecido';
const userName = original?.pushName || userNumber;
let profilePic = imgperfil;
try {
if (user)
profilePic = await sock.profilePictureUrl(user, 'image');
}
catch { }
const mentioned = user ? [user] : [];
const adContext = {
mentionedJid: mentioned,
externalAdReply: {
title: mess.niAntiDeleteCardApagada(),
body: mess.niAntiDeleteCardBody({ e0: () => userName }),
mediaType: 2,
thumbnailUrl: profilePic
}
};
const textoOriginal = extractAntiDeleteText(original.message) || 'sᴇᴍ ᴛᴇxᴛᴏ';
if (hasAntiDeleteMedia(original.message)) {
await sendAntiDeleteNotice(sock, remoteJid, {
text: mess.niAntiDeleteMidiaApagada({ e0: () => userNumber }),
mentions: mentioned,
contextInfo: adContext
});
const forwarded = await sendAntiDeleteNotice(sock, remoteJid, { forward: original });
if (!forwarded)
await sendAntiDeleteNotice(sock, remoteJid, { forward: { key: original.key, message: original.message } });
}
else {
await sendAntiDeleteNotice(sock, remoteJid, {
text: mess.niAntiDeleteApagada({ e0: () => userNumber, e1: () => textoOriginal }),
mentions: mentioned,
contextInfo: adContext
});
}
deleteStoredMessage(remoteJid, msgId);
return true;
}
catch (e) {
console.log(mess.niConsole001(), e);
return false;
}
}

const ANTI_DELETE_LISTENER_FLAG = Symbol.for('YUTA_ANTI_DELETE_LISTENER_INSTALLED');
function installAntiDeleteListeners(sock) {
try {
if (!sock?.ev || sock[ANTI_DELETE_LISTENER_FLAG])
return;
sock[ANTI_DELETE_LISTENER_FLAG] = true;
sock.ev.on('messages.update', async (updates = []) => {
try {
for (const update of updates || []) {
const remoteJid = update?.key?.remoteJid;
const msgId = update?.key?.id;
const infoUpdate = normalizeAntiDeleteInfo(update);
const proto = getProtocolMessage(infoUpdate) || getProtocolMessage(update);
const kind = getAntiDeleteProtocolKind(proto || {});
if (remoteJid?.endsWith('@g.us') && msgId && infoUpdate?.message && !kind.isDelete)
setStoredMessage(remoteJid, msgId, infoUpdate);
if (proto && kind.isDelete)
await processAntiDeleteProtocol(sock, infoUpdate, proto, remoteJid);
}
}
catch (e) {
console.log(mess.niConsole001(), e);
}
});
sock.ev.on('messages.delete', async (deleted = {}) => {
try {
const keys = Array.isArray(deleted)
? deleted
: Array.isArray(deleted?.keys)
? deleted.keys
: deleted?.key
? [deleted.key]
: [];
for (const key of keys)
await processAntiDeleteProtocol(sock, { key, message: null }, { type: 0, key }, key?.remoteJid);
}
catch (e) {
console.log(mess.niConsole001(), e);
}
});
}
catch (e) {
console.log(mess.niConsole001(), e);
}
}
const API_KEY_YUTA2 = CREDENTIALS_USER.API_KEY_YUTA || "Nk-Petrov";
const __jsonCache = global.__YUTA_JSON_CACHE || (global.__YUTA_JSON_CACHE = new Map());
const __groupMetaCache = global.__YUTA_GPMETA_CACHE || (global.__YUTA_GPMETA_CACHE = new Map());
const __groupMetaRefreshLock = global.__YUTA_GPMETA_REFRESH || (global.__YUTA_GPMETA_REFRESH = new Set());
const __jsonWriteQueue = new Map();
function readJsonCached(file, fallback = null) {
try {
const stat = fs.statSync(file);
const cached = __jsonCache.get(file);
if (cached && cached.mtimeMs === stat.mtimeMs && cached.size === stat.size)
return cached.data;
const data = JSON.parse(fs.readFileSync(file, 'utf8'));
__jsonCache.set(file, { mtimeMs: stat.mtimeMs, size: stat.size, data });
return data;
}
catch {
return fallback;
}
}
function writeJsonCached(file, data, space = 0) {
fs.writeFileSync(file, JSON.stringify(data, null, space));
try {
const stat = fs.statSync(file);
__jsonCache.set(file, { mtimeMs: stat.mtimeMs, size: stat.size, data });
}
catch { }
}
function writeJsonBatched(file, data, space = 0, delay = 650) {
const target = path.resolve(file);
const queued = __jsonWriteQueue.get(target);
if (queued) {
queued.data = data;
queued.space = space;
return;
}
const entry = { target, data, space, timer: null };
entry.timer = setTimeout(() => {
__jsonWriteQueue.delete(target);
try {
fs.writeFileSync(entry.target, JSON.stringify(entry.data, null, entry.space));
}
catch (error) {
console.error('[YUTA JSON] Falha ao salvar dados:', error?.message || error);
}
}, delay);
entry.timer.unref?.();
__jsonWriteQueue.set(target, entry);
}
function flushJsonWrites() {
for (const [target, entry] of __jsonWriteQueue) {
clearTimeout(entry.timer);
__jsonWriteQueue.delete(target);
try {
fs.writeFileSync(target, JSON.stringify(entry.data, null, entry.space));
}
catch (error) {
console.error('[YUTA JSON] Falha ao finalizar gravação:', error?.message || error);
}
}
}
process.once('exit', flushJsonWrites);

const __pushnameIndex = new Map(
(Array.isArray(pushnames) ? pushnames : [])
.map((item, index) => [String(item?.id || '').trim(), index])
.filter(([id]) => id)
);
function registrarPushname(id, nick) {
const idText = String(id || '').trim();
if (!idText) return;
let index = __pushnameIndex.get(idText);
if (index === undefined) {
index = pushnames.length;
pushnames.push({ id: idText, nick });
__pushnameIndex.set(idText, index);
}
else if (pushnames[index]) {
pushnames[index].nick = nick;
}
writeJsonBatched('./src/dados/usuarios/users.json', pushnames, 2);
}
function metadataFallback(jid = '') {
return { id: jid, subject: '', desc: '', participants: [] };
}
async function refreshGroupMetadata(sock, jid) {
if (!jid || __groupMetaRefreshLock.has(jid))
return;
__groupMetaRefreshLock.add(jid);
try {
const meta = await sock.groupMetadata(jid).catch(() => null);
if (meta?.id)
__groupMetaCache.set(jid, { data: meta, time: Date.now() });
}
finally {
__groupMetaRefreshLock.delete(jid);
}
}
async function getGroupMetadataFast(sock, jid, forceWait = false) {
if (!jid)
return metadataFallback(jid);
const cached = __groupMetaCache.get(jid);
const now = Date.now();
if (cached?.data && now - cached.time < 300000)
return cached.data;
if (cached?.data && !forceWait) {
if (now - cached.time > 60000)
refreshGroupMetadata(sock, jid).catch(() => { });
return cached.data;
}
const timeoutMs = forceWait ? 3000 : 350;
const meta = await Promise.race([
sock.groupMetadata(jid).catch(() => null),
new Promise(resolve => setTimeout(() => resolve(null), timeoutMs))
]);
if (meta?.id) {
__groupMetaCache.set(jid, { data: meta, time: now });
return meta;
}
if (cached?.data)
return cached.data;
refreshGroupMetadata(sock, jid).catch(() => { });
return metadataFallback(jid);
}
// =====================[ AUTO DIVULGACAO DO DONO ]=====================
const AUTODIVUL_DB_PATH = path.resolve(__dirname, 'src/dados/func/autodivul.json');
const AUTODIVUL_MEDIA_DIR = path.resolve(__dirname, 'src/dados/func/autodivul_media');
const AUTODIVUL_DEFAULT_INTERVAL = '1H';
const AUTODIVUL_GROUP_DELAY_MS = 1500;
const AUTODIVUL_STATES = globalThis.__YUTA_AUTODIVUL_STATES || (globalThis.__YUTA_AUTODIVUL_STATES = new Map());

function __autoDivulDefaultConfig() {
return {
ativo: false,
intervalo: AUTODIVUL_DEFAULT_INTERVAL,
indiceAtual: 0,
grupos: [],
divulgacoes: []
};
}

function __autoDivulTimeToMs(valor = '') {
const match = String(valor || '').trim().match(/^(\d+)\s*([mhd])$/i);
if (!match) return 0;
const quantidade = Number(match[1]);
const unidade = match[2].toUpperCase();
const multiplicador = { M: 60 * 1000, H: 60 * 60 * 1000, D: 24 * 60 * 60 * 1000 }[unidade];
const resultado = quantidade * multiplicador;
return Number.isSafeInteger(resultado) && resultado > 0 ? resultado : 0;
}

function __autoDivulNormalizeTime(valor = '') {
const match = String(valor || '').trim().match(/^(\d+)\s*([mhd])$/i);
if (!match || !__autoDivulTimeToMs(valor)) return '';
return Number(match[1]) + match[2].toUpperCase();
}

function __autoDivulNormalizeType(valor = '') {
const tipo = String(valor || '').trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
return ({ texto: 'texto', text: 'texto', imagem: 'imagem', image: 'imagem', video: 'video' })[tipo] || '';
}

function __autoDivulNewId() {
return Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 10);
}

function __autoDivulNormalizeConfig(raw = {}) {
const base = __autoDivulDefaultConfig();
const source = raw && typeof raw === 'object' && !Array.isArray(raw) ? raw : {};
const groupsRaw = Array.isArray(source.grupos) ? source.grupos : (Array.isArray(source.groups) ? source.groups : []);
const groupsSeen = new Set();
const grupos = groupsRaw.map(item => {
const grupo = typeof item === 'string' ? { jid: item, nome: '' } : (item || {});
const jid = String(grupo.jid || grupo.id || '').trim();
return { jid, nome: String(grupo.nome || grupo.name || 'ɢʀᴜᴘᴏ sᴇᴍ ɴᴏᴍᴇ').trim() };
}).filter(item => item.jid && item.jid.includes('@g.us') && !groupsSeen.has(item.jid) && groupsSeen.add(item.jid));
const divulgacoesRaw = Array.isArray(source.divulgacoes) ? source.divulgacoes : (Array.isArray(source.items) ? source.items : []);
const divulgacoes = divulgacoesRaw.map((item, index) => {
const divulgacao = item && typeof item === 'object' ? item : {};
return {
id: String(divulgacao.id || 'AUTO_' + (index + 1)),
tipo: __autoDivulNormalizeType(divulgacao.tipo || divulgacao.type),
texto: String(divulgacao.texto ?? divulgacao.text ?? divulgacao.caption ?? ''),
arquivo: String(divulgacao.arquivo || divulgacao.file || '')
};
}).filter(item => item.tipo && item.texto.trim());
const intervalo = __autoDivulNormalizeTime(source.intervalo || source.tempo) || base.intervalo;
const indiceInformado = Number.parseInt(source.indiceAtual ?? source.index ?? 0, 10);
const indiceAtual = divulgacoes.length ? ((Number.isFinite(indiceInformado) ? indiceInformado : 0) % divulgacoes.length + divulgacoes.length) % divulgacoes.length : 0;
return {
ativo: source.ativo === true || source.active === true,
intervalo,
indiceAtual,
grupos,
divulgacoes
};
}

function __autoDivulLoad() {
try {
if (!fs.existsSync(AUTODIVUL_DB_PATH)) {
fs.mkdirSync(path.dirname(AUTODIVUL_DB_PATH), { recursive: true });
fs.writeFileSync(AUTODIVUL_DB_PATH, JSON.stringify(__autoDivulDefaultConfig(), null, 2) + '\n');
return __autoDivulDefaultConfig();
}
return __autoDivulNormalizeConfig(JSON.parse(fs.readFileSync(AUTODIVUL_DB_PATH, 'utf8')));
} catch (error) {
console.log('[AUTODIVUL CONFIG LOAD]', error?.message || error);
return __autoDivulDefaultConfig();
}
}

function __autoDivulSave(config = {}) {
const normalizado = __autoDivulNormalizeConfig(config);
fs.mkdirSync(path.dirname(AUTODIVUL_DB_PATH), { recursive: true });
fs.writeFileSync(AUTODIVUL_DB_PATH, JSON.stringify(normalizado, null, 2) + '\n');
return normalizado;
}

function __autoDivulReady(config = {}) {
return __autoDivulTimeToMs(config.intervalo) > 0 && config.divulgacoes.length > 0 && config.grupos.length > 0;
}

function __autoDivulResolveFile(arquivo = '') {
const raw = String(arquivo || '').trim();
return path.isAbsolute(raw) ? raw : path.resolve(__dirname, raw);
}

function __autoDivulMediaMessage(info = {}, tipo = '') {
return getAnyMedia(info, tipo === 'imagem' ? 'image' : 'video')?.message || null;
}

async function __autoDivulSaveMedia(info, tipo) {
const media = __autoDivulMediaMessage(info, tipo);
if (!media) throw new Error('AUTO_DIVUL_MEDIA_NOT_FOUND');
const buffer = await getFileBuffer(media, tipo === 'imagem' ? 'image' : 'video');
if (!buffer?.length) throw new Error('AUTO_DIVUL_MEDIA_EMPTY');
fs.mkdirSync(AUTODIVUL_MEDIA_DIR, { recursive: true });
const mime = String(media.mimetype || '').toLowerCase();
const extensao = tipo === 'imagem'
? (mime.includes('png') ? 'png' : mime.includes('webp') ? 'webp' : 'jpg')
: (mime.includes('quicktime') ? 'mov' : 'mp4');
const nome = 'divul_' + Date.now() + '_' + Math.random().toString(36).slice(2, 9) + '.' + extensao;
const caminho = path.join(AUTODIVUL_MEDIA_DIR, nome);
fs.writeFileSync(caminho, buffer);
return path.relative(__dirname, caminho).split(path.sep).join('/');
}

function __autoDivulRemoveMedia(arquivo = '') {
try {
const caminho = __autoDivulResolveFile(arquivo);
const relativo = path.relative(AUTODIVUL_MEDIA_DIR, caminho);
if (relativo.startsWith('..') || path.isAbsolute(relativo)) return;
if (fs.existsSync(caminho)) fs.unlinkSync(caminho);
} catch (error) {
console.log('[AUTODIVUL MEDIA CLEAN]', error?.message || error);
}
}

async function __autoDivulSendItem(yuta, jid, item, quotedThis = null) {
const options = quotedThis ? { quoted: quotedThis } : {};
if (item.tipo === 'texto')
return yuta.sendMessage(jid, { text: item.texto }, options);
const caminho = __autoDivulResolveFile(item.arquivo);
if (!item.arquivo || !fs.existsSync(caminho))
throw new Error('AUTO_DIVUL_MEDIA_MISSING');
const buffer = fs.readFileSync(caminho);
if (item.tipo === 'imagem')
return yuta.sendMessage(jid, { image: buffer, caption: item.texto }, options);
return yuta.sendMessage(jid, {
video: buffer,
caption: item.texto,
mimetype: 'video/mp4',
gifPlayback: true
}, options);
}

function __autoDivulState(yuta) {
let state = AUTODIVUL_STATES.get(yuta);
if (!state) {
state = { timer: null, running: false, enabled: false, generation: 0 };
AUTODIVUL_STATES.set(yuta, state);
}
return state;
}

function __autoDivulIsCurrent(yuta, state, generation) {
return AUTODIVUL_STATES.get(yuta) === state && state.enabled && state.generation === generation;
}

function __autoDivulSchedule(yuta, state, intervaloMs) {
if (!state.enabled || state.running || state.timer) return;
state.timer = setTimeout(() => {
state.timer = null;
__autoDivulCycle(yuta, state).catch(error => console.log('[AUTODIVUL CYCLE]', error?.message || error));
}, Math.max(1000, intervaloMs));
if (typeof state.timer?.unref === 'function') state.timer.unref();
}

function __autoDivulStop(yuta) {
const state = AUTODIVUL_STATES.get(yuta);
if (!state) return;
state.enabled = false;
state.generation += 1;
if (state.timer) clearTimeout(state.timer);
state.timer = null;
}

function __autoDivulStart(yuta) {
const config = __autoDivulLoad();
if (!config.ativo || !__autoDivulReady(config)) {
__autoDivulStop(yuta);
return false;
}
const state = __autoDivulState(yuta);
state.enabled = true;
state.generation += 1;
if (state.timer) clearTimeout(state.timer);
state.timer = null;
if (!state.running) __autoDivulSchedule(yuta, state, __autoDivulTimeToMs(config.intervalo));
return true;
}

function __autoDivulEnsureStarted(yuta) {
const config = __autoDivulLoad();
if (!config.ativo || !__autoDivulReady(config)) {
__autoDivulStop(yuta);
return false;
}
const state = __autoDivulState(yuta);
state.enabled = true;
if (!state.running && !state.timer) __autoDivulSchedule(yuta, state, __autoDivulTimeToMs(config.intervalo));
return true;
}

async function __autoDivulCycle(yuta, state) {
const generation = state.generation;
state.running = true;
try {
const config = __autoDivulLoad();
if (!config.ativo || !__autoDivulReady(config)) return;
const indice = config.indiceAtual % config.divulgacoes.length;
const item = config.divulgacoes[indice];
const itemId = String(item.id);
for (let i = 0; i < config.grupos.length; i++) {
if (!__autoDivulIsCurrent(yuta, state, generation)) break;
const grupo = config.grupos[i];
try {
if (grupo?.jid) await __autoDivulSendItem(yuta, grupo.jid, item);
} catch (error) {
console.log('[AUTODIVUL ENVIO]', grupo?.jid || 'sem-jid', error?.message || error);
}
if (i < config.grupos.length - 1 && __autoDivulIsCurrent(yuta, state, generation))
await delay(AUTODIVUL_GROUP_DELAY_MS);
}
if (__autoDivulIsCurrent(yuta, state, generation)) {
const atual = __autoDivulLoad();
if (atual.divulgacoes.length) {
const posicao = atual.divulgacoes.findIndex(divulgacao => String(divulgacao.id) === itemId);
atual.indiceAtual = posicao >= 0 ? (posicao + 1) % atual.divulgacoes.length : atual.indiceAtual % atual.divulgacoes.length;
__autoDivulSave(atual);
}
}
} catch (error) {
console.log('[AUTODIVUL CYCLE]', error?.message || error);
} finally {
state.running = false;
if (AUTODIVUL_STATES.get(yuta) === state && state.enabled && !state.timer) {
const atual = __autoDivulLoad();
if (atual.ativo && __autoDivulReady(atual))
__autoDivulSchedule(yuta, state, __autoDivulTimeToMs(atual.intervalo));
}
}
}

async function __autoDivulFetchGroups(yuta) {
const todos = await yuta.groupFetchAllParticipating();
return Object.values(todos || {})
.filter(grupo => String(grupo?.id || '').includes('@g.us'))
.sort((a, b) => (b?.participants?.length || b?.size || 0) - (a?.participants?.length || a?.size || 0));
}

async function startyuta(upsert, yuta, qrcode) {
const mensagensRecebidas = Array.isArray(upsert?.messages) ? upsert.messages : [];
if (mensagensRecebidas.length > 1) {
return Promise.allSettled(
mensagensRecebidas.map(info =>
startyuta({ ...upsert, messages: [info] }, yuta, qrcode)
)
);
}

const __playlistQueues = globalThis.__yutaPlaylistQueues || (globalThis.__yutaPlaylistQueues = new Map());

function __playlistLoad() {
try {
const data = readStore('playlists', 'root', {});
return data && typeof data === 'object' && !Array.isArray(data) ? data : {};
} catch { return {}; }
}
function __playlistSave(data) {
writeStore('playlists', 'root', data && typeof data === 'object' && !Array.isArray(data) ? data : {});
}
function __playlistAtiva() {
const config = readStore('playlist_config', 'root', { ativo: !!nescessario.playlistAtiva });
return !!config?.ativo;
}
function __playlistDefinirAtiva(ativo) {
const value = !!ativo;
writeStore('playlist_config', 'root', { ativo: value });
return value;
}
function __playlistUserKey(jid = '') { return String(jid || '').split(':')[0]; }
function __playlistDurationToSeconds(value = '') {
const raw = String(value || '').trim();
if (/^\d+$/.test(raw)) return Number(raw);
const parts = raw.split(':').map(Number);
if (!parts.length || parts.some(Number.isNaN)) return 0;
return parts.reduce((acc, n) => acc * 60 + n, 0);
}
function __playlistSecondsToDuration(total = 0) {
total = Math.max(0, Number(total) || 0);
const h = Math.floor(total / 3600);
const m = Math.floor((total % 3600) / 60);
const s = Math.floor(total % 60);
return h ? `${h}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}` : `${m}:${String(s).padStart(2,'0')}`;
}
function __playlistTextFromMessage(message = {}) {
let root = message || {};
for (let i = 0; i < 8; i++) {
const next = root?.ephemeralMessage?.message || root?.viewOnceMessage?.message || root?.viewOnceMessageV2?.message || root?.documentWithCaptionMessage?.message;
if (!next) break;
root = next;
}
return String(root?.conversation || root?.extendedTextMessage?.text || root?.imageMessage?.caption || root?.videoMessage?.caption || root?.documentMessage?.caption || '');
}
function __playlistExtractTrack(text = '') {
const clean = String(text || '');
const title = clean.match(/(?:🎵\s*•\s*)?ᴛɪᴛᴜʟᴏ:\s*([^\n*]+)/i)?.[1]?.trim() || clean.match(/titulo:\s*([^\n*]+)/i)?.[1]?.trim();
const duration = clean.match(/(?:⏱️\s*•\s*)?ᴅᴜʀᴀᴄᴀᴏ:\s*([^\n*]+)/i)?.[1]?.trim() || clean.match(/duracao:\s*([^\n*]+)/i)?.[1]?.trim();
const seconds = __playlistDurationToSeconds(duration);
if (!title || !seconds) return null;
return { title: title.slice(0, 160), duration: __playlistSecondsToDuration(seconds), seconds };
}
function __playlistStop(key = '') {
const current = __playlistQueues.get(key);
if (current?.timer) clearTimeout(current.timer);
if (current) {
current.cancelled = true;
current.runId = Number(current.runId || 0) + 1;
}
__playlistQueues.delete(key);
return !!current;
}
function __playlistQueueKey(chat = '') {
return String(chat || '');
}
function __normalizarVideoYuta(resultado, fallbackTitle = 'Música') {
const list = Array.isArray(resultado) ? resultado : [resultado];
const base = list.find(v => v?.resultados || v?.result || v?.url || v?.videoId || v?.id) || {};
const v = base?.resultados || base?.result || base;
const url = v.url || v.link || v.videoUrl || v.video_url || ((v.videoId || v.video_id || v.id) ? `https://youtu.be/${v.videoId || v.video_id || v.id}` : '');
const videoId = v.videoId || v.video_id || v.id || url.match(/[?&]v=([^&]+)/)?.[1] || url.match(/youtu\.be\/([^?&]+)/)?.[1] || '';
let thumbnail = v.thumbnail || v.thumb || v.image || v.bestThumbnail || v.thumbnails;
if (Array.isArray(thumbnail)) thumbnail = thumbnail[thumbnail.length - 1]?.url || thumbnail[0]?.url || '';
if (thumbnail && typeof thumbnail === 'object') thumbnail = thumbnail.url || '';
thumbnail ||= videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : '';
const rawDuration = v.duration?.timestamp || v.duration?.label || v.durationText || v.timestamp || v.duration || v.length || '0:00';
const authorRaw = v.author || v.channel || v.owner || {};
return {
title: v.title || v.name || fallbackTitle,
description: v.description || v.desc || '',
url,
thumbnail,
duration: {
timestamp: typeof rawDuration === 'number' ? `${Math.floor(rawDuration / 60)}:${String(rawDuration % 60).padStart(2, '0')}` : String(rawDuration || '0:00'),
seconds: Number(v.seconds || v.duration?.seconds || v.durationInSec || v.lengthSeconds || 0)
},
views: v.views || v.viewCount || v.viewsCount || 0,
author: {
name: authorRaw.name || authorRaw.title || v.authorName || v.channelName || v.creator || 'Desconhecido',
url: authorRaw.url || v.authorUrl || v.channelUrl || ''
}
};
}
function __yutaPayload(data) {
const structured = data?.resultado ?? data?.result ?? data?.resposta;
if (structured !== undefined && structured !== null) return structured;
return data?.message ?? data?.msg ?? data;
}
function __yutaText(data, max = 10) {
const root = __yutaPayload(data);
const clean = v => String(v ?? '').replace(/<[^>]*>/g, '').trim();
const obj = o => Object.entries(o || {}).filter(([k,v]) => v != null && typeof v !== 'object' && !['status','criador','creator'].includes(k)).slice(0,8).map(([k,v]) => mess.yutaApiCampo(k.replace(/_/g, ' '), clean(v))).join('\n');
if (typeof root === 'string' || typeof root === 'number') return clean(root);
if (Array.isArray(root)) return root.slice(0,max).map((v,i) => mess.yutaApiItem(i + 1, typeof v === 'object' ? obj(v) : clean(v))).filter(Boolean).join('\n\n');
if (root && typeof root === 'object') {
const list = root.resultados || root.resultado || root.results || root.items || root.noticias || root.articles || root.posts || root.data;
if (Array.isArray(list)) return __yutaText(list, max);
return obj(root) || JSON.stringify(root, null, 2).slice(0,3500);
}
return '';
}
async function __playlistSearchTrack(query) {
const response = await api.pesquisas.ytsearch(query);
const video = __normalizarVideoYuta(response?.resultado, query);
return { url: video.url, title: video.title, thumbnail: video.thumbnail, author: video.author.name };
}
async function __playlistRun({ key, owner, chat, tracks, yuta, quoted, prefix = '/', buttonsEnabled = false, startIndex = 0 }) {
__playlistStop(key);
const state = { owner, chat, tracks, index: startIndex, timer: null, cancelled: false, runId: 0 };
__playlistQueues.set(key, state);

const playCurrent = async () => {
if (state.cancelled || __playlistQueues.get(key) !== state) return;
if (state.timer) {
clearTimeout(state.timer);
state.timer = null;
}
if (state.index >= state.tracks.length) {
__playlistQueues.delete(key);
await yuta.sendMessage(chat, { text: mess.playlistFinalizada() }, { quoted });
return;
}
if (state.index < 0) state.index = 0;
const currentRun = ++state.runId;
const track = state.tracks[state.index];
try {
const found = await __playlistSearchTrack(track.title);
if (!found?.url) throw new Error('PLAYLIST_TRACK_NOT_FOUND');
if (state.cancelled || __playlistQueues.get(key) !== state || currentRun !== state.runId) return;
const number = state.index + 1;
const caption = mess.playlistTocando({ title: track.title, duration: track.duration, number, total: state.tracks.length });
const controls = [
{ name: 'quick_reply', buttonParamsJson: JSON.stringify({ display_text: '✧ 𝐌𝐔́𝐒𝐈𝐂𝐀 𝐀𝐍𝐓𝐄𝐑𝐈𝐎𝐑 ✧', id: `${prefix}retornarplaylist` }) },
{ name: 'quick_reply', buttonParamsJson: JSON.stringify({ display_text: '✦ 𝐏𝐀𝐔𝐒𝐀𝐑 𝐏𝐋𝐀𝐘𝐋𝐈𝐒𝐓 ✦', id: `${prefix}pararplaylist` }) },
{ name: 'quick_reply', buttonParamsJson: JSON.stringify({ display_text: '✧ 𝐏𝐑𝐎́𝐗𝐈𝐌𝐀 𝐌𝐔́𝐒𝐈𝐂𝐀 ✧', id: `${prefix}proximoplaylist` }) }
];
if (found.thumbnail && buttonsEnabled) {
await sendInteractiveImageButtons(yuta, chat, {
image: { url: found.thumbnail },
body: caption,
footer: '*✦ CONTROLES DA PLAYLIST ✦*',
buttons: controls,
contextInfo: NkChannelKk
}, { quoted });
} else if (found.thumbnail) {
await yuta.sendMessage(chat, { image: { url: found.thumbnail }, caption, contextInfo: NkChannelKk }, { quoted });
} else if (buttonsEnabled) {
await sendLikeInnovators(yuta, chat, {
text: caption,
footer: '*✦ CONTROLES DA PLAYLIST ✦*',
interactiveButtons: controls,
contextInfo: NkChannelKk
}, { quoted });
} else {
await yuta.sendMessage(chat, { text: caption, contextInfo: NkChannelKk }, { quoted });
}
const audio = await api.downloads.ytmp3(found.url);
await yuta.sendMessage(chat, { audio, mimetype: 'audio/mpeg', fileName: `${track.title}`.replace(/[\\/:*?"<>|]/g, '').slice(0,80) + '.mp3' }, { quoted });
} catch (e) {
if (state.cancelled || __playlistQueues.get(key) !== state || currentRun !== state.runId) return;
await yuta.sendMessage(chat, { text: mess.playlistFaixaIgnorada(track.title) }, { quoted });
}
if (state.cancelled || __playlistQueues.get(key) !== state || currentRun !== state.runId) return;
state.timer = setTimeout(() => {
state.index += 1;
playCurrent().catch(console.error);
}, Math.max(1000, Number(track.seconds || __playlistDurationToSeconds(track.duration)) * 1000));
};
state.playCurrent = playCurrent;
await playCurrent();
}
async function __playlistMove(key = '', direction = 1) {
const state = __playlistQueues.get(key);
if (!state || state.cancelled || typeof state.playCurrent !== 'function') return { ok: false, reason: 'none' };
const nextIndex = state.index + direction;
if (nextIndex < 0) return { ok: false, reason: 'first' };
if (nextIndex >= state.tracks.length) return { ok: false, reason: 'last' };
state.index = nextIndex;
state.runId = Number(state.runId || 0) + 1;
if (state.timer) clearTimeout(state.timer);
state.timer = null;
await state.playCurrent();
return { ok: true, index: state.index, total: state.tracks.length };
}

async function startFunctionNaga() {
__autoDivulEnsureStarted(yuta);
const ownerNumber = setting.ownerNumber.replace(new RegExp("[()+-/ +/]", "gi"), "");
installAntiDeleteListeners(yuta);
for (const info of upsert?.messages || []) {
const from = info.key.remoteJid;
const isGroup = from.endsWith('@g.us');
const isStatus = from.endsWith('@broadcast');
trimMessageStore();
installAntiDeleteListeners(yuta);
const antiDeleteProto = getProtocolMessage(info);
if (!info.key.fromMe && info.key?.id && isGroup && !antiDeleteProto) {
setStoredMessage(from, info.key.id, info);
}
const antiDeleteKind = getAntiDeleteProtocolKind(antiDeleteProto || {});
const processarAntiStatusDireto = async () => {
try {
if (!isGroup) return false;

let dbStatus = getGroupConfig(from, []);
if (!Array.isArray(dbStatus) || !dbStatus.length) return false;
if (dbStatus?.[0]?.antistatus !== true) return false;

const msgRoot = info?.message || {};

const msgBase =
msgRoot?.ephemeralMessage?.message ||
msgRoot?.viewOnceMessage?.message ||
msgRoot?.viewOnceMessageV2?.message ||
msgRoot?.viewOnceMessageV2Extension?.message ||
msgRoot;

const ctx =
msgBase?.extendedTextMessage?.contextInfo ||
msgBase?.imageMessage?.contextInfo ||
msgBase?.videoMessage?.contextInfo ||
msgBase?.documentMessage?.contextInfo ||
msgBase?.audioMessage?.contextInfo ||
msgBase?.stickerMessage?.contextInfo ||
{};

const quoted = ctx?.quotedMessage || {};

const statusDireto = !!(
msgBase?.groupStatusMentionMessage ||
msgBase?.statusMentionMessage ||
msgBase?.groupStatusMessageV2 ||
msgBase?.groupStatusMessage ||
msgBase?.groupMentionedMessage ||
msgBase?.requestPaymentMessage?.noteMessage?.extendedTextMessage?.contextInfo?.isGroupStatus === true
);

const statusCitado = !!(
quoted?.groupStatusMentionMessage ||
quoted?.statusMentionMessage ||
quoted?.groupStatusMessageV2 ||
quoted?.groupStatusMessage ||
quoted?.groupMentionedMessage
);

const brutoProto = JSON.stringify(antiDeleteProto || {});
const statusProto = !!(
antiDeleteProto &&
/groupStatusMentionMessage|groupStatusMessageV2|groupStatusMessage|groupMentionedMessage|statusMentionMessage|isGroupStatus/i.test(brutoProto)
);

const stubTxt = JSON.stringify({
type: info?.messageStubType,
params: info?.messageStubParameters || []
});

const statusStub = !!(
info?.messageStubType &&
/status|groupstatus|group_status|mentioned|mencion/i.test(stubTxt)
);

if (statusCitado && !statusDireto && !statusProto && !statusStub) return false;

const detectouStatusDireto = statusDireto || statusProto || statusStub;
if (!detectouStatusDireto) return false;

const meta = await yuta.groupMetadata(from).catch(() => null);
const membros = Array.isArray(meta?.participants) ? meta.participants : [];

const num = (x = '') => String(x || '')
.split(':')[0]
.replace(/@.+$/, '')
.replace(/\D/g, '');

const ids = (p = {}) => [
p?.phoneNumber,
p?.jid,
p?.id,
p?.participant,
p?.remoteJid,
p?.lid
].filter(Boolean).map(String);

const acharMembro = (raw = '') => {
const base = String(raw || '').split('@')[0].split(':')[0];
const n = num(raw);

return membros.find(p => ids(p).some(id => {
return id === raw ||
id.split('@')[0].split(':')[0] === base ||
(n && num(id) === n);
})) || null;
};

const normalizarStatus = (raw = '') => {
raw = String(raw || '').trim();
const membro = acharMembro(raw);

const candidatos = [
...(membro ? ids(membro) : []),
raw
].filter(Boolean);

for (const c of candidatos) {
if (String(c).includes('@s.whatsapp.net')) {
return `${num(c)}@s.whatsapp.net`;
}
}

for (const c of candidatos) {
if (!String(c).includes('@lid')) {
const n = num(c);
if (n.length >= 10 && n.length <= 15) return `${n}@s.whatsapp.net`;
}
}

return raw;
};

const alvoRaw =
info?.key?.participantPn ||
info?.participantPn ||
info?.key?.participant ||
info?.participant ||
info?.messageStubParameters?.find(x => String(x || '').includes('@')) ||
'';

const alvoJid = normalizarStatus(alvoRaw);
const alvoNum = num(alvoJid);

const botNum = num(yuta?.user?.id || '');
const botAdm = membros.some(p => p?.admin && ids(p).some(id => num(id) === botNum));

const userAdm = membros.some(p => p?.admin && ids(p).some(id => {
const n = num(id);
return n && n === alvoNum;
}));

const donos = [
setting?.ownerNumber,
numero_dono1,
numero_dono2,
numero_dono3,
numero_dono4,
numero_dono5,
numero_dono6,
author
].filter(Boolean).map(num);

const isDonoStatus = info?.key?.fromMe || donos.includes(alvoNum);

if (!botAdm || userAdm || isDonoStatus) return false;

await sleep(400);

await yuta.sendMessage(from, {
text: mess.messageAntiStatus(alvoJid),
mentions: [alvoJid],
contextInfo: {
mentionedJid: [alvoJid]
}
}, { quoted: info }).catch(() => {});

await yuta.groupParticipantsUpdate(from, [alvoJid], "remove").catch(() => {});

if (info?.key?.id) {
await yuta.sendMessage(from, {
delete: {
remoteJid: from,
fromMe: false,
id: info.key.id,
participant: info?.key?.participant || info?.participant || alvoJid
}
}).catch(() => {});
}

return true;
} catch {
return false;
}
};

if (await processarAntiStatusDireto()) continue;
if (antiDeleteProto && antiDeleteKind.isDelete) {
await processAntiDeleteProtocol(yuta, info, antiDeleteProto, from);
continue;
}
if (antiDeleteProto)
continue;
const jsonGpInicial = isGroup ? getGroupConfig(from, []) : [];
const VRF_JSON_GRUPO = isGroup && Array.isArray(jsonGpInicial) && jsonGpInicial.length > 0;
if (VRF_JSON_GRUPO) {
var jsonGp = jsonGpInicial;
if (!jsonGp[0])
jsonGp[0] = {};
}
function createPaymentDetails(text, mentionedJidArray, participant) {
return {
extendedTextMessage: {
text,
contextInfo: {
mentionedJid: [...mentionedJidArray, participant]
}
}
};
}
const NkPetrov = (texto, mentions = []) => ({
requestPaymentMessage: {
currencyCodeIso4217: "BRL",
amount1000: "1000",
noteMessage: {
extendedTextMessage: {
text: texto,
contextInfo: {
mentionedJid: mentions,
forwardingScore: 999,
isForwarded: true,
isGroupStatus: true
}
}
},
expiryTimestamp: "0",
amount: {
value: "1000",
offset: 1000,
currencyCode: "BRL"
}
},
contextInfo: {
mentionedJid: mentions,
isGroupStatus: true
}
});
function gerarContextNewsletter() {
if (setting.channelnk === "0@newsletter") {
return {};
}
return { isForwarded: true, forwardingScore: 1, forwardedNewsletterMessageInfo: { newsletterJid: setting.channelnk, newsletterName: NomeDoBot, serverMessageId: '', } };
}
if (VRF_JSON_GRUPO && jsonGp[0].x9 && info.messageStubType) {
const horarioAtual = new Date(info.messageTimestamp * 1000).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
const stubType = Number(info.messageStubType);
const stubParams = Array.isArray(info.messageStubParameters) ? info.messageStubParameters : [];
const parseX9 = (p = '') => {
try {
if (!p)
return p;
if (typeof p === 'object')
return p;
const s = String(p || '').trim();
if ((s.startsWith('{') && s.endsWith('}')) || (s.startsWith('[') && s.endsWith(']')))
return JSON.parse(s);
return p;
}
catch {
return p;
}
};
const pegarRawX9 = (p = '') => {
p = parseX9(p);
if (!p)
return '';
if (typeof p === 'string')
return p;
if (typeof p === 'object')
return p?.phoneNumber || p?.participantAlt || p?.jid || p?.id || p?.participant || p?.remoteJid || p?.lid || '';
return '';
};
const formatarJidX9 = (jid = '') => {
jid = pegarRawX9(jid);
jid = String(jid || '').trim();
if (!jid)
return '';
if (jid.includes('@s.whatsapp.net'))
return jid;
if (jid.includes('@lid'))
return '';
const num = jid.replace(/@.+$/, '').replace(/\D/g, '');
if (num.length >= 10 && num.length <= 15)
return `${num}@s.whatsapp.net`;
return '';
};
const buscarNoMetadataX9 = async (raw = '') => {
try {
let original = parseX9(raw);
let jid = pegarRawX9(original);
jid = String(jid || '').trim();
if (!jid)
return null;
const metadata = groupMetadata || await yuta.groupMetadata(from).catch(() => null);
const participantes = Array.isArray(metadata?.participants) ? metadata.participants : [];
const base = jid.split('@')[0];
return participantes.find(p => {
const ids = [
p?.phoneNumber,
p?.participantAlt,
p?.jid,
p?.id,
p?.participant,
p?.remoteJid,
p?.lid
].filter(Boolean).map(x => String(x).trim());
return ids.some(x => x === jid || x.split('@')[0] === base);
}) || null;
}
catch {
return null;
}
};
const resolverJidX9 = async (raw = '') => {
try {
let original = parseX9(raw);
let jid = pegarRawX9(original);
jid = String(jid || '').trim();
if (!jid)
return '';
const direto = formatarJidX9(jid);
if (direto)
return direto;
const achou = await buscarNoMetadataX9(original);
if (achou) {
const candidatos = [
achou?.phoneNumber,
achou?.participantAlt,
achou?.jid,
achou?.participant,
achou?.id,
achou?.remoteJid
].filter(Boolean).map(x => String(x).trim());
for (const c of candidatos) {
const real = formatarJidX9(c);
if (real)
return real;
}
}
return jid;
}
catch {
return '';
}
};
const textoJidX9 = async (jid = '') => {
const real = await resolverJidX9(jid);
const num = String(real || '').replace(/@.+$/, '').replace(/\D/g, '');
return num || '???';
};
const filtrarMençõesX9 = (...jids) => {
return jids.filter(j => String(j || '').includes('@s.whatsapp.net'));
};
const adminRaw = info.participantAlt || info.key?.participantAlt || info.participant || info.key?.participant || '';
const alvoRaw = stubParams[0] || '';
const adminReal = await resolverJidX9(adminRaw);
const alvoReal = await resolverJidX9(alvoRaw);
const adminTxt = await textoJidX9(adminRaw);
const alvoTxt = await textoJidX9(alvoRaw);
const enviarX9Soli = async (texto, alvoJid, adminJid) => {
try {
alvoJid = await resolverJidX9(alvoJid);
adminJid = await resolverJidX9(adminJid);
const mencionados = filtrarMençõesX9(alvoJid, adminJid);
const detalhes = createPaymentDetails(texto, [alvoJid], adminJid);
if (detalhes) {
await yuta.relayMessage(from, detalhes, {});
}
else {
await yuta.sendMessage(from, {
text: texto,
mentions: mencionados,
contextInfo: { mentionedJid: mencionados }
});
}
}
catch (e) {
console.log(mess.niConsole002(), e);
try {
alvoJid = await resolverJidX9(alvoJid);
adminJid = await resolverJidX9(adminJid);
const mencionados = filtrarMençõesX9(alvoJid, adminJid);
await yuta.sendMessage(from, {
text: texto,
mentions: mencionados,
contextInfo: { mentionedJid: mencionados }
});
}
catch { }
}
};
if (stubType === 172) {
const acao = String(stubParams[1] || '').toLowerCase().trim();
if (acao === 'rejected' && alvoReal && adminReal) {
const msg = mess.niX9SolicitacaoRecusada({ e0: () => adminTxt, e1: () => horarioAtual });
await enviarX9Soli(msg, alvoRaw, adminRaw);
}
}
if (stubType === 27) {
if (alvoReal && adminReal && alvoReal !== adminReal) {
const msg = mess.niX9SolicitacaoAprovada({ e0: () => adminTxt, e1: () => horarioAtual });
await enviarX9Soli(msg, alvoRaw, adminRaw);
}
}
switch (info.messageStubType) {
case 29:
{
if (info.messageStubParameters?.length) {
const promovidoRaw = info.messageStubParameters[0];
const promotorRaw = info.participantAlt || info.key?.participantAlt || info.participant || info.key?.participant || '';
const promovidoReal = await resolverJidX9(promovidoRaw);
const promotorReal = await resolverJidX9(promotorRaw);
const promovidoTxt = await textoJidX9(promovidoRaw);
const promotorTxt = await textoJidX9(promotorRaw);
const msg = mess.niX9Promocao({ e0: () => promovidoTxt, e1: () => promotorTxt, e2: () => horarioAtual });
const mencionados = filtrarMençõesX9(promovidoReal, promotorReal);
const detalhes = createPaymentDetails(msg, [promovidoReal], promotorReal);
if (detalhes) {
await yuta.relayMessage(from, detalhes, {});
}
else {
await yuta.sendMessage(from, {
text: msg,
mentions: mencionados,
contextInfo: { mentionedJid: mencionados }
});
}
}
}
break;

case 30:
{
if (info.messageStubParameters?.length) {
const rebaixadoRaw = info.messageStubParameters[0];
const rebaixadorRaw = info.participantAlt || info.key?.participantAlt || info.participant || info.key?.participant || '';
const rebaixadoReal = await resolverJidX9(rebaixadoRaw);
const rebaixadorReal = await resolverJidX9(rebaixadorRaw);
const rebaixadoTxt = await textoJidX9(rebaixadoRaw);
const rebaixadorTxt = await textoJidX9(rebaixadorRaw);
const msg = mess.niX9Rebaixamento({ e0: () => rebaixadoTxt, e1: () => rebaixadorTxt, e2: () => horarioAtual });
const mencionados = filtrarMençõesX9(rebaixadoReal, rebaixadorReal);
const detalhes = createPaymentDetails(msg, [rebaixadoReal], rebaixadorReal);
if (detalhes) {
await yuta.relayMessage(from, detalhes, {});
}
else {
await yuta.sendMessage(from, {
text: msg,
mentions: mencionados,
contextInfo: { mentionedJid: mencionados }
});
}
}
}
break;
}
}
if (!info.message)
return;
if (upsert.type == "append")
return;
const type = getContentType(info.message);
const content = JSON.stringify(info.message);
const pushname = info.pushName ? info.pushName : '';
if (visualizarmsg) {
yuta.readMessages([info.key]).catch(() => { });
}
else {
if (from == "status@broadcast")
return;
}
function extrairTexto(info) {
const paths = [
'message.conversation',
'message.sendPaymentMessage.noteMessage.extendedTextMessage.text',
'message.requestPaymentMessage.noteMessage.extendedTextMessage.text',
'message.groupStatusMessageV2.message.conversation',
'message.groupStatusMessageV2.message.extendedTextMessage.text',
'message.groupStatusMessageV2.message.imageMessage.caption',
'message.groupStatusMessageV2.message.videoMessage.caption',
'message.groupStatusMessage.message.conversation',
'message.groupStatusMessage.message.extendedTextMessage.text',
'message.groupStatusMessage.message.imageMessage.caption',
'message.groupStatusMessage.message.videoMessage.caption',
'message.groupStatusMentionMessage.message.conversation',
'message.groupStatusMentionMessage.message.extendedTextMessage.text',
'message.groupMentionedMessage.message.conversation',
'message.groupMentionedMessage.message.extendedTextMessage.text',
'message.viewOnceMessageV2.message.imageMessage.caption',
'message.viewOnceMessageV2.message.videoMessage.caption',
'message.viewOnceMessage.message.videoMessage.caption',
'message.viewOnceMessage.message.imageMessage.caption',
'message.imageMessage.caption',
'message.videoMessage.caption',
'message.documentWithCaptionMessage.message.documentMessage.caption',
'message.buttonsMessage.imageMessage.caption',
'message.extendedTextMessage.text',
'message.extendedTextMessage.contextInfo.quotedMessage.groupStatusMessageV2.message.conversation',
'message.extendedTextMessage.contextInfo.quotedMessage.groupStatusMessageV2.message.extendedTextMessage.text',
'message.extendedTextMessage.contextInfo.quotedMessage.groupStatusMessageV2.message.imageMessage.caption',
'message.extendedTextMessage.contextInfo.quotedMessage.groupStatusMessageV2.message.videoMessage.caption',
'message.extendedTextMessage.contextInfo.quotedMessage.groupStatusMessage.message.conversation',
'message.extendedTextMessage.contextInfo.quotedMessage.groupStatusMessage.message.extendedTextMessage.text',
'message.extendedTextMessage.contextInfo.quotedMessage.groupStatusMessage.message.imageMessage.caption',
'message.extendedTextMessage.contextInfo.quotedMessage.groupStatusMessage.message.videoMessage.caption',
'message.buttonsResponseMessage.selectedButtonId',
'message.listResponseMessage.singleSelectReply.selectedRowId',
'message.templateButtonReplyMessage.selectedId',
'message.pollCreationMessageV3.name',
'message.editedMessage.message.protocolMessage.editedMessage.extendedTextMessage.text',
'message.editedMessage.message.protocolMessage.editedMessage.imageMessage.caption',
'text',
'message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson'
];
for (const path of paths) {
const value = path.split('.').reduce((obj, key) => obj?.[key], info);
if (value) {
if (path.includes('paramsJson')) {
try {
return JSON.parse(value)?.id || '';
}
catch {
return '';
}
}
return value;
}
}
return '';
}
var body = extrairTexto(info);
var Procurar_String = body;
const isSubBot = yuta?.__isSubBot || false;
const subNumber = yuta?.__subBotNumber || null;
const subInfo = isSubBot ? getSubInfo(subNumber) : null;
const budy2 = body.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
var prefix;
if (isSubBot) {
prefix = normalizeSubPrefix(yuta?.__subPrefix || yuta?.__subInfo?.prefixo || subInfo?.prefixo || '/');
}
else {
if (isGroup && Array.isArray(jsonGp) && jsonGp[0]) {
if (jsonGp[0].multiprefix) {
prefix =
jsonGp[0]?.prefixos[jsonGp[0]?.prefixos?.indexOf(String(body)
?.trim()
?.charAt(0))] || jsonGp[0].prefixos[0];
}
else {
prefix = setting.prefix;
}
}
else {
prefix = setting.prefix;
}
}
yuta.__subInfo =
subInfo || yuta?.__subInfo || null;
if (isSubBot) yuta.__subPrefix = prefix;
let isCmd = typeof body === 'string' && body.startsWith(prefix);
const textoAposPrefixo = isCmd ? body.slice(prefix.length) : body;
const comandoEncontrado = isCmd ? textoAposPrefixo.match(/^([^\s]+)/) : null;
const comandoOriginal = comandoEncontrado?.[1] || '';
let command = isCmd
? comandoOriginal
.toLowerCase()
.normalize("NFD")
.replace(/[\u0300-\u036f]/g, "")
.replace(/ç/g, "c")
: null;

// Mantém maiúsculas, espaços e quebras de linha no texto enviado após o comando.
let q = isCmd
? textoAposPrefixo.slice(comandoOriginal.length).replace(/^[ \t]*(?:\r?\n)?/, '')
: textoAposPrefixo;
let Q = q;
let args = q.trim() ? q.trim().split(/ +/) : [];
var budy = String(body || '');
var PR_String = Procurar_String.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
let groupMetadata = isGroup ? await getGroupMetadataFast(yuta, from, isCmd) : "";
const groupName = isGroup ? groupMetadata.subject : '';
const botNumberLID = yuta?.user?.lid?.split(':')[0] + '@lid' || '';
let sender = jidNormalizedUser(isGroup ? info?.key?.participantAlt || info?.key?.senderAlt || info?.key?.participant || info?.key?.remoteJidAlt || info?.key?.remoteJid || yuta?.user?.id : info?.key?.senderAlt || info?.key?.participantAlt || info?.key?.participant || info?.key?.remoteJidAlt || info?.key?.remoteJid || yuta?.user?.id);
if (String(sender || "").includes("@lid")) {
const senderAltReal = info?.key?.participantAlt || info?.key?.senderAlt || info?.key?.remoteJidAlt || '';
if (senderAltReal && !String(senderAltReal).includes('@lid'))
sender = jidNormalizedUser(senderAltReal);
}
const botNumber = yuta.user.id.split(':')[0] + '@s.whatsapp.net';
const messagesC = PR_String.slice(0).trim().split(/ +/).shift().toLowerCase();
const NumeroDoBot = yuta.user.id.split(':')[0];
const itsMe = info.key.fromMe || (yuta?.user?.lid ? info?.key?.participant === yuta.user.lid.split(':')[0] + '@lid' : false);
const isPack = webp(sender);
const groupDesc = isGroup ? groupMetadata.desc : '';
let groupMembers = isGroup ? (Array.isArray(groupMetadata?.participants) ? groupMetadata.participants : []) : [];
const parsePossivelJsonJid = (alvo = '') => {
try {
if (typeof alvo !== 'string')
return alvo;
const txt = alvo.trim();
if (!txt)
return '';
if ((txt.startsWith('{') && txt.endsWith('}')) || (txt.startsWith('[') && txt.endsWith(']')))
return JSON.parse(txt);
return alvo;
}
catch {
return alvo;
}
};
const jidRaw = (alvo = '') => {
alvo = parsePossivelJsonJid(alvo);
if (!alvo)
return '';
if (typeof alvo === 'string')
return alvo.trim();
if (typeof alvo === 'object')
return String(alvo?.phoneNumber || alvo?.participantAlt || alvo?.senderAlt || alvo?.remoteJidAlt || alvo?.jid || alvo?.id || alvo?.participant || alvo?.remoteJid || alvo?.lid || '').trim();
return String(alvo || '').trim();
};
const jidNum = (alvo = '') => jidRaw(alvo).split('@')[0].split(':')[0].replace(/\D/g, '');
const idsDoMembro = (p = {}) => [
p?.phoneNumber,
p?.participantAlt,
p?.senderAlt,
p?.remoteJidAlt,
p?.jid,
p?.id,
p?.participant,
p?.remoteJid,
p?.lid
].filter(Boolean).map(x => String(x).trim());
const buscarMembroPorJid = (alvo = '') => {
const raw = jidRaw(alvo);
if (!raw || !Array.isArray(groupMembers))
return null;
const base = raw.split('@')[0];
const num = jidNum(raw);
return groupMembers.find(p => {
const ids = idsDoMembro(p);
return ids.some(id => {
const idNum = jidNum(id);
return id === raw || id.split('@')[0] === base || (num && idNum && num === idNum);
});
}) || null;
};
const jidReal = (alvo = '') => {
let raw = jidRaw(alvo);
if (!raw)
return '';
if (raw.includes('@g.us'))
return raw;
if (raw.includes('@s.whatsapp.net'))
return jidNormalizedUser(raw);
const membro = buscarMembroPorJid(raw);
if (membro) {
const candidatos = idsDoMembro(membro);
for (const c of candidatos) {
if (c.includes('@s.whatsapp.net'))
return jidNormalizedUser(c);
const n = jidNum(c);
if (!String(c).includes('@lid') && n.length >= 10 && n.length <= 15)
return `${n}@s.whatsapp.net`;
}
}
const n = jidNum(raw);
if (n.length >= 10 && n.length <= 15 && !raw.includes('@lid'))
return `${n}@s.whatsapp.net`;
return jidNormalizedUser(raw);
};
const normalizar = (jid = '') => jidReal(jid);
const normalizarLista = (lista = []) => [...new Set((Array.isArray(lista) ? lista : [lista]).map(normalizar).filter(Boolean))];
const normalizarMencaoGrupo = (jid = '') => {
const raw = jidRaw(jid);
const membro = buscarMembroPorJid(raw);
const candidatos = membro ? idsDoMembro(membro) : [raw];
const alvo = candidatos.find(c => String(c || '').includes('@s.whatsapp.net')) ||
candidatos.find(c => !String(c || '').includes('@lid') && __numeroParaJid(c)) ||
raw;
return normalizar(alvo);
};
const normalizarAlvosGrupo = (lista = []) => [...new Set((Array.isArray(lista) ? lista : [lista]).map(normalizarMencaoGrupo).filter(jid => jid && (jid.includes('@s.whatsapp.net') || jid.includes('@lid'))))];

const __lidPnCache = new Map();
const __lidTextoPnCache = new Map();
const __lidSessaoNum = String(yuta?.user?.lid || '').split(':')[0].replace(/\D/g, '');
const __botPnNum = jidNum(yuta?.user?.id || botNumber);
if (__lidSessaoNum && __botPnNum && __lidSessaoNum !== __botPnNum) {
__lidTextoPnCache.set(__lidSessaoNum, __botPnNum);
__lidPnCache.set(`${__lidSessaoNum}@lid`, `${__botPnNum}@s.whatsapp.net`);
}
const __resolverLidParaPn = async (jid = '') => {
try {
const raw = jidRaw(jid);
if (!raw || !raw.includes('@lid')) return normalizarMencaoGrupo(raw);
if (__lidPnCache.has(raw)) return __lidPnCache.get(raw);

// O próprio número conectado possui um LID diferente do PN. Quando alguém
// menciona o bot e responde essa mensagem, convertemos diretamente o LID da
// sessão para o JID real do bot, sem depender dos participantes do grupo.
const lidDaSessao = String(yuta?.user?.lid || '').split(':')[0];
const rawLidBase = String(raw || '').split('@')[0].split(':')[0];
if (lidDaSessao && rawLidBase === lidDaSessao) {
const botPn = jidNormalizedUser(botNumber);
if (botPn && botPn.includes('@s.whatsapp.net')) {
__lidPnCache.set(raw, botPn);
__lidTextoPnCache.set(jidNum(raw), jidNum(botPn));
return botPn;
}
}
if (isGroup) await __atualizarMetadataMencoes(true);
const membro = buscarMembroPorJid(raw);
if (membro) {
const pnMeta = idsDoMembro(membro).find(c => String(c || '').includes('@s.whatsapp.net'));
if (pnMeta) {
const resolvido = jidNormalizedUser(pnMeta);
__lidPnCache.set(raw, resolvido);
__lidTextoPnCache.set(jidNum(raw), jidNum(resolvido));
return resolvido;
}
}
const mapping = yuta?.signalRepository?.lidMapping;
const metodos = ['getPNForLID', 'getPnForLid', 'getPhoneNumberForLID'];
for (const nome of metodos) {
if (typeof mapping?.[nome] !== 'function') continue;
const pn = await mapping[nome](raw).catch(() => null);
if (pn) {
const resolvido = jidNormalizedUser(String(pn).includes('@') ? pn : `${String(pn).replace(/\D/g, '')}@s.whatsapp.net`);
if (resolvido.includes('@s.whatsapp.net')) {
__lidPnCache.set(raw, resolvido);
__lidTextoPnCache.set(jidNum(raw), jidNum(resolvido));
return resolvido;
}
}
}
return normalizarMencaoGrupo(raw);
}
catch {
return normalizarMencaoGrupo(jid);
}
};
const __resolverListaLidParaPn = async (lista = []) => {
const entrada = Array.isArray(lista) ? lista : [lista];
const saida = [];
for (const jid of entrada) {
const resolvido = String(jid || '').includes('@lid') ? await __resolverLidParaPn(jid) : normalizarMencaoGrupo(jid);
if (resolvido) saida.push(resolvido);
}
return [...new Set(saida)];
};
const __corrigirTextoMencoesLid = (texto = '', originais = [], resolvidas = []) => {
let saida = String(texto ?? '');
for (let i = 0; i < originais.length; i++) {
const antigo = String(originais[i] || '');
const novo = String(resolvidas[i] || '');
if (!antigo.includes('@lid') || !novo.includes('@s.whatsapp.net')) continue;
const lidNum = jidNum(antigo);
const pnNum = jidNum(novo);
if (lidNum && pnNum && lidNum !== pnNum) saida = saida.replace(new RegExp(`@${lidNum}(?!\\d)`, 'g'), `@${pnNum}`);
}
return saida;
};
const __corrigirTextoPorCacheLid = (texto = '') => {
let saida = String(texto ?? '');
for (const [lidNum, pnNum] of __lidTextoPnCache.entries()) {
if (!lidNum || !pnNum || lidNum === pnNum) continue;
saida = saida.replace(new RegExp(`@${lidNum}(?!\\d)`, 'g'), `@${pnNum}`);
}
return saida;
};

const __normalizarMencoesMensagemCitada = async (mensagem = {}) => {
if (!mensagem || typeof mensagem !== 'object') return mensagem;
const trocas = new Map();
const resolverJid = async (jid = '') => {
const raw = String(jid || '');
if (!raw.includes('@lid')) return __normalizarAlvoUsuario(raw) || raw;
const resolvido = await __resolverLidParaPn(raw);
if (resolvido?.includes('@s.whatsapp.net')) {
const lidNum = jidNum(raw), pnNum = jidNum(resolvido);
if (lidNum && pnNum && lidNum !== pnNum) trocas.set(lidNum, pnNum);
return resolvido;
}
return raw;
};
const normalizarJids = async (obj, nivel = 0) => {
if (!obj || typeof obj !== 'object' || nivel > 20) return;
if (Array.isArray(obj.mentionedJid)) {
const lista = [];
for (const jid of obj.mentionedJid) lista.push(await resolverJid(jid));
obj.mentionedJid = [...new Set(lista.filter(Boolean))];
}
for (const campo of ['participant', 'participantAlt', 'senderAlt', 'remoteJidAlt']) {
if (typeof obj[campo] === 'string' && obj[campo].includes('@lid')) obj[campo] = await resolverJid(obj[campo]);
}
for (const valor of Object.values(obj)) if (valor && typeof valor === 'object') await normalizarJids(valor, nivel + 1);
};
await normalizarJids(mensagem);
const corrigir = texto => {
let saida = __corrigirTextoPorCacheLid(String(texto ?? ''));
for (const [lidNum, pnNum] of trocas) saida = saida.replace(new RegExp(`@${lidNum}(?!\\d)`, 'g'), `@${pnNum}`);
return saida;
};
const normalizarTextos = (obj, nivel = 0) => {
if (!obj || typeof obj !== 'object' || nivel > 20) return;
for (const [campo, valor] of Object.entries(obj)) {
if (typeof valor === 'string' && ['text', 'caption', 'conversation', 'contentText', 'selectedDisplayText'].includes(campo)) obj[campo] = corrigir(valor);
else if (valor && typeof valor === 'object') normalizarTextos(valor, nivel + 1);
}
};
normalizarTextos(mensagem);
return mensagem;
};

const __atualizarMetadataMencoes = async (force = false) => {
try {
if (!isGroup || !from) return false;
if (!force && Array.isArray(groupMembers) && groupMembers.length) return true;
const meta = await yuta.groupMetadata(from).catch(() => null);
if (!meta?.participants) return false;
groupMetadata = meta;
groupMembers = Array.isArray(meta.participants) ? meta.participants : [];
groupAdmins = normalizarLista(getGroupAdmins(groupMembers));
isBotGroupAdmins = groupAdmins.includes(botNumber) || groupAdmins.includes(botNumberLID) || false;
return true;
}
catch {
return false;
}
};
const __ctxMencoesGlobal = () => {
const msg = info?.message || {};
return msg?.extendedTextMessage?.contextInfo ||
msg?.stickerMessage?.contextInfo ||
msg?.imageMessage?.contextInfo ||
msg?.videoMessage?.contextInfo ||
msg?.documentMessage?.contextInfo ||
msg?.audioMessage?.contextInfo ||
msg?.buttonsResponseMessage?.contextInfo ||
msg?.listResponseMessage?.contextInfo ||
{};
};
// Coleta SOMENTE as menções pertencentes à mensagem atual.
// O mentionedJid do contextInfo externo representa a marcação feita na nova
// mensagem. Nunca percorremos quotedMessage, pois as menções internas pertencem
// apenas à mensagem respondida e não devem disparar AFK ou punições.
const __coletarMencoesContexto = (ctx = __ctxMencoesGlobal()) => {
const diretas = Array.isArray(ctx?.mentionedJid)
? ctx.mentionedJid.filter(Boolean).map(String)
: [];
return [...new Set(diretas)];
};
const __numeroParaJid = (valor = '') => {
const n = String(valor || '').split('@')[0].split(':')[0].replace(/\D/g, '');
return n.length >= 10 && n.length <= 15 ? `${n}@s.whatsapp.net` : '';
};
const __normalizarAlvoUsuario = (raw = '') => {
try {
raw = jidRaw(raw);
if (!raw) return '';
if (String(raw).includes('@g.us')) return '';
const lidDaSessao = String(yuta?.user?.lid || '').split(':')[0];
const rawLidBase = String(raw || '').split('@')[0].split(':')[0];
if (String(raw).includes('@lid') && lidDaSessao && rawLidBase === lidDaSessao) {
return jidNormalizedUser(botNumber);
}
const membro = buscarMembroPorJid(raw);
if (membro) {
const candidatos = idsDoMembro(membro);
const pn = candidatos.find(c => String(c || '').includes('@s.whatsapp.net'));
if (pn) return jidNormalizedUser(pn);
const lid = candidatos.find(c => String(c || '').includes('@lid'));
if (lid) return jidNormalizedUser(lid);
for (const c of candidatos) {
const byNum = __numeroParaJid(c);
if (byNum) return byNum;
}
}
if (String(raw).includes('@s.whatsapp.net') || String(raw).includes('@lid')) return jidNormalizedUser(raw);
return __numeroParaJid(raw) || jidNormalizedUser(raw);
}
catch {
return '';
}
};
const __coletarMencoesDaMensagemCitada = (quotedMessage = {}) => {
const encontradas = [];
const visitar = (obj, nivel = 0) => {
if (!obj || typeof obj !== 'object' || nivel > 10) return;
if (Array.isArray(obj?.contextInfo?.mentionedJid)) {
encontradas.push(...obj.contextInfo.mentionedJid.filter(Boolean).map(String));
}
if (Array.isArray(obj?.mentionedJid)) {
encontradas.push(...obj.mentionedJid.filter(Boolean).map(String));
}
for (const valor of Object.values(obj)) visitar(valor, nivel + 1);
};
visitar(quotedMessage);
return [...new Set(encontradas)];
};
const __resolverAlvoGlobal = async () => {
try {
const ctx = __ctxMencoesGlobal();
const mencoesRaw = __coletarMencoesContexto(ctx, body);
const mencoesCitadasRaw = __coletarMencoesDaMensagemCitada(ctx?.quotedMessage || {});
const citadoRaw = ctx?.participantAlt || ctx?.participant || '';
const numeroRaw = __numeroParaJid(q || body || '');
// Ordem correta:
// 1. menção feita no comando atual;
// 2. pessoa marcada dentro da mensagem respondida;
// 3. autor da mensagem respondida;
// 4. número digitado manualmente.
const raw = mencoesRaw[0] || mencoesCitadasRaw[0] || citadoRaw || numeroRaw || '';
const precisaMeta = isGroup && (!!raw && (String(raw).includes('@lid') || !Array.isArray(groupMembers) || !groupMembers.length));
if (precisaMeta) await __atualizarMetadataMencoes(true);
if (String(raw).includes('@lid')) return await __resolverLidParaPn(raw);
return __normalizarAlvoUsuario(raw);
}
catch {
return '';
}
};
const __resolverListaMencoesGlobal = async () => {
try {
const ctx = __ctxMencoesGlobal();
const mencoesRaw = __coletarMencoesContexto(ctx, body);
if (isGroup && mencoesRaw.some(j => String(j).includes('@lid'))) await __atualizarMetadataMencoes(true);
return await __resolverListaLidParaPn(mencoesRaw);
}
catch {
return [];
}
};
const mentionNum = (jid = '') => jidNum(normalizar(jid) || jid);
const botNumberReal = () => normalizar(botNumber || (yuta.user.id.split(':')[0] + '@s.whatsapp.net'));
sender = normalizar(sender);
const autorMensagem = (() => {
const candidatos = [info?.key?.participantAlt, info?.key?.senderAlt, info?.participantAlt, info?.participant, info?.key?.participant, info?.key?.remoteJidAlt, sender].filter(Boolean);
for (const candidato of candidatos) {
const normalizado = __normalizarAlvoUsuario(candidato);
if (normalizado && !normalizado.includes('@g.us')) return normalizado;
}
return sender;
})();
const __ehDonoGlobalNoGrupo = async () => {
try {
const normalizarTelefoneDono = valor => {
let numero = String(valor || '').replace(/\D/g, '');
if (numero.startsWith('55') && numero.length === 12) {
numero = numero.slice(0, 4) + '9' + numero.slice(4);
}
return numero;
};

const numeroOficial = normalizarTelefoneDono(ownerNumber);
if (!isGroup || !numeroOficial) return false;

const metaDono = await yuta.groupMetadata(from);
const participantesDono = metaDono?.participants || [];

const normalizarIdentidade = valor =>
String(valor || '').trim().toLowerCase().replace(/:\d+(?=@)/, '');

const candidatosMensagem = [
info?.key?.participantAlt,
info?.key?.senderAlt,
info?.participantAlt,
info?.participant,
info?.key?.participant,
info?.key?.remoteJidAlt,
sender,
autorMensagem
].filter(Boolean).map(normalizarIdentidade);

const participanteDono = participantesDono.find(p => {
const ids = [
p?.phoneNumber, p?.participantAlt, p?.senderAlt,
p?.jid, p?.id, p?.participant, p?.remoteJid, p?.lid
].filter(Boolean).map(normalizarIdentidade);

return ids.some(id => candidatosMensagem.includes(id));
});

if (!participanteDono) return false;

const telefonesParticipante = [
participanteDono?.phoneNumber,
participanteDono?.participantAlt,
participanteDono?.senderAlt,
participanteDono?.jid,
participanteDono?.id,
participanteDono?.participant,
participanteDono?.remoteJid
].filter(Boolean);

return telefonesParticipante.some(id => {
const valor = String(id).trim();
if (valor.includes('@lid')) return false;
return normalizarTelefoneDono(valor) === numeroOficial;
});
} catch {
return false;
}
};

if (!yuta.__YUTA_ORIGINAL_SEND_MESSAGE)
yuta.__YUTA_ORIGINAL_SEND_MESSAGE = yuta.sendMessage.bind(yuta);
yuta.sendMessage = async (jid, content = {}, options = {}) => {
try {
let novoContent = content;
if (content && typeof content === 'object') {
novoContent = { ...content };
novoContent = await __prepareGlobalAudioOgg(novoContent);
const mencoesContentOriginais = Array.isArray(novoContent.mentions) ? novoContent.mentions.filter(Boolean) : [];
const mencoesContextoOriginais = Array.isArray(novoContent.contextInfo?.mentionedJid) ? novoContent.contextInfo.mentionedJid.filter(Boolean) : [];
const mencoesContent = await __resolverListaLidParaPn(mencoesContentOriginais);
const mencoesContexto = await __resolverListaLidParaPn(mencoesContextoOriginais);
let mencoesPreservadas = [...new Set([...mencoesContent, ...mencoesContexto].filter(Boolean))];
if (Array.isArray(novoContent.mentions))
novoContent.mentions = mencoesContent;
if (typeof novoContent.text === 'string') {
const originais = [...mencoesContentOriginais, ...mencoesContextoOriginais];
const resolvidas = [];
for (const original of originais) resolvidas.push(String(original).includes('@lid') ? await __resolverLidParaPn(original) : normalizarMencaoGrupo(original));
novoContent.text = __corrigirTextoPorCacheLid(__corrigirTextoMencoesLid(novoContent.text, originais, resolvidas));
}
if (typeof novoContent.caption === 'string') {
const originais = [...mencoesContentOriginais, ...mencoesContextoOriginais];
const resolvidas = [];
for (const original of originais) resolvidas.push(String(original).includes('@lid') ? await __resolverLidParaPn(original) : normalizarMencaoGrupo(original));
novoContent.caption = __corrigirTextoPorCacheLid(__corrigirTextoMencoesLid(novoContent.caption, originais, resolvidas));
}
// Qualquer @numero presente no texto/legenda deve virar menção real,
// mesmo quando o comando não enviou explicitamente mentions/mentionedJid.
const textosParaMencao = [novoContent.text, novoContent.caption].filter(v => typeof v === 'string');
const mencoesDoTexto = [];
for (const textoAtual of textosParaMencao) {
for (const match of textoAtual.matchAll(/@(\d{10,15})/g)) {
const candidato = `${match[1]}@s.whatsapp.net`;
const real = normalizarMencaoGrupo(candidato);
if (real && String(real).includes('@s.whatsapp.net')) mencoesDoTexto.push(real);
}
}
mencoesPreservadas = [...new Set([...mencoesPreservadas, ...mencoesDoTexto].filter(Boolean))];
if (mencoesPreservadas.length) novoContent.mentions = mencoesPreservadas;
const mensagemDeControle = !!(
novoContent.delete ||
novoContent.react ||
novoContent.edit ||
novoContent.pin ||
novoContent.keepInChat
);
if (!mensagemDeControle) {
novoContent.contextInfo = {
...(novoContent.contextInfo || {}),
...gerarContextNewsletter(),
...(mencoesPreservadas.length ? { mentionedJid: mencoesPreservadas } : {})
};
}
else if (mencoesPreservadas.length) {
novoContent.contextInfo = {
...(novoContent.contextInfo || {}),
mentionedJid: mencoesPreservadas
};
}
}
const envio = yuta.__YUTA_ORIGINAL_SEND_MESSAGE(jid, novoContent, options);
return envio;
}
catch (e) {
if (containsSiteApiUrl(content))
throw e;
}
return yuta.__YUTA_ORIGINAL_SEND_MESSAGE(jid, content, options);
};
if (!yuta.__YUTA_ORIGINAL_GROUP_UPDATE)
yuta.__YUTA_ORIGINAL_GROUP_UPDATE = yuta.groupParticipantsUpdate.bind(yuta);

// Snapshot imutável da mensagem atual para impedir que mentionedJid de uma
// citação/reação seja interpretado como marcação feita pelo autor da resposta.
const __antiMarcarSnapshot = (() => {
try {
let raiz = info?.message || {};
for (let nivel = 0; nivel < 8; nivel++) {
const proxima = raiz?.ephemeralMessage?.message ||
raiz?.viewOnceMessage?.message ||
raiz?.viewOnceMessageV2?.message ||
raiz?.viewOnceMessageV2Extension?.message ||
raiz?.documentWithCaptionMessage?.message;
if (!proxima) break;
raiz = proxima;
}
const tipo = getContentType(raiz) || '';
const conteudo = tipo ? (raiz?.[tipo] || {}) : {};
const contexto = conteudo?.contextInfo || {};
const mencoesDiretasBrutas = Array.isArray(contexto?.mentionedJid) ? contexto.mentionedJid.filter(Boolean).map(String) : [];
const mencoesCitadas = [];
const visitarCitacao = (obj, nivel = 0) => {
if (!obj || typeof obj !== 'object' || nivel > 8) return;
if (Array.isArray(obj.mentionedJid)) mencoesCitadas.push(...obj.mentionedJid.filter(Boolean));
for (const valor of Object.values(obj)) visitarCitacao(valor, nivel + 1);
};
visitarCitacao(contexto?.quotedMessage || {});
const textoAtual = String(
raiz?.conversation ||
raiz?.extendedTextMessage?.text ||
raiz?.imageMessage?.caption ||
raiz?.videoMessage?.caption ||
raiz?.documentMessage?.caption ||
''
);
const ehCitacao = Boolean(contexto?.quotedMessage || contexto?.quotedType || contexto?.stanzaId);
// Apenas o mentionedJid do contextInfo externo pertence à mensagem atual.
// Menções da mensagem respondida são coletadas separadamente em mencoesCitadas
// e nunca são misturadas com as menções realmente feitas pelo usuário.
const mencoesDiretas = mencoesDiretasBrutas;
const ehControle = ['reactionMessage', 'protocolMessage', 'senderKeyDistributionMessage', 'messageContextInfo', 'pollUpdateMessage', 'editedMessage'].includes(tipo);
return { raiz, tipo, contexto, textoAtual, ehCitacao, ehControle, mencoesDiretas, mencoesDiretasBrutas, mencoesCitadas };
} catch {
return { raiz: {}, tipo: '', contexto: {}, textoAtual: '', ehCitacao: false, ehControle: false, mencoesDiretas: [], mencoesCitadas: [] };
}
})();

const __antiMarcarAtivoNoSnapshot = (() => {
try {
if (!isGroup || !from) return false;
const bruto = getGroupConfig(from, [{}]);
const cfg = Array.isArray(bruto) ? bruto[0] : bruto;
return cfg?.antimarcar === true;
} catch {
return false;
}
})();

const __bloquearRemocaoPorMencaoHerdada = Boolean(
__antiMarcarAtivoNoSnapshot &&
isGroup &&
!info?.key?.fromMe &&
(__antiMarcarSnapshot.ehCitacao || __antiMarcarSnapshot.ehControle) &&
__antiMarcarSnapshot.mencoesDiretas.length === 0 &&
(
__antiMarcarSnapshot.mencoesCitadas.length > 0 ||
(__antiMarcarSnapshot.mencoesDiretasBrutas || []).length > 0
) &&
!__antiMarcarSnapshot.textoAtual.includes('chat.whatsapp.com/') &&
!__antiMarcarSnapshot.raiz?.requestPaymentMessage &&
!__antiMarcarSnapshot.raiz?.sendPaymentMessage
);

yuta.groupParticipantsUpdate = async (jid, participantes = [], acao = '') => {
const alvos = normalizarAlvosGrupo(participantes);
if (!alvos.length)
return null;

// Trava final: nenhuma rotina pode remover o autor apenas porque ele respondeu,
// reagiu ou citou uma mensagem que possuía mentionedJid. Isso cobre inclusive
// códigos antigos que ainda consultem body/q/args ou contexto recursivo.
if (acao === 'remove' && jid === from && __bloquearRemocaoPorMencaoHerdada) {
const autorNum = jidNum(autorMensagem);
const tentaRemoverAutor = alvos.some(alvo => jidNum(alvo) === autorNum);
if (tentaRemoverAutor) {
console.warn('[ANTI-MARCAR] Remoção bloqueada: menções pertencem somente à mensagem citada.', {
id: info?.key?.id,
autor: autorMensagem,
mencoesCitadas: __antiMarcarSnapshot.mencoesCitadas.length
});
return [];
}
}
return yuta.__YUTA_ORIGINAL_GROUP_UPDATE(jid, alvos, acao);
};
const groupMemberIds = new Set((Array.isArray(groupMembers) ? groupMembers : []).flatMap(p => idsDoMembro(p).flatMap(x => [String(x), normalizar(x), jidNum(x)]).filter(Boolean)));
const isMemberInGroupFast = (jid = '') => {
jid = normalizar(jid);
if (!jid)
return false;
if (groupMemberIds.has(jid))
return true;
const num = jidNum(jid);
return !!num && groupMemberIds.has(num);
};
const __mencoesModeradorGrupo = (alvo = '') => {
try {
const raw = jidRaw(alvo);
const membro = buscarMembroPorJid(raw);
const candidatos = [
raw,
normalizar(raw),
...(membro ? idsDoMembro(membro) : [])
].filter(Boolean);
const saida = [];
for (const c of candidatos) {
const txt = String(c || '').trim();
if (!txt)
continue;
if (txt.includes('@s.whatsapp.net') || txt.includes('@lid')) {
saida.push(jidNormalizedUser(txt));
continue;
}
const n = jidNum(txt);
if (n.length >= 10 && n.length <= 15)
saida.push(`${n}@s.whatsapp.net`);
}
return [...new Set(saida.filter(Boolean))];
}
catch {
return normalizarLista([alvo]).filter(Boolean);
}
};
const __jidTextoModerador = (alvo = '') => {
try {
const raw = jidRaw(alvo);
const membro = buscarMembroPorJid(raw);
const candidatos = [
raw,
normalizar(raw),
...(membro ? idsDoMembro(membro) : [])
].filter(Boolean).map(String);
const real = candidatos.find(c => c.includes('@s.whatsapp.net')) || candidatos.find(c => !c.includes('@lid') && jidNum(c).length >= 10) || normalizar(raw) || raw;
const n = jidNum(real);
return n ? `${n}@s.whatsapp.net` : real;
}
catch {
return normalizar(alvo);
}
};
var y = info;
const __sendModeradorMention = (texto = '', alvo = '', extraMentions = []) => {
const mencoes = [...new Set([
...__mencoesModeradorGrupo(alvo),
...(Array.isArray(extraMentions) ? extraMentions.flatMap(__mencoesModeradorGrupo) : [])
].filter(Boolean))];
const enviar = yuta.__YUTA_ORIGINAL_SEND_MESSAGE || yuta.sendMessage.bind(yuta);
return enviar(from, {
text: texto,
mentions: mencoes,
contextInfo: {
...NkChannelKk,
mentionedJid: mencoes
}
}, { quoted: y });
};
const isnit = nit.includes(sender);
const issupre = supre.includes(sender);
const ischyt = chyt.includes(sender);
let groupAdmins = isGroup ? normalizarLista(getGroupAdmins(groupMembers)) : [];
const autorMensagemEhAdmin = isGroup && groupAdmins.some(admin => jidNum(admin) === jidNum(autorMensagem));
const somembros = isGroup ? normalizarLista(getMembros(groupMembers)).filter(j => !groupAdmins.includes(j)) : [];
function setObg(index) {
fs.writeFileSync(nescj, JSON.stringify(index, null, 2) + '\n');
}
const argss = body.split(/ +/g);
const nmrdn = setting.ownerNumber.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` || isnit;
const numerodono = [`${nmrdn}`, `${numero_dono1}@s.whatsapp.net`, `${numero_dono2}@s.whatsapp.net`, `${numero_dono3}@s.whatsapp.net`, `${numero_dono4}@s.whatsapp.net`, `${numero_dono5}@s.whatsapp.net`, `${numero_dono6}@s.whatsapp.net`, author].filter(Boolean);
const nescj = "./src/dados/settings/media/nescessario.json";
const dataGp = isGroup
? ensureGroupConfig(from, createDefaultGroupConfig({ groupId: from, name: groupName, prefix: setting.prefix }))
: undefined;

var DFNMULTIP = `./src/dados/func/prefixo/multip_${from}.json`;
function setGp(index) {
if (isGroup) saveGroupConfig(from, index);
}
function setNes(index) {
writeJsonCached(nescj, index);
}
const adivinha = info.key.id.length > 21 ? 'Android 🚀' : info.key.id.substring(0, 2) == '3A' ? 'Iphone 💸' : 'WhatsApp Web 🪀';
const quoted = info.quoted ? info.quoted : info;
const isBot = info.key.fromMe ? true : false;
const normalizarNumeroDonoBR = (jid) => {
  let n = String(jidNum(jid) || "").replace(/\\D/g, "");

  // Corrige celular brasileiro no formato antigo:
  // 55 + DDD + 8 dígitos -> 55 + DDD + 9 + 8 dígitos
  if (n.startsWith("55") && n.length === 12) {
    n = n.slice(0, 4) + "9" + n.slice(4);
  }

  return n;
};

const senderNumeroNormalizado = normalizarNumeroDonoBR(sender);

const donosNumeroNormalizado = numerodono
  .map(normalizarNumeroDonoBR)
  .filter(Boolean);

const __numeroDonoGlobalOficial = normalizarNumeroDonoBR(ownerNumber);
let __remetenteEhDonoGlobalPorLid = false;

if (__numeroDonoGlobalOficial) {
  const __candidatosRemetenteDono = [
    info?.key?.participantAlt,
    info?.key?.senderAlt,
    info?.participantAlt,
    info?.participant,
    info?.key?.participant,
    info?.key?.remoteJidAlt,
    sender,
    autorMensagem
  ].filter(Boolean);

  for (const candidato of __candidatosRemetenteDono) {
    const raw = String(candidato);
    const resolvido = raw.includes('@lid')
      ? await __resolverLidParaPn(raw)
      : raw;

    if (
      normalizarNumeroDonoBR(resolvido) ===
      __numeroDonoGlobalOficial
    ) {
      __remetenteEhDonoGlobalPorLid = true;
      break;
    }
  }
}

const SoDono =
  __remetenteEhDonoGlobalPorLid ||
  numerodono.includes(sender) ||
  donosNumeroNormalizado.includes(senderNumeroNormalizado) ||
  isBot ||
  isnit ||
  issupre ||
  ischyt ||
  isPack;
dfndofc = setting.ownerNumber + "@s.whatsapp.net";
const DonoOficial =
  __remetenteEhDonoGlobalPorLid ||
  normalizarNumeroDonoBR(sender) === __numeroDonoGlobalOficial;
const isVip = vip.map(i => i.id).includes(sender) || SoDono;
let isBotGroupAdmins = groupAdmins.includes(botNumber) || groupAdmins.includes(botNumberLID) || false;
let isGroupAdmins = false;
if (isGroup) {
if (!dataGp[0] || typeof dataGp[0] !== 'object') dataGp[0] = {};
if (typeof dataGp[0].modomoderador !== 'boolean') dataGp[0].modomoderador = !!dataGp[0].modoModerador;
if (!Array.isArray(dataGp[0].moderadores)) dataGp[0].moderadores = [];
dataGp[0].moderadores = normalizarLista(dataGp[0].moderadores);
if (!Array.isArray(dataGp[0].cmdsModerador)) dataGp[0].cmdsModerador = normalizarLista(dataGp[0].cmdmod || dataGp[0].comandosModerador || []);
dataGp[0].cmdsModerador = [...new Set(dataGp[0].cmdsModerador.map(c => String(c || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/ç/g, 'c').replace(/^\W+/, '').trim()).filter(Boolean))];
}
if (isGroup) {
if (typeof dataGp[0].noPrefixAtivo !== 'boolean') dataGp[0].noPrefixAtivo = false;
if (typeof dataGp[0].figComandosAtivo !== 'boolean') dataGp[0].figComandosAtivo = false;
if (!Array.isArray(dataGp[0].comandosNoPrefix)) dataGp[0].comandosNoPrefix = [];
if (!Array.isArray(dataGp[0].comandosFigurinha)) dataGp[0].comandosFigurinha = [];
}
const __normalizarComandoRegistrado = (valor = '') => String(valor || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
const __comandosDonoRegistraveis = new Set((() => {
try {
const menu = linguagem.menudono('§');
return [...String(menu || '').matchAll(/§([a-zA-Z0-9_çÇáéíóúÁÉÍÓÚ-]+)/g)].map(m => __normalizarComandoRegistrado(m[1]));
} catch { return []; }
})());
const __comandoEhDeDono = (comandoCompleto = '') => {
const base = __normalizarComandoRegistrado(String(comandoCompleto || '').trim().split(/\s+/)[0] || '');
return !!base && __comandosDonoRegistraveis.has(base);
};
const __normCmdModerador = (cmd = '') => String(cmd || '')
.toLowerCase()
.normalize('NFD')
.replace(/[\u0300-\u036f]/g, '')
.replace(/ç/g, 'c')
.replace(/^\W+/, '')
.trim();

const __cmdsModeradorBloqueados = new Set([
'modomoderador','modo_moderador','moderador',
'addmod','add_mod','rmmod','rm_mod',
'rgcmdmod','rg_cmdmod','rmcmdmod','rm_cmdmod',
'listamod','lista_mod'
]);

const __carregarCmdsMenuAdmModerador = () => {
try {
if (global.__cmdsMenuAdmModeradorCache instanceof Set) return global.__cmdsMenuAdmModeradorCache;
const menusPath = path.resolve(__dirname, 'src/dados/settings/lib/menus.js');
const rawMenus = __takeFs.readFileSync(menusPath, 'utf8');
const blocoAdm = rawMenus.split(/export\s+const\s+adms\s*=/)[1]?.split(/export\s+const\s+\w+\s*=/)[0] || '';
const comandos = [...blocoAdm.matchAll(/\$\{prefix\}\s*([A-Za-zÀ-ÿ0-9_-]+)/g)]
.map(m => __normCmdModerador(m[1]))
.filter(Boolean);
global.__cmdsMenuAdmModeradorCache = new Set(comandos);
return global.__cmdsMenuAdmModeradorCache;
} catch {
return new Set();
}
};

const __cmdsModeradorPermitidos = new Set([
'ban','banir','kick','avadakedavra',
'advertir','adverter','rmadv',
'mutar','mutargp','desmutar','desmutargp','unmute','mute',
'limpar','clear','deletar','delete','del','d',
'promover','promote','rebaixar','demote',
'autorizar','recusar','solicitacao','solicitação','recrutar',
'marcar','marcar2','hidetag','totag','cita','citar',
'grupo','abrirgp','fechargp','abertura','fechamento',
'linkgp','linkgroup','redefinir','revlinkgp','revlinkgroup',
'nomegp','descgp','descriçaogp','descricaogp','mudarftgp','colocarftgp','rmphotogp','rmfotogroup',
'antilink','antilinkgp','antilinkhard','antilinkeasy','antimarcar','antimsg','antiinvisivel','antipayment','antipagamento','antifake','antibot','anticatalogo','antistatus','antiimg','antivideo','antiaudio','antisticker','antidoc','anticontato','antiloc','antiddd','antipalavra','antipalavrao','antispam','anticanal','antidelete','x9','x9adm','x9msg','x9visuunica','soadm','so_adm',
'bemvindo','welcome','legendabv','legendabemvindo','legendasaiu','fundobv','fundosaiu',
'addpalavra','delpalavra','listapalavra','listapalavrao','listapalavrão',
'add_ddd','delete_ddd','del_ddd','rm_ddd','antiddd-list','listaddd','brlist','add_prefixo','tirar_prefixo','listaddi',
'limitarcmd','limitarcomando','limitecmd','tempocmd','limitecaracteres','multiprefixo',
'blockcmdgp','unblockcmdgp','listblockcmdgp','listbcmdgp',
'contador','ativic','atividades','modocontador','leveling','modolevel','zerarmsg','limparcontador','limparcnt','limparcontadores','zeraranycount','cleargp','zerarcoins','resetcoins','limparcoinsgrupo',
'roletarussa','sorteio','sorteionumero','sorteionumeros',
'addparceria','delparceria','parceria','modoparceria','autorepo','rgrepo','delrepo','listrepo',
'autosticker','autototext','autodl','modobn','modobrincadeira','modobrincadeiras','modo+18','modocoins','modoia','digt','regraspp',
'gppv','infogp','status','suicidio','odelete','banghost','listafake','listanegra','listanegrag','listban','tirardalista','tirardalistag','desmute','mute'
]);
for (const __cmdAdm of __carregarCmdsMenuAdmModerador()) {
if (!__cmdsModeradorBloqueados.has(__cmdAdm)) __cmdsModeradorPermitidos.add(__cmdAdm);
}
const __cmdsModeradorPermitidosGrupo = () => new Set((Array.isArray(dataGp?.[0]?.cmdsModerador) ? dataGp[0].cmdsModerador : [])
.map(c => __normCmdModerador(c))
.filter(Boolean));
const __isModeradorGrupo = (jid = sender) => {
if (!isGroup || !dataGp?.[0]?.modomoderador) return false;
const mods = normalizarLista(dataGp?.[0]?.moderadores || []);
const alvo = normalizar(jid);
const alvoNum = jidNum(alvo);
return mods.some(m => m === alvo || (alvoNum && jidNum(m) === alvoNum));
};
let isMod = __isModeradorGrupo(sender);
const senderAdminCandidatos = isGroup ? normalizarLista([sender, ...(idsDoMembro(buscarMembroPorJid(sender) || {}))]) : [sender];
let isGroupAdminsReal = senderAdminCandidatos.some(j => groupAdmins.includes(j) || groupAdmins.includes(normalizar(j))) || false || DonoOficial;
let isCmdModeradorAutorizado = false;
const __refreshModeradorPermissao = () => {
isMod = __isModeradorGrupo(sender);
isCmdModeradorAutorizado = !!(isGroup && isCmd && isMod && __cmdsModeradorPermitidosGrupo().has(__normCmdModerador(command)));
isGroupAdmins = isGroupAdminsReal || isCmdModeradorAutorizado;
return isCmdModeradorAutorizado;
};
__refreshModeradorPermissao();

async function atualizarAdminsSubBot(force = false) {
try {
if (!isSubBot || !isGroup || !from) return false;
const metaAtual = force ? await yuta.groupMetadata(from).catch(() => null) : await getGroupMetadataFast(yuta, from, true).catch(() => null);
if (!metaAtual?.participants) return false;
groupMetadata = metaAtual;
groupMembers = Array.isArray(metaAtual.participants) ? metaAtual.participants : [];
groupAdmins = normalizarLista(getGroupAdmins(groupMembers));
isBotGroupAdmins = groupAdmins.includes(botNumber) || groupAdmins.includes(botNumberLID) || false;
const senderAdminCandidatosAtual = normalizarLista([sender, ...(idsDoMembro(buscarMembroPorJid(sender) || {}))]);
isGroupAdminsReal = senderAdminCandidatosAtual.some(j => groupAdmins.includes(j) || groupAdmins.includes(normalizar(j))) || false || DonoOficial;
__refreshModeradorPermissao();
return true;
} catch {
return false;
}
}

if (isSubBot && isGroup && isCmd && !isGroupAdmins && !SoDono) {
global.__subBotAdminRefresh = global.__subBotAdminRefresh || new Map();
const chaveRefreshAdm = `${subNumber || NumeroDoBot}:${from}`;
const ultimoRefreshAdm = global.__subBotAdminRefresh.get(chaveRefreshAdm) || 0;
if (Date.now() - ultimoRefreshAdm > 15000) {
global.__subBotAdminRefresh.set(chaveRefreshAdm, Date.now());
await atualizarAdminsSubBot(true);
}
}

const isListaBrancaG = nescessario.listabrancaG.includes(sender);
const isBanned = ban.includes(sender);
const isVisualizar = nescessario.visualizarmsg;
const isModoAluguel = nescessario.aluguel;
const isVerificado = nescessario.verificado;
const isConsole = obrigadoEXT.consoleoff;
const isWelcomePrivate = nescessario.welcomepv;
const isAudioMenu = obrigadoEXT.menu_audio;
const isAntiPv = nescessario.antipv;
const isBotoff = nescessario.botoff;
const listanegraG = nescessario.listanegraG;
const isLevelingOn = isGroup ? dataGp[0].level : undefined;
const listabrancaG = nescessario.listabrancaG;
const isAnticall = nescessario.anticall;
const TOKEN_GPT = nescessario.TOKEN_GPT;
const __sanitizeCmdLista = (value) => {
if (typeof value !== 'string') return '';
let cmd = value.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ç/g, "c");
if (prefix && cmd.startsWith(prefix)) cmd = cmd.slice(prefix.length);
cmd = cmd.replace(/^[!./#\\]+/, '').trim();
if (!cmd || ['null', 'undefined', 'nil', 'none'].includes(cmd) || /\s/.test(cmd)) return '';
return cmd;
};
const __cleanCmdArray = (key) => {
const atual = Array.isArray(nescessario[key]) ? nescessario[key] : [];
const limpo = [...new Set(atual.map(__sanitizeCmdLista).filter(Boolean))];
const mudou = !Array.isArray(nescessario[key]) || JSON.stringify(atual) !== JSON.stringify(limpo);
nescessario[key] = limpo;
return mudou;
};
const __listasCmdCorrigidas = ['cmd_vip', 'cmd_donoofc', 'blockCmdG'].some(__cleanCmdArray);
if (__listasCmdCorrigidas) {
try { fs.writeFileSync('./src/dados/settings/media/nescessario.json', JSON.stringify(nescessario, null, 2)); } catch {}
}
const isCmdVip = nescessario.cmd_vip;
const isAntiFloodGlobal = nescessario.antiflood === true;
if (isAntiFloodGlobal && isGroup && isCmd && !SoDono && !isVip && !info.key.fromMe) {
const __antiFloodAgora = Date.now();
const __antiFloodJanela = 5000;
const __antiFloodMaxComandos = 4;
const __antiFloodResetAdvertencias = 3 * 60 * 1000;
const __antiFloodBloqueio = 3 * 60 * 1000;
const __antiFloodChave = `${from}:${jidNum(sender) || sender}`;
const __antiFloodDB = globalThis.__yutaAntiFloodDB || (globalThis.__yutaAntiFloodDB = new Map());
let __antiFloodUser = __antiFloodDB.get(__antiFloodChave) || {
timestamps: [],
advertencias: 0,
ultimaAdvertencia: 0,
bloqueadoAte: 0
};

if (__antiFloodUser.bloqueadoAte > __antiFloodAgora) {
__antiFloodDB.set(__antiFloodChave, __antiFloodUser);
return;
}

if (__antiFloodUser.ultimaAdvertencia && (__antiFloodAgora - __antiFloodUser.ultimaAdvertencia) >= __antiFloodResetAdvertencias) {
__antiFloodUser.advertencias = 0;
__antiFloodUser.ultimaAdvertencia = 0;
}

__antiFloodUser.timestamps = __antiFloodUser.timestamps
.filter(__tempo => (__antiFloodAgora - __tempo) <= __antiFloodJanela);
__antiFloodUser.timestamps.push(__antiFloodAgora);

if (__antiFloodUser.timestamps.length >= __antiFloodMaxComandos) {

__antiFloodUser.advertencias += 1;
__antiFloodUser.ultimaAdvertencia = __antiFloodAgora;
__antiFloodUser.timestamps = [];

if (__antiFloodUser.advertencias < 3) {
__antiFloodDB.set(__antiFloodChave, __antiFloodUser);
await __sendModeradorMention(
mess.antiFloodAdvertencia(sender, __antiFloodUser.advertencias, 3),
sender
);
return;
}

if (!isBotGroupAdmins) {
__antiFloodUser.bloqueadoAte = __antiFloodAgora + __antiFloodBloqueio;
__antiFloodDB.set(__antiFloodChave, __antiFloodUser);
await __sendModeradorMention(mess.antiFloodSemAdmin(sender), sender);
return;
}

__antiFloodDB.delete(__antiFloodChave);
await __sendModeradorMention(mess.antiFloodRemovido(sender), sender);
try {
const __antiFloodRemover = yuta.__YUTA_ORIGINAL_GROUP_UPDATE || yuta.groupParticipantsUpdate.bind(yuta);
await __antiFloodRemover(from, [__jidTextoModerador(sender)], 'remove');
} catch (e) {
await __sendModeradorMention(mess.antiFloodErroRemover(sender), sender);
}
return;
}

__antiFloodDB.set(__antiFloodChave, __antiFloodUser);
}

if (!Array.isArray(nescessario.cmd_donoofc))
nescessario.cmd_donoofc = [];
const isCmdDonoOfc = nescessario.cmd_donoofc;
const isblockCmdG = nescessario.blockCmdG;
const isCargo = SoDono ? "Mestre" : isGroupAdmins ? "Adminstrador" : "Membro";
const isChVip = isVip ? "ꜱɪᴍ ✅" : "ɴᴀᴏ ❌";
const isJoguin = isGroup ? joguinhodavelhajs.includes(sender) : false;
const isAntiImg = isGroup ? dataGp[0].antiimg : undefined;
const isAntistatus = isGroup ? dataGp[0].antistatus : undefined;
const isLimitCmd = isGroup ? dataGp[0]?.Limitar_CMD : undefined;
const isAntiVid = isGroup ? dataGp[0].antivideo : undefined;
const isAntiAudio = isGroup ? dataGp[0].antiaudio : undefined;
const isAntiSticker = isGroup ? dataGp[0].antisticker : undefined;
const Antidoc = isGroup ? dataGp[0].antidoc : undefined;
const isAntiCtt = isGroup ? dataGp[0].antictt : undefined;
const Antiloc = isGroup ? dataGp[0].antiloc : undefined;
const whatIsPhone = info?.key?.id?.length > 21
? "Android"
: String(info?.key?.id || "").substring(0, 2) === "3A"
? "iPhone"
: "WhatsApp Web";
const isAndroid = whatIsPhone === "Android";
const isIOS = whatIsPhone === "iPhone";
const isWhatsAppWeb = whatIsPhone === "WhatsApp Web";
const isBotoes = nescessario.botoes === true && isAndroid;
const usarBotoes = () => nescessario.botoes === true && isAndroid;
const usarImg = () => nescessario.modoimg === true;
const isAntiDDD = isGroup ? dataGp[0].ANTI_DDD.active : undefined;
const isAntilinkgp = isGroup ? dataGp[0].antilinkgp : undefined;
const isAntiLinkHard = isGroup ? dataGp[0].antilinkhard : undefined;
const isAntiLinkEasy = isGroup ? dataGp[0].antilinkeasy : undefined;
const lerAntiMarcarAtivoAgora = () => {
try {
if (!isGroup || !from) return false;
const bruto = getGroupConfig(from, []);
if (!Array.isArray(bruto) || !bruto.length) return false;
const atual = Array.isArray(bruto) ? bruto[0] : bruto;
return atual?.antimarcar === true;
} catch {
return false;
}
};
const isAntiMarcar = isGroup ? lerAntiMarcarAtivoAgora() : false;
const isAntiMsg = isGroup ? dataGp[0].antimsg === true : false;
const isAntiPayment = isGroup ? dataGp[0].antipayment === true : false;
const isAntifake = isGroup ? dataGp[0].antifake : undefined;
const IS_DELETE = nescessario.Odelete;
const So_Adm = isGroup ? dataGp[0].soadm : undefined;
const isX9VisuUnica = isGroup ? dataGp[0].visuUnica : undefined;
const ADVT = isGroup ? dataGp[0].advertir : undefined;
const ADVT2 = isGroup ? dataGp[0].advertir2 : undefined;
const isx9 = isGroup ? dataGp[0].x9 : undefined;
const isMultiP = isGroup ? dataGp[0].multiprefix : undefined;
const isAntiNotas = isGroup ? dataGp[0].antinotas : undefined;
const isAnticatalogo = isGroup ? dataGp[0].anticatalogo : undefined;
const isAutofigu = isGroup ? dataGp[0].autosticker : undefined;
const isAutorepo = isGroup ? dataGp[0].autoresposta : undefined;
const isModoIA = isGroup ? dataGp[0].modoia : undefined;
const isModobn = isGroup ? dataGp[0].jogos : undefined;
const isModo18 = isGroup ? dataGp[0].modo18 === true : false;
const isYutaEscuta = isGroup ? dataGp[0].yutaescutando : undefined;
const isAutoDl = isGroup ? dataGp[0].autodl : undefined;
const isBanchat = isGroup ? dataGp[0].bangp : undefined;
if (isGroup && isCmd && isBanchat && !itsMe && !SoDono)
return;
const isPalavrao = isGroup ? dataGp[0].antipalavrao.active : undefined;
const isAntiBot = isGroup ? dataGp[0].antibot : undefined;
const isPalavras = isGroup ? dataGp[0].antipalavrao.palavras : undefined;
const isAntiFlood = isGroup ? dataGp[0].limitec.active : undefined;
const isLimitec = isGroup ? dataGp[0].limitec.quantidade : undefined;
const isModoRPG = isGroup ? dataGp[0].modo_rpg : undefined;

// Proteções independentes contra mensagem invisível e mensagem de pagamento.
// decrypt-fail="hide" também é usado pelo próprio WhatsApp/Baileys em mensagens
// legítimas (ex.: reação/pin), então um único ciphertext oculto nunca remove alguém.
if (isGroup && !info?.key?.fromMe && isBotGroupAdmins) {
try {
const raizProtecao = info?.message?.ephemeralMessage?.message ||
info?.message?.viewOnceMessage?.message ||
info?.message?.viewOnceMessageV2?.message ||
info?.message?.viewOnceMessageV2Extension?.message ||
info?.message || {};
const marcadorInvisivel = String(info?.stealthMeta?.patch || '');
const candidatoInvisivel = info?.yutaInvisibleCandidate === true ||
info?.yutaInvisibleMessage === true ||
marcadorInvisivel.startsWith('YUTA_INVISIBLE_RECEIVER_PATCH_');

const membroFresco = async (raw = '') => {
let alvo = __normalizarAlvoUsuario(raw);
if (String(raw).includes('@lid')) alvo = await __resolverLidParaPn(raw);
const numero = jidNum(alvo || raw);
if (!numero) return null;
const meta = await yuta.groupMetadata(from).catch(() => null);
const membros = Array.isArray(meta?.participants) ? meta.participants : [];
const membro = membros.find(p => [p?.phoneNumber, p?.participantAlt, p?.jid, p?.id, p?.participant, p?.lid]
.filter(Boolean).some(j => jidNum(j) === numero));
if (!membro) return null;
const jid = __normalizarAlvoUsuario(membro?.phoneNumber || membro?.participantAlt || membro?.jid || membro?.id || membro?.participant || alvo);
const donos = [setting?.ownerNumber, numero_dono1, numero_dono2, numero_dono3, numero_dono4, numero_dono5, numero_dono6, author]
.filter(Boolean).map(jidNum);
if (membro?.admin || donos.includes(jidNum(jid))) return null;
return jid;
};

const confirmarInvisivel = async () => {
if (!candidatoInvisivel || !isAntiMsg) return null;
const stanzaType = String(info?.stealthMeta?.stanzaType || '').toLowerCase();
if (stanzaType === 'reaction') return null;
const tsRaw = info?.messageTimestamp;
const tsSec = typeof tsRaw === 'number' ? tsRaw : Number(tsRaw?.low || tsRaw?.toString?.() || 0);
if (tsSec && Math.abs(Date.now() - (tsSec * 1000)) > 60000) return null;
const bruto = info?.stealthMeta?.participantAlt || info?.stealthMeta?.participant || autorMensagem;
const alvo = await membroFresco(bruto);
if (!alvo) return null;
const agora = Date.now();
const chave = `${from}:${jidNum(alvo)}`;
const id = String(info?.key?.id || info?.stealthMeta?.messageId || '');
const db = globalThis.__yutaAntiInvisivelDB || (globalThis.__yutaAntiInvisivelDB = new Map());
let estado = db.get(chave);
if (!estado || agora - estado.ultimo > 8000) estado = { ids: new Set(), total: 0, ultimo: agora };
if (id && estado.ids.has(id)) return null;
if (id) estado.ids.add(id);
estado.total += 1;
estado.ultimo = agora;
db.set(chave, estado);
if (estado.total < 2) return null;
db.delete(chave);
return alvo;
};

const removerInvisivel = async (autor) => {
try {
await yuta.sendMessage(from, { text: mess.messageAntiMsgRemovido(autor), mentions: [autor] }, { quoted: yt }).catch(() => {});
const remover = yuta.__YUTA_ORIGINAL_GROUP_UPDATE || yuta.groupParticipantsUpdate.bind(yuta);
await remover(from, [autor], 'remove');
return true;
} catch (erro) {
console.error('[ANTI-INVISIVEL REMOVE]', erro?.data?.message || erro?.message || erro);
return false;
}
};

const editarPaymentERemover = async (autor) => {
let grupoFechado = false;
let removido = false;
try {
await yuta.groupSettingUpdate(from, 'announcement');
grupoFechado = true;
try {
const mensagemAviso = mess.messageAntiLinkGp(autor);
const msgTemp = await yuta.sendMessage(from, { text: '' });
const idTemp = msgTemp?.key?.id;
if (!idTemp) throw new Error('Não foi possível gerar o ID temporário.');
await yuta.sendMessage(from, { text: mensagemAviso, mentions: [autor], edit: { remoteJid: from, fromMe: true, id: idTemp } }, { messageId: info.key.id });
await yuta.sendMessage(from, { delete: { remoteJid: from, fromMe: true, id: idTemp } }).catch(() => {});
} catch (erroEdicao) {
console.error('[ANTI-PAYMENT EDIT]', erroEdicao?.data?.message || erroEdicao?.message || erroEdicao);
}
await yuta.groupParticipantsUpdate(from, [autor], 'remove');
removido = true;
return true;
} catch (erro) {
console.error('[ANTI-PAYMENT REMOVE]', erro?.data?.message || erro?.message || erro);
return removido;
} finally {
if (grupoFechado) await yuta.groupSettingUpdate(from, 'not_announcement').catch(() => {});
}
};

if (candidatoInvisivel) {
const autorInvisivel = await confirmarInvisivel();
if (autorInvisivel) await removerInvisivel(autorInvisivel);
return; // nunca deixa o Payment sintético cair no Anti-Payment nem em comandos comuns
}


/* __YUTA_ANTIPAY2_CITACAO */
if (isAntiPayment) {
  const ctxPay2 =
    raizProtecao?.extendedTextMessage?.contextInfo ||
    raizProtecao?.imageMessage?.contextInfo ||
    raizProtecao?.videoMessage?.contextInfo ||
    raizProtecao?.documentMessage?.contextInfo ||
    raizProtecao?.audioMessage?.contextInfo ||
    {};

  const citadaPay2 = ctxPay2?.quotedMessage || {};
  const raizCitadaPay2 =
    citadaPay2?.ephemeralMessage?.message ||
    citadaPay2?.viewOnceMessage?.message ||
    citadaPay2?.viewOnceMessageV2?.message ||
    citadaPay2;

  const pagamentoCitadoPay2 = Boolean(
    raizCitadaPay2?.requestPaymentMessage ||
    raizCitadaPay2?.sendPaymentMessage
  );

  const autorCitadoPay2 = ctxPay2?.participant || ctxPay2?.participantAlt;
  const idCitadoPay2 = String(ctxPay2?.stanzaId || '');

  if (pagamentoCitadoPay2 && autorCitadoPay2 && idCitadoPay2) {
    const autorRealPay2 = await membroFresco(autorCitadoPay2);

    if (autorRealPay2) {
      globalThis.__yutaAntiPay2Seen ||= new Set();

      const chavePay2 = String(from) + '|' + idCitadoPay2;

      if (!globalThis.__yutaAntiPay2Seen.has(chavePay2)) {
        globalThis.__yutaAntiPay2Seen.add(chavePay2);

        if (globalThis.__yutaAntiPay2Seen.size > 2000) {
          globalThis.__yutaAntiPay2Seen = new Set(
            Array.from(globalThis.__yutaAntiPay2Seen).slice(-800)
          );
        }

        try {
          let grupoFechadoPay2 = false;
          let removidoPay2 = false;

          try {
            await yuta.groupSettingUpdate(from, 'announcement');
            grupoFechadoPay2 = true;

            await yuta.sendMessage(from, {
              text:
                '☠️ KILLUA DETECTOU SUA PRESENÇA...\n\n' +
                '💸 Achou que esse flood invisível ia passar despercebido?\n' +
                'Que ingenuidade. 😂\n\n' +
                'Aguarde enquanto limpamos essa bagunça.'
            });

            const removerPay2 =
              yuta.__YUTA_ORIGINAL_GROUP_UPDATE ||
              yuta.groupParticipantsUpdate.bind(yuta);

            await removerPay2(from, [autorRealPay2], 'remove');
            removidoPay2 = true;

            await yuta.sendMessage(from, {
              delete: {
                remoteJid: from,
                fromMe: false,
                id: idCitadoPay2,
                participant: autorCitadoPay2
              }
            }).catch(erro => {
              console.log('[ANTIPAY2 DELETE]', erro?.message || erro);
            });

          } finally {
            if (grupoFechadoPay2) {
              await yuta.groupSettingUpdate(from, 'not_announcement')
                .catch(erro => {
                  console.error('[ANTIPAY2 ABRIR GRUPO]', erro?.message || erro);
                });
            }
          }

          if (removidoPay2) {
            const numeroPay2 = jidNum(autorRealPay2);

            await yuta.sendMessage(from, {
              text:
                '⚡ MAIS UM ELIMINADO!\n\n' +
                '☠️ O floodador foi de base.\n' +
                'Aqui você não brinca com o KILLUA. 😂\n\n' +
                '🔓 Grupo liberado. Voltem ao caos!',
              mentions: [autorRealPay2]
            }).catch(() => {});

            console.log('[ANTIPAY2] Autor removido:', autorRealPay2);
          }

          return;
        } catch (erroPay2) {
          console.error('[ANTIPAY2 REMOVE]', erroPay2?.message || erroPay2);
        }
      }
    }
  }
}

const autorProtecao = await membroFresco(autorMensagem);
const pagamentoReal = Boolean(raizProtecao?.requestPaymentMessage || raizProtecao?.sendPaymentMessage);
if (isAntiPayment && pagamentoReal && autorProtecao && !isGroupAdmins && !SoDono) {
await editarPaymentERemover(autorProtecao);
return;
}
} catch (erroProtecoesSeparadas) {
console.error('[ANTI-MSG/PAYMENT]', erroProtecoesSeparadas?.message || erroProtecoesSeparadas);
}
}

// Anti-marcação canônico. Não usa body, q, args, quoted nem busca recursiva.
// Somente o mentionedJid DIRETO da mensagem atual pode disparar a punição.
if (isGroup && lerAntiMarcarAtivoAgora()) {
try {
const snap = __antiMarcarSnapshot;
const podeAnalisar = Boolean(
isBotGroupAdmins &&
!info?.key?.fromMe &&
!isGroupAdmins &&
!SoDono &&
!snap.ehCitacao &&
!snap.ehControle &&
snap.mencoesDiretas.length > 0
);

if (podeAnalisar) {
const mencoesResolvidas = await __resolverListaLidParaPn(snap.mencoesDiretas);
const numerosMarcados = [...new Set(mencoesResolvidas.map(jidNum).filter(Boolean))];
const membrosReais = new Set(
(Array.isArray(groupMembers) ? groupMembers : [])
.flatMap(p => idsDoMembro(p))
.map(jidNum)
.filter(Boolean)
);
const totalMembros = membrosReais.size;
const limite = Math.max(5, Math.ceil(totalMembros * 0.6));

// Confirma que as arrobas existem no texto PRÓPRIO. Metadata oculto/injetado
// sem @numero visível não é suficiente para remover ninguém.
const numerosVisiveis = new Set(
[...String(snap.textoAtual || '').matchAll(/@(\d{10,15})/g)].map(m => m[1])
);
const mencoesVisiveisConfirmadas = numerosMarcados.filter(n => numerosVisiveis.has(n));
const textoMarcacao = String(snap.textoAtual || '').toLowerCase();
const ehMencaoDeTodos = /(^|\s)@(todos|everyone|all)(?=\s|$|[!.,:;])/i.test(textoMarcacao);
const marcacaoGeralConfirmada = mencoesVisiveisConfirmadas.length >= limite || (ehMencaoDeTodos && numerosMarcados.length >= limite);

if (numerosMarcados.length >= limite && marcacaoGeralConfirmada) {
// Segunda leitura atômica imediatamente antes de qualquer ação.
if (!lerAntiMarcarAtivoAgora()) {
console.log('[ANTI-MARCAR] Ignorado: sistema foi desativado antes da punição.');
} else {
const autorRaw = info?.key?.participantAlt || info?.participantAlt || info?.key?.participant || info?.participant || '';
const autorResolvido = String(autorRaw).includes('@lid')
? await __resolverLidParaPn(autorRaw)
: __normalizarAlvoUsuario(autorRaw);
const membroAutor = buscarMembroPorJid(autorResolvido);
const autorConfirmado = Boolean(
membroAutor &&
jidNum(autorResolvido) &&
jidNum(autorResolvido) === jidNum(autorMensagem)
);

if (autorConfirmado && lerAntiMarcarAtivoAgora()) {
await yuta.sendMessage(from, {
delete: {
remoteJid: from,
fromMe: false,
id: info.key.id,
participant: info?.key?.participant || autorRaw
}
}).catch(() => {});
await yuta.sendMessage(from, {
text: mess.messageAntiMarcarRemovido(autorResolvido),
mentions: [autorResolvido],
contextInfo: { ...NkChannelKk, mentionedJid: [autorResolvido] }
}, { quoted: yt }).catch(() => {});
await yuta.groupParticipantsUpdate(from, [autorResolvido], 'remove').catch(() => {});
return;
}
}
}
}
} catch (erroAntiMarcar) {
console.error('[ANTI-MARCAR]', erroAntiMarcar?.message || erroAntiMarcar);
}
}

try {
if (isGroup && !info?.key?.fromMe) {
const json = getGroupConfig(from, [{}]) || [{}];
const anticanalON = !!json?.[0]?.anticanal;
if (anticanalON) {
if (!(SoDono || isGroupAdmins)) {
const msg = info?.message || {};
const ctx = msg?.extendedTextMessage?.contextInfo || msg?.imageMessage?.contextInfo || msg?.videoMessage?.contextInfo || msg?.documentMessage?.contextInfo || msg?.audioMessage?.contextInfo || msg?.stickerMessage?.contextInfo || msg?.conversation?.contextInfo || null;
const fwdNews = ctx?.forwardedNewsletterMessageInfo;
const isCanal = !!(fwdNews?.newsletterJid && String(fwdNews.newsletterJid).includes("@newsletter")) || !!(fwdNews?.newsletterName && String(fwdNews.newsletterName).trim().length > 0);
if (isCanal) {
if (!isBotGroupAdmins)
return;
await yuta.sendMessage(from, {
delete: {
remoteJid: from,
fromMe: false,
id: info?.key?.id,
participant: sender
}
}).catch(() => { });
await yuta.groupParticipantsUpdate(from, [sender], "remove").catch(() => { });
return;
}
}
}
}
}
catch (e) {
console.log(mess.niConsole003(), e);
}
try {
const cfgSpam = (dataGp?.[0]?.antispam || {});
const antiOn = isGroup ? (cfgSpam.active === true) : false;
const cfgFigu = (cfgSpam.figu || {});
const limiteFigu = Number(cfgFigu.limite || 6);
const tempoFigu = Number(cfgFigu.tempo || 10);
const cfgTxt = (cfgSpam.texto || {});
const limiteTxt = Number(cfgTxt.limite || 8);
const tempoTxt = Number(cfgTxt.tempo || 8);
const cfgFoto = (cfgSpam.foto || {});
const limiteFoto = Number(cfgFoto.limite || 4);
const tempoFoto = Number(cfgFoto.tempo || 10);
const cfgVideo = (cfgSpam.video || {});
const limiteVideo = Number(cfgVideo.limite || 3);
const tempoVideo = Number(cfgVideo.tempo || 15);
if (antiOn && isGroup) {
const msgRoot = (info?.message || {});
const msgMain = msgRoot?.ephemeralMessage?.message ||
msgRoot?.viewOnceMessage?.message ||
msgRoot?.viewOnceMessageV2?.message ||
msgRoot;
const isSticker = !!msgMain?.stickerMessage;
const isPhoto = !!msgMain?.imageMessage;
const isVideo = !!msgMain?.videoMessage;
const isText = (!isSticker && !isPhoto && !isVideo && typeof body === 'string' && body.trim().length > 0);
if ((isSticker || isText || isPhoto || isVideo) && !(SoDono || isGroupAdmins)) {
global._antispam = global._antispam || {};
global._antispam_warn = global._antispam_warn || {};
global._antispam_cd = global._antispam_cd || {};
global._antispam_queue = global._antispam_queue || {};
global._antispam_lock = global._antispam_lock || {};
const enqueueGroup = (gid, fn) => {
if (!global._antispam_queue[gid])
global._antispam_queue[gid] = Promise.resolve();
global._antispam_queue[gid] = global._antispam_queue[gid].then(fn).catch(() => { });
return global._antispam_queue[gid];
};
const tipo = isSticker ? 'figu' :
isPhoto ? 'foto' :
isVideo ? 'video' :
'texto';
const limite = (tipo === 'figu') ? limiteFigu :
(tipo === 'foto') ? limiteFoto :
(tipo === 'video') ? limiteVideo :
limiteTxt;
const tempo = (tipo === 'figu') ? tempoFigu :
(tipo === 'foto') ? tempoFoto :
(tipo === 'video') ? tempoVideo :
tempoTxt;
const lim = Math.max(2, Number.isFinite(limite) ? limite : 6);
const baseWindowMs = Math.max(3, Number.isFinite(tempo) ? tempo : 10) * 1000;
const longWindowMs = (tipo === 'figu') ? Math.max(baseWindowMs, 60 * 1000) : baseWindowMs;
const shortWindowMs = (tipo === 'figu') ? Math.min(baseWindowMs, 6 * 1000) : baseWindowMs;
const k = from + '|' + sender + '|' + tipo;
const lockKey = from + '|' + sender + '|remove';
const now = Date.now();
const arr = Array.isArray(global._antispam[k]) ? global._antispam[k] : [];
const arrLong = arr.filter(x => x && (now - x.t) < longWindowMs);
arrLong.push({ t: now });
global._antispam[k] = arrLong;
const countLong = arrLong.length;
const countShort = (tipo === 'figu')
? arrLong.filter(x => x && (now - x.t) < shortWindowMs).length
: countLong;
const countNow = (tipo === 'figu') ? Math.max(countLong, countShort) : countLong;
const nomeTipo = (tipo === 'figu') ? 'ғɪɢᴜʀɪɴʜᴀs' :
(tipo === 'foto') ? 'ғᴏᴛᴏs' :
(tipo === 'video') ? 'ᴠɪᴅᴇᴏs' :
'ᴍᴇɴsᴀɢᴇɴs';
const avisoAt = Math.max(1, lim - 1);
if (countNow === avisoAt) {
const lastWarn = global._antispam_warn[k] || 0;
if ((now - lastWarn) > longWindowMs) {
global._antispam_warn[k] = now;
await yuta.sendMessage(from, {
text: mess.niText1257({ e0: () => (sender.split('@')[0]), e1: () => (nomeTipo) }),
mentions: [sender]
}).catch(() => { });
}
}
if (countNow >= lim) {
if (global._antispam_lock[lockKey]) {
}
else {
const lastCd = global._antispam_cd[lockKey] || 0;
if ((now - lastCd) >= 900) {
global._antispam_cd[lockKey] = now;
global._antispam_lock[lockKey] = true;
enqueueGroup(from, async () => {
try {
if (isBotGroupAdmins) {
await yuta.groupParticipantsUpdate(from, [sender], 'remove').catch(() => { });
}
}
finally {
try {
global._antispam[k] = [];
}
catch { }
setTimeout(() => { try {
delete global._antispam_lock[lockKey];
}
catch { } }, 1200);
}
});
}
}
}
}
}
}
catch { }
const SeloMeta = {
key: {
participant: "0@s.whatsapp.net",
remoteJid: "status@broadcast",
fromMe: false,
id: 'QUOTED-FAKE'
},
message: {
contactMessage: {
displayName: `${pushname}`,
vcard: `BEGIN:VCARD
VERSION:3.0
N:;Waguri;;;
FN:Waguri
item1.TEL;waid=13135550002:13135550002
item1.X-ABLabel:Celular
END:VCARD`,
contextInfo: {
forwardingScore: 1,
isForwarded: true
}
}
}
};
if (nescessario.verificado) {
var yt = SeloMeta;
}
else {
var yt = info;
}
y = yt;
const ctxMsg = __ctxMencoesGlobal();
const mencoesOriginaisEntrada = __coletarMencoesContexto(ctxMsg, body);
const mentionedList = await __resolverListaLidParaPn(mencoesOriginaisEntrada);
// Lista segura para eventos automáticos. Contém somente menções da mensagem
// atual; nunca inclui menções internas da mensagem respondida.
const mentionedListAtual = mentionedList;
for (let i = 0; i < mencoesOriginaisEntrada.length; i++) {
const original = String(mencoesOriginaisEntrada[i] || '');
const resolvida = String(mentionedList[i] || '');
if (original.includes('@lid') && resolvida.includes('@s.whatsapp.net')) {
__lidTextoPnCache.set(jidNum(original), jidNum(resolvida));
}
}
const __normalizarTextoEntrada = (valor = '') => __corrigirTextoPorCacheLid(__corrigirTextoMencoesLid(valor, mencoesOriginaisEntrada, mentionedList));
body = __normalizarTextoEntrada(body);
budy = __normalizarTextoEntrada(budy);
q = __normalizarTextoEntrada(q);
Q = q;
// args continua sendo uma lista de palavras, mas sem alterar q/query nem remover suas quebras de linha.
args.splice(0, args.length, ...(q.trim() ? q.trim().split(/ +/).filter(Boolean) : []));
const quotedParticipant = __normalizarAlvoUsuario(ctxMsg.participantAlt || ctxMsg.participant || "");
const qSeguro = String(q || "");
const numeroDigitado = qSeguro.replace(/\D/g, "");
const temMention = qSeguro.includes("@");
const menc_sticker = mentionedList[0] || quotedParticipant || null;
let menc_prt = quotedParticipant || "";
const menc_jid2 = mentionedList;
const menc_os2 = await __resolverAlvoGlobal();
const menc_jid = __normalizarAlvoUsuario(menc_os2 || sender);
const sender_ou_n = __normalizarAlvoUsuario(menc_os2 || sender);
const numClean = txt => __numeroParaJid(txt);
const mrc_ou_numero = numeroDigitado.length >= 10 && !temMention ? numClean(numeroDigitado) : __normalizarAlvoUsuario(menc_prt || menc_sticker || sender);
const marc_tds = temMention ? __normalizarAlvoUsuario(menc_jid) : numeroDigitado.length >= 10 && !temMention ? numClean(numeroDigitado) : __normalizarAlvoUsuario(menc_prt || menc_sticker || sender);
const menc_prt_nmr = numeroDigitado.length >= 10 && !temMention ? numClean(numeroDigitado) : __normalizarAlvoUsuario(menc_prt || menc_sticker || sender);
const limparPalavra = (txt = "") => String(txt)
.toLowerCase()
.normalize("NFD")
.replace(/[\u0300-\u036f]/g, "")
.trim();
const listaPalavrao = () => {
if (!dataGp[0].antipalavrao)
dataGp[0].antipalavrao = { palavras: [] };
if (!Array.isArray(dataGp[0].antipalavrao.palavras))
dataGp[0].antipalavrao.palavras = [];
return dataGp[0].antipalavrao.palavras.map(limparPalavra);
};
var isUrl = (url) => {
if (linkfy.find(url)[0])
return true;
return false;
};
const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss');
if (time2 > "00:00:00" && time2 < "05:00:00") {
var tempo = 'Boa noite';
var tempo2 = 'ʙᴏᴀ ɴᴏɪᴛᴇ';
}
if (time2 > "05:00:00" && time2 < "12:00:00") {
var tempo = 'Bom dia';
var tempo2 = 'ʙᴏᴍ ᴅɪᴀ';
}
if (time2 > "12:00:00" && time2 < "18:00:00") {
var tempo = 'Boa tarde';
var tempo2 = 'ʙᴏᴀ ᴛᴀʀᴅᴇ';
}
if (time2 > "18:00:00") {
var tempo = 'Boa noite';
var tempo2 = 'ʙᴏᴀ ɴᴏɪᴛᴇ';
}
if (!isCmd && info.key.fromMe)
return;
const reply = (text) => {
const messageOptions = {
text,
contextInfo: gerarContextNewsletter()
};
return yuta.sendMessage(from, messageOptions, {
quoted: yt
}).catch(error => {
console.error(error);
});
};
const requireAutoDivulAtivo = () => {
const config = __autoDivulLoad();
if (config.ativo) return true;
reply(mess.autoDivulDesativadaUso(prefix));
return false;
};
async function sendAudioMenu(from) {
const soundft = fs.readFileSync('./src/dados/data/media/audios/menu.mp3');
await yuta.sendMessage(from, {
audio: soundft,
mimetype: "audio/mpeg",
contextInfo: gerarContextNewsletter(),
}, { quoted: yt });
}
NkChannelKk = gerarContextNewsletter();
const enviarAlbumNativo = async (jid, itens = [], quotedThis = y) => {
const lista = Array.isArray(itens)
? itens.filter(item => item && (item.type === 'image' || item.type === 'video') && item.media)
: [];
if (!lista.length)
return null;
const contextInfo = { ...NkChannelKk, mentionedJid: [sender] };
if (lista.length === 1) {
const item = lista[0];
return yuta.sendMessage(jid, {
[item.type]: item.media,
...(item.caption ? { caption: item.caption } : {}),
contextInfo
}, { quoted: quotedThis });
}
const album = await yuta.sendMessage(jid, {
album: {
expectedImageCount: lista.filter(item => item.type === 'image').length,
expectedVideoCount: lista.filter(item => item.type === 'video').length
},
contextInfo
}, { quoted: quotedThis });
if (!album?.key)
throw new Error('Não foi possível criar o álbum de mídia.');
for (const item of lista) {
await yuta.sendMessage(jid, {
[item.type]: item.media,
...(item.caption ? { caption: item.caption } : {}),
albumParentKey: album.key,
contextInfo
}, { quoted: quotedThis });
}
return album;
};
const pegarMentions = (teks = '') => {
const mentions = [];
const regex = /@(\d{5,20})/g;
let match;
while ((match = regex.exec(String(teks))) !== null) {
mentions.push(normalizar(`${match[1]}@s.whatsapp.net`));
}
return normalizarLista(mentions);
};
const sendErro = async (jid = from, quotedThis = yt) => {
try {
await yuta.sendMessage(jid, { text: mess.error() }, { quoted: quotedThis });
}
catch { }
};
async function sendUrlText(id, textCaption, title, desc, imageUrl, linkAcess, quotedThis = info) {
try {
await yuta.sendMessage(id, {
text: textCaption,
contextInfo: {
...NkChannelKk,
externalAdReply: {
title,
body: desc,
thumbnail: await getBuffer(imageUrl),
mediaType: 1,
sourceUrl: linkAcess
}
}
}, { quoted: quotedThis });
}
catch (error) {
await sendErro(id, quotedThis);
}
}
async function replyWithNewsletter(text, options = {}, quotedThis = info) {
try {
await yuta.sendMessage(from, {
text,
contextInfo: {
...NkChannelKk,
...options
}
}, { quoted: quotedThis });
}
catch (error) {
await sendErro(from, quotedThis);
}
}
async function replyWithReaction(text, options = {}, quotedThis = info) {
try {
if (options && Object.keys(options).length) {
await yuta.sendMessage(from, options);
}
await yuta.sendMessage(from, {
text,
contextInfo: { ...NkChannelKk }
}, { quoted: quotedThis });
}
catch (error) {
await sendErro(from, quotedThis);
}
}
const sendSticker = async (ChatID, FileN, quotedThis = yt) => {
try {
await yuta.sendMessage(ChatID, {
sticker: { url: FileN },
contextInfo: { ...NkChannelKk }
}, { quoted: quotedThis });
}
catch (error) {
await sendErro(ChatID, quotedThis);
}
};
const sendImage = async (ChatID, FileN, quotedThis = yt) => {
try {
await yuta.sendMessage(ChatID, {
image: { url: FileN },
contextInfo: { ...NkChannelKk }
}, { quoted: quotedThis });
}
catch (error) {
await sendErro(ChatID, quotedThis);
}
};
const sendText = async (ChatID, texto, quotedThis = yt) => {
try {
await yuta.sendMessage(ChatID, {
text: texto,
contextInfo: { ...NkChannelKk }
}, { quoted: quotedThis });
}
catch (error) {
await sendErro(ChatID, quotedThis);
}
};
const sendMentions = async (local, teks, quotedThis = yt) => {
try {
const memberr = normalizarLista(pegarMentions(teks));
await yuta.sendMessage(local, {
text: String(teks).trim(),
contextInfo: {
...NkChannelKk,
mentionedJid: memberr
},
mentions: memberr
}, { quoted: quotedThis });
}
catch (error) {
await sendErro(local, quotedThis);
}
};
const mentions = async (teks = '', mb = [], id = false, quotedThis = yt) => {
try {
const jid = typeof id === 'string' ? id : from;
const quotedOpt = id === false ? {} : { quoted: quotedThis };
mb = normalizarAlvosGrupo(mb);
await yuta.sendMessage(jid, {
text: String(teks).trim(),
contextInfo: {
...NkChannelKk,
mentionedJid: mb
},
mentions: mb
}, quotedOpt);
}
catch (error) {
await sendErro(from, quotedThis);
}
};
const mention = async (teks = '', ms = info) => {
try {
const memberr = normalizarLista(pegarMentions(teks));
await yuta.sendMessage(from, {
text: String(teks).trim(),
contextInfo: {
...NkChannelKk,
mentionedJid: memberr
},
mentions: memberr
}, { quoted: ms });
}
catch (error) {
await sendErro(from, ms);
}
};
const mentionSemQuoted = async (teks = '') => {
try {
const memberr = normalizarLista(pegarMentions(teks));
await yuta.sendMessage(from, {
text: String(teks).trim(),
contextInfo: {
...NkChannelKk,
mentionedJid: memberr
},
mentions: memberr
});
}
catch (error) {
await sendErro(from, yt);
}
};
const mencionarIMG = async (teks = '', FileN, thisQuoted = info) => {
try {
const memberr = normalizarLista(pegarMentions(teks));
await yuta.sendMessage(from, {
image: { url: FileN },
caption: String(teks).trim(),
contextInfo: {
...NkChannelKk,
mentionedJid: memberr
},
mentions: memberr
}, { quoted: thisQuoted });
}
catch (error) {
await sendErro(from, thisQuoted);
}
};
const reagir = async (idgp, emj) => {
await yuta.sendMessage(idgp, { react: { text: emj, key: info.key } });
};
const verificarN = async (sla) => {
const [result] = await yuta.onWhatsApp(sla);
if (result == undefined) {
reply(mess.niReply0001());
}
else {
reply(mess.niReply0002({ e0: () => (sla), e1: () => (result.jid) }));
}
};
if (isGroup && isBotGroupAdmins && !isGroupAdmins && !SoDono && !info.key.fromMe) {
if (menc_jid2?.length >= groupMembers.length - 1) {
await yuta.sendMessage(from, { text: mess.markingAllMember() }, { quoted: yt });
if (IS_DELETE) {
setTimeout(async () => {
await yuta.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender } });
}, 500);
}
yuta.groupParticipantsUpdate(from, [sender], "remove");
}
}
function takeOnlyNumber(jid = '') {
const txt = String(jid || '').trim();
if (!txt || txt.includes('@g.us'))
return '';
const base = txt.split('@')[0].split(':')[0];
const num = base.replace(/\D/g, '');
return num.length >= 5 ? num : '';
}
function takeJidFromNumber(num = '') {
const n = String(num || '').replace(/\D/g, '');
return n ? `${n}@s.whatsapp.net` : '';
}
function getTakeActorJid() {
if (info?.key?.fromMe)
return botNumber;
const candidatos = [
sender,
info?.sender,
info?.participant,
info?.participantAlt,
info?.participantPn,
info?.key?.participant,
info?.key?.participantAlt,
info?.key?.participantPn,
info?.key?.sender,
info?.key?.senderAlt,
info?.key?.senderPn
];
for (const jid of candidatos) {
const num = takeOnlyNumber(jid);
if (num)
return String(jid);
}
return sender;
}
function getTakeKey() {
if (info?.key?.fromMe)
return takeOnlyNumber(botNumber);
const actor = getTakeActorJid();
return takeOnlyNumber(actor);
}
function takeMentionJid() {
const actor = getTakeActorJid();
if (String(actor || '').includes('@') && !String(actor || '').includes('@g.us'))
return actor;
return takeJidFromNumber(getTakeKey());
}
function ensureTakeDB() {
const dir = path.dirname(TAKE_DB_PATH);
if (!__takeFs.existsSync(dir))
__takeFs.mkdirSync(dir, { recursive: true });
if (__takeFs.existsSync(TAKE_DB_PATH) && __takeFs.lstatSync(TAKE_DB_PATH).isDirectory()) {
__takeFs.renameSync(TAKE_DB_PATH, `${TAKE_DB_PATH}_PASTA_BK_${Date.now()}`);
}
if (!__takeFs.existsSync(TAKE_DB_PATH))
__takeFs.writeFileSync(TAKE_DB_PATH, '{}');
}
function readTakeDB() {
ensureTakeDB();
try {
const raw = __takeFs.readFileSync(TAKE_DB_PATH, 'utf8').trim() || '{}';
const db = JSON.parse(raw);
return db && typeof db === 'object' && !Array.isArray(db) ? db : {};
}
catch {
__takeFs.writeFileSync(TAKE_DB_PATH, '{}');
return {};
}
}
function writeTakeDB(db = {}) {
ensureTakeDB();
const safeDB = db && typeof db === 'object' && !Array.isArray(db) ? db : {};
const data = JSON.stringify(safeDB, null, 2);
__takeFs.writeFileSync(TAKE_DB_PATH, data);
if (TAKE_DB_EXTRA_PATH !== TAKE_DB_PATH && __takeFs.existsSync(path.dirname(TAKE_DB_EXTRA_PATH))) {
try {
__takeFs.writeFileSync(TAKE_DB_EXTRA_PATH, data);
}
catch {
}
}
const check = JSON.parse(__takeFs.readFileSync(TAKE_DB_PATH, 'utf8') || '{}');
return check && typeof check === 'object';
}
function getTakeRegistro(db = {}) {
const key = getTakeKey();
return { key, data: key ? db[key] || null : null };
}
function setTakeRegistro(db = {}, registro = {}) {
const key = getTakeKey();
if (!key)
throw new Error('TAKE_KEY_INVALIDA');
db[key] = { ...registro };
return key;
}
function deleteTakeRegistro(db = {}) {
const key = getTakeKey();
const data = key ? db[key] || null : null;
if (key)
delete db[key];
return { key, data };
}
async function applyTakeStickerFromBuffer(stickerBuffer, packname, author) {
try {
const out = await convertSticker(stickerBuffer.toString('base64'), packname, author);
if (out)
return Buffer.isBuffer(out) ? out : Buffer.from(out, 'base64');
}
catch (e) {
console.error(mess.niConsole005(), e?.message || e);
}
return stickerBuffer;
}
if (isAutofigu && isGroup) {
async function autofiguf() {
setTimeout(async () => {
if (budyNormalizado.includes(`${prefix}sticker`) || budyNormalizado.includes(`${prefix}s`) || budyNormalizado.includes(`${prefix}stk`) || budyNormalizado.includes(`${prefix}st`) || budyNormalizado.includes(`${prefix}fsticker`) || budyNormalizado.includes(`${prefix}f`) || budyNormalizado.includes(`${prefix}fstiker`))
return;
if (type == 'imageMessage') {
var pack = mess.fig(ownerName, NomeDoBot);
var author2 = mess.fig2(pushname, groupName, isGroup);
owgi = await getFileBuffer(info.message.imageMessage, 'image');
let encmediaa = await sendImageAsSticker2(yuta, from, owgi, yt, { packname: pack, author: author2 });
DLT_FL(encmediaa);
}
if (type == 'videoMessage') {
if ((isMedia && info.message.videoMessage.seconds < 10)) {
var pack = mess.fig(ownerName, NomeDoBot);
var author2 = mess.fig2(pushname, groupName, isGroup);
owgi = await getFileBuffer(info.message.videoMessage, 'video');
let encmedia = await sendVideoAsSticker2(yuta, from, owgi, yt, { packname: pack, author: author2 });
DLT_FL(encmedia);
}
}
}, 1000);
}
autofiguf().catch((error) => {
console.log(error);
});
}
function msToTime(ms) {
let seg = Math.floor(ms / 1000);
let min = Math.floor(seg / 60);
let hr = Math.floor(min / 60);
let dia = Math.floor(hr / 24);
let ano = Math.floor(dia / 365);
seg %= 60;
min %= 60;
hr %= 24;
dia %= 365;
let partes = [];
if (ano)
partes.push(`${ano} ᴀɴᴏ${ano > 1 ? 'ꜱ' : ''}`);
if (dia)
partes.push(`${dia} ᴅɪᴀ${dia > 1 ? 'ꜱ' : ''}`);
if (hr)
partes.push(`${hr} ʜᴏʀᴀ${hr > 1 ? 'ꜱ' : ''}`);
if (min)
partes.push(`${min} ᴍɪɴᴜᴛᴏ${min > 1 ? 'ꜱ' : ''}`);
if (seg)
partes.push(`${seg} ꜱᴇɢᴜɴᴅᴏ${seg > 1 ? 'ꜱ' : ''}`);
return partes.length ? partes.join(', ').replace(/,([^,]*)$/, ' e$1') : 'ᴀɢᴏʀᴀ ʜᴀ ᴩᴏᴜᴄᴏ';
}
function normalizarAfkJid(jid = '') {
jid = String(jid || '').trim();
if (!jid)
return '';
if (jid.includes('@s.whatsapp.net'))
return jidNormalizedUser(jid);
if (jid.includes('@lid') && isGroup && groupMetadata?.participants) {
const achou = groupMetadata.participants.find(p => p?.id === jid ||
p?.lid === jid ||
p?.jid === jid ||
p?.participant === jid);
if (achou?.phoneNumber)
return jidNormalizedUser(achou.phoneNumber);
if (achou?.jid)
return jidNormalizedUser(achou.jid);
}
const num = jid.replace(/\D/g, '');
if (num.length >= 10)
return `${num}@s.whatsapp.net`;
return jidNormalizedUser(jid);
}
function numeroAfk(jid = '') {
return String(jid || '').replace(/\D/g, '');
}
function idsAfk(jid = '') {
const real = normalizarAfkJid(jid);
return [
jidNormalizedUser(jid),
real,
numeroAfk(jid),
numeroAfk(real)
].filter(Boolean);
}
function buscarAfkUsuario(lista = [], jid = '') {
const idsAlvo = idsAfk(jid);
return lista.find(user => {
const idsUser = idsAfk(user.id);
if (user.phoneNumber) {
idsUser.push(...idsAfk(user.phoneNumber));
}
return idsUser.some(id => idsAlvo.includes(id));
});
}
if (isGroup && dataGp[0].ausentes?.length > 0) {
let afkList = dataGp[0].ausentes;
const senderAfk = normalizarAfkJid(sender);
const eu_afk = buscarAfkUsuario(afkList, senderAfk);
if (eu_afk && isCmd && ['afk', 'ausente', 'off'].includes(command)) {
return;
}
if (eu_afk) {
let tempo = msToTime(Date.now() - eu_afk.hora);
dataGp[0].ausentes = afkList.filter(x => {
const idsUser = idsAfk(x.id);
const idsSender = idsAfk(senderAfk);
return !idsUser.some(id => idsSender.includes(id));
});
setGp(dataGp);
await yuta.sendMessage(from, {
text: mess.on(senderAfk, tempo),
contextInfo: {
...NkChannelKk,
mentionedJid: [senderAfk]
}
}, { quoted: yt });
return;
}
// O AFK reage a duas situações legítimas:
// 1. menções feitas diretamente na mensagem atual;
// 2. resposta direcionada ao autor da mensagem citada.
//
// As menções existentes DENTRO de quotedMessage continuam ignoradas. Assim,
// responder uma mensagem que mencionava uma terceira pessoa não atribui essa
// menção ao usuário que respondeu.
const autorMensagemCitadaAfk = ctxMsg?.stanzaId
? normalizarAfkJid(ctxMsg.participantAlt || ctxMsg.participant || '')
: '';
const alvosAfk = [
...(Array.isArray(mentionedListAtual) ? mentionedListAtual.filter(Boolean) : []),
autorMensagemCitadaAfk
].filter(Boolean);
const alvosUnicos = [
...new Set(alvosAfk
.map(normalizarAfkJid)
.filter(Boolean))
];
for (let alvo of alvosUnicos) {
const afkUser = buscarAfkUsuario(afkList, alvo);
if (afkUser &&
normalizarAfkJid(afkUser.id) !== senderAfk) {
let tempo = msToTime(Date.now() - afkUser.hora);
await yuta.sendMessage(from, {
text: mess.ausente(afkUser, tempo, normalizarAfkJid(afkUser.id)),
contextInfo: {
...NkChannelKk,
mentionedJid: [normalizarAfkJid(afkUser.id)]
}
}, { quoted: yt });
}
}
}
if (!isVip && nescessario.cmd_vip.includes(command))
return reply(mess.onlyVipUser());
if (isCmd && !DonoOficial && isCmdDonoOfc.includes(command))
return;
__refreshModeradorPermissao();
if (isGroup && isCmd && So_Adm && !SoDono && !itsMe && !isGroupAdmins && !['grupo','abrirgp','abertura','fechargp','fechamento','soadm','so_adm'].includes(command))
return;
if (isBotoff && !itsMe && !SoDono)
return;
function formatDataBR(ms) {
const d = new Date(ms);
const dd = String(d.getDate()).padStart(2, '0');
const mm = String(d.getMonth() + 1).padStart(2, '0');
const yyyy = d.getFullYear();
const hh = String(d.getHours()).padStart(2, '0');
const mi = String(d.getMinutes()).padStart(2, '0');
const ss = String(d.getSeconds()).padStart(2, '0');
return `${dd}/${mm}/${yyyy} as ${hh}:${mi}:${ss}`;
}
const sendStickerFromUrl = async (to, url) => {
try {
var names = Date.now() / 5000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './sticker' + names + '.png', async function () {
let filess = './sticker' + names + '.png';
let asw = './sticker' + names + '.webp';
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${asw}`, async (err) => {
let media = fs.readFileSync(asw);
await yuta.sendMessage(to, { sticker: media }, { sendEphemeral: true, contextInfo: { forwardingScore: 50, isForwarded: true }, quoted: yt }).catch(async (error) => {
return reply(mess.error());
});
DLT_FL(filess);
DLT_FL(asw);
});
});
}
catch {
return reply(mess.error());
}
};
const isImage = type == 'imageMessage';
const isVideo = type == 'videoMessage';
const isVisuU2 = type == 'viewOnceMessageV2';
const isAudio = type == 'audioMessage';
const isSticker = type == 'stickerMessage';
const isContact = type == 'contactMessage';
const isLocation = type == 'locationMessage';
const isProduct = type == 'productMessage';
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage' || type == "viewOnceMessage" || type == "viewOnceMessageV2");
typeMessage = body.substr(0, 50).replace(/\n/g, '');
if (isImage)
typeMessage = "Image";
else if (isVideo)
typeMessage = "Video";
else if (isAudio)
typeMessage = "Audio";
else if (isSticker)
typeMessage = "Sticker";
else if (isContact)
typeMessage = "Contact";
else if (isLocation)
typeMessage = "Location";
else if (isProduct)
typeMessage = "Product";
const isQuotedMsg = type === 'extendedTextMessage' && content.includes('conversation');
const isQuotedMsg2 = type === 'extendedTextMessage' && content.includes('text');
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage');
const isQuotedVisuU = type === 'extendedTextMessage' && content.includes('viewOnceMessage');
const isQuotedVisuU2 = type === 'extendedTextMessage' && content.includes('viewOnceMessageV2');
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage');
const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage');
const isQuotedDocW = type === 'extendedTextMessage' && content.includes('documentWithCaptionMessage');
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage');
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage');
const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage');
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage');
const isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage');
const arrayDDDs = [11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 24, 27, 28, 31, 32, 33, 34, 35, 37, 38, 41, 42, 43, 44, 45, 46, 47, 48, 49, 51, 53, 54, 55, 61, 62, 63, 64, 65, 66, 67, 68, 69, 71, 73, 74, 75, 77, 79, 81, 82, 83, 84, 85, 86, 87, 88, 89, 91, 93, 94, 95, 96, 97, 98, 99];
const budyNormalizado = body.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
if (isGroup) {
const checar = getComandos(from);
if (checar === undefined)
addComandosId(from);
}
if (isGroup && isCmd && !SoDono && !isnit && getComandoBlock(from).includes(command))
return reply(mess.niReply0003());
if (isblockCmdG.includes(command) && !SoDono)
return reply(mess.niReply0004());
const dattofc = moment.tz('America/Sao_Paulo').format('DD/MM/YYYY');
const hourofc = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
const MessageType = type == 'audioMessage' ? 'Áudio' : type == 'stickerMessage' ? 'Figurinha' : type == 'imageMessage' ? 'Imagem' : type == 'videoMessage' ? 'Vídeo' : type == 'documentMessage' ? 'Documento' : type == 'pollCreationMessage' ? 'Enquete' : type == 'contactMessage' ? 'Contato' : type == 'locationMessage' ? 'Localização' : info.message?.reactionMessage?.text ? `Reação '${info.message.reactionMessage.text}'` : `${prefix + command}`;
const isMensagemInvisivelAdmin = info?.yutaInvisibleMessage === true || String(info?.stealthMeta?.patch || '').startsWith('YUTA_INVISIBLE_RECEIVER_PATCH_');
if (isConsole && !isMensagemInvisivelAdmin) {
const msg = info.message?.ephemeralMessage?.message || info.message?.viewOnceMessageV2?.message || info.message || {};
const membros = groupMetadata?.participants || groupMembers || [];
const num = jid => String(jid || '').replace(/[^0-9]/g, '');
const jidReal = jid => membros.find(p => p.id === jid)?.phoneNumber || jid;
let texto = q || '';
const ctx = msg.extendedTextMessage?.contextInfo || msg.imageMessage?.contextInfo || msg.videoMessage?.contextInfo || msg.documentMessage?.contextInfo || {};
ctx.mentionedJid?.forEach(jid => {
texto = texto.replaceAll(`@${num(jid)}`, `@${num(jidReal(jid))}`);
});
const poll = msg.pollCreationMessage || msg.pollCreationMessageV2 || msg.pollCreationMessageV3;
const tipos = [
[isCmd, 'COMANDO', chalk.cyanBright(`${prefix}${command}`)],
[msg.reactionMessage, 'REAÇÃO', msg.reactionMessage?.text ? `💬 REAGIU COM: ${msg.reactionMessage.text}` : '❌ REMOVEU UMA REAÇÃO'],
[poll, 'ENQUETE', `📊 ${poll?.name || 'ENQUETE CRIADA'}`],
[msg.pollUpdateMessage, 'ENQUETE', '📊 VOTOU EM UMA ENQUETE'],
[msg.imageMessage, 'MÍDIA', '🖼️ IMAGEM'],
[msg.videoMessage, 'MÍDIA', '🎞️ VÍDEO'],
[msg.audioMessage, 'MÍDIA', '🎧 ÁUDIO'],
[msg.stickerMessage, 'MÍDIA', '🔖 FIGURINHA'],
[msg.locationMessage || msg.liveLocationMessage, 'MÍDIA', '📍 LOCALIZAÇÃO'],
[msg.documentMessage, 'MÍDIA', '📄 DOCUMENTO'],
[msg.contactMessage || msg.contactsArrayMessage, 'MÍDIA', '👤 CONTATO']
].find(t => t[0]);
const tipo = tipos ? chalk.redBright(tipos[1]) : chalk.whiteBright('MENSAGEM');
const conteudo = tipos ? tipos[2] : texto ? texto.slice(0, 40) + (texto.length > 40 ? '...' : '') : 'SEM CONTEÚDO';
const user = chalk.hex('#D500F9').bold(pushname?.toUpperCase() || 'DESCONHECIDO');
const number = chalk.yellowBright(addNumberMais(jidReal(sender)));
const chat = isGroup ? `GRUPO (${groupName})` : 'PRIVADO (Privado)';
process.nextTick(() => {
console.log(chalk.hex('#7B1FA2')(`╭──. ݁ ⛧ ₊ ⊹ 🦇. ݁ ˖ ♱ . ݁──╮\n | ⸸ ${isGroup ? 'MENSAGEM NO GRUPO' : 'MENSAGEM NO PRIVADO'}\n╰──. ݁ ⛧ ₊ ⊹ 🦇. ݁ ˖ ♱ . ݁──╯\n╭──. ݁ ⛧ ₊ ⊹ 🦇. ݁ ˖ ♱ . ݁──╮\n| ⸸ USUÁRIO: ${user}\n| ⸸ NÚMERO: ${number}\n| ⸸ CHAT: ${chat}\n| ⸸ TIPO: ${tipo}\n| ⸸ CONTEÚDO: ${conteudo}\n╰──. ݁ ⛧ ₊ ⊹ 🦇. ݁ ˖ ♱ . ݁──╯`));
});
}
const tttDbDir = './src/tictactoe/db';
const tttUserFile = './src/dados/usuarios/joguinhodavelha.json';
const tttGroupFile = './src/dados/usuarios/joguinhodavelha2.json';
const ensureTttStorage = () => {
try {
if (!fs.existsSync(tttDbDir))
fs.mkdirSync(tttDbDir, { recursive: true });
if (!fs.existsSync(path.dirname(tttUserFile)))
fs.mkdirSync(path.dirname(tttUserFile), { recursive: true });
if (!fs.existsSync(tttUserFile))
fs.writeFileSync(tttUserFile, '[]');
if (!fs.existsSync(tttGroupFile))
fs.writeFileSync(tttGroupFile, '[]');
}
catch { }
};
const tttNum = (jid = '') => String(jid || '').replace(/@.+$/, '').replace(/\D/g, '');
const tttJid = (num = '') => {
num = tttNum(num);
return num ? `${num}@s.whatsapp.net` : '';
};
const tttDbPath = (jid = from) => `${tttDbDir}/${jid}.json`;
const tttBoardText = (matrix = []) => `${matrix?.[0]?.[0] || '1️⃣'}${matrix?.[0]?.[1] || '2️⃣'}${matrix?.[0]?.[2] || '3️⃣'}\n${matrix?.[1]?.[0] || '4️⃣'}${matrix?.[1]?.[1] || '5️⃣'}${matrix?.[1]?.[2] || '6️⃣'}\n${matrix?.[2]?.[0] || '7️⃣'}${matrix?.[2]?.[1] || '8️⃣'}${matrix?.[2]?.[2] || '9️⃣'}`;
const tttSaveArrays = () => {
try {
fs.writeFileSync(tttUserFile, JSON.stringify([...new Set(joguinhodavelhajs)], null, 2));
}
catch { }
try {
fs.writeFileSync(tttGroupFile, JSON.stringify([...new Set(joguinhodavelhajs2)], null, 2));
}
catch { }
};
const tttAddSession = (xJid, groupJid = from) => {
ensureTttStorage();
if (xJid && !joguinhodavelhajs.includes(xJid))
joguinhodavelhajs.push(xJid);
if (groupJid && !joguinhodavelhajs2.includes(groupJid))
joguinhodavelhajs2.push(groupJid);
tttSaveArrays();
};
const tttClearSession = (board = null, groupJid = from) => {
try {
if (fs.existsSync(tttDbPath(groupJid)))
DLT_FL(tttDbPath(groupJid));
}
catch { }
const nums = [board?.X, board?.O].map(tttNum).filter(Boolean);
for (let i = joguinhodavelhajs.length - 1; i >= 0; i--) {
const n = tttNum(joguinhodavelhajs[i]);
if (!n || nums.includes(n))
joguinhodavelhajs.splice(i, 1);
}
for (let i = joguinhodavelhajs2.length - 1; i >= 0; i--) {
if (joguinhodavelhajs2[i] === groupJid)
joguinhodavelhajs2.splice(i, 1);
}
tttSaveArrays();
};
const tttSend = async (texto = '', nums = [], quotedThis = yt) => {
const mentionedJid = [...new Set(nums.map(tttJid).filter(Boolean))];
return yuta.sendMessage(from, {
text: texto,
mentions: mentionedJid,
contextInfo: {
...NkChannelKk,
mentionedJid
}
}, { quoted: quotedThis }).catch(() => reply(mess.error()));
};
const tttMsgBoard = (board = {}, extra = '') => {
const vez = board.turn === 'X' ? board.X : board.O;
return mess.niTttMsgBoard({
e0: () => (tttNum(board.X) || '???'),
e1: () => (tttNum(board.O) || '???'),
e2: () => (tttNum(vez) || '???'),
e3: () => (extra),
e4: () => (tttBoardText(board._matrix))
});
};
const tttResolveOpponent = () => {
const candidatos = [
...(Array.isArray(menc_jid2) ? menc_jid2 : []),
menc_os2,
menc_prt,
menc_sticker,
marc_tds,
mrc_ou_numero,
menc_prt_nmr
].filter(Boolean);
for (let jid of candidatos) {
jid = normalizar(jid);
const num = tttNum(jid);
if (num && num !== tttNum(sender) && num !== tttNum(botNumber))
return `${num}@s.whatsapp.net`;
}
const nums = String(q || '').match(/\d{10,15}/g) || [];
for (const n of nums) {
if (n !== tttNum(sender) && n !== tttNum(botNumber))
return `${n}@s.whatsapp.net`;
}
return '';
};
async function startJogoDaVelha() {
try {
if (!isGroup)
return;
ensureTttStorage();
if (!fs.existsSync(tttDbPath(from)))
return;
const boardnow = setGame(from);
const senderNum = tttNum(sender);
const texto = String(budy || body || '').trim().toLowerCase();
const posicoes = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
if (['s', 'sim', 'ok', 'aceitar'].includes(texto)) {
if (tttNum(boardnow.O) !== senderNum)
return;
if (boardnow.status)
return reply(mess.niTttAlreadyAccepted());
boardnow.status = true;
fs.writeFileSync(tttDbPath(from), JSON.stringify(boardnow, null, 2));
return await tttSend(tttMsgBoard(boardnow, 'ᴅᴇsᴀғɪᴏ ᴀᴄᴇɪᴛᴏ, ᴄᴏᴍᴇᴄᴇ ᴊᴏɢᴀɴᴅᴏ ᴘᴇʟᴀ ᴘᴏsɪᴄᴀᴏ ᴅᴏ ᴛᴀʙᴜʟᴇɪʀᴏ.'), [boardnow.X, boardnow.O]);
}
if (['n', 'nao', 'não', 'no', 'recusar'].includes(texto)) {
if (tttNum(boardnow.O) !== senderNum)
return;
if (boardnow.status)
return reply(mess.niTttAlreadyStarted({ e0: () => (prefix) }));
await tttSend(mess.niTttChallengeRefused({ e0: () => (tttNum(boardnow.O)), e1: () => (tttNum(boardnow.X)) }), [boardnow.X, boardnow.O]);
tttClearSession(boardnow, from);
return;
}
if (posicoes.includes(texto)) {
if (!boardnow.status)
return reply(mess.niTttWaitingAccept());
const jogadorDaVez = boardnow.turn === 'X' ? tttNum(boardnow.X) : tttNum(boardnow.O);
if (jogadorDaVez !== senderNum)
return reply(mess.niTttWrongTurn({ e0: () => (jogadorDaVez) }));
const moving = validmove(Number(texto), from);
if (!moving || moving.moveOk === false) {
if (moving?.reason === 'occupied')
return reply(mess.niTttPositionBusy());
return reply(mess.niTttInvalidMove());
}
if (moving.isWin) {
if (moving.winner === 'SERI') {
await tttSend(mess.niTttDraw({ e0: () => (tttBoardText(moving._matrix)) }), [moving.X, moving.O]);
}
else {
const winnerNum = moving.winner === 'O' ? moving.O : moving.X;
await tttSend(mess.niTttWinner({ e0: () => (tttNum(winnerNum)), e1: () => (tttBoardText(moving._matrix)) }), [moving.X, moving.O]);
}
tttClearSession(moving, from);
return;
}
return await tttSend(tttMsgBoard(moving), [moving.X, moving.O]);
}
}
catch (e) {
console.log('[JOGO DA VELHA ERRO]', e);
reply(mess.error());
}
}
const namoro1 = "./src/dados/func/namoro1.json";
const namoro2 = "./src/dados/func/namoro2.json";
function __NM_load() {
try {
if (!fs.existsSync(namoro1))
fs.writeFileSync(namoro1, "[]");
return JSON.parse(fs.readFileSync(namoro1, "utf-8"));
}
catch {
return [];
}
}
function __NM_save(db) {
fs.writeFileSync(namoro1, JSON.stringify(db, null, 2));
}
function __PD_load() {
try {
if (!fs.existsSync(namoro2))
fs.writeFileSync(namoro2, "[]");
return JSON.parse(fs.readFileSync(namoro2, "utf-8"));
}
catch {
return [];
}
}
function __PD_save(db) {
fs.writeFileSync(namoro2, JSON.stringify(db, null, 2));
}

// ===== SISTEMA DE AMANTES SECRETOS =====
const arquivoAmantes = "./src/dados/func/amantes.json";

function __AM_load() {
    try {
        if (!fs.existsSync(arquivoAmantes))
            fs.writeFileSync(arquivoAmantes, "[]");
        const db = JSON.parse(fs.readFileSync(arquivoAmantes, "utf-8"));
        return Array.isArray(db) ? db : [];
    } catch {
        return [];
    }
}

function __AM_save(db) {
    fs.writeFileSync(arquivoAmantes, JSON.stringify(db, null, 2));
}
// ===== FIM DO SISTEMA DE AMANTES SECRETOS =====
function __jid(x = "") {
x = String(x);
if (!x)
return "";
if (x.includes("@"))
return x;
return `${x}@s.whatsapp.net`;
}
function __num(x = "") {
return String(x).split("@")[0];
}
// fs já é importado no início do arquivo.
const arquivoCadelinhas = "./src/dados/func/cadelinhas.json";

function __CD_load() {
    try {
        if (!fs.existsSync(arquivoCadelinhas))
            fs.writeFileSync(arquivoCadelinhas, "[]");
        return JSON.parse(fs.readFileSync(arquivoCadelinhas, "utf-8"));
    } catch {
        return [];
    }
}

function __CD_save(db) {
    fs.writeFileSync(arquivoCadelinhas, JSON.stringify(db, null, 2));
}

function __CD_jid(x = "") {
    return __jid(x);
}

function __CD_num(x = "") {
    return __num(x);
}

function __CD_pedidoExpirou(p) {
    const criado = Number(p?.criadoEm);
    const agora = Date.now();
    return !Number.isFinite(criado) || criado <= 0 ||
        criado > agora || agora - criado >= 300000;
}

function __CD_limparPedidos() {
    const pedidos = __PD_load();
    const restantes = pedidos.filter(p =>
        p.tipo !== "cadelinha" || !__CD_pedidoExpirou(p)
    );
    if (restantes.length !== pedidos.length)
        __PD_save(restantes);
    return restantes;
}


/* ===== SISTEMA DE ADOÇÃO ANIMAL ===== */

const arquivoAdocaoAnimal = "./src/dados/func/adocao-animal.json";

const __AA_especies = {
    gato:       { nome: "gatinho", emoji: "🐈", titulo: "GATO" },
    cachorro:   { nome: "cachorrinho", emoji: "🐕", titulo: "CACHORRO" },
    panda:      { nome: "pandinha", emoji: "🐼", titulo: "PANDA" },
    raposa:     { nome: "raposinha", emoji: "🦊", titulo: "RAPOSA" },
    preguica:   { nome: "preguicinha", emoji: "🦥", titulo: "PREGUIÇA" },
    coala:      { nome: "coalinha", emoji: "🐨", titulo: "COALA" },
    rato:       { nome: "ratinho", emoji: "🐹", titulo: "RATO" }
};

function __AA_normalizar(texto = "") {
    return String(texto)
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();
}

function __AA_load() {
    try {
        if (!fs.existsSync(arquivoAdocaoAnimal)) {
            fs.writeFileSync(arquivoAdocaoAnimal, "[]");
        }
        const dados = JSON.parse(fs.readFileSync(arquivoAdocaoAnimal, "utf8"));
        return Array.isArray(dados) ? dados : [];
    } catch (erro) {
        console.error("[ADOÇÃO ANIMAL] Erro ao ler banco:", erro);
        return [];
    }
}

function __AA_save(db) {
    fs.writeFileSync(
        arquivoAdocaoAnimal,
        JSON.stringify(db, null, 2)
    );
}

function __AA_jid(x = "") {
    return __CD_jid(x);
}

function __AA_num(x = "") {
    return __CD_num(x);
}

/* ===== SISTEMA DE ALIMENTAÇÃO ANIMAL ===== */

const arquivoAlimentacaoAnimal = "./src/dados/func/alimentacao-animal.json";

function __AL_load() {
    try {
        fs.mkdirSync(path.dirname(arquivoAlimentacaoAnimal), { recursive: true });

        if (!fs.existsSync(arquivoAlimentacaoAnimal)) {
            fs.writeFileSync(arquivoAlimentacaoAnimal, "[]\n");
        }

        const dados = JSON.parse(
            fs.readFileSync(arquivoAlimentacaoAnimal, "utf8")
        );

        return Array.isArray(dados) ? dados : [];
    } catch (erro) {
        console.error("[ALIMENTAÇÃO ANIMAL] Erro ao ler banco:", erro);
        return [];
    }
}

function __AL_save(db) {
    const temporario = arquivoAlimentacaoAnimal + ".tmp";

    fs.mkdirSync(path.dirname(arquivoAlimentacaoAnimal), {
        recursive: true
    });

    fs.writeFileSync(
        temporario,
        JSON.stringify(db, null, 2) + "\n"
    );

    fs.renameSync(temporario, arquivoAlimentacaoAnimal);
}

function __AL_obter(db, animal, agora = Date.now()) {
    const jid = __AA_jid(animal);

    let registro = db.find(r => __AA_jid(r.animal) === jid);

    if (!registro) {
        registro = {
            animal: jid,
            fome: 100,
            atualizadoEm: agora,
            ultimaAlimentacao: null,
            totalRefeicoes: 0
        };

        db.push(registro);
    }

    const fomeAnterior = Number(registro.fome);
    const ultimaAtualizacao = Number(registro.atualizadoEm);

    const fomeValida = Number.isFinite(fomeAnterior)
        ? Math.max(0, Math.min(100, fomeAnterior))
        : 100;

    const tempoDecorrido =
        Number.isFinite(ultimaAtualizacao) &&
        ultimaAtualizacao > 0 &&
        ultimaAtualizacao <= agora
            ? agora - ultimaAtualizacao
            : 0;

    registro.fome = Math.max(
        0,
        Math.min(100, fomeValida - (tempoDecorrido / 3600000) * 5)
    );

    registro.atualizadoEm = agora;

    return registro;
}

function __AL_barra(fome) {
    const pontos = Math.max(0, Math.min(10, Math.round(fome / 10)));

    return "🟩".repeat(pontos) + "⬛".repeat(10 - pontos);
}

function __AL_status(fome) {
    if (fome <= 0) return "🚨 Está passando muita fome!";
    if (fome <= 20) return "🔴 Está com muita fome!";
    if (fome <= 45) return "🟠 Precisa comer logo.";
    if (fome <= 70) return "🟡 Está ficando com fome.";
    return "🟢 Está bem alimentado!";
}


function __AA_pedidoExpirou(p) {
    const criado = Number(p?.criadoEm);
    return !Number.isFinite(criado) ||
        criado <= 0 ||
        criado > Date.now() ||
        Date.now() - criado >= 300000;
}

function __AA_limparPedidos() {
    const pedidos = __PD_load();
    const restantes = pedidos.filter(p =>
        p.tipo !== "adocao_animal" || !__AA_pedidoExpirou(p)
    );

    if (restantes.length !== pedidos.length) {
        __PD_save(restantes);
    }

    return restantes;
}

/* ===== FIM DO SISTEMA DE ADOÇÃO ANIMAL ===== */

function __getRelacao(user, namoro1) {
const jid = __jid(user);
const num = __num(user);
return namoro1.find(r => {
const u1 = __jid(r.usu1);
const u2 = __jid(r.usu2);
const pertence = u1 === jid || u2 === jid ||
__num(u1) === num || __num(u2) === num;
return pertence &&
r.divorciados !== true &&
(r.namorados === true || r.namorados === false);
});
}
function __estaNamorando(user, namoro1) {
const rel = __getRelacao(user, namoro1);
return rel && rel.namorados === true;
}
function __temPedido(user, namoro1) {
const rel = __getRelacao(user, namoro1);
return rel && rel.namorados === false;
}
function __getParceiro(user, namoro1) {
const rel = __getRelacao(user, namoro1);
if (!rel)
return null;
const me = __jid(user);
const u1 = __jid(rel.usu1);
const u2 = __jid(rel.usu2);
return u1 === me ? u2 : u1;
}
function __getFamilia(user, namoro1) {
const jid = __jid(user);
const num = __num(user);
const rel = namoro1.find(r => {
const u1 = __jid(r.usu1);
const u2 = __jid(r.usu2);
const pertence = u1 === jid || u2 === jid ||
__num(u1) === num || __num(u2) === num;
return pertence && r.familia === true;
});
if (!rel)
return null;
if (!Array.isArray(rel.filhos))
rel.filhos = [];
return rel;
}
function __isPaiMae(user, namoro1) {
const fam = __getFamilia(user, namoro1);
if (!fam)
return false;
const jid = __jid(user);
return (__jid(fam.usu1) === jid ||
__jid(fam.usu2) === jid);
}
function __isFilho(user, namoro1) {
const jid = __jid(user);
return namoro1.find(r => {
if (!Array.isArray(r.filhos))
return false;
return r.filhos.includes(jid);
});
}
function __familiaDoFilho(user, namoro1) {
const jid = __jid(user);
return namoro1.find(r => {
if (!Array.isArray(r.filhos))
return false;
return r.filhos.includes(jid);
});
}
function __criarPedidoAdocao(db, pais, alvo, grupo, sender) {
db.push({
tipo: "adocao",
alvo: __jid(alvo),
pais: [
__jid(pais.usu1),
__jid(pais.usu2)
],
por: __jid(sender),
grupo: grupo,
criadoEm: Date.now()
});
}
function __getPedidoAdocao(user, pedidos) {
const jid = __jid(user);
return pedidos.find(p => p.tipo === "adocao" &&
__jid(p.alvo) === jid);
}
if (["s", "sim"].includes(budy2.toLowerCase()
.normalize("NFD")
.replace(/[\u0300-\u036f]/g, ""))) {
const namoro1 = __NM_load();
const namoro2 = __PD_load();

// ===== RESPOSTA AO PEDIDO DE AMANTE =====
if (!isGroup) {
    const pedidoAmante = namoro2.find(p =>
        p.tipo === "amante" && __jid(p.id) === __jid(sender)
    );

    if (pedidoAmante) {
        const remetente = __jid(pedidoAmante.remetente);
        const pessoa = __jid(sender);
        const idadePedido = Date.now() - Number(pedidoAmante.criadoEm);

        const removerPedido = () => {
            const indice = namoro2.indexOf(pedidoAmante);
            if (indice !== -1) namoro2.splice(indice, 1);
            __PD_save(namoro2);
        };

        if (!Number.isFinite(idadePedido) || idadePedido < 0 || idadePedido >= 86400000) {
            removerPedido();
            await yuta.sendMessage(from, {
                text: "⌛ Este convite para ser amante expirou. Peça um novo convite, se ainda houver interesse."
            });
            await yuta.sendMessage(remetente, {
                text: "⌛ Seu convite para ser amante expirou sem resposta."
            }).catch(() => {});
            return;
        }

        const relAtual = __getRelacao(pessoa, namoro1);
        const amantes = __AM_load();

        if (!relAtual || relAtual.casados !== true) {
            removerPedido();
            await yuta.sendMessage(from, {
                text: "💔 Você não está mais em um casamento válido. O convite foi cancelado."
            });
            await yuta.sendMessage(remetente, {
                text: "💔 O convite foi cancelado porque a pessoa não está mais casada."
            }).catch(() => {});
            return;
        }

        if (amantes.some(a => __jid(a.casado) === pessoa)) {
            removerPedido();
            await yuta.sendMessage(from, {
                text: "❤️‍🔥 Você já possui um amante registrado. Só é permitido um por pessoa casada."
            });
            await yuta.sendMessage(remetente, {
                text: "💔 O convite não pôde ser aceito porque essa pessoa já possui um amante."
            }).catch(() => {});
            return;
        }

        removerPedido();

        amantes.push({
            casado: pessoa,
            amante: remetente,
            criadoEm: Date.now()
        });
        __AM_save(amantes);

        await yuta.sendMessage(from, {
            text: `❤️‍🔥 *CONVITE ACEITO!*

Agora vocês são amantes em segredo. Seu casamento e os registros da sua família continuam intactos.`
        });

        await yuta.sendMessage(remetente, {
            text: `❤️‍🔥 *ELA ACEITOU!*

A pessoa aceitou seu convite. Vocês agora são amantes em segredo.`
        }).catch(() => {});
        return;
    }
}
// ===== FIM DA RESPOSTA DE SIM =====

const pedidoDivorcio = namoro2.find(p =>
p.tipo === "divorcio" &&
__jid(p.id) === __jid(sender) &&
(!p.grupo || __jid(p.grupo) === __jid(from))
);

if (pedidoDivorcio) {
const remetenteDivorcio = __jid(pedidoDivorcio.remetente);
const pessoaQueAceita = __jid(sender);

const criadoPedidoDivorcio = Number(pedidoDivorcio.criadoEm);

const idxDivorcio = namoro1.findIndex(r => {
const dataCasamentoAtual = Number(r.dataCasamento);

return r.casados === true &&
Number.isFinite(criadoPedidoDivorcio) &&
Number.isFinite(dataCasamentoAtual) &&
dataCasamentoAtual <= criadoPedidoDivorcio &&
(
(__jid(r.usu1) === remetenteDivorcio && __jid(r.usu2) === pessoaQueAceita) ||
(__jid(r.usu2) === remetenteDivorcio && __jid(r.usu1) === pessoaQueAceita)
);
});

namoro2.splice(namoro2.indexOf(pedidoDivorcio), 1);
__PD_save(namoro2);

if (idxDivorcio === -1) {
await reply("💔 Este pedido de divórcio é antigo ou não corresponde ao casamento atual. Ele foi cancelado.");
return;
}

const relDivorcio = namoro1[idxDivorcio];
relDivorcio.namorados = false;
relDivorcio.casados = false;
relDivorcio.divorciados = true;
relDivorcio.dataDivorcio = Date.now();

__NM_save(namoro1);

await yuta.sendMessage(from, {
text: `💔 *DIVÓRCIO CONFIRMADO*

@${__num(remetenteDivorcio)} e @${__num(pessoaQueAceita)} encerraram o casamento.

👨‍👩‍👧‍👦 Os registros dos filhos e da família foram preservados.`,
contextInfo: {
...NkChannelKk,
mentionedJid: [remetenteDivorcio, pessoaQueAceita]
}
}, { quoted: yt });
return;
}

const pedidoCasamento = namoro2.find(p =>
p.tipo === "casamento" &&
__jid(p.id) === __jid(sender)
);

if (pedidoCasamento) {
const remetenteCasamento = __jid(pedidoCasamento.remetente);
const pessoaQueAceita = __jid(sender);

const idxCasamento = namoro1.findIndex(r =>
r.namorados === true &&
(
(__jid(r.usu1) === remetenteCasamento && __jid(r.usu2) === pessoaQueAceita) ||
(__jid(r.usu2) === remetenteCasamento && __jid(r.usu1) === pessoaQueAceita)
)
);

if (idxCasamento === -1) {
namoro2.splice(namoro2.indexOf(pedidoCasamento), 1);
__PD_save(namoro2);
await reply("💔 O namoro não está mais ativo. O pedido de casamento foi cancelado.");
return;
}

const relCasamento = namoro1[idxCasamento];
const cincoDiasCasamento = 5 * 24 * 60 * 60 * 1000;
const inicioCasamento = Number(relCasamento.inicio);

if (!Number.isFinite(inicioCasamento) ||
Date.now() - inicioCasamento < cincoDiasCasamento) {
namoro2.splice(namoro2.indexOf(pedidoCasamento), 1);
__PD_save(namoro2);
await reply("⏳ O casamento exige pelo menos *5 dias completos de namoro*. O pedido foi cancelado.");
return;
}

if (relCasamento.casados === true) {
namoro2.splice(namoro2.indexOf(pedidoCasamento), 1);
__PD_save(namoro2);
await reply("💒 Vocês já estão casados!");
return;
}

relCasamento.casados = true;
relCasamento.dataCasamento = Date.now();

__NM_save(namoro1);
namoro2.splice(namoro2.indexOf(pedidoCasamento), 1);
__PD_save(namoro2);

await yuta.sendMessage(from, {
text: `💒 *CASAMENTO REALIZADO!* 💍

❤️ @${__num(remetenteCasamento)} e @${__num(pessoaQueAceita)} agora estão oficialmente casados!

Que essa união seja cheia de amor, respeito e felicidade! 🥂`,
contextInfo: {
...NkChannelKk,
mentionedJid: [remetenteCasamento, pessoaQueAceita]
}
}, { quoted: yt });
return;
}

const pedidoNamoro = namoro2.find(p => p.tipo === "namoro" &&
__jid(p.id) === __jid(sender));
if (pedidoNamoro) {
const idx = namoro1.findIndex(r => __jid(r.usu1) === __jid(pedidoNamoro.remetente) &&
__jid(r.usu2) === __jid(sender) &&
r.namorados === false);
if (idx !== -1) {
namoro1[idx].namorados = true;
if (!namoro1[idx].inicio)
namoro1[idx].inicio = Date.now();
if (!Array.isArray(namoro1[idx].filhos))
namoro1[idx].filhos = [];
__NM_save(namoro1);
namoro2.splice(namoro2.indexOf(pedidoNamoro), 1);
__PD_save(namoro2);
let ppimg;
try {
ppimg = await yuta.profilePictureUrl(sender, "image");
}
catch {
ppimg = imgperfil;
}
await yuta.sendMessage(from, {
image: { url: ppimg },
caption: mess.namoro(namoro1, idx, sender, prefix),
contextInfo: {
...NkChannelKk,
mentionedJid: [
__jid(pedidoNamoro.remetente),
__jid(sender)
]
}
}, { quoted: yt });
return;
}
}
const pedidoAdocao = __getPedidoAdocao(sender, namoro2);
if (pedidoAdocao) {
const rel = namoro1.find(r => __jid(r.usu1) === __jid(pedidoAdocao.pais[0]) &&
__jid(r.usu2) === __jid(pedidoAdocao.pais[1]) &&
r.namorados === true);
if (!rel) {
namoro2.splice(namoro2.indexOf(pedidoAdocao), 1);
__PD_save(namoro2);
return;
}
if (!Array.isArray(rel.filhos))
rel.filhos = [];
if (!rel.filhos.includes(__jid(sender)))
rel.filhos.push(__jid(sender));
__NM_save(namoro1);
namoro2.splice(namoro2.indexOf(pedidoAdocao), 1);
__PD_save(namoro2);
await reagir(from, "👶");
await yuta.sendMessage(from, {
text: mess.niText1258() +
`*• ғᴀᴍíʟɪᴀ:* @${__num(rel.usu1)} & @${__num(rel.usu2)}\n` +
`*• ɴᴏᴠᴏ ᴄʜɪʟᴅ:* @${__num(sender)}`,
contextInfo: {
...NkChannelKk,
mentionedJid: [
__jid(rel.usu1),
__jid(rel.usu2),
__jid(sender)
]
}
}, { quoted: yt });
return;
}


const __aaPedidosSim = __PD_load();
const __aaPedidoSim = __aaPedidosSim.find(p =>
    p.tipo === "adocao_animal" && __AA_jid(p.id) === __AA_jid(sender)
);

if (__aaPedidoSim) {
    const __aaIdxSim = __aaPedidosSim.indexOf(__aaPedidoSim);

    if (__AA_pedidoExpirou(__aaPedidoSim)) {
        __aaPedidosSim.splice(__aaIdxSim, 1);
        __PD_save(__aaPedidosSim);
        await reply("⏰ Seu pedido de adoção expirou. Ele só vale por 5 minutos.");
        return;
    }

    const __aaDadosAnimal = __AA_especies[__aaPedidoSim.animal];

    if (!__aaDadosAnimal) {
        __aaPedidosSim.splice(__aaIdxSim, 1);
        __PD_save(__aaPedidosSim);
        await reply("❌ Esse pedido possui uma espécie inválida e foi cancelado.");
        return;
    }

    const __aaRelacoesSim = __AA_load();
    const __aaJaTemDono = __aaRelacoesSim.some(r =>
        __AA_jid(r.animal) === __AA_jid(sender)
    );

    __aaPedidosSim.splice(__aaIdxSim, 1);
    __PD_save(__aaPedidosSim);

    if (__aaJaTemDono) {
        await reply("❌ Você já tem um dono no sistema de adoção animal. O pedido foi cancelado.");
        return;
    }

    __aaRelacoesSim.push({
        dono: __AA_jid(__aaPedidoSim.remetente),
        animal: __AA_jid(sender),
        especie: __aaPedidoSim.animal,
        inicio: Date.now(),
        grupo: __aaPedidoSim.grupo || from
    });

    __AA_save(__aaRelacoesSim);

    await yuta.sendMessage(from, {
        text: `🐾 *ADOÇÃO ACEITA!*

${__aaDadosAnimal.emoji} @${__AA_num(sender)} virou ${__aaDadosAnimal.nome} de @${__AA_num(__aaPedidoSim.remetente)}!

💖 Que essa amizade dure muito!`,
        contextInfo: {
            ...NkChannelKk,
            mentionedJid: [
                __AA_jid(sender),
                __AA_jid(__aaPedidoSim.remetente)
            ]
        }
    }, { quoted: yt });

    return;
}

const __cdPedidosSim = __PD_load();
const __cdPedidoSim = __cdPedidosSim.find(p =>
    p.tipo === "cadelinha" && __CD_jid(p.id) === __CD_jid(sender)
);
if (__cdPedidoSim) {
    const __cdIdxSim = __cdPedidosSim.indexOf(__cdPedidoSim);

    if (__CD_pedidoExpirou(__cdPedidoSim)) {
        __cdPedidosSim.splice(__cdIdxSim, 1);
        __PD_save(__cdPedidosSim);
        await reply("⏰ Esse pedido de cadelinha expirou. Ele só vale por 5 minutos.");
        return;
    }

    const __cdRelacoesSim = __CD_load();
    const __cdJaTemDonoSim = __cdRelacoesSim.some(r =>
        __CD_jid(r.cadelinha) === __CD_jid(sender)
    );

    __cdPedidosSim.splice(__cdIdxSim, 1);
    __PD_save(__cdPedidosSim);

    if (__cdJaTemDonoSim) {
        await reply("❌ Você já tem um dono. O pedido foi cancelado.");
        return;
    }

    __cdRelacoesSim.push({
        dono: __CD_jid(__cdPedidoSim.remetente),
        cadelinha: __CD_jid(sender),
        inicio: Date.now(),
        grupo: __cdPedidoSim.grupo || from
    });
    __CD_save(__cdRelacoesSim);

    await yuta.sendMessage(from, {
        text: `🐾 *PEDIDO ACEITO!*

@${__CD_num(sender)} agora é cadelinha de @${__CD_num(__cdPedidoSim.remetente)}!`,
        contextInfo: {
            ...NkChannelKk,
            mentionedJid: [
                __CD_jid(sender),
                __CD_jid(__cdPedidoSim.remetente)
            ]
        }
    }, { quoted: yt });
    return;
}

}
if (["n", "nao", "não"].includes(budy2.toLowerCase()
.normalize("NFD")
.replace(/[\u0300-\u036f]/g, ""))) {
const namoro1 = __NM_load();
const namoro2 = __PD_load();

// ===== RECUSA AO PEDIDO DE AMANTE =====
if (!isGroup) {
    const pedidoAmante = namoro2.find(p =>
        p.tipo === "amante" && __jid(p.id) === __jid(sender)
    );

    if (pedidoAmante) {
        const remetente = __jid(pedidoAmante.remetente);
        const indice = namoro2.indexOf(pedidoAmante);

        if (indice !== -1) namoro2.splice(indice, 1);
        __PD_save(namoro2);

        await yuta.sendMessage(from, {
            text: "💔 Você recusou o convite para ser amante. Nenhuma informação foi publicada no grupo."
        });

        await yuta.sendMessage(remetente, {
            text: "💔 Seu convite para ser amante foi recusado."
        }).catch(() => {});
        return;
    }
}
// ===== FIM DA RESPOSTA DE NÃO =====


const pedidoDivorcio = namoro2.find(p =>
p.tipo === "divorcio" &&
__jid(p.id) === __jid(sender) &&
(!p.grupo || __jid(p.grupo) === __jid(from))
);

if (pedidoDivorcio) {
const remetenteDivorcio = __jid(pedidoDivorcio.remetente);
const pessoaQueRecusou = __jid(sender);

namoro2.splice(namoro2.indexOf(pedidoDivorcio), 1);
__PD_save(namoro2);

await yuta.sendMessage(from, {
text: `💍 *PEDIDO DE DIVÓRCIO RECUSADO*

@${__num(pessoaQueRecusou)} recusou o pedido de divórcio de @${__num(remetenteDivorcio)}.

O casamento continua normalmente. ❤️`,
contextInfo: {
...NkChannelKk,
mentionedJid: [remetenteDivorcio, pessoaQueRecusou]
}
}, { quoted: yt });
return;
}

const pedidoCasamento = namoro2.find(p =>
p.tipo === "casamento" &&
__jid(p.id) === __jid(sender)
);

if (pedidoCasamento) {
const remetenteCasamento = __jid(pedidoCasamento.remetente);
const pessoaQueRecusou = __jid(sender);

namoro2.splice(namoro2.indexOf(pedidoCasamento), 1);
__PD_save(namoro2);

await yuta.sendMessage(from, {
text: `💔 *PEDIDO DE CASAMENTO RECUSADO*

@${__num(pessoaQueRecusou)} recusou o pedido de casamento de @${__num(remetenteCasamento)}.

O namoro continua normalmente. ❤️`,
contextInfo: {
...NkChannelKk,
mentionedJid: [remetenteCasamento, pessoaQueRecusou]
}
}, { quoted: yt });
return;
}

const pedidoNamoro = namoro2.find(p => p.tipo === "namoro" &&
__jid(p.id) === __jid(sender));
if (pedidoNamoro) {
const idx = namoro1.findIndex(r => __jid(r.usu1) === __jid(pedidoNamoro.remetente) &&
__jid(r.usu2) === __jid(sender) &&
r.namorados === false);
if (idx !== -1) {
await yuta.sendMessage(from, {
text: mess.fora(namoro1, idx, sender, prefix),
contextInfo: {
...NkChannelKk,
mentionedJid: [
__jid(pedidoNamoro.remetente),
__jid(sender)
]
}
}, { quoted: yt });
namoro1.splice(idx, 1);
__NM_save(namoro1);
}
namoro2.splice(namoro2.indexOf(pedidoNamoro), 1);
__PD_save(namoro2);
return;
}
const pedidoAdocao = __getPedidoAdocao(sender, namoro2);
if (pedidoAdocao) {
namoro2.splice(namoro2.indexOf(pedidoAdocao), 1);
__PD_save(namoro2);
await yuta.sendMessage(from, {
text: mess.niText1259(),
contextInfo: {
...NkChannelKk,
mentionedJid: [
...pedidoAdocao.pais,
__jid(sender)
]
}
}, { quoted: yt });
return;
}
}

if (["n", "nao"].includes(budy2.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))) {

const __aaPedidosNao = __PD_load();
const __aaPedidoNao = __aaPedidosNao.find(p =>
    p.tipo === "adocao_animal" && __AA_jid(p.id) === __AA_jid(sender)
);

if (__aaPedidoNao) {
    const __aaIdxNao = __aaPedidosNao.indexOf(__aaPedidoNao);
    __aaPedidosNao.splice(__aaIdxNao, 1);
    __PD_save(__aaPedidosNao);

    if (__AA_pedidoExpirou(__aaPedidoNao)) {
        await reply("⏰ Esse pedido de adoção expirou. Ele só vale por 5 minutos.");
        return;
    }

    const __aaDadosAnimal = __AA_especies[__aaPedidoNao.animal];
    const __aaNomeAnimal = __aaDadosAnimal?.nome || "animalzinho";
    const __aaEmojiAnimal = __aaDadosAnimal?.emoji || "🐾";

    await yuta.sendMessage(from, {
        text: `❌ *PEDIDO DE ADOÇÃO RECUSADO*

${__aaEmojiAnimal} @${__AA_num(sender)} recusou o pedido de adoção de @${__AA_num(__aaPedidoNao.remetente)}.

Tudo bem! Cada um escolhe seu próprio caminho.`,
        contextInfo: {
            ...NkChannelKk,
            mentionedJid: [
                __AA_jid(sender),
                __AA_jid(__aaPedidoNao.remetente)
            ]
        }
    }, { quoted: yt });

    return;
}

const __cdPedidosNao = __PD_load();
const __cdPedidoNao = __cdPedidosNao.find(p =>
    p.tipo === "cadelinha" && __CD_jid(p.id) === __CD_jid(sender)
);

if (__cdPedidoNao) {
    const __cdIdxNao = __cdPedidosNao.indexOf(__cdPedidoNao);

    __cdPedidosNao.splice(__cdIdxNao, 1);
    __PD_save(__cdPedidosNao);

    if (__CD_pedidoExpirou(__cdPedidoNao)) {
        await reply("⏰ Esse pedido de cadelinha expirou. Ele só vale por 5 minutos.");
        return;
    }

    await yuta.sendMessage(from, {
        text: `❌ *PEDIDO RECUSADO*

@${__CD_num(sender)} recusou o pedido de @${__CD_num(__cdPedidoNao.remetente)}.`,
        contextInfo: {
            ...NkChannelKk,
            mentionedJid: [
                __CD_jid(sender),
                __CD_jid(__cdPedidoNao.remetente)
            ]
        }
    }, { quoted: yt });
    return;
}

}

startJogoDaVelha();
if (isGroup && isBotGroupAdmins && !isGroupAdmins && !SoDono && !info.key.fromMe && ANT_SP.active && ANT_SP.groupId !== from && budy.includes("https://chat.whatsapp.com/")) {
const CompareLink = await yuta.groupInviteCode(from);
if (!body.includes(CompareLink)) {
const regex = /(https:\/\/chat\.whatsapp\.com\/[^\s]+)/;
const links = body.match(regex);
const FOUND_LINK = links ? links[0] : "Not found";
const findPlace = async (number) => {
try {
const findDDD = await axios.get(`https://brasilapi.com.br/api/ddd/v1/${number}`);
return findDDD.data.state;
}
catch {
return "Não encontrado";
}
};
async function getdados() {
const number = sender.split("@")[0];
const getImage = await yuta.profilePictureUrl(sender, 'image').catch(() => imgperfil);
const getbio = `${number}@s.whatsapp.net`;
let recadoW;
try {
const recadoUser = await yuta.fetchStatus(getbio);
recadoW = recadoUser[0]?.status?.status || "*privado*";
}
catch {
recadoW = "*privado*";
}
return {
creator: "Lm", nome: pushname, numero: number, grupo: groupName, link: FOUND_LINK, imagem: getImage, bio: recadoW, groupId: from, id: info.key.id, device: info.key.id.length > 21 ? 'Android 🚀' : (info.key.id.substring(0, 2) == '3E' ? 'WhatsApp Web 🪀' : 'iPhone 💸'), time: moment().tz("America/Sao_Paulo").format("HH:mm:ss"), data: moment().tz("America/Sao_Paulo").format("DD/MM/YYYY"), full_text: body, lugar: await findPlace(number.substring(2, 4)),
};
}
await getdados()
.then(async (lm) => {
await yuta.sendMessage(ANT_SP.groupId, {
text: mess.antisp(lm),
contextInfo: { ...(NkChannelKk || {}), externalAdReply: { title: `⚠️ LINK DETECTADO ⚠️`, body: NomeDoBot, previewType: "PHOTO", thumbnailUrl: lm.imagem, thumbnail: Buffer, sourceUrl: channel } }, mentions: groupAdmins,
});
})
.catch(console.error);
}
}
const canalInfo = (mentions = []) => {
if (setting.channelnk === "0@newsletter") {
return {
mentionedJid: mentions
};
}
return {
mentionedJid: mentions,
isForwarded: true,
forwardingScore: 1,
forwardedNewsletterMessageInfo: {
newsletterJid: setting.channelnk,
newsletterName: NomeDoBot,
serverMessageId: ""
}
};
};
let isTrueFalse = Array('tiktok', 'tiktok_audio', 'tiktok_video', 'facebook', 'instagram', 'twitter', 'ytmp3', 'ytmp4', 'play', 'playmix', 'play2', 'play3', 'playvid', 'playvid2').some(item => item === command);
if (isUrl(PR_String) && isAntiLinkHard && !isGroupAdmins && !autorMensagemEhAdmin && !SoDono && !isListaBrancaG && isBotGroupAdmins && !info.key.fromMe) {
if (isCmd && isTrueFalse)
return;
if (IS_DELETE) {
setTimeout(() => {
yuta.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: autorMensagem } });
}, 500);
}
yuta.groupSettingUpdate(from, 'announcement');
setTimeout(() => {
yuta.groupSettingUpdate(from, 'not_announcement');
}, 1200);
if (!JSON.stringify(groupMembers).includes(autorMensagem))
return;
yuta.groupParticipantsUpdate(from, [autorMensagem], 'remove');
}
if (isAntilinkgp && isGroup && isBotGroupAdmins && !isGroupAdmins && !autorMensagemEhAdmin && autorMensagem && buscarMembroPorJid(autorMensagem)) {
  const raizAntiLinkGp = info?.message?.ephemeralMessage?.message || info?.message?.viewOnceMessage?.message || info?.message?.viewOnceMessageV2?.message || info?.message?.viewOnceMessageV2Extension?.message || info?.message || {};
  const tipoAntiLinkGp = getContentType(raizAntiLinkGp);
  const mensagemControleAntiLinkGp = ['reactionMessage', 'protocolMessage', 'senderKeyDistributionMessage', 'messageContextInfo', 'pollUpdateMessage', 'editedMessage'].includes(tipoAntiLinkGp);
  const ctxAntiLinkGp = raizAntiLinkGp?.extendedTextMessage?.contextInfo || raizAntiLinkGp?.imageMessage?.contextInfo || raizAntiLinkGp?.videoMessage?.contextInfo || raizAntiLinkGp?.documentMessage?.contextInfo || {};
  const textoProprioAntiLinkGp = String(raizAntiLinkGp?.conversation || raizAntiLinkGp?.extendedTextMessage?.text || raizAntiLinkGp?.imageMessage?.caption || raizAntiLinkGp?.videoMessage?.caption || raizAntiLinkGp?.documentMessage?.caption || raizAntiLinkGp?.requestPaymentMessage?.noteMessage?.extendedTextMessage?.text || '');
  const apenasCitacaoAntiLinkGp = !!ctxAntiLinkGp?.quotedMessage && !textoProprioAntiLinkGp.trim();
  const messageText = mensagemControleAntiLinkGp || apenasCitacaoAntiLinkGp ? '' : textoProprioAntiLinkGp;

  if (messageText.includes('chat.whatsapp.com/')) {
    if (isBot) return;
    if (!JSON.stringify(groupMembers).includes(autorMensagem)) return;
    await yuta.groupParticipantsUpdate(from, [autorMensagem], 'remove');
    await yuta.sendMessage(from, {
      delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: autorMensagem }
    });
  }

  // CIPHERTEXT/decrypt-fail isolado também ocorre quando Sender Keys quebram.
  // Sem conteúdo real confirmando a infração, não remove ninguém.
  if (isMensagemInvisivelAdmin) {
    console.warn('[ANTILINKGP] Mensagem invisível ignorada por segurança:', info?.key?.id || 'sem-id');
  }

  const pagamentoRealAntiLink = !mensagemControleAntiLinkGp && !apenasCitacaoAntiLinkGp && !isMensagemInvisivelAdmin && (raizAntiLinkGp?.requestPaymentMessage || raizAntiLinkGp?.sendPaymentMessage);
  if (pagamentoRealAntiLink) {
    let grupoFechado = false;

    try {
      const mensagemAviso = mess.messageAntiLinkGp(autorMensagem);

      await yuta.groupSettingUpdate(from, 'announcement');
      grupoFechado = true;

      const msgTemp = await yuta.sendMessage(from, { text: '' });
      const idTemp = msgTemp?.key?.id;

      if (!idTemp) {
        throw new Error('Não foi possível gerar o ID temporário.');
      }

      await yuta.sendMessage(from, {
        text: mensagemAviso,
        mentions: [autorMensagem],
        edit: { remoteJid: from, fromMe: true, id: idTemp }
      }, {
        messageId: info.key.id
      });

      await yuta.sendMessage(from, {
        delete: { remoteJid: from, fromMe: true, id: idTemp }
      }).catch(() => {});

      await yuta.groupParticipantsUpdate(from, [autorMensagem], 'remove');
    } catch (e) {
      console.error('[ANTILINK PAYMENT]', e?.data?.message || e?.message || e);
    } finally {
      if (grupoFechado) {
        await yuta.groupSettingUpdate(from, 'not_announcement').catch(() => {});
      }
    }
  }
}
const groupIdscount = countMessage.map(i => i.groupId);
if (!muted.some(i => i.grupo === from) && isGroup) {
muted.push({ grupo: from, silenciados: [], mutados: [] });
writeJsonBatched("./src/dados/grupos/muted.json", muted, 2);
}
const grupoMute = muted.find(i => i.grupo === from);
if (isGroup && grupoMute) {
if (!Array.isArray(grupoMute.mutadosNormais))
grupoMute.mutadosNormais = [];
if (grupoMute.silenciados?.includes(sender)) {
await yuta.sendMessage(from, {
delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender }
});
}
if (grupoMute.mutadosNormais.includes(sender)) {
await yuta.sendMessage(from, {
delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender }
}).catch(() => {});
}
if (grupoMute.mutados?.includes(sender)) {
await yuta.sendMessage(from, {
delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender }
}).catch(() => {});
await yuta.sendMessage(from, {
text: mess.niText1260(),
mentions: [sender]
}, { quoted: yt });
await yuta.groupParticipantsUpdate(from, [sender], 'remove');
grupoMute.mutados = grupoMute.mutados.filter(id => id !== sender);
writeJsonBatched("./src/dados/grupos/muted.json", muted, 2);
}
}
const saveCountMessage = () => {
writeStore('count_message', 'root', Array.isArray(countMessage) ? countMessage : []);
};
const getGroupIndex = (groupId) => {
if (!Array.isArray(countMessage))
countMessage = [];
return countMessage.findIndex(g => g.groupId === groupId);
};
const contadorAtivo = () => {
return isGroup && dataGp?.[0]?.contadorMsg === true;
};
const avisoContadorOff = () => {
return reply(mess.niReply0010({ e0: () => (prefix) }));
};
if (isGroup && contadorAtivo() && !info.key.fromMe) {
if (!Array.isArray(countMessage))
countMessage = [];
let ind = getGroupIndex(from);
if (ind === -1) {
countMessage.push({
groupName,
groupId: from,
numbers: []
});
ind = countMessage.length - 1;
}
if (!sender || sender.endsWith('@g.us'))
return;
if (!Array.isArray(countMessage[ind].numbers)) {
countMessage[ind].numbers = [];
}
const numbersIds = countMessage[ind].numbers.map(u => u.id);
const indnum = numbersIds.indexOf(sender);
if (indnum === -1) {
countMessage[ind].numbers.push({
id: sender,
messages: isCmd ? 0 : 1,
cmd_messages: isCmd ? 1 : 0,
aparelho: adivinha || 'desconhecido',
figus: type === 'stickerMessage' ? 1 : 0,
imagens: isImage ? 1 : 0,
videos: isVideo ? 1 : 0,
audios: isAudio ? 1 : 0,
documentos: isQuotedDocument || type === 'documentMessage' ? 1 : 0
});
}
else {
const userData = countMessage[ind].numbers[indnum];
if (type !== 'stickerMessage') {
userData.messages = (userData.messages || 0) + (isCmd ? 0 : 1);
userData.cmd_messages = (userData.cmd_messages || 0) + (isCmd ? 1 : 0);
userData.aparelho = adivinha || userData.aparelho || 'desconhecido';
}
userData.figus = (userData.figus || 0) + (type === 'stickerMessage' ? 1 : 0);
userData.imagens = (userData.imagens || 0) + (isImage ? 1 : 0);
userData.videos = (userData.videos || 0) + (isVideo ? 1 : 0);
userData.audios = (userData.audios || 0) + (isAudio ? 1 : 0);
userData.documentos = (userData.documentos || 0) + ((isQuotedDocument || type === 'documentMessage') ? 1 : 0);
}
saveCountMessage();
const pegarIdReal = (u = {}) => jidNormalizedUser(u.phoneNumber || u.jid || u.id || u.participant || u);
const idsMembrosGrupo = (members = []) => members.flatMap(m => [
m?.id,
m?.phoneNumber,
m?.jid,
m?.participant
].filter(Boolean).map(jidNormalizedUser));
function limparContadorUsuariosFora(gpId, members = []) {
const ind = getGroupIndex(gpId);
if (ind === -1)
return 0;
const vivos = idsMembrosGrupo(members);
let removidos = 0;
const limparLista = (lista = []) => {
const antes = lista.length;
const nova = lista.filter(u => vivos.includes(pegarIdReal(u)) || vivos.includes(jidNormalizedUser(u.id)));
removidos += antes - nova.length;
return nova;
};
if (Array.isArray(countMessage[ind].numbers)) {
countMessage[ind].numbers = limparLista(countMessage[ind].numbers);
}
if (Array.isArray(countMessage[ind].participants)) {
countMessage[ind].participants = limparLista(countMessage[ind].participants);
}
return removidos;
}
if (!global.autoLimpezaContador) {
global.autoLimpezaContador = true;
setInterval(async () => {
try {
if (!Array.isArray(countMessage))
return;
for (const gp of countMessage) {
if (!gp?.groupId)
continue;
try {
const meta = await yuta.groupMetadata(gp.groupId);
const removidos = limparContadorUsuariosFora(gp.groupId, meta.participants || []);
if (removidos > 0)
saveCountMessage();
}
catch { }
}
}
catch (e) {
console.log(mess.niConsole006(), e);
}
}, 1000 * 60 * 60 * 6);
}
}
if (body != undefined) {
registrarPushname(botNumber, NomeDoBot);
registrarPushname(sender, pushname);
}
function __aluguelOnlyDigits(n = "") {
return String(n || "").replace(/\D/g, "")
}

function __aluguelPickNumero(...numeros) {
for (const numero of numeros) {
const n = __aluguelOnlyDigits(numero)
if (n) return n
}
return ""
}

function __aluguelBool(v) {
if (v === true) return true
if (v === false) return false
const t = String(v || "").trim().toLowerCase()
return ["true", "on", "1", "sim", "ligado", "ativo"].includes(t)
}

function __hasOwn(obj, key) {
return Object.prototype.hasOwnProperty.call(obj || {}, key)
}

function __aluguelModoAtivo() {
const cfg = __aluguelConfigLoad()
return cfg.modoAluguel === true || cfg.aluguel === true || cfg.modo_aluguel === true || cfg.aluguelAtivo === true
}

function __aluguelSetModo(ativo) {
const atual = __aluguelConfigLoad()
atual.aluguel = !!ativo
atual.modoAluguel = !!ativo
atual.modo_aluguel = !!ativo
atual.aluguelAtivo = !!ativo
try { Object.assign(nescessario, atual) } catch {}
return __aluguelConfigSave(atual)
}

function __pixModoAtivo() {
const cfg = __aluguelConfigLoad()
return cfg.pixAutomatico === true
}

function __pixSetModo(ativo) {
const cfg = __aluguelConfigLoad()
cfg.pixAutomatico = !!ativo
cfg.pixAuto = !!ativo
cfg.mercadoPago = !!ativo
cfg.auto = !!ativo
return __aluguelConfigSave(cfg)
}

function __aluguelDefaultConfig() {
return {
pixAutomatico: false,
pixAuto: false,
chavePix: "",
nomePix: ownerName || "Nk Petrov",
contatoDono: __aluguelPickNumero(setting?.ownerNumber),
mercadoPagoAccessToken: "",
tokenMP: "",
pixManual: {
nome: ownerName || "Nk Petrov",
chave: "",
contato: __aluguelPickNumero(setting?.ownerNumber)
},
  planosRegistrados: false,
  planos: [],
  modoAluguel: nescessario?.aluguel === true || nescessario?.modoAluguel === true
}
}

function __aluguelConfigLoad() {
const base = __aluguelDefaultConfig()
try {
const atual = readRentalConfig(base)
const raw = atual && typeof atual === "object" ? atual : {}
const manual = raw.pixManual || raw.manual || raw.pix || raw.pixAluguel || raw.aluguelPix || raw.pagamento || {}
const cfg = { ...base, ...raw }

if (__hasOwn(raw, "pixAutomatico")) cfg.pixAutomatico = __aluguelBool(raw.pixAutomatico)
else if (__hasOwn(raw, "pixAuto")) cfg.pixAutomatico = __aluguelBool(raw.pixAuto)
else if (__hasOwn(raw, "mercadoPago")) cfg.pixAutomatico = __aluguelBool(raw.mercadoPago)
else if (__hasOwn(raw, "auto")) cfg.pixAutomatico = __aluguelBool(raw.auto)
else cfg.pixAutomatico = false
cfg.pixAuto = cfg.pixAutomatico
cfg.mercadoPago = cfg.pixAutomatico
cfg.auto = cfg.pixAutomatico

cfg.chavePix = String(
raw.chavePix || raw.chave_pix || raw.pixKey || raw.pix || raw.key ||
manual.chave || manual.chavePix || manual.chave_pix || manual.pixKey || manual.pix || manual.key ||
""
).trim()

cfg.nomePix = String(
raw.nomePix || raw.nome_pix || raw.pixNome ||
manual.nome || manual.nomePix || manual.name ||
base.nomePix
).trim()

cfg.contatoDono = __aluguelOnlyDigits(setting?.ownerNumber || base.contatoDono)

cfg.mercadoPagoAccessToken = String(
raw.mercadoPagoAccessToken || raw.tokenMP || raw.tokenMp || raw.token || raw.accessToken || raw.access_token || ""
).trim()
cfg.tokenMP = cfg.mercadoPagoAccessToken

if (!Array.isArray(cfg.planos)) cfg.planos = []
cfg.planosRegistrados = __aluguelBool(raw.planosRegistrados)
cfg.pixManual = {
nome: cfg.nomePix,
chave: cfg.chavePix,
contato: cfg.contatoDono
}
cfg.modoAluguel = __aluguelBool(raw.modoAluguel ?? raw.aluguel ?? raw.modo_aluguel ?? raw.aluguelAtivo ?? base.modoAluguel)
cfg.aluguel = cfg.modoAluguel
cfg.modo_aluguel = cfg.modoAluguel
cfg.aluguelAtivo = cfg.modoAluguel
return cfg
} catch (e) {
console.log("[ALUGUEL CONFIG LOAD]", e?.message || e)
return base
}
}

function __aluguelConfigSave(cfg) {
try {
const base = __aluguelDefaultConfig()
const raw = cfg && typeof cfg === "object" ? cfg : {}
const out = { ...base, ...raw }
const pixAtivo = __hasOwn(raw, "pixAutomatico") ? __aluguelBool(raw.pixAutomatico) : (__hasOwn(raw, "pixAuto") ? __aluguelBool(raw.pixAuto) : (__hasOwn(raw, "mercadoPago") ? __aluguelBool(raw.mercadoPago) : (__hasOwn(raw, "auto") ? __aluguelBool(raw.auto) : false)))
out.pixAutomatico = pixAtivo
out.pixAuto = pixAtivo
out.mercadoPago = pixAtivo
out.auto = pixAtivo
out.chavePix = String(out.chavePix || "").trim()
out.nomePix = String(out.nomePix || base.nomePix).trim()
out.contatoDono = __aluguelOnlyDigits(setting?.ownerNumber || base.contatoDono)
out.mercadoPagoAccessToken = String(out.mercadoPagoAccessToken || out.tokenMP || "").trim()
out.tokenMP = out.mercadoPagoAccessToken
out.pixManual = { nome: out.nomePix, chave: out.chavePix, contato: out.contatoDono }
if (!Array.isArray(out.planos)) out.planos = []
out.planosRegistrados = __aluguelBool(out.planosRegistrados)
out.modoAluguel = __aluguelBool(out.modoAluguel ?? out.aluguel ?? out.modo_aluguel ?? out.aluguelAtivo)
out.aluguel = out.modoAluguel
out.modo_aluguel = out.modoAluguel
out.aluguelAtivo = out.modoAluguel
return saveRentalConfig(out)
} catch (e) {
console.log("Erro ao salvar aluguel_config:", e?.message || e)
return false
}
}

function __aluguelAutoLoad() {
try {
const j = readRentalAuto({ groups: {}, pend: {} })
if (!j || typeof j !== "object") return { groups: {}, pend: {} }
if (!j.groups || typeof j.groups !== "object") j.groups = {}
if (!j.pend || typeof j.pend !== "object") j.pend = {}
return j
} catch {
return { groups: {}, pend: {} }
}
}

function __aluguelAutoSave(db) {
saveRentalAuto(db)
}

function __formatBRL(v) {
try { return Number(v).toFixed(2).replace(".", ",") } catch { return String(v) }
}

function __formatNumeroContato(numero = "") {
const n = __aluguelOnlyDigits(numero)
if (!n) return "nao configurado"
if (n.length === 13) return `+${n.slice(0,2)} ${n.slice(2,4)} ${n.slice(4,9)}-${n.slice(9)}`
if (n.length === 12) return `+${n.slice(0,2)} ${n.slice(2,4)} ${n.slice(4,8)}-${n.slice(8)}`
if (n.length === 11) return `${n.slice(0,2)} ${n.slice(2,7)}-${n.slice(7)}`
return n
}

function __aluguelDonoNumero() {
return __aluguelPickNumero(setting?.ownerNumber)
}

function __aluguelDonoJid() {
const n = __aluguelDonoNumero()
return n ? `${n}@s.whatsapp.net` : null
}

async function __pixNotificarDonoAprovado({ tipo = 'pix', pagamentoId, valor = 0, senderJid = '', senderNome = '', grupoId = '', grupoNome = '', planoTitulo = '', acaoAluguel = 'ativado' } = {}) {
try {
if (!__pixModoAtivo()) return false
const donoJid = __aluguelDonoJid()
if (!donoJid) return false

const numeroPagador = __aluguelOnlyDigits(senderJid)
const pagador = String(senderNome || '').trim() || (numeroPagador ? `@${numeroPagador}` : 'nao identificado')
const valorFmt = __formatBRL(valor)
const pid = String(pagamentoId || 'nao identificado')
let texto = ''

if (String(tipo).toLowerCase() === 'aluguel') {
texto = mess.pixComprovanteDonoAluguel({
pagador,
valor: valorFmt,
pagamentoId: pid,
planoTitulo: planoTitulo || 'plano',
grupoNome: grupoNome || 'nao identificado',
grupoId: grupoId || 'nao identificado',
acao: String(acaoAluguel || 'ativado').toLowerCase() === 'renovado' ? 'ʀᴇɴᴏᴠᴀᴅᴏ' : 'ᴀᴛɪᴠᴀᴅᴏ'
})
} else {
texto = mess.pixComprovanteDonoDireto({
pagador,
valor: valorFmt,
pagamentoId: pid,
origem: grupoNome || (grupoId ? grupoId : 'ᴘʀɪᴠᴀᴅᴏ')
})
}

if (!texto) return false
const mentions = numeroPagador ? [senderJid] : []
await yuta.sendMessage(donoJid, {
text: texto,
mentions,
contextInfo: { ...NkChannelKk, mentionedJid: mentions }
}).catch(() => {})
return true
} catch (e) {
console.log('[PIX AVISO DONO]', e?.message || e)
return false
}
}

function __aluguelPlanos() {
const cfg = __aluguelConfigLoad()
return (Array.isArray(cfg.planos) ? cfg.planos : [])
.map((p, i) => ({
id: String(p.id || `${Number(p.dias || 0)}DIAS` || `PLANO${i + 1}`).toUpperCase().replace(/\s+/g, ""),
titulo: String(p.titulo || p.nome || `${p.dias || 0} Dias`).trim(),
dias: Math.max(0, parseInt(p.dias) || 0),
horas: Math.max(0, parseInt(p.horas) || 0),
valor: Number(String(p.valor || p.preco || 0).replace(",", ".")) || 0,
grupos: Math.max(1, parseInt(p.grupos) || 1)
}))
.filter(p => (p.dias > 0 || p.horas > 0) && p.valor > 0)
}

function __aluguelFindPlano(planoId) {
const id = String(planoId || "").trim().toUpperCase()
return __aluguelPlanos().find(p => p.id === id) || null
}

function __aluguelFindPlanoSmart(alvo = "", planos = __aluguelPlanos()) {
const txtOriginal = String(alvo || "").trim()
const txt = txtOriginal.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
if (!txt) return null
if (/^\d+$/.test(txt)) {
const idx = Number(txt) - 1
if (planos[idx]) return planos[idx]
}
const num = parseInt(txt.replace(/\D/g, "")) || 0
return planos.find((p, i) => {
const id = String(p.id || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
const titulo = String(p.titulo || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
const dias = String(p.dias || "")
return txt === id || txt === titulo || txt === dias || txt === `${dias}d` || txt === `${dias}dias` || txt === String(i + 1) || (num > 0 && Number(p.dias) === num && !/^\d+$/.test(txt))
}) || null
}

function __aluguelPlanoOuTempo(texto = "", planos = __aluguelPlanos()) {
const bruto = String(texto || "").trim()
const plano = __aluguelFindPlanoSmart(bruto, planos)
if (plano) return { dias: Number(plano.dias || 0), horas: Number(plano.horas || 0), minutos: 0, plano }
return null
}

function __aluguelTextoPlanos(planos = __aluguelPlanos()) {
return mess.listaPlanosAluguel((planos || []).map(p => ({ titulo: p.titulo, valor: __formatBRL(p.valor) })))
}

function __aluguelTextoComandosPlanos(planos = __aluguelPlanos()) {
return mess.comandosPlanosAluguel((planos || []).map(p => ({ titulo: p.titulo })), prefix)
}

function __pixKeyType(key = "") {
const k = String(key || "").trim()
const clean = k.replace(/\s/g, "")
const nums = k.replace(/\D/g, "")
if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(k)) return "EMAIL"
if (/^\+?\d{10,15}$/.test(clean)) return "PHONE"
if (nums.length === 11) return "CPF"
if (nums.length === 14) return "CNPJ"
return "EVP"
}

function __pixStaticButtonParams({ nomePix, chavePix, refPix, itemName } = {}) {
return JSON.stringify({
currency: "BRL",
total_amount: { value: 0, offset: 100 },
reference_id: refPix || crypto.randomBytes(6).toString("hex").toUpperCase(),
type: "physical-goods",
order: {
status: "pending",
subtotal: { value: 0, offset: 100 },
order_type: "ORDER",
items: [{
name: itemName || "",
amount: { value: 0, offset: 100 },
quantity: 0,
sale_amount: { value: 0, offset: 100 }
}]
},
payment_settings: [{
type: "pix_static_code",
pix_static_code: {
merchant_name: String(nomePix || ownerName || "Nk Petrov").slice(0, 25),
key: String(chavePix || ""),
key_type: __pixKeyType(chavePix)
}
}],
share_payment_status: false,
is_soft_deleted: false,
referral: "chat_attachment"
})
}

function __textoAlugarManual(planos = __aluguelPlanos(), plano = null) {
const cfg = __aluguelConfigLoad()
const contato = __formatNumeroContato(__aluguelDonoNumero())
return mess.pixManualAluguel({
NomeDoBot,
planosTexto: __aluguelTextoPlanos(planos),
planoTitulo: plano?.titulo,
valor: plano ? __formatBRL(plano.valor) : null,
dias: plano?.dias,
nomePix: cfg.nomePix || ownerName || "Nk Petrov",
chavePix: cfg.chavePix || "sem chave",
contato
})
}

function __textoMenuAlugar(planos = __aluguelPlanos()) {
return mess.alugarMenu({
NomeDoBot,
planosTexto: __aluguelTextoPlanos(planos),
usarBotoes: usarBotoes(),
comandosTexto: __aluguelTextoComandosPlanos(planos),
prefix
})
}

async function __sendAluguelButtons(texto, planos = []) {
try {
if (usarBotoes() && planos.length) {
const buttons = planos.slice(0, 5).map((p, i) => ({
name: "quick_reply",
buttonParamsJson: JSON.stringify({
display_text: `✦ ${p.titulo}`,
id: `${prefix}alugar ${p.id || (i + 1)}`
})
}))

return await sendLikeInnovators(yuta, from, {
text: texto,
footer: `✦ ${NomeDoBot || "YUTA"} ✦`,
interactiveButtons: buttons,
contextInfo: { ...NkChannelKk, mentionedJid: [sender] }
}, { quoted: yt })
}
} catch (e) {
console.log("[ALUGUEL BUTTONS] erro:", e?.message || e)
}

return await yuta.sendMessage(from, {
text: texto,
contextInfo: { ...NkChannelKk, mentionedJid: [sender] }
}, { quoted: yt })
}

async function __sendPixManualAluguel(planos = __aluguelPlanos(), plano = null) {
const cfg = __aluguelConfigLoad()
if (!cfg.chavePix) {
return reply(mess.pixSemChave(prefix, NomeDoBot))
}

const textoManual = __textoAlugarManual(planos, plano)

await yuta.sendMessage(from, {
text: textoManual,
contextInfo: { ...NkChannelKk, mentionedJid: [sender] }
}, { quoted: yt })

if (usarBotoes()) {
await delay(700)
return await sendLikeInnovators(yuta, from, {
text: mess.pixCopiar(NomeDoBot),
footer: `✦ ${NomeDoBot || "YUTA"} ✦`,
interactiveButtons: [{
name: "cta_copy",
buttonParamsJson: JSON.stringify({
display_text: "ᴄᴏᴘɪᴀʀ ᴘɪx",
copy_code: cfg.chavePix
})
}],
contextInfo: { ...NkChannelKk, mentionedJid: [sender] }
}, { quoted: yt })
}

return
}

function __textoPixManualDireto() {
const cfg = __aluguelConfigLoad()
return mess.pixManualDireto({
NomeDoBot,
nomePix: cfg.nomePix || ownerName || "Nk Petrov",
chavePix: cfg.chavePix || "sem chave",
contato: __formatNumeroContato(__aluguelDonoNumero())
})
}

async function __sendPixManualDireto() {
const cfg = __aluguelConfigLoad()
if (!cfg.chavePix) return reply(mess.pixSemChave(prefix, NomeDoBot))

const texto = __textoPixManualDireto()

if (usarBotoes()) {
return await sendLikeInnovators(yuta, from, {
text: texto,
footer: `✦ ${NomeDoBot || "YUTA"} ✦`,
interactiveButtons: [{
name: "cta_copy",
buttonParamsJson: JSON.stringify({
display_text: "ᴄᴏᴘɪᴀʀ ᴘɪx",
copy_code: cfg.chavePix
})
}],
contextInfo: { ...NkChannelKk, mentionedJid: [sender] }
}, { quoted: yt })
}

return await yuta.sendMessage(from, {
text: texto,
contextInfo: { ...NkChannelKk, mentionedJid: [sender] }
}, { quoted: yt })
}

async function __gerarPixAluguelAuto(plano) {
const descricao = `Aluguel ${NomeDoBot || "Bot"} - ${plano.titulo}`
const valor = Number(plano.valor)
const idempotencyKey = uuidv4()
const pagamentoInfo = await criarPagamentoPix(valor, descricao, idempotencyKey)

if (!pagamentoInfo?.qr_code || !pagamentoInfo?.qr_code_base64) {
return reply(mess.pixAutoErroAluguel(prefix, NomeDoBot))
}

const qrBuffer = Buffer.from(pagamentoInfo.qr_code_base64, "base64")
const bodyTxt = mess.pixAutoGeradoAluguel({
planoTitulo: plano.titulo,
valor: __formatBRL(valor),
dias: plano.dias
})

if (usarBotoes()) {
await sendInteractiveImageButtons(yuta, from, {
image: qrBuffer,
body: bodyTxt,
footer: `✦ ${NomeDoBot || "YUTA"} • 30 min ✦`,
buttons: [{
name: "cta_copy",
buttonParamsJson: JSON.stringify({
display_text: "ᴄᴏᴘɪᴀʀ ᴘɪx",
copy_code: pagamentoInfo.qr_code
})
}],
contextInfo: { ...NkChannelKk, mentionedJid: [sender] }
}, { quoted: yt })
} else {
await yuta.sendMessage(from, {
image: qrBuffer,
caption: mess.pixAutoLegenda(bodyTxt, pagamentoInfo.qr_code),
contextInfo: { ...NkChannelKk, mentionedJid: [sender] }
}, { quoted: yt })
}

await __startPollPixAluguel({ yuta, from, sender, senderNome: pushname, pagamentoId: pagamentoInfo.id, plano, quotedMsg: yt })
}

global.__ALUGUEL_POLL = global.__ALUGUEL_POLL || {}

async function __startPollPixAluguel({ yuta, from, sender, senderNome = '', pagamentoId, plano, quotedMsg }) {
try {
const pid = String(pagamentoId)
if (global.__ALUGUEL_POLL[pid]) return
global.__ALUGUEL_POLL[pid] = true

const db = __aluguelAutoLoad()
db.pend[pid] = {
grupo: String(from),
sender: String(sender),
senderNome: String(senderNome || ''),
planoId: String(plano.id),
dias: Number(plano.dias || 0),
horas: Number(plano.horas || 0),
valor: Number(plano.valor || 0),
criadoEm: Date.now(),
expiraEm: Date.now() + (30 * 60 * 1000)
}
__aluguelAutoSave(db)

const tempoMaximo = 30 * 60 * 1000
const inicio = Date.now()

const timer = setInterval(async () => {
try {
if ((Date.now() - inicio) > tempoMaximo) {
clearInterval(timer)
delete global.__ALUGUEL_POLL[pid]
const db2 = __aluguelAutoLoad()
delete db2.pend[pid]
__aluguelAutoSave(db2)
return
}

const check = await verificarPix(pid).catch(() => null)
if (check?.status === "approved") {
clearInterval(timer)
delete global.__ALUGUEL_POLL[pid]
const db2 = __aluguelAutoLoad()
const pend = db2.pend[pid]
if (!pend) return
const jaEstavaAlugado = gruposAutorizados.some(g => g?.id === from)
try { ativarAluguelGrupo(from, plano.dias, plano.horas) } catch {}
delete db2.pend[pid]
__aluguelAutoSave(db2)

const msgOk = mess.pixAutoConfirmadoAluguel({ planoTitulo: plano.titulo })

await yuta.sendMessage(from, {
text: msgOk,
contextInfo: { ...NkChannelKk, mentionedJid: [sender] }
}, { quoted: quotedMsg || yt }).catch(() => {})

let nomeGrupoPix = ''
try { nomeGrupoPix = (await yuta.groupMetadata(from))?.subject || '' } catch {}
await __pixNotificarDonoAprovado({
tipo: 'aluguel',
pagamentoId: pid,
valor: Number(pend?.valor ?? plano.valor ?? 0),
senderJid: sender,
senderNome: String(pend?.senderNome || senderNome || ''),
grupoId: String(from),
grupoNome: nomeGrupoPix,
planoTitulo: plano.titulo,
acaoAluguel: jaEstavaAlugado ? 'renovado' : 'ativado'
})
}
} catch {}
}, 5000)
} catch {
try { delete global.__ALUGUEL_POLL[String(pagamentoId)] } catch {}
}
}

let gruposAutorizados = readRentalGroups([])
function salvarGrupos() {
saveRentalGroups(gruposAutorizados)
}
function ativarAluguelGrupo(from, dias = 0, horas = 0, minutos = 0) {
const agora = new Date()
dias = Math.max(0, parseInt(dias) || 0)
horas = Math.max(0, parseInt(horas) || 0)
minutos = Math.max(0, parseInt(minutos) || 0)
const expiraEm = new Date(agora.getTime() + (((dias * 24 + horas) * 60) + minutos) * 60 * 1000)
const jaExiste = gruposAutorizados.find(g => g.id === from)
if (!jaExiste) gruposAutorizados.push({ id: from, expiraEm: expiraEm.toISOString() })
else jaExiste.expiraEm = expiraEm.toISOString()
salvarGrupos()
}
async function desativarAluguelGrupo(from, opcoes = {}) {
try {
const motivoAluguel = String(opcoes?.motivo || "manual").toLowerCase()
const isVencimentoAluguel = motivoAluguel === "vencimento"
const existia = gruposAutorizados.some(g => g?.id === from)
if (isVencimentoAluguel && !existia) return false
gruposAutorizados = gruposAutorizados.filter(g => g.id !== from)
salvarGrupos()

const donoJid = __aluguelDonoJid()
const meta = await yuta.groupMetadata(from).catch(() => null)
const nomeGrupo = meta?.subject || from
const participantes = Array.isArray(meta?.participants) ? meta.participants : []

const jidRealParticipante = (p = {}) => {
const ids = [p.phoneNumber, p.jid, p.id, p.participant, p.remoteJid, p.lid].filter(Boolean).map(String)
for (const id of ids) if (id.includes('@s.whatsapp.net')) return id
for (const id of ids) {
const n = __aluguelOnlyDigits(id)
if (n.length >= 10 && n.length <= 15) return `${n}@s.whatsapp.net`
}
for (const id of ids) if (id.includes('@lid')) return id
return ids[0] || ''
}

const participantesUnicos = []
const vistos = new Set()
for (const p of participantes) {
const jid = jidRealParticipante(p)
const key = __aluguelOnlyDigits(jid) || String(jid || '')
if (!key || vistos.has(key)) continue
vistos.add(key)
participantesUnicos.push({ ...p, __jid: jid })
}

const admins = participantesUnicos.filter(p => p.admin === 'admin' || p.admin === 'superadmin')
const donoGrupo = admins.find(p => p.admin === 'superadmin') || admins[0] || null
const adminsTxt = admins.length ? admins.slice(0, 20).map((p, i) => `${i + 1}. @${String(p.__jid || '').split('@')[0]}`).join('\n') : 'nao consegui identificar'

let linkGrupo = 'nao consegui gerar'
try {
const code = await yuta.groupInviteCode(from)
if (code) linkGrupo = `https://chat.whatsapp.com/${code}`
} catch {}

const avisoGrupo = typeof mess?.aluguel === 'function'
? mess.aluguel(prefix, NomeDoBot)
: `*📍 | 𝐀𝐓𝐄𝐍𝐂𝐀𝐎, 𝐆𝐑𝐔𝐏𝐎! 𝐎 𝐀𝐋𝐔𝐆𝐔𝐄𝐋 𝐅𝐎𝐈 𝐄𝐍𝐂𝐄𝐑𝐑𝐀𝐃𝐎.*

> *use ${prefix}alugar para renovar.*`

await yuta.sendMessage(from, { text: avisoGrupo, contextInfo: { ...NkChannelKk } }).catch(() => {})

if (donoJid) {
const avisoDono = mess.aluguelAvisoDono({
nomeGrupo,
idGrupo: from,
linkGrupo,
membros: participantesUnicos.length,
admins: admins.length,
donoGrupo: donoGrupo?.__jid ? '@' + String(donoGrupo.__jid).split('@')[0] : 'nao identificado',
adminsTxt,
prefix,
motivo: isVencimentoAluguel ? 'vencimento' : 'manual'
})
const mencoesAdmins = admins.map(p => p.__jid).filter(j => String(j || '').includes('@s.whatsapp.net'))
await yuta.sendMessage(donoJid, { text: avisoDono, contextInfo: { ...NkChannelKk, mentionedJid: mencoesAdmins } }).catch(() => {})
}
} catch (e) {
console.log("Erro ao desativar aluguel:", e)
}
}
function isGrupoAutorizado(from) {
const grupo = gruposAutorizados.find(g => g.id === from)
if (!grupo) return false
const expiraMs = Date.parse(grupo.expiraEm)
if (!Number.isFinite(expiraMs)) {
gruposAutorizados = gruposAutorizados.filter(g => g !== grupo)
salvarGrupos()
return false
}
if (Date.now() >= expiraMs) {
desativarAluguelGrupo(from, { motivo: 'vencimento' })
return false
}
return true
}

async function __processarAlugueisVencidos() {
if (globalThis.__YUTA_ALUGUEL_CHECK_RUNNING) return
try {
globalThis.__YUTA_ALUGUEL_CHECK_RUNNING = true
const agora = Date.now()
let removeuInvalido = false
const vencidos = []
for (const grupo of [...gruposAutorizados]) {
if (!grupo?.id) { removeuInvalido = true; continue }
const expiraMs = Date.parse(grupo.expiraEm)
if (!Number.isFinite(expiraMs)) { removeuInvalido = true; continue }
if (agora >= expiraMs) vencidos.push(grupo.id)
}
if (removeuInvalido) {
gruposAutorizados = gruposAutorizados.filter(g => g?.id && Number.isFinite(Date.parse(g.expiraEm)))
salvarGrupos()
}
for (const idGrupo of [...new Set(vencidos)]) {
await desativarAluguelGrupo(idGrupo, { motivo: 'vencimento' })
}
} finally {
globalThis.__YUTA_ALUGUEL_CHECK_RUNNING = false
}
}

globalThis.__YUTA_ALUGUEL_CHECK_FN = __processarAlugueisVencidos
if (!globalThis.__YUTA_ALUGUEL_CHECK_TIMER) {
globalThis.__YUTA_ALUGUEL_CHECK_TIMER = setInterval(() => {
const checkAtual = globalThis.__YUTA_ALUGUEL_CHECK_FN
if (typeof checkAtual === 'function') checkAtual().catch(e => console.log('[ALUGUEL CHECK]', e?.message || e))
}, 15 * 1000)
if (typeof globalThis.__YUTA_ALUGUEL_CHECK_TIMER.unref === 'function') globalThis.__YUTA_ALUGUEL_CHECK_TIMER.unref()
setTimeout(() => {
const checkAtual = globalThis.__YUTA_ALUGUEL_CHECK_FN
if (typeof checkAtual === 'function') checkAtual().catch(() => {})
}, 1000)
}

function __aluguelQuotedText(info = {}) {
try {
const quoted = info?.message?.extendedTextMessage?.contextInfo?.quotedMessage || null
if (!quoted) return ''
const possiveis = [
quoted?.conversation,
quoted?.extendedTextMessage?.text,
quoted?.imageMessage?.caption,
quoted?.videoMessage?.caption,
quoted?.documentMessage?.caption,
quoted?.documentWithCaptionMessage?.message?.documentMessage?.caption,
quoted?.viewOnceMessage?.message?.imageMessage?.caption,
quoted?.viewOnceMessage?.message?.videoMessage?.caption,
quoted?.viewOnceMessageV2?.message?.imageMessage?.caption,
quoted?.viewOnceMessageV2?.message?.videoMessage?.caption
]
return String(possiveis.find(Boolean) || '').trim()
} catch {
return ''
}
}

function __aluguelExtrairGrupoIdDoAviso(texto = '') {
try {
const t = String(texto || '')
const patterns = [
/ALUGUEL_GRUPO:([0-9A-Za-z._-]+@g\.us)/i,
/ALUGUEL-GRUPO:([0-9A-Za-z._-]+@g\.us)/i,
/(?:id|ɪᴅ)[:：*\s]+([0-9A-Za-z._-]+@g\.us)/i,
/([0-9A-Za-z._-]+@g\.us)/i
]
for (const rgx of patterns) {
const m = t.match(rgx)
if (m?.[1]) return String(m[1]).trim()
}
return ''
} catch {
return ''
}
}

function __aluguelAdminJids(meta = {}) {
try {
const participantes = Array.isArray(meta?.participants) ? meta.participants : []
const out = []
const vistos = new Set()
for (const p of participantes) {
const isAdm = p?.admin === 'admin' || p?.admin === 'superadmin'
if (!isAdm) continue
const ids = [p?.phoneNumber, p?.jid, p?.id, p?.participant, p?.participantAlt].filter(Boolean).map(String)
let jid = ids.find(x => x.includes('@s.whatsapp.net')) || ''
if (!jid) {
const n = __aluguelOnlyDigits(ids.find(Boolean) || '')
if (n.length >= 10) jid = `${n}@s.whatsapp.net`
}
if (!jid) continue
const key = __aluguelOnlyDigits(jid) || jid
if (vistos.has(key)) continue
vistos.add(key)
out.push(jid)
}
return out
} catch {
return []
}
}

function __aluguelRemoverRegistrosGrupo(idGrupo = '') {
let registrosRemovidos = 0
let pendenciasRemovidas = 0
try {
const antes = Array.isArray(gruposAutorizados) ? gruposAutorizados.length : 0
gruposAutorizados = Array.isArray(gruposAutorizados) ? gruposAutorizados.filter(g => g?.id !== idGrupo) : []
registrosRemovidos += antes - gruposAutorizados.length
salvarGrupos()
} catch {}
try {
const autoDb = __aluguelAutoLoad()
if (autoDb?.groups && typeof autoDb.groups === 'object' && autoDb.groups[idGrupo]) {
delete autoDb.groups[idGrupo]
registrosRemovidos++
}
if (autoDb?.pend && typeof autoDb.pend === 'object') {
for (const idPix of Object.keys(autoDb.pend)) {
if (autoDb.pend[idPix]?.grupo === idGrupo) {
delete autoDb.pend[idPix]
pendenciasRemovidas++
}
}
}
__aluguelAutoSave(autoDb)
} catch {}
return { registrosRemovidos, pendenciasRemovidas }
}

async function __aluguelGrupoAindaExiste(idGrupo = '') {
try {
const all = await yuta.groupFetchAllParticipating()
const grupos = Object.values(all || {})
return grupos.find(g => String(g?.id || '') === String(idGrupo)) || null
} catch {
try {
const meta = await yuta.groupMetadata(idGrupo)
return meta || null
} catch {
return null
}
}
}

async function __aluguelHandleAcaoPvDono(acaoRaw = '') {
try {
const acao = String(acaoRaw || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim()
if (!['sair', 'aguardar'].includes(acao)) return false
if (isGroup) return false
const quotedText = __aluguelQuotedText(info)
if (!quotedText) return false
const idGrupo = __aluguelExtrairGrupoIdDoAviso(quotedText)
if (!idGrupo) {
await reply(mess.aluguelPvReplyUso(prefix))
return true
}
if (!SoDono && !info.key.fromMe) {
await reply(mess.onlyOwner())
return true
}
const grupoAtual = await __aluguelGrupoAindaExiste(idGrupo)
if (!grupoAtual) {
await reply(mess.aluguelPvGrupoNaoEncontrado(idGrupo))
return true
}
const meta = await yuta.groupMetadata(idGrupo).catch(() => grupoAtual)
const nomeGrupo = meta?.subject || grupoAtual?.subject || idGrupo
const admins = __aluguelAdminJids(meta)
if (acao === 'sair') {
await yuta.sendMessage(idGrupo, {
text: mess.aluguelGrupoSairAviso({ nomeGrupo, prefix }),
contextInfo: { ...NkChannelKk }
}).catch(() => {})
await sleep(1500)
await yuta.groupLeave(idGrupo)
__aluguelRemoverRegistrosGrupo(idGrupo)
await reply(mess.aluguelPvSaiuOk(nomeGrupo))
return true
}
await yuta.sendMessage(idGrupo, {
text: mess.aluguelGrupoAguardarAviso({ nomeGrupo, prefix, admins: admins.length }),
mentions: admins,
contextInfo: { ...NkChannelKk, mentionedJid: admins }
}).catch(() => {})
await reply(mess.aluguelPvAguardarOk(nomeGrupo, admins.length))
return true
} catch (e) {
console.log('[ALUGUEL ACAO PV]', e?.message || e)
try { await reply(mess.error()) } catch {}
return true
}
}

const __CMD_ALUGUEL_FREE = [
"alugar", "alugarbot", "alugar2", "alugarbot2",
"alugarplano",
"resgataraluguel", "resgatar_aluguel"
]

const __permitirMesmoSemAluguel = __CMD_ALUGUEL_FREE.includes(command)

if (isGroup && __aluguelModoAtivo() && !SoDono && !isGrupoAutorizado(from) && !__permitirMesmoSemAluguel) {
return
}
if (isAntiSticker && !isGroupAdmins && isBotGroupAdmins && type == 'stickerMessage') {
if (info.key.fromMe)
return;
const isAdminOrOwner = groupMembers.find(member => member.id === sender && (member.isAdmin || member.isOwner));
if (isAdminOrOwner)
return;
if (IS_DELETE) {
setTimeout(async () => {
await yuta.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender } });
}, 500);
}
if (!JSON.stringify(groupMembers).includes(sender))
return;
await yuta.groupParticipantsUpdate(from, [sender], 'remove');
}
if (Antidoc && isBotGroupAdmins && !isGroupAdmins && type == 'documentMessage') {
if (info.key.fromMe)
return;
if (isGroupAdmins)
return await yuta.sendMessage(from, { text: mess.messageProhibitedDetAdmin() }, { quoted: yt });
if (IS_DELETE) {
setTimeout(async () => {
await yuta.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender } });
}, 500);
}
if (!JSON.stringify(groupMembers).includes(sender))
return;
await yuta.groupParticipantsUpdate(from, [sender], 'remove');
}
if (isUrl(PR_String) && isAntiLinkEasy && !isGroupAdmins && !isListaBrancaG && isBotGroupAdmins && !info.key.fromMe) {
if (Procurar_String.includes("chat.whatsapp.com")) {
link_dgp = await yuta.groupInviteCode(from);
if (Procurar_String.match(link_dgp))
return reply(mess.niReply0011());
}
if (isCmd && isTrueFalse)
return;
if (IS_DELETE) {
setTimeout(async () => {
await yuta.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender } });
}, 500);
}
}
if (isAntiNotas && budy2.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi) && isBotGroupAdmins && !isGroupAdmins && !SoDono && !info.message?.reactionMessage?.text && budy2.length > 20) {
let verificar = budy2.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi);
if (verificar && budy.length < 100)
return;
if (IS_DELETE) {
setTimeout(async () => {
await yuta.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender } });
}, 500);
}
if (!JSON.stringify(groupMembers).includes(sender))
return;
await yuta.groupParticipantsUpdate(from, [sender], 'remove');
}
function remover(id, usu) {
yuta.groupParticipantsUpdate(id, [usu], "remove");
}
if (isAntiVid && isBotGroupAdmins && type == 'videoMessage') {
if (isGroupAdmins)
return await yuta.sendMessage(from, { text: mess.messageProhibitedDetAdmin() }, { quoted: yt });
if (dataGp[0].legenda_video == "0") {
await yuta.sendMessage(from, { text: mess.messageProhibitedDetUser() }, { quoted: yt });
}
else {
await yuta.sendMessage(from, { text: dataGp[0].legenda_video }, { quoted: yt });
}
if (IS_DELETE) {
setTimeout(async () => {
await yuta.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender } });
}, 500);
}
if (!JSON.stringify(groupMembers).includes(sender))
return;
await yuta.groupParticipantsUpdate(from, [sender], 'remove');
}
if (isAntiBot && isBotGroupAdmins && !isGroupAdmins && !SoDono) {
const isBotMsg = info.key.fromMe === false && (String(info.key.id || '').startsWith("BAE5") || String(info.key.id || '').startsWith("3EB0") || info.key.remoteJid === "status@broadcast" || String(info.participant || '').toLowerCase().includes("bot") || String(pushname || info.pushName || '').toLowerCase().includes("bot"));
if (isBotMsg) {
await sleep(400);
await yuta.sendMessage(from, { text: mess.messageProhibitedBot(sender), mentions: [sender], contextInfo: { ...NkChannelKk, mentionedJid: [sender] } }, { quoted: yt });
if (IS_DELETE) {
setTimeout(async () => {
await yuta.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender } });
}, 500);
}
if (!JSON.stringify(groupMembers).includes(sender))
return;
await yuta.groupParticipantsUpdate(from, [sender], 'remove');
return;
}
}
if (isAntiAudio && isBotGroupAdmins && type == 'audioMessage') {
if (isGroupAdmins)
return await yuta.sendMessage(from, { text: mess.messageProhibitedDetAdmin() }, { quoted: yt });
await yuta.sendMessage(from, { text: mess.messageProhibitedDetUser() }, { quoted: yt });
if (IS_DELETE) {
setTimeout(async () => {
await yuta.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender } });
}, 500);
}
if (!JSON.stringify(groupMembers).includes(sender))
return;
await yuta.groupParticipantsUpdate(from, [sender], 'remove');
}
if (!isGroup && isAnticall) {
yuta.ws.on('CB:call', async (B) => {
if (B.content[0].tag == 'offer') {
const numero = B.content[0].attrs['call-creator'];
await yuta.updateBlockStatus(numero, "block");
}
});
}
if (!isGroup && !isVip && !SoDono && !info.key.fromMe && isAntiPv)
return;
const VerificarJSON = (json, value) => {
if (JSON.stringify(json).includes(value))
return true;
return false;
};
const RG_SCOINS = readStore('coins', 'root', []);
const isModoCoins = isGroup ? dataGp[0].isModoCoins : undefined;
const ID_G_COINS = RG_SCOINS.findIndex(i => i.grupo === from);
const ID_USU_COINS = RG_SCOINS[ID_G_COINS]?.usus?.findIndex(i => i.id === sender);
const getGrupoCoinsAtual = () => {
let idx = RG_SCOINS.findIndex(i => i?.grupo === from);
if (idx < 0) {
RG_SCOINS.push({ grupo: from, usus: [] });
idx = RG_SCOINS.length - 1;
}
if (!Array.isArray(RG_SCOINS[idx].usus)) RG_SCOINS[idx].usus = [];
return RG_SCOINS[idx];
};
const idsCoinsJid = (jid = '') => {
const raw = jidRaw(jid);
const real = normalizar(raw || jid);
const membro = buscarMembroPorJid(raw || real || jid);
const base = [jid, raw, real, jidNum(jid), jidNum(raw), jidNum(real)];
if (membro) base.push(...idsDoMembro(membro), ...idsDoMembro(membro).map(x => normalizar(x)), ...idsDoMembro(membro).map(x => jidNum(x)));
return [...new Set(base.map(x => String(x || '').trim()).filter(Boolean))];
};
const idsUsuarioCoins = (user = {}) => {
const aliases = [
user?.id,
user?.jid,
user?.lid,
user?.phoneNumber,
user?.participant,
user?.participantAlt,
user?.senderAlt,
user?.remoteJidAlt,
...(Array.isArray(user?.ids) ? user.ids : [])
].filter(Boolean);
return [...new Set(aliases.flatMap(x => idsCoinsJid(x)))];
};
const matchCoinsJid = (a = '', b = '') => {
const A = typeof a === 'object' ? idsUsuarioCoins(a) : idsCoinsJid(a);
const B = typeof b === 'object' ? idsUsuarioCoins(b) : idsCoinsJid(b);
return A.some(x => B.includes(x));
};
const mesclarUsuarioCoins = (user, extra) => {
if (!user || !extra || user === extra) return user;
user.coins = (Number(user.coins) || 0) + (Number(extra.coins) || 0);
user.chances = { ...(extra.chances || {}), ...(user.chances || {}) };
if (!user.pet && extra.pet) user.pet = extra.pet;
if (!user.pokemon && extra.pokemon) user.pokemon = extra.pokemon;
if (!user.cidade && extra.cidade) user.cidade = extra.cidade;
if (user.cidade && extra.cidade?.casas) {
if (!Array.isArray(user.cidade.casas)) user.cidade.casas = [];
user.cidade.casas.push(...extra.cidade.casas);
}
if (!user.itens && extra.itens) user.itens = extra.itens;
if (user.itens && extra.itens) user.itens = { ...extra.itens, ...user.itens };
for (const [k, v] of Object.entries(extra)) {
if (user[k] === undefined) user[k] = v;
}
user.ids = [...new Set([...idsUsuarioCoins(user), ...idsUsuarioCoins(extra)].filter(Boolean))];
return user;
};
const getUsuarioCoins = (jid, criar = false) => {
const grupo = getGrupoCoinsAtual();
let encontrados = grupo.usus.filter(u => matchCoinsJid(u, jid));
let user = encontrados[0];
if (encontrados.length > 1) {
for (const extra of encontrados.slice(1)) mesclarUsuarioCoins(user, extra);
grupo.usus = grupo.usus.filter(u => !encontrados.slice(1).includes(u));
}
if (!user && criar) {
user = { id: normalizar(jid), ids: idsCoinsJid(jid), coins: 0, data: new Date().toLocaleDateString('pt-BR'), chances: { minerar: 0, cassino: 0 } };
grupo.usus.push(user);
}
if (user) {
const idReal = normalizar(jid || user.id);
if (idReal && !String(idReal).includes('@lid') && user.id !== idReal) user.id = idReal;
user.ids = [...new Set([...idsUsuarioCoins(user), ...idsCoinsJid(jid)].filter(Boolean))];
if (typeof user.coins !== 'number') user.coins = Number(user.coins) || 0;
if (!user.chances || typeof user.chances !== 'object') user.chances = { minerar: 0, cassino: 0 };
}
return user || null;
};
const garantirUsuarioCoins = (jid) => getUsuarioCoins(jid, true);
const alvoCoinsPorMencao = (lista = [], fallback = '') => normalizarMencaoGrupo((Array.isArray(lista) ? lista[0] : lista) || fallback || '');
const numeroCoins = (jid = '') => mentionNum(jid) || jidNum(jid) || String(jid || '').split('@')[0];
const mesmoUsuarioCoins = (a = '', b = '') => matchCoinsJid(a, b);
const zerarCoinsUsuario = (jid = '') => {
const user = getUsuarioCoins(jid, false);
if (!user) return null;
user.coins = 0;
const grupo = getGrupoCoinsAtual();
for (const u of grupo.usus) {
if (u !== user && matchCoinsJid(u, jid)) u.coins = 0;
}
return user;
};
function CoinsUpdate(index) {
writeStore('coins', 'root', Array.isArray(index) ? index : []);
}
const SYSTEM_COIN = {
AdicionarCoins: async function (user, quant) {
CoinsUser_ = garantirUsuarioCoins(user);
CoinsUser_["coins"] += quant;
CoinsUpdate(RG_SCOINS);
},
transferCoins: async function (transferidor, recebidor, quantidade) {
DM_ = getUsuarioCoins(transferidor, false);
DM_2 = getUsuarioCoins(recebidor, false);
if (!DM_)
return mention(mess.niCoinsUsuarioNaoRegistrado({ e0: () => (transferidor.split("@")[0]) }));
if ((DM_?.coins || 0) < quantidade)
return mention(mess.niCoinsSaldoInsuficiente({ e0: () => (recebidor.split("@")[0]) }));
if (!DM_2)
return mention(mess.niCoinsUsuarioNaoRegistrado({ e0: () => (recebidor.split("@")[0]) }));
DM_["coins"] -= quantidade;
DM_2["coins"] += quantidade;
CoinsUpdate(RG_SCOINS);
},
Adicionar_2: async function (A, Q, X, X2) {
DM_ = garantirUsuarioCoins(A);
DM_["coins"] += Q;
DM_[X] = X2;
CoinsUpdate(RG_SCOINS);
},
RemoverCoins: async function (user, quant) {
CoinsUser = getUsuarioCoins(user, false);
if (!CoinsUser)
return reply(mess.niReply0014());
if ((CoinsUser?.coins || 0) < quant)
return reply(mess.niReply0015({ e0: () => (CoinsUser?.coins), e1: () => (quant) }));
CoinsUser["coins"] -= quant;
CoinsUpdate(RG_SCOINS);
},
VerificarCampo: function (user, parameter) {
return getUsuarioCoins(user, false)?.[parameter] || null;
},
};
if (isModoCoins && isGroup && isBotGroupAdmins && VRF_JSON_GRUPO && !info.key.fromMe) {
getGrupoCoinsAtual();
if (!getUsuarioCoins(sender, false)) {
garantirUsuarioCoins(sender);
CoinsUpdate(RG_SCOINS);
}
if (!info.message?.reactionMessage?.text && dattofc != SYSTEM_COIN.VerificarCampo(sender, "data")) {
await mention(mess.coins(tempo, sender, prefix));
await SYSTEM_COIN.Adicionar_2(sender, 50, "data", dattofc);
RG_US = garantirUsuarioCoins(sender);
Object.assign(RG_US.chances, { "cassino": 0, "minerar": 0 });
CoinsUpdate(RG_SCOINS);
}
}
if (isGroup && fs.existsSync(`./src/dados/grupos/games/anagrama/${from}.json`)) {
let dataA = JSON.parse(fs.readFileSync(`./src/dados/grupos/games/anagrama/${from}.json`));
if (budy.slice(0, 4).toUpperCase() == dataA.palavraOriginal.slice(0, 4).toUpperCase() && budy.toUpperCase() != dataA.palavraOriginal)
return reply(mess.niReply0016());
if (budy.toUpperCase() == dataA.palavraOriginal) {
await yuta.sendMessage(from, { text: mess.acert(pushname, dataA, resposta) }, { "mentionedJid": [sender] }, { quoted: yt });
await SYSTEM_COIN.AdicionarCoins(sender, 5);
fs.unlinkSync(`./src/dados/grupos/games/anagrama/${from}.json`);
setTimeout(async () => {
fs.writeFileSync(`./src/dados/grupos/games/anagrama/${from}.json`, `${JSON.stringify(palavrasANA[Math.floor(Math.random() * palavrasANA.length)])}`);
dataAB = JSON.parse(fs.readFileSync(`./src/dados/grupos/games/anagrama/${from}.json`));
yuta.sendMessage(from, { text: mess.anagrama(shuffle, dataAB) }, { quoted: yt });
}, 5000);
}
}
if (isGroup && fs.existsSync(`./src/dados/grupos/games/quiz-animais/${from}.json`)) {
let dQ = JSON.parse(fs.readFileSync(`./src/dados/grupos/games/quiz-animais/${from}.json`));
if (budy.slice(0, 4).toUpperCase() == dQ.original.slice(0, 4).toUpperCase() && budy.toUpperCase() != dQ.original)
return reply(mess.niReply0017());
if (budy.toUpperCase() == dQ.original) {
await yuta.sendMessage(from, { text: mess.quizaC(pushname, dQ) }, { "mentionedJid": [sender] }, { quoted: yt });
await SYSTEM_COIN.AdicionarCoins(sender, 5);
fs.unlinkSync(`./src/dados/grupos/games/quiz-animais/${from}.json`);
setTimeout(async () => {
fs.writeFileSync(`./src/dados/grupos/games/quiz-animais/${from}.json`, `${JSON.stringify(quizanimais[Math.floor(Math.random() * quizanimais.length)])}`);
dataQA = JSON.parse(fs.readFileSync(`./src/dados/grupos/games/quiz-animais/${from}.json`));
wew = await getBuffer(dataQA.foto);
await yuta.sendMessage(from, { image: wew, caption: mess.niText1415({ e0: () => (dataQA.question) }) }, { quoted: yt });
}, 5000);
}
}
if (isGroup && fs.existsSync(`./src/dados/grupos/games/quiz-futebol/${from}.json`)) {
let dQF = JSON.parse(fs.readFileSync(`./src/dados/grupos/games/quiz-futebol/${from}.json`));
if (budy.slice(0, 4).toUpperCase() == dQF.resposta.slice(0, 4).toUpperCase() && budy.toUpperCase() != dQF.resposta)
return reply(mess.niReply0018());
if (budy.toUpperCase() == dQF.resposta) {
await yuta.sendMessage(from, { text: mess.quizC(pushname, dQF) }, { "mentionedJid": [sender] }, { quoted: yt });
await SYSTEM_COIN.AdicionarCoins(sender, 5);
fs.unlinkSync(`./src/dados/grupos/games/quiz-futebol/${from}.json`);
setTimeout(async () => {
fs.writeFileSync(`./src/dados/grupos/games/quiz-futebol/${from}.json`, `${JSON.stringify(quizFutebol[Math.floor(Math.random() * quizFutebol.length)])}`);
dataQF = JSON.parse(fs.readFileSync(`./src/dados/grupos/games/quiz-futebol/${from}.json`));
await yuta.sendMessage(from, { text: mess.quizfut(dataQF) }, { quoted: yt });
}, 5000);
}
}
if (isGroup && fs.existsSync(`./src/dados/grupos/games/gartic/${from}.json`)) {
let perg_gartic = JSON.parse(fs.readFileSync(`./src/dados/grupos/games/gartic/${from}.json`));
if (budy.slice(0, 4).toUpperCase() == perg_gartic.resposta.slice(0, 4).toUpperCase() && budy.toUpperCase() != perg_gartic.resposta)
return reply(mess.niReply0019());
if (budy.toUpperCase() == perg_gartic.resposta) {
await yuta.sendMessage(from, { text: mess.descorbert(pushname) }, { "mentionedJid": [sender] }, { quoted: yt });
await SYSTEM_COIN.AdicionarCoins(sender, 5);
fs.unlinkSync(`./src/dados/grupos/games/gartic/${from}.json`);
setTimeout(async () => {
fs.writeFileSync(`./src/dados/grupos/games/gartic/${from}.json`, `${JSON.stringify(garticArchives[Math.floor(Math.random() * garticArchives.length)])}`);
let dataGartic2 = JSON.parse(fs.readFileSync(`./src/dados/grupos/games/gartic/${from}.json`));
garticText = mess.gartic(dataGartic2, prefix);
wew = await getBuffer(`${dataGartic2.imagem}`);
await yuta.sendMessage(from, { image: wew, caption: garticText }, { quoted: yt });
}, 5000);
}
}
if (isGroup && fs.existsSync(`./src/dados/grupos/games/enigma/${from}.json`)) {
let enigmaData = JSON.parse(fs.readFileSync(`./src/dados/grupos/games/enigma/${from}.json`));
if (budy.slice(0, 4).toUpperCase() == enigmaData.respostaEne.slice(0, 4).toUpperCase() && budy.toUpperCase() != enigmaData.respostaEne)
return reply(mess.niReply0020());
if (budy.toUpperCase() == enigmaData.respostaEne) {
yuta.sendMessage(from, { text: mess.respostaE(pushname) }, { "mentionedJid": [sender] }, { quoted: yt });
await SYSTEM_COIN.AdicionarCoins(sender, 5);
fs.unlinkSync(`./src/dados/grupos/games/enigma/${from}.json`);
setTimeout(async () => {
fs.writeFileSync(`./src/dados/grupos/games/enigma/${from}.json`, `${JSON.stringify(enigmaArchive[Math.floor(Math.random() * enigmaArchive.length)])}`);
enigmaD = JSON.parse(fs.readFileSync(`./src/dados/grupos/games/enigma/${from}.json`));
enigmaTezt = mess.respondeE(enigmaD, prefix);
wew = await getBuffer(rvenigma);
await yuta.sendMessage(from, { image: wew, caption: enigmaTezt }, { quoted: yt });
}, 5000);
}
}
if (isGroup && fs.existsSync(`./src/dados/grupos/games/wmusic/${from}.json`)) {
whatMusic = JSON.parse(fs.readFileSync(`./src/dados/grupos/games/wmusic/${from}.json`));
if (budy.slice(0, 4).toUpperCase() == whatMusic.resposta.slice(0, 4).toUpperCase() && budy.toUpperCase() != whatMusic.resposta)
return reply(mess.niReply0021());
if (budy.toUpperCase() == whatMusic.resposta) {
yuta.sendMessage(from, { text: mess.whatmusic(whatMusic, pushname) }, { "mentionedJid": [sender] }, { quoted: yt });
fs.unlinkSync(`./src/dados/grupos/games/wmusic/${from}.json`);
setTimeout(async () => {
fs.writeFileSync(`./src/dados/grupos/games/wmusic/${from}.json`, `${JSON.stringify(whatMusicAr[Math.floor(Math.random() * whatMusicAr.length)])}`);
wmusic = JSON.parse(fs.readFileSync(`./src/dados/grupos/games/wmusic/${from}.json`));
textM = mess.wmusic(wmusic, II);
await yuta.sendMessage(from, { text: textM }, { quoted: yt });
}, 5000);
}
}
const POKEMON_IMAGENS = {
pikachu: 'https://raw.githubusercontent.com/dylanModz/uploads/main/midias/imagens/1837nvjt1.jpg',
bulbasaur: 'https://raw.githubusercontent.com/dylanModz/uploads/main/midias/imagens/062fn5t92.jpg',
squirtle: 'https://raw.githubusercontent.com/dylanModz/uploads/main/midias/imagens/106nu977l.jpg',
charmander: 'https://raw.githubusercontent.com/dylanModz/uploads/main/midias/imagens/5669cblbc.jpg',
eevee: 'https://raw.githubusercontent.com/dylanModz/uploads/main/midias/imagens/136lmdtd6.jpg',
charizard: 'https://raw.githubusercontent.com/dylanModz/uploads/main/midias/imagens/8301ggsza.jpg',
snorlax: 'https://raw.githubusercontent.com/dylanModz/uploads/main/midias/imagens/885bzrzwx.jpg',
lucario: 'https://raw.githubusercontent.com/dylanModz/uploads/main/midias/imagens/9305fihb8.jpg',
gengar: 'https://raw.githubusercontent.com/dylanModz/uploads/main/midias/imagens/035jtj0ww.jpg',
greninja: 'https://raw.githubusercontent.com/dylanModz/uploads/main/midias/imagens/2802c92sc.jpg',
mewtwo: 'https://raw.githubusercontent.com/dylanModz/uploads/main/midias/imagens/2965904ap.jpg',
dragonite: 'https://raw.githubusercontent.com/dylanModz/uploads/main/midias/imagens/628ct29cy.jpg',
umbreon: 'https://raw.githubusercontent.com/dylanModz/uploads/main/midias/imagens/111pmwhv4.jpg',
blastoise: 'https://raw.githubusercontent.com/dylanModz/uploads/main/midias/imagens/2348zh23f.jpg',
venusaur: 'https://raw.githubusercontent.com/dylanModz/uploads/main/midias/imagens/436ksompt.jpg'
};
const POKEMON_DADOS = {
pikachu: {
nome: 'Pikachu',
tipo: 'Elétrico',
raridade: 'comum',
preco: 3000,
evoluiPara: 'raichu',
nivelEvolucao: 12,
habilidade: '⚡ Chance extra de achar coins em eventos'
},
bulbasaur: {
nome: 'Bulbasaur',
tipo: 'Planta',
raridade: 'comum',
preco: 2500,
evoluiPara: 'venusaur',
nivelEvolucao: 16,
habilidade: '🌿 Recupera fome com mais facilidade'
},
squirtle: {
nome: 'Squirtle',
tipo: 'Água',
raridade: 'comum',
preco: 2500,
evoluiPara: 'blastoise',
nivelEvolucao: 16,
habilidade: '💧 Missões mais estáveis'
},
charmander: {
nome: 'Charmander',
tipo: 'Fogo',
raridade: 'comum',
preco: 2800,
evoluiPara: 'charizard',
nivelEvolucao: 16,
habilidade: '🔥 Ganha mais XP em batalhas'
},
eevee: {
nome: 'Eevee',
tipo: 'Normal',
raridade: 'comum',
preco: 4500,
evoluiPara: 'umbreon',
nivelEvolucao: 18,
habilidade: '🌙 Afinidade sobe mais rápido'
},
charizard: {
nome: 'Charizard',
tipo: 'Fogo/Voador',
raridade: 'raro',
preco: 22000,
habilidade: '🔥 Bônus alto em batalha'
},
snorlax: {
nome: 'Snorlax',
tipo: 'Normal',
raridade: 'raro',
preco: 21000,
habilidade: '😴 Resiste mais tempo sem comida'
},
lucario: {
nome: 'Lucario',
tipo: 'Lutador/Aço',
raridade: 'raro',
preco: 28000,
habilidade: '🥊 Dá bônus em batalha e missão'
},
gengar: {
nome: 'Gengar',
tipo: 'Fantasma',
raridade: 'raro',
preco: 30000,
habilidade: '👻 Pode assustar rivais em eventos'
},
greninja: {
nome: 'Greninja',
tipo: 'Água/Sombrio',
raridade: 'raro',
preco: 32000,
habilidade: '🌊 Missões furtivas mais lucrativas'
},
mewtwo: {
nome: 'Mewtwo',
tipo: 'Psíquico',
raridade: 'lendario',
preco: 50000,
habilidade: '🧠 Altíssimo poder em tudo'
},
dragonite: {
nome: 'Dragonite',
tipo: 'Dragão/Voador',
raridade: 'lendario',
preco: 42000,
habilidade: '🐉 Retorna mais coins nas missões'
},
umbreon: {
nome: 'Umbreon',
tipo: 'Sombrio',
raridade: 'evoluido',
preco: 15000,
habilidade: '🌑 Afinidade e defesa elevadas'
},
blastoise: {
nome: 'Blastoise',
tipo: 'Água',
raridade: 'evoluido',
preco: 14000,
habilidade: '💦 Muito resistente'
},
venusaur: {
nome: 'Venusaur',
tipo: 'Planta/Veneno',
raridade: 'evoluido',
preco: 14000,
habilidade: '🍃 Equilibrado em fome e XP'
},
raichu: {
nome: 'Raichu',
tipo: 'Elétrico',
raridade: 'evoluido',
preco: 15000,
habilidade: '⚡ Eventos com bônus'
}
};
const POKEMON_COMIDAS = {
berry: { nome: '🍓 Berry', preco: 250, fome: 25, tipos: ['pikachu', 'bulbasaur', 'squirtle', 'charmander', 'eevee', 'umbreon'] },
superberry: { nome: '🫐 Super Berry', preco: 500, fome: 45, tipos: ['pikachu', 'bulbasaur', 'squirtle', 'charmander', 'eevee', 'umbreon', 'raichu'] },
racaoagua: { nome: '💧 Ração Aquática', preco: 700, fome: 60, tipos: ['squirtle', 'greninja', 'blastoise'] },
racaofogo: { nome: '🔥 Ração Flamejante', preco: 800, fome: 60, tipos: ['charmander', 'charizard'] },
racaoplanta: { nome: '🌿 Ração Natural', preco: 700, fome: 60, tipos: ['bulbasaur', 'venusaur'] },
racaolutador: { nome: '🥊 Ração de Combate', preco: 1200, fome: 70, tipos: ['lucario'] },
sonifero: { nome: '😴 Sonífero Deluxe', preco: 1500, fome: 80, tipos: ['snorlax'] },
sombrio: { nome: '🌑 Essência Sombria', preco: 1800, fome: 70, tipos: ['gengar', 'umbreon', 'greninja'] },
mente: { nome: '🧠 Cápsula Mental', preco: 2500, fome: 90, tipos: ['mewtwo'] },
dragao: { nome: '🐉 Banquete do Dragão', preco: 2200, fome: 85, tipos: ['dragonite'] }
};
const POKEMON_RAROS = ['charizard', 'snorlax', 'lucario', 'gengar', 'greninja'];
const POKEMON_LENDARIOS = ['mewtwo', 'dragonite'];
const POKEMON_NAO_EVOLUTIVOS = ['charizard', 'snorlax', 'lucario', 'gengar', 'greninja', 'mewtwo', 'dragonite', 'umbreon', 'blastoise', 'venusaur', 'raichu'];
function getGrupoCoinsPokemon() {
return getGrupoCoinsAtual();
}
function getUsuarioCoinsPokemon(jid) {
return garantirUsuarioCoins(jid);
}
function getPokemonRaridade(tipo) {
if (POKEMON_LENDARIOS.includes(tipo))
return 'Lendário';
if (POKEMON_RAROS.includes(tipo))
return 'Raro';
if (['umbreon', 'blastoise', 'venusaur', 'raichu'].includes(tipo))
return 'Evoluído';
return 'Comum';
}
function getPokemonImagem(tipo) {
return POKEMON_IMAGENS[tipo] || 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png';
}
function getPokemonNome(tipo) {
return POKEMON_DADOS[tipo]?.nome || String(tipo || '').toUpperCase();
}
function formatarTempoRestante(ms) {
const totalSeg = Math.max(0, Math.floor(ms / 1000));
const h = Math.floor(totalSeg / 3600);
const m = Math.floor((totalSeg % 3600) / 60);
const s = totalSeg % 60;
return `${h}h ${m}m ${s}s`;
}
const CIDADE_TRABALHOS = {
desempregado: { nome: 'Desempregado', min: 0, max: 0, emoji: '😴' },
motorista: { nome: 'Motorista de App', min: 120, max: 260, emoji: '🚕' },
entregador: { nome: 'Entregador', min: 90, max: 220, emoji: '📦' },
programador: { nome: 'Programador', min: 180, max: 350, emoji: '💻' },
mecanico: { nome: 'Mecânico', min: 140, max: 280, emoji: '🛠️' },
policial: { nome: 'Policial', min: 150, max: 300, emoji: '👮' },
medico: { nome: 'Médico', min: 220, max: 420, emoji: '🩺' },
empresario: { nome: 'Empresário', min: 260, max: 520, emoji: '🏢' },
streamer: { nome: 'Streamer', min: 80, max: 450, emoji: '🎥' },
cozinheiro: { nome: 'Cozinheiro', min: 120, max: 260, emoji: '🍳' },
seguranca: { nome: 'Segurança', min: 140, max: 290, emoji: '🛡️' },
taxista: { nome: 'Taxista', min: 110, max: 240, emoji: '🚖' }
};
const CIDADE_CASAS = {
kitnet: { nome: 'Kitnet', preco: 5000, bonus: 5, emoji: '🏚️' },
apartamento: { nome: 'Apartamento', preco: 15000, bonus: 12, emoji: '🏢' },
casa: { nome: 'Casa', preco: 30000, bonus: 20, emoji: '🏠' },
condominio: { nome: 'Casa em Condomínio', preco: 55000, bonus: 30, emoji: '🏡' },
mansao: { nome: 'Mansão', preco: 85000, bonus: 40, emoji: '🏰' }
};
const CIDADE_VEICULOS = {
bike: { nome: 'Bike', preco: 2500, bonus: 5, combustivelMax: 0, emoji: '🚲' },
moto: { nome: 'Moto', preco: 12000, bonus: 12, combustivelMax: 100, emoji: '🏍️' },
carro: { nome: 'Carro', preco: 35000, bonus: 25, combustivelMax: 120, emoji: '🚗' },
caminhonete: { nome: 'Caminhonete', preco: 65000, bonus: 35, combustivelMax: 140, emoji: '🛻' },
esportivo: { nome: 'Esportivo', preco: 50000, bonus: 50, combustivelMax: 160, emoji: '🏎️' }
};
const CIDADE_LOJA = {
celular: { nome: 'Celular', preco: 1800, emoji: '📱' },
notebook: { nome: 'Notebook', preco: 6500, emoji: '💻' },
terno: { nome: 'Terno', preco: 2200, emoji: '👔' },
relogio: { nome: 'Relógio', preco: 3000, emoji: '⌚' },
joia: { nome: 'Joia', preco: 5000, emoji: '💎' },
colete: { nome: 'Colete', preco: 7000, emoji: '🦺' },
ferramenta: { nome: 'Kit de Ferramentas', preco: 3500, emoji: '🧰' },
vara: { nome: 'Vara de Pesca', preco: 2800, emoji: '🎣' },
gps: { nome: 'GPS', preco: 2500, emoji: '🧭' },
computador: { nome: 'Computador Gamer', preco: 12000, emoji: '🖥️' },
camera: { nome: 'Câmera', preco: 7200, emoji: '📸' }
};
const CIDADE_COMIDAS = {
lanche: { nome: 'Lanche', preco: 150, fome: 20, saude: 0, emoji: '🍔' },
pizza: { nome: 'Pizza', preco: 300, fome: 35, saude: 5, emoji: '🍕' },
almoco: { nome: 'Almoço Executivo', preco: 450, fome: 45, saude: 10, emoji: '🍛' },
saudavel: { nome: 'Prato Saudável', preco: 700, fome: 40, saude: 20, emoji: '🥗' },
luxo: { nome: 'Jantar de Luxo', preco: 1500, fome: 60, saude: 30, emoji: '🍽️' }
};
const CIDADE_EMPRESAS = {
lanchonete: { nome: 'Lanchonete', preco: 25000, lucroMin: 500, lucroMax: 1200, emoji: '🍔' },
oficina: { nome: 'Oficina', preco: 40000, lucroMin: 700, lucroMax: 1600, emoji: '🔧' },
loja: { nome: 'Loja de Acessórios', preco: 55000, lucroMin: 900, lucroMax: 2200, emoji: '🛍️' },
studio: { nome: 'Studio Gamer', preco: 80000, lucroMin: 1200, lucroMax: 2800, emoji: '🎮' }
};
const CIDADE_BAIRROS = {
centro: { nome: 'Centro', bonus: 5, emoji: '🏙️' },
nobre: { nome: 'Bairro Nobre', bonus: 12, emoji: '🏡' },
industrial: { nome: 'Distrito Industrial', bonus: 10, emoji: '🏭' },
praia: { nome: 'Orla da Praia', bonus: 8, emoji: '🏖️' },
suburbio: { nome: 'Subúrbio', bonus: 6, emoji: '🏘️' },
favela: { nome: 'Comunidade', bonus: 4, emoji: '🏚️' },
universitario: { nome: 'Bairro Universitário', bonus: 9, emoji: '🎓' },
comercial: { nome: 'Setor Comercial', bonus: 11, emoji: '🏬' }
};
function cidadeNomeBairro(id) {
return CIDADE_BAIRROS[id]?.nome || 'Centro';
}
function getGrupoCidade() {
return getGrupoCoinsAtual();
}
function getUsuarioCidade(jid) {
const grupo = getGrupoCidade();
let user = garantirUsuarioCoins(jid);
if (!user.cidade) {
user.cidade = {
nome: null,
cargo: 'Desempregado',
idCargo: 'desempregado',
bairro: 'centro',
reputacao: 0,
energia: 100,
fome: 100,
saude: 100,
nivel: 1,
xp: 0,
saldoBanco: 0,
ultimaColeta: 0,
ultimoTrabalho: 0,
ultimoCrime: 0,
ultimaCorrida: 0,
ultimaPesca: 0,
ultimaComida: 0,
ultimoDescanso: 0,
ultimoLucroEmpresa: 0,
presoAte: 0,
inventario: {},
casa: null,
veiculo: null,
combustivel: 0,
durabilidadeVeiculo: 100,
empresa: null,
parceiro: null,
aluguelAtivo: null,
hospitalUltimo: 0,
ultimoAssaltoPlayer: 0,
casas: []
};
}
if (!user.cidade || typeof user.cidade !== 'object') {
user.cidade = {
nome: null,
cargo: 'Desempregado',
idCargo: 'desempregado',
bairro: 'centro',
reputacao: 0,
energia: 100,
fome: 100,
saude: 100,
nivel: 1,
xp: 0,
saldoBanco: 0,
ultimaColeta: 0,
ultimoTrabalho: 0,
ultimoCrime: 0,
ultimaCorrida: 0,
ultimaPesca: 0,
ultimaComida: 0,
ultimoDescanso: 0,
ultimoLucroEmpresa: 0,
presoAte: 0,
inventario: {},
casa: null,
veiculo: null,
combustivel: 0,
durabilidadeVeiculo: 100,
empresa: null,
parceiro: null,
aluguelAtivo: null,
hospitalUltimo: 0,
ultimoAssaltoPlayer: 0,
casas: []
};
}
if (!Array.isArray(user.cidade.casas)) user.cidade.casas = [];
if (user.cidade.casa && CIDADE_CASAS[user.cidade.casa] && !user.cidade.casas.some(c => c?.id === user.cidade.casa)) {
user.cidade.casas.push({ id: user.cidade.casa, compradoEm: Date.now(), aluguelAtivo: user.cidade.aluguelAtivo || null });
}
user.cidade.casas = user.cidade.casas.filter(c => c && CIDADE_CASAS[c.id]).map(c => ({ id: c.id, compradoEm: c.compradoEm || Date.now(), aluguelAtivo: c.aluguelAtivo || null }));
if (!user.cidade.casa && user.cidade.casas.length) user.cidade.casa = user.cidade.casas[user.cidade.casas.length - 1].id;
if (!user.cidade.bairro)
user.cidade.bairro = 'centro';
if (!user.cidade.inventario)
user.cidade.inventario = {};
if (typeof user.cidade.reputacao !== 'number')
user.cidade.reputacao = 0;
if (typeof user.cidade.energia !== 'number')
user.cidade.energia = 100;
if (typeof user.cidade.fome !== 'number')
user.cidade.fome = 100;
if (typeof user.cidade.saude !== 'number')
user.cidade.saude = 100;
if (typeof user.cidade.nivel !== 'number')
user.cidade.nivel = 1;
if (typeof user.cidade.xp !== 'number')
user.cidade.xp = 0;
if (typeof user.cidade.saldoBanco !== 'number')
user.cidade.saldoBanco = 0;
if (typeof user.cidade.combustivel !== 'number')
user.cidade.combustivel = 0;
if (typeof user.cidade.durabilidadeVeiculo !== 'number')
user.cidade.durabilidadeVeiculo = 100;
if (typeof user.cidade.presoAte !== 'number')
user.cidade.presoAte = 0;
if (typeof user.cidade.hospitalUltimo !== 'number')
user.cidade.hospitalUltimo = 0;
if (typeof user.cidade.ultimoAssaltoPlayer !== 'number')
user.cidade.ultimoAssaltoPlayer = 0;
return user;
}
function cidadeTempo(ms) {
const total = Math.max(0, Math.floor(ms / 1000));
const h = Math.floor(total / 3600);
const m = Math.floor((total % 3600) / 60);
const s = total % 60;
return `${h}h ${m}m ${s}s`;
}
function cidadeXpUp(cidade) {
if (!cidade)
return;
if (typeof cidade.nivel !== 'number')
cidade.nivel = 1;
if (typeof cidade.xp !== 'number')
cidade.xp = 0;
while (cidade.xp >= cidade.nivel * 100) {
cidade.xp -= cidade.nivel * 100;
cidade.nivel += 1;
}
if (cidade.nivel < 1)
cidade.nivel = 1;
if (cidade.xp < 0)
cidade.xp = 0;
}
function cidadeCasasLista(cidade = {}) {
if (!Array.isArray(cidade.casas)) cidade.casas = [];
if (cidade.casa && CIDADE_CASAS[cidade.casa] && !cidade.casas.some(c => c?.id === cidade.casa)) {
cidade.casas.push({ id: cidade.casa, compradoEm: Date.now(), aluguelAtivo: cidade.aluguelAtivo || null });
}
cidade.casas = cidade.casas.filter(c => c && CIDADE_CASAS[c.id]).map(c => ({ id: c.id, compradoEm: c.compradoEm || Date.now(), aluguelAtivo: c.aluguelAtivo || null }));
if (!cidade.casa && cidade.casas.length) cidade.casa = cidade.casas[cidade.casas.length - 1].id;
return cidade.casas;
}
function cidadeBonusMoradia(cidade) {
const casas = cidadeCasasLista(cidade);
return casas.reduce((total, item) => total + (CIDADE_CASAS[item.id]?.bonus || 0), 0);
}
function cidadeBonusVeiculo(cidade) {
return (cidade.veiculo && CIDADE_VEICULOS[cidade.veiculo]) ? CIDADE_VEICULOS[cidade.veiculo].bonus : 0;
}
function cidadePodeDirigir(cidade) {
if (!cidade.veiculo || !CIDADE_VEICULOS[cidade.veiculo])
return false;
if (CIDADE_VEICULOS[cidade.veiculo].combustivelMax <= 0)
return true;
if ((cidade.combustivel || 0) <= 0)
return false;
if ((cidade.durabilidadeVeiculo || 0) <= 0)
return false;
return true;
}
function cidadeNomeCasa(id) {
return CIDADE_CASAS[id]?.nome || 'Nenhuma';
}
function cidadeResumoCasas(cidade = {}) {
const casas = cidadeCasasLista(cidade);
if (!casas.length) return 'Nenhuma';
const resumo = casas.reduce((acc, item) => {
acc[item.id] = (acc[item.id] || 0) + 1;
return acc;
}, {});
return Object.entries(resumo).map(([id, qtd]) => `${cidadeNomeCasa(id)}${qtd > 1 ? ` x${qtd}` : ''}`).join(', ');
}
function cidadeNomeVeiculo(id) {
return CIDADE_VEICULOS[id]?.nome || 'Nenhum';
}
function cidadeEstaPreso(cidade) {
return (cidade.presoAte || 0) > Date.now();
}
function cidadePatrimonio(user) {
return (user.coins || 0) + (user.cidade?.saldoBanco || 0);
}
const cidadeDefault = () => ({ nome: null, cargo: 'Desempregado', idCargo: 'desempregado', bairro: 'centro', reputacao: 0, energia: 100, fome: 100, saude: 100, nivel: 1, xp: 0, saldoBanco: 0, ultimaColeta: 0, ultimoTrabalho: 0, ultimoCrime: 0, ultimaCorrida: 0, ultimaPesca: 0, presoAte: 0, inventario: {}, casa: null, veiculo: null, combustivel: 0, durabilidadeVeiculo: 100, empresa: null, parceiro: null });
const getUsuarioCidade2 = (id = sender) => { const u = (RG_SCOINS[ID_G_COINS]?.usus || []).find(u => u.id === id); if (!u.cidade || typeof u.cidade !== 'object')
u.cidade = cidadeDefault(); u.cidade = { ...cidadeDefault(), ...u.cidade }; return u; };
if (isX9VisuUnica) {
if (info.message?.viewOnceMessageV2 || type === "viewOnceMessage") {
let px;
if (JSON.stringify(info).includes("videoMessage")) {
px = info.message?.viewOnceMessageV2?.message?.videoMessage ||
info.message?.viewOnceMessage?.message?.videoMessage;
if (px) {
px.viewOnce = false;
px.video = { url: px.url };
px.caption = (px.caption || "") + "\n\n";
await yuta.sendMessage(from, px, { quoted: yt });
}
}
else if (JSON.stringify(info).includes("imageMessage")) {
px = info.message?.viewOnceMessageV2?.message?.imageMessage ||
info.message?.viewOnceMessage?.message?.imageMessage;
if (px) {
px.viewOnce = false;
px.image = { url: px.url };
px.caption = (px.caption || "") + "\n\n";
await yuta.sendMessage(from, px, { quoted: yt });
}
}
else if (JSON.stringify(info).includes("audioMessage") ||
info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.viewOnceMessageV2Extension?.message?.audioMessage) {
let audio = info.message?.viewOnceMessageV2?.message?.audioMessage ||
info.message?.viewOnceMessage?.message?.audioMessage;
if (audio && audio.mimetype) {
let buffAudio = await getFileBuffer(audio, 'audio');
let audioFile = getRandom('.mp3');
fs.writeFileSync(audioFile, buffAudio);
let audioBuffer = fs.readFileSync(audioFile);
await yuta.sendMessage(from, {
audio: audioBuffer,
mimetype: 'audio/mpeg',
ptt: false
}, { quoted: yt });
fs.rmSync(audioFile);
}
}
}
}
let horarios = {};
const horariosPath = './src/tictactoe/grupo.json';
if (fs.existsSync(horariosPath)) {
try {
horarios = JSON.parse(fs.readFileSync(horariosPath));
}
catch (e) {
console.error(mess.niConsole009(), e);
horarios = {};
}
}
const salvarHorarios = () => {
fs.writeFileSync(horariosPath, JSON.stringify(horarios, null, 2));
};
const definirFechamento = (from, horario) => {
horarios[from] = horarios[from] || {};
horarios[from].fechamento = horario;
salvarHorarios();
};
const definirAbertura = (from, horario) => {
horarios[from] = horarios[from] || {};
horarios[from].abertura = horario;
salvarHorarios();
};
const removerHorarios = (from) => {
if (horarios[from]) {
delete horarios[from];
salvarHorarios();
}
};
let ultimaExecucao = {};
if (global.intervalHorarios)
clearInterval(global.intervalHorarios);
global.intervalHorarios = setInterval(async () => {
const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss');
if (fs.existsSync(horariosPath)) {
try {
horarios = JSON.parse(fs.readFileSync(horariosPath));
}
catch (e) {
console.error(e);
horarios = {};
}
}
for (const from in horarios) {
const horario = horarios[from];
if (!horario)
continue;
try {
if (horario.fechamento && time2 === horario.fechamento) {
if (ultimaExecucao[from + '_fechamento'] !== horario.fechamento) {
await yuta.groupSettingUpdate(from, 'announcement');
let ppUrl;
try {
ppUrl = await yuta.profilePictureUrl(from, 'image');
}
catch {
ppUrl = semimg;
}
await yuta.sendMessage(from, {
image: { url: ppUrl },
caption: mess.fechamento()
});
ultimaExecucao[from + '_fechamento'] = horario.fechamento;
}
}
if (horario.abertura && time2 === horario.abertura) {
if (ultimaExecucao[from + '_abertura'] !== horario.abertura) {
await yuta.groupSettingUpdate(from, 'not_announcement');
let ppUrl;
try {
ppUrl = await yuta.profilePictureUrl(from, 'image');
}
catch {
ppUrl = semimg;
}
await yuta.sendMessage(from, {
image: { url: ppUrl },
caption: mess.abertura()
});
ultimaExecucao[from + '_abertura'] = horario.abertura;
}
}
}
catch (e) {
console.error(e);
}
}
}, 1000);
async function sendMenu(from, yt, opt = {}) {
const { reaction = "⚡", caption = mess.error(), isGroupRequired = false, isAdminRequired = false, isOwnerRequired = false, isModoCoinsRequired = false, isModoBnRequired = false, sendAudio = false, mentionedJid = [] } = opt;
try {
reagir(from, reaction);
if (isGroupRequired && !isGroup)
return reply(mess.onlyGroup());
if (isAdminRequired && !isGroupAdmins && !SoDono)
return reply(mess.onlyAdmins());
if (isOwnerRequired && !SoDono)
return reply(mess.onlyOwner());
if (isModoCoinsRequired && !isModoCoins)
return reply(mess.niReply0022({ e0: () => (prefix) }));
if (isModoBnRequired && !isModobn)
return reply(mess.onlyGroupFun(prefix));
if (sendAudio && isAudioMenu)
await sendAudioMenu(from);
const midia = carregarMidia("fotomenu");
const msg = { caption, contextInfo: { ...NkChannelKk, mentionedJid } };
if (midia.type === "video") {
msg.video = midia.data;
msg.gifPlayback = true;
}
else if (midia.type === "image") {
msg.image = midia.data;
}
else {
msg.text = caption;
}
await yuta.sendMessage(from, msg, { quoted: yt });
}
catch (e) {
console.error(e);
await yuta.sendMessage(from, {
text: caption,
contextInfo: { ...NkChannelKk, mentionedJid }
}, { quoted: yt });
}
}
if (isAutoDl && isGroup && !info.key.fromMe && typeof body === 'string' && !body.startsWith(prefix)) {
const tiktok = body.match(/https?:\/\/(?:www\.|vm\.|vt\.)?tiktok\.com\/[^\s]+/i);
if (tiktok) {
try {
const link = tiktok[0];
let dataImg = null;
try { dataImg = await api.downloads.tiktok_foto(link); } catch {}
if (dataImg?.status && dataImg?.total > 0) {
const total = dataImg.total;
const limite = Math.min(total, 100);
const itensAlbum = [];
for (let i = 1; i <= limite; i++) {
const imgUrl = dataImg.resultado?.[`image${i}`];
if (!imgUrl)
continue;
itensAlbum.push({
type: 'image',
media: { url: imgUrl },
caption: mess.niText1261({ e0: () => (i), e1: () => (total) })
});
}
if (itensAlbum.length) {
await enviarAlbumNativo(from, itensAlbum, y);
return;
}
}
await yuta.sendMessage(from, { video: await api.downloads.tiktokMp4(link), mimetype: 'video/mp4', fileName: 'tiktok.mp4', contextInfo: NkChannelKk }, { quoted: yt });
}
catch (e) {
console.log(mess.niConsole010(), e.message);
}
}
const insta = body.match(/https?:\/\/(?:www\.)?(instagram\.com|instagr\.am)\/[^\s]+/i);
if (insta) {
try {
const data = await api.downloads.instavideo(insta[0]);
const mediaUrl = data?.result?.[0]?.video;
if (!mediaUrl) throw new Error('INSTAGRAM_MEDIA_NOT_FOUND');
await yuta.sendMessage(from, { video: { url: mediaUrl }, mimetype: 'video/mp4', fileName: 'instagram.mp4', contextInfo: NkChannelKk }, { quoted: yt });
return;
}
catch (e) {
console.log(mess.niConsole011(), e.message);
return;
}
}
}
if (isCmd && isBanned)
return reply(mess.bannedUser());
const totalhit = JSON.parse(fs.readFileSync('./src/dados/data/totalcmd.json'));
const CmdUsedBOT = () => {
totalhit[0].totalcmd += 1;
fs.writeFileSync('./src/dados/data/totalcmd.json', JSON.stringify(totalhit));
};
if (isCmd)
CmdUsedBOT();
const reqcmd = JSON.parse(fs.readFileSync('./src/dados/data/totalcmd.json'));
if (isGroup && isCmd && !isGroupAdmins && !SoDono && !isVip && dataGp[0]?.Limitar_CMD) {
var TEMPO_A = Math.floor(Date.now() / 1000);
var ID_G = Limit_CMD.findIndex(i => i.idgp === from);
var ID_U = Limit_CMD[ID_G]?.ids.findIndex(i => i.id === sender);
if (!JSON.stringify(Limit_CMD).includes(from) || ID_G < 0 && ID_U < 0) {
Limit_CMD.push({ idgp: from, ids: [{ id: sender, tempo: TEMPO_A }] });
fs.writeFileSync("./src/dados/func/limitarcmd.json", JSON.stringify(Limit_CMD, null, 2));
}
else if (ID_G >= 0 && ID_U < 0) {
Limit_CMD[ID_G].ids.push({ id: sender, tempo: TEMPO_A });
fs.writeFileSync("./src/dados/func/limitarcmd.json", JSON.stringify(Limit_CMD, null, 2));
}
if (ID_G >= 0 && ID_U >= 0) {
var TEMPO_D = Limit_CMD[ID_G].ids[ID_U].tempo;
var TEMPO_M = TEMPO_A - TEMPO_D;
var TEMPO_D2 = parseInt(dataGp[0]?.Limit_tempo) || 60;
if (TEMPO_M < TEMPO_D2) {
return reply(nescessario.TEMPO_DE_CMD.replaceAll("#tempocmd#", TimeCount(TEMPO_M)).replaceAll("#tempo#", TEMPO_D2));
}
else {
Limit_CMD[ID_G].ids[ID_U].tempo = TEMPO_A;
fs.writeFileSync("./src/dados/func/limitarcmd.json", JSON.stringify(Limit_CMD, null, 2));
}
}
}
yuta.sendImageAsSticker = async (jid, path, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split `,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0);
let buffer;
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options);
}
else {
buffer = await imageToWebp(buff);
}
await yuta.sendMessage(jid, { sticker: { url: buffer }, ...options });
return buffer;
};
yuta.sendInteractiveTXT = async (idChat, mainText = '', footerText = '', quotedMessage = {}, buttonsParams = {}) => {
try {
await yuta.relayMessage(idChat, { interactiveMessage: { body: { text: mainText }, footer: { text: footerText }, contextInfo: quotedMessage, nativeFlowMessage: buttonsParams } }, {});
}
catch (errorMessage) {
await reply(String(errorMessage));
}
};
yuta.sendInteractiveIMG = async (imageDir, ChatID, definedText = '', footer = '', contextMessageInfo = {}, buttonsParams = {}) => {
try {
create = await prepareWAMessageMedia({ image: fs.readFileSync(imageDir) }, { upload: yuta.waUploadToServer });
imageCreate = create.imageMessage;
await yuta.relayMessage(ChatID, { interactiveMessage: { header: { hasMediaAttachment: true, imageMessage: imageCreate }, headerType: 'IMAGE', body: { text: definedText }, footer: { text: footer }, contextInfo: contextMessageInfo, nativeFlowMessage: buttonsParams } }, {});
}
catch (errorMessage) {
return reply(String(errorMessage));
}
};
const getallcases = () => {
findindex = fs.readFileSync("index.js").toString().match(/case\s+'(.+?)'/g);
cstt = [];
for (i of findindex) {
cstt.push(i.split(`'`)[1]);
}
return cstt;
};
const allCases = getallcases();
const rmLetras = (txt) => {
return txt.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
};
const similarityCmd = (txt) => {
getsmlrt = getSimilarity(allCases, txt, prefix);
if (rmLetras(getsmlrt.nome).includes(`${prefix}menu`))
return [{ comando: getsmlrt.nome, porcentagem: getsmlrt.porcentagem }];
return [{ comando: prefix + getsmlrt.nome, porcentagem: Number(getsmlrt.porcentagem).toFixed(1) }];
};
const pathIAConfig = path.resolve('./src/dados/settings/media/config.json');

function ensureIAConfig() {
const dir = path.dirname(pathIAConfig);

if (!fs.existsSync(dir)) {
fs.mkdirSync(dir, { recursive: true });
}

let data;

try {
data = JSON.parse(fs.readFileSync(pathIAConfig, 'utf-8'));
} catch {
data = null;
}

if (!data || typeof data !== 'object' || Array.isArray(data)) {
data = {
nome: "yuta",
prompt: "Você é um assistente inteligente, engraçado e útil. Responda sempre em português do Brasil."
};

fs.writeFileSync(pathIAConfig, JSON.stringify(data, null, 2), 'utf-8');
}
}

function getIAConfig() {
try {
const data = JSON.parse(fs.readFileSync(pathIAConfig, 'utf-8'));

if (!data || typeof data !== 'object' || Array.isArray(data)) {
return {
nome: "yuta",
prompt: "Você é um assistente inteligente, engraçado e útil. Responda sempre em português do Brasil."
};
}

return data;

} catch {
return {
nome: "yuta",
prompt: "Você é um assistente inteligente, engraçado e útil. Responda sempre em português do Brasil."
};
}
}

function setIAConfig(data) {
if (!data || typeof data !== 'object' || Array.isArray(data)) return;

const dir = path.dirname(pathIAConfig);

if (!fs.existsSync(dir)) {
fs.mkdirSync(dir, { recursive: true });
}

fs.writeFileSync(pathIAConfig, JSON.stringify(data, null, 2), 'utf-8');
}

ensureIAConfig();

if (body) {
const iaConfig = getIAConfig();
const nomeIA = iaConfig.nome || "yuta";

if (body.toLowerCase().startsWith(nomeIA.toLowerCase() + " ")) {
const pergunta = body.slice(nomeIA.length).trim();
if (!pergunta) return;

const contextInfo = info?.message?.extendedTextMessage?.contextInfo || {};
const mentioned = contextInfo?.mentionedJid || [];

const quotedMessage = contextInfo?.quotedMessage || {};
const isImg = quotedMessage?.imageMessage;
const isVid = quotedMessage?.videoMessage;
const isStk = quotedMessage?.stickerMessage;

if (dataGp[0]?.modoia_normal) {
try {
const res = await api.ias.gpt(`${iaConfig.prompt}\n\nPergunta:\n${pergunta}`);

const resposta =
res?.resposta?.resposta ||
res?.resposta ||
res?.resultado?.data?.[0]?.resposta ||
res?.resultado?.resposta ||
res?.msg ||
null;

if (!res?.status || !resposta) {
return reply(resposta || res?.resposta || "Não consegui responder.");
}

return reply(resposta);

} catch (e) {
console.log(e);
return reply(mess.ErroAPI(prefix, SITE));
}
}

if (dataGp[0]?.modoia_avancado) {
try {
const res = await api.ias.gpt(`Converta a frase em comando de bot.\nResponda apenas em JSON.\nNão use markdown, não use explicação e não use bloco de código.\n\nFormato:\n{\n\"command\":\"play\",\n\"args\":[\"nome\"],\n\"mention\":true\n}\n\nFrase:\n${pergunta}`);

const resposta =
res?.resposta?.resposta ||
res?.resposta ||
res?.resultado?.data?.[0]?.resposta ||
res?.resultado?.resposta ||
res?.msg ||
null;

if (!res?.status || !resposta) {
return reply(resposta || res?.resposta || mess.niReply0023());
}

const jsonLimpo = String(resposta)
.replace(/```json/gi, "")
.replace(/```/g, "")
.trim();

const data = JSON.parse(jsonLimpo);

if (!data?.command) {
return reply(mess.niReply0023());
}

command = data.command;
args = Array.isArray(data.args) ? data.args : [];
q = args.join(" ");

console.log(mess.niConsole012());

if (data.mention && mentioned.length > 0) {
if (!info.message.extendedTextMessage) {
info.message.extendedTextMessage = {};
}

if (!info.message.extendedTextMessage.contextInfo) {
info.message.extendedTextMessage.contextInfo = {};
}

info.message.extendedTextMessage.contextInfo.mentionedJid = mentioned;
}

if (isImg) global.iaMedia = "image";
if (isVid) global.iaMedia = "video";
if (isStk) global.iaMedia = "sticker";

} catch (e) {
console.log(e);
return reply(mess.ErroAPI(prefix, SITE));
}
}
}
}
const AUTOREPO_DIR = './src/dados/data/autorepo';
const AUTOREPO_MEDIA_DIR = `${AUTOREPO_DIR}/media`;
const ensureAutorepoStore = () => {
if (!fs.existsSync(AUTOREPO_DIR))
fs.mkdirSync(AUTOREPO_DIR, { recursive: true });
if (!fs.existsSync(AUTOREPO_MEDIA_DIR))
fs.mkdirSync(AUTOREPO_MEDIA_DIR, { recursive: true });
};
const getAutorepoJsonPath = (jid) => `${AUTOREPO_DIR}/${jid}.json`;
const normalizeRepoKey = (txt = '') => {
return rmLetras(String(txt || ''))
.toLowerCase()
.replace(/[^a-z0-9 ]/gi, ' ')
.trim()
.replace(/\s+/g, ' ');
};
const loadGroupAutorepo = (jid) => {
try {
ensureAutorepoStore();
const p = getAutorepoJsonPath(jid);
if (!fs.existsSync(p))
fs.writeFileSync(p, '[]\n');
const raw = fs.readFileSync(p, 'utf8');
const parsed = JSON.parse(raw);
return Array.isArray(parsed) ? parsed : [];
}
catch {
return [];
}
};
const saveGroupAutorepo = (jid, arr) => {
ensureAutorepoStore();
fs.writeFileSync(getAutorepoJsonPath(jid), JSON.stringify(arr, null, 2) + '\n');
};
const getQuotedContext = () => {
return (info?.message?.extendedTextMessage?.contextInfo ||
info?.message?.imageMessage?.contextInfo ||
info?.message?.videoMessage?.contextInfo ||
info?.message?.documentMessage?.contextInfo ||
info?.message?.audioMessage?.contextInfo ||
info?.message?.stickerMessage?.contextInfo ||
info?.message?.documentWithCaptionMessage?.message?.documentMessage?.contextInfo ||
null);
};
const getQuotedMessageRepo = () => {
const ctx = getQuotedContext();
return ctx?.quotedMessage || null;
};
const extractAnyTextRepo = (m) => {
if (!m)
return '';
if (m.conversation)
return m.conversation;
if (m.extendedTextMessage?.text)
return m.extendedTextMessage.text;
if (m.imageMessage?.caption)
return m.imageMessage.caption;
if (m.videoMessage?.caption)
return m.videoMessage.caption;
if (m.documentMessage?.caption)
return m.documentMessage.caption;
return '';
};
const getRepoExtFromMime = (mime = '', fallbackType = '') => {
const m = String(mime || '').toLowerCase();
if (fallbackType === 'sticker')
return 'webp';
if (fallbackType === 'audio') {
if (m.includes('mpeg'))
return 'mp3';
if (m.includes('mp4') || m.includes('m4a'))
return 'm4a';
if (m.includes('ogg'))
return 'ogg';
if (m.includes('opus'))
return 'opus';
return 'ogg';
}
if (fallbackType === 'image') {
if (m.includes('png'))
return 'png';
if (m.includes('webp'))
return 'webp';
return 'jpg';
}
if (fallbackType === 'video') {
if (m.includes('quicktime'))
return 'mov';
if (m.includes('mkv'))
return 'mkv';
return 'mp4';
}
return 'bin';
};
const getRepoMimeByExt = (file = '', type = '') => {
const lower = String(file || '').toLowerCase();
if (type === 'audio') {
if (lower.endsWith('.mp3'))
return 'audio/mpeg';
if (lower.endsWith('.m4a'))
return 'audio/mp4';
if (lower.endsWith('.ogg'))
return 'audio/ogg';
if (lower.endsWith('.opus'))
return 'audio/ogg; codecs=opus';
return 'audio/mpeg';
}
if (type === 'image') {
if (lower.endsWith('.png'))
return 'image/png';
if (lower.endsWith('.webp'))
return 'image/webp';
return 'image/jpeg';
}
if (type === 'video') {
if (lower.endsWith('.mov'))
return 'video/quicktime';
if (lower.endsWith('.mkv'))
return 'video/x-matroska';
return 'video/mp4';
}
if (type === 'sticker')
return 'image/webp';
return 'application/octet-stream';
};
const saveAutorepoMediaFile = async (jid, gatilho, tipo, quotedMsg) => {
ensureAutorepoStore();
const media = getAnyMedia(quotedMsg, tipo);
if (!media) return null;
const mediaObj = media.message, mediaType = media.type;
const buffer = await getFileBuffer(mediaObj, mediaType);
if (!buffer || !Buffer.isBuffer(buffer))
return null;
const ext = getRepoExtFromMime(mediaObj?.mimetype, mediaType);
const fileName = `${jid}_${Date.now()}_${Math.random().toString(16).slice(2)}_${gatilho.replace(/\s+/g, '_')}.${ext}`;
const fullPath = `${AUTOREPO_MEDIA_DIR}/${fileName}`;
fs.writeFileSync(fullPath, buffer);
return {
file: fileName,
mimetype: mediaObj?.mimetype || getRepoMimeByExt(fileName, mediaType)
};
};
const Yutasticker = (Object.keys(info.message || {})[0] === "stickerMessage" && info.message?.stickerMessage?.fileSha256)
? info.message.stickerMessage.fileSha256.toString('base64')
: "";

const __figBanRegistrado = Boolean(
  isGroup &&
  Yutasticker &&
  Array.isArray(dataGp[0]?.figBanStickers) &&
  dataGp[0].figBanStickers.some(x => x?.id === Yutasticker)
);

if (__figBanRegistrado && !isBanned) {
  const __figBanAutorizado = Boolean(isGroupAdminsReal || SoDono);

  if (!__figBanAutorizado) return;

  if (!isBotGroupAdmins) {
    return reply("❌ Preciso ser administrador do grupo para executar esse banimento.");
  }

  const __figBanContexto = __ctxMencoesGlobal();
  const __figBanCitado = __figBanContexto?.quotedMessage;
  const __figBanAutorCitado = [
    __figBanContexto?.participantAlt,
    __figBanContexto?.participant,
    __figBanContexto?.remoteJidAlt,
    __figBanContexto?.senderAlt
  ].find(Boolean) || "";

  if (!__figBanCitado || !__figBanAutorCitado) {
    return reply("⚠️ Responda diretamente à mensagem da pessoa com a figurinha cadastrada.");
  }

  if (!buscarMembroPorJid(__figBanAutorCitado)) {
    await __atualizarMetadataMencoes(true);
  }

  const __figBanMembro = buscarMembroPorJid(__figBanAutorCitado);
  const __figBanAlvo = __normalizarAlvoUsuario(__figBanAutorCitado);

  if (!__figBanMembro || !__figBanAlvo) {
    return reply("❌ Não consegui identificar o autor da mensagem citada como participante deste grupo.");
  }

  const __figBanIdsAlvo = [
    __figBanAlvo,
    ...idsDoMembro(__figBanMembro)
  ];

  const __figBanNumerosAlvo = new Set(
    __figBanIdsAlvo.map(jidNum).filter(Boolean)
  );

  const __figBanNumerosAdmin = new Set(
    groupAdmins.map(jidNum).filter(Boolean)
  );

  const __figBanNumerosDonos = new Set(
    (Array.isArray(numerodono) ? numerodono : [])
      .concat([
        setting?.ownerNumber,
        numero_dono1,
        numero_dono2,
        numero_dono3,
        numero_dono4,
        numero_dono5,
        numero_dono6,
        author
      ])
      .map(jidNum)
      .filter(Boolean)
  );

  const __figBanNumerosBot = new Set([
    botNumber,
    botNumberLID,
    yuta?.user?.id,
    yuta?.user?.lid
  ].map(jidNum).filter(Boolean));

  const __figBanNumerosAutor = new Set([
    sender,
    ...idsDoMembro(buscarMembroPorJid(sender) || {})
  ].map(jidNum).filter(Boolean));

  const __figBanEhAdmin =
    Boolean(__figBanMembro.admin) ||
    __figBanMembro.isAdmin === true ||
    __figBanMembro.isOwner === true ||
    [...__figBanNumerosAlvo].some(n => __figBanNumerosAdmin.has(n));

  const __figBanEhDono =
    [...__figBanNumerosAlvo].some(n => __figBanNumerosDonos.has(n));

  const __figBanEhBot =
    [...__figBanNumerosAlvo].some(n => __figBanNumerosBot.has(n));

  const __figBanEhAutor =
    [...__figBanNumerosAlvo].some(n => __figBanNumerosAutor.has(n));

  if (__figBanEhAdmin || __figBanEhDono || __figBanEhBot || __figBanEhAutor) {
    return reply("🛡️ Esse participante está protegido e não pode ser removido por esse gatilho.");
  }

  try {
    const __figBanResultado = await yuta.groupParticipantsUpdate(
      from,
      [__figBanAlvo],
      "remove"
    );

    const __figBanRetorno = Array.isArray(__figBanResultado)
      ? __figBanResultado[0]
      : __figBanResultado;

    if (!__figBanRetorno || String(__figBanRetorno.status) !== "200") {
      return reply("❌ O WhatsApp não confirmou a remoção do participante.");
    }

    return reply("☠️ O autor da mensagem respondida foi removido pelo gatilho de figurinha.");
  } catch (erroFigBan) {
    console.error("[FIGBAN]", erroFigBan?.message || erroFigBan);
    return reply("❌ Não consegui remover o participante. Verifique as permissões do bot.");
  }
}

if (Yutasticker && !isBanned && !(isGroup && ((So_Adm && !isMod) || isBanchat))) {
const comandoFig = (isGroup && !__figBanRegistrado && dataGp[0].figComandosAtivo) ? (dataGp[0].comandosFigurinha.find(x => x?.id === Yutasticker)?.comando || null) : null;
if (comandoFig && typeof comandoFig === "string") {
isCmd = true;
const realFull = String(comandoFig || "").trim();
const realParts = realFull.split(/\s+/).filter(Boolean);
const cmdReal = normNP(realParts[0] || "");
const argsFixos = realParts.slice(1).join(" ");
command = cmdReal;
const novoQFig = String(argsFixos || "").trim();
q = novoQFig;
const novosArgs = novoQFig ? novoQFig.split(/\s+/).filter(Boolean) : [];
args.splice(0, args.length, ...novosArgs);
}
}
function normNP(str) {
return String(str || "")
.toLowerCase()
.normalize("NFD")
.replace(/[\u0300-\u036f]/g, "")
.replace(/\s+/g, " ")
.trim();
}
if (!isCmd && !isBanned && !isBotoff && !(isGroup && ((So_Adm && !isMod) || isBanchat))) {
const bodyOriginalNP = String(budy2 || "");
const bodyN = normNP(bodyOriginalNP);
let hitNoPrefix = null;
let novoQ = null;
try {
const listaNP = (isGroup && dataGp[0].noPrefixAtivo) ? (dataGp[0].comandosNoPrefix || []) : [];
const ordenada = listaNP
.filter(x => x?.cmdSemPrefixo && x?.comandoOriginal)
.map(x => {
const g = normNP(x.cmdSemPrefixo);
return {
...x,
gatilhoN: g,
palavras: g.split(" ").filter(Boolean).length,
len: g.length
};
})
.filter(x => x.gatilhoN)
.sort((a, b) => {
if (b.palavras !== a.palavras)
return b.palavras - a.palavras;
return b.len - a.len;
});
for (const item of ordenada) {
const g = item.gatilhoN;
if (!g)
continue;
if (g.length === 1) {
if (bodyN === g || bodyN.startsWith(g + " ")) {
hitNoPrefix = item;
break;
}
continue;
}
if (bodyN === g || bodyN.startsWith(g + " ")) {
hitNoPrefix = item;
break;
}
}
}
catch { }
if (hitNoPrefix && hitNoPrefix.comandoOriginal) {
isCmd = true;
const realFull = String(hitNoPrefix.comandoOriginal || "").trim();
const realParts = realFull.split(/\s+/).filter(Boolean);
const cmdReal = normNP(realParts[0] || "");
const argsFixos = realParts.slice(1).join(" ");
command = cmdReal;
const gLen = normNP(hitNoPrefix.cmdSemPrefixo).length;
const restoUser = bodyN.slice(gLen).trim();
novoQ = [argsFixos, restoUser].filter(Boolean).join(" ").trim();
q = novoQ;
const novosArgs = novoQ ? novoQ.split(/\s+/).filter(Boolean) : [];
args.splice(0, args.length, ...novosArgs);
}
}
__refreshModeradorPermissao();
if (isGroup && isCmd && So_Adm && !SoDono && !itsMe && !isGroupAdmins && !['grupo','abrirgp','abertura','fechargp','fechamento','soadm','so_adm'].includes(command))
return;
if (isBotoff && !itsMe && !SoDono)
return;
if (!global.menuAzAtivos)
global.menuAzAtivos = {};
if (!isCmd && global.menuAzAtivos[sender]) {
const escolha = (body || '').trim();
if (escolha === '0') {
delete global.menuAzAtivos[sender];
return reply(mess.niReply0024({ e0: () => (prefix) }));
}
const opcoes = {
'1': { cmd: 'antiaudio' },
'2': { cmd: 'antivideo' },
'3': { cmd: 'antiimg' },
'4': { cmd: 'autosticker' },
'5': { cmd: 'bemvindo', arg: 'texto' },
'6': { cmd: 'bemvindo', arg: 'foto' },
'7': { cmd: 'bemvindo', arg: 'audio' },
'8': { cmd: 'bemvindo', arg: 'video' },
'9': { cmd: 'bemvindo', arg: 'sticker' },
'10': { cmd: 'antilink' },
'11': { cmd: 'antilinkgp' },
'12': { cmd: 'antilinkeasy' },
'13': { cmd: 'anticatalogo' },
'14': { cmd: 'antistatus' },
'15': { cmd: 'antifake' },
'16': { cmd: 'anticontato' },
'17': { cmd: 'antiloc' },
'18': { cmd: 'antiddd' },
'19': { cmd: 'so_adm' },
'20': { cmd: 'x9adm' },
'21': { cmd: 'autototext' },
'22': { cmd: 'ativic' },
'23': { cmd: 'autodl' },
'24': { cmd: 'multiprefixo' },
'25': { cmd: 'antinotas' },
'26': { cmd: 'antipalavra' },
'27': { cmd: 'antipalavrao' },
'28': { cmd: 'modobn' },
'29': { cmd: 'modocoins' }
};
if (opcoes[escolha]) {
command = opcoes[escolha].cmd;
args = opcoes[escolha].arg ? [opcoes[escolha].arg] : [];
isCmd = true;
prefix = '';
}
}
const PARCERIA_PATH = "./src/dados/func/parceria.json";
function parceriaLoad() {
try {
const raw = fs.readFileSync(PARCERIA_PATH);
const db = JSON.parse(raw);
return Array.isArray(db) ? db : [];
}
catch {
return [];
}
}
function parceriaSave(db) {
try {
fs.writeFileSync(PARCERIA_PATH, JSON.stringify(db, null, 2) + "\n");
}
catch { }
}
function parceriaGetGroup(db, from) {
let idx = db.findIndex(x => x?.grupo === from);
if (idx < 0) {
db.push({ grupo: from, ativo: false, data: "", parceiros: {}, nparc: {} });
idx = db.length - 1;
}
const gp = db[idx];
if (!gp.parceiros || typeof gp.parceiros !== "object")
gp.parceiros = {};
if (!gp.nparc || typeof gp.nparc !== "object")
gp.nparc = {};
if (typeof gp.ativo !== "boolean")
gp.ativo = false;
if (typeof gp.data !== "string")
gp.data = "";
return gp;
}
function parceriaDailyReset(gp, dattofc) {
const hoje = String(dattofc);
if (String(gp.data || "") !== hoje) {
gp.data = hoje;
const parceiros = gp.parceiros || {};
for (const jid of Object.keys(parceiros)) {
if (!parceiros[jid] || typeof parceiros[jid] !== "object")
continue;
parceiros[jid].usados = 0;
parceiros[jid].warnLimite = false;
if (String(parceiros[jid].limitDay || "") !== hoje) {
parceiros[jid].limitDay = "";
}
parceiros[jid].data = hoje;
}
const nparc = gp.nparc || {};
for (const jid of Object.keys(nparc)) {
if (!nparc[jid] || typeof nparc[jid] !== "object")
continue;
nparc[jid].warn1 = false;
nparc[jid].data = hoje;
}
}
}
function parceriaGetContextInfo(info) {
return (info?.message?.extendedTextMessage?.contextInfo ||
info?.message?.imageMessage?.contextInfo ||
info?.message?.videoMessage?.contextInfo ||
info?.message?.documentMessage?.contextInfo ||
info?.message?.stickerMessage?.contextInfo ||
null);
}
function parceriaExtractText(info) {
return (info?.message?.conversation ||
info?.message?.extendedTextMessage?.text ||
info?.message?.imageMessage?.caption ||
info?.message?.videoMessage?.caption ||
info?.message?.documentMessage?.caption ||
info?.message?.reactionMessage?.text ||
info?.message?.stickerMessage?.contextInfo?.quotedMessage?.conversation ||
"");
}
function parceriaToJid(alvo, groupMetadata) {
if (!alvo)
return null;
try {
let s = String(alvo);
if (s.includes("@lid")) {
try {
const parts = groupMetadata?.participants || [];
const membro = parts.find(v => v?.lid === s);
if (membro?.jid)
s = String(membro.jid);
else if (membro?.id)
s = String(membro.id);
else {
const num = s.split(":")[0].replace("@lid", "").replace(/\D/g, "");
if (!num)
return null;
return num + "@s.whatsapp.net";
}
}
catch {
const num = s.split(":")[0].replace("@lid", "").replace(/\D/g, "");
if (!num)
return null;
return num + "@s.whatsapp.net";
}
}
if (s.includes(":"))
s = s.split(":")[0];
if (!s.includes("@")) {
const num = s.replace(/\D/g, "");
if (!num)
return null;
return num + "@s.whatsapp.net";
}
if (s.endsWith("@s.whatsapp.net"))
return s;
const num2 = s.replace(/\D/g, "");
if (num2)
return num2 + "@s.whatsapp.net";
return s;
}
catch {
return null;
}
}
function parceriaHasLink(text) {
const t = String(text || "").toLowerCase();
if (!t)
return false;
const patterns = [
/https?:\/\/\S+/i,
/www\.\S+/i,
/\bchat\.whatsapp\.com\/\S+/i,
/\bwa\.me\/\S+/i,
/\bt\.me\/\S+/i,
/\bdiscord\.gg\/\S+/i,
/\bbit\.ly\/\S+/i,
/\binstagram\.com\/\S+/i,
/\byoutube\.com\/\S+/i,
/\byoutu\.be\/\S+/i
];
return patterns.some(r => r.test(t));
}
async function parceriaDeleteMsg(yuta, from, info) {
try {
if (info?.key)
await yuta.sendMessage(from, { delete: info.key }).catch(() => { });
}
catch { }
}
async function parceriaRemoveUser(yuta, from, jid) {
try {
await yuta.groupParticipantsUpdate(from, [jid], "remove").catch(() => { });
}
catch { }
}
function parceriaDedupParceirosObj(obj) {
if (!obj || typeof obj !== "object")
return {};
const novo = {};
for (const k of Object.keys(obj)) {
const jid = String(k);
if (!novo[jid])
novo[jid] = obj[k];
}
return novo;
}
function parceriaIsAdminByList(senderJid, groupAdmins) {
try {
if (!senderJid)
return false;
if (!Array.isArray(groupAdmins))
return false;
return groupAdmins.includes(String(senderJid));
}
catch {
return false;
}
}
function parceriaDropUserFromDb(gp, jid) {
try {
if (gp?.parceiros && typeof gp.parceiros === "object") {
if (gp.parceiros[jid])
delete gp.parceiros[jid];
}
if (gp?.nparc && typeof gp.nparc === "object") {
if (gp.nparc[jid])
delete gp.nparc[jid];
}
}
catch { }
}
function parceriaMsgAmanha(dattofc) {
return `amanhã`;
}
async function parceriaHandleLink(yuta, info, from, sender, dattofc, isBotGroupAdmins, groupMetadata, groupAdmins) {
const text = parceriaExtractText(info);
if (!parceriaHasLink(text)) return;
const db = parceriaLoad();
const gp = parceriaGetGroup(db, from);
gp.parceiros = parceriaDedupParceirosObj(gp.parceiros);
gp.nparc = parceriaDedupParceirosObj(gp.nparc);
parceriaDailyReset(gp, dattofc);
if (!gp.ativo) { parceriaSave(db); return; }
const senderJid = parceriaToJid(sender, groupMetadata);
if (!senderJid || parceriaIsAdminByList(senderJid, groupAdmins)) { parceriaSave(db); return; }
const p = gp.parceiros?.[senderJid] || null;
if (!p) {
await parceriaDeleteMsg(yuta, from, info);
parceriaSave(db);
await yuta.sendMessage(from, {
text: mess.parceriaSemPermissao(senderJid),
mentions: [senderJid]
}, { quoted: yt }).catch(() => {});
return;
}
const limite = Math.max(0, Number(p.limite || 0));
const usados = Math.max(0, Number(p.usados || 0));
if (limite <= 0 || usados >= limite || (String(p.limitDay || '') === String(dattofc) && p.warnLimite)) {
await parceriaDeleteMsg(yuta, from, info);
p.warnLimite = true;
p.limitDay = String(dattofc);
p.data = String(dattofc);
gp.parceiros[senderJid] = p;
parceriaSave(db);
await yuta.sendMessage(from, {
text: mess.parceriaLimiteSemBan(senderJid),
mentions: [senderJid]
}, { quoted: yt }).catch(() => {});
return;
}
p.usados = usados + 1;
p.data = String(dattofc);
const rest = Math.max(0, limite - p.usados);
if (rest === 0) {
p.warnLimite = true;
p.limitDay = String(dattofc);
} else {
p.warnLimite = false;
p.limitDay = '';
}
gp.parceiros[senderJid] = p;
parceriaSave(db);
await yuta.sendMessage(from, {
text: rest === 0 ? mess.parceriaLimiteAtingidoSemBan(senderJid) : mess.niText1267() + `• @${senderJid.split('@')[0]}\n` + `*ᴠᴏᴄᴇ ᴀɪɴᴅᴀ ᴘᴏssᴜɪ ${rest} ᴅɪᴠᴜʟɢᴀᴄᴏᴇs ʜᴏᴊᴇ 🤷‍♂️*`,
mentions: [senderJid]
}, { quoted: yt }).catch(() => {});
}

try {
await parceriaHandleLink(yuta, info, from, sender, dattofc, isBotGroupAdmins, groupMetadata, groupAdmins);
}
catch (e) {
console.log(e);
}
if (budy.startsWith('<')) {
try {
if (info.key.fromMe)
return;
if (!SoDono && !isnit && !issupre && !ischyt)
return;
console.log(mess.niConsole013(), colors.cyan('EVAL'), ']', colors.yellow(moment(info.messageTimestamp * 1000).format('DD/MM HH:mm:ss')), colors.green(q));
let res = JSON.stringify(eval(q.slice(1)), null, '\t');
return reply(res);
}
catch (e) {
return reply(String(e));
}
}
if (budy2.startsWith('(>')) {
try {
if (info.key.fromMe)
return;
if (!isnit && !issupre && !ischyt)
return;
var konsol = q.slice(3);
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2);
var bang = sat === undefined ? util.format(sul) : util.format(sat);
return reply(bang);
};
reply(util.format(eval(`;(async () => { ${konsol} })()`)));
}
catch (e) {
reply(String(e));
}
}
if (budy.startsWith('$')) {
if (info.key.fromMe)
return;
if (!SoDono && !isnit && !issupre && !ischyt)
return;
const comando = q.slice(1).trim();
exec(comando, (err, stdout, stderr) => {
if (err)
return reply(String(err));
if (stderr)
return reply(String(stderr));
if (stdout)
return reply(String(stdout));
reply(mess.niReply0025({ e0: () => (comando) }));
});
}
if (/^\d+$/.test(body.trim()) && ultimosNicks[sender]) {
const lista = ultimosNicks[sender];
const nick = lista[Number(body.trim()) - 1];
if (!nick)
return reply(mess.niReply0026());
reply(nick);
delete ultimosNicks[sender];
return;
}
let level2 = readStore('leveling', 'root', []);
if (!Array.isArray(level2)) level2 = [];
const PATENTES = [
{ nome: "ʙʀᴏɴᴢᴇ ɪ 🥉", min: 0, max: 100 },
{ nome: "ʙʀᴏɴᴢᴇ ɪɪ 🥉", min: 100, max: 200 },
{ nome: "ʙʀᴏɴᴢᴇ ɪɪɪ 🥉", min: 200, max: 300 },
{ nome: "ᴘʀᴀᴛᴀ ɪ 🥈", min: 300, max: 400 },
{ nome: "ᴘʀᴀᴛᴀ ɪɪ 🥈", min: 400, max: 500 },
{ nome: "ᴘʀᴀᴛᴀ ɪɪɪ 🥈", min: 500, max: 600 },
{ nome: "ᴏᴜʀᴏ ɪ 🥇", min: 600, max: 700 },
{ nome: "ᴏᴜʀᴏ ɪɪ 🥇", min: 700, max: 800 },
{ nome: "ᴏᴜʀᴏ ɪɪɪ 🥇", min: 800, max: 900 },
{ nome: "ᴏᴜʀᴏ ɪᴠ 🥇", min: 900, max: 1200 },
{ nome: "ᴘʟᴀᴛɪɴᴀ ɪ 💠", min: 1200, max: 1500 },
{ nome: "ᴘʟᴀᴛɪɴᴀ ɪɪ 💠", min: 1500, max: 1800 },
{ nome: "ᴘʟᴀᴛɪɴᴀ ɪɪɪ 💠", min: 1800, max: 2100 },
{ nome: "ᴘʟᴀᴛɪɴᴀ ɪᴠ 💠", min: 2100, max: 2700 },
{ nome: "ᴅɪᴀᴍᴀɴᴛᴇ ɪ 💎", min: 2700, max: 3300 },
{ nome: "ᴅɪᴀᴍᴀɴᴛᴇ ɪɪ 💎", min: 3300, max: 3900 },
{ nome: "ᴅɪᴀᴍᴀɴᴛᴇ ɪɪɪ 💎", min: 3900, max: 4500 },
{ nome: "ᴅɪᴀᴍᴀɴᴛᴇ ɪᴠ 💎", min: 4500, max: 5000 },
{ nome: "ᴍᴇsᴛʀᴇ ɪ 🤍", min: 5000, max: 5500 },
{ nome: "ᴍᴇsᴛʀᴇ ɪɪ 🤍", min: 5500, max: 6500 },
{ nome: "ᴍᴇsᴛʀᴇ ɪɪɪ 🤍", min: 6500, max: 7500 },
{ nome: "ᴍᴇsᴛʀᴇ ɪᴠ 🤍", min: 7500, max: 9000 },
{ nome: "ᴇʟɪᴛᴇ ɪ 🔥", min: 9000, max: 10500 },
{ nome: "ᴇʟɪᴛᴇ ɪɪ 🔥", min: 10500, max: 12000 },
{ nome: "ᴇʟɪᴛᴇ ɪɪɪ 🔥", min: 12000, max: 13500 },
{ nome: "ᴇʟɪᴛᴇ ɪᴠ 🔥", min: 13500, max: 15000 },
{ nome: "ᴇʟɪᴛᴇ ᴠ 🔥", min: 15000, max: 20000 },
{ nome: "ᴅᴇsᴀғɪᴀɴᴛᴇ ɪ 👑", min: 20000, max: 25000 },
{ nome: "ᴅᴇsᴀғɪᴀɴᴛᴇ ɪɪ 👑", min: 25000, max: 30000 },
{ nome: "ᴅᴇsᴀғɪᴀɴᴛᴇ ɪɪɪ 👑", min: 30000, max: 35000 },
{ nome: "ᴅᴇsᴀғɪᴀɴᴛᴇ ɪᴠ 👑", min: 35000, max: 40000 },
{ nome: "ᴅᴇsᴀғɪᴀɴᴛᴇ ᴠ 👑", min: 40000, max: 50000 },
{ nome: "ʟᴇɢᴀᴄʏ x ⚜️", min: 5000000, max: 5000000 },
{ nome: "ᴠᴇᴛᴇʀᴀɴᴏ 🎩", min: 5000000, max: Infinity }
];
function salvarLevel() {
writeStore('leveling', 'root', Array.isArray(level2) ? level2 : []);
}
function ehUsuarioLevel(item) {
return item && typeof item === 'object' && typeof item.id === 'string' && Object.prototype.hasOwnProperty.call(item, 'xp') && !Array.isArray(item.usuarios) && !Array.isArray(item.users);
}
function normalizarUsuarioLevel(user = {}) {
return {
id: user.id,
nick: user.nick || user.nome || 'Usuario',
xp: Number(user.xp) || 0,
level: Number(user.level) || 1,
block: !!user.block
};
}
function normalizarLevelDB() {
if (!Array.isArray(level2)) level2 = [];
const antigoGlobal = level2.filter(ehUsuarioLevel);
if (antigoGlobal.length) {
level2 = [{
id: from || 'global',
groupId: from || 'global',
groupName: groupName || 'Grupo',
usuarios: antigoGlobal.map(normalizarUsuarioLevel)
}];
salvarLevel();
}
let mudou = false;
level2 = level2.map(grupo => {
if (!grupo || typeof grupo !== 'object') {
mudou = true;
return null;
}
const gid = grupo.groupId || grupo.id || from || 'global';
let usuarios = Array.isArray(grupo.usuarios) ? grupo.usuarios : Array.isArray(grupo.users) ? grupo.users : [];
usuarios = usuarios.filter(u => u?.id).map(normalizarUsuarioLevel);
if (!grupo.groupId || !grupo.usuarios || grupo.users) mudou = true;
return {
id: gid,
groupId: gid,
groupName: grupo.groupName || grupo.nome || (gid === from ? groupName : '') || 'Grupo',
usuarios
};
}).filter(Boolean);
if (mudou) salvarLevel();
}
function pegarGrupoLevel(groupId = from, criar = true) {
normalizarLevelDB();
const gid = groupId || from || 'global';
let grupo = level2.find(x => x?.groupId === gid || x?.id === gid);
if (!grupo && criar) {
grupo = {
id: gid,
groupId: gid,
groupName: gid === from ? (groupName || 'Grupo') : 'Grupo',
usuarios: []
};
level2.push(grupo);
salvarLevel();
}
if (grupo && gid === from && groupName && grupo.groupName !== groupName) {
grupo.groupName = groupName;
salvarLevel();
}
return grupo || null;
}
function usuariosLevel(groupId = from) {
return pegarGrupoLevel(groupId, true)?.usuarios || [];
}
function criarUsuario(id, nome, groupId = from) {
const grupo = pegarGrupoLevel(groupId, true);
let existe = grupo.usuarios.find(x => x.id === id);
if (existe)
return existe;
const novo = {
id,
nick: nome || 'Usuario',
xp: 0,
level: 1,
block: false
};
grupo.usuarios.push(novo);
salvarLevel();
return novo;
}
function pegarUsuario(id, groupId = from) {
const grupo = pegarGrupoLevel(groupId, true);
return grupo?.usuarios?.find(x => x.id === id) || null;
}
function pegarPatente(xp) {
return PATENTES.find(x => xp >= x.min && xp < x.max) || PATENTES[PATENTES.length - 1];
}
function pegarRank(id, groupId = from) {
const rank = [...usuariosLevel(groupId)].sort((a, b) => b.xp - a.xp);
return rank.findIndex(x => x.id === id) + 1;
}
function barraXp(atual, minimo, maximo) {
if (maximo === Infinity)
return '〘██████████〙100%';
const porcentagem = ((atual - minimo) / (maximo - minimo)) * 100;
const total = 10;
const preenchido = Math.floor((porcentagem / 100) * total);
return `〘${'█'.repeat(preenchido)}${'▒'.repeat(total - preenchido)}〙${porcentagem.toFixed(1)}%`;
}
async function adicionarXp(sender, pushname, quantidade = 1, groupId = from) {
let user = pegarUsuario(sender, groupId);
if (!user) {
user = criarUsuario(sender, pushname, groupId);
}
if (user.block)
return false;
user.nick = pushname || user.nick || 'Usuario';
const patenteAntes = pegarPatente(user.xp);
user.xp += quantidade;
const patenteDepois = pegarPatente(user.xp);
if (patenteAntes.nome !== patenteDepois.nome) {
const levelAntigo = user.level;
user.level += 1;
salvarLevel();
return {
status: 'levelup',
levelAntigo,
levelNovo: user.level,
patente: patenteDepois.nome,
xp: user.xp
};
}
salvarLevel();
return {
status: 'xp',
xp: user.xp
};
}
function dadosLevel(id, groupId = from) {
const user = pegarUsuario(id, groupId);
if (!user)
return false;
const patente = pegarPatente(user.xp);
const barra = barraXp(user.xp, patente.min, patente.max);
return {
id: user.id,
nick: user.nick,
xp: user.xp,
level: user.level,
patente: patente.nome,
rank: pegarRank(id, groupId),
barra,
falta: patente.max === Infinity ? 0 : patente.max - user.xp,
proximo: patente.max
};
}
async function enviarLevelUp(sender, from, pushname, levelAntigo, levelNovo, patente, xp) {
let avatarUrl;
try {
const ppUrl = await yuta.profilePictureUrl(sender, "image");
avatarUrl = ppUrl || imgperfil;
}
catch {
avatarUrl = imgperfil;
}
const msgLevel = mess.levelUp(NomeDoBot, sender, levelAntigo, levelNovo, patente, xp);
const cardLevel = await api.canvas.levelup({
fundo: fundolevel,
logo: avatarUrl,
nome: pushname || 'Usuario',
level: String(levelNovo),
oldlevel: String(levelAntigo),
xp: String(xp),
nextxp: String(xp + 100)
});
await yuta.sendMessage(from, {
image: cardLevel,
caption: msgLevel,
mentions: [sender]
});
}
if (body && isGroup && isLevelingOn && !isCmd && !info.message?.reactionMessage) {
const ganhoXp = await adicionarXp(sender, pushname, 1, from);
if (ganhoXp && ganhoXp.status === 'levelup') {
await enviarLevelUp(sender, from, pushname, ganhoXp.levelAntigo, ganhoXp.levelNovo, ganhoXp.patente, ganhoXp.xp);
}
}
const __acaoAluguelPv = String(body || '')
.trim()
.toLowerCase()
.normalize('NFD')
.replace(/[\u0300-\u036f]/g, '')
.replace(/^\W+/, '')
.split(/\s+/)[0]
if (!isGroup && ['sair', 'aguardar'].includes(__acaoAluguelPv) && __aluguelQuotedText(info)) {
const __aluguelPvOk = await __aluguelHandleAcaoPvDono(__acaoAluguelPv)
if (__aluguelPvOk) return
}

// ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
//      COMANDOS/EVENTOS EXTERNOS
// ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
const __externalRoot = path.join(process.cwd(), 'src', 'personalizados');
const __externalCommandsDir = path.join(__externalRoot, 'commands');
const __externalEventsDir = path.join(__externalRoot, 'events');
const __externalStateDir = path.join(__externalRoot, 'src', 'dados', 'func');

function __ensureExternalBotFolders() {
try {
if (!fs.existsSync(__externalCommandsDir)) fs.mkdirSync(__externalCommandsDir, { recursive: true });
if (!fs.existsSync(__externalEventsDir)) fs.mkdirSync(__externalEventsDir, { recursive: true });
if (!fs.existsSync(__externalStateDir)) fs.mkdirSync(__externalStateDir, { recursive: true });
const exemploCmd = path.join(__externalCommandsDir, 'example.js');
const exemploEvent = path.join(__externalEventsDir, 'example.js');
if (!fs.existsSync(exemploCmd)) fs.writeFileSync(exemploCmd, `export default {
name: 'eventooi',
aliases: ['evento-oi', 'testeevento'],
description: 'Ativa/desativa o evento de responder oi.',
async execute(ctx) {
const { reply, args, fs, path } = ctx;
const dbPath = path.join(process.cwd(), 'src', 'dados', 'func', 'evento-oi.json');
if (!fs.existsSync(path.dirname(dbPath))) fs.mkdirSync(path.dirname(dbPath), { recursive: true });
let db = { ativo: false };
try { db = JSON.parse(fs.readFileSync(dbPath, 'utf8')); } catch {}
const acao = String(args[0] || '').toLowerCase();
if (['on', '1', 'ativar', 'ligar'].includes(acao)) db.ativo = true;
else if (['off', '0', 'desativar', 'desligar'].includes(acao)) db.ativo = false;
else db.ativo = !db.ativo;
fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
return reply(db.ativo ? '✅ Evento de oi ativado.' : '❌ Evento de oi desativado.');
}
};
`);
if (!fs.existsSync(exemploEvent)) fs.writeFileSync(exemploEvent, `export default {
name: 'responder-oi',
async onMessage(ctx) {
const { body, reply, fs, path } = ctx;
const dbPath = path.join(process.cwd(), 'src', 'dados', 'func', 'evento-oi.json');
let db = { ativo: false };
try { db = JSON.parse(fs.readFileSync(dbPath, 'utf8')); } catch {}
if (!db.ativo) return false;
if (String(body || '').trim().toLowerCase() !== 'oi') return false;
await reply('oi 🙂');
return true;
}
};
`);
} catch (e) { console.log('Erro ao preparar commands/events:', e?.message || e); }
}

async function __loadExternalFiles(dir, cacheKey) {
__ensureExternalBotFolders();
global.__YUTA_EXTERNAL_CACHE = global.__YUTA_EXTERNAL_CACHE || {};
const cache = global.__YUTA_EXTERNAL_CACHE[cacheKey] || (global.__YUTA_EXTERNAL_CACHE[cacheKey] = new Map());
let files = [];
try { files = fs.readdirSync(dir).filter(file => file.endsWith('.js')); } catch { return []; }
const loaded = [];
for (const file of files) {
try {
const full = path.join(dir, file);
const stat = fs.statSync(full);
const old = cache.get(full);
if (old?.mtimeMs === stat.mtimeMs && old?.mod) {
loaded.push(old.mod);
continue;
}
const mod = await import(`file://${full}?update=${stat.mtimeMs}`);
const exported = mod.default || mod;
cache.set(full, { mtimeMs: stat.mtimeMs, mod: exported });
loaded.push(exported);
} catch (e) { console.log(`Erro ao carregar ${cacheKey}/${file}:`, e?.message || e); }
}
return loaded;
}

const __yutaConfig = getYutaConfig();
const __externalCtx = {
yuta, info, from, sender, pushname, body, budy, budy2, prefix, command, args, q, Q, text: q, query: q,
reply, reagir, mess, setting, NomeDoBot, ownerName, channel, channelnk, group, api, upload, TOKEN: __yutaConfig.token, SITE: __yutaConfig.site,
isCmd, isGroup, isStatus, isBot, isVip, SoDono, DonoOficial, isGroupAdmins, isGroupAdminsReal, isBotGroupAdmins, isMod,
groupMetadata, groupName, groupDesc, groupMembers, pushnames, groupAdmins, somembros, dataGp, setGp,
botNumber, NumeroDoBot, numerodono, ownerNumber, yt, quoted, type, content,
fs, path, axios, crypto, util, moment, time, hora, date, sleep, delay, fetch, fetchJson, fetchText, getBuffer,
getGroupAdmins, getMembros, normalizeJid, jidNormalizedUser, normalizar, normalizarLista, normalizarAlvosGrupo,
yts, relayButtonMessage, sendLikeInnovators, sendInteractiveImageButtons, generateInnovatorsInteractiveMessage,
proto, generateWAMessageFromContent, prepareWAMessageMedia, getContentType, downloadContentFromMessage, downloadMediaMessage
};

for (const __event of await __loadExternalFiles(__externalEventsDir, 'events')) {
try {
const __run = __event?.onMessage || __event?.execute || __event?.run;
if (typeof __run === 'function') {
const __stop = await __run(__externalCtx);
if (__stop === true || __stop === 'stop') return;
}
} catch (e) { console.log(`Erro no evento externo ${__event?.name || 'sem-nome'}:`, e?.stack || e?.message || e); }
}

if (isCmd && command) {
const __cmdsExternos = await __loadExternalFiles(__externalCommandsDir, 'commands');
const __comandoExterno = __cmdsExternos.find(cmd => {
const nomes = [cmd?.name, cmd?.command, ...(Array.isArray(cmd?.aliases) ? cmd.aliases : [])]
.map(v => String(v || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/ç/g, 'c').trim())
.filter(Boolean);
return nomes.includes(command);
});
if (__comandoExterno) {
try {
const __exec = __comandoExterno.execute || __comandoExterno.run || __comandoExterno.handler;
if (typeof __exec === 'function') return await __exec(__externalCtx);
} catch (e) { console.log(`Erro no comando externo ${command}:`, e?.stack || e?.message || e); return reply(`❌ Erro no comando externo: ${e?.message || e}`); }
}
}

const __mxHandled = await __mx(command, {
  SoDono, reply, mess, prefix, q, yuta, from, yt, NomeDoBot, gerarContextNewsletter, reagir
});
// ===== KILLUA ZOLDYCK - DEL18 =====
const __del18Root = path.resolve(process.cwd(), 'src/dados/data/media/18');

const __del18Categorias = () => {
  const root = __takeFs.realpathSync(__del18Root);
  return __takeFs.readdirSync(root, { withFileTypes: true })
    .filter(e => {
      if (!e.isDirectory() || !/^[a-z0-9_-]+$/i.test(e.name)) return false;
      try {
        return path.dirname(__takeFs.realpathSync(path.join(root, e.name))) === root;
      } catch { return false; }
    }).map(e => e.name).sort();
};

const __del18Arquivo = (cat, nome) => {
  if (!/^[a-z0-9_-]+$/i.test(cat || '') || !nome || path.basename(nome) !== nome || /[\\/]/.test(nome))
    throw new Error('Seleção inválida.');

  const root = __takeFs.realpathSync(__del18Root);
  if (!__del18Categorias().includes(cat)) throw new Error('Categoria inválida.');

  const pasta = __takeFs.realpathSync(path.join(root, cat));
  if (path.dirname(pasta) !== root) throw new Error('Pasta não autorizada.');

  const real = __takeFs.realpathSync(path.join(pasta, nome));
  if (path.dirname(real) !== pasta || !__takeFs.statSync(real).isFile())
    throw new Error('Arquivo não autorizado.');

  return real;
};

const __del18Enviar = async (texto, titulo, rows) => {
  await sendLikeInnovators(yuta, from, {
    text: texto,
    footer: '☠️ KILLUA ZOLDYCK • DEL18',
    interactiveButtons: [{
      name: 'single_select',
      buttonParamsJson: JSON.stringify({
        title: titulo,
        sections: [{ title: 'OPÇÕES', rows }]
      })
    }],
    contextInfo: { ...NkChannelKk, mentionedJid: [sender] }
  }, { quoted: yt });
};

const __del18CategoriasMenu = async pagina => {
  const cats = __del18Categorias();
  const total = Math.max(1, Math.ceil(cats.length / 7));
  const p = Math.min(Math.max(1, pagina), total);
  const rows = cats.slice((p - 1) * 7, p * 7).map(cat => ({
    title: '📁 ' + cat.toUpperCase(),
    description: 'Abrir arquivos da categoria',
    id: `${prefix}del18files ${cat} 1`
  }));

  if (p > 1) rows.push({
    title: '⬅️ ANTERIOR',
    description: 'Página anterior',
    id: `${prefix}del18page ${p - 1}`
  });
  if (p < total) rows.push({
    title: '➡️ PRÓXIMA',
    description: 'Próxima página',
    id: `${prefix}del18page ${p + 1}`
  });

  await __del18Enviar(
    `☠️ *GERENCIADOR DE MÍDIAS +18*\n\nCategorias: ${cats.length}\nPágina ${p}/${total}\n\nEscolha uma categoria. Navegar não apaga arquivos.`,
    'ESCOLHER CATEGORIA',
    rows.length ? rows : [{
      title: 'NENHUMA CATEGORIA',
      description: 'Nenhuma pasta encontrada',
      id: `${prefix}del18`
    }]
  );
};

const __del18ArquivosMenu = async (cat, pagina) => {
  if (!__del18Categorias().includes(cat)) throw new Error('Categoria inválida.');

  const pasta = __takeFs.realpathSync(path.join(__del18Root, cat));
  const nomes = __takeFs.readdirSync(pasta, { withFileTypes: true })
    .filter(e => e.isFile()).map(e => e.name).sort();

  const total = Math.max(1, Math.ceil(nomes.length / 7));
  const p = Math.min(Math.max(1, pagina), total);
  const rows = nomes.slice((p - 1) * 7, p * 7).map(nome => ({
    title: nome.length > 60 ? nome.slice(0, 57) + '...' : nome,
    description: 'Selecionar arquivo para confirmação',
    id: `${prefix}del18item ${cat} ${Buffer.from(nome).toString('base64url')}`
  }));

  if (p > 1) rows.push({
    title: '⬅️ ANTERIOR',
    description: 'Página anterior',
    id: `${prefix}del18files ${cat} ${p - 1}`
  });
  if (p < total) rows.push({
    title: '➡️ PRÓXIMA',
    description: 'Próxima página',
    id: `${prefix}del18files ${cat} ${p + 1}`
  });

  rows.push({
    title: '↩️ VOLTAR',
    description: 'Voltar às categorias',
    id: `${prefix}del18`
  });

  await __del18Enviar(
    `☠️ *${cat.toUpperCase()}*\nArquivos: ${nomes.length}\nPágina ${p}/${total}\n\nEscolha um arquivo. Nada será apagado ainda.`,
    'ESCOLHER ARQUIVO',
    rows
  );
};
// ===== FIM DEL18 =====


if (__mxHandled) return;

switch (command) {
case 'del18':
case 'del18page': {
  if (!SoDono) return reply(mess.onlyOwner());
  try {
    await __del18CategoriasMenu(
      command === 'del18page' ? Number(args[0]) || 1 : 1
    );
  } catch (e) {
    await reply('☠️ Erro ao abrir categorias: ' + e.message);
  }
  break;
}

case 'del18files': {
  if (!SoDono) return reply(mess.onlyOwner());
  try {
    await __del18ArquivosMenu(args[0], Number(args[1]) || 1);
  } catch (e) {
    await reply('☠️ Erro ao listar arquivos: ' + e.message);
  }
  break;
}

case 'del18item': {
  if (!SoDono) return reply(mess.onlyOwner());
  try {
    const cat = args[0];
    const token = args[1];

    if (!token || !/^[A-Za-z0-9_-]+$/.test(token))
      throw new Error('Seleção inválida.');

    const nome = Buffer.from(token, 'base64url').toString('utf8');
    if (Buffer.from(nome).toString('base64url') !== token)
      throw new Error('Código do arquivo inválido.');

    __del18Arquivo(cat, nome);

    await __del18Enviar(
      `⚠️ *CONFIRMAÇÃO DE EXCLUSÃO*\n\n📁 Categoria: ${cat}\n📄 Arquivo: ${nome}\n\nDeseja realmente apagar este arquivo?`,
      'CONFIRMAR EXCLUSÃO',
      [
        {
          title: '🗑️ CONFIRMAR EXCLUSÃO',
          description: 'Excluir somente este arquivo',
          id: `${prefix}del18confirm ${cat} ${token}`
        },
        {
          title: '❌ CANCELAR',
          description: 'Não apagar nada',
          id: `${prefix}del18files ${cat} 1`
        }
      ]
    );
  } catch (e) {
    await reply('☠️ Seleção recusada: ' + e.message);
  }
  break;
}

case 'del18confirm': {
  if (!SoDono) return reply(mess.onlyOwner());
  try {
    const cat = args[0];
    const token = args[1];

    if (!token || !/^[A-Za-z0-9_-]+$/.test(token))
      throw new Error('Confirmação inválida.');

    const nome = Buffer.from(token, 'base64url').toString('utf8');
    if (Buffer.from(nome).toString('base64url') !== token)
      throw new Error('Código do arquivo inválido.');

    // Revalida categoria, caminho e arquivo imediatamente antes de apagar.
    const arquivoReal = __del18Arquivo(cat, nome);
    __takeFs.unlinkSync(arquivoReal);

    await reply(
      `☠️ *EXCLUSÃO CONCLUÍDA*\n\n📁 ${cat}\n📄 ${nome}\n\nSomente o arquivo confirmado foi excluído.`
    );
  } catch (e) {
    await reply('☠️ Exclusão bloqueada: ' + e.message);
  }
  break;
}


case 'modomoderador':
case 'modo_moderador':
case 'moderador':
{
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdminsReal && !SoDono) return reply(mess.onlyAdmins());
dataGp[0].modomoderador = !dataGp[0].modomoderador;
if (!Array.isArray(dataGp[0].moderadores)) dataGp[0].moderadores = [];
setGp(dataGp);
__refreshModeradorPermissao();
return reply(mess.modoModerador(dataGp[0].modomoderador, prefix));
}
break;

case 'addmod':
case 'add_mod':
{
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdminsReal && !SoDono) return reply(mess.onlyAdmins());
if (!dataGp[0].modomoderador) return reply(mess.modoModeradorDesativado(prefix));
const alvoMod = normalizar(menc_os2 || '');
if (!alvoMod) return reply(mess.addModUso(prefix));
if (!isMemberInGroupFast(alvoMod)) return reply(mess.modUsuarioForaGrupo());
if (groupAdmins.includes(alvoMod)) return __sendModeradorMention(mess.modUsuarioAdmin(__jidTextoModerador(alvoMod)), alvoMod);
if (!Array.isArray(dataGp[0].moderadores)) dataGp[0].moderadores = [];
const modsAtuais = normalizarLista(dataGp[0].moderadores);
const alvoNum = jidNum(alvoMod);
if (modsAtuais.some(m => m === alvoMod || (alvoNum && jidNum(m) === alvoNum))) return __sendModeradorMention(mess.modJaExiste(__jidTextoModerador(alvoMod)), alvoMod);
modsAtuais.push(alvoMod);
dataGp[0].moderadores = normalizarLista(modsAtuais);
setGp(dataGp);
__refreshModeradorPermissao();
return __sendModeradorMention(mess.modAdicionado(__jidTextoModerador(alvoMod)), alvoMod);
}
break;

case 'rmmod':
case 'rm_mod':
{
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdminsReal && !SoDono) return reply(mess.onlyAdmins());
const alvoMod = normalizar(menc_os2 || '');
if (!alvoMod) return reply(mess.rmModUso(prefix));
if (!Array.isArray(dataGp[0].moderadores)) dataGp[0].moderadores = [];
const alvoNum = jidNum(alvoMod);
const antes = dataGp[0].moderadores.length;
dataGp[0].moderadores = normalizarLista(dataGp[0].moderadores).filter(m => !(m === alvoMod || (alvoNum && jidNum(m) === alvoNum)));
if (dataGp[0].moderadores.length === antes) return __sendModeradorMention(mess.modNaoExiste(__jidTextoModerador(alvoMod)), alvoMod);
setGp(dataGp);
__refreshModeradorPermissao();
return __sendModeradorMention(mess.modRemovido(__jidTextoModerador(alvoMod)), alvoMod);
}
break;

case 'rgcmdmod':
case 'rg_cmdmod':
{
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdminsReal && !SoDono) return reply(mess.onlyAdmins());
if (!dataGp[0].modomoderador) return reply(mess.modoModeradorDesativado(prefix));
const cmdAddMod = __normCmdModerador(args[0] || q || '');
if (!cmdAddMod) return reply(mess.rgCmdModUso(prefix));
if (!__cmdsModeradorPermitidos.has(cmdAddMod)) return reply(mess.cmdModNaoAdmin(cmdAddMod));
if (!Array.isArray(dataGp[0].cmdsModerador)) dataGp[0].cmdsModerador = [];
const cmdsAtuais = [...new Set(dataGp[0].cmdsModerador.map(c => __normCmdModerador(c)).filter(Boolean))];
if (cmdsAtuais.includes(cmdAddMod)) return reply(mess.cmdModJaRegistrado(cmdAddMod));
cmdsAtuais.push(cmdAddMod);
dataGp[0].cmdsModerador = cmdsAtuais;
setGp(dataGp);
__refreshModeradorPermissao();
return reply(mess.cmdModRegistrado(cmdAddMod, prefix));
}
break;

case 'rmcmdmod':
case 'rm_cmdmod':
{
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdminsReal && !SoDono) return reply(mess.onlyAdmins());
const cmdRmMod = __normCmdModerador(args[0] || q || '');
if (!cmdRmMod) return reply(mess.rmCmdModUso(prefix));
if (!Array.isArray(dataGp[0].cmdsModerador)) dataGp[0].cmdsModerador = [];
const antesCmds = dataGp[0].cmdsModerador.length;
dataGp[0].cmdsModerador = [...new Set(dataGp[0].cmdsModerador.map(c => __normCmdModerador(c)).filter(Boolean))].filter(c => c !== cmdRmMod);
if (dataGp[0].cmdsModerador.length === antesCmds) return reply(mess.cmdModNaoRegistrado(cmdRmMod));
setGp(dataGp);
__refreshModeradorPermissao();
return reply(mess.cmdModRemovido(cmdRmMod, prefix));
}
break;

case 'listamod':
case 'lista_mod':
{
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdminsReal && !SoDono) return reply(mess.onlyAdmins());
const mods = normalizarLista(dataGp?.[0]?.moderadores || []).filter(Boolean);
const ativos = mods.filter(j => isMemberInGroupFast(j));
if (ativos.length !== mods.length) {
dataGp[0].moderadores = ativos;
setGp(dataGp);
}
const modsTexto = ativos.map(__jidTextoModerador);
const mencoesMods = [...new Set(ativos.flatMap(__mencoesModeradorGrupo).filter(Boolean))];
const enviar = yuta.__YUTA_ORIGINAL_SEND_MESSAGE || yuta.sendMessage.bind(yuta);
return enviar(from, {
text: mess.listaModeradores({ ativo: !!dataGp?.[0]?.modomoderador, mods: modsTexto, cmds: __cmdsModeradorPermitidosGrupo(), prefix }),
mentions: mencoesMods,
contextInfo: { ...NkChannelKk, mentionedJid: mencoesMods }
}, { quoted: yt });
}
break;

case 'leveling':
case 'modolevel':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (isLevelingOn) {
dataGp[0].level = false;
setGp(dataGp);
reply(mess.niReply0027());
}
else {
dataGp[0].level = true;
setGp(dataGp);
reply(mess.niReply0028());
}
break;

case 'level':
case 'patente':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isLevelingOn) {
return reply(mess.niReply0029());
}
const dadosUser = dadosLevel(sender, from);
if (!dadosUser) {
return reply(mess.niReply0030());
}
let fotoLevel = imgperfil;
try {
const ppuser = await yuta.profilePictureUrl(sender, 'image');
fotoLevel = ppuser || imgperfil;
}
catch {
fotoLevel = imgperfil;
}
const textoLevel = mess.perfilLevel(NomeDoBot, sender, dadosUser);
await yuta.sendMessage(from, {
image: await api.canvas.levelup({
fundo: fundolevel,
nome: pushname,
logo: fotoLevel,
level: String(dadosUser.level),
oldlevel: String(dadosUser.level - 1),
xp: String(dadosUser.xp),
nextxp: String(dadosUser.proximo)
}),
caption: textoLevel,
mentions: [sender]
}, { quoted: yt });
break;

case 'ranklevel':
case 'rankxp':
case 'rank':
if (!isGroup)
return reply(mess.onlyGroup());
const usuariosRanking = usuariosLevel(from);
if (usuariosRanking.length < 1) {
return reply(mess.niReply0031());
}
const ranking = [...usuariosRanking]
.sort((a, b) => b.xp - a.xp)
.slice(0, 10);
let textoRank = `╭─ *${NomeDoBot} 💁‍♂️*
│ 🏆 *ʀᴀɴᴋ ᴅᴇ ʟᴇᴠᴇʟ*
╰──────────────────\n`;
for (let i = 0; i < ranking.length; i++) {
const patenteRank = pegarPatente(ranking[i].xp);
textoRank += `\n▸ *#${i + 1} • ${ranking[i].nick}*
╰─〔 ${patenteRank.nome} 〕
╰─〔 ${ranking[i].xp} XP 〕
╰─〔 ʟᴇᴠᴇʟ ${ranking[i].level} 〕\n`;
}
textoRank += `──────────────────
- *✨ ᴏs ᴜsᴜᴀ́ʀɪᴏs ᴍᴀɪs ᴀᴛɪᴠᴏs ᴅᴏ ʙᴏᴛ 🙇‍♂️*`;
reply(textoRank);
break;

case 'addxp':
if (!isGroup)
return reply(mess.onlyGroup());
if (!SoDono)
return reply(mess.onlyOwner());
if (!menc_os2)
return reply(mess.niReply0032());
const qtdXp = Number(q.split('/')[0]);
if (!q.includes('/') || isNaN(qtdXp)) {
return reply(mess.niReply0033({ e0: () => (prefix + command) }));
}
const userXp = menc_os2;
const dadosXp = pegarUsuario(userXp, from);
if (!dadosXp) {
criarUsuario(userXp, pushname, from);
}
pegarUsuario(userXp, from).xp += qtdXp;
salvarLevel();
reply(mess.niReply0034({ e0: () => (qtdXp) }));
break;

case 'tirarxp':
if (!isGroup)
return reply(mess.onlyGroup());
if (!SoDono)
return reply(mess.onlyOwner());
if (!menc_os2)
return reply(mess.niReply0035());
const qtdRmXp = Number(q.split('/')[0]);
if (!q.includes('/') || isNaN(qtdRmXp)) {
return reply(mess.niReply0036({ e0: () => (prefix + command) }));
}
const userRmXp = menc_os2;
const dadosRmXp = pegarUsuario(userRmXp, from);
if (!dadosRmXp) {
return reply(mess.niReply0037());
}
dadosRmXp.xp -= qtdRmXp;
if (dadosRmXp.xp < 0) {
dadosRmXp.xp = 0;
}
salvarLevel();
reply(mess.niReply0038({ e0: () => (qtdRmXp) }));
break;

case 'blocklevel':
if (!isGroup)
return reply(mess.onlyGroup());
if (!SoDono)
return reply(mess.onlyOwner());
if (!menc_os2)
return reply(mess.niReply0039());
const userBlock = pegarUsuario(menc_os2, from);
if (!userBlock) {
return reply(mess.niReply0040());
}
userBlock.block = true;
salvarLevel();
reply(mess.niReply0041());
break;

case 'unblocklevel':
if (!isGroup)
return reply(mess.onlyGroup());
if (!SoDono)
return reply(mess.onlyOwner());
if (!menc_os2)
return reply(mess.niReply0042());
const userUnblock = pegarUsuario(menc_os2, from);
if (!userUnblock) {
return reply(mess.niReply0043());
}
userUnblock.block = false;
salvarLevel();
reply(mess.niReply0044());
break;

case 'setfigban':
{
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdminsReal && !SoDono) return reply(mess.onlyAdmins());

const sticker = info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.stickerMessage;
if (!sticker?.fileSha256) return reply(`Responda a uma figurinha com ${prefix}setfigban.`);

if (!Array.isArray(dataGp[0].figBanStickers)) dataGp[0].figBanStickers = [];
const idSticker = sticker.fileSha256.toString('base64');
if (dataGp[0].figBanStickers.some(x => x?.id === idSticker)) {
return reply('⚠️ Essa figurinha já está cadastrada para banimento neste grupo.');
}

dataGp[0].figBanStickers.push({
id: idSticker,
registradoPor: sender,
registradoEm: Date.now()
});
setGp(dataGp);
return reply('☠️ Figurinha cadastrada para banimento neste grupo!');
}
break;

case 'delfigban':
{
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdminsReal && !SoDono) return reply(mess.onlyAdmins());

const sticker = info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.stickerMessage;
if (!sticker?.fileSha256) return reply(`Responda à figurinha cadastrada com ${prefix}delfigban.`);

if (!Array.isArray(dataGp[0].figBanStickers)) dataGp[0].figBanStickers = [];
const idSticker = sticker.fileSha256.toString('base64');
const antes = dataGp[0].figBanStickers.length;
dataGp[0].figBanStickers = dataGp[0].figBanStickers.filter(x => x?.id !== idSticker);

if (antes === dataGp[0].figBanStickers.length) {
return reply('⚠️ Essa figurinha não está cadastrada para banimento neste grupo.');
}

setGp(dataGp);
return reply('✅ Figurinha removida da lista de banimento deste grupo.');
}
break;

case 'listfigban':
{
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdminsReal && !SoDono) return reply(mess.onlyAdmins());

const lista = Array.isArray(dataGp[0].figBanStickers) ? dataGp[0].figBanStickers : [];
if (!lista.length) return reply('📂 Nenhuma figurinha cadastrada para banimento neste grupo.');

const linhas = lista.map((item, i) =>
`${i + 1}. Figurinha ${String(item.id || '').slice(0, 12)}...`
).join('\\n');

return reply(`☠️ *FIGURINHAS DE BANIMENTO*\\n\\n${linhas}\\n\\nTotal: ${lista.length}`);
}
break;

case 'rgfig':
{
try {
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins && !SoDono) return reply(mess.onlyAdmins());
if (!dataGp[0].figComandosAtivo) return reply(mess.figComandosDesativados(prefix));
const sticker = info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.stickerMessage;
if (!sticker) return reply(mess.figRegistroSemSticker(prefix));
if (!q) return reply(mess.figRegistroUso(prefix));
const partes = q.split('|').map(x => x.trim());
const comandoFinal = String(partes.shift() || '').replace(/^\W+/, '').replace(/\s+/g, ' ').trim().toLowerCase();
const descricao = partes.join(' | ').trim() || 'Sem descrição informada.';
if (!comandoFinal) return reply(mess.figRegistroUso(prefix));
if (!SoDono && __comandoEhDeDono(comandoFinal)) return reply(mess.registroComandoDonoBloqueado(comandoFinal));
const idSticker = sticker.fileSha256.toString('base64');
const lista = dataGp[0].comandosFigurinha;
const existente = lista.find(x => x?.id === idSticker);
const registro = { id: idSticker, comando: comandoFinal, descricao, registradoPor: sender, registradoEm: Date.now() };
if (existente) Object.assign(existente, registro); else lista.push(registro);
setGp(dataGp);
return reply(mess.figRegistroSucesso(comandoFinal, descricao));
} catch (e) { console.log(e); return reply(mess.error()); }
}
break;

case 'delfig':
{
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins && !SoDono) return reply(mess.onlyAdmins());
if (!dataGp[0].figComandosAtivo) return reply(mess.figComandosDesativados(prefix));
const sticker = info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.stickerMessage;
if (!sticker) return reply(mess.figRegistroSemSticker(prefix));
const idSticker = sticker.fileSha256.toString('base64');
const antes = dataGp[0].comandosFigurinha.length;
dataGp[0].comandosFigurinha = dataGp[0].comandosFigurinha.filter(x => x?.id !== idSticker);
if (antes === dataGp[0].comandosFigurinha.length) return reply(mess.figRegistroNaoEncontrado());
setGp(dataGp);
return reply(mess.figRegistroRemovido());
}
break;

case 'cmdfig':
case 'comandofig':
case 'comandosfig':
{
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins && !SoDono) return reply(mess.onlyAdmins());
const opcao = String(q || '').trim().toLowerCase();
if (['list', 'lista'].includes(opcao)) {
if (!dataGp[0].figComandosAtivo) return reply(mess.figComandosDesativados(prefix));
const lista = dataGp[0].comandosFigurinha || [];
if (!lista.length) return reply(mess.figListaVazia());
return reply(mess.figLista(lista, prefix));
}
dataGp[0].figComandosAtivo = !dataGp[0].figComandosAtivo;
setGp(dataGp);
return reply(mess.figComandosStatus(dataGp[0].figComandosAtivo, prefix));
}
break;

case 'listafig':
case 'figlist':
{
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins && !SoDono) return reply(mess.onlyAdmins());
if (!dataGp[0].figComandosAtivo) return reply(mess.figComandosDesativados(prefix));
const lista = dataGp[0].comandosFigurinha || [];
if (!lista.length) return reply(mess.figListaVazia());
return reply(mess.figLista(lista, prefix));
}
break;

case 'addsub':
case 'subbot':
{
if (!SoDono)
return reply(mess.onlyOwner());
const numeroBot = args[0]?.replace(/\D/g, '');
if (!numeroBot)
return reply(mess.niReply0051({ e0: () => (prefix) }));
try {
await stopSubBot(numeroBot).catch(() => { });
const code = await createPairCode(numeroBot);
const textoPareamento = mess.niReply0052({ e0: () => (numeroBot), e1: () => (code) });
if (usarBotoes()) {
await relayButtonMessage(yuta, from, {
interactiveMessage: {
body: { text: textoPareamento },
footer: { text: `✦ ${NomeDoBot} ✦` },
contextInfo: { ...NkChannelKk, mentionedJid: [sender] },
nativeFlowMessage: {
buttons: [{
name: 'cta_copy',
buttonParamsJson: JSON.stringify({
display_text: '𝙲𝙾𝙿𝙸𝙰𝚁 𝙲𝙾𝙳𝙸𝙶𝙾',
copy_code: code
})
}],
messageParamsJson: '{}',
messageVersion: 1
}
}
}, { quoted: yt });
} else {
reply(textoPareamento);
}
}
catch (e) {
console.log(e);
reply(mess.niReply0053({ e0: () => (e?.message || 'ᴇʀʀᴏ ᴀᴏ ɢᴇʀᴀʀ ᴏ ᴄᴏ́ᴅɪɢᴏ 🙇‍♂️') }));
}
}
break;

case 'setprefixsub':
case 'prefixsub':
{
if (!SoDono)
return reply(mess.onlyOwner());
const rawSubArgs = String(q || '').trim();
const subArgs = rawSubArgs.split(/\s+/).filter(Boolean);
let numeroBot = null;
let novoPrefixo = null;

if (isSubBot && subArgs.length === 1) {
numeroBot = subNumber;
novoPrefixo = subArgs[0];
} else if (subArgs.length >= 2) {
numeroBot = subArgs[0]?.replace(/\D/g, '');
novoPrefixo = subArgs.slice(1).join('').trim();
} else if (!isSubBot && subArgs.length === 1) {
const dbAtual = loadSubDB();
const onlineSubs = Object.keys(global.subBots || {});
const salvos = Object.keys(dbAtual || {});
const alvoUnico = onlineSubs.length === 1 ? onlineSubs[0] : (salvos.length === 1 ? salvos[0] : null);
if (alvoUnico) {
numeroBot = alvoUnico;
novoPrefixo = subArgs[0];
}
}

novoPrefixo = normalizeSubPrefix(novoPrefixo);

if (!numeroBot || !novoPrefixo)
return reply(`${mess.niReply0054({ e0: () => (prefix) })}
> *ɴᴏ ꜱᴜʙ-ʙᴏᴛ:* ${prefix}prefixsub $`);

if (/\s/.test(novoPrefixo) || novoPrefixo.length > 5)
return reply('*ᴏ ᴘʀᴇꜰɪxᴏ ᴅᴏ ꜱᴜʙ-ʙᴏᴛ ɴᴀ̃ᴏ ᴘᴏᴅᴇ ᴛᴇʀ ᴇꜱᴘᴀᴄ̧ᴏ ᴇ ᴅᴇᴠᴇ ᴛᴇʀ ɴᴏ ᴍᴀ́xɪᴍᴏ 5 ᴄᴀʀᴀᴄᴛᴇʀᴇꜱ 🙇‍♂️*');

try {
const atualizado = updateSubPrefix(numeroBot, novoPrefixo);
if (!atualizado)
return reply(mess.niReply0055());
if (isSubBot && numeroBot === subNumber) {
yuta.__subInfo = atualizado;
yuta.__subPrefix = atualizado.prefixo;
}
reply(`${mess.niReply0056({ e0: () => (numeroBot), e1: () => (atualizado.prefixo) })}

> *ᴀɢᴏʀᴀ ᴜꜱᴇ:* ${atualizado.prefixo}menu`);
}
catch (e) {
console.log(e);
reply(mess.niReply0057());
}
}
break;

case 'listsub':
{
if (!SoDono)
return reply(mess.onlyOwner());
const db = loadSubDB();
const subs = Object.keys(db);
if (!subs.length)
return reply(mess.niReply0058());
let txt = `*\`𝗟𝗜𝗦𝗧𝗔 𝗗𝗘 𝗦𝗨𝗕-𝗕𝗢𝗧 𝗖𝗢𝗡𝗘𝗖𝗧𝗔𝗗𝗢𝗦 💁‍♂️\`*\n\n`;
subs.forEach((num, i) => {
const info = db[num];
const status = global.subBots?.[num] ? 'ᴏɴʟɪɴᴇ' : 'ᴏꜰꜰʟɪɴᴇ';
txt += `*${i + 1}.* ${num}\n*ᴘʀᴇꜰɪxᴏ:* ${normalizeSubPrefix(info.prefixo)}\n*ꜱᴛᴀᴛᴜꜱ:* ${status}\n\n`;
});
reply(txt.trim());
}
break;

case 'remsub':
case 'delsub':
{
if (!SoDono)
return reply(mess.onlyOwner());
const numeroBot = args[0]?.replace(/\D/g, '');
if (!numeroBot)
return reply(mess.niReply0059({ e0: () => (prefix) }));
const existe = global.subBots?.[numeroBot];
if (!existe) {
const db = loadSubDB();
if (!db[numeroBot])
return reply(mess.niReply0060());
}
try {
await stopSubBot(numeroBot);
reply(mess.niReply0061({ e0: () => (numeroBot) }));
}
catch (e) {
console.log(e);
reply(mess.niReply0062());
}
}
break;

case 'rgcmd':
{
try {
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins && !SoDono) return reply(mess.onlyAdmins());
if (!dataGp[0].noPrefixAtivo) return reply(mess.noPrefixDesativado(prefix));
if (!q) return reply(mess.noPrefixRegistroUso(prefix));
const partes = q.split('|').map(x => x.trim());
const semPrefixo = String(partes.shift() || '').replace(/\s+/g, ' ').trim().toLowerCase();
const comandoReal = String(partes.shift() || '').replace(/^\W+/, '').replace(/\s+/g, ' ').trim().toLowerCase();
const descricao = partes.join(' | ').trim() || 'Sem descrição informada.';
if (!semPrefixo || !comandoReal) return reply(mess.noPrefixRegistroUso(prefix));
if (!SoDono && __comandoEhDeDono(comandoReal)) return reply(mess.registroComandoDonoBloqueado(comandoReal));
const lista = dataGp[0].comandosNoPrefix;
const existente = lista.find(x => __normalizarComandoRegistrado(x?.cmdSemPrefixo) === __normalizarComandoRegistrado(semPrefixo));
const registro = { cmdSemPrefixo: semPrefixo, comandoOriginal: comandoReal, descricao, registradoPor: sender, registradoEm: Date.now() };
if (existente) Object.assign(existente, registro); else lista.push(registro);
setGp(dataGp);
return reply(mess.noPrefixRegistroSucesso(semPrefixo, comandoReal, descricao));
} catch (e) { console.log(e); return reply(mess.error()); }
}
break;

case 'delcmd':
{
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins && !SoDono) return reply(mess.onlyAdmins());
if (!dataGp[0].noPrefixAtivo) return reply(mess.noPrefixDesativado(prefix));
if (!q) return reply(mess.noPrefixRemoverUso(prefix));
const alvo = __normalizarComandoRegistrado(q);
const antes = dataGp[0].comandosNoPrefix.length;
dataGp[0].comandosNoPrefix = dataGp[0].comandosNoPrefix.filter(x => __normalizarComandoRegistrado(x?.cmdSemPrefixo) !== alvo);
if (antes === dataGp[0].comandosNoPrefix.length) return reply(mess.noPrefixNaoEncontrado(q));
setGp(dataGp);
return reply(mess.noPrefixRemovido(q));
}
break;

case 'noprefix':
{
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins && !SoDono) return reply(mess.onlyAdmins());
const opcao = String(q || '').trim().toLowerCase();
if (['list', 'lista'].includes(opcao)) {
if (!dataGp[0].noPrefixAtivo) return reply(mess.noPrefixDesativado(prefix));
const lista = dataGp[0].comandosNoPrefix || [];
if (!lista.length) return reply(mess.noPrefixListaVazia());
return reply(mess.noPrefixLista(lista, prefix));
}
dataGp[0].noPrefixAtivo = !dataGp[0].noPrefixAtivo;
setGp(dataGp);
return reply(mess.noPrefixStatus(dataGp[0].noPrefixAtivo, prefix));
}
break;

case 'noprefixlist':
case 'noprefix-list':
{
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins && !SoDono) return reply(mess.onlyAdmins());
if (!dataGp[0].noPrefixAtivo) return reply(mess.noPrefixDesativado(prefix));
const lista = dataGp[0].comandosNoPrefix || [];
if (!lista.length) return reply(mess.noPrefixListaVazia());
return reply(mess.noPrefixLista(lista, prefix));
}
break;

case 'infocmd':
case 'cmdinfo':
case 'ajudacmd':
{
const consulta = String(q || '').trim().toLowerCase();
if (!consulta || ['list', 'lista', 'dist'].includes(consulta))
return reply(mess.infoCmdLista(prefix));
const detalhe = mess.infoCmdDetalhe(consulta, prefix);
return reply(detalhe || mess.infoCmdNaoEncontrado(consulta, prefix));
}
break;

//=============[ SYSTEM ALUGUEL ]===========\

case 'autodivul': {
if (!SoDono) return reply(mess.onlyOwner());
const config = __autoDivulLoad();
if (config.ativo) {
config.ativo = false;
__autoDivulSave(config);
__autoDivulStop(yuta);
return reply(mess.autoDivulDesativada());
}
config.ativo = true;
config.indiceAtual = config.divulgacoes.length ? config.indiceAtual % config.divulgacoes.length : 0;
__autoDivulSave(config);
__autoDivulStart(yuta);
return reply(mess.autoDivulAtivada());
}
break;

case 'rg_divul': {
if (!SoDono) return reply(mess.onlyOwner());
if (!requireAutoDivulAtivo()) return;
const bruto = String(q || '');
if (!bruto.trim()) return reply(mess.autoDivulRgUso(prefix));
const separador = bruto.indexOf('/');
if (separador < 0) return reply(mess.autoDivulFormatoInvalido(prefix));
const tipo = __autoDivulNormalizeType(bruto.slice(0, separador));
if (!tipo) return reply(mess.autoDivulTipoInvalido(prefix));
const texto = bruto.slice(separador + 1).trim();
if (!texto) return reply(mess.autoDivulTextoVazio());
let arquivo = '';
if (tipo === 'imagem' || tipo === 'video') {
if (!__autoDivulMediaMessage(info, tipo))
return reply(mess.autoDivulMidiaNecessaria(tipo, prefix));
try {
arquivo = await __autoDivulSaveMedia(info, tipo);
} catch (error) {
console.log('[RG_DIVUL MEDIA]', error?.message || error);
return reply(mess.autoDivulMidiaErro(tipo));
}
}
const atual = __autoDivulLoad();
atual.divulgacoes.push({
id: __autoDivulNewId(),
tipo,
texto,
arquivo
});
try {
const salvo = __autoDivulSave(atual);
__autoDivulEnsureStarted(yuta);
return reply(mess.autoDivulRegistrada({
numero: salvo.divulgacoes.length,
tipo,
texto
}));
} catch (error) {
if (arquivo) __autoDivulRemoveMedia(arquivo);
console.log('[RG_DIVUL SAVE]', error?.message || error);
return reply(mess.error());
}
}
break;

case 'rm_divul': {
if (!SoDono) return reply(mess.onlyOwner());
if (!requireAutoDivulAtivo()) return;
if (!args[0]) return reply(mess.autoDivulRemoverUso(prefix));
const numero = Number(args[0]);
const atual = __autoDivulLoad();
if (!Number.isInteger(numero) || numero < 1 || numero > atual.divulgacoes.length)
return reply(mess.autoDivulDivulgacaoNaoEncontrada(atual.divulgacoes.length, prefix));
const removida = atual.divulgacoes.splice(numero - 1, 1)[0];
if (removida?.arquivo) __autoDivulRemoveMedia(removida.arquivo);
atual.indiceAtual = atual.divulgacoes.length ? atual.indiceAtual % atual.divulgacoes.length : 0;
__autoDivulSave(atual);
__autoDivulEnsureStarted(yuta);
return reply(mess.autoDivulDivulgacaoRemovida({
numero,
tipo: removida?.tipo,
texto: removida?.texto
}));
}
break;

case 'lista_divul': {
if (!SoDono) return reply(mess.onlyOwner());
if (!requireAutoDivulAtivo()) return;
const atual = __autoDivulLoad();
return reply(mess.autoDivulLista(atual));
}
break;

case 'rg_group': {
if (!SoDono) return reply(mess.onlyOwner());
if (!requireAutoDivulAtivo()) return;
let gruposDisponiveis;
try {
gruposDisponiveis = await __autoDivulFetchGroups(yuta);
} catch (error) {
console.log('[RG_GROUP LIST]', error?.message || error);
return reply(mess.error());
}
if (!gruposDisponiveis.length) return reply(mess.autoDivulGruposVazios(prefix));
if (!q.trim()) return reply(mess.autoDivulGruposDisponiveis(gruposDisponiveis, __autoDivulLoad().grupos, prefix));
const numeroGrupo = Number(args[0]);
if (!Number.isInteger(numeroGrupo) || numeroGrupo < 1 || numeroGrupo > gruposDisponiveis.length)
return reply(mess.autoDivulGrupoIndiceInvalido(gruposDisponiveis.length, prefix));
const grupoSelecionado = gruposDisponiveis[numeroGrupo - 1];
const grupoJid = String(grupoSelecionado?.id || '').trim();
const configGrupo = __autoDivulLoad();
const grupoExistente = configGrupo.grupos.find(grupo => grupo.jid === grupoJid);
if (grupoExistente) return reply(mess.autoDivulGrupoJaRegistrado(grupoExistente.nome || grupoSelecionado.subject));
configGrupo.grupos.push({
jid: grupoJid,
nome: grupoSelecionado.subject || 'ɢʀᴜᴘᴏ sᴇᴍ ɴᴏᴍᴇ'
});
__autoDivulSave(configGrupo);
__autoDivulEnsureStarted(yuta);
return reply(mess.autoDivulGrupoRegistrado(grupoSelecionado.subject));
}
break;

case 'rm_group': {
if (!SoDono) return reply(mess.onlyOwner());
if (!requireAutoDivulAtivo()) return;
if (!args[0]) return reply(mess.autoDivulGrupoRemoverUso(prefix));
const atual = __autoDivulLoad();
if (!atual.grupos.length) return reply(mess.autoDivulGrupoListaVazia(prefix));
const numeroGrupo = Number(args[0]);
if (!Number.isInteger(numeroGrupo) || numeroGrupo < 1 || numeroGrupo > atual.grupos.length)
return reply(mess.autoDivulGrupoIndiceInvalido(atual.grupos.length, prefix));
const removido = atual.grupos.splice(numeroGrupo - 1, 1)[0];
__autoDivulSave(atual);
__autoDivulEnsureStarted(yuta);
return reply(mess.autoDivulGrupoRemovido(removido?.nome));
}
break;

case 'tempo_divul': {
if (!SoDono) return reply(mess.onlyOwner());
if (!requireAutoDivulAtivo()) return;
const intervalo = __autoDivulNormalizeTime(String(q || '').trim());
if (!intervalo) return reply(mess.autoDivulTempoUso(prefix));
const atual = __autoDivulLoad();
atual.intervalo = intervalo;
__autoDivulSave(atual);
if (atual.ativo) __autoDivulStart(yuta);
else __autoDivulStop(yuta);
return reply(mess.autoDivulTempoSalvo(intervalo));
}
break;

case 'modoaluguel': {
try {
if (!SoDono) return reply(mess.onlyOwner())
const ativo = !__aluguelModoAtivo()
__aluguelSetModo(ativo)
return reply(mess.aluguelModo(ativo, prefix, NomeDoBot))
} catch (e) {
console.log('[MODOALUGUEL]', e)
return reply(mess.error())
}
}
break

case 'ajudaaluguel':
case 'aluguelhelp':
case 'painelaluguel':
case 'painelalugar': {
if (!__aluguelModoAtivo()) return reply(mess.aluguelDesligado(prefix))
const cfg = __aluguelConfigLoad()
return reply(mess.painelAluguel({
prefix,
aluguelAtivo: __aluguelModoAtivo(),
pixAtivo: __pixModoAtivo(),
pixManualSalvo: !!cfg.chavePix,
planosTexto: __aluguelTextoPlanos()
}))
}
break

case 'aguardar':
case 'aguardaraluguel':
case 'aguardar_aluguel': {
if (isGroup) return reply('*ᴇssᴇ ᴄᴏᴍᴀɴᴅᴏ ᴇ́ ᴜsᴀᴅᴏ ɴᴏ ᴘᴠ ᴅᴏ ʙᴏᴛ, ʀᴇsᴘᴏɴᴅᴇɴᴅᴏ ᴏ ᴀᴠɪsᴏ ᴅᴇ ᴀʟᴜɢᴜᴇʟ.*')
const feito = await __aluguelHandleAcaoPvDono('aguardar')
if (feito) return
return reply(mess.aluguelPvReplyUso(prefix))
}
break

case 'modopix':
case 'modopixauto': {
try {
if (!__aluguelModoAtivo()) return reply(mess.aluguelDesligado(prefix))
if (!SoDono) return reply(mess.onlyOwner())
const ativo = !__pixModoAtivo()
__pixSetModo(ativo)
return reply(mess.pixModo(ativo, prefix, NomeDoBot))
} catch (e) {
console.log('[MODOPIX]', e)
return reply(mess.error())
}
}
break

case 'chavepix':
case 'editchave':
case 'chavepixaluguel': {
if (!__aluguelModoAtivo()) return reply(mess.aluguelDesligado(prefix))
if (!SoDono) return reply(mess.onlyOwner())
const cfg = __aluguelConfigLoad()
const chave = String(q || '').trim()
if (!chave) return reply(mess.chavePixUso(prefix, NomeDoBot))
cfg.chavePix = chave
if (!cfg.nomePix) cfg.nomePix = ownerName || 'Nk Petrov'
__aluguelConfigSave(cfg)
return reply(mess.chavePixSalva(cfg.chavePix, NomeDoBot))
}
break

case 'tokenpix':
case 'token-pix':
case 'mp':
case 'lighthouse':
case 'setmercadopago':
case 'setmp': {
if (!__aluguelModoAtivo()) return reply(mess.aluguelDesligado(prefix))
if (!SoDono) return reply(mess.onlyOwner())
const br = String.fromCharCode(10)
const cfg = __aluguelConfigLoad()
const token = String(q || '').trim()
if (!token) {
return reply(mess.tokenPixInfo({
tokenSalvo: !!cfg.mercadoPagoAccessToken,
pixAtivo: __pixModoAtivo(),
prefix
}))
}
cfg.mercadoPagoAccessToken = token
cfg.tokenMP = token
__aluguelConfigSave(cfg)
return reply(mess.tokenPixSalvo(prefix, NomeDoBot))
}
break

case 'pixdados':
case 'dadospix':
case 'setpixaluguel': {
if (!__aluguelModoAtivo()) return reply(mess.aluguelDesligado(prefix))
if (!SoDono) return reply(mess.onlyOwner())
const br = String.fromCharCode(10)
const cfg = __aluguelConfigLoad()
const texto = String(q || '').trim()
if (!texto) {
return reply(mess.pixDadosUso(prefix, NomeDoBot))
}
const partes = texto.split('|').map(x => x.trim()).filter(Boolean)
if (partes.length < 2) return reply(mess.pixDadosFaltou(prefix, NomeDoBot))
const [nome, chave] = partes
if (!nome || !chave) return reply(mess.pixDadosFaltou(prefix, NomeDoBot))
cfg.nomePix = nome
cfg.chavePix = chave
__aluguelConfigSave(cfg)
return reply(mess.pixDadosSalvo(cfg.nomePix, cfg.chavePix, NomeDoBot))
}
break

case 'plano':
case 'planos':
case 'rg_plano':
case 'planosaluguel':
case 'planos_aluguel':
case 'planoaluguel':
case 'setplanoaluguel':
case 'editarplanoaluguel':
case 'delplanoaluguel':
case 'removerplanoaluguel': {
const br = String.fromCharCode(10)
if (!__aluguelModoAtivo()) return reply(mess.aluguelDesligado(prefix))
const cmdAtual = String(command || '').toLowerCase()
const sub = String(args[0] || '').toLowerCase()
const cfg = __aluguelConfigLoad()

function mostrarPlanos() {
return reply(mess.planoMenu({
planosTexto: __aluguelTextoPlanos(),
pixAtivo: __pixModoAtivo(),
prefix,
isDono: SoDono
}))
}

if (!q?.trim() && !["setplanoaluguel", "editarplanoaluguel", "delplanoaluguel", "removerplanoaluguel"].includes(cmdAtual)) return mostrarPlanos()
if (!SoDono) return mostrarPlanos()

if (["delplanoaluguel", "removerplanoaluguel"].includes(cmdAtual) || ["del", "remover", "apagar", "rm"].includes(sub)) {
const idRaw = (["del", "remover", "apagar", "rm"].includes(sub) ? args[1] : args[0])
const idNum = String(idRaw || '').replace(/\D/g, '')
const planoId = idNum ? `${idNum}DIAS` : String(idRaw || '').trim().toUpperCase()
if (!planoId) return reply(mess.planoRemoverUso(prefix))
const antes = Array.isArray(cfg.planos) ? cfg.planos.length : 0
cfg.planos = (cfg.planos || []).filter(p => String(p.id).toUpperCase() !== planoId)
cfg.planosRegistrados = true
if (cfg.planos.length === antes) return reply(mess.planoNaoAchado(planoId, prefix))
__aluguelConfigSave(cfg)
return reply(mess.planoRemovido(planoId))
}

let dias = 0, valor = 0, titulo = ""
const textoPlano = String(q || '').trim().toLowerCase()
if (textoPlano.includes('|')) {
const partes = textoPlano.split('|').map(x => x.trim())
dias = parseInt((partes[0] || '').replace(/\D/g, '')) || 0
valor = Number((partes[1] || '').replace(',', '.').replace(/[^0-9.]/g, '')) || 0
} else {
dias = parseInt(args[0]) || 0
valor = Number(String(args[1] || '').replace(',', '.').replace(/[^0-9.]/g, '')) || 0
}
titulo = `${dias} Dias`

if (!dias || dias <= 0 || !valor || valor <= 0) return reply(mess.planoUso(prefix, NomeDoBot))

const id = `${dias}DIAS`
const novoPlano = { id, titulo, dias, horas: 0, valor, grupos: 1 }
if (!Array.isArray(cfg.planos) || cfg.planosRegistrados !== true) cfg.planos = []
cfg.planosRegistrados = true
const idxPlano = cfg.planos.findIndex(p => String(p.id).toUpperCase() === id)
if (idxPlano >= 0) cfg.planos[idxPlano] = { ...cfg.planos[idxPlano], ...novoPlano }
else cfg.planos.push(novoPlano)
__aluguelConfigSave(cfg)
return reply(mess.planoSalvo({ dias, valor: __formatBRL(valor), prefix }))
}
break

case 'removeraluguel':
case 'removealuguel':
case 'rm_aluguel': {
if (!__aluguelModoAtivo()) return reply(mess.aluguelDesligado(prefix))
if (!SoDono) return reply(mess.onlyOwner())
if (args[0]) {
const index = parseInt(args[0]) - 1
if (isNaN(index) || index < 0 || index >= gruposAutorizados.length)
return reply(`*ᴜsᴇ: *rm_aluguel 1*`)
const alvo = gruposAutorizados[index]
await desativarAluguelGrupo(alvo.id)
return reply(`*✅ ᴀʟᴜɢᴜᴇʟ ᴅᴏ ɢʀᴜᴩᴏ ʀᴇᴍᴏᴠɪᴅᴏ ᴄᴏᴍ ꜱᴜᴄᴇꜱꜱᴏ ꜱᴇɴʜᴏʀ(ᴀ)*`)
}
if (!isGroup) return reply(mess.onlyGroup())
const grupo = gruposAutorizados.find(g => g.id === from)
if (!grupo) return reply(`*ᴇssᴇ ɢʀᴜᴘᴏ ɴᴀ̃ᴏ ᴇsᴛᴀ́ ᴀʟᴜɢᴀᴅᴏ. 🤷‍♂️*`)
await desativarAluguelGrupo(from)

reply(`*✅ ᴀʟᴜɢᴜᴇʟ ʀᴇᴍᴏᴠɪᴅᴏ ᴅᴇsᴛᴇ ɢʀᴜᴘᴏ.* 🔓🤷‍♂️`)
}
break

case 'lista_aluguel': {
if (!__aluguelModoAtivo()) return reply(mess.aluguelDesligado(prefix))
if (gruposAutorizados.length === 0) return reply(`*ɴᴇɴʜᴜᴍ ɢʀᴜᴘᴏ ᴇsᴛᴀ́ ᴀʟᴜɢᴀᴅᴏ ɴᴏ ᴍᴏᴍᴇɴᴛᴏ.* 🙇‍♂️`)
let texto = `╭─❉ *𝐆𝐑𝐔𝐏𝐎𝐒 𝐂𝐎𝐌 𝐀𝐋𝐔𝐆𝐔𝐄𝐋 𝐀𝐓𝐈𝐕𝐎*\n\n`
for (let i = 0; i < gruposAutorizados.length; i++) {
const g = gruposAutorizados[i]
try {
const meta = await yuta.groupMetadata(g.id)
const nome = meta.subject || '🕯️ ɢʀᴜᴘᴏ sᴇᴍ ɴᴏᴍᴇ'
const membros = meta.participants.length || 0
const inviteCode = await yuta.groupInviteCode(g.id).catch(() => null)
const link = inviteCode ? `https://chat.whatsapp.com/${inviteCode}` : '🔒 ʟɪɴᴋ ɪɴᴅɪsᴘᴏɴíᴠᴇʟ'
const expira = new Date(g.expiraEm)
const agora = new Date()
const restante = expira - agora
const dias = Math.floor(restante / (1000 * 60 * 60 * 24))
const horas = Math.floor((restante / (1000 * 60 * 60)) % 24)
const minutos = Math.floor((restante / (1000 * 60)) % 60)
texto +=`• *${i + 1}.* ✨ *${nome}*\n• 🔗 ʟɪɴᴋ: ${link}\n• 👤 ᴍᴇᴍʙʀᴏs: ${membros}\n• ⏳ ᴛᴇᴍᴘᴏ ʀᴇsᴛᴀɴᴛᴇ: ${dias}d ${horas}h ${minutos}m\n─────────────────────────────\n`
} catch {
texto +=
`*${i + 1}.* 💀 ɴᴀ̃ᴏ ᴄᴏɴsᴇɢᴜɪ ᴘᴇɢᴀʀ ᴅᴀᴅᴏs ᴅᴏ ɢʀᴜᴘᴏ\n🆔 ID: ${g.id}\n─────────────────────────────\n`
}
}
reply(texto.trim())
}
break


case 'veraluguel':
case 'ver_aluguel': {
if (!isGroup) return reply(mess.onlyGroup())
if (!__aluguelModoAtivo()) return reply(mess.aluguelDesligado(prefix))
const grupo = gruposAutorizados.find(g => g.id === from)
if (!grupo) return reply('*ᴇsᴛᴇ ɢʀᴜᴘᴏ ɴᴀ̃ᴏ ᴘᴏssᴜɪ ᴀʟᴜɢᴜᴇʟ ᴀᴛɪᴠᴏ. 🤷‍♂️*')
const agora = new Date()
const expira = new Date(grupo.expiraEm)
if (isNaN(expira)) return reply('*ᴇʀʀᴏ ᴀᴏ ʟᴇʀ ᴀ ᴅᴀᴛᴀ ᴅᴏ ᴀʟᴜɢᴜᴇʟ. 💁‍♂️*')
if (agora > expira) {
desativarAluguelGrupo(from, { motivo: 'vencimento' })
return reply('*ᴏ ᴀʟᴜɢᴜᴇʟ ᴅᴇsᴛᴇ ɢʀᴜᴘᴏ ᴇxᴘɪʀᴏᴜ. 🤷‍♂️*')
}
const diff = expira - agora
const dias = Math.floor(diff / (1000 * 60 * 60 * 24))
const horas = Math.floor((diff / (1000 * 60 * 60)) % 24)
const min = Math.floor((diff / (1000 * 60)) % 60)
const dataFormada = expira.toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })
reply(mess.veraluguel(dataFormada, dias, horas, min))
}
break

case 'rg_aluguel':
case 'aluguel': {
if (!__aluguelModoAtivo()) return reply(mess.aluguelDesligado(prefix))
if (!SoDono) return reply(mess.onlyOwner())
if (!q) return reply(mess.rgAluguelUso(prefix))

try {
let idgp = from, nome = groupName || "ɢʀᴜᴘᴏ ᴀᴛᴜᴀʟ", dias = 0, horas = 0, minutos = 0, n = null

const lerTempoAluguel = (texto = '') => {
const planoTempo = __aluguelPlanoOuTempo(texto)
if (planoTempo) return planoTempo
texto = String(texto || '').trim().toLowerCase()
let d = 0, h = 0, m = 0
if (!texto) return { dias: d, horas: h, minutos: m }
const rx = /(\d+)\s*(dias?|d|horas?|hrs?|h|minutos?|mins?|m)\b/g
let achou = false
let r
while ((r = rx.exec(texto)) !== null) {
achou = true
const valor = parseInt(r[1]) || 0
const unidade = r[2]
if (/^d/.test(unidade)) d += valor
else if (/^h/.test(unidade)) h += valor
else if (/^m/.test(unidade)) m += valor
}
if (!achou) {
const partes = texto.split(/\s+/).map(x => parseInt(x)).filter(n => Number.isFinite(n))
d = partes[0] || 0
h = partes[1] || 0
m = partes[2] || 0
}
return { dias: d, horas: h, minutos: m }
}

if (q.includes('/')) {
const [numGp, tempo] = q.split('/').map(x => x.trim())
n = Number(numGp)
const tempoLido = lerTempoAluguel(tempo)
dias = tempoLido.dias
horas = tempoLido.horas
minutos = tempoLido.minutos

if (!Number.isInteger(n) || n < 1) return reply(mess.rgAluguelNumeroGrupoInvalido(prefix))

const gps = Object.values(await yuta.groupFetchAllParticipating()).sort((a,b)=>(b.participants?.length||b.size||0)-(a.participants?.length||a.size||0))
if (!gps[n - 1]) return reply(mess.rgAluguelIndiceInvalido(gps.length))

idgp = gps[n - 1].id
nome = gps[n - 1].subject || "sᴇᴍ ɴᴏᴍᴇ"
} else {
if (!isGroup) return reply(mess.rgAluguelUseNoGrupoOuLista(prefix))
const tempoLido = lerTempoAluguel(q)
dias = tempoLido.dias
horas = tempoLido.horas
minutos = tempoLido.minutos
}

if (dias <= 0 && horas <= 0 && minutos <= 0) return reply(mess.rgAluguelTempoInvalido(prefix))

ativarAluguelGrupo(idgp, dias, horas, minutos)

const expira = new Date(Date.now() + (((dias * 24 + horas) * 60) + minutos) * 60 * 1000)
const dataFormatada = expira.toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })

reply(mess.rgAluguelRegistrado({ dataFormatada, numero: n, nome, tempo: `${dias}d ${horas}h ${minutos}m` }))
} catch (e) {
reply(String(e))
}
}
break


//=================[ FIM DO ALUGUEL ]==============\\

//=============[ CMD DONO/ADM'S ]==============\\

case 'fechargp':
case 'fechamento':
{
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
try {
let barra = q.trim();
if (!barra) {
await yuta.groupSettingUpdate(from, 'announcement');
return reply(mess.niReply0206());
}
if (!barra.includes(':'))
return reply(mess.niReply0090());
let [horas, minutos] = barra.split(':');
if (!horas || !minutos)
return reply(mess.niReply0091());
if (isNaN(horas) || isNaN(minutos))
return reply(mess.niReply0092());
horas = horas.padStart(2, '0');
minutos = minutos.padStart(2, '0');
if (parseInt(horas) > 23 || parseInt(minutos) > 59)
return reply(mess.niReply0093());
let horarioFinal = `${horas}:${minutos}:00`;
definirFechamento(from, horarioFinal);
await reply(mess.niReply0094({ e0: () => (horarioFinal) }));
}
catch (e) {
console.error(mess.niConsole014(), e);
reply(mess.niReply0095());
}
}
break;

case 'abrirgp':
case 'abertura':
{
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
try {
let barra = q.trim();
if (!barra) {
await yuta.groupSettingUpdate(from, 'not_announcement');
return reply(mess.niReply0204());
}
if (!barra.includes(':'))
return reply(mess.niReply0096());
let [horas, minutos] = barra.split(':');
if (!horas || !minutos)
return reply(mess.niReply0097());
if (isNaN(horas) || isNaN(minutos))
return reply(mess.niReply0098());
horas = horas.padStart(2, '0');
minutos = minutos.padStart(2, '0');
if (parseInt(horas) > 23 || parseInt(minutos) > 59)
return reply(mess.niReply0099());
let horarioFinal = `${horas}:${minutos}:00`;
definirAbertura(from, horarioFinal);
reply(mess.niReply0100({ e0: () => (horarioFinal) }));
}
catch (e) {
console.error(mess.niConsole015(), e);
reply(mess.niReply0101());
}
}
break;

case 'rmhorario':
case 'remover_horario':
case 'removerhorario':
{
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
try {
if (!horarios[from])
return reply(mess.niReply0102());
removerHorarios(from);
reply(mess.niReply0103());
}
catch (e) {
console.error(mess.niConsole016(), e);
reply(mess.niReply0104());
}
}
break;

case 'ngl':
case 'sendngl':
try {
if (!q.includes("|")) {
return reply(mess.niReply0105({ e0: () => (prefix) }));
}
let partes = q.split("|").map(x => x.trim());
if (partes.length < 3) {
return reply(mess.niReply0106());
}
let [link, mensagem, quantidade] = partes;
if (!link.includes("ngl.link"))
return reply(mess.niReply0107());
let username = link.split("ngl.link/")[1].replace("/", "");
if (!username)
return reply(mess.niReply0108());
let total = parseInt(quantidade);
if (isNaN(total) || total <= 0)
return reply(mess.niReply0109());
if (total > 20) {
return reply(mess.niReply0110());
}
reply(mess.niReply0111({ e0: () => (total), e1: () => (username) }));
function gerarUUIDv4() {
return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
const r = Math.random() * 16 | 0;
const v = c === 'x' ? r : (r & 0x3 | 0x8);
return v.toString(16);
});
}
for (let i = 0; i < total; i++) {
let deviceId = gerarUUIDv4();
await axios.post("https://ngl.link/api/submit", {
username: username,
question: mensagem,
deviceId: deviceId
}, {
headers: { "Content-Type": "application/json" }
});
await new Promise(resolve => setTimeout(resolve, 1000));
}
return reply(mess.niReply0112({ e0: () => (total) }));
}
catch (err) {
console.error(err);
return reply(mess.error());
}
break;

case 'banfake': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
if (q && isNaN(q)) {
return reply(mess.niReply0113());
}
try {
const groupMetadata = await yuta.groupMetadata(from);
const participants = groupMetadata.participants;
const prefixo = q || '55';
const estrangeiros = participants
.filter(i => {
const jid = normalizar(i.id);
const isEstrangeiro = !jid.startsWith(prefixo);
const isBot = jid === yuta.user.id;
const isNotAdmin = i.admin === null;
return isEstrangeiro && !isBot && isNotAdmin;
})
.map(i => normalizar(i.id));
if (estrangeiros.length === 0)
return reply(mess.niReply0114());
await yuta.groupParticipantsUpdate(from, estrangeiros, 'remove');
reply(mess.niReply0115({ e0: () => (estrangeiros.length) }));
}
catch (err) {
console.error(err);
reply(mess.niReply0116());
}
break;
}
case 'listafake':
case 'listafakes': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
reagir(from, "🇺🇸");
let totalFake = 0;
let linhasFake = '';
let mencionadosFake = [];
for (let membro of groupMembers) {
const jid = normalizarMencaoGrupo(membro);
const numero = jid.split("@")[0];
if (!numero.startsWith("55")) {
totalFake++;
if (isGroupAdmins)
mencionadosFake.push(jid);
linhasFake += `> *${totalFake}. ${isGroupAdmins ? '@' : 'https://wa.me/'}${numero}*\n`;
}
}
let txtFake = mess.niListaFakesGrupo({ e0: () => (totalFake), e1: () => (linhasFake.trim()) });
if (totalFake > 0) {
if (isGroupAdmins) {
yuta.sendMessage(from, { text: txtFake, mentions: mencionadosFake }, { quoted: yt });
}
else
reply(txtFake);
}
else
reply(mess.niReply0117());
break;
}
case 'brlist':
case 'listabr': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
reagir(from, "🇧🇷");
let totalBr = 0;
let linhasBr = '';
let mencionadosBr = [];
for (let membro of groupMembers) {
const jid = normalizarMencaoGrupo(membro);
const numero = jid.split("@")[0];
if (numero.startsWith("55") && !botNumber.includes(jid)) {
totalBr++;
if (isGroupAdmins)
mencionadosBr.push(jid);
linhasBr += `> *${totalBr}. ${isGroupAdmins ? '@' : 'https://wa.me/'}${numero}*\n`;
}
}
let txtBr = mess.niListaBrasileirosGrupo({ e0: () => (totalBr), e1: () => (linhasBr.trim()) });
if (totalBr > 0) {
if (isGroupAdmins) {
yuta.sendMessage(from, { text: txtBr, mentions: mencionadosBr }, { quoted: yt });
}
else
reply(txtBr);
}
else
reply(mess.niReply0118());
break;
}
case 'autorizar':
case 'aceitar':
case '✅':
{
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
const pendentes = await yuta.groupRequestParticipantsList(from);
const total = pendentes?.length || 0;
if (total === 0)
return reply(mess.niReply0119());
for (const p of pendentes) {
await yuta.groupRequestParticipantsUpdate(from, [p.jid], 'approve');
}
reply(mess.niReply0120({ e0: () => (total) }));
}
break;

case 'recusar':
case 'negar':
case '❌':
{
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
const pendentes = await yuta.groupRequestParticipantsList(from);
const total = pendentes?.length || 0;
if (total === 0)
return reply(mess.niReply0121());
for (const p of pendentes) {
await yuta.groupRequestParticipantsUpdate(from, [p.jid], 'reject');
}
reply(mess.niReply0122({ e0: () => (total) }));
}
break;

case '📃':
case 'solicitacao':
case 'soli': {
try {

if (!isGroup)
return reply(mess.onlyGroup());

if (!isGroupAdmins)
return reply(mess.onlyAdmins());

console.log("pegando solicitações...");

const solAll = await yuta.groupRequestParticipantsList(from);

console.log(solAll);

if (!solAll || solAll.length === 0)
return reply(mess.niReply0123());

const formatted = solAll.map((item, idx) => {

const phone = item.phone_number || item.jid || '';
const num = phone.split('@')[0];

const ddi = num.slice(0, 2);

const nacionalidade = ddi === '55'
? 'ʙʀᴀsɪʟᴇɪʀᴏ 🇧🇷'
: 'ᴇsᴛʀᴀɴɢᴇɪʀᴏ 🌎';

return mess.niSolicitacoesLinha({
e0: () => (idx + 1),
e1: () => (num),
e2: () => (item.request_method),
e3: () => (nacionalidade)
});

}).join('\n━━━━━━━━━━━━━━\n');

console.log("texto:", formatted);

const mentionsList = solAll.map(item => item.phone_number || item.jid);

await yuta.sendMessage(from, {
text: mess.niSolicitacoesPendentesLista({
e0: () => (formatted)
}),
mentions: mentionsList
}, { quoted: yt });

}
catch (err) {
console.error("ERRO SOLI:", err);
reply(mess.niReply0124());
}

break;
}
case 'getsite':
try {
if (!SoDono)
return reply(mess.niReply0125());
if (!q.includes('http'))
return reply(mess.niReply0126());
if (q.includes('xvideos'))
return reply(mess.niReply0127());
const result = await getHtml(q.trim());
if (!result)
return reply(mess.niReply0128());
yuta.sendMessage(from, {
document: fs.readFileSync(result),
mimetype: 'text/plain',
fileName: 'Source HTML'
}, {
quoted: yt
});
DLT_FL(result);
}
catch (e) {
console.error(e);
reply(mess.niReply0129());
}
break;


case 'entrar':
case 'entrargp': {
try {
if (!SoDono) return reply(mess.niReply0130());
const link = q?.trim();
const invite = link?.match(/chat\.whatsapp\.com\/(?:invite\/)?([A-Za-z0-9]+)/i)?.[1];
if (!invite) return reply(mess.niReply0131());
reply(mess.niReply0132());
await yuta.groupAcceptInvite(invite);
} catch (webSexo) {
console.error(webSexo);
reply(mess.niReply0133());
}
break;
}

case 'apresentar':
case 'apr':
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
inff = mess.niApresentarGrupo({ e0: () => groupName });
yuta.sendMessage(from, { text: inff, contextInfo: NkChannelKk }, { quoted: yt });
break;

case 'papof':
case 'regraspp':
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
txtz = mess.niRegrasApresentacaoPapo();
yuta.sendMessage(from, { text: txtz, contextInfo: NkChannelKk }, { quoted: yt });
break;

case 'digt':
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
bla = mess.niDigtApresentacao();
yuta.sendMessage(from, { text: bla, contextInfo: NkChannelKk }, { quoted: yt });
break;

case 'ban':
case 'banir':
case 'kick':
case 'avadakedavra':
if (!isGroupAdmins && !SoDono)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
try {
if (!menc_os2 || menc_jid2[1])
return reply(mess.niReply0134());
if (!JSON.stringify(groupMembers).includes(menc_os2))
return reply(mess.niReply0135());
if (botNumber.includes(menc_os2)) {
return reply(mess.niReply0136());
}
if (numerodono.includes(menc_os2)) {
return reply(mess.niReply0137());
}
await yuta.sendMessage(from, { text: mess.niText1268({ e0: () => (menc_os2.split("@")[0]) }), contextInfo: { ...NkChannelKk, mentionedJid: [menc_os2] } }, { quoted: yt });
await yuta.groupParticipantsUpdate(from, [normalizar(menc_os2)], "remove");
}
catch (e) {
console.error(e);
reply(mess.error());
}
break;

case 'promover':
{
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
const toNum = (v) => String(v || '').replace(/\D/g, '');
let dataAR = getGroupConfig(from, [{}]) || [{}];
if (!dataAR[0])
dataAR[0] = {};
const antiAtivo = !!dataAR?.[0]?.antiroubo;
if (antiAtivo) {
const permitidosNums = Array.isArray(dataAR[0].ar_permitidos)
? dataAR[0].ar_permitidos.map(toNum).filter(Boolean)
: [];
const permitidosLidNums = Array.isArray(dataAR[0].ar_permitidos_lid)
? dataAR[0].ar_permitidos_lid.map(toNum).filter(Boolean)
: [];
const senderNum = toNum(sender);
const senderRaw = info?.key?.participant || info?.key?.sender || sender;
const senderRawNum = toNum(senderRaw);
const senderIdsNums = [
info?.key?.participantAlt,
info?.key?.senderAlt,
info?.participantAlt,
info?.participant,
info?.key?.participant,
sender,
senderRaw
].map(toNum).filter(Boolean);

const donoEspecial = dataAR[0].ar_dono_global || {};
const telefoneEspecial = toNum(donoEspecial.phone);
const lidEspecial = toNum(donoEspecial.lid);

const donoEspecialAutorizado =
!!(
(telefoneEspecial && senderIdsNums.includes(telefoneEspecial)) ||
(lidEspecial && senderIdsNums.includes(lidEspecial))
);

const autorizado = SoDono ||
donoEspecialAutorizado ||
(senderNum && permitidosNums.includes(senderNum)) ||
(senderRawNum && permitidosLidNums.includes(senderRawNum));
if (!autorizado)
return reply(mess.niReply0138({ prefix }));
}
if (!menc_os2 || menc_jid2[1])
return reply(mess.niReply0139({ prefix }));
if (!isMemberInGroupFast(menc_os2))
return reply(mess.niReply0140({ prefix }));
const botJid = String(yuta.user?.id || '').split(':')[0] + '@s.whatsapp.net';
if (String(menc_os2) === String(botJid))
return reply(mess.niReply0141({ prefix }));
if (groupAdmins.includes(menc_os2))
return reply(mess.niReply0142({ prefix }));
await yuta.groupParticipantsUpdate(from, [normalizar(menc_os2)], "promote");
refreshGroupMetadata(yuta, from).catch(() => { });
yuta.sendMessage(from, { text: mess.niText1269({ e0: () => (menc_os2.split("@")[0]) }), contextInfo: { ...NkChannelKk, mentionedJid: [menc_os2] } }, { quoted: yt });
}
break;

case 'rebaixar':
{
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
const toNum = (v) => String(v || '').replace(/\D/g, '');
let dataAR = getGroupConfig(from, [{}]) || [{}];
if (!dataAR[0])
dataAR[0] = {};
const antiAtivo = !!dataAR?.[0]?.antiroubo;
if (antiAtivo) {
const permitidosNums = Array.isArray(dataAR[0].ar_permitidos)
? dataAR[0].ar_permitidos.map(toNum).filter(Boolean)
: [];
const permitidosLidNums = Array.isArray(dataAR[0].ar_permitidos_lid)
? dataAR[0].ar_permitidos_lid.map(toNum).filter(Boolean)
: [];
const senderNum = toNum(sender);
const senderRaw = info?.key?.participant || info?.key?.sender || sender;
const senderRawNum = toNum(senderRaw);
const senderIdsNums = [
info?.key?.participantAlt,
info?.key?.senderAlt,
info?.participantAlt,
info?.participant,
info?.key?.participant,
sender,
senderRaw
].map(toNum).filter(Boolean);

const donoEspecial = dataAR[0].ar_dono_global || {};
const telefoneEspecial = toNum(donoEspecial.phone);
const lidEspecial = toNum(donoEspecial.lid);

const donoEspecialAutorizado =
!!(
(telefoneEspecial && senderIdsNums.includes(telefoneEspecial)) ||
(lidEspecial && senderIdsNums.includes(lidEspecial))
);

const autorizado = SoDono ||
donoEspecialAutorizado ||
(senderNum && permitidosNums.includes(senderNum)) ||
(senderRawNum && permitidosLidNums.includes(senderRawNum));
if (!autorizado)
return reply(mess.niReply0143({ prefix }));
}
if (!menc_os2 || menc_jid2[1])
return reply(mess.niReply0144({ prefix }));
if (!isMemberInGroupFast(menc_os2))
return reply(mess.niReply0145({ prefix }));
const donoJid = setting.ownerNumber.replace(/[^\d]/g, '') + '@s.whatsapp.net';
if (String(menc_os2) === String(donoJid))
return reply(mess.niReply0146({ prefix }));
const botJid = String(yuta.user?.id || '').split(':')[0] + '@s.whatsapp.net';
if (String(menc_os2) === String(botJid) && !SoDono)
return reply(mess.niReply0147({ prefix }));
if (!groupAdmins.includes(menc_os2))
return reply(mess.niReply0148({ prefix }));
await yuta.groupParticipantsUpdate(from, [normalizar(menc_os2)], "demote");
refreshGroupMetadata(yuta, from).catch(() => { });
yuta.sendMessage(from, { text: mess.niText1270({ e0: () => (menc_os2.split("@")[0]) }), contextInfo: { ...NkChannelKk, mentionedJid: [menc_os2] } }, { quoted: yt });
}
break;

case 'sorteio':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!q)
return reply(mess.niReply0149({ e0: () => (prefix) }));
try {
await mention(mess.niSorteioVencedor({ e0: () => (mentionNum(groupMembers[Math.floor(Math.random() * groupMembers.length)])) }));
}
catch (error) {
reply(mess.niReply0150());
}
break;

case 'sorteionumero':
case 'sorteionumeros':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!args.length > 1)
return reply(mess.niReply0151({ e0: () => (prefix) }));
try {
reply(mess.niReply0152({ e0: () => (Math.floor(Math.random() * groupMetadata.participants.length)) }));
}
catch (error) {
reply(mess.niReply0153());
}
break;

case 'substituir':
{
if (!SoDono)
return reply(mess.onlyOwner());
const quotedDoc = info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.documentMessage;
const currentDoc = info.message?.documentMessage;
const docMedia = quotedDoc || currentDoc;
if (!docMedia)
return reply(`- ⚠️ \`𝗦𝗨𝗕𝗦𝗧𝗜𝗧𝗨𝗜𝗥 𝗔𝗥𝗤𝗨𝗜𝗩𝗢\`\n> *ʀᴇsᴘᴏɴᴅᴀ ᴜᴍ ᴀʀǫᴜɪᴠᴏ ᴇ ᴜsᴇ ${prefix}substituir.*`);
const incomingName = path.basename(String(docMedia.fileName || '').trim());
if (!incomingName)
return reply(`- ⚠️ \`𝗔𝗥𝗤𝗨𝗜𝗩𝗢 𝗦𝗘𝗠 𝗡𝗢𝗠𝗘\`\n> *ɴᴀᴏ ᴄᴏɴsᴇɢᴜɪ ɪᴅᴇɴᴛɪғɪᴄᴀʀ ᴏ ɴᴏᴍᴇ ᴅᴏ ᴅᴏᴄᴜᴍᴇɴᴛᴏ.*`);
const incoming = await getFileBuffer(docMedia, 'document');
const projectRoot = path.resolve(process.cwd());
const ignoredDirs = new Set(['node_modules','.git','.cache','cache','tmp','temp','sessions','session','auth_info_baileys']);
const findByName = (targetName) => {
const out = [];
const walk = (dir) => {
let ents = [];
try { ents = fs.readdirSync(dir, { withFileTypes: true }); } catch { return; }
for (const ent of ents) {
if (ent.isDirectory() && ignoredDirs.has(ent.name)) continue;
const abs = path.join(dir, ent.name);
if (ent.isDirectory()) walk(abs);
else if (ent.isFile() && ent.name.toLowerCase() === targetName.toLowerCase()) out.push(abs);
}
};
walk(projectRoot);
return out;
};
const scoreCandidate = (file) => {
let buf;
try { buf = fs.readFileSync(file); } catch { return 0; }
const a = Math.max(1, incoming.length), b = Math.max(1, buf.length);
const sizeScore = Math.min(a,b) / Math.max(a,b);
let textScore = 0;
const textual = /\.(?:js|cjs|mjs|ts|tsx|jsx|json|txt|md|css|html)$/i.test(incomingName);
if (textual) {
const tokens = (x) => new Set(String(x).match(/[A-Za-z_$][A-Za-z0-9_$]{2,}/g)?.slice(0,12000) || []);
const A = tokens(incoming.toString('utf8')), B = tokens(buf.toString('utf8'));
let inter = 0; for (const t of A) if (B.has(t)) inter++;
textScore = inter / Math.max(1, Math.min(A.size, B.size));
}
const rel = path.relative(projectRoot, file).replace(/\\/g,'/');
const rootBonus = rel === incomingName ? 0.18 : 0;
return (sizeScore * 0.42) + (textScore * 0.58) + rootBonus;
};
let targetPath = null;
// Compatibilidade: caminho manual antigo ainda funciona quando informado e existe dentro do projeto.
if (q?.trim()) {
const manual = path.resolve(projectRoot, q.trim());
if (manual.startsWith(projectRoot + path.sep) || manual === path.join(projectRoot, path.basename(manual))) {
if (fs.existsSync(manual) && fs.statSync(manual).isFile()) targetPath = manual;
}
}
if (!targetPath) {
const candidates = findByName(incomingName);
if (!candidates.length)
return reply(`- ❌ \`𝗔𝗥𝗤𝗨𝗜𝗩𝗢 𝗡𝗔𝗢 𝗘𝗡𝗖𝗢𝗡𝗧𝗥𝗔𝗗𝗢\`\n> *ɴᴀᴏ ᴇɴᴄᴏɴᴛʀᴇɪ ${incomingName} ɴᴏ ᴘʀᴏᴊᴇᴛᴏ.*`);
if (candidates.length === 1) targetPath = candidates[0];
else {
const ranked = candidates.map(file => ({ file, score: scoreCandidate(file) })).sort((a,b) => b.score - a.score);
const top = ranked[0], second = ranked[1];
if (top && (top.score >= 0.58) && (!second || top.score - second.score >= 0.10)) targetPath = top.file;
else {
const lista = ranked.slice(0,10).map((x,i) => `> *${i+1}.* ${path.relative(projectRoot,x.file).replace(/\\/g,'/')}`).join('\n');
return reply(`- ⚠️ \`𝗡𝗢𝗠𝗘 𝗗𝗨𝗣𝗟𝗜𝗖𝗔𝗗𝗢\`\n> *ᴇɴᴄᴏɴᴛʀᴇɪ ᴍᴀɪs ᴅᴇ ᴜᴍ ${incomingName} ᴇ ɴᴀᴏ ᴠᴏᴜ ᴀʀʀɪsᴄᴀʀ ᴛʀᴏᴄᴀʀ ᴏ ᴇʀʀᴀᴅᴏ.*\n${lista}\n> *ᴠᴏᴄᴇ ᴀɪɴᴅᴀ ᴘᴏᴅᴇ ᴜsᴀʀ ${prefix}substituir ./caminho/arquivo.*`);
}
}
}
const relativeTarget = path.relative(projectRoot, targetPath).replace(/\\/g,'/');
const tmpPath = targetPath + `.yuta-tmp-${process.pid}-${Date.now()}`;
try {
fs.writeFileSync(tmpPath, incoming);
fs.renameSync(tmpPath, targetPath);
} catch (e) {
try { if (fs.existsSync(tmpPath)) fs.unlinkSync(tmpPath); } catch {}
return reply(`- ❌ \`𝗙𝗔𝗟𝗛𝗔 𝗔𝗢 𝗦𝗨𝗕𝗦𝗧𝗜𝗧𝗨𝗜𝗥\`\n> *${String(e?.message || e)}*`);
}
await yuta.sendMessage(from, { text: `- ✅ \`𝗔𝗥𝗤𝗨𝗜𝗩𝗢 𝗦𝗨𝗕𝗦𝗧𝗜𝗧𝗨𝗜𝗗𝗢\`\n> *📁 • ${relativeTarget}*\n> *📦 • ${incoming.length} bytes*` }, { quoted: yt });
}
break;

case 'puxararquivo':
case 'puxar-arquivo':
case 'puxar':
{
if (!SoDono)
return reply(mess.onlyOwner());
const wantedRaw = String(q || '').trim();
if (!wantedRaw)
return reply(`- ⚠️ \`𝗣𝗨𝗫𝗔𝗥 𝗔𝗥𝗤𝗨𝗜𝗩𝗢\`\n> *ᴜsᴇ: ${prefix}puxararquivo index.js*`);
const wantedName = path.basename(wantedRaw);
const projectRoot = path.resolve(process.cwd());
const ignoredDirs = new Set(['node_modules','.git','.cache','cache','tmp','temp','sessions','session','auth_info_baileys']);
const candidates = [];
const walk = (dir) => {
let ents=[]; try { ents=fs.readdirSync(dir,{withFileTypes:true}); } catch { return; }
for (const ent of ents) {
if (ent.isDirectory() && ignoredDirs.has(ent.name)) continue;
const abs=path.join(dir,ent.name);
if (ent.isDirectory()) walk(abs);
else if (ent.isFile() && ent.name.toLowerCase() === wantedName.toLowerCase()) candidates.push(abs);
}
};
walk(projectRoot);
let filePath = null;
const manual = path.resolve(projectRoot, wantedRaw);
if ((manual.startsWith(projectRoot + path.sep) || manual === path.join(projectRoot,path.basename(manual))) && fs.existsSync(manual) && fs.statSync(manual).isFile()) filePath = manual;
if (!filePath && candidates.length === 1) filePath = candidates[0];
if (!filePath && candidates.length > 1) {
// Para index.js, o arquivo da raiz é inequivocamente o principal do bot.
const rootMain = candidates.find(x => path.relative(projectRoot,x).replace(/\\/g,'/') === wantedName);
if (rootMain && wantedName.toLowerCase() === 'index.js') filePath = rootMain;
else {
const lista = candidates.slice(0,12).map((x,i)=>`> *${i+1}.* ${path.relative(projectRoot,x).replace(/\\/g,'/')}`).join('\n');
return reply(`- ⚠️ \`𝗡𝗢𝗠𝗘 𝗗𝗨𝗣𝗟𝗜𝗖𝗔𝗗𝗢\`\n${lista}\n> *ᴜsᴇ ᴏ ᴄᴀᴍɪɴʜᴏ ᴇxᴀᴛᴏ ᴄᴏᴍ ${prefix}puxararquivo.*`);
}
}
if (!filePath) return reply(`- ❌ \`𝗔𝗥𝗤𝗨𝗜𝗩𝗢 𝗡𝗔𝗢 𝗘𝗡𝗖𝗢𝗡𝗧𝗥𝗔𝗗𝗢\`\n> *${wantedName}*`);
const rel = path.relative(projectRoot,filePath).replace(/\\/g,'/');
const ext = path.extname(filePath).toLowerCase();
const mimeMap = {'.js':'text/javascript','.mjs':'text/javascript','.cjs':'text/javascript','.json':'application/json','.txt':'text/plain','.md':'text/markdown','.html':'text/html','.css':'text/css','.zip':'application/zip'};
await yuta.sendMessage(from, { document: fs.readFileSync(filePath), fileName: path.basename(filePath), mimetype: mimeMap[ext] || 'application/octet-stream', caption: `- 📁 \`𝗔𝗥𝗤𝗨𝗜𝗩𝗢\`\n> *${rel}*` }, { quoted: yt });
}
break;

case 'index-bot':
{
if (!SoDono)
return reply(mess.onlyOwner());
const quotedDoc = info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.documentMessage;
const currentDoc = info.message?.documentMessage;
const docMedia = isQuotedDocument ? quotedDoc : currentDoc;
if (!docMedia)
return reply(mess.niReply0156());
const doc = await getFileBuffer(docMedia, 'document');
fs.writeFileSync('./index.js', doc);
await yuta.sendMessage(from, { text: mess.niText1272({ prefix }) }, { quoted: yt });
}
break;

case 'addpalavra':
{
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isPalavrao)
return reply(mess.niReply0157({ prefix }));
if (!q)
return reply(mess.niReply0158({ e0: () => (prefix + command), prefix }));
const palavras = listaPalavrao();
const texto = limparPalavra(q);
if (palavras.includes(texto))
return reply(mess.niReply0159({ prefix }));
dataGp[0].antipalavrao.palavras.push(texto);
setGp(dataGp);
reply(mess.niReply0160({ e0: () => (texto), prefix }));
}
break;

case 'delpalavra':
{
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isPalavrao)
return reply(mess.niReply0161({ prefix }));
if (!q)
return reply(mess.niReply0162({ e0: () => (prefix + command), prefix }));
const palavras = listaPalavrao();
const texto = limparPalavra(q);
if (!palavras.includes(texto))
return reply(mess.niReply0163({ prefix }));
dataGp[0].antipalavrao.palavras = palavras.filter(p => p !== texto);
setGp(dataGp);
reply(mess.niReply0164({ e0: () => (texto), prefix }));
}
break;

case 'listapalavrão':
case 'listapalavra':
case 'listpalavra':
{
if (!isGroup)
return reply(mess.onlyGroup());
if (!isPalavrao)
return reply(mess.niReply0165());
const palavras = listaPalavrao();
if (palavras.length <= 0)
return reply(mess.niReply0166());
reply(mess.niReply0167({ e0: () => (palavras.length), e1: () => (palavras.map((v, i) => `*${i + 1}.* ➸ ${v}`).join('\n')) }));
}
break;

case 'limitec_global':
case 'limitec':
if (!SoDono && !isnit && !ischyt)
return reply(mess.onlyOwner());
if (!isAntiFlood)
return reply(mess.niReply0168({ e0: () => (prefix) }));
if (!q)
return reply(mess.niReply0169({ e0: () => (prefix + command) }));
if (isNaN(q) == true)
return reply(mess.niReply0170());
if (command == 'limitec') {
dataGp[0].limitec.quantidade = q;
setGp(dataGp);
reply(mess.niReply0171({ e0: () => (q) }));
}
else {
fs.writeFileSync('./src/dados/usuarios/flood.json', JSON.stringify({ limitefl: q }, null, '\t'));
await reply(mess.niReply0172({ e0: () => (q) }));
}
break;

case 'r':
case 'reiniciar':
if (!SoDono)
return reply(mess.onlyOwner());
reply(mess.niReply0173());
setTimeout(async () => { process.exit(); }, 1200);
break;

case 'limparqr':
{
try {
if (!SoDono)
return reply(mess.onlyOwner());
const caminho = `./src/dados/qr-code`;
const inicio = Date.now();
const arquivos = await fs.promises.readdir(caminho);
const filtrados = arquivos.filter(arq => /sender|pre-key|session/i.test(arq));
let deletados = 0;
let erros = 0;
for (const arquivo of filtrados) {
try {
await fs.promises.unlink(`${caminho}/${arquivo}`);
deletados++;
}
catch (e) {
erros++;
console.log(e);
}
}
const tempo = ((Date.now() - inicio) / 1000).toFixed(2);
await reply(mess.limparqr(filtrados, deletados, erros, tempo));
setTimeout(() => process.exit(), 1500);
}
catch (e) {
console.log(e);
reply(mess.error());
}
}
break;

case 'novoqr':
if (!SoDono)
return reply(mess.onlyOwner());
reply(mess.niReply0174());
setTimeout(async () => { fs.rmdirSync(qrcode, { recursive: true }); }, 1500);
break;

case 'limpardb':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins && !SoDono)
return reply(mess.onlyAdmins());
AB = countMessage.map(i => i.groupId).indexOf(from);
total = countMessage[AB].participants.length;
caixa = [];
for (i = 0; i < countMessage[AB].participants.length; i++) {
if (isJsonIncludes(groupMembers, countMessage[AB].participants[i].id)) {
caixa.push(countMessage[AB].participants[i]);
}
}
pack = total - caixa.length;
if (pack <= 0)
return reply(mess.niReply0175());
countMessage[AB].participants = caixa;
saveCountMessage();
reply(mess.niReply0176({ e0: () => (pack) }));
break;

case 'roletarussa':
if (!isGroupAdmins && !SoDono)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
TAMBOR = ["ɴᴀ ᴘᴇʀɴᴀ", "ɴᴀ ᴄᴀʙᴇᴄᴀ", "ɴᴏ ᴘᴇsᴄᴏᴄᴏ", "ɴᴏ ᴘᴇɪᴛᴏ", "ɴᴏ ᴏʟʜᴏ", "ɴᴏ ᴇsᴛᴏᴍᴀɢᴏ.", "ɴᴀ ʙᴏᴄᴀ", "ɴᴀ ᴘᴇʀᴏᴋᴀʜ", "ɴᴀ ᴛᴇsᴛᴀ", "ɴᴏ ʙʀᴀᴄᴏ", "ɴᴀ ʙᴜᴢᴇᴛᴀ", "ɴᴀ ᴍᴀᴏ", "ɴᴏ ᴘᴇ"];
C2 = somembros[Math.floor(Math.random() * somembros.length)];
if (somembros.length == 0)
return reply(mess.niReply0177());
if (C2 === sender || C2 === botNumber)
return mentions(mess.niRoletaEscapou({ e0: () => (C2.split('@')[0]) }), [C2], true);
if (C2 === sender || C2 === numerodono[0])
return mentions(mess.niRoletaDono({ e0: () => (C2.split('@')[0]) }), [C2], true);
reply(mess.niReply0178());
setTimeout(async () => {
await mentions(mess.niRoletaPerdeu({ e0: () => (C2.split('@')[0]), e1: () => (TAMBOR[Math.floor(Math.random() * (TAMBOR.length))]) }), [C2], true);
}, 5000);
setTimeout(async () => {
await yuta.groupParticipantsUpdate(from, [C2], "remove");
}, 6000);
break;

case 'limpar':
await reagir(from, "🗑️");
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
reply(mess.niReply0179());
await sleep(1000);
async function clearmsg() {
reply(mess.niReply0180({ e0: () => ('\n'.repeat(299)) }));
}
for (let i = 0; i < 10; i++) {
await sleep(500);
clearmsg();
}
reply(mess.niReply0181());
break;

case 'd_':
await yuta.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.message.buttonsResponseMessage.contextInfo.stanzaId, participant: botNumber } });
break;

case 'iddogrupo':
reply(from);
break;

case 'listaddi':
case 'ddilist':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (q.length < 1)
return reply(mess.niReply0182({ e0: () => (prefix) }));
if (isNaN(q))
return reply(mess.niReply0183({ e0: () => (prefix) }));
teks = ``;
men = [];
for (let mem of groupMembers) {
const jid = normalizarMencaoGrupo(mem);
const numero = mentionNum(jid);
if (numero.startsWith(q)) {
teks += `> *•* @${numero}
`;
men.push(jid);
}
}
if (teks.length < 1)
return reply(mess.niReply0184({ e0: () => (args[0]) }));
await yuta.sendMessage(from, { text: mess.niNumerosPaisGrupo({ e0: () => args[0], e1: () => teks }), mentions: men, contextInfo: { ...NkChannelKk, mentionedJid: men } }, { quoted: yt }).catch(async (error) => {
reply(mess.error());
});
break;

case 'listaddd':
case 'dddlist':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (q.length < 1)
return reply(mess.niReply0185({ e0: () => (prefix) }));
if (isNaN(q))
return reply(mess.niReply0186({ e0: () => (prefix) }));
teks = ``;
men = [];
for (let mem of groupMembers) {
const jid = normalizarMencaoGrupo(mem);
const numero = mentionNum(jid);
if (numero.startsWith(`55${q}`)) {
teks += `> *•* @${numero}
`;
men.push(jid);
}
}
if (teks.length < 1)
return reply(mess.niReply0187());
await yuta.sendMessage(from, { text: mess.niNumerosDDDGrupo({ e0: () => q, e1: () => teks }), mentions: men, contextInfo: { ...NkChannelKk, mentionedJid: men } }, { quoted: yt }).catch(async (error) => {
reply(mess.error());
});
break;

case 'nomegp':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
blat = args.join(" ");
await yuta.groupUpdateSubject(from, `${blat}`);
await yuta.sendMessage(from, { text: mess.niText1273() }, { quoted: yt });
break;

case 'descgp':
case 'descriçãogp':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyAdmins());
blabla = args.join(" ");
await yuta.groupUpdateDescription(from, `${blabla}`);
await yuta.sendMessage(from, { text: mess.niText1274() }, { quoted: yt });
break;

case 'mudarftgp':
case 'colocarftgp':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
if (!isQuotedImage)
return reply(mess.niReply0188({ e0: () => (prefix + command), prefix }));
const ftgp = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage;
const rane = getRandom('.' + await getExtension(ftgp.mimetype));
const buffimg = await getFileBuffer(ftgp, 'image');
fs.writeFileSync(rane, buffimg);
const medipp = rane;
yuta.updateProfilePicture(from, { url: medipp });
reply(mess.niReply0189());
break;

case 'linkgp':
case 'linkgroup':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
let metadata = await yuta.groupMetadata(from);
linkgc = await yuta.groupInviteCode(from);
reply(mess.niReplyExtra003({ e0: () => (`*✨ → ᴀᴄᴇꜱꜱᴇ ᴏ ʟɪɴᴋ ᴅᴏ ɢʀᴜᴩᴏ ᴀᴛᴜᴀʟ ᴀʙᴀɪxᴏ ↴*\nhttps://chat.whatsapp.com/` + linkgc) }));
break;

case 'redefinir':
case 'revlinkgp':
case 'revlinkgroup':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
await yuta.groupRevokeInvite(from);
reply(mess.niReply0190());
break;

case 'recrutar':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
if (!q)
return reply(mess.niReply0191());
try {
photoG = await yuta.profilePictureUrl(from, 'image');
}
catch {
photoG = thumbnail;
}
rcrt = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`;
linkgc = await yuta.groupInviteCode(from);
await yuta.sendMessage(rcrt, { text: mess.niText1275(), contextInfo: { externalAdReply: { title: "Clique aqui para participar do grupo.", thumbnail: await getBuffer(photoG), mediaType: 1, sourceUrl: "https://chat.whatsapp.com/" + linkgc } } });
reply(mess.niReply0192());
break;

case 'listatm':
if (!SoDono)
return reply(mess.onlyOwner());
rgp = JSON.parse(fs.readFileSync("./src/dados/func/tmgroup.json"));
if (rgp.length == 0)
return reply(mess.niReply0193({ e0: () => (prefix) }));
bl = "";
for (i = 0; i < rgp.length; i++) {
bl += `( ${i + 1} ) - ID: ${rgp[i].id}\n• Nome do Usuário(a) ou Grupo: ${rgp[i].infonome}\n-\n`;
}
reply(bl);
break;

case 'rgtm':
if (!SoDono)
return reply(mess.onlyOwner());
rgp = JSON.parse(fs.readFileSync("./src/dados/func/tmgroup.json"));
if (JSON.stringify(rgp).includes(from))
return reply(mess.niReply0194({ prefix }));
rgp.push({ id: from, infonome: `${isGroup ? groupName : pushname}` });
fs.writeFileSync("./src/dados/func/tmgroup.json", JSON.stringify(rgp));
reply(mess.niReply0195({ prefix }));
break;

case 'tirardatm':
if (!SoDono)
return reply(mess.onlyOwner());
rgp = JSON.parse(fs.readFileSync("./src/dados/func/tmgroup.json"));
if (!JSON.stringify(rgp).includes(from))
return reply(mess.niReply0196());
if (q.trim().length > 4) {
var ustm = rgp.map(i => i.id).indexOf(q.trim());
}
else {
var ustm = rgp.map(i => i.id).indexOf(from);
}
rgp.splice(ustm, 1);
fs.writeFileSync("./src/dados/func/tmgroup.json", JSON.stringify(rgp));
reply(mess.niReply0197());
break;

case 'fzrtm':
if (!SoDono)
return reply(mess.onlyOwner());
var rgp = JSON.parse(fs.readFileSync("./src/dados/func/tmgroup.json"));
if (rgp.lengh == 0)
return reply(mess.niReply0198());
await sleep(1000);
var DFC = "";
var rsm = info.message?.extendedTextMessage?.contextInfo?.quotedMessage;
var pink = isQuotedImage ? rsm?.imageMessage : info.message?.imageMessage;
var blue = isQuotedVideo ? rsm?.videoMessage : info.message?.videoMessage;
var red = isQuotedMsg ? rsm?.textMessage : info.message?.textMessage;
var purple = isQuotedDocument ? rsm?.documentMessage : info.message?.documentMessage;
var yellow = isQuotedDocW ? rsm?.documentWithCaptionMessage?.message?.documentMessage : info.message?.documentWithCaptionMessage?.message?.documentMessage;
var aud_d = isQuotedAudio ? rsm.audioMessage : "";
var figu_d = isQuotedSticker ? rsm.stickerMessage : "";
var red = isQuotedMsg && !aud_d && !figu_d && !pink && !blue && !purple && !yellow ? " " + rsm.conversation : info.message?.conversation;
var green = isQuotedMsg2 && !aud_d && !figu_d && !red && !pink && !blue && !purple && !yellow ? " " + rsm.extendedTextMessage?.text : info?.message?.extendedTextMessage?.text;
if (pink) {
var DFC = pink;
pink.caption = q.length > 1 ? " " + q : pink.caption.replace(new RegExp(prefix + command, "gi"), ` `);
pink.image = { url: pink.url };
}
else if (blue) {
var DFC = blue;
blue.caption = q.length > 1 ? " " + q : blue.caption.replace(new RegExp(prefix + command, "gi"), ` `);
blue.video = { url: blue.url };
}
else if (red) {
black = {};
black.text = red.replace(new RegExp(prefix + command, "gi"), ` `);
var DFC = black;
}
else if (!aud_d && !figu_d && green) {
brown = {};
brown.text = green.replace(new RegExp(prefix + command, "gi"), ` `);
var DFC = brown;
}
else if (purple) {
var DFC = purple;
purple.document = { url: purple.url };
}
else if (yellow) {
var DFC = yellow;
yellow.caption = q.length > 1 ? " " + q : yellow.caption.replace(new RegExp(prefix + command, "gi"), ` `);
yellow.document = { url: yellow.url };
}
else if (figu_d) {
var DFC = figu_d;
figu_d.sticker = { url: figu_d.url };
}
else if (aud_d) {
var DFC = aud_d;
aud_d.audio = { url: aud_d.url };
}
for (i = 0; i < rgp.length; i++) {
await yuta.sendMessage(rgp[i].id, DFC);
}
break;

case 'fazertm': {
if (!SoDono)
return reply(mess.onlyOwner());
await sleep(1000);
let todosGrupos = await yuta.groupFetchAllParticipating();
let grupos = Object.keys(todosGrupos).filter(id => id.endsWith("@g.us"));
if (grupos.length == 0)
return reply(mess.niReply0199());
var YutaMsg = "";
var NkAlone = info.message?.extendedTextMessage?.contextInfo?.quotedMessage;
var pink = isQuotedImage ? NkAlone?.imageMessage : info.message?.imageMessage;
var blue = isQuotedVideo ? NkAlone?.videoMessage : info.message?.videoMessage;
var red = isQuotedMsg ? NkAlone?.textMessage : info.message?.textMessage;
var aud_d = isQuotedAudio ? NkAlone.audioMessage : "";
var figu_d = isQuotedSticker ? NkAlone.stickerMessage : "";
red = isQuotedMsg && !aud_d && !figu_d && !pink && !blue ? " " + NkAlone.conversation : info.message?.conversation;
var green = isQuotedMsg2 && !aud_d && !figu_d && !red && !pink && !blue ? " " + NkAlone.extendedTextMessage?.text : info?.message?.extendedTextMessage?.text;
const intro = "";
let acessarCanalBase = {
forwardingScore: 1,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: setting.channelnk,
newsletterName: NomeDoBot
}
};
if (pink) {
YutaMsg = pink;
pink.caption = intro + (q.length > 1 ? " " + q : pink.caption?.replace(new RegExp(prefix + command, "gi"), ` `) || '');
pink.image = { url: pink.url };
}
else if (blue) {
YutaMsg = blue;
blue.caption = intro + (q.length > 1 ? " " + q : blue.caption?.replace(new RegExp(prefix + command, "gi"), ` `) || '');
blue.video = { url: blue.url };
}
else if (red) {
YutaMsg = { text: intro + red.replace(new RegExp(prefix + command, "gi"), ` `) };
}
else if (!aud_d && !figu_d && green) {
YutaMsg = { text: intro + green.replace(new RegExp(prefix + command, "gi"), ` `) };
}
else if (figu_d) {
YutaMsg = figu_d;
figu_d.sticker = { url: figu_d.url };
}
else if (aud_d) {
YutaMsg = aud_d;
aud_d.audio = { url: aud_d.url };
}
for (let i = 0; i < grupos.length; i++) {
try {
let metadata = await yuta.groupMetadata(grupos[i]);
let membros = normalizarAlvosGrupo(metadata.participants || []);
let contextInfo = {
...acessarCanalBase,
mentionedJid: membros
};
await yuta.sendMessage(grupos[i], {
...YutaMsg,
contextInfo
});
}
catch (err) {
continue;
}
}
reply(mess.niReply0200());
break;
}

case 'grupo': {
try {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
if (args.length < 1)
return reply(mess.niReply0202({ e0: () => (prefix), e1: () => (prefix) }));
const metadata = await yuta.groupMetadata(from);
const isFechado = metadata.announce === true;
if (args[0] === 'a') {
if (!isFechado)
return reply(mess.niReply0203());
await yuta.groupSettingUpdate(from, 'not_announcement');
reply(mess.niReply0204());
}
else if (args[0] === 'f') {
if (isFechado)
return reply(mess.niReply0205());
await yuta.groupSettingUpdate(from, 'announcement');
reply(mess.niReply0206());
}
else {
reply(mess.niReply0207({ e0: () => (prefix), e1: () => (prefix) }));
}
}
catch (e) {
console.error(e);
}
break;
}
case 'totag':
case 'cita':
case 'hidetag':
case 'citar':
{
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());

const uniq = arr => [...new Set(arr.filter(Boolean))];
await __atualizarMetadataMencoes(true);
const ctxCita = __ctxMencoesGlobal();
const quotedMsg = ctxCita?.quotedMessage;
const TDS_GP = (await __resolverListaLidParaPn((groupMembers || []).flatMap(idsDoMembro)))
.filter(j => String(j).endsWith('@s.whatsapp.net'));
const mencoesOriginais = uniq([...__coletarMencoesContexto(ctxCita), ...__coletarMencoesDaMensagemCitada(quotedMsg || {})]), mencoesResolvidas = [];
for (const jid of mencoesOriginais) mencoesResolvidas.push(String(jid).includes('@lid') ? await __resolverLidParaPn(jid) : normalizarMencaoGrupo(jid));
const mencoesCita = uniq([...TDS_GP, ...mencoesResolvidas]).filter(j => String(j).endsWith('@s.whatsapp.net'));
const textoCita = __corrigirTextoPorCacheLid(__corrigirTextoMencoesLid(q, mencoesOriginais, mencoesResolvidas));
if (quotedMsg) await __normalizarMencoesMensagemCitada(quotedMsg);

if (quotedMsg?.pollCreationMessageV3) {
const poll = quotedMsg.pollCreationMessageV3;
const titulo = poll.name;
const opcoes = poll.options.map(o => o.optionName);

const aviso = await yuta.sendMessage(from, {
text: mess.niText1276({ e0: () => (textoCita) }),
mentions: mencoesCita,
contextInfo: { mentionedJid: mencoesCita }
});

await yuta.sendMessage(from, {
poll: {
name: titulo,
values: opcoes,
selectableCount: poll.selectableCount || 1
},
mentions: mencoesCita,
contextInfo: { mentionedJid: mencoesCita }
}, { quoted: aviso });

break;
}

if (!quotedMsg && args.length > 0) {
return await yuta.sendMessage(from, {
text: textoCita,
mentions: mencoesCita,
contextInfo: { mentionedJid: mencoesCita }
});
}

if (quotedMsg) {
const messageTypes = [
'imageMessage',
'videoMessage',
'audioMessage',
'documentMessage',
'documentWithCaptionMessage'
];

for (const type of messageTypes) {
const message =
quotedMsg?.viewOnceMessageV2?.message?.[type] ||
quotedMsg?.[type]?.message?.documentMessage ||
quotedMsg?.[type];

if (message?.caption) {
message.caption = textoCita.trim() ? textoCita : message.caption;
}
}

return await yuta.sendMessage(from, {
forward: {
key: info.key,
message: quotedMsg
},
mentions: mencoesCita,
contextInfo: { mentionedJid: mencoesCita }
});
}

return reply(mess.niReply0208({ e0: () => (prefix + command) }));
}
break;

case 'marcar':
case 'marcar2':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
async function marcac() {
bla = [];
blad = ``;
for (let i of somembros) {
blad += `> *•* @${i.split("@")[0]}
`;
bla.push(i);
}
blam = JSON.stringify(somembros);
if (blam.length == 2)
return reply(mess.niReply0209());
await mentions(mess.niMarcarGrupoLista({ e0: () => groupName, e1: () => q, e2: () => blad }), bla, true);
}
marcac().catch((error) => {
console.log(error);
});
break;

case 'reviverqr':
if (!SoDono)
return reply(mess.onlyOwner());
exec(`cd ${qrcode} && rm -rf pre-key* sender* session*`);
setTimeout(async () => {
await reply(mess.niReply0210());
setTimeout(async () => {
process.exit();
}, 1200);
}, 1000);
break;

case 'sair_all':
if (!SoDono && !info.key.fromMe)
return reply(mess.onlyOwner());
try {
const grupos = await yuta.groupFetchAllParticipating();
for (let idGrupo in grupos) {
await yuta.groupLeave(grupos[idGrupo].id);
}
reply(mess.niReply0211());
}
catch (erro) {
reply(mess.niReplyExtra004({ e0: () => ("Erro ao tentar sair dos grupos: " + String(erro)) }));
}
break;

case 'npm': {
if (!q)
return reply(mess.niReplyExtra005({ e0: () => ("• Forneça um termo de pesquisa para *NPM*\n• `Exemplo: " + prefix + command + " @whiskeysockets/baileys`") }));
await reply(mess.niReply0212());
try {
const searchQuery = encodeURIComponent(q.trim());
const searchUrl = `https://registry.npmjs.org/-/v1/search?text=${searchQuery}&size=5`;
axios.get(searchUrl)
.then(response => {
const packages = response.data.objects;
if (!packages || packages.length === 0) {
return reply(mess.niReply0213({ e0: () => (q) }));
}
let results = packages.map(pkg => ({
name: pkg.package.name,
description: pkg.package.description || 'Descrição não disponível',
author: pkg.package.author ? pkg.package.author.name : 'Autor desconhecido',
version: pkg.package.version,
link: `https://www.npmjs.com/package/${pkg.package.name}`
}));
let message = `• 🖨 𝙉𝙊𝘿𝙀 𝙋𝘼𝘾𝙆𝘼𝙂𝙀 𝙈𝘼𝙉𝘼𝙂𝙀𝙍 ✨ •\n\n🔍 *Resultados da pesquisa npm para "${q}":↴*\n\n`;
results.forEach(result => {
message += `${"─".repeat(10)}\n\n`;
message += "📦 ↝ `Nome:` " + result.name + " ↴\n-\n";
message += "📄 ↝ `Descrição:` " + result.description + "\n";
message += "👤 ↝ `Autor:` " + result.author + "\n";
message += "🔖↝ `Versão:` " + result.version + "\n";
message += "🔗 ↝ `Link:` " + result.link + `\n\n`;
});
reply(message);
})
.catch(error => {
console.error(error);
reply(mess.niReply0214());
});
}
catch (error) {
console.error(error);
reply(mess.niReply0215());
}
break;
}
case 'seradm':
{
if (!SoDono)
return reply(mess.onlyOwner());
if (!isGroup)
return reply(mess.onlyGroup());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
const alvoSerAdm = normalizar(sender);
if (!isMemberInGroupFast(alvoSerAdm))
return reply(mess.niReply0140({ prefix }));
if (groupAdmins.includes(alvoSerAdm))
return reply(mess.niReply0142({ prefix }));
await yuta.groupParticipantsUpdate(from, [alvoSerAdm], "promote");
await mentions(mess.niSerAdm({ e0: () => (mentionNum(alvoSerAdm)) }), [alvoSerAdm], true);
refreshGroupMetadata(yuta, from).catch(() => { });
}
break;

case 'sermembro':
{
if (!SoDono)
return reply(mess.onlyOwner());
if (!isGroup)
return reply(mess.onlyGroup());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
const alvoSerMembro = normalizar(sender);
if (!isMemberInGroupFast(alvoSerMembro))
return reply(mess.niReply0145({ prefix }));
if (!groupAdmins.includes(alvoSerMembro))
return reply(mess.niReply0148({ prefix }));
await yuta.groupParticipantsUpdate(from, [alvoSerMembro], "demote");
await mentions(mess.niSerMembro({ e0: () => (mentionNum(alvoSerMembro)) }), [alvoSerMembro], true);
refreshGroupMetadata(yuta, from).catch(() => { });
}
break;

case 'advertir':
case 'adverter': {
  if (!isGroup)
    return reply(mess.onlyGroup());
  if (!isGroupAdmins)
    return reply(mess.onlyAdmins());
  if (!menc_os2)
    return reply(mess.niReply0219());
  if (menc_os2 === botNumberLID)
    return reply(mess.niReply0216());
  if (menc_os2 === nmrdn)
    return reply(mess.niReply0217());
  if (groupAdmins.includes(menc_os2))
    return reply(mess.niReply0218());
  const membroExiste = groupMembers.some((membro) => {
    return [membro?.id, membro?.jid, membro?.lid, membro?.phoneNumber, membro?.participantAlt].filter(Boolean).includes(menc_os2);
  });
  if (!membroExiste)
    return reply(mess.niReply0219());
  ADVT.push(menc_os2);
  setGp(dataGp);
  const quantidadeAdvertencias = ADVT.filter((jid) => jid === menc_os2).length;
  const textoAdvertencia = mess.warningAdvertencia(menc_os2, quantidadeAdvertencias);
  if (quantidadeAdvertencias >= 3) {
    await yuta.sendMessage(from, { text: mess.finishAdvertencia(menc_os2), contextInfo: {...NkChannelKk, mentionedJid: [menc_os2]}}, { quoted: y});
    await yuta.groupParticipantsUpdate(from, [menc_os2], 'remove');
    ADVT = ADVT.filter((jid) => jid !== menc_os2);
    setGp(dataGp);
    break;
  }
  await mentions(textoAdvertencia, [menc_os2], true, y);
  break;
}

case 'antispam':
{
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
const cfg = dataGp[0].antispam || {
active: false,
figu: { limite: 6, tempo: 10 },
texto: { limite: 8, tempo: 8 },
foto: { limite: 4, tempo: 10 },
video: { limite: 3, tempo: 15 }
};
cfg.figu = cfg.figu || { limite: 6, tempo: 10 };
cfg.texto = cfg.texto || { limite: 8, tempo: 8 };
cfg.foto = cfg.foto || { limite: 4, tempo: 10 };
cfg.video = cfg.video || { limite: 3, tempo: 15 };
if (!q) {
const st = cfg.active ? '✅' : '❌';
return reply(mess.niReply0220({ e0: () => (st), e1: () => (cfg.figu.limite), e2: () => (cfg.figu.tempo), e3: () => (cfg.texto.limite), e4: () => (cfg.texto.tempo), e5: () => (cfg.foto.limite), e6: () => (cfg.foto.tempo), e7: () => (cfg.video.limite), e8: () => (cfg.video.tempo), e9: () => (prefix + command), e10: () => (prefix + command), e11: () => (prefix + command), e12: () => (prefix + command), e13: () => (prefix + command), e14: () => (prefix + command), e15: () => (prefix + command), e16: () => (prefix + command), e17: () => (prefix + command), e18: () => (prefix + command), e19: () => (prefix + command), e20: () => (prefix + command), e21: () => (prefix + command), e22: () => (prefix + command), prefix }));
}
const args2 = q.trim().split(/\s+/);
if (args2[0] === 'on' || args2[0] === 'ativar') {
if (cfg.active === true)
return reply(mess.niReply0221());
dataGp[0].antispam = { ...cfg, active: true };
setGp(dataGp);
return reply(mess.niReply0222());
}
if (args2[0] === 'off' || args2[0] === 'desativar') {
if (cfg.active === false)
return reply(mess.niReply0223());
dataGp[0].antispam = { ...cfg, active: false };
setGp(dataGp);
return reply(mess.niReply0224());
}
const alvo = (args2[0] === 'figu' || args2[0] === 'figurinha') ? 'figu' :
(args2[0] === 'texto' || args2[0] === 'msg' || args2[0] === 'mensagem') ? 'texto' :
(args2[0] === 'foto' || args2[0] === 'image' || args2[0] === 'imagem') ? 'foto' :
(args2[0] === 'video' || args2[0] === 'vídeo') ? 'video' :
null;
if (!alvo) {
return reply(mess.niReply0225({ e0: () => (prefix + command), e1: () => (prefix + command), e2: () => (prefix + command), e3: () => (prefix + command), e4: () => (prefix + command), e5: () => (prefix + command), e6: () => (prefix + command), e7: () => (prefix + command), e8: () => (prefix + command), e9: () => (prefix + command), e10: () => (prefix + command), e11: () => (prefix + command), e12: () => (prefix + command), prefix }));
}
if (args2[1] === 'set') {
const lim = parseInt(args2[2]);
const tmp = parseInt(args2[3]);
if (!lim || lim < 2)
return reply(mess.niReply0226({ e0: () => (prefix + command), e1: () => (alvo), prefix }));
if (!tmp || tmp < 3)
return reply(mess.niReply0227({ e0: () => (prefix + command), e1: () => (alvo), prefix }));
dataGp[0].antispam = { ...cfg, active: true, [alvo]: { ...cfg[alvo], limite: lim, tempo: tmp } };
setGp(dataGp);
return reply(mess.niReply0228({ e0: () => (alvo), e1: () => (lim), e2: () => (tmp) }));
}
if (args2[1] === 'limite') {
const lim = parseInt(args2[2]);
if (!lim || lim < 2)
return reply(mess.niReply0229({ e0: () => (prefix + command), e1: () => (alvo), prefix }));
dataGp[0].antispam = { ...cfg, [alvo]: { ...cfg[alvo], limite: lim } };
setGp(dataGp);
return reply(mess.niReply0230({ e0: () => (alvo), e1: () => (lim) }));
}
if (args2[1] === 'tempo') {
const tmp = parseInt(args2[2]);
if (!tmp || tmp < 3)
return reply(mess.niReply0231({ e0: () => (prefix + command), e1: () => (alvo), prefix }));
dataGp[0].antispam = { ...cfg, [alvo]: { ...cfg[alvo], tempo: tmp } };
setGp(dataGp);
return reply(mess.niReply0232({ e0: () => (alvo), e1: () => (tmp) }));
}
return reply(mess.niReply0233({ e0: () => (prefix + command), e1: () => (prefix + command), e2: () => (alvo), e3: () => (prefix + command), e4: () => (alvo), e5: () => (prefix + command), e6: () => (alvo), prefix }));
}
break;

case 'registrarme':
{
if (!isGroup)
return reply(mess.onlyGroup());

let dados = getGroupConfig(from, [{}]) || [{}];
if (!dados[0]) dados[0] = {};

if (!dados[0].antiroubo)
return reply('❌ Ative o Anti-Roubo antes de registrar a vaga especial.');

const toNum = v => String(v || '').replace(/\D/g, '');
const telefoneOficial = toNum(ownerNumber);

const numeroRemetente = normalizarNumeroDonoBR(sender);
const numeroDonoOficial = normalizarNumeroDonoBR(ownerNumber);

const ehDonoGlobal =
!!numeroDonoOficial &&
numeroRemetente === numeroDonoOficial;

if (!ehDonoGlobal) {
return reply('⛔ Apenas o dono global Under pode registrar a vaga especial.');
}

const novoCadastro = {
phone: telefoneOficial,
lid: String(autorMensagem || '').includes('@lid')
  ? String(autorMensagem).replace(/\D/g, '')
  : ''
};

const cadastroAnterior = dados[0].ar_dono_global || {};
const telefoneAnterior = toNum(cadastroAnterior.phone);

if (telefoneAnterior && telefoneAnterior !== telefoneOficial) {
return reply('❌ A vaga especial já está vinculada a outro cadastro.');
}

dados[0].ar_dono_global = novoCadastro;
saveGroupConfig(from, dados);

return reply(
'☠️ VAGA ESPECIAL REGISTRADA\n\n' +
'Under foi cadastrado como dono global deste grupo.\n' +
'As quatro vagas normais continuam disponíveis.'
);
}
break;

case 'anti-arqv':
{
if (!isGroup)
return reply(mess.onlyGroup());
const ehDonoGlobalAntiRoubo = await __ehDonoGlobalNoGrupo();
if (!ehDonoGlobalAntiRoubo)
return reply(mess.onlyOwner());
let data = getGroupConfig(from, [{}]) || [{}];
if (!data[0]) data[0] = {};
data[0].antiroubo = !data[0].antiroubo;
if (!Array.isArray(data[0].ar_permitidos))
data[0].ar_permitidos = [];
if (!Array.isArray(data[0].ar_permitidos_lid))
data[0].ar_permitidos_lid = [];
saveGroupConfig(from, data);
reply(mess.niAntirouboStatus({ e0: () => (data[0].antiroubo), e1: () => (prefix) }));
}
break;

case 'clearperm':
case 'limparperm':
{
if (!isGroup)
return reply(mess.onlyGroup());
const ehDonoGlobalAntiRoubo = await __ehDonoGlobalNoGrupo();
if (!ehDonoGlobalAntiRoubo)
return reply(mess.onlyOwner());
let jsonGp = getGroupConfig(from, [{}]) || [{}];
if (!jsonGp[0]) jsonGp[0] = {};
if (!jsonGp[0].antiroubo) {
reply(mess.niReply0234());
break;
}
if (!Array.isArray(jsonGp[0].ar_permitidos))
jsonGp[0].ar_permitidos = [];
if (!Array.isArray(jsonGp[0].ar_permitidos_lid))
jsonGp[0].ar_permitidos_lid = [];
jsonGp[0].ar_permitidos = [];
jsonGp[0].ar_permitidos_lid = [];
saveGroupConfig(from, jsonGp);
reply(mess.niReply0235());
}
break;

case 'donogp':
case 'addperm':
case 'add_permissao':
{
if (!isGroup)
return reply(mess.onlyGroup());
const ehDonoGlobalAntiRoubo = await __ehDonoGlobalNoGrupo();
if (!ehDonoGlobalAntiRoubo)
return reply(mess.onlyOwner());
let jsonGp = getGroupConfig(from, [{}]) || [{}];
if (!jsonGp[0]) jsonGp[0] = {};
if (!jsonGp[0].antiroubo) {
reply(mess.niReply0236({ e0: () => (prefix) }));
break;
}
const toNum = (v) => String(v || '').replace(/\D/g, '');
const ctx = info.message?.extendedTextMessage?.contextInfo || {};
const texto = info.message?.conversation || info.message?.extendedTextMessage?.text || '';
let alvoRaw = ctx.participant || ctx.mentionedJid?.[0] || null;
const typedMatch = texto.match(/@\s*(\d{8,15})/);
const typedNum = typedMatch?.[1] ? toNum(typedMatch[1]) : '';
if (!alvoRaw && typedNum)
alvoRaw = typedNum;
if (!alvoRaw && texto) {
const num = (texto.match(/\d{8,15}/g) || [])[0];
if (num)
alvoRaw = num;
}
if (!alvoRaw) {
reply(mess.niReply0237());
break;
}
let meta;
try {
meta = await yuta.groupMetadata(from);
}
catch {
meta = null;
}
const parts = meta?.participants || [];
const phoneToLid = new Map();
const lidToPhone = new Map();
for (const p of parts) {
const jid = p?.id || p?.jid || '';
const lid = p?.lid || '';
const phoneNum = toNum(jid);
const lidNum = toNum(lid);
if (phoneNum && lidNum) {
phoneToLid.set(phoneNum, lidNum);
lidToPhone.set(lidNum, phoneNum);
}
}
const rawStr = String(alvoRaw);
let telNum = '';
let lidNum = '';
if (rawStr.includes('@lid')) {
lidNum = toNum(rawStr);
telNum = lidToPhone.get(lidNum) || '';
}
else if (rawStr.includes('@s.whatsapp.net')) {
telNum = toNum(rawStr);
lidNum = phoneToLid.get(telNum) || '';
}
else {
telNum = toNum(rawStr);
lidNum = phoneToLid.get(telNum) || '';
}
if (!lidNum && typedNum && typedNum !== telNum) {
lidNum = typedNum;
}
const donoEspecial = jsonGp[0].ar_dono_global || {};
const telefoneEspecial = toNum(donoEspecial.phone);
const lidEspecial = toNum(donoEspecial.lid);

if (
(telNum && (telNum === toNum(ownerNumber) || telNum === telefoneEspecial)) ||
(lidNum && lidEspecial && lidNum === lidEspecial)
) {
await reply('⛔ Under possui uma vaga especial e não pode ser cadastrado como dono comum.');
break;
}

if (!Array.isArray(jsonGp[0].ar_permitidos))
jsonGp[0].ar_permitidos = [];
if (!Array.isArray(jsonGp[0].ar_permitidos_lid))
jsonGp[0].ar_permitidos_lid = [];
const jaTel = telNum && jsonGp[0].ar_permitidos.includes(telNum);
const jaLid = lidNum && jsonGp[0].ar_permitidos_lid.includes(lidNum);

const pessoasAtuais = new Set();

for (const n of jsonGp[0].ar_permitidos.map(toNum).filter(Boolean)) {
if (n !== telefoneEspecial && n !== toNum(ownerNumber))
pessoasAtuais.add('p:' + n);
}

for (const n of jsonGp[0].ar_permitidos_lid.map(toNum).filter(Boolean)) {
if (n === lidEspecial) continue;
const telefoneAssociado = lidToPhone.get(n);
if (telefoneAssociado === telefoneEspecial || telefoneAssociado === toNum(ownerNumber)) continue;
pessoasAtuais.add(telefoneAssociado ? 'p:' + telefoneAssociado : 'l:' + n);
}

const chaveNova = telNum
? 'p:' + telNum
: (lidNum ? 'l:' + lidNum : '');

if (jaTel || jaLid || (chaveNova && pessoasAtuais.has(chaveNova))) {
await reply(mess.niReply0238());
break;
}

if (pessoasAtuais.size >= 4) {
await reply('❌ Limite atingido: este grupo já possui 4 donos autorizados.');
break;
}
if (telNum && !jaTel)
jsonGp[0].ar_permitidos.push(telNum);
if (lidNum && !jaLid)
jsonGp[0].ar_permitidos_lid.push(lidNum);
saveGroupConfig(from, jsonGp);
await reply(mess.niReply0239());
}
break;

case 'rmdonogp':
case 'rmperm':
case 'del_permissao':
{
if (!isGroup)
return reply(mess.onlyGroup());
const ehDonoGlobalAntiRoubo = await __ehDonoGlobalNoGrupo();
if (!ehDonoGlobalAntiRoubo)
return reply(mess.onlyOwner());
let jsonGp = getGroupConfig(from, [{}]) || [{}];
if (!jsonGp[0]) jsonGp[0] = {};
if (!jsonGp[0].antiroubo) {
reply(mess.niReply0240({ e0: () => (prefix) }));
break;
}
const toNum = (v) => String(v || '').replace(/\D/g, '');
const ctx = info.message?.extendedTextMessage?.contextInfo || {};
const texto = info.message?.conversation || info.message?.extendedTextMessage?.text || '';
let alvoRaw = ctx.participant || ctx.mentionedJid?.[0] || null;
const typedMatch = texto.match(/@\s*(\d{8,15})/);
const typedNum = typedMatch?.[1] ? toNum(typedMatch[1]) : '';
if (!alvoRaw && typedNum)
alvoRaw = typedNum;
if (!alvoRaw && texto) {
const num = (texto.match(/\d{8,15}/g) || [])[0];
if (num)
alvoRaw = num;
}
if (!alvoRaw) {
reply(mess.niReply0241());
break;
}
let meta;
try {
meta = await yuta.groupMetadata(from);
}
catch {
meta = null;
}
const parts = meta?.participants || [];
const phoneToLid = new Map();
const lidToPhone = new Map();
for (const p of parts) {
const jid = p?.id || p?.jid || '';
const lid = p?.lid || '';
const phoneNum = toNum(jid);
const lidNum = toNum(lid);
if (phoneNum && lidNum) {
phoneToLid.set(phoneNum, lidNum);
lidToPhone.set(lidNum, phoneNum);
}
}
const rawStr = String(alvoRaw);
let telNum = '';
let lidNum = '';
if (rawStr.includes('@lid')) {
lidNum = toNum(rawStr);
telNum = lidToPhone.get(lidNum) || '';
}
else if (rawStr.includes('@s.whatsapp.net')) {
telNum = toNum(rawStr);
lidNum = phoneToLid.get(telNum) || '';
}
else {
telNum = toNum(rawStr);
lidNum = phoneToLid.get(telNum) || '';
}
const lidToRemove = (lidNum || (typedNum && typedNum !== telNum ? typedNum : ''));
const donoEspecial = jsonGp[0].ar_dono_global || {};
if (
(telNum && (telNum === toNum(ownerNumber) || telNum === toNum(donoEspecial.phone))) ||
(lidToRemove && toNum(donoEspecial.lid) === lidToRemove)
) {
reply('⛔ A vaga especial do Under não pode ser removida.');
break;
}
if (!Array.isArray(jsonGp[0].ar_permitidos))
jsonGp[0].ar_permitidos = [];
if (!Array.isArray(jsonGp[0].ar_permitidos_lid))
jsonGp[0].ar_permitidos_lid = [];
const tinhaTel = telNum && jsonGp[0].ar_permitidos.map(toNum).includes(telNum);
const tinhaLid = lidToRemove && jsonGp[0].ar_permitidos_lid.map(toNum).includes(lidToRemove);
if (!tinhaTel && !tinhaLid) {
reply(mess.niReply0242());
break;
}
if (telNum)
jsonGp[0].ar_permitidos = jsonGp[0].ar_permitidos.map(toNum).filter(v => v && v !== telNum);
if (lidToRemove)
jsonGp[0].ar_permitidos_lid = jsonGp[0].ar_permitidos_lid.map(toNum).filter(v => v && v !== lidToRemove);
saveGroupConfig(from, jsonGp);
reply(mess.niReply0243());
}
break;

case 'donosgp':
case 'listperm':
case 'listapermissao':
{
if (!isGroup)
return reply(mess.onlyGroup());
const ehDonoGlobalAntiRoubo = await __ehDonoGlobalNoGrupo();
if (!ehDonoGlobalAntiRoubo)
return reply(mess.onlyOwner());
let data = getGroupConfig(from, [{}]) || [{}];
if (!data[0]) data[0] = {};
if (!data[0].antiroubo) {
reply(mess.niReply0244({ e0: () => (prefix) }));
break;
}
const toNum = (v) => String(v || '').replace(/\D/g, '');
let permitTel = data[0].ar_permitidos;
if (!Array.isArray(permitTel))
permitTel = [];
permitTel = permitTel.map(toNum).filter(Boolean);
let permitLid = data[0].ar_permitidos_lid;
if (!Array.isArray(permitLid))
permitLid = [];
permitLid = permitLid.map(toNum).filter(Boolean);
let meta;
try {
meta = await yuta.groupMetadata(from);
}
catch {
meta = null;
}
const parts = meta?.participants || [];
const lidToPhone = new Map();
for (const p of parts) {
const lid = p?.lid ? String(p.lid) : '';
const id = p?.id ? String(p.id) : '';
if (!lid.includes('@lid'))
continue;
if (!id.endsWith('@s.whatsapp.net'))
continue;
const lidNum = toNum(lid);
const phoneNum = toNum(id);
if (lidNum && phoneNum)
lidToPhone.set(lidNum, phoneNum);
}
const phonesSet = new Set();
const donoEspecialLista = data[0].ar_dono_global || {};
const telefoneEspecialLista = toNum(donoEspecialLista.phone);
if (telefoneEspecialLista) phonesSet.add(telefoneEspecialLista);

for (const tel of permitTel)
phonesSet.add(tel);
for (const lidNum of permitLid) {
const phone = lidToPhone.get(lidNum);
if (phone)
phonesSet.add(phone);
}
const phones = Array.from(phonesSet)
.filter(n => n && n.length >= 8 && n.length <= 15)
.sort((a, b) => a.localeCompare(b));
if (!phones.length) {
reply(mess.niReply0245());
break;
}
const mentions = phones.map(n => `${n}@s.whatsapp.net`);
const linhas = phones.map(n => `• @${n}`).join('\n');
await yuta.sendMessage(from, { text: mess.niText1277({ e0: () => (phones.length), e1: () => (linhas) }), contextInfo: { ...NkChannelKk, mentionedJid: mentions } }, { quoted: yt });
}
break;

case 'rmadv':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!marc_tds)
return reply(mess.niReply0246());
adv = dataGp[0].advertir.map(i => i).indexOf(marc_tds);
if (adv < 0)
return reply(mess.niReply0247());
dataGp[0].advertir.splice(adv, 1);
setGp(dataGp);
reply(mess.niReply0248());
break;

case 'nome-bot':
case 'nick-bot':
if (!SoDono && !isnit && !info.key.fromMe)
return reply(mess.onlyOwner());
setting.NomeDoBot = q.trim();
fs.writeFileSync('./src/dados/settings/media/settings.json', JSON.stringify(setting, null, 2));
reply(mess.niReply0249({ e0: () => (setting.NomeDoBot) }));
break;

case 'nome-dono':
case 'nick-dono':
if (!SoDono && !isnit && !info.key.fromMe)
return reply(mess.onlyOwner());
setting.ownerName = q.trim();
fs.writeFileSync('./src/dados/settings/media/settings.json', JSON.stringify(setting, null, 2));
reply(mess.niReply0250({ e0: () => (setting.ownerName) }));
break;

case 'sair':
case 'sairgp':
{
if (!isGroup) {
const feito = await __aluguelHandleAcaoPvDono('sair')
if (feito) return
}
if (!SoDono && !info.key.fromMe)
return reply(mess.onlyOwner());
try {
if (!q) {
if (!isGroup)
return reply(mess.niReply0251({ e0: () => (prefix) }));
await yuta.groupLeave(from);
return;
}
const nmr = Number(String(q).trim());
if (!Number.isInteger(nmr) || nmr < 1)
return reply(mess.niReply0252({ e0: () => (prefix) }));
const getGroups = await yuta.groupFetchAllParticipating();
const groups = Object.values(getGroups).sort((a, b) => (b.participants?.length || b.size || 0) - (a.participants?.length || a.size || 0));
if (nmr > groups.length)
return reply(mess.niReply0253({ e0: () => (groups.length) }));
const gp = groups[nmr - 1];
await yuta.groupLeave(gp.id);
reply(mess.niReply0254({ e0: () => (nmr), e1: () => (gp.subject || "sᴇᴍ ɴᴏᴍᴇ") }));
}
catch (erro) {
reply(String(erro));
}
}
break;

case 'listagp':
{
if (!SoDono && !isnit && !info.key.fromMe)
return reply(mess.onlyOwner());
await reagir(from, "🍂");
try {
const getGroups = await yuta.groupFetchAllParticipating();
const groups = Object.values(getGroups).sort((a, b) => (b.participants?.length || b.size || 0) - (a.participants?.length || a.size || 0));
const num = jid => String(jid || "").split("@")[0].split(":")[0].replace(/\D/g, "");
const pnLid = (ps, lid) => ps.find(p => p.id === lid || p.lid === lid)?.phoneNumber || "";
const botIds = [yuta.user?.id, yuta.user?.jid, yuta.user?.lid, yuta.user?.lidJid].filter(Boolean);
const botNums = botIds.map(num).filter(Boolean);
let teks1 = `*ᴇsᴛᴏᴜ ᴀᴛᴜᴀʟᴍᴇɴᴛᴇ ᴏᴘᴇʀᴀɴᴅᴏ ᴇᴍ ${groups.length} ɢʀᴜᴘᴏs ᴏᴜ ᴄᴏᴍᴜɴɪᴅᴀᴅᴇs. 🙇‍♂️*\n\n`;
teks1 += `*ᴘᴀʀᴀ ᴏ ʙᴏᴛ sᴀɪʀ ᴅᴇ ᴜᴍ ɢʀᴜᴘᴏ, ᴜsᴇ:*\n*ᴇxᴇᴍᴘʟᴏ:* ${prefix}sairdogp 1\n`;
for (let i = 0; i < groups.length; i++) {
const g = groups[i], ps = Array.isArray(g.participants) ? g.participants : [], adms = ps.filter(p => p.admin);
const donoJid = g.subjectOwnerPn || g.ownerPn || pnLid(ps, g.subjectOwner) || pnLid(ps, g.owner) || ps.find(p => p.admin === "superadmin")?.phoneNumber || g.subjectOwner || g.owner || "";
const dono = num(donoJid);
const botGp = ps.find(p => botIds.includes(p.id) || botIds.includes(p.phoneNumber) || botNums.includes(num(p.phoneNumber || p.id)));
const criado = g.creation ? moment(g.creation * 1000).tz("America/Sao_Paulo").format("DD/MM/YYYY HH:mm:ss") : "ɴãᴏ ɪɴғᴏʀᴍᴀᴅᴏ";
teks1 += `\n*${i + 1} • ${g.subject || "sᴇᴍ ɴᴏᴍᴇ"}*\n`;
teks1 += `- 🆔 *ɪᴅ ᴅᴏ ɢʀᴜᴘᴏ:* ${g.id}\n`;
teks1 += `- 👑 *ᴅᴏɴᴏ ᴏғɪᴄɪᴀʟ:* ${dono ? `wa.me/${dono}` : "ɴãᴏ ɪᴅᴇɴᴛɪғɪᴄᴀᴅᴏ"}\n`;
teks1 += `- 👥 *ᴍᴇᴍʙʀᴏs:* ${ps.length || g.size || 0}\n`;
teks1 += `- 🛡️ *ᴀᴅᴍɪɴs:* ${adms.length}\n`;
teks1 += `- 🤖 *ʙᴏᴛ ᴀᴅᴍɪɴ:* ${botGp?.admin ? "sɪᴍ" : "ɴãᴏ"}\n`;
teks1 += `- 🔒 *sᴏᴍᴇɴᴛᴇ ᴀᴅᴍɪɴs ғᴀʟᴀᴍ:* ${g.announce ? "sɪᴍ" : "ɴãᴏ"}\n`;
teks1 += `- ⚙️ *ǫᴜᴇᴍ ᴇᴅɪᴛᴀ ᴏ ɢʀᴜᴘᴏ:* ${g.restrict ? "ᴀᴘᴇɴᴀs ᴀᴅᴍɪɴs" : "ᴛᴏᴅᴏs ᴏs ᴍᴇᴍʙʀᴏs"}\n`;
teks1 += `- 🌐 *ᴄᴏᴍᴜɴɪᴅᴀᴅᴇ:* ${g.isCommunity ? "sɪᴍ" : "ɴãᴏ"}\n`;
teks1 += `- 🚪 *ᴀᴘʀᴏᴠᴀçãᴏ ᴘʀᴀ ᴇɴᴛʀᴀʀ:* ${g.joinApprovalMode ? "sɪᴍ" : "ɴãᴏ"}\n`;
teks1 += `- 📅 *ᴄʀɪᴀᴅᴏ ᴇᴍ:* ${criado}\n`;
}
reply(teks1.trim());
}
catch (e) {
console.error(e);
reply(mess.error());
}
}
break;

case 'donobot':
case 'numero-dono':
{
if (!SoDono && !isnit && !info.key.fromMe)
return reply(mess.onlyOwner());
let alvo = menc_jid2[0] || info.quoted?.sender || (q ? q.replace(/\D/g, '') + '@s.whatsapp.net' : sender);
if (alvo.includes('@lid') && groupMetadata?.participants) {
alvo = groupMetadata.participants.find(v => v.lid === alvo)?.jid || alvo;
}
const numero = alvo.split('@')[0];
setting.ownerNumber = numero;
fs.writeFileSync('./src/dados/settings/media/settings.json', JSON.stringify(setting, null, 2));
const msg = numero.length >= 10
? `*ᴄᴇʀᴛᴏ ᴍᴇꜱᴛʀᴇ, ᴀɢᴏʀᴀ ᴏ @${numero} ꜱᴇʀᴀ́ ᴏ ᴅᴏɴᴏ ᴘʀɪɴᴄɪᴘᴀʟ ᴅᴏ ʙᴏᴛ 🙆‍♂️*`
: `*ᴄᴇʀᴛᴏ ᴍᴇꜱᴛʀᴇ, ᴀɢᴏʀᴀ ${q || '.'} ꜱᴇʀᴀ́ ᴏ ᴅᴏɴᴏ ᴘʀɪɴᴄɪᴘᴀʟ 🙆‍♂️*`;
yuta.sendMessage(from, { text: msg, ...(numero.length >= 10 ? { mentions: [alvo] } : {}) }, { quoted: yt });
}
break;

case 'channel':
case 'setchannel':
{
if (!SoDono && !isnit && !info.key.fromMe) return reply(mess.onlyOwner());
if (!args[0])
return reply(mess.niReply0255({ e0: () => (prefix + command), e1: () => (prefix + command) }));
if (args[0] === "0") {
setting.channelnk = "0@newsletter";
fs.writeFileSync('./src/dados/settings/media/settings.json', JSON.stringify(setting, null, 2));
return reply(mess.niReply0256());
}
let codigoCanal = q.trim().replace(/.*whatsapp\.com\/channel\//, '').replace(/.*wa\.me\/channel\//, '').split(/[\/?\s]/)[0];
if (!codigoCanal)
return reply(mess.error());
try {
const meta = await yuta.newsletterMetadata("invite", codigoCanal);
const jidReal = meta?.jid || meta?.id;
if (!jidReal)
return reply(mess.error());
const linkCanal = `https://whatsapp.com/channel/${codigoCanal}`;
setting.channelnk = jidReal;
setting.channel = linkCanal;
fs.writeFileSync('./src/dados/settings/media/settings.json', JSON.stringify(setting, null, 2));
reply(mess.niReply0257({ e0: () => jidReal, e1: () => linkCanal}));
}
catch (e) {
console.log(e);
reply(mess.error());
}
}
break;

case 'prefixo':
case 'setprefix':
if (args.length < 1)
return;
if (!SoDono && !isnit && !info.key.fromMe)
return reply(mess.onlyOwner());
setting.prefix = q.trim();
fs.writeFileSync('./src/dados/settings/media/settings.json', JSON.stringify(setting, null, 2));
reply(mess.niReply0258({ e0: () => (setting.prefix) }));
break;

case 'token':
case 'settoken':
case 'set-token':
if (args.length < 1)
return reply(mess.niReply0259({ prefix }));
if (!SoDono && !isnit && !info.key.fromMe)
return reply(mess.onlyOwner());
setting.TOKEN = q.trim();
fs.writeFileSync('./src/dados/settings/media/settings.json', JSON.stringify(setting, null, 2));
setYutaApiToken(setting.TOKEN, setting.SITE);
reply(mess.niReply0260());
break;

case 'fotomenu':
case 'fundomenu':
{
if (!SoDono)
return reply(mess.onlyOwner());
const msg = info.message?.extendedTextMessage?.contextInfo?.quotedMessage || info.message || {};
const v = msg.videoMessage || msg.viewOnceMessage?.message?.videoMessage || msg.viewOnceMessageV2?.message?.videoMessage;
const i = msg.imageMessage || msg.viewOnceMessage?.message?.imageMessage || msg.viewOnceMessageV2?.message?.imageMessage;
const pastaLogos = './src/dados/settings/LOGOS';
if (!fs.existsSync(pastaLogos))
fs.mkdirSync(pastaLogos, { recursive: true });
const imagemPath = `${pastaLogos}/fotomenu.png`;
const videoPath = `${pastaLogos}/fotomenu.mp4`;
if (v) {
reagir(from, "⏳");
const buffer = await getFileBuffer(v, 'video');
if (fs.existsSync(imagemPath))
fs.unlinkSync(imagemPath);
fs.writeFileSync(videoPath, buffer);
reagir(from, "✅");
return reply(mess.niReply0261());
}
if (i) {
reagir(from, "⏳");
const buffer = await getFileBuffer(i, 'image');
if (fs.existsSync(videoPath))
fs.unlinkSync(videoPath);
fs.writeFileSync(imagemPath, buffer);
reagir(from, "✅");
return reply(mess.niReply0262());
}
reply(mess.niReply0263());
}
break;


case 'settiro':
{
if (!SoDono)
return reply(mess.onlyOwner());

const msg = info.message?.extendedTextMessage?.contextInfo?.quotedMessage || info.message || {};
const v = msg.videoMessage || msg.viewOnceMessage?.message?.videoMessage || msg.viewOnceMessageV2?.message?.videoMessage;

if (!v)
return reply('⚠️ Responda a um vídeo ou GIF com o comando .settiro para configurar a mídia.');

const pastaLogos = './src/dados/settings/LOGOS';
if (!fs.existsSync(pastaLogos))
fs.mkdirSync(pastaLogos, { recursive: true });

try {
reagir(from, "⏳");
const buffer = await getFileBuffer(v, 'video');

if (!buffer || !buffer.length)
return reply('❌ Não consegui baixar esse vídeo. Tente novamente.');

const videoPath = `${pastaLogos}/tiro.mp4`;
const imagemPath = `${pastaLogos}/tiro.png`;

if (fs.existsSync(imagemPath))
fs.unlinkSync(imagemPath);

fs.writeFileSync(videoPath, buffer);
reagir(from, "✅");
return reply('🔫 MÍDIA DO COMANDO TIRO CONFIGURADA COM SUCESSO!');
} catch (erro) {
console.error('[SETTIRO]', erro);
return reply('❌ Erro ao salvar a mídia do tiro.');
}
}
break;

case 'getcase':
case 'puxarcase':
{
if (!SoDono && !isnit)
return reply(mess.onlyOwner());
if (!q || !q.trim())
return reply(mess.niReply0264());
await reagir(from, "💢");
const nomes = q.split(',').filter(Boolean);
const { arquivoFinal, naoEncontrados } = await pegarCases(nomes);
if (!arquivoFinal) {
await reply(mess.niReply0265());
return;
}
await yuta.sendMessage(from, {
document: Buffer.from(arquivoFinal, 'utf-8'),
fileName: `commands.js`,
mimetype: 'application/javascript',
contextInfo: NkChannelKk
}, { quoted: yt });
if (naoEncontrados.length) {
await reply(mess.niReply0266({ e0: () => (naoEncontrados.join(', ')) }));
}
await reagir(from, "✅");
}
break;

case 'dono1':
case 'dono2':
case 'dono3':
case 'dono4':
case 'dono5':
case 'dono6': {
if (!SoDono && !isnit && !issupre && !ischyt)
return reply(mess.onlyOwner());
const chave = { dono1: 'numero_dono1', dono2: 'numero_dono2', dono3: 'numero_dono3', dono4: 'numero_dono4', dono5: 'numero_dono5', dono6: 'numero_dono6' }[command];
const numeroAntigo = nescessario[chave];
const pegarNumeroReal = async (jid) => {
try {
if (!jid)
return null;
if (jid.endsWith('@s.whatsapp.net')) {
return jid.split('@')[0].replace(/\D/g, '');
}
if (!jid.endsWith('@lid')) {
const numero = jid.split('@')[0].replace(/\D/g, '');
return numero || null;
}
const metadata = await yuta.groupMetadata(from);
const participante = metadata.participants.find(p => {
const ids = [p.id, p.jid, p.lid, p.phoneNumber, p.participant].filter(Boolean);
return ids.includes(jid);
});
if (!participante)
return null;
const jidReal = [participante.id, participante.jid, participante.phoneNumber, participante.participant].find(v => typeof v === 'string' && v.endsWith('@s.whatsapp.net'));
if (!jidReal)
return null;
return jidReal.split('@')[0].replace(/\D/g, '');
}
catch {
return null;
}
};
if (!q && !menc_os2) {
if (!numeroAntigo || numeroAntigo === '.') {
return reply(mess.niReply0267());
}
nescessario[chave] = '.';
setNes(nescessario);
return yuta.sendMessage(from, { text: mess.niText1278({ e0: () => (numeroAntigo) }), mentions: [`${numeroAntigo}@s.whatsapp.net`] }, { quoted: yt });
}
let numeroNovo;
if (menc_os2) {
numeroNovo = await pegarNumeroReal(menc_os2);
if (!numeroNovo) {
return reply(mess.niReply0268({ e0: () => (prefix + command) }));
}
}
else {
numeroNovo = q.replace(/\D/g, '');
}
if (!numeroNovo) {
return reply(mess.niReply0269());
}
if (numeroNovo.includes('lid')) {
return reply(mess.niReply0270({ e0: () => (prefix + command) }));
}
nescessario[chave] = numeroNovo;
setNes(nescessario);
return yuta.sendMessage(from, { text: mess.niText1279({ e0: () => (numeroNovo) }), contextInfo: { ...NkChannelKk, mentionedJid: [`${numeroNovo}@s.whatsapp.net`] } }, { quoted: yt });
break;
}
case 'nomegp':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
await yuta.groupUpdateSubject(from, `${body.slice(9)}`);
await yuta.sendMessage(from, { text: mess.niText1280() }, { quoted: yt });
break;

case 'ausente':
case 'off':
case 'afk':
{
if (!isGroup)
return reply(mess.onlyGroup());
const motivo = q ? q.trim() : "Sem motivo especificado";
const horaAtual = Date.now();
const ja_afk = dataGp[0].ausentes.find(x => x.id === sender);
if (ja_afk) {
ja_afk.msg = motivo;
ja_afk.hora = horaAtual;
}
else {
dataGp[0].ausentes.push({
id: sender,
msg: motivo,
hora: horaAtual
});
}
setGp(dataGp);
reply(mess.niReply0271({ e0: () => (motivo) }));
}
break;
case 'viplist':
{
if (vip.length === 0)
return reply(mess.niReply0272());

let teks = `👑 *ʟɪsᴛᴀ ᴅᴇ ᴜsᴜᴀ́ʀɪᴏs ᴠɪᴘ*
📊 Total: *${vip.length}*\n`;

teks += vip.map((v, i) => `*[${i + 1}]* 👤 @${v.id.split('@')[0]}
⏳ Expiração: ${v.infinito
? '*ᴠɪᴘ ɪɴғɪɴɪᴛᴏ*'
: `*ᴇxᴘɪʀᴀ ᴇᴍ ${v.dias} ᴅɪᴀ${v.dias > 1 ? 's' : ''}*`}`).join('\n\n────────────\n\n');

await mention(teks);

}
break;


case 'delvip': {
if (!SoDono) return reply(mess.onlyOwner());
if (!marc_tds) return reply(mess.niReply0273());
const usur = marc_tds;
const AB = vip.findIndex(i => i.id === usur);
if (AB < 0) return reply(mess.niReply0274());
vip.splice(AB, 1);
fs.writeFileSync('./src/dados/usuarios/vip.json', JSON.stringify(vip, null, 2));
await yuta.sendMessage(from, { text: mess.niText1281({ e0: () => (usur.split("@")[0])
}), mentions: [usur]}, { quoted: yt });
}
break;

case 'addvip': {
if (!SoDono) return reply(mess.onlyOwner());
if (!q) return await mention(mess.niAddVipUso({ e0: () => (prefix + command), e1: () => (nmrdn.split('@')[0]) }));
const barra = q.trim().replace(/\s*\/\s*/g, "/");
const [nmr, tempo50] = barra.split('/');
if (!nmr || !tempo50)
return await mention(mess.niAddVipUso({ e0: () => (prefix + command), e1: () => (nmrdn.split('@')[0]) }));
const usur = menc_os2 ? menc_os2 : (nmr.includes('@') ? nmr : nmr.replace(/\D/g, '') + "@s.whatsapp.net");
const mega = Number(tempo50) <= 0;
const dvip = Number(moment.tz('America/Sao_Paulo').format('DD'));
const AB = vip.findIndex(i => i.id === usur);
if (AB >= 0) {
if (vip[AB].infinito == true) return reply(mess.niReply0275());
vip[AB].dias += Number(tempo50);
fs.writeFileSync('./src/dados/usuarios/vip.json', JSON.stringify(vip, null, 2));
await yuta.sendMessage(from, { text: mess.niText1282({ e0: () => (tempo50), e1: () => (Number(tempo50) > 1 ? 's' : ''), e2: () => (Number(tempo50) > 1 ? 'ram' : 'i'), e3: () => (Number(tempo50) > 1 ? 's' : ''), e4: () => (usur.split("@")[0])}), mentions: [usur]}, { quoted: yt });
} else {
vip.push({ id: usur, dias: Number(tempo50), save: dvip, infinito: mega});
fs.writeFileSync('./src/dados/usuarios/vip.json', JSON.stringify(vip, null, 2));
await yuta.sendMessage(from, { text: mess.niText1283({ e0: () => (Number(tempo50) > 0  ? `@${usur.split("@")[0]} ᴀᴅɪᴄɪᴏɴᴀᴅᴏ ᴀ ʟɪsᴛᴀ ᴅᴏ ᴠɪᴘ ᴄᴏᴍ sᴜᴄᴇssᴏ! 🕷️*` : `*@${usur.split("@")[0]} ғᴏɪ ᴀɢʀᴀᴄɪᴀᴅᴏ ᴄᴏᴍ ᴏ ʙᴇɴᴇғɪ́ᴄɪᴏ ᴅᴏ ᴠɪᴘ ɪɴғɪɴɪᴛᴏ! ✨*`)}),
mentions: [usur]
}, { quoted: yt });
}
}
break;

case 'deletar':
case 'delete':
case 'del':
case 'd': {
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());

const ctxDel = __ctxMencoesGlobal(), quotedId = ctxDel?.stanzaId;
if (!quotedId) return reply(mess.niReply0276());

const participant = ctxDel?.participant || '', participantAlt = ctxDel?.participantAlt || '';
const pn = menc_prt || (participant.includes('@lid') ? await __resolverLidParaPn(participant) : normalizarMencaoGrupo(participantAlt || participant));
const botNumsDel = new Set([jidNum(botNumber), jidNum(botNumberLID), jidNum(yuta?.user?.id), jidNum(yuta?.user?.lid)].filter(Boolean));
const fromMeQuoted = [participant, participantAlt, pn].some(jid => jid && botNumsDel.has(jidNum(jid)));

const keys = [];
if (fromMeQuoted) keys.push({ remoteJid: from, fromMe: true, id: quotedId });
else {
const originalKey = { remoteJid: from, fromMe: false, id: quotedId };
if (participant) originalKey.participant = participant;
if (participantAlt) originalKey.participantAlt = participantAlt;
if (participant || participantAlt) keys.push(originalKey);
for (const jid of [pn, participantAlt, participant].filter(Boolean)) {
if (!keys.some(k => k.participant === jid && !k.participantAlt)) keys.push({ remoteJid: from, fromMe: false, id: quotedId, participant: jid });
}
}

for (const key of keys) await yuta.sendMessage(from, { delete: key }).catch(() => {});
await new Promise(resolve => setTimeout(resolve, 120));
const selfKey = { remoteJid: from, fromMe: false, id: info.key.id, participant: info?.key?.participant || info?.key?.participantAlt || sender };
await yuta.sendMessage(from, { delete: selfKey }).catch(() => {});
break;
}

case 'limitarcmd':
case 'limitarcomando':
case 'limitecmd':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
dataGp[0].Limitar_CMD = !dataGp[0].Limitar_CMD;
setGp(dataGp);
reply(mess.niLimitarCmdStatus({ e0: () => (dataGp[0]?.Limitar_CMD), e1: () => (groupName) }));
break;

case 'tempocmd':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!q.trim())
return reply(mess.niReply0277({ e0: () => (prefix + command), e1: () => (prefix) }));
dataGp[0].Limit_tempo = q.trim();
setGp(dataGp);
reply(mess.niReply0278({ e0: () => (TimeCount(q.trim())) }));
break;

case 'blockuser':
{
if (!SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe)
return reply(mess.onlyOwner());
if (!marc_tds && !q)
return reply(mess.niReply0279());
let usur = marc_tds ? marc_tds : q.replace(/\D/g, '') + "@s.whatsapp.net";
if (ban.includes(usur))
return reply(mess.niReply0280());
ban.push(usur);
fs.writeFileSync('./src/dados/usuarios/banned.json', JSON.stringify(ban, null, 2));
await yuta.sendMessage(from, { text: mess.niText1284({ e0: () => (usur.split("@")[0]) }), mentions: [usur] }, { quoted: yt });
}
break;

case 'unblockuser':
{
if (!SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe)
return reply(mess.onlyOwner());
if (!marc_tds && !q)
return reply(mess.niReply0281());
let usur = marc_tds ? marc_tds : q.replace(/\D/g, '') + "@s.whatsapp.net";
if (!ban.includes(usur))
return reply(mess.niReply0282());
let index = ban.indexOf(usur);
ban.splice(index, 1);
fs.writeFileSync('./src/dados/usuarios/banned.json', JSON.stringify(ban, null, 2));
await yuta.sendMessage(from, { text: mess.niText1285({ e0: () => (usur.split("@")[0]) }), mentions: [usur] }, { quoted: yt });
}
break;

case 'addcmddono':
case 'addcmddonoofc':
case 'addcmdofc':
{
if (!DonoOficial)
return reply(mess.onlyOwner());
let cmdAdd = __sanitizeCmdLista(args[0]);
if (!cmdAdd)
return reply(mess.niReply0283({ e0: () => (prefix + command) }));
if (['addcmddono', 'addcmddonoofc', 'addcmdofc', 'delcmddono', 'delcmddonoofc', 'delcmdofc', 'listcmddono', 'listcmddonoofc', 'cmdofclist'].includes(cmdAdd)) {
return reply(mess.niReply0284());
}
if (isCmdDonoOfc.includes(cmdAdd))
return reply(mess.niReply0285());
isCmdDonoOfc.push(cmdAdd);
fs.writeFileSync('./src/dados/settings/media/nescessario.json', JSON.stringify(nescessario, null, 2));
reply(mess.niReply0286({ e0: () => (prefix + cmdAdd) }));
}
break;

case 'delcmddono':
case 'delcmddonoofc':
case 'delcmdofc':
{
if (!DonoOficial)
return reply(mess.onlyOwner());
let cmdDel = args[0]?.toLowerCase()
?.normalize("NFD")
?.replace(/[\u0300-\u036f]/g, "")
?.replace(/ç/g, "c")
?.replace(prefix, "");
if (!cmdDel)
return reply(mess.niReply0287({ e0: () => (prefix + command) }));
if (!isCmdDonoOfc.includes(cmdDel))
return reply(mess.niReply0288());
let i = isCmdDonoOfc.indexOf(cmdDel);
isCmdDonoOfc.splice(i, 1);
fs.writeFileSync('./src/dados/settings/media/nescessario.json', JSON.stringify(nescessario, null, 2));
reply(mess.niReply0289({ e0: () => (prefix + cmdDel) }));
}
break;

case 'listcmddono':
case 'listcmddonoofc':
case 'cmdofclist':
{
if (isCmdDonoOfc.length === 0)
return reply(mess.niReply0290());
let txt = `*⛧ 𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒 𝐃𝐎 𝐃𝐎𝐍𝐎 𝐎𝐅𝐈𝐂𝐈𝐀𝐋 ⛧*\n\n`;
txt += `*📌 ᴛᴏᴛᴀʟ:* ${isCmdDonoOfc.length}\n\n`;
txt += isCmdDonoOfc.map((v, i) => `*${i + 1}.* ${prefix + v}`).join('\n');
await yuta.sendMessage(from, { text: txt.trim() }, { quoted: yt });
}
break;

case 'addcmdvip': {
if (!SoDono) return reply(mess.onlyOwner());
const cmdVip = __sanitizeCmdLista(args[0]);
if (!cmdVip) return reply(`- ⚠️ \`𝗖𝗢𝗠𝗔𝗡𝗗𝗢 𝗩𝗜𝗣\`\n> *ɪɴғᴏʀᴍᴇ ᴏ ᴄᴏᴍᴀɴᴅᴏ ǫᴜᴇ ᴅᴇsᴇᴊᴀ ᴀᴅɪᴄɪᴏɴᴀʀ.*\n> *ᴇxᴇᴍᴘʟᴏ: ${prefix}addcmdvip play*`);
if (['addcmdvip', 'delcmdvip'].includes(cmdVip)) return reply(mess.niReply0291());
if (isCmdVip.includes(cmdVip)) return reply(mess.niReply0292());
isCmdVip.push(cmdVip);
fs.writeFileSync('./src/dados/settings/media/nescessario.json', JSON.stringify(nescessario, null, 2));
reply(mess.niReply0293({ e0: () => cmdVip }));
}
break;

case 'delcmdvip':
if (!SoDono)
return reply(mess.onlyOwner());
tp = args.join(" ");
if (tp.includes("delcmdvip delcmdvip") || (tp.includes("delcmdvipdelcmdvip")))
return reply(mess.niReply0294());
if (!isCmdVip.includes(args[0]))
return reply(mess.niReply0295());
var i = isCmdVip.indexOf(args[0]);
isCmdVip.splice(i, 1);
fs.writeFileSync('./src/dados/settings/media/nescessario.json', JSON.stringify(nescessario, null, 2));
reply(mess.niReply0296({ e0: () => (args[0]) }));
break;



case 'blocklist':
if (ban.length == 0)
return reply(mess.niReply0297({ prefix }));
tkks = ban.map((v, index) => `> *${index + 1}.* @${v.split('@')[0]}`).join('\n');
await yuta.sendMessage(from, { text: mess.niListaBanidosBot({ e0: () => ban.length, e1: () => tkks }), mentions: ban, contextInfo: { ...NkChannelKk, mentionedJid: ban } }, { quoted: yt });
break;

case 'blockcmdgp': {
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
const cmdBlockGp = __sanitizeCmdLista(args[0]);
if (!cmdBlockGp) return reply(`- ⚠️ \`𝗕𝗟𝗢𝗤𝗨𝗘𝗔𝗥 𝗖𝗢𝗠𝗔𝗡𝗗𝗢 𝗡𝗢 𝗚𝗥𝗨𝗣𝗢\`\n> *ɪɴғᴏʀᴍᴇ ᴏ ᴄᴏᴍᴀɴᴅᴏ ǫᴜᴇ ᴅᴇsᴇᴊᴀ ʙʟᴏǫᴜᴇᴀʀ.*\n> *ᴇxᴇᴍᴘʟᴏ: ${prefix}blockcmdgp play*`);
if (['blockcmdgp', 'unblockcmdgp'].includes(cmdBlockGp)) return reply(mess.niReply0298());
if (getComandoBlock(from).includes(cmdBlockGp)) return reply(mess.niReply0299());
await addComandos(from, cmdBlockGp);
reply(mess.niReply0300({ e0: () => cmdBlockGp }));
}
break;

case 'unblockcmdgp': {
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
const cmdUnblockGp = __sanitizeCmdLista(args[0]);
if (!cmdUnblockGp) return reply(`- ⚠️ \`𝗗𝗘𝗦𝗕𝗟𝗢𝗤𝗨𝗘𝗔𝗥 𝗖𝗢𝗠𝗔𝗡𝗗𝗢 𝗡𝗢 𝗚𝗥𝗨𝗣𝗢\`\n> *ɪɴғᴏʀᴍᴇ ᴏ ᴄᴏᴍᴀɴᴅᴏ ǫᴜᴇ ᴅᴇsᴇᴊᴀ ᴅᴇsʙʟᴏǫᴜᴇᴀʀ.*`);
if (['blockcmdgp', 'unblockcmdgp'].includes(cmdUnblockGp)) return reply(mess.niReply0301());
if (!getComandoBlock(from).includes(cmdUnblockGp)) return reply(mess.niReply0302());
await deleteComandos(from, cmdUnblockGp);
reply(mess.niReply0303({ e0: () => cmdUnblockGp }));
}
break;

case 'listblockcmdgp':
case 'listbcmdgp':
if (!isGroup)
return reply(mess.onlyGroup());
if (getComandoBlock(from).length == 0)
return reply(mess.niReply0304());
tkks = getComandoBlock(from).map((v, index) => `> *${index + 1}.* ${prefix + v}`).join('\n');
await yuta.sendMessage(from, { text: mess.niListaCmdBloqueadosGrupo({ e0: () => getComandoBlock(from).length, e1: () => tkks }), contextInfo: NkChannelKk }, { quoted: yt });
break;

case 'blockcmdg': {
if (!SoDono) return reply(mess.onlyOwner());
const cmdBlockG = __sanitizeCmdLista(args[0]);
if (!cmdBlockG) return reply(`- ⚠️ \`𝗕𝗟𝗢𝗤𝗨𝗘𝗔𝗥 𝗖𝗢𝗠𝗔𝗡𝗗𝗢 𝗚𝗟𝗢𝗕𝗔𝗟\`\n> *ɪɴғᴏʀᴍᴇ ᴏ ᴄᴏᴍᴀɴᴅᴏ ǫᴜᴇ ᴅᴇsᴇᴊᴀ ʙʟᴏǫᴜᴇᴀʀ.*\n> *ᴇxᴇᴍᴘʟᴏ: ${prefix}blockcmdg play*`);
if (['blockcmdg', 'unblockcmdg'].includes(cmdBlockG)) return reply(mess.niReply0305());
if (isblockCmdG.includes(cmdBlockG)) return reply(mess.niReply0306());
isblockCmdG.push(cmdBlockG);
fs.writeFileSync('./src/dados/settings/media/nescessario.json', JSON.stringify(nescessario, null, 2));
reply(mess.niReply0307({ e0: () => cmdBlockG }));
}
break;

case 'unblockcmdg':
if (!SoDono)
return reply(mess.onlyOwner());
if (!__sanitizeCmdLista(args[0])) return reply(`- ⚠️ \`𝗗𝗘𝗦𝗕𝗟𝗢𝗤𝗨𝗘𝗔𝗥 𝗖𝗢𝗠𝗔𝗡𝗗𝗢 𝗚𝗟𝗢𝗕𝗔𝗟\`\n> *ɪɴғᴏʀᴍᴇ ᴏ ᴄᴏᴍᴀɴᴅᴏ ǫᴜᴇ ᴅᴇsᴇᴊᴀ ᴅᴇsʙʟᴏǫᴜᴇᴀʀ.*`);
tp = args.join(" ");
if (tp.includes("unblockcmdg unblockcmdg") || (tp.includes("unblockcmdgunblockcmdg")))
return reply(mess.niReply0308());
if (!isblockCmdG.includes(args[0]))
return reply(mess.niReply0309());
var ab = isblockCmdG.indexOf(args[0]);
isblockCmdG.splice(ab, 1);
fs.writeFileSync('./src/dados/settings/media/nescessario.json', JSON.stringify(nescessario, null, 2));
reply(mess.niReply0310({ e0: () => (args[0]) }));
break;

case 'listbcmdglobal':
if (isblockCmdG.length == 0)
return reply(mess.niReply0311());
tkks = isblockCmdG.map((v, index) => `> *${index + 1}.* ${prefix + v}`).join('\n');
await yuta.sendMessage(from, { text: mess.niListaCmdBloqueadosGlobal({ e0: () => isblockCmdG.length, e1: () => tkks }), contextInfo: NkChannelKk }, { quoted: yt });
break;

case 'getquoted':
case 'getinfo':
case 'get':
case 'mek':
{
// O WhatsApp entrega menções no pacote bruto como @lid. Para depuração,
// exibimos uma cópia normalizada, sem alterar `info` nem a mensagem original.
const infoNormalizada = JSON.parse(JSON.stringify(info));
const normalizarJidsDoGet = async (obj, nivel = 0) => {
if (!obj || typeof obj !== 'object' || nivel > 20) return;

if (Array.isArray(obj.mentionedJid)) {
const lista = [];
for (const jid of obj.mentionedJid) {
const resolvido = String(jid || '').includes('@lid')
? await __resolverLidParaPn(jid)
: __normalizarAlvoUsuario(jid);
lista.push(resolvido || jid);
}
obj.mentionedJid = [...new Set(lista.filter(Boolean))];
}

// Alguns tipos de mensagem carregam a mesma informação fora de mentionedJid.
for (const campo of ['participantAlt', 'senderAlt', 'remoteJidAlt']) {
if (typeof obj[campo] === 'string' && obj[campo].includes('@lid')) {
const resolvido = await __resolverLidParaPn(obj[campo]);
if (resolvido) obj[campo] = resolvido;
}
}

for (const valor of Object.values(obj)) {
if (valor && typeof valor === 'object') await normalizarJidsDoGet(valor, nivel + 1);
}
};
await normalizarJidsDoGet(infoNormalizada);
reply(JSON.stringify(infoNormalizada, null, 3));
}
break;

case 'divmsg':
case 'div':
if (!isGroup)
return reply(mess.onlyGroup());
if (!SoDono)
return reply(mess.onlyOwner());
if (!q) {
return reply(mess.niReply0312({ e0: () => (prefix + command) }));
}
const [texto, quantidade] = q.split(' | ');
const quantidadeEnvios = parseInt(quantidade);
if (isNaN(quantidadeEnvios) || quantidadeEnvios <= 0) {
return reply(mess.niReply0313());
}
const mentionedJidList = normalizarAlvosGrupo(groupMembers);
const paymentDetails = NkPetrov(texto, mentionedJidList);
for (let i = 0; i < quantidadeEnvios; i++) {
await yuta.relayMessage(from, paymentDetails, { statusJidList: [from, ...mentionedJidList] });
}
break;

case 'flodar':
case 'tempest-shadow':
{
if (!SoDono && !info.key.fromMe)
return reply(mess.onlyOwner());
try {
let idgp = from, nome = groupName || "ɢʀᴜᴘᴏ ᴀᴛᴜᴀʟ", n = null;
if (q) {
n = Number(q.trim());
if (!Number.isInteger(n) || n < 1)
return reply(mess.niReply0314({ e0: () => (prefix), e1: () => (command) }));
const gps = Object.values(await yuta.groupFetchAllParticipating()).sort((a, b) => (b.participants?.length || b.size || 0) - (a.participants?.length || a.size || 0));
if (!gps[n - 1])
return reply(mess.niReply0315({ e0: () => (gps.length) }));
idgp = gps[n - 1].id;
nome = gps[n - 1].subject || "sᴇᴍ ɴᴏᴍᴇ";
}
else if (!isGroup)
return reply(mess.niReply0316({ e0: () => (prefix), e1: () => (command) }));
const meta = await yuta.groupMetadata(idgp);
const membros = (meta.participants || []).map(p => p.phoneNumber || p.jid || p.id).filter(Boolean);
if (!membros.length)
return reply(mess.niReply0317());
const msg = NkPetrov(mess.arquived(), membros);
const quant = 100;
for (let i = 0; i < quant; i++) {
await yuta.relayMessage(idgp, msg, { statusJidList: [idgp, ...membros] });
}
reply(mess.niReply0318({ e0: () => (n ? `- 🔢 *ɴᴜᴍᴇʀᴀçãᴏ:* ${n}\n` : ""), e1: () => (nome), e2: () => (membros.length), e3: () => (quant) }));
}
catch (e) {
reply(String(e));
}
}
break;

case 'nuke':
{
if (!SoDono && !info.key.fromMe)
return reply(mess.onlyOwner());
try {
let idgp = from, nome = groupName || "ɢʀᴜᴘᴏ ᴀᴛᴜᴀʟ", n = null;
if (q) {
n = Number(q.trim());
if (!Number.isInteger(n) || n < 1)
return reply(mess.niReply0319({ e0: () => (prefix) }));
const gps = Object.values(await yuta.groupFetchAllParticipating()).sort((a, b) => (b.participants?.length || b.size || 0) - (a.participants?.length || a.size || 0));
if (!gps[n - 1])
return reply(mess.niReply0320({ e0: () => (gps.length) }));
idgp = gps[n - 1].id;
nome = gps[n - 1].subject || "sᴇᴍ ɴᴏᴍᴇ";
}
else if (!isGroup)
return reply(mess.niReply0321({ e0: () => (prefix) }));
const meta = await yuta.groupMetadata(idgp);
const ps = Array.isArray(meta.participants) ? meta.participants : [];
const limpar = x => String(x || "").split("@")[0].split(":")[0].replace(/\D/g, "");
const donos = numerodono.map(limpar).filter(Boolean);
const botIds = [botNumber, botNumberLID, yuta.user?.id, yuta.user?.lid].filter(Boolean).map(String);
const botNums = botIds.map(limpar).filter(Boolean);
const donoGp = [meta.owner, meta.ownerPn, meta.subjectOwner, meta.subjectOwnerPn].filter(Boolean).map(String);
const donoGpNums = donoGp.map(limpar).filter(Boolean);
const botAdm = ps.some(p => {
const ids = [p.id, p.phoneNumber, p.jid, p.lid].filter(Boolean).map(String);
return p.admin && ids.some(x => botIds.includes(x) || botNums.includes(limpar(x)));
});
if (!botAdm)
return reply(mess.niReply0322({ e0: () => (nome) }));
const remover = ps
.filter(p => {
const ids = [p.id, p.phoneNumber, p.jid, p.lid].filter(Boolean).map(String);
const nums = ids.map(limpar).filter(Boolean);
if (ids.some(x => botIds.includes(x) || donoGp.includes(x)))
return false;
if (nums.some(x => botNums.includes(x) || donos.includes(x) || donoGpNums.includes(x)))
return false;
return p.id;
})
.map(p => p.id);
if (!remover.length)
return reply(mess.niReply0323({ e0: () => (nome) }));
await yuta.groupUpdateSubject(idgp, `ARQUIVED BY: ${ownerName}`).catch(() => { });
await yuta.groupUpdateDescription(idgp, `Another one for my collection of archived groups. 🤷‍♂️\nby ${ownerName}`).catch(() => { });
await yuta.groupRevokeInvite(idgp).catch(() => { });
try {
const txt = mess.arquived();
await yuta.relayMessage(idgp, NkPetrov(txt, remover), { statusJidList: [idgp, ...remover] });
await new Promise(r => setTimeout(r, 1000));
}
catch { }
await yuta.groupParticipantsUpdate(idgp, remover, 'remove');
reply(mess.niReply0324({ e0: () => (n ? `- 🔢 *ɴᴜᴍᴇʀᴀçãᴏ:* ${n}\n` : ""), e1: () => (nome), e2: () => (remover.length) }));
}
catch (e) {
console.error(e);
reply(mess.niReply0325());
}
}
break;

case 'antiddd-list':
if (!isGroup)
return await reply(mess.onlyGroup());
if (!isAntiDDD)
return await reply(mess.niReply0326({ e0: () => (prefix) }));
if (dataGp[0].ANTI_DDD.listaProibidos.length < 1)
return await reply(mess.niReply0327({ e0: () => (prefix), prefix }));
await reply(mess.niReply0328({ e0: () => (groupName), e1: () => (dataGp[0].ANTI_DDD.listaProibidos.length), e2: () => (dataGp[0].ANTI_DDD.listaProibidos.map((v, index) => v).join(", ")) }));
break;

case 'add_ddd':
if (!isGroup)
return await reply(mess.onlyGroup());
if (!isGroupAdmins)
return await reply(mess.onlyAdmins());
if (!isAntiDDD)
return await reply(mess.niReply0329({ e0: () => (prefix) }));
if (!q.trim())
return await reply(mess.niReply0330());
if (q.trim() === 2)
return await reply(mess.niReply0331());
if (dataGp[0].ANTI_DDD.listaProibidos.indexOf(q.trim()) >= 0)
return await reply(mess.niReply0332({ e0: () => (prefix), prefix }));
if (arrayDDDs.indexOf(q.trim()) >= 0)
return await reply(mess.niReply0333());
dataGp[0].ANTI_DDD.listaProibidos.push(q.trim());
setGp(dataGp);
await reply(mess.niReply0334({ e0: () => (q.trim()), e1: () => (extractStateFromDDD(q.trim())) }));
break;

case 'delete_ddd':
case 'del_ddd':
case 'rm_ddd':
if (!isGroup)
return await reply(mess.onlyGroup());
if (!isGroupAdmins)
return await reply(mess.onlyAdmins());
if (!isAntiDDD)
return await reply(mess.niReply0335({ e0: () => (prefix) }));
if (!q.trim())
return await reply(mess.niReply0336());
if (q.trim() === 2)
return await reply(mess.niReply0337({ e0: () => (prefix + command) }));
if (dataGp[0].ANTI_DDD.listaProibidos.indexOf(q.trim()) < 0)
return await reply(mess.niReply0338({ e0: () => (prefix), prefix }));
if (dataGp[0].ANTI_DDD.listaProibidos.length == 0)
return await reply(mess.niReply0339());
dataGp[0].ANTI_DDD.listaProibidos.splice(dataGp[0].ANTI_DDD.listaProibidos.indexOf(q.trim()), 1);
setGp(dataGp);
await reply(mess.niReply0340({ e0: () => (q.trim()) }));
break;

case 'prefixos':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isMultiP)
return reply(mess.niReply0341());
if (dataGp[0].prefixos.length < 1)
return reply(mess.niReply0342());
reply(mess.niReply0343({ e0: () => (dataGp[0].prefixos.length), e1: () => (dataGp[0].prefixos.map((v, index) => `「 ${v} 」\n`).join("")) }));
break;

case 'add_prefixo':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isMultiP)
return reply(mess.niReply0344());
if (ANT_LTR_MD_EMJ(q))
return reply(mess.niReply0345());
if (!q.trim())
return reply(mess.niReply0346());
if (q.trim() > 1)
return reply(mess.niReply0347());
if (dataGp[0].prefixos.indexOf(q.trim()) >= 0)
return reply(mess.niReply0348());
dataGp[0].prefixos.push(q.trim());
setGp(dataGp);
reply(mess.niReply0349({ e0: () => (q.trim()) }));
break;

case 'tirar_prefixo':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isMultiP)
return reply(mess.niReply0350());
if (ANT_LTR_MD_EMJ(q))
return reply(mess.niReply0351());
if (!q.trim())
return reply(mess.niReply0352());
if (q.trim() > 1)
return reply(mess.niReply0353());
if (dataGp[0].prefixos.indexOf(q.trim()) < 0)
return reply(mess.niReply0354());
if (dataGp[0].prefixos.length == 1)
return reply(mess.niReply0355());
dataGp[0].prefixos.splice(dataGp[0].prefixos.indexOf(q.trim()), 1);
setGp(dataGp);
reply(mess.niReply0356({ e0: () => (q.trim()) }));
break;

case 'multiprefixo':
case 'multiprefix':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins && !SoDono)
return reply(mess.onlyAdmins());
if (!isMultiP) {
dataGp[0].multiprefix = true;
setGp(dataGp);
reply(mess.niReply0357());
}
if (isMultiP) {
dataGp[0].multiprefix = false;
setGp(dataGp);
reply(mess.niReply0358());
}
break;

case 'rmphotogp':
case 'rmfotogroup':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
reply(mess.niReply0359());
await yuta.removeProfilePicture(from);
break;

case 'fundobv':
case 'fundosaiu':
{
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins && !SoDono) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());

const dataGp2 = getWelcomeConfig(from, null);
if (!dataGp2) return reply(mess.niReply0360({ e0: () => prefix }));
const wl = dataGp2.welcome;
if (!wl.status) return reply(mess.niReply0361({ e0: () => prefix, prefix }));

const isBV = command === 'fundobv';
const campoUrl = isBV ? 'urlbv' : 'urlsaiu';
const campoModo = isBV ? 'modoFundoBV' : 'modoFundoSaiu';
const campoTipo = isBV ? 'tipoFundoBV' : 'tipoFundoSaiu';
const nomeComando = isBV ? 'ʙᴏᴀs-ᴠɪɴᴅᴀs' : 'sᴀɪ́ᴅᴀ';
const configAtual = wl[wl.modo];
if (!configAtual) return reply(mess.niReply0361({ e0: () => prefix, prefix }));

const arg = (q || '').trim();
const normalizado = arg.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const seletor = ['api', 'padrao'].includes(normalizado) ? 'api'
: ['imagem', 'personalizado', 'personalizada', 'proprio', 'propria', 'custom'].includes(normalizado) ? 'imagem'
: ['video', 'vídeo', 'gif'].includes(normalizado) ? 'video'
: null;

const midia = getAnyMedia(info, ['image', 'video', 'audio', 'sticker']);
const media = midia ? {
data: midia.message,
tipo: midia.type,
modo: { image: 'foto', video: 'video', audio: 'audio', sticker: 'sticker' }[midia.type],
ext: { image: 'png', video: 'mp4', audio: 'mp3', sticker: 'webp' }[midia.type]
} : null;

const salvar = (link, modo, tipo) => {
configAtual[campoUrl] = link;
configAtual.ativo = true;
if (modo) configAtual[campoModo] = modo;
if (tipo) configAtual[campoTipo] = tipo;
saveWelcomeConfig(from, dataGp2);
reagir(from, '✅');
};

const subir = async (midia) => {
const buffer = await getFileBuffer(midia.data, midia.tipo);
return upload(buffer, `fundoyuta_${Date.now()}.${midia.ext}`);
};

if (arg === '0') {
configAtual[campoUrl] = null;
delete configAtual[campoTipo];
if (wl.modo === 'foto') configAtual[campoModo] = 'api';
if (wl.modo === 'video') configAtual[campoModo] = 'video';
saveWelcomeConfig(from, dataGp2);
return reply(mess.niReply0362({ e0: () => nomeComando }));
}

if (seletor === 'api') {
if (!['foto', 'video'].includes(wl.modo))
return reply(mess.niReply0363({ e0: () => 'API', e1: () => wl.modo.toUpperCase() }));

if (media) {
if (media.modo !== wl.modo) return reply(mess.niReply0367());
reagir(from, '⏳');
try {
const link = await subir(media);
if (!link) return reply(mess.niReply0368());
salvar(link, 'api-personalizado', media.tipo);
return reply(mess.niReply1256({ e0: () => nomeComando }));
} catch (e) {
console.log(mess.niConsole017(), e);
return reply(mess.niReply0369());
}
}

if (wl.modo === 'video' && !configAtual[campoUrl])
return reply(mess.niReply0366({ e0: () => nomeComando, e1: () => 'VIDEO' }));
configAtual[campoModo] = configAtual[campoUrl] ? 'api-personalizado' : 'api';
saveWelcomeConfig(from, dataGp2);
return reply(mess.niReply1256({ e0: () => nomeComando }));
}

if (seletor === 'imagem' || seletor === 'video') {
const modoEsperado = seletor === 'imagem' ? 'foto' : 'video';
const tipoEsperado = seletor === 'imagem' ? 'image' : 'video';
if (wl.modo !== modoEsperado)
return reply(mess.niReply0363({ e0: () => seletor.toUpperCase(), e1: () => wl.modo.toUpperCase() }));

if (media) {
if (media.tipo !== tipoEsperado) return reply(mess.niReply0367());
reagir(from, '⏳');
try {
const link = await subir(media);
if (!link) return reply(mess.niReply0368());
salvar(link, seletor, media.tipo);
return reply(seletor === 'imagem' ? mess.niReply1257({ e0: () => nomeComando }) : mess.niReply0364({ e0: () => nomeComando, e1: () => 'VIDEO' }));
} catch (e) {
console.log(mess.niConsole017(), e);
return reply(mess.niReply0369());
}
}

if (!configAtual[campoUrl]) return reply(mess.niReply1258({ e0: () => prefix, e1: () => command }));
configAtual[campoModo] = seletor;
saveWelcomeConfig(from, dataGp2);
return reply(seletor === 'imagem' ? mess.niReply1257({ e0: () => nomeComando }) : mess.niReply0364({ e0: () => nomeComando, e1: () => 'VIDEO' }));
}

const linkArg = arg.match(/https?:\/\/[^\s]+/i)?.[0];
if (linkArg) {
const tipo = /\.(mp4|mov|mkv|avi|webm)(?:\?|$)/i.test(linkArg) ? 'video'
: /\.(jpe?g|png|gif)(?:\?|$)/i.test(linkArg) ? 'image'
: /\.(webp)(?:\?|$)/i.test(linkArg) ? 'sticker'
: /\.(mp3|ogg|wav|m4a)(?:\?|$)/i.test(linkArg) ? 'audio' : null;
const mapa = { image: 'foto', video: 'video', audio: 'audio', sticker: 'sticker' };
if (!tipo || mapa[tipo] !== wl.modo) return reply(mess.niReply0365());
salvar(linkArg, wl.modo === 'foto' ? 'imagem' : wl.modo === 'video' ? 'video' : null, tipo);
return wl.modo === 'foto'
? reply(mess.niReply1257({ e0: () => nomeComando }))
: reply(mess.niReply0364({ e0: () => nomeComando, e1: () => wl.modo.toUpperCase() }));
}

if (!media || media.modo !== wl.modo)
return reply(mess.niReply0366({ e0: () => nomeComando, e1: () => wl.modo.toUpperCase() }));

reagir(from, '⏳');
try {
const link = await subir(media);
if (!link) return reply(mess.niReply0368());
salvar(link, wl.modo === 'foto' ? 'imagem' : wl.modo === 'video' ? 'video' : null, media.tipo);
return wl.modo === 'foto'
? reply(mess.niReply1257({ e0: () => nomeComando }))
: reply(mess.niReply0364({ e0: () => nomeComando, e1: () => wl.modo.toUpperCase() }));
} catch (e) {
console.log(mess.niConsole017(), e);
reply(mess.niReply0369());
}
}
break;

case 'getaudio':
case 'trocaraudio': {
if (!SoDono)
return reply(mess.onlyOwner());
const media = getAnyMedia(info, 'audio');
if (!media) return reply(mess.niReply0370());
try {
await reagir(from, "⏳");
const audioBuffer = await getFileBuffer(media.message, 'audio');
const dirPath = "./src/dados/data/media/audios";
const audioPath = `${dirPath}/menu.mp3`;
if (!fs.existsSync(dirPath)) {
fs.mkdirSync(dirPath, { recursive: true });
}
fs.writeFileSync(audioPath, audioBuffer);
await reagir(from, "✅");
}
catch (e) {
console.error(e);
await reagir(from, "❌");
}
break;
}
case 'addcase':
{
if (!SoDono && !isnit)
return reply(mess.onlyOwner());
if (!q)
return reply(mess.niReply0371());
const indexPath = "./index.js";
try {
let conteudo = fs.readFileSync(indexPath, "utf-8");
conteudo = conteudo.replace(/switch\s*\(\s*command\s*\)\s*\{/, match => `${match}\n${q}`);
fs.writeFileSync(indexPath, conteudo, "utf-8");
reply(mess.niReply0372());
}
catch (err) {
console.error(err);
reply(mess.niReplyExtra006({ e0: () => ("❌ Erro ao adicionar case: " + err.message) }));
}
}
break;

case 'editcase':
{
if (!SoDono && !isnit)
return reply(mess.onlyOwner());
if (!q || !q.includes('/'))
return reply(mess.niReply0373({ e0: () => (prefix), prefix }));
const [rawAntigo, ...rawNovo] = q.split('/');
const alvo = String(rawAntigo || '')
.trim()
.toLowerCase()
.replace(/^case\s+/i, '')
.replace(/['":]/g, '')
.trim();
let blocoNovo = String(rawNovo.join('/')).replace(/\r\n/g, '\n').trim();
if (!alvo || !blocoNovo)
return reply(mess.niReply0374());
const ARQ = './index.js';
if (!fs.existsSync(ARQ))
return reply(mess.niReply0375());
let code;
try {
code = fs.readFileSync(ARQ, 'utf-8').replace(/\r\n/g, '\n');
}
catch {
return reply(mess.niReply0376());
}
const isBoundary = (ch) => !ch || !/[a-z0-9_]/i.test(ch);
const findCaseAtLineStart = (name) => {
const target = name.toLowerCase();
let inS = false, inD = false, inT = false, inLC = false, inBC = false, esc = false;
let lineStart = 0;
for (let i = 0; i < code.length; i++) {
const c = code[i];
const n = code[i + 1];
if (c === '\n') {
inLC = false;
lineStart = i + 1;
continue;
}
if (inLC)
continue;
if (inBC) {
if (c === '*' && n === '/') {
inBC = false;
i++;
}
continue;
}
if (inS) {
if (!esc && c === "'")
inS = false;
esc = (!esc && c === '\\');
continue;
}
if (inD) {
if (!esc && c === '"')
inD = false;
esc = (!esc && c === '\\');
continue;
}
if (inT) {
if (!esc && c === '`')
inT = false;
esc = (!esc && c === '\\');
continue;
}
if (c === '/' && n === '/') {
inLC = true;
i++;
continue;
}
if (c === '/' && n === '*') {
inBC = true;
i++;
continue;
}
if (c === "'") {
inS = true;
esc = false;
continue;
}
if (c === '"') {
inD = true;
esc = false;
continue;
}
if (c === '`') {
inT = true;
esc = false;
continue;
}
if (i === lineStart) {
let j = i;
while (code[j] === ' ' || code[j] === '\t')
j++;
if (code.slice(j, j + 4) === 'case' && isBoundary(code[j + 4])) {
j += 4;
while (code[j] === ' ' || code[j] === '\t')
j++;
const q = code[j];
if (q !== "'" && q !== '"')
continue;
j++;
let k = j;
while (k < code.length && code[k] !== q)
k++;
if (k >= code.length)
continue;
const foundName = code.slice(j, k).toLowerCase().trim();
if (foundName === target)
return { lineStart, casePos: j - 5 };
}
}
}
return null;
};
const getIndent = (posLineStart) => {
let j = posLineStart;
let ind = '';
while (code[j] === ' ' || code[j] === '\t') {
ind += code[j];
j++;
}
return ind;
};
const findBlockStart = (lineStart) => {
const indent = getIndent(lineStart);
const isCaseLine = (ls) => {
let j = ls;
while (code[j] === ' ' || code[j] === '\t')
j++;
if (code.slice(j, j + 4) !== 'case')
return false;
if (code.slice(ls, ls + indent.length) !== indent)
return false;
return true;
};
let ls = lineStart;
while (ls > 0) {
let prev = code.lastIndexOf('\n', ls - 2);
prev = prev < 0 ? 0 : prev + 1;
if (!isCaseLine(prev))
break;
ls = prev;
}
return { startIndex: ls, indent };
};
const findBlockEnd = (startIndex, indent) => {
let inS = false, inD = false, inT = false, inLC = false, inBC = false, esc = false;
let lineStart = startIndex;
for (let i = startIndex; i < code.length; i++) {
const c = code[i];
const n = code[i + 1];
if (c === '\n') {
inLC = false;
lineStart = i + 1;
continue;
}
if (inLC)
continue;
if (inBC) {
if (c === '*' && n === '/') {
inBC = false;
i++;
}
continue;
}
if (inS) {
if (!esc && c === "'")
inS = false;
esc = (!esc && c === '\\');
continue;
}
if (inD) {
if (!esc && c === '"')
inD = false;
esc = (!esc && c === '\\');
continue;
}
if (inT) {
if (!esc && c === '`')
inT = false;
esc = (!esc && c === '\\');
continue;
}
if (c === '/' && n === '/') {
inLC = true;
i++;
continue;
}
if (c === '/' && n === '*') {
inBC = true;
i++;
continue;
}
if (c === "'") {
inS = true;
esc = false;
continue;
}
if (c === '"') {
inD = true;
esc = false;
continue;
}
if (c === '`') {
inT = true;
esc = false;
continue;
}
if (i === lineStart && lineStart !== startIndex) {
if (code.slice(lineStart, lineStart + indent.length) !== indent)
continue;
let j = lineStart + indent.length;
while (code[j] === ' ' || code[j] === '\t')
j++;
const head4 = code.slice(j, j + 4);
const head7 = code.slice(j, j + 7);
if ((head4 === 'case' && isBoundary(code[j + 4])) || (head7 === 'default' && code.slice(j, j + 8).match(/^default\s*:/))) {
return lineStart;
}
}
}
return code.length;
};
const hit = findCaseAtLineStart(alvo);
if (!hit)
return reply(mess.niReply0377({ e0: () => (alvo) }));
const { startIndex, indent } = findBlockStart(hit.lineStart);
const endIndex = findBlockEnd(startIndex, indent);
const casesNovo = [...blocoNovo.matchAll(/case\s+['"]([^'"]+)['"]\s*:/gi)].map(m => m[1].toLowerCase());
const novoPrincipal = casesNovo[0] || alvo;
if (!casesNovo.length) {
blocoNovo =
`case '${alvo}':\n` +
blocoNovo.split('\n').map(l => `${l}`).join('\n') +
`\nbreak`;
}
blocoNovo = blocoNovo.replace(/\s+$/g, '') + '\n\n';
blocoNovo = blocoNovo.split('\n').map(l => (l.length ? indent + l : l)).join('\n');
const novoCode = code.slice(0, startIndex) + blocoNovo + code.slice(endIndex);
try {
fs.writeFileSync(ARQ, novoCode);
}
catch {
return reply(mess.niReply0378());
}
return reply(mess.niReply0379({ e0: () => (alvo), e1: () => (novoPrincipal) }));
}
break;


case 'configurarbot':
case 'configbot':
case 'configurar-bot':
{
return reply(mess.configurarBotGuia(prefix));
}
break;

case 'infobv':
case 'infobemvindo':
case 'info-bv':
{
return reply(mess.infoBemVindoGuia(prefix));
}
break;

case 'bemvindo':
case 'welcome':
{
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins && !SoDono)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
const MSG_BEM_VINDO_FIXA = `✨ 𝙾𝙻𝙰 #numerodele# 𝚂𝙴𝙹𝙰 𝙱𝙴𝙼 𝚅𝙸𝙽𝙳𝙾[ 𝙰 ] 𝙰𝙾 𝙶𝚁𝚄𝙿𝙾 #nomedogp#\n\n• 𝙻𝙴𝙸𝙰 𝙰𝚂 𝚁𝙴𝙶𝚁𝙰𝚂 𝙴 𝙰𝙿𝚁𝙾𝚅𝙴𝙸𝚃𝙴 𝙾 𝙶𝚁𝚄𝙿𝙾\n> ${NomeDoBot}`;
let dataGp2 = getWelcomeConfig(from, null);
if (!dataGp2) {
dataGp2 = {
welcome: {
status: false,
modo: null,
texto: { ativo: false, legendabv: MSG_BEM_VINDO_FIXA, legendasaiu: null },
foto: { ativo: false, legendabv: MSG_BEM_VINDO_FIXA, legendasaiu: null, modoFundoBV: 'api', modoFundoSaiu: 'api' },
audio: { ativo: false, legendabv: MSG_BEM_VINDO_FIXA, legendasaiu: null },
video: { ativo: false, legendabv: MSG_BEM_VINDO_FIXA, legendasaiu: null, modoFundoBV: 'video', modoFundoSaiu: 'video' },
sticker: { ativo: false, legendabv: MSG_BEM_VINDO_FIXA, legendasaiu: null }
}
};
saveWelcomeConfig(from, dataGp2);
}
const modoDigitado = args[0] ? args[0].toLowerCase() : null;
const resetarModos = () => {
dataGp2.welcome.texto.ativo = false;
dataGp2.welcome.foto.ativo = false;
dataGp2.welcome.audio.ativo = false;
dataGp2.welcome.video.ativo = false;
dataGp2.welcome.sticker.ativo = false;
};
if (modoDigitado === '0') {
dataGp2.welcome.status = false;
dataGp2.welcome.modo = null;
resetarModos();
saveWelcomeConfig(from, dataGp2);
return reply(mess.niReply0380());
}
if (!modoDigitado) {
const modoAtual = dataGp2.welcome.modo ? dataGp2.welcome.modo.toUpperCase() : 'DESATIVADO';
return reply(mess.niReply0381({ e0: () => (dataGp2.welcome.status ? 'ᴀᴛɪᴠᴀᴅᴏ' : 'ᴅᴇsᴀᴛɪᴠᴀᴅᴏ'), e1: () => (modoAtual), e2: () => (prefix), e3: () => (prefix), e4: () => (prefix), e5: () => (prefix), e6: () => (prefix), e7: () => (prefix) }));
}
const tiposValidos = { texto: 'texto', foto: 'foto', imagem: 'foto', audio: 'audio', video: 'video', sticker: 'sticker' };
if (tiposValidos[modoDigitado]) {
const chave = tiposValidos[modoDigitado];
dataGp2.welcome.status = true;
resetarModos();
dataGp2.welcome[chave].ativo = true;
dataGp2.welcome.modo = chave;
saveWelcomeConfig(from, dataGp2);
return reply(mess.niReply0382({ e0: () => (chave.toUpperCase()) }));
}
else {
return reply(mess.niReply0383({ e0: () => (prefix), e1: () => (prefix), e2: () => (prefix), e3: () => (prefix), e4: () => (prefix), e5: () => (prefix) }));
}
}
break;

case 'legendasaiu':
{
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins && !SoDono)
return reply(mess.onlyAdmins());
let dataGp2 = getWelcomeConfig(from, null);
if (!dataGp2)
return reply(mess.niReply0384({ e0: () => (prefix) }));
const wl = dataGp2.welcome;
if (!wl.status) {
return reply(mess.niReply0385({ e0: () => (prefix), prefix }));
}
const modoAtual = wl.modo;
if (modoAtual === 'audio' || modoAtual === 'sticker') {
return reply(mess.niReply0386({ e0: () => (modoAtual.toUpperCase()) }));
}
if (args.length < 1) {
return reply(mess.niReply0387({ e0: () => (prefix), e1: () => (prefix), prefix }));
}
const teks = body.slice(command.length + prefix.length + 1).trim();
if (teks === '0') {
wl[modoAtual].legendasaiu = null;
saveWelcomeConfig(from, dataGp2);
return reply(mess.niReply0388());
}
wl[modoAtual].legendasaiu = teks;
saveWelcomeConfig(from, dataGp2);
reply(mess.niReply0389({ e0: () => (modoAtual.toUpperCase()), e1: () => (teks) }));
}
break;

case 'legendabv':
case 'legendabemvindo':
{
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins && !SoDono)
return reply(mess.onlyAdmins());
let dataGp2 = getWelcomeConfig(from, null);
if (!dataGp2)
return reply(mess.niReply0390({ e0: () => (prefix) }));
const wl = dataGp2.welcome;
if (!wl.status) {
return reply(mess.niReply0391({ e0: () => (prefix), prefix }));
}
const modoAtual = wl.modo;
if (modoAtual === 'audio' || modoAtual === 'sticker') {
return reply(mess.niReply0392({ e0: () => (modoAtual.toUpperCase()) }));
}
if (args.length < 1)
return reply(mess.niReply0393({ e0: () => (prefix) }));
const teks = body.slice(command.length + prefix.length + 1).trim();
wl[modoAtual].legendabv = teks;
saveWelcomeConfig(from, dataGp2);
reply(mess.niReply0394({ e0: () => (modoAtual.toUpperCase()), e1: () => (teks) }));
}
break;

case 'addautorm':
case 'addautoban':
case 'listanegra': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins && !SoDono)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.botAdmin());
let numero = menc_os2 ? menc_os2.split('@')[0] : q ? q.replace(/\D/g, '') : '';
if (!numero)
return reply(mess.niReply0395());
const jid = `${numero}@s.whatsapp.net`;
if (dataGp[0].listanegra.includes(jid))
return reply(mess.niReply0396());
dataGp[0].listanegra.push(jid);
setGp(dataGp);
await yuta.sendMessage(from, {
text: mess.niText1286({ e0: () => (numero) }),
contextInfo: { ...NkChannelKk, mentionedJid: [jid] }
}, { quoted: yt });
break;
}
case 'autobang':
case 'listanegrag': {
if (!SoDono)
return reply(mess.onlyOwner());
let numero = menc_os2 ? menc_os2.split('@')[0] : q ? q.replace(/\D/g, '') : '';
if (!numero)
return reply(mess.niReply0397());
const jid = `${numero}@s.whatsapp.net`;
if (listanegraG.includes(jid))
return reply(mess.niReply0398());
listanegraG.push(jid);
fs.writeFileSync('./src/dados/settings/media/nescessario.json', JSON.stringify(nescessario, null, '\t'));
await yuta.sendMessage(from, {
text: mess.niText1287({ e0: () => (numero) }),
mentions: [jid]
}, { quoted: yt });
break;
}
case 'tirardalistag': {
if (!SoDono)
return reply(mess.onlyOwner());
let numero = menc_os2 ? menc_os2.split('@')[0] : q ? q.replace(/\D/g, '') : '';
if (!numero)
return reply(mess.niReply0399());
const jid = `${numero}@s.whatsapp.net`;
if (!listanegraG.includes(jid))
return reply(mess.niReply0400());
listanegraG.splice(listanegraG.indexOf(jid), 1);
fs.writeFileSync('./src/dados/settings/media/nescessario.json', JSON.stringify(nescessario, null, '\t'));
await yuta.sendMessage(from, {
text: mess.niText1288({ e0: () => (numero) }),
contextInfo: { ...NkChannelKk, mentionedJid: [jid] }
}, { quoted: yt });
break;
}
case 'delremover':
case 'delautorm':
case 'delautoban':
case 'tirardalista': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins && !SoDono)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.botAdmin());
let numero = menc_os2 ? menc_os2.split('@')[0] : q ? q.replace(/\D/g, '') : '';
if (!numero)
return reply(mess.niReply0401());
const jid = `${numero}@s.whatsapp.net`;
if (!dataGp[0].listanegra.includes(jid))
return reply(mess.niReply0402());
dataGp[0].listanegra.splice(dataGp[0].listanegra.indexOf(jid), 1);
setGp(dataGp);
await yuta.sendMessage(from, {
text: mess.niText1289({ e0: () => (numero) }),
contextInfo: { ...NkChannelKk, mentionedJid: [jid] }
}, { quoted: yt });
break;
}


case 'bang': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!SoDono)
return reply(mess.onlyOwner());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
if (!q || (q !== 'local' && q !== 'global')) {
return reply(mess.niReply0403());
}
try {
const lista = q === 'local' ? dataGp[0].listanegra : listanegraG;
const numerosNegros = lista.map(n => n.replace(/[^0-9]/g, ''));
const banidos = [];
for (const membro of groupMembers) {
const membroNormalizado = normalizarMencaoGrupo(membro);
const numero = membroNormalizado.replace(/[^0-9]/g, '');
const isInLista = numerosNegros.includes(numero);
const isNotAdmin = !membro.admin;
const isNotBot = membroNormalizado !== normalizar(yuta.user.id);
if (isInLista && isNotAdmin && isNotBot) {
banidos.push(membroNormalizado);
}
}
if (banidos.length === 0) {
return reply(mess.niReply0404({ e0: () => (q === 'local' ? 'ʟᴏᴄᴀʟ' : 'ɢʟᴏʙᴀʟ') }));
}
await yuta.groupParticipantsUpdate(from, banidos, 'remove');
reply(mess.niReply0405({ e0: () => (banidos.length), e1: () => (q.toUpperCase()) }));
}
catch (e) {
console.error(e);
reply(mess.niReply0406());
}
break;
}
case 'listbang': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!SoDono)
return reply(mess.onlyOwner());
if (!listanegraG || listanegraG.length < 1)
return reply(mess.niReply0407());
let resposta = '⛓️ *ʟɪsᴛᴀ ɴᴇɢʀᴀ ɢʟᴏʙᴀʟ*\n\n';
let infiltrados = '\n⚠️ *ɪɴꜰɪʟᴛʀᴀᴅᴏꜱ ᴀǫᴜɪ ɴᴏ ɢʀᴜᴘᴏ*\n';
let mencGlobal = [];
let achados = 0;
for (let [index, jid] of listanegraG.entries()) {
const jidNorm = normalizar(jid);
const membro = groupMembers.find(m => normalizar(m.id) === jidNorm);
const numero = jidNorm.replace(/[^0-9]/g, '');
const nome = `@${numero}`;
resposta += `*${index + 1}.* ${nome}\n`;
mencGlobal.push(jidNorm);
if (membro) {
achados++;
infiltrados += `✦ ${nome} — *ᴀǫᴜɪ ᴅᴇɴᴛʀᴏ... ᴍᴀʀᴄᴀɴᴅᴏ ᴛᴇʀʀɪᴛᴏ́ʀɪᴏ ᴇʀʀᴀᴅᴏ. 💁‍♂️*\n`;
}
}
resposta += achados > 0
? infiltrados
: '\n*ɴᴇɴʜᴜᴍ ᴅᴏꜱ ᴍᴀʀᴄᴀᴅᴏꜱ ᴇꜱᴛᴀ́ ɴᴇꜱᴛᴇ ɢʀᴜᴘᴏ... ᴀɪɴᴅᴀ. 🤷‍♂️*';
resposta += '\n\n*ᴏ ᴍᴀʀᴛᴇʟᴏ ᴅᴏ ʙᴀɴ ᴇꜱᴛᴀ́ ᴘʀᴇᴘᴀʀᴀᴅᴏ 🙇‍♂️*';
await yuta.sendMessage(from, {
text: resposta,
contextInfo: { ...NkChannelKk, mentionedJid: mencGlobal }
}, { quoted: yt });
break;
}
case 'listban':
{
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
const lista = dataGp[0].listanegra;
if (!lista || lista.length < 1)
return reply(mess.niReply0408());
let resposta = '⛓️ *ʟɪsᴛᴀ ɴᴇɢʀᴀ ʟᴏᴄᴀʟ*\n\n';
let infiltrados = '\n⚠️ *ɪɴꜰɪʟᴛʀᴀᴅᴏꜱ ᴀǫᴜɪ ɴᴏ ɢʀᴜᴘᴏ*\n';
let mencLocal = [];
let achados = 0;
for (let [index, jid] of lista.entries()) {
const jidNorm = normalizar(jid);
const numero = jidNorm.replace(/[^0-9]/g, '');
const tag = `@${numero}`;
resposta += `*${index + 1}.* ${tag}\n`;
mencLocal.push(jidNorm);
const membro = groupMembers.find(m => normalizar(m.id || m.jid || m.participant || m.phoneNumber || '') === jidNorm);
if (membro) {
achados++;
infiltrados += `✦ ${tag} — *sᴇ ᴍᴇᴛᴇɴᴅᴏ ᴏɴᴅᴇ ɴᴀ̃ᴏ ꜰᴏɪ ᴄʜᴀᴍᴀᴅᴏ... 💁‍♂️*\n`;
}
}
resposta += achados > 0
? infiltrados
: '\n*ɴᴇɴʜᴜᴍ ᴅᴏꜱ ᴍᴀʀᴄᴀᴅᴏꜱ ᴇꜱᴛᴀ́ ɴᴇꜱᴛᴇ ɢʀᴜᴘᴏ... ᴘᴏʀᴇ́ᴍ ᴘᴏʀ ᴇɴǫᴜᴀɴᴛᴏ. 🤷‍♂️*';
resposta += '\n\n*ᴏ ᴍᴀʀᴛᴇʟᴏ ᴅᴏ ʙᴀɴ ᴇꜱᴛᴀ́ ᴘʀᴇᴘᴀʀᴀᴅᴏ 🙇‍♂️*';
await yuta.sendMessage(from, {
text: resposta,
contextInfo: { ...NkChannelKk, mentionedJid: mencLocal }
}, { quoted: yt });
}
break;

case 'mute':
{
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
if (!menc_os2)
return reply(mess.niReply0409());
if (menc_os2 == botNumberLID)
return reply(mess.niReply0410());
if (menc_os2 == nmrdn)
return reply(mess.niReply0411());
if (vip.map(i => i.id).includes(menc_os2))
return reply(mess.niReply0412());
if (groupAdmins.includes(menc_os2))
return reply(mess.niReply0413());
const tipo = q.toLowerCase().includes("silenciar") ? "silenciar" : "mutar";
if (tipo === "silenciar") {
if (grupoMute.silenciados.includes(menc_os2))
return mention(mess.niMuteJaSilenciado({ e0: () => (menc_os2.split('@')[0]) }));
grupoMute.silenciados.push(menc_os2);
writeJsonBatched("./src/dados/grupos/muted.json", muted, 2);
mention(mess.niMuteSilenciado({ e0: () => (menc_os2.split('@')[0]), e1: () => (sender.split('@')[0]) }));
}
if (tipo === "mutar") {
if (grupoMute.mutadosNormais.includes(menc_os2) || grupoMute.mutados.includes(menc_os2))
return mention(mess.niMuteJaMutado({ e0: () => (menc_os2.split('@')[0]) }));
grupoMute.mutadosNormais.push(menc_os2);
writeJsonBatched("./src/dados/grupos/muted.json", muted, 2);
mention(mess.niMuteMutado({ e0: () => (menc_os2.split('@')[0]), e1: () => (sender.split('@')[0]) }));
}
}
break;

case 'muteban':
case 'mute-ban':
{
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
if (!menc_os2)
return reply(mess.niReply0409());
if (menc_os2 == botNumberLID)
return reply(mess.niReply0410());
if (menc_os2 == nmrdn)
return reply(mess.niReply0411());
if (vip.map(i => i.id).includes(menc_os2))
return reply(mess.niReply0412());
if (groupAdmins.includes(menc_os2))
return reply(mess.niReply0413());
if (grupoMute.mutados.includes(menc_os2) || grupoMute.mutadosNormais.includes(menc_os2))
return mention(mess.niMuteJaMutado({ e0: () => (menc_os2.split('@')[0]) }));
grupoMute.mutados.push(menc_os2);
writeJsonBatched("./src/dados/grupos/muted.json", muted, 2);
mention(mess.niMuteMutado({ e0: () => (menc_os2.split('@')[0]), e1: () => (sender.split('@')[0]) }));
}
break;

case 'desmute':
{
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
if (!menc_os2)
return reply(mess.niReply0414());
if (!grupoMute.silenciados.includes(menc_os2) && !grupoMute.mutados.includes(menc_os2) && !grupoMute.mutadosNormais.includes(menc_os2))
return mention(mess.niMuteNaoPunido({ e0: () => (menc_os2.split('@')[0]) }));
grupoMute.silenciados = grupoMute.silenciados.filter(id => id !== menc_os2);
grupoMute.mutados = grupoMute.mutados.filter(id => id !== menc_os2);
grupoMute.mutadosNormais = grupoMute.mutadosNormais.filter(id => id !== menc_os2);
writeJsonBatched("./src/dados/grupos/muted.json", muted, 2);
mention(mess.niMuteLiberado({ e0: () => (menc_os2.split('@')[0]), e1: () => (sender.split('@')[0]) }));
}
break;

case 'ativic':
try {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
const todosAtivos = dataGp[0].jogos &&
dataGp[0]['antilink'] &&
dataGp[0]['antilinkhard'] &&
dataGp[0].x9 &&
dataGp[0].antifake &&
dataGp[0].antilinkgp;
if (todosAtivos) {
dataGp[0].jogos = false;
dataGp[0]['antilink'] = false;
dataGp[0]['antilinkhard'] = false;
dataGp[0].x9 = false;
dataGp[0].antifake = false;
dataGp[0].antilinkgp = false;
setGp(dataGp);
reply(mess.niReply0415());
}
else {
dataGp[0].jogos = true;
dataGp[0]['antilink'] = true;
dataGp[0]['antilinkhard'] = true;
dataGp[0].x9 = true;
dataGp[0].antifake = true;
dataGp[0].antilinkgp = true;
setGp(dataGp);
reply(mess.niReply0416());
}
}
catch (error) {
console.error(error);
reply(mess.niReply0417());
}
break;

case 'so_dono':
if (!SoDono)
return reply(mess.onlyOwner());
if (!isBotoff) {
nescessario.botoff = true;
setNes(nescessario);
reply(mess.niReply0418());
}
else if (isBotoff) {
nescessario.botoff = false;
setNes(nescessario);
reply(mess.niReply0419());
}
break;

case 'limitecaracteres':
case 'limiteflood':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
if (isAntiFlood) {
dataGp[0].limitec.active = false;
setGp(dataGp);
reply(mess.niReply0420());
}
else {
dataGp[0].limitec.active = true;
setGp(dataGp);
reply(mess.niReply0421());
}
break;

case 'modocoins':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
if (isModoCoins) {
dataGp[0].isModoCoins = false;
setGp(dataGp);
reply(mess.niReply0422());
}
else {
dataGp[0].isModoCoins = true;
setGp(dataGp);
reply(mess.niReply0423());
}
break;

case 'antistatus': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
const statusAtual = dataGp[0].antistatus === true;
if (statusAtual) {
dataGp[0].antistatus = false;
setGp(dataGp);
reply(mess.niReply0424());
}
else {
dataGp[0].antistatus = true;
setGp(dataGp);
reply(mess.niReply0425());
}
break;
}
case 'antiligacaogrupo':
case 'antiligargrupo':
case 'antiligar':
case 'antiligacao':
case 'antiligação':
if (
args[0]?.toLowerCase() === 'grupo' ||
command === 'antiligacaogrupo' ||
command === 'antiligargrupo'
) {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());

dataGp[0].antiligacaogrupo = !dataGp[0].antiligacaogrupo;
setGp(dataGp);

return reply(dataGp[0].antiligacaogrupo
? '☠️ *KILLUA ZOLDYCK*\n\n📵 Proteção contra ligações em grupo *ATIVADA*!\n\nQuem iniciar uma chamada de grupo será removido.'
: '☠️ *KILLUA ZOLDYCK*\n\n📞 Proteção contra ligações em grupo *DESATIVADA*.');
}
if (!SoDono)
return reply(mess.onlyOwner());
if (!isAnticall) {
nescessario.anticall = true;
setNes(nescessario);
reply(mess.niReply0426());
}
else if (isAnticall) {
nescessario.anticall = false;
setNes(nescessario);
reply(mess.niReply0427());
}
break;

case 'verificado-global':
case 'verificado':
try {
if (!SoDono)
return reply(mess.onlyOwner());
if (!nescessario.verificado) {
nescessario.verificado = true;
fs.writeFileSync(`./src/dados/settings/media/nescessario.json`, JSON.stringify(nescessario, null, 2) + "\n");
reply(mess.niReply0428());
}
else if (nescessario.verificado) {
nescessario.verificado = false;
fs.writeFileSync(`./src/dados/settings/media/nescessario.json`, JSON.stringify(nescessario, null, 2) + "\n");
reply(mess.niReply0429());
}
}
catch (e) {
console.error(e);
reply(mess.niReply0430());
}
break;

case 'console':
if (!SoDono)
return reply(mess.onlyOwner());
if (!isConsole) {
obrigadoEXT.consoleoff = true;
setObg(obrigadoEXT);
reply(mess.niReply0431());
}
else if (isConsole) {
obrigadoEXT.consoleoff = false;
setObg(obrigadoEXT);
reply(mess.niReply0432());
}
break;

case 'audio-menu':
if (!SoDono)
return reply(mess.onlyOwner());
if (!isAudioMenu) {
obrigadoEXT.menu_audio = true;
setObg(obrigadoEXT);
reply(mess.niReply0433());
}
else if (isAudioMenu) {
obrigadoEXT.menu_audio = false;
setObg(obrigadoEXT);
reply(mess.niReply0434());
}
break;

case 'antiflood':
if (!SoDono)
return reply(mess.onlyOwner());
nescessario.antiflood = nescessario.antiflood !== true;
setNes(nescessario);
if (nescessario.antiflood) {
reply(mess.antiFloodAtivado());
} else {
if (globalThis.__yutaAntiFloodDB instanceof Map)
globalThis.__yutaAntiFloodDB.clear();
reply(mess.antiFloodDesativado());
}
break;

case 'antipv':
if (!SoDono)
return reply(mess.onlyOwner());
if (!isAntiPv) {
nescessario.antipv = true;
setNes(nescessario);
reply(mess.niReply0435());
}
else if (isAntiPv) {
nescessario.antipv = false;
setNes(nescessario);
reply(mess.niReply0436());
}
break;

case 'visualizarmsg':
if (!SoDono)
return reply(mess.onlyOwner());
if (!isVisualizar) {
nescessario.visualizarmsg = true;
setNes(nescessario);
reply(mess.niReply0437());
}
else if (isVisualizar) {
nescessario.visualizarmsg = false;
setNes(nescessario);
reply(mess.niReply0438());
}
break;

case 'antipalavrão':
case 'antipalavrao':
case 'antipalavra':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
if (isPalavrao) {
dataGp[0].antipalavrao.active = !dataGp[0].antipalavrao.active;
setGp(dataGp);
if (dataGp[0].antipalavrao.active) {
reply(mess.niReply0439());
}
else {
reply(mess.niReply0440());
}
}
else {
dataGp[0].antipalavrao.active = true;
setGp(dataGp);
reply(mess.niReply0441());
}
break;

case 'antinotas':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
dataGp[0].antinotas = !dataGp[0].antinotas;
setGp(dataGp);
if (dataGp[0].antinotas) {
reply(mess.niReply0442());
}
else {
reply(mess.niReply0443());
}
break;

case 'antimsg':
case 'antiinvisivel':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
dataGp[0].antimsg = dataGp[0].antimsg !== true;
setGp(dataGp);
reply(dataGp[0].antimsg ? mess.messageAntiMsgAtivado() : mess.messageAntiMsgDesativado());
break;

case 'antipayment':
case 'antipagamento':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
dataGp[0].antipayment = dataGp[0].antipayment !== true;
setGp(dataGp);
reply(dataGp[0].antipayment ? mess.messageAntiPaymentAtivado() : mess.messageAntiPaymentDesativado());
break;

case 'antimarcar':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
dataGp[0].antimarcar = dataGp[0].antimarcar !== true;
setGp(dataGp);
if (dataGp[0].antimarcar) {
reply(mess.messageAntiMarcarAtivado());
} else {
reply(mess.messageAntiMarcarDesativado());
}
break;

case 'modo+18':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
dataGp[0].modo18 = dataGp[0].modo18 !== true;
setGp(dataGp);
reply(dataGp[0].modo18 ? mess.modo18Ativado() : mess.modo18Desativado());
break;

case 'modobn':
case 'modobrincadeira':
case 'modobrincadeiras':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
if (isModobn) {
dataGp[0].jogos = false;
setGp(dataGp);
reply(mess.niReply0444());
}
else {
dataGp[0].jogos = true;
setGp(dataGp);
reply(mess.niReply0445());
}
break;

case 'promptia':
if (!SoDono)
return reply(mess.onlyOwner());
if (!q)
return reply(mess.niReply0446());
const cfg2 = getIAConfig();
cfg2.prompt = q.trim();
setIAConfig(cfg2);
reply(mess.niReply0447());
break;

case 'nomeia':
if (!SoDono)
return reply(mess.onlyOwner());
if (!q)
return reply(mess.niReply0448({ e0: () => (prefix + command) }));
const cfg1 = getIAConfig();
cfg1.nome = q.trim();
setIAConfig(cfg1);
reply(mess.niReply0449({ e0: () => (q) }));
break;

case 'modoia':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!q) {
return reply(mess.modoIAexemplo());
}
dataGp[0].modoia_normal = false;
dataGp[0].modoia_avancado = false;
if (q === '0') {
setGp(dataGp);
return reply(mess.niReply0450());
}
if (q === '1') {
dataGp[0].modoia_normal = true;
setGp(dataGp);
return reply(mess.iaNormalAtivado(getIAConfig));
}
if (q === '2') {
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
dataGp[0].modoia_avancado = true;
setGp(dataGp);
return reply(mess.iaAvancadoAtivado(getIAConfig));
}
return reply(mess.niReply0451());
break;

case "parceria":
case "parcerias":
case "listparceria":
case "listaparceria": {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
const db = parceriaLoad();
const gp = parceriaGetGroup(db, from);
parceriaDailyReset(gp, dattofc);
gp.parceiros = parceriaDedupParceirosObj(gp.parceiros);
gp.nparc = parceriaDedupParceirosObj(gp.nparc);
const status = gp.ativo ? "✅ ᴀᴛɪᴠᴀᴅᴏ" : "❌ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ";
const parceiros = gp.parceiros || {};
const jids = Object.keys(parceiros);
if (!jids.length) {
return reply(mess.niReply0452({ e0: () => (status) }));
}
let txt = `*🤝 ʟɪsᴛᴀ ᴅᴇ ᴘᴀʀᴄᴇʀɪᴀ*
• sᴛᴀᴛᴜs: ${status}
• ᴛᴏᴛᴀʟ: *${jids.length}*
`;
const mentionsArr = [];
for (let i = 0; i < jids.length && i < 30; i++) {
const jid = jids[i];
const p = parceiros[jid] || {};
const limite = Math.max(0, Number(p.limite || 0));
const usados = Math.max(0, Number(p.usados || 0));
const rest = Math.max(0, limite - usados);
txt += `👤 @${jid.split("@")[0]}
├ 📢 ${usados}/${limite}
└ ⏳ ʀᴇsᴛᴀᴍ: ${rest}
`;
mentionsArr.push(jid);
}
await yuta.sendMessage(from, { text: txt.trim(), mentions: mentionsArr }, { quoted: yt });
break;
}
case "delparceria":
case "del_parceria":
case "rmparceria":
case "rm_parceria": {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
let meta = groupMetadata;
if (!meta?.participants) {
try {
meta = await yuta.groupMetadata(from);
}
catch {
meta = groupMetadata;
}
}
const ctx = info?.message?.extendedTextMessage?.contextInfo ||
info?.message?.imageMessage?.contextInfo ||
info?.message?.videoMessage?.contextInfo ||
info?.message?.documentMessage?.contextInfo ||
info?.message?.stickerMessage?.contextInfo ||
null;
const rawAlvo = (ctx?.mentionedJid && ctx.mentionedJid.length ? ctx.mentionedJid[0] : null) ||
ctx?.participant ||
null;
const alvo = (typeof parceriaGetTargetFromMsg === "function")
? parceriaGetTargetFromMsg(info, sender, meta)
: (typeof normalizar === "function" ? normalizar(rawAlvo) : rawAlvo);
if (!alvo)
return reply(mess.niReply0453());
const db = parceriaLoad();
const gp = parceriaGetGroup(db, from);
parceriaDailyReset(gp, dattofc);
gp.parceiros = parceriaDedupParceirosObj(gp.parceiros);
gp.nparc = parceriaDedupParceirosObj(gp.nparc);
if (gp.parceiros && gp.parceiros[alvo]) {
delete gp.parceiros[alvo];
if (gp.nparc && gp.nparc[alvo])
delete gp.nparc[alvo];
parceriaSave(db);
return yuta.sendMessage(from, {
text: mess.niText1290({ e0: () => (alvo.split("@")[0]) }),
mentions: [alvo]
}, { quoted: info });
}
parceriaSave(db);
return reply(mess.niReply0454());
break;
}
case "modoparceria": {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
const db = parceriaLoad();
const gp = parceriaGetGroup(db, from);
parceriaDailyReset(gp, dattofc);
gp.ativo = !gp.ativo;
parceriaSave(db);
if (gp.ativo) {
reply(mess.niReply0455());
}
else {
reply(mess.niReply0456());
}
break;
}
case "addparceria":
case "add_parceria":
case "addparce": {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
let meta = groupMetadata;
if (!meta?.participants) {
try {
meta = await yuta.groupMetadata(from);
}
catch {
meta = groupMetadata;
}
}
const ctx = info?.message?.extendedTextMessage?.contextInfo ||
info?.message?.imageMessage?.contextInfo ||
info?.message?.videoMessage?.contextInfo ||
info?.message?.documentMessage?.contextInfo ||
info?.message?.stickerMessage?.contextInfo ||
null;
const rawAlvo = (ctx?.mentionedJid && ctx.mentionedJid.length ? ctx.mentionedJid[0] : null) ||
ctx?.participant ||
null;
const alvo = (typeof parceriaGetTargetFromMsg === "function")
? parceriaGetTargetFromMsg(info, sender, meta)
: (typeof normalizar === "function" ? normalizar(rawAlvo) : rawAlvo);
const limite = (typeof parceriaParseLimite === "function")
? parceriaParseLimite(q)
: (() => {
const nums = String(q || "").match(/\d+/g) || [];
return nums.length ? Number(nums[nums.length - 1]) : 0;
})();
if (!alvo || !Number.isFinite(limite) || limite <= 0) {
return reply(mess.niReply0457({ e0: () => (prefix), e1: () => (prefix) }));
}
if (limite > 50)
return reply(mess.niReply0458());
const db = parceriaLoad();
const gp = parceriaGetGroup(db, from);
parceriaDailyReset(gp, dattofc);
gp.parceiros = parceriaDedupParceirosObj(gp.parceiros);
gp.nparc = parceriaDedupParceirosObj(gp.nparc);
if (gp.parceiros[alvo]) {
const p = gp.parceiros[alvo] || {};
const limAtual = Number(p?.limite || 0);
parceriaSave(db);
return reply(mess.niReply0459({ e0: () => (limAtual) }));
}
gp.parceiros[alvo] = {
limite: Number(limite),
usados: 0,
warnLimite: false,
data: String(dattofc)
};
if (gp.nparc && gp.nparc[alvo])
delete gp.nparc[alvo];
parceriaSave(db);
await yuta.sendMessage(from, {
text: mess.niText1291({ e0: () => (alvo.split("@")[0]), e1: () => (limite) }),
mentions: [alvo]
}, { quoted: info });
break;
}
case 'autorepo':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
if (isAutorepo) {
dataGp[0].autoresposta = false;
setGp(dataGp);
reply(mess.niReply0460());
}
else {
dataGp[0].autoresposta = true;
setGp(dataGp);
reply(mess.niReply0461());
}
break;

case 'rgrepo':
case 'addrepo':
{
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
if (!isAutorepo)
return reply(mess.niReply0462());
if (!q.trim()) {
return reply(mess.niReply0463({ e0: () => (prefix), e1: () => (prefix) }));
}
const entradaRepo = q.trim();
const repos = loadGroupAutorepo(from);
const quoted = getQuotedMessageRepo();
if (!quoted) {
if (!entradaRepo.includes('/')) {
return reply(mess.niReply0464({ e0: () => (prefix) }));
}
const partes = entradaRepo.split('/');
const gatilhoTxt = String(partes.shift() || '').trim();
const respostaTxt = String(partes.join('/') || '').trim();
if (!gatilhoTxt)
return reply(mess.niReply0465());
if (!respostaTxt)
return reply(mess.niReply0466());
const gatilhoFinal = rmLetras(gatilhoTxt).replace(/\s+/g, ' ').trim();
const keyTexto = normalizeRepoKey(gatilhoFinal);
const idxOld = repos.findIndex(r => normalizeRepoKey(r?.trigger) === keyTexto);
if (idxOld >= 0) {
const antigo = repos[idxOld];
if (antigo?.file) {
const oldPath = `${AUTOREPO_MEDIA_DIR}/${antigo.file}`;
try {
if (fs.existsSync(oldPath))
fs.unlinkSync(oldPath);
}
catch { }
}
repos.splice(idxOld, 1);
}
repos.push({
trigger: gatilhoFinal,
type: 'text',
text: respostaTxt
});
saveGroupAutorepo(from, repos);
return reply(mess.niReply0467({ e0: () => (gatilhoFinal), e1: () => (respostaTxt) }));
}
const gatilho = rmLetras(entradaRepo).replace(/\s+/g, ' ').trim();
if (!gatilho)
return reply(mess.niReply0468());
const key = normalizeRepoKey(gatilho);
const textoQuoted = extractAnyTextRepo(quoted);
const img = quoted.imageMessage || quoted?.viewOnceMessage?.message?.imageMessage || quoted?.viewOnceMessageV2?.message?.imageMessage;
const vid = quoted.videoMessage || quoted?.viewOnceMessage?.message?.videoMessage || quoted?.viewOnceMessageV2?.message?.videoMessage;
const aud = quoted.audioMessage;
const stk = quoted.stickerMessage;
const idxOld = repos.findIndex(r => normalizeRepoKey(r?.trigger) === key);
if (idxOld >= 0) {
const antigo = repos[idxOld];
if (antigo?.file) {
const oldPath = `${AUTOREPO_MEDIA_DIR}/${antigo.file}`;
try {
if (fs.existsSync(oldPath))
fs.unlinkSync(oldPath);
}
catch { }
}
repos.splice(idxOld, 1);
}
if (stk) {
const saved = await saveAutorepoMediaFile(from, key, 'sticker', quoted);
if (!saved)
return reply(mess.niReply0469());
repos.push({
trigger: gatilho,
type: 'sticker',
file: saved.file,
mimetype: saved.mimetype
});
saveGroupAutorepo(from, repos);
return reply(mess.niReply0470({ e0: () => (gatilho) }));
}
if (aud) {
const saved = await saveAutorepoMediaFile(from, key, 'audio', quoted);
if (!saved)
return reply(mess.niReply0471());
repos.push({
trigger: gatilho,
type: 'audio',
file: saved.file,
mimetype: saved.mimetype
});
saveGroupAutorepo(from, repos);
return reply(mess.niReply0472({ e0: () => (gatilho) }));
}
if (img) {
const saved = await saveAutorepoMediaFile(from, key, 'image', quoted);
if (!saved)
return reply(mess.niReply0473());
repos.push({
trigger: gatilho,
type: 'image',
file: saved.file,
mimetype: saved.mimetype,
caption: textoQuoted || ''
});
saveGroupAutorepo(from, repos);
return reply(mess.niReply0474({ e0: () => (gatilho) }));
}
if (vid) {
const saved = await saveAutorepoMediaFile(from, key, 'video', quoted);
if (!saved)
return reply(mess.niReply0475());
repos.push({
trigger: gatilho,
type: 'video',
file: saved.file,
mimetype: saved.mimetype,
caption: textoQuoted || ''
});
saveGroupAutorepo(from, repos);
return reply(mess.niReply0476({ e0: () => (gatilho) }));
}
if (textoQuoted) {
repos.push({
trigger: gatilho,
type: 'text',
text: textoQuoted
});
saveGroupAutorepo(from, repos);
return reply(mess.niReply0477({ e0: () => (gatilho) }));
}
return reply(mess.niReply0478());
}
break;

case 'delrepo':
case 'rmrepo':
{
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
if (!isAutorepo)
return reply(mess.niReply0479());
const repos = loadGroupAutorepo(from);
if (!repos.length)
return reply(mess.niReply0480());
const entrada = q.trim();
if (!entrada) {
return reply(mess.niReply0481({ e0: () => (prefix), e1: () => (prefix), e2: () => (prefix) }));
}
const entradaNorm = normalizeRepoKey(entrada);
if (entradaNorm === 'tudo' || entradaNorm === 'todos') {
let removidos = 0;
for (const item of repos) {
if (item?.file) {
const oldPath = `${AUTOREPO_MEDIA_DIR}/${item.file}`;
try {
if (fs.existsSync(oldPath))
fs.unlinkSync(oldPath);
}
catch { }
}
removidos++;
}
saveGroupAutorepo(from, []);
return reply(mess.niReply0482({ e0: () => (removidos) }));
}
const numeros = entrada
.split(/\s+/)
.map(x => Number(x))
.filter(x => Number.isInteger(x) && x > 0);
if (numeros.length) {
const unicos = [...new Set(numeros)].sort((a, b) => b - a);
const validos = unicos.filter(n => n <= repos.length);
if (!validos.length) {
return reply(mess.niReply0483());
}
const removidos = [];
for (const n of validos) {
const item = repos[n - 1];
if (!item)
continue;
if (item?.file) {
const oldPath = `${AUTOREPO_MEDIA_DIR}/${item.file}`;
try {
if (fs.existsSync(oldPath))
fs.unlinkSync(oldPath);
}
catch { }
}
removidos.push(item.trigger || `#${n}`);
repos.splice(n - 1, 1);
}
saveGroupAutorepo(from, repos);
return reply(mess.niReply0484({ e0: () => (removidos.map((x, i) => `${i + 1}. ${x}`).join('\n')) }));
}
const idx = repos.findIndex(r => normalizeRepoKey(r?.trigger) === entradaNorm);
if (idx < 0)
return reply(mess.niReply0485());
const antigo = repos[idx];
if (antigo?.file) {
const oldPath = `${AUTOREPO_MEDIA_DIR}/${antigo.file}`;
try {
if (fs.existsSync(oldPath))
fs.unlinkSync(oldPath);
}
catch { }
}
const nomeRemovido = antigo?.trigger || entrada;
repos.splice(idx, 1);
saveGroupAutorepo(from, repos);
reply(mess.niReply0486({ e0: () => (nomeRemovido) }));
}
break;

case 'listrepo':
case 'autorepolist':
{
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
if (!isAutorepo)
return reply(mess.niReply0487());
const repos = loadGroupAutorepo(from);
if (!repos.length)
return reply(mess.niReply0488());
let txt = `*ᴛᴏᴅᴏs ᴏs ᴀᴜᴛᴏʀᴇᴘᴏs ᴅᴏ ɢʀᴜᴘᴏ [ ${groupName} ] 🙇‍♂️*`;
for (let i = 0; i < repos.length; i++) {
txt += `\n\n*${i + 1}.* *ɢᴀᴛɪʟʜᴏ:* ${repos[i].trigger}\n*↝ ᴛɪᴘᴏ:* ${repos[i].type}`;
if (repos[i].type === 'text') {
txt += `\n*↝ ʀᴇsᴘᴏsᴛᴀ:* ${repos[i].text || ''}`;
}
}
reply(txt);
}
break;

case 'autototext':
if (!isGroup)
return reply(mess.onlyGroup());
if (!SoDono)
return reply(mess.onlyOwner());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
if (isYutaEscuta) {
dataGp[0].yutaescutando = false;
setGp(dataGp);
reply(mess.niReply0489());
}
else {
dataGp[0].yutaescutando = true;
setGp(dataGp);
reply(mess.niReply0490());
}
break;

case 'autodl':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
if (isAutoDl) {
dataGp[0].autodl = false;
setGp(dataGp);
reply(mess.niReply0491());
}
else {
dataGp[0].autodl = true;
setGp(dataGp);
reply(mess.niReply0492());
}
break;

case 'autofigu':
case 'autosticker':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
if (isAutofigu) {
dataGp[0].autosticker = false;
setGp(dataGp);
reply(mess.niReply0493());
}
else {
dataGp[0].autosticker = true;
setGp(dataGp);
reply(mess.niReply0494());
}
break;

case 'bangp':
case 'unbangp':
{
if (!SoDono && !info.key.fromMe)
return reply(mess.onlyOwner());
try {
const on = command === 'bangp';
let idgp = from, nome = groupName || "ɢʀᴜᴘᴏ ᴀᴛᴜᴀʟ", n = null;
if (q) {
n = Number(q.trim());
if (!Number.isInteger(n) || n < 1)
return reply(mess.niReply0495({ e0: () => (prefix), e1: () => (command) }));
const gps = Object.values(await yuta.groupFetchAllParticipating()).sort((a, b) => (b.participants?.length || b.size || 0) - (a.participants?.length || a.size || 0));
if (!gps[n - 1])
return reply(mess.niReply0496({ e0: () => (gps.length) }));
idgp = gps[n - 1].id;
nome = gps[n - 1].subject || "sᴇᴍ ɴᴏᴍᴇ";
}
else if (!isGroup)
return reply(mess.niReply0497({ e0: () => (prefix), e1: () => (command) }));
const db = getGroupConfig(idgp, [{ name: nome, groupId: idgp }]) || [{ name: nome, groupId: idgp }];
if (!db[0])
db[0] = { name: nome, groupId: idgp };
if (db[0].bangp === on)
return reply(mess.niReply0498({ e0: () => (on ? "ʙᴀɴɪᴅᴏ" : "ᴅᴇsʙᴀɴɪᴅᴏ") }));
db[0].bangp = on;
saveGroupConfig(idgp, db);
reply(mess.niReply0499({ e0: () => (on ? "ʙᴀɴɪᴅᴏ" : "ᴅᴇsʙᴀɴɪᴅᴏ"), e1: () => (n ? `- 🔢 *ɴᴜᴍᴇʀᴀçãᴏ:* ${n}\n` : ""), e2: () => (nome) }));
}
catch (e) {
reply(String(e));
}
}
break;

case 'gppv':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
reply(mess.niReply0500({ e0: () => (isCargo) }));
linkgc = await yuta.groupInviteCode(from);
yuta.sendMessage(sender, { text: mess.niText1292() + linkgc }, { quoted: yt });
break;

case 'zeraranycount':
case 'resetanycount':
case 'limparanycount':
{
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins && !SoDono)
return reply(mess.onlyAdmins());
if (!dataGp?.[0])
return reply(mess.error());
dataGp[0].anyCount = 0;
dataGp[0].anycount = 0;
dataGp[0].AnyCount = 0;
dataGp[0].antiCount = false;
dataGp[0].anticount = false;
dataGp[0].limitec = { active: false, quantidade: null };
setGp(dataGp);
reply(mess.niResetAnyCountOk({ e0: () => groupName }));
}
break;

case 'zerarmodolevel':
case 'resetmodolevel':
case 'limparmodolevel':
case 'zerarlevel':
{
if (!isGroup)
return reply(mess.onlyGroup());
if (!SoDono && !DonoOficial && !isnit && !issupre && !ischyt)
return reply(mess.onlyOwner());
if (dataGp?.[0]) {
dataGp[0].level = false;
setGp(dataGp);
}
let removidosLevel = 0;
try {
normalizarLevelDB();
const idxGrupoLevel = level2.findIndex(g => g?.groupId === from || g?.id === from);
if (idxGrupoLevel >= 0) {
removidosLevel = Array.isArray(level2[idxGrupoLevel].usuarios) ? level2[idxGrupoLevel].usuarios.length : 0;
level2.splice(idxGrupoLevel, 1);
salvarLevel();
}
} catch {
normalizarLevelDB();
}
reply(mess.niResetModoLevelOk({ e0: () => groupName, e1: () => removidosLevel }));
}
break;

case 'cleargp':
{
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins && !SoDono)
return reply(mess.onlyAdmins());
let groupIndex = getGroupIndex(from);
let totalUsuarios = 0;
if (groupIndex === -1) {
countMessage.push({
groupName,
groupId: from,
numbers: []
});
groupIndex = countMessage.length - 1;
} else {
totalUsuarios = Array.isArray(countMessage[groupIndex]?.numbers) ? countMessage[groupIndex].numbers.length : 0;
countMessage[groupIndex].groupName = groupName;
countMessage[groupIndex].groupId = from;
countMessage[groupIndex].numbers = [];
if (Array.isArray(countMessage[groupIndex].participants))
countMessage[groupIndex].participants = [];
}
saveCountMessage();
reply(mess.niResetContadorGrupoOk({ e0: () => groupName, e1: () => totalUsuarios }));
}
break;

case 'zerarcoins':
case 'resetcoins':
case 'limparcoinsgrupo':
{
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins && !SoDono)
return reply(mess.onlyAdmins());
const grupoCoins = RG_SCOINS.find(g => g?.grupo === from);
if (!grupoCoins || !Array.isArray(grupoCoins.usus) || !grupoCoins.usus.length)
return reply(mess.niCoinsGrupoVazio());
let usuariosZerados = 0;
let totalRemovido = 0;
for (const usuario of grupoCoins.usus) {
const saldoAtual = Number(usuario?.coins || 0);
if (saldoAtual > 0) usuariosZerados += 1;
totalRemovido += Math.max(0, saldoAtual);
usuario.coins = 0;
}
CoinsUpdate(RG_SCOINS);
return reply(mess.niCoinsGrupoZerados({ e0: () => usuariosZerados, e1: () => totalRemovido.toLocaleString('pt-BR') }));
}
break;

case 'removerplano':
case 'removerplanoaluguel':
case 'removerplanopix':
case 'rmplano':
{
if (!__aluguelModoAtivo()) return reply(mess.aluguelDesligado(prefix))
if (!SoDono && !DonoOficial && !isnit && !issupre && !ischyt)
return reply(mess.onlyOwner());
const planoInformado = String(q || args[0] || '').trim();
if (!planoInformado)
return reply(mess.niRemoverPlanoPixUso({ e0: () => prefix }));
const normalizarPlano = (v = '') => String(v || '')
.normalize('NFD')
.replace(/[\u0300-\u036f]/g, '')
.replace(/\s+/g, '')
.toUpperCase()
.trim();
const alvoPlano = normalizarPlano(planoInformado);
let cfg = __aluguelConfigLoad();
if (!Array.isArray(cfg.planos))
cfg.planos = [];
const planoExiste = cfg.planos.find(p => normalizarPlano(p?.id) === alvoPlano || normalizarPlano(p?.titulo) === alvoPlano);
if (!planoExiste)
return reply(mess.niRemoverPlanoPixNaoEncontrado({ e0: () => planoInformado }));
cfg.planos = cfg.planos.filter(p => normalizarPlano(p?.id) !== alvoPlano && normalizarPlano(p?.titulo) !== alvoPlano);
cfg.planosRegistrados = true;
__aluguelConfigSave(cfg);
let pendenciasRemovidas = 0;
try {
const autoDb = __aluguelAutoLoad();
if (autoDb?.pend && typeof autoDb.pend === 'object') {
for (const idPix of Object.keys(autoDb.pend)) {
const pend = autoDb.pend[idPix];
if (normalizarPlano(pend?.planoId) === normalizarPlano(planoExiste.id)) {
delete autoDb.pend[idPix];
pendenciasRemovidas++;
}
}
}
__aluguelAutoSave(autoDb);
} catch { }
reply(mess.niRemoverPlanoPixOk({ e0: () => (planoExiste.titulo || planoExiste.id || planoInformado), e1: () => pendenciasRemovidas }));
}
break;

case 'removeraluguelgp':
case 'rmaluguelgp':
case 'removerplanoaluguelgp':
case 'rmplanogp':
{
if (!__aluguelModoAtivo()) return reply(mess.aluguelDesligado(prefix))
if (!isGroup)
return reply(mess.onlyGroup());
if (!SoDono && !DonoOficial && !isnit && !issupre && !ischyt)
return reply(mess.onlyOwner());
let registrosRemovidos = 0;
let pendenciasRemovidas = 0;
try {
const antes = Array.isArray(gruposAutorizados) ? gruposAutorizados.length : 0;
gruposAutorizados = Array.isArray(gruposAutorizados) ? gruposAutorizados.filter(g => g?.id !== from) : [];
registrosRemovidos = antes - gruposAutorizados.length;
salvarGrupos();
} catch { }
try {
const autoDb = __aluguelAutoLoad();
if (autoDb?.groups && typeof autoDb.groups === 'object' && autoDb.groups[from]) {
delete autoDb.groups[from];
registrosRemovidos++;
}
if (autoDb?.pend && typeof autoDb.pend === 'object') {
for (const idPix of Object.keys(autoDb.pend)) {
if (autoDb.pend[idPix]?.grupo === from) {
delete autoDb.pend[idPix];
pendenciasRemovidas++;
}
}
}
__aluguelAutoSave(autoDb);
} catch { }
reply(mess.niRemoverAluguelGrupoOk({ e0: () => groupName, e1: () => registrosRemovidos, e2: () => pendenciasRemovidas }));
}
break;

case 'antidelete':
case 'anti-delete':
case 'x9msg':
{
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
let dataGpAnti = getGroupConfig(from, Array.isArray(dataGp) ? dataGp : [{}]) || [{}];
if (!dataGpAnti[0])
dataGpAnti[0] = {};
dataGpAnti[0].name = dataGpAnti[0].name || groupName;
dataGpAnti[0].groupId = dataGpAnti[0].groupId || from;
dataGpAnti[0].antidelete = !dataGpAnti[0].antidelete;
saveGroupConfig(from, dataGpAnti);
reply(mess.niAntideleteStatus({ e0: () => dataGpAnti[0].antidelete }));
}
break;

case 'anticanal':
{
try {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins && !SoDono)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
let json = getGroupConfig(from, [{}]) || [{}];
if (!json[0])
json[0] = {};
if (json[0].anticanal === true) {
json[0].anticanal = false;
saveGroupConfig(from, json);
reply(mess.niReply0501());
}
else {
json[0].anticanal = true;
saveGroupConfig(from, json);
reply(mess.niReply0502());
}
}
catch (e) {
console.log(mess.niConsole019(), e);
reply(mess.error());
}
}
break;

case 'antilinkgp':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
if (isAntilinkgp) {
dataGp[0].antilinkgp = false;
setGp(dataGp);
reply(mess.niReply0503());
}
else {
dataGp[0].antilinkgp = true;
setGp(dataGp);
reply(mess.niReply0504());
}
break;

case 'antidocumento':
case 'antidoc':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
if (dataGp[0].antidoc) {
dataGp[0].antidoc = false;
setGp(dataGp);
reply(mess.niReply0505());
}
else {
dataGp[0].antidoc = true;
setGp(dataGp);
reply(mess.niReply0506());
}
break;

case 'antictt':
case 'anticontato':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
if (dataGp[0].antictt) {
dataGp[0].antictt = false;
setGp(dataGp);
reply(mess.niReply0507());
}
else {
dataGp[0].antictt = true;
setGp(dataGp);
reply(mess.niReply0508());
}
break;

case 'antiddd':
case 'anti_ddd':
case 'anti-ddd':
if (!isGroup)
return await reply(mess.onlyGroup());
if (!isGroupAdmins)
return await reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return await reply(mess.onlyBotAdmin());
if (dataGp[0].ANTI_DDD.active) {
dataGp[0].ANTI_DDD.active = false;
setGp(dataGp);
await reply(mess.niReply0509());
}
else {
dataGp[0].ANTI_DDD.active = true;
setGp(dataGp);
await reply(mess.niReply0510());
}
break;

case 'antiloc':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
if (isAntiLoc) {
dataGp[0].antiloc = false;
setGp(dataGp);
reply(mess.niReply0511());
}
else {
dataGp[0].antiloc = true;
setGp(dataGp);
reply(mess.niReply0512());
}
break;

case 'antifake':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins && !SoDono)
return reply(mess.onlyAdmins());
if (isAntifake) {
dataGp[0].antifake = false;
setGp(dataGp);
reply(mess.niReply0513());
}
else {
dataGp[0].antifake = true;
setGp(dataGp);
reply(mess.niReply0514());
}
break;

case 'anticatalogo':
case 'anticatalg':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
if (isAnticatalogo) {
dataGp[0].anticatalogo = false;
setGp(dataGp);
reply(mess.niReply0515());
}
else {
dataGp[0].anticatalogo = true;
setGp(dataGp);
reply(mess.niReply0516());
}
break;

case 'antiaudio':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
if (isAntiAudio) {
dataGp[0].antiaudio = false;
setGp(dataGp);
reply(mess.niReply0517());
}
else {
dataGp[0].antiaudio = true;
setGp(dataGp);
reply(mess.niReply0518());
}
break;

case 'antibot':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
if (isAntiBot) {
dataGp[0].antibot = false;
setGp(dataGp);
reply(mess.niReply0519());
}
else {
dataGp[0].antibot = true;
setGp(dataGp);
reply(mess.niReply0520());
}
break;

case 'antisticker':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
dataGp[0].antisticker = !dataGp[0].antisticker;
setGp(dataGp);
if (dataGp[0].antisticker) {
reply(mess.niReply0521());
}
else {
reply(mess.niReply0522());
}
break;

case 'antiimg':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
dataGp[0].antiimg = !dataGp[0].antiimg;
setGp(dataGp);
if (dataGp[0].antiimg) {
reply(mess.niReply0523());
}
else {
reply(mess.niReply0524());
}
break;

case 'antivideo':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
dataGp[0].antivideo = !dataGp[0].antivideo;
setGp(dataGp);
if (dataGp[0].antivideo) {
reply(mess.niReply0525());
}
else {
reply(mess.niReply0526());
}
break;

case 'x9adm':
case 'x9':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
dataGp[0].x9 = !dataGp[0].x9;
setGp(dataGp);
if (dataGp[0].x9) {
reply(mess.niReply0527());
}
else {
reply(mess.niReply0528());
}
break;

case 'antilink':
case 'antilinkhard':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
dataGp[0]['antilink'] = !dataGp[0]['antilink'];
dataGp[0]['antilinkhard'] = dataGp[0]['antilink'];
setGp(dataGp);
if (dataGp[0]['antilink']) {
reply(mess.niReply0529());
}
else {
reply(mess.niReply0530());
}
break;

case 'x9visuunica':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
dataGp[0].visuUnica = !dataGp[0].visuUnica;
setGp(dataGp);
if (dataGp[0].visuUnica) {
reply(mess.niReply0531());
}
else {
reply(mess.niReply0532());
}
break;

case 'so_adm':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
dataGp[0].soadm = !dataGp[0].soadm;
setGp(dataGp);
if (dataGp[0].soadm) {
reply(mess.niReply0533());
}
else {
reply(mess.niReply0534());
}
break;

case 'odelete':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins && !SoDono)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
nescessario.Odelete = !nescessario.Odelete;
setNes(nescessario);
if (nescessario.Odelete) {
reply(mess.niReply0535());
}
else {
reply(mess.niReply0536());
}
break;

case 'antilinkeasy':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotGroupAdmins());
dataGp[0].antilinkeasy = !dataGp[0].antilinkeasy;
setGp(dataGp);
if (dataGp[0].antilinkeasy) {
reply(mess.niReply0537());
}
else {
reply(mess.niReply0538());
}
break;

case 'botoes':
case 'modobotoes':
{
if (!SoDono)
return reply(mess.onlyOwner());
nescessario.botoes = !nescessario.botoes;
setNes(nescessario);
reply(mess.niModoBotoesStatus({ e0: () => (nescessario.botoes) }));
}
break;

case 'anti-sp':
case 'antisp':
case 'anti_sp':
try {
if (!isGroup)
return reply(mess.niReply0539());
if (!SoDono && !info.key.fromMe)
return reply(mess.niReply0540());
if (!isBotGroupAdmins)
return reply(mess.niReply0541());
if (ANT_SP.groupId === from && ANT_SP.active) {
ANT_SP.active = false;
fs.writeFileSync(directory, JSON.stringify(ANT_SP, null, 2));
reply(mess.niReply0542());
}
else {
ANT_SP.active = true;
ANT_SP.groupId = from;
ANT_SP.groupName = groupName;
fs.writeFileSync(directory, JSON.stringify(ANT_SP, null, 2));
await reply(mess.niReply0543());
}
}
catch (error) {
console.error(error);
reply(mess.niReply0544());
}
break;

case 'anotar':
case 'tirar_nota':
case 'rmnota':
if (!isGroup)
return reply(mess.niReply0545());
if (!isGroupAdmins)
return reply(mess.niReply0546());
if (command == "anotar") {
var [q5, q10] = q.trim().split("|");
if (!q5 || !q10 || !q.includes("|"))
return reply(mess.niReply0547({ e0: () => (prefix), prefix }));
if (JSON.stringify(anotar).includes(from)) {
var i2 = anotar.map(i => i.grupo).indexOf(from);
if (JSON.stringify(anotar[i2].puxar).includes(q5)) {
var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q5);
if (anotar[i2].puxar[i3].nota == q5)
return reply(mess.niReply0548({ e0: () => (prefix), e1: () => (q5) }));
}
}
if (!JSON.stringify(anotar).includes(from)) {
anotar.push({ grupo: from, puxar: [{ nota: q5, anotacao: q10 }] });
fs.writeFileSync("./src/dados/func/anotar.json", JSON.stringify(anotar));
reply(mess.niReply0549());
}
else {
anotar[i2].puxar.push({ nota: q5, anotacao: q10 });
fs.writeFileSync("./src/dados/func/anotar.json", JSON.stringify(anotar));
reply(mess.niReply0550());
}
}
else {
if (!q)
return reply(mess.niReply0551({ prefix }));
if (JSON.stringify(anotar).includes(from)) {
var i2 = anotar.map(i => i.grupo).indexOf(from);
if (JSON.stringify(anotar[i2].puxar).includes(q)) {
var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q);
}
}
if (0 > anotar[i2].puxar.map(i => i.nota).indexOf(q))
return reply(mess.niReply0552());
anotar[i2].puxar.splice(i3, 1);
fs.writeFileSync("./src/dados/func/anotar.json", JSON.stringify(anotar));
reply(mess.niReply0553({ e0: () => (q) }));
}
break;

case 'anotacao':
case 'anotacoes':
case 'nota':
case 'notas':
if (!isGroup)
return reply(mess.niReply0554());
if (command == "anotacao" || command == "nota") {
if (!q)
return reply(mess.niReply0555({ prefix }));
if (!JSON.stringify(anotar).includes(from))
return reply(mess.niReply0556());
var i2 = anotar.map(i => i.grupo).indexOf(from);
if (!JSON.stringify(anotar[i2].puxar).includes(q))
return reply(mess.niReply0557());
var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q);
mentions(mess.niAnotacaoResposta({ e0: () => anotar[i2].puxar[i3].anotacao }));
}
else {
var i2 = anotar.map(i => i.grupo).indexOf(from);
if (anotar[i2].puxar.length == 0)
return reply(mess.niReply0558());
var i2 = anotar.map(i => i.grupo).indexOf(from);
var antr = anotar[i2].puxar;
txtin = ``;
for (i = 0; i < antr.length; i++) {
txtin += `> *${i + 1}.* ${anotar[i2].puxar[i].nota} — ${anotar[i2].puxar[i].anotacao}\n`;
}
reply(mess.niListaAnotacoes({ e0: () => groupName, e1: () => txtin }));
}
break;

case 'download-link':
if (q.includes("video") || q.includes("mp4")) {
await yuta.sendMessage(from, { video: { url: q }, mimetype: 'video/mp4' }, { quoted: yt }).catch(async (e) => {
reply(mess.niReply0559());
});
}
else if (q.includes("webp") || q.includes("jpg")) {
await yuta.sendMessage(from, { image: { url: q } }, { quoted: yt }).catch(async (e) => {
reply(mess.niReply0560());
});
}
break;

case 'correio':
if (!q.trim().includes("/"))
return reply(mess.niReply0561({ e0: () => (prefix) }));
var [tx1, tx2] = q.trim().split("/");
bla = mess.anonymousMail(tx2);
yuta.sendMessage(`${tx1}@s.whatsapp.net`, { text: bla });
reply(mess.niReply0562({ e0: () => (tx1) }));
break;

case 'destrava':
await yuta.sendMessage(from, { text: destrava(prefix) }, { quoted: yt });
break;

case 'perfil': {
try {
let avatarUrl = imgperfil;
let fundoUrl = imgperfil;
try {
const ppUrl = await yuta.profilePictureUrl(sender, 'image');
if (ppUrl) avatarUrl = ppUrl;
} catch {}
fundoUrl = avatarUrl;
try {
const resultBusiness = await yuta.query({ tag: 'iq', attrs: { to: '@s.whatsapp.net', type: 'get', xmlns: 'w:biz'}, content: [{ tag: 'business_profile', attrs: { v: '244' }, content: [{ tag: 'profile', attrs: { jid: sender }}]}]
});
const profileBusiness = resultBusiness?.content?.[0]?.content?.[0]?.content || [];
const coverPhoto = profileBusiness.find(item => item?.tag === 'cover_photo' && item?.content);
if (coverPhoto) {
const capaBusiness = Buffer.isBuffer(coverPhoto.content) ? coverPhoto.content.toString() : String(coverPhoto.content);
if (capaBusiness && capaBusiness !== 'null' && capaBusiness !== 'undefined' && /^https?:\/\//i.test(capaBusiness)) { fundoUrl = capaBusiness; }
}

} catch {}

let status;
try {
const recadoUser = await yuta.fetchStatus(sender);
status = recadoUser?.[0]?.status?.status || recadoUser?.status || 'sem bio';
} catch {
status = 'bio oculta ou indisponivel';
}

const conselho = advices?.commonAdvices?.length ? advices.commonAdvices[Math.floor(Math.random() * advices.commonAdvices.length)] : 'nao confie nem na sua sombra...';
const num = () => Math.floor(Math.random() * 9) + 1;
const pct = () => `${num()}${num()}%`;
const programa = (Math.floor(Math.random() * 9000) + 1000).toLocaleString('pt-BR');
let dadosUser = { messages: 0, cmd_messages: 0, figus: 0, imagens: 0, videos: 0, audios: 0, documentos: 0};

if (isGroup && Array.isArray(groupIdscount) && groupIdscount.includes(from)) {
const indGrupo = groupIdscount.indexOf(from);
const grupoData = countMessage?.[indGrupo];
const userData = grupoData?.numbers?.find(user => user.id === sender);

if (userData) {
dadosUser = { messages: userData.messages || 0, cmd_messages: userData.cmd_messages || 0, figus: userData.figus || 0, imagens: userData.imagens || 0, videos: userData.videos || 0, audios: userData.audios || 0, documentos: userData.documentos || 0 };}}
const cardPerfil = await api.canvas.perfil({ fundo: fundoUrl, logo: avatarUrl, nome: pushname || 'Usuario', subnome: `${NomeDoBot} • My Profile`, custom_status: status });
await yuta.sendMessage(from, {
image: cardPerfil, caption: mess.perfilyuta(pushname, sender, status, isChVip, isCargo, dadosUser, pct, programa, conselho, NomeDoBot), contextInfo: { ...NkChannelKk }}, { quoted: yt});
} catch (e) {
console.log(e);
reply(mess.ErroAPI(prefix, SITE));
}
}
break;

case 'hd': {
try {
const axiosHd = (await import('axios')).default;
const cheerioHd = await import('cheerio');
const FormDataHd = (await import('form-data')).default;

const quotedHd = info.message?.extendedTextMessage?.contextInfo?.quotedMessage;
const imageHd = quotedHd?.imageMessage || info.message?.imageMessage;

if (!imageHd) {
return reply('🖼️ Marque ou responda a uma imagem para melhorar a qualidade.');
}

reply('✨ Melhorando a qualidade da imagem em 4x. Aguarde...');

const streamHd = await downloadContentFromMessage(imageHd, 'image');
let bufferHd = Buffer.from([]);

for await (const chunk of streamHd) {
bufferHd = Buffer.concat([bufferHd, chunk]);
}

if (!bufferHd.length) throw new Error('Imagem vazia.');

async function getTokenHd() {
const response = await axiosHd.get('https://www.iloveimg.com/upscale-image', {
headers: { 'User-Agent': 'Mozilla/5.0' }
});

const $ = cheerioHd.load(response.data);

const script = $('script')
.filter((i, el) => $(el).html()?.includes('ilovepdfConfig ='))
.html();

if (!script) throw new Error('Token não encontrado.');

const marker = 'ilovepdfConfig = ';
const position = script.indexOf(marker);

if (position < 0) throw new Error('Configuração não encontrada.');

const jsonText = script.slice(position + marker.length).split(';')[0];
const config = JSON.parse(jsonText);
const csrf = $('meta[name="csrf-token"]').attr('content');

if (!config.token || !csrf) {
throw new Error('Token ou CSRF ausente.');
}

return { token: config.token, csrf };
}

async function uploadHd(server, headers, buffer, task) {
const form = new FormDataHd();

form.append('name', 'image.jpg');
form.append('chunk', '0');
form.append('chunks', '1');
form.append('task', task);
form.append('preview', '1');
form.append('file', buffer, 'image.jpg');

const response = await axiosHd.post(
'https://' + server + '.iloveimg.com/v1/upload',
form,
{
headers: {
...headers,
...form.getHeaders()
}
}
);

return response.data;
}

async function upscaleHd(buffer, scale = 4) {
const { token, csrf } = await getTokenHd();

const servers = [
'api1g','api2g','api3g','api8g','api9g',
'api10g','api11g','api12g','api13g',
'api14g','api15g','api16g','api17g',
'api18g','api19g','api20g','api21g',
'api22g','api24g','api25g'
];

const server = servers[Math.floor(Math.random() * servers.length)];

const task = 'r68zl88mq72xq94j2d5p66bn2z9lrbx20njsbw2qsAvgmzr11lvfhAx9kl87pp6yqgx7c8vg7sfbqnrr42qb16v0gj8jl5s0kq1kgp26mdyjjspd8c5A2wk8b4Adbm6vf5tpwbqlqdr8A9tfn7vbqvy28ylphlxdl379psxpd8r70nzs3sk1';

const headers = {
'Authorization': 'Bearer ' + token,
'Origin': 'https://www.iloveimg.com/',
'Cookie': '_csrf=' + csrf,
'User-Agent': 'Mozilla/5.0'
};

const uploaded = await uploadHd(server, headers, buffer, task);

if (!uploaded?.server_filename) {
throw new Error('Falha no envio da imagem.');
}

const form = new FormDataHd();

form.append('task', task);
form.append('server_filename', uploaded.server_filename);
form.append('scale', String(scale));

const response = await axiosHd.post(
'https://' + server + '.iloveimg.com/v1/upscale',
form,
{
headers: {
...headers,
...form.getHeaders()
},
responseType: 'arraybuffer',
validateStatus: () => true
}
);

const contentType = response.headers['content-type'] || '';

if (response.status < 200 || response.status >= 300 ||
contentType.includes('application/json')) {
throw new Error('Falha no processamento do iLoveIMG.');
}

const result = Buffer.from(response.data);

if (!result.length) throw new Error('Resultado vazio.');

return result;
}

const resultHd = await upscaleHd(bufferHd, 4);

await yuta.sendMessage(from, {
image: resultHd,
caption: '✨ IMAGEM MELHORADA COM SUCESSO! (4x)',
contextInfo: NkChannelKk
}, { quoted: yt });

} catch (error) {
console.error('[HD ILOVEIMG]:', error?.message || error);
reply('❌ Erro ao melhorar a imagem. Tente novamente mais tarde.');
}
}
break;

case 'hd2': {
try {
if ((isMedia && !info.message.videoMessage) || isQuotedImage || /^https?:\/\//i.test(q || '')) {
reply(mess.niReply0563());
let imagemUrl = q?.trim();

if (!imagemUrl) {
const quotedHd = info.message?.extendedTextMessage?.contextInfo?.quotedMessage;
const postHd = isQuotedImage ? quotedHd?.imageMessage : info.message?.imageMessage;

if (!postHd) {
return reply(mess.niReply0564());
}

const streamHd = await downloadContentFromMessage(postHd, 'image');
let bufferHd = Buffer.from([]);

for await (const chunk of streamHd) {
bufferHd = Buffer.concat([bufferHd, chunk]);
}

imagemUrl = await upload(bufferHd);
}

if (!imagemUrl) return reply(mess.error());

const apiHd = await api.outros.hd2(imagemUrl);

await yuta.sendMessage(from, {
image: apiHd,
contextInfo: NkChannelKk
}, { quoted: yt });

} else {
reply(mess.niReply0564());
}
} catch (error) {
console.error(error);
reply(mess.ErroAPI(prefix, SITE));
}
}
break;

case 'modoimg':
case 'modoimagem':
{
if (!SoDono) return reply(mess.onlyOwner());
nescessario.modoimg = !nescessario.modoimg;
setNes(nescessario);
reply(mess.modoimg({ e0: () => nescessario.modoimg }));
}
break;

case 'ping':
{
try {
const inicioPing = process.hrtime.bigint();

const formatMsPing = (ms = 0) => {
ms = Number(ms) || 0;
return ms < 1000 ? `${ms.toFixed(ms < 10 ? 3 : 2)} ms` : `${(ms / 1000).toFixed(2)}s`;
};

const formatRamPing = (bytes = 0) => {
const n = Number(bytes) || 0;
if (n >= 1024 ** 3) return `${(n / 1024 ** 3).toFixed(2)} GB`;
if (n >= 1024 ** 2) return `${(n / 1024 ** 2).toFixed(2)} MB`;
if (n >= 1024) return `${(n / 1024).toFixed(2)} KB`;
return `${n} B`;
};

const contarComandosPing = () => {
try {
const linhas = fs.readFileSync('./index.js', 'utf8').split(/\r?\n/);
let total = 0;
let emBloco = false;

for (const linha of linhas) {
const l = linha.trim();
if (!l || l.startsWith('//')) continue;

if (/^case\s+['"`][^'"`]+['"`]\s*:/.test(l)) {
if (!emBloco) {
total++;
emBloco = true;
}
continue;
}

if (l === 'break;' || l.startsWith('break;')) {
emBloco = false;
}
}

return total;
} catch {
return '🤷‍♂️';
}
};

const contarGruposPing = async () => {
try {
let chats = [];

if (typeof store !== 'undefined' && store?.chats) {
if (typeof store.chats.all === 'function') {
chats = store.chats.all();
} else if (store.chats instanceof Map) {
chats = [...store.chats.values()];
} else {
chats = Object.values(store.chats);
}
}

const gruposStore = chats
.map(i => String(i?.id || i?.jid || ''))
.filter(id => id.endsWith('@g.us'));

if (gruposStore.length) return new Set(gruposStore).size;

if (global.totalGruposPing && Date.now() - global.totalGruposPingTime < 60000) {
return global.totalGruposPing;
}

const grupos = await yuta.groupFetchAllParticipating();
const total = Object.keys(grupos || {}).length;

global.totalGruposPing = total;
global.totalGruposPingTime = Date.now();

return total;
} catch {
return global.totalGruposPing || 0;
}
};

if (!global.totalBlocosComandosPing) {
global.totalBlocosComandosPing = contarComandosPing();
}

const totalComandos = global.totalBlocosComandosPing;
const totalGrupos = await contarGruposPing();

const uptime = TimeCount(process.uptime());
const freeRam = formatRamPing(os.freemem());
const totalRam = formatRamPing(os.totalmem());
const statusBot = isBotoff ? "Offline" : "Online";

const tempoPing = formatMsPing(Number(process.hrtime.bigint() - inicioPing) / 1e6);

const textoPing = mess.Velocidade(
tempoPing,
totalGrupos,
uptime,
NomeDoBot,
freeRam,
totalRam,
totalComandos
);

const botoesPing = [
{ name: "quick_reply", buttonParamsJson: JSON.stringify({ display_text: "✦ 𝐀𝐁𝐑𝐈𝐑 𝐌𝐄𝐍𝐔 ✦", id: `${prefix}menu` }) },
{ name: "quick_reply", buttonParamsJson: JSON.stringify({ display_text: "✧ 𝐀𝐓𝐔𝐀𝐋𝐈𝐙𝐀𝐑 ✧", id: `${prefix}ping` }) },
{ name: "cta_url", buttonParamsJson: JSON.stringify({ display_text: "✦ 𝐂𝐀𝐍𝐀𝐋 𝐎𝐅𝐈𝐂𝐈𝐀𝐋 ✦", url: channel, merchant_url: channel }) }
];

if (usarImg()) {
const imgPing = await api.canvas.ping({
fundo: fundoping,
logo: await yuta.profilePictureUrl(sender, 'image').catch(() => imgperfil),
uptime,
memoria: `${freeRam}/${totalRam}`,
latencia: tempoPing,
status: statusBot,
velocidade: tempoPing
});

if (usarBotoes()) {
await sendInteractiveImageButtons(yuta, from, {
image: imgPing,
body: textoPing,
footer: `*✦ ${NomeDoBot} ✦*`,
buttons: botoesPing,
contextInfo: NkChannelKk
}, { quoted: yt });
} else {
await yuta.sendMessage(from, {
image: imgPing,
caption: textoPing,
contextInfo: NkChannelKk
}, { quoted: yt });
}

} else {
if (usarBotoes()) {
await sendLikeInnovators(yuta, from, {
text: textoPing,
footer: `*✦ ${NomeDoBot} ✦*`,
interactiveButtons: botoesPing,
contextInfo: NkChannelKk
}, { quoted: yt });
} else {
await yuta.sendMessage(from, {
text: textoPing,
contextInfo: NkChannelKk
}, { quoted: yt });
}
}

try {
await reagir(from, "✨");
} catch {}

} catch (e) {
console.log(e);
reply(mess.ErroAPI ? mess.ErroAPI(prefix, SITE) : mess.error());
}
}
break;
case 'tabela':
await yuta.sendMessage(from, { text: tabela(prefix, NomeDoBot) }, { quoted: yt });
break;

case 'destrava2':
await yuta.sendMessage(from, { text: destrava2(prefix) }, { quoted: yt });
break;

case 'gerarcpf':
cp1 = `${Math.floor(Math.random() * 300) + 600}`;
cp2 = `${Math.floor(Math.random() * 300) + 600}`;
cp3 = `${Math.floor(Math.random() * 300) + 600}`;
cp4 = `${Math.floor(Math.random() * 30) + 60}`;
cpf = `${cp1}.${cp2}.${cp3}-${cp4}`;
await yuta.sendMessage(from, { text: mess.niText1293({ e0: () => (cpf) }), contextInfo: { ...NkChannelKk } }, { quoted: yt });
break;

case 'ddd':
if (args.length < 1)
return reply(mess.niReply0565({ e0: () => (prefix + command), prefix }));
ddd = body.slice(5);
ddds = await axios.get(`https://brasilapi.com.br/api/ddd/v1/${ddd}`);
dddlist = ``;
for (let i = 0; i < ddds.data.cities.length; i++) {
dddlist += `> *${i + 1}.* ${ddds.data.cities[i]}
`;
}
await yuta.sendMessage(from, { text: mess.niListaCidadesDDD({ e0: () => q, e1: () => ddds.data.state, e2: () => dddlist }), contextInfo: { ...NkChannelKk } }, { quoted: yt });
break;

case 'gethtml':
if (!q || !isUrl(args[0]))
return reply(mess.niReply0566({ e0: () => (prefix + command) }));
try {
await replyWithReaction(mess.niEnviandoPv(), { react: { text: "📨", key: info.key } });
axios.get(args[0], { headers: { "user-agent": "Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.5195.136 Mobile Safari/537.36" } }).then(async (res) => {
let htmlData = typeof res.data === 'object' ? JSON.stringify(res.data, null, 2) : res.data;
htmlData = htmlData.replace(/    /g, '').replace(/></g, '>\n<').replace(/> </g, '>\n<');
await yuta.sendMessage(sender, { document: Buffer.from(htmlData), fileName: q + `.html`, mimetype: 'text/html' }, { quoted: yt });
}).catch(e => { return reply(mess.error()); });
}
catch (e) {
console.log(e);
reply(mess.error());
}
break;

case 'revelar':
case 'rvisu':
case 'open':
await reagir(from, "👀");
if (JSON.stringify(info).includes("videoMessage")) {
var Xoxota = info.message?.extendedTextMessage?.contextInfo?.quotedMessage;
var video = Xoxota?.videoMessage || info.message?.videoMessage ||
Xoxota?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage ||
info.message?.viewOnceMessage?.message?.videoMessage || Xoxota?.viewOnceMessage?.message?.videoMessage;
if (video) {
video.viewOnce = false;
video.video = { url: video.url };
yuta.sendMessage(from, video, { quoted: yt });
}
}
else if (JSON.stringify(info).includes("imageMessage")) {
var Xoxota = info.message?.extendedTextMessage?.contextInfo?.quotedMessage;
var image = Xoxota?.imageMessage || info.message?.imageMessage ||
Xoxota?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage ||
info.message?.viewOnceMessage?.message?.imageMessage || Xoxota?.viewOnceMessage?.message?.imageMessage;
if (image) {
image.viewOnce = false;
image.image = { url: image.url };
yuta.sendMessage(from, image, { quoted: yt });
}
}
else if (JSON.stringify(info).includes("audioMessage") || info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.viewOnceMessageV2Extension?.message?.audioMessage) {
var audio = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage;
if (audio) {
if (!audio.mimetype)
return;
let buffAudio = await getFileBuffer(audio, 'audio');
let audioFile = getRandom('.mp3');
fs.writeFileSync(audioFile, buffAudio);
let audioBuffer = fs.readFileSync(audioFile);
yuta.sendMessage(from, { audio: audioBuffer, mimetype: 'audio/mpeg', ptt: false }, { quoted: yt });
fs.rmSync(audioFile);
}
}
else {
reply(mess.niReply0567());
}
break;

case 'calculadora':
case 'calcular':
case 'calc':
{
if (!q)
return reply(mess.niReply0568());
let rsp = q
.replace(/x/gi, "*")
.replace(/÷/g, "/")
.replace(/,/g, ".")
.replace(/[^0-9+\-*/().]/g, "");
try {
let result = eval(rsp);
return reply(mess.niReply0569({ e0: () => (result) }));
}
catch (e) {
return reply(mess.error());
}
}
break;

case 'admins':
case 'listadmins':
case 'listaadmins':
{
if (!isGroup)
return reply(mess.onlyGroup());
let texto = `╭─ *${NomeDoBot}* 👑\n│ ⚡ *𝐂𝐇𝐀𝐌𝐀𝐃𝐎 𝐃𝐄 𝐀𝐃𝐌𝐈𝐍𝐒*\n╰──────────────────\n\n▸ 👤 *𝐔𝐒𝐔𝐀́𝐑𝐈𝐎 ↴*\n> @${sender.split("@")[0]}\n\n▸ 📝 *𝐌𝐎𝐓𝐈𝐕𝐎 ↴*\n> *${q || "Nenhum motivo especificado"}*`;
yuta.sendMessage(from, { text: texto, mentions: [sender, ...groupAdmins] }, { quoted: yt });
}
break;

case 'consultar_vip':
if (!JSON.stringify(vip).includes(sender))
return reply(mess.niReply0570());
AB = vip.map(i => i.id).indexOf(sender);
await mention(mess.niConsultarVip({ e0: () => (vip[AB].id.split('@')[0]), e1: () => (vip[AAB].infinito == false ? `sᴇᴜ ᴠɪᴘ ɪʀᴀ ᴇxᴘɪʀᴀʀ ᴇᴍ ${vip[AB].dias} ᴅɪᴀ${vip[AB].dias > 1 ? `s` : ``}.` : `ɴᴀᴏ ᴇxɪsᴛᴇ ᴜᴍ ᴅɪᴀ ᴅᴇ ᴇxᴘɪʀᴀᴄᴀᴏ ᴅᴏ sᴇᴜ ᴠɪᴘ.`) }));
break;

case 'envpv':
case 'pv':
{
if (!isGroup)
return reply(mess.niReply0571());
if (!menc_prt)
return reply(mess.niReply0572());
var DFC = "";
var rsm = info.message?.extendedTextMessage?.contextInfo?.quotedMessage;
var pink = isQuotedImage ? rsm?.imageMessage : info.message?.imageMessage;
var blue = isQuotedVideo ? rsm?.videoMessage : info.message?.videoMessage;
var purple = isQuotedDocument ? rsm?.documentMessage : info.message?.documentMessage;
var yellow = isQuotedDocW ? rsm?.documentWithCaptionMessage?.message?.documentMessage : info.message?.documentWithCaptionMessage?.message?.documentMessage;
var aud_d = isQuotedAudio ? rsm.audioMessage : "";
var figu_d = isQuotedSticker ? rsm.stickerMessage : "";
var red = isQuotedMsg && !aud_d && !figu_d && !pink && !blue && !purple && !yellow ? rsm.conversation : info.message?.conversation;
var green = rsm?.extendedTextMessage?.text || info?.message?.extendedTextMessage?.text;
if (pink && !aud_d && !purple) {
var DFC = pink;
pink.caption = q.length > 1 ? "*ᴘʀᴏɴᴛᴏ sᴇɴʜᴏʀ(ᴀ) 🙇‍♂️*" : pink.caption.replace(new RegExp(prefix + command, "gi"), `*ᴘʀᴏɴᴛᴏ sᴇɴʜᴏʀ(ᴀ) 🙇‍♂️*`);
pink.image = { url: pink.url };
}
else if (blue && !aud_d && !purple) {
var DFC = blue;
blue.caption = q.length > 1 ? "*ᴘʀᴏɴᴛᴏ sᴇɴʜᴏʀ(ᴀ) 🙇‍♂️*" + q.trim() : blue.caption.replace(new RegExp(prefix + command, "gi"), `*ᴘʀᴏɴᴛᴏ sᴇɴʜᴏʀ(ᴀ) 🙇‍♂️*`).trim();
blue.video = { url: blue.url };
}
else if (red && !aud_d && !purple) {
black = {};
black.text = red.replace(new RegExp(prefix + command, "gi"), `*ᴘʀᴏɴᴛᴏ sᴇɴʜᴏʀ(ᴀ) 🙇‍♂️*`).trim();
var DFC = black;
}
else if (!aud_d && !figu_d && green && !purple && !purple) {
brown = {};
brown.text = green.replace(new RegExp(prefix + command, "gi"), `*ᴘʀᴏɴᴛᴏ sᴇɴʜᴏʀ(ᴀ) 🙇‍♂️*`).trim();
var DFC = brown;
}
else if (purple) {
var DFC = purple;
purple.document = { url: purple.url };
}
else if (yellow && !aud_d) {
var DFC = yellow;
yellow.caption = q.length > 1 ? "*ᴘʀᴏɴᴛᴏ sᴇɴʜᴏʀ(ᴀ) 🙇‍♂️*" + q.trim() : yellow.caption.replace(new RegExp(prefix + command, "gi"), `*ᴘʀᴏɴᴛᴏ sᴇɴʜᴏʀ(ᴀ) 🙇‍♂️*`).trim();
yellow.document = { url: yellow.url };
}
else if (figu_d && !aud_d) {
var DFC = figu_d;
figu_d.sticker = { url: figu_d.url };
}
else if (aud_d) {
var DFC = aud_d;
aud_d.audio = { url: aud_d.url };
aud_d.ptt = true;
}
reply(mess.niReply0573());
await yuta.sendMessage(sender, DFC, { quoted: yt }).catch(e => {
console.log(e);
});
}
break;

case 'doc':
case 'docfake':
try {
sprd = "|";
if (!q)
return reply(mess.niReply0574({ e0: () => (prefix + command), e1: () => (sprd), e2: () => (sprd) }));
kls = args.join(' ');
let nomedoc = kls.split(sprd)[0] || `${setting.NomeDoBot}`;
let peso = kls.split(sprd)[1] * 500000 || '500000';
let mimetyp = kls.split(sprd)[2].replace(" ", "") || 'gif';
let thumbc = kls.split(sprd)[3] || 'https://google.com/';
if (mimetyp.toLowerCase() == 'pdf')
mimetyp = 'application/pdf';
if (mimetyp.toLowerCase() == 'apk')
mimetyp = 'application/vnd.Android 🚀.package-archive';
if (mimetyp.toLowerCase() == 'aac')
mimetyp = 'audio/aac';
if (mimetyp.toLowerCase() == 'xml')
mimetyp = 'application/xml';
if (mimetyp.toLowerCase() == 'zip')
mimetyp = 'application/zip';
if (mimetyp.toLowerCase() == 'jpg')
mimetyp = 'image/jpeg';
if (mimetyp.toLowerCase() == 'ppt')
mimetyp = 'application/vnd.ms-powerpoint';
if (mimetyp.toLowerCase() == 'pptx')
mimetyp = 'application/vnd.openxmlformats-officedocument.presentationml.presentation';
if (mimetyp.toLowerCase() == 'mp4')
mimetyp = 'video/mp4';
if (mimetyp.toLowerCase() == 'm4a')
mimetyp = 'audio/mpeg';
if (mimetyp.toLowerCase() == 'mp3')
mimetyp = 'audio/mpeg';
if (mimetyp.toLowerCase() == 'gif')
mimetyp = 'image/gif';
if (mimetyp.toLowerCase() == 'png')
mimetyp = 'image/png';
if (mimetyp.toLowerCase() == 'svg')
mimetyp = 'image/svg+xml';
if (mimetyp.toLowerCase() == 'txt')
mimetyp = 'text/plain';
let Messagemdoc = { document: fs.readFileSync('./src/dados/data/docf.txt'), mimetype: mimetyp, jpegThumbnail: await getBuffer(thumbc), fileName: nomedoc, fileLength: peso, headerType: 4, contextInfo: { forwardingScore: 999, isForwarded: true } };
await yuta.sendMessage(from, Messagemdoc, { quoted: yt });
}
catch (err) {
console.log(err);
reply(mess.error());
}
break;

case 'sender':
bla = jidNormalizedUser(isGroup ? info?.key?.participantPn || info?.key?.senderPn || await yuta?.user?.id || info?.key?.participant : info?.key?.senderPn || info?.key?.participant || info?.key?.remoteJid);
reply(bla);
break;

case 'rename':
case 'roubar':
if (!isQuotedSticker)
return reply(mess.niReply0575());
encmediats = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker');
var kls = q;
var pack = kls.split("/")[0];
var author2 = kls.split("/")[1];
if (!q) {
return reply(mess.niReply0576());
}
if (!pack || !author2) {
return reply(mess.niReply0577({ e0: () => (prefix + command) }));
}
reply(mess.wait());
var bas64 = `data:image/jpeg;base64,${encmediats.toString('base64')}`;
try {
var mantap = await convertSticker(bas64, author2, pack);
var sti = Buffer.from(mantap, 'base64');
yuta.sendMessage(from, {
sticker: sti,
contextInfo: NkChannelKk
}, { quoted: yt }).catch((err) => {
reply(mess.error());
});
}
catch (e) {
console.error(e);
reply(mess.error());
}
break;

case 'take': {
try {
if (!isQuotedSticker)
return reply(mess.niReply0578());
reply(mess.teste());
const db = readTakeDB();
const userKey = getTakeKey() || String(sender || '').replace(/\D/g, '');
const registroTake = userKey ? db[userKey] || null : null;
const packname = registroTake?.packname || registroTake?.pack || `${pushname}`;
const author = registroTake?.author || '';
const takeSTK = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker');
const prepareSTK = await applyTakeStickerFromBuffer(takeSTK, author, packname);
await yuta.sendMessage(from, { sticker: prepareSTK, contextInfo: NkChannelKk}, { quoted: yt });
} catch (e) {
console.error(e);
reply(mess.error());
}
}
break;

case 'rgtake':
{
try {
const exemploMsg = mess.marca(prefix);
const texto = (q || '').trim();
if (!texto)
return reply(exemploMsg);
const userKey = getTakeKey();
if (!userKey)
return reply(mess.takeKeyError());
const db = readTakeDB();
if (db[userKey]) {
const authorAtual = db[userKey]?.author || 'N/A';
const packAtual = db[userKey]?.packname || db[userKey]?.pack || 'N/A';
const criadoEm = db[userKey]?.savedAt ? formatDataBR(db[userKey].savedAt) : 'N/A';
const alteradoEm = db[userKey]?.updatedAt ? formatDataBR(db[userKey].updatedAt) : 'Nenhuma alteração.';
return reply(mess.rgtakeAlready(authorAtual, packAtual, criadoEm, alteradoEm, prefix));
}
const separador = texto.includes('|') ? '|' : (texto.includes('/') ? '/' : null);
if (!separador)
return reply(exemploMsg);
const partes = texto.split(separador).map(t => t.trim()).filter(Boolean);
if (partes.length < 2)
return reply(exemploMsg);
const packname = partes[0].slice(0, 60);
const author = partes.slice(1).join(` ${separador} `).trim().slice(0, 60);
const agora = Date.now();
setTakeRegistro(db, {
author,
packname,
pack: packname,
savedAt: agora,
updatedAt: null
});
writeTakeDB(db);
const checkDB = readTakeDB();
if (!checkDB[userKey])
return reply(mess.takeSaveError());
return reply(mess.rgtakeSuccess(author, packname, formatDataBR(agora), prefix));
}
catch (e) {
console.error(e);
reply(mess.takeSaveError());
}
}
break;

case 'rmtake':
{
try {
const db = readTakeDB();
const consultaTake = deleteTakeRegistro(db);
if (!consultaTake.data)
return reply(mess.niReply0579());
writeTakeDB(db);
return reply(mess.niReply0580());
}
catch (e) {
console.error(e);
reply(mess.error());
}
}
break;

case 'modtake':
{
try {
const texto = (q || '').trim();
if (!texto)
return reply(mess.marca(prefix));
const db = readTakeDB();
const { key: userKey, data: registroTake } = getTakeRegistro(db);
if (!userKey)
return reply(mess.takeKeyError());
if (!registroTake)
return reply(mess.niReply0581());
const separador = texto.includes('|') ? '|' : (texto.includes('/') ? '/' : null);
if (!separador)
return reply(mess.marca(prefix));
const partes = texto.split(separador).map(t => t.trim()).filter(Boolean);
if (partes.length < 2)
return reply(mess.marca(prefix));
const packNovo = partes[0].slice(0, 60);
const authorNovo = partes.slice(1).join(` ${separador} `).trim().slice(0, 60);
const agoraMod = Date.now();
db[userKey] = {
...registroTake,
author: authorNovo,
packname: packNovo,
pack: packNovo,
updatedAt: agoraMod
};
writeTakeDB(db);
const criadoEm = registroTake?.savedAt ? formatDataBR(registroTake.savedAt) : 'N/A';
const alteradoEm = formatDataBR(agoraMod);
return reply(mess.modtakeUpdated(authorNovo, packNovo, criadoEm, alteradoEm));
}
catch (e) {
console.error(e);
reply(mess.error());
}
}
break;

case 'mytake':
{
try {
const db = readTakeDB();
const { data: registroTake } = getTakeRegistro(db);
if (!registroTake)
return reply(mess.niReply0582());
const authorAtual = registroTake?.author || 'N/A';
const packAtual = registroTake?.packname || registroTake?.pack || 'N/A';
const criadoEm = registroTake?.savedAt ? formatDataBR(registroTake.savedAt) : 'N/A';
const alteradoEm = registroTake?.updatedAt ? formatDataBR(registroTake.updatedAt) : 'nenhuma alteração';
const mentionTake = takeMentionJid();
const texto = mess.mytakeText(mentionTake || takeJidFromNumber(getTakeKey()), authorAtual, packAtual, criadoEm, alteradoEm);
await yuta.sendMessage(from, {
text: texto,
contextInfo: {
mentionedJid: [mentionTake].filter(jid => jid && !String(jid).includes('@g.us'))
}
}, { quoted: yt });
}
catch (e) {
console.error(e);
reply(mess.error());
}
}
break;

case 'gerarlink':
case 'link': {
const media = getAnyMedia(info);
if (!media) return reply(mess.niReply0583());
reagir(from, "✨");
try {
const buffer = await getFileBuffer(media.message, media.type);
if (!buffer) return reply(mess.niReply0584());
const extensao = media.message?.fileName?.split('.').pop() || await getExtension(media.mimetype) || ({ image: 'png', video: 'mp4', audio: 'mp3', sticker: 'webp', document: 'bin' }[media.type]);
const link_yuta = await upload(buffer, `bot_${Date.now()}.${extensao}`);
reply(link_yuta ? mess.niReply0585({ e0: () => link_yuta, e1: () => media.type.toUpperCase() }) : mess.niReply0586());
} catch (e) {
console.log(mess.niConsole020().red, e);
reply(mess.error());
}
break;
}
case 'qc':
{
try {
if (!q?.trim())
return reply(mess.niReply0587({ e0: () => (prefix + command) }));

reply(mess.teste());

let avatarUrl;
try {
const ppUrl = await yuta.profilePictureUrl(sender, "image");
avatarUrl = ppUrl || "https://i.imgur.com/6RLm3Kw.png";
} catch (e) {
avatarUrl = "https://i.imgur.com/6RLm3Kw.png";
}

const buffer = await api.canvas.qc({
avatar: avatarUrl,
nick: pushname || 'Yuta',
message: q
});

if (!buffer)
return reply(mess.niReply0588());

await sendImageAsSticker2(yuta, from, buffer, yt, {
packname: "Yuta",
author: "API's"
});

} catch (e) {
console.log(e);
reply(mess.ErroAPI(prefix, SITE));
}
}
break;

case 'infogp':
case 'regras':
case 'infogrupo':
case 'ig':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
await reagir(from, "⏳");
try {
let ppUrl;
try {
ppUrl = await yuta.profilePictureUrl(from, 'image');
}
catch {
ppUrl = semimg;
}
const YutaDesc = await yuta.groupMetadata(from);
const groupAdmins = YutaDesc.participants.filter(p => p.admin);
const groupMembers = YutaDesc.participants;
const criadorJid = normalizar(YutaDesc.subjectOwner);
const descricao = YutaDesc.desc || 'Sem descrição disponível.';
const metaCorrigido = { ...YutaDesc, subjectOwner: criadorJid, desc: descricao };
await yuta.sendMessage(from, {
image: { url: ppUrl },
caption: mess.textInfoGrupo(metaCorrigido, groupAdmins, groupMembers, prefix, moment),
contextInfo: { ...NkChannelKk, mentionedJid: [criadorJid, ...groupAdmins.map(v => v.id)] }
}, { quoted: yt });
}
catch (e) {
console.error(e);
reply(mess.error());
}
break;

case 'encurtalink':
case 'tinyurl': {
if (!q?.trim()) return reply(mess.niReply0589({ e0: () => (prefix + command), prefix }));
try {
await reagir(from, "⏳");
const data = await api.outros.encurtarLink(q.trim()), link = data?.result?.[0]?.encurtado || data?.resultado?.[0]?.encurtado;
if (!data?.status || !link) { await reagir(from, "❌"); return reply(mess.error()); }
await reply(mess.niReply0590({ e0: () => link })); await reagir(from, "✅");
} catch (e) { console.log(e); await reagir(from, "❌"); reply(mess.ErroAPI(prefix, SITE)); }
break;
}

case 'lermais':
case 'morechat':
case 'spoiler':
var [text1_a, text2_b] = q.split("/");
if (!text1_a)
text1_a = "";
if (!text2_b)
text2_b = "";
reply(text1_a + String.fromCharCode(8206).repeat(4001) + text2_b);
break;

case 'obesidade':
case 'obeso':
if (!q.includes("/"))
return reply(mess.niReply0591({ e0: () => (prefix + command) }));
var [peso, altura] = q.split("/");
var resultado = await obeso(peso, altura);
if (resultado <= 17 || resultado <= 18.4) {
await replyWithReaction(mess.niImcResultado({ e0: () => resultado, e1: () => 'ᴀʙᴀɪxᴏ ᴅᴏ ᴘᴇsᴏ' }), { react: { text: "✅", key: info.key } });
}
else if (resultado <= 18.5 || resultado <= 24.9) {
await replyWithReaction(mess.niImcResultado({ e0: () => resultado, e1: () => 'ᴘᴇsᴏ ɪᴅᴇᴀʟ' }), { react: { text: "✅", key: info.key } });
}
else if (resultado <= 25 || resultado <= 29.9) {
await replyWithReaction(mess.niImcResultado({ e0: () => resultado, e1: () => 'sᴏʙʀᴇᴘᴇsᴏ' }), { react: { text: "✅", key: info.key } });
}
else if (resultado <= 30 || resultado <= 39.9) {
await replyWithReaction(mess.niImcResultado({ e0: () => resultado, e1: () => 'ᴏʙᴇsɪᴅᴀᴅᴇ' }), { react: { text: "✅", key: info.key } });
}
else if (resultado > 40) {
await replyWithReaction(mess.niImcResultado({ e0: () => resultado, e1: () => 'ᴏʙᴇsɪᴅᴀᴅᴇ ᴍᴏʀʙɪᴅᴀ' }), { react: { text: "✅", key: info.key } });
}
break;

case 'contardias':
case 'countdays':
if (!q.includes("/"))
return reply(mess.niReply0592());
if (q.length < 10)
return reply(mess.niReply0593({ e0: () => (prefix + command) }));
try {
var tomp = await timeDate('DD/MM/YYYY');
countDay = await countDays(q.split("/"), tomp.split("/"));
reply(mess.niReply0594({ e0: () => (countDay) }));
}
catch (error) {
return reply(mess.error());
}
break;

case 'idade':
if (!q)
return reply(mess.niReply0595({ e0: () => (prefix) }));
try {
let txt;
const regexData = /^(\d{2})\/(\d{2})\/(\d{4})$/;
if (!regexData.test(q))
return reply(mess.niReply0596({ e0: () => (prefix) }));
const [dia, mes, ano] = q.split('/').map(Number);
const dataNascimento = new Date(ano, mes - 1, dia);
const hoje = new Date();
if (dataNascimento > hoje || isNaN(dataNascimento)) {
return reply(mess.niReply0597());
}
const diffMs = hoje - dataNascimento;
const idadeData = new Date(diffMs);
const anos = idadeData.getUTCFullYear() - 1970;
const meses = idadeData.getUTCMonth();
const dias = idadeData.getUTCDate() - 1;
const diasVividos = Math.floor(diffMs / (1000 * 60 * 60 * 24));
const horasVividas = diasVividos * 24;
const minutosVividos = horasVividas * 60;
const proximoAniversario = new Date(hoje.getFullYear(), mes - 1, dia);
if (proximoAniversario <= hoje)
proximoAniversario.setFullYear(hoje.getFullYear() + 1);
const diasParaAniversario = Math.ceil((proximoAniversario - hoje) / (1000 * 60 * 60 * 24));
txt = mess.idade(q, anos, meses, dias, diasVividos, horasVividas, minutosVividos, diasParaAniversario, NomeDoBot).trim();
yuta.sendMessage(from, { video: { url: idade }, gifPlayback: true, caption: txt, contextInfo: { ...NkChannelKk } }, { quoted: yt });
}
catch (e) {
console.log(e);
}
break;

case 'qrcode':
case 'gerarqr': {
if (!q?.trim()) return reply(mess.niReply0598());
try {
await reagir(from, "⏳");
const image = await api.geradores.qrcode(q.trim());
if (!Buffer.isBuffer(image)) { await reagir(from, "❌"); return reply(mess.error()); }
await yuta.sendMessage(from, { image, caption: mess.niText1417({ e0: () => q }) }, { quoted: yt }); await reagir(from, "✅");
} catch (e) { console.log(e); await reagir(from, "❌"); reply(mess.ErroAPI(prefix, SITE)); }
break;
}

case 'perfil2': {
try {
const mentionMessage = info.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0] || info.message?.extendedTextMessage?.contextInfo?.participant || null;
if (mentionMessage) {
await reply(mess.niReply0599());
const randomFromArray = (array) => array[Math.floor(Math.random() * array.length)];
const getProfileUrl = await yuta.profilePictureUrl(mentionMessage, 'image').catch(() => imgperfil);
const types = { genders: ["Gay 🏳️‍🌈", "Masculino 💪", "Feminino 🦋", "Trans 🏳️‍⚧️", "Lésbica 👩‍❤️‍👩"], hobbies: ["Cozinhar 🍜", "Ler livros 📚", "Estudar 🎒", "Praticar esportes ⛹️", "Correr 🏃", "Ouvir música 🎧", "Dançar 💃", "Cantar 🎤", "Viajar 🛫", "Jogar video-gamer 🎮"], professions: ["Médico", "Engenheiro", "Professor", "Artista", "Designer", "Programador", "Músico", "Escritor", "Puta"], favoriteTimesOfDay: ["Manhã 🌤", "Tarde 🌅", "Noite 🌌", "Madrugada 🌃"], favoriteMusicGenres: ["Rock", "Pop", "Jazz", "Sertanejo", "Funk", "Clássica", "Eletrônica"], favoriteTemperatura: ["Frio 🥶", "Quente 🥵", "Morno 🙂‍↕"] };
function getResults() {
return { genero: randomFromArray(types.genders), hobbie: randomFromArray(types.hobbies), job: randomFromArray(types.professions), clima: randomFromArray(types.favoriteTimesOfDay), estilo_musical: randomFromArray(types.favoriteMusicGenres), temperatura: randomFromArray(types.favoriteTemperatura)
};
}
const b = getResults();
const bio = await yuta.fetchStatus(mentionMessage).catch(() => null);
await yuta.sendMessage(from, { image: { url: getProfileUrl, }, caption: mess.perfil2(mentionMessage, bio), mentions: [mentionMessage, sender] }, {
quoted: yt
});
}
else {
reply(mess.niReply0600());
}
}
catch (err) {
console.error(err);
reply(mess.error());
}
break;
}
case 'dinextenso':
if (!q.includes("."))
return reply(mess.niReply0601({ e0: () => (prefix) }));
try {
data = await fetchJson(`https://api.invertexto.com/v1/number-to-words?token=${API_KEY_INVERTEXTO}&number=${q}&language=pt&currency=BRL`);
reply(mess.niReply0602({ e0: () => (q), e1: () => (capitalizeFirstLetter(data.text)) }));
}
catch (error) {
reply(mess.error());
}
break;

case 'validarcpf':
case 'validarcnpj':
if (command === "validarcpf") {
if (!q)
return reply(mess.niReply0603({ prefix }));
if (q.length < 11)
return reply(mess.niReply0604());
try {
data = await fetchJson(`https://api.invertexto.com/v1/validator?token=${API_KEY_INVERTEXTO}&value=${q}`);
if (data.valid == true)
return reply(mess.niReply0605());
if (data.valid == false)
return reply(mess.niReply0606());
}
catch (error) {
reply(mess.error());
}
}
else if (command === "validarcnpj") {
if (!q)
return reply(mess.niReply0607({ prefix }));
if (q.length < 14)
return reply(mess.niReply0608());
try {
data = await fetchJson(`https://api.invertexto.com/v1/validator?token=${API_KEY_INVERTEXTO}&value=${q}`);
if (data.valid == true)
return reply(mess.niReply0609());
if (data.valid == false)
return reply(mess.niReply0610());
}
catch (error) {
reply(mess.error());
}
}
break;

case 'figfundo':
case 'figvideo':
case 'figusemfundo':
case 'sfundo':
if ((isMedia && !info.message.videoMessage || isQuotedImage) && !q.length <= 1) {
rafa = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage;
reply(mess.wait());
buff = await getFileBuffer(rafa, 'image');
bas64 = `data:image/jpeg;base64,${buff.toString('base64')}`;
anu = args.join(' ').split('|');
satu = anu[0] !== '' ? anu[0] : `${NomeDoBot}`;
sd = `↳Feito pelo(a) usuário(a): ${pushname}`;
dua = typeof anu[1] !== 'undefined' ? anu[1] : `${sd}`;
var mantap = await convertSticker(bas64, `${dua}`, `${satu}`);
var sti = new Buffer.from(mantap, 'base64');
await yuta.sendMessage(from, { sticker: sti }, { quoted: yt });
}
else {
return reply(mess.niReply0611());
}
break;

case 'rbale':
if (!isQuotedSticker)
return reply(mess.niReply0612());
encmediats = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker');
reply(mess.wait());
bas64 = `data:image/jpeg;base64,${encmediats.toString('base64')}`;
var mantap = await convertSticker(bas64, `↳Feito pelo(a) usuário(a): ${pushname}`, `${NomeDoBot}`);
var sti = new Buffer.from(mantap, 'base64');
await yuta.sendMessage(from, { sticker: sti }, { quoted: yt }).catch(async (error) => {
reply(mess.error());
});
break;

case 'fstiker':
case 'fsticker':
case 'f':
var RSM = info.message?.extendedTextMessage?.contextInfo?.quotedMessage;
var boij = RSM?.imageMessage || info.message?.imageMessage || RSM?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || RSM?.viewOnceMessage?.message?.imageMessage;
var boij2 = RSM?.videoMessage || info.message?.videoMessage || RSM?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || RSM?.viewOnceMessage?.message?.videoMessage;
if (boij) {
var packnameStk = `${pushname}`;
var authorSticker = `${NomeDoBot}`;
reply(mess.teste());
owgi = await getFileBuffer(boij, 'image');
let ENC_MEDIA1 = await sendImageAsSticker(yuta, from, owgi, yt, {
packname: packnameStk,
author: authorSticker,
contextInfo: NkChannelKk
});
await DLT_FL(ENC_MEDIA1);
}
else if (boij2 && boij2?.seconds < 11) {
var packnameStk = `${pushname}`;
var authorSticker = `${NomeDoBot}`;
reply(mess.teste());
owgi = await getFileBuffer(boij2, 'video');
let ENC_MEDIA2 = await sendVideoAsSticker(yuta, from, owgi, yt, {
packname: packnameStk,
author: authorSticker,
contextInfo: NkChannelKk
});
await DLT_FL(ENC_MEDIA2);
}
else {
reply(mess.niReply0613());
}
break;

case 'st':
case 'stk':
case 'sticker':
case 's':
var RSM = info.message?.extendedTextMessage?.contextInfo?.quotedMessage;
var boij2 = RSM?.imageMessage || info.message?.imageMessage || RSM?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || RSM?.viewOnceMessage?.message?.imageMessage;
var boij = RSM?.videoMessage || info.message?.videoMessage || RSM?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || RSM?.viewOnceMessage?.message?.videoMessage;
if (boij2) {
var pack = mess.fig(ownerName, NomeDoBot);
var author2 = mess.fig2(pushname, groupName, isGroup);
reply(mess.teste());
owgi = await getFileBuffer(boij2, 'image');
let encmediaa = await sendImageAsSticker2(yuta, from, owgi, yt, {
packname: pack,
author: author2,
contextInfo: NkChannelKk
});
await DLT_FL(encmediaa);
}
else if (boij && boij.seconds < 11) {
var pack = mess.fig(ownerName, NomeDoBot);
var author2 = mess.fig2(pushname, groupName, isGroup);
reply(mess.teste());
owgi = await getFileBuffer(boij, 'video');
let encmedia = await sendVideoAsSticker2(yuta, from, owgi, yt, {
packname: pack,
author: author2,
contextInfo: NkChannelKk
});
await DLT_FL(encmedia);
}
else {
reply(mess.niReply0614());
}
break;

case 'transcrever':
case 'totext': {
	const media = getAnyMedia(info, 'audio');
	if (!media) return reply(mess.niReply0615());
	try {
		await reagir(from, "⏳");
		const buffer = await getFileBuffer(media.message, 'audio');
		if (!buffer?.length) { await reagir(from, "❌"); return reply(mess.error()); }
		const uploadResult = await upload(buffer);
		const audioUrl = typeof uploadResult === 'string' ? uploadResult : uploadResult?.url || uploadResult?.link || uploadResult?.resultado || '';
		if (!audioUrl) throw new Error('UPLOAD_AUDIO_FAIL');
		const data = await api.outros.totext(audioUrl);
		if (!data?.status) { await reagir(from, "❌"); return reply(mess.error()); }
		const resultado = data.resultado || data.result || {};
		const textoFinal = resultado?.texto || resultado?.text || resultado?.transcricao || resultado?.transcription || 'ɴᴇɴʜᴜᴍ ᴛᴇxᴛᴏ ʀᴇᴄᴏɴʜᴇᴄɪᴅᴏ';
		const duracao = resultado?.duracao || resultado?.duration || 0, idioma = resultado?.idioma || resultado?.language || 'desconhecido';
		const confidence = Number(resultado?.confidence || resultado?.precisao || 0), precisao = confidence > 0 ? (confidence > 1 ? confidence : confidence * 100).toFixed(1) : '0';
		const palavras = resultado?.palavras || resultado?.words || String(textoFinal).trim().split(/\s+/).filter(Boolean).length || 0;
		await reply(mess.niReply0616({ e0: () => textoFinal, e1: () => duracao, e2: () => idioma, e3: () => precisao, e4: () => palavras, e5: () => NomeDoBot }));
		await reagir(from, "✅");
	} catch (e) {
		console.error('[TRANSCREVER/TOTEXT]', e);
		if (String(e?.code || e?.message || e).includes('UPLOAD_AUDIO_FAIL')) { await reagir(from, "❌"); return reply('Não consegui enviar o áudio para transcrição, tente novamente.'); }
		await reagir(from, "❌"); reply(mess.ErroAPI(prefix, SITE));
	}
	break;
}

case 'suicidio':
setTimeout(() => { reagir(from, `😕`); }, 100);
{
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
if (!isGroup)
return reply(mess.onlyGroup());
await reply(mess.niReply0617({ e0: () => (pushname) }));
await sleep(3000);
await yuta.groupParticipantsUpdate(from, [sender], 'remove');
await sleep(1000);
await reply(mess.niReply0618());
}
break;

case 'toimg':
{
try {
if (!isQuotedSticker)
return reply(mess.niReply0619({ prefix }));
const stickerMessage = info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.stickerMessage ||
info.message?.stickerMessage ||
null;
if (!stickerMessage)
return reply(mess.niReplyToimgReadError());
let buff;
try {
buff = await getFileBuffer(stickerMessage, 'sticker');
}
catch {
buff = Buffer.alloc(0);
const stream = await downloadContentFromMessage(stickerMessage, 'sticker');
for await (const chunk of stream) {
buff = Buffer.concat([buff, chunk]);
}
}
if (!buff || !buff.length)
return reply(mess.niReplyToimgReadError());
await yuta.sendMessage(from, {
image: buff,
caption: mess.niReplyToimgSuccess(),
contextInfo: NkChannelKk
}, { quoted: yt }).catch(async (error) => {
console.log('[ERRO TOIMG ENVIO]', error);
await reply(mess.error());
});
}
catch (error) {
console.log('[ERRO TOIMG]', error);
reply(mess.error());
}
}
break;

case 'togif':
if (!isQuotedSticker)
return reply(mess.niReply0620());
try {
const quotedSticker = info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.stickerMessage;
if (!quotedSticker)
return reply(mess.niReply0621());
if (!quotedSticker.isAnimated)
return reply(mess.niReply0622());
reply(mess.teste());
const media = await getFileBuffer(quotedSticker, 'sticker');
const videoUrl = await webp_mp4(media);
await yuta.sendMessage(from, { video: { url: videoUrl }, gifPlayback: true, mimetype: 'video/mp4' }, { quoted: yt });
}
catch (error) {
reply(mess.error());
}
break;

case 'conselhobiblico':
case 'conselhosbiblico':
case 'conselhosb':
case 'conselhob':
await replyWithReaction(advices.biblicalAdvice[Math.floor(Math.random() * advices.biblicalAdvice.length)], { react: { text: "🙏", key: info.key } }).catch(async (error) => {
await replyWithReaction(mess.error(), { react: { text: "❌", key: info.key } });
});
break;

case 'conselhos':
case 'conselho':
await replyWithReaction(advices.commonAdvices[Math.floor(Math.random() * advices.commonAdvices.length)], { react: { text: "💡", key: info.key } }).catch(async (error) => {
await replyWithReaction(mess.error(), { react: { text: "❌", key: info.key } });
});
break;

case 'cantadas':
case 'cantada':
await replyWithReaction(tools.Cantadas[Math.floor(Math.random() * tools.Cantadas.length)], { react: { text: "😉", key: info.key } }).catch(async (error) => {
await replyWithReaction(mess.error(), { react: { text: "❌", key: info.key } });
});
break;

case 'fatos':
case 'curiosidades':
await replyWithReaction(tools.curiousFacts[Math.floor(Math.random() * tools.curiousFacts.length)], { react: { text: "📚", key: info.key } }).catch(async (error) => {
await replyWithReaction(mess.error(), { react: { text: "❌", key: info.key } });
});
break;

case 'mencionar':
{
if (!q)
return reply(mess.niReply0623({ e0: () => (prefix), prefix }));
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
const membro = groupMetadata.participants[Math.floor(Math.random() * groupMetadata.participants.length)];
const jidReal = membro?.jid || membro?.phoneNumber || membro?.id || membro?.participant;
const numero = String(jidReal).split('@')[0];
await mention(mess.niMencionarResultado({ e0: () => (q), e1: () => (numero) }), [jidReal]);
}
break;

case 'convite':
if (!budy.includes("chat.whatsapp.com"))
return reply(mess.niReply0624());
cnvt = args.join(" ");
reply(mess.niReply0625());
await yuta.sendMessage(nmrdn, { text: mess.groupInvitation(sender, cnvt, prefix) }, { quoted: yt });
break;

case 'recusar_convite':
if (!SoDono)
return reply(mess.onlyOwner());
await yuta.sendMessage(`${q}@s.whatsapp.net`, { text: mess.niText1308() }, { quoted: yt });
break;

case 'sip':
case 'ip': {
if (!q?.trim()) return reply(mess.niReply0626({ e0: () => (prefix + command), prefix }));
try {
await reagir(from, "⏳");
const data = await api.outros.ip(q.trim());
if (!data?.status) { await reagir(from, "❌"); return reply(data?.msg || mess.error()); }
await reply(mess.yutaApiResultado(command, __yutaText(data))); await reagir(from, "✅");
} catch (e) { console.log(e); await reagir(from, "❌"); reply(mess.ErroAPI(prefix, SITE)); }
break;
}

case 'mytag':
inff = mess.niMeuNomeBot({ e0: () => pushname });
yuta.sendMessage(from, { text: inff, contextInfo: NkChannelKk }, { quoted: yt });
break;

case 'getbio':
case 'getb':
{
if (!menc_os2 && !q)
return reply(mess.niReply0627());
reply(mess.niReply0628());
try {
let numero = menc_os2 ? menc_os2.split('@')[0] : q.replace(/\D/g, '');
const getbb = `${numero}@s.whatsapp.net`;
let recadoW;
try {
const recadoUser = await yuta.fetchStatus(getbb);
recadoW = recadoUser[0]?.status?.status || "*privado*";
}
catch {
recadoW = "*privado*";
}
const jidParaMencionar = menc_os2 ? menc_os2 : `${numero}@s.whatsapp.net`;
await yuta.sendMessage(from, {
text: mess.niText1309({ e0: () => (numero), e1: () => (recadoW) }),
contextInfo: { ...NkChannelKk, mentionedJid: [jidParaMencionar] }
}, { quoted: yt });
}
catch (e) {
console.log(e);
reply(mess.error());
}
}
break;

case 'getperfil':
{
if (!menc_os2 && !q)
return reply(mess.niReply0629());
let numero = menc_os2 ? menc_os2.split('@')[0] : q.replace(/\D/g, '');
reply(mess.niReply0630());
let ppimgUrl;
try {
ppimgUrl = await yuta.profilePictureUrl(`${numero}@s.whatsapp.net`, 'image');
}
catch {
ppimgUrl = imgperfil;
}
const jidParaMencionar = menc_os2 ? menc_os2 : `${numero}@s.whatsapp.net`;
await yuta.sendMessage(from, {
image: { url: ppimgUrl },
caption: mess.niText1418({ e0: () => (numero), e1: () => (prefix) }),
contextInfo: { ...NkChannelKk, mentionedJid: [jidParaMencionar] }
}, { quoted: yt });
}
break;

case 'doc':
case 'docfake':
try {
sprd = "|";
if (!q)
return reply(mess.niReply0631({ e0: () => (prefix + command), e1: () => (sprd), e2: () => (sprd) }));
kls = args.join(' ');
let nomedoc = kls.split(sprd)[0] || `${setting.NomeDoBot}`;
let peso = kls.split(sprd)[1] * 500000 || '500000';
let mimetyp = kls.split(sprd)[2].replace(" ", "") || 'gif';
let thumbc = kls.split(sprd)[3] || 'https://google.com/';
if (mimetyp.toLowerCase() == 'pdf')
mimetyp = 'application/pdf';
if (mimetyp.toLowerCase() == 'apk')
mimetyp = 'application/vnd.Android 🚀.package-archive';
if (mimetyp.toLowerCase() == 'aac')
mimetyp = 'audio/aac';
if (mimetyp.toLowerCase() == 'xml')
mimetyp = 'application/xml';
if (mimetyp.toLowerCase() == 'zip')
mimetyp = 'application/zip';
if (mimetyp.toLowerCase() == 'jpg')
mimetyp = 'image/jpeg';
if (mimetyp.toLowerCase() == 'ppt')
mimetyp = 'application/vnd.ms-powerpoint';
if (mimetyp.toLowerCase() == 'pptx')
mimetyp = 'application/vnd.openxmlformats-officedocument.presentationml.presentation';
if (mimetyp.toLowerCase() == 'mp4')
mimetyp = 'video/mp4';
if (mimetyp.toLowerCase() == 'm4a')
mimetyp = 'audio/mpeg';
if (mimetyp.toLowerCase() == 'mp3')
mimetyp = 'audio/mpeg';
if (mimetyp.toLowerCase() == 'gif')
mimetyp = 'image/gif';
if (mimetyp.toLowerCase() == 'png')
mimetyp = 'image/png';
if (mimetyp.toLowerCase() == 'svg')
mimetyp = 'image/svg+xml';
if (mimetyp.toLowerCase() == 'txt')
mimetyp = 'text/plain';
let Messagemdoc = { document: fs.readFileSync('./src/dados/data/docf.txt'), mimetype: mimetyp, jpegThumbnail: await getBuffer(thumbc), fileName: nomedoc, fileLength: peso, headerType: 4, contextInfo: { forwardingScore: 999, isForwarded: true } };
await yuta.sendMessage(from, Messagemdoc, { quoted: yt });
}
catch (err) {
console.log(err);
reply(mess.error());
}
break;

case 'plaq1':
case 'plaq2':
case 'plaq3':
case 'plaq4':
case 'plaq5':
case 'plaq6':
case 'plaq7':
case 'plaq8':
case 'plaq9':
case 'plaq10': {
	if (!isGroup || !isModo18) return reply(mess.modo18Necessario({ prefix }));
	if (!q?.trim()) return reply(mess.niReply0632());
	if (q.length > 25) return reply(mess.niReply0633());
	try {
		await reagir(from, "⏳");
		const data = await api.plaquinhas(command, q.trim());
		if (!data) { await reagir(from, "❌"); return reply(mess.error()); }
		await yuta.sendMessage(from, { image: data }, { quoted: yt }); await reagir(from, "✅");
	} catch (e) { console.log(e); await reagir(from, "❌"); reply(mess.ErroAPI(prefix, SITE)); }
	break;
}

case 'gerarnick':
case 'nick': {
	if (!q?.trim()) return reply(mess.niReply0653({ e0: () => (prefix + command) }));
	try {
		await reagir(from, "⏳");
		const { resultado } = await api.geradores.nick(q.trim());
		if (!resultado?.length) { await reagir(from, "❌"); return reply(mess.niReply0654()); }
		const lista = resultado.map(i => i.result).filter(Boolean);
		if (!lista.length) { await reagir(from, "❌"); return reply(mess.niReply0655()); }
		ultimosNicks[sender] = lista;
		let msg = "*✨ GERADOR DE NICKS ✨*\n\n";
		lista.forEach((nick, i) => { msg += `(${i + 1}) ${nick}\n`; });
		msg += `\n> Envie o número do nick que deseja copiar. 🐈‍⬛\n- *✨ Exemplo:* 10`;
		await reply(msg.trim()); await reagir(from, "✅");
	} catch (e) { console.log(e); await reagir(from, "❌"); reply(mess.ErroAPI(prefix, SITE)); }
	break;
}

case 'metadinha': {
	try {
		const { status, resultado } = await api.animes.metadinha();
		if (!status || !resultado) return reply(mess.niReply0656());
		await reagir(from, "💞");
		const album = await yuta.sendMessage(from, { album: { expectedImageCount: 2, expectedVideoCount: 0 }, contextInfo: { ...NkChannelKk, mentionedJid: [sender] } }, { quoted: y });
		if (!album?.key) throw new Error('Não foi possível criar o álbum da metadinha.');
		await yuta.sendMessage(from, { image: { url: resultado.masculino }, caption: mess.niText1310(), albumParentKey: album.key, contextInfo: { ...NkChannelKk, mentionedJid: [sender] } }, { quoted: y });
		await yuta.sendMessage(from, { image: { url: resultado.feminino }, caption: mess.niText1312(), albumParentKey: album.key, contextInfo: { ...NkChannelKk, mentionedJid: [sender] } }, { quoted: y });
	} catch (err) { console.log(err); reply(mess.ErroAPI(prefix, SITE)); }
	break;
}

case 'attp':
case 'attp2': {
	if (!q?.trim()) return reply(mess.niReply0657({ e0: () => (prefix + command) }));
	try {
		await reagir(from, "⏳");
		const pack = mess.fig(ownerName, NomeDoBot), author = mess.fig2(pushname, groupName, isGroup);
		const buffer = await api.stickers.attp(q);
		if (!buffer) { await reagir(from, "❌"); return reply(mess.niReply0658()); }
		const encmedia = await sendImageAsSticker2(yuta, from, buffer, yt, { packname: pack, author });
		await DLT_FL(encmedia); await reagir(from, "✅");
	} catch (e) { console.log(e); await reagir(from, "❌"); reply(mess.ErroAPI(prefix, SITE)); }
	break;
}

case 'brat':
case 'brat2': {
	if (!q?.trim()) return reply(mess.niReply0659({ e0: () => (prefix + command) }));
	try {
		await reagir(from, "⏳");
		const pack = mess.fig(ownerName, NomeDoBot), author = mess.fig2(pushname, groupName, isGroup), isVideo = command === 'brat2';
		const buffer = await (isVideo ? api.stickers.bratvid(q) : api.stickers.brat(q));
		if (!buffer) { await reagir(from, "❌"); return reply(mess.niReply0660()); }
		const encmedia = await (isVideo ? sendVideoAsSticker2(yuta, from, buffer, yt, { packname: pack, author }) : sendImageAsSticker2(yuta, from, buffer, yt, { packname: pack, author }));
		await DLT_FL(encmedia); await reagir(from, "✅");
	} catch (e) { console.log(e); await reagir(from, "❌"); reply(mess.ErroAPI(prefix, SITE)); }
	break;
}

case 'pinterest':
case 'pinterestimg':
case 'pinterestvideo':
case 'pinterestaudio': {
        const input = q?.trim();
        if (!input) return reply(mess.yutaUso(command, prefix));

        try {
                await reagir(from, "⏳");

                const tipo = command === 'pinterestaudio'
                  ? 'audio'
                  : command === 'pinterestvideo' ? 'video' : 'image';

                if (tipo === 'image') {
                        const endpoint = 'https://pinapi.kreatix.dev/v1/search?q=' +
                          encodeURIComponent(input) + '&scope=pins&page_size=10';

                        const https = await import('node:https');
                        let data;
                        let ultimoErro;

                        for (let tentativa = 1; tentativa <= 5; tentativa++) {
                          try {
                            data = await new Promise((resolve, reject) => {
                              const req = https.get(endpoint, {
                                headers: {
                                  'User-Agent': 'Mozilla/5.0',
                                  'Accept': 'application/json',
                                  'Connection': 'close'
                                }
                              }, (res) => {
                                const partes = [];

                                res.on('data', parte => partes.push(parte));
                                res.on('error', reject);
                                res.on('aborted', () => reject(new Error('Resposta interrompida')));

                                res.on('end', () => {
                                  const status = res.statusCode || 0;
                                  const corpo = Buffer.concat(partes).toString('utf8');

                                  if (status < 200 || status >= 300) {
                                    return reject(new Error('Pinterest API HTTP ' + status));
                                  }

                                  try {
                                    resolve(JSON.parse(corpo));
                                  } catch {
                                    reject(new Error('Resposta inválida do Pinterest'));
                                  }
                                });
                              });

                              req.setTimeout(45000, () => {
                                req.destroy(new Error('Tempo limite da API Pinterest'));
                              });

                              req.on('error', reject);
                            });

                            break;
                          } catch (e) {
                            ultimoErro = e;
                            if (tentativa === 5) throw ultimoErro;
                            await new Promise(resolve => setTimeout(resolve, tentativa * 2000));
                          }
                        }

                        const pins = Array.isArray(data)
                          ? data
                          : data?.results || data?.pins || data?.data || [];

                        const vistos = new Set();
                        const itens = [];

                        for (const pin of pins) {
                                const url = pin?.images?.orig?.url ||
                                  pin?.image ||
                                  pin?.images?.['736x']?.url;

                                if (!url || itens.length >= 5) continue;

                                let endereco;
                                try {
                                  endereco = new URL(url);
                                } catch {
                                  continue;
                                }

                                if (endereco.protocol !== 'https:' ||
                                    endereco.hostname !== 'i.pinimg.com' ||
                                    vistos.has(url)) continue;

                                vistos.add(url);

                                const titulo = String(pin?.title || '').trim();

                                itens.push({
                                  type: 'image',
                                  media: { url },
                                  caption: '📌 Pinterest • ' + (itens.length + 1) +
                                    '/5' + (titulo ? '\n' + titulo : '')
                                });
                        }

                        if (!itens.length) {
                          await reagir(from, "❌");
                          return reply(mess.error());
                        }

                        const cards = [];

                        for (const item of itens) {
                          const preparado = await prepareWAMessageMedia(
                            { image: item.media },
                            { upload: yuta.waUploadToServer }
                          );

                          cards.push({
                            body: proto.Message.InteractiveMessage.Body.fromObject({
                              text: item.caption || ''
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.fromObject({}),
                            header: proto.Message.InteractiveMessage.Header.fromObject({
                              title: 'Pinterest ' + (cards.length + 1) + '/' + itens.length,
                              hasMediaAttachment: true,
                              ...preparado
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                              buttons: []
                            })
                          });
                        }

                        if (cards.length >= 2) {
                          const msg = generateWAMessageFromContent(from, {
                            viewOnceMessage: {
                              message: {
                                messageContextInfo: {
                                  deviceListMetadata: {},
                                  deviceListMetadataVersion: 2
                                },
                                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                                  body: proto.Message.InteractiveMessage.Body.fromObject({
                                    text: '📌 Pinterest • ' + cards.length + ' imagens'
                                  }),
                                  header: proto.Message.InteractiveMessage.Header.fromObject({
                                    hasMediaAttachment: false
                                  }),
                                  carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                                    cards,
                                    messageVersion: 1,
                                    carouselCardType: 1
                                  })
                                })
                              }
                            }
                          }, { quoted: yt });

                          await yuta.relayMessage(from, msg.message, {
                            messageId: msg.key.id
                          });
                        } else {
                          await enviarAlbumNativo(from, itens, yt);
                        }

                } else {
                        const media = await (
                          tipo === 'audio'
                            ? api.downloads.pinterestMp3(input)
                            : api.downloads.pinterestMp4(input)
                        );

                        if (!media) {
                          await reagir(from, "❌");
                          return reply(mess.error());
                        }

                        const payload = tipo === 'audio'
                          ? { audio: media, mimetype: 'audio/mpeg', fileName: 'pinterest.mp3' }
                          : { video: media, mimetype: 'video/mp4', fileName: 'pinterest.mp4' };

                        await yuta.sendMessage(from, payload, { quoted: yt });
                }

                await reagir(from, "✅");
        } catch (e) {
                console.log('[PINTEREST]', e.message);
                await reagir(from, "❌");
                reply(mess.ErroAPI(prefix, SITE));
        }
        break;
}
case 'tiktokaudio':
case 'ttaudio':
case 'tiktok':
case 'tt': {
	const input = q?.trim();
	if (!input) return reply(mess.yutaUso(command, prefix));
	try {
		await reagir(from, "⏳");
		const isAudio = ['tiktokaudio', 'ttaudio'].includes(command);
		if (!isAudio) {
			let fotos = null;
			try { fotos = await api.downloads.tiktok_foto(input); } catch {}
			if (fotos?.status && fotos?.total > 0) {
				const total = fotos.total, itens = [];
				for (let i = 1; i <= Math.min(total, 100); i++) if (fotos.resultado?.[`image${i}`]) itens.push({ type: 'image', media: { url: fotos.resultado[`image${i}`] }, caption: mess.niText1315({ e0: () => i, e1: () => total }) });
				if (itens.length) { await enviarAlbumNativo(from, itens, y); await reagir(from, "✅"); break; }
			}
		}
		const media = await (isAudio ? api.downloads.tiktokMp3(input) : api.downloads.tiktokMp4(input));
		if (!Buffer.isBuffer(media)) { await reagir(from, "❌"); return reply(mess.error()); }
		await yuta.sendMessage(from, isAudio ? { audio: media, mimetype: 'audio/mpeg', fileName: 'tiktok.mp3' } : { video: media, mimetype: 'video/mp4', fileName: 'tiktok.mp4' }, { quoted: yt });
		await reagir(from, "✅");
	} catch (e) { console.log(e); await reagir(from, "❌"); reply(mess.ErroAPI(prefix, SITE)); }
	break;
}

case 'instagram':
case 'insta':
case 'insta_video':
case 'instamp3':
case 'insta_audio': {
	if (!q?.trim()) return reply(mess.niReply0666({ e0: () => (prefix + command) }));
	try {
		await reagir(from, "⏳");
		const data = await api.downloads.instavideo(q.trim());
		const mediaUrl = data?.result?.[0]?.video;
		if (!data?.status || !mediaUrl) { await reagir(from, "❌"); return reply(mess.niReply0667()); }
		const isAudio = ['instamp3', 'insta_audio'].includes(command);
		await yuta.sendMessage(from, { [isAudio ? 'audio' : 'video']: { url: mediaUrl }, ...(isAudio ? { mimetype: 'audio/mpeg', fileName: 'instagram-audio.mp3' } : { mimetype: 'video/mp4', fileName: data.result[0].filename || 'instagram.mp4' }) }, { quoted: yt });
		await reagir(from, "✅");
	} catch (err) { console.log(err); await reagir(from, "❌"); reply(mess.ErroAPI(prefix, SITE)); }
	break;
}

case 'spotify':
case 'spotifyplay': {
	const input = q?.trim();
	if (!input) return reply(mess.yutaUso(command, prefix));
	try {
		await reagir(from, "⏳");
		const isLink = /spotify\.(com|link)/i.test(input);
		const audio = isLink ? await api.downloads.spotifyMp3(input) : { url: (await api.downloads.spotifyPlay(input))?.result?.download_url };
		if (!audio || (!Buffer.isBuffer(audio) && !audio.url)) { await reagir(from, "❌"); return reply(mess.ErroAPI(prefix, SITE)); }
		await yuta.sendMessage(from, { audio, mimetype: 'audio/mpeg' }, { quoted: yt });
		await reagir(from, "✅");
	} catch (err) { console.log('[SPOTIFY]', err); await reagir(from, "❌"); reply(mess.ErroAPI(prefix, SITE)); }
	break;
}

case 'fakemsg':
case 'fakechat':
if ([prefix, "&", "/", "#", "+"].includes(q.trim())) {
return reply(mess.niReply0669());
}
const [repplace, tarrget, bott] = q.split("|");
const m_ = info.message.extendedTextMessage && info.message.extendedTextMessage.contextInfo && info.message.extendedTextMessage.contextInfo.mentionedJid ? info.message.extendedTextMessage.contextInfo.mentionedJid[0] : null;
if (!m_ || !tarrget || !bott) {
return reply(mess.niReply0670({ e0: () => (prefix), prefix }));
}
yuta.sendMessage(from, {
text: bott
}, {
quoted: {
key: {
fromMe: false,
participant: m_
},
message: {
conversation: tarrget
}
}
});
break;

case 'modoplaylist':
case 'playlistglobal':
{
if (!SoDono) return reply(mess.onlyOwner());
const playlistAtiva = __playlistDefinirAtiva(!__playlistAtiva());
return reply(playlistAtiva
? '- ✅ `𝗦𝗜𝗦𝗧𝗘𝗠𝗔 𝗗𝗘 𝗣𝗟𝗔𝗬𝗟𝗜𝗦𝗧`\n> *ᴏ sɪsᴛᴇᴍᴀ ɢʟᴏʙᴀʟ ᴅᴇ ᴘʟᴀʏʟɪsᴛ ғᴏɪ ᴀᴛɪᴠᴀᴅᴏ.*'
: '- ❌ `𝗦𝗜𝗦𝗧𝗘𝗠𝗔 𝗗𝗘 𝗣𝗟𝗔𝗬𝗟𝗜𝗦𝗧`\n> *ᴏ sɪsᴛᴇᴍᴀ ɢʟᴏʙᴀʟ ᴅᴇ ᴘʟᴀʏʟɪsᴛ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ.*');
}
break;

case 'listaplaylists':
case 'listplaylistusers':
case 'usuariosplaylist':
{
if (!SoDono) return reply(mess.onlyOwner());
const db = __playlistLoad();
const users = Object.entries(db)
.filter(([, tracks]) => Array.isArray(tracks) && tracks.length > 0)
.sort(([userA], [userB]) => String(userA).localeCompare(String(userB), 'pt-BR', { numeric: true }));
if (!users.length) return reply(mess.playlistAdminSemUsuarios());
const mentions = [];
let totalMusicas = 0;
let duracaoGeral = 0;
const rows = users.map(([userKey, tracks], index) => {
const numero = String(userKey).split('@')[0];
const jid = userKey.includes('@') ? userKey : `${numero}@s.whatsapp.net`;
mentions.push(jid);
const total = tracks.reduce((sum, track) => sum + Number(track?.seconds || __playlistDurationToSeconds(track?.duration)), 0);
totalMusicas += tracks.length;
duracaoGeral += total;
return `> *${index + 1} • @${numero}*\n> *🎵 • ᴍᴜsɪᴄᴀs: ${tracks.length}*\n> *⏱️ • ᴅᴜʀᴀᴄᴀᴏ ᴛᴏᴛᴀʟ: ${__playlistSecondsToDuration(total)}*`;
}).join('\n\n');
return yuta.sendMessage(from, {
text: mess.playlistAdminLista({ totalUsuarios: users.length, totalMusicas, duracaoGeral: __playlistSecondsToDuration(duracaoGeral), rows, prefix }),
mentions
}, { quoted: yt });
}
break;

case 'deluserplaylist':
case 'deleteuserplaylist':
case 'removeruserplaylist':
case 'apagarplaylistuser':
{
if (!SoDono) return reply(mess.onlyOwner());
const position = Number.parseInt(String(q || '').trim(), 10);
if (!Number.isInteger(position) || position < 1) return reply(mess.playlistAdminRemoverUso(prefix));
const db = __playlistLoad();
const users = Object.entries(db)
.filter(([, tracks]) => Array.isArray(tracks) && tracks.length > 0)
.sort(([userA], [userB]) => String(userA).localeCompare(String(userB), 'pt-BR', { numeric: true }));
if (!users.length) return reply(mess.playlistAdminNaoEncontrada());
if (position > users.length) return reply(mess.playlistAdminPosicaoInvalida(users.length));
const [key, tracks] = users[position - 1];
const numero = String(key).split('@')[0];
const removedCount = tracks.length;
const removedDuration = tracks.reduce((sum, track) => sum + Number(track?.seconds || __playlistDurationToSeconds(track?.duration)), 0);
delete db[key];
__playlistSave(db);
const targetJid = key.includes('@') ? key : `${numero}@s.whatsapp.net`;
return yuta.sendMessage(from, {
text: mess.playlistAdminUsuarioRemovido({ position, numero, removedCount, removedDuration: __playlistSecondsToDuration(removedDuration) }),
mentions: [targetJid]
}, { quoted: yt });
}
break;

case 'addplaylist':
case 'salvarplaylist':
{
if (!__playlistAtiva()) return reply('- ⚠️ `𝗣𝗟𝗔𝗬𝗟𝗜𝗦𝗧 𝗗𝗘𝗦𝗔𝗧𝗜𝗩𝗔𝗗𝗔`\n> *ᴏ sɪsᴛᴇᴍᴀ ɢʟᴏʙᴀʟ ᴅᴇ ᴘʟᴀʏʟɪsᴛ ɴᴀᴏ ᴇsᴛᴀ ᴀᴛɪᴠᴏ.*');
if (!isVip) return reply(mess.onlyVipUser());
const quotedMessage = info?.message?.extendedTextMessage?.contextInfo?.quotedMessage || info?.message?.imageMessage?.contextInfo?.quotedMessage || info?.message?.videoMessage?.contextInfo?.quotedMessage;
if (!quotedMessage) return reply(`- ⚠️ \`𝗔𝗗𝗜𝗖𝗜𝗢𝗡𝗔𝗥 𝗠𝗨𝗦𝗜𝗖𝗔\`\n> *ʀᴇsᴘᴏɴᴅᴀ ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴅᴏ ${prefix}play ǫᴜᴇ ᴄᴏɴᴛᴇᴍ ᴏ ᴛɪᴛᴜʟᴏ ᴇ ᴀ ᴅᴜʀᴀᴄᴀᴏ.*`);
const track = __playlistExtractTrack(__playlistTextFromMessage(quotedMessage));
if (!track) return reply('- ❌ `𝗠𝗨𝗦𝗜𝗖𝗔 𝗡𝗔𝗢 𝗜𝗗𝗘𝗡𝗧𝗜𝗙𝗜𝗖𝗔𝗗𝗔`\n> *ɴᴀᴏ ᴄᴏɴsᴇɢᴜɪ ᴇɴᴄᴏɴᴛʀᴀʀ ᴏ ᴛɪᴛᴜʟᴏ ᴇ ᴀ ᴅᴜʀᴀᴄᴀᴏ ɴᴀ ᴍᴇɴsᴀɢᴇᴍ ʀᴇsᴘᴏɴᴅɪᴅᴀ.*');
const db = __playlistLoad();
const key = __playlistUserKey(sender);
if (!Array.isArray(db[key])) db[key] = [];
if (db[key].some(v => String(v.title).toLowerCase() === track.title.toLowerCase())) return reply('- ⚠️ `𝗠𝗨𝗦𝗜𝗖𝗔 𝗝𝗔 𝗦𝗔𝗟𝗩𝗔`\n> *ᴇssᴀ ᴍᴜsɪᴄᴀ ᴊᴀ ᴇsᴛᴀ ɴᴀ sᴜᴀ ᴘʟᴀʏʟɪsᴛ.*');
db[key].push(track);
__playlistSave(db);
return reply(`- ✅ \`𝗠𝗨𝗦𝗜𝗖𝗔 𝗔𝗗𝗜𝗖𝗜𝗢𝗡𝗔𝗗𝗔\`\n> *🎵 • ᴛɪᴛᴜʟᴏ: ${track.title}*\n> *⏱️ • ᴅᴜʀᴀᴄᴀᴏ: ${track.duration}*\n> *📃 • ᴘᴏsɪᴄᴀᴏ: ${db[key].length}*`);
}
break;

case 'playlist':
case 'verplaylist':
{
if (!__playlistAtiva()) return reply('- ⚠️ `𝗣𝗟𝗔𝗬𝗟𝗜𝗦𝗧 𝗗𝗘𝗦𝗔𝗧𝗜𝗩𝗔𝗗𝗔`\n> *ᴏ sɪsᴛᴇᴍᴀ ɢʟᴏʙᴀʟ ᴅᴇ ᴘʟᴀʏʟɪsᴛ ɴᴀᴏ ᴇsᴛᴀ ᴀᴛɪᴠᴏ.*');
if (!isVip) return reply(mess.onlyVipUser());
const db = __playlistLoad();
const list = db[__playlistUserKey(sender)] || [];
if (!list.length) return reply(`- 📭 \`𝗣𝗟𝗔𝗬𝗟𝗜𝗦𝗧 𝗩𝗔𝗭𝗜𝗔\`\n> *ʀᴇsᴘᴏɴᴅᴀ ᴀ ᴜᴍᴀ ᴍᴇɴsᴀɢᴇᴍ ᴅᴏ ${prefix}play ᴜsᴀɴᴅᴏ ${prefix}addplaylist.*`);
const total = list.reduce((a,v) => a + Number(v.seconds || __playlistDurationToSeconds(v.duration)), 0);
const rows = list.map((v,i) => `> *${i+1}.* ${v.title}\n> *⏱️ ${v.duration}*`).join('\n\n');
return yuta.sendMessage(from, { text: `- 🎧 \`𝗠𝗜𝗡𝗛𝗔 𝗣𝗟𝗔𝗬𝗟𝗜𝗦𝗧\`\n> *👤 • @${sender.split('@')[0]}*\n> *🎵 • ᴍᴜsɪᴄᴀs: ${list.length}*\n> *⏱️ • ᴛᴇᴍᴘᴏ ᴛᴏᴛᴀʟ: ${__playlistSecondsToDuration(total)}*\n\n${rows}`, mentions: [sender] }, { quoted: yt });
}
break;

case 'checkplaylist':
case 'playlistuser':
{
if (!__playlistAtiva()) return reply('- ⚠️ `𝗣𝗟𝗔𝗬𝗟𝗜𝗦𝗧 𝗗𝗘𝗦𝗔𝗧𝗜𝗩𝗔𝗗𝗔`\n> *ᴏ sɪsᴛᴇᴍᴀ ɢʟᴏʙᴀʟ ᴅᴇ ᴘʟᴀʏʟɪsᴛ ɴᴀᴏ ᴇsᴛᴀ ᴀᴛɪᴠᴏ.*');
if (!isVip) return reply(mess.onlyVipUser());
const target = menc_os2 || menc_prt || menc_sticker;
if (!target) return reply(`- ⚠️ \`𝗩𝗘𝗥 𝗣𝗟𝗔𝗬𝗟𝗜𝗦𝗧\`\n> *ᴜsᴇ: ${prefix}checkplaylist @usuario*`);
const db = __playlistLoad();
const list = db[__playlistUserKey(target)] || [];
if (!list.length) return reply('- 📭 `𝗣𝗟𝗔𝗬𝗟𝗜𝗦𝗧 𝗩𝗔𝗭𝗜𝗔`\n> *ᴇssᴇ ᴜsᴜᴀʀɪᴏ ɴᴀᴏ ᴘᴏssᴜɪ ᴍᴜsɪᴄᴀs sᴀʟᴠᴀs.*');
const rows = list.map((v,i) => `> *${i+1}.* ${v.title}\n> *⏱️ ${v.duration}*`).join('\n\n');
return yuta.sendMessage(from, { text: `- 🎧 \`𝗣𝗟𝗔𝗬𝗟𝗜𝗦𝗧 𝗗𝗘 𝗨𝗦𝗨𝗔𝗥𝗜𝗢\`\n> *👤 • @${target.split('@')[0]}*\n> *🎵 • ᴍᴜsɪᴄᴀs: ${list.length}*\n\n${rows}\n\n> *ᴘᴀʀᴀ ᴄᴏᴘɪᴀʀ, ʀᴇsᴘᴏɴᴅᴀ ᴇ ᴜsᴇ ${prefix}kibar 1*`, mentions: [target] }, { quoted: yt });
}
break;

case 'kibar':
case 'kibarplaylist':
{
if (!__playlistAtiva()) return reply('- ⚠️ `𝗣𝗟𝗔𝗬𝗟𝗜𝗦𝗧 𝗗𝗘𝗦𝗔𝗧𝗜𝗩𝗔𝗗𝗔`\n> *ᴏ sɪsᴛᴇᴍᴀ ɢʟᴏʙᴀʟ ᴅᴇ ᴘʟᴀʏʟɪsᴛ ɴᴀᴏ ᴇsᴛᴀ ᴀᴛɪᴠᴏ.*');
if (!isVip) return reply(mess.onlyVipUser());
const pos = Number(args.find(a => /^\d+$/.test(a)));
const quotedMessage = info?.message?.extendedTextMessage?.contextInfo?.quotedMessage;
const quotedText = __playlistTextFromMessage(quotedMessage);
const quotedNumber = quotedText.match(/@([0-9]{10,15})/)?.[1];
const target = menc_os2 || menc_prt || (quotedNumber ? `${quotedNumber}@s.whatsapp.net` : null);
if (!target || !pos) return reply(`- ⚠️ \`𝗖𝗢𝗣𝗜𝗔𝗥 𝗠𝗨𝗦𝗜𝗖𝗔\`\n> *ʀᴇsᴘᴏɴᴅᴀ ᴀ ᴜᴍᴀ ᴘʟᴀʏʟɪsᴛ ᴇ ᴜsᴇ: ${prefix}kibar 1*`);
const db = __playlistLoad();
const source = db[__playlistUserKey(target)] || [];
const track = source[pos - 1];
if (!track) return reply('- ❌ `𝗣𝗢𝗦𝗜𝗖𝗔𝗢 𝗜𝗡𝗩𝗔𝗟𝗜𝗗𝗔`\n> *ᴇssᴀ ᴍᴜsɪᴄᴀ ɴᴀᴏ ᴇxɪsᴛᴇ ɴᴀ ᴘʟᴀʏʟɪsᴛ.*');
const ownKey = __playlistUserKey(sender);
if (!Array.isArray(db[ownKey])) db[ownKey] = [];
if (db[ownKey].some(v => String(v.title).toLowerCase() === String(track.title).toLowerCase())) return reply('- ⚠️ `𝗠𝗨𝗦𝗜𝗖𝗔 𝗝𝗔 𝗦𝗔𝗟𝗩𝗔`\n> *ᴇssᴀ ᴍᴜsɪᴄᴀ ᴊᴀ ᴇsᴛᴀ ɴᴀ sᴜᴀ ᴘʟᴀʏʟɪsᴛ.*');
db[ownKey].push({ title: track.title, duration: track.duration, seconds: track.seconds || __playlistDurationToSeconds(track.duration) });
__playlistSave(db);
return reply(`- ✅ \`𝗠𝗨𝗦𝗜𝗖𝗔 𝗖𝗢𝗣𝗜𝗔𝗗𝗔\`\n> *🎵 • ${track.title}*\n> *⏱️ • ${track.duration}*`);
}
break;

case 'rmplaylist':
case 'remplaylist':
case 'delplaylist':
case 'removerplaylist':
{
if (!__playlistAtiva()) return reply('- ⚠️ `𝗣𝗟𝗔𝗬𝗟𝗜𝗦𝗧 𝗗𝗘𝗦𝗔𝗧𝗜𝗩𝗔𝗗𝗔`\n> *ᴏ sɪsᴛᴇᴍᴀ ɢʟᴏʙᴀʟ ᴅᴇ ᴘʟᴀʏʟɪsᴛ ɴᴀᴏ ᴇsᴛᴀ ᴀᴛɪᴠᴏ.*');
if (!isVip) return reply(mess.onlyVipUser());
const pos = Number.parseInt(String(q || '').trim(), 10);
if (!Number.isInteger(pos) || pos < 1) return reply(mess.playlistRemoverUso(prefix));
const db = __playlistLoad();
const key = __playlistUserKey(sender);
const list = Array.isArray(db[key]) ? db[key] : [];
if (!list.length) return reply(mess.playlistRemoverVazia(prefix));
if (pos > list.length) return reply(mess.playlistRemoverPosicaoInvalida(list.length));
const [removed] = list.splice(pos - 1, 1);
if (list.length) db[key] = list;
else delete db[key];
__playlistSave(db);
return reply(mess.playlistMusicaRemovida({
position: pos,
title: removed.title,
duration: removed.duration,
remaining: list.length
}));
}
break;

case 'limparplaylist':
{
if (!__playlistAtiva()) return reply('- ⚠️ `𝗣𝗟𝗔𝗬𝗟𝗜𝗦𝗧 𝗗𝗘𝗦𝗔𝗧𝗜𝗩𝗔𝗗𝗔`\n> *ᴏ sɪsᴛᴇᴍᴀ ɢʟᴏʙᴀʟ ᴅᴇ ᴘʟᴀʏʟɪsᴛ ɴᴀᴏ ᴇsᴛᴀ ᴀᴛɪᴠᴏ.*');
if (!isVip) return reply(mess.onlyVipUser());
const db = __playlistLoad();
db[__playlistUserKey(sender)] = [];
__playlistSave(db);
return reply('- ✅ `𝗣𝗟𝗔𝗬𝗟𝗜𝗦𝗧 𝗟𝗜𝗠𝗣𝗔`\n> *ᴛᴏᴅᴀs ᴀs ᴍᴜsɪᴄᴀs ғᴏʀᴀᴍ ʀᴇᴍᴏᴠɪᴅᴀs.*');
}
break;

case 'tocarplaylist':
case 'playplaylist':
{
if (!__playlistAtiva()) return reply('- ⚠️ `𝗣𝗟𝗔𝗬𝗟𝗜𝗦𝗧 𝗗𝗘𝗦𝗔𝗧𝗜𝗩𝗔𝗗𝗔`\n> *ᴏ sɪsᴛᴇᴍᴀ ɢʟᴏʙᴀʟ ᴅᴇ ᴘʟᴀʏʟɪsᴛ ɴᴀᴏ ᴇsᴛᴀ ᴀᴛɪᴠᴏ.*');
if (!isVip) return reply(mess.onlyVipUser());
const db = __playlistLoad();
const tracks = db[__playlistUserKey(sender)] || [];
if (!tracks.length) return reply('- 📭 `𝗣𝗟𝗔𝗬𝗟𝗜𝗦𝗧 𝗩𝗔𝗭𝗜𝗔`\n> *ᴀᴅɪᴄɪᴏɴᴇ ᴍᴜsɪᴄᴀs ᴀɴᴛᴇs ᴅᴇ ᴛᴏᴄᴀʀ.*');
const posicao = args[0] && /^\d+$/.test(args[0]) ? Number(args[0]) : null;
let fila = tracks.map(v => ({ ...v }));
if (posicao !== null) {
const faixa = tracks[posicao - 1];
if (!faixa) return reply(`- ❌ \`𝗣𝗢𝗦𝗜𝗖𝗔𝗢 𝗜𝗡𝗩𝗔𝗟𝗜𝗗𝗔\`\n> *ᴜsᴇ ᴜᴍ ɴᴜᴍᴇʀᴏ ᴇɴᴛʀᴇ 1 ᴇ ${tracks.length}.*`);
fila = [{ ...faixa }];
}
const queueKey = __playlistQueueKey(from);
await reply(posicao !== null
? `- ▶️ \`𝗠𝗨𝗦𝗜𝗖𝗔 𝗜𝗡𝗜𝗖𝗜𝗔𝗗𝗔\`\n> *🎵 • ${fila[0].title}*\n> *⏱️ • ${fila[0].duration}*`
: '- ▶️ `𝗣𝗟𝗔𝗬𝗟𝗜𝗦𝗧 𝗜𝗡𝗜𝗖𝗜𝗔𝗗𝗔`\n> *ᴀ ᴘʀɪᴍᴇɪʀᴀ ᴍᴜsɪᴄᴀ sᴇʀᴀ ᴛᴏᴄᴀᴅᴀ ᴀɢᴏʀᴀ.*');
__playlistRun({ key: queueKey, owner: sender, chat: from, tracks: fila, yuta, quoted: yt, prefix, buttonsEnabled: usarBotoes() }).catch(console.error);
}
break;

case 'pararplaylist':
case 'pauseplaylist':
case 'pausarplaylist':
{
const stopped = __playlistStop(__playlistQueueKey(from));
return reply(stopped ? mess.playlistParada(prefix) : mess.playlistNenhumaTocando());
}
break;

case 'proximoplaylist':
case 'nextplaylist':
case 'proximamusica':
{
if (!isVip) return reply(mess.onlyVipUser());
const moved = await __playlistMove(__playlistQueueKey(from), 1);
if (!moved.ok) return reply(moved.reason === 'last' ? mess.playlistUltimaFaixa() : mess.playlistNenhumaTocando());
}
break;

case 'retornarplaylist':
case 'voltarplaylist':
case 'previousplaylist':
case 'musicaanterior':
{
if (!isVip) return reply(mess.onlyVipUser());
const moved = await __playlistMove(__playlistQueueKey(from), -1);
if (!moved.ok) return reply(moved.reason === 'first' ? mess.playlistPrimeiraFaixa() : mess.playlistNenhumaTocando());
}
break;

case 'menuvip':
case 'listacmdvip':
case 'cmdviplist':
{
if (!isVip) return reply(mess.onlyVipUser());
await sendMenu(from, yt, {
reaction: "💎",
caption: linguagem.menuvip(prefix, isCmdVip),
sendAudio: true,
mentionedJid: [sender]
});
}
break;

case 'play':
case 'p':
case 'play2':
case 'play_audio':
case 'playvideo':
case 'play_video':
case 'playvid':
case 'playmp4':
case 'playdoc':
case 'play_doc': {
	const input = q?.trim();
	if (!input) return reply(mess.yutaUso(command, prefix));
	try {
		const tipo = ['playvideo', 'play_video', 'playvid', 'playmp4'].includes(command) ? 'video' : ['playdoc', 'play_doc'].includes(command) ? 'document' : 'audio';
		await reagir(from, "⏳");
		const { status, resultado } = await api.pesquisas.ytsearch(input);
		const video = __normalizarVideoYuta(resultado, tipo === 'video' ? 'Vídeo' : 'Música');
		if (!status || !video?.url) { await reagir(from, "❌"); return reply(mess.niReply0672({ prefix })); }

		const { title = 'Mídia', description = '', url, thumbnail = '', duration = {}, views = 0, author = {} } = video;
		if (!['play_audio', 'play_video', 'play2'].includes(command) && thumbnail) {
			const card = await api.canvas.cardMusic({ fundo: thumbnail, avatar: thumbnail, titulo: title, author: author?.name || 'Desconhecido', atual: '1:00', total: duration?.timestamp || '0:00' });
			await yuta.sendMessage(from, { image: card, caption: mess.music(sender, duration, views, author, url, description, tempo, title).trim(), mentions: [sender] }, { quoted: yt });
		}

		const media = await (tipo === 'video' ? api.downloads.ytmp4(url) : api.downloads.ytmp3(url));
		if (!Buffer.isBuffer(media)) { await reagir(from, "❌"); return reply(mess.error()); }
		const nome = `${title}`.replace(/[\\/:*?"<>|]/g, '').slice(0, 80) || 'yuta';
		const payload = tipo === 'video'
			? { video: media, mimetype: 'video/mp4', fileName: `${nome}.mp4` }
			: tipo === 'document'
				? { document: media, mimetype: 'audio/mpeg', fileName: `${nome}.mp3` }
				: { audio: media, mimetype: 'audio/mpeg', fileName: `${nome}.mp3` };

		await yuta.sendMessage(from, payload, { quoted: yt });
		await reagir(from, "✅");
	} catch (e) { console.error('[PLAY]', e); await reagir(from, "❌"); reply(mess.ErroAPI(prefix, SITE)); }
	break;
}

case 'ytmp3':
case 'ytaudio':
case 'ytmp4': {
	const link = q?.trim();
	if (!/^https?:\/\/(?:www\.)?(?:youtube\.com|youtu\.be)\//i.test(link || '')) return reply(mess.yutaUso(command, prefix));
	try {
		await reagir(from, "⏳");
		const isVideo = command === 'ytmp4';
		const media = await (isVideo ? api.downloads.ytmp4(link) : api.downloads.ytmp3(link));
		if (!Buffer.isBuffer(media)) { await reagir(from, "❌"); return reply(mess.error()); }
		await yuta.sendMessage(from, isVideo ? { video: media, mimetype: 'video/mp4', fileName: 'youtube.mp4' } : { audio: media, mimetype: 'audio/mpeg', fileName: 'youtube.mp3' }, { quoted: yt });
		await reagir(from, "✅");
	} catch (e) { console.log(e); await reagir(from, "❌"); reply(mess.ErroAPI(prefix, SITE)); }
	break;
}

case 'ytsearch':
case 'pesquisa_yt':
case 'yt-info': {
	const pesquisa = q?.trim();
	if (!pesquisa) return reply(mess.niReply0679({ prefix }));
	try {
		await reagir(from, "⏳");
		const { status, resultado } = await api.pesquisas.ytsearch(pesquisa);
		if (!status || !resultado?.length) { await reagir(from, "❌"); return reply(mess.niReply0680()); }
		const video = __normalizarVideoYuta(resultado, 'Vídeo');
		if (!video?.url) { await reagir(from, "❌"); return reply(mess.niReply0680()); }
		const card = await api.canvas.cardMusic({ fundo: video.thumbnail, avatar: video.thumbnail, titulo: video.title, author: video.author.name || 'Desconhecido', atual: '0:00', total: video.duration.timestamp || '0:00' });
		await yuta.sendMessage(from, { image: card, caption: mess.yutaYtSearchResultado(video) }, { quoted: yt });
		await reagir(from, "✅");
	} catch (e) { console.error('[YTSEARCH]', e); await reagir(from, "❌"); reply(mess.ErroAPI(prefix, SITE)); }
}
break;

case 'print':
case 'printsite':
{
try {
if (!q?.trim())
return reply(mess.niReply0681({ e0: () => (prefix + command) }));
const apiUrl = yutaUrl('/api/outros/printsite', { url: q });
await yuta.sendMessage(from, { image: { url: apiUrl }, caption: mess.niText1420({ e0: () => (q) }) }, { quoted: yt });
}
catch (err) {
console.log(err);
reply(mess.ErroAPI(prefix, SITE));
}
}
break;

case 'wiki':
case 'wikipedia':
case 'pesquisa':
{
try {
if (!q?.trim()) {
return reply(mess.niReply0682({ e0: () => (prefix + command) }));
}
const data = await api.pesquisas.wiki(q);
if (!data?.status || !data?.resultado) {
return reply(mess.error());
}
const r = data.resultado;
const texto = mess.wikipediaInfo(r).trim();
return reply(texto);
}
catch (e) {
console.log(mess.niConsole026(), e?.response?.data || e.message);
return reply(mess.ErroAPI(prefix, SITE));
}
}
break;

case 'clima':
case 'tempo':
{
try {
if (!q?.trim()) {
return reply(mess.niReply0683({ e0: () => (prefix + command) }));
}
const cidade = q.trim();
const data = await api.outros.clima(cidade);
if (!data?.status || !data?.result) {
return reply(mess.niReply0684());
}
const r = data.result;
return await yuta.sendMessage(from, { image: { url: r.imagem }, caption: mess.climaAtual(r).trim() }, { quoted: yt });
}
catch (e) {
console.log(mess.niConsole027(), e?.response?.data || e.message);
return reply(mess.ErroAPI(prefix, SITE));
}
}
break;

case 'signo':
{
try {
if (!q?.trim()) {
return reply(mess.niReply0685({ e0: () => (prefix + command) }));
}
const normalize = (text) => text.toLowerCase()
.normalize("NFD")
.replace(/[\u0300-\u036f]/g, "")
.trim();
const signo = normalize(q);
const data = await api.outros.signo(signo);
if (!data?.status) {
return reply(mess.error());
}
return await yuta.sendMessage(from, { text: mess.signoInfo(data) }, { quoted: yt });
}
catch (e) {
console.log(mess.niConsole028(), e?.message);
return reply(mess.ErroAPI(prefix, SITE));
}
}
break;

case 'shazam':
case 'reconhecermusica': {
	const media = getAnyMedia(info, ['audio', 'video']), link = q?.trim();
	if (!media && !/^https?:\/\//i.test(link || '')) return reply(mess.yutaUso(command, prefix));
	try {
		await reagir(from, "⏳");
		const type = media?.type || 'audio';
		const input = /^https?:\/\//i.test(link || '') ? link : await getFileBuffer(media.message, type);
		const data = await api.outros.shazam(input, { type }), r = data?.resultado;
		if (!data?.status || !r) { await reagir(from, "❌"); return reply(data?.msg || mess.error()); }
		const text = mess.yutaShazamResultado(r);
		if (r.thumb) await yuta.sendMessage(from, { image: { url: r.thumb }, caption: text }, { quoted: yt }); else await reply(text);
		await reagir(from, "✅");
	} catch (e) { console.log('[SHAZAM]', e); await reagir(from, "❌"); reply(mess.ErroAPI(prefix, SITE)); }
	break;
}

case 'ascii': {
	if (!q?.trim()) return reply(mess.yutaUso(command, prefix));
	try {
		await reagir(from, "⏳");
		const data = await api.outros.ascii(q.trim());
		const text = data?.resultado?.map(v => v?.result).filter(Boolean).join('\n\n');
		if (!text && !data?.msg) { await reagir(from, "❌"); return reply(mess.error()); }
		await reply(text || data.msg); await reagir(from, "✅");
	} catch (e) { console.log(e); await reagir(from, "❌"); reply(mess.ErroAPI(prefix, SITE)); }
	break;
}

case 'emojimix':
case 'emoji-mix': {
	const [emoji1, emoji2] = q?.trim().split(/\s+/) || [];
	if (!emoji1 || !emoji2) return reply(mess.yutaUso(command, prefix));
	try {
		await reagir(from, "⏳");
		const image = await api.outros.emoji_mix(emoji1, emoji2);
		if (!Buffer.isBuffer(image)) { await reagir(from, "❌"); return reply(mess.error()); }
		await yuta.sendMessage(from, { image }, { quoted: yt }); await reagir(from, "✅");
	} catch (e) { console.log(e); await reagir(from, "❌"); reply(mess.ErroAPI(prefix, SITE)); }
	break;
}

case 'traduzir':
case 'translate': {
	const [idioma, ...texto] = q?.trim().split(/\s+/) || [];
	if (!idioma || !texto.length) return reply(mess.yutaUso(command, prefix));
	try {
		await reagir(from, "⏳");
		const data = await api.outros.traduzir({ idioma, text: texto.join(' ') });
		const result = mess.yutaApiResultado(command, __yutaText(data) || data?.msg || '');
		if (!result) { await reagir(from, "❌"); return reply(mess.error()); }
		await reply(result); await reagir(from, "✅");
	} catch (e) { console.log(e); await reagir(from, "❌"); reply(mess.ErroAPI(prefix, SITE)); }
	break;
}

case 'fraseamor':
case 'frasesamor': {
	try {
		await reagir(from, "⏳");
		const data = await api.outros.frasesAmor(), list = data?.resultados || [];
		if (!list.length) { await reagir(from, "❌"); return reply(data?.msg || mess.error()); }
		await reply(mess.yutaApiResultado('FRASE DE AMOR', list[Math.floor(Math.random() * list.length)])); await reagir(from, "✅");
	} catch (e) { console.log(e); await reagir(from, "❌"); reply(mess.ErroAPI(prefix, SITE)); }
	break;
}

case 'textimg':
case 'text2img': {
	if (!q?.trim()) return reply(mess.yutaUso(command, prefix));
	try {
		await reagir(from, "⏳");
		const image = await api.outros.textImg(q.trim());
		if (!Buffer.isBuffer(image)) { await reagir(from, "❌"); return reply(mess.error()); }
		await yuta.sendMessage(from, { image }, { quoted: yt }); await reagir(from, "✅");
	} catch (e) { console.log(e); await reagir(from, "❌"); reply(mess.ErroAPI(prefix, SITE)); }
	break;
}

case 'meme': {
	try {
		await reagir(from, "⏳");
		const data = await api.outros.meme(), r = data?.result;
		if (!data?.status || !r?.image) { await reagir(from, "❌"); return reply(data?.msg || mess.error()); }
		await yuta.sendMessage(from, { image: { url: r.image }, caption: mess.yutaMemeResultado(r) }, { quoted: yt }); await reagir(from, "✅");
	} catch (e) { console.log(e); await reagir(from, "❌"); reply(mess.ErroAPI(prefix, SITE)); }
	break;
}

case 'buscarlocal':
case 'local': {
	if (!q?.trim()) return reply(mess.yutaUso(command, prefix));
	try {
		await reagir(from, "⏳");
		const data = await api.outros.buscarLocal(q.trim()), r = data?.result;
		if (!data?.status || !r) { await reagir(from, "❌"); return reply(mess.error()); }
		await yuta.sendMessage(from, { text: mess.yutaLocalResultado(r, q.trim()) }, { quoted: yt });
		if (Number.isFinite(Number(r.latitude)) && Number.isFinite(Number(r.longitude))) await yuta.sendMessage(from, { location: { degreesLatitude: Number(r.latitude), degreesLongitude: Number(r.longitude) } }, { quoted: yt });
		await reagir(from, "✅");
	} catch (e) { console.log(e); await reagir(from, "❌"); reply(mess.ErroAPI(prefix, SITE)); }
	break;
}

case 'tiktokstalk':
case 'tiktokstalker': {
	if (!q?.trim()) return reply(mess.yutaUso(command, prefix));
	try {
		await reagir(from, "⏳");
		const r = await api.stalker.tiktokStalker(q.replace(/^@/, '').trim());
		if (!r?.status) { await reagir(from, "❌"); return reply(r?.msg || mess.error()); }
		const text = mess.yutaTiktokStalkResultado(r, q), avatar = r.avatars?.medium || r.avatars?.thumbnail || r.avatars?.small;
		if (avatar) await yuta.sendMessage(from, { image: { url: avatar }, caption: text }, { quoted: yt }); else await reply(text);
		await reagir(from, "✅");
	} catch (e) { console.log(e); await reagir(from, "❌"); reply(mess.ErroAPI(prefix, SITE)); }
	break;
}

case 'tiktoksearch':
case 'ttsearch': {
	if (!q?.trim()) return reply(mess.yutaUso(command, prefix));
	try {
		await reagir(from, "⏳");
		const data = await api.pesquisas.tiktokSearch(q.trim()), result = mess.yutaApiResultado(command, data?.message || __yutaText(data) || data?.msg || '');
		if (!result) { await reagir(from, "❌"); return reply(mess.error()); }
		await reply(result); await reagir(from, "✅");
	} catch (e) { console.log(e); await reagir(from, "❌"); reply(mess.ErroAPI(prefix, SITE)); }
	break;
}

case 'gitstalk':
case 'githubstalk':
case 'filmes':
case 'filmesearch': {
	if (!q?.trim()) return reply(mess.yutaUso(command, prefix));
	try {
		await reagir(from, "⏳");
		const data = command.startsWith('git') || command.startsWith('github') ? await api.pesquisas.gitstalk(q.trim()) : await api.pesquisas.filmesSearch(q.trim());
		const result = mess.yutaApiResultado(command, __yutaText(data) || data?.msg || '');
		if (!result) { await reagir(from, "❌"); return reply(mess.error()); }
		await reply(result); await reagir(from, "✅");
	} catch (e) { console.log(e); await reagir(from, "❌"); reply(mess.ErroAPI(prefix, SITE)); }
	break;
}

case 'pensador': {
	if (!q?.trim()) return reply(mess.yutaUso(command, prefix));
	try {
		await reagir(from, "⏳");
		const data = await api.pesquisas.pensador(q.trim()), list = data?.resultados || [];
		if (!list.length) { await reagir(from, "❌"); return reply(data?.msg || mess.error()); }
		await reply(mess.yutaPensadorResultado(list)); await reagir(from, "✅");
	} catch (e) { console.log(e); await reagir(from, "❌"); reply(mess.ErroAPI(prefix, SITE)); }
	break;
}

case 'playstore': {
	if (!q?.trim()) return reply(mess.yutaUso(command, prefix));
	try {
		await reagir(from, "⏳");
		const data = await api.pesquisas.playstore(q.trim()), list = data?.resultado || [];
		const text = list.length ? mess.yutaPlaystoreResultado(list) : '';
		if (!text) { await reagir(from, "❌"); return reply(data?.msg || mess.error()); }
		await reply(text); await reagir(from, "✅");
	} catch (e) { console.log(e); await reagir(from, "❌"); reply(mess.ErroAPI(prefix, SITE)); }
	break;
}

case 'wallpaper': {
	if (!q?.trim()) return reply(mess.yutaUso(command, prefix));
	try {
		await reagir(from, "⏳");
		const data = await api.pesquisas.wallpaper(q.trim()), list = data?.resultado || [];
		if (!list.length) { await reagir(from, "❌"); return reply(data?.msg || mess.error()); }
		const r = list[Math.floor(Math.random() * list.length)];
		await yuta.sendMessage(from, { image: { url: r.image }, caption: mess.yutaWallpaperResultado(r, q.trim()) }, { quoted: yt }); await reagir(from, "✅");
	} catch (e) { console.log(e); await reagir(from, "❌"); reply(mess.ErroAPI(prefix, SITE)); }
	break;
}

case 'google': {
	if (!q?.trim()) return reply(mess.yutaUso(command, prefix));
	try {
		await reagir(from, "⏳");
		const data = await api.pesquisas.google(q.trim()), r = data?.result;
		if (!data?.status || !r) { await reagir(from, "❌"); return reply(data?.msg || mess.error()); }
		const result = mess.yutaGoogleResultado(r);
		if (!result) { await reagir(from, "❌"); return reply(mess.error()); }
		await reply(result); await reagir(from, "✅");
	} catch (e) { console.log(e); await reagir(from, "❌"); reply(mess.ErroAPI(prefix, SITE)); }
	break;
}

case 'perplexity':
case 'perplexity-ai': {
	if (!q?.trim()) return reply(mess.yutaUso(command, prefix));
	try {
		await reagir(from, "⏳");
		const data = await api.ias.perplexity_ai(q.trim()), result = mess.yutaApiResultado(command, __yutaText(data) || data?.msg || '');
		if (!result) { await reagir(from, "❌"); return reply(mess.error()); }
		await reply(result); await reagir(from, "✅");
	} catch (e) { console.log(e); await reagir(from, "❌"); reply(mess.ErroAPI(prefix, SITE)); }
	break;
}

case 'geminivoz':
case 'gemini-voz': {
	if (!q?.trim()) return reply(mess.yutaUso(command, prefix));
	try {
		await reagir(from, "⏳");
		const audio = await api.ias.geminivoz(q.trim());
		if (!Buffer.isBuffer(audio)) { await reagir(from, "❌"); return reply(mess.error()); }
		await yuta.sendMessage(from, { audio, mimetype: 'audio/mpeg', fileName: 'gemini-voz.mp3' }, { quoted: yt }); await reagir(from, "✅");
	} catch (e) { console.log(e); await reagir(from, "❌"); reply(mess.ErroAPI(prefix, SITE)); }
	break;
}

case 'quotesanime':
case 'fraseanime': {
	try {
		await reagir(from, "⏳");
		const data = await api.animes.quotesanimes(), result = mess.yutaApiResultado(command, __yutaText(data) || data?.msg || '');
		if (!result) { await reagir(from, "❌"); return reply(mess.error()); }
		await reply(result); await reagir(from, "✅");
	} catch (e) { console.log(e); await reagir(from, "❌"); reply(mess.ErroAPI(prefix, SITE)); }
	break;
}

case 'figuapi':
case 'figuanime':
case 'figucoreana':
case 'figudesenho':
case 'figuemoji':
case 'figuengracada':
case 'figuraiva':
case 'figuroblox': {
	try {
		await reagir(from, "⏳");
		const routes = { figuapi: 'figu', figuanime: 'figu_anime', figucoreana: 'figu_coreana', figudesenho: 'figu_desenho', figuemoji: 'figu_emoji', figuengracada: 'figu_engracadas', figuraiva: 'figu_raiva', figuroblox: 'figu_roblox' };
		const sticker = await api.stickers[routes[command]]();
		if (!Buffer.isBuffer(sticker)) { await reagir(from, "❌"); return reply(mess.error()); }
		await yuta.sendMessage(from, { sticker }, { quoted: yt }); await reagir(from, "✅");
	} catch (e) { console.log(e); await reagir(from, "❌"); reply(mess.ErroAPI(prefix, SITE)); }
	break;
}

case 'cnn':
case 'esportes':
case 'g1':
case 'ibge':
case 'noticias':
case 'noticiasatuais':
case 'politica':
case 'uol': {
	try {
		await reagir(from, "⏳");
		const routes = { cnn: 'cnn', esportes: 'esportes', g1: 'g1', ibge: 'ibge', noticias: 'noticias_atuais', noticiasatuais: 'noticias_atuais', politica: 'politica', uol: 'uol' };
		const data = await api.noticias[routes[command]](), result = mess.yutaApiResultado(command, __yutaText(data, 8) || data?.msg || '');
		if (!result) { await reagir(from, "❌"); return reply(mess.error()); }
		await reply(result); await reagir(from, "✅");
	} catch (e) { console.log(e); await reagir(from, "❌"); reply(mess.ErroAPI(prefix, SITE)); }
	break;
}

case 'facebook':
case 'fb':
case 'facebookvideo':
case 'fbvideo':
case 'facebookaudio':
case 'fbmp3': {
	const link = q?.trim();
	if (!/facebook\.com|fb\.watch/i.test(link || '')) return reply(mess.yutaUso(command, prefix));
	try {
		await reagir(from, "⏳");
		const isAudio = ['facebookaudio', 'fbmp3'].includes(command);
		const media = await (isAudio ? api.downloads.facebookMp3(link) : api.downloads.facebookMp4(link));
		if (!Buffer.isBuffer(media)) { await reagir(from, "❌"); return reply(mess.error()); }
		await yuta.sendMessage(from, isAudio ? { audio: media, mimetype: 'audio/mpeg', fileName: 'facebook.mp3' } : { video: media, mimetype: 'video/mp4', fileName: 'facebook.mp4' }, { quoted: yt }); await reagir(from, "✅");
	} catch (e) { console.log(e); await reagir(from, "❌"); reply(mess.ErroAPI(prefix, SITE)); }
	break;
}

case 'getchannel':
case 'infoch':
{
if (!q)
return reply(mess.niReply0686({ e0: () => (prefix + command) }));
await reagir(from, "🎉");
try {
let channelId;
if (q.includes('whatsapp.com/channel/')) {
channelId = q.split('whatsapp.com/channel/')[1].split('/')[0];
}
else if (q.includes('wa.me/channel/')) {
channelId = q.split('wa.me/channel/')[1].split('/')[0];
}
else {
channelId = text;
}

const idNewsletter = await yuta.newsletterMetadata('invite', channelId);
const response = await axios.get(q);
const $ = cheerio.load(response.data);
const title = $('title').text() || idNewsletter?.name || 'Nome não encontrado';
const img = $('img._9vx6').attr('src');
const subs = $('h5._9vd5._9scy').text() || idNewsletter?.subscribers || 'Seguidores não encontrados';
const description = idNewsletter?.description?.text || idNewsletter?.description || idNewsletter?.thread_metadata?.description?.text || idNewsletter?.thread_metadata?.description || $('h4._9vd5._9scb').text() || 'Descrição não encontrada';
await yuta.sendMessage(from, { image: { url: img },
caption: mess.niText1421({ e0: () => (title), e1: () => (subs), e2: () => (idNewsletter.id), e3: () => (q), e4: () => (description) }),
}, { quoted: yt });
}
catch (e) {
reply(mess.niReply0687());
console.log(e);
}
}
break;

case "alugar":
case "alugarbot": {
try {
if (!__aluguelModoAtivo()) return reply(mess.aluguelDesligado(prefix))
if (!isGroup) return reply(mess.onlyGroup())

await reagir(from, "💎")

const planos = __aluguelPlanos().filter(p => p.grupos === 1)
if (!planos.length) return reply(mess.semPlanoAluguel(prefix))

const cfg = __aluguelConfigLoad()
const escolha = String(q || '').trim()
const planoEscolhido = escolha ? __aluguelFindPlanoSmart(escolha, planos) : null

if (escolha && !planoEscolhido) {
return reply(mess.planoNaoEncontradoAluguel(__aluguelTextoPlanos(planos), __aluguelTextoComandosPlanos(planos)))
}

if (__pixModoAtivo()) {
if (planoEscolhido) return await __gerarPixAluguelAuto(planoEscolhido)
return await __sendAluguelButtons(__textoMenuAlugar(planos), planos)
}

return await __sendPixManualAluguel(planos, planoEscolhido)
} catch (e) {
console.log("ERRO ALUGAR:", e?.message || e)
reply(mess.error())
}
}
break

case "alugarplano": {
try {
if (!__aluguelModoAtivo()) return reply(mess.aluguelDesligado(prefix))
if (!isGroup) return reply(mess.onlyGroup())

const planos = __aluguelPlanos().filter(p => p.grupos === 1)
const planoId = String(args[0] || q || "").trim()
if (!planoId) return reply(mess.alugarPlanoUso(prefix))

await reagir(from, "💎")

const plano = __aluguelFindPlanoSmart(planoId, planos)
if (!plano) return reply(mess.planoInvalidoAluguel(__aluguelTextoPlanos(planos), __aluguelTextoComandosPlanos(planos)))

const cfg = __aluguelConfigLoad()
if (!__pixModoAtivo()) return await __sendPixManualAluguel(planos, plano)
return await __gerarPixAluguelAuto(plano)
} catch (error) {
const erroReal = error?.response?.data || error?.message || error
console.log("ERRO ALUGARPLANO:", erroReal)
await reply(mess.pixAutoErroAluguel(prefix, NomeDoBot))
}
}
break

case 'pix': {
try {
await reagir(from, "💵")

const cfgPix = __aluguelConfigLoad()
const valorTexto = String(q || '').trim()
const valorDiretoPix = Number(valorTexto.replace(',', '.').replace(/[^0-9.]/g, '')) || 0
const pixAutomaticoDisponivel = __pixModoAtivo() && !!String(cfgPix.mercadoPagoAccessToken || '').trim()

// PIX manual: ignora qualquer valor digitado e mostra somente os dados salvos.
if (!pixAutomaticoDisponivel) {
return await __sendPixManualDireto()
}

// PIX automático: exige um valor válido para gerar a cobrança no Mercado Pago.
if (!valorTexto || !valorDiretoPix || valorDiretoPix <= 0) {
return reply(mess.pixDiretoUso(prefix))
}

const descricao = 'Pagamento via PIX'
const idempotencyKey = uuidv4()
const pagamentoInfo = await criarPagamentoPix(valorDiretoPix, descricao, idempotencyKey)

if (!pagamentoInfo?.qr_code || !pagamentoInfo?.qr_code_base64) {
return reply(mess.pixAutoErroAluguel(prefix, NomeDoBot))
}

const qrBuffer = Buffer.from(pagamentoInfo.qr_code_base64, 'base64')
const bodyTxt = mess.pixDiretoGerado({
valor: __formatBRL(valorDiretoPix),
pagamentoId: pagamentoInfo.id
})

if (usarBotoes()) {
await sendInteractiveImageButtons(yuta, from, {
image: qrBuffer,
body: bodyTxt,
footer: mess.pixDiretoFooter(),
buttons: [{
name: 'cta_copy',
buttonParamsJson: JSON.stringify({
display_text: '𝙲𝙾𝙿𝙸𝙰𝚁 𝙲𝙾𝙳𝙸𝙶𝙾 𝙳𝙴 𝙿𝙰𝙶𝙰𝙼𝙴𝙽𝚃𝙾 💵',
copy_code: pagamentoInfo.qr_code
})
}],
contextInfo: NkChannelKk
}, { quoted: yt })
} else {
await yuta.sendMessage(from, {
image: qrBuffer,
caption: mess.niText1423({ e0: () => bodyTxt, e1: () => pagamentoInfo.qr_code }),
contextInfo: NkChannelKk
}, { quoted: yt })
}

const tempoMaximo = 30 * 60 * 1000
const inicio = Date.now()
while (Date.now() - inicio < tempoMaximo) {
await sleep(5000)
const check = await verificarPix(pagamentoInfo.id).catch(() => null)
if (check?.status === 'approved') {
await reply(mess.niReply0694({ e0: () => ownerName }))
let origemPix = ''
if (isGroup) {
try { origemPix = (await yuta.groupMetadata(from))?.subject || String(from) } catch { origemPix = String(from) }
}
await __pixNotificarDonoAprovado({
tipo: 'pix',
pagamentoId: pagamentoInfo.id,
valor: valorDiretoPix,
senderJid: sender,
senderNome: pushname,
grupoId: isGroup ? String(from) : '',
grupoNome: origemPix
})
return
}
}

await reagir(from, "😿")
} catch (error) {
console.log('[PIX]', error?.response?.data || error?.message || error)
reply(mess.error())
}
break
}
case 'gtts':
try {
if (args.length < 1)
return await yuta.sendMessage(from, { text: mess.niText1331({ e0: () => (prefix), prefix }) }, { quoted: yt });
const gtts = GttsModule(args[0]);
if (args.length < 2)
return await yuta.sendMessage(from, { text: mess.niText1332() }, { quoted: yt });
dtt = body.slice(8);
ranm = getRandom('.mp3');
rano = getRandom('.ogg');
if (dtt.length > 200)
return reply(mess.niReply0695());
gtts.save(ranm, dtt, async function () {
await exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, async (err) => {
await yuta.sendMessage(from, { audio: fs.readFileSync(ranm), mimetype: 'audio/mpeg', ptt: false, contextInfo: NkChannelKk }, { quoted: yt }).catch(async (error) => {
return reply(mess.error());
});
DLT_FL(ranm);
DLT_FL(rano);
});
});
}
catch (error) {
console.log(error);
return reply(mess.error());
}
break;

case 'tagme':
const tagme = `@${sender.split("@")[0]} ✔️`;
await mentions(tagme, [sender], true);
break;

case 'avalia': {
try {
if (!isGroup)
return reply(mess.onlyGroup());
const groupMetadata = await yuta.groupMetadata(from);
const members = groupMetadata.participants;
const randomMember = members[Math.floor(Math.random() * members.length)];
let profilePictureUrl;
try {
profilePictureUrl = await yuta.profilePictureUrl(randomMember.id, 'image');
}
catch {
profilePictureUrl = imgperfil;
}
const evaluations = ["Uma ótima escolha de foto de perfil!", "Essa foto mostra sua personalidade!", "Adorei a vibe dessa imagem!", "Você parece estar se divertindo nessa foto!", "Essa foto reflete bem quem você é!", "Que lindo essa foto, ameiii!!"];
const randomEvaluation = evaluations[Math.floor(Math.random() * evaluations.length)];
const messageContent = {
image: { url: profilePictureUrl },
caption: mess.avalia({ randomMember, info, groupName, isChVip, randomEvaluation }),
contextInfo: { ...NkChannelKk, mentionedJid: [randomMember.id] }
};
await yuta.sendMessage(from, messageContent, { quoted: yt });
}
catch (e) {
console.error(e);
return reply(mess.error());
}
break;
}
case 'avaliar':
case 'avalie':
if (q.length < 1)
return reply(mess.niReply0696({ e0: () => (prefix) }));
if (q.length > 400)
return reply(mess.niReply0697());
await sendMentions(nmrdn, `*🌟 ᴀᴠᴀʟɪᴀᴄᴀᴏ ᴅᴇ: @${sender.split("@")[0]}*\n- *ᴅᴇᴛᴀʟʜᴇs:*\n• ${q}`);
await sendMentions(from, `*ᴄᴇʀᴛᴏ @${sender.split("@")[0]} ᴇɴᴠɪᴇɪ ᴀ sᴜᴀ ᴀᴠᴀʟɪᴀᴄᴀᴏ ᴀᴏ ᴍᴇᴜ ᴅᴏɴᴏ 🙇‍♂️*`);
break;

case 'bug':
if (q.length < 1)
return reply(mess.niReply0698({ e0: () => (prefix) }));
if (q.length > 400)
return reply(mess.niReply0699());
await sendMentions(nmrdn, `*⚠ ᴏ ᴜsᴜᴀʀɪᴏ @${sender.split("@")[0]} ʀᴇʟᴀᴛᴏᴜ ᴀʟɢᴜᴍ ᴇʀʀᴏ ᴏᴜ ʙᴜɢ ɴᴏ ʙᴏᴛ*\n*ᴅᴇᴛᴀʟʜᴇs:*\n• ${q}`);
reply(mess.niReply0700());
break;

case 'sugestão':
case 'sugestao': {
if (q.length < 1)
return reply(mess.niReply0701({ e0: () => (prefix) }));
if (q.length > 400)
return reply(mess.niReply0702());
try {
const donoJid = __aluguelDonoJid() || nmrdn;
if (!donoJid) throw new Error('Número do dono não configurado');
const senderNumero = jidNum(sender);
const senderMention = senderNumero ? `${senderNumero}@s.whatsapp.net` : null;
const textoSugestao = `*⚠ ᴏ ᴜsᴜᴀʀɪᴏ @${senderNumero || String(sender).split('@')[0]} sᴜɢᴇʀɪᴜ ᴜᴍ ᴄᴏᴍᴀɴᴅᴏ ᴏᴜ sɪsᴛᴇᴍᴀ ɴᴏ ʙᴏᴛ*\n*ᴅᴇᴛᴀʟʜᴇs:*\n• ${q}`;
const mencoesSugestao = senderMention ? [senderMention] : [];
await yuta.sendMessage(donoJid, {
text: textoSugestao,
mentions: mencoesSugestao,
contextInfo: { ...NkChannelKk, mentionedJid: mencoesSugestao }
});
await reply(mess.niReply0703());
} catch (e) {
console.log('[SUGESTÃO PV DONO]', e?.message || e);
return reply(mess.error());
}
break;
}

case "mediafire":
case "mf":
{
try {
if (!q)
return reply(mess.niReply0704());
await reagir(from, "📥");
const json = await api.downloads.mediafire(q);
if (!json?.status || !json?.result || !json?.result.length) {
return reply(mess.error());
}
const data = json.result[0];
await yuta.sendMessage(from, { document: { url: data.url }, fileName: data.filename || "arquivo", mimetype: data.mimetype || "application/octet-stream", caption: mess.mediaDL(data)
}, { quoted: yt });
}
catch (e) {
console.log(e);
reply(mess.ErroAPI(prefix, SITE));
}
}
break;

case 'letra':
case 'lyrics':
{
try {
if (!q?.trim()) {
return reply(mess.niReply0705({ e0: () => (prefix + command) }));
}
const data = await api.pesquisas.lyrics_search(q);
if (!data?.status || !data?.result?.length) {
return reply(mess.error());
}
const song = data.result[0];
const titulo = song.titulo || "Desconhecido";
const artista = song.artista || "Desconhecido";
return await yuta.sendMessage(from, { image: { url: song.image }, caption: mess.letraEncontrada(titulo, artista, song).trim() }, { quoted: yt });
}
catch (e) {
console.log(mess.niConsole030(), e?.response?.data || e.message);
return reply(mess.ErroAPI(prefix, SITE));
}
}
break;

case 'gpt': {
if (!q)
return reply(mess.niReplyExtra019({ e0: () => ('• Por favor, insira um texto ao ' +
'lado do comando para que eu possa gerar ' +
'uma resposta!') }));
try {
const response = await api.ias.gpt(q.trim());

const resposta =
response?.resposta?.resposta ||
response?.resposta ||
response?.resultado?.data?.[0]?.resposta ||
response?.resultado?.resposta ||
response?.msg ||
null;

if (!response?.status || !resposta)
return reply(resposta || response?.resposta || mess.ErroAPI(prefix, SITE));

reply(resposta);
}
catch (error) {
console.error(error);
reply(mess.ErroAPI(prefix, SITE));
}
break;
}

case 'gemini': {
if (!q)
return reply(mess.niReplyExtra020({ e0: () => ('• Para conversar com o gemini, ' +
'primeiro você deve inserir um texto ao lado ' +
' do comando!') }));
try {
const GEMINI_RESPONSE = await api.ias.gemini(q.trim());

const resposta =
GEMINI_RESPONSE?.resposta?.resposta ||
GEMINI_RESPONSE?.resposta ||
GEMINI_RESPONSE?.resultado?.data?.[0]?.resposta ||
GEMINI_RESPONSE?.resultado?.resposta ||
GEMINI_RESPONSE?.msg ||
null;

if (!GEMINI_RESPONSE?.status || !resposta)
return reply(resposta || GEMINI_RESPONSE?.resposta || mess.ErroAPI(prefix, SITE));

reply(resposta);
}
catch (error) {
console.error(error);
reply(mess.ErroAPI(prefix, SITE));
}
break;
}

case 'gemini-pro': {
if (!q)
return reply(mess.niReplyExtra021({ e0: () => ('• Para conversar com o gemini-pro, ' +
'primeiro você deve inserir um texto ao lado ' +
' do comando!') }));
try {
const GEMPRO_RESPONSE = await api.ias.gemini_pro(q.trim());

const resposta =
GEMPRO_RESPONSE?.resposta?.resposta ||
GEMPRO_RESPONSE?.resposta ||
GEMPRO_RESPONSE?.resultado?.data?.[0]?.resposta ||
GEMPRO_RESPONSE?.resultado?.resposta ||
GEMPRO_RESPONSE?.msg ||
null;

if (!GEMPRO_RESPONSE?.status || !resposta)
return reply(resposta || GEMPRO_RESPONSE?.resposta || mess.ErroAPI(prefix, SITE));

reply(resposta);
}
catch (error) {
console.error(error);
reply(mess.ErroAPI(prefix, SITE));
}
break;
}
case 'glitch':
case 'write':
case 'advancedglow':
case 'typography':
case 'pixelglitch':
case 'neonglitch':
case 'flag':
case 'flag3d':
case 'deleting':
case 'glowing':
case 'underwater':
case 'logomaker':
case 'cartoon':
case 'papercut':
case 'watercolor':
case 'effectclouds':
case 'blackpinklogo':
case 'gradient':
case 'summerbeach':
case 'luxurygold':
case 'multicoloredneon':
case 'sandsummer':
case 'galaxywallpaper':
case '1917':
case 'makingneon':
case 'royal':
case 'freecreate':
case 'galaxy':
case 'darkgreen':
case 'lighteffects':
case 'dragonball':
case 'neondevil':
case 'frozen':
case 'wooden3d':
case 'metal3d':
case 'ligatures':
case '3druby':
case 'sunset':
case 'cemetery':
case 'halloween':
case 'horror':
case 'blood':
case 'joker':
case 'clouds':
{
try {
if (!q?.trim())
return reply(mess.niReply0706({ e0: () => (prefix + command) }));
reply(mess.teste());
const image = await api.logos(command, q.trim());
if (!image) {
return reply(mess.error());
}
await yuta.sendMessage(from, { image: image }, { quoted: yt });
}
catch (error) {
console.log(error);
reply(mess.ErroAPI(prefix, SITE));
}
}
break;



case 'ativar':
{
if (!isGroupAdmins && !SoDono)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
const user = sender;
if (global.menuAzAtivos[user])
return reply(mess.niReply0707());
global.menuAzAtivos[user] = true;
const texto = linguagem.ativic(prefix);
await sendMenu(from, yt, { caption: texto });
}
break;

case 'stts':
case 'statusgp':
case 'statusgrupo': {
try {
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins && !SoDono) return reply(mess.onlyAdmins());

let mediaData = null;
let mediaType = null;

if (isQuotedImage || isImage) {
mediaData = isQuotedImage
? info.message.extendedTextMessage?.contextInfo?.quotedMessage?.imageMessage
: info.message?.imageMessage;
mediaType = 'image';
} else if (isQuotedVideo || isVideo) {
mediaData = isQuotedVideo
? info.message.extendedTextMessage?.contextInfo?.quotedMessage?.videoMessage
: info.message?.videoMessage;
mediaType = 'video';
} else if (isQuotedAudio || isAudio) {
mediaData = isQuotedAudio
? info.message.extendedTextMessage?.contextInfo?.quotedMessage?.audioMessage
: info.message?.audioMessage;
mediaType = 'audio';
}

const legenda = q?.trim() || '';
const statusJidList = [from, sender];

if (mediaType === 'image' && mediaData) {
const imageBuffer = await getFileBuffer(mediaData, 'image');
await yuta.sendMessage(from, {
image: imageBuffer,
caption: legenda,
contextInfo: { ...NkChannelKk, isGroupStatus: true, mentionedJid: [sender] }
}, { quoted: yt, statusJidList });
await reagir(from, '✅');
break;
}

if (mediaType === 'video' && mediaData) {
const videoBuffer = await getFileBuffer(mediaData, 'video');
await yuta.sendMessage(from, {
video: videoBuffer,
caption: legenda,
contextInfo: { ...NkChannelKk, isGroupStatus: true, mentionedJid: [sender] }
}, { quoted: yt, statusJidList });
await reagir(from, '✅');
break;
}

if (mediaType === 'audio' && mediaData) {
const audioBuffer = await getFileBuffer(mediaData, 'audio');
await yuta.sendMessage(from, {
audio: audioBuffer,
mimetype: mediaData.mimetype || 'audio/mpeg',
ptt: mediaData.ptt || false,
contextInfo: { ...NkChannelKk, isGroupStatus: true, mentionedJid: [sender] }
}, { quoted: yt, statusJidList });
await reagir(from, '✅');
break;
}

if (!legenda) return reply(mess.statusGrupoUso({ prefix, command }));

await yuta.sendMessage(from, {
text: legenda,
contextInfo: { ...NkChannelKk, isGroupStatus: true, mentionedJid: [sender] }
}, { quoted: yt, statusJidList });
await reagir(from, '✅');
} catch (e) {
console.log('Erro no comando stts:', e);
reply(mess.error());
}
break;
}

case 'status':
{
if (!isGroup)
return reply(mess.onlyGroup());

// Sempre relê os arquivos para não exibir estados antigos mantidos em memória/cache.
let statusGp = {};
let statusGlobal = {};
try {
const brutoGp = getGroupConfig(from, [{}]);
statusGp = (Array.isArray(brutoGp) ? brutoGp[0] : brutoGp) || {};
} catch {
statusGp = dataGp?.[0] || {};
}
try {
statusGlobal = JSON.parse(fs.readFileSync(nescj, 'utf8')) || {};
} catch {
statusGlobal = nescessario || {};
}

let welcomeStatus = false;
let welcomeModo = null;
try {
const dataGp2 = getWelcomeConfig(from, null);
welcomeStatus = dataGp2?.welcome?.status === true;
welcomeModo = dataGp2?.welcome?.modo || null;
} catch {}

const ligado = (valor) => valor === true;
const statusTexto = linguagem.status(
prefix,
ligado(statusGp.antiimg),
ligado(statusGp.antivideo),
ligado(statusGp.antiaudio),
ligado(statusGp.antisticker),
ligado(statusGp.antidoc),
ligado(statusGp.antictt),
ligado(statusGp.antiloc),
ligado(statusGp.antilinkgp),
ligado(statusGp.antilinkeasy),
ligado(statusGp.antilinkhard || statusGp.antilink),
ligado(statusGp.antifake),
ligado(statusGp.antinotas),
ligado(statusGp.anticatalogo),
ligado(statusGp?.antipalavrao?.active),
ligado(statusGlobal.antiflood),
ligado(statusGp?.ANTI_DDD?.active),
ligado(statusGp.jogos),
ligado(statusGp.autoresposta),
ligado(statusGp.isModoCoins) || ligado(isModoCoins),
ligado(statusGp.autosticker),
ligado(statusGlobal.anticall),
ligado(statusGlobal.antipv),
ligado(ANT_SP?.active) && ANT_SP?.groupId === from,
statusGlobal,
ligado(statusGlobal.botoff),
ligado(statusGp.soadm),
ligado(statusGp.multiprefix),
ligado(statusGp.x9),
ligado(statusGp.antistatus),
welcomeStatus,
welcomeModo,
{
antiDelete: ligado(statusGp.antidelete),
antiStatus: ligado(statusGp.antistatus),
antiBot: ligado(statusGp.antibot),
antiMarcar: ligado(statusGp.antimarcar),
antiSpam: ligado(statusGp.antispam),
antiInvisivel: ligado(statusGp.antimsg) || ligado(statusGp.antiInvisivel),
antiPayment: ligado(statusGp.antipayment),
antiRoubo: ligado(statusGp.antiroubo),
modoRpg: ligado(statusGp.modo_rpg),
modoModerador: ligado(statusGp.modomoderador) || ligado(statusGp.modoModerador),
modoLevel: ligado(statusGp.level),
modoIaNormal: ligado(statusGp.modoia_normal),
modoIaAvancado: ligado(statusGp.modoia_avancado),
autoDl: ligado(statusGp.autodl),
bangp: ligado(statusGp.bangp),
limitarCmd: ligado(statusGp.Limitar_CMD),
contadorMsg: ligado(statusGp.contadorMsg),
noPrefix: ligado(statusGp.noPrefixAtivo),
comandosFig: ligado(statusGp.figComandosAtivo),
modoCoins: ligado(statusGp.isModoCoins) || ligado(isModoCoins),
antiPorn: ligado(statusGp.antiporn),
registrarFigus: ligado(statusGp.registrarFIGUS)
}
);

// iPhone/Web continuam recebendo o status comum, pois a lista interativa é compatível
// apenas com o mesmo fluxo Android já usado pelo restante do bot.
if (!usarBotoes()) {
await sendMenu(from, yt, {
reaction: "🎉",
caption: statusTexto,
sendAudio: true
});
break;
}

const statusUI = mess.niStatusPainelUI({ e0: () => (NomeDoBot) });
const row = (nome, comando, ativo, descricao) => ({
...mess.niStatusPainelLinha({
e0: () => (ativo),
e1: () => (nome),
e2: () => (descricao)
}),
id: `${prefix}${comando}`
});

// Os sistemas foram separados pelas permissões e pela função real de cada comando.
// Somente comandos que realmente alternam um estado entram nesta lista.
const secoesStatus = [
{
title: statusUI.secoes.protecao,
rows: [
row('ANTI-IMAGEM', 'antiimg', ligado(statusGp.antiimg), 'Bloqueia imagens enviadas por membros.'),
row('ANTI-VÍDEO', 'antivideo', ligado(statusGp.antivideo), 'Bloqueia vídeos enviados por membros.'),
row('ANTI-ÁUDIO', 'antiaudio', ligado(statusGp.antiaudio), 'Bloqueia áudios enviados por membros.'),
row('ANTI-STICKER', 'antisticker', ligado(statusGp.antisticker), 'Bloqueia figurinhas no grupo.'),
row('ANTI-DOCUMENTO', 'antidoc', ligado(statusGp.antidoc), 'Bloqueia documentos no grupo.'),
row('ANTI-CONTATO', 'antictt', ligado(statusGp.antictt), 'Bloqueia cartões de contato.'),
row('ANTI-LOCALIZAÇÃO', 'antiloc', ligado(statusGp.antiloc), 'Bloqueia localizações enviadas.'),
row('ANTI-LINK DE GRUPO', 'antilinkgp', ligado(statusGp.antilinkgp), 'Protege contra links de grupos.'),
row('ANTI-LINK EASY', 'antilinkeasy', ligado(statusGp.antilinkeasy), 'Detecção simples de links.'),
row('ANTI-LINK HARD', 'antilinkhard', ligado(statusGp.antilinkhard || statusGp.antilink), 'Detecção reforçada de links.'),
row('ANTI-FAKE', 'antifake', ligado(statusGp.antifake), 'Protege contra números suspeitos.'),
row('ANTI-PALAVRÃO', 'antipalavrao', ligado(statusGp?.antipalavrao?.active), 'Controla palavras proibidas.'),
row('ANTI-DDD', 'antiddd', ligado(statusGp?.ANTI_DDD?.active), 'Controla DDDs bloqueados.'),
row('ANTI-DELETE', 'antidelete', ligado(statusGp.antidelete), 'Detecta mensagens apagadas.'),
row('ANTI-STATUS', 'antistatus', ligado(statusGp.antistatus), 'Bloqueia status no grupo.'),
row('ANTI-BOT', 'antibot', ligado(statusGp.antibot), 'Protege contra outros bots.'),
row('ANTI-MARCAR', 'antimarcar', ligado(statusGp.antimarcar), 'Impede marcações indevidas.'),
row('ANTI-MENSAGEM INVISÍVEL', 'antimsg', ligado(statusGp.antimsg) || ligado(statusGp.antiInvisivel), 'Protege contra mensagens invisíveis.'),
row('ANTI-PAYMENT', 'antipayment', ligado(statusGp.antipayment), 'Protege contra mensagens Payment.')
]
},
{
title: statusUI.secoes.administracao,
rows: [
row('SÓ ADM', 'so_adm', ligado(statusGp.soadm), 'Restringe os comandos aos administradores.'),
row('X9 ADM', 'x9', ligado(statusGp.x9), 'Informa ações administrativas.'),
row('X9 VISUALIZAÇÃO ÚNICA', 'x9visuunica', ligado(statusGp.visuUnica), 'Revela mídias de visualização única.'),
row('MODO MODERADOR', 'modomoderador', ligado(statusGp.modomoderador) || ligado(statusGp.modoModerador), 'Ativa o sistema de moderadores.'),
row('MODO LEVEL', 'modolevel', ligado(statusGp.level), 'Ativa o sistema de níveis.'),
row('CONTADOR DE MENSAGENS', 'contadormsg', ligado(statusGp.contadorMsg), 'Conta a atividade dos membros.'),
row('MULTI-PREFIXO', 'multiprefix', ligado(statusGp.multiprefix), 'Permite mais de um prefixo.')
]
},
{
title: statusUI.secoes.automacoes,
rows: [
row('MODO BRINCADEIRAS', 'modobn', ligado(statusGp.jogos), 'Libera comandos de brincadeiras.'),
row('AUTO-STICKER', 'autosticker', ligado(statusGp.autosticker), 'Converte mídias em figurinha automaticamente.'),
row('AUTO-DOWNLOAD', 'autodl', ligado(statusGp.autodl), 'Baixa links enviados no grupo automaticamente.')
]
}
];

if (SoDono) {
secoesStatus.push({
title: statusUI.secoes.dono,
rows: [
row('ANTI-LIGAÇÃO', 'antiligacao', ligado(statusGlobal.anticall), 'Bloqueia ligações recebidas pelo bot.'),
row('ANTI-PRIVADO', 'antipv', ligado(statusGlobal.antipv), 'Controla mensagens no privado.'),
row('ANTI-FLOOD GLOBAL', 'antiflood', ligado(statusGlobal.antiflood), 'Protege o bot contra flood global.'),
row('DETECTOR DE LINKS', 'anti-sp', ligado(ANT_SP?.active) && ANT_SP?.groupId === from, 'Controla o detector de links neste grupo.')
]
});
}

const botoesStatus = [{
name: 'single_select',
buttonParamsJson: JSON.stringify({
title: statusUI.botao,
sections: secoesStatus
})
}];

reagir(from, '⚙️');
await sendLikeInnovators(yuta, from, {
text: statusUI.texto,
footer: statusUI.rodape,
interactiveButtons: botoesStatus,
contextInfo: { ...NkChannelKk, mentionedJid: [sender] }
}, { quoted: yt });
}
break;

case 'db':
case 'database':
case 'autolimpeza':
{
try {
if (!SoDono)
return reply(mess.onlyOwner());
const p = typeof prefix !== 'undefined' ? prefix : '.';
const modo = String(args?.[0] || '').toLowerCase();
const botName = typeof NomeDoBot !== 'undefined' ? NomeDoBot : 'Bot';
if (!['check', 'verificar', 'clear', 'limpar'].includes(modo)) {
return reply(mess.niReplyExtra022({ e0: () => (`🧹 *${botName} DB*\n\n` +
`🔎 *${p}db check* ↝ ᴠᴇʀɪғɪᴄᴀʀ ᴅʙ, ᴛᴇᴍᴘᴏʀᴀ́ʀɪᴏs, ɴᴏᴅᴇ ᴄᴀᴄʜᴇ ᴇ ʀᴀᴍ\n` +
`🚀 *${p}db clear* ↝ ʟɪᴍᴘᴀʀ ᴅʙ, ᴄᴀᴄʜᴇs sᴇɢᴜʀᴏs ᴇ ᴛᴇɴᴛᴀʀ ʟɪʙᴇʀᴀʀ ʀᴀᴍ\n\n` +
`🤖 *${botName}*`) }));
}
const checking = modo === 'check' || modo === 'verificar';
await reply(checking
? `🔎 *ᴠᴇʀɪғɪᴄᴀɴᴅᴏ ᴅʙ...*\n\n⏳ *ᴀɢᴜᴀʀᴅᴇ* ↝ ᴀɴᴀʟɪsᴀɴᴅᴏ ᴀʀᴍᴀᴢᴇɴᴀᴍᴇɴᴛᴏ, ɴᴏᴅᴇ ᴄᴀᴄʜᴇ ᴇ ʀᴀᴍ.`
: `🧹 *ɪɴɪᴄɪᴀɴᴅᴏ ᴏᴛɪᴍɪᴢᴀçᴀ̃ᴏ...*\n\n⏳ *ᴀɢᴜᴀʀᴅᴇ* ↝ ʟɪᴍᴘᴀɴᴅᴏ ᴛᴇᴍᴘᴏʀᴀ́ʀɪᴏs, ɴᴏᴅᴇ ᴄᴀᴄʜᴇ, ᴅʙ ᴇ ʀᴀᴍ.`);
if (checking) {
const resultado = await dbCheck(yuta);
return reply(formatDbReport(resultado, p, botName));
}
const check = await dbCheck(yuta);
if (!hasWork(check)) {
return reply(formatDbReport({ ...check, mode: 'clear', skipped: true }, p, botName));
}
const resultado = await dbClear(yuta);
return reply(formatDbReport(resultado, p, botName));
}
catch (e) {
return reply(mess.niReply0708({ e0: () => (e.message || e) }));
}
}
break;

case 'menu':
case 'menu1': {
const botNome = NomeDoBot;
const versionBaileys = loadJSON(new URL('./node_modules/@whiskeysockets/baileys/package.json', import.meta.url)).version;
const firstV = speed();
const secondV = speed() - firstV;
const timestamp = speed();
const fast = speed() - timestamp;
const uptimeBot = TimeCount(process.uptime());
const menuCaption = linguagem.menu(prefix, sender, isChVip, isCargo, fast, uptimeBot, botNome, versionBaileys, ownerName, isBotoff);
if (command === 'menu1' || !usarBotoes()) {
await sendMenu(from, yt, {
reaction: "🎉",
caption: menuCaption,
sendAudio: true,
mentionedJid: [sender]
});
break;
}
reagir(from, "🎉");
const menuTexto = mess.botBotao(versionBaileys, isCargo, botNome, isChVip, sender, fast, uptimeBot, prefix);
const botoesMenu = [
{ name: "single_select", buttonParamsJson: JSON.stringify({ title: "✦ 𝐀𝐁𝐑𝐈𝐑 𝐌𝐄𝐍𝐔𝐒 ✦", sections: [
{ title: "⭑💎 • 𝗠𝗘𝗡𝗨𝗦 𝗣𝗥𝗜𝗡𝗖𝗜𝗣𝗔𝗜𝗦", rows: [
{ header: "✨ • 𝗠𝗘𝗡𝗨 𝗣𝗥𝗜𝗡𝗖𝗜𝗣𝗔𝗟", title: "Menu que contém todos os comandos.", description: NomeDoBot, id: `${prefix}menu1` },
{ header: "🛡️ • 𝗠𝗘𝗡𝗨 𝗔𝗗𝗠", title: "Menu que contém todos os comandos administrativos.", description: NomeDoBot, id: `${prefix}menuadm` },
{ header: "👑 • 𝗠𝗘𝗡𝗨 𝗗𝗢𝗡𝗢", title: "Menu que contém todos os comandos do dono.", description: NomeDoBot, id: `${prefix}menudono` },
{ header: "🎨 • 𝗠𝗘𝗡𝗨 𝗟𝗢𝗚𝗢𝗦", title: "Menu que contém todos os comandos de logos.", description: NomeDoBot, id: `${prefix}menulogos` },
{ header: "🎭 • 𝗠𝗘𝗡𝗨 𝗕𝗥𝗜𝗡𝗖𝗔𝗗𝗘𝗜𝗥𝗔𝗦", title: "Menu que contém todos os comandos de brincadeiras.", description: NomeDoBot, id: `${prefix}menubrincadeira` },
{ header: "⚔️ • 𝗠𝗘𝗡𝗨 𝗥𝗣𝗚", title: "Menu que contém todos os comandos de RPG.", description: NomeDoBot, id: `${prefix}menurpg` },
{ header: "🔞 • 𝗠𝗘𝗡𝗨 𝟭𝟴+", title: "Menu que contém todos os comandos adultos.", description: NomeDoBot, id: `${prefix}menu18` }
] },
{ title: "⭑📡 • 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗖̧𝗢̃𝗘𝗦", rows: [
{ header: "☎️ • 𝗗𝗢𝗡𝗢", title: "Mostra o contato do dono do bot.", description: NomeDoBot, id: `${prefix}dono` },
{ header: "🤖 • 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧", title: "Mostra as informações do bot.", description: NomeDoBot, id: `${prefix}infobot` },
{ header: "👤 • 𝗜𝗡𝗙𝗢 𝗗𝗢𝗡𝗢", title: "Mostra as informações do dono.", description: NomeDoBot, id: `${prefix}infodono` },
{ header: "⚡ • 𝗣𝗜𝗡𝗚", title: "Mostra o status e velocidade do bot.", description: NomeDoBot, id: `${prefix}ping` }
] },
{ title: "⭑🏆 • 𝗖𝗥𝗘́𝗗𝗜𝗧𝗢𝗦", rows: [
{ header: "🏆 • 𝗖𝗥𝗜𝗔𝗗𝗢𝗥", title: "Mostra os créditos do projeto.", description: NomeDoBot, id: `${prefix}criador` }
] }
] }) },
{ name: "cta_url", buttonParamsJson: JSON.stringify({ display_text: "✦ 𝐂𝐀𝐍𝐀𝐋 𝐎𝐅𝐈𝐂𝐈𝐀𝐋 ✦", url: channel, merchant_url: channel }) }
];
const menuVideo = "./src/dados/settings/LOGOS/fotomenu.mp4";
const menuFoto = "./src/dados/settings/LOGOS/fotomenu.png";
if (fs.existsSync(menuVideo)) {
const mediaMenu = await prepareWAMessageMedia({ video: fs.readFileSync(menuVideo), mimetype: "video/mp4", gifPlayback: true }, { upload: yuta.waUploadToServer });
await relayButtonMessage(yuta, from, { interactiveMessage: { contextInfo: { ...NkChannelKk, mentionedJid: [sender] }, header: { hasMediaAttachment: true, videoMessage: mediaMenu.videoMessage }, headerType: "VIDEO", body: { text: menuTexto }, footer: { text: mess.niText1333({ e0: () => (NomeDoBot) }) }, nativeFlowMessage: { buttons: botoesMenu, messageParamsJson: "{}", messageVersion: 1 } } }, { quoted: yt });
}
else {
await sendInteractiveImageButtons(yuta, from, {
image: fs.readFileSync(menuFoto),
body: menuTexto,
footer: `*✦ ${NomeDoBot} ✦*`,
buttons: botoesMenu,
contextInfo: { ...NkChannelKk, mentionedJid: [sender] }
}, { quoted: yt });
}
if (isAudioMenu)
await sendAudioMenu(from);
break;
}
case 'menu18':
await sendMenu(from, yt, {
reaction: "🎉",
caption: linguagem.menu18(prefix),
sendAudio: true
});
break;

case 'menudono':
await sendMenu(from, yt, {
reaction: "🎉",
caption: linguagem.menudono(prefix),
isOwnerRequired: true,
sendAudio: true
});
break;

case 'menuadm':
await sendMenu(from, yt, {
reaction: "🎉",
caption: linguagem.adms(prefix),
isAdminRequired: true,
sendAudio: true
});
break;

case 'menurpg':
await sendMenu(from, yt, {
reaction: "🎉",
caption: linguagem.rpg(prefix),
isModoCoinsRequired: true,
sendAudio: true
});
break;

case 'menulogos':
case 'efeitoimg':
case 'logo':
case 'logos':
case 'menulogo':
await sendMenu(from, yt, {
reaction: "🎉",
caption: linguagem.menulogos(prefix),
sendAudio: true
});
break;

case 'menubrincadeira':
case 'menubrincadeiras':
case 'brincadeiras':
case 'brincadeira':
case 'menubn':
await sendMenu(from, yt, {
reaction: "🎉",
caption: linguagem.brincadeiras(prefix),
isGroupRequired: true,
isModoBnRequired: true,
sendAudio: true
});
break;

case 'infodono':
case 'dono':
case 'donos':
await sendMenu(from, yt, {
reaction: "👑",
caption: linguagem.consultas(prefix, numero_dono1, numero_dono2, numero_dono3, numero_dono4, numero_dono5, numero_dono6, NomeDoBot, ownerName, ownerNumber),
sendAudio: true
});
break;

case 'infobot':
case 'botinfo':
case 'bot':
const versionBaileys = loadJSON(new URL('./node_modules/@whiskeysockets/baileys/package.json', import.meta.url)).version;
await sendMenu(from, yt, {
reaction: "🤖",
caption: linguagem.dono(prefix, NomeDoBot, NumeroDoBot, ownerNumber, isBotoff, ownerName, versionBaileys),
sendAudio: true
});
break;

case 'quando':
{
if (!q)
return reply(mess.niReply0709());
const respostasFixas = ['Hoje', 'Amanhã', 'Nunca'];
const temposSingular = ['dia', 'semana', 'mês', 'ano'];
const temposPlural = ['dias', 'semanas', 'meses', 'anos'];
const chance = Math.floor(Math.random() * 3);
let resposta;
if (chance === 0) {
resposta = respostasFixas[Math.floor(Math.random() * respostasFixas.length)];
}
else {
const numero = Math.floor(Math.random() * 11) + 1;
const tempo = numero === 1 ? temposSingular[Math.floor(Math.random() * temposSingular.length)] : temposPlural[Math.floor(Math.random() * temposPlural.length)];
resposta = `${numero} ${tempo}`;
}
reply(mess.niReply0710({ e0: () => (q), e1: () => (resposta) }));
}
break;

case 'forca': {
try {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
const pathF = `./src/dados/data/media/forca/database/session-${from}.json`;
if (fs.existsSync(pathF)) {
return reply(mess.niReply0711());
}
const word = palavras[Math.floor(Math.random() * palavras.length)];
const params = {
palavra: word.palavra,
tema: word.tema,
dica: word.dica,
path: './src/dados/data/media/forca/database',
};
const data = forca.startSession(from, params);
reply(mess.niReply0712({ e0: () => (data.palavra.length), e1: () => (word.tema), e2: () => (word.dica), e3: () => (frames[data.erros]), e4: () => (data.letrasX.join('')), e5: () => (data.usado.join(', ')), e6: () => (prefix) }));
}
catch (e) {
console.error(e);
reply(mess.niReply0713());
}
break;
}
case 'fc': {
try {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
if (!fs.existsSync(`./src/dados/data/media/forca/database/session-${from}.json`)) {
return reply(mess.niReply0714({ e0: () => (prefix) }));
}
if (!q || q.length == 2 || !isNaN(q))
return reply(mess.niReply0715());
const pathF = `./src/dados/data/media/forca/database/session-${from}.json`;
const database = JSON.parse(fs.readFileSync(pathF));
const q_ToLC = q.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
if (database.usado.includes(q_ToLC))
return reply(mess.niReply0716());
const data = forca.verify(from, q_ToLC, './src/dados/data/media/forca/database');
if (data.ended) {
if (data.win) {
reply(mess.niReply0717());
}
else {
reply(mess.niReply0718());
}
DLT_FL(data.session);
}
else {
if (data.letrasY.includes(q_ToLC)) {
reply(mess.niReply0719());
}
else {
reply(mess.niReply0720());
}
reply(mess.niReply0721({ e0: () => (data.palavra.length), e1: () => (data.tema), e2: () => (data.dica), e3: () => (frames[data.erros]), e4: () => (data.letrasX.join('')), e5: () => (data.usado.join(', ')), e6: () => (prefix) }));
}
}
catch (e) {
console.log(e);
reply(mess.niReply0722());
}
break;
}
case 'rv_forca':
try {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
const database = `./src/dados/data/media/forca/database/session-${from}.json`;
if (!fs.existsSync(database)) {
reply(mess.niReply0723({ e0: () => (prefix) }));
}
else {
DLT_FL(database);
reply(mess.niReply0724());
}
}
catch (e) {
console.error(e);
reply(mess.niReply0725());
}
break;

case 'jogov':
case 'jogodavelha':
{
try {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
ensureTttStorage();
if (fs.existsSync(tttDbPath(from))) {
const boardnow = setGame(from);
return await tttSend(mess.niTttGameRunning({ e0: () => (tttNum(boardnow.X)), e1: () => (tttNum(boardnow.O)), e2: () => (prefix) }), [boardnow.X, boardnow.O]);
}
const oponenteJid = tttResolveOpponent();
const oponenteNum = tttNum(oponenteJid);
const senderNum = tttNum(sender);
if (!oponenteNum) {
return reply(mess.niTttNeedOpponent({ e0: () => (prefix + command) }));
}
if (oponenteNum === senderNum) {
return reply(mess.niTttInvalidOpponentSelf());
}
if (oponenteNum === tttNum(botNumber)) {
return reply(mess.niTttInvalidOpponentBot());
}
const boardnow = setGame(from);
boardnow.status = false;
boardnow.turn = 'X';
boardnow.X = senderNum;
boardnow.O = oponenteNum;
boardnow.isWin = false;
boardnow.winner = null;
boardnow.nine_push = [];
boardnow._matrix = [
['1️⃣', '2️⃣', '3️⃣'],
['4️⃣', '5️⃣', '6️⃣'],
['7️⃣', '8️⃣', '9️⃣']
];
fs.writeFileSync(tttDbPath(from), JSON.stringify(boardnow, null, 2));
tttAddSession(tttJid(senderNum), from);
await tttSend(mess.niTttChallengeSent({ e0: () => (senderNum), e1: () => (oponenteNum), e2: () => (prefix) }), [senderNum, oponenteNum]);
}
catch (e) {
console.log('[JOGO DA VELHA CRIAR ERRO]', e);
reply(mess.error());
}
}
break;

case 'resetarvelha':
case 'resetavelha':
case 'resetarv':
case 'resetav':
case 'resetvelha':
case 'rv':
{
try {
if (!isGroup)
return reply(mess.onlyGroup());
ensureTttStorage();
if (!fs.existsSync(tttDbPath(from))) {
return reply(mess.niTttNoGame());
}
const boardnow = setGame(from);
const senderNum = tttNum(sender);
const podeResetar = isGroupAdmins || [tttNum(boardnow.X), tttNum(boardnow.O)].includes(senderNum);
if (!podeResetar) {
return reply(mess.niTttNoResetPermission());
}
tttClearSession(boardnow, from);
reply(mess.niTttResetOk());
}
catch (e) {
console.log('[JOGO DA VELHA RESET ERRO]', e);
reply(mess.error());
}
}
break;

case 'vord': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
await reagir(from, '🎭');
try {
const question = JSON.parse(fs.readFileSync("./src/dados/questions.json"));
const tipo = Math.floor(Math.random() * 2);
const txt = question[tipo].words[Math.floor(Math.random() * question[tipo].words.length)];
await sendPoll(yuta, from, tipo == 0 ? `*🎭 𝐕𝐄𝐑𝐃𝐀𝐃𝐄 𝐎𝐔 𝐃𝐄𝐒𝐀𝐅𝐈𝐎 ⧽*\n•\n> 🤔 ${txt}\n•\n⚡ 𝐕𝐀𝐌𝐎𝐒 𝐕𝐄𝐑 𝐒𝐄 𝐕𝐎𝐂𝐄̂ 𝐅𝐀𝐋𝐀 𝐀 𝐕𝐄𝐑𝐃𝐀𝐃𝐄...`
: `*🎭 𝐕𝐄𝐑𝐃𝐀𝐃𝐄 𝐎𝐔 𝐃𝐄𝐒𝐀𝐅𝐈𝐎 ⧽*\n•\n> 🔥 ${txt}\n•\n⚡ 𝐕𝐀𝐌𝐎𝐒 𝐕𝐄𝐑 𝐒𝐄 𝐕𝐎𝐂𝐄̂ 𝐓𝐄𝐌 𝐂𝐎𝐑𝐀𝐆𝐄𝐌...`, tipo == 0 ? ['✰ 𝐄𝐔 𝐑𝐄𝐒𝐏𝐎𝐍𝐃𝐎 ✰', '✰ 𝐄𝐔 𝐏𝐀𝐒𝐒𝐎 ✰'] : ['✰ 𝐄𝐔 𝐅𝐀𝐂̧𝐎 ✰', '✰ 𝐄𝐔 𝐀𝐑𝐑𝐄𝐆𝐎 ✰']);
}
catch (err) {
console.error(mess.niConsole031(), err);
reply(mess.error());
}
break;
}
case 'videocontrario':
case 'reversevid':
{
try {
if ((isMedia && info.message.videoMessage) || isQuotedVideo) {
reply(mess.wait());

const videoMsg = isQuotedVideo
? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage
: info.message.videoMessage;

const ext = await getExtension(videoMsg.mimetype || 'video/mp4');
const inputPath = getRandom('.' + ext);
const outputPath = getRandom('.mp4');
const videoBuffer = await getFileBuffer(videoMsg, 'video');

fs.writeFileSync(inputPath, videoBuffer);

exec(`ffmpeg -y -i "${inputPath}" -vf reverse -af areverse "${outputPath}"`, async (err) => {
await DLT_FL(inputPath);

if (err) {
await DLT_FL(outputPath);
return reply(mess.niReply0732({ e0: () => err }));
}

const finalBuffer = fs.readFileSync(outputPath);
await yuta.sendMessage(from, {
video: finalBuffer,
mimetype: 'video/mp4',
contextInfo: NkChannelKk
}, { quoted: yt });

await DLT_FL(outputPath);
});
} else {
reply(mess.niReply0733());
}
} catch (e) {
console.error(e);
reply(mess.error());
}
}
break;

case 'videolento':
case 'slowvid':
{
try {
if ((isMedia && info.message.videoMessage) || isQuotedVideo) {
reply(mess.wait());

const videoMsg = isQuotedVideo
? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage
: info.message.videoMessage;

const ext = await getExtension(videoMsg.mimetype || 'video/mp4');
const inputPath = getRandom('.' + ext);
const outputPath = getRandom('.mp4');
const videoBuffer = await getFileBuffer(videoMsg, 'video');

fs.writeFileSync(inputPath, videoBuffer);

exec(`ffmpeg -y -i "${inputPath}" -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" "${outputPath}"`, async (err) => {
await DLT_FL(inputPath);

if (err) {
await DLT_FL(outputPath);
return reply(mess.niReply0734({ e0: () => err }));
}

const finalBuffer = fs.readFileSync(outputPath);
await yuta.sendMessage(from, {
video: finalBuffer,
mimetype: 'video/mp4',
contextInfo: NkChannelKk
}, { quoted: yt });

await DLT_FL(outputPath);
});
} else {
reply(mess.niReply0735());
}
} catch (e) {
console.error(e);
reply(mess.error());
}
}
break;

case 'videorapido':
case 'fastvid':
{
try {
if ((isMedia && info.message.videoMessage) || isQuotedVideo) {
reply(mess.wait());

const videoMsg = isQuotedVideo
? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage
: info.message.videoMessage;

const ext = await getExtension(videoMsg.mimetype || 'video/mp4');
const inputPath = getRandom('.' + ext);
const outputPath = getRandom('.mp4');
const videoBuffer = await getFileBuffer(videoMsg, 'video');

fs.writeFileSync(inputPath, videoBuffer);

exec(`ffmpeg -y -i "${inputPath}" -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" "${outputPath}"`, async (err) => {
await DLT_FL(inputPath);

if (err) {
await DLT_FL(outputPath);
return reply(mess.niReply0736({ e0: () => err }));
}

const finalBuffer = fs.readFileSync(outputPath);
await yuta.sendMessage(from, {
video: finalBuffer,
mimetype: 'video/mp4',
contextInfo: NkChannelKk
}, { quoted: yt });

await DLT_FL(outputPath);
});
} else {
reply(mess.niReply0737());
}
} catch (e) {
console.error(e);
reply(mess.error());
}
}
break;

case 'grave2':
{
try {
if ((isMedia && info.message.audioMessage) || isQuotedAudio) {
reply(mess.wait());

const audioMsg = isQuotedAudio
? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage
: info.message.audioMessage;

const ext = await getExtension(audioMsg.mimetype || 'audio/mpeg');
const inputPath = getRandom('.' + ext);
const outputPath = getRandom('.mp3');
const audioBuffer = await getFileBuffer(audioMsg, 'audio');

fs.writeFileSync(inputPath, audioBuffer);

exec(`ffmpeg -y -i "${inputPath}" -filter:a "atempo=1.6,asetrate=22100" "${outputPath}"`, async (err) => {
await DLT_FL(inputPath);

if (err) {
await DLT_FL(outputPath);
return reply(mess.niReply0738());
}

const finalBuffer = fs.readFileSync(outputPath);
await yuta.sendMessage(from, {
audio: finalBuffer,
mimetype: 'audio/mpeg',
ptt: false,
contextInfo: NkChannelKk
}, { quoted: yt });

await DLT_FL(outputPath);
});
} else {
reply(mess.niReply0739());
}
} catch (e) {
console.error(e);
reply(mess.error());
}
}
break;

case 'slowed':
case 'deep1':
{
try {
if ((isMedia && info.message.audioMessage) || isQuotedAudio) {
reply(mess.wait());

const audioMsg = isQuotedAudio
? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage
: info.message.audioMessage;

const ext = await getExtension(audioMsg.mimetype || 'audio/mpeg');
const inputPath = getRandom('.' + ext);
const outputPath = getRandom('.mp3');
const audioBuffer = await getFileBuffer(audioMsg, 'audio');

fs.writeFileSync(inputPath, audioBuffer);

exec(
`ffmpeg -y -i "${inputPath}" -af "atempo=1.0,asetrate=50000*2/3" "${outputPath}"`,
async (err) => {
await DLT_FL(inputPath);

if (err) {
console.error('Erro no ffmpeg slowed:', err);
await DLT_FL(outputPath);
return reply(mess.niReply0740());
}

const finalBuffer = fs.readFileSync(outputPath);

await yuta.sendMessage(from, {
audio: finalBuffer,
mimetype: 'audio/mpeg',
ptt: false,
contextInfo: NkChannelKk
}, { quoted: yt });

await DLT_FL(outputPath);
}
);
} else {
reply(mess.niReply0741());
}
} catch (e) {
console.error('Erro no comando slowed:', e);
reply(mess.error());
}
}
break;

case 'speed':
case 'speedup':
{
try {
if ((isMedia && info.message.audioMessage) || isQuotedAudio) {
reply(mess.wait());

const audioMsg = isQuotedAudio
? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage
: info.message.audioMessage;

const ext = await getExtension(audioMsg.mimetype || 'audio/mpeg');
const inputPath = getRandom('.' + ext);
const outputPath = getRandom('.mp3');
const audioBuffer = await getFileBuffer(audioMsg, 'audio');

fs.writeFileSync(inputPath, audioBuffer);

exec(
`ffmpeg -y -i "${inputPath}" -af "atempo=1.0,asetrate=86000*2/3" "${outputPath}"`,
async (err) => {
await DLT_FL(inputPath);

if (err) {
console.error('Erro no ffmpeg speedup:', err);
await DLT_FL(outputPath);
return reply(mess.niReply0742());
}

const finalBuffer = fs.readFileSync(outputPath);

await yuta.sendMessage(from, {
audio: finalBuffer,
mimetype: 'audio/mpeg',
ptt: false,
contextInfo: NkChannelKk
}, { quoted: yt });

await DLT_FL(outputPath);
}
);
} else {
reply(mess.niReply0743());
}
} catch (e) {
console.error('Erro no comando speedup:', e);
reply(mess.error());
}
}
break;

case 'grave':
{
try {
if ((isMedia && info.message.audioMessage) || isQuotedAudio) {
reply(mess.wait());

const audioMsg = isQuotedAudio
? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage
: info.message.audioMessage;

const ext = await getExtension(audioMsg.mimetype || 'audio/mpeg');
const inputPath = getRandom('.' + ext);
const outputPath = getRandom('.mp3');
const audioBuffer = await getFileBuffer(audioMsg, 'audio');

fs.writeFileSync(inputPath, audioBuffer);

exec(`ffmpeg -y -i "${inputPath}" -filter:a "atempo=0.9,asetrate=44100" "${outputPath}"`, async (err) => {
await DLT_FL(inputPath);

if (err) {
await DLT_FL(outputPath);
return reply(mess.niReply0744());
}

const finalBuffer = fs.readFileSync(outputPath);
await yuta.sendMessage(from, {
audio: finalBuffer,
mimetype: 'audio/mpeg',
ptt: false,
contextInfo: NkChannelKk
}, { quoted: yt });

await DLT_FL(outputPath);
});
} else {
reply(mess.niReply0745());
}
} catch (e) {
console.error(e);
reply(mess.error());
}
}
break;

case 'adolesc':
case 'vozmenino':
{
try {
if ((isMedia && info.message.audioMessage) || isQuotedAudio) {
reply(mess.wait());

const audioMsg = isQuotedAudio
? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage
: info.message.audioMessage;

const ext = await getExtension(audioMsg.mimetype || 'audio/mpeg');
const inputPath = getRandom('.' + ext);
const outputPath = getRandom('.mp3');
const audioBuffer = await getFileBuffer(audioMsg, 'audio');

fs.writeFileSync(inputPath, audioBuffer);

exec(`ffmpeg -y -i "${inputPath}" -filter:a "atempo=1.06,asetrate=44100*1.25" "${outputPath}"`, async (err) => {
await DLT_FL(inputPath);

if (err) {
await DLT_FL(outputPath);
return reply(mess.niReply0746());
}

const finalBuffer = fs.readFileSync(outputPath);
await yuta.sendMessage(from, {
audio: finalBuffer,
mimetype: 'audio/mpeg',
ptt: false,
contextInfo: NkChannelKk
}, { quoted: yt });

await DLT_FL(outputPath);
});
} else {
reply(mess.niReply0747());
}
} catch (e) {
console.error(e);
reply(mess.error());
}
}
break;

case 'tomp3':
{
try {
if ((isMedia && info.message.videoMessage) || isQuotedVideo) {
reply(mess.wait());

const videoMsg = isQuotedVideo
? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage
: info.message.videoMessage;

const ext = await getExtension(videoMsg.mimetype || 'video/mp4');
const inputPath = getRandom('.' + ext);
const outputPath = getRandom('.mp3');
const videoBuffer = await getFileBuffer(videoMsg, 'video');

fs.writeFileSync(inputPath, videoBuffer);

exec(`ffmpeg -y -i "${inputPath}" -vn -ar 44100 -ac 2 -b:a 192k "${outputPath}"`, async (err) => {
await DLT_FL(inputPath);

if (err) {
await DLT_FL(outputPath);
return reply(mess.niReply0748());
}

const finalBuffer = fs.readFileSync(outputPath);
await yuta.sendMessage(from, {
audio: finalBuffer,
mimetype: 'audio/mpeg',
ptt: false,
contextInfo: NkChannelKk
}, { quoted: yt });

await DLT_FL(outputPath);
});
} else {
reply(mess.niReply0749());
}
} catch (e) {
console.error(e);
reply(mess.error());
}
}
break;

case 'bass3':
case 'bass':
{
try {
if ((isMedia && info.message.audioMessage) || isQuotedAudio) {
reply(mess.wait());

const audioMsg = isQuotedAudio
? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage
: info.message.audioMessage;

const ext = await getExtension(audioMsg.mimetype || 'audio/mpeg');
const inputPath = getRandom('.' + ext);
const outputPath = getRandom('.mp3');
const audioBuffer = await getFileBuffer(audioMsg, 'audio');

fs.writeFileSync(inputPath, audioBuffer);

exec(`ffmpeg -y -i "${inputPath}" -af "equalizer=f=20:width_type=o:width=2:g=15" "${outputPath}"`, async (err) => {
await DLT_FL(inputPath);

if (err) {
await DLT_FL(outputPath);
return reply(mess.niReply0750());
}

const finalBuffer = fs.readFileSync(outputPath);
await yuta.sendMessage(from, {
audio: finalBuffer,
mimetype: 'audio/mpeg',
ptt: false,
contextInfo: NkChannelKk
}, { quoted: yt });

await DLT_FL(outputPath);
});
} else {
reply(mess.niReply0751());
}
} catch (e) {
console.error(e);
reply(mess.error());
}
}
break;

case 'bass2':
{
try {
if ((isMedia && info.message.audioMessage) || isQuotedAudio) {
reply(mess.wait());

const audioMsg = isQuotedAudio
? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage
: info.message.audioMessage;

const ext = await getExtension(audioMsg.mimetype || 'audio/mpeg');
const inputPath = getRandom('.' + ext);
const outputPath = getRandom('.mp3');
const audioBuffer = await getFileBuffer(audioMsg, 'audio');

fs.writeFileSync(inputPath, audioBuffer);

exec(`ffmpeg -y -i "${inputPath}" -af "equalizer=f=94:width_type=o:width=2:g=30" "${outputPath}"`, async (err) => {
await DLT_FL(inputPath);

if (err) {
await DLT_FL(outputPath);
return reply(mess.niReply0752());
}

const finalBuffer = fs.readFileSync(outputPath);
await yuta.sendMessage(from, {
audio: finalBuffer,
mimetype: 'audio/mpeg',
ptt: false,
contextInfo: NkChannelKk
}, { quoted: yt });

await DLT_FL(outputPath);
});
} else {
reply(mess.niReply0753());
}
} catch (e) {
console.error(e);
reply(mess.error());
}
}
break;

case 'estourar':
{
try {
if ((isMedia && info.message.audioMessage) || isQuotedAudio) {
reply(mess.wait());

const audioMsg = isQuotedAudio
? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage
: info.message.audioMessage;

const ext = await getExtension(audioMsg.mimetype || 'audio/mpeg');
const inputPath = getRandom('.' + ext);
const outputPath = getRandom('.mp3');
const audioBuffer = await getFileBuffer(audioMsg, 'audio');

fs.writeFileSync(inputPath, audioBuffer);

exec(`ffmpeg -y -i "${inputPath}" -af "equalizer=f=90:width_type=o:width=2:g=30" "${outputPath}"`, async (err) => {
await DLT_FL(inputPath);

if (err) {
await DLT_FL(outputPath);
return reply(mess.niReply0754());
}

const finalBuffer = fs.readFileSync(outputPath);
await yuta.sendMessage(from, {
audio: finalBuffer,
mimetype: 'audio/mpeg',
ptt: false,
contextInfo: NkChannelKk
}, { quoted: yt });

await DLT_FL(outputPath);
});
} else {
reply(mess.niReply0755());
}
} catch (e) {
console.error(e);
reply(mess.error());
}
}
break;

case 'fast':
case 'audiorapido':
{
try {
if ((isMedia && info.message.audioMessage) || isQuotedAudio) {
reply(mess.wait());

const audioMsg = isQuotedAudio
? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage
: info.message.audioMessage;

const ext = await getExtension(audioMsg.mimetype || 'audio/mpeg');
const inputPath = getRandom('.' + ext);
const outputPath = getRandom('.mp3');
const audioBuffer = await getFileBuffer(audioMsg, 'audio');

fs.writeFileSync(inputPath, audioBuffer);

exec(`ffmpeg -y -i "${inputPath}" -filter:a "atempo=0.9,asetrate=95100" "${outputPath}"`, async (err) => {
await DLT_FL(inputPath);

if (err) {
await DLT_FL(outputPath);
return reply(mess.niReply0756());
}

const finalBuffer = fs.readFileSync(outputPath);
await yuta.sendMessage(from, {
audio: finalBuffer,
mimetype: 'audio/mpeg',
ptt: false,
contextInfo: NkChannelKk
}, { quoted: yt });

await DLT_FL(outputPath);
});
} else {
reply(mess.niReply0757());
}
} catch (e) {
console.error(e);
reply(mess.error());
}
}
break;

case 'esquilo':
{
try {
if ((isMedia && info.message.audioMessage) || isQuotedAudio) {
reply(mess.wait());

const audioMsg = isQuotedAudio
? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage
: info.message.audioMessage;

const ext = await getExtension(audioMsg.mimetype || 'audio/mpeg');
const inputPath = getRandom('.' + ext);
const outputPath = getRandom('.mp3');
const audioBuffer = await getFileBuffer(audioMsg, 'audio');

fs.writeFileSync(inputPath, audioBuffer);

exec(`ffmpeg -y -i "${inputPath}" -filter:a "atempo=0.7,asetrate=65100" "${outputPath}"`, async (err) => {
await DLT_FL(inputPath);

if (err) {
await DLT_FL(outputPath);
return reply(mess.niReply0758());
}

const finalBuffer = fs.readFileSync(outputPath);
await yuta.sendMessage(from, {
audio: finalBuffer,
mimetype: 'audio/mpeg',
ptt: false,
contextInfo: NkChannelKk
}, { quoted: yt });

await DLT_FL(outputPath);
});
} else {
reply(mess.niReply0759());
}
} catch (e) {
console.error(e);
reply(mess.error());
}
}
break;

case 'audiolento':
case 'slow':
{
try {
if ((isMedia && info.message.audioMessage) || isQuotedAudio) {
reply(mess.wait());

const audioMsg = isQuotedAudio
? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage
: info.message.audioMessage;

const ext = await getExtension(audioMsg.mimetype || 'audio/mpeg');
const inputPath = getRandom('.' + ext);
const outputPath = getRandom('.mp3');
const audioBuffer = await getFileBuffer(audioMsg, 'audio');

fs.writeFileSync(inputPath, audioBuffer);

exec(`ffmpeg -y -i "${inputPath}" -filter:a "atempo=0.9,asetrate=44100" "${outputPath}"`, async (err) => {
await DLT_FL(inputPath);

if (err) {
await DLT_FL(outputPath);
return reply(mess.niReply0760());
}

const finalBuffer = fs.readFileSync(outputPath);
await yuta.sendMessage(from, {
audio: finalBuffer,
mimetype: 'audio/mpeg',
ptt: false,
contextInfo: NkChannelKk
}, { quoted: yt });

await DLT_FL(outputPath);
});
} else {
reply(mess.niReply0761());
}
} catch (e) {
console.error(e);
reply(mess.error());
}
}
break;
case 'chance':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
if (args.length < 1)
return reply(mess.niReply0762({ e0: () => (prefix) }));
await yuta.sendMessage(from, {
text: mess.niText1334({ e0: () => (q), e1: () => (Math.floor(Math.random() * 100)) }),
contextInfo: { ...NkChannelKk, mentionedJid: [sender] }
}, { quoted: yt });
break;

case 'comer':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
if (!menc_os2 || menc_jid2[1])
return reply(mess.niReply0763());
await yuta.sendMessage(from, {
video: { url: comer }, gifPlayback: true,
caption: mess.niText1424({ e0: () => (menc_os2.split('@')[0]) }),
contextInfo: { ...NkChannelKk, mentionedJid: [menc_os2] }
}, { quoted: yt });
break;

case 'capinarlote':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
if (!menc_os2 || menc_jid2[1])
return reply(mess.niReply0764());
await yuta.sendMessage(from, {
video: { url: capinarlote }, gifPlayback: true,
caption: mess.niText1425({ e0: () => (menc_os2.split('@')[0]) }),
contextInfo: { ...NkChannelKk, mentionedJid: [menc_os2] }
}, { quoted: yt });
break;

case 'pgpeito':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
if (!menc_os2 || menc_jid2[1])
return reply(mess.niReply0765());
await yuta.sendMessage(from, {
video: { url: pgpeito }, gifPlayback: true,
caption: mess.niText1426({ e0: () => (menc_os2.split('@')[0]) }),
contextInfo: { ...NkChannelKk, mentionedJid: [menc_os2] }
}, { quoted: yt });
break;

case 'pgpau':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
if (!menc_os2 || menc_jid2[1])
return reply(mess.niReply0766());
await yuta.sendMessage(from, {
video: { url: pgpau }, gifPlayback: true,
caption: mess.niText1427({ e0: () => (menc_os2.split('@')[0]) }),
contextInfo: { ...NkChannelKk, mentionedJid: [menc_os2] }
}, { quoted: yt });
break;

case 'pgbunda':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
if (!menc_os2 || menc_jid2[1])
return reply(mess.niReply0767());
await yuta.sendMessage(from, {
video: { url: pgbunda }, gifPlayback: true,
caption: mess.niText1428({ e0: () => (menc_os2.split('@')[0]) }),
contextInfo: { ...NkChannelKk, mentionedJid: [menc_os2] }
}, { quoted: yt });
break;

case 'morder':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
if (!menc_os2 || menc_jid2[1])
return reply(mess.niReply0768());
await yuta.sendMessage(from, {
video: { url: morder }, gifPlayback: true,
caption: mess.niText1429({ e0: () => (menc_os2.split('@')[0]) }),
contextInfo: { ...NkChannelKk, mentionedJid: [menc_os2] }
}, { quoted: yt });
break;

case 'sentar':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
if (!menc_os2 || menc_jid2[1])
return reply(mess.niReply0769());
await yuta.sendMessage(from, {
video: { url: sentar }, gifPlayback: true,
caption: mess.niText1430({ e0: () => (menc_os2.split('@')[0]) }),
contextInfo: { ...NkChannelKk, mentionedJid: [menc_os2] }
}, { quoted: yt });
break;

case 'tirarft':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
if (!menc_os2 || menc_jid2[1])
return reply(mess.niReply0770());
await yuta.sendMessage(from, {
video: { url: tirarft }, gifPlayback: true,
caption: mess.niText1431({ e0: () => (menc_os2.split('@')[0]) }),
contextInfo: { ...NkChannelKk, mentionedJid: [menc_os2] }
}, { quoted: yt });
break;

case 'cagar':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
if (!menc_os2 || menc_jid2[1])
return reply(mess.niReply0772());
await yuta.sendMessage(from, {
video: { url: cagar }, gifPlayback: true,
caption: mess.niText1433({ e0: () => (menc_os2.split('@')[0]) }),
contextInfo: { ...NkChannelKk, mentionedJid: [menc_os2] }
}, { quoted: yt });
break;

case 'cu':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
await yuta.sendMessage(from, {
text: mess.niText1335({ e0: () => (sender_ou_n.split("@")[0]) }),
contextInfo: { ...NkChannelKk, mentionedJid: [sender_ou_n] }
}, { quoted: yt });
setTimeout(async () => {
const random = `${Math.floor(Math.random() * 110)}`;
await yuta.sendMessage(from, {
image: { url: cu },
caption: mess.niText1434({ e0: () => (sender_ou_n.split("@")[0]), e1: () => (random) }),
contextInfo: { ...NkChannelKk, mentionedJid: [sender_ou_n] }
}, { quoted: yt });
}, 7000);
break;

case 'abraco':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
if (!menc_os2 || menc_jid2[1])
return reply(mess.niReply0773());
await yuta.sendMessage(from, {
video: { url: abraco }, gifPlayback: true,
caption: mess.niText1435({ e0: () => (menc_os2.split('@')[0]) }),
contextInfo: { ...NkChannelKk, mentionedJid: [menc_os2] }
}, { quoted: yt });
break;

case 'lavarlouca':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
if (!menc_os2 || menc_jid2[1])
return reply(mess.niReply0774());
await yuta.sendMessage(from, {
video: { url: lavarlouca }, gifPlayback: true,
caption: mess.niText1436({ e0: () => (menc_os2.split('@')[0]) }),
contextInfo: { ...NkChannelKk, mentionedJid: [menc_os2] }
}, { quoted: yt });
break;

case 'carinho':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
if (!menc_os2 || menc_jid2[1])
return reply(mess.niReply0775());
await yuta.sendMessage(from, {
video: { url: carinho }, gifPlayback: true,
caption: mess.niText1437({ e0: () => (menc_os2.split('@')[0]) }),
contextInfo: { ...NkChannelKk, mentionedJid: [menc_os2] }
}, { quoted: yt });
break;

case 'morte':
case 'death':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
if (args.length == 0)
return reply(mess.niReply0776({ e0: () => (prefix + command) }));
predea = await axios.get(`https://api.agify.io/?name=${encodeURIComponent(args[0])}`);
if (predea.data.age == null)
return reply(mess.niReply0777());
await yuta.sendMessage(from, {
video: { url: deathcmd }, gifPlayback: true,
caption: mess.niText1438({ e0: () => (predea.data.name), e1: () => (predea.data.age) }),
contextInfo: { ...NkChannelKk, mentionedJid: [sender] }
}, { quoted: yt });
break;

case 'carioca':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
await yuta.sendMessage(from, {
text: mess.niText1336({ e0: () => (sender_ou_n.split("@")[0]) }),
contextInfo: { ...NkChannelKk, mentionedJid: [sender_ou_n] }
}, { quoted: yt });
setTimeout(async () => {
const random = `${Math.floor(Math.random() * 110)}`;
await yuta.sendMessage(from, {
image: { url: imgcarioca },
caption: mess.niText1439({ e0: () => (sender_ou_n.split("@")[0]), e1: () => (random) }),
contextInfo: { ...NkChannelKk, mentionedJid: [sender_ou_n] }
}, { quoted: yt });
}, 7000);
break;

case 'louco':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
await yuta.sendMessage(from, {
text: mess.niText1337({ e0: () => (sender_ou_n.split("@")[0]) }),
contextInfo: { ...NkChannelKk, mentionedJid: [sender_ou_n] }
}, { quoted: yt });
setTimeout(async () => {
const random = `${Math.floor(Math.random() * 110)}`;
await yuta.sendMessage(from, {
image: { url: imglouco },
caption: mess.niText1440({ e0: () => (sender_ou_n.split("@")[0]), e1: () => (random) }),
contextInfo: { ...NkChannelKk, mentionedJid: [sender_ou_n] }
}, { quoted: yt });
}, 7000);
break;

case 'louca':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
await yuta.sendMessage(from, {
text: mess.niText1338({ e0: () => (sender_ou_n.split("@")[0]) }),
contextInfo: { ...NkChannelKk, mentionedJid: [sender_ou_n] }
}, { quoted: yt });
setTimeout(async () => {
const random = `${Math.floor(Math.random() * 110)}`;
await yuta.sendMessage(from, {
image: { url: imglouca },
caption: mess.niText1441({ e0: () => (sender_ou_n.split("@")[0]), e1: () => (random) }),
contextInfo: { ...NkChannelKk, mentionedJid: [sender_ou_n] }
}, { quoted: yt });
}, 7000);
break;

case 'safada':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
await yuta.sendMessage(from, {
text: mess.niText1339({ e0: () => (sender_ou_n.split("@")[0]) }),
contextInfo: { ...NkChannelKk, mentionedJid: [sender_ou_n] }
}, { quoted: yt });
setTimeout(async () => {
const random = `${Math.floor(Math.random() * 110)}`;
await yuta.sendMessage(from, {
image: { url: imgsafada },
caption: mess.niText1442({ e0: () => (sender_ou_n.split("@")[0]), e1: () => (random) }),
contextInfo: { ...NkChannelKk, mentionedJid: [sender_ou_n] }
}, { quoted: yt });
}, 7000);
break;

case 'safado':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
await yuta.sendMessage(from, {
text: mess.niText1340({ e0: () => (sender_ou_n.split("@")[0]) }),
contextInfo: { ...NkChannelKk, mentionedJid: [sender_ou_n] }
}, { quoted: yt });
setTimeout(async () => {
const random = `${Math.floor(Math.random() * 110)}`;
await yuta.sendMessage(from, {
image: { url: imgsafado },
caption: mess.niText1443({ e0: () => (sender_ou_n.split("@")[0]), e1: () => (random) }),
contextInfo: { ...NkChannelKk, mentionedJid: [sender_ou_n] }
}, { quoted: yt });
}, 7000);
break;

case 'macaco':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
await yuta.sendMessage(from, {
text: mess.niText1341({ e0: () => (sender_ou_n.split("@")[0]) }),
contextInfo: { ...NkChannelKk, mentionedJid: [sender_ou_n] }
}, { quoted: yt });
setTimeout(async () => {
const random = `${Math.floor(Math.random() * 110)}`;
await yuta.sendMessage(from, {
image: { url: imgmacaco },
caption: mess.niText1444({ e0: () => (sender_ou_n.split("@")[0]), e1: () => (random) }),
contextInfo: { ...NkChannelKk, mentionedJid: [sender_ou_n] }
}, { quoted: yt });
}, 7000);
break;

case 'macaca':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
await yuta.sendMessage(from, {
text: mess.niText1342({ e0: () => (sender_ou_n.split("@")[0]) }),
contextInfo: { ...NkChannelKk, mentionedJid: [sender_ou_n] }
}, { quoted: yt });
setTimeout(async () => {
const random = `${Math.floor(Math.random() * 110)}`;
await yuta.sendMessage(from, {
image: { url: imgmacaca },
caption: mess.niText1445({ e0: () => (sender_ou_n.split("@")[0]), e1: () => (random) }),
contextInfo: { ...NkChannelKk, mentionedJid: [sender_ou_n] }
}, { quoted: yt });
}, 7000);
break;

case 'puta':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
await yuta.sendMessage(from, {
text: mess.niText1343({ e0: () => (sender_ou_n.split("@")[0]) }),
contextInfo: { ...NkChannelKk, mentionedJid: [sender_ou_n] }
}, { quoted: yt });
setTimeout(async () => {
const random = `${Math.floor(Math.random() * 110)}`;
await yuta.sendMessage(from, {
image: { url: imgputa },
caption: mess.niText1446({ e0: () => (sender_ou_n.split("@")[0]), e1: () => (random) }),
contextInfo: { ...NkChannelKk, mentionedJid: [sender_ou_n] }
}, { quoted: yt });
}, 7000);
break;


case 'tiro':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
if (!menc_os2 || menc_jid2[1])
return reply(mess.niReply0778());

const midiaTiro = carregarMidia('tiro');
if (midiaTiro.type !== 'video')
return reply('⚠️ A mídia do tiro ainda não foi configurada. O dono deve responder a um vídeo com .settiro.');

const fraseTiro = `🔫 @${sender.split('@')[0]} disparou e acertou @${menc_os2.split('@')[0]}!`;

await yuta.sendMessage(from, {
video: midiaTiro.data,
mimetype: 'video/mp4',
gifPlayback: true,
caption: fraseTiro,
contextInfo: { ...NkChannelKk, mentionedJid: [sender, menc_os2] }
}, { quoted: yt });
break;

case 'matar':
case 'mata':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
if (!menc_os2 || menc_jid2[1])
return reply(mess.niReply0778());
await yuta.sendMessage(from, {
video: { url: matar },
gifPlayback: true,
caption: mess.niText1447({ e0: () => (menc_os2.split('@')[0]) }),
contextInfo: { ...NkChannelKk, mentionedJid: [menc_os2] }
}, { quoted: yt });
break;

case 'leitada':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
if (!menc_os2 || menc_jid2[1])
return reply(mess.niReply0779());
await yuta.sendMessage(from, {
video: { url: leitada },
gifPlayback: true,
caption: mess.niText1448({ e0: () => (menc_os2.split('@')[0]) }),
contextInfo: { ...NkChannelKk, mentionedJid: [menc_os2] }
}, { quoted: yt });
break;

case 'beijo':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
if (!menc_os2 || menc_jid2[1])
return reply(mess.niReply0780());
await yuta.sendMessage(from, {
video: { url: beijocmd },
gifPlayback: true,
caption: mess.niText1449({ e0: () => (menc_os2.split('@')[0]) }),
contextInfo: { ...NkChannelKk, mentionedJid: [menc_os2] }
}, { quoted: yt });
break;

case 'tapa':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
if (!menc_os2 || menc_jid2[1])
return reply(mess.niReply0781());
await yuta.sendMessage(from, {
video: { url: tapacmd },
gifPlayback: true,
caption: mess.niText1450({ e0: () => (menc_os2.split('@')[0]) }),
contextInfo: { ...NkChannelKk, mentionedJid: [menc_os2] }
}, { quoted: yt });
break;

case 'nazista':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
await yuta.sendMessage(from, {
text: mess.niText1344({ e0: () => (sender_ou_n.split("@")[0]) }),
contextInfo: { ...NkChannelKk, mentionedJid: [sender_ou_n] }
}, { quoted: yt });
setTimeout(async () => {
const random = `${Math.floor(Math.random() * 110)}`;
await yuta.sendMessage(from, {
image: { url: imgnazista },
caption: mess.niText1451({ e0: () => (sender_ou_n.split("@")[0]), e1: () => (random) }),
contextInfo: { ...NkChannelKk, mentionedJid: [sender_ou_n] }
}, { quoted: yt });
}, 7000);
break;

case 'corno':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
await yuta.sendMessage(from, {
text: mess.niText1345({ e0: () => (sender_ou_n.split("@")[0]) }),
contextInfo: { ...NkChannelKk, mentionedJid: [sender_ou_n] }
}, { quoted: yt });
setTimeout(async () => {
const random = `${Math.floor(Math.random() * 110)}`;
await yuta.sendMessage(from, {
image: { url: imgcorno },
caption: mess.niText1452({ e0: () => (sender_ou_n.split("@")[0]), e1: () => (random) }),
contextInfo: { ...NkChannelKk, mentionedJid: [sender_ou_n] }
}, { quoted: yt });
}, 7000);
break;

case 'vesgo':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
await yuta.sendMessage(from, {
text: mess.niText1346({ e0: () => (sender_ou_n.split("@")[0]) }),
contextInfo: { ...NkChannelKk, mentionedJid: [sender_ou_n] }
}, { quoted: yt });
setTimeout(async () => {
const random = `${Math.floor(Math.random() * 110)}`;
await yuta.sendMessage(from, {
image: { url: imgvesgo },
caption: mess.niText1453({ e0: () => (sender_ou_n.split("@")[0]), e1: () => (random) }),
contextInfo: { ...NkChannelKk, mentionedJid: [sender_ou_n] }
}, { quoted: yt });
}, 7000);
break;

case 'bebado':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
await yuta.sendMessage(from, {
text: mess.niText1347({ e0: () => (sender_ou_n.split("@")[0]) }),
contextInfo: { ...NkChannelKk, mentionedJid: [sender_ou_n] }
}, { quoted: yt });
setTimeout(async () => {
const random = `${Math.floor(Math.random() * 110)}`;
await yuta.sendMessage(from, {
image: { url: imgbebado },
caption: mess.niText1454({ e0: () => (sender_ou_n.split("@")[0]), e1: () => (random) }),
contextInfo: { ...NkChannelKk, mentionedJid: [sender_ou_n] }
}, { quoted: yt });
}, 7000);
break;

case 'gado':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
await yuta.sendMessage(from, {
text: mess.niText1348({ e0: () => (sender_ou_n.split("@")[0]) }),
contextInfo: { ...NkChannelKk, mentionedJid: [sender_ou_n] }
}, { quoted: yt });
setTimeout(async () => {
const random = `${Math.floor(Math.random() * 110)}`;
await yuta.sendMessage(from, {
image: { url: imggado },
caption: mess.niText1455({ e0: () => (sender_ou_n.split("@")[0]), e1: () => (random) }),
contextInfo: { ...NkChannelKk, mentionedJid: [sender_ou_n] }
}, { quoted: yt });
}, 7000);
break;

case 'fiel':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
await yuta.sendMessage(from, {
text: mess.niText1349({ e0: () => (sender_ou_n.split("@")[0]) }),
contextInfo: { ...NkChannelKk, mentionedJid: [sender_ou_n] }
}, { quoted: yt });
setTimeout(async () => {
const random = `${Math.floor(Math.random() * 110)}`;
await yuta.sendMessage(from, {
image: { url: fielcmd },
caption: mess.niText1456({ e0: () => (sender_ou_n.split("@")[0]), e1: () => (random) }),
contextInfo: { ...NkChannelKk, mentionedJid: [sender_ou_n] }
}, { quoted: yt });
}, 7000);
break;

case 'lindo':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
await yuta.sendMessage(from, {
text: mess.niText1350({ e0: () => (sender_ou_n.split("@")[0]) }),
contextInfo: { ...NkChannelKk, mentionedJid: [sender_ou_n] }
}, { quoted: yt });
setTimeout(async () => {
const random = `${Math.floor(Math.random() * 110)}`;
await yuta.sendMessage(from, {
image: { url: lindocmd },
caption: mess.niText1457({ e0: () => (sender_ou_n.split("@")[0]), e1: () => (random) }),
contextInfo: { ...NkChannelKk, mentionedJid: [sender_ou_n] }
}, { quoted: yt });
}, 7000);
break;

case 'linda':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
await yuta.sendMessage(from, {
text: mess.niText1351({ e0: () => (sender_ou_n.split("@")[0]) }),
contextInfo: { ...NkChannelKk, mentionedJid: [sender_ou_n] }
}, { quoted: yt });
setTimeout(async () => {
const random = `${Math.floor(Math.random() * 110)}`;
await yuta.sendMessage(from, {
image: { url: lindacmd },
caption: mess.niText1458({ e0: () => (sender_ou_n.split("@")[0]), e1: () => (random) }),
contextInfo: { ...NkChannelKk, mentionedJid: [sender_ou_n] }
}, { quoted: yt });
}, 7000);
break;

case 'gostoso':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
await yuta.sendMessage(from, {
text: mess.niText1352({ e0: () => (sender_ou_n.split("@")[0]) }),
contextInfo: { ...NkChannelKk, mentionedJid: [sender_ou_n] }
}, { quoted: yt });
setTimeout(async () => {
const random = `${Math.floor(Math.random() * 110)}`;
await yuta.sendMessage(from, {
image: { url: imggostoso },
caption: mess.niText1459({ e0: () => (sender_ou_n.split("@")[0]), e1: () => (random) }),
gifPlayback: true,
contextInfo: { ...NkChannelKk, mentionedJid: [sender_ou_n] }
}, { quoted: yt });
}, 7000);
break;

case 'gostosa':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
await yuta.sendMessage(from, {
text: mess.niText1353({ e0: () => (sender_ou_n.split("@")[0]) }),
contextInfo: { ...NkChannelKk, mentionedJid: [sender_ou_n] }
}, { quoted: yt });
setTimeout(async () => {
const random = `${Math.floor(Math.random() * 110)}`;
await yuta.sendMessage(from, {
image: { url: imggostosa },
caption: mess.niText1460({ e0: () => (sender_ou_n.split("@")[0]), e1: () => (random) }),
gifPlayback: true,
contextInfo: { ...NkChannelKk, mentionedJid: [sender_ou_n] }
}, { quoted: yt });
}, 7000);
break;

case 'sigma':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
await yuta.sendMessage(from, {
text: mess.niText1354({ e0: () => (sender_ou_n.split("@")[0]) }),
contextInfo: { ...NkChannelKk, mentionedJid: [sender_ou_n] }
}, { quoted: yt });
setTimeout(async () => {
const random = `${Math.floor(Math.random() * 110)}`;
await yuta.sendMessage(from, {
image: { url: imgsigma },
caption: mess.niText1461({ e0: () => (sender_ou_n.split("@")[0]), e1: () => (random) }),
contextInfo: { ...NkChannelKk, mentionedJid: [sender_ou_n] }
}, { quoted: yt });
}, 7000);
break;

case 'beta':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
await yuta.sendMessage(from, {
text: mess.niText1355({ e0: () => (sender_ou_n.split("@")[0]) }),
contextInfo: { ...NkChannelKk, mentionedJid: [sender_ou_n] }
}, { quoted: yt });
setTimeout(async () => {
const random = `${Math.floor(Math.random() * 110)}`;
await yuta.sendMessage(from, {
image: { url: imgbeta },
caption: mess.niText1462({ e0: () => (sender_ou_n.split("@")[0]), e1: () => (random) }),
contextInfo: { ...NkChannelKk, mentionedJid: [sender_ou_n] }
}, { quoted: yt });
}, 7000);
break;

case 'baiano':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
await yuta.sendMessage(from, {
text: mess.niText1356({ e0: () => (sender_ou_n.split("@")[0]) }),
contextInfo: { ...NkChannelKk, mentionedJid: [sender_ou_n] }
}, { quoted: yt });
setTimeout(async () => {
const random = `${Math.floor(Math.random() * 110)}`;
await yuta.sendMessage(from, {
image: { url: imgbaiano },
caption: mess.niText1463({ e0: () => (sender_ou_n.split("@")[0]), e1: () => (random) }),
contextInfo: { ...NkChannelKk, mentionedJid: [sender_ou_n] }
}, { quoted: yt });
}, 7000);
break;

case 'baiana':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
await yuta.sendMessage(from, {
text: mess.niText1357({ e0: () => (sender_ou_n.split("@")[0]) }),
contextInfo: { ...NkChannelKk, mentionedJid: [sender_ou_n] }
}, { quoted: yt });
setTimeout(async () => {
const random = `${Math.floor(Math.random() * 110)}`;
await yuta.sendMessage(from, {
image: { url: imgbaiana },
caption: mess.niText1464({ e0: () => (sender_ou_n.split("@")[0]), e1: () => (random) }),
contextInfo: { ...NkChannelKk, mentionedJid: [sender_ou_n] }
}, { quoted: yt });
}, 7000);
break;

case 'gay':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
await yuta.sendMessage(from, {
text: mess.niText1358({ e0: () => (sender_ou_n.split("@")[0]) }),
contextInfo: { ...NkChannelKk, mentionedJid: [sender_ou_n] }
}, { quoted: yt });
setTimeout(async () => {
let percent = Math.floor(Math.random() * 110);
let status = '';
if (percent < 20)
status = 'hmm... você é hetero...';
else if (percent <= 50)
status = '+/- boiola';
else if (percent <= 80)
status = 'tenho minha desconfiança...';
else
status = 'você é gay...';
await yuta.sendMessage(from, {
image: { url: imggay },
caption: mess.niText1465({ e0: () => (sender_ou_n.split("@")[0]), e1: () => (percent), e2: () => (status) }),
contextInfo: { ...NkChannelKk, mentionedJid: [sender_ou_n] }
}, { quoted: yt });
}, 7000);
break;

case 'feio':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
await yuta.sendMessage(from, {
text: mess.niText1359({ e0: () => (sender_ou_n.split("@")[0]) }),
contextInfo: { ...NkChannelKk, mentionedJid: [sender_ou_n] }
}, { quoted: yt });
setTimeout(async () => {
let percent = Math.floor(Math.random() * 110);
let status = '';
if (percent < 20)
status = 'Não é feio';
else if (percent <= 50)
status = 'Meio feio';
else if (percent <= 80)
status = 'Feio moderado';
else
status = 'Feio demais';
await yuta.sendMessage(from, {
image: { url: imgfeio },
caption: mess.niText1466({ e0: () => (sender_ou_n.split("@")[0]), e1: () => (percent), e2: () => (status) }),
contextInfo: { ...NkChannelKk, mentionedJid: [sender_ou_n] }
}, { quoted: yt });
}, 7000);
break;

case 'soco':
case 'socar':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
if (!menc_os2 || menc_jid2[1])
return reply(mess.niReply0782());
const frases = [`Ei @${menc_os2.split('@')[0]}, @${sender.split('@')[0]} te deu um golpe fatal!`, `Atenção @${menc_os2.split('@')[0]}, @${sender.split('@')[0]} acabou de te nocautear!`, `Olá @${menc_os2.split('@')[0]}, você foi atingido pelo @${sender.split('@')[0]}!`];
const videos = [soco];
const fraseEscolhida = frases[Math.floor(Math.random() * frases.length)];
const videoEscolhido = await getBuffer(videos[Math.floor(Math.random() * videos.length)]);
await yuta.sendMessage(from, { video: videoEscolhido, gifPlayback: true, caption: fraseEscolhida, contextInfo: { ...NkChannelKk, mentionedJid: [sender, menc_os2] } }, { quoted: yt });
break;

case "ppt":
case "pedrapapeltesoura":
{
try {
const escolha = String(args[0] || q || '').toLowerCase().trim();
if (!escolha)
return reply(mess.niReply0783({ e0: () => prefix, e1: () => prefix, e2: () => prefix }));
const opcoes = ["pedra", "papel", "tesoura"];
if (!opcoes.includes(escolha))
return reply(mess.niReply0784({ e0: () => prefix, e1: () => prefix, e2: () => prefix }));
const escolhaBot = opcoes[Math.floor(Math.random() * opcoes.length)];
let resultado = "";
if (escolhaBot === escolha) {
resultado = "O jogo terminou em empate";
} else if (
(escolhaBot === "pedra" && escolha === "papel") ||
(escolhaBot === "papel" && escolha === "tesoura") ||
(escolhaBot === "tesoura" && escolha === "pedra")
) {
resultado = "Vitória do jogador";
} else {
resultado = "A vitória é do BOT";
}
reply(mess.niReply0785({ e0: () => NomeDoBot, e1: () => escolhaBot, e2: () => escolha, e3: () => resultado }));
} catch (e) {
console.error(e);
reply(mess.error());
}
}
break;

case 'chute':
case 'chutar':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
if (!menc_os2 || menc_jid2[1])
return reply(mess.niReply0786());
await yuta.sendMessage(from, {
video: { url: chutecmd },
gifPlayback: true,
caption: mess.niText1467({ e0: () => (menc_os2.split('@')[0]) }),
contextInfo: { ...NkChannelKk, mentionedJid: [menc_os2] }
}, { quoted: yt });
break;

case 'dogolpe':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
if (!menc_os2 || menc_jid2[1])
return reply(mess.niReply0787());
const golpes = ["𝐄𝐌 𝐈𝐋𝐔𝐃𝐈𝐑 𝐏𝐄𝐒𝐒𝐎𝐀𝐒", "𝐄𝐌 𝐅𝐄𝐑𝐈𝐑 𝐎𝐒 𝐒𝐄𝐍𝐓𝐈𝐌𝐄𝐍𝐓𝐎𝐒", "𝐄𝐌 𝐃𝐀𝐑 𝐂𝐇𝐈𝐅𝐑𝐄"];
const golpeEscolhido = golpes[Math.floor(Math.random() * golpes.length)];
await yuta.sendMessage(from, {
text: mess.niText1360({ e0: () => (menc_os2.split("@")[0]), e1: () => (golpeEscolhido) }),
contextInfo: { ...NkChannelKk, mentionedJid: [menc_os2] }
}, { quoted: yt });
break;

case 'casal': {
try {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));

await reagir(from, "💘");

const normalizarJid = (jid) => {
if (!jid) return null;
let x = String(Array.isArray(jid) ? jid[0] : jid);
if (x.includes("@")) return x;
x = x.replace(/\D/g, "");
return x ? `${x}@s.whatsapp.net` : null;
};

const numeroTag = (jid) => {
const n = String(jid || "").split("@")[0].replace(/\D/g, "");
return n || String(jid || "").split("@")[0];
};

const jidDoMembro = (m) => {
const melhor =
m?.phoneNumber ||
m?.phone ||
m?.pn ||
m?.pnJid ||
m?.jid ||
(m?.id && !String(m.id).includes("@lid") ? m.id : null) ||
m?.id ||
m?.lid;

return normalizarJid(melhor);
};

const uniq = (arr) => [...new Set(arr.filter(Boolean))];

let membrosValidos = groupMembers
.map(jidDoMembro)
.filter(Boolean)
.filter(j => !String(j).includes("status@broadcast"));

membrosValidos = uniq(membrosValidos);

if (membrosValidos.length < 2)
return reply(mess.error());

let m1 = membrosValidos[Math.floor(Math.random() * membrosValidos.length)];
let m2 = membrosValidos[Math.floor(Math.random() * membrosValidos.length)];

while (
m2 === m1 ||
numeroTag(m2) === numeroTag(m1)
) {
m2 = membrosValidos[Math.floor(Math.random() * membrosValidos.length)];
}

let random = Math.floor(Math.random() * 100);
const mencoes = uniq([m1, m2]);

await yuta.sendMessage(from, {
image: { url: casal },
caption: mess.niText1469({
e0: () => numeroTag(m1),
e1: () => numeroTag(m2),
e2: () => random
}),
mentions: mencoes,
contextInfo: {
...NkChannelKk,
mentionedJid: mencoes
}
}, { quoted: yt }).catch(() => {
reply(mess.error());
});

} catch (e) {
console.log(e);
reply(mess.error());
}
break;
}
case 'shipo': {
try {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
if (!menc_os2)
return reply(mess.niReply0788());

const normalizarJid = (jid) => {
if (!jid) return null;
let x = String(Array.isArray(jid) ? jid[0] : jid);
if (x.includes("@")) return x;
x = x.replace(/\D/g, "");
return x ? `${x}@s.whatsapp.net` : null;
};

const numeroTag = (jid) => {
const n = String(jid || "").split("@")[0].replace(/\D/g, "");
return n || String(jid || "").split("@")[0];
};

const acharMembro = (jid) => {
const raw = String(Array.isArray(jid) ? jid[0] : jid || "");
const num = raw.split("@")[0].replace(/\D/g, "");

return groupMembers.find(m => {
const vals = [
m?.phoneNumber,
m?.phone,
m?.pn,
m?.pnJid,
m?.jid,
m?.id,
m?.lid
].filter(Boolean).map(String);

return vals.includes(raw) || vals.some(v => {
const n = v.split("@")[0].replace(/\D/g, "");
return num && n === num;
});
});
};

const jidReal = (jid) => {
const membro = acharMembro(jid);

const melhor =
membro?.phoneNumber ||
membro?.phone ||
membro?.pn ||
membro?.pnJid ||
membro?.jid ||
(membro?.id && !String(membro.id).includes("@lid") ? membro.id : null) ||
jid;

return normalizarJid(melhor);
};

const jidDoMembro = (m) => {
const melhor =
m?.phoneNumber ||
m?.phone ||
m?.pn ||
m?.pnJid ||
m?.jid ||
(m?.id && !String(m.id).includes("@lid") ? m.id : null) ||
m?.id ||
m?.lid;

return normalizarJid(melhor);
};

const uniq = (arr) => [...new Set(arr.filter(Boolean))];

const user2Raw = normalizarJid(menc_os2);
const user2 = jidReal(user2Raw) || user2Raw;

let membrosValidos = groupMembers
.map(jidDoMembro)
.filter(Boolean)
.filter(j => !String(j).includes("status@broadcast"));

membrosValidos = uniq(membrosValidos);

let parceiro = membrosValidos[Math.floor(Math.random() * membrosValidos.length)];

while (
parceiro === user2 ||
numeroTag(parceiro) === numeroTag(user2)
) {
parceiro = membrosValidos[Math.floor(Math.random() * membrosValidos.length)];
}

const porcentagem = Math.floor(Math.random() * 100);

let avatar1;
try {
avatar1 = await yuta.profilePictureUrl(parceiro, "image");
}
catch {
avatar1 = imgperfil;
}

let avatar2;
try {
avatar2 = await yuta.profilePictureUrl(user2, "image");
}
catch {
avatar2 = imgperfil;
}

const shipUrl = await api.canvas.ship({
avatar1,
avatar2,
porcentagem,
fundo: fundoshipp
});

const mencoes = uniq([parceiro, user2, user2Raw]);

await yuta.sendMessage(from, {
image: shipUrl,
caption: mess.niText1468({
e0: () => numeroTag(parceiro),
e1: () => numeroTag(user2),
e2: () => porcentagem
}),
mentions: mencoes,
contextInfo: {
...NkChannelKk,
mentionedJid: mencoes
}
}, { quoted: yt });

}
catch (e) {
console.log(e);
reply(mess.ErroAPI(prefix, SITE));
}
break;
}

case 'gozar':
case 'goza':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
await reagir(from, "😈");
if (!menc_os2 || menc_jid2[1])
return reply(mess.niReply0789());
const gozacao = ['Você acabou de gozar na boca do(a)', 'Você acabou de gozar no cuzinho do(a)', 'Você acabou de gozar na bucetinha do(a)', 'Você acabou de gozar no pé do(a)', 'Você acabou de gozar na cabeça do(a)', 'Você acabou de gozar na cara do(a)'];
const gozarEscolhido = gozacao[Math.floor(Math.random() * gozacao.length)];
await yuta.sendMessage(from, { video: { url: Gozar }, gifPlayback: true, caption: mess.niText1470({ e0: () => (gozarEscolhido), e1: () => (menc_os2.split('@')[0]) }), contextInfo: { ...NkChannelKk, mentionedJid: [menc_os2] } }, { quoted: yt });
break;

case 'wame':
reply(mess.niReply0790({ e0: () => (sender.split("@")[0]), e1: () => (q ? "?text=" + q.replace(/ /g, "%20") : "") }));
break;

case 'vab':
case 'vcprefere':
case 'voceprefere': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
await reagir(from, '🎭');
try {
const array = await psycatgames();
const sorteio = array[Math.floor(Math.random() * array.length)];
const { pergunta1, pergunta2 } = sorteio.questions[Math.floor(Math.random() * sorteio.questions.length)];
await sendPoll(yuta, from, `*🤔 𝐕𝐎𝐂𝐄̂ 𝐏𝐑𝐄𝐅𝐄𝐑𝐄 ⧽*\n•\n> 1️⃣ - ${pergunta1}\n-\n> 2️⃣ - ${pergunta2}\n•\n⚡ 𝐄𝐒𝐂𝐎𝐋𝐇𝐀 𝐁𝐄𝐌...`, ['✰ 𝐎𝐏𝐂̧𝐀̃𝐎 𝟏 ✰', '✰ 𝐎𝐏𝐂̧𝐀̃𝐎 𝟐 ✰']);
}
catch (err) {
console.error(mess.niConsole032(), err);
await replyWithReaction(mess.error(), { react: { text: "❌", key: info.key } });
}
break;
}
case 'eununca': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
await reagir(from, '🩸');
try {
const Never = tools.iNever[Math.floor(Math.random() * tools.iNever.length)];
await sendPoll(yuta, from, `*❓𝑃𝐸𝑅𝐺𝑈𝑁𝑇𝐴 ⧽*\n\n> ${Never}\n\n✅ 𝐕𝐎𝐂𝐄̂ 𝐉𝐀 𝐎𝐔 𝐍𝐔𝐍𝐂𝐀? ❎`, [`✰ 𝐄𝐔 𝐉𝐀 😳 ✰`, `✰ 𝐄𝐔 𝐍𝐔𝐍𝐂𝐀 👀 ✰`]);
}
catch (err) {
console.error(mess.niConsole033(), err);
await replyWithReaction(mess.error(), { react: { text: "❌", key: info.key } });
}
break;
}
case 'rankgay':
case 'rankgays':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
let mentionsGay = [];
let rankGay = `🏳️‍🌈 RANK DOS 5 MAIS GAY DO GRUPO\n\n`;
for (let i = 0; i < 5; i++) {
const membro = somembros[Math.floor(Math.random() * somembros.length)];
mentionsGay.push(membro);
rankGay += `• ${i + 1}° ${Math.floor(Math.random() * 100)}% - @${membro.split('@')[0]}\n\n`;
}
await yuta.sendMessage(from, { image: { url: rnkgay }, caption: rankGay, contextInfo: { ...NkChannelKk, mentionedJid: mentionsGay } }, { quoted: yt });
break;

case 'rankcasalzin':
case 'rankcasais':
case 'rankcasal':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
await reagir(from, "💞");
let mentionsCasal = [];
let rankCasal = `❣ RANK CASAIS DO GRUPO\n\n`;
for (let i = 0; i < 5; i++) {
const m1 = somembros[Math.floor(Math.random() * somembros.length)];
const m2 = somembros[Math.floor(Math.random() * somembros.length)];
mentionsCasal.push(m1, m2);
const porcent = Math.floor(Math.random() * 101);
rankCasal += `• ${i + 1}° ${porcent}% - @${m1.split('@')[0]} e @${m2.split('@')[0]}\n\n`;
}
await yuta.sendMessage(from, { image: { url: rankcasal }, caption: rankCasal, contextInfo: { ...NkChannelKk, mentionedJid: mentionsCasal } }, { quoted: yt });
break;

case 'rankfalido':
case 'rankfalidos':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
let mentionsFalido = [];
let rankFalido = `💸 RANK DOS 5 MAIS FALIDOS DO GRUPO\n\n`;
for (let i = 0; i < 5; i++) {
const membro = somembros[Math.floor(Math.random() * somembros.length)];
mentionsFalido.push(membro);
rankFalido += `• ${i + 1}° ${Math.floor(Math.random() * 100)}% - @${membro.split('@')[0]}\n\n`;
}
await yuta.sendMessage(from, { image: { url: rankfalido }, caption: rankFalido, contextInfo: { ...NkChannelKk, mentionedJid: mentionsFalido } }, { quoted: yt });
break;

case 'rankcu':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
let mentionsCu = [];
let rankCu = `🍑 RANK DOS 5 MAIS CUZUDOS DO GRUPO\n\n`;
for (let i = 0; i < 5; i++) {
const membro = somembros[Math.floor(Math.random() * somembros.length)];
mentionsCu.push(membro);
rankCu += `• ${i + 1}° ${Math.floor(Math.random() * 100)}% - @${membro.split('@')[0]}\n\n`;
}
await yuta.sendMessage(from, { image: { url: rankcu }, caption: rankCu, contextInfo: { ...NkChannelKk, mentionedJid: mentionsCu } }, { quoted: yt });
break;

case 'rankbct':
case 'rankbuceta':
case 'rankbucetudas':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
let mentionsBCT = [];
let rankBCT = `🔥 RANK DAS 5 MAIS BUCETUDAS DO GRUPO\n\n`;
for (let i = 0; i < 5; i++) {
const membro = somembros[Math.floor(Math.random() * somembros.length)];
mentionsBCT.push(membro);
rankBCT += `• ${i + 1}° ${Math.floor(Math.random() * 100)}% - @${membro.split('@')[0]}\n\n`;
}
await yuta.sendMessage(from, { image: { url: rankbct }, caption: rankBCT, contextInfo: { ...NkChannelKk, mentionedJid: mentionsBCT } }, { quoted: yt });
break;

case 'rankgado':
case 'rankgados':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
let mentionsGado = [];
let rankGado = `🏆 TOP 5 MAIS GADOS DO GRUPO\n\n`;
for (let i = 0; i < 5; i++) {
const membro = somembros[Math.floor(Math.random() * somembros.length)];
mentionsGado.push(membro);
rankGado += `• ${i + 1}° ${Math.floor(Math.random() * 100)}% - @${membro.split('@')[0]}\n\n`;
}
await yuta.sendMessage(from, { image: { url: rnkgado }, caption: rankGado, contextInfo: { ...NkChannelKk, mentionedJid: mentionsGado } }, { quoted: yt });
break;

case 'rankcorno':
case 'rankcornos':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
let mentionsCorno = [];
let rankCorno = `🐂 TOP 5 MAIS CHIFRUDOS DO GRUPO\n\n`;
for (let i = 0; i < 5; i++) {
const membro = somembros[Math.floor(Math.random() * somembros.length)];
mentionsCorno.push(membro);
rankCorno += `• ${i + 1}° ${Math.floor(Math.random() * 100)}% - @${membro.split('@')[0]}\n\n`;
}
await yuta.sendMessage(from, { image: { url: rnkcorno }, caption: rankCorno, contextInfo: { ...NkChannelKk, mentionedJid: mentionsCorno } }, { quoted: yt });
break;

case 'surubao':
case 'suruba':
await reagir(from, "😈");
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
if (!q)
return reply(mess.niReply0791());
if (Number(q) > 1000)
return reply(mess.niReply0792());
const frasesSuruba = [
`tá querendo relações sexuais a ${q}, topa?`,
`quer que ${q} pessoas venham de chicote, algema e corda de alpinista.`,
`quer que ${q} pessoas der tapa na cara, lhe chame de cachorra e fud3r bem gostosinho...`
];
const fraseEscolhidakk = frasesSuruba[Math.floor(Math.random() * frasesSuruba.length)];
let mentionsSuruba = [sender];
let msgSuruba = `😝 @${sender.split('@')[0]} ${fraseEscolhidakk}\n\n`;
for (let i = 0; i < q; i++) {
const membro = somembros[Math.floor(Math.random() * somembros.length)];
mentionsSuruba.push(membro);
msgSuruba += `@${membro.split('@')[0]}\n`;
}
await yuta.sendMessage(from, { text: msgSuruba, contextInfo: { ...NkChannelKk, mentionedJid: mentionsSuruba } }, { quoted: yt });
break;

case 'rankgostosos':
case 'rankgostoso':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
let mentionsGostoso = [];
let rankGostoso = `🔥 RANK DOS 5 MAIS GOSTOSOS DO GRUPO\n\n`;
for (let i = 0; i < 5; i++) {
const membro = somembros[Math.floor(Math.random() * somembros.length)];
mentionsGostoso.push(membro);
rankGostoso += `• ${i + 1}° ${Math.floor(Math.random() * 100)}% - @${membro.split('@')[0]}\n\n`;
}
await yuta.sendMessage(from, { image: { url: rnkgostoso }, caption: rankGostoso, contextInfo: { ...NkChannelKk, mentionedJid: mentionsGostoso } }, { quoted: yt });
break;

case 'rankgostosas':
case 'rankgostosa':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
let mentionsGostosa = [];
let rankGostosa = `😏 RANK DAS 5 MAIS GOSTOSAS DO GRUPO\n\n`;
for (let i = 0; i < 5; i++) {
const membro = somembros[Math.floor(Math.random() * somembros.length)];
mentionsGostosa.push(membro);
rankGostosa += `• ${i + 1}° ${Math.floor(Math.random() * 100)}% - @${membro.split('@')[0]}\n\n`;
}
await yuta.sendMessage(from, { image: { url: rnkgostosa }, caption: rankGostosa, contextInfo: { ...NkChannelKk, mentionedJid: mentionsGostosa } }, { quoted: yt });
break;

case 'ranknazista':
case 'ranknazistas':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
let mentionsNazista = [];
let rankNazista = `💂‍♂ RANK DOS 5 MAIS NAZISTAS DO GRUPO 卐\n\n`;
for (let i = 0; i < 5; i++) {
const membro = somembros[Math.floor(Math.random() * somembros.length)];
mentionsNazista.push(membro);
rankNazista += `• ${i + 1}° ${Math.floor(Math.random() * 100)}% - @${membro.split('@')[0]}\n\n`;
}
await yuta.sendMessage(from, { image: { url: rnknazista }, caption: rankNazista, contextInfo: { ...NkChannelKk, mentionedJid: mentionsNazista } }, { quoted: yt });
break;

case 'rankotaku':
case 'rankotakus':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
let mentionsOtaku = [];
let rankOtaku = `㊙ RANK DOS 5 MAIS OTAKUS DO GRUPO\n\n`;
for (let i = 0; i < 5; i++) {
const membro = somembros[Math.floor(Math.random() * somembros.length)];
mentionsOtaku.push(membro);
rankOtaku += `• ${i + 1}° ${Math.floor(Math.random() * 100)}% - @${membro.split('@')[0]}\n\n`;
}
await yuta.sendMessage(from, { image: { url: rnkotaku }, caption: rankOtaku, contextInfo: { ...NkChannelKk, mentionedJid: mentionsOtaku } }, { quoted: yt });
break;

case 'ranksigma':
case 'ranksigmas':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
let mentionsSigma = [];
let rankSigma = `🗿🍷 RANK DOS 5 MAIS SIGMAS DO GRUPO\n\n`;
for (let i = 0; i < 5; i++) {
const membro = somembros[Math.floor(Math.random() * somembros.length)];
mentionsSigma.push(membro);
rankSigma += `• ${i + 1}° ${Math.floor(Math.random() * 100)}% - @${membro.split('@')[0]}\n\n`;
}
await yuta.sendMessage(from, { image: { url: rnksigma }, caption: rankSigma, contextInfo: { ...NkChannelKk, mentionedJid: mentionsSigma } }, { quoted: yt });
break;

case 'rankbeta':
case 'rankbetas':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
let mentionsBeta = [];
let rankBeta = `😂 RANK DOS 5 MAIS BETAS DO GRUPO\n\n`;
for (let i = 0; i < 5; i++) {
const membro = somembros[Math.floor(Math.random() * somembros.length)];
mentionsBeta.push(membro);
rankBeta += `• ${i + 1}° ${Math.floor(Math.random() * 100)}% - @${membro.split('@')[0]}\n\n`;
}
await yuta.sendMessage(from, { image: { url: rnkbeta }, caption: rankBeta, contextInfo: { ...NkChannelKk, mentionedJid: mentionsBeta } }, { quoted: yt });
break;

case 'rankbaiano':
case 'rankbaianos':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
let mentionsBaiano = [];
let rankBaiano = `💤 RANK DOS 5 MAIS BAIANOS DO GRUPO\n\n`;
for (let i = 0; i < 5; i++) {
const membro = somembros[Math.floor(Math.random() * somembros.length)];
mentionsBaiano.push(membro);
rankBaiano += `• ${i + 1}° ${Math.floor(Math.random() * 100)}% - @${membro.split('@')[0]}\n\n`;
}
await yuta.sendMessage(from, { image: { url: rnkbaiano }, caption: rankBaiano, contextInfo: { ...NkChannelKk, mentionedJid: mentionsBaiano } }, { quoted: yt });
break;

case 'rankbaiana':
case 'rankbaianas':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
let mentionsBaiana = [];
let rankBaiana = `😴 RANK DAS 5 MAIS BAIANAS DO GRUPO\n\n`;
for (let i = 0; i < 5; i++) {
const membro = somembros[Math.floor(Math.random() * somembros.length)];
mentionsBaiana.push(membro);
rankBaiana += `• ${i + 1}° ${Math.floor(Math.random() * 100)}% - @${membro.split('@')[0]}\n\n`;
}
await yuta.sendMessage(from, { image: { url: rnkbaiana }, caption: rankBaiana, contextInfo: { ...NkChannelKk, mentionedJid: mentionsBaiana } }, { quoted: yt });
break;

case 'rankcarioca':
case 'rankcariocas':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
let mentionsCarioca = [];
let rankCarioca = `🔫 RANK DOS 5 MAIS CARIOCAS DO GRUPO\n\n`;
for (let i = 0; i < 5; i++) {
const membro = somembros[Math.floor(Math.random() * somembros.length)];
mentionsCarioca.push(membro);
rankCarioca += `• ${i + 1}° ${Math.floor(Math.random() * 100)}% - @${membro.split('@')[0]}\n\n`;
}
await yuta.sendMessage(from, { image: { url: rnkcarioca }, caption: rankCarioca, contextInfo: { ...NkChannelKk, mentionedJid: mentionsCarioca } }, { quoted: yt });
break;

case 'ranklouco':
case 'rankloucos':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
let mentionsLouco = [];
let rankLouco = `💀 RANK DOS 5 MAIS LOUCOS DO GRUPO\n\n`;
for (let i = 0; i < 5; i++) {
const membro = somembros[Math.floor(Math.random() * somembros.length)];
mentionsLouco.push(membro);
rankLouco += `• ${i + 1}° ${Math.floor(Math.random() * 100)}% - @${membro.split('@')[0]}\n\n`;
}
await yuta.sendMessage(from, { image: { url: rnklouco }, caption: rankLouco, contextInfo: { ...NkChannelKk, mentionedJid: mentionsLouco } }, { quoted: yt });
break;

case 'ranklouca':
case 'rankloucas':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
let mentionsLouca = [];
let rankLouca = `💀 RANK DAS 5 MAIS LOUCAS DO GRUPO\n\n`;
for (let i = 0; i < 5; i++) {
const membro = somembros[Math.floor(Math.random() * somembros.length)];
mentionsLouca.push(membro);
rankLouca += `• ${i + 1}° ${Math.floor(Math.random() * 100)}% - @${membro.split('@')[0]}\n\n`;
}
await yuta.sendMessage(from, { image: { url: rnklouca }, caption: rankLouca, contextInfo: { ...NkChannelKk, mentionedJid: mentionsLouca } }, { quoted: yt });
break;

case 'ranksafada':
case 'ranksafadas':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
let mentionsSafada = [];
let rankSafada = `🔥 RANK DAS 5 MAIS SAFADINHAS DO GRUPO\n\n`;
for (let i = 0; i < 5; i++) {
const membro = somembros[Math.floor(Math.random() * somembros.length)];
mentionsSafada.push(membro);
rankSafada += `• ${i + 1}° ${Math.floor(Math.random() * 100)}% - @${membro.split('@')[0]}\n\n`;
}
await yuta.sendMessage(from, { image: { url: rnksafada }, caption: rankSafada, contextInfo: { ...NkChannelKk, mentionedJid: mentionsSafada } }, { quoted: yt });
break;

case 'ranksafado':
case 'ranksafados':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
let mentionsSafado = [];
let rankSafado = `🥵 RANK DOS 5 MAIS SAFADINHOS DO GRUPO\n\n`;
for (let i = 0; i < 5; i++) {
const membro = somembros[Math.floor(Math.random() * somembros.length)];
mentionsSafado.push(membro);
rankSafado += `• ${i + 1}° ${Math.floor(Math.random() * 100)}% - @${membro.split('@')[0]}\n\n`;
}
await yuta.sendMessage(from, { image: { url: rnksafado }, caption: rankSafado, contextInfo: { ...NkChannelKk, mentionedJid: mentionsSafado } }, { quoted: yt });
break;

case 'rankmacaco':
case 'rankmacacos':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
let mentionsMacaco = [];
let rankMacaco = `🐒 RANK DOS 5 MAIS MACACOS DO GRUPO\n\n`;
for (let i = 0; i < 5; i++) {
const membro = somembros[Math.floor(Math.random() * somembros.length)];
mentionsMacaco.push(membro);
rankMacaco += `• ${i + 1}° ${Math.floor(Math.random() * 100)}% - @${membro.split('@')[0]}\n\n`;
}
await yuta.sendMessage(from, { image: { url: rnkmacaco }, caption: rankMacaco, contextInfo: { ...NkChannelKk, mentionedJid: mentionsMacaco } }, { quoted: yt });
break;

case 'rankmacaca':
case 'rankmacacas':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
let mentionsMacaca = [];
let rankMacaca = `🙈 RANK DAS 5 MAIS MACACAS DO GRUPO\n\n`;
for (let i = 0; i < 5; i++) {
const membro = somembros[Math.floor(Math.random() * somembros.length)];
mentionsMacaca.push(membro);
rankMacaca += `• ${i + 1}° ${Math.floor(Math.random() * 100)}% - @${membro.split('@')[0]}\n\n`;
}
await yuta.sendMessage(from, { image: { url: rnkmacaca }, caption: rankMacaca, contextInfo: { ...NkChannelKk, mentionedJid: mentionsMacaca } }, { quoted: yt });
break;

case 'rankputa':
case 'rankputas':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
let mentionsPuta = [];
let rankPuta = `🔞 RANK DAS 5 MAIS PUTAS DO GRUPO\n\n`;
for (let i = 0; i < 5; i++) {
const membro = somembros[Math.floor(Math.random() * somembros.length)];
mentionsPuta.push(membro);
rankPuta += `• ${i + 1}° ${Math.floor(Math.random() * 100)}% - @${membro.split('@')[0]}\n\n`;
}
await yuta.sendMessage(from, { image: { url: rnkputa }, caption: rankPuta, contextInfo: { ...NkChannelKk, mentionedJid: mentionsPuta } }, { quoted: yt });
break;

case 'rankpau':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModobn)
return reply(mess.onlyGroupFun(prefix));
let mentionsPau = [];
let rankPau = `🍆 RANK DOS 5 MAIORES PAUS DO GRUPO\n\n`;
for (let i = 0; i < 5; i++) {
const membro = somembros[Math.floor(Math.random() * somembros.length)];
mentionsPau.push(membro);
rankPau += `• ${i + 1}° ${Math.floor(Math.random() * 100)}cm - @${membro.split('@')[0]}\n\n`;
}
await yuta.sendMessage(from, { image: { url: rnkpau }, caption: rankPau, contextInfo: { ...NkChannelKk, mentionedJid: mentionsPau } }, { quoted: yt });
break;

case 'contador':
case 'contadormsg':
case 'modocontador':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (dataGp[0].contadorMsg) {
dataGp[0].contadorMsg = false;
setGp(dataGp);
reply(mess.niReply0793());
}
else {
dataGp[0].contadorMsg = true;
setGp(dataGp);
reply(mess.niReply0794());
}
break;

case 'atividade':
case 'atividades': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins && !issupre && !ischyt)
return reply(mess.onlyAdmins());
if (!contadorAtivo())
return avisoContadorOff();
const groupIndex = getGroupIndex(from);
if (groupIndex === -1 || !countMessage[groupIndex]?.numbers?.length)
return reply(mess.niReply0795());
let mentionsList = [];
let texto = `- 「 *𝐀𝐓𝐈𝐕𝐈𝐃𝐀𝐃𝐄𝐒 𝐃𝐎𝐒 𝐌𝐄𝐌𝐁𝐑𝐎𝐒* 」\n\n`;
for (const u of countMessage[groupIndex].numbers) {
mentionsList.push(u.id);
texto += mess.atividade(u);
}
await yuta.sendMessage(from, { text: texto, contextInfo: { ...NkChannelKk, mentionedJid: mentionsList } }, { quoted: yt });
break;
}
case 'rankativo':
case 'rankativos': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!contadorAtivo())
return avisoContadorOff();
const groupIndex = getGroupIndex(from);
if (groupIndex === -1 || !countMessage[groupIndex]?.numbers?.length)
return reply(mess.niReply0796());
const sorted = [...countMessage[groupIndex].numbers].sort((a, b) => ((b.messages || 0) + (b.cmd_messages || 0) + (b.figus || 0)) -
((a.messages || 0) + (a.cmd_messages || 0) + (a.figus || 0)));
let mentionsList = [];
let texto = `- 「 *𝐑𝐀𝐍𝐊 𝐀𝐓𝐈𝐕𝐎𝐒 𝐃𝐎 𝐂𝐇𝐀𝐓* 」\n\n`;
for (let i = 0; i < Math.min(5, sorted.length); i++) {
const u = sorted[i];
mentionsList.push(u.id);
texto += mess.rankativo(u, i);
}
await yuta.sendMessage(from, { text: texto, contextInfo: { ...NkChannelKk, mentionedJid: mentionsList } }, { quoted: yt });
break;
}
case 'rankinativo':
case 'rankinativos': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!contadorAtivo())
return avisoContadorOff();
const groupIndex = getGroupIndex(from);
if (groupIndex === -1 || !countMessage[groupIndex]?.numbers?.length)
return reply(mess.niReply0797());
const inativos = countMessage[groupIndex].numbers
.filter(u => (u.messages || 0) <= 1)
.sort((a, b) => ((b.messages || 0) + (b.cmd_messages || 0)) - ((a.messages || 0) + (a.cmd_messages || 0)));
if (!inativos.length)
return reply(mess.niReply0798());
let mentionsList = [];
let texto = `- 「 *𝐈𝐍𝐀𝐓𝐈𝐕𝐎𝐒 𝐃𝐎 𝐆𝐑𝐔𝐏𝐎* 」\n\n`;
for (let i = 0; i < Math.min(5, inativos.length); i++) {
const u = inativos[i];
mentionsList.push(u.id);
texto += mess.rankinativo(u, i);
}
await yuta.sendMessage(from, { text: texto, contextInfo: { ...NkChannelKk, mentionedJid: mentionsList } }, { quoted: yt });
break;
}
case 'check':
case 'checkativo': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!contadorAtivo())
return avisoContadorOff();
const groupIndex = getGroupIndex(from);
if (groupIndex === -1 || !countMessage[groupIndex]?.numbers?.length)
return reply(mess.niReply0799());
if (!menc_os2 || Array.isArray(menc_os2) || menc_os2.includes(','))
return reply(mess.niReply0800());
const userIndex = countMessage[groupIndex].numbers.findIndex(u => u.id === menc_os2);
if (userIndex >= 0) {
const u = countMessage[groupIndex].numbers[userIndex];
await yuta.sendMessage(from, { text: mess.check(u), contextInfo: { ...NkChannelKk, mentionedJid: [menc_os2] } }, { quoted: yt });
}
else {
await yuta.sendMessage(from, { text: mess.niText1363({ e0: () => (menc_os2.split('@')[0]) }), contextInfo: { ...NkChannelKk, mentionedJid: [menc_os2] } }, { quoted: yt });
}
break;
}
case 'me':
case 'mecheck':
case 'checkme': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!contadorAtivo())
return avisoContadorOff();
const groupIndex = getGroupIndex(from);
if (groupIndex === -1 || !countMessage[groupIndex]?.numbers?.length)
return reply(mess.niReply0801());
const userIndex = countMessage[groupIndex].numbers.findIndex(u => u.id === sender);
if (userIndex >= 0) {
const u = countMessage[groupIndex].numbers[userIndex];
await yuta.sendMessage(from, { text: mess.checkme(u), contextInfo: { ...NkChannelKk, mentionedJid: [sender] } }, { quoted: yt });
}
else {
await yuta.sendMessage(from, { text: mess.niText1364({ e0: () => (sender.split('@')[0]) }), contextInfo: { ...NkChannelKk, mentionedJid: [sender] } }, { quoted: yt });
}
break;
}
case 'inativos':
case 'inativo': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!contadorAtivo())
return avisoContadorOff();
if (!q || q.match(/[a-z]/i))
return reply(mess.niReply0802({ e0: () => (prefix + command), prefix }));
const groupIndex = getGroupIndex(from);
if (groupIndex === -1 || !countMessage[groupIndex]?.numbers?.length)
return reply(mess.niReply0803({ prefix }));
const limite = Number(q.trim());
const inativos = countMessage[groupIndex].numbers
.filter(u => (u.messages || 0) <= limite &&
(u.cmd_messages || 0) <= limite &&
(u.figus || 0) <= limite)
.map(u => u.id);
if (!inativos.length)
return reply(mess.niReply0804({ e0: () => (limite), prefix }));
let texto = `Usuários com *${limite}* mensagens ou menos:\n–\n`;
inativos.forEach((id, i) => texto += `*${i + 1}.* @${id.split('@')[0]}\n`);
await yuta.sendMessage(from, {
text: texto.trim(),
contextInfo: { ...NkChannelKk, mentionedJid: normalizarLista(inativos) },
mentions: normalizarLista(inativos)
}, { quoted: yt });
break;
}
case 'banghost': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
if (!contadorAtivo())
return avisoContadorOff();
if (!q || q.match(/[a-z]/i) || q.length > 3)
return reply(mess.niReply0805({ e0: () => (prefix + command), prefix }));
const limite = Number(q.trim());
const ind = getGroupIndex(from);
if (ind === -1 || !countMessage[ind]?.numbers?.length)
return reply(mess.niReply0806({ prefix }));
const groupData = countMessage[ind];
const groupMemberIds = groupMembers.map(m => jidNormalizedUser(m.id || m.jid || m));
const membersToRemove = groupData.numbers
.filter(u => {
const msgs = u.messages || 0;
const cmds = u.cmd_messages || 0;
const figus = u.figus || 0;
const imgs = u.imagens || 0;
const vids = u.videos || 0;
const auds = u.audios || 0;
const docs = u.documentos || 0;
return msgs <= limite && cmds <= limite && figus <= limite && imgs <= limite && vids <= limite && auds <= limite && docs <= limite;
})
.filter(u => !groupAdmins.includes(u.id))
.filter(u => !numerodono.includes(u.id))
.filter(u => u.id !== botNumber)
.filter(u => groupMemberIds.includes(u.id))
.map(u => u.id);
if (!membersToRemove.length)
return reply(mess.niReply0807({ e0: () => (limite), prefix }));
try {
await yuta.groupParticipantsUpdate(from, membersToRemove, 'remove');
groupData.numbers = groupData.numbers.filter(u => !membersToRemove.includes(u.id));
saveCountMessage();
reply(mess.niReply0808({ e0: () => (membersToRemove.length), e1: () => (groupName), e2: () => (limite), prefix }));
}
catch (err) {
console.error(err);
reply(mess.error());
}
break;
}
case 'limpargp':
case 'limpargp-cnt':
case 'limpardb':
{
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins && !SoDono)
return reply(mess.onlyAdmins());
if (!contadorAtivo())
return avisoContadorOff();
const removidos = limparContadorUsuariosFora(from, groupMembers);
saveCountMessage();
if (removidos <= 0)
return reply(mess.niReply0809());
reply(mess.niReply0810({ e0: () => (removidos) }));
}
break;

case 'addmsg': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!SoDono && !isnit && !issupre && !ischyt)
return reply(mess.onlyOwner());
if (!contadorAtivo())
return avisoContadorOff();
const txt = budy.trim();
const barra = txt.indexOf('|');
if (barra === -1)
return reply(mess.niReply0811({ e0: () => (prefix + command) }));
let alvo;
const ctx = info.message?.extendedTextMessage?.contextInfo;
const antesBarra = txt.slice(0, barra).trim();
let alvoDigitado = antesBarra;
const cmdComPrefixo = `${prefix}${command}`;
if (alvoDigitado.toLowerCase().startsWith(cmdComPrefixo.toLowerCase()))
alvoDigitado = alvoDigitado.slice(cmdComPrefixo.length).trim();
else if (alvoDigitado.toLowerCase().startsWith(String(command).toLowerCase()))
alvoDigitado = alvoDigitado.slice(String(command).length).trim();

if (ctx?.mentionedJid?.length) {
alvo = normalizarMencaoGrupo(ctx.mentionedJid[0]);
} else if (alvoDigitado) {
const numero = alvoDigitado.replace(/\D/g, '');
if (numero.length >= 10 && numero.length <= 15)
alvo = normalizarMencaoGrupo(`${numero}@s.whatsapp.net`);
}
if (!alvo)
alvo = sender;
alvo = normalizarMencaoGrupo(alvo);
const valoresTxt = txt.slice(barra + 1).trim();
if (!valoresTxt)
return reply(mess.niReply0812());
const grupo = countMessage.find(g => g.groupId === from);
if (!grupo)
return reply(mess.niReply0813());
const alvoN = jidNum(alvo);
const user = grupo.numbers.find(u => u.id === alvo || normalizarMencaoGrupo(u.id) === alvo || (alvoN && jidNum(u.id) === alvoN));
if (!user)
return reply(mess.niReply0814());
const mapa = {
msg: 'messages',
fig: 'figus',
img: 'imagens',
vid: 'videos',
audio: 'audios',
doc: 'documentos',
cmd: 'cmd_messages'
};
const adicionados = [];
const invalidos = [];
for (const x of valoresTxt.split(/ +/)) {
const m = x.match(/^(\d+)(msg|fig|img|vid|audio|doc|cmd)$/i);
if (!m) {
invalidos.push(x);
continue;
}
const campo = mapa[m[2].toLowerCase()];
user[campo] = (user[campo] || 0) + Number(m[1]);
adicionados.push(x);
}
saveCountMessage();
const alvoTxt = mentionNum(alvo);
const resp = mess.addmsgSucesso({ alvoTxt, adicionados, invalidos });
await yuta.sendMessage(from, { text: resp, contextInfo: { ...NkChannelKk, mentionedJid: [alvo] } }, { quoted: yt });
break;
}
case 'tirardb':
case 'tirar_docnt': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!SoDono && !isnit && !issupre && !ischyt)
return reply(mess.onlyOwner());
if (!contadorAtivo())
return avisoContadorOff();
const groupIndex = getGroupIndex(from);
if (groupIndex === -1 || !countMessage[groupIndex]?.numbers?.length)
return reply(mess.niReply0815());
let alvo;
if (info.message?.extendedTextMessage?.contextInfo?.mentionedJid?.length) {
alvo = info.message.extendedTextMessage.contextInfo.mentionedJid[0];
}
else if (args[0]) {
const num = args[0].replace(/\D/g, '');
if (!num)
return reply(mess.niReply0816());
alvo = num + '@s.whatsapp.net';
}
else {
return reply(mess.niReply0817({ e0: () => (prefix + command) }));
}
alvo = jidNormalizedUser(alvo);
const userIndex = countMessage[groupIndex].numbers.findIndex(u => {
const ids = [u.id, u.phoneNumber, u.jid, u.participant, u.lid].filter(Boolean).map(jidNormalizedUser);
return ids.includes(alvo);
});
if (userIndex === -1)
return reply(mess.niReply0818());
countMessage[groupIndex].numbers.splice(userIndex, 1);
saveCountMessage();
await yuta.sendMessage(from, {
text: mess.niText1365({ e0: () => (alvo.split('@')[0]) }),
contextInfo: { mentionedJid: [alvo], ...NkChannelKk }
}, { quoted: yt });
break;
}
case 'limparcontador':
case 'limparcnt':
case 'limparcontadores':
{
if (!DonoOficial && !SoDono)
return reply(mess.onlyOwner());
let totalGrupos = 0;
let totalRemovidos = 0;
const norm = (x = '') => jidNormalizedUser(String(x || '').trim());
const soNumero = (x = '') => String(x || '').replace(/\D/g, '');
const idsMembroAtual = (m = {}) => {
let arr = [m.id, m.phoneNumber, m.jid, m.participant, m.lid].filter(Boolean);
return arr.flatMap(v => [norm(v), soNumero(v)]).filter(Boolean);
};
const idsUserContador = (u = {}) => {
let arr = [u.id, u.phoneNumber, u.jid, u.participant, u.lid].filter(Boolean);
return arr.flatMap(v => [norm(v), soNumero(v)]).filter(Boolean);
};
for (let i = 0; i < countMessage.length; i++) {
try {
let gp = countMessage[i];
let gpId = gp.groupId || gp.id || gp.jid;
if (!gpId || !Array.isArray(gp.numbers))
continue;
let metadata = await yuta.groupMetadata(gpId).catch(() => null);
if (!metadata?.participants?.length)
continue;
let membrosAtuais = new Set(metadata.participants.flatMap(idsMembroAtual));
let antes = gp.numbers.length;
gp.numbers = gp.numbers.filter(user => {
let idsUser = idsUserContador(user);
if (idsUser.length === 0)
return true;
return idsUser.some(id => membrosAtuais.has(id));
});
let removidos = antes - gp.numbers.length;
if (removidos > 0) {
totalGrupos++;
totalRemovidos += removidos;
}
}
catch (e) {
console.log(e);
}
}
saveCountMessage();
reply(mess.niReply0819({ e0: () => (totalGrupos), e1: () => (totalRemovidos) }));
}
break;



case 'adotar': {
    if (!isGroup) return reply(mess.onlyGroup());

    const especie = __AA_normalizar(args[0] || "");
    const alvo = __AA_jid(menc_os2 || "");
    const eu = __AA_jid(sender);

    const aliases = {
        cao: "cachorro",
        preguica: "preguica"
    };

    const animal = aliases[especie] || especie;
    const dados = __AA_especies[animal];

    if (!dados) {
        return reply(
            "🐾 Escolha uma espécie válida:\n\n" +
            "🐈 gato\n🐕 cachorro\n🐼 panda\n🦊 raposa\n" +
            "🦥 preguiça\n🐨 coala\n🐹 rato\n\n" +
            "Exemplo: " + prefix + "adotar gato @pessoa"
        );
    }

    if (!menc_os2 || !alvo) {
        return reply("🐾 Marque a pessoa que deseja adotar.\nExemplo: " + prefix + "adotar " + animal + " @pessoa");
    }

    if (alvo === eu)
        return reply("❌ Você não pode adotar a si mesmo.");

    if (alvo === __AA_jid(botNumber))
        return reply("❌ Você não pode adotar o próprio bot.");

    const relacoes = __AA_load();

    if (relacoes.some(r => __AA_jid(r.animal) === alvo))
        return reply("🐾 Essa pessoa já tem um dono no sistema de adoção animal.");

    const pedidos = __AA_limparPedidos();

    if (pedidos.some(p =>
        p.tipo === "adocao_animal" && __AA_jid(p.id) === alvo
    )) {
        return reply("⏳ Essa pessoa já possui um pedido de adoção animal pendente.");
    }

    const titulos = {
        gato: "🐈 *UM GATINHO ESTÁ À SUA ESPERA!*",
        cachorro: "🐕 *UM NOVO AMIGUINHO QUER VOCÊ!*",
        panda: "🐼 *UM PANDA QUER FAZER PARTE DA FAMÍLIA!*",
        raposa: "🦊 *UMA RAPOSINHA ESCOLHEU VOCÊ!*",
        preguica: "🦥 *UMA PREGUICINHA QUER UM LAR!*",
        coala: "🐨 *UM COALINHA QUER SEU CARINHO!*",
        rato: "🐹 *UM RATINHO QUER SER ADOTADO!*"
    };

    pedidos.push({
        tipo: "adocao_animal",
        id: alvo,
        remetente: eu,
        animal: animal,
        grupo: from,
        criadoEm: Date.now()
    });

    __PD_save(pedidos);

    await yuta.sendMessage(from, {
        text: titulos[animal] + "\n\n" +
            "🐾 @"+ __AA_num(alvo) +
            ", @"+ __AA_num(eu) +
            " quer adotar você como " + dados.nome + "!\n\n" +
            "💌 Responda *sim* para aceitar ou *não* para recusar.\n" +
            "⏳ O pedido expira em 5 minutos.",
        contextInfo: {
            ...NkChannelKk,
            mentionedJid: [alvo, eu]
        }
    }, { quoted: yt });
}
break;

case 'alimentar': {
    if (!isGroup) return reply(mess.onlyGroup());

    const dono = __AA_jid(sender);
    const relacoes = __AA_load().filter(r =>
        __AA_jid(r.dono) === dono
    );

    if (!relacoes.length) {
        return reply("🐾 Você ainda não adotou nenhum animal para alimentar.");
    }

    const alvoRaw = menc_os2 || "";
    const alvo = __AA_jid(alvoRaw);

    /* Alimentação por menção, resposta ou número */
    if (alvoRaw && alvo) {
        const relacao = relacoes.find(r =>
            __AA_jid(r.animal) === alvo
        );

        if (!relacao) {
            return reply(
                "❌ Esse animal não está registrado como seu.\n\n" +
                "Você só pode alimentar os animais que adotou."
            );
        }

        const db = __AL_load();
        const agora = Date.now();
        const registro = __AL_obter(db, alvo, agora);

        const fomeAntes = registro.fome;
        registro.fome = Math.min(100, registro.fome + 35);
        registro.atualizadoEm = agora;
        registro.ultimaAlimentacao = agora;
        registro.totalRefeicoes = Math.max(
            0,
            Number(registro.totalRefeicoes) || 0
        ) + 1;

        __AL_save(db);

        const dados = __AA_especies[relacao.especie];
        const nomeAnimal = dados?.nome || "animalzinho";
        const emoji = dados?.emoji || "🐾";
        const jidMencao = jidReal(alvo) || alvo;
        const numeroMencao = __AA_num(jidMencao);
        const recuperado = Math.round(registro.fome - fomeAntes);

        return await yuta.sendMessage(from, {
            text:
                "🍖 *ALIMENTAÇÃO REALIZADA!*\n\n" +
                emoji + " @" + numeroMencao +
                " recebeu uma refeição!\n\n" +
                "🍽️ Recuperou: +" + recuperado + "% de fome\n" +
                "📊 Fome: " + Math.round(registro.fome) + "%\n" +
                __AL_barra(registro.fome) + "\n\n" +
                __AL_status(registro.fome) + "\n\n" +
                "🐾 " + nomeAnimal + " agradece pelo carinho!",
            contextInfo: {
                ...NkChannelKk,
                mentionedJid: [...new Set([jidMencao, dono])]
            }
        }, { quoted: yt });
    }

    /* Menu de seleção dos animais */
    const modoPagina = String(args[0] || "").toLowerCase() === "pagina";
    const paginaPedida = modoPagina ? Number(args[1]) : 1;

    if (args.length && !modoPagina) {
        return reply(
            "🐾 Não consegui identificar o animal.\n" +
            "Marque alguém, responda à mensagem da pessoa ou use o menu."
        );
    }

    const db = __AL_load();

    const animais = relacoes.filter(r =>
        __AA_especies[r.especie] && __AA_jid(r.animal)
    );

    const porPagina = 8;
    const totalPaginas = Math.max(1, Math.ceil(animais.length / porPagina));

    const pagina = Number.isFinite(paginaPedida)
        ? Math.min(totalPaginas, Math.max(1, Math.floor(paginaPedida)))
        : 1;

    const inicio = (pagina - 1) * porPagina;
    const selecionados = animais.slice(inicio, inicio + porPagina);
    const agora = Date.now();

    const rows = [];
    const mencionados = [dono];

    for (const rel of selecionados) {
        const animal = __AA_jid(rel.animal);
        const dados = __AA_especies[rel.especie];
        const membro = buscarMembroPorJid(animal);
        const nomeParticipante = String(
            membro?.notify || membro?.name ||
            membro?.verifiedName || membro?.pushName || ""
        ).trim();
        const identificacao = nomeParticipante || ("@" + __AA_num(animal));
        const registro = __AL_obter(db, animal, agora);

        mencionados.push(animal);

        rows.push({
            title: dados.emoji + " " + dados.nome,
            description:
                identificacao +
                " • Fome: " + Math.round(registro.fome) + "%",
            id: prefix + "alimentar " + __AA_num(animal)
        });
    }

    if (pagina > 1) {
        rows.push({
            title: "⬅️ Página anterior",
            description: "Voltar aos animais anteriores",
            id: prefix + "alimentar pagina " + (pagina - 1)
        });
    }

    if (pagina < totalPaginas) {
        rows.push({
            title: "➡️ Próxima página",
            description: "Ver mais animais",
            id: prefix + "alimentar pagina " + (pagina + 1)
        });
    }

    __AL_save(db);

    await sendLikeInnovators(yuta, from, {
        text:
            "🍖 *CENTRAL DE ALIMENTAÇÃO ANIMAL*\n\n" +
            "Escolha qual animal deseja alimentar.\n\n" +
            "🐾 Seus animais: " + animais.length + "\n" +
            "📄 Página: " + pagina + "/" + totalPaginas + "\n\n" +
            "A fome diminui 5% por hora.\n" +
            "Cada refeição recupera até 35%.",
        footer: "☠️ KILLUA ZOLDYCK • PETS",
        interactiveButtons: [{
            name: "single_select",
            buttonParamsJson: JSON.stringify({
                title: "🍖 ESCOLHER ANIMAL",
                sections: [{
                    title: "SEUS ANIMAIS",
                    rows
                }]
            })
        }],
        contextInfo: {
            ...NkChannelKk,
            mentionedJid: [...new Set(mencionados)]
        }
    }, { quoted: yt });
}
break;

case 'animais': {
    if (!isGroup) return reply(mess.onlyGroup());

    const eu = __AA_jid(sender);
    const relacoes = __AA_load().filter(r =>
        __AA_jid(r.dono) === eu
    );

    if (!relacoes.length)
        return reply("🐾 Você ainda não adotou nenhum animal.");

    const linhas = [];
    const mencionados = [];

    for (const rel of relacoes) {
        const dados = __AA_especies[rel.especie];
        if (!dados) continue;

        const animal = __AA_jid(rel.animal);
        linhas.push(dados.emoji + " " + dados.nome + ": @" + __AA_num(animal));
        if (animal) mencionados.push(animal);
    }

    if (!linhas.length)
        return reply("🐾 Você ainda não adotou nenhum animal.");

    await yuta.sendMessage(from, {
        text: "🐾 *SEUS ANIMAIS ADOTADOS*\n\n" + linhas.join("\n"),
        contextInfo: {
            ...NkChannelKk,
            mentionedJid: mencionados
        }
    }, { quoted: yt });
}
break;

case 'cadelinha': {
    if (!isGroup) return reply(mess.onlyGroup());

    const alvo = __CD_jid(menc_os2 || "");
    const eu = __CD_jid(sender);

    if (!menc_os2 || !alvo) return reply("🐾 Marque alguém para fazer o pedido!");
    if (alvo === eu) return reply("❌ Você não pode escolher a si mesmo.");
    if (__CD_jid(botNumber) === alvo) return reply("❌ Você não pode escolher o próprio bot.");

    const pedidos = __CD_limparPedidos();
    const relacoes = __CD_load();

    if (relacoes.some(r => __CD_jid(r.cadelinha) === alvo))
        return reply("🐾 Essa pessoa já tem um dono.");

    if (pedidos.some(p => p.tipo === "cadelinha" && __CD_jid(p.id) === alvo))
        return reply("⏳ Essa pessoa já tem um pedido de cadelinha pendente.");

    pedidos.push({
        tipo: "cadelinha",
        id: alvo,
        remetente: eu,
        grupo: from,
        criadoEm: Date.now()
    });

    __PD_save(pedidos);

    await yuta.sendMessage(from, {
        text: `🐾 *PEDIDO DE CADELINHA*

@${__CD_num(alvo)}, @${__CD_num(sender)} quer que você seja sua cadelinha!

Responda *sim* para aceitar ou *não* para recusar. O pedido expira em 5 minutos.`,
        contextInfo: {
            ...NkChannelKk,
            mentionedJid: [alvo, eu]
        }
    }, { quoted: yt });
}
break;

case 'cadelinhas': {
    if (!isGroup) return reply(mess.onlyGroup());

    const eu = __CD_jid(sender);
    const minhas = __CD_load().filter(r => __CD_jid(r.dono) === eu);

    if (!minhas.length)
        return reply("🐾 Você ainda não tem nenhuma cadelinha.");

    const lista = minhas.map((r, i) =>
        `${i + 1}. @${__CD_num(r.cadelinha)}`
    ).join("\n");

    await yuta.sendMessage(from, {
        text: `🐾 *SUAS CADELINHAS*

${lista}`,
        contextInfo: {
            ...NkChannelKk,
            mentionedJid: minhas.map(r => __CD_jid(r.cadelinha))
        }
    }, { quoted: yt });
}
break;

case 'meudono':
case 'minhadona': {
    if (!isGroup) return reply(mess.onlyGroup());

    const eu = __AA_jid(sender);
    const relacoesCadelinha = __CD_load().filter(r =>
        __CD_jid(r.cadelinha) === eu
    );
    const relacoesAnimais = __AA_load().filter(r =>
        __AA_jid(r.animal) === eu
    );

    if (!relacoesCadelinha.length && !relacoesAnimais.length)
        return reply("🐾 Você ainda não tem um dono.");

    const linhas = [];
    const mencionados = [];

    for (const rel of relacoesCadelinha) {
        const dono = __CD_jid(rel.dono);
        linhas.push("🐶 Você é a cadelinha de @" + __CD_num(dono) + ".");
        if (dono) mencionados.push(dono);
    }

    for (const rel of relacoesAnimais) {
        const dados = __AA_especies[rel.especie];
        if (!dados) continue;

        const dono = __AA_jid(rel.dono);
        linhas.push(dados.emoji + " Você é " + dados.nome + " de @" + __AA_num(dono) + ".");
        if (dono) mencionados.push(dono);
    }

    if (!linhas.length)
        return reply("🐾 Você ainda não tem um dono.");

    await yuta.sendMessage(from, {
        text: "💞 *SUAS RELAÇÕES*\n\n" + linhas.join("\n"),
        contextInfo: {
            ...NkChannelKk,
            mentionedJid: [...new Set(mencionados)]
        }
    }, { quoted: yt });
}
break;

case 'libertar': {
    if (!isGroup) return reply(mess.onlyGroup());

    const alvo = __CD_jid(menc_os2 || "");
    const eu = __CD_jid(sender);

    if (!menc_os2 || !alvo)
        return reply("🐾 Marque a cadelinha que deseja libertar.");

    const relacoes = __CD_load();
    const idx = relacoes.findIndex(r =>
        __CD_jid(r.dono) === eu && __CD_jid(r.cadelinha) === alvo
    );

    if (idx === -1)
        return reply("❌ Essa pessoa não é sua cadelinha.");

    relacoes.splice(idx, 1);
    __CD_save(relacoes);

    await yuta.sendMessage(from, {
        text: `🕊️ @${__CD_num(alvo)} foi libertada por @${__CD_num(sender)}!`,
        contextInfo: {
            ...NkChannelKk,
            mentionedJid: [alvo, eu]
        }
    }, { quoted: yt });
}
break;

case 'abandonar': {
    if (!isGroup) return reply(mess.onlyGroup());

    const eu = __CD_jid(sender);
    const relacoes = __CD_load();
    const idx = relacoes.findIndex(r => __CD_jid(r.cadelinha) === eu);

    if (idx === -1)
        return reply("🐾 Você não tem um dono para abandonar.");

    const dono = __CD_jid(relacoes[idx].dono);
    relacoes.splice(idx, 1);
    __CD_save(relacoes);

    await yuta.sendMessage(from, {
        text: `💔 @${__CD_num(sender)} abandonou @${__CD_num(dono)} e agora está livre!`,
        contextInfo: {
            ...NkChannelKk,
            mentionedJid: [eu, dono]
        }
    }, { quoted: yt });
}
break;

case 'libertaranimal': {
    if (!isGroup) return reply(mess.onlyGroup());

    const dono = __AA_jid(sender);
    const alvo = __AA_jid(menc_os2 || "");

    if (!menc_os2 || !alvo)
        return reply("🐾 Marque o animal que deseja libertar.");

    const relacoes = __AA_load();
    const idx = relacoes.findIndex(r =>
        __AA_jid(r.dono) === dono && __AA_jid(r.animal) === alvo
    );

    if (idx === -1)
        return reply("❌ Essa pessoa não é um animal adotado por você.");

    const relacao = relacoes[idx];
    const dados = __AA_especies[relacao.especie];

    relacoes.splice(idx, 1);
    __AA_save(relacoes);

    await yuta.sendMessage(from, {
        text: "🕊️ *ADOÇÃO ENCERRADA!*\n\n" +
            (dados?.emoji || "🐾") + " @" + __AA_num(alvo) +
            " foi libertado por @" + __AA_num(dono) + " e agora está livre!",
        contextInfo: {
            ...NkChannelKk,
            mentionedJid: [alvo, dono]
        }
    }, { quoted: yt });
}
break;

case 'abandonaranimal': {
    if (!isGroup) return reply(mess.onlyGroup());

    const animal = __AA_jid(sender);
    const relacoes = __AA_load();
    const idx = relacoes.findIndex(r =>
        __AA_jid(r.animal) === animal
    );

    if (idx === -1)
        return reply("🐾 Você não tem uma adoção animal para abandonar.");

    const relacao = relacoes[idx];
    const dono = __AA_jid(relacao.dono);
    const dados = __AA_especies[relacao.especie];

    relacoes.splice(idx, 1);
    __AA_save(relacoes);

    await yuta.sendMessage(from, {
        text: "💔 *ADOÇÃO ENCERRADA!*\n\n" +
            (dados?.emoji || "🐾") + " @" + __AA_num(sender) +
            " deixou de ser " + (dados?.nome || "animalzinho") +
            " de @" + __AA_num(dono) + " e agora está livre.",
        contextInfo: {
            ...NkChannelKk,
            mentionedJid: [animal, dono]
        }
    }, { quoted: yt });
}
break;

case 'divorcio':
case 'divórcio':
{
if (!isGroup)
return reply(mess.onlyGroup());

if (!menc_os2)
return reply("💔 Marque seu cônjuge para solicitar o divórcio.");

const namoro1 = __NM_load();
const namoro2 = __PD_load();
const eu = __jid(sender);
const alvo = __jid(menc_os2);

if (alvo === eu)
return reply("❌ Você não pode solicitar divórcio de si mesmo.");

const rel = __getRelacao(sender, namoro1);

if (!rel || rel.casados !== true)
return reply("💔 Você precisa estar casado para solicitar o divórcio.");

const parceiro = __jid(rel.usu1) === eu
? __jid(rel.usu2)
: __jid(rel.usu1);

if (parceiro !== alvo)
return reply("❌ Você só pode solicitar divórcio do seu cônjuge.");

if (namoro2.some(p =>
p.tipo === "divorcio" &&
(
(__jid(p.id) === alvo && __jid(p.remetente) === eu) ||
(__jid(p.id) === eu && __jid(p.remetente) === alvo)
)
))
return reply("⏳ Já existe um pedido de divórcio pendente entre vocês.");

namoro2.push({
tipo: "divorcio",
id: alvo,
remetente: eu,
grupo: from,
criadoEm: Date.now()
});
__PD_save(namoro2);

await yuta.sendMessage(from, {
text: `💔 *PEDIDO DE DIVÓRCIO*

@${__num(eu)} está solicitando o divórcio de @${__num(alvo)}.

@${__num(alvo)}, responda *SIM* para confirmar ou *NÃO* para recusar.

👨‍👩‍👧‍👦 Os registros dos filhos e da família serão preservados.`,
contextInfo: {
...NkChannelKk,
mentionedJid: [eu, alvo]
}
}, { quoted: yt });
}
break;

case 'seramante':
{
    if (!isGroup)
        return reply("❤️‍🔥 Use este comando em um grupo, marcando uma pessoa casada.");

    const eu = __jid(sender);

    const avisarNoPrivado = async (mensagem) => {
        await yuta.sendMessage(eu, { text: mensagem }).catch(() => {});
    };

    if (!isBotGroupAdmins) {
        await avisarNoPrivado("❌ Para usar .seramante com exclusão automática da mensagem, preciso ser administrador do grupo.");
        return;
    }

    // Apaga a mensagem do comando antes de continuar.
    try {
        await yuta.sendMessage(from, { delete: info.key });
    } catch (erro) {
        await avisarNoPrivado("❌ Não consegui apagar sua mensagem. O convite não foi enviado para preservar a discrição.");
        return;
    }

    if (!menc_os2) {
        await avisarNoPrivado("❌ Você precisa marcar a pessoa que deseja convidar.");
        return;
    }

    const alvo = __jid(menc_os2);

    if (!alvo || alvo === eu) {
        await avisarNoPrivado("❌ Você não pode convidar a si mesmo.");
        return;
    }

    const namoro1 = __NM_load();
    const namoro2 = __PD_load();
    const amantes = __AM_load();
    const rel = __getRelacao(alvo, namoro1);

    if (!rel || rel.casados !== true) {
        await avisarNoPrivado("💔 Essa pessoa não possui um casamento ativo.");
        return;
    }

    if (amantes.some(a => __jid(a.casado) === alvo)) {
        await avisarNoPrivado("❤️‍🔥 Essa pessoa já possui um amante. Só é permitido um amante por pessoa casada.");
        return;
    }

    if (namoro2.some(p =>
        p.tipo === "amante" &&
        (__jid(p.id) === alvo || __jid(p.remetente) === eu)
    )) {
        await avisarNoPrivado("⏳ Já existe um convite de amante pendente envolvendo você ou essa pessoa.");
        return;
    }

    const pedido = {
        tipo: "amante",
        id: alvo,
        remetente: eu,
        grupo: from,
        criadoEm: Date.now()
    };

    namoro2.push(pedido);
    __PD_save(namoro2);

    try {
        await yuta.sendMessage(alvo, {
            text: `❤️‍🔥 *CONVITE SECRETO*

Alguém do grupo convidou você para ser seu amante.

Este convite é privado. Seu cônjuge não será notificado.

Responda *SIM* para aceitar ou *NÃO* para recusar.

⏳ O convite expira em 24 horas.`
        });
    } catch (erro) {
        const indice = namoro2.indexOf(pedido);
        if (indice !== -1) namoro2.splice(indice, 1);
        __PD_save(namoro2);

        await avisarNoPrivado("❌ Não consegui entregar o convite no privado dessa pessoa. Verifique se ela já conversou com o bot.");
        return;
    }

    await avisarNoPrivado("❤️‍🔥 Convite enviado em segredo! Você será avisado no privado quando a pessoa responder.");
}
break;

case 'casar':
{
if (!isGroup)
return reply(mess.onlyGroup());

if (!menc_os2)
return reply("💍 Marque a pessoa com quem você namora para pedir casamento.");

const namoro1 = __NM_load();
const namoro2 = __PD_load();
const alvo = __jid(menc_os2);
const eu = __jid(sender);

if (alvo === eu)
return reply("❌ Você não pode se pedir em casamento.");
if (botNumber.includes(alvo))
return reply("❌ O bot não pode se casar.");

const rel = __getRelacao(sender, namoro1);

if (!rel || rel.namorados !== true)
return reply("💔 Você precisa estar namorando para pedir casamento.");

const cincoDias = 5 * 24 * 60 * 60 * 1000;
const inicioNamoro = Number(rel.inicio);

if (!Number.isFinite(inicioNamoro) ||
Date.now() - inicioNamoro < cincoDias)
return reply("⏳ Vocês precisam completar pelo menos *5 dias de namoro* antes de se casar. ❤️");

const parceiro = __jid(rel.usu1) === eu
? __jid(rel.usu2)
: __jid(rel.usu1);

if (parceiro !== alvo)
return reply("💍 Você só pode pedir casamento à pessoa com quem está namorando.");

if (rel.casados === true)
return reply("💒 Vocês já estão casados!");

const pedidoExistente = namoro2.find(p =>
p.tipo === "casamento" &&
(
(__jid(p.id) === alvo && __jid(p.remetente) === eu) ||
(__jid(p.id) === eu && __jid(p.remetente) === alvo)
)
);

if (pedidoExistente)
return reply("⏳ Já existe um pedido de casamento pendente entre vocês.");

namoro2.push({
tipo: "casamento",
id: alvo,
remetente: eu,
grupo: from,
criadoEm: Date.now()
});
__PD_save(namoro2);

await reagir(from, "💍");

await yuta.sendMessage(from, {
text: `💍 *PEDIDO DE CASAMENTO* 💍

@${__num(eu)} quer dar um passo ainda maior nessa história e está pedindo @${__num(alvo)} em casamento!

❤️ @${__num(alvo)}, responda *SIM* ou *NÃO* para aceitar ou recusar o pedido.`,
contextInfo: {
...NkChannelKk,
mentionedJid: [eu, alvo]
}
}, { quoted: yt });
}
break;

case 'namorar':
case 'pediremnamoro':
{
if (!isGroup)
return reply(mess.onlyGroup());
const namoro1 = __NM_load();
const namoro2 = __PD_load();
const alvo = __jid(menc_os2);
if (alvo === __jid(sender))
return reply(mess.niReply0820());
if (!menc_os2)
return reply(mess.niReply0821());
if (alvo === __jid(sender))
return reply(mess.niReply0822());
if (botNumber.includes(alvo)) {
return reply(mess.niReply0823());
}
if (__estaNamorando(sender, namoro1))
return reply(mess.niReply0824());
if (__temPedido(sender, namoro1))
return mention(mess.niNamoroJaPediu());
if (__estaNamorando(alvo, namoro1))
return reply(mess.niReply0825());
if (__temPedido(alvo, namoro1))
return reply(mess.niReply0826());
await reagir(from, "💍");
namoro1.push({ usu1: __jid(sender), usu2: alvo, namorados: false, filhos: [], inicio: null, hora: hourofc, data: dattofc });
__NM_save(namoro1);
namoro2.push({ tipo: "namoro", id: alvo, remetente: __jid(sender), criadoEm: Date.now() });
__PD_save(namoro2);
const texto = mess.pedidoNamoro(alvo, sender, prefix);
await yuta.sendMessage(from, { image: { url: namorar }, caption: texto, contextInfo: { ...NkChannelKk, mentionedJid: [alvo, __jid(sender)] } }, { quoted: yt });
}
break;

case 'cancelar':
case 'cancelarpedido':
{
if (!isGroup)
return reply(mess.onlyGroup());
const namoro1 = __NM_load();
const namoro2 = __PD_load();
const index1 = namoro1.findIndex(i => __jid(i.usu1) === __jid(sender) && i.namorados === false);
if (index1 === -1)
return reply(mess.niReply0827());
const parceiro = __jid(namoro1[index1].usu2);
namoro1.splice(index1, 1);
__NM_save(namoro1);
const index2 = namoro2.findIndex(i => i.tipo === "namoro" && __jid(i.id) === parceiro && __jid(i.remetente) === __jid(sender));
if (index2 !== -1) {
namoro2.splice(index2, 1);
__PD_save(namoro2);
}
reply(mess.niReply0828());
}
break;

case 'terminar':
case 'terminar_namoro':
{
const namoro1 = __NM_load();
const idx = namoro1.findIndex(r => r.namorados === true && (__jid(r.usu1) === __jid(sender) || __jid(r.usu2) === __jid(sender)));
if (idx === -1)
return reply(mess.niReply0829());
const rel = namoro1[idx];

if (rel.casados === true)
return reply("💒 Vocês estão casados! Para encerrar essa união, utilizem o comando .divorcio.");

const parceiro = __jid(rel.usu1) === __jid(sender) ? __jid(rel.usu2) : __jid(rel.usu1);
await reply(mess.niReply0830());
await yuta.sendMessage(parceiro, { text: mess.niText1366() + `> *ɢᴜᴀʀᴅᴇ ᴏꜱ ʙᴏɴꜱ ᴍᴏᴍᴇɴᴛᴏꜱ, ᴍᴇꜱᴍᴏ ǫᴜᴇ ᴅᴏᴀ...🙇‍♂️*`, contextInfo: { ...NkChannelKk, mentionedJid: [__jid(sender), parceiro] } }, { quoted: yt });
namoro1.splice(idx, 1);
__NM_save(namoro1);
}
break;

case 'minhadupla':
case 'dupla':
{
if (!isGroup)
return reply(mess.onlyGroup());
const namoro1 = __NM_load();
const dupla = namoro1.find(r => r.namorados === true && (__jid(r.usu1) === __jid(sender) || __jid(r.usu2) === __jid(sender)));
if (!dupla)
return reply(mess.niReply0831());
await reagir(from, "❤️‍🩹");
const parceiro1 = __jid(dupla.usu1);
const parceiro2 = __jid(dupla.usu2);
if (!dupla.inicio) {
dupla.inicio = Date.now();
__NM_save(namoro1);
}
const tempoJuntos = msToTime(Date.now() - dupla.inicio);
const texto = mess.minhaDupla(parceiro1, parceiro2, tempoJuntos, dupla);
const parceiroFoto = __jid(sender) === parceiro1 ? parceiro2 : parceiro1;
try {
const ppimg = await yuta.profilePictureUrl(parceiroFoto, 'image');
await yuta.sendMessage(from, { image: { url: ppimg }, caption: texto, mentions: [parceiro1, parceiro2], contextInfo: { ...NkChannelKk, mentionedJid: [parceiro1, parceiro2] } }, { quoted: yt });
}
catch {
await yuta.sendMessage(from, { image: { url: imgperfil }, caption: texto, mentions: [parceiro1, parceiro2], contextInfo: { ...NkChannelKk, mentionedJid: [parceiro1, parceiro2] }
}, { quoted: yt });
}
}
break;

case "criar_familia":
case "criarfamilia":
{
if (!isGroup)
return reply(mess.onlyGroup());
const namoro1 = __NM_load();
const fam = __getFamilia(sender, namoro1);
if (!fam)
return reply(mess.niReply0832());
if (fam.familia === true)
return reply(mess.niReply0833());
fam.familia = true;
if (!Array.isArray(fam.filhos))
fam.filhos = [];
__NM_save(namoro1);
await reagir(from, "👨‍👩‍👧‍👦");
return yuta.sendMessage(from, { text: mess.niText1367(), contextInfo: { ...NkChannelKk, mentionedJid: [__jid(fam.usu1), __jid(fam.usu2)] }
}, { quoted: yt });
}
break;

case "adotar_filho":
{
if (!isGroup)
return reply(mess.onlyGroup());
const namoro1 = __NM_load();
const namoro2 = __PD_load();
const fam = __getFamilia(sender, namoro1);
if (!fam)
return reply(mess.niReply0834());
if (fam.familia !== true)
return reply(mess.niReply0835({ e0: () => (prefix) }));
const alvo = __jid(menc_os2);
if (!menc_os2)
return reply(mess.niReply0836());
if (alvo === __jid(fam.usu1) || alvo === __jid(fam.usu2))
return reply(mess.niReply0837());
if (__isFilho(alvo, namoro1))
return reply(mess.niReply0838());
if (botNumber.includes(alvo))
return reply(mess.niReply0839());
__criarPedidoAdocao(namoro2, fam, alvo, from, sender);
__PD_save(namoro2);
await reagir(from, "👶");
const p1 = __num(fam.usu1);
const p2 = __num(fam.usu2);
const texto = mess.niFamiliaPedidoAdocao({ e0: () => p1, e1: () => p2, e2: () => __num(alvo) });
return yuta.sendMessage(from, { text: texto, contextInfo: { ...NkChannelKk, mentionedJid: [__jid(fam.usu1), __jid(fam.usu2), alvo] }
}, { quoted: yt });
}
break;

case "familia":
case "minha_familia":
case "minhafamilia":
{
if (!isGroup)
return reply(mess.onlyGroup());
const namoro1 = __NM_load();
let fam = __getFamilia(sender, namoro1);
if (!fam)
fam = __familiaDoFilho(sender, namoro1);
if (!fam)
return reply(mess.niReply0840());
const pai1 = __jid(fam.usu1);
const pai2 = __jid(fam.usu2);
const filhos = Array.isArray(fam.filhos) ? fam.filhos : [];
const souFilho = filhos.includes(__jid(sender));
const listaFilhos = filhos.length > 0 ? filhos.map((j, i) => `*${i + 1}.* @${__num(j)}`).join("\n") : '*ɴᴇɴʜᴜᴍ ꜰɪʟʜᴏ ᴀᴅᴏᴛᴀᴅᴏ ᴀɪɴᴅᴀ.*';
let texto = "";
if (souFilho) {
texto = mess.niFamiliaDetalhes({ e0: () => __num(pai1), e1: () => __num(pai2), e2: () => `> *ғɪʟʜᴏs:* ${filhos.length}
> *ɪʀᴍᴀᴏs:* ${filhos.length}` });
}
else {
texto = mess.niFamiliaDetalhes({ e0: () => __num(pai1), e1: () => __num(pai2), e2: () => `> *ғɪʟʜᴏs:* ${filhos.length}
${listaFilhos}` });
}
const mentions = [pai1, pai2, ...filhos];
await reagir(from, "👨‍👩‍👧‍👦");
return yuta.sendMessage(from, { text: texto, contextInfo: { ...NkChannelKk, mentionedJid: mentions }
}, { quoted: yt });
}
break;

case "deserdar":
case "expulsar_filho":
case "expulsarfilho":
{
if (!isGroup)
return reply(mess.onlyGroup());
const namoro1 = __NM_load();
const fam = __getFamilia(sender, namoro1);
if (!fam)
return reply(mess.niReply0841());
if (fam.familia !== true)
return reply(mess.niReply0842());
const alvo = __jid(menc_os2);
if (!menc_os2)
return reply(mess.niReply0843());
fam.filhos = Array.isArray(fam.filhos) ? fam.filhos : [];
if (!fam.filhos.includes(alvo))
return reply(mess.niReply0844());
fam.filhos = fam.filhos.filter(j => __jid(j) !== alvo);
__NM_save(namoro1);
await reagir(from, "🚫");
return yuta.sendMessage(from, {
text: mess.niText1368() + `*• ʀᴇᴍᴏᴠɪᴅᴏ:* @${__num(alvo)}`, contextInfo: { ...NkChannelKk, mentionedJid: [alvo] }
}, { quoted: yt });
}
break;

case "cancelar_adocao":
case "cancelaradocao":
{
if (!isGroup)
return reply(mess.onlyGroup());
const namoro2 = __PD_load();
const pedido = namoro2.find(p => p.tipo === "adocao" && __jid(p.por) === __jid(sender));
if (!pedido)
return reply(mess.niReply0845());
namoro2.splice(namoro2.indexOf(pedido), 1);
__PD_save(namoro2);
await reagir(from, "❌");
return yuta.sendMessage(from, {
text: mess.niText1369() + `*• ᴘᴇᴅɪᴅᴏ ᴘᴀʀᴀ:* @${__num(pedido.alvo)}`, contextInfo: { ...NkChannelKk, mentionedJid: [pedido.alvo] }
}, { quoted: yt });
}
break;

case 'coins':
case 'estatisticas': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModoCoins)
return reply(mess.niReply0846({ e0: () => (prefix) }));
try {
const usuario = RG_SCOINS[ID_G_COINS]?.usus[ID_USU_COINS] || { coins: 0, chances: { minerar: 0, cassino: 0 } };
const saldoCoins = Number(usuario.coins || 0);
const tentMinerar = Number(usuario.chances?.minerar || 0);
const tentCassino = Number(usuario.chances?.cassino || 0);
await yuta.sendMessage(from, {
text: mess.niText1370({ e0: () => (sender.split('@')[0]), e1: () => (saldoCoins), e2: () => (tentMinerar), e3: () => (tentCassino), e4: () => (prefix) }),
mentions: [sender],
contextInfo: canalInfo([sender])
}, { quoted: yt });
}
catch (err) {
console.log(mess.niConsole034(), err);
reply(mess.niReply0847());
}
break;
}
case 'sorteiocoins':
case 'sortcoins': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModoCoins)
return reply(mess.niReply0848({ e0: () => (prefix) }));
if (!SoDono)
return reply(mess.onlyOwner());
if (q.match(/[a-z]/i))
return reply(mess.niReply0849());
const participantes = RG_SCOINS[ID_G_COINS]?.usus || [];
if (participantes.length === 0)
return reply(mess.niReply0850());
const randomIndex = Math.floor(Math.random() * participantes.length);
const LuckyUser = participantes[randomIndex].id;
await yuta.sendMessage(from, {
text: mess.niText1371({ e0: () => (LuckyUser.split("@")[0]), e1: () => (q.trim()) }),
mentions: [LuckyUser],
contextInfo: canalInfo([sender])
}, { quoted: yt });
SYSTEM_COIN.AdicionarCoins(LuckyUser, Math.floor(q.trim()));
break;
}
case 'dadoapostado': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModoCoins)
return reply(mess.niReply0851({ e0: () => (prefix) }));
const [numberDado, amountBet] = q.split("/");
if (!numberDado)
return reply(mess.niReply0852({ e0: () => (prefix + command) }));
if (!amountBet)
return reply(mess.niReply0853());
if (isNaN(numberDado) || isNaN(amountBet))
return reply(mess.niReply0854());
const numDado = parseInt(numberDado);
const aposta = parseInt(amountBet);
if (aposta > 500)
return reply(mess.niReply0855());
if (numDado < 1 || numDado > 6)
return reply(mess.niReply0856());
const saldoAtual = SYSTEM_COIN.VerificarCampo(sender, "coins");
if (saldoAtual < aposta)
return reply(mess.niReply0857({ e0: () => (prefix), prefix }));
await reagir(from, "🎲");
await reply(mess.niReply0858({ e0: () => (aposta), e1: () => (numDado) }));
const drawQuantity = Math.floor(Math.random() * 6) + 1;
setTimeout(async () => {
if (drawQuantity === numDado) {
await yuta.sendMessage(from, {
text: mess.niText1372({ e0: () => (sender.split("@")[0]), e1: () => (drawQuantity), e2: () => (aposta) }),
mentions: [sender],
contextInfo: canalInfo([sender])
}, { quoted: yt });
await SYSTEM_COIN.AdicionarCoins(sender, aposta);
}
else {
await yuta.sendMessage(from, {
text: mess.niText1373({ e0: () => (sender.split("@")[0]), e1: () => (drawQuantity), e2: () => (aposta) }),
mentions: [sender],
contextInfo: canalInfo([sender])
}, { quoted: yt });
await SYSTEM_COIN.RemoverCoins(sender, aposta);
}
}, 5000);
break;
}
case 'cassino':
case 'slot':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModoCoins)
return reply(mess.niReply0859({ e0: () => (prefix) }));
const usuarioCassino = RG_SCOINS[ID_G_COINS].usus[ID_USU_COINS];
if (usuarioCassino.chances.cassino >= 5) {
return yuta.sendMessage(from, {
text: mess.niText1374({ e0: () => (sender.split("@")[0]) }),
mentions: [sender],
contextInfo: canalInfo([sender])
}, { quoted: y });
}
if (usuarioCassino.coins < 30) {
return yuta.sendMessage(from, {
text: mess.niText1375(),
mentions: [sender],
contextInfo: canalInfo([sender])
}, { quoted: y });
}
usuarioCassino.chances.cassino++;
CoinsUpdate(RG_SCOINS);
const getResultSlot = ["🍓", "🍒", "🍎", "🍉"];
const V_ = Array.from({ length: 3 }, () => getResultSlot[Math.floor(Math.random() * getResultSlot.length)]);
const slotMensagem = async (mensagem) => {
await yuta.sendMessage(from, {
text: mess.niText1376({ e0: () => (V_[0]), e1: () => (V_[1]), e2: () => (V_[2]), e3: () => (mensagem), e4: () => (usuarioCassino.chances.cassino) }),
mentions: [sender],
contextInfo: canalInfo([sender])
}, { quoted: y });
};
if (V_[0] === V_[1] && V_[1] === V_[2]) {
await SYSTEM_COIN.AdicionarCoins(sender, 65);
await slotMensagem(mess.niCoinsCassinoVitoriaAleatoria());
}
else {
await SYSTEM_COIN.RemoverCoins(sender, 5);
await slotMensagem(mess.niCoinsCassinoDerrotaAleatoria());
}
break;

case 'minerar':
case 'minerarcoins':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModoCoins)
return reply(mess.niReply0860({ e0: () => (prefix) }));
if (RG_SCOINS[ID_G_COINS].usus[ID_USU_COINS].chances.minerar >= 6) {
return reply(mess.niReply0861());
}
if (!RG_SCOINS[ID_G_COINS].usus[ID_USU_COINS]) {
RG_SCOINS[ID_G_COINS].usus[ID_USU_COINS].chances.minerar = 1;
}
else {
RG_SCOINS[ID_G_COINS].usus[ID_USU_COINS].chances.minerar += 1;
}
CoinsUpdate(RG_SCOINS);
const aleatValor = Math.floor(Math.random() * 2);
const rndg = Math.floor(Math.random() * 300);
if (aleatValor === 0) {
const randomMining = [mess.niCoinsMineracaoSucessoAleatoria({ e0: () => (rndg) })];
await yuta.sendMessage(from, {
text: mess.niText1377({ e0: () => (sender.split("@")[0]), e1: () => (rndg), e2: () => (randomMining[Math.floor(Math.random() * randomMining.length)]) }),
mentions: [sender],
contextInfo: canalInfo([sender])
}, { quoted: yt });
SYSTEM_COIN.AdicionarCoins(sender, rndg);
}
else {
let miningFailure = mess.niCoinsMineracaoFalhaAleatoria({ e0: () => (6 - RG_SCOINS[ID_G_COINS].usus[ID_USU_COINS].chances.minerar) });
await reply(mess.niCoinsMineracaoFalhou({ e0: () => (miningFailure) }));
}
break;

case 'trabalhar':
case 'trabalho': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModoCoins)
return reply(mess.niReply0862({ e0: () => (prefix) }));
const userDataTrab = garantirUsuarioCoins(sender);
if (!userDataTrab.chances || typeof userDataTrab.chances !== 'object') userDataTrab.chances = {};
if (typeof userDataTrab.trabalharCount !== 'number') userDataTrab.trabalharCount = 0;
if (!userDataTrab.trabalharData) userDataTrab.trabalharData = null;
const hoje = new Date().toLocaleDateString("pt-BR");
if (userDataTrab.trabalharData !== hoje) {
userDataTrab.trabalharData = hoje;
userDataTrab.trabalharCount = 0;
}
if (userDataTrab.trabalharCount >= 5) {
return reply(mess.niReply0863());
}
userDataTrab.trabalharCount++;
const salario = Math.floor(Math.random() * 251) + 50;
const trabalhos = [mess.niCoinsTrabalhoAleatorio({ e0: () => (salario) })];
SYSTEM_COIN.AdicionarCoins(sender, salario);
CoinsUpdate(RG_SCOINS);
await yuta.sendMessage(from, {
text: mess.niText1378({ e0: () => (sender.split("@")[0]), e1: () => (salario), e2: () => (trabalhos[Math.floor(Math.random() * trabalhos.length)]), e3: () => (userDataTrab.trabalharCount), prefix }),
mentions: [sender],
contextInfo: canalInfo([sender])
}, { quoted: yt });
break;
}
case 'comprarcerveja': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModoCoins)
return reply(mess.niReply0864({ e0: () => (prefix) }));
const userDataCerveja = RG_SCOINS[ID_G_COINS]?.usus.find((u) => u.id === sender);
if (!userDataCerveja)
return reply(mess.niReply0865());
const precoCerveja = 50;
const estoqueMaximo = 15;
const hojeC = new Date().toLocaleDateString("pt-BR");
if (!RG_SCOINS[ID_G_COINS].cervejaEstoqueInfo) {
RG_SCOINS[ID_G_COINS].cervejaEstoqueInfo = {
data: hojeC,
estoque: estoqueMaximo,
};
}
if (RG_SCOINS[ID_G_COINS].cervejaEstoqueInfo.data !== hojeC) {
RG_SCOINS[ID_G_COINS].cervejaEstoqueInfo.data = hojeC;
RG_SCOINS[ID_G_COINS].cervejaEstoqueInfo.estoque = estoqueMaximo;
}
const estoqueAtual = RG_SCOINS[ID_G_COINS].cervejaEstoqueInfo.estoque;
if (estoqueAtual <= 0) {
return reply(mess.niReply0866());
}
if (userDataCerveja.coins < precoCerveja) {
return reply(mess.niReply0867({ e0: () => (precoCerveja) }));
}
if (typeof userDataCerveja.cervejas !== "number")
userDataCerveja.cervejas = 0;
userDataCerveja.coins -= precoCerveja;
userDataCerveja.cervejas += 1;
RG_SCOINS[ID_G_COINS].cervejaEstoqueInfo.estoque -= 1;
CoinsUpdate(RG_SCOINS);
await yuta.sendMessage(from, {
text: mess.niText1379({ e0: () => (precoCerveja), e1: () => (RG_SCOINS[ID_G_COINS].cervejaEstoqueInfo.estoque), e2: () => (estoqueMaximo), e3: () => (userDataCerveja.cervejas), e4: () => (userDataCerveja.coins) }),
contextInfo: canalInfo([sender])
}, { quoted: yt });
break;
}
case 'bebercerveja': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModoCoins)
return reply(mess.niReply0868({ e0: () => (prefix) }));
const userDataBeer = RG_SCOINS[ID_G_COINS]?.usus.find((u) => u.id === sender);
if (!userDataBeer)
return reply(mess.niReply0869());
if (typeof userDataBeer.cervejas !== "number" || userDataBeer.cervejas <= 0) {
return reply(mess.niReply0870({ e0: () => (prefix) }));
}
userDataBeer.cervejas -= 1;
const bonus = Math.floor(Math.random() * 41) + 10;
userDataBeer.coins += bonus;
CoinsUpdate(RG_SCOINS);
await yuta.sendMessage(from, {
text: mess.niText1380({ e0: () => (bonus), e1: () => (userDataBeer.cervejas), e2: () => (userDataBeer.coins) }),
contextInfo: canalInfo([sender])
}, { quoted: yt });
break;
}
case 'doarcoins': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModoCoins)
return reply(mess.niReply0871({ e0: () => (prefix) }));
const mentionedJidDoar = info.message?.extendedTextMessage?.contextInfo?.mentionedJid || [];
const valorDoacao = parseInt(args.find(a => /^\d+$/.test(a)));
if (!valorDoacao || isNaN(valorDoacao) || valorDoacao <= 0 || !mentionedJidDoar.length) {
return reply(mess.niReply0872({ e0: () => (prefix) }));
}
const remetente = normalizar(sender);
const destinatario = alvoCoinsPorMencao(mentionedJidDoar);
if (!destinatario || mesmoUsuarioCoins(destinatario, remetente))
return reply(mess.niReply0872({ e0: () => (prefix) }));
let userRemetente = garantirUsuarioCoins(remetente);
let userDestinatario = garantirUsuarioCoins(destinatario);
if (userRemetente.coins < valorDoacao) {
return reply(mess.niReply0874({ e0: () => (userRemetente.coins) }));
}
userRemetente.coins -= valorDoacao;
userDestinatario.coins += valorDoacao;
CoinsUpdate(RG_SCOINS);
await yuta.sendMessage(from, {
text: mess.niText1381({ e0: () => (numeroCoins(remetente)), e1: () => (numeroCoins(destinatario)), e2: () => (valorDoacao), e3: () => (userRemetente.coins), e4: () => (new Date().toLocaleDateString("pt-BR", { timeZone: "America/Sao_Paulo" })), e5: () => (new Date().toLocaleTimeString("pt-BR", { timeZone: "America/Sao_Paulo" })) }),
mentions: [remetente, destinatario],
contextInfo: canalInfo([remetente, destinatario])
}, { quoted: yt });
break;
}
case 'roubarcoins': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModoCoins)
return reply(mess.niReply0875({ e0: () => (prefix) }));
const quoted = info.quoted || {};
const isQuoted = info.message?.extendedTextMessage?.contextInfo?.quotedMessage;
let alvoRoubo = null;
const mentionsRoubo = info.message?.extendedTextMessage?.contextInfo?.mentionedJid || [];
if (mentionsRoubo.length > 0) {
alvoRoubo = mentionsRoubo[0];
}
else if (isQuoted && quoted.sender) {
alvoRoubo = quoted.sender;
}
else {
return reply(mess.niReply0876());
}
if (alvoRoubo === sender)
return reply(mess.niReply0877());
const userRemetenteRoubo = RG_SCOINS[ID_G_COINS]?.usus.find((u) => u.id === sender);
const userAlvoRoubo = RG_SCOINS[ID_G_COINS]?.usus.find((u) => u.id === alvoRoubo);
if (!userRemetenteRoubo)
return reply(mess.niReply0878());
if (!userAlvoRoubo)
return reply(mess.niReply0879());
if (userAlvoRoubo.coins <= 0)
return reply(mess.niReply0880());
if (userRemetenteRoubo.coins <= 0)
return reply(mess.niReply0881());
if (userAlvoRoubo.pocaoProtecao) {
const agora = Date.now();
const expira = userAlvoRoubo.pocaoProtecaoExpira || 0;
if (agora < expira) {
return yuta.sendMessage(from, {
text: mess.niText1382({ e0: () => (alvoRoubo.split("@")[0]) }),
mentions: [alvoRoubo],
contextInfo: canalInfo([sender])
});
}
else {
delete userAlvoRoubo.pocaoProtecao;
delete userAlvoRoubo.pocaoProtecaoExpira;
CoinsUpdate(RG_SCOINS);
}
}
const hojeR = new Date().toLocaleDateString("pt-BR");
if (!userRemetenteRoubo.limitesRoubo || userRemetenteRoubo.limitesRoubo.data !== hojeR) {
userRemetenteRoubo.limitesRoubo = {
data: hojeR,
totalHoje: 0,
roubadosHoje: {},
};
}
if (userRemetenteRoubo.limitesRoubo.totalHoje >= 3)
return reply(mess.niReply0882());
if (userRemetenteRoubo.limitesRoubo.roubadosHoje[alvoRoubo])
return yuta.sendMessage(from, {
text: mess.niText1383({ e0: () => (alvoRoubo.split("@")[0]) }),
mentions: [alvoRoubo],
contextInfo: canalInfo([sender])
});
if (Math.random() < 0.2) {
let punicao = "";
if (userRemetenteRoubo.coins >= 1000) {
userRemetenteRoubo.coins -= 1000;
punicao = mess.niRouboPunicao({ e0: () => 'ᴠᴏᴄᴇ ᴘᴀɢᴏᴜ 1000 ɴ-ᴄᴏɪɴs ᴅᴇ ᴍᴜʟᴛᴀ.' });
}
else {
punicao = mess.niRouboPunicao({ e0: () => 'ᴠᴏᴄᴇ ᴘᴇʀᴅᴇᴜ ᴛᴏᴅᴀs ᴀs sᴜᴀs ᴄᴏɪɴs.' });
userRemetenteRoubo.coins = 0;
}
if (userRemetenteRoubo.pocaoProtecao && Math.random() < 0.3) {
delete userRemetenteRoubo.pocaoProtecao;
delete userRemetenteRoubo.pocaoProtecaoExpira;
punicao = mess.niRouboPunicao({ e0: () => 'ᴠᴏᴄᴇ ғᴏɪ ᴘᴜɴɪᴅᴏ ᴘᴇʟᴀ ᴛᴇɴᴛᴀᴛɪᴠᴀ ᴅᴇ ʀᴏᴜʙᴏ.', e1: () => 'sᴇᴜ ᴇsᴄᴜᴅᴏ ғᴏɪ ǫᴜᴇʙʀᴀᴅᴏ.' });
}
CoinsUpdate(RG_SCOINS);
return reply(punicao);
}
const maxRoubar = Math.max(1, Math.floor(userAlvoRoubo.coins * 0.2));
const valorRoubo = Math.floor(Math.random() * maxRoubar) + 1;
userAlvoRoubo.coins -= valorRoubo;
userRemetenteRoubo.coins += valorRoubo;
userRemetenteRoubo.limitesRoubo.totalHoje += 1;
userRemetenteRoubo.limitesRoubo.roubadosHoje[alvoRoubo] = true;
CoinsUpdate(RG_SCOINS);
await yuta.sendMessage(from, {
text: mess.niText1384({ e0: () => (alvoRoubo.split("@")[0]), e1: () => (valorRoubo), e2: () => (userRemetenteRoubo.coins), e3: () => (userAlvoRoubo.coins) }),
mentions: [alvoRoubo],
contextInfo: canalInfo([sender])
});
break;
}
case 'comprarescudo': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModoCoins)
return reply(mess.niReply0883({ e0: () => (prefix) }));
const precoEscudo = 100;
const userEscudo = RG_SCOINS[ID_G_COINS]?.usus.find((u) => u.id === sender);
if (!userEscudo)
return reply(mess.niReply0884());
if (userEscudo.coins < precoEscudo) {
return reply(mess.niReply0885({ e0: () => (precoEscudo) }));
}
userEscudo.coins -= precoEscudo;
userEscudo.pocaoProtecao = true;
userEscudo.pocaoProtecaoExpira = Date.now() + 7200000;
CoinsUpdate(RG_SCOINS);
await yuta.sendMessage(from, {
text: mess.niText1385({ e0: () => (precoEscudo) }),
contextInfo: canalInfo([sender])
}, { quoted: yt });
break;
}
case 'comprarbomba': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModoCoins)
return reply(mess.niReply0886({ e0: () => (prefix) }));
const userBomba = garantirUsuarioCoins(sender);
if (!userBomba)
return reply(mess.niReply0887());
const precoBomba = 150;
if (userBomba.coins < precoBomba) {
return reply(mess.niReply0888({ e0: () => (precoBomba) }));
}
if (!userBomba.bombas)
userBomba.bombas = 0;
userBomba.coins -= precoBomba;
userBomba.bombas += 1;
CoinsUpdate(RG_SCOINS);
await yuta.sendMessage(from, {
text: mess.niText1386({ e0: () => (precoBomba), e1: () => (userBomba.bombas), e2: () => (userBomba.coins) }),
contextInfo: canalInfo([sender])
}, { quoted: yt });
break;
}
case 'usarbomba': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModoCoins)
return reply(mess.niReply0889({ e0: () => (prefix) }));
const ctxBomba = info.message?.extendedTextMessage?.contextInfo || {};
const mentionsBomba = ctxBomba.mentionedJid || [];
let alvoBomba = alvoCoinsPorMencao(mentionsBomba, ctxBomba.participantAlt || ctxBomba.participant || '');
if (!alvoBomba && numeroDigitado.length >= 10) alvoBomba = normalizarMencaoGrupo(numeroDigitado);
if (!alvoBomba)
return reply(mess.niReply0890());
if (mesmoUsuarioCoins(alvoBomba, sender))
return reply(mess.niReply0891());
const userRemBomba = garantirUsuarioCoins(sender);
const userAlvoBomba = getUsuarioCoins(alvoBomba, false);
if (!userRemBomba)
return reply(mess.niReply0892());
if (!userAlvoBomba)
return reply(mess.niReply0893());
if ((userRemBomba.bombas || 0) <= 0)
return reply(mess.niReply0894({ e0: () => (prefix) }));
const agoraB = Date.now();
const escudoBombaAtivo = (userAlvoBomba.escudo && userAlvoBomba.escudo > agoraB) || (userAlvoBomba.pocaoProtecao && (userAlvoBomba.pocaoProtecaoExpira || 0) > agoraB) || (userAlvoBomba.pocaoPorca && (userAlvoBomba.pocaoPorcaExpira || 0) > agoraB);
if (escudoBombaAtivo) {
return reply(mess.niReply0895({ e0: () => (alvoBomba.split("@")[0]) }));
}
const valorRouboB = Math.floor((userAlvoBomba.coins || 0) * 0.3);
if (valorRouboB <= 0) {
return reply(mess.niReply0896());
}
userAlvoBomba.coins -= valorRouboB;
userRemBomba.coins += valorRouboB;
userRemBomba.bombas -= 1;
CoinsUpdate(RG_SCOINS);
await yuta.sendMessage(from, {
text: mess.niText1387({ e0: () => (numeroCoins(alvoBomba)), e1: () => (valorRouboB), e2: () => (userRemBomba.coins), e3: () => (userRemBomba.bombas) }),
mentions: [alvoBomba],
contextInfo: canalInfo([sender, alvoBomba])
}, { quoted: yt });
break;
}
case 'comprarpocao': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModoCoins)
return reply(mess.niReply0897({ e0: () => (prefix) }));
const userPocao = RG_SCOINS[ID_G_COINS]?.usus.find((u) => u.id === sender);
if (!userPocao)
return reply(mess.niReply0898());
const precoPorcao = 75;
if (userPocao.coins < precoPorcao) {
return reply(mess.niReply0899({ e0: () => (precoPorcao) }));
}
userPocao.coins -= precoPorcao;
if (!userPocao.porcoesPorca)
userPocao.porcoesPorca = 0;
userPocao.porcoesPorca += 1;
CoinsUpdate(RG_SCOINS);
await yuta.sendMessage(from, {
text: mess.niText1388({ e0: () => (precoPorcao), e1: () => (userPocao.porcoesPorca), e2: () => (userPocao.coins) }),
contextInfo: canalInfo([sender])
}, { quoted: yt });
break;
}
case 'usarpocao': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModoCoins)
return reply(mess.niReply0900({ e0: () => (prefix) }));
const userUsaPocao = RG_SCOINS[ID_G_COINS]?.usus.find((u) => u.id === sender);
if (!userUsaPocao)
return reply(mess.niReply0901());
if (!userUsaPocao.porcoesPorca || userUsaPocao.porcoesPorca <= 0) {
return reply(mess.niReply0902({ e0: () => (prefix) }));
}
userUsaPocao.porcoesPorca -= 1;
const agoraP = Date.now();
const efeitos = [
() => {
const ganho = Math.floor(Math.random() * 41) + 30;
userUsaPocao.coins += ganho;
return `sᴏʀᴛᴇ ᴀᴛɪᴠᴀ: ᴠᴏᴄᴇ ɢᴀɴʜᴏᴜ ${ganho} ɴ-ᴄᴏɪɴs.`;
},
() => {
const ganho = Math.floor(Math.random() * 81) + 70;
userUsaPocao.coins += ganho;
userUsaPocao.pocaoPorca = true;
userUsaPocao.pocaoPorcaExpira = agoraP + 300000;
return `ᴘʀᴏᴛᴇᴄᴀᴏ ᴀᴛɪᴠᴀ: +${ganho} ɴ-ᴄᴏɪɴs ᴇ ᴇsᴄᴜᴅᴏ ᴘᴏʀ 5 ᴍɪɴᴜᴛᴏs.`;
},
() => {
const perda = Math.min(userUsaPocao.coins, Math.floor(Math.random() * 51) + 20);
userUsaPocao.coins -= perda;
return `ᴀᴢᴀʀ ɴᴀ ᴘᴏᴄᴀᴏ: ᴠᴏᴄᴇ ᴘᴇʀᴅᴇᴜ ${perda} ɴ-ᴄᴏɪɴs.`;
},
() => `ɴᴀᴅᴀ ᴀᴄᴏɴᴛᴇᴄᴇᴜ ᴅᴇssᴀ ᴠᴇᴢ.`,
() => {
userUsaPocao.pocaoPorca = true;
userUsaPocao.pocaoPorcaExpira = agoraP + 300000;
return `ᴇsᴄᴜᴅᴏ ᴀᴛɪᴠᴏ ᴘᴏʀ 5 ᴍɪɴᴜᴛᴏs.`;
},
() => {
userUsaPocao.pocaoAzarExpira = agoraP + 300000;
return `ᴀᴢᴀʀ ᴀᴛɪᴠᴏ: ᴠᴏᴄᴇ ɴᴀᴏ ᴘᴏᴅᴇ ʀᴏᴜʙᴀʀ ᴘᴏʀ 5 ᴍɪɴᴜᴛᴏs.`;
},
];
const efeitoEscolhido = efeitos[Math.floor(Math.random() * efeitos.length)];
const mensagemP = efeitoEscolhido();
CoinsUpdate(RG_SCOINS);
await yuta.sendMessage(from, {
text: mess.niText1389({ e0: () => (mensagemP), e1: () => (userUsaPocao.porcoesPorca) }),
contextInfo: canalInfo([sender])
}, { quoted: yt });
break;
}
case 'addcoins': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModoCoins)
return reply(mess.niReply0903({ e0: () => (prefix) }));
if (!isGroupAdmins && !SoDono && !DonoOficial)
return reply(mess.onlyAdmins());
const barraAdd = q.replace(/\s*\/\s*/g, '/').trim();
let nmrAdd, valorAdd;
if (barraAdd.includes('/')) {
[nmrAdd, valorAdd] = barraAdd.split('/');
} else {
const temMencAdd = Array.isArray(menc_jid2) && menc_jid2.length > 0;
nmrAdd = temMencAdd ? menc_os2 : args[0];
valorAdd = (temMencAdd ? args : args.slice(1)).find(a => /^\d+$/.test(a));
}
const alvoAdd = normalizarMencaoGrupo((Array.isArray(menc_jid2) && menc_jid2.length > 0 ? menc_os2 : nmrAdd) || '');
const quantidadeAdd = parseInt(valorAdd);
if (!alvoAdd || isNaN(quantidadeAdd) || quantidadeAdd <= 0)
return await mention(mess.niUsoAddCoins({ prefix, command, dono: nmrdn.split('@')[0] }));
const userAlvoAdd = garantirUsuarioCoins(alvoAdd);
userAlvoAdd.coins += quantidadeAdd;
CoinsUpdate(RG_SCOINS);
await yuta.sendMessage(from, {
text: mess.niText1390({ e0: () => (numeroCoins(alvoAdd)), e1: () => (quantidadeAdd), e2: () => (userAlvoAdd.coins), e3: () => (new Date().toLocaleDateString("pt-BR", { timeZone: "America/Sao_Paulo" })), e4: () => (new Date().toLocaleTimeString("pt-BR", { timeZone: "America/Sao_Paulo" })) }),
mentions: [alvoAdd],
contextInfo: canalInfo([sender, alvoAdd])
}, { quoted: yt });
break;
}
case 'mecoins':
case 'meuscoins': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModoCoins)
return reply(mess.niReply0905({ e0: () => (prefix) }));
if (!SoDono)
return reply(mess.onlyOwner());
if (!q || isNaN(q))
return reply(mess.niReply0906({ e0: () => (prefix + command) }));
const quantidadeMe = parseInt(q);
if (quantidadeMe <= 0)
return reply(mess.niReply0907());
const alvoMe = sender;
const userMe = garantirUsuarioCoins(alvoMe);
userMe.coins += quantidadeMe;
CoinsUpdate(RG_SCOINS);
const saldoMe = userMe.coins;
await yuta.sendMessage(from, {
text: mess.niText1391({ e0: () => (alvoMe.split("@")[0]), e1: () => (quantidadeMe), e2: () => (saldoMe), e3: () => (new Date().toLocaleDateString("pt-BR", { timeZone: "America/Sao_Paulo" })), e4: () => (new Date().toLocaleTimeString("pt-BR", { timeZone: "America/Sao_Paulo" })) }),
mentions: [alvoMe],
contextInfo: canalInfo([sender])
}, { quoted: yt });
break;
}
case 'removercoins':
case 'removecoins': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModoCoins)
return reply(mess.niReply0908({ e0: () => (prefix) }));
if (!isGroupAdmins && !SoDono && !DonoOficial)
return reply(mess.onlyAdmins());
const barraRemove = q.replace(/\s*\/\s*/g, '/').trim();
let nmrRemove, valorRemove;
if (barraRemove.includes('/')) {
[nmrRemove, valorRemove] = barraRemove.split('/');
} else {
const temMencRemove = Array.isArray(menc_jid2) && menc_jid2.length > 0;
nmrRemove = temMencRemove ? menc_os2 : args[0];
valorRemove = (temMencRemove ? args : args.slice(1)).find(a => /^\d+$/.test(a));
}
const alvoRemove = normalizarMencaoGrupo((Array.isArray(menc_jid2) && menc_jid2.length > 0 ? menc_os2 : nmrRemove) || '');
const quantidadeRemove = parseInt(valorRemove);
if (!alvoRemove || isNaN(quantidadeRemove) || quantidadeRemove <= 0)
return await mention(mess.niUsoRemoveCoins({ prefix, command, dono: nmrdn.split('@')[0] }));
const userAlvoRemove = getUsuarioCoins(alvoRemove, false);
if (!userAlvoRemove)
return reply(mess.niReply0909());
userAlvoRemove.coins = Math.max(0, (userAlvoRemove.coins || 0) - quantidadeRemove);
CoinsUpdate(RG_SCOINS);
await yuta.sendMessage(from, {
text: mess.niText1392({ e0: () => (numeroCoins(alvoRemove)), e1: () => (quantidadeRemove), e2: () => (userAlvoRemove.coins), e3: () => (new Date().toLocaleDateString("pt-BR", { timeZone: "America/Sao_Paulo" })), e4: () => (new Date().toLocaleTimeString("pt-BR", { timeZone: "America/Sao_Paulo" })) }),
mentions: [alvoRemove],
contextInfo: canalInfo([sender, alvoRemove])
}, { quoted: yt });
break;
}
case 'venderpet':
{
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModoCoins)
return reply(mess.niReply0910({ e0: () => (prefix) }));
const user = RG_SCOINS[ID_G_COINS]?.usus.find((u) => u.id === sender);
if (!user || !user.pet)
return reply(mess.niReply0911());
const valores = {
gato: 3000,
cachorro: 2000,
jabuti: 1000,
periquito: 4000,
dragao: 20000,
};
const tipo = user.pet.tipo;
const precoTotal = valores[tipo];
const valorVenda = Math.floor(precoTotal * 0.5);
if (!args[0]) {
user.querVenderPet = true;
CoinsUpdate(RG_SCOINS);
return reply(mess.niReply0912({ e0: () => (tipo), e1: () => (valorVenda) }));
}
if (args[0].toLowerCase() === "sim") {
if (!user.querVenderPet)
return reply(mess.niReply0913({ prefix }));
user.coins = (user.coins || 0) + valorVenda;
delete user.pet;
delete user.querVenderPet;
CoinsUpdate(RG_SCOINS);
return reply(mess.niReply0914({ e0: () => (tipo), e1: () => (valorVenda), e2: () => (user.coins) }));
}
return reply(mess.niReply0915());
}
break;

case 'verpet': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModoCoins)
return reply(mess.niReply0916({ e0: () => (prefix) }));
const user = RG_SCOINS[ID_G_COINS]?.usus.find((u) => u.id === sender);
if (!user || !user.pet)
return reply(mess.niReply0917());
const agora = Date.now();
if (user.pet.dormindo && agora < user.pet.dormindo) {
return await yuta.sendMessage(from, {
image: { url: "https://files.catbox.moe/5gy92x.jpg" },
caption: mess.niText1471(),
mentions: [sender],
contextInfo: canalInfo([sender])
}, { quoted: yt });
}
const { tipo, apelido, fome, tempoUltimaAlimentacao, tempoUltimoBanho, tempoUltimoPasseio, tempoUltimaMissao, criadoEm, afeto = 0, nivel = 1, xp = 0, } = user.pet;
const habilidades = {
cachorro: "👃 Fareja moedas escondidas",
gato: "🧶 Brinca sozinho e ganha XP extra",
jabuti: "🛡️ Resiste mais à fome",
periquito: "🕊️ Imita falas engraçadas do grupo",
dragao: "🔥 Solta labaredas e assusta ladrões de coins",
fenix: "♻️ Revive automaticamente ao morrer",
grifo: "🦅 Pode fazer missões voando (mais rápidas)",
axolote: "💧 Cura-se sozinho se machucar",
demonios: "👹 Causa azar aos rivais em batalhas",
dragaoDourado: "💰 Multiplica coins achados em missões",
gatoMistico: "✨ Ganha XP extra e habilidades místicas",
loboGuardiao: "🐺 Defende seu dono em batalhas",
tartarugaGigante: "🐢 Super resistente e lento",
falcao: "🦅 Voa rápido e traz presentes",
};
const habilidadePet = habilidades[tipo] || "🎲 Nenhuma habilidade especial.";
const horasSemAlimentar = (agora - tempoUltimaAlimentacao) / (1000 * 60 * 60);
if (horasSemAlimentar > 24) {
delete user.pet;
CoinsUpdate(RG_SCOINS);
return reply(mess.niReply0918({ e0: () => (tipo) }));
}
const fomeAtual = Math.max(0, Math.floor(100 - horasSemAlimentar * 4));
user.pet.fome = fomeAtual;
const hBanho = tempoUltimoBanho
? Math.floor((agora - tempoUltimoBanho) / (1000 * 60 * 60))
: "Nunca";
const hPasseio = tempoUltimoPasseio
? Math.floor((agora - tempoUltimoPasseio) / (1000 * 60 * 60))
: "Nunca";
let textoMissao = "Nunca fez missão";
if (tempoUltimaMissao) {
const minutosPassados = Math.floor((agora - tempoUltimaMissao) / (1000 * 60));
textoMissao =
minutosPassados < 60
? `Última missão há ${minutosPassados} minuto(s)`
: `Última missão há ${Math.floor(minutosPassados / 60)} hora(s)`;
}
const intervaloCarinho = 60 * 60 * 1000;
if (!user.pet.carinhoHistorico)
user.pet.carinhoHistorico = [];
user.pet.carinhoHistorico = user.pet.carinhoHistorico.filter((ts) => agora - ts < intervaloCarinho);
const carinhosRestantes = Math.max(0, 2 - user.pet.carinhoHistorico.length);
const intervaloConstrucao = 60 * 60 * 1000;
if (!user.pet.construcaoHistorico)
user.pet.construcaoHistorico = [];
user.pet.construcaoHistorico = user.pet.construcaoHistorico.filter((ts) => agora - ts < intervaloConstrucao);
const construcoesFeitas = user.pet.construcaoHistorico.length;
while (user.pet.xp >= user.pet.nivel * 100) {
user.pet.xp -= user.pet.nivel * 100;
user.pet.nivel += 1;
}
const xpAtual = user.pet.xp || 0;
const xpMax = user.pet.nivel * 100;
let afinidade = "Baixa";
if (user.pet.afeto >= 100)
afinidade = "Alta";
else if (user.pet.afeto >= 50)
afinidade = "Média";
let humor = "😐 Normal";
if (fomeAtual >= 80 && hBanho !== "Nunca" && hPasseio !== "Nunca")
humor = "😀 Feliz";
else if (fomeAtual < 40 ||
hBanho === "Nunca" ||
hPasseio === "Nunca")
humor = "😞 Triste";
const petsRaros = [
"dragaoDourado",
"fenix",
"demonios",
"grifo",
"axolote",
];
const isRaro = petsRaros.includes(tipo);
const imagensComuns = {
gato: "https://files.catbox.moe/aqc0xg.jpg",
cachorro: "https://files.catbox.moe/yd4a0j.jpg",
jabuti: "https://files.catbox.moe/8l7t7q.jpg",
periquito: "https://files.catbox.moe/4dwms2.jpg",
dragao: "https://files.catbox.moe/no3p8x.jpg",
};
const imagensEvoluidos = {
gatoMistico: "https://files.catbox.moe/5cjj9x.jpg",
loboGuardiao: "https://files.catbox.moe/b1wsbt.jpg",
tartarugaGigante: "https://files.catbox.moe/9jas30.jpg",
falcao: "https://files.catbox.moe/cf87ne.jpg",
};
const imagensRaros = {
dragaoDourado: "https://files.catbox.moe/58t7uv.jpg",
fenix: "https://files.catbox.moe/knxwuo.jpg",
demonios: "https://files.catbox.moe/fkhec1.jpg",
grifo: "https://files.catbox.moe/ijpu52.jpg",
axolote: "https://files.catbox.moe/thjxcq.jpg",
};
let imagem;
if (imagensEvoluidos[tipo]) {
imagem = imagensEvoluidos[tipo];
}
else if (petsRaros.includes(tipo)) {
imagem = imagensRaros[tipo];
}
else {
imagem = imagensComuns[tipo];
}
const nomePet = apelido
? `${apelido} (${tipo.toUpperCase()})`
: tipo.toUpperCase();
const idadeDias = criadoEm
? Math.floor((agora - criadoEm) / (1000 * 60 * 60 * 24))
: "Desconhecida";
const texto = `🐾 *Seu Pet: ${nomePet}*
🏷️ Tipo: ${isRaro ? "Pet Raro" : "Pet Comum"}
🧬 Habilidade: ${habilidadePet}
📆 Idade: ${idadeDias} dia(s)
📊 Nível: ${user.pet.nivel}
📈 XP: ${xpAtual}/${xpMax}
❤️ Afinidade: ${afinidade}
😊 Humor: ${humor}
🍗 Fome: ${fomeAtual}%
🧼 Banho: ${hBanho === "Nunca" ? "Nunca" : `${hBanho}h atrás`}
🚶 Passeio: ${hPasseio === "Nunca" ? "Nunca" : `${hPasseio}h atrás`}
⏰ Alimentação: ${Math.floor(horasSemAlimentar)}h atrás
🎯 ${textoMissao}
💞 Carinhos disponíveis: ${carinhosRestantes}/2
🏗️ Construções feitas: ${construcoesFeitas}/3`;
if (imagem) {
await yuta.sendMessage(from, {
image: { url: imagem },
caption: texto,
mentions: [sender],
contextInfo: canalInfo([sender])
}, { quoted: yt });
}
else {
await reply(texto);
}
CoinsUpdate(RG_SCOINS);
break;
}
case 'banhopet': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModoCoins)
return reply(mess.niReply0919({ e0: () => (prefix) }));
const user = RG_SCOINS[ID_G_COINS]?.usus.find((u) => u.id === sender);
if (!user || !user.pet)
return reply(mess.niReply0920());
const agora = Date.now();
user.pet.tempoUltimoBanho = user.pet.tempoUltimoBanho || 0;
const tempoDesdeUltimo = (agora - user.pet.tempoUltimoBanho) / (1000 * 60 * 60);
if (tempoDesdeUltimo < 6)
return reply(mess.niReply0921({ e0: () => (Math.ceil(6 - tempoDesdeUltimo)) }));
user.pet.tempoUltimoBanho = agora;
user.pet.experiencia = user.pet.experiencia || 0;
user.pet.nivel = user.pet.nivel || 1;
user.pet.experiencia += 50;
const xpNecessario = user.pet.nivel * 100;
if (user.pet.experiencia >= xpNecessario) {
user.pet.nivel += 1;
user.pet.experiencia -= xpNecessario;
await reply(mess.niReply0922({ e0: () => (user.pet.nivel) }));
}
CoinsUpdate(RG_SCOINS);
await reply(mess.niReply0923({ e0: () => (user.pet.tipo) }));
break;
}
case 'passearpet': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModoCoins)
return reply(mess.niReply0924({ e0: () => (prefix) }));
const user = RG_SCOINS[ID_G_COINS]?.usus.find((u) => u.id === sender);
if (!user || !user.pet)
return reply(mess.niReply0925());
const agora = Date.now();
user.pet.tempoUltimoPasseio = user.pet.tempoUltimoPasseio || 0;
const horas = (agora - user.pet.tempoUltimoPasseio) / (1000 * 60 * 60);
if (horas < 6)
return reply(mess.niReply0926({ e0: () => (Math.ceil(6 - horas)) }));
user.pet.tempoUltimoPasseio = agora;
const recompensa = Math.floor(Math.random() * 301) + 100;
user.coins += recompensa;
user.pet.experiencia = (user.pet.experiencia || 0) + 50;
user.pet.nivel = user.pet.nivel || 1;
const xpNecessario = user.pet.nivel * 100;
if (user.pet.experiencia >= xpNecessario) {
user.pet.experiencia -= xpNecessario;
user.pet.nivel++;
}
CoinsUpdate(RG_SCOINS);
await reply(mess.niReply0927({ e0: () => (user.pet.tipo), e1: () => (recompensa) }));
break;
}
case 'apelidopet': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModoCoins)
return reply(mess.niReply0928({ e0: () => (prefix) }));
const user = RG_SCOINS[ID_G_COINS]?.usus.find((u) => u.id === sender);
if (!user || !user.pet)
return reply(mess.niReply0929());
const apelido = args.join(" ").trim();
if (!apelido)
return reply(mess.niReplyExtra023({ e0: () => ("❌ Informe o apelido novo. Exemplo: " +
prefix +
"apelidopet Fofinho") }));
const custo = 500;
if (user.coins < custo)
return reply(mess.niReply0930({ e0: () => (custo) }));
user.coins -= custo;
user.pet.apelido = apelido;
CoinsUpdate(RG_SCOINS);
await reply(mess.niReply0931({ e0: () => (apelido), e1: () => (custo) }));
break;
}
case 'doarpet': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModoCoins)
return reply(mess.niReply0932({ e0: () => (prefix) }));
const mentions = info.message.extendedTextMessage?.contextInfo?.mentionedJid || [];
if (mentions.length === 0)
return reply(mess.niReply0933());
const alvo = mentions[0];
const argsPet = args[1];
if (!argsPet)
return reply(mess.niReplyExtra024({ e0: () => ("❌ Informe o tipo do pet que deseja doar. Exemplo: " +
prefix +
"doarpet @user gato") }));
let donoPet = null;
let petIndex = -1;
const grupoUsers = RG_SCOINS[ID_G_COINS]?.usus;
for (let i = 0; i < grupoUsers.length; i++) {
if (grupoUsers[i].pet && grupoUsers[i].pet.tipo === argsPet) {
donoPet = grupoUsers[i];
petIndex = i;
break;
}
}
if (!donoPet)
return reply(mess.niReply0934({ e0: () => (argsPet) }));
if (donoPet.id !== sender)
return reply(mess.niReply0935());
let userAlvo = grupoUsers.find((u) => u.id === alvo);
if (!userAlvo) {
userAlvo = { id: alvo, coins: 0, pet: null };
grupoUsers.push(userAlvo);
}
if (userAlvo.pet)
return reply(mess.niReply0936());
userAlvo.pet = donoPet.pet;
donoPet.pet = null;
CoinsUpdate(RG_SCOINS);
await reply(mess.niReply0937({ e0: () => (argsPet), e1: () => (alvo.split("@")[0]) }));
break;
}
case 'carinhopet': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModoCoins)
return reply(mess.niReply0938({ e0: () => (prefix) }));
const user = RG_SCOINS[ID_G_COINS]?.usus.find((u) => u.id === sender);
if (!user || !user.pet)
return reply(mess.niReply0939());
const agora = Date.now();
const intervaloCarinho = 60 * 60 * 1000;
if (!user.pet.carinhoHistorico)
user.pet.carinhoHistorico = [];
user.pet.carinhoHistorico = user.pet.carinhoHistorico.filter((ts) => agora - ts < intervaloCarinho);
const carinhosFeitos = user.pet.carinhoHistorico.length;
const carinhosRestantes = Math.max(0, 2 - carinhosFeitos);
if (carinhosRestantes === 0) {
return reply(mess.niReply0940());
}
user.pet.carinhoHistorico.push(agora);
user.pet.xp = (user.pet.xp || 0) + 50;
user.pet.nivel = Math.floor(user.pet.xp / 100) + 1;
user.pet.afeto = (user.pet.afeto || 0) + 10;
CoinsUpdate(RG_SCOINS);
await reply(mess.niReply0941({ e0: () => (user.pet.tipo), e1: () => (carinhosRestantes - 1) }));
break;
}
case 'petconstruir': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModoCoins)
return reply(mess.niReply0942({ e0: () => (prefix) }));
const user = RG_SCOINS[ID_G_COINS]?.usus.find((u) => u.id === sender);
if (!user || !user.pet)
return reply(mess.niReply0943());
const agora = Date.now();
const umaHora = 60 * 60 * 1000;
const limite = 3;
user.pet.construcoes =
user.pet.construcoes?.filter((t) => agora - t < umaHora) || [];
if (user.pet.construcoes.length >= limite) {
const restante = Math.ceil((umaHora - (agora - user.pet.construcoes[0])) / 60000);
return reply(mess.niReply0944({ e0: () => (limite), e1: () => (restante) }));
}
user.pet.construcoes.push(agora);
const pet = user.pet;
const xpGanhos = 100;
const fases = [
`🔨 *Iniciando a obra...*
🧱 🧱 🧱
🧱 🧱 🧱 🧱
`,
`🏗️ *Levantando paredes...*
🧱🏠 🧱🏠 🧱🏠
🧱🏠 🧱🏠 🧱🏠 🧱🏠
`,
`🌿 *Adicionando jardins e árvores...*
🏠🌳 🏠🌲 🏠🌳
🧱🏠🌴 🧱🏠🌳 🧱🏠🌴 🧱🏠🌳
`,
`🏠 *Construindo casas...*
🏠🏠🏠 🏠🏠🏠 🏠🏠🏠
🏠🏠🏠 🏠🏠🏠 🏠🏠🏠 🏠🏠🏠
`,
`🏡 *Base crescendo...*
🏡🏡🏡 🏡🏡🏡 🏡🏡🏡
🏡🏡🏡 🏡🏡🏡 🏡🏡🏡 🏡🏡🏡
`,
`🌆 *Adicionando prédios altos...*
🏢🏢🏢 🏢🏢🏢 🏢🏢🏢
🏢🏢🏢 🏢🏢🏢 🏢🏢🏢 🏢🏢🏢
`,
`🌟 *Finalizando detalhes e luzes...*
🏢🏢🏢 🏡🏡🏡 🏠🏠🏠
🌳🏢🏡 🌲🏡🏠 🌴🏠🏢 🌳🏡🏠
`,
];
const mensagem = await yuta.sendMessage(from, {
text: mess.niText1393({ e0: () => (pet.tipo) }),
mentions: [sender],
contextInfo: canalInfo([sender])
}, { quoted: yt });
let etapa = 0;
const intervalo = setInterval(async () => {
if (etapa >= fases.length) {
clearInterval(intervalo);
pet.xp = (pet.xp || 0) + xpGanhos;
pet.nivel = Math.floor(pet.xp / 100) + 1;
CoinsUpdate(RG_SCOINS);
return await yuta.sendMessage(from, {
text: mess.niText1394({ e0: () => (pet.tipo), e1: () => (xpGanhos), e2: () => (pet.xp), e3: () => (pet.nivel) }),
mentions: [sender],
contextInfo: canalInfo([sender])
}, { quoted: yt });
}
await yuta.sendMessage(from, {
edit: mensagem.key,
text: fases[etapa],
contextInfo: canalInfo([sender])
});
etapa++;
}, 3000);
break;
}
case 'dormirpet': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModoCoins)
return reply(mess.niReply0945({ e0: () => (prefix) }));
const user = RG_SCOINS[ID_G_COINS]?.usus.find((u) => u.id === sender);
if (!user || !user.pet)
return reply(mess.niReply0946());
const agora = Date.now();
if (user.pet.dormindo && agora < user.pet.dormindo) {
return reply(mess.niReply0947());
}
const tempoSono = 60 * 60 * 1000;
user.pet.dormindo = agora + tempoSono;
CoinsUpdate(RG_SCOINS);
return reply(mess.niReply0948({ prefix }));
break;
}
case 'acordarpet': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModoCoins)
return reply(mess.niReply0949({ e0: () => (prefix) }));
const user = RG_SCOINS[ID_G_COINS]?.usus.find((u) => u.id === sender);
if (!user || !user.pet)
return reply(mess.niReply0950());
const agora = Date.now();
if (!user.pet.dormindo || agora >= user.pet.dormindo) {
return reply(mess.niReply0951());
}
delete user.pet.dormindo;
CoinsUpdate(RG_SCOINS);
return reply(mess.niReply0952());
break;
}
case 'petrealeza': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModoCoins)
return reply(mess.niReply0953());
const user = RG_SCOINS[ID_G_COINS]?.usus.find((u) => u.id === sender);
if (!user || !user.pet)
return reply(mess.niReply0954());
const { tipo, nivel = 1, xp = 0, afeto = 0 } = user.pet;
const raros = [
"dragaoDourado",
"fenix",
"grifo",
"demonios",
"axolote",
];
const isRaro = raros.includes(tipo);
const bonusRaridade = isRaro ? 100 : 0;
const fama = nivel * 3 +
Math.floor(xp / 20) +
Math.floor(afeto / 5) +
bonusRaridade;
let titulo = "🐾 Camponês";
if (fama >= 50)
titulo = "🎖️ Cavaleiro Real";
if (fama >= 100)
titulo = "🏰 Lorde Feudal";
if (fama >= 150)
titulo = "👑 Rei dos Pets";
if (fama >= 250)
titulo = "🌟 Imperador Supremo";
if (fama >= 400)
titulo = "🦄 Lenda Celestial";
if (fama >= 600)
titulo = "🌌 Divindade Petversal";
const msg = `🐾 *Realeza do Seu Pet* 🐾
📛 *Nome do Pet:* ${user.pet.apelido || tipo.toUpperCase()}
🎖️ *Título de Nobreza:* ${titulo}
📈 *Fama Real:* ${fama} pontos
🏷️ *Tipo:* ${tipo} ${isRaro ? "✨ (Raro)" : ""}
📊 *Nível:* ${nivel}
🌟 *XP:* ${xp}
💞 *Afinidade:* ${afeto}
🔮 *Quanto mais XP, afinidade e raridade, mais nobreza seu pet conquista!*
`;
reply(msg);
break;
}
case 'diariopet': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModoCoins)
return reply(mess.niReply0955({ e0: () => (prefix) }));
const user = RG_SCOINS[ID_G_COINS]?.usus.find((u) => u.id === sender);
if (!user || !user.pet)
return reply(mess.niReply0956());
if (!user.pet.diario)
user.pet.diario = [];
if (!user.pet.ultimoDiario)
user.pet.ultimoDiario = 0;
const agora = Date.now();
const umDia = 24 * 60 * 60 * 1000;
if (agora - user.pet.ultimoDiario < umDia) {
const proximoUso = new Date(user.pet.ultimoDiario + umDia);
return reply(mess.niReply0957({ e0: () => (proximoUso.toLocaleString("pt-BR")) }));
}
const eventos = [
"Seu pet brincou alegremente no parque.",
"Seu pet encontrou uma moeda escondida!",
"Seu pet dormiu uma soneca gostosa.",
"Seu pet comeu muito e está satisfeito.",
"Seu pet fez novos amigos no grupo.",
"Seu pet ganhou um prêmio por bom comportamento.",
"Seu pet ficou curioso e explorou a casa.",
"Seu pet ajudou um amigo em apuros.",
"Seu pet está um pouco cansado hoje.",
"Seu pet fez um truque novo para você.",
];
const eventoHoje = eventos[Math.floor(Math.random() * eventos.length)];
const hoje = new Date().toLocaleDateString("pt-BR");
user.pet.diario.push({ data: hoje, evento: eventoHoje });
if (user.pet.diario.length > 10)
user.pet.diario.shift();
user.pet.ultimoDiario = agora;
CoinsUpdate(RG_SCOINS);
let msg = `📔 *Diário do seu Pet (${user.pet.tipo.toUpperCase()}):*\n\n`;
for (const entry of user.pet.diario.slice().reverse()) {
msg += `📅 ${entry.data} - ${entry.evento}\n`;
}
await reply(msg);
break;
}
case 'evoluirpet': {
if (!RG_SCOINS[ID_G_COINS] || !RG_SCOINS[ID_G_COINS].usus)
return reply(mess.niReply0958());
const user = RG_SCOINS[ID_G_COINS].usus.find((u) => u.id === sender);
if (!user || !user.pet)
return reply(mess.niReply0959());
const evolucoes = {
gato: { novo: "gatoMistico", lvl: 5 },
cachorro: { novo: "loboGuardiao", lvl: 5 },
jabuti: { novo: "tartarugaGigante", lvl: 5 },
periquito: { novo: "falcao", lvl: 5 },
};
const atual = user.pet.tipo;
const petsNaoEvolutiveis = [
"gatoMistico",
"loboGuardiao",
"tartarugaGigante",
"falcao",
"dragao",
"fenix",
"grifo",
"axolote",
"demonios",
"dragaoDourado",
];
if (petsNaoEvolutiveis.includes(atual))
return reply(mess.niReply0960());
if (!evolucoes[atual])
return reply(mess.niReply0961());
const reqNivel = evolucoes[atual].lvl;
if (user.pet.nivel < reqNivel)
return reply(mess.niReply0962({ e0: () => (reqNivel) }));
user.pet.tipo = evolucoes[atual].novo;
user.pet.nivel = 1;
user.pet.xp = 0;
CoinsUpdate(RG_SCOINS);
await reply(mess.niReply0963({ e0: () => (evolucoes[atual].novo.toUpperCase()) }));
break;
}
case 'petbatalha': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModoCoins)
return reply(mess.niReply0985({ e0: () => (prefix) }));
const mentionsPetBattle = info.message?.extendedTextMessage?.contextInfo?.mentionedJid || [];
if (mentionsPetBattle.length === 0)
return reply(mess.niReply0964());
const alvo = alvoCoinsPorMencao(mentionsPetBattle);
if (!alvo || mesmoUsuarioCoins(alvo, sender))
return reply(mess.niReply0964());
const user1 = getUsuarioCoins(sender, false);
const user2 = getUsuarioCoins(alvo, false);
if (!user1?.pet || !user2?.pet)
return reply(mess.niReply0965());
if ((user1.coins || 0) < 2000)
return reply(mess.niReply0966());
const agora = Date.now();
const intervaloLimite = 3 * 60 * 60 * 1000;
const maxBatalhas = 3;
if (!user1.pet.batalhaHistorico)
user1.pet.batalhaHistorico = [];
user1.pet.batalhaHistorico = user1.pet.batalhaHistorico.filter((ts) => agora - ts < intervaloLimite);
if (user1.pet.batalhaHistorico.length >= maxBatalhas) {
return reply(mess.niReply0967({ e0: () => (maxBatalhas) }));
}
user1.pet.batalhaHistorico.push(agora);
user1.coins -= 2000;
const força1 = (user1.pet.nivel || 1) + Math.floor(Math.random() * 10);
const força2 = (user2.pet.nivel || 1) + Math.floor(Math.random() * 10);
let resultado = "";
if (força1 > força2) {
user1.pet.xp = (user1.pet.xp || 0) + 100;
resultado = mess.niPetBatalhaResultado({ e0: () => `sᴇᴜ ᴘᴇᴛ ${user1.pet.tipo} ᴠᴇɴᴄᴇᴜ ᴀ ʙᴀᴛᴀʟʜᴀ. ʀᴇᴄᴏᴍᴘᴇɴsᴀ: +100 xᴘ` });
}
else if (força2 > força1) {
user2.pet.xp = (user2.pet.xp || 0) + 100;
resultado = mess.niPetBatalhaResultado({ e0: () => `sᴇᴜ ᴘᴇᴛ ᴘᴇʀᴅᴇᴜ. ᴏ ᴘᴇᴛ ᴅᴇ @${numeroCoins(alvo)} ᴠᴇɴᴄᴇᴜ ᴇ ɢᴀɴʜᴏᴜ +100 xᴘ` });
}
else {
resultado = mess.niPetBatalhaResultado({ e0: () => "ᴇᴍᴘᴀᴛᴇ. ɴᴇɴʜᴜᴍ ᴅᴏs ᴘᴇᴛs ɢᴀɴʜᴏᴜ xᴘ." });
}
CoinsUpdate(RG_SCOINS);
await yuta.sendMessage(from, { text: resultado, mentions: [alvo], contextInfo: canalInfo([sender, alvo]) }, { quoted: yt });
break;
}
case 'eventopet': {
const user = RG_SCOINS[ID_G_COINS]?.usus.find((u) => u.id === sender);
if (!user?.pet)
return reply(mess.niReply0968());
const agora = Date.now();
const intervaloLimite = 2 * 60 * 60 * 1000;
const maxUsos = 5;
if (!user.pet.eventopetHistorico)
user.pet.eventopetHistorico = [];
user.pet.eventopetHistorico = user.pet.eventopetHistorico.filter((ts) => agora - ts < intervaloLimite);
if (user.pet.eventopetHistorico.length >= maxUsos) {
return reply(mess.niReply0969({ e0: () => (maxUsos) }));
}
user.pet.eventopetHistorico.push(agora);
const eventos = [
"Seu pet achou um baú e ganhou 300 coins!",
"Seu pet ficou doente... Precisa de descanso.",
"Seu pet trouxe um presente: +50 XP!",
"Seu pet ficou bravo hoje... perdeu -10 de afeto.",
"Seu pet ficou muito feliz! +20 de afeto.",
];
const sorteio = eventos[Math.floor(Math.random() * eventos.length)];
if (!user.pet.ultimoAumentoAfeto)
user.pet.ultimoAumentoAfeto = 0;
const limiteAfetoIntervalo = 2 * 60 * 60 * 1000;
function tentarAumentarAfeto(pontos) {
if (agora - user.pet.ultimoAumentoAfeto >= limiteAfetoIntervalo) {
user.pet.afeto = (user.pet.afeto || 0) + Math.min(pontos, 5);
user.pet.ultimoAumentoAfeto = agora;
}
}
if (sorteio.includes("300 coins")) {
user.coins += 300;
tentarAumentarAfeto(5);
}
if (sorteio.includes("+50 XP")) {
user.pet.xp = (user.pet.xp || 0) + 50;
tentarAumentarAfeto(5);
}
if (sorteio.includes("+20 de afeto")) {
user.pet.afeto = (user.pet.afeto || 0) + 20;
tentarAumentarAfeto(5);
}
if (sorteio.includes("-10 de afeto")) {
user.pet.afeto = Math.max(0, (user.pet.afeto || 0) - 10);
}
CoinsUpdate(RG_SCOINS);
await reply(mess.niReply0970({ e0: () => (sorteio), e1: () => (user.pet.afeto) }));
break;
}
case 'comerdajob': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModoCoins)
return reply(mess.niReply0971({ e0: () => (prefix) }));
const userJob = RG_SCOINS[ID_G_COINS]?.usus.find((u) => u.id === sender);
if (!userJob)
return reply(mess.niReply0972());
const precoJob = 2000;
if (userJob.coins < precoJob)
return reply(mess.niReply0973({ e0: () => (precoJob) }));
userJob.coins -= precoJob;
CoinsUpdate(RG_SCOINS);
const mensagensJob = [
`🎉 Você gastou ${precoJob} coins em um encontro premium e viveu um evento inesquecível no RPG!`,
`💫 Pagou ${precoJob} coins e aproveitou um encontro especial no sistema de coins.`,
`🌟 Você curtiu um evento exclusivo por ${precoJob} coins. Experiência concluída com sucesso!`,
];
const msgJob = mensagensJob[Math.floor(Math.random() * mensagensJob.length)];
await reply(msgJob);
break;
}
case 'comprararma': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModoCoins)
return reply(mess.niReply0974({ e0: () => (prefix) }));
const userArma = RG_SCOINS[ID_G_COINS]?.usus.find((u) => u.id === sender);
if (!userArma)
return reply(mess.niReply0975());
const precoArma = 5000;
if (userArma.coins < precoArma)
return reply(mess.niReply0976({ e0: () => (precoArma) }));
userArma.coins -= precoArma;
if (!userArma.itens)
userArma.itens = {};
userArma.itens.arma = true;
CoinsUpdate(RG_SCOINS);
const mensagensArma = [
`🔫 Você comprou uma arma por ${precoArma} coins. Agora você pode eliminar um alvo... cuidado com o escudo deles!`,
`💥 Pagou ${precoArma} coins por uma arma mortal. Agora é só mirar e atirar no comando *${prefix}matar @alvo*!`,
`🪖 Você adquiriu uma arma de elite por ${precoArma} coins. Sua próxima vítima que se cuide...`,
`💣 Arma comprada com sucesso por ${precoArma} coins. O grupo não está mais seguro!`,
];
await reply(mensagensArma[Math.floor(Math.random() * mensagensArma.length)]);
break;
}
case 'eliminar': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModoCoins)
return reply(mess.niReply0977({ e0: () => (prefix) }));
const mentionsKill = info.message?.extendedTextMessage?.contextInfo?.mentionedJid || [];
if (mentionsKill.length === 0)
return reply(mess.niReply0978());
const alvoKill = alvoCoinsPorMencao(mentionsKill);
const userKill = getUsuarioCoins(sender, false);
const userAlvoKill = getUsuarioCoins(alvoKill, false);
if (!userKill)
return reply(mess.niReply0979());
if (!userAlvoKill)
return reply(mess.niReply0980());
if (!userKill.itens?.arma)
return reply(mess.niReply0981({ e0: () => (prefix), prefix }));
if (userAlvoKill.pocaoProtecao) {
const agoraKill = Date.now();
const expiracao = userAlvoKill.pocaoProtecaoExpira || 0;
if (agoraKill < expiracao) {
return reply(mess.niReply0982({ e0: () => (numeroCoins(alvoKill)) }));
}
else {
delete userAlvoKill.pocaoProtecao;
delete userAlvoKill.pocaoProtecaoExpira;
CoinsUpdate(RG_SCOINS);
}
}
const multaEscudo = 1000;
if (userAlvoKill.itens?.escudo) {
if (userKill.coins >= multaEscudo) {
userKill.coins -= multaEscudo;
await reply(mess.niReply0983({ e0: () => (multaEscudo) }));
}
else {
await reply(mess.niReply0984({ e0: () => (multaEscudo) }));
}
delete userKill.itens.arma;
CoinsUpdate(RG_SCOINS);
return;
}
zerarCoinsUsuario(alvoKill);
delete userKill.itens.arma;
CoinsUpdate(RG_SCOINS);
await yuta.sendMessage(from, {
text: mess.niText1395({ e0: () => (numeroCoins(alvoKill)) }),
mentions: [alvoKill],
contextInfo: canalInfo([sender, alvoKill])
}, { quoted: yt });
break;
}
case 'comprarpet': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModoCoins)
return reply(mess.niReply0985({ e0: () => (prefix) }));
const tipoPetCompra = args[0]?.toLowerCase();
const pets = {
gato: { preco: 3000 },
cachorro: { preco: 2000 },
jabuti: { preco: 1000 },
periquito: { preco: 4000 },
dragao: { preco: 20000 },
};
if (!tipoPetCompra || !pets[tipoPetCompra]) {
return reply(mess.niReply0986({ e0: () => (prefix) }));
}
const userPetCompra = RG_SCOINS[ID_G_COINS]?.usus.find((u) => u.id === sender);
if (!userPetCompra)
return reply(mess.niReply0987());
if (userPetCompra.pet)
return reply(mess.niReply0988({ e0: () => (prefix), prefix }));
const precoPetCompra = pets[tipoPetCompra].preco;
if (userPetCompra.coins < precoPetCompra)
return reply(mess.niReply0989({ e0: () => (tipoPetCompra), e1: () => (precoPetCompra) }));
userPetCompra.coins -= precoPetCompra;
userPetCompra.pet = {
tipo: tipoPetCompra,
fome: 100,
tempoUltimaAlimentacao: Date.now(),
tempoUltimoBanho: null,
tempoUltimoPasseio: null,
criadoEm: Date.now(),
afeto: 0,
nivel: 1,
};
CoinsUpdate(RG_SCOINS);
await yuta.sendMessage(from, {
text: mess.niText1396({ e0: () => (tipoPetCompra.toUpperCase()), e1: () => (precoPetCompra) }),
contextInfo: canalInfo([sender])
}, { quoted: yt });
break;
}
case 'mercadopet': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModoCoins)
return reply(mess.niReply0990({ e0: () => (prefix) }));
let msgMercado = `- *🐾 | 𝐌𝐄𝐑𝐂𝐀𝐃𝐎 𝐏𝐄𝐓*
- *🍽️ | 𝙲𝙾𝙼𝙸𝙳𝙰𝚂 𝙳𝙸𝚂𝙿𝙾𝙽Í𝚅𝙴𝙸𝚂*
🐱 GATO
🍣 Peixe (+50 fome) - 300 coins
🥛 Leite (+30 fome) - 150 coins
🐶 CACHORRO
🦴 Osso (+40 fome) - 250 coins
🥫 Ração (+60 fome) - 400 coins
🐢 JABUTI
🥬 Alface (+30 fome) - 200 coins
🍎 Fruta (+50 fome) - 300 coins
🐦 PERIQUITO
🌾 Sementes (+30 fome) - 200 coins
🍌 Banana (+50 fome) - 350 coins
🐉 DRAGÃO
🥩 Carne mágica (+70 fome) - 1000 coins
🔥 Lava temperada (+100 fome) - 2000 coins
🦅 GRIFO
🪶 Pena de Grifo (+65 fome) - 9000 coins
🍖 Carne de Caça (+80 fome) - 11000 coins
🔥 FÊNIX
🍎 Pomo de Fênix (+70 fome) - 5000 coins
🔥 Fogo Sagrado (+90 fome) - 15000 coins
🐉 DRAGÃO DOURADO
🐉 Escama de Dragão (+80 fome) - 15000 coins
🔥 Fogo Dourado (+100 fome) - 20000 coins
👹 DEMONIOS
👹 Chifre de demonios (+75 fome) - 12000 coins
🍯 Néctar Mágico (+85 fome) - 13000 coins
- *🛒 | 𝚄𝚂𝙴 → ${prefix}comprarcomida <nome_da_comida>*`;
await reply(msgMercado);
break;
}
case 'comprarcomida': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModoCoins)
return reply(mess.niReply0991({ e0: () => (prefix) }));
const itemCompra = args[0]?.toLowerCase();
const comidasCompra = {
peixe: { nome: "🍣 Peixe", preco: 300, fome: 50, pets: ["gato"] },
leite: { nome: "🥛 Leite", preco: 150, fome: 30, pets: ["gato"] },
osso: { nome: "🦴 Osso", preco: 250, fome: 40, pets: ["cachorro"] },
racao: { nome: "🥫 Ração", preco: 400, fome: 60, pets: ["cachorro"] },
alface: { nome: "🥬 Alface", preco: 200, fome: 30, pets: ["jabuti"] },
fruta: { nome: "🍎 Fruta", preco: 300, fome: 50, pets: ["jabuti"] },
sementes: { nome: "🌾 Sementes", preco: 200, fome: 30, pets: ["periquito"] },
banana: { nome: "🍌 Banana", preco: 350, fome: 50, pets: ["periquito"] },
carne: { nome: "🥩 Carne mágica", preco: 1000, fome: 70, pets: ["dragao"] },
lava: { nome: "🔥 Lava temperada", preco: 2000, fome: 100, pets: ["dragao"] },
"pena-de-grifo": { nome: "🪶 Pena de Grifo", preco: 9000, fome: 65, pets: ["grifo"] },
"carne-de-caca": { nome: "🍖 Carne de Caça", preco: 11000, fome: 80, pets: ["grifo"] },
"pomo-de-fenix": { nome: "🍎 Pomo de Fênix", preco: 5000, fome: 70, pets: ["fenix"] },
"fogo-sagrado": { nome: "🔥 Fogo Sagrado", preco: 15000, fome: 90, pets: ["fenix"] },
"escama-de-dragao": { nome: "🐉 Escama de Dragão", preco: 15000, fome: 80, pets: ["dragaoDourado"] },
"fogo-dourado": { nome: "🔥 Fogo Dourado", preco: 20000, fome: 100, pets: ["dragaoDourado"] },
"chifre-de-demonios": { nome: "👹 Chifre de demonios", preco: 12000, fome: 75, pets: ["demonios"] },
"nectar-magico": { nome: "🍯 Néctar Mágico", preco: 13000, fome: 85, pets: ["demonios"] },
};
if (!itemCompra || !comidasCompra[itemCompra]) {
return reply(mess.niReply0992({ e0: () => (prefix), prefix }));
}
const userCompraComida = RG_SCOINS[ID_G_COINS]?.usus.find((u) => u.id === sender);
if (!userCompraComida)
return reply(mess.niReply0993());
if (!userCompraComida.pet)
return reply(mess.niReply0994());
if (!comidasCompra[itemCompra].pets.includes(userCompraComida.pet.tipo)) {
return reply(mess.niReply0995({ e0: () => (comidasCompra[itemCompra].nome) }));
}
if (userCompraComida.coins < comidasCompra[itemCompra].preco) {
return reply(mess.niReply0996({ e0: () => (comidasCompra[itemCompra].nome), e1: () => (comidasCompra[itemCompra].preco) }));
}
userCompraComida.coins -= comidasCompra[itemCompra].preco;
userCompraComida.pet.inventario = userCompraComida.pet.inventario || {};
if (!userCompraComida.pet.inventario[itemCompra]) {
userCompraComida.pet.inventario[itemCompra] = 1;
}
else {
userCompraComida.pet.inventario[itemCompra] += 1;
}
CoinsUpdate(RG_SCOINS);
await yuta.sendMessage(from, {
text: mess.niText1397({ e0: () => (userCompraComida.pet.tipo.toUpperCase()), e1: () => (comidasCompra[itemCompra].nome), e2: () => (comidasCompra[itemCompra].preco) }),
contextInfo: canalInfo([sender])
}, { quoted: yt });
break;
}
case 'alimentarpet': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModoCoins)
return reply(mess.niReply0997({ e0: () => (prefix) }));
const comidaPet = args[0]?.toLowerCase();
const userAlimentaPet = RG_SCOINS[ID_G_COINS]?.usus.find((u) => u.id === sender);
if (!userAlimentaPet || !userAlimentaPet.pet)
return reply(mess.niReply0998());
if (!comidaPet)
return reply(mess.niReply0999({ e0: () => (prefix), prefix }));
const tabelaPet = {
peixe: { nome: "🍣 Peixe", fome: 50, pets: ["gato"] },
leite: { nome: "🥛 Leite", fome: 30, pets: ["gato"] },
osso: { nome: "🦴 Osso", fome: 40, pets: ["cachorro"] },
racao: { nome: "🥫 Ração", fome: 60, pets: ["cachorro"] },
alface: { nome: "🥬 Alface", fome: 30, pets: ["jabuti"] },
fruta: { nome: "🍎 Fruta", fome: 50, pets: ["jabuti"] },
sementes: { nome: "🌾 Sementes", fome: 30, pets: ["periquito"] },
banana: { nome: "🍌 Banana", fome: 50, pets: ["periquito"] },
carne: { nome: "🥩 Carne mágica", fome: 70, pets: ["dragao"] },
lava: { nome: "🔥 Lava temperada", fome: 100, pets: ["dragao"] },
"pena-de-grifo": { nome: "🪶 Pena de Grifo", fome: 65, pets: ["grifo"] },
"carne-de-caca": { nome: "🍖 Carne de Caça", fome: 80, pets: ["grifo"] },
"pomo-de-fenix": { nome: "🍎 Pomo de Fênix", fome: 70, pets: ["fenix"] },
"fogo-sagrado": { nome: "🔥 Fogo Sagrado", fome: 90, pets: ["fenix"] },
"escama-de-dragao": { nome: "🐉 Escama de Dragão", fome: 80, pets: ["dragaoDourado"] },
"fogo-dourado": { nome: "🔥 Fogo Dourado", fome: 100, pets: ["dragaoDourado"] },
"chifre-de-demonios": { nome: "👹 Chifre de demonios", fome: 75, pets: ["demonios"] },
"nectar-magico": { nome: "🍯 Néctar Mágico", fome: 85, pets: ["demonios"] },
};
const petAl = userAlimentaPet.pet;
const inventarioAl = petAl.inventario || {};
if (!tabelaPet[comidaPet])
return reply(mess.niReply1000({ e0: () => (prefix) }));
if (!tabelaPet[comidaPet].pets.includes(petAl.tipo)) {
return reply(mess.niReply1001({ e0: () => (petAl.tipo), e1: () => (tabelaPet[comidaPet].nome) }));
}
if (!inventarioAl[comidaPet] || inventarioAl[comidaPet] <= 0) {
return reply(mess.niReply1002({ e0: () => (tabelaPet[comidaPet].nome), e1: () => (prefix), e2: () => (comidaPet) }));
}
inventarioAl[comidaPet]--;
petAl.fome = Math.min(100, (petAl.fome || 0) + tabelaPet[comidaPet].fome);
petAl.tempoUltimaAlimentacao = Date.now();
CoinsUpdate(RG_SCOINS);
await yuta.sendMessage(from, {
text: mess.niText1398({ e0: () => (petAl.tipo.toUpperCase()), e1: () => (tabelaPet[comidaPet].nome), e2: () => (petAl.fome) }),
contextInfo: canalInfo([sender])
}, { quoted: yt });
break;
}
case 'alimentarpet': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModoCoins)
return reply(mess.niReply1003({ e0: () => (prefix) }));
const comida = args[0]?.toLowerCase();
const user = RG_SCOINS[ID_G_COINS]?.usus.find((u) => u.id === sender);
if (!user || !user.pet)
return reply(mess.niReply1004());
if (!comida)
return reply(mess.niReply1005({ e0: () => (prefix), prefix }));
const tabela = {
peixe: { nome: "🍣 Peixe", fome: 50, pets: ["gato"] },
leite: { nome: "🥛 Leite", fome: 30, pets: ["gato"] },
osso: { nome: "🦴 Osso", fome: 40, pets: ["cachorro"] },
racao: { nome: "🥫 Ração", fome: 60, pets: ["cachorro"] },
alface: { nome: "🥬 Alface", fome: 30, pets: ["jabuti"] },
fruta: { nome: "🍎 Fruta", fome: 50, pets: ["jabuti"] },
sementes: { nome: "🌾 Sementes", fome: 30, pets: ["periquito"] },
banana: { nome: "🍌 Banana", fome: 50, pets: ["periquito"] },
carne: { nome: "🥩 Carne mágica", fome: 70, pets: ["dragao"] },
lava: { nome: "🔥 Lava temperada", fome: 100, pets: ["dragao"] },
"pena-de-grifo": {
nome: "🪶 Pena de Grifo",
fome: 65,
pets: ["grifo"],
},
"carne-de-caca": {
nome: "🍖 Carne de Caça",
fome: 80,
pets: ["grifo"],
},
"pomo-de-fenix": {
nome: "🍎 Pomo de Fênix",
fome: 70,
pets: ["fenix"],
},
"fogo-sagrado": {
nome: "🔥 Fogo Sagrado",
fome: 90,
pets: ["fenix"],
},
"escama-de-dragao": {
nome: "🐉 Escama de Dragão",
fome: 80,
pets: ["dragaoDourado"],
},
"fogo-dourado": {
nome: "🔥 Fogo Dourado",
fome: 100,
pets: ["dragaoDourado"],
},
"chifre-de-demonios": {
nome: "👹 Chifre de demonios",
fome: 75,
pets: ["demonios"],
},
"nectar-magico": {
nome: "🍯 Néctar Mágico",
fome: 85,
pets: ["demonios"],
},
};
const pet = user.pet;
const inventario = pet.inventario || {};
if (!tabela[comida])
return reply(mess.niReply1006({ e0: () => (prefix) }));
if (!tabela[comida].pets.includes(pet.tipo)) {
return reply(mess.niReply1007({ e0: () => (pet.tipo), e1: () => (tabela[comida].nome) }));
}
if (!inventario[comida] || inventario[comida] <= 0) {
return reply(mess.niReply1008({ e0: () => (tabela[comida].nome), e1: () => (prefix), e2: () => (comida) }));
}
inventario[comida]--;
pet.fome = Math.min(100, (pet.fome || 0) + tabela[comida].fome);
pet.tempoUltimaAlimentacao = Date.now();
CoinsUpdate(RG_SCOINS);
await reply(mess.niReply1009({ e0: () => (pet.tipo), e1: () => (tabela[comida].nome), e2: () => (pet.fome) }));
break;
}
case 'inventariopet': {
if (!isGroup)
return reply(mess.onlyGroup());
const userInvPet = RG_SCOINS[ID_G_COINS]?.usus.find((u) => u.id === sender);
if (!userInvPet || !userInvPet.pet)
return reply(mess.niReply1010());
const inventarioPet = userInvPet.pet.inventario || {};
if (Object.keys(inventarioPet).length === 0)
return reply(mess.niReply1011());
const nomesComidas = {
peixe: "🍣 Peixe",
leite: "🥛 Leite",
osso: "🦴 Osso",
racao: "🥫 Ração",
alface: "🥬 Alface",
fruta: "🍎 Fruta",
sementes: "🌾 Sementes",
banana: "🍌 Banana",
carne: "🥩 Carne mágica",
lava: "🔥 Lava temperada",
"pena-de-grifo": "🪶 Pena de Grifo",
"carne-de-caca": "🍖 Carne de Caça",
"pomo-de-fenix": "🍎 Pomo de Fênix",
"fogo-sagrado": "🔥 Fogo Sagrado",
"escama-de-dragao": "🐉 Escama de Dragão",
"fogo-dourado": "🔥 Fogo Dourado",
"chifre-de-demonios": "👹 Chifre de demônios",
"nectar-magico": "🍯 Néctar Mágico",
};
let msgInvPet = `- *🎒 | 𝐈𝐍𝐕𝐄𝐍𝐓Á𝐑𝐈𝐎 𝐃𝐎 𝐏𝐄𝐓*\n\n`;
for (const [item, qtd] of Object.entries(inventarioPet)) {
const nome = nomesComidas[item] || item;
msgInvPet += `- *🍱 | ${nome} → ${qtd}*\n`;
}
await reply(msgInvPet);
break;
}
case 'venderpet':
{
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModoCoins)
return reply(mess.niReply1012({ e0: () => (prefix) }));
const userVendaPet = RG_SCOINS[ID_G_COINS]?.usus.find((u) => u.id === sender);
if (!userVendaPet || !userVendaPet.pet)
return reply(mess.niReply1013());
const valoresPetVenda = {
gato: 3000,
cachorro: 2000,
jabuti: 1000,
periquito: 4000,
dragao: 20000,
};
const tipoVenda = userVendaPet.pet.tipo;
const precoTotalVenda = valoresPetVenda[tipoVenda];
const valorVenda = Math.floor(precoTotalVenda * 0.5);
if (!args[0]) {
userVendaPet.querVenderPet = true;
CoinsUpdate(RG_SCOINS);
return reply(mess.niReply1014({ e0: () => (tipoVenda), e1: () => (valorVenda) }));
}
if (args[0].toLowerCase() === "sim") {
if (!userVendaPet.querVenderPet)
return reply(mess.niReply1015({ prefix }));
userVendaPet.coins = (userVendaPet.coins || 0) + valorVenda;
delete userVendaPet.pet;
delete userVendaPet.querVenderPet;
CoinsUpdate(RG_SCOINS);
return reply(mess.niReply1016({ e0: () => (tipoVenda), e1: () => (valorVenda), e2: () => (userVendaPet.coins) }));
}
return reply(mess.niReply1017());
}
break;

case 'lojararos': {
if (!isVip)
return reply(mess.onlyVipUser());
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModoCoins)
return reply(mess.niReply1018({ e0: () => (prefix) }));
const petsRaros = {
dragaoDourado: { nome: "🐉 Dragão Dourado", preco: 40000 },
fenix: { nome: "🔥 Fênix", preco: 35000 },
demonios: { nome: "👹 Demonios", preco: 55000 },
grifo: { nome: "🦅 Grifo", preco: 38000 },
axolote: { nome: "🐟 Axolote", preco: 30000 },
};
const escolha = args[0]?.toLowerCase();
if (!escolha || !petsRaros[escolha]) {
let msg = `🐾 *Lojinha de Pets Raros*\n\nPets disponíveis:\n`;
for (const p in petsRaros) {
msg += `${petsRaros[p].nome} - ${petsRaros[p].preco} coins\n`;
}
msg += `\nUse: ${prefix}lojararos <nome_do_pet>`;
return reply(msg);
}
const user = RG_SCOINS[ID_G_COINS]?.usus.find((u) => u.id === sender);
if (!user)
return reply(mess.niReply1019());
if (user.pet)
return reply(mess.niReply1020());
const petEscolhido = petsRaros[escolha];
if (user.coins < petEscolhido.preco)
return reply(mess.niReply1021({ e0: () => (petEscolhido.nome), e1: () => (petEscolhido.preco) }));
user.coins -= petEscolhido.preco;
user.pet = {
tipo: escolha,
nome: petEscolhido.nome,
fome: 100,
afeto: 0,
nivel: 1,
criadoEm: Date.now(),
tempoUltimaAlimentacao: Date.now(),
tempoUltimoBanho: null,
tempoUltimoPasseio: null,
tempoMissao: null,
tempoUltimaMissao: null,
apelido: null,
nomeExibicao: null,
};
CoinsUpdate(RG_SCOINS);
await reply(mess.niReply1022({ e0: () => (petEscolhido.nome), e1: () => (petEscolhido.preco) }));
break;
}
case 'petmissao': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModoCoins)
return reply(mess.niReply1023({ e0: () => (prefix) }));
const user = RG_SCOINS[ID_G_COINS]?.usus.find((u) => u.id === sender);
if (!user || !user.pet)
return reply(mess.niReply1024());
const agora = Date.now();
const duracao = 15 * 60 * 1000;
if (user.pet.tempoMissao &&
agora < user.pet.tempoMissao + duracao) {
const restante = ((user.pet.tempoMissao + duracao - agora) /
60000).toFixed(1);
return reply(mess.niReply1025({ e0: () => (restante) }));
}
user.pet.tempoMissao = agora;
CoinsUpdate(RG_SCOINS);
reply(mess.niReply1026());
setTimeout(async () => {
const resultado = Math.floor(Math.random() * 100);
let textoFinal = "";
let coinsGanhos = 0;
if (resultado < 50) {
coinsGanhos = Math.floor(Math.random() * 401) + 100;
user.coins += coinsGanhos;
textoFinal = `🦴 *Missão concluída!*\nSeu *${user.pet.tipo}* voltou da missão e encontrou *${coinsGanhos} coins*!`;
}
else if (resultado < 80) {
textoFinal = `💤 *Missão fracassada!*\nSeu *${user.pet.tipo}* voltou sem encontrar nada...`;
}
else {
textoFinal = `😿 *Pet machucado!*\nSeu *${user.pet.tipo}* voltou da missão machucado e precisa de descanso.`;
}
user.pet.xp = (user.pet.xp || 0) + 50;
user.pet.nivel = Math.floor(user.pet.xp / 100) + 1;
user.pet.tempoUltimaMissao = Date.now();
CoinsUpdate(RG_SCOINS);
await yuta.sendMessage(from, {
text: mess.niText1399({ e0: () => (sender.split("@")[0]), e1: () => (textoFinal), e2: () => (user.pet.xp), e3: () => (user.pet.nivel) }),
mentions: [sender],
contextInfo: canalInfo([sender])
}, { quoted: yt });
}, duracao);
break;
}
case 'rankpets': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModoCoins)
return reply(mess.niReply1027({ e0: () => (prefix) }));
const precosPets = {
gato: 3000,
cachorro: 2000,
jabuti: 1000,
periquito: 4000,
dragao: 20000,
dragaoDourado: 40000,
fenix: 35000,
demonios: 55000,
grifo: 38000,
axolote: 30000,
};
let todosUsuariosPets = [];
for (const grupoKey of Object.keys(RG_SCOINS)) {
const grupoP = RG_SCOINS[grupoKey];
if (!grupoP?.usus)
continue;
const usuariosComPet = grupoP.usus.filter((u) => u.pet?.tipo && u.id);
usuariosComPet.forEach((u) => {
todosUsuariosPets.push({
id: u.id,
tipo: u.pet.tipo,
apelido: u.pet.apelido || "Sem apelido",
preco: precosPets[u.pet.tipo] || 0,
});
});
}
if (todosUsuariosPets.length === 0)
return reply(mess.niReply1028());
todosUsuariosPets.sort((a, b) => b.preco - a.preco);
const top5Pets = todosUsuariosPets.slice(0, 5);
let mentionsIdsPets = [];
let msgRankPets = `- *🐾 | 𝐑𝐀𝐍𝐊𝐈𝐍𝐆 𝐃𝐎𝐒 𝐏𝐄𝐓𝐒 𝐌𝐀𝐈𝐒 𝐕𝐀𝐋𝐈𝐎𝐒𝐎𝐒*\n\n`;
top5Pets.forEach((u, i) => {
msgRankPets +=
`- *🏆 | ${i + 1}º 𝙻𝚄𝙶𝙰𝚁*\n` +
`- *👤 | 𝚄𝚂𝚄Á𝚁𝙸𝙾* → *@${u.id.split("@")[0]}*\n` +
`- *🐾 | 𝙿𝙴𝚃 → ${u.apelido}*\n` +
`- *💎 | 𝚃𝙸𝙿𝙾 → ${u.tipo.toUpperCase()}*\n` +
`- *💰 | 𝚅𝙰𝙻𝙾𝚁 → ${u.preco} N-Coins*\n\n`;
mentionsIdsPets.push(u.id);
});
await yuta.sendMessage(from, { text: msgRankPets.trim(), mentions: mentionsIdsPets, contextInfo: canalInfo([sender]) }, { quoted: yt });
break;
}
case 'registrarcidade':
case 'entrarnacidade':
{
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModoCoins)
return reply(mess.niReply1029({ e0: () => (prefix) }));
const userCidadeReg = getUsuarioCidade(sender);
if (!userCidadeReg)
return reply(mess.niReply1030());
if (userCidadeReg.cidade?.nome)
return reply(mess.niReply1031({ e0: () => (userCidadeReg.cidade.nome) }));
const nomeCidade = q?.trim() || pushname || sender.split('@')[0];
userCidadeReg.cidade = {
nome: nomeCidade,
cargo: 'Desempregado',
idCargo: 'desempregado',
bairro: 'centro',
reputacao: 0,
energia: 100,
fome: 100,
saude: 100,
nivel: 1,
xp: 0,
saldoBanco: 0,
ultimaColeta: 0,
ultimoTrabalho: 0,
ultimoCrime: 0,
ultimaCorrida: 0,
ultimaPesca: 0,
ultimaComida: 0,
ultimoDescanso: 0,
ultimoLucroEmpresa: 0,
presoAte: 0,
inventario: {},
casa: null,
veiculo: null,
combustivel: 0,
durabilidadeVeiculo: 100,
empresa: null,
parceiro: null,
aluguelAtivo: null,
hospitalUltimo: 0,
ultimoAssaltoPlayer: 0
};
CoinsUpdate(RG_SCOINS);
const texto = `- *🌆 | 𝐂𝐈𝐃𝐀𝐃𝐄 𝐂𝐀𝐃𝐀𝐒𝐓𝐑𝐀𝐃𝐀*
- *👤 | 𝙲𝙸𝙳𝙰𝙳Ã𝙾 → ${userCidadeReg.cidade.nome}*
- *🏙️ | 𝙱𝙰𝙸𝚁𝚁𝙾 → ${CIDADE_BAIRROS?.[userCidadeReg.cidade.bairro]?.nome || 'Centro'}*
- *💼 | 𝙲𝙰𝚁𝙶𝙾 → ${userCidadeReg.cidade.cargo}*
- *⚡ | 𝙴𝙽𝙴𝚁𝙶𝙸𝙰 → ${userCidadeReg.cidade.energia}*
- *🍔 | 𝙵𝙾𝙼𝙴 → ${userCidadeReg.cidade.fome}*
- *❤️ | 𝚂𝙰Ú𝙳𝙴 → ${userCidadeReg.cidade.saude}*`;
await yuta.sendMessage(from, {
text: texto,
mentions: [sender],
contextInfo: canalInfo([sender])
}, { quoted: yt });
}
break;

case 'perfilcidade':
case 'cidadeperfil': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModoCoins)
return reply(mess.niReply1032({ e0: () => (prefix) }));
try {
const userCidadePerfil = getUsuarioCidade(sender);
if (!userCidadePerfil?.cidade?.nome)
return reply(mess.niReply1033({ e0: () => (prefix) }));
cidadeXpUp(userCidadePerfil.cidade);
const parceiroTxt = userCidadePerfil.cidade.parceiro ? `@${numeroCoins(userCidadePerfil.cidade.parceiro)}` : 'Nenhum';
const presoAtePerfil = cidadeEstaPreso(userCidadePerfil.cidade) ? `Preso por mais ${cidadeTempo(userCidadePerfil.cidade.presoAte - Date.now())}` : 'Livre';
const casasPerfil = cidadeCasasLista(userCidadePerfil.cidade);
const casasAlugadasPerfil = casasPerfil.filter(c => c.aluguelAtivo).length;
const mentionsCidade = userCidadePerfil.cidade.parceiro ? [sender, userCidadePerfil.cidade.parceiro] : [sender];
CoinsUpdate(RG_SCOINS);
const texto = `🌆 *ᴘᴇʀғɪʟ ᴅᴀ ᴄɪᴅᴀᴅᴇ* ↝ @${numeroCoins(sender)}
👤 ᴄɪᴅᴀᴅãᴏ: *${userCidadePerfil.cidade.nome}*
🏙️ ʙᴀɪʀʀᴏ: *${cidadeNomeBairro(userCidadePerfil.cidade.bairro)}*
💼 ᴄᴀʀɢᴏ: *${userCidadePerfil.cidade.cargo || 'Morador'}*
💰 ᴄᴀʀᴛᴇɪʀᴀ: *${userCidadePerfil.coins || 0} ɴ-ᴄᴏɪɴs*
🏛️ ʙᴀɴᴄᴏ: *${userCidadePerfil.cidade.saldoBanco || 0} ɴ-ᴄᴏɪɴs*
⚡ ᴇɴᴇʀɢɪᴀ: *${userCidadePerfil.cidade.energia || 0}%*
🍔 ғᴏᴍᴇ: *${userCidadePerfil.cidade.fome || 0}%*
❤️ sᴀúᴅᴇ: *${userCidadePerfil.cidade.saude || 0}%*
🏠 ᴄᴀsᴀ ᴀᴛᴜᴀʟ: *${cidadeNomeCasa(userCidadePerfil.cidade.casa)}*
🏘️ ᴄᴀsᴀs: *${cidadeResumoCasas(userCidadePerfil.cidade)}*
🔑 ᴀʟᴜɢᴀᴅᴀs: *${casasAlugadasPerfil}/${casasPerfil.length}*
🚗 ᴠᴇíᴄᴜʟᴏ: *${cidadeNomeVeiculo(userCidadePerfil.cidade.veiculo)}*
⛽ ᴄᴏᴍʙᴜsᴛíᴠᴇʟ: *${userCidadePerfil.cidade.combustivel || 0}*
🔧 ᴅᴜʀᴀʙɪʟɪᴅᴀᴅᴇ: *${userCidadePerfil.cidade.durabilidadeVeiculo || 100}%*
⭐ ʀᴇᴘᴜᴛᴀçãᴏ: *${userCidadePerfil.cidade.reputacao || 0}*
📈 ɴíᴠᴇʟ: *${userCidadePerfil.cidade.nivel || 1}*
🧠 xᴘ: *${userCidadePerfil.cidade.xp || 0}/${(userCidadePerfil.cidade.nivel || 1) * 100}*
💍 ᴘᴀʀᴄᴇɪʀᴏ: *${parceiroTxt}*
🚨 sᴛᴀᴛᴜs: *${presoAtePerfil}*
💎 ᴘᴀᴛʀɪᴍôɴɪᴏ: *${cidadePatrimonio(userCidadePerfil) || 0} ɴ-ᴄᴏɪɴs*`;
await yuta.sendMessage(from, {
text: texto,
mentions: mentionsCidade,
contextInfo: canalInfo(mentionsCidade)
}, { quoted: yt });
}
catch (err) {
console.log(mess.niConsole035(), err);
reply(mess.niReply1034());
}
break;
}
case 'rankcoins': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModoCoins)
return reply(mess.niReply1035({ e0: () => (prefix) }));
const grupoRank = RG_SCOINS.find((g) => g.grupo === from);
if (!grupoRank || !grupoRank.usus || grupoRank.usus.length === 0)
return reply(mess.niReply1036());
const rankCoins = grupoRank.usus.sort((a, b) => b.coins - a.coins).slice(0, 10);
let mensagemRankCoins = `- *🏆 | 𝐑𝐀𝐍𝐊𝐈𝐍𝐆 𝐃𝐄 𝐍-𝐂𝐎𝐈𝐍𝐒 𝐃𝐎 𝐆𝐑𝐔𝐏𝐎*\n\n`;
const mentionsListCoins = [];
rankCoins.forEach((usuario, i) => {
const numero = usuario.id.split("@")[0];
mentionsListCoins.push(usuario.id);
mensagemRankCoins +=
`- *🏅 | ${i + 1}º 𝙻𝚄𝙶𝙰𝚁*\n` +
`- *👤 | 𝚄𝚂𝚄Á𝚁𝙸𝙾 → @${numero}*\n` +
`- *💰 | 𝚂𝙰𝙻𝙳𝙾 → ${usuario.coins} N-Coins*\n` +
`- *⛏️ | 𝙼𝙸𝙽𝙴𝚁𝙰𝚁 → ${usuario.chances?.minerar || 0}/6*\n` +
`- *🎰 | 𝙲𝙰𝚂𝚂𝙸𝙽𝙾 → ${usuario.chances?.cassino || 0}/5*\n\n`;
});
await yuta.sendMessage(from, {
text: mensagemRankCoins.trim(),
mentions: mentionsListCoins,
contextInfo: canalInfo([sender, ...mentionsListCoins])
}, { quoted: yt });
break;
}
case 'lojapokemon':
case 'lojapoke':
case 'pokeshop': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModoCoins)
return reply(mess.niReply1037({ e0: () => (prefix) }));
let textoLoja = `- *🏪 | 𝐋𝐎𝐉𝐀 𝐃𝐄 𝐏𝐎𝐊É𝐌𝐎𝐍*\n`;
textoLoja += `- *💰 | 𝚄𝚂𝙴 → ${prefix}comprarpokemon nome*\n\n`;
const base = ['pikachu', 'bulbasaur', 'squirtle', 'charmander', 'eevee'];
for (const nome of base) {
textoLoja += `- *⚪ | ${POKEMON_DADOS[nome].nome}*\n`;
textoLoja += `- *🔮 | 𝚃𝙸𝙿𝙾 → ${POKEMON_DADOS[nome].tipo}*\n`;
textoLoja += `- *💸 | 𝚅𝙰𝙻𝙾𝚁 → ${POKEMON_DADOS[nome].preco} N-Coins*\n`;
textoLoja += `- *✨ | 𝙷𝙰𝙱𝙸𝙻𝙸𝙳𝙰𝙳𝙴 → ${POKEMON_DADOS[nome].habilidade}*\n\n`;
}
await reply(textoLoja.trim());
break;
}
case 'lojararospokemon':
case 'lojararospoke': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModoCoins)
return reply(mess.niReply1038({ e0: () => (prefix) }));
if (!isVip)
return reply(mess.onlyVipUser());
let msgRaros = `- *🌌 | 𝐋𝐎𝐉𝐀 𝐃𝐄 𝐏𝐎𝐊É𝐌𝐎𝐍 𝐑𝐀𝐑𝐎𝐒*\n`;
msgRaros += `- *💎 | 𝚄𝚂𝙴 → ${prefix}comprarpokemon nome*\n\n`;
const raros = ['charizard', 'snorlax', 'lucario', 'gengar', 'greninja', 'mewtwo', 'dragonite'];
for (const nome of raros) {
msgRaros += `- *🟣 | ${POKEMON_DADOS[nome].nome}*\n`;
msgRaros += `- *🔮 | 𝚃𝙸𝙿𝙾 → ${POKEMON_DADOS[nome].tipo}*\n`;
msgRaros += `- *👑 | 𝚁𝙰𝚁𝙸𝙳𝙰𝙳𝙴 → ${getPokemonRaridade(nome)}*\n`;
msgRaros += `- *💸 | 𝚅𝙰𝙻𝙾𝚁 → ${POKEMON_DADOS[nome].preco} N-Coins*\n`;
msgRaros += `- *✨ | 𝙷𝙰𝙱𝙸𝙻𝙸𝙳𝙰𝙳𝙴 → ${POKEMON_DADOS[nome].habilidade}*\n\n`;
}
await reply(msgRaros.trim());
break;
}
case 'comprarpokemon':
case 'comprarpoke': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModoCoins)
return reply(mess.niReply1039({ e0: () => (prefix) }));
const tipoPokemon = args[0]?.toLowerCase();
if (!tipoPokemon || !POKEMON_DADOS[tipoPokemon]) {
return reply(mess.niReply1040({ e0: () => (prefix), e1: () => (prefix) }));
}
const userPokemonCompra = getUsuarioCoinsPokemon(sender);
if (userPokemonCompra.pokemon)
return reply(mess.niReply1041({ e0: () => (prefix), prefix }));
const precoPokemon = POKEMON_DADOS[tipoPokemon].preco;
if (userPokemonCompra.coins < precoPokemon) {
return reply(mess.niReply1042({ e0: () => (POKEMON_DADOS[tipoPokemon].nome), e1: () => (precoPokemon) }));
}
userPokemonCompra.coins -= precoPokemon;
userPokemonCompra.pokemon = {
tipo: tipoPokemon,
apelido: null,
fome: 100,
xp: 0,
nivel: 1,
afeto: 0,
criadoEm: Date.now(),
tempoUltimaAlimentacao: Date.now(),
tempoUltimoBanho: null,
tempoUltimoPasseio: null,
tempoUltimaMissao: null,
tempoMissao: null,
inventario: {},
carinhoHistorico: [],
batalhaHistorico: [],
eventoHistorico: [],
construcaoHistorico: []
};
CoinsUpdate(RG_SCOINS);
await yuta.sendMessage(from, {
image: { url: getPokemonImagem(tipoPokemon) },
caption: mess.niText1472({ e0: () => (POKEMON_DADOS[tipoPokemon].nome), e1: () => (POKEMON_DADOS[tipoPokemon].tipo), e2: () => (getPokemonRaridade(tipoPokemon)), e3: () => (precoPokemon), e4: () => (userPokemonCompra.coins), e5: () => (POKEMON_DADOS[tipoPokemon].habilidade) }),
contextInfo: canalInfo([sender])
}, { quoted: yt });
break;
}
case 'verpokemon':
case 'verpoke':
case 'pokemon': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModoCoins)
return reply(mess.niReply1043({ e0: () => (prefix) }));
const userVerPokemon = getUsuarioCoinsPokemon(sender);
if (!userVerPokemon.pokemon)
return reply(mess.niReply1044());
const poke = userVerPokemon.pokemon;
const agora = Date.now();
if (poke.dormindo && agora < poke.dormindo) {
return await yuta.sendMessage(from, {
image: { url: getPokemonImagem(poke.tipo) },
caption: mess.niText1473({ e0: () => (formatarTempoRestante(poke.dormindo - agora)) }),
mentions: [sender],
contextInfo: canalInfo([sender])
}, { quoted: yt });
}
const horasSemComer = (agora - (poke.tempoUltimaAlimentacao || agora)) / (1000 * 60 * 60);
if (horasSemComer > 24) {
delete userVerPokemon.pokemon;
CoinsUpdate(RG_SCOINS);
return reply(mess.niReply1045());
}
poke.fome = Math.max(0, Math.floor(100 - (horasSemComer * 4)));
while ((poke.xp || 0) >= ((poke.nivel || 1) * 100)) {
poke.xp -= poke.nivel * 100;
poke.nivel += 1;
}
const afinidadeTxt = poke.afeto >= 100 ? 'Alta' : poke.afeto >= 50 ? 'Média' : 'Baixa';
const humorTxt = poke.fome >= 80 ? '😀 Feliz' : poke.fome >= 40 ? '😐 Normal' : '😞 Cansado';
const idadeDias = Math.floor((agora - (poke.criadoEm || agora)) / (1000 * 60 * 60 * 24));
const ultimoBanho = poke.tempoUltimoBanho ? `${Math.floor((agora - poke.tempoUltimoBanho) / (1000 * 60 * 60))}h atrás` : 'Nunca';
const ultimoPasseio = poke.tempoUltimoPasseio ? `${Math.floor((agora - poke.tempoUltimoPasseio) / (1000 * 60 * 60))}h atrás` : 'Nunca';
const ultimaMissao = poke.tempoUltimaMissao ? `${Math.floor((agora - poke.tempoUltimaMissao) / (1000 * 60))} min atrás` : 'Nunca';
const nomeExibir = poke.apelido ? `${poke.apelido} (${getPokemonNome(poke.tipo)})` : getPokemonNome(poke.tipo);
CoinsUpdate(RG_SCOINS);
await yuta.sendMessage(from, {
image: { url: getPokemonImagem(poke.tipo) },
caption: mess.niText1474({ e0: () => (sender.split('@')[0]), e1: () => (nomeExibir), e2: () => (POKEMON_DADOS[poke.tipo]?.tipo || 'Desconhecido'), e3: () => (getPokemonRaridade(poke.tipo)), e4: () => (idadeDias), e5: () => (poke.nivel || 1), e6: () => (poke.xp || 0), e7: () => ((poke.nivel || 1) * 100), e8: () => (poke.afeto || 0), e9: () => (afinidadeTxt), e10: () => (humorTxt), e11: () => (poke.fome), e12: () => (ultimoBanho), e13: () => (ultimoPasseio), e14: () => (ultimaMissao), e15: () => (POKEMON_DADOS[poke.tipo]?.habilidade || 'Nenhuma') }),
mentions: [sender],
contextInfo: canalInfo([sender])
}, { quoted: yt });
break;
}
case 'apelidopokemon':
case 'apelidopoke': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModoCoins)
return reply(mess.niReply1046({ e0: () => (prefix) }));
const userApelidoPokemon = getUsuarioCoinsPokemon(sender);
if (!userApelidoPokemon.pokemon)
return reply(mess.niReply1047());
const novoApelido = q.trim();
if (!novoApelido)
return reply(mess.niReply1048({ e0: () => (prefix), prefix }));
const custoApelido = 500;
if (userApelidoPokemon.coins < custoApelido)
return reply(mess.niReply1049({ e0: () => (custoApelido) }));
userApelidoPokemon.coins -= custoApelido;
userApelidoPokemon.pokemon.apelido = novoApelido;
CoinsUpdate(RG_SCOINS);
await reply(mess.niReply1050({ e0: () => (novoApelido), e1: () => (custoApelido) }));
break;
}
case 'venderpokemon':
case 'venderpoke': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModoCoins)
return reply(mess.niReply1051({ e0: () => (prefix) }));
const userVendaPokemon = getUsuarioCoinsPokemon(sender);
if (!userVendaPokemon.pokemon)
return reply(mess.niReply1052());
const tipoVendaPokemon = userVendaPokemon.pokemon.tipo;
const precoBasePokemon = POKEMON_DADOS[tipoVendaPokemon]?.preco || 1000;
const valorVendaPokemon = Math.floor(precoBasePokemon * 0.5);
if (!args[0]) {
userVendaPokemon.confirmarVendaPokemon = true;
CoinsUpdate(RG_SCOINS);
return reply(mess.niReply1053({ e0: () => (getPokemonNome(tipoVendaPokemon)), e1: () => (valorVendaPokemon), e2: () => (prefix) }));
}
if (args[0].toLowerCase() !== 'sim') {
return reply(mess.niReply1054({ e0: () => (prefix), prefix }));
}
if (!userVendaPokemon.confirmarVendaPokemon) {
return reply(mess.niReply1055({ e0: () => (prefix) }));
}
userVendaPokemon.coins += valorVendaPokemon;
delete userVendaPokemon.pokemon;
delete userVendaPokemon.confirmarVendaPokemon;
CoinsUpdate(RG_SCOINS);
await reply(mess.niReply1056({ e0: () => (valorVendaPokemon), e1: () => (userVendaPokemon.coins) }));
break;
}
case 'mercadopokemon':
case 'mercadopoke': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModoCoins)
return reply(mess.niReply1057({ e0: () => (prefix) }));
let msgMercadoPokemon = `- *🛒 | 𝐌𝐄𝐑𝐂𝐀𝐃𝐎 𝐏𝐎𝐊É𝐌𝐎𝐍*\n`;
msgMercadoPokemon += `- *🍽️ | 𝚄𝚂𝙴 → ${prefix}comprarcomidapokemon item*\n\n`;
for (const [key, item] of Object.entries(POKEMON_COMIDAS)) {
msgMercadoPokemon += `- *🍱 | ${item.nome}*\n`;
msgMercadoPokemon += `- *🔑 | 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 → ${key}*\n`;
msgMercadoPokemon += `- *💸 | 𝚅𝙰𝙻𝙾𝚁 → ${item.preco} coins*\n`;
msgMercadoPokemon += `- *🍗 | 𝙵𝙾𝙼𝙴 → +${item.fome}%*\n\n`;
}
await reply(msgMercadoPokemon.trim());
break;
}
case 'comprarcomidapokemon':
case 'comprarcomidapoke': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModoCoins)
return reply(mess.niReply1058({ e0: () => (prefix) }));
const itemPoke = args[0]?.toLowerCase();
if (!itemPoke || !POKEMON_COMIDAS[itemPoke])
return reply(mess.niReply1059({ e0: () => (prefix) }));
const userCompraComidaPokemon = getUsuarioCoinsPokemon(sender);
if (!userCompraComidaPokemon.pokemon)
return reply(mess.niReply1060());
const pokeCompra = userCompraComidaPokemon.pokemon;
const itemData = POKEMON_COMIDAS[itemPoke];
if (!itemData.tipos.includes(pokeCompra.tipo)) {
return reply(mess.niReply1061({ e0: () => (getPokemonNome(pokeCompra.tipo)), e1: () => (itemData.nome) }));
}
if (userCompraComidaPokemon.coins < itemData.preco) {
return reply(mess.niReply1062({ e0: () => (itemData.nome), e1: () => (itemData.preco) }));
}
userCompraComidaPokemon.coins -= itemData.preco;
if (!pokeCompra.inventario)
pokeCompra.inventario = {};
pokeCompra.inventario[itemPoke] = (pokeCompra.inventario[itemPoke] || 0) + 1;
CoinsUpdate(RG_SCOINS);
await yuta.sendMessage(from, {
text: mess.niText1400({ e0: () => (getPokemonNome(pokeCompra.tipo)), e1: () => (itemData.nome), e2: () => (itemData.preco), e3: () => (pokeCompra.inventario[itemPoke]) }),
contextInfo: canalInfo([sender])
}, { quoted: yt });
break;
}
case 'alimentarpokemon':
case 'alimentarpoke': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModoCoins)
return reply(mess.niReply1063({ e0: () => (prefix) }));
const comidaPoke = args[0]?.toLowerCase();
if (!comidaPoke || !POKEMON_COMIDAS[comidaPoke])
return reply(mess.niReply1064({ e0: () => (prefix), prefix }));
const userAlimentaPokemon = getUsuarioCoinsPokemon(sender);
if (!userAlimentaPokemon.pokemon)
return reply(mess.niReply1065());
const pokeAlimenta = userAlimentaPokemon.pokemon;
const inventarioPoke = pokeAlimenta.inventario || {};
const itemAl = POKEMON_COMIDAS[comidaPoke];
if (!itemAl.tipos.includes(pokeAlimenta.tipo)) {
return reply(mess.niReply1066({ e0: () => (itemAl.nome) }));
}
if (!inventarioPoke[comidaPoke] || inventarioPoke[comidaPoke] <= 0) {
return reply(mess.niReply1067({ e0: () => (itemAl.nome), e1: () => (prefix), e2: () => (comidaPoke) }));
}
inventarioPoke[comidaPoke] -= 1;
pokeAlimenta.fome = Math.min(100, (pokeAlimenta.fome || 0) + itemAl.fome);
pokeAlimenta.tempoUltimaAlimentacao = Date.now();
pokeAlimenta.xp = (pokeAlimenta.xp || 0) + 20;
CoinsUpdate(RG_SCOINS);
await reply(mess.niReply1068({ e0: () => (getPokemonNome(pokeAlimenta.tipo)), e1: () => (itemAl.nome), e2: () => (pokeAlimenta.fome) }));
break;
}
case 'inventariopokemon':
case 'inventariopoke': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModoCoins)
return reply(mess.niReply1069({ e0: () => (prefix) }));
const userInvPokemon = getUsuarioCoinsPokemon(sender);
if (!userInvPokemon.pokemon)
return reply(mess.niReply1070());
const invPokemon = userInvPokemon.pokemon.inventario || {};
if (Object.keys(invPokemon).length === 0)
return reply(mess.niReply1071({ e0: () => (prefix), prefix }));
let msgInvPokemon = `- *🎒 | 𝐈𝐍𝐕𝐄𝐍𝐓Á𝐑𝐈𝐎 𝐃𝐎 𝐏𝐎𝐊É𝐌𝐎𝐍*\n\n`;
for (const [item, qtd] of Object.entries(invPokemon)) {
if (qtd <= 0)
continue;
msgInvPokemon += `- *🍱 | ${POKEMON_COMIDAS[item]?.nome || item} → ${qtd}*\n`;
}
await reply(msgInvPokemon.trim());
break;
}
case 'banhopokemon':
case 'banhopoke': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModoCoins)
return reply(mess.niReply1072({ e0: () => (prefix) }));
const userBanhoPokemon = getUsuarioCoinsPokemon(sender);
if (!userBanhoPokemon.pokemon)
return reply(mess.niReply1073());
const pokeBanho = userBanhoPokemon.pokemon;
const agoraBanho = Date.now();
const ultimoBanho = pokeBanho.tempoUltimoBanho || 0;
const horasBanho = (agoraBanho - ultimoBanho) / (1000 * 60 * 60);
if (horasBanho < 6)
return reply(mess.niReply1074({ e0: () => (Math.ceil(6 - horasBanho)) }));
pokeBanho.tempoUltimoBanho = agoraBanho;
pokeBanho.xp = (pokeBanho.xp || 0) + 50;
CoinsUpdate(RG_SCOINS);
await reply(mess.niReply1075({ e0: () => (getPokemonNome(pokeBanho.tipo)) }));
break;
}
case 'passearpokemon':
case 'passearpoke': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModoCoins)
return reply(mess.niReply1076({ e0: () => (prefix) }));
const userPasseioPokemon = getUsuarioCoinsPokemon(sender);
if (!userPasseioPokemon.pokemon)
return reply(mess.niReply1077());
const pokePasseio = userPasseioPokemon.pokemon;
const agoraPasseio = Date.now();
const ultimoPasseioPoke = pokePasseio.tempoUltimoPasseio || 0;
const horasPasseio = (agoraPasseio - ultimoPasseioPoke) / (1000 * 60 * 60);
if (horasPasseio < 6)
return reply(mess.niReply1078({ e0: () => (Math.ceil(6 - horasPasseio)) }));
pokePasseio.tempoUltimoPasseio = agoraPasseio;
const recompensaPasseio = Math.floor(Math.random() * 301) + 100;
userPasseioPokemon.coins += recompensaPasseio;
pokePasseio.xp = (pokePasseio.xp || 0) + 50;
pokePasseio.afeto = (pokePasseio.afeto || 0) + 5;
CoinsUpdate(RG_SCOINS);
await reply(mess.niReply1079({ e0: () => (getPokemonNome(pokePasseio.tipo)), e1: () => (recompensaPasseio) }));
break;
}
case 'carinhopokemon':
case 'carinhopoke': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModoCoins)
return reply(mess.niReply1080({ e0: () => (prefix) }));
const userCarinhoPokemon = getUsuarioCoinsPokemon(sender);
if (!userCarinhoPokemon.pokemon)
return reply(mess.niReply1081());
const pokeCarinho = userCarinhoPokemon.pokemon;
const agoraCarinho = Date.now();
const limiteHora = 60 * 60 * 1000;
if (!Array.isArray(pokeCarinho.carinhoHistorico))
pokeCarinho.carinhoHistorico = [];
pokeCarinho.carinhoHistorico = pokeCarinho.carinhoHistorico.filter(ts => agoraCarinho - ts < limiteHora);
if (pokeCarinho.carinhoHistorico.length >= 2) {
return reply(mess.niReply1082());
}
pokeCarinho.carinhoHistorico.push(agoraCarinho);
pokeCarinho.xp = (pokeCarinho.xp || 0) + 50;
pokeCarinho.afeto = (pokeCarinho.afeto || 0) + 10;
CoinsUpdate(RG_SCOINS);
await reply(mess.niReply1083({ e0: () => (getPokemonNome(pokeCarinho.tipo)), e1: () => (2 - pokeCarinho.carinhoHistorico.length) }));
break;
}
case 'dormirpokemon':
case 'dormirpoke': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModoCoins)
return reply(mess.niReply1084({ e0: () => (prefix) }));
const userDormirPokemon = getUsuarioCoinsPokemon(sender);
if (!userDormirPokemon.pokemon)
return reply(mess.niReply1085());
const pokeDorme = userDormirPokemon.pokemon;
const agoraDorme = Date.now();
if (pokeDorme.dormindo && agoraDorme < pokeDorme.dormindo) {
return reply(mess.niReply1086());
}
pokeDorme.dormindo = agoraDorme + (60 * 60 * 1000);
CoinsUpdate(RG_SCOINS);
await reply(mess.niReply1087({ e0: () => (prefix), prefix }));
break;
}
case 'acordarpokemon':
case 'acordarpoke': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModoCoins)
return reply(mess.niReply1088({ e0: () => (prefix) }));
const userAcordaPokemon = getUsuarioCoinsPokemon(sender);
if (!userAcordaPokemon.pokemon)
return reply(mess.niReply1089());
const pokeAcorda = userAcordaPokemon.pokemon;
const agoraAcorda = Date.now();
if (!pokeAcorda.dormindo || agoraAcorda >= pokeAcorda.dormindo) {
return reply(mess.niReply1090());
}
delete pokeAcorda.dormindo;
CoinsUpdate(RG_SCOINS);
await reply(mess.niReply1091());
break;
}
case 'diariopokemon':
case 'diariopoke': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModoCoins)
return reply(mess.niReply1092({ e0: () => (prefix) }));
const userDiarioPokemon = getUsuarioCoinsPokemon(sender);
if (!userDiarioPokemon.pokemon)
return reply(mess.niReply1093());
const pokeDiario = userDiarioPokemon.pokemon;
if (!pokeDiario.diario)
pokeDiario.diario = [];
if (!pokeDiario.ultimoDiario)
pokeDiario.ultimoDiario = 0;
const agoraDiario = Date.now();
const umDia = 24 * 60 * 60 * 1000;
if (agoraDiario - pokeDiario.ultimoDiario < umDia) {
const proximo = new Date(pokeDiario.ultimoDiario + umDia);
return reply(mess.niReply1094({ e0: () => (proximo.toLocaleString('pt-BR')) }));
}
const eventosPoke = [
'Seu Pokémon treinou golpes com muita dedicação.',
'Seu Pokémon encontrou uma berry rara no caminho.',
'Seu Pokémon brincou alegremente e ganhou afeto.',
'Seu Pokémon cochilou no sol e recuperou energia.',
'Seu Pokémon observou o grupo e aprendeu algo novo.',
'Seu Pokémon ganhou elogios por ser muito leal.',
'Seu Pokémon achou uma coin perdida no chão.',
'Seu Pokémon tentou caçar e voltou orgulhoso.'
];
const eventoHojePoke = eventosPoke[Math.floor(Math.random() * eventosPoke.length)];
pokeDiario.diario.push({ data: new Date().toLocaleDateString('pt-BR'), evento: eventoHojePoke });
if (pokeDiario.diario.length > 10)
pokeDiario.diario.shift();
pokeDiario.ultimoDiario = agoraDiario;
if (eventoHojePoke.includes('coin'))
userDiarioPokemon.coins += 100;
if (eventoHojePoke.includes('berry'))
pokeDiario.xp = (pokeDiario.xp || 0) + 30;
if (eventoHojePoke.includes('afeto'))
pokeDiario.afeto = (pokeDiario.afeto || 0) + 10;
CoinsUpdate(RG_SCOINS);
let txtDiarioPoke = `📔 *Diário do seu Pokémon (${getPokemonNome(pokeDiario.tipo)}):*\n\n`;
for (const entry of pokeDiario.diario.slice().reverse()) {
txtDiarioPoke += `📅 ${entry.data} - ${entry.evento}\n`;
}
await reply(txtDiarioPoke.trim());
break;
}
case 'eventopokemon':
case 'eventopoke': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModoCoins)
return reply(mess.niReply1095({ e0: () => (prefix) }));
const userEventoPokemon = getUsuarioCoinsPokemon(sender);
if (!userEventoPokemon.pokemon)
return reply(mess.niReply1096());
const pokeEvento = userEventoPokemon.pokemon;
const agoraEvento = Date.now();
const intervaloEvento = 2 * 60 * 60 * 1000;
if (!Array.isArray(pokeEvento.eventoHistorico))
pokeEvento.eventoHistorico = [];
pokeEvento.eventoHistorico = pokeEvento.eventoHistorico.filter(ts => agoraEvento - ts < intervaloEvento);
if (pokeEvento.eventoHistorico.length >= 5) {
return reply(mess.niReply1097());
}
pokeEvento.eventoHistorico.push(agoraEvento);
const sorteiosPoke = [
() => {
userEventoPokemon.coins += 300;
return '🎉 Seu Pokémon achou um baú e ganhou *300 coins*!';
},
() => {
pokeEvento.xp = (pokeEvento.xp || 0) + 50;
return '📈 Seu Pokémon treinou sozinho e ganhou *+50 XP*!';
},
() => {
pokeEvento.afeto = (pokeEvento.afeto || 0) + 20;
return '💞 Seu Pokémon ficou muito feliz e ganhou *+20 de afeto*!';
},
() => {
const perda = Math.min(userEventoPokemon.coins, 150);
userEventoPokemon.coins -= perda;
return `💥 Um susto aconteceu e você perdeu *${perda} coins*!`;
},
() => {
return '😐 Nada demais aconteceu dessa vez.';
}
];
const resultadoEvento = sorteiosPoke[Math.floor(Math.random() * sorteiosPoke.length)]();
CoinsUpdate(RG_SCOINS);
await reply(mess.niReply1098({ e0: () => (resultadoEvento), e1: () => (pokeEvento.afeto || 0) }));
break;
}
case 'missaopokemon':
case 'missaopoke': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModoCoins)
return reply(mess.niReply1099({ e0: () => (prefix) }));
const userMissaoPokemon = getUsuarioCoinsPokemon(sender);
if (!userMissaoPokemon.pokemon)
return reply(mess.niReply1100());
const pokeMissao = userMissaoPokemon.pokemon;
const agoraMissao = Date.now();
const duracaoMissao = 15 * 60 * 1000;
if (pokeMissao.tempoMissao && agoraMissao < (pokeMissao.tempoMissao + duracaoMissao)) {
return reply(mess.niReply1101({ e0: () => (((pokeMissao.tempoMissao + duracaoMissao - agoraMissao) / 60000).toFixed(1)) }));
}
pokeMissao.tempoMissao = agoraMissao;
CoinsUpdate(RG_SCOINS);
await reply(mess.niReply1102());
setTimeout(async () => {
const userFinalMissao = getUsuarioCoinsPokemon(sender);
if (!userFinalMissao.pokemon)
return;
const pokeFinalMissao = userFinalMissao.pokemon;
let recompensaFinal = 0;
let msgFinalMissao = '';
const chance = Math.floor(Math.random() * 100);
if (chance < 55) {
recompensaFinal = Math.floor(Math.random() * 401) + 150;
if (pokeFinalMissao.tipo === 'dragonite')
recompensaFinal += 150;
if (pokeFinalMissao.tipo === 'greninja')
recompensaFinal += 100;
userFinalMissao.coins += recompensaFinal;
msgFinalMissao = `🏆 Missão concluída!\nSeu *${getPokemonNome(pokeFinalMissao.tipo)}* voltou com *${recompensaFinal} coins*!`;
}
else if (chance < 85) {
msgFinalMissao = `😐 Seu *${getPokemonNome(pokeFinalMissao.tipo)}* voltou sem encontrar nada desta vez.`;
}
else {
pokeFinalMissao.fome = Math.max(0, (pokeFinalMissao.fome || 100) - 20);
msgFinalMissao = `💥 Seu *${getPokemonNome(pokeFinalMissao.tipo)}* voltou cansado e perdeu *20% de fome*.`;
}
pokeFinalMissao.xp = (pokeFinalMissao.xp || 0) + 50;
pokeFinalMissao.tempoUltimaMissao = Date.now();
CoinsUpdate(RG_SCOINS);
await yuta.sendMessage(from, {
text: mess.niText1401({ e0: () => (sender.split('@')[0]), e1: () => (msgFinalMissao), e2: () => (pokeFinalMissao.xp || 0) }),
mentions: [sender],
contextInfo: canalInfo([sender])
}, { quoted: yt });
}, duracaoMissao);
break;
}
case 'modoia':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isBotGroupAdmins)
return reply(mess.onlyBotAdmin());
if (isModoIA) {
dataGp[0].modoia = false;
setGp(dataGp);
reply(mess.niReply1103());
}
else {
dataGp[0].modoia = true;
setGp(dataGp);
reply(mess.niReply1104());
}
break;

case 'evoluirpokemon':
case 'evoluirpoke': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModoCoins)
return reply(mess.niReply1105({ e0: () => (prefix) }));
const userEvoluiPokemon = getUsuarioCoinsPokemon(sender);
if (!userEvoluiPokemon.pokemon)
return reply(mess.niReply1106());
const pokeEvolui = userEvoluiPokemon.pokemon;
if (POKEMON_NAO_EVOLUTIVOS.includes(pokeEvolui.tipo))
return reply(mess.niReply1107());
const dadosAtualEvo = POKEMON_DADOS[pokeEvolui.tipo];
if (!dadosAtualEvo?.evoluiPara)
return reply(mess.niReply1108());
if ((pokeEvolui.nivel || 1) < (dadosAtualEvo.nivelEvolucao || 999)) {
return reply(mess.niReply1109({ e0: () => (dadosAtualEvo.nivelEvolucao) }));
}
const antigo = pokeEvolui.tipo;
pokeEvolui.tipo = dadosAtualEvo.evoluiPara;
pokeEvolui.xp = 0;
pokeEvolui.nivel = 1;
pokeEvolui.afeto = (pokeEvolui.afeto || 0) + 20;
CoinsUpdate(RG_SCOINS);
await yuta.sendMessage(from, {
image: { url: getPokemonImagem(pokeEvolui.tipo) },
caption: mess.niText1475({ e0: () => (getPokemonNome(antigo)), e1: () => (getPokemonNome(pokeEvolui.tipo)) }),
contextInfo: canalInfo([sender])
}, { quoted: yt });
break;
}
case 'batalhapokemon':
case 'batalhapoke': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModoCoins)
return reply(mess.niReply1110({ e0: () => (prefix) }));
const mentionsBatalhaPokemon = info.message?.extendedTextMessage?.contextInfo?.mentionedJid || [];
if (mentionsBatalhaPokemon.length === 0)
return reply(mess.niReply1111());
const alvoBatalhaPokemon = alvoCoinsPorMencao(mentionsBatalhaPokemon);
if (!alvoBatalhaPokemon || mesmoUsuarioCoins(alvoBatalhaPokemon, sender))
return reply(mess.niReply1112());
const user1Pokemon = getUsuarioCoins(sender, false);
const user2Pokemon = getUsuarioCoins(alvoBatalhaPokemon, false);
if (!user1Pokemon?.pokemon || !user2Pokemon?.pokemon)
return reply(mess.niReply1113());
if ((user1Pokemon.coins || 0) < 2000)
return reply(mess.niReply1114());
const agoraBatt = Date.now();
const limiteBatt = 3 * 60 * 60 * 1000;
if (!Array.isArray(user1Pokemon.pokemon.batalhaHistorico))
user1Pokemon.pokemon.batalhaHistorico = [];
user1Pokemon.pokemon.batalhaHistorico = user1Pokemon.pokemon.batalhaHistorico.filter(ts => agoraBatt - ts < limiteBatt);
if (user1Pokemon.pokemon.batalhaHistorico.length >= 3) {
return reply(mess.niReply1115());
}
user1Pokemon.pokemon.batalhaHistorico.push(agoraBatt);
user1Pokemon.coins -= 2000;
let forca1 = (user1Pokemon.pokemon.nivel || 1) + Math.floor(Math.random() * 10);
let forca2 = (user2Pokemon.pokemon.nivel || 1) + Math.floor(Math.random() * 10);
if (['lucario', 'charizard', 'mewtwo', 'dragonite'].includes(user1Pokemon.pokemon.tipo))
forca1 += 3;
if (['lucario', 'charizard', 'mewtwo', 'dragonite'].includes(user2Pokemon.pokemon.tipo))
forca2 += 3;
let resultadoBatalha = '';
if (forca1 > forca2) {
user1Pokemon.pokemon.xp = (user1Pokemon.pokemon.xp || 0) + 100;
resultadoBatalha = mess.niPokemonBatalhaResultado({ e0: () => `${getPokemonNome(user1Pokemon.pokemon.tipo)} ᴠᴇɴᴄᴇᴜ ᴀ ʙᴀᴛᴀʟʜᴀ. ʀᴇᴄᴏᴍᴘᴇɴsᴀ: +100 xᴘ` });
}
else if (forca2 > forca1) {
user2Pokemon.pokemon.xp = (user2Pokemon.pokemon.xp || 0) + 100;
resultadoBatalha = mess.niPokemonBatalhaResultado({ e0: () => `sᴇᴜ ᴘᴏᴋᴇᴍᴏɴ ᴘᴇʀᴅᴇᴜ. ᴏ ᴘᴏᴋᴇᴍᴏɴ ᴅᴇ @${numeroCoins(alvoBatalhaPokemon)} ᴠᴇɴᴄᴇᴜ ᴇ ɢᴀɴʜᴏᴜ +100 xᴘ` });
}
else {
resultadoBatalha = mess.niPokemonBatalhaResultado({ e0: () => 'ᴇᴍᴘᴀᴛᴇ. ɴᴇɴʜᴜᴍ ᴘᴏᴋᴇᴍᴏɴ ɢᴀɴʜᴏᴜ xᴘ.' });
}
CoinsUpdate(RG_SCOINS);
await yuta.sendMessage(from, { text: resultadoBatalha, mentions: [alvoBatalhaPokemon], contextInfo: canalInfo([sender, alvoBatalhaPokemon]) }, { quoted: yt });
break;
}
case 'rankpokemon':
case 'rankpoke': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModoCoins)
return reply(mess.niReply1116({ e0: () => (prefix) }));
const grupoRankPokemon = getGrupoCoinsPokemon();
const usersPokeRank = grupoRankPokemon.usus.filter(u => u.pokemon?.tipo);
if (usersPokeRank.length === 0)
return reply(mess.niReply1117());
usersPokeRank.sort((a, b) => {
const valorA = (POKEMON_DADOS[a.pokemon.tipo]?.preco || 0) + ((a.pokemon.nivel || 1) * 300) + (a.pokemon.afeto || 0);
const valorB = (POKEMON_DADOS[b.pokemon.tipo]?.preco || 0) + ((b.pokemon.nivel || 1) * 300) + (b.pokemon.afeto || 0);
return valorB - valorA;
});
const topRankPokemon = usersPokeRank.slice(0, 10);
let mentionsRankPokemon = [];
let textoRankPokemon = `- *🏆 | 𝐑𝐀𝐍𝐊𝐈𝐍𝐆 𝐃𝐄 𝐏𝐎𝐊É𝐌𝐎𝐍 𝐃𝐎 𝐆𝐑𝐔𝐏𝐎*\n\n`;
topRankPokemon.forEach((u, i) => {
mentionsRankPokemon.push(u.id);
textoRankPokemon += `- *🥇 | ${i + 1}º 𝙻𝚄𝙶𝙰𝚁*\n`;
textoRankPokemon += `- *👤 | 𝚃𝚁𝙴𝙸𝙽𝙰𝙳𝙾𝚁 → @${u.id.split('@')[0]}*\n`;
textoRankPokemon += `- *🐾 | 𝙿𝙾𝙺É𝙼𝙾𝙽 → ${u.pokemon.apelido || getPokemonNome(u.pokemon.tipo)}*\n`;
textoRankPokemon += `- *📊 | 𝙽Í𝚅𝙴𝙻 → ${u.pokemon.nivel || 1}*\n`;
textoRankPokemon += `- *💞 | 𝙰𝙵𝙴𝚃𝙾 → ${u.pokemon.afeto || 0}*\n`;
textoRankPokemon += `- *👑 | 𝚁𝙰𝚁𝙸𝙳𝙰𝙳𝙴 → ${getPokemonRaridade(u.pokemon.tipo)}*\n\n`;
});
await yuta.sendMessage(from, { text: textoRankPokemon.trim(), mentions: mentionsRankPokemon, contextInfo: canalInfo([sender]) }, { quoted: yt });
break;
}
case 'realezapokemon':
case 'pokerealeza': {
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModoCoins)
return reply(mess.niReply1118());
const userRealezaPokemon = getUsuarioCoinsPokemon(sender);
if (!userRealezaPokemon.pokemon)
return reply(mess.niReply1119());
const pokeReal = userRealezaPokemon.pokemon;
const bonusRaridadePoke = getPokemonRaridade(pokeReal.tipo) === 'Lendário' ? 120 : getPokemonRaridade(pokeReal.tipo) === 'Raro' ? 70 : getPokemonRaridade(pokeReal.tipo) === 'Evoluído' ? 40 : 0;
const famaPoke = ((pokeReal.nivel || 1) * 3) + Math.floor((pokeReal.xp || 0) / 20) + Math.floor((pokeReal.afeto || 0) / 5) + bonusRaridadePoke;
let tituloPoke = '🐾 Treinador Iniciante';
if (famaPoke >= 50)
tituloPoke = '🎖️ Mestre de Ginásio';
if (famaPoke >= 100)
tituloPoke = '🏰 Campeão Regional';
if (famaPoke >= 150)
tituloPoke = '👑 Rei Pokémon';
if (famaPoke >= 250)
tituloPoke = '🌟 Mestre Supremo';
if (famaPoke >= 400)
tituloPoke = '🪐 Lenda da Pokédex';
if (famaPoke >= 600)
tituloPoke = '🌌 Divindade Pokémon';
await reply(mess.niReply1120({ e0: () => (pokeReal.apelido || getPokemonNome(pokeReal.tipo)), e1: () => (tituloPoke), e2: () => (famaPoke), e3: () => (POKEMON_DADOS[pokeReal.tipo]?.tipo || 'Desconhecido'), e4: () => (getPokemonRaridade(pokeReal.tipo)), e5: () => (pokeReal.nivel || 1), e6: () => (pokeReal.xp || 0), e7: () => (pokeReal.afeto || 0) }));
break;
}
case 'registrarcidade':
case 'entrarnacidade': {
if (!isGroup)
return reply(mess.onlyGroup());
const userCidadeReg = getUsuarioCidade(sender);
if (userCidadeReg.cidade.nome) {
return reply(mess.niReply1121({ e0: () => (userCidadeReg.cidade.nome) }));
}
const nomeCidade = q.trim() || pushname || sender.split('@')[0];
userCidadeReg.cidade.nome = nomeCidade;
userCidadeReg.cidade.cargo = 'Desempregado';
userCidadeReg.cidade.idCargo = 'desempregado';
userCidadeReg.cidade.energia = 100;
userCidadeReg.cidade.fome = 100;
userCidadeReg.cidade.saude = 100;
userCidadeReg.cidade.reputacao = 0;
userCidadeReg.cidade.nivel = 1;
userCidadeReg.cidade.xp = 0;
userCidadeReg.cidade.saldoBanco = 0;
userCidadeReg.cidade.presoAte = 0;
CoinsUpdate(RG_SCOINS);
await yuta.sendMessage(from, {
text: mess.niText1402({ e0: () => (userCidadeReg.cidade.nome), e1: () => (userCidadeReg.cidade.cargo), e2: () => (userCidadeReg.cidade.energia), e3: () => (userCidadeReg.cidade.fome), e4: () => (userCidadeReg.cidade.saude), e5: () => (userCidadeReg.cidade.nivel) }),
contextInfo: canalInfo([sender])
}, { quoted: yt });
break;
}
case 'perfilcidade':
case 'cidadeperfil': {
if (!isGroup)
return reply(mess.onlyGroup());
const userCidadePerfil = getUsuarioCidade(sender);
if (!userCidadePerfil.cidade.nome) {
return reply(mess.niReply1122({ e0: () => (prefix), prefix }));
}
cidadeXpUp(userCidadePerfil.cidade);
const casaPerfil = cidadeResumoCasas(userCidadePerfil.cidade);
const veiculoPerfil = cidadeNomeVeiculo(userCidadePerfil.cidade.veiculo);
const presoAtePerfil = cidadeEstaPreso(userCidadePerfil.cidade)
? `Preso por mais ${cidadeTempo(userCidadePerfil.cidade.presoAte - Date.now())}`
: 'Livre';
const parceiroTxt = userCidadePerfil.cidade.parceiro ? `@${userCidadePerfil.cidade.parceiro.split('@')[0]}` : 'Nenhum';
CoinsUpdate(RG_SCOINS);
await yuta.sendMessage(from, {
text: mess.niText1403({ e0: () => (userCidadePerfil.cidade.nome), e1: () => (userCidadePerfil.cidade.cargo), e2: () => (userCidadePerfil.coins), e3: () => (userCidadePerfil.cidade.saldoBanco || 0), e4: () => (userCidadePerfil.cidade.energia), e5: () => (userCidadePerfil.cidade.fome), e6: () => (userCidadePerfil.cidade.saude), e7: () => (casaPerfil), e8: () => (veiculoPerfil), e9: () => (userCidadePerfil.cidade.combustivel || 0), e10: () => (userCidadePerfil.cidade.durabilidadeVeiculo || 100), e11: () => (userCidadePerfil.cidade.reputacao || 0), e12: () => (userCidadePerfil.cidade.nivel), e13: () => (userCidadePerfil.cidade.xp), e14: () => (userCidadePerfil.cidade.nivel * 100), e15: () => (parceiroTxt), e16: () => (presoAtePerfil) }),
mentions: userCidadePerfil.cidade.parceiro ? [userCidadePerfil.cidade.parceiro] : [],
contextInfo: canalInfo([sender])
}, { quoted: yt });
break;
}
case 'empregoscidade':
case 'trabalhoscidade': {
if (!isGroup)
return reply(mess.onlyGroup());
let msgTrab = `- *💼 | 𝐄𝐌𝐏𝐑𝐄𝐆𝐎𝐒 𝐃𝐀 𝐂𝐈𝐃𝐀𝐃𝐄*\n\n`;
for (const [id, job] of Object.entries(CIDADE_TRABALHOS)) {
if (id === 'desempregado')
continue;
msgTrab += `- *${job.emoji} | ${job.nome}*\n`;
msgTrab += `- *💸 | 𝙿𝙰𝙶𝙰 → ${job.min} até ${job.max} N-Coins*\n`;
msgTrab += `- *📌 | 𝚄𝚂𝙴 → ${prefix}settrabalho ${id}*\n\n`;
}
await reply(msgTrab.trim());
break;
}
case 'settrabalho':
case 'setemprego': {
if (!isGroup)
return reply(mess.onlyGroup());
const userSetTrab = getUsuarioCidade(sender);
if (!userSetTrab.cidade.nome)
return reply(mess.niReply1123({ e0: () => (prefix) }));
const trabEscolhido = args[0]?.toLowerCase();
if (!trabEscolhido || !CIDADE_TRABALHOS[trabEscolhido]) {
return reply(mess.niReply1124({ e0: () => (prefix), prefix }));
}
userSetTrab.cidade.cargo = CIDADE_TRABALHOS[trabEscolhido].nome;
userSetTrab.cidade.idCargo = trabEscolhido;
CoinsUpdate(RG_SCOINS);
await reply(mess.niReply1125({ e0: () => (CIDADE_TRABALHOS[trabEscolhido].nome) }));
break;
}
case 'trabalharcidade':
case 'trabalhocidade': {
if (!isGroup)
return reply(mess.onlyGroup());
const userTrabCidade = getUsuarioCidade(sender);
if (!userTrabCidade.cidade.nome)
return reply(mess.niReply1126({ e0: () => (prefix) }));
const agoraTrab = Date.now();
const cooldownTrab = 60 * 60 * 1000;
if (cidadeEstaPreso(userTrabCidade.cidade)) {
return reply(mess.niReply1127({ e0: () => (cidadeTempo(userTrabCidade.cidade.presoAte - agoraTrab)) }));
}
if (agoraTrab - (userTrabCidade.cidade.ultimoTrabalho || 0) < cooldownTrab) {
return reply(mess.niReply1128({ e0: () => (cidadeTempo(cooldownTrab - (agoraTrab - userTrabCidade.cidade.ultimoTrabalho))) }));
}
if (userTrabCidade.cidade.energia < 20)
return reply(mess.niReply1129({ e0: () => (prefix), prefix }));
if (userTrabCidade.cidade.fome < 20)
return reply(mess.niReply1130({ e0: () => (prefix), prefix }));
const jobId = userTrabCidade.cidade.idCargo || 'entregador';
const job = CIDADE_TRABALHOS[jobId] || CIDADE_TRABALHOS.entregador;
let salarioCidade = Math.floor(Math.random() * (job.max - job.min + 1)) + job.min;
salarioCidade += cidadeBonusMoradia(userTrabCidade.cidade);
salarioCidade += cidadeBonusVeiculo(userTrabCidade.cidade);
if (userTrabCidade.cidade.parceiro)
salarioCidade += 20;
if (userTrabCidade.cidade.empresa)
salarioCidade += 35;
userTrabCidade.coins += salarioCidade;
userTrabCidade.cidade.ultimoTrabalho = agoraTrab;
userTrabCidade.cidade.energia = Math.max(0, userTrabCidade.cidade.energia - 20);
userTrabCidade.cidade.fome = Math.max(0, userTrabCidade.cidade.fome - 15);
userTrabCidade.cidade.xp += 40;
userTrabCidade.cidade.reputacao += 2;
cidadeXpUp(userTrabCidade.cidade);
CoinsUpdate(RG_SCOINS);
await yuta.sendMessage(from, {
text: mess.niText1404({ e0: () => (userTrabCidade.cidade.nome), e1: () => (job.nome), e2: () => (salarioCidade), e3: () => (userTrabCidade.cidade.energia), e4: () => (userTrabCidade.cidade.fome) }),
contextInfo: canalInfo([sender])
}, { quoted: yt });
break;
}
case 'coletarsalario':
case 'salariocidade': {
if (!isGroup)
return reply(mess.onlyGroup());
const userSalario = getUsuarioCidade(sender);
if (!userSalario.cidade.nome)
return reply(mess.niReply1131({ e0: () => (prefix) }));
const agoraSal = Date.now();
const cooldownSal = 4 * 60 * 60 * 1000;
if (agoraSal - (userSalario.cidade.ultimaColeta || 0) < cooldownSal) {
return reply(mess.niReply1132({ e0: () => (cidadeTempo(cooldownSal - (agoraSal - userSalario.cidade.ultimaColeta))) }));
}
const baseSal = 300 + (userSalario.cidade.nivel * 30) + (userSalario.cidade.reputacao * 2);
userSalario.coins += baseSal;
userSalario.cidade.ultimaColeta = agoraSal;
userSalario.cidade.xp += 20;
cidadeXpUp(userSalario.cidade);
CoinsUpdate(RG_SCOINS);
await reply(mess.niReply1133({ e0: () => (baseSal) }));
break;
}
case 'bancocidade':
case 'cidadebanco': {
if (!isGroup)
return reply(mess.onlyGroup());
const userBanco = getUsuarioCidade(sender);
if (!userBanco.cidade.nome)
return reply(mess.niReply1134({ e0: () => (prefix) }));
await reply(mess.niReply1135({ e0: () => (userBanco.cidade.nome), e1: () => (userBanco.coins), e2: () => (userBanco.cidade.saldoBanco || 0) }));
break;
}
case 'depositarcidade':
case 'depositarbank': {
if (!isGroup)
return reply(mess.onlyGroup());
const userDep = getUsuarioCidade(sender);
if (!userDep.cidade.nome)
return reply(mess.niReply1136({ e0: () => (prefix) }));
if (!q || isNaN(q))
return reply(mess.niReply1137({ e0: () => (prefix), prefix }));
const valorDep = parseInt(q);
if (valorDep <= 0)
return reply(mess.niReply1138());
if (userDep.coins < valorDep)
return reply(mess.niReply1139());
userDep.coins -= valorDep;
userDep.cidade.saldoBanco = (userDep.cidade.saldoBanco || 0) + valorDep;
CoinsUpdate(RG_SCOINS);
await reply(mess.niReply1140({ e0: () => (valorDep) }));
break;
}
case 'sacarcidade':
case 'sacarbanco': {
if (!isGroup)
return reply(mess.onlyGroup());
const userSac = getUsuarioCidade(sender);
if (!userSac.cidade.nome)
return reply(mess.niReply1141({ e0: () => (prefix) }));
if (!q || isNaN(q))
return reply(mess.niReply1142({ e0: () => (prefix), prefix }));
const valorSac = parseInt(q);
if (valorSac <= 0)
return reply(mess.niReply1143());
if ((userSac.cidade.saldoBanco || 0) < valorSac)
return reply(mess.niReply1144());
userSac.cidade.saldoBanco -= valorSac;
userSac.coins += valorSac;
CoinsUpdate(RG_SCOINS);
await reply(mess.niReply1145({ e0: () => (valorSac) }));
break;
}
case 'doarcidade':
case 'pixcidade': {
if (!isGroup)
return reply(mess.onlyGroup());
const mentionedJidCidade = info.message?.extendedTextMessage?.contextInfo?.mentionedJid || [];
if (!args[0] || !mentionedJidCidade.length)
return reply(mess.niReply1146({ e0: () => (prefix) }));
const valorDoarCidade = parseInt(args[0]);
if (isNaN(valorDoarCidade) || valorDoarCidade <= 0)
return reply(mess.niReply1147());
const remetCidade = getUsuarioCidade(sender);
const destCidade = getUsuarioCidade(mentionedJidCidade[0]);
if (remetCidade.coins < valorDoarCidade)
return reply(mess.niReply1148());
remetCidade.coins -= valorDoarCidade;
destCidade.coins += valorDoarCidade;
CoinsUpdate(RG_SCOINS);
await yuta.sendMessage(from, {
text: mess.niText1405({ e0: () => (sender.split('@')[0]), e1: () => (mentionedJidCidade[0].split('@')[0]), e2: () => (valorDoarCidade) }),
mentions: [sender, mentionedJidCidade[0]],
contextInfo: canalInfo([sender])
}, { quoted: yt });
break;
}
case 'lojacidade':
case 'lojaitenscidade': {
if (!isGroup)
return reply(mess.onlyGroup());
let msgLojaCidade = `- *🛒 | 𝐋𝐎𝐉𝐀 𝐃𝐀 𝐂𝐈𝐃𝐀𝐃𝐄*\n\n`;
for (const [id, item] of Object.entries(CIDADE_LOJA)) {
msgLojaCidade += `- *${item.emoji} | ${item.nome}*\n`;
msgLojaCidade += `- *💸 | 𝚅𝙰𝙻𝙾𝚁 → ${item.preco} N-Coins*\n`;
msgLojaCidade += `- *📌 | 𝚄𝚂𝙴 → ${prefix}compraritemcidade ${id}*\n\n`;
}
await reply(msgLojaCidade.trim());
break;
}
case 'compraritemcidade':
case 'compraritenscidade': {
if (!isGroup)
return reply(mess.onlyGroup());
const userCompraItem = getUsuarioCidade(sender);
if (!userCompraItem.cidade.nome)
return reply(mess.niReply1149({ e0: () => (prefix) }));
const itemId = args[0]?.toLowerCase();
if (!itemId || !CIDADE_LOJA[itemId])
return reply(mess.niReply1150({ e0: () => (prefix), prefix }));
const item = CIDADE_LOJA[itemId];
if (userCompraItem.coins < item.preco)
return reply(mess.niReply1151());
userCompraItem.coins -= item.preco;
userCompraItem.cidade.inventario[itemId] = (userCompraItem.cidade.inventario[itemId] || 0) + 1;
CoinsUpdate(RG_SCOINS);
await reply(mess.niReply1152({ e0: () => (item.emoji), e1: () => (item.nome) }));
break;
}
case 'inventariocidade':
case 'inventcidade': {
if (!isGroup)
return reply(mess.onlyGroup());
const userInvCid = getUsuarioCidade(sender);
if (!userInvCid.cidade.nome)
return reply(mess.niReply1153({ e0: () => (prefix) }));
const inv = userInvCid.cidade.inventario || {};
if (Object.keys(inv).length === 0)
return reply(mess.niReply1154());
let msgInvCid = `- *🎒 | 𝐈𝐍𝐕𝐄𝐍𝐓Á𝐑𝐈𝐎 𝐃𝐀 𝐂𝐈𝐃𝐀𝐃𝐄*\n\n`;
for (const [id, qtd] of Object.entries(inv)) {
if (qtd <= 0)
continue;
const item = CIDADE_LOJA[id];
msgInvCid += `- *${item?.emoji || '📦'} | ${item?.nome || id} → ${qtd}*\n`;
}
await reply(msgInvCid.trim());
break;
}
case 'mercadocidade':
case 'comidascidade': {
if (!isGroup)
return reply(mess.onlyGroup());
let msgMercadoCidade = `- *🍽️ | 𝐌𝐄𝐑𝐂𝐀𝐃𝐎 𝐃𝐀 𝐂𝐈𝐃𝐀𝐃𝐄*\n\n`;
for (const [id, comida] of Object.entries(CIDADE_COMIDAS)) {
msgMercadoCidade += `- *${comida.emoji} | ${comida.nome}*\n`;
msgMercadoCidade += `- *💸 | 𝚅𝙰𝙻𝙾𝚁 → ${comida.preco} N-Coins*\n`;
msgMercadoCidade += `- *🍔 | 𝙵𝙾𝙼𝙴 → +${comida.fome}*\n`;
msgMercadoCidade += `- *❤️ | 𝚂𝙰Ú𝙳𝙴 → +${comida.saude}*\n`;
msgMercadoCidade += `- *📌 | 𝚄𝚂𝙴 → ${prefix}comercidade ${id}*\n\n`;
}
await reply(msgMercadoCidade.trim());
break;
}
case 'comercidade':
case 'restaurantecidade': {
if (!isGroup)
return reply(mess.onlyGroup());
const userComer = getUsuarioCidade(sender);
if (!userComer.cidade.nome)
return reply(mess.niReply1155({ e0: () => (prefix) }));
const comidaId = args[0]?.toLowerCase() || 'pizza';
if (!CIDADE_COMIDAS[comidaId])
return reply(mess.niReply1156({ e0: () => (prefix), prefix }));
const comida = CIDADE_COMIDAS[comidaId];
if (userComer.coins < comida.preco)
return reply(mess.niReply1157({ e0: () => (comida.preco) }));
userComer.coins -= comida.preco;
userComer.cidade.fome = Math.min(100, userComer.cidade.fome + comida.fome);
userComer.cidade.saude = Math.min(100, userComer.cidade.saude + comida.saude);
CoinsUpdate(RG_SCOINS);
await reply(mess.niReply1158({ e0: () => (comida.emoji), e1: () => (comida.nome), e2: () => (userComer.cidade.fome), e3: () => (userComer.cidade.saude) }));
break;
}
case 'descansarcidade':
case 'descansarcity': {
if (!isGroup)
return reply(mess.onlyGroup());
const userDesc = getUsuarioCidade(sender);
if (!userDesc.cidade.nome)
return reply(mess.niReply1159({ e0: () => (prefix) }));
userDesc.cidade.energia = Math.min(100, userDesc.cidade.energia + 50);
userDesc.cidade.fome = Math.max(0, userDesc.cidade.fome - 10);
CoinsUpdate(RG_SCOINS);
await reply(mess.niReply1160({ e0: () => (userDesc.cidade.energia), e1: () => (userDesc.cidade.fome) }));
break;
}
case 'hospitalcidade':
case 'hospitalcity': {
if (!isGroup)
return reply(mess.onlyGroup());
const userHosp = getUsuarioCidade(sender);
if (!userHosp.cidade.nome)
return reply(mess.niReply1161({ e0: () => (prefix) }));
const custoHospital = 1200;
if (userHosp.coins < custoHospital)
return reply(mess.niReply1162({ e0: () => (custoHospital) }));
userHosp.coins -= custoHospital;
userHosp.cidade.saude = 100;
CoinsUpdate(RG_SCOINS);
await reply(mess.niReply1163());
break;
}
case 'casascidade':
case 'lojacasas': {
if (!isGroup)
return reply(mess.onlyGroup());
let msgCasa = `- *🏠 | 𝐂𝐀𝐒𝐀𝐒 𝐃𝐀 𝐂𝐈𝐃𝐀𝐃𝐄*\n\n`;
for (const [id, casa] of Object.entries(CIDADE_CASAS)) {
msgCasa += `- *${casa.emoji} | ${casa.nome}*\n`;
msgCasa += `- *💸 | 𝚅𝙰𝙻𝙾𝚁 → ${casa.preco} N-Coins*\n`;
msgCasa += `- *⭐ | 𝙱Ô𝙽𝚄𝚂 𝙳𝙴 𝚃𝚁𝙰𝙱𝙰𝙻𝙷𝙾 → +${casa.bonus}*\n`;
msgCasa += `- *📌 | 𝚄𝚂𝙴 → ${prefix}comprarcasa ${id}*\n\n`;
}
await reply(msgCasa.trim());
break;
}
case 'vercasas':
case 'vercasa':
case 'minhacasa':
case 'minhascasas': {
if (!isGroup)
return reply(mess.onlyGroup());
const userVerCasas = getUsuarioCidade(sender);
if (!userVerCasas.cidade.nome)
return reply(mess.niReply1164({ e0: () => (prefix) }));
const casas = cidadeCasasLista(userVerCasas.cidade);
if (!casas.length)
return reply(`- 🏠 *ᴠᴏᴄᴇ ᴀɪɴᴅᴀ ɴᴀᴏ ᴛᴇᴍ ᴄᴀsᴀ.*\n> *Use:* ${prefix}casascidade`);
let msg = `- 🏠 *sᴜᴀs ᴄᴀsᴀs*\n\n`;
casas.forEach((item, i) => {
const casa = CIDADE_CASAS[item.id];
const alugada = item.aluguelAtivo ? 'ᴀʟᴜɢᴀᴅᴀ ✅' : 'ɴᴀᴏ ᴀʟᴜɢᴀᴅᴀ ❌';
msg += `*${i + 1}.* ${casa.emoji} *${casa.nome}*\n`;
msg += `> ID: ${item.id}\n> Status: ${alugada}\n> Alugar: ${prefix}alugarcasa ${i + 1}\n\n`;
});
await reply(msg.trim());
break;
}
case 'comprarcasa': {
if (!isGroup)
return reply(mess.onlyGroup());
const userCasa = getUsuarioCidade(sender);
if (!userCasa.cidade.nome)
return reply(mess.niReply1164({ e0: () => (prefix) }));
const casaId = args[0]?.toLowerCase();
if (!casaId || !CIDADE_CASAS[casaId])
return reply(mess.niReply1165({ e0: () => (prefix), prefix }));
const casa = CIDADE_CASAS[casaId];
if (userCasa.coins < casa.preco)
return reply(mess.niReply1166());
userCasa.coins -= casa.preco;
if (!Array.isArray(userCasa.cidade.casas)) userCasa.cidade.casas = [];
userCasa.cidade.casas.push({ id: casaId, compradoEm: Date.now(), aluguelAtivo: null });
userCasa.cidade.casa = casaId;
CoinsUpdate(RG_SCOINS);
await reply(`${mess.niReply1167({ e0: () => (casa.nome), e1: () => (casa.preco) })}\n\n- 🏠 *ᴛᴏᴛᴀʟ ᴅᴇ ᴄᴀsᴀs:* ${userCasa.cidade.casas.length}\n> *Veja suas casas:* ${prefix}vercasas`);
break;
}
case 'vendercasa': {
if (!isGroup)
return reply(mess.onlyGroup());
const userVendaCasa = getUsuarioCidade(sender);
if (!userVendaCasa.cidade.nome)
return reply(mess.niReply1168({ e0: () => (prefix) }));
const casas = cidadeCasasLista(userVendaCasa.cidade);
if (!casas.length)
return reply(mess.niReply1169());
const escolhaCasaVenda = args[0]?.toLowerCase();
let idxCasaVenda = escolhaCasaVenda && /^\d+$/.test(escolhaCasaVenda) ? Number(escolhaCasaVenda) - 1 : casas.findIndex(c => c.id === (escolhaCasaVenda || userVendaCasa.cidade.casa));
if (idxCasaVenda >= casas.length) idxCasaVenda = -1;
if (idxCasaVenda < 0) idxCasaVenda = casas.length - 1;
const casaVenda = casas[idxCasaVenda];
if (!casaVenda || !CIDADE_CASAS[casaVenda.id])
return reply(mess.niReply1169());
const valorVendaCasa = Math.floor(CIDADE_CASAS[casaVenda.id].preco * 0.6);
userVendaCasa.coins += valorVendaCasa;
casas.splice(idxCasaVenda, 1);
userVendaCasa.cidade.casas = casas;
userVendaCasa.cidade.casa = casas.length ? casas[casas.length - 1].id : null;
userVendaCasa.cidade.aluguelAtivo = casas.find(c => c.id === userVendaCasa.cidade.casa)?.aluguelAtivo || null;
CoinsUpdate(RG_SCOINS);
await reply(`${mess.niReply1170({ e0: () => (valorVendaCasa) })}\n> *Casas restantes:* ${casas.length}`);
break;
}
case 'alugarcasa': {
if (!isGroup)
return reply(mess.onlyGroup());
const userAlugarCasa = getUsuarioCidade(sender);
if (!userAlugarCasa.cidade.nome)
return reply(mess.niReply1171({ e0: () => (prefix) }));
const casas = cidadeCasasLista(userAlugarCasa.cidade);
if (!casas.length)
return reply(mess.niReply1172());
const escolhaCasa = args[0]?.toLowerCase();
let idxCasa = escolhaCasa && /^\d+$/.test(escolhaCasa) ? Number(escolhaCasa) - 1 : casas.findIndex(c => c.id === (escolhaCasa || userAlugarCasa.cidade.casa) && !c.aluguelAtivo);
if (idxCasa >= casas.length || (idxCasa >= 0 && casas[idxCasa]?.aluguelAtivo)) idxCasa = -1;
if (idxCasa < 0) idxCasa = casas.findIndex(c => !c.aluguelAtivo);
if (idxCasa < 0)
return reply(mess.niReply1174());
const casaAlugar = casas[idxCasa];
casaAlugar.aluguelAtivo = { iniciado: Date.now(), ultimoColetado: 0 };
userAlugarCasa.cidade.casa = casaAlugar.id;
userAlugarCasa.cidade.aluguelAtivo = casaAlugar.aluguelAtivo;
CoinsUpdate(RG_SCOINS);
return reply(`${mess.niReply1173({ e0: () => (prefix), prefix })}\n\n- 🏠 *ᴄᴀsᴀ ᴀʟᴜɢᴀᴅᴀ:* ${cidadeNomeCasa(casaAlugar.id)}\n> *Use:* ${prefix}coletaraluguel`);
}
case 'coletaraluguel': {
if (!isGroup)
return reply(mess.onlyGroup());
const userAluguel = getUsuarioCidade(sender);
if (!userAluguel.cidade.nome)
return reply(mess.niReply1175({ e0: () => (prefix) }));
const casas = cidadeCasasLista(userAluguel.cidade);
const escolhaColeta = args[0]?.toLowerCase();
let casasAtivas = casas.filter((c, i) => c.aluguelAtivo && (!escolhaColeta || escolhaColeta === c.id || escolhaColeta === String(i + 1)));
if (!casasAtivas.length)
return reply(mess.niReply1176());
const agoraAluguel = Date.now();
const cooldownAluguel = 6 * 60 * 60 * 1000;
let totalAluguel = 0;
let aguardando = [];
for (const casaAtiva of casasAtivas) {
const ultimo = casaAtiva.aluguelAtivo?.ultimoColetado || 0;
if (agoraAluguel - ultimo < cooldownAluguel) {
aguardando.push(`${cidadeNomeCasa(casaAtiva.id)}: ${cidadeTempo(cooldownAluguel - (agoraAluguel - ultimo))}`);
continue;
}
const valor = Math.floor(CIDADE_CASAS[casaAtiva.id].preco * 0.02);
totalAluguel += valor;
casaAtiva.aluguelAtivo.ultimoColetado = agoraAluguel;
}
if (totalAluguel <= 0)
return reply(mess.niReply1177({ e0: () => (aguardando[0]?.split(': ')[1] || cidadeTempo(cooldownAluguel)) }));
userAluguel.coins += totalAluguel;
userAluguel.cidade.aluguelAtivo = casas.find(c => c.id === userAluguel.cidade.casa)?.aluguelAtivo || userAluguel.cidade.aluguelAtivo;
CoinsUpdate(RG_SCOINS);
await reply(`${mess.niReply1178({ e0: () => (totalAluguel) })}${aguardando.length ? `\n\n- ⏳ *ᴀɢᴜᴀʀᴅᴀɴᴅᴏ:*\n> ${aguardando.join('\n> ')}` : ''}`);
break;
}
case 'veiculoscidade':
case 'lojaveiculos': {
if (!isGroup)
return reply(mess.onlyGroup());
let msgVeic = `- *🚗 | 𝐕𝐄Í𝐂𝐔𝐋𝐎𝐒 𝐃𝐀 𝐂𝐈𝐃𝐀𝐃𝐄*\n\n`;
for (const [id, veic] of Object.entries(CIDADE_VEICULOS)) {
msgVeic += `- *${veic.emoji} | ${veic.nome}*\n`;
msgVeic += `- *💸 | 𝚅𝙰𝙻𝙾𝚁 → ${veic.preco} N-Coins*\n`;
msgVeic += `- *⭐ | 𝙱Ô𝙽𝚄𝚂 → +${veic.bonus}*\n`;
msgVeic += `- *⛽ | 𝚃𝙰𝙽𝚀𝚄𝙴 → ${veic.combustivelMax}*\n`;
msgVeic += `- *📌 | 𝚄𝚂𝙴 → ${prefix}comprarveiculo ${id}*\n\n`;
}
await reply(msgVeic.trim());
break;
}
case 'comprarveiculo': {
if (!isGroup)
return reply(mess.onlyGroup());
const userVeic = getUsuarioCidade(sender);
if (!userVeic.cidade.nome)
return reply(mess.niReply1179({ e0: () => (prefix) }));
const veicId = args[0]?.toLowerCase();
if (!veicId || !CIDADE_VEICULOS[veicId])
return reply(mess.niReply1180({ e0: () => (prefix), prefix }));
const veic = CIDADE_VEICULOS[veicId];
if (userVeic.coins < veic.preco)
return reply(mess.niReply1181());
userVeic.coins -= veic.preco;
userVeic.cidade.veiculo = veicId;
userVeic.cidade.combustivel = veic.combustivelMax || 0;
userVeic.cidade.durabilidadeVeiculo = 100;
CoinsUpdate(RG_SCOINS);
await reply(mess.niReply1182({ e0: () => (veic.nome), e1: () => (veic.preco) }));
break;
}
case 'venderveiculo': {
if (!isGroup)
return reply(mess.onlyGroup());
const userVendaVeic = getUsuarioCidade(sender);
if (!userVendaVeic.cidade.nome)
return reply(mess.niReply1183({ e0: () => (prefix) }));
if (!userVendaVeic.cidade.veiculo)
return reply(mess.niReply1184());
const idVeiculoVenda = userVendaVeic.cidade.veiculo;
const valorVendaVeic = Math.floor(CIDADE_VEICULOS[idVeiculoVenda].preco * 0.55);
userVendaVeic.coins += valorVendaVeic;
userVendaVeic.cidade.veiculo = null;
userVendaVeic.cidade.combustivel = 0;
userVendaVeic.cidade.durabilidadeVeiculo = 100;
CoinsUpdate(RG_SCOINS);
await reply(mess.niReply1185({ e0: () => (valorVendaVeic) }));
break;
}
case 'abastecercidade':
case 'abastecerveiculo': {
if (!isGroup)
return reply(mess.onlyGroup());
const userAbast = getUsuarioCidade(sender);
if (!userAbast.cidade.nome)
return reply(mess.niReply1186({ e0: () => (prefix) }));
if (!userAbast.cidade.veiculo)
return reply(mess.niReply1187());
const veicAbast = CIDADE_VEICULOS[userAbast.cidade.veiculo];
if (!veicAbast || veicAbast.combustivelMax <= 0)
return reply(mess.niReply1188());
const custoAbastecer = 1200;
if (userAbast.coins < custoAbastecer)
return reply(mess.niReply1189({ e0: () => (custoAbastecer) }));
userAbast.coins -= custoAbastecer;
userAbast.cidade.combustivel = veicAbast.combustivelMax;
CoinsUpdate(RG_SCOINS);
await reply(mess.niReply1190({ e0: () => (veicAbast.nome), e1: () => (userAbast.cidade.combustivel), e2: () => (veicAbast.combustivelMax) }));
break;
}
case 'oficinacidade':
case 'repararveiculo': {
if (!isGroup)
return reply(mess.onlyGroup());
const userOficina = getUsuarioCidade(sender);
if (!userOficina.cidade.nome)
return reply(mess.niReply1191({ e0: () => (prefix) }));
if (!userOficina.cidade.veiculo)
return reply(mess.niReply1192());
const custoOficina = 1800;
if (userOficina.coins < custoOficina)
return reply(mess.niReply1193({ e0: () => (custoOficina) }));
userOficina.coins -= custoOficina;
userOficina.cidade.durabilidadeVeiculo = 100;
CoinsUpdate(RG_SCOINS);
await reply(mess.niReply1194());
break;
}
case 'empresascidade':
case 'lojaempresas': {
if (!isGroup)
return reply(mess.onlyGroup());
let msgEmpresas = `- *🏢 | 𝐄𝐌𝐏𝐑𝐄𝐒𝐀𝐒 𝐃𝐀 𝐂𝐈𝐃𝐀𝐃𝐄*\n\n`;
for (const [id, emp] of Object.entries(CIDADE_EMPRESAS)) {
msgEmpresas += `- *${emp.emoji} | ${emp.nome}*\n`;
msgEmpresas += `- *💸 | 𝚅𝙰𝙻𝙾𝚁 → ${emp.preco} N-Coins*\n`;
msgEmpresas += `- *📈 | 𝙻𝚄𝙲𝚁𝙾 → ${emp.lucroMin} até ${emp.lucroMax} N-Coins*\n`;
msgEmpresas += `- *📌 | 𝚄𝚂𝙴 → ${prefix}comprarempresa ${id}*\n\n`;
}
await reply(msgEmpresas.trim());
break;
}
case 'comprarempresa': {
if (!isGroup)
return reply(mess.onlyGroup());
const userEmpresa = getUsuarioCidade(sender);
if (!userEmpresa.cidade.nome)
return reply(mess.niReply1195({ e0: () => (prefix) }));
const empresaId = args[0]?.toLowerCase();
if (!empresaId || !CIDADE_EMPRESAS[empresaId])
return reply(mess.niReply1196({ e0: () => (prefix), prefix }));
if (userEmpresa.cidade.empresa)
return reply(mess.niReply1197());
const emp = CIDADE_EMPRESAS[empresaId];
if (userEmpresa.coins < emp.preco)
return reply(mess.niReply1198());
userEmpresa.coins -= emp.preco;
userEmpresa.cidade.empresa = empresaId;
userEmpresa.cidade.ultimoLucroEmpresa = 0;
CoinsUpdate(RG_SCOINS);
await reply(mess.niReply1199({ e0: () => (emp.nome), e1: () => (emp.preco) }));
break;
}
case 'lucroempresa': {
if (!isGroup)
return reply(mess.onlyGroup());
const userLucroEmp = getUsuarioCidade(sender);
if (!userLucroEmp.cidade.nome)
return reply(mess.niReply1200({ e0: () => (prefix) }));
if (!userLucroEmp.cidade.empresa)
return reply(mess.niReply1201());
const agoraLucro = Date.now();
const cooldownLucro = 6 * 60 * 60 * 1000;
if (agoraLucro - (userLucroEmp.cidade.ultimoLucroEmpresa || 0) < cooldownLucro) {
return reply(mess.niReply1202({ e0: () => (cidadeTempo(cooldownLucro - (agoraLucro - userLucroEmp.cidade.ultimoLucroEmpresa))) }));
}
const empData = CIDADE_EMPRESAS[userLucroEmp.cidade.empresa];
const lucroGerado = Math.floor(Math.random() * (empData.lucroMax - empData.lucroMin + 1)) + empData.lucroMin;
userLucroEmp.coins += lucroGerado;
userLucroEmp.cidade.ultimoLucroEmpresa = agoraLucro;
userLucroEmp.cidade.reputacao += 5;
userLucroEmp.cidade.xp += 35;
cidadeXpUp(userLucroEmp.cidade);
CoinsUpdate(RG_SCOINS);
await reply(mess.niReply1203({ e0: () => (lucroGerado) }));
break;
}
case 'assaltarcidade':
case 'crimecidade': {
if (!isGroup)
return reply(mess.onlyGroup());
const userCrime = getUsuarioCidade(sender);
if (!userCrime.cidade.nome)
return reply(mess.niReply1204({ e0: () => (prefix) }));
const agoraCrime = Date.now();
const cooldownCrime = 2 * 60 * 60 * 1000;
if (cidadeEstaPreso(userCrime.cidade)) {
return reply(mess.niReply1205({ e0: () => (cidadeTempo(userCrime.cidade.presoAte - agoraCrime)) }));
}
if (agoraCrime - (userCrime.cidade.ultimoCrime || 0) < cooldownCrime) {
return reply(mess.niReply1206({ e0: () => (cidadeTempo(cooldownCrime - (agoraCrime - userCrime.cidade.ultimoCrime))) }));
}
if (userCrime.cidade.energia < 25)
return reply(mess.niReply1207());
userCrime.cidade.ultimoCrime = agoraCrime;
userCrime.cidade.energia = Math.max(0, userCrime.cidade.energia - 25);
const chanceCrime = Math.random();
if (chanceCrime < 0.45) {
const ganhoCrime = Math.floor(Math.random() * 1200) + 400;
userCrime.coins += ganhoCrime;
userCrime.cidade.reputacao = Math.max(0, (userCrime.cidade.reputacao || 0) - 3);
userCrime.cidade.xp += 30;
CoinsUpdate(RG_SCOINS);
return reply(mess.niReply1208({ e0: () => (ganhoCrime) }));
}
else if (chanceCrime < 0.80) {
const perdaCrime = Math.min(userCrime.coins, Math.floor(Math.random() * 800) + 200);
userCrime.coins -= perdaCrime;
userCrime.cidade.saude = Math.max(0, userCrime.cidade.saude - 20);
CoinsUpdate(RG_SCOINS);
return reply(mess.niReply1209({ e0: () => (perdaCrime) }));
}
else {
userCrime.cidade.presoAte = agoraCrime + (60 * 60 * 1000);
userCrime.cidade.saude = Math.max(0, userCrime.cidade.saude - 15);
CoinsUpdate(RG_SCOINS);
return reply(mess.niReply1210());
}
}
case 'fiancacidade':
case 'fiançacidade': {
if (!isGroup)
return reply(mess.onlyGroup());
const userFianca = getUsuarioCidade(sender);
if (!userFianca.cidade.nome)
return reply(mess.niReply1211({ e0: () => (prefix) }));
if (!cidadeEstaPreso(userFianca.cidade))
return reply(mess.niReply1212());
const valorFianca = 3000;
if (userFianca.coins < valorFianca)
return reply(mess.niReply1213({ e0: () => (valorFianca) }));
userFianca.coins -= valorFianca;
userFianca.cidade.presoAte = 0;
CoinsUpdate(RG_SCOINS);
await reply(mess.niReply1214());
break;
}
case 'corridacidade':
case 'apostacidade': {
if (!isGroup)
return reply(mess.onlyGroup());
const userCorrida = getUsuarioCidade(sender);
if (!userCorrida.cidade.nome)
return reply(mess.niReply1215({ e0: () => (prefix) }));
const valorAposta = parseInt(args[0] || '0');
if (!valorAposta || isNaN(valorAposta) || valorAposta <= 0)
return reply(mess.niReply1216({ e0: () => (prefix), prefix }));
if (userCorrida.coins < valorAposta)
return reply(mess.niReply1217());
if (!cidadePodeDirigir(userCorrida.cidade))
return reply(mess.niReply1218());
const agoraCorr = Date.now();
if (agoraCorr - (userCorrida.cidade.ultimaCorrida || 0) < (30 * 60 * 1000)) {
return reply(mess.niReply1219());
}
userCorrida.cidade.ultimaCorrida = agoraCorr;
const bonusCarro = cidadeBonusVeiculo(userCorrida.cidade);
const chanceVitoria = 0.45 + (bonusCarro / 200);
if (CIDADE_VEICULOS[userCorrida.cidade.veiculo]?.combustivelMax > 0) {
userCorrida.cidade.combustivel = Math.max(0, (userCorrida.cidade.combustivel || 0) - 15);
}
userCorrida.cidade.durabilidadeVeiculo = Math.max(0, (userCorrida.cidade.durabilidadeVeiculo || 100) - 8);
if (Math.random() < chanceVitoria) {
const premio = valorAposta + Math.floor(valorAposta * 0.7);
userCorrida.coins += premio;
userCorrida.cidade.xp += 25;
CoinsUpdate(RG_SCOINS);
return reply(mess.niReply1220({ e0: () => (premio) }));
}
else {
userCorrida.coins -= valorAposta;
userCorrida.cidade.xp += 10;
CoinsUpdate(RG_SCOINS);
return reply(mess.niReply1221({ e0: () => (valorAposta) }));
}
}
case 'pescacidade':
case 'buscarcidade': {
if (!isGroup)
return reply(mess.onlyGroup());
const userPesca = getUsuarioCidade(sender);
if (!userPesca.cidade.nome)
return reply(mess.niReply1222({ e0: () => (prefix) }));
const agoraPesca = Date.now();
if (agoraPesca - (userPesca.cidade.ultimaPesca || 0) < (45 * 60 * 1000)) {
return reply(mess.niReply1223());
}
userPesca.cidade.ultimaPesca = agoraPesca;
const sorte = Math.random();
if (sorte < 0.45) {
const ganhoBusca = Math.floor(Math.random() * 600) + 150;
userPesca.coins += ganhoBusca;
userPesca.cidade.xp += 20;
CoinsUpdate(RG_SCOINS);
return reply(mess.niReply1224({ e0: () => (ganhoBusca) }));
}
else if (sorte < 0.80) {
const itens = Object.keys(CIDADE_LOJA);
const itemSorteado = itens[Math.floor(Math.random() * itens.length)];
userPesca.cidade.inventario[itemSorteado] = (userPesca.cidade.inventario[itemSorteado] || 0) + 1;
userPesca.cidade.xp += 20;
CoinsUpdate(RG_SCOINS);
return reply(mess.niReply1225({ e0: () => (CIDADE_LOJA[itemSorteado].nome) }));
}
else {
const dano = 15;
userPesca.cidade.saude = Math.max(0, userPesca.cidade.saude - dano);
CoinsUpdate(RG_SCOINS);
return reply(mess.niReply1226({ e0: () => (dano) }));
}
}
case 'casarcidade': {
if (!isGroup)
return reply(mess.onlyGroup());
const mentionsCasamento = info.message?.extendedTextMessage?.contextInfo?.mentionedJid || [];
if (!mentionsCasamento.length)
return reply(mess.niReply1227({ e0: () => (prefix) }));
const alvoCasamento = normalizarMencaoGrupo(mentionsCasamento[0]);
if (mesmoUsuarioCoins(alvoCasamento, sender))
return reply(mess.niReply1228());
const userCasar = getUsuarioCidade(sender);
const alvoCasar = getUsuarioCidade(alvoCasamento);
if (!userCasar.cidade.nome || !alvoCasar.cidade.nome)
return reply(mess.niReply1229());
if (userCasar.cidade.parceiro)
return reply(mess.niReply1230());
if (alvoCasar.cidade.parceiro)
return reply(mess.niReply1231());
userCasar.cidade.parceiro = alvoCasamento;
alvoCasar.cidade.parceiro = sender;
CoinsUpdate(RG_SCOINS);
await yuta.sendMessage(from, {
text: mess.niText1406({ e0: () => (mentionNum(sender)), e1: () => (mentionNum(alvoCasamento)) }),
mentions: [sender, alvoCasamento],
contextInfo: canalInfo([sender, alvoCasamento])
}, { quoted: yt });
break;
}
case 'divorciocidade':
case 'divorciarcity': {
if (!isGroup)
return reply(mess.onlyGroup());
const userDiv = getUsuarioCidade(sender);
if (!userDiv.cidade.nome)
return reply(mess.niReply1232({ e0: () => (prefix) }));
if (!userDiv.cidade.parceiro)
return reply(mess.niReply1233());
const parceiro = getUsuarioCidade(userDiv.cidade.parceiro);
parceiro.cidade.parceiro = null;
userDiv.cidade.parceiro = null;
CoinsUpdate(RG_SCOINS);
await reply(mess.niReply1234());
break;
}
case 'rankcidade':
case 'rankingcidade': {
if (!isGroup)
return reply(mess.onlyGroup());
const grupoRankCidade = getGrupoCidade();
if (!grupoRankCidade.usus.length)
return reply(mess.niReply1235());
const rank = [...grupoRankCidade.usus]
.filter(u => u.cidade?.nome)
.sort((a, b) => {
const valorA = cidadePatrimonio(a) + ((a.cidade?.nivel || 1) * 500);
const valorB = cidadePatrimonio(b) + ((b.cidade?.nivel || 1) * 500);
return valorB - valorA;
})
.slice(0, 10);
let msgRankCidade = `- *🏆 | 𝐑𝐀𝐍𝐊𝐈𝐍𝐆 𝐃𝐀 𝐂𝐈𝐃𝐀𝐃𝐄*\n\n`;
const mentionsCidade = [];
rank.forEach((u, i) => {
mentionsCidade.push(u.id);
msgRankCidade += `- *🥇 | ${i + 1}º 𝙻𝚄𝙶𝙰𝚁*\n`;
msgRankCidade += `- *👤 | 𝙲𝙸𝙳𝙰𝙳Ã𝙾 → @${u.id.split('@')[0]}*\n`;
msgRankCidade += `- *🏦 | 𝙿𝙰𝚃𝚁𝙸𝙼Ô𝙽𝙸𝙾 → ${cidadePatrimonio(u)} N-Coins*\n`;
msgRankCidade += `- *💼 | 𝙲𝙰𝚁𝙶𝙾 → ${u.cidade?.cargo || 'Desempregado'}*\n`;
msgRankCidade += `- *📈 | 𝙽Í𝚅𝙴𝙻 → ${u.cidade?.nivel || 1}*\n\n`;
});
await yuta.sendMessage(from, { text: msgRankCidade.trim(), mentions: mentionsCidade, contextInfo: canalInfo([sender]) }, { quoted: yt });
break;
}
case 'anagrama':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isModoCoins)
return reply(mess.niReply1236({ e0: () => (prefix) }));
if (fs.existsSync(`./src/dados/grupos/games/anagrama/${from}.json`)) {
fs.unlinkSync(`./src/dados/grupos/games/anagrama/${from}.json`);
reply(mess.niReply1237());
}
else {
const anaaleatorio = Math.floor(Math.random() * palavrasANA.length);
fs.writeFileSync(`./src/dados/grupos/games/anagrama/${from}.json`, JSON.stringify(palavrasANA[anaaleatorio]));
await yuta.sendMessage(from, { text: mess.niText1407({ e0: () => (shuffle(palavrasANA[anaaleatorio].palavraOriginal)), e1: () => (palavrasANA[anaaleatorio].dica) }) }, { quoted: yt });
}
break;

case 'quizanimais':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isModoCoins)
return reply(mess.niReply1238({ e0: () => (prefix) }));
if (fs.existsSync(`./src/dados/grupos/games/quiz-animais/${from}.json`)) {
fs.unlinkSync(`./src/dados/grupos/games/quiz-animais/${from}.json`);
reply(mess.niReply1239());
}
else {
const animaisquiz = Math.floor(Math.random() * quizanimais.length);
fs.writeFileSync(`./src/dados/grupos/games/quiz-animais/${from}.json`, JSON.stringify(quizanimais[animaisquiz]));
wew = await getBuffer(`${quizanimais[animaisquiz].foto}`);
await yuta.sendMessage(from, { image: wew, caption: mess.niText1476({ e0: () => (quizanimais[animaisquiz].question) }) }, { quoted: yt });
}
break;

case 'whatmusic':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isModoCoins)
return reply(mess.niReply1240({ e0: () => (prefix) }));
if (fs.existsSync(`./src/dados/grupos/games/wmusic/${from}.json`)) {
fs.unlinkSync(`./src/dados/grupos/games/wmusic/${from}.json`);
reply(mess.niReply1241());
}
else {
const whatMAle = Math.floor(Math.random() * whatMusicAr.length);
fs.writeFileSync(`./src/dados/grupos/games/wmusic/${from}.json`, JSON.stringify(whatMusicAr[whatMAle]));
await yuta.sendMessage(from, { text: mess.niText1408({ e0: () => (whatMusicAr[whatMAle].trechoMusic), e1: () => (whatMusicAr[whatMAle].dica) }) }, { quoted: yt });
}
break;

case 'gartic':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isModoCoins)
return reply(mess.niReply1242({ e0: () => (prefix) }));
if (fs.existsSync(`./src/dados/grupos/games/gartic/${from}.json`)) {
fs.unlinkSync(`./src/dados/grupos/games/gartic/${from}.json`);
reply(mess.niReply1243());
}
else {
const garticquiz = Math.floor(Math.random() * garticArchives.length);
fs.writeFileSync(`./src/dados/grupos/games/gartic/${from}.json`, JSON.stringify(garticArchives[garticquiz]));
await yuta.sendMessage(from, { image: { url: `${garticArchives[garticquiz].imagem}` }, caption: mess.niText1477({ e0: () => (garticArchives[garticquiz].pergunta), e1: () => (garticArchives[garticquiz].letra_inicial), e2: () => (garticArchives[garticquiz].contem_traços) }) }, { quoted: yt });
}
break;

case 'enigma':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isModoCoins)
return reply(mess.niReply1244({ e0: () => (prefix) }));
if (fs.existsSync(`./src/dados/grupos/games/enigma/${from}.json`)) {
fs.unlinkSync(`./src/dados/grupos/games/enigma/${from}.json`);
reply(mess.niReply1245());
}
else {
const engimaSolu = Math.floor(Math.random() * enigmaArchive.length);
fs.writeFileSync(`./src/dados/grupos/games/enigma/${from}.json`, JSON.stringify(enigmaArchive[engimaSolu]));
await yuta.sendMessage(from, { image: { url: enigma }, caption: mess.niText1478({ e0: () => (enigmaArchive[engimaSolu].charada), e1: () => (prefix) }) }, { quoted: yt });
}
break;

case 'quizfutebol':
case 'quizfut':
if (!isGroup)
return reply(mess.onlyGroup());
if (!isGroupAdmins)
return reply(mess.onlyAdmins());
if (!isModoCoins)
return reply(mess.niReply1246({ e0: () => (prefix) }));
if (fs.existsSync(`./src/dados/grupos/games/quiz-futebol/${from}.json`)) {
fs.unlinkSync(`./src/dados/grupos/games/quiz-futebol/${from}.json`);
reply(mess.niReply1247());
}
else {
const futebolquiz = Math.floor(Math.random() * quizFutebol.length);
fs.writeFileSync(`./src/dados/grupos/games/quiz-futebol/${from}.json`, JSON.stringify(quizFutebol[futebolquiz]));
await yuta.sendMessage(from, { text: mess.niText1409({ e0: () => (quizFutebol[futebolquiz].pergunta) }) }, { quoted: yt });
}
break;

case 'revelargartic':
if (!isGroupAdmins)
return reply(mess.niReply1248());
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModoCoins)
return reply(mess.niReply1249({ e0: () => (prefix) }));
if (fs.existsSync(`./src/dados/grupos/games/gartic/${from}.json`))
return reply(mess.niReply1250());
let datenagramaa = JSON.parse(fs.readFileSync(`./src/dados/grupos/games/gartic/${from}.json`));
reply(mess.niReply1251({ e0: () => (pushname), e1: () => (II), e2: () => (datenagramaa.resposta), e3: () => (II) }));
break;

case 'revelarenigma':
if (!isGroupAdmins)
return reply(mess.niReply1252());
if (!isGroup)
return reply(mess.onlyGroup());
if (!isModoCoins)
return reply(mess.niReply1253({ e0: () => (prefix) }));
if (fs.existsSync(`./src/dados/grupos/games/enigma/${from}.json`))
return reply(mess.niReply1254());
let eni1 = JSON.parse(fs.readFileSync(`./src/dados/grupos/games/enigma/${from}.json`));
reply(mess.niReply1255({ e0: () => (pushname), e1: () => (II), e2: () => (eni1.respostaEne), e3: () => (II) }));
break;

default:
if (isGroup && isBotGroupAdmins && !isGroupAdmins && !info.key.fromMe) {
const isMsgCatalogo =
type === 'productMessage' ||
(type === 'interactiveMessage' &&
info.message?.interactiveMessage?.nativeFlowMessage?.buttons?.some(b => b?.name === 'catalog_message'));
const isMsgContato = type === 'contactMessage' || type === 'contactsArrayMessage';
const isMsgLocalizacao = type === 'locationMessage';
if ((isAntiCtt && isMsgContato) || (Antiloc && isMsgLocalizacao) || (isAnticatalogo && isMsgCatalogo)) {
const senderPn = normalizar(info.key?.participantAlt || info.key?.participant || sender);
const alvoAnti = buscarMembroPorJid(senderPn) ? senderPn : sender;
if (isAnticatalogo && isMsgCatalogo) {
if (!global._anticatalogoLock)
global._anticatalogoLock = new Set();
if (!global._anticatalogoGrupoLock)
global._anticatalogoGrupoLock = new Set();
const lockKey = `${from}_${alvoAnti || sender}`;
if (global._anticatalogoLock.has(lockKey))
return;
global._anticatalogoLock.add(lockKey);
setTimeout(() => global._anticatalogoLock.delete(lockKey), 5000);
if (global._anticatalogoGrupoLock.has(from))
return;
global._anticatalogoGrupoLock.add(from);
setTimeout(() => global._anticatalogoGrupoLock.delete(from), 5000);
}
if (IS_DELETE) {
setTimeout(async () => {
await yuta.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: info.key.participant || sender } }).catch(() => {});
if (isAnticatalogo && isMsgCatalogo && typeof yuta.relayMessage === 'function') {
await yuta.relayMessage(from, {
protocolMessage: {
key: {
remoteJid: from,
fromMe: false,
id: info.key.id,
participant: info.key.participant || sender
},
type: 0
}
}, {}).catch(() => {});
}
}, 500);
}
if (!buscarMembroPorJid(alvoAnti) && !buscarMembroPorJid(sender))
return;
await yuta.groupParticipantsUpdate(from, [alvoAnti], 'remove').catch(async () => {
if (sender && sender !== alvoAnti)
await yuta.groupParticipantsUpdate(from, [sender], 'remove').catch(() => {});
});
await yuta.sendMessage(from, { text: mess.niText1410({ e0: () => ("\n".repeat(255)) }), contextInfo: { forwardingScore: 500, isForwarded: true } });
await yuta.sendMessage(from, { text: mess.niText1411(), mentions: groupAdmins });
return;
}
}
if (isGroup && isAntiFlood && !SoDono && !isVip && !isnit && isBotGroupAdmins && !isGroupAdmins && !isBot) {
if (isLimitec == null) {
var limitefl = limitefll.limitefl;
}
else {
var limitefl = isLimitec;
}
;
if (budy.length >= limitefl) {
setTimeout(async () => {
reply(mess.charactersAnti());
console.log(colors.red(`[SPAM DETECTED IN THE GROUP]`), 'Grupo:', colors.yellow(`${groupName}`), colors.white(`Ocorrência: ${hourofc} ${dattofc}`));
}, 100);
setTimeout(async () => {
if (IS_DELETE) {
setTimeout(async () => {
yuta.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender } });
}, 500);
}
if (!JSON.stringify(groupMembers).includes(sender))
return;
await yuta.groupParticipantsUpdate(from, [sender], 'remove');
}, 1000);
}
}
if (isYutaEscuta && isGroup && !info.key.fromMe) {
const audioMessage = info.message?.audioMessage || info.message?.viewOnceMessageV2Extension?.message?.audioMessage;
if (audioMessage) {
await reagir(from, "👂");
try {
const stream = await downloadContentFromMessage(audioMessage, 'audio');
let buffer = Buffer.from([]);
for await (const chunk of stream) {
buffer = Buffer.concat([buffer, chunk]);
}
const audioUrl = await upload(buffer);
const data = await api.outros.totext(audioUrl);
if (!data.status)
return reply(mess.error());
const textoFinal = data.resultado?.texto || 'ɴᴇɴʜᴜᴍ ᴛᴇxᴛᴏ ʀᴇᴄᴏɴʜᴇᴄɪᴅᴏ';
const duracao = data.resultado?.duracao || 0;
const idioma = data.resultado?.idioma || 'desconhecido';
const precisao = data.resultado?.confidence ? (data.resultado.confidence * 100).toFixed(1) : '0';
const palavras = data.resultado?.palavras || 0;
await yuta.sendMessage(from, { text: mess.niText1412({ e0: () => (textoFinal), e1: () => (duracao), e2: () => (idioma), e3: () => (precisao), e4: () => (palavras), e5: () => (NomeDoBot) }) }, { quoted: yt });
}
catch (e) {
console.error(mess.niConsole036(), e);
reply(mess.ErroAPI(prefix, SITE));
}
}
}
if (isGroup && isAutorepo && !isCmd && !info.key.fromMe) {
try {
const textoMsg = String(body ||
budy ||
info.message?.conversation ||
info.message?.extendedTextMessage?.text ||
info.message?.imageMessage?.caption ||
info.message?.videoMessage?.caption ||
'').trim();
if (textoMsg) {
const key = normalizeRepoKey(textoMsg);
const repos = loadGroupAutorepo(from);
const achado = repos.find(r => normalizeRepoKey(r?.trigger) === key);
if (achado) {
if (achado.type === 'text') {
await yuta.sendMessage(from, { text: achado.text || '' }, { quoted: yt });
return;
}
if (!achado.file)
return;
const filePath = `${AUTOREPO_MEDIA_DIR}/${achado.file}`;
if (!fs.existsSync(filePath))
return;
if (achado.type === 'image') {
await yuta.sendMessage(from, {
image: { url: filePath },
caption: achado.caption || ''
}, { quoted: yt });
return;
}
if (achado.type === 'video') {
await yuta.sendMessage(from, {
video: { url: filePath },
caption: achado.caption || '',
gifPlayback: false
}, { quoted: yt });
return;
}
if (achado.type === 'audio') {
await yuta.sendMessage(from, {
audio: { url: filePath },
mimetype: achado.mimetype || getRepoMimeByExt(achado.file, 'audio'),
ptt: false
}, { quoted: yt });
return;
}
if (achado.type === 'sticker') {
await yuta.sendMessage(from, {
sticker: fs.readFileSync(filePath)
}, { quoted: yt });
return;
}
}
}
}
catch (e) {
console.log(mess.niConsole037(), e);
}
}
if (isGroup && isPalavrao && isBotGroupAdmins && !SoDono && !isGroupAdmins) {
try {
const palavras = listaPalavrao();
const msg = limparPalavra(budy2 || budy || body || "");
const achou = palavras.find(p => p && msg.includes(p));
if (achou) {
await yuta.sendMessage(from, { text: mess.niText1413({ e0: () => (sender.split("@")[0]), e1: () => (achou) }), mentions: [sender] }, { quoted: yt });
setTimeout(async () => {
try {
await yuta.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender } }).catch(() => { });
await yuta.groupParticipantsUpdate(from, [sender], "remove");
}
catch (e) { }
}, 1000);
}
}
catch (e) { }
}

if (isCmd) {
const AB = similarityCmd(command);
const comandoDigitado = prefix + command;
let sugestao = AB[0].comando.replace(prefix, "");
sugestao = prefix + sugestao;
const notcmd = mess.privateCmd({ e0: () => comandoDigitado, e1: () => sugestao, e2: () => AB[0].porcentagem});

const botoes404 = [
{ name: "quick_reply", buttonParamsJson: JSON.stringify({ display_text: "✦ 𝐀𝐁𝐑𝐈𝐑 𝐌𝐄𝐍𝐔 ✦", id: `${prefix}menu` }) },
{ name: "quick_reply", buttonParamsJson: JSON.stringify({ display_text: "✧ 𝐔𝐒𝐀𝐑 𝐒𝐔𝐆𝐄𝐒𝐓𝐀̃𝐎 ✧", id: sugestao }) }
];

if (usarImg()) {
let avatarUrl;
try {
const ppUrl = await yuta.profilePictureUrl(sender, "image");
avatarUrl = ppUrl || imgperfil;
}
catch {
avatarUrl = imgperfil;
}

const api404 = yutaUrl('/canvas/404', {
fundo: fundoerror,
logo: avatarUrl,
opc: 'Opa!',
mensagem: 'Comando inválido',
semelhanca: sugestao,
similarity: AB[0].porcentagem
});

const local404Path = "./src/dados/settings/LOGOS/foto-404.png";
const imageResponse = await axios.get(api404, { responseType: 'arraybuffer' });
fs.writeFileSync(local404Path, imageResponse.data);

if (usarBotoes()) {
await sendInteractiveImageButtons(yuta, from, {
image: fs.readFileSync(local404Path),
body: notcmd,
footer: `*✦ ${NomeDoBot} ✦*`,
buttons: botoes404,
contextInfo: NkChannelKk
}, { quoted: yt });
}
else {
await yuta.sendMessage(from, {
image: fs.readFileSync(local404Path),
caption: notcmd,
contextInfo: NkChannelKk
}, { quoted: yt });
}

} else {
if (usarBotoes()) {
await sendLikeInnovators(yuta, from, {
text: notcmd,
footer: `*✦ ${NomeDoBot} ✦*`,
interactiveButtons: botoes404,
contextInfo: NkChannelKk
}, { quoted: yt });
}
else {
await yuta.sendMessage(from, {
text: notcmd,
contextInfo: NkChannelKk
}, { quoted: yt });
}
}

reagir(from, "🤷‍♂️");
}
if (budy2 === "prefixo") {
if (isGroup && !SoDono && !itsMe && (isBanchat || (So_Adm && !isGroupAdmins)))
return;
const txtPrefixo = mess.prefix(prefix, NomeDoBot);
if (usarBotoes()) {
await sendLikeInnovators(yuta, from, {
text: txtPrefixo,
footer: `*✦ ${NomeDoBot} ✦*`,
interactiveButtons: [
{ name: "quick_reply", buttonParamsJson: JSON.stringify({ display_text: "✦ 𝐀𝐁𝐑𝐈𝐑 𝐌𝐄𝐍𝐔 ✦", id: `${prefix}menu` }) },
{ name: "quick_reply", buttonParamsJson: JSON.stringify({ display_text: "✧ 𝐓𝐄𝐒𝐓𝐀𝐑 𝐏𝐈𝐍𝐆 ✧", id: `${prefix}ping` }) }
],
contextInfo: NkChannelKk
}, { quoted: yt });
}
else
reply(txtPrefixo);
reagir(from, "🙇‍♂️");
}
}
}
}
const nmrdn = setting.ownerNumber.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`;
async function forTemporaryVip() {
if (vip.length > 0) {
for (const y of [...vip]) {
if (y.save != Number(moment.tz('America/Sao_Paulo').format('DD'))) {
y.save = Number(moment.tz('America/Sao_Paulo').format('DD'));
fs.writeFileSync("./src/dados/usuarios/vip.json", JSON.stringify(vip));
if (y.infinito == false) {
if (y.dias > 1) {
y.dias -= 1;
fs.writeFileSync("./src/dados/usuarios/vip.json", JSON.stringify(vip));
}
else {
await yuta.sendMessage(y.id, { text: mess.niText1414() }).catch(() => {});
const AB = vip.findIndex(b => b.id === y.id);
if (AB !== -1) vip.splice(AB, 1);
fs.writeFileSync("./src/dados/usuarios/vip.json", JSON.stringify(vip));
}
}
}
}
}
}
forTemporaryVip().catch((error) => { console.log(error); });
startFunctionNaga().catch(async (error) => {
if (JSON.stringify(error).includes(API_KEY_YUTA2)) { }
else if (String(error).includes("Erro: aborted")) {
setImmediate(() => process.exit(1));
}
else if (String(error).includes("nativeFlowResponseMessage")) {
}
else {
return console.log(mess.niConsole038(), error);
}
});
}
export default startyuta;
export { startyuta };

