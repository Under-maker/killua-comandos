/*
 *
 * AVISO DE DIREITOS AUTORAIS E PROPRIEDADE INTELECTUAL
 *
 * Este arquivo e seu código-fonte fazem parte do projeto YutaBot-MD
 * e são protegidos por direitos autorais.
 *
 * É proibido, sem autorização prévia e expressa do criador:
 *
 * • modificar, adaptar ou alterar este código;
 * • remover ou modificar créditos e avisos de autoria;
 * • redistribuir, revender, republicar ou disponibilizar cópias;
 * • desofuscar ou realizar engenharia reversa de partes protegidas;
 * • utilizar partes protegidas deste projeto em outro projeto sem
 *   a devida autorização.
 *
 * Modificações e redistribuições somente são permitidas mediante
 * autorização expressa do criador e nos limites dessa autorização.
 *
 * A aquisição ou obtenção de uma cópia do YutaBot-MD não transfere
 * a propriedade intelectual nem os direitos autorais do projeto.
 *
 * Copyright © 2026 Nk Petrøv. Todos os direitos reservados.
 */
import { fileURLToPath as __fileURLToPath } from 'url';
import { dirname as __dirnamePath } from 'path';
import { readFileSync as __readJSONFileSync } from 'fs';
import { aplicarFiltroBaileysNoise } from './funcoes/baileys-noise.js';
import makeWASocket, { useMultiFileAuthState, makeCacheableSignalKeyStore } from '@whiskeysockets/baileys';
import qrcodeTerminal from 'qrcode-terminal';
import { fs, readline, LoggerB, Boom, axios, util, moment, time, date, getBuffer, upload, banner2, banner3, colors, getGroupAdmins, mess, getRandom, NodeCache, nescessario, setting, logoslink, extractDDD, extractStateFromNumber, extractStateFromDDD, welcome, bye } from '../src/funcoes/functions.js';
import { startSubBot, restoreSubBots } from '../src/js/sub.js';
import { createAntiRateOverlimit, aplicarAntiRateOverlimit } from '../src/funcoes/rate-overlimit.js';
import { createDefaultGroupConfig, ensureGroupConfig, saveGroupConfig, getGroupConfig, getWelcomeConfig, ensureDatabaseConnection } from './funcoes/sqlite.js';
import { api } from './funcoes/yuta-api.js';
import startyuta from '../index.js';
const makeInMemoryStore = undefined;
const PHONENUMBER_MCC = undefined;
const __filename = __fileURLToPath(import.meta.url);
const __dirname = __dirnamePath(__filename);
const loadJSON = (file) => JSON.parse(__readJSONFileSync(file, 'utf8')); 
aplicarFiltroBaileysNoise({ name: 'YUTA' });
const qrcode = "./src/dados/qr-code";
const { NomeDoBot, channelnk } = loadJSON(new URL('../src/dados/settings/media/settings.json', import.meta.url))
global.subBots =
global.subBots || {}
global.subBotsConnecting =
global.subBotsConnecting || {}
global.maxSubBots = 2
const logger = LoggerB.child({});
logger.level = 'silent';
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const question = (text) => new Promise(resolve => rl.question(text, resolve));

const rotulo = (nome, cor = 'cyan') => {
    const pintar = typeof colors?.[cor] === 'function' ? colors[cor] : colors.cyan;
    return pintar(`[ ${String(nome).toUpperCase()} ]`);
};

const logConsole = (tipo, mensagem, cor = 'cyan') => {
    console.log(`${rotulo(tipo, cor)} ${colors.white('-')} ${colors.white(mensagem)}`);
};

const ask = async (mensagem) => {
    return await question(`${rotulo('MENSAGEM', 'green')} ${colors.white('-')} ${colors.white(mensagem)} `);
};

const logInfo = (mensagem) => logConsole('INFO', mensagem, 'green');
const logSuccess = (mensagem) => logConsole('SUCESSO', mensagem, 'green');
const logWarning = (mensagem) => logConsole('AVISO', mensagem, 'yellow');
const logError = (mensagem) => logConsole('ERRO', mensagem, 'red');
const logProcess = (mensagem) => logConsole('PROCESSO', mensagem, 'cyan');
const msgRetryCounterCache = new NodeCache();
let sqliteBotReady = false;
let sqliteBotConnection = null;

function ensureMainDatabase() {
    if (sqliteBotReady) return sqliteBotConnection;
    sqliteBotConnection = ensureDatabaseConnection('bot-principal');
    sqliteBotReady = true;
    logSuccess('Conexão com o banco SQLite estabelecida para o bot principal.');
    return sqliteBotConnection;
}

const SUPORTE_NUMBER = "+559183721035";
const AUTO_FOLLOW_CHANNEL = '120363427720825084@newsletter';

async function seguirCanalAutomaticamente(sock) {
    try {
        if (typeof sock?.newsletterFollow !== 'function') return;
        await sock.newsletterFollow(AUTO_FOLLOW_CHANNEL);
    } catch (err) {
        logWarning(`Não foi possível seguir o canal automaticamente: ${err?.message || err}`);
    }
}

function collectNumbers(inputString) {
    return inputString.replace(/\D/g, '');
}
function limparQR() {
    try {
        if (fs.existsSync(qrcode)) {
            fs.rmSync(qrcode, { recursive: true, force: true });
            logSuccess('Os dados da conexão anterior foram removidos.');
        } else {
            logWarning('Nenhuma conexão anterior foi encontrada para remover.');
        }
    } catch (err) {
        logError(`Não foi possível remover os dados da conexão: ${err.message}`);
    }
}

async function startPairing(yuta) {
    logInfo('Informe o número completo com DDI e DDD. Exemplo: 5511999999999.');
    const phoneNumber = await ask('Digite o número do WhatsApp que deseja conectar:');
    const numerosColetados = collectNumbers(phoneNumber);

    if (!numerosColetados || numerosColetados.length < 11) {
        logError('O número informado é inválido. Digite novamente incluindo o DDI e o DDD.');
        return;
    }

    try {
        logProcess('Solicitando o código de pareamento ao WhatsApp...');
        const code = await yuta.requestPairingCode(numerosColetados);
        const codigoFormatado = String(code || '').match(/.{1,4}/g)?.join('-') || code;
        logSuccess(`Código de pareamento gerado: ${codigoFormatado}`);
        logInfo('No WhatsApp, abra Dispositivos conectados, toque em Conectar um aparelho e depois em Conectar com número de telefone.');
        logWarning('O código expira rapidamente. Use-o assim que for gerado.');
    } catch (err) {
        logError(`Não foi possível gerar o código de pareamento: ${err?.message || err}`);
    }
}

async function openWhatsappSupport() {
    logInfo(`Entre em contato com o suporte pelo endereço: https://wa.me/${SUPORTE_NUMBER.replace(/\D/g, '')}`);
}

async function editBotMenu(yuta) {
    while (true) {
        console.log('');
        logInfo('Escolha somente a informação que deseja alterar. As demais configurações serão mantidas.');
        console.log(colors.magenta("╔══╌✯╌══⊱×⊰平⊱×⊰══╌✯╌══╗"));
        console.log(colors.magenta("║𖣴") + colors.white(" Configurações do bot ↴"));
        console.log(colors.magenta("╚══╌✯╌══⊱×⊰平⊱×⊰══╌✯╌══╝"));
        console.log(colors.magenta("║") + colors.blue("╭━ ━━ ── ── ━━ ━╮"));

        console.log(colors.magenta("║") + colors.blue("|") + colors.magenta("𖣴➣ ") + colors.red("( ") + colors.cyan("1") + colors.red(" )") + colors.cyan(" Nome do bot"));
        console.log(colors.magenta("║") + colors.blue("|") + colors.magenta("𖣴➣ ") + colors.red("( ") + colors.cyan("2") + colors.red(" )") + colors.cyan(" Nome do dono"));
        console.log(colors.magenta("║") + colors.blue("|") + colors.magenta("𖣴➣ ") + colors.red("( ") + colors.cyan("3") + colors.red(" )") + colors.cyan(" Número do dono"));
        console.log(colors.magenta("║") + colors.blue("|") + colors.magenta("𖣴➣ ") + colors.red("( ") + colors.cyan("4") + colors.red(" )") + colors.cyan(" Prefixo dos comandos"));
        console.log(colors.magenta("║") + colors.blue("|") + colors.magenta("𖣴➣ ") + colors.red("( ") + colors.cyan("5") + colors.red(" )") + colors.cyan(" Token da API"));
        console.log(colors.magenta("║") + colors.blue("|") + colors.magenta("𖣴➣ ") + colors.red("( ") + colors.cyan("0") + colors.red(" )") + colors.red(" Voltar ao menu anterior"));

        console.log(colors.magenta("║") + colors.blue("╰━ ━━ ── ── ━━ ━╯"));
        console.log(colors.magenta("╚══╌✯╌══⊱×⊰平⊱×⊰══╌✯╌══╝"));

        let opt = (await question(colors.white("╰━> "))).trim();
        if (opt === '0') {
            logInfo('Voltando ao menu de conexão...');
            return;
        }

        try {
            switch (opt) {
                case '1': {
                    logInfo(`Nome atual do bot: ${setting.NomeDoBot || 'Não definido'}.`);
                    const novo = (await ask('Digite o novo nome do bot:')).trim();
                    if (!novo) {
                        logWarning('O nome não foi alterado porque nenhum valor foi informado.');
                        continue;
                    }
                    setting.NomeDoBot = novo;
                    logSuccess(`Nome do bot alterado para: ${novo}.`);
                    break;
                }
                case '2': {
                    logInfo(`Nome atual do dono: ${setting.ownerName || 'Não definido'}.`);
                    const novo = (await ask('Digite o novo nome do dono:')).trim();
                    if (!novo) {
                        logWarning('O nome não foi alterado porque nenhum valor foi informado.');
                        continue;
                    }
                    setting.ownerName = novo;
                    logSuccess(`Nome do dono alterado para: ${novo}.`);
                    break;
                }
                case '3': {
                    logInfo('Informe o número completo com DDI e DDD. Exemplo: 5511999999999.');
                    const numero = collectNumbers(await ask('Digite o novo número do dono:'));
                    if (numero.length < 11) {
                        logWarning('Número inválido. Informe o DDI, o DDD e o número do telefone.');
                        continue;
                    }
                    setting.ownerNumber = numero;
                    logSuccess(`Número do dono alterado para: ${numero}.`);
                    break;
                }
                case '4': {
                    logInfo(`Prefixo atual: ${setting.prefix || 'Não definido'}.`);
                    const novo = (await ask('Digite o novo prefixo. Exemplo: !')).trim();
                    if (!novo) {
                        logWarning('O prefixo não foi alterado porque nenhum valor foi informado.');
                        continue;
                    }
                    setting.prefix = novo;
                    logSuccess(`Prefixo alterado para: ${novo}`);
                    break;
                }
                case '5': {
                    logInfo('O token permite que o bot utilize os serviços da API. O valor atual não será exibido por segurança.');
                    const token = (await ask('Digite o novo token da API:')).trim();
                    if (!token) {
                        logWarning('O token não foi alterado porque nenhum valor foi informado.');
                        continue;
                    }
                    setting.TOKEN = token;
                    logSuccess('Token da API alterado com sucesso.');
                    break;
                }
                default:
                    logWarning('Opção inválida. Digite um número entre 0 e 5.');
                    continue;
            }

            fs.writeFileSync('./src/dados/settings/media/settings.json', JSON.stringify(setting, null, 2));
            logSuccess('As novas configurações foram salvas.');
        } catch (err) {
            logError(`Não foi possível salvar a configuração: ${err?.message || err}`);
        }
    }
}

async function showMenu(yuta, qrController) {
    while (true) {
        console.log('');
        logInfo('Escolha como deseja conectar o bot ao WhatsApp.');
        console.log(colors.magenta("╔══╌✯╌══⊱×⊰平⊱×⊰══╌✯╌══╗"));
        console.log(colors.magenta("║𖣴") + colors.white(" Escolha uma opção ↴"));
        console.log(colors.magenta("╚══╌✯╌══⊱×⊰平⊱×⊰══╌✯╌══╝"));
        console.log(colors.magenta("║") + colors.blue("╭━ ━━ ── ── ━━ ━╮"));

        console.log(colors.magenta("║") + colors.blue("|") + colors.magenta("𖣴➣ ") + colors.red("( ") + colors.cyan("1") + colors.red(" )") + colors.cyan(" Código de pareamento"));
        console.log(colors.magenta("║") + colors.blue("|") + colors.magenta("𖣴➣ ") + colors.red("( ") + colors.cyan("2") + colors.red(" )") + colors.cyan(" QR-Code"));
        console.log(colors.magenta("║") + colors.blue("|") + colors.magenta("𖣴➣ ") + colors.red("( ") + colors.cyan("3") + colors.red(" )") + colors.cyan(" Falar com o suporte"));
        console.log(colors.magenta("║") + colors.blue("|") + colors.magenta("𖣴➣ ") + colors.red("( ") + colors.cyan("4") + colors.red(" )") + colors.cyan(" Editar configurações do bot"));

        console.log(colors.magenta("║") + colors.blue("╰━ ━━ ── ── ━━ ━╯"));
        console.log(colors.magenta("╚══╌✯╌══⊱×⊰平⊱×⊰══╌✯╌══╝"));

        const option = (await question(colors.white("╰━> "))).trim();

        switch (option) {
            case '1':
                qrController.setEnabled(false);
                logInfo('Você escolheu o código de pareamento. Será necessário informar o número que receberá o código.');
                await startPairing(yuta);
                return;
            case '2':
                qrController.setEnabled(true);
                logInfo('Você escolheu o QR-Code. Abra o WhatsApp no celular para escanear o código quando ele aparecer.');
                logProcess('Aguardando o WhatsApp gerar o QR-Code...');
                qrController.showLatest();
                return;
            case '3':
                logInfo('Você escolheu o suporte. Use o contato abaixo caso precise de ajuda com a instalação ou conexão.');
                await openWhatsappSupport();
                break;
            case '4':
                await editBotMenu(yuta);
                break;
            default:
                logWarning('Opção inválida. Digite 1, 2, 3 ou 4.');
        }
    }
}

/*#e41*/
async function startConnect() {
    const sqliteConnection = ensureMainDatabase();

    const { state, saveCreds } = await useMultiFileAuthState(qrcode);

/*#e42*/
const antiRate = createAntiRateOverlimit({
    name: 'YUTA',
    ttlMs: 10 * 60 * 1000,
    staleMs: 6 * 60 * 60 * 1000,
    cooldownMs: 45 * 1000,
    minIntervalMs: 1600,
    log: (msg) => console.log(colors.yellow(msg))
});

const yuta = makeWASocket({
    version: [2, 3000, 1044006379],
    logger,
    browser: ['Linux', 'Opera', '10.0.22631'],
    auth: {
        creds: state.creds,
        keys: makeCacheableSignalKeyStore(state.keys, logger)
    },
    msgRetryCounterCache,
    mobile: false,
    fireInitQueries: true,
    markOnlineOnConnect: true,
    generateHighQualityLinkPreview: true,
    connectTimeoutMs: 20_000,
    keepAliveIntervalMs: 25_000,
    defaultQueryTimeoutMs: 60_000,
    retryRequestDelayMs: 5_000,
    maxMsgRetryCount: 5,
    syncFullHistory: false,
    downloadHistory: false,
    emitOwnEvents: false,
    shouldSyncHistoryMessage: () => false,
    cachedGroupMetadata: antiRate.cachedGroupMetadata,
    getMessage: async (key) => undefined
});
yuta.__sqlite = sqliteConnection;

let qrMaisRecente = null;
let qrExibido = null;
let exibirQrNoConsole = false;
let avisoEsperaQr = null;

const renderizarQr = () => {
    if (!exibirQrNoConsole || !qrMaisRecente || qrMaisRecente === qrExibido) return false;
    qrExibido = qrMaisRecente;
    if (avisoEsperaQr) clearTimeout(avisoEsperaQr);

    console.log('');
    logSuccess('QR-Code gerado. Escaneie-o pelo WhatsApp para concluir a conexão.');
    qrcodeTerminal.generate(qrMaisRecente, { small: true });
    logInfo('No WhatsApp, abra Dispositivos conectados e toque em Conectar um aparelho.');
    logWarning('O QR-Code expira rapidamente. Caso expire, o próximo será exibido automaticamente.');
    return true;
};

const qrController = {
    setEnabled(valor) {
        exibirQrNoConsole = Boolean(valor);
        if (!exibirQrNoConsole && avisoEsperaQr) clearTimeout(avisoEsperaQr);
    },
    showLatest() {
        if (renderizarQr()) return;
        if (avisoEsperaQr) clearTimeout(avisoEsperaQr);
        avisoEsperaQr = setTimeout(() => {
            if (exibirQrNoConsole && !qrMaisRecente) {
                logWarning('O WhatsApp ainda não enviou o QR-Code. Verifique a internet e aguarde alguns segundos.');
            }
        }, 15_000);
    }
};

yuta.ev.on('connection.update', (update = {}) => {
    if (!update.qr) return;
    qrMaisRecente = update.qr;
    renderizarQr();
});

aplicarAntiRateOverlimit(yuta, antiRate);


const limparCacheGrupo = (jid = '') => {
    try {
        jid = String(jid || '').trim();
        if (!jid || !jid.endsWith('@g.us')) return;
        global.__YUTA_GPMETA_CACHE = global.__YUTA_GPMETA_CACHE || new Map();
        global.__YUTA_GPMETA_CACHE.delete(jid);
        antiRate?.cache?.delete?.(jid);
        yuta?.__antiRateOverlimit?.cache?.delete?.(jid);
    } catch {}
};

yuta.ev.on('groups.update', (updates = []) => {
    try {
        const lista = Array.isArray(updates) ? updates : [updates];
        for (const gp of lista) limparCacheGrupo(gp?.id || gp?.jid);
    } catch {}
});

yuta.ev.on('group-participants.update', (event = {}) => {
    try { limparCacheGrupo(event?.id || event?.jid); } catch {}
});

if (!fs.existsSync(`${qrcode}/creds.json`)) {
    await showMenu(yuta, qrController);
}

yuta.ev.on('connection.update', async ({ connection }) => {
    if (connection !== 'open') return;

    await seguirCanalAutomaticamente(yuta);

    try {
        const creds = yuta?.authState?.creds;

        if (creds) {
            Object.assign(creds, {
                profilePicThumbObj: {},
                myAppStateKeyId: undefined,
                accountSyncCounter: 0
            });
        }

        await yuta.query({
            tag: 'iq',
            attrs: {
                xmlns: 'privacy',
                to: '@s.whatsapp.net',
                type: 'set'
            },
            content: [{
                tag: 'privacy',
                attrs: {},
                content: [{
                    tag: 'category',
                    attrs: {
                        name: 'profile',
                        value: 'all'
                    }
                }]
            }]
        }).catch(() => {});

    } catch (err) {
        logWarning(`Não foi possível ajustar a privacidade do perfil: ${err?.message || err}`);
    }
});

    yuta.ev.on("creds.update", saveCreds);

    yuta.ev.on("connection.update", (update) => {
        const { connection, lastDisconnect } = update;
        const shouldReconnect = new Boom(lastDisconnect?.error)?.output.statusCode;

        switch (connection) {
      case 'close':
    if (shouldReconnect) {

        if (shouldReconnect == 401) {
            logInfo(mess.ErrorBaileys_401());
            limparQR(); 
        }

        else if (shouldReconnect == 408) {
            logInfo(mess.ErrorBaileys_408());
        }

        else if (shouldReconnect == 411) {
            logInfo(mess.ErrorBaileys_411());
            limparQR(); 
        }

        else if (shouldReconnect == 428) {
            logInfo(mess.ErrorBaileys_428());
        }

        else if (shouldReconnect == 440) {
            logInfo(mess.ErrorBaileys_440());
            limparQR(); 
        }

        else if (shouldReconnect == 500) {
            logInfo(mess.ErrorBaileys_500());
        }

        else if (shouldReconnect == 503) {
            logInfo("Erro desconhecido! Error: 503.");
        }

        else if (shouldReconnect == 515) {
            logInfo(mess.ErrorBaileys_515()); 
        }

        else {
            logInfo(`Conexão fechada por motivo: ${lastDisconnect?.error}`);
        }

        startConnect();
    }
    break;
            case 'connecting':
                logProcess('Conectando o bot ao WhatsApp...');
                break;

            case 'open':
                console.log(banner3.string);
                console.log(banner2.string);
                logSuccess('Bot conectado ao WhatsApp com sucesso.');
                rl.close();
                restoreSubBots()
                break;
        }
    });

    yuta.ev.on("messages.upsert", (upsert) => {
        setImmediate(() => {
            startyuta(upsert, yuta, qrcode).catch(console.log);
        });
    });

    // Proteção contra chamadas em grupo — KILLUA ZOLDYCK
    const chamadasGrupoProcessadas = new Set();

    yuta.ev.on('call', async (calls) => {
        for (const call of calls || []) {


            if (call?.status !== 'offer' || call?.isGroup !== true) continue;

            const groupJid = call.groupJid;
            if (!groupJid || !groupJid.endsWith('@g.us')) continue;

            const callKey = `${groupJid}:${call.id}`;
            if (chamadasGrupoProcessadas.has(callKey)) continue;
            chamadasGrupoProcessadas.add(callKey);

            setTimeout(() => chamadasGrupoProcessadas.delete(callKey), 120000);

            try {
                const config = getGroupConfig(groupJid, createDefaultGroupConfig({ groupId: groupJid }));
                const cfg = Array.isArray(config) ? config[0] : config;

                if (cfg?.antiligacaogrupo !== true) continue;

                const metadata = await yuta.groupMetadata(groupJid).catch(() => null);
                if (!metadata?.participants?.length) continue;

                const participantes = metadata.participants;

                const digitosJid = (valor) => String(valor || '')
                    .split('@')[0].split(':')[0].replace(/\D/g, '');

                const idsAutor = [call.from, call.callerPn].filter(Boolean).map(String);
                const numeroAutor = digitosJid(call.callerPn);

                const autor = participantes.find(p => {
                    const ids = [
                        p?.id, p?.jid, p?.phoneNumber,
                        p?.participant, p?.participantAlt, p?.lid
                    ].filter(Boolean).map(String);

                    if (ids.some(id => idsAutor.includes(id))) return true;

                    if (numeroAutor) {
                        const telefones = [
                            p?.phoneNumber, p?.participantAlt,
                            p?.jid, p?.id, p?.participant
                        ].filter(id => id && String(id).includes('@s.whatsapp.net'));

                        return telefones.some(id => digitosJid(id) === numeroAutor);
                    }

                    return false;
                });

                if (!autor) {
                    console.log('[ANTI-LIGAÇÃO GRUPO] Autor não identificado; nenhuma remoção realizada.');
                    continue;
                }

                const autorAdmin = autor.isAdmin || autor.isSuperAdmin ||
                    autor.admin === 'admin' || autor.admin === 'superadmin';

                if (autorAdmin) {
                    console.log('[ANTI-LIGAÇÃO GRUPO] Chamada iniciada por administrador; remoção ignorada.');
                    continue;
                }

                const botNumero = digitosJid(yuta.user?.id);
                const botLid = String(yuta.user?.lid || '').split(':')[0];

                const bot = participantes.find(p => {
                    const ids = [
                        p?.id, p?.jid, p?.phoneNumber,
                        p?.participant, p?.participantAlt, p?.lid
                    ].filter(Boolean).map(String);

                    const mesmoLid = botLid && ids.some(id =>
                        id === botLid || id === `${botLid}@lid`
                    );

                    const mesmoNumero = botNumero && ids.some(id =>
                        id.includes('@s.whatsapp.net') && digitosJid(id) === botNumero
                    );

                    return mesmoLid || mesmoNumero;
                });

                const botAdmin = bot && (
                    bot.isAdmin || bot.isSuperAdmin ||
                    bot.admin === 'admin' || bot.admin === 'superadmin'
                );

                if (!botAdmin) {
                    console.log('[ANTI-LIGAÇÃO GRUPO] Bot não identificado como administrador.');
                    continue;
                }

                // Em grupos com LID, prioriza o ID real do participante.
                const autorJid = autor.id || autor.jid ||
                    autor.participant || autor.phoneNumber;

                if (!autorJid) {
                    console.log('[ANTI-LIGAÇÃO GRUPO] JID do autor indisponível; remoção cancelada.');
                    continue;
                }

                const resultado = await yuta.groupParticipantsUpdate(
                    groupJid, [autorJid], 'remove'
                );

                const falha = Array.isArray(resultado) &&
                    resultado.some(item => Number(item?.status) >= 400);

                if (falha) {
                    console.log('[ANTI-LIGAÇÃO GRUPO] WhatsApp recusou a remoção:', JSON.stringify(resultado));
                    continue;
                }

                const jidMencao = autor.phoneNumber || autorJid;

                await yuta.sendMessage(groupJid, {
                    text: `📵 @${String(jidMencao).split('@')[0].split(':')[0]} iniciou uma ligação de grupo e foi removido.`,
                    mentions: [jidMencao]
                });

                console.log('[ANTI-LIGAÇÃO GRUPO] Solicitação de remoção enviada:', autorJid);
            } catch (error) {
                console.log('[ANTI-LIGAÇÃO GRUPO] Falha ao processar chamada:', error?.message || error);
            }
        }
    });

if (process.env.AUTO_LIMPEZA === "true") {
}

yuta.ev.process(async (events) => {
        if (!events["group-participants.update"]) return;
        try {
            const nkzinLm = events["group-participants.update"];
            if (!nkzinLm?.id?.endsWith('@g.us')) return;

            limparCacheGrupo(nkzinLm.id);
            global.__YUTA_GPMETA_CACHE = global.__YUTA_GPMETA_CACHE || new Map();

            const metadataRapida = async (jid, force = false) => {
                const cache = global.__YUTA_GPMETA_CACHE;
                const salvo = cache.get(jid);
                const agora = Date.now();

                if (!force && salvo?.data && agora - salvo.time < 30000) return salvo.data;
                if (force) limparCacheGrupo(jid);

                const timeout = new Promise(resolve => setTimeout(() => resolve(null), 3500));
                const meta = await Promise.race([
                    yuta.groupMetadata(jid).catch(() => null),
                    timeout
                ]);

                if (meta?.id) {
                    cache.set(jid, { data: meta, time: Date.now() });
                    antiRate?.setCache?.(jid, meta);
                    return meta;
                }

                return salvo?.data || { id: jid, subject: '', desc: '', participants: [] };
            };

            let grpmdt = await metadataRapida(nkzinLm.id, true);
            if (!grpmdt?.id?.endsWith('@g.us')) return;

            const criarConfigGrupo = () => createDefaultGroupConfig({
                name: grpmdt.subject || '',
                groupId: nkzinLm.id,
                prefix: setting.prefix
            });
            let jsonGp = ensureGroupConfig(nkzinLm.id, criarConfigGrupo());
            if (!Array.isArray(jsonGp)) jsonGp = criarConfigGrupo();
            if (!jsonGp[0]) jsonGp[0] = criarConfigGrupo()[0];
            jsonGp[0].name = jsonGp[0].name || grpmdt.subject || '';
            jsonGp[0].groupId = jsonGp[0].groupId || nkzinLm.id;
            if (!Array.isArray(jsonGp[0].listanegra)) jsonGp[0].listanegra = [];
            if (!jsonGp[0].ANTI_DDD || typeof jsonGp[0].ANTI_DDD !== 'object') jsonGp[0].ANTI_DDD = { active: false, listaProibidos: [] };
            if (!Array.isArray(jsonGp[0].ANTI_DDD.listaProibidos)) jsonGp[0].ANTI_DDD.listaProibidos = [];
            if (!Array.isArray(jsonGp[0].prefixos)) jsonGp[0].prefixos = [`${setting.prefix}`];
            saveGroupConfig(nkzinLm.id, jsonGp);

            const membros_ = grpmdt.participants || [];
            const groupAdmins_ = getGroupAdmins(membros_);

            const pegarJid = (p = '') => {
                if (!p) return '';
                if (typeof p === 'string') return p;
                return p?.phoneNumber || p?.jid || p?.id || p?.participantAlt || p?.participant || p?.lid || '';
            };

            const normalizar = (alvo = '') => {
                alvo = String(alvo || '').trim();
                if (!alvo) return '';

                const limparNum = (txt = '') => String(txt || '').replace(/@.+$/, '').replace(/\D/g, '');

                const paraJid = (txt = '') => {
                    txt = String(txt || '').trim();
                    if (!txt) return '';
                    if (txt.includes('@s.whatsapp.net')) return txt;
                    const n = limparNum(txt);
                    if (n.length >= 10 && n.length <= 15) return `${n}@s.whatsapp.net`;
                    return '';
                };

                const base = alvo.split('@')[0];

                const achou = membros_.find(v => {
                    const ids = [
                        v?.phoneNumber,
                        v?.jid,
                        v?.participantAlt,
                        v?.participant,
                        v?.id,
                        v?.lid
                    ].filter(Boolean).map(x => String(x));

                    return ids.some(x => x === alvo || x.split('@')[0] === base);
                });

                if (achou) {
                    const candidatos = [
                        achou?.phoneNumber,
                        achou?.jid,
                        achou?.participantAlt,
                        achou?.participant,
                        achou?.id
                    ].filter(Boolean).map(x => String(x));

                    for (const c of candidatos) {
                        const real = paraJid(c);
                        if (real) return real;
                    }
                }

                const direto = paraJid(alvo);
                if (direto) return direto;

                return alvo;
            };

            const participante = normalizar(pegarJid(nkzinLm.participants?.[0]));
            const numero = participante.split('@')[0].replace(/\D/g, '');
            const NumeroDoBot = yuta.user.id.split(':')[0];
            if (participante.startsWith(yuta.user.id.split(':')[0])) return;

function gerarContextNewsletter() {
    if (setting.channelnk === "0@newsletter") {
        return {}; 
    }
    return {
        isForwarded: true,
        forwardingScore: 1,
        forwardedNewsletterMessageInfo: {
            newsletterJid: setting.channelnk,
            newsletterName: NomeDoBot,
            serverMessageId: ''
        }
    };
}

const NkChannelKk = gerarContextNewsletter();

const welcomePadrao = (num, gp) => `Bem-vindo(a), @${num} ao grupo ${gp}!`;
const byePadrao = (num) => `Até mais, @${num}!`;

async function prepararLogoParaCanvas(url, jid = '') {
    const original = String(url || '').trim();
    if (!original) return '';

    // URLs hospedadas pela própria API já são públicas e não precisam ser
    // reenviadas a cada entrada no grupo.
    if (/^https?:\/\/yuta-apis\.xyz\/upload\//i.test(original)) return original;

    global.__YUTA_CANVAS_LOGO_CACHE = global.__YUTA_CANVAS_LOGO_CACHE || new Map();
    const cache = global.__YUTA_CANVAS_LOGO_CACHE;
    const chave = String(jid || original);
    const salvo = cache.get(chave);
    if (salvo?.source === original && Date.now() - salvo.time < 30 * 60 * 1000) {
        return salvo.url;
    }

    try {
        const buffer = await getBuffer(original);
        if (buffer && buffer.length) {
            const nome = `welcome_logo_${String(jid || Date.now()).replace(/[^a-z0-9]/gi, '')}.jpg`;
            const publico = await upload(buffer, nome);
            if (publico) {
                cache.set(chave, { source: original, url: publico, time: Date.now() });
                return publico;
            }
        }
    } catch {}

    cache.set(chave, { source: original, url: original, time: Date.now() });
    return original;
}

// ANTIROUBO 🛡️ 
try {
const jsonGpAR = getGroupConfig(nkzinLm.id, [{}]) || [{}]

const ligado = !!jsonGpAR[0].antiroubo

if (!ligado) {
} else {
const action = nkzinLm.action

if (action !== 'promote' && action !== 'demote') {
} else {
const parseAR = (p = '') => {
try {
if (!p) return p
if (typeof p === 'object') return p
const s = String(p || '').trim()
if ((s.startsWith('{') && s.endsWith('}')) || (s.startsWith('[') && s.endsWith(']'))) return JSON.parse(s)
return p
} catch {
return p
}
}

const pegarRawAR = (p = '') => {
p = parseAR(p)
if (!p) return ''
if (typeof p === 'string') return p
if (typeof p === 'object') return p?.phoneNumber || p?.participantAlt || p?.jid || p?.id || p?.participant || p?.remoteJid || p?.lid || ''
return ''
}

const toNum = (v) => {
const raw = pegarRawAR(v)
return String(raw || '').replace(/@.+$/, '').replace(/\D/g, '')
}

const normalizarTelefoneAR = (v) => {
const raw = pegarRawAR(v);
const texto = String(raw || '').trim();

if (!texto || texto.includes('@lid')) return '';

let numero = texto.replace(/@.+$/, '').replace(/\D/g, '');

if (numero.startsWith('55') && numero.length === 12) {
numero = numero.slice(0, 4) + '9' + numero.slice(4);
}

return numero;
}

const formatarJidAR = (jid = '') => {
jid = pegarRawAR(jid)
jid = String(jid || '').trim()
if (!jid) return null
if (jid.includes('@s.whatsapp.net')) return jid
if (jid.includes('@lid')) return null
const num = jid.replace(/@.+$/, '').replace(/\D/g, '')
if (num.length >= 10 && num.length <= 15) return `${num}@s.whatsapp.net`
return null
}

const ownerNumberLocal = normalizarTelefoneAR(setting?.ownerNumber)
const donoJid = ownerNumberLocal + '@s.whatsapp.net'

const botNum = (yuta.user?.id?.split(':')[0] || yuta.user?.id || '').replace(/@s\.whatsapp\.net.*/,'')
const botJid = botNum + '@s.whatsapp.net'

const botLid = (yuta?.user?.lid ? (yuta.user.lid.split(':')[0] + '@lid') : null)
const botLidNum = toNum(botLid)

const safeGroupUpdate = async (jid, parts, act) => {
try {
return await yuta.groupParticipantsUpdate(jid, parts, act)
} catch {
return null
}
}

// Autor oficial informado pelo evento Baileys.
let authorRaw = nkzinLm.author || null
const authorPhoneRaw = nkzinLm.authorPn || null

let targetsRaw = Array.isArray(nkzinLm.participants) ? nkzinLm.participants : []

let metaFresh
try { metaFresh = await yuta.groupMetadata(nkzinLm.id) } catch { metaFresh = null }

const participantsFresh = metaFresh?.participants || []


const lidMap = new Map()

for (const p of participantsFresh) {
const pid = p?.phoneNumber || p?.participantAlt || p?.jid || p?.id || p?.participant || null
const realPid = formatarJidAR(pid)

if (p?.lid && realPid) lidMap.set(p.lid, realPid)
if (p?.id && String(p.id).includes('@lid') && realPid) lidMap.set(p.id, realPid)
}

const resolveJid = (jid) => {
if (!jid) return null

const parsed = parseAR(jid)

if (typeof parsed === 'object' && parsed) {
const diretoObj = formatarJidAR(parsed)
if (diretoObj) return diretoObj

const lidObj = parsed?.id || parsed?.lid || ''
if (String(lidObj).includes('@lid')) {
const mapped = lidMap.get(String(lidObj))
if (mapped) return mapped
}
}

jid = pegarRawAR(parsed)
jid = String(jid || '').trim()
if (!jid) return null

const direto = formatarJidAR(jid)
if (direto) return direto

if (jid.includes('@lid')) {
const mapped = lidMap.get(jid)
if (mapped) return mapped

const base = jid.split('@')[0]

const achou = participantsFresh.find(p => {
const ids = [
p?.phoneNumber,
p?.participantAlt,
p?.jid,
p?.id,
p?.participant,
p?.remoteJid,
p?.lid
].filter(Boolean).map(x => String(x).trim())

return ids.some(x => x === jid || x.split('@')[0] === base)
})

if (achou) {
const candidatos = [
achou?.phoneNumber,
achou?.participantAlt,
achou?.jid,
achou?.participant,
achou?.id,
achou?.remoteJid
].filter(Boolean)

for (const c of candidatos) {
const real = formatarJidAR(c)
if (real) return real
}
}

return jid
}

if (jid.includes(':')) jid = jid.split(':')[0]

if (!jid.includes('@')) {
const num = jid.replace(/\D/g, '')
return num ? `${num}@s.whatsapp.net` : null
}

return jid
}

const isSuperAdminJid = (jid) => {
try {
jid = resolveJid(jid)
const p = participantsFresh.find(x => resolveJid(x?.phoneNumber || x?.participantAlt || x?.jid || x?.id || x?.participant || '') === jid)
return p?.admin === 'superadmin'
} catch {
return false
}
}

const donoLid = (() => {
for (const [lid, jid] of lidMap.entries()) {
if (jid === donoJid) return lid
}
return null
})()

const authorCandidate = resolveJid(authorPhoneRaw || authorRaw)
const author = authorCandidate && participantsFresh.some(p => {
const ids = [
p?.phoneNumber, p?.participantAlt, p?.jid,
p?.id, p?.participant, p?.remoteJid, p?.lid
].filter(Boolean)

return ids.some(id =>
resolveJid(id) === authorCandidate ||
String(id) === String(authorRaw || '')
)
}) ? authorCandidate : null

const targets = targetsRaw.map(resolveJid).filter(Boolean)

const authorNum = toNum(author)
const authorRawNum = toNum(authorRaw)
const authorPhoneNum = toNum(authorPhoneRaw)
const donoNumeroAR = normalizarTelefoneAR(setting?.ownerNumber)

const autorParticipanteEhDono = participantsFresh.some(p => {
const ids = [
p?.phoneNumber, p?.participantAlt, p?.jid,
p?.id, p?.participant, p?.remoteJid, p?.lid
].filter(Boolean)

const correspondeAoAutor = ids.some(id =>
resolveJid(id) === author ||
String(id) === String(pegarRawAR(authorRaw) || '') ||
String(id) === String(pegarRawAR(authorPhoneRaw) || '')
)

if (!correspondeAoAutor) return false

return [
p?.phoneNumber, p?.participantAlt, p?.jid,
p?.id, p?.participant, p?.remoteJid
].some(id => normalizarTelefoneAR(id) === donoNumeroAR)
})

let permitidos = jsonGpAR[0].ar_permitidos
if (!Array.isArray(permitidos)) permitidos = []
const permitidosNums = permitidos.map(toNum).filter(Boolean)

let permitidosLidCfg = jsonGpAR[0].ar_permitidos_lid
if (!Array.isArray(permitidosLidCfg)) permitidosLidCfg = []
const permitidosLidNums = permitidosLidCfg.map(toNum).filter(Boolean)

const donoGlobalAR = jsonGpAR[0].ar_dono_global || {};
const donoGlobalPhoneNum = toNum(donoGlobalAR.phone);
const donoGlobalLidNum = toNum(donoGlobalAR.lid);

const autorEhDonoGlobalCadastrado = !!(
(donoGlobalPhoneNum &&
[authorNum, authorRawNum, authorPhoneNum].includes(donoGlobalPhoneNum)) ||
(donoGlobalLidNum &&
[authorNum, authorRawNum, authorPhoneNum].includes(donoGlobalLidNum))
);

const botParticipantFresh = participantsFresh.find(p => {
const ids = [
p?.phoneNumber, p?.participantAlt, p?.jid,
p?.id, p?.participant, p?.remoteJid, p?.lid
].filter(Boolean)

return ids.some(id =>
resolveJid(id) === botJid ||
(botLid && String(id) === String(botLid))
)
})

const isBotAdmin =
botParticipantFresh?.admin === 'admin' ||
botParticipantFresh?.admin === 'superadmin'

if (!author || targets.length === 0) {
} else if (!isBotAdmin) {
} else {
const authorEhDonoPorLid =
!!(authorRaw && String(pegarRawAR(authorRaw)).includes('@lid') && lidMap.get(String(pegarRawAR(authorRaw))) === donoJid)

const authorIsBot =
(author === botJid) ||
(botLid && String(pegarRawAR(authorRaw)) === String(botLid)) ||
(botLidNum && authorRawNum && authorRawNum === botLidNum) ||
(authorRaw && String(pegarRawAR(authorRaw)).includes('@lid') && lidMap.get(String(pegarRawAR(authorRaw))) === botJid)

const authorEhDonoGlobal =
author === donoJid ||
!!(
donoNumeroAR &&
[author, authorPhoneRaw].some(id =>
normalizarTelefoneAR(id) === donoNumeroAR
)
) ||
autorParticipanteEhDono

const authorLiberado =
authorEhDonoGlobal ||
autorEhDonoGlobalCadastrado ||
authorIsBot ||
authorEhDonoPorLid ||
(authorNum && permitidosNums.includes(authorNum)) ||
(authorRawNum && permitidosNums.includes(authorRawNum)) ||
(authorRawNum && permitidosLidNums.includes(authorRawNum))

if (authorLiberado) {
return
}

const targetsSemBot = targets.filter(t => t !== botJid)

if (targetsSemBot.length === 0) {
return
}

global.__AR_RECENT = global.__AR_RECENT || {}
global.__AR_RECENT[nkzinLm.id] = global.__AR_RECENT[nkzinLm.id] || new Map()

const recentMap = global.__AR_RECENT[nkzinLm.id]
const now = Date.now()
const TTL = 9000

for (const [k, ts] of recentMap.entries()) {
if (now - ts > TTL) recentMap.delete(k)
}

if (action === 'demote') {
const bateu = targetsSemBot.some(t => recentMap.has(t))
if (bateu) return
}

const delayMs = (ms) => new Promise(r => setTimeout(r, ms))

if (action === 'promote') {
recentMap.set(author, Date.now())
for (const t of targetsSemBot) recentMap.set(t, Date.now())

await safeGroupUpdate(nkzinLm.id, [author], 'demote')

await delayMs(600)

for (const t of targetsSemBot) {
await safeGroupUpdate(nkzinLm.id, [t], 'demote')
await delayMs(400)
}

const alvosAntiroubo = targetsSemBot.map(a => '@' + (toNum(a) || '???')).join(' ')
const autorAntiroubo = authorNum || authorRawNum || '???'

await yuta.sendMessage(nkzinLm.id, {
text: mess.niAntirouboPromocaoDetectada({ e0: () => NomeDoBot, e1: () => alvosAntiroubo, e2: () => autorAntiroubo }),
mentions: [author, ...targetsSemBot].filter(j => String(j || '').includes('@s.whatsapp.net'))
}).catch(()=>{})
}

if (action === 'demote') {
recentMap.set(author, Date.now())

await safeGroupUpdate(nkzinLm.id, [author], 'demote')

const alvosAntiroubo = targetsSemBot.map(a => '@' + (toNum(a) || '???')).join(' ')
const autorAntiroubo = authorNum || authorRawNum || '???'

await yuta.sendMessage(nkzinLm.id, {
text: mess.niAntirouboRebaixamentoDetectado({ e0: () => NomeDoBot, e1: () => alvosAntiroubo, e2: () => autorAntiroubo }),
mentions: [author, ...targetsSemBot].filter(j => String(j || '').includes('@s.whatsapp.net'))
}).catch(()=>{})
}
}
}
}
}
catch {
}


try {
  const PARCERIA_PATH = "./src/dados/func/parceria.json";

  const load = () => {
    try {
      const raw = fs.readFileSync(PARCERIA_PATH, "utf-8");
      const db = JSON.parse(raw);
      return Array.isArray(db) ? db : [];
    } catch { return []; }
  };

  const save = (db) => {
    try { fs.writeFileSync(PARCERIA_PATH, JSON.stringify(db, null, 2) + "\n"); } catch {}
  };

  const norm = (id) => {
    if (!id) return null;
    return normalizar(pegarJid(id));
  };

  const gid = nkzinLm?.id;
  const action = nkzinLm?.action;
  const parts = Array.isArray(nkzinLm?.participants) ? nkzinLm.participants : [];

  if (gid && parts.length && (action === "remove" || action === "leave" || action === "ban")) {
    const db = load();
    const idx = db.findIndex(x => x?.grupo === gid);
    if (idx >= 0) {
      const gp = db[idx];
      if (gp?.parceiros && typeof gp.parceiros === "object") {
        for (const p of parts) {
          const jid = norm(p);
          if (jid && gp.parceiros[jid]) delete gp.parceiros[jid];
        }
      }
      if (gp?.nparc && typeof gp.nparc === "object") {
        for (const p of parts) {
          const jid = norm(p);
          if (jid && gp.nparc[jid]) delete gp.nparc[jid];
        }
      }
      save(db);
    }
  }
} catch {}

const nkzinLmBL = { ...nkzinLm, participants: [participante] }

if (nkzinLm.action === 'add' && nescessario.listanegraG.includes(participante)) {
    await yuta.sendMessage(grpmdt.id, { text: mess.blackList(grpmdt, nkzinLmBL), mentions: [participante] });
    return yuta.groupParticipantsUpdate(grpmdt.id, [participante], 'remove');
}
if (nkzinLm.action === 'add' && jsonGp[0].listanegra.includes(participante)) {
    await yuta.sendMessage(grpmdt.id, { text: mess.blackList(grpmdt, nkzinLmBL), mentions: [participante] });
    return yuta.groupParticipantsUpdate(grpmdt.id, [participante], 'remove');
}
            if (jsonGp[0].antifake && nkzinLm.action === 'add' && !numero.startsWith('55')) {
                if (jsonGp[0].legenda_estrangeiro != "0") {
                    await yuta.sendMessage(grpmdt.id, { text: jsonGp[0].legenda_estrangeiro });
                }
                return setTimeout(() => yuta.groupParticipantsUpdate(grpmdt.id, [participante], 'remove'), 1000);
            }
            if (jsonGp[0].ANTI_DDD.active && nkzinLm.action === 'add' && jsonGp[0].ANTI_DDD.listaProibidos.includes(extractDDD(numero))) {
                await yuta.sendMessage(grpmdt.id, { text: mess.forbiddenStateFromDDD(participante, extractStateFromDDD, extractDDD), mentions: [participante] });
                return setTimeout(() => yuta.groupParticipantsUpdate(grpmdt.id, [participante], 'remove'), 1000);
            }

            const tipoMidia = url => {
                if (!url) return null;
                const ext = url.slice(url.lastIndexOf('.') + 1).toLowerCase();
                return ext.match(/jpe?g|png|gif|webp/) ? 'image' :
                       ext.match(/mp4|mov|mkv|avi|webm/) ? 'video' : null;
            };

            const fotoPerfil = async (jidUser, fallbackCustom = null) => {
                const fallback = fallbackCustom || 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg';
                global.__YUTA_WELCOME_PP_CACHE = global.__YUTA_WELCOME_PP_CACHE || new Map();

                const cache = global.__YUTA_WELCOME_PP_CACHE;
                const jidNormal = normalizar(pegarJid(jidUser)) || participante;
                const chave = jidNormal || participante;
                const salvo = cache.get(chave);
                const agora = Date.now();

                if (salvo?.url && agora - salvo.time < 15 * 60 * 1000) return salvo.url;

                const buscar = async (jid) => {
                    if (!jid || !String(jid).includes('@s.whatsapp.net')) return null;
                    return await Promise.race([
                        yuta.profilePictureUrl(jid, 'image').catch(() => null),
                        new Promise(resolve => setTimeout(() => resolve(null), 1500))
                    ]);
                };

                const url = await buscar(jidNormal) || await buscar(participante) || fallback;
                cache.set(chave, { url, time: agora });
                return url;
            };
            
            const mdata_2 = grpmdt || await yuta.groupMetadata(nkzinLm.id);
            if (jsonGp[0].antifake && !numero.startsWith('55')) return;
        const gp = jsonGp[0];
        
try {
    const jsonGp2 = getWelcomeConfig(nkzinLm.id, null);
    if (!jsonGp2) return;
    const wl = jsonGp2?.welcome;
    
    if (!wl || !wl.status) return;

    const modoAtivo = wl.modo; 
    const configAtual = wl[modoAtivo];

    if (!configAtual || !configAtual.ativo) return;

    const acao = nkzinLm.action;
    const isAdd = acao === 'add';
    const isRemove = ['remove', 'leave', 'ban'].includes(acao);

    if (!isAdd && !isRemove) return;

    const legendaDesativada = (valor) => {
        if (valor === null || valor === undefined) return true;
        if (valor === false) return true;
        const txt = String(valor).trim();
        if (!txt) return true;
        return ['0', 'null', 'nulo', 'undefined', 'false', 'off', 'desativado'].includes(txt.toLowerCase());
    };

    const txtConfigurado = isAdd ? configAtual.legendabv : configAtual.legendasaiu;

    if (legendaDesativada(txtConfigurado)) return;

    const subject = mdata_2.subject || '';
    const prefixo = gp.multiprefix ? gp.prefixos?.[0] : setting.prefix;
    const desc = mdata_2.desc || '';
    const imgPerfilPadrao =
        configAtual?.imgperfil ||
        configAtual?.imgPerfil ||
        configAtual?.img_perfil ||
        configAtual?.urlperfil ||
        configAtual?.urlPerfil ||
        wl?.imgperfil ||
        wl?.imgPerfil ||
        wl?.img_perfil ||
        gp?.imgperfil ||
        gp?.imgPerfil ||
        'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg';
    let ppimgCache = null;
    const getPpimg = async () => {
        if (!ppimgCache) ppimgCache = await fotoPerfil(participante, imgPerfilPadrao);
        return ppimgCache;
    };
       
    const legendaBase = (txt) => {
        if (!txt) return '';
        return txt
            .replace(/#hora#/g, time)
            .replace(/#nomedogp#/g, subject)
            .replace(/#numerodele#/g, '@' + numero)
            .replace(/#numerobot#/g, NumeroDoBot)
            .replace(/#prefixo#/g, prefixo)
            .replace(/#descrição#/g, desc)
            .replace(/#estado#/g, extractStateFromNumber(numero));
    };

    const usarLegenda = true;
    const legenda = legendaBase(String(txtConfigurado));

let ConteudoMsg = { 
    contextInfo: { 
        ...NkChannelKk,
        mentionedJid: [participante]
    }
};

const gerarCanvasWelcome = async (fundo, logo) => {
    const fn = isAdd ? api.canvas.welcome : api.canvas.saiu;
    const media = await fn({ fundo, text: isAdd ? 'Bem-vindo ao grupo' : 'Volte sempre', logo });
    return Buffer.isBuffer(media) ? media : null;
};

switch (modoAtivo) {

    case 'texto':
        if (!usarLegenda) return;
        ConteudoMsg.text = legenda;
    break;

    case 'foto': {
        const ppimgFoto = await getPpimg();
        const logoFoto = await prepararLogoParaCanvas(ppimgFoto || imgPerfilPadrao, participante) || ppimgFoto || imgPerfilPadrao;
        const campoUrl = isAdd ? 'urlbv' : 'urlsaiu';
        const campoModo = isAdd ? 'modoFundoBV' : 'modoFundoSaiu';
        const urlSalva = String(configAtual?.[campoUrl] || '').trim();
        const modoFundo = String(configAtual?.[campoModo] || (urlSalva ? 'api-personalizado' : 'api')).toLowerCase();
        const direto = ['imagem', 'personalizado', 'personalizada', 'custom'].includes(modoFundo);
        const fundoApi = modoFundo === 'api-personalizado' && urlSalva
            ? urlSalva
            : (logoslink?.fundoshipp || logoslink?.fundolevel || 'https://yuta-apis.xyz/upload/site/01e09a1932bc5cc2.png');

        let canvas = null;
        if (!direto) {
            try { canvas = await gerarCanvasWelcome(fundoApi, logoFoto); } catch (e) { console.log('Falha canvas welcome:', e?.message || e); }
        }

        const principal = direto && urlSalva ? urlSalva : canvas;
        if (principal) ConteudoMsg.image = Buffer.isBuffer(principal) ? principal : { url: principal };
        if (usarLegenda) ConteudoMsg.caption = legenda;
        ConteudoMsg.__fallbackFotos = [principal, urlSalva, ppimgFoto, imgPerfilPadrao]
            .filter(Boolean)
            .filter((item, index, arr) => arr.indexOf(item) === index);
    break;
    }

    case 'video': {
        const campoUrl = isAdd ? 'urlbv' : 'urlsaiu';
        const campoModo = isAdd ? 'modoFundoBV' : 'modoFundoSaiu';
        const urlSalva = String(configAtual?.[campoUrl] || '').trim();
        const modoFundo = String(configAtual?.[campoModo] || 'video').toLowerCase();
        let video = null;

        if (modoFundo.startsWith('api')) {
            const ppimgVideo = await getPpimg();
            const logo = await prepararLogoParaCanvas(ppimgVideo || imgPerfilPadrao, participante) || ppimgVideo || imgPerfilPadrao;
            const fundo = urlSalva || logoslink?.fundoshipp || logoslink?.fundolevel;
            if (fundo) {
                try { video = await gerarCanvasWelcome(fundo, logo); } catch (e) { console.log('Falha canvas welcome vídeo:', e?.message || e); }
            }
        }

        ConteudoMsg.video = video || (urlSalva ? { url: urlSalva } : null);
        if (usarLegenda) ConteudoMsg.caption = legenda;
        ConteudoMsg.gifPlayback = true;
    break;
    }

    case 'audio':
        const FundoAudio = isAdd ? configAtual.urlbv : configAtual.urlsaiu;

        ConteudoMsg.audio = { url: FundoAudio };
        ConteudoMsg.mimetype = 'audio/mp4';
        ConteudoMsg.ptt = false;

        ConteudoMsg.contextInfo.externalAdReply = {
            title: isAdd ? '🎉 BEM-VINDO(A)' : '👋 SAIU DO GRUPO',
            body: `Yuta API's — Welcome`,
            mediaType: 2,
            thumbnailUrl: await getPpimg()
        };
    break;

    case 'sticker':
        const urlFinal = isAdd ? configAtual.urlbv : configAtual.urlsaiu;

        ConteudoMsg.sticker = { url: urlFinal };

        ConteudoMsg.contextInfo.externalAdReply = {
            title: isAdd ? '🎉 BEM-VINDO(A)' : '👋 SAIU DO GRUPO',
            body: `Yuta API's — Welcome`,
            mediaType: 2,
            thumbnailUrl: await getPpimg()
        };
    break;
}

if (modoAtivo === 'foto' && Array.isArray(ConteudoMsg.__fallbackFotos) && ConteudoMsg.__fallbackFotos.length) {
    const fallbackFotos = ConteudoMsg.__fallbackFotos;
    delete ConteudoMsg.__fallbackFotos;

    let enviado = false;
    for (const urlFoto of fallbackFotos) {
        try {
            const msgFoto = {
                ...ConteudoMsg,
                image: Buffer.isBuffer(urlFoto) ? urlFoto : { url: urlFoto }
            };
            if (usarLegenda) msgFoto.caption = legenda;

            await yuta.sendMessage(mdata_2.id, msgFoto);
            enviado = true;
            break;
        } catch (e) {
            console.log('Falha ao enviar foto do welcome, tentando fallback.');
        }
    }

    if (!enviado) console.log(`Erro ao enviar welcome ${modoAtivo}: nenhum fallback de imagem funcionou.`);
} else if (ConteudoMsg.text || ConteudoMsg.image || ConteudoMsg.video || ConteudoMsg.audio || ConteudoMsg.sticker) {
    await yuta.sendMessage(mdata_2.id, ConteudoMsg)
    .catch(e => console.log(`Erro ao enviar welcome ${modoAtivo}:`, e));
}

} catch (e) {
    console.log("Erro no Welcome Multifunções: ", e);
}

    } catch (e) {
        console.log(e);
    }
})
}

startConnect().catch(error => console.log(colors.red("Ocorreu um erro ao inicializar o bot: " + error)));
