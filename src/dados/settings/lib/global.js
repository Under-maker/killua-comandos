import fs from 'fs';

// Mensagens editáveis: global.txt é do usuário e deve ser preservado nas atualizações.
// global-padrao.txt recebe os textos oficiais/novos do Yuta.
const __GLOBAL_USER_FILE = new URL('../textos/global.txt', import.meta.url);
const __GLOBAL_DEFAULT_FILE = new URL('../textos/global-padrao.txt', import.meta.url);
const __globalCache = new Map();
const __parseGlobalSections = (raw = '') => {
    const map = new Map();
    const rx = /^[ \t]*\[([A-Za-z0-9_]+)\][ \t]*\r?\n([\s\S]*?)^[ \t]*\[\/\1\][ \t]*(?:\r?\n|$)/gm;
    let m; while ((m = rx.exec(String(raw)))) map.set(m[1], m[2].replace(/\r?\n$/, ''));
    return map;
};
const __readGlobalSections = (url) => {
    try {
        const stat = fs.statSync(url); const key = String(url); const old = __globalCache.get(key);
        if (old?.mtime === stat.mtimeMs) return old.sections;
        const sections = __parseGlobalSections(fs.readFileSync(url, 'utf8'));
        __globalCache.set(key, { mtime: stat.mtimeMs, sections }); return sections;
    } catch { return new Map(); }
};
const __ensureGlobalUser = () => { try { if (!fs.existsSync(__GLOBAL_USER_FILE) && fs.existsSync(__GLOBAL_DEFAULT_FILE)) fs.copyFileSync(__GLOBAL_DEFAULT_FILE, __GLOBAL_USER_FILE); } catch {} };
const __globalRender = (text, vars = {}) => String(text ?? '').replace(/\{([A-Za-z0-9_]+)\}/g, (all, key) => Object.prototype.hasOwnProperty.call(vars, key) ? String(vars[key]) : all);
const __globalMessage = (name, vars = {}) => {
    __ensureGlobalUser();
    const user = __readGlobalSections(__GLOBAL_USER_FILE); const defaults = __readGlobalSections(__GLOBAL_DEFAULT_FILE);
    const custom = user.get(name); const text = custom == null || custom === '' ? (defaults.get(name) ?? '') : custom;
    return __globalRender(text, vars);
};

export const ErrorBaileys_401 = () => {
    return __globalMessage("ErrorBaileys_401");
};
export const ErrorBaileys_408 = () => {
    return __globalMessage("ErrorBaileys_408");
};
export const ErrorBaileys_411 = () => {
    return __globalMessage("ErrorBaileys_411");
};
export const ErrorBaileys_428 = () => {
    return __globalMessage("ErrorBaileys_428");
};
export const ErrorBaileys_440 = () => {
    return __globalMessage("ErrorBaileys_440");
};
export const ErrorBaileys_500 = () => {
    return __globalMessage("ErrorBaileys_500");
};
export const ErrorBaileys_515 = () => {
    return __globalMessage("ErrorBaileys_515");
};
export const open = () => {
    return __globalMessage("open");
};
export const connecting = () => {
    return __globalMessage("connecting");
};

const __niCleanText = (value = "") => String(value ?? "")
    .replace(/\*+/g, "")
    .trim();

const __niFormatBlock = (value = "") => String(value ?? "")
    .split("\n")
    .map((line) => {
        const clean = __niCleanText(line.replace(/^>\s*/, ""));
        if (!clean) return "";
        if (/^(https?:\/\/|www\.)/i.test(clean)) return clean;
        if (/(https?:\/\/|www\.)/i.test(clean)) return clean;
        return `> *${clean}*`;
    })
    .join("\n");

export const blackList = (GroupMetadata_, sab2) => {
    const participant = sab2.participants[0].split("@")[0];
    const response = [
        __globalMessage("blackList__texto1", { "participant": (participant) }),
        __globalMessage("blackList__texto2", { "participant": (participant) }),
        __globalMessage("blackList__texto3", { "participant": (participant) }),
        __globalMessage("blackList__texto4", { "participant": (participant) })
    ];
    return response[Math.floor(Math.random() * response.length)];
};
export const rgtakeAlready = (author, pack, criadoEm, alteradoEm, prefix) => {
    return __globalMessage("rgtakeAlready", { "pack": (pack), "author": (author), "criadoEm": (criadoEm), "alteradoEm": (alteradoEm), "prefix": (prefix), "prefix2": (prefix) });
};
export const rgtakeSuccess = (author, pack, data, prefix) => {
    return __globalMessage("rgtakeSuccess", { "pack": (pack), "author": (author), "data": (data), "prefix": (prefix) });
};
export const takeKeyError = () => {
    return __globalMessage("takeKeyError");
};
export const takeSaveError = () => {
    return __globalMessage("takeSaveError");
};
export const perfilLevel = (NomeDoBot, sender, dadosUser) => {
    return __globalMessage("perfilLevel", { "NomeDoBot": (NomeDoBot), "senderNumero": (sender.split("@")[0]), "patente": (dadosUser.patente), "level": (dadosUser.level), "xp": (dadosUser.xp), "rank": (dadosUser.rank), "barra": (dadosUser.barra), "valor": (dadosUser.falta <= 0 ? 'ᴘᴀᴛᴇɴᴛᴇ ᴍᴀxɪᴍᴀ' : `${dadosUser.falta} XP`) });
};
export const levelUp = (NomeDoBot, sender, levelAntigo, levelNovo, patente, xp) => {
    return __globalMessage("levelUp", { "NomeDoBot": (NomeDoBot), "senderNumero": (sender.split('@')[0]), "levelAntigo": (levelAntigo), "levelNovo": (levelNovo), "patente": (patente), "xp": (xp) });
};
export const modoIAexemplo = () => {
    return __globalMessage("modoIAexemplo");
};
export const iaNormalAtivado = (getIAConfig) => {
    return __globalMessage("iaNormalAtivado", { "valor": (getIAConfig().nome || "yuta"), "valor2": (getIAConfig().nome || "yuta"), "valor3": (getIAConfig().nome || "yuta") });
};
export const iaAvancadoAtivado = (getIAConfig) => {
    return __globalMessage("iaAvancadoAtivado", { "valor": (getIAConfig().nome || "yuta"), "valor2": (getIAConfig().nome || "yuta"), "valor3": (getIAConfig().nome || "yuta"), "valor4": (getIAConfig().nome || "yuta") });
};
export const modtakeUpdated = (author, pack, criadoEm, alteradoEm) => {
    return __globalMessage("modtakeUpdated", { "pack": (pack), "author": (author), "criadoEm": (criadoEm), "alteradoEm": (alteradoEm) });
};
export const marca = (prefix) => {
    return __globalMessage("marca", { "prefix": (prefix) });
};
export const mytakeText = (sender, author, pack, criadoEm, alteradoEm) => {
    return __globalMessage("mytakeText", { "senderNumero": (sender.split("@")[0]), "pack": (pack), "author": (author), "criadoEm": (criadoEm), "alteradoEm": (alteradoEm) });
};
export const letraEncontrada = (titulo, artista, song) => {
    return __globalMessage("letraEncontrada", { "valor": (titulo || "N/A"), "valor2": (artista || "N/A"), "valor3": (song?.link || "sᴇᴍ ғᴏɴᴛᴇ"), "valor4": (song?.letra || "Letra nao encontrada.") });
};
export const ipInfoFound = (r, ip) => {
    return __globalMessage("ipInfoFound", { "valor": (r?.query || ip || "N/A"), "valor2": (r?.country || "N/A"), "valor3": (r?.regionName || "N/A"), "valor4": (r?.city || "N/A"), "valor5": (r?.isp || "N/A"), "valor6": (r?.org || "N/A"), "valor7": (r?.as || "N/A"), "valor8": (r?.lat || "N/A"), "valor9": (r?.lon || "N/A"), "valor10": (r?.timezone || "N/A") });
};
export const signoInfo = (data) => {
    return __globalMessage("signoInfo", { "valor": ((data?.result?.signo || "N/A").toUpperCase()), "valor2": (data?.result?.descricao || "Descricao nao encontrada.") });
};
export const climaAtual = (r) => {
    return __globalMessage("climaAtual", { "valor": (r?.cidade || "N/A"), "valor2": (r?.temperatura || "N/A"), "valor3": (r?.sensacao || "N/A"), "valor4": (r?.umidade || "N/A"), "valor5": (r?.vento || "N/A"), "valor6": (r?.clima || "N/A"), "valor7": (r?.observado || "N/A") });
};
export const mediaDL = (data) => {
    return __globalMessage("mediaDL", { "valor": (data?.filename || "N/A"), "valor2": (data?.filesize || "N/A"), "valor3": (data?.upload_date || "N/A"), "valor4": (data?.owner || "N/A"), "valor5": (data?.type || "N/A") });
};
export const wikipediaInfo = (r) => {
    return __globalMessage("wikipediaInfo", { "valor": (r?.titulo || "N/A"), "valor2": (r?.link || "N/A"), "valor3": (r?.data_atualizacao || "N/A"), "valor4": (r?.resumo || r?.descricao || "Descricao nao encontrada.") });
};
export const limparqr = (filtrados, deletados, erros, tempo) => {
    return __globalMessage("limparqr", { "length": (filtrados.length), "deletados": (deletados), "erros": (erros), "tempo": (tempo) });
};
export const wait = () => {
    return __globalMessage("wait");
};
export const onlyAdmins = () => {
    return __globalMessage("onlyAdmins");
};
export const onlyOwner = () => {
    return __globalMessage("onlyOwner");
};
export const antiFloodAtivado = () => {
    return __globalMessage("antiFloodAtivado");
};
export const antiFloodDesativado = () => {
    return __globalMessage("antiFloodDesativado");
};
export const antiFloodAdvertencia = (sender, atual, total) => {
    return __globalMessage("antiFloodAdvertencia", { "valor": (String(sender || '').split('@')[0]), "atual": (atual), "total": (total) });
};
export const antiFloodRemovido = (sender) => {
    return __globalMessage("antiFloodRemovido", { "valor": (String(sender || '').split('@')[0]) });
};
export const antiFloodSemAdmin = (sender) => {
    return __globalMessage("antiFloodSemAdmin", { "valor": (String(sender || '').split('@')[0]) });
};
export const antiFloodErroRemover = (sender) => {
    return __globalMessage("antiFloodErroRemover", { "valor": (String(sender || '').split('@')[0]) });
};
export const onlyGroup = () => {
    return __globalMessage("onlyGroup");
};
export const onlyVipUser = () => {
    return __globalMessage("onlyVipUser");
};
export const onlyBotAdmin = () => {
    return __globalMessage("onlyBotAdmin");
};
export const onlyGroupFun = (prefixo) => {
    return __globalMessage("onlyGroupFun", { "prefixo": (prefixo) });
};
export const bannedUser = () => {
    const response = [
        __globalMessage("bannedUser__texto1"),
        __globalMessage("bannedUser__texto2"),
        __globalMessage("bannedUser__texto3"),
        __globalMessage("bannedUser__texto4")
    ];
    return response[Math.floor(Math.random() * response.length)];
};
export const teste = () => {
    const response = [
    __globalMessage("teste__texto1"),

    __globalMessage("teste__texto2"),

    __globalMessage("teste__texto3"),

    __globalMessage("teste__texto4"),

    __globalMessage("teste__texto5"),

    __globalMessage("teste__texto6"),

    __globalMessage("teste__texto7"),

    __globalMessage("teste__texto8"),

    __globalMessage("teste__texto9"),

    __globalMessage("teste__texto10"),

    __globalMessage("teste__texto11"),

    __globalMessage("teste__texto12"),

    __globalMessage("teste__texto13"),

    __globalMessage("teste__texto14"),

    __globalMessage("teste__texto15"),

    __globalMessage("teste__texto16"),

    __globalMessage("teste__texto17"),

    __globalMessage("teste__texto18"),

    __globalMessage("teste__texto19"),

    __globalMessage("teste__texto20"),

    __globalMessage("teste__texto21"),

    __globalMessage("teste__texto22"),

    __globalMessage("teste__texto23"),

    __globalMessage("teste__texto24"),

    __globalMessage("teste__texto25"),

    __globalMessage("teste__texto26"),

    __globalMessage("teste__texto27"),

    __globalMessage("teste__texto28")
]
    return response[Math.floor(Math.random() * response.length)];
};
export const forbiddenStateFromDDD = (mentionUser, whichState, extractDDD) => {
    return __globalMessage("forbiddenStateFromDDD", { "valor": (mentionUser.split('@')[0]), "whichState": (whichState), "extractDDD": (extractDDD) });
};
export const acert = (pushname, dataA, resposta) => {
    return __globalMessage("acert", { "pushname": (pushname), "resposta": (resposta), "valor": (dataA || 'sᴇᴍ ᴅᴀᴅᴏs') });
};
export const coins = (tempo, sender, prefix) => {
    return __globalMessage("coins", { "senderNumero": (sender.split('@')[0]), "tempo": (tempo), "prefix": (prefix) });
};
export const errorConvertSticker = () => {
    return __globalMessage("errorConvertSticker");
};
export const errorCommandLink = () => {
    return __globalMessage("errorCommandLink");
};
export const perfilyuta = (pushname, sender, status, isChVip, isCargo, dadosUser, pct, programa, conselho, NomeDoBot) => {
    return __globalMessage("perfilyuta", { "valor": (pushname || "nao definido"), "senderNumero": (sender.split("@")[0]), "status": (status), "valor2": (isChVip || "nao"), "valor3": (isCargo || "nenhum"), "messages": (dadosUser.messages), "cmd_messages": (dadosUser.cmd_messages), "figus": (dadosUser.figus), "imagens": (dadosUser.imagens), "videos": (dadosUser.videos), "audios": (dadosUser.audios), "documentos": (dadosUser.documentos), "valor4": (pct()), "valor5": (pct()), "valor6": (pct()), "valor7": (pct()), "valor8": (pct()), "programa": (programa), "conselho": (conselho), "NomeDoBot": (NomeDoBot) });
};
export const fig = (ownerName, NomeDoBot) => {
    return __globalMessage("fig", { "NomeDoBot": (NomeDoBot), "ownerName": (ownerName) });
};
export const fig2 = (pushname, groupName, isGroup) => {
    return __globalMessage("fig2", { "pushname": (pushname), "valor": (isGroup ? groupName : "privado") });
};
export const ErroAPI = (prefix, SITE) => {
    return __globalMessage("ErroAPI", { "SITE": (SITE), "prefix": (prefix) });
};
export const perfil2 = (mentionMessage, b) => {
    const mentionJid = typeof mentionMessage === 'string'
        ? mentionMessage
        : (mentionMessage?.id || mentionMessage?.jid || mentionMessage?.participant || '');

    let bio = 'sᴇᴍ ʙɪᴏ';
    if (typeof b === 'string' && b.trim()) bio = b.trim();
    else if (typeof b?.status === 'string' && b.status.trim()) bio = b.status.trim();
    else if (typeof b?.bio === 'string' && b.bio.trim()) bio = b.bio.trim();

    return __globalMessage("perfil2", {
        "valor": (String(mentionJid).split('@')[0] || 'desconhecido'),
        "valor2": (bio)
    });
};
export const idade = (q, anos, meses, dias, diasVividos, horasVividas, minutosVividos, diasParaAniversario, NomeDoBot) => {
    return __globalMessage("idade", { "q": (q), "anos": (anos), "meses": (meses), "dias": (dias), "diasVividos": (diasVividos), "horasVividas": (horasVividas), "minutosVividos": (minutosVividos), "diasParaAniversario": (diasParaAniversario), "NomeDoBot": (NomeDoBot) });
};
export const textCep = (ABC) => {
    return __globalMessage("textCep", { "valor": (ABC?.cep || 'N/A'), "valor2": (ABC?.logradouro || 'N/A'), "valor3": (ABC?.bairro || 'N/A'), "valor4": (ABC?.localidade || ABC?.cidade || 'N/A'), "valor5": (ABC?.uf || 'N/A') });
};
export const textInfoGrupo = (meta, groupAdmins, groupMembers, prefix, moment) => {
    return __globalMessage("textInfoGrupo", { "valor": (meta.subject || 'sᴇᴍ ɴᴏᴍᴇ'), "valor2": (meta.id || 'sᴇᴍ ɪᴅ'), "valor3": (meta.subjectOwner ? '@' + meta.subjectOwner.split('@')[0] : 'ɴᴀᴏ ɪᴅᴇɴᴛɪғɪᴄᴀᴅᴏ'), "length": (groupAdmins.length), "length2": (groupMembers.length), "valor4": (meta.creation ? moment(meta.creation * 1000).format('DD/MM/YYYY HH:mm:ss') : 'sᴇᴍ ᴅᴀᴛᴀ'), "prefix": (prefix) });
};
export const avalia = ({ randomMember, info, groupName, isChVip, randomEvaluation }) => {
    const memberJid = typeof randomMember === 'string'
        ? randomMember
        : (randomMember?.id || randomMember?.jid || randomMember?.participant || '');

    return __globalMessage("avalia", {
        "valor": (String(memberJid).split('@')[0] || 'desconhecido'),
        "valor2": (groupName || 'sᴇᴍ ɴᴏᴍᴇ'),
        "valor3": (isChVip || 'ɴᴀᴏ'),
        "randomEvaluation": (randomEvaluation)
    });
};
export const rgaluguel = (dataFormatada) => {
    return __globalMessage("rgaluguel", { "dataFormatada": (dataFormatada) });
};

export const rgAluguelUso = (prefix) => {
    return __globalMessage("rgAluguelUso", { "prefix": (prefix), "prefix2": (prefix), "prefix3": (prefix), "prefix4": (prefix), "prefix5": (prefix), "prefix6": (prefix), "prefix7": (prefix), "prefix8": (prefix), "prefix9": (prefix), "prefix10": (prefix), "prefix11": (prefix) });
};
export const rgAluguelNumeroGrupoInvalido = (prefix) => {
    return __globalMessage("rgAluguelNumeroGrupoInvalido", { "prefix": (prefix) });
};
export const rgAluguelIndiceInvalido = (total = 0) => {
    return __globalMessage("rgAluguelIndiceInvalido", { "valor": (total || 0) });
};
export const rgAluguelUseNoGrupoOuLista = (prefix) => {
    return __globalMessage("rgAluguelUseNoGrupoOuLista", { "prefix": (prefix) });
};
export const rgAluguelTempoInvalido = (prefix) => {
    return __globalMessage("rgAluguelTempoInvalido", { "prefix": (prefix), "prefix2": (prefix), "prefix3": (prefix), "prefix4": (prefix) });
};
export const rgAluguelRegistrado = ({ dataFormatada, numero, nome, tempo } = {}) => {
    return __globalMessage("rgAluguelRegistrado", { "valor": (rgaluguel(dataFormatada)), "valor2": (numero ? __globalMessage("rgAluguelRegistrado__texto1", { "numero": (numero) }) : ''), "valor3": (nome || 'sᴇᴍ ɴᴏᴍᴇ'), "valor4": (tempo || '0d 0h 0m') });
};
export const veraluguel = (dataFormada, dias, horas, min) => {
    return __globalMessage("veraluguel", { "dataFormada": (dataFormada), "dias": (dias), "horas": (horas), "min": (min) });
};
export const abertura = () => {
    return __globalMessage("abertura");
};
export const fechamento = () => {
    return __globalMessage("fechamento");
};
export const whatmusic = (whatMusic, pushname) => {
    return __globalMessage("whatmusic", { "pushname": (pushname), "valor": (whatMusic || 'ɴᴀᴏ ɪᴅᴇɴᴛɪғɪᴄᴀᴅᴀ') });
};
export const wmusic = (wmusic, II) => {
    return __globalMessage("wmusic", { "valor": (wmusic || 'N/A'), "valor2": (II || 'sᴇᴍ ᴅᴀᴅᴏs') });
};
export const respostaE = (pushname) => {
    return __globalMessage("respostaE", { "pushname": (pushname) });
};
export const messageAntiStatus = (blcp) => {
    return __globalMessage("messageAntiStatus", { "valor": (blcp.split('@')[0]) });
};

export const messageAntiLinkGp = (sender) => {
  return __globalMessage("messageAntiLinkGp", { "senderNumero": (sender.split('@')[0]) });
};

export const resolveE = (enigmaD, prefix) => {
    return __globalMessage("resolveE", { "valor": (enigmaD?.pergunta || enigmaD || 'sᴇᴍ ᴘᴇʀɢᴜɴᴛᴀ'), "prefix": (prefix) });
};
export const descobert = (pushname) => {
    return __globalMessage("descobert", { "pushname": (pushname) });
};
export const gartic = (dataGartic2, prefix) => {
    return __globalMessage("gartic", { "valor": (dataGartic2?.dica || dataGartic2?.tema || 'sᴇᴍ ᴅɪᴄᴀ'), "prefix": (prefix) });
};
export const quizC = (pushname, dQF) => {
    return __globalMessage("quizC", { "pushname": (pushname), "valor": (dQF?.resposta || dQF || 'sᴇᴍ ʀᴇsᴘᴏsᴛᴀ') });
};
export const quizfut = (dataQF) => {
    return __globalMessage("quizfut", { "valor": (dataQF?.pergunta || dataQF || 'sᴇᴍ ᴘᴇʀɢᴜɴᴛᴀ') });
};
export const quizaC = (pushname, dQ) => {
    return __globalMessage("quizaC", { "pushname": (pushname), "valor": (dQ?.resposta || dQ || 'sᴇᴍ ʀᴇsᴘᴏsᴛᴀ') });
};
export const anagrama = (shuffle, dataAB) => {
    return __globalMessage("anagrama", { "shuffle": (shuffle), "valor": (dataAB?.dica || 'sᴇᴍ ᴅɪᴄᴀ') });
};
export const botBotao = (versionBaileys, isCargo, botNome, isChVip, sender, fast, uptimeBot, prefix) => {
    return __globalMessage("botBotao", { "senderNumero": (sender.split("@")[0]), "isChVip": (isChVip), "valor": (isCargo ? "Mestre" : "Membro"), "botNome": (botNome), "prefix": (prefix), "valor2": (fast.toFixed(3)), "versionBaileys": (versionBaileys), "uptimeBot": (uptimeBot) });
};
export const Velocidade = (fast, groupList, uptimeBot, NomeDoBot, freeRam, totalRam, totalComandos) => {
    const toNumber = (value, fallback = 0) => {
        const n = Number(String(value ?? '').replace(',', '.').replace(/[^0-9.-]/g, ''));
        return Number.isFinite(n) ? n : fallback;
    };

    const temUnidade = (value) => typeof value === 'string' && /[a-zA-Zµ]/.test(value);
    const pad = (value) => String(value).padStart(2, '0');

    const formatUptime = (seconds) => {
        const total = Math.max(0, Math.floor(toNumber(seconds, 0)));
        const dias = Math.floor(total / 86400);
        const horas = Math.floor((total % 86400) / 3600);
        const minutos = Math.floor((total % 3600) / 60);
        const segundos = total % 60;

        if (dias > 0) return __globalMessage("Velocidade", { "valor": (pad(dias)), "valor2": (pad(horas)), "valor3": (pad(minutos)), "valor4": (pad(segundos)) });
        if (horas > 0) return __globalMessage("Velocidade__2", { "valor": (pad(horas)), "valor2": (pad(minutos)), "valor3": (pad(segundos)) });
        if (minutos > 0) return __globalMessage("Velocidade__3", { "valor": (pad(minutos)), "valor2": (pad(segundos)) });
        return __globalMessage("Velocidade__4", { "valor": (pad(segundos)) });
    };

    const formatTempo = (value) => {
        if (temUnidade(value)) return String(value).trim();
        const ms = Math.max(0, toNumber(value, 0));
        if (ms < 1) return __globalMessage("Velocidade__5", { "valor": (ms.toFixed(3)) });
        if (ms < 10) return __globalMessage("Velocidade__6", { "valor": (ms.toFixed(3)) });
        if (ms < 1000) return __globalMessage("Velocidade__7", { "valor": (ms.toFixed(2)) });
        return __globalMessage("Velocidade__8", { "valor": ((ms / 1000).toFixed(2)) });
    };

    const formatRam = (value) => {
        if (temUnidade(value)) return String(value).trim();
        const n = toNumber(value, 0);
        return __globalMessage("Velocidade__9", { "valor": (n.toFixed(2)) });
    };

    const uptime = (() => {
        if (typeof uptimeBot === 'function') {
            try {
                return uptimeBot(process.uptime());
            } catch {
                return formatUptime(process.uptime());
            }
        }

        if (typeof uptimeBot === 'number') return formatUptime(uptimeBot);
        if (typeof uptimeBot === 'string' && uptimeBot.trim()) return uptimeBot.trim();

        return formatUptime(process.uptime());
    })();

    const ping = formatTempo(fast);
    const grupos = Array.isArray(groupList) ? groupList.length : groupList?.size || toNumber(groupList, 0);
    const ramLivre = formatRam(freeRam);
    const ramTotal = formatRam(totalRam);

    return __globalMessage("Velocidade__10", { "botNome": (NomeDoBot || 'YutaBot-MD'), "ping": (ping), "grupos": (grupos), "uptime": (uptime), "ramLivre": (ramLivre), "ramTotal": (ramTotal), "valor": (totalComandos || 0) });
};
export const checkme = (u) => {
    return __globalMessage("checkme", { "valor": (u.id?.split('@')[0] || 'desconhecido'), "valor2": (u.messages || 0), "valor3": (u.aparelho || 'indefinido'), "valor4": (u.figus || 0), "valor5": (u.cmd_messages || 0), "valor6": (u.videos || 0), "valor7": (u.imagens || 0), "valor8": (u.audios || 0), "valor9": (u.documentos || 0) });
};
export const check = (u) => {
    return __globalMessage("check", { "valor": (u.id?.split('@')[0] || 'desconhecido'), "valor2": (u.messages || 0), "valor3": (u.aparelho || 'indefinido'), "valor4": (u.figus || 0), "valor5": (u.cmd_messages || 0), "valor6": (u.videos || 0), "valor7": (u.imagens || 0), "valor8": (u.audios || 0), "valor9": (u.documentos || 0) });
};
export const atividade = (u) => {
    return __globalMessage("atividade", { "valor": (u.id?.split('@')[0] || 'desconhecido'), "valor2": (u.messages || 0), "valor3": (u.aparelho || 'indefinido'), "valor4": (u.figus || 0), "valor5": (u.cmd_messages || 0), "valor6": (u.videos || 0), "valor7": (u.imagens || 0), "valor8": (u.audios || 0), "valor9": (u.documentos || 0) });
};
export const rankativo = (u, i) => {
    return __globalMessage("rankativo", { "valor": (i + 1), "valor2": (u.id?.split('@')[0] || 'desconhecido'), "valor3": (u.messages || 0), "valor4": (u.aparelho || 'indefinido'), "valor5": (u.figus || 0), "valor6": (u.cmd_messages || 0), "valor7": (u.videos || 0), "valor8": (u.imagens || 0), "valor9": (u.audios || 0), "valor10": (u.documentos || 0) });
};
export const rankinativo = (u, i) => {
    return __globalMessage("rankinativo", { "valor": (i + 1), "valor2": (u.id?.split('@')[0] || 'desconhecido'), "valor3": (u.messages || 0), "valor4": (u.aparelho || 'indefinido'), "valor5": (u.figus || 0), "valor6": (u.cmd_messages || 0), "valor7": (u.videos || 0), "valor8": (u.imagens || 0), "valor9": (u.audios || 0), "valor10": (u.documentos || 0) });
};
export const namoro = (namoro1, C12, sender, prefix) => {
    return __globalMessage("namoro", { "valor": (namoro1[C12].usu1.split('@')[0]), "senderNumero": (sender.split('@')[0]), "prefix": (prefix) });
};
export const fora = (namoro1, C12, sender, prefix) => {
    return __globalMessage("fora", { "valor": (namoro1[C12].usu1.split('@')[0]), "senderNumero": (sender.split('@')[0]) });
};
export const minhaDupla = (parceiro1, parceiro2, tempoJuntos, dupla) => {
    return __globalMessage("minhaDupla", { "valor": (parceiro1.split('@')[0]), "valor2": (parceiro2.split('@')[0]), "tempoJuntos": (tempoJuntos), "valor3": (dupla.hora || '??:??'), "valor4": (dupla.data || '??/??/????') });
};
export const pedidoNamoro = (menc_os2, sender, prefix) => {
    return __globalMessage("pedidoNamoro", { "valor": (menc_os2.split('@')[0]), "senderNumero": (sender.split('@')[0]), "senderNumero2": (sender.split('@')[0]), "prefix": (prefix) });
};
export const syntaxDownloadMusic = () => {
    return __globalMessage("syntaxDownloadMusic");
};
export const aluguel15day = () => {
    return __globalMessage("aluguel15day");
};
export const aluguel30day = () => {
    return __globalMessage("aluguel30day");
};
export const aluguel60day = () => {
    return __globalMessage("aluguel60day");
};
export const aluguel = (prefix, NomeDoBot) => {
    return __globalMessage("aluguel", { "prefix": (prefix), "NomeDoBot": (NomeDoBot) });
};
export const syntaxPlayMix = () => {
    return __globalMessage("syntaxPlayMix");
};
export const arquived = () => {
    return __globalMessage("arquived");
};
export const antisp = (lm) => {
    return __globalMessage("antisp", { "nome": (lm.nome), "numero": (lm.numero), "grupo": (lm.grupo), "groupId": (lm.groupId), "id": (lm.id), "device": (lm.device), "lugar": (lm.lugar), "bio": (lm.bio), "data": (lm.data), "time": (lm.time), "full_text": (lm.full_text) });
};
export const tiktokDownload = (data) => {
    return __globalMessage("tiktokDownload", { "username": (data.resultado.username), "valor": (data.resultado.description || 'sᴇᴍ ᴅᴇsᴄʀɪᴄᴀᴏ') });
};
export const horoscopo = (q, ABC) => {
    return __globalMessage("horoscopo", { "q": (q), "inform": (ABC.resultado.inform) });
};
export const respostaChatGPT = (dataResulted) => {
    return __globalMessage("respostaChatGPT", { "result": (dataResulted.result) });
};
export const respostaResumida = (dataResulted) => {
    return __globalMessage("respostaResumida", { "result": (dataResulted.result) });
};
export const respostaRedacao = (dataResulted) => {
    return __globalMessage("respostaRedacao", { "result": (dataResulted.result) });
};
export const wikiResposta = (wikis) => {
    return __globalMessage("wikiResposta", { "extract": (wikis.data.query.pages[Object.keys(wikis.data.query.pages)].extract) });
};
export const memesImages = (teks) => {
    return __globalMessage("memesImages", { "titulo": (teks.titulo) });
};
export const iFunnyVideo = (teks) => {
    return __globalMessage("iFunnyVideo", { "titulo": (teks.titulo) });
};
export const translator = (bla) => {
    return __globalMessage("translator", { "result": (bla.result) });
};
export const noresult = () => {
    return __globalMessage("noresult");
};
export const warningAdvertencia = (menc_os2, dfqn) => {
    return __globalMessage("warningAdvertencia", { "valor": (menc_os2.split("@")[0]), "dfqn": (dfqn) });
};
export const messageInvisibleProhibited = (blcp) => {
    return __globalMessage("messageInvisibleProhibited", { "valor": (blcp.split('@')[0]) });
};
export const finishAdvertencia = (menc_os2) => {
    return __globalMessage("finishAdvertencia", { "valor": (menc_os2.split("@")[0]) });
};
export const syntaxAnonymousMail = (prefix) => {
    return __globalMessage("syntaxAnonymousMail", { "prefix": (prefix) });
};
export const anonymousMail = (tx2) => {
    return __globalMessage("anonymousMail", { "tx2": (tx2) });
};
export const sucessAnonymousMail = () => {
    return __globalMessage("sucessAnonymousMail");
};
export const unbannedMessage = (blcp) => {
    return __globalMessage("unbannedMessage", { "valor": (blcp.split('@')[0]) });
};
export const bannedMessage = (blcp) => {
    return __globalMessage("bannedMessage", { "valor": (blcp.split('@')[0]) });
};
export const errorUploadImage = () => {
    return __globalMessage("errorUploadImage");
};
export const messageProhibitedBot = (blcp) => {
    return __globalMessage("messageProhibitedBot", { "valor": (blcp.split('@')[0]) });
};
export const noArgsSearch = () => {
    return __globalMessage("noArgsSearch");
};
export const ausente = (afkUser, tempo, m) => {
    return __globalMessage("ausente", { "valor": (m.split('@')[0]), "tempo": (tempo), "msg": (afkUser.msg) });
};
export const on = (sender, tempo) => {
    return __globalMessage("on", { "senderNumero": (sender.split('@')[0]), "tempo": (tempo) });
};
export const prefix = (prefix, NomeDoBot) => {
    return __globalMessage("prefix", { "prefix": (prefix), "NomeDoBot": (NomeDoBot) });
};
export const music = (sender, duration, views, author, url, description, tempo, title) => {
    return __globalMessage("music", { "senderNumero": (sender.split("@")[0]), "title": (title), "valor": (duration?.timestamp || "N/A"), "valor2": (views || "N/A"), "valor3": (author?.name || "Desconhecido"), "url": (url), "valor4": (description || "Sem descricao"), "tempo": (tempo) });
};
export const syntaxLogos = () => {
    return __globalMessage("syntaxLogos");
};
export const playmixError = (n) => {
    return __globalMessage("playmixError", { "n": (n) });
};
export const thinkingPrefix = (pushname, prefix) => {
    return __globalMessage("thinkingPrefix", { "pushname": (pushname), "prefix": (prefix) });
};
export const removeUserAntiPlvr = () => {
    return __globalMessage("removeUserAntiPlvr");
};
export const permissionDenied_rUser = () => {
    return __globalMessage("permissionDenied_rUser");
};
export const antisRandomMessage = () => {
    return __globalMessage("antisRandomMessage");
};
export const charactersAnti = () => {
    return __globalMessage("charactersAnti");
};
export const markingAllMember = () => {
    return __globalMessage("markingAllMember");
};
export const floodCommands = () => {
    return __globalMessage("floodCommands");
};
export const timeRequired = () => {
    return __globalMessage("timeRequired");
};
export const error = () => {
    return __globalMessage("error");
};
export const messageProhibitedDetAdmin = () => {
    return __globalMessage("messageProhibitedDetAdmin");
};
export const messageProhibitedDetUser = () => {
    return __globalMessage("messageProhibitedDetUser");
};
export const antiCalls = () => {
    return __globalMessage("antiCalls");
};
export const errorResponseSimi = () => {
    return __globalMessage("errorResponseSimi");
};
export const GshowGE = (dataResult) => {
    return __globalMessage("GshowGE", { "valor": (dataResult.resultado.map((info, index) => __globalMessage("GshowGE__texto1", { "valor": (index + 1), "valor2": (info.titulo || 'Manchete sem titulo.'), "valor3": (info.horarioPostagem || 'Ha X horas.'), "valor4": (info.trechoManchete || 'Manchete sem descricao.') })).join(__globalMessage("GshowGE__texto2"))) });
};
export const niReply0001 = (__ctx = {}) => {
    return __globalMessage("niReply0001");
};
export const niReply0002 = (__ctx = {}) => {
    return __globalMessage("niReply0002", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niReply0003 = (__ctx = {}) => {
    return __globalMessage("niReply0003");
};
export const niReply0004 = (__ctx = {}) => {
    return __globalMessage("niReply0004");
};
export const niReply0005 = (__ctx = {}) => {
    return __globalMessage("niReply0005");
};
export const niReply0006 = (__ctx = {}) => {
    return __globalMessage("niReply0006", { "valor": (__ctx.e0()) });
};
export const niReply0007 = (__ctx = {}) => {
    return __globalMessage("niReply0007");
};
export const niReply0008 = (__ctx = {}) => {
    return __globalMessage("niReply0008");
};
export const niReply0009 = (__ctx = {}) => {
    return __globalMessage("niReply0009");
};
export const niReply0010 = (__ctx = {}) => {
    return __globalMessage("niReply0010", { "valor": (__ctx.e0()) });
};
export const niReply0011 = (__ctx = {}) => {
    return __globalMessage("niReply0011");
};
export const niReply0012 = (__ctx = {}) => {
    return __globalMessage("niReply0012");
};
export const niReply0013 = (__ctx = {}) => {
    return __globalMessage("niReply0013");
};
export const niReply0014 = (__ctx = {}) => {
    return __globalMessage("niReply0014");
};
export const niReply0015 = (__ctx = {}) => {
    return __globalMessage("niReply0015", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niReply0016 = (__ctx = {}) => {
    return __globalMessage("niReply0016");
};
export const niReply0017 = (__ctx = {}) => {
    return __globalMessage("niReply0017");
};
export const niReply0018 = (__ctx = {}) => {
    return __globalMessage("niReply0018");
};
export const niReply0019 = (__ctx = {}) => {
    return __globalMessage("niReply0019");
};
export const niReply0020 = (__ctx = {}) => {
    return __globalMessage("niReply0020");
};
export const niReply0021 = (__ctx = {}) => {
    return __globalMessage("niReply0021");
};
export const niReply0022 = (__ctx = {}) => {
    return __globalMessage("niReply0022", { "valor": (__ctx.e0()) });
};
export const niReply0023 = (__ctx = {}) => {
    return __globalMessage("niReply0023");
};
export const niReply0024 = (__ctx = {}) => {
    return __globalMessage("niReply0024", { "valor": (__ctx.e0()) });
};
export const niReply0025 = (__ctx = {}) => {
    return __globalMessage("niReply0025", { "valor": (__ctx.e0()) });
};
export const niReply0026 = (__ctx = {}) => {
    return __globalMessage("niReply0026");
};
export const niReply0027 = (__ctx = {}) => {
    return __globalMessage("niReply0027");
};
export const niReply0028 = (__ctx = {}) => {
    return __globalMessage("niReply0028");
};
export const niReply0029 = (__ctx = {}) => {
    return __globalMessage("niReply0029");
};
export const niReply0030 = (__ctx = {}) => {
    return __globalMessage("niReply0030");
};
export const niReply0031 = (__ctx = {}) => {
    return __globalMessage("niReply0031");
};
export const niReply0032 = (__ctx = {}) => {
    return __globalMessage("niReply0032");
};
export const niReply0033 = (__ctx = {}) => {
    return __globalMessage("niReply0033", { "valor": (__ctx.e0()) });
};
export const niReply0034 = (__ctx = {}) => {
    return __globalMessage("niReply0034", { "valor": (__ctx.e0()) });
};
export const niReply0035 = (__ctx = {}) => {
    return __globalMessage("niReply0035");
};
export const niReply0036 = (__ctx = {}) => {
    return __globalMessage("niReply0036", { "valor": (__ctx.e0()) });
};
export const niReply0037 = (__ctx = {}) => {
    return __globalMessage("niReply0037");
};
export const niReply0038 = (__ctx = {}) => {
    return __globalMessage("niReply0038", { "valor": (__ctx.e0()) });
};
export const niReply0039 = (__ctx = {}) => {
    return __globalMessage("niReply0039");
};
export const niReply0040 = (__ctx = {}) => {
    return __globalMessage("niReply0040");
};
export const niReply0041 = (__ctx = {}) => {
    return __globalMessage("niReply0041");
};
export const niReply0042 = (__ctx = {}) => {
    return __globalMessage("niReply0042");
};
export const niReply0043 = (__ctx = {}) => {
    return __globalMessage("niReply0043");
};
export const niReply0044 = (__ctx = {}) => {
    return __globalMessage("niReply0044");
};
export const niReply0045 = (__ctx = {}) => {
    return __globalMessage("niReply0045");
};
export const niReply0046 = (__ctx = {}) => {
    return __globalMessage("niReply0046");
};
export const niReply0047 = (__ctx = {}) => {
    return __globalMessage("niReply0047");
};
export const niReply0048 = (__ctx = {}) => {
    return __globalMessage("niReply0048");
};
export const niReply0049 = (__ctx = {}) => {
    return __globalMessage("niReply0049");
};
export const niReply0050 = (__ctx = {}) => {
    return __globalMessage("niReply0050");
};
export const niReply0051 = (__ctx = {}) => {
    return __globalMessage("niReply0051", { "valor": (__ctx.e0()) });
};
export const niReply0052 = (__ctx = {}) => {
    return __globalMessage("niReply0052", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niReply0053 = (__ctx = {}) => {
    return __globalMessage("niReply0053", { "valor": (__ctx.e0()) });
};
export const niReply0054 = (__ctx = {}) => {
    return __globalMessage("niReply0054", { "valor": (__ctx.e0()) });
};
export const niReply0055 = (__ctx = {}) => {
    return __globalMessage("niReply0055");
};
export const niReply0056 = (__ctx = {}) => {
    return __globalMessage("niReply0056", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niReply0057 = (__ctx = {}) => {
    return __globalMessage("niReply0057");
};
export const niReply0058 = (__ctx = {}) => {
    return __globalMessage("niReply0058");
};
export const niReply0059 = (__ctx = {}) => {
    return __globalMessage("niReply0059", { "valor": (__ctx.e0()) });
};
export const niReply0060 = (__ctx = {}) => {
    return __globalMessage("niReply0060");
};
export const niReply0061 = (__ctx = {}) => {
    return __globalMessage("niReply0061", { "valor": (__ctx.e0()) });
};
export const niReply0062 = (__ctx = {}) => {
    return __globalMessage("niReply0062");
};
export const niReply0063 = (__ctx = {}) => {
    return __globalMessage("niReply0063");
};
export const niReply0064 = (__ctx = {}) => {
    return __globalMessage("niReply0064");
};
export const niReply0065 = (__ctx = {}) => {
    return __globalMessage("niReply0065");
};
export const niReply0066 = (__ctx = {}) => {
    return __globalMessage("niReply0066");
};
export const niReply0067 = (__ctx = {}) => {
    return __globalMessage("niReply0067");
};
export const niReply0068 = (__ctx = {}) => {
    return __globalMessage("niReply0068");
};
export const niReply0069 = (__ctx = {}) => {
    return __globalMessage("niReply0069");
};
export const niReply0070 = (__ctx = {}) => {
    return __globalMessage("niReply0070");
};
export const niReply0071 = (__ctx = {}) => {
    return __globalMessage("niReply0071");
};
export const niReply0072 = (__ctx = {}) => {
    return __globalMessage("niReply0072");
};
export const niReply0073 = (__ctx = {}) => {
    return __globalMessage("niReply0073");
};
export const niReply0074 = (__ctx = {}) => {
    return __globalMessage("niReply0074");
};
export const niReply0075 = (__ctx = {}) => {
    return __globalMessage("niReply0075");
};
export const niReply0076 = (__ctx = {}) => {
    return __globalMessage("niReply0076");
};
export const niReply0077 = (__ctx = {}) => {
    return __globalMessage("niReply0077");
};
export const niReply0078 = (__ctx = {}) => {
    return __globalMessage("niReply0078");
};
export const niReply0079 = (__ctx = {}) => {
    return __globalMessage("niReply0079");
};
export const niReply0080 = (__ctx = {}) => {
    return __globalMessage("niReply0080");
};
export const niReply0081 = (__ctx = {}) => {
    return __globalMessage("niReply0081");
};
export const niReply0082 = (__ctx = {}) => {
    return __globalMessage("niReply0082");
};
export const niReply0083 = (__ctx = {}) => {
    return __globalMessage("niReply0083");
};
export const niReply0084 = (__ctx = {}) => {
    return __globalMessage("niReply0084", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niReply0085 = (__ctx = {}) => {
    return __globalMessage("niReply0085", { "valor": (__ctx.e0()) });
};
export const niReply0086 = (__ctx = {}) => {
    return __globalMessage("niReply0086", { "valor": (__ctx.e0()) });
};
export const niReply0087 = (__ctx = {}) => {
    return __globalMessage("niReply0087", { "valor": (__ctx.e0()) });
};
export const niReply0088 = (__ctx = {}) => {
    return __globalMessage("niReply0088", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niReply0089 = (__ctx = {}) => {
    return __globalMessage("niReply0089", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()), "valor3": (__ctx.e2()), "valor4": (__ctx.e3()), "valor5": (__ctx.e4()) });
};
export const niReply0090 = (__ctx = {}) => {
    return __globalMessage("niReply0090");
};
export const niReply0091 = (__ctx = {}) => {
    return __globalMessage("niReply0091");
};
export const niReply0092 = (__ctx = {}) => {
    return __globalMessage("niReply0092");
};
export const niReply0093 = (__ctx = {}) => {
    return __globalMessage("niReply0093");
};
export const niReply0094 = (__ctx = {}) => {
    return __globalMessage("niReply0094", { "valor": (__ctx.e0()) });
};
export const niReply0095 = (__ctx = {}) => {
    return __globalMessage("niReply0095");
};
export const niReply0096 = (__ctx = {}) => {
    return __globalMessage("niReply0096");
};
export const niReply0097 = (__ctx = {}) => {
    return __globalMessage("niReply0097");
};
export const niReply0098 = (__ctx = {}) => {
    return __globalMessage("niReply0098");
};
export const niReply0099 = (__ctx = {}) => {
    return __globalMessage("niReply0099");
};
export const niReply0100 = (__ctx = {}) => {
    return __globalMessage("niReply0100", { "valor": (__ctx.e0()) });
};
export const niReply0101 = (__ctx = {}) => {
    return __globalMessage("niReply0101");
};
export const niReply0102 = (__ctx = {}) => {
    return __globalMessage("niReply0102");
};
export const niReply0103 = (__ctx = {}) => {
    return __globalMessage("niReply0103");
};
export const niReply0104 = (__ctx = {}) => {
    return __globalMessage("niReply0104");
};
export const niReply0105 = (__ctx = {}) => {
    return __globalMessage("niReply0105", { "valor": (__ctx.e0()) });
};
export const niReply0106 = (__ctx = {}) => {
    return __globalMessage("niReply0106");
};
export const niReply0107 = (__ctx = {}) => {
    return __globalMessage("niReply0107");
};
export const niReply0108 = (__ctx = {}) => {
    return __globalMessage("niReply0108");
};
export const niReply0109 = (__ctx = {}) => {
    return __globalMessage("niReply0109");
};
export const niReply0110 = (__ctx = {}) => {
    return __globalMessage("niReply0110");
};
export const niReply0111 = (__ctx = {}) => {
    return __globalMessage("niReply0111", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niReply0112 = (__ctx = {}) => {
    return __globalMessage("niReply0112", { "valor": (__ctx.e0()) });
};
export const niReply0113 = (__ctx = {}) => {
    return __globalMessage("niReply0113");
};
export const niReply0114 = (__ctx = {}) => {
    return __globalMessage("niReply0114");
};
export const niReply0115 = (__ctx = {}) => {
    return __globalMessage("niReply0115", { "valor": (__ctx.e0()) });
};
export const niReply0116 = (__ctx = {}) => {
    return __globalMessage("niReply0116");
};
export const niReply0117 = (__ctx = {}) => {
    return __globalMessage("niReply0117");
};
export const niReply0118 = (__ctx = {}) => {
    return __globalMessage("niReply0118");
};
export const niReply0119 = (__ctx = {}) => {
    return __globalMessage("niReply0119");
};
export const niReply0120 = (__ctx = {}) => {
    return __globalMessage("niReply0120", { "valor": (__ctx.e0()) });
};
export const niReply0121 = (__ctx = {}) => {
    return __globalMessage("niReply0121");
};
export const niReply0122 = (__ctx = {}) => {
    return __globalMessage("niReply0122", { "valor": (__ctx.e0()) });
};
export const niReply0123 = (__ctx = {}) => {
    return __globalMessage("niReply0123");
};
export const niReply0124 = (__ctx = {}) => {
    return __globalMessage("niReply0124");
};
export const niReply0125 = (__ctx = {}) => {
    return __globalMessage("niReply0125");
};
export const niReply0126 = (__ctx = {}) => {
    return __globalMessage("niReply0126");
};
export const niReply0127 = (__ctx = {}) => {
    return __globalMessage("niReply0127");
};
export const niReply0128 = (__ctx = {}) => {
    return __globalMessage("niReply0128");
};
export const niReply0129 = (__ctx = {}) => {
    return __globalMessage("niReply0129");
};
export const niReply0130 = (__ctx = {}) => {
    return __globalMessage("niReply0130");
};
export const niReply0131 = (__ctx = {}) => {
    return __globalMessage("niReply0131");
};
export const niReply0132 = (__ctx = {}) => {
    return __globalMessage("niReply0132");
};
export const niReply0133 = (__ctx = {}) => {
    return __globalMessage("niReply0133");
};
export const niReply0134 = (__ctx = {}) => {
    return __globalMessage("niReply0134");
};
export const niReply0135 = (__ctx = {}) => {
    return __globalMessage("niReply0135");
};
export const niReply0136 = (__ctx = {}) => {
    return __globalMessage("niReply0136");
};
export const niReply0137 = (__ctx = {}) => {
    return __globalMessage("niReply0137");
};
export const niReply0138 = (__ctx = {}) => {
    return __globalMessage("niReply0138", { "prefix": (__ctx.prefix || "") });
};
export const niReply0139 = (__ctx = {}) => {
    return __globalMessage("niReply0139", { "prefix": (__ctx.prefix || "") });
};
export const niReply0140 = (__ctx = {}) => {
    return __globalMessage("niReply0140", { "prefix": (__ctx.prefix || "") });
};
export const niReply0141 = (__ctx = {}) => {
    return __globalMessage("niReply0141", { "prefix": (__ctx.prefix || "") });
};
export const niReply0142 = (__ctx = {}) => {
    return __globalMessage("niReply0142", { "prefix": (__ctx.prefix || "") });
};
export const niReply0143 = (__ctx = {}) => {
    return __globalMessage("niReply0143", { "prefix": (__ctx.prefix || "") });
};
export const niReply0144 = (__ctx = {}) => {
    return __globalMessage("niReply0144", { "prefix": (__ctx.prefix || "") });
};
export const niReply0145 = (__ctx = {}) => {
    return __globalMessage("niReply0145", { "prefix": (__ctx.prefix || "") });
};
export const niReply0146 = (__ctx = {}) => {
    return __globalMessage("niReply0146", { "prefix": (__ctx.prefix || "") });
};
export const niReply0147 = (__ctx = {}) => {
    return __globalMessage("niReply0147", { "prefix": (__ctx.prefix || "") });
};
export const niReply0148 = (__ctx = {}) => {
    return __globalMessage("niReply0148", { "prefix": (__ctx.prefix || "") });
};
export const niReply0149 = (__ctx = {}) => {
    return __globalMessage("niReply0149", { "valor": (__ctx.e0()) });
};
export const niReply0150 = (__ctx = {}) => {
    return __globalMessage("niReply0150");
};
export const niReply0151 = (__ctx = {}) => {
    return __globalMessage("niReply0151", { "valor": (__ctx.e0()) });
};
export const niReply0152 = (__ctx = {}) => {
    return __globalMessage("niReply0152", { "valor": (__ctx.e0()) });
};
export const niReply0153 = (__ctx = {}) => {
    return __globalMessage("niReply0153");
};
export const niReply0154 = (__ctx = {}) => {
    return __globalMessage("niReply0154");
};
export const niReply0155 = (__ctx = {}) => {
    return __globalMessage("niReply0155");
};
export const niReply0156 = (__ctx = {}) => {
    return __globalMessage("niReply0156");
};
export const niReply0157 = (__ctx = {}) => {
    return __globalMessage("niReply0157", { "prefix": (__ctx.prefix || "") });
};
export const niReply0158 = (__ctx = {}) => {
    return __globalMessage("niReply0158", { "valor": (__ctx.e0()), "prefix": (__ctx.prefix || "") });
};
export const niReply0159 = (__ctx = {}) => {
    return __globalMessage("niReply0159", { "prefix": (__ctx.prefix || "") });
};
export const niReply0160 = (__ctx = {}) => {
    return __globalMessage("niReply0160", { "valor": (__ctx.e0()), "prefix": (__ctx.prefix || "") });
};
export const niReply0161 = (__ctx = {}) => {
    return __globalMessage("niReply0161", { "prefix": (__ctx.prefix || "") });
};
export const niReply0162 = (__ctx = {}) => {
    return __globalMessage("niReply0162", { "valor": (__ctx.e0()), "prefix": (__ctx.prefix || "") });
};
export const niReply0163 = (__ctx = {}) => {
    return __globalMessage("niReply0163", { "prefix": (__ctx.prefix || "") });
};
export const niReply0164 = (__ctx = {}) => {
    return __globalMessage("niReply0164", { "valor": (__ctx.e0()), "prefix": (__ctx.prefix || "") });
};
export const niReply0165 = (__ctx = {}) => {
    return __globalMessage("niReply0165");
};
export const niReply0166 = (__ctx = {}) => {
    return __globalMessage("niReply0166");
};
export const niReply0167 = (__ctx = {}) => {
    return __globalMessage("niReply0167", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niReply0168 = (__ctx = {}) => {
    return __globalMessage("niReply0168", { "valor": (__ctx.e0()) });
};
export const niReply0169 = (__ctx = {}) => {
    return __globalMessage("niReply0169", { "valor": (__ctx.e0()) });
};
export const niReply0170 = (__ctx = {}) => {
    return __globalMessage("niReply0170");
};
export const niReply0171 = (__ctx = {}) => {
    return __globalMessage("niReply0171", { "valor": (__ctx.e0()) });
};
export const niReply0172 = (__ctx = {}) => {
    return __globalMessage("niReply0172", { "valor": (__ctx.e0()) });
};
export const niReply0173 = (__ctx = {}) => {
    return __globalMessage("niReply0173");
};
export const niReply0174 = (__ctx = {}) => {
    return __globalMessage("niReply0174");
};
export const niReply0175 = (__ctx = {}) => {
    return __globalMessage("niReply0175");
};
export const niReply0176 = (__ctx = {}) => {
    return __globalMessage("niReply0176", { "valor": (__ctx.e0()) });
};
export const niReply0177 = (__ctx = {}) => {
    return __globalMessage("niReply0177");
};
export const niReply0178 = (__ctx = {}) => {
    return __globalMessage("niReply0178");
};
export const niReply0179 = (__ctx = {}) => {
    return __globalMessage("niReply0179");
};
export const niReply0180 = (__ctx = {}) => {
    return __globalMessage("niReply0180", { "valor": (__ctx.e0()) });
};
export const niReply0181 = (__ctx = {}) => {
    return __globalMessage("niReply0181");
};
export const niReply0182 = (__ctx = {}) => {
    return __globalMessage("niReply0182", { "valor": (__ctx.e0()) });
};
export const niReply0183 = (__ctx = {}) => {
    return __globalMessage("niReply0183", { "valor": (__ctx.e0()) });
};
export const niReply0184 = (__ctx = {}) => {
    return __globalMessage("niReply0184", { "valor": (__ctx.e0()) });
};
export const niReply0185 = (__ctx = {}) => {
    return __globalMessage("niReply0185", { "valor": (__ctx.e0()) });
};
export const niReply0186 = (__ctx = {}) => {
    return __globalMessage("niReply0186", { "valor": (__ctx.e0()) });
};
export const niReply0187 = (__ctx = {}) => {
    return __globalMessage("niReply0187");
};
export const niReply0188 = (__ctx = {}) => {
    return __globalMessage("niReply0188", { "valor": (__ctx.e0()), "prefix": (__ctx.prefix || "") });
};
export const niReply0189 = (__ctx = {}) => {
    return __globalMessage("niReply0189");
};
export const niReply0190 = (__ctx = {}) => {
    return __globalMessage("niReply0190");
};
export const niReply0191 = (__ctx = {}) => {
    return __globalMessage("niReply0191");
};
export const niReply0192 = (__ctx = {}) => {
    return __globalMessage("niReply0192");
};
export const niReply0193 = (__ctx = {}) => {
    return __globalMessage("niReply0193", { "valor": (__ctx.e0()) });
};
export const niReply0194 = (__ctx = {}) => {
    return __globalMessage("niReply0194", { "prefix": (__ctx.prefix || "") });
};
export const niReply0195 = (__ctx = {}) => {
    return __globalMessage("niReply0195");
};
export const niReply0196 = (__ctx = {}) => {
    return __globalMessage("niReply0196");
};
export const niReply0197 = (__ctx = {}) => {
    return __globalMessage("niReply0197");
};
export const niReply0198 = (__ctx = {}) => {
    return __globalMessage("niReply0198");
};
export const niReply0199 = (__ctx = {}) => {
    return __globalMessage("niReply0199");
};
export const niReply0200 = (__ctx = {}) => {
    return __globalMessage("niReply0200");
};
export const niReply0201 = (__ctx = {}) => {
    return __globalMessage("niReply0201");
};
export const niReply0202 = (__ctx = {}) => {
    return __globalMessage("niReply0202", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niReply0203 = (__ctx = {}) => {
    return __globalMessage("niReply0203");
};
export const niReply0204 = (__ctx = {}) => {
    return __globalMessage("niReply0204");
};
export const niReply0205 = (__ctx = {}) => {
    return __globalMessage("niReply0205");
};
export const niReply0206 = (__ctx = {}) => {
    return __globalMessage("niReply0206");
};
export const niReply0207 = (__ctx = {}) => {
    return __globalMessage("niReply0207", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niReply0208 = (__ctx = {}) => {
    return __globalMessage("niReply0208", { "valor": (__ctx.e0()) });
};
export const niReply0209 = (__ctx = {}) => {
    return __globalMessage("niReply0209");
};
export const niReply0210 = (__ctx = {}) => {
    return __globalMessage("niReply0210");
};
export const niReply0211 = (__ctx = {}) => {
    return __globalMessage("niReply0211");
};
export const niReply0212 = (__ctx = {}) => {
    return __globalMessage("niReply0212");
};
export const niReply0213 = (__ctx = {}) => {
    return __globalMessage("niReply0213");
};
export const niReply0214 = (__ctx = {}) => {
    return __globalMessage("niReply0214");
};
export const niReply0215 = (__ctx = {}) => {
    return __globalMessage("niReply0215");
};
export const niReply0216 = (__ctx = {}) => {
    return __globalMessage("niReply0216");
};
export const niReply0217 = (__ctx = {}) => {
    return __globalMessage("niReply0217");
};
export const niReply0218 = (__ctx = {}) => {
    return __globalMessage("niReply0218");
};
export const niReply0219 = (__ctx = {}) => {
    return __globalMessage("niReply0219");
};
export const niReply0220 = (__ctx = {}) => {
    return __globalMessage("niReply0220", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()), "valor3": (__ctx.e2()), "valor4": (__ctx.e3()), "valor5": (__ctx.e4()), "valor6": (__ctx.e5()), "valor7": (__ctx.e6()), "valor8": (__ctx.e7()), "valor9": (__ctx.e8()), "valor10": (__ctx.e9()), "valor11": (__ctx.e10()), "valor12": (__ctx.e11()), "valor13": (__ctx.e12()), "valor14": (__ctx.e13()), "valor15": (__ctx.e14()), "valor16": (__ctx.e15()), "valor17": (__ctx.e16()), "valor18": (__ctx.e17()), "valor19": (__ctx.e18()), "valor20": (__ctx.e19()), "valor21": (__ctx.e20()), "valor22": (__ctx.e21()), "valor23": (__ctx.e22()), "prefix": (__ctx.prefix || "") });
};
export const niReply0221 = (__ctx = {}) => {
    return __globalMessage("niReply0221");
};
export const niReply0222 = (__ctx = {}) => {
    return __globalMessage("niReply0222");
};
export const niReply0223 = (__ctx = {}) => {
    return __globalMessage("niReply0223");
};
export const niReply0224 = (__ctx = {}) => {
    return __globalMessage("niReply0224");
};
export const niReply0225 = (__ctx = {}) => {
    return __globalMessage("niReply0225", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()), "valor3": (__ctx.e2()), "valor4": (__ctx.e3()), "valor5": (__ctx.e4()), "valor6": (__ctx.e5()), "valor7": (__ctx.e6()), "valor8": (__ctx.e7()), "valor9": (__ctx.e8()), "valor10": (__ctx.e9()), "valor11": (__ctx.e10()), "valor12": (__ctx.e11()), "valor13": (__ctx.e12()), "prefix": (__ctx.prefix || "") });
};
export const niReply0226 = (__ctx = {}) => {
    return __globalMessage("niReply0226", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()), "prefix": (__ctx.prefix || "") });
};
export const niReply0227 = (__ctx = {}) => {
    return __globalMessage("niReply0227", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()), "prefix": (__ctx.prefix || "") });
};
export const niReply0228 = (__ctx = {}) => {
    return __globalMessage("niReply0228", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()), "valor3": (__ctx.e2()) });
};
export const niReply0229 = (__ctx = {}) => {
    return __globalMessage("niReply0229", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()), "prefix": (__ctx.prefix || "") });
};
export const niReply0230 = (__ctx = {}) => {
    return __globalMessage("niReply0230", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niReply0231 = (__ctx = {}) => {
    return __globalMessage("niReply0231", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()), "prefix": (__ctx.prefix || "") });
};
export const niReply0232 = (__ctx = {}) => {
    return __globalMessage("niReply0232", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niReply0233 = (__ctx = {}) => {
    return __globalMessage("niReply0233", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()), "valor3": (__ctx.e2()), "valor4": (__ctx.e3()), "valor5": (__ctx.e4()), "valor6": (__ctx.e5()), "valor7": (__ctx.e6()), "prefix": (__ctx.prefix || "") });
};
export const niReply0234 = (__ctx = {}) => {
    return __globalMessage("niReply0234");
};
export const niReply0235 = (__ctx = {}) => {
    return __globalMessage("niReply0235");
};
export const niReply0236 = (__ctx = {}) => {
    return __globalMessage("niReply0236", { "valor": (__ctx.e0()) });
};
export const niReply0237 = (__ctx = {}) => {
    return __globalMessage("niReply0237");
};
export const niReply0238 = (__ctx = {}) => {
    return __globalMessage("niReply0238");
};
export const niReply0239 = (__ctx = {}) => {
    return __globalMessage("niReply0239");
};
export const niReply0240 = (__ctx = {}) => {
    return __globalMessage("niReply0240", { "valor": (__ctx.e0()) });
};
export const niReply0241 = (__ctx = {}) => {
    return __globalMessage("niReply0241");
};
export const niReply0242 = (__ctx = {}) => {
    return __globalMessage("niReply0242");
};
export const niReply0243 = (__ctx = {}) => {
    return __globalMessage("niReply0243");
};
export const niReply0244 = (__ctx = {}) => {
    return __globalMessage("niReply0244", { "valor": (__ctx.e0()) });
};
export const niReply0245 = (__ctx = {}) => {
    return __globalMessage("niReply0245");
};
export const niReply0246 = (__ctx = {}) => {
    return __globalMessage("niReply0246");
};
export const niReply0247 = (__ctx = {}) => {
    return __globalMessage("niReply0247");
};
export const niReply0248 = (__ctx = {}) => {
    return __globalMessage("niReply0248");
};
export const niReply0249 = (__ctx = {}) => {
    return __globalMessage("niReply0249", { "valor": (__ctx.e0()) });
};
export const niReply0250 = (__ctx = {}) => {
    return __globalMessage("niReply0250", { "valor": (__ctx.e0()) });
};
export const niReply0251 = (__ctx = {}) => {
    return __globalMessage("niReply0251", { "valor": (__ctx.e0()) });
};
export const niReply0252 = (__ctx = {}) => {
    return __globalMessage("niReply0252", { "valor": (__ctx.e0()) });
};
export const niReply0253 = (__ctx = {}) => {
    return __globalMessage("niReply0253", { "valor": (__ctx.e0()) });
};
export const niReply0254 = (__ctx = {}) => {
    return __globalMessage("niReply0254", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niReply0255 = (__ctx = {}) => {
    return __globalMessage("niReply0255", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niReply0256 = (__ctx = {}) => {
    return __globalMessage("niReply0256");
};
export const niReply0257 = (__ctx = {}) => {
    return __globalMessage("niReply0257", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niReply0258 = (__ctx = {}) => {
    return __globalMessage("niReply0258", { "valor": (__ctx.e0()) });
};
export const niReply0259 = (__ctx = {}) => {
    return __globalMessage("niReply0259", { "prefix": (__ctx.prefix || "") });
};
export const niReply0260 = (__ctx = {}) => {
    return __globalMessage("niReply0260");
};
export const niReply0261 = (__ctx = {}) => {
    return __globalMessage("niReply0261");
};
export const niReply0262 = (__ctx = {}) => {
    return __globalMessage("niReply0262");
};
export const niReply0263 = (__ctx = {}) => {
    return __globalMessage("niReply0263");
};
export const niReply0264 = (__ctx = {}) => {
    return __globalMessage("niReply0264");
};
export const niReply0265 = (__ctx = {}) => {
    return __globalMessage("niReply0265");
};
export const niReply0266 = (__ctx = {}) => {
    return __globalMessage("niReply0266", { "valor": (__ctx.e0()) });
};
export const niReply0267 = (__ctx = {}) => {
    return __globalMessage("niReply0267");
};
export const niReply0268 = (__ctx = {}) => {
    return __globalMessage("niReply0268", { "valor": (__ctx.e0()) });
};
export const niReply0269 = (__ctx = {}) => {
    return __globalMessage("niReply0269");
};
export const niReply0270 = (__ctx = {}) => {
    return __globalMessage("niReply0270", { "valor": (__ctx.e0()) });
};
export const niReply0271 = (__ctx = {}) => {
    return __globalMessage("niReply0271", { "valor": (__ctx.e0()) });
};
export const niReply0272 = (__ctx = {}) => {
    return __globalMessage("niReply0272");
};
export const niReply0273 = (__ctx = {}) => {
    return __globalMessage("niReply0273");
};
export const niReply0274 = (__ctx = {}) => {
    return __globalMessage("niReply0274");
};
export const niReply0275 = (__ctx = {}) => {
    return __globalMessage("niReply0275");
};
export const niReply0276 = (__ctx = {}) => {
    return __globalMessage("niReply0276");
};
export const niReply0277 = (__ctx = {}) => {
    return __globalMessage("niReply0277", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niReply0278 = (__ctx = {}) => {
    return __globalMessage("niReply0278", { "valor": (__ctx.e0()) });
};
export const niReply0279 = (__ctx = {}) => {
    return __globalMessage("niReply0279");
};
export const niReply0280 = (__ctx = {}) => {
    return __globalMessage("niReply0280");
};
export const niReply0281 = (__ctx = {}) => {
    return __globalMessage("niReply0281");
};
export const niReply0282 = (__ctx = {}) => {
    return __globalMessage("niReply0282");
};
export const niReply0283 = (__ctx = {}) => {
    return __globalMessage("niReply0283", { "valor": (__ctx.e0()) });
};
export const niReply0284 = (__ctx = {}) => {
    return __globalMessage("niReply0284");
};
export const niReply0285 = (__ctx = {}) => {
    return __globalMessage("niReply0285");
};
export const niReply0286 = (__ctx = {}) => {
    return __globalMessage("niReply0286", { "valor": (__ctx.e0()) });
};
export const niReply0287 = (__ctx = {}) => {
    return __globalMessage("niReply0287", { "valor": (__ctx.e0()) });
};
export const niReply0288 = (__ctx = {}) => {
    return __globalMessage("niReply0288");
};
export const niReply0289 = (__ctx = {}) => {
    return __globalMessage("niReply0289", { "valor": (__ctx.e0()) });
};
export const niReply0290 = (__ctx = {}) => {
    return __globalMessage("niReply0290");
};
export const niReply0291 = (__ctx = {}) => {
    return __globalMessage("niReply0291");
};
export const niReply0292 = (__ctx = {}) => {
    return __globalMessage("niReply0292");
};
export const niReply0293 = (__ctx = {}) => {
    return __globalMessage("niReply0293", { "valor": (__ctx.e0()) });
};
export const niReply0294 = (__ctx = {}) => {
    return __globalMessage("niReply0294");
};
export const niReply0295 = (__ctx = {}) => {
    return __globalMessage("niReply0295");
};
export const niReply0296 = (__ctx = {}) => {
    return __globalMessage("niReply0296", { "valor": (__ctx.e0()) });
};
export const niReply0297 = (__ctx = {}) => {
    return __globalMessage("niReply0297", { "prefix": (__ctx.prefix || "") });
};
export const niReply0298 = (__ctx = {}) => {
    return __globalMessage("niReply0298");
};
export const niReply0299 = (__ctx = {}) => {
    return __globalMessage("niReply0299");
};
export const niReply0300 = (__ctx = {}) => {
    return __globalMessage("niReply0300", { "valor": (__ctx.e0()) });
};
export const niReply0301 = (__ctx = {}) => {
    return __globalMessage("niReply0301");
};
export const niReply0302 = (__ctx = {}) => {
    return __globalMessage("niReply0302");
};
export const niReply0303 = (__ctx = {}) => {
    return __globalMessage("niReply0303", { "valor": (__ctx.e0()) });
};
export const niReply0304 = (__ctx = {}) => {
    return __globalMessage("niReply0304");
};
export const niReply0305 = (__ctx = {}) => {
    return __globalMessage("niReply0305");
};
export const niReply0306 = (__ctx = {}) => {
    return __globalMessage("niReply0306");
};
export const niReply0307 = (__ctx = {}) => {
    return __globalMessage("niReply0307", { "valor": (__ctx.e0()) });
};
export const niReply0308 = (__ctx = {}) => {
    return __globalMessage("niReply0308");
};
export const niReply0309 = (__ctx = {}) => {
    return __globalMessage("niReply0309");
};
export const niReply0310 = (__ctx = {}) => {
    return __globalMessage("niReply0310", { "valor": (__ctx.e0()) });
};
export const niReply0311 = (__ctx = {}) => {
    return __globalMessage("niReply0311");
};
export const niReply0312 = (__ctx = {}) => {
    return __globalMessage("niReply0312", { "valor": (__ctx.e0()) });
};
export const niReply0313 = (__ctx = {}) => {
    return __globalMessage("niReply0313");
};
export const niReply0314 = (__ctx = {}) => {
    return __globalMessage("niReply0314", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niReply0315 = (__ctx = {}) => {
    return __globalMessage("niReply0315", { "valor": (__ctx.e0()) });
};
export const niReply0316 = (__ctx = {}) => {
    return __globalMessage("niReply0316", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niReply0317 = (__ctx = {}) => {
    return __globalMessage("niReply0317");
};
export const niReply0318 = (__ctx = {}) => {
    return __globalMessage("niReply0318", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()), "valor3": (__ctx.e2()), "valor4": (__ctx.e3()) });
};
export const niReply0319 = (__ctx = {}) => {
    return __globalMessage("niReply0319", { "valor": (__ctx.e0()) });
};
export const niReply0320 = (__ctx = {}) => {
    return __globalMessage("niReply0320", { "valor": (__ctx.e0()) });
};
export const niReply0321 = (__ctx = {}) => {
    return __globalMessage("niReply0321", { "valor": (__ctx.e0()) });
};
export const niReply0322 = (__ctx = {}) => {
    return __globalMessage("niReply0322", { "valor": (__ctx.e0()) });
};
export const niReply0323 = (__ctx = {}) => {
    return __globalMessage("niReply0323", { "valor": (__ctx.e0()) });
};
export const niReply0324 = (__ctx = {}) => {
    return __globalMessage("niReply0324", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()), "valor3": (__ctx.e2()) });
};
export const niReply0325 = (__ctx = {}) => {
    return __globalMessage("niReply0325");
};
export const niReply0326 = (__ctx = {}) => {
    return __globalMessage("niReply0326", { "valor": (__ctx.e0()) });
};
export const niReply0327 = (__ctx = {}) => {
    return __globalMessage("niReply0327", { "valor": (__ctx.e0()), "prefix": (__ctx.prefix || "") });
};
export const niReply0328 = (__ctx = {}) => {
    return __globalMessage("niReply0328", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()), "valor3": (__ctx.e2()) });
};
export const niReply0329 = (__ctx = {}) => {
    return __globalMessage("niReply0329", { "valor": (__ctx.e0()) });
};
export const niReply0330 = (__ctx = {}) => {
    return __globalMessage("niReply0330");
};
export const niReply0331 = (__ctx = {}) => {
    return __globalMessage("niReply0331");
};
export const niReply0332 = (__ctx = {}) => {
    return __globalMessage("niReply0332", { "valor": (__ctx.e0()), "prefix": (__ctx.prefix || "") });
};
export const niReply0333 = (__ctx = {}) => {
    return __globalMessage("niReply0333");
};
export const niReply0334 = (__ctx = {}) => {
    return __globalMessage("niReply0334", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niReply0335 = (__ctx = {}) => {
    return __globalMessage("niReply0335", { "valor": (__ctx.e0()) });
};
export const niReply0336 = (__ctx = {}) => {
    return __globalMessage("niReply0336");
};
export const niReply0337 = (__ctx = {}) => {
    return __globalMessage("niReply0337", { "valor": (__ctx.e0()) });
};
export const niReply0338 = (__ctx = {}) => {
    return __globalMessage("niReply0338", { "valor": (__ctx.e0()), "prefix": (__ctx.prefix || "") });
};
export const niReply0339 = (__ctx = {}) => {
    return __globalMessage("niReply0339");
};
export const niReply0340 = (__ctx = {}) => {
    return __globalMessage("niReply0340", { "valor": (__ctx.e0()) });
};
export const niReply0341 = (__ctx = {}) => {
    return __globalMessage("niReply0341");
};
export const niReply0342 = (__ctx = {}) => {
    return __globalMessage("niReply0342");
};
export const niReply0343 = (__ctx = {}) => {
    return __globalMessage("niReply0343", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niReply0344 = (__ctx = {}) => {
    return __globalMessage("niReply0344");
};
export const niReply0345 = (__ctx = {}) => {
    return __globalMessage("niReply0345");
};
export const niReply0346 = (__ctx = {}) => {
    return __globalMessage("niReply0346");
};
export const niReply0347 = (__ctx = {}) => {
    return __globalMessage("niReply0347");
};
export const niReply0348 = (__ctx = {}) => {
    return __globalMessage("niReply0348");
};
export const niReply0349 = (__ctx = {}) => {
    return __globalMessage("niReply0349", { "valor": (__ctx.e0()) });
};
export const niReply0350 = (__ctx = {}) => {
    return __globalMessage("niReply0350");
};
export const niReply0351 = (__ctx = {}) => {
    return __globalMessage("niReply0351");
};
export const niReply0352 = (__ctx = {}) => {
    return __globalMessage("niReply0352");
};
export const niReply0353 = (__ctx = {}) => {
    return __globalMessage("niReply0353");
};
export const niReply0354 = (__ctx = {}) => {
    return __globalMessage("niReply0354");
};
export const niReply0355 = (__ctx = {}) => {
    return __globalMessage("niReply0355");
};
export const niReply0356 = (__ctx = {}) => {
    return __globalMessage("niReply0356", { "valor": (__ctx.e0()) });
};
export const niReply0357 = (__ctx = {}) => {
    return __globalMessage("niReply0357");
};
export const niReply0358 = (__ctx = {}) => {
    return __globalMessage("niReply0358");
};
export const niReply0359 = (__ctx = {}) => {
    return __globalMessage("niReply0359");
};
export const niReply0360 = (__ctx = {}) => {
    return __globalMessage("niReply0360", { "valor": (__ctx.e0()) });
};
export const niReply0361 = (__ctx = {}) => {
    return __globalMessage("niReply0361", { "valor": (__ctx.e0()), "prefix": (__ctx.prefix || "") });
};
export const niReply0362 = (__ctx = {}) => {
    return __globalMessage("niReply0362", { "valor": (__ctx.e0()) });
};
export const niReply0363 = (__ctx = {}) => {
    return __globalMessage("niReply0363", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niReply0364 = (__ctx = {}) => {
    return __globalMessage("niReply0364", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niReply0365 = (__ctx = {}) => {
    return __globalMessage("niReply0365");
};
export const niReply0366 = (__ctx = {}) => {
    return __globalMessage("niReply0366", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niReply0367 = (__ctx = {}) => {
    return __globalMessage("niReply0367");
};
export const niReply0368 = (__ctx = {}) => {
    return __globalMessage("niReply0368");
};
export const niReply0369 = (__ctx = {}) => {
    return __globalMessage("niReply0369");
};
export const niReply1256 = (__ctx = {}) => {
    return __globalMessage("niReply1256", { "valor": (__ctx.e0()) });
};
export const niReply1257 = (__ctx = {}) => {
    return __globalMessage("niReply1257", { "valor": (__ctx.e0()) });
};
export const niReply1258 = (__ctx = {}) => {
    return __globalMessage("niReply1258", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niReply0370 = (__ctx = {}) => {
    return __globalMessage("niReply0370");
};
export const niReply0371 = (__ctx = {}) => {
    return __globalMessage("niReply0371");
};
export const niReply0372 = (__ctx = {}) => {
    return __globalMessage("niReply0372");
};
export const niReply0373 = (__ctx = {}) => {
    return __globalMessage("niReply0373", { "valor": (__ctx.e0()), "prefix": (__ctx.prefix || "") });
};
export const niReply0374 = (__ctx = {}) => {
    return __globalMessage("niReply0374");
};
export const niReply0375 = (__ctx = {}) => {
    return __globalMessage("niReply0375");
};
export const niReply0376 = (__ctx = {}) => {
    return __globalMessage("niReply0376");
};
export const niReply0377 = (__ctx = {}) => {
    return __globalMessage("niReply0377", { "valor": (__ctx.e0()) });
};
export const niReply0378 = (__ctx = {}) => {
    return __globalMessage("niReply0378");
};
export const niReply0379 = (__ctx = {}) => {
    return __globalMessage("niReply0379", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niReply0380 = (__ctx = {}) => {
    return __globalMessage("niReply0380");
};
export const niReply0381 = (__ctx = {}) => {
    return __globalMessage("niReply0381", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()), "valor3": (__ctx.e2()), "valor4": (__ctx.e3()), "valor5": (__ctx.e4()), "valor6": (__ctx.e5()), "valor7": (__ctx.e6()), "valor8": (__ctx.e7()) });
};
export const niReply0382 = (__ctx = {}) => {
    return __globalMessage("niReply0382", { "valor": (__ctx.e0()) });
};
export const niReply0383 = (__ctx = {}) => {
    return __globalMessage("niReply0383", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()), "valor3": (__ctx.e2()), "valor4": (__ctx.e3()), "valor5": (__ctx.e4()), "valor6": (__ctx.e5()) });
};
export const niReply0384 = (__ctx = {}) => {
    return __globalMessage("niReply0384", { "valor": (__ctx.e0()) });
};
export const niReply0385 = (__ctx = {}) => {
    return __globalMessage("niReply0385", { "valor": (__ctx.e0()), "prefix": (__ctx.prefix || "") });
};
export const niReply0386 = (__ctx = {}) => {
    return __globalMessage("niReply0386", { "valor": (__ctx.e0()) });
};
export const niReply0387 = (__ctx = {}) => {
    return __globalMessage("niReply0387", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()), "prefix": (__ctx.prefix || "") });
};
export const niReply0388 = (__ctx = {}) => {
    return __globalMessage("niReply0388");
};
export const niReply0389 = (__ctx = {}) => {
    return __globalMessage("niReply0389", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niReply0390 = (__ctx = {}) => {
    return __globalMessage("niReply0390", { "valor": (__ctx.e0()) });
};
export const niReply0391 = (__ctx = {}) => {
    return __globalMessage("niReply0391", { "valor": (__ctx.e0()), "prefix": (__ctx.prefix || "") });
};
export const niReply0392 = (__ctx = {}) => {
    return __globalMessage("niReply0392", { "valor": (__ctx.e0()) });
};
export const niReply0393 = (__ctx = {}) => {
    return __globalMessage("niReply0393", { "valor": (__ctx.e0()) });
};
export const niReply0394 = (__ctx = {}) => {
    return __globalMessage("niReply0394", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niReply0395 = (__ctx = {}) => {
    return __globalMessage("niReply0395");
};
export const niReply0396 = (__ctx = {}) => {
    return __globalMessage("niReply0396");
};
export const niReply0397 = (__ctx = {}) => {
    return __globalMessage("niReply0397");
};
export const niReply0398 = (__ctx = {}) => {
    return __globalMessage("niReply0398");
};
export const niReply0399 = (__ctx = {}) => {
    return __globalMessage("niReply0399");
};
export const niReply0400 = (__ctx = {}) => {
    return __globalMessage("niReply0400");
};
export const niReply0401 = (__ctx = {}) => {
    return __globalMessage("niReply0401");
};
export const niReply0402 = (__ctx = {}) => {
    return __globalMessage("niReply0402");
};
export const niReply0403 = (__ctx = {}) => {
    return __globalMessage("niReply0403");
};
export const niReply0404 = (__ctx = {}) => {
    return __globalMessage("niReply0404", { "valor": (__ctx.e0()) });
};
export const niReply0405 = (__ctx = {}) => {
    return __globalMessage("niReply0405", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niReply0406 = (__ctx = {}) => {
    return __globalMessage("niReply0406");
};
export const niReply0407 = (__ctx = {}) => {
    return __globalMessage("niReply0407");
};
export const niReply0408 = (__ctx = {}) => {
    return __globalMessage("niReply0408");
};
export const niReply0409 = (__ctx = {}) => {
    return __globalMessage("niReply0409");
};
export const niReply0410 = (__ctx = {}) => {
    return __globalMessage("niReply0410");
};
export const niReply0411 = (__ctx = {}) => {
    return __globalMessage("niReply0411");
};
export const niReply0412 = (__ctx = {}) => {
    return __globalMessage("niReply0412");
};
export const niReply0413 = (__ctx = {}) => {
    return __globalMessage("niReply0413");
};
export const niReply0414 = (__ctx = {}) => {
    return __globalMessage("niReply0414");
};
export const niReply0415 = (__ctx = {}) => {
    return __globalMessage("niReply0415");
};
export const niReply0416 = (__ctx = {}) => {
    return __globalMessage("niReply0416");
};
export const niReply0417 = (__ctx = {}) => {
    return __globalMessage("niReply0417");
};
export const niReply0418 = (__ctx = {}) => {
    return __globalMessage("niReply0418");
};
export const niReply0419 = (__ctx = {}) => {
    return __globalMessage("niReply0419");
};
export const niReply0420 = (__ctx = {}) => {
    return __globalMessage("niReply0420");
};
export const niReply0421 = (__ctx = {}) => {
    return __globalMessage("niReply0421");
};
export const niReply0422 = (__ctx = {}) => {
    return __globalMessage("niReply0422");
};
export const niReply0423 = (__ctx = {}) => {
    return __globalMessage("niReply0423");
};
export const niReply0424 = (__ctx = {}) => {
    return __globalMessage("niReply0424");
};
export const niReply0425 = (__ctx = {}) => {
    return __globalMessage("niReply0425");
};
export const niReply0426 = (__ctx = {}) => {
    return __globalMessage("niReply0426");
};
export const niReply0427 = (__ctx = {}) => {
    return __globalMessage("niReply0427");
};
export const niReply0428 = (__ctx = {}) => {
    return __globalMessage("niReply0428");
};
export const niReply0429 = (__ctx = {}) => {
    return __globalMessage("niReply0429");
};
export const niReply0430 = (__ctx = {}) => {
    return __globalMessage("niReply0430");
};
export const niReply0431 = (__ctx = {}) => {
    return __globalMessage("niReply0431");
};
export const niReply0432 = (__ctx = {}) => {
    return __globalMessage("niReply0432");
};
export const niReply0433 = (__ctx = {}) => {
    return __globalMessage("niReply0433");
};
export const niReply0434 = (__ctx = {}) => {
    return __globalMessage("niReply0434");
};
export const niReply0435 = (__ctx = {}) => {
    return __globalMessage("niReply0435");
};
export const niReply0436 = (__ctx = {}) => {
    return __globalMessage("niReply0436");
};
export const niReply0437 = (__ctx = {}) => {
    return __globalMessage("niReply0437");
};
export const niReply0438 = (__ctx = {}) => {
    return __globalMessage("niReply0438");
};
export const niReply0439 = (__ctx = {}) => {
    return __globalMessage("niReply0439");
};
export const niReply0440 = (__ctx = {}) => {
    return __globalMessage("niReply0440");
};
export const niReply0441 = (__ctx = {}) => {
    return __globalMessage("niReply0441");
};
export const niReply0442 = (__ctx = {}) => {
    return __globalMessage("niReply0442");
};
export const niReply0443 = (__ctx = {}) => {
    return __globalMessage("niReply0443");
};
export const niReply0444 = (__ctx = {}) => {
    return __globalMessage("niReply0444");
};
export const niReply0445 = (__ctx = {}) => {
    return __globalMessage("niReply0445");
};
export const niReply0446 = (__ctx = {}) => {
    return __globalMessage("niReply0446");
};
export const niReply0447 = (__ctx = {}) => {
    return __globalMessage("niReply0447");
};
export const niReply0448 = (__ctx = {}) => {
    return __globalMessage("niReply0448", { "valor": (__ctx.e0()) });
};
export const niReply0449 = (__ctx = {}) => {
    return __globalMessage("niReply0449", { "valor": (__ctx.e0()) });
};
export const niReply0450 = (__ctx = {}) => {
    return __globalMessage("niReply0450");
};
export const niReply0451 = (__ctx = {}) => {
    return __globalMessage("niReply0451");
};
export const niReply0452 = (__ctx = {}) => {
    return __globalMessage("niReply0452", { "valor": (__ctx.e0()) });
};
export const niReply0453 = (__ctx = {}) => {
    return __globalMessage("niReply0453");
};
export const niReply0454 = (__ctx = {}) => {
    return __globalMessage("niReply0454");
};
export const niReply0455 = (__ctx = {}) => {
    return __globalMessage("niReply0455");
};
export const niReply0456 = (__ctx = {}) => {
    return __globalMessage("niReply0456");
};
export const niReply0457 = (__ctx = {}) => {
    return __globalMessage("niReply0457", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niReply0458 = (__ctx = {}) => {
    return __globalMessage("niReply0458");
};
export const niReply0459 = (__ctx = {}) => {
    return __globalMessage("niReply0459", { "valor": (__ctx.e0()) });
};
export const niReply0460 = (__ctx = {}) => {
    return __globalMessage("niReply0460");
};
export const niReply0461 = (__ctx = {}) => {
    return __globalMessage("niReply0461");
};
export const niReply0462 = (__ctx = {}) => {
    return __globalMessage("niReply0462");
};
export const niReply0463 = (__ctx = {}) => {
    return __globalMessage("niReply0463", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niReply0464 = (__ctx = {}) => {
    return __globalMessage("niReply0464", { "valor": (__ctx.e0()) });
};
export const niReply0465 = (__ctx = {}) => {
    return __globalMessage("niReply0465");
};
export const niReply0466 = (__ctx = {}) => {
    return __globalMessage("niReply0466");
};
export const niReply0467 = (__ctx = {}) => {
    return __globalMessage("niReply0467", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niReply0468 = (__ctx = {}) => {
    return __globalMessage("niReply0468");
};
export const niReply0469 = (__ctx = {}) => {
    return __globalMessage("niReply0469");
};
export const niReply0470 = (__ctx = {}) => {
    return __globalMessage("niReply0470", { "valor": (__ctx.e0()) });
};
export const niReply0471 = (__ctx = {}) => {
    return __globalMessage("niReply0471");
};
export const niReply0472 = (__ctx = {}) => {
    return __globalMessage("niReply0472", { "valor": (__ctx.e0()) });
};
export const niReply0473 = (__ctx = {}) => {
    return __globalMessage("niReply0473");
};
export const niReply0474 = (__ctx = {}) => {
    return __globalMessage("niReply0474", { "valor": (__ctx.e0()) });
};
export const niReply0475 = (__ctx = {}) => {
    return __globalMessage("niReply0475");
};
export const niReply0476 = (__ctx = {}) => {
    return __globalMessage("niReply0476", { "valor": (__ctx.e0()) });
};
export const niReply0477 = (__ctx = {}) => {
    return __globalMessage("niReply0477", { "valor": (__ctx.e0()) });
};
export const niReply0478 = (__ctx = {}) => {
    return __globalMessage("niReply0478");
};
export const niReply0479 = (__ctx = {}) => {
    return __globalMessage("niReply0479");
};
export const niReply0480 = (__ctx = {}) => {
    return __globalMessage("niReply0480");
};
export const niReply0481 = (__ctx = {}) => {
    return __globalMessage("niReply0481", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()), "valor3": (__ctx.e2()) });
};
export const niReply0482 = (__ctx = {}) => {
    return __globalMessage("niReply0482", { "valor": (__ctx.e0()) });
};
export const niReply0483 = (__ctx = {}) => {
    return __globalMessage("niReply0483");
};
export const niReply0484 = (__ctx = {}) => {
    return __globalMessage("niReply0484", { "valor": (__ctx.e0()) });
};
export const niReply0485 = (__ctx = {}) => {
    return __globalMessage("niReply0485");
};
export const niReply0486 = (__ctx = {}) => {
    return __globalMessage("niReply0486", { "valor": (__ctx.e0()) });
};
export const niReply0487 = (__ctx = {}) => {
    return __globalMessage("niReply0487");
};
export const niReply0488 = (__ctx = {}) => {
    return __globalMessage("niReply0488");
};
export const niReply0489 = (__ctx = {}) => {
    return __globalMessage("niReply0489");
};
export const niReply0490 = (__ctx = {}) => {
    return __globalMessage("niReply0490");
};
export const niReply0491 = (__ctx = {}) => {
    return __globalMessage("niReply0491");
};
export const niReply0492 = (__ctx = {}) => {
    return __globalMessage("niReply0492");
};
export const niReply0493 = (__ctx = {}) => {
    return __globalMessage("niReply0493");
};
export const niReply0494 = (__ctx = {}) => {
    return __globalMessage("niReply0494");
};
export const niReply0495 = (__ctx = {}) => {
    return __globalMessage("niReply0495", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niReply0496 = (__ctx = {}) => {
    return __globalMessage("niReply0496", { "valor": (__ctx.e0()) });
};
export const niReply0497 = (__ctx = {}) => {
    return __globalMessage("niReply0497", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niReply0498 = (__ctx = {}) => {
    return __globalMessage("niReply0498", { "valor": (__ctx.e0()) });
};
export const niReply0499 = (__ctx = {}) => {
    return __globalMessage("niReply0499", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()), "valor3": (__ctx.e2()) });
};
export const niReply0500 = (__ctx = {}) => {
    return __globalMessage("niReply0500", { "valor": (__ctx.e0()) });
};
export const niReply0501 = (__ctx = {}) => {
    return __globalMessage("niReply0501");
};
export const niReply0502 = (__ctx = {}) => {
    return __globalMessage("niReply0502");
};
export const niReply0503 = (__ctx = {}) => {
    return __globalMessage("niReply0503");
};
export const niReply0504 = (__ctx = {}) => {
    return __globalMessage("niReply0504");
};
export const niReply0505 = (__ctx = {}) => {
    return __globalMessage("niReply0505");
};
export const niReply0506 = (__ctx = {}) => {
    return __globalMessage("niReply0506");
};
export const niReply0507 = (__ctx = {}) => {
    return __globalMessage("niReply0507");
};
export const niReply0508 = (__ctx = {}) => {
    return __globalMessage("niReply0508");
};
export const niReply0509 = (__ctx = {}) => {
    return __globalMessage("niReply0509");
};
export const niReply0510 = (__ctx = {}) => {
    return __globalMessage("niReply0510");
};
export const niReply0511 = (__ctx = {}) => {
    return __globalMessage("niReply0511");
};
export const niReply0512 = (__ctx = {}) => {
    return __globalMessage("niReply0512");
};
export const niReply0513 = (__ctx = {}) => {
    return __globalMessage("niReply0513");
};
export const niReply0514 = (__ctx = {}) => {
    return __globalMessage("niReply0514");
};
export const niReply0515 = (__ctx = {}) => {
    return __globalMessage("niReply0515");
};
export const niReply0516 = (__ctx = {}) => {
    return __globalMessage("niReply0516");
};
export const niReply0517 = (__ctx = {}) => {
    return __globalMessage("niReply0517");
};
export const niReply0518 = (__ctx = {}) => {
    return __globalMessage("niReply0518");
};
export const niReply0519 = (__ctx = {}) => {
    return __globalMessage("niReply0519");
};
export const niReply0520 = (__ctx = {}) => {
    return __globalMessage("niReply0520");
};
export const niReply0521 = (__ctx = {}) => {
    return __globalMessage("niReply0521");
};
export const niReply0522 = (__ctx = {}) => {
    return __globalMessage("niReply0522");
};
export const niReply0523 = (__ctx = {}) => {
    return __globalMessage("niReply0523");
};
export const niReply0524 = (__ctx = {}) => {
    return __globalMessage("niReply0524");
};
export const niReply0525 = (__ctx = {}) => {
    return __globalMessage("niReply0525");
};
export const niReply0526 = (__ctx = {}) => {
    return __globalMessage("niReply0526");
};
export const niReply0527 = (__ctx = {}) => {
    return __globalMessage("niReply0527");
};
export const niReply0528 = (__ctx = {}) => {
    return __globalMessage("niReply0528");
};
export const niReply0529 = (__ctx = {}) => {
    return __globalMessage("niReply0529");
};
export const niReply0530 = (__ctx = {}) => {
    return __globalMessage("niReply0530");
};
export const niReply0531 = (__ctx = {}) => {
    return __globalMessage("niReply0531");
};
export const niReply0532 = (__ctx = {}) => {
    return __globalMessage("niReply0532");
};
export const niReply0533 = (__ctx = {}) => {
    return __globalMessage("niReply0533");
};
export const niReply0534 = (__ctx = {}) => {
    return __globalMessage("niReply0534");
};
export const niReply0535 = (__ctx = {}) => {
    return __globalMessage("niReply0535");
};
export const niReply0536 = (__ctx = {}) => {
    return __globalMessage("niReply0536");
};
export const niReply0537 = (__ctx = {}) => {
    return __globalMessage("niReply0537");
};
export const niReply0538 = (__ctx = {}) => {
    return __globalMessage("niReply0538");
};
export const niReply0539 = (__ctx = {}) => {
    return __globalMessage("niReply0539");
};
export const niReply0540 = (__ctx = {}) => {
    return __globalMessage("niReply0540");
};
export const niReply0541 = (__ctx = {}) => {
    return __globalMessage("niReply0541");
};
export const niReply0542 = (__ctx = {}) => {
    return __globalMessage("niReply0542");
};
export const niReply0543 = (__ctx = {}) => {
    return __globalMessage("niReply0543");
};
export const niReply0544 = (__ctx = {}) => {
    return __globalMessage("niReply0544");
};
export const niReply0545 = (__ctx = {}) => {
    return __globalMessage("niReply0545");
};
export const niReply0546 = (__ctx = {}) => {
    return __globalMessage("niReply0546");
};
export const niReply0547 = (__ctx = {}) => {
    return __globalMessage("niReply0547", { "valor": (__ctx.e0()), "prefix": (__ctx.prefix || "") });
};
export const niReply0548 = (__ctx = {}) => {
    return __globalMessage("niReply0548", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niReply0549 = (__ctx = {}) => {
    return __globalMessage("niReply0549");
};
export const niReply0550 = (__ctx = {}) => {
    return __globalMessage("niReply0550");
};
export const niReply0551 = (__ctx = {}) => {
    return __globalMessage("niReply0551", { "prefix": (__ctx.prefix || "") });
};
export const niReply0552 = (__ctx = {}) => {
    return __globalMessage("niReply0552");
};
export const niReply0553 = (__ctx = {}) => {
    return __globalMessage("niReply0553", { "valor": (__ctx.e0()) });
};
export const niReply0554 = (__ctx = {}) => {
    return __globalMessage("niReply0554");
};
export const niReply0555 = (__ctx = {}) => {
    return __globalMessage("niReply0555", { "prefix": (__ctx.prefix || "") });
};
export const niReply0556 = (__ctx = {}) => {
    return __globalMessage("niReply0556");
};
export const niReply0557 = (__ctx = {}) => {
    return __globalMessage("niReply0557");
};
export const niReply0558 = (__ctx = {}) => {
    return __globalMessage("niReply0558");
};
export const niReply0559 = (__ctx = {}) => {
    return __globalMessage("niReply0559");
};
export const niReply0560 = (__ctx = {}) => {
    return __globalMessage("niReply0560");
};
export const niReply0561 = (__ctx = {}) => {
    return __globalMessage("niReply0561", { "valor": (__ctx.e0()) });
};
export const niReply0562 = (__ctx = {}) => {
    return __globalMessage("niReply0562", { "valor": (__ctx.e0()) });
};
export const niReply0563 = (__ctx = {}) => {
    return __globalMessage("niReply0563");
};
export const niReply0564 = (__ctx = {}) => {
    return __globalMessage("niReply0564");
};
export const niReply0565 = (__ctx = {}) => {
    return __globalMessage("niReply0565", { "valor": (__ctx.e0()), "prefix": (__ctx.prefix || "") });
};
export const niReply0566 = (__ctx = {}) => {
    return __globalMessage("niReply0566", { "valor": (__ctx.e0()) });
};
export const niReply0567 = (__ctx = {}) => {
    return __globalMessage("niReply0567");
};
export const niReply0568 = (__ctx = {}) => {
    return __globalMessage("niReply0568");
};
export const niReply0569 = (__ctx = {}) => {
    return __globalMessage("niReply0569", { "valor": (__ctx.e0()) });
};
export const niReply0570 = (__ctx = {}) => {
    return __globalMessage("niReply0570");
};
export const niReply0571 = (__ctx = {}) => {
    return __globalMessage("niReply0571");
};
export const niReply0572 = (__ctx = {}) => {
    return __globalMessage("niReply0572");
};
export const niReply0573 = (__ctx = {}) => {
    return __globalMessage("niReply0573");
};
export const niReply0574 = (__ctx = {}) => {
    return __globalMessage("niReply0574", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()), "valor3": (__ctx.e2()) });
};
export const niReply0575 = (__ctx = {}) => {
    return __globalMessage("niReply0575");
};
export const niReply0576 = (__ctx = {}) => {
    return __globalMessage("niReply0576");
};
export const niReply0577 = (__ctx = {}) => {
    return __globalMessage("niReply0577", { "valor": (__ctx.e0()) });
};
export const niReply0578 = (__ctx = {}) => {
    return __globalMessage("niReply0578");
};
export const niReply0579 = (__ctx = {}) => {
    return __globalMessage("niReply0579");
};
export const niReply0580 = (__ctx = {}) => {
    return __globalMessage("niReply0580");
};
export const niReply0581 = (__ctx = {}) => {
    return __globalMessage("niReply0581");
};
export const niReply0582 = (__ctx = {}) => {
    return __globalMessage("niReply0582");
};
export const niReply0583 = (__ctx = {}) => {
    return __globalMessage("niReply0583");
};
export const niReply0584 = (__ctx = {}) => {
    return __globalMessage("niReply0584");
};
export const niReply0585 = (__ctx = {}) => {
    return __globalMessage("niReply0585", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niReply0586 = (__ctx = {}) => {
    return __globalMessage("niReply0586");
};
export const niReply0587 = (__ctx = {}) => {
    return __globalMessage("niReply0587", { "valor": (__ctx.e0()) });
};
export const niReply0588 = (__ctx = {}) => {
    return __globalMessage("niReply0588");
};
export const niReply0589 = (__ctx = {}) => {
    return __globalMessage("niReply0589", { "valor": (__ctx.e0()), "prefix": (__ctx.prefix || "") });
};
export const niReply0590 = (__ctx = {}) => {
    return __globalMessage("niReply0590", { "valor": (__ctx.e0()) });
};
export const niReply0591 = (__ctx = {}) => {
    return __globalMessage("niReply0591", { "valor": (__ctx.e0()) });
};
export const niReply0592 = (__ctx = {}) => {
    return __globalMessage("niReply0592");
};
export const niReply0593 = (__ctx = {}) => {
    return __globalMessage("niReply0593", { "valor": (__ctx.e0()) });
};
export const niReply0594 = (__ctx = {}) => {
    return __globalMessage("niReply0594", { "valor": (__ctx.e0()) });
};
export const niReply0595 = (__ctx = {}) => {
    return __globalMessage("niReply0595", { "valor": (__ctx.e0()) });
};
export const niReply0596 = (__ctx = {}) => {
    return __globalMessage("niReply0596", { "valor": (__ctx.e0()) });
};
export const niReply0597 = (__ctx = {}) => {
    return __globalMessage("niReply0597");
};
export const niReply0598 = (__ctx = {}) => {
    return __globalMessage("niReply0598");
};
export const niReply0599 = (__ctx = {}) => {
    return __globalMessage("niReply0599");
};
export const niReply0600 = (__ctx = {}) => {
    return __globalMessage("niReply0600");
};
export const niReply0601 = (__ctx = {}) => {
    return __globalMessage("niReply0601", { "valor": (__ctx.e0()) });
};
export const niReply0602 = (__ctx = {}) => {
    return __globalMessage("niReply0602", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niReply0603 = (__ctx = {}) => {
    return __globalMessage("niReply0603", { "prefix": (__ctx.prefix || "") });
};
export const niReply0604 = (__ctx = {}) => {
    return __globalMessage("niReply0604");
};
export const niReply0605 = (__ctx = {}) => {
    return __globalMessage("niReply0605");
};
export const niReply0606 = (__ctx = {}) => {
    return __globalMessage("niReply0606");
};
export const niReply0607 = (__ctx = {}) => {
    return __globalMessage("niReply0607", { "prefix": (__ctx.prefix || "") });
};
export const niReply0608 = (__ctx = {}) => {
    return __globalMessage("niReply0608");
};
export const niReply0609 = (__ctx = {}) => {
    return __globalMessage("niReply0609");
};
export const niReply0610 = (__ctx = {}) => {
    return __globalMessage("niReply0610");
};
export const niReply0611 = (__ctx = {}) => {
    return __globalMessage("niReply0611");
};
export const niReply0612 = (__ctx = {}) => {
    return __globalMessage("niReply0612");
};
export const niReply0613 = (__ctx = {}) => {
    return __globalMessage("niReply0613");
};
export const niReply0614 = (__ctx = {}) => {
    return __globalMessage("niReply0614");
};
export const niReply0615 = (__ctx = {}) => {
    return __globalMessage("niReply0615");
};
export const niReply0616 = (__ctx = {}) => {
    return __globalMessage("niReply0616", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()), "valor3": (__ctx.e2()), "valor4": (__ctx.e3()), "valor5": (__ctx.e4()), "valor6": (__ctx.e5()) });
};
export const niReply0617 = (__ctx = {}) => {
    return __globalMessage("niReply0617", { "valor": (__ctx.e0()) });
};
export const niReply0618 = (__ctx = {}) => {
    return __globalMessage("niReply0618");
};
export const niReply0619 = (__ctx = {}) => {
    return __globalMessage("niReply0619", { "prefix": (__ctx.prefix || '') });
};
export const niReplyToimgReadError = (__ctx = {}) => {
    return __globalMessage("niReplyToimgReadError");
};
export const niReplyToimgSuccess = (__ctx = {}) => {
    return __globalMessage("niReplyToimgSuccess");
};
export const niReply0620 = (__ctx = {}) => {
    return __globalMessage("niReply0620");
};
export const niReply0621 = (__ctx = {}) => {
    return __globalMessage("niReply0621");
};
export const niReply0622 = (__ctx = {}) => {
    return __globalMessage("niReply0622");
};
export const niReply0623 = (__ctx = {}) => {
    return __globalMessage("niReply0623", { "valor": (__ctx.e0()), "prefix": (__ctx.prefix || "") });
};
export const niReply0624 = (__ctx = {}) => {
    return __globalMessage("niReply0624");
};
export const niReply0625 = (__ctx = {}) => {
    return __globalMessage("niReply0625");
};
export const niReply0626 = (__ctx = {}) => {
    return __globalMessage("niReply0626", { "valor": (__ctx.e0()), "prefix": (__ctx.prefix || "") });
};
export const niReply0627 = (__ctx = {}) => {
    return __globalMessage("niReply0627");
};
export const niReply0628 = (__ctx = {}) => {
    return __globalMessage("niReply0628");
};
export const niReply0629 = (__ctx = {}) => {
    return __globalMessage("niReply0629");
};
export const niReply0630 = (__ctx = {}) => {
    return __globalMessage("niReply0630");
};
export const niReply0631 = (__ctx = {}) => {
    return __globalMessage("niReply0631", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()), "valor3": (__ctx.e2()) });
};
export const niReply0632 = (__ctx = {}) => {
    return __globalMessage("niReply0632");
};
export const niReply0633 = (__ctx = {}) => {
    return __globalMessage("niReply0633");
};
export const niReply0634 = (__ctx = {}) => {
    return __globalMessage("niReply0634");
};
export const niReply0635 = (__ctx = {}) => {
    return __globalMessage("niReply0635");
};
export const niReply0636 = (__ctx = {}) => {
    return __globalMessage("niReply0636");
};
export const niReply0637 = (__ctx = {}) => {
    return __globalMessage("niReply0637");
};
export const niReply0638 = (__ctx = {}) => {
    return __globalMessage("niReply0638");
};
export const niReply0639 = (__ctx = {}) => {
    return __globalMessage("niReply0639");
};
export const niReply0640 = (__ctx = {}) => {
    return __globalMessage("niReply0640");
};
export const niReply0641 = (__ctx = {}) => {
    return __globalMessage("niReply0641");
};
export const niReply0642 = (__ctx = {}) => {
    return __globalMessage("niReply0642");
};
export const niReply0643 = (__ctx = {}) => {
    return __globalMessage("niReply0643");
};
export const niReply0644 = (__ctx = {}) => {
    return __globalMessage("niReply0644");
};
export const niReply0645 = (__ctx = {}) => {
    return __globalMessage("niReply0645");
};
export const niReply0646 = (__ctx = {}) => {
    return __globalMessage("niReply0646");
};
export const niReply0647 = (__ctx = {}) => {
    return __globalMessage("niReply0647");
};
export const niReply0648 = (__ctx = {}) => {
    return __globalMessage("niReply0648");
};
export const niReply0649 = (__ctx = {}) => {
    return __globalMessage("niReply0649");
};
export const niReply0650 = (__ctx = {}) => {
    return __globalMessage("niReply0650");
};
export const niReply0651 = (__ctx = {}) => {
    return __globalMessage("niReply0651");
};
export const niReply0652 = (__ctx = {}) => {
    return __globalMessage("niReply0652");
};
export const niReply0653 = (__ctx = {}) => {
    return __globalMessage("niReply0653", { "valor": (__ctx.e0()) });
};
export const niReply0654 = (__ctx = {}) => {
    return __globalMessage("niReply0654");
};
export const niReply0655 = (__ctx = {}) => {
    return __globalMessage("niReply0655");
};
export const niReply0656 = (__ctx = {}) => {
    return __globalMessage("niReply0656");
};
export const niReply0657 = (__ctx = {}) => {
    return __globalMessage("niReply0657", { "valor": (__ctx.e0()) });
};
export const niReply0658 = (__ctx = {}) => {
    return __globalMessage("niReply0658");
};
export const niReply0659 = (__ctx = {}) => {
    return __globalMessage("niReply0659", { "valor": (__ctx.e0()) });
};
export const niReply0660 = (__ctx = {}) => {
    return __globalMessage("niReply0660");
};
export const niReply0661 = (__ctx = {}) => {
    return __globalMessage("niReply0661", { "valor": (__ctx.e0()) });
};
export const niReply0662 = (__ctx = {}) => {
    return __globalMessage("niReply0662", { "valor": (__ctx.e0()) });
};
export const niReply0663 = (__ctx = {}) => {
    return __globalMessage("niReply0663");
};
export const niReply0664 = (__ctx = {}) => {
    return __globalMessage("niReply0664", { "valor": (__ctx.e0()) });
};
export const niReply0665 = (__ctx = {}) => {
    return __globalMessage("niReply0665", { "valor": (__ctx.e0()) });
};
export const niReply0666 = (__ctx = {}) => {
    return __globalMessage("niReply0666", { "valor": (__ctx.e0()) });
};
export const niReply0667 = (__ctx = {}) => {
    return __globalMessage("niReply0667");
};
export const niReply0668 = (__ctx = {}) => {
    return __globalMessage("niReply0668", { "valor": (__ctx.e0()) });
};
export const niReply0669 = (__ctx = {}) => {
    return __globalMessage("niReply0669");
};
export const niReply0670 = (__ctx = {}) => {
    return __globalMessage("niReply0670", { "valor": (__ctx.e0()), "prefix": (__ctx.prefix || "") });
};
export const niReply0671 = (__ctx = {}) => {
    return __globalMessage("niReply0671", { "prefix": (__ctx.prefix || "") });
};
export const niReply0672 = (__ctx = {}) => {
    return __globalMessage("niReply0672");
};
export const niReply0673 = (__ctx = {}) => {
    return __globalMessage("niReply0673", { "prefix": (__ctx.prefix || "") });
};
export const niReply0674 = (__ctx = {}) => {
    return __globalMessage("niReply0674", { "prefix": (__ctx.prefix || "") });
};
export const niReply0675 = (__ctx = {}) => {
    return __globalMessage("niReply0675", { "prefix": (__ctx.prefix || "") });
};
export const niReply0676 = (__ctx = {}) => {
    return __globalMessage("niReply0676");
};
export const niReply0677 = (__ctx = {}) => {
    return __globalMessage("niReply0677", { "prefix": (__ctx.prefix || "") });
};
export const niReply0678 = (__ctx = {}) => {
    return __globalMessage("niReply0678");
};
export const niReply0679 = (__ctx = {}) => {
    return __globalMessage("niReply0679", { "valor": (__ctx.e0()) });
};
export const niReply0680 = (__ctx = {}) => {
    return __globalMessage("niReply0680");
};
export const niReply0681 = (__ctx = {}) => {
    return __globalMessage("niReply0681", { "valor": (__ctx.e0()) });
};
export const niReply0682 = (__ctx = {}) => {
    return __globalMessage("niReply0682", { "valor": (__ctx.e0()) });
};
export const niReply0683 = (__ctx = {}) => {
    return __globalMessage("niReply0683", { "valor": (__ctx.e0()) });
};
export const niReply0684 = (__ctx = {}) => {
    return __globalMessage("niReply0684");
};
export const niReply0685 = (__ctx = {}) => {
    return __globalMessage("niReply0685", { "valor": (__ctx.e0()) });
};
export const niReply0686 = (__ctx = {}) => {
    return __globalMessage("niReply0686", { "valor": (__ctx.e0()) });
};
export const niReply0687 = (__ctx = {}) => {
    return __globalMessage("niReply0687");
};
export const niReply0688 = (__ctx = {}) => {
    return __globalMessage("niReply0688");
};
export const niReply0689 = (__ctx = {}) => {
    return __globalMessage("niReply0689");
};
export const niReply0690 = (__ctx = {}) => {
    return __globalMessage("niReply0690", { "valor": (__ctx.e0()), "prefix": (__ctx.prefix || "") });
};
export const niReply0691 = (__ctx = {}) => {
    return __globalMessage("niReply0691");
};
export const niReply0692 = (__ctx = {}) => {
    return __globalMessage("niReply0692", { "valor": (__ctx.e0()) });
};
export const niReply0693 = (__ctx = {}) => {
    return __globalMessage("niReply0693");
};
export const niReply0694 = (__ctx = {}) => {
    return __globalMessage("niReply0694", { "valor": (__ctx.e0()) });
};
export const niReply0695 = (__ctx = {}) => {
    return __globalMessage("niReply0695");
};
export const niReply0696 = (__ctx = {}) => {
    return __globalMessage("niReply0696", { "valor": (__ctx.e0()) });
};
export const niReply0697 = (__ctx = {}) => {
    return __globalMessage("niReply0697");
};
export const niReply0698 = (__ctx = {}) => {
    return __globalMessage("niReply0698", { "valor": (__ctx.e0()) });
};
export const niReply0699 = (__ctx = {}) => {
    return __globalMessage("niReply0699");
};
export const niReply0700 = (__ctx = {}) => {
    return __globalMessage("niReply0700");
};
export const niReply0701 = (__ctx = {}) => {
    return __globalMessage("niReply0701", { "valor": (__ctx.e0()) });
};
export const niReply0702 = (__ctx = {}) => {
    return __globalMessage("niReply0702");
};
export const niReply0703 = (__ctx = {}) => {
    return __globalMessage("niReply0703");
};
export const niReply0704 = (__ctx = {}) => {
    return __globalMessage("niReply0704");
};
export const niReply0705 = (__ctx = {}) => {
    return __globalMessage("niReply0705", { "valor": (__ctx.e0()) });
};
export const niReply0706 = (__ctx = {}) => {
    return __globalMessage("niReply0706", { "valor": (__ctx.e0()) });
};
export const niReply0707 = (__ctx = {}) => {
    return __globalMessage("niReply0707");
};
export const niReply0708 = (__ctx = {}) => {
    return __globalMessage("niReply0708", { "valor": (__ctx.e0()) });
};
export const niReply0709 = (__ctx = {}) => {
    return __globalMessage("niReply0709");
};
export const niReply0710 = (__ctx = {}) => {
    return __globalMessage("niReply0710", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niReply0711 = (__ctx = {}) => {
    return __globalMessage("niReply0711");
};
export const niReply0712 = (__ctx = {}) => {
    return __globalMessage("niReply0712", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()), "valor3": (__ctx.e2()), "valor4": (__ctx.e3()), "valor5": (__ctx.e4()), "valor6": (__ctx.e5()), "valor7": (__ctx.e6()) });
};
export const niReply0713 = (__ctx = {}) => {
    return __globalMessage("niReply0713");
};
export const niReply0714 = (__ctx = {}) => {
    return __globalMessage("niReply0714", { "valor": (__ctx.e0()) });
};
export const niReply0715 = (__ctx = {}) => {
    return __globalMessage("niReply0715");
};
export const niReply0716 = (__ctx = {}) => {
    return __globalMessage("niReply0716");
};
export const niReply0717 = (__ctx = {}) => {
    return __globalMessage("niReply0717");
};
export const niReply0718 = (__ctx = {}) => {
    return __globalMessage("niReply0718");
};
export const niReply0719 = (__ctx = {}) => {
    return __globalMessage("niReply0719");
};
export const niReply0720 = (__ctx = {}) => {
    return __globalMessage("niReply0720");
};
export const niReply0721 = (__ctx = {}) => {
    return __globalMessage("niReply0721", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()), "valor3": (__ctx.e2()), "valor4": (__ctx.e3()), "valor5": (__ctx.e4()), "valor6": (__ctx.e5()), "valor7": (__ctx.e6()) });
};
export const niReply0722 = (__ctx = {}) => {
    return __globalMessage("niReply0722");
};
export const niReply0723 = (__ctx = {}) => {
    return __globalMessage("niReply0723", { "valor": (__ctx.e0()) });
};
export const niReply0724 = (__ctx = {}) => {
    return __globalMessage("niReply0724");
};
export const niReply0725 = (__ctx = {}) => {
    return __globalMessage("niReply0725");
};
export const niReply0726 = (__ctx = {}) => {
    return __globalMessage("niReply0726");
};
export const niReply0727 = (__ctx = {}) => {
    return __globalMessage("niReply0727", { "valor": (__ctx.e0()) });
};
export const niReply0728 = (__ctx = {}) => {
    return __globalMessage("niReply0728");
};
export const niReply0729 = (__ctx = {}) => {
    return __globalMessage("niReply0729");
};
export const niReply0730 = (__ctx = {}) => {
    return __globalMessage("niReply0730");
};
export const niReply0731 = (__ctx = {}) => {
    return __globalMessage("niReply0731");
};
export const niReply0732 = (__ctx = {}) => {
    return __globalMessage("niReply0732", { "valor": (__ctx.e0()) });
};
export const niReply0733 = (__ctx = {}) => {
    return __globalMessage("niReply0733");
};
export const niReply0734 = (__ctx = {}) => {
    return __globalMessage("niReply0734", { "valor": (__ctx.e0()) });
};
export const niReply0735 = (__ctx = {}) => {
    return __globalMessage("niReply0735");
};
export const niReply0736 = (__ctx = {}) => {
    return __globalMessage("niReply0736", { "valor": (__ctx.e0()) });
};
export const niReply0737 = (__ctx = {}) => {
    return __globalMessage("niReply0737");
};
export const niReply0738 = (__ctx = {}) => {
    return __globalMessage("niReply0738");
};
export const niReply0739 = (__ctx = {}) => {
    return __globalMessage("niReply0739");
};
export const niReply0740 = (__ctx = {}) => {
    return __globalMessage("niReply0740");
};
export const niReply0741 = (__ctx = {}) => {
    return __globalMessage("niReply0741");
};
export const niReply0742 = (__ctx = {}) => {
    return __globalMessage("niReply0742");
};
export const niReply0743 = (__ctx = {}) => {
    return __globalMessage("niReply0743");
};
export const niReply0744 = (__ctx = {}) => {
    return __globalMessage("niReply0744");
};
export const niReply0745 = (__ctx = {}) => {
    return __globalMessage("niReply0745");
};
export const niReply0746 = (__ctx = {}) => {
    return __globalMessage("niReply0746");
};
export const niReply0747 = (__ctx = {}) => {
    return __globalMessage("niReply0747");
};
export const niReply0748 = (__ctx = {}) => {
    return __globalMessage("niReply0748");
};
export const niReply0749 = (__ctx = {}) => {
    return __globalMessage("niReply0749");
};
export const niReply0750 = (__ctx = {}) => {
    return __globalMessage("niReply0750");
};
export const niReply0751 = (__ctx = {}) => {
    return __globalMessage("niReply0751");
};
export const niReply0752 = (__ctx = {}) => {
    return __globalMessage("niReply0752");
};
export const niReply0753 = (__ctx = {}) => {
    return __globalMessage("niReply0753");
};
export const niReply0754 = (__ctx = {}) => {
    return __globalMessage("niReply0754");
};
export const niReply0755 = (__ctx = {}) => {
    return __globalMessage("niReply0755");
};
export const niReply0756 = (__ctx = {}) => {
    return __globalMessage("niReply0756");
};
export const niReply0757 = (__ctx = {}) => {
    return __globalMessage("niReply0757");
};
export const niReply0758 = (__ctx = {}) => {
    return __globalMessage("niReply0758");
};
export const niReply0759 = (__ctx = {}) => {
    return __globalMessage("niReply0759");
};
export const niReply0760 = (__ctx = {}) => {
    return __globalMessage("niReply0760");
};
export const niReply0761 = (__ctx = {}) => {
    return __globalMessage("niReply0761");
};
export const niReply0762 = (__ctx = {}) => {
    return __globalMessage("niReply0762", { "valor": (__ctx.e0()) });
};
export const niReply0763 = (__ctx = {}) => {
    return __globalMessage("niReply0763");
};
export const niReply0764 = (__ctx = {}) => {
    return __globalMessage("niReply0764");
};
export const niReply0765 = (__ctx = {}) => {
    return __globalMessage("niReply0765");
};
export const niReply0766 = (__ctx = {}) => {
    return __globalMessage("niReply0766");
};
export const niReply0767 = (__ctx = {}) => {
    return __globalMessage("niReply0767");
};
export const niReply0768 = (__ctx = {}) => {
    return __globalMessage("niReply0768");
};
export const niReply0769 = (__ctx = {}) => {
    return __globalMessage("niReply0769");
};
export const niReply0770 = (__ctx = {}) => {
    return __globalMessage("niReply0770");
};
export const niReply0771 = (__ctx = {}) => {
    return __globalMessage("niReply0771");
};
export const niReply0772 = (__ctx = {}) => {
    return __globalMessage("niReply0772");
};
export const niReply0773 = (__ctx = {}) => {
    return __globalMessage("niReply0773");
};
export const niReply0774 = (__ctx = {}) => {
    return __globalMessage("niReply0774");
};
export const niReply0775 = (__ctx = {}) => {
    return __globalMessage("niReply0775");
};
export const niReply0776 = (__ctx = {}) => {
    return __globalMessage("niReply0776", { "valor": (__ctx.e0()) });
};
export const niReply0777 = (__ctx = {}) => {
    return __globalMessage("niReply0777");
};
export const niReply0778 = (__ctx = {}) => {
    return __globalMessage("niReply0778");
};
export const niReply0779 = (__ctx = {}) => {
    return __globalMessage("niReply0779");
};
export const niReply0780 = (__ctx = {}) => {
    return __globalMessage("niReply0780");
};
export const niReply0781 = (__ctx = {}) => {
    return __globalMessage("niReply0781");
};
export const niReply0782 = (__ctx = {}) => {
    return __globalMessage("niReply0782");
};
export const niReply0783 = (__ctx = {}) => {
    return __globalMessage("niReply0783", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()), "valor3": (__ctx.e2()) });
};
export const niReply0784 = (__ctx = {}) => {
    return __globalMessage("niReply0784", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()), "valor3": (__ctx.e2()) });
};
export const niReply0785 = (__ctx = {}) => {
    return __globalMessage("niReply0785", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()), "valor3": (__ctx.e2()), "valor4": (__ctx.e3()) });
};
export const niReply0786 = (__ctx = {}) => {
    return __globalMessage("niReply0786");
};
export const niReply0787 = (__ctx = {}) => {
    return __globalMessage("niReply0787");
};
export const niReply0788 = (__ctx = {}) => {
    return __globalMessage("niReply0788");
};
export const niReply0789 = (__ctx = {}) => {
    return __globalMessage("niReply0789");
};
export const niReply0790 = (__ctx = {}) => {
    return __globalMessage("niReply0790", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niReply0791 = (__ctx = {}) => {
    return __globalMessage("niReply0791");
};
export const niReply0792 = (__ctx = {}) => {
    return __globalMessage("niReply0792");
};
export const niReply0793 = (__ctx = {}) => {
    return __globalMessage("niReply0793");
};
export const niReply0794 = (__ctx = {}) => {
    return __globalMessage("niReply0794");
};
export const niReply0795 = (__ctx = {}) => {
    return __globalMessage("niReply0795");
};
export const niReply0796 = (__ctx = {}) => {
    return __globalMessage("niReply0796");
};
export const niReply0797 = (__ctx = {}) => {
    return __globalMessage("niReply0797");
};
export const niReply0798 = (__ctx = {}) => {
    return __globalMessage("niReply0798");
};
export const niReply0799 = (__ctx = {}) => {
    return __globalMessage("niReply0799");
};
export const niReply0800 = (__ctx = {}) => {
    return __globalMessage("niReply0800");
};
export const niReply0801 = (__ctx = {}) => {
    return __globalMessage("niReply0801");
};
export const niReply0802 = (__ctx = {}) => {
    return __globalMessage("niReply0802", { "valor": (__ctx.e0()), "prefix": (__ctx.prefix || "") });
};
export const niReply0803 = (__ctx = {}) => {
    return __globalMessage("niReply0803", { "prefix": (__ctx.prefix || "") });
};
export const niReply0804 = (__ctx = {}) => {
    return __globalMessage("niReply0804", { "valor": (__ctx.e0()), "prefix": (__ctx.prefix || "") });
};
export const niReply0805 = (__ctx = {}) => {
    return __globalMessage("niReply0805", { "valor": (__ctx.e0()), "prefix": (__ctx.prefix || "") });
};
export const niReply0806 = (__ctx = {}) => {
    return __globalMessage("niReply0806", { "prefix": (__ctx.prefix || "") });
};
export const niReply0807 = (__ctx = {}) => {
    return __globalMessage("niReply0807", { "valor": (__ctx.e0()), "prefix": (__ctx.prefix || "") });
};
export const niReply0808 = (__ctx = {}) => {
    return __globalMessage("niReply0808", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()), "valor3": (__ctx.e2()), "prefix": (__ctx.prefix || "") });
};
export const niReply0809 = (__ctx = {}) => {
    return __globalMessage("niReply0809");
};
export const niReply0810 = (__ctx = {}) => {
    return __globalMessage("niReply0810", { "valor": (__ctx.e0()) });
};
export const niReply0811 = (__ctx = {}) => {
    return __globalMessage("niReply0811", { "valor": (__ctx.e0()) });
};
export const niReply0812 = (__ctx = {}) => {
    return __globalMessage("niReply0812");
};
export const niReply0813 = (__ctx = {}) => {
    return __globalMessage("niReply0813");
};
export const niReply0814 = (__ctx = {}) => {
    return __globalMessage("niReply0814");
};

export const addmsgSucesso = ({ alvoTxt, adicionados = [], invalidos = [] } = {}) => {
    let resp = __globalMessage("addmsgSucesso__texto1", { "valor": (alvoTxt || 'usuario') });
    if (Array.isArray(adicionados) && adicionados.length)
        resp += __globalMessage("addmsgSucesso__texto2", { "valor": (adicionados.join(', ')) });
    if (Array.isArray(invalidos) && invalidos.length)
        resp += __globalMessage("addmsgSucesso__texto3", { "valor": (invalidos.join(', ')) });
    return resp;
};
export const niReply0815 = (__ctx = {}) => {
    return __globalMessage("niReply0815");
};
export const niReply0816 = (__ctx = {}) => {
    return __globalMessage("niReply0816");
};
export const niReply0817 = (__ctx = {}) => {
    return __globalMessage("niReply0817", { "valor": (__ctx.e0()) });
};
export const niReply0818 = (__ctx = {}) => {
    return __globalMessage("niReply0818");
};
export const niReply0819 = (__ctx = {}) => {
    return __globalMessage("niReply0819", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niReply0820 = (__ctx = {}) => {
    return __globalMessage("niReply0820");
};
export const niReply0821 = (__ctx = {}) => {
    return __globalMessage("niReply0821");
};
export const niReply0822 = (__ctx = {}) => {
    return __globalMessage("niReply0822");
};
export const niReply0823 = (__ctx = {}) => {
    return __globalMessage("niReply0823");
};
export const niReply0824 = (__ctx = {}) => {
    return __globalMessage("niReply0824");
};
export const niReply0825 = (__ctx = {}) => {
    return __globalMessage("niReply0825");
};
export const niReply0826 = (__ctx = {}) => {
    return __globalMessage("niReply0826");
};
export const niReply0827 = (__ctx = {}) => {
    return __globalMessage("niReply0827");
};
export const niReply0828 = (__ctx = {}) => {
    return __globalMessage("niReply0828");
};
export const niReply0829 = (__ctx = {}) => {
    return __globalMessage("niReply0829");
};
export const niReply0830 = (__ctx = {}) => {
    return __globalMessage("niReply0830");
};
export const niReply0831 = (__ctx = {}) => {
    return __globalMessage("niReply0831");
};
export const niReply0832 = (__ctx = {}) => {
    return __globalMessage("niReply0832");
};
export const niReply0833 = (__ctx = {}) => {
    return __globalMessage("niReply0833");
};
export const niReply0834 = (__ctx = {}) => {
    return __globalMessage("niReply0834");
};
export const niReply0835 = (__ctx = {}) => {
    return __globalMessage("niReply0835", { "valor": (__ctx.e0()) });
};
export const niReply0836 = (__ctx = {}) => {
    return __globalMessage("niReply0836");
};
export const niReply0837 = (__ctx = {}) => {
    return __globalMessage("niReply0837");
};
export const niReply0838 = (__ctx = {}) => {
    return __globalMessage("niReply0838");
};
export const niReply0839 = (__ctx = {}) => {
    return __globalMessage("niReply0839");
};
export const niReply0840 = (__ctx = {}) => {
    return __globalMessage("niReply0840");
};
export const niReply0841 = (__ctx = {}) => {
    return __globalMessage("niReply0841");
};
export const niReply0842 = (__ctx = {}) => {
    return __globalMessage("niReply0842");
};
export const niReply0843 = (__ctx = {}) => {
    return __globalMessage("niReply0843");
};
export const niReply0844 = (__ctx = {}) => {
    return __globalMessage("niReply0844");
};
export const niReply0845 = (__ctx = {}) => {
    return __globalMessage("niReply0845");
};
export const niReply0846 = (__ctx = {}) => {
    return __globalMessage("niReply0846", { "valor": (__ctx.e0?.() || '') });
};
export const niReply0847 = (__ctx = {}) => {
    return __globalMessage("niReply0847");
};
export const niReply0848 = (__ctx = {}) => {
    return __globalMessage("niReply0848", { "valor": (__ctx.e0?.() || '') });
};
export const niReply0849 = (__ctx = {}) => {
    return __globalMessage("niReply0849");
};
export const niReply0850 = (__ctx = {}) => {
    return __globalMessage("niReply0850");
};
export const niReply0851 = (__ctx = {}) => {
    return __globalMessage("niReply0851", { "valor": (__ctx.e0?.() || '') });
};
export const niReply0852 = (__ctx = {}) => {
    return __globalMessage("niReply0852", { "valor": (__ctx.e0?.() || '') });
};
export const niReply0853 = (__ctx = {}) => {
    return __globalMessage("niReply0853");
};
export const niReply0854 = (__ctx = {}) => {
    return __globalMessage("niReply0854");
};
export const niReply0855 = (__ctx = {}) => {
    return __globalMessage("niReply0855");
};
export const niReply0856 = (__ctx = {}) => {
    return __globalMessage("niReply0856");
};
export const niReply0857 = (__ctx = {}) => {
    return __globalMessage("niReply0857", { "prefix": (__ctx.prefix || __ctx.e0?.() || '') });
};
export const niReply0858 = (__ctx = {}) => {
    return __globalMessage("niReply0858", { "valor": (__ctx.e0?.() || '0'), "valor2": (__ctx.e1?.() || '0') });
};
export const niReply0859 = (__ctx = {}) => {
    return __globalMessage("niReply0859", { "valor": (__ctx.e0?.() || '') });
};
export const niReply0860 = (__ctx = {}) => {
    return __globalMessage("niReply0860", { "valor": (__ctx.e0?.() || '') });
};
export const niReply0861 = (__ctx = {}) => {
    return __globalMessage("niReply0861");
};
export const niReply0862 = (__ctx = {}) => {
    return __globalMessage("niReply0862", { "valor": (__ctx.e0?.() || '') });
};
export const niReply0863 = (__ctx = {}) => {
    return __globalMessage("niReply0863");
};
export const niReply0864 = (__ctx = {}) => {
    return __globalMessage("niReply0864", { "valor": (__ctx.e0?.() || '') });
};
export const niReply0865 = (__ctx = {}) => {
    return __globalMessage("niReply0865");
};
export const niReply0866 = (__ctx = {}) => {
    return __globalMessage("niReply0866");
};
export const niReply0867 = (__ctx = {}) => {
    return __globalMessage("niReply0867", { "valor": (__ctx.e0?.() || '50') });
};
export const niReply0868 = (__ctx = {}) => {
    return __globalMessage("niReply0868", { "valor": (__ctx.e0?.() || '') });
};
export const niReply0869 = (__ctx = {}) => {
    return __globalMessage("niReply0869");
};
export const niReply0870 = (__ctx = {}) => {
    return __globalMessage("niReply0870", { "valor": (__ctx.e0?.() || '') });
};
export const niReply0871 = (__ctx = {}) => {
    return __globalMessage("niReply0871", { "valor": (__ctx.e0?.() || '') });
};
export const niReply0872 = (__ctx = {}) => {
    return __globalMessage("niReply0872", { "valor": (__ctx.e0?.() || '') });
};
export const niReply0873 = (__ctx = {}) => {
    return __globalMessage("niReply0873");
};
export const niReply0874 = (__ctx = {}) => {
    return __globalMessage("niReply0874", { "valor": (__ctx.e0?.() || '0') });
};
export const niReply0875 = (__ctx = {}) => {
    return __globalMessage("niReply0875", { "valor": (__ctx.e0?.() || '') });
};
export const niReply0876 = (__ctx = {}) => {
    return __globalMessage("niReply0876");
};
export const niReply0877 = (__ctx = {}) => {
    return __globalMessage("niReply0877");
};
export const niReply0878 = (__ctx = {}) => {
    return __globalMessage("niReply0878");
};
export const niReply0879 = (__ctx = {}) => {
    return __globalMessage("niReply0879");
};
export const niReply0880 = (__ctx = {}) => {
    return __globalMessage("niReply0880");
};
export const niReply0881 = (__ctx = {}) => {
    return __globalMessage("niReply0881");
};
export const niReply0882 = (__ctx = {}) => {
    return __globalMessage("niReply0882");
};
export const niReply0883 = (__ctx = {}) => {
    return __globalMessage("niReply0883", { "valor": (__ctx.e0?.() || '') });
};
export const niReply0884 = (__ctx = {}) => {
    return __globalMessage("niReply0884");
};
export const niReply0885 = (__ctx = {}) => {
    return __globalMessage("niReply0885", { "valor": (__ctx.e0?.() || '100') });
};
export const niReply0886 = (__ctx = {}) => {
    return __globalMessage("niReply0886", { "valor": (__ctx.e0?.() || '') });
};
export const niReply0887 = (__ctx = {}) => {
    return __globalMessage("niReply0887");
};
export const niReply0888 = (__ctx = {}) => {
    return __globalMessage("niReply0888", { "valor": (__ctx.e0?.() || '150') });
};
export const niReply0889 = (__ctx = {}) => {
    return __globalMessage("niReply0889", { "valor": (__ctx.e0?.() || '') });
};
export const niReply0890 = (__ctx = {}) => {
    return __globalMessage("niReply0890");
};
export const niReply0891 = (__ctx = {}) => {
    return __globalMessage("niReply0891");
};
export const niReply0892 = (__ctx = {}) => {
    return __globalMessage("niReply0892");
};
export const niReply0893 = (__ctx = {}) => {
    return __globalMessage("niReply0893");
};
export const niReply0894 = (__ctx = {}) => {
    return __globalMessage("niReply0894", { "valor": (__ctx.e0?.() || '') });
};
export const niReply0895 = (__ctx = {}) => {
    return __globalMessage("niReply0895", { "valor": (__ctx.e0?.() || 'alvo') });
};
export const niReply0896 = (__ctx = {}) => {
    return __globalMessage("niReply0896");
};
export const niReply0897 = (__ctx = {}) => {
    return __globalMessage("niReply0897", { "valor": (__ctx.e0?.() || '') });
};
export const niReply0898 = (__ctx = {}) => {
    return __globalMessage("niReply0898");
};
export const niReply0899 = (__ctx = {}) => {
    return __globalMessage("niReply0899", { "valor": (__ctx.e0?.() || '75') });
};
export const niReply0900 = (__ctx = {}) => {
    return __globalMessage("niReply0900", { "valor": (__ctx.e0?.() || '') });
};
export const niReply0901 = (__ctx = {}) => {
    return __globalMessage("niReply0901");
};
export const niReply0902 = (__ctx = {}) => {
    return __globalMessage("niReply0902", { "valor": (__ctx.e0?.() || '') });
};
export const niReply0903 = (__ctx = {}) => {
    return __globalMessage("niReply0903", { "valor": (__ctx.e0?.() || '') });
};
export const niReply0904 = (__ctx = {}) => {
    return __globalMessage("niReply0904");
};
export const niReply0905 = (__ctx = {}) => {
    return __globalMessage("niReply0905", { "valor": (__ctx.e0?.() || '') });
};
export const niReply0906 = (__ctx = {}) => {
    return __globalMessage("niReply0906", { "valor": (__ctx.e0?.() || '') });
};
export const niReply0907 = (__ctx = {}) => {
    return __globalMessage("niReply0907");
};
export const niReply0908 = (__ctx = {}) => {
    return __globalMessage("niReply0908", { "valor": (__ctx.e0?.() || '') });
};
export const niReply0909 = (__ctx = {}) => {
    return __globalMessage("niReply0909");
};
export const niReply0910 = (__ctx = {}) => {
    return __globalMessage("niReply0910", { "valor": (__ctx.e0?.() || '') });
};
export const niReply0911 = (__ctx = {}) => {
    return __globalMessage("niReply0911");
};
export const niReply0912 = (__ctx = {}) => {
    return __globalMessage("niReply0912", { "valor": (__ctx.e0?.() || ''), "valor2": (__ctx.e1?.() || '0') });
};
export const niReply0913 = (__ctx = {}) => {
    return __globalMessage("niReply0913", { "prefix": (__ctx.prefix || '') });
};
export const niReply0914 = (__ctx = {}) => {
    return __globalMessage("niReply0914", { "valor": (__ctx.e0?.() || ''), "valor2": (__ctx.e1?.() || '0'), "valor3": (__ctx.e2?.() || '0') });
};
export const niReply0915 = (__ctx = {}) => {
    return __globalMessage("niReply0915");
};
export const niReply0916 = (__ctx = {}) => {
    return __globalMessage("niReply0916", { "valor": (__ctx.e0?.() || '') });
};
export const niReply0917 = (__ctx = {}) => {
    return __globalMessage("niReply0917");
};
export const niReply0918 = (__ctx = {}) => {
    return __globalMessage("niReply0918", { "valor": (__ctx.e0()) });
};
export const niReply0919 = (__ctx = {}) => {
    return __globalMessage("niReply0919", { "valor": (__ctx.e0()) });
};
export const niReply0920 = (__ctx = {}) => {
    return __globalMessage("niReply0920");
};
export const niReply0921 = (__ctx = {}) => {
    return __globalMessage("niReply0921", { "valor": (__ctx.e0()) });
};
export const niReply0922 = (__ctx = {}) => {
    return __globalMessage("niReply0922", { "valor": (__ctx.e0()) });
};
export const niReply0923 = (__ctx = {}) => {
    return __globalMessage("niReply0923", { "valor": (__ctx.e0()) });
};
export const niReply0924 = (__ctx = {}) => {
    return __globalMessage("niReply0924", { "valor": (__ctx.e0()) });
};
export const niReply0925 = (__ctx = {}) => {
    return __globalMessage("niReply0925");
};
export const niReply0926 = (__ctx = {}) => {
    return __globalMessage("niReply0926", { "valor": (__ctx.e0()) });
};
export const niReply0927 = (__ctx = {}) => {
    return __globalMessage("niReply0927", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niReply0928 = (__ctx = {}) => {
    return __globalMessage("niReply0928", { "valor": (__ctx.e0()) });
};
export const niReply0929 = (__ctx = {}) => {
    return __globalMessage("niReply0929");
};
export const niReply0930 = (__ctx = {}) => {
    return __globalMessage("niReply0930", { "valor": (__ctx.e0()) });
};
export const niReply0931 = (__ctx = {}) => {
    return __globalMessage("niReply0931", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niReply0932 = (__ctx = {}) => {
    return __globalMessage("niReply0932", { "valor": (__ctx.e0()) });
};
export const niReply0933 = (__ctx = {}) => {
    return __globalMessage("niReply0933");
};
export const niReply0934 = (__ctx = {}) => {
    return __globalMessage("niReply0934", { "valor": (__ctx.e0()) });
};
export const niReply0935 = (__ctx = {}) => {
    return __globalMessage("niReply0935");
};
export const niReply0936 = (__ctx = {}) => {
    return __globalMessage("niReply0936");
};
export const niReply0937 = (__ctx = {}) => {
    return __globalMessage("niReply0937", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niReply0938 = (__ctx = {}) => {
    return __globalMessage("niReply0938", { "valor": (__ctx.e0()) });
};
export const niReply0939 = (__ctx = {}) => {
    return __globalMessage("niReply0939");
};
export const niReply0940 = (__ctx = {}) => {
    return __globalMessage("niReply0940");
};
export const niReply0941 = (__ctx = {}) => {
    return __globalMessage("niReply0941", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niReply0942 = (__ctx = {}) => {
    return __globalMessage("niReply0942", { "valor": (__ctx.e0()) });
};
export const niReply0943 = (__ctx = {}) => {
    return __globalMessage("niReply0943");
};
export const niReply0944 = (__ctx = {}) => {
    return __globalMessage("niReply0944", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niReply0945 = (__ctx = {}) => {
    return __globalMessage("niReply0945", { "valor": (__ctx.e0()) });
};
export const niReply0946 = (__ctx = {}) => {
    return __globalMessage("niReply0946");
};
export const niReply0947 = (__ctx = {}) => {
    return __globalMessage("niReply0947");
};
export const niReply0948 = (__ctx = {}) => {
    return __globalMessage("niReply0948", { "prefix": (__ctx.prefix || "") });
};
export const niReply0949 = (__ctx = {}) => {
    return __globalMessage("niReply0949", { "valor": (__ctx.e0()) });
};
export const niReply0950 = (__ctx = {}) => {
    return __globalMessage("niReply0950");
};
export const niReply0951 = (__ctx = {}) => {
    return __globalMessage("niReply0951");
};
export const niReply0952 = (__ctx = {}) => {
    return __globalMessage("niReply0952");
};
export const niReply0953 = (__ctx = {}) => {
    return __globalMessage("niReply0953");
};
export const niReply0954 = (__ctx = {}) => {
    return __globalMessage("niReply0954");
};
export const niReply0955 = (__ctx = {}) => {
    return __globalMessage("niReply0955", { "valor": (__ctx.e0()) });
};
export const niReply0956 = (__ctx = {}) => {
    return __globalMessage("niReply0956");
};
export const niReply0957 = (__ctx = {}) => {
    return __globalMessage("niReply0957", { "valor": (__ctx.e0()) });
};
export const niReply0958 = (__ctx = {}) => {
    return __globalMessage("niReply0958");
};
export const niReply0959 = (__ctx = {}) => {
    return __globalMessage("niReply0959");
};
export const niReply0960 = (__ctx = {}) => {
    return __globalMessage("niReply0960");
};
export const niReply0961 = (__ctx = {}) => {
    return __globalMessage("niReply0961");
};
export const niReply0962 = (__ctx = {}) => {
    return __globalMessage("niReply0962", { "valor": (__ctx.e0()) });
};
export const niReply0963 = (__ctx = {}) => {
    return __globalMessage("niReply0963", { "valor": (__ctx.e0()) });
};
export const niReply0964 = (__ctx = {}) => {
    return __globalMessage("niReply0964");
};
export const niReply0965 = (__ctx = {}) => {
    return __globalMessage("niReply0965");
};
export const niReply0966 = (__ctx = {}) => {
    return __globalMessage("niReply0966");
};
export const niReply0967 = (__ctx = {}) => {
    return __globalMessage("niReply0967", { "valor": (__ctx.e0()) });
};
export const niReply0968 = (__ctx = {}) => {
    return __globalMessage("niReply0968");
};
export const niReply0969 = (__ctx = {}) => {
    return __globalMessage("niReply0969", { "valor": (__ctx.e0()) });
};
export const niReply0970 = (__ctx = {}) => {
    return __globalMessage("niReply0970", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niReply0971 = (__ctx = {}) => {
    return __globalMessage("niReply0971", { "valor": (__ctx.e0()) });
};
export const niReply0972 = (__ctx = {}) => {
    return __globalMessage("niReply0972");
};
export const niReply0973 = (__ctx = {}) => {
    return __globalMessage("niReply0973", { "valor": (__ctx.e0()) });
};
export const niReply0974 = (__ctx = {}) => {
    return __globalMessage("niReply0974", { "valor": (__ctx.e0()) });
};
export const niReply0975 = (__ctx = {}) => {
    return __globalMessage("niReply0975");
};
export const niReply0976 = (__ctx = {}) => {
    return __globalMessage("niReply0976", { "valor": (__ctx.e0()) });
};
export const niReply0977 = (__ctx = {}) => {
    return __globalMessage("niReply0977", { "valor": (__ctx.e0()) });
};
export const niReply0978 = (__ctx = {}) => {
    return __globalMessage("niReply0978");
};
export const niReply0979 = (__ctx = {}) => {
    return __globalMessage("niReply0979");
};
export const niReply0980 = (__ctx = {}) => {
    return __globalMessage("niReply0980");
};
export const niReply0981 = (__ctx = {}) => {
    return __globalMessage("niReply0981", { "valor": (__ctx.e0()), "prefix": (__ctx.prefix || "") });
};
export const niReply0982 = (__ctx = {}) => {
    return __globalMessage("niReply0982", { "valor": (__ctx.e0()) });
};
export const niReply0983 = (__ctx = {}) => {
    return __globalMessage("niReply0983", { "valor": (__ctx.e0()) });
};
export const niReply0984 = (__ctx = {}) => {
    return __globalMessage("niReply0984", { "valor": (__ctx.e0()) });
};
export const niReply0985 = (__ctx = {}) => {
    return __globalMessage("niReply0985", { "valor": (__ctx.e0()) });
};
export const niReply0986 = (__ctx = {}) => {
    return __globalMessage("niReply0986", { "valor": (__ctx.e0()) });
};
export const niReply0987 = (__ctx = {}) => {
    return __globalMessage("niReply0987");
};
export const niReply0988 = (__ctx = {}) => {
    return __globalMessage("niReply0988", { "valor": (__ctx.e0()), "prefix": (__ctx.prefix || "") });
};
export const niReply0989 = (__ctx = {}) => {
    return __globalMessage("niReply0989", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niReply0990 = (__ctx = {}) => {
    return __globalMessage("niReply0990", { "valor": (__ctx.e0()) });
};
export const niReply0991 = (__ctx = {}) => {
    return __globalMessage("niReply0991", { "valor": (__ctx.e0()) });
};
export const niReply0992 = (__ctx = {}) => {
    return __globalMessage("niReply0992", { "valor": (__ctx.e0()), "prefix": (__ctx.prefix || "") });
};
export const niReply0993 = (__ctx = {}) => {
    return __globalMessage("niReply0993");
};
export const niReply0994 = (__ctx = {}) => {
    return __globalMessage("niReply0994");
};
export const niReply0995 = (__ctx = {}) => {
    return __globalMessage("niReply0995", { "valor": (__ctx.e0()) });
};
export const niReply0996 = (__ctx = {}) => {
    return __globalMessage("niReply0996", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niReply0997 = (__ctx = {}) => {
    return __globalMessage("niReply0997", { "valor": (__ctx.e0()) });
};
export const niReply0998 = (__ctx = {}) => {
    return __globalMessage("niReply0998");
};
export const niReply0999 = (__ctx = {}) => {
    return __globalMessage("niReply0999", { "valor": (__ctx.e0()), "prefix": (__ctx.prefix || "") });
};
export const niReply1000 = (__ctx = {}) => {
    return __globalMessage("niReply1000", { "valor": (__ctx.e0()) });
};
export const niReply1001 = (__ctx = {}) => {
    return __globalMessage("niReply1001", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niReply1002 = (__ctx = {}) => {
    return __globalMessage("niReply1002", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()), "valor3": (__ctx.e2()) });
};
export const niReply1003 = (__ctx = {}) => {
    return __globalMessage("niReply1003", { "valor": (__ctx.e0()) });
};
export const niReply1004 = (__ctx = {}) => {
    return __globalMessage("niReply1004");
};
export const niReply1005 = (__ctx = {}) => {
    return __globalMessage("niReply1005", { "valor": (__ctx.e0()), "prefix": (__ctx.prefix || "") });
};
export const niReply1006 = (__ctx = {}) => {
    return __globalMessage("niReply1006", { "valor": (__ctx.e0()) });
};
export const niReply1007 = (__ctx = {}) => {
    return __globalMessage("niReply1007", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niReply1008 = (__ctx = {}) => {
    return __globalMessage("niReply1008", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()), "valor3": (__ctx.e2()) });
};
export const niReply1009 = (__ctx = {}) => {
    return __globalMessage("niReply1009", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()), "valor3": (__ctx.e2()) });
};
export const niReply1010 = (__ctx = {}) => {
    return __globalMessage("niReply1010");
};
export const niReply1011 = (__ctx = {}) => {
    return __globalMessage("niReply1011");
};
export const niReply1012 = (__ctx = {}) => {
    return __globalMessage("niReply1012", { "valor": (__ctx.e0()) });
};
export const niReply1013 = (__ctx = {}) => {
    return __globalMessage("niReply1013");
};
export const niReply1014 = (__ctx = {}) => {
    return __globalMessage("niReply1014", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niReply1015 = (__ctx = {}) => {
    return __globalMessage("niReply1015", { "prefix": (__ctx.prefix || "") });
};
export const niReply1016 = (__ctx = {}) => {
    return __globalMessage("niReply1016", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()), "valor3": (__ctx.e2()) });
};
export const niReply1017 = (__ctx = {}) => {
    return __globalMessage("niReply1017");
};
export const niReply1018 = (__ctx = {}) => {
    return __globalMessage("niReply1018", { "valor": (__ctx.e0()) });
};
export const niReply1019 = (__ctx = {}) => {
    return __globalMessage("niReply1019");
};
export const niReply1020 = (__ctx = {}) => {
    return __globalMessage("niReply1020");
};
export const niReply1021 = (__ctx = {}) => {
    return __globalMessage("niReply1021", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niReply1022 = (__ctx = {}) => {
    return __globalMessage("niReply1022", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niReply1023 = (__ctx = {}) => {
    return __globalMessage("niReply1023", { "valor": (__ctx.e0()) });
};
export const niReply1024 = (__ctx = {}) => {
    return __globalMessage("niReply1024");
};
export const niReply1025 = (__ctx = {}) => {
    return __globalMessage("niReply1025", { "valor": (__ctx.e0()) });
};
export const niReply1026 = (__ctx = {}) => {
    return __globalMessage("niReply1026");
};
export const niReply1027 = (__ctx = {}) => {
    return __globalMessage("niReply1027", { "valor": (__ctx.e0()) });
};
export const niReply1028 = (__ctx = {}) => {
    return __globalMessage("niReply1028");
};
export const niReply1029 = (__ctx = {}) => {
    return __globalMessage("niReply1029", { "valor": (__ctx.e0()) });
};
export const niReply1030 = (__ctx = {}) => {
    return __globalMessage("niReply1030");
};
export const niReply1031 = (__ctx = {}) => {
    return __globalMessage("niReply1031", { "valor": (__ctx.e0()) });
};
export const niReply1032 = (__ctx = {}) => {
    return __globalMessage("niReply1032", { "valor": (__ctx.e0()) });
};
export const niReply1033 = (__ctx = {}) => {
    return __globalMessage("niReply1033", { "valor": (__ctx.e0()) });
};
export const niReply1034 = (__ctx = {}) => {
    return __globalMessage("niReply1034");
};
export const niReply1035 = (__ctx = {}) => {
    return __globalMessage("niReply1035", { "valor": (__ctx.e0()) });
};
export const niReply1036 = (__ctx = {}) => {
    return __globalMessage("niReply1036");
};
export const niReply1037 = (__ctx = {}) => {
    return __globalMessage("niReply1037", { "valor": (__ctx.e0()) });
};
export const niReply1038 = (__ctx = {}) => {
    return __globalMessage("niReply1038", { "valor": (__ctx.e0()) });
};
export const niReply1039 = (__ctx = {}) => {
    return __globalMessage("niReply1039", { "valor": (__ctx.e0()) });
};
export const niReply1040 = (__ctx = {}) => {
    return __globalMessage("niReply1040", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niReply1041 = (__ctx = {}) => {
    return __globalMessage("niReply1041", { "valor": (__ctx.e0()), "prefix": (__ctx.prefix || "") });
};
export const niReply1042 = (__ctx = {}) => {
    return __globalMessage("niReply1042", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niReply1043 = (__ctx = {}) => {
    return __globalMessage("niReply1043", { "valor": (__ctx.e0()) });
};
export const niReply1044 = (__ctx = {}) => {
    return __globalMessage("niReply1044");
};
export const niReply1045 = (__ctx = {}) => {
    return __globalMessage("niReply1045");
};
export const niReply1046 = (__ctx = {}) => {
    return __globalMessage("niReply1046", { "valor": (__ctx.e0()) });
};
export const niReply1047 = (__ctx = {}) => {
    return __globalMessage("niReply1047");
};
export const niReply1048 = (__ctx = {}) => {
    return __globalMessage("niReply1048", { "valor": (__ctx.e0()), "prefix": (__ctx.prefix || "") });
};
export const niReply1049 = (__ctx = {}) => {
    return __globalMessage("niReply1049", { "valor": (__ctx.e0()) });
};
export const niReply1050 = (__ctx = {}) => {
    return __globalMessage("niReply1050", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niReply1051 = (__ctx = {}) => {
    return __globalMessage("niReply1051", { "valor": (__ctx.e0()) });
};
export const niReply1052 = (__ctx = {}) => {
    return __globalMessage("niReply1052");
};
export const niReply1053 = (__ctx = {}) => {
    return __globalMessage("niReply1053", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()), "valor3": (__ctx.e2()) });
};
export const niReply1054 = (__ctx = {}) => {
    return __globalMessage("niReply1054", { "valor": (__ctx.e0()), "prefix": (__ctx.prefix || "") });
};
export const niReply1055 = (__ctx = {}) => {
    return __globalMessage("niReply1055", { "valor": (__ctx.e0()) });
};
export const niReply1056 = (__ctx = {}) => {
    return __globalMessage("niReply1056", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niReply1057 = (__ctx = {}) => {
    return __globalMessage("niReply1057", { "valor": (__ctx.e0()) });
};
export const niReply1058 = (__ctx = {}) => {
    return __globalMessage("niReply1058", { "valor": (__ctx.e0()) });
};
export const niReply1059 = (__ctx = {}) => {
    return __globalMessage("niReply1059", { "valor": (__ctx.e0()) });
};
export const niReply1060 = (__ctx = {}) => {
    return __globalMessage("niReply1060");
};
export const niReply1061 = (__ctx = {}) => {
    return __globalMessage("niReply1061", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niReply1062 = (__ctx = {}) => {
    return __globalMessage("niReply1062", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niReply1063 = (__ctx = {}) => {
    return __globalMessage("niReply1063", { "valor": (__ctx.e0()) });
};
export const niReply1064 = (__ctx = {}) => {
    return __globalMessage("niReply1064", { "valor": (__ctx.e0()), "prefix": (__ctx.prefix || "") });
};
export const niReply1065 = (__ctx = {}) => {
    return __globalMessage("niReply1065");
};
export const niReply1066 = (__ctx = {}) => {
    return __globalMessage("niReply1066", { "valor": (__ctx.e0()) });
};
export const niReply1067 = (__ctx = {}) => {
    return __globalMessage("niReply1067", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()), "valor3": (__ctx.e2()) });
};
export const niReply1068 = (__ctx = {}) => {
    return __globalMessage("niReply1068", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()), "valor3": (__ctx.e2()) });
};
export const niReply1069 = (__ctx = {}) => {
    return __globalMessage("niReply1069", { "valor": (__ctx.e0()) });
};
export const niReply1070 = (__ctx = {}) => {
    return __globalMessage("niReply1070");
};
export const niReply1071 = (__ctx = {}) => {
    return __globalMessage("niReply1071", { "valor": (__ctx.e0()), "prefix": (__ctx.prefix || "") });
};
export const niReply1072 = (__ctx = {}) => {
    return __globalMessage("niReply1072", { "valor": (__ctx.e0()) });
};
export const niReply1073 = (__ctx = {}) => {
    return __globalMessage("niReply1073");
};
export const niReply1074 = (__ctx = {}) => {
    return __globalMessage("niReply1074", { "valor": (__ctx.e0()) });
};
export const niReply1075 = (__ctx = {}) => {
    return __globalMessage("niReply1075", { "valor": (__ctx.e0()) });
};
export const niReply1076 = (__ctx = {}) => {
    return __globalMessage("niReply1076", { "valor": (__ctx.e0()) });
};
export const niReply1077 = (__ctx = {}) => {
    return __globalMessage("niReply1077");
};
export const niReply1078 = (__ctx = {}) => {
    return __globalMessage("niReply1078", { "valor": (__ctx.e0()) });
};
export const niReply1079 = (__ctx = {}) => {
    return __globalMessage("niReply1079", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niReply1080 = (__ctx = {}) => {
    return __globalMessage("niReply1080", { "valor": (__ctx.e0()) });
};
export const niReply1081 = (__ctx = {}) => {
    return __globalMessage("niReply1081");
};
export const niReply1082 = (__ctx = {}) => {
    return __globalMessage("niReply1082");
};
export const niReply1083 = (__ctx = {}) => {
    return __globalMessage("niReply1083", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niReply1084 = (__ctx = {}) => {
    return __globalMessage("niReply1084", { "valor": (__ctx.e0()) });
};
export const niReply1085 = (__ctx = {}) => {
    return __globalMessage("niReply1085");
};
export const niReply1086 = (__ctx = {}) => {
    return __globalMessage("niReply1086");
};
export const niReply1087 = (__ctx = {}) => {
    return __globalMessage("niReply1087", { "valor": (__ctx.e0()), "prefix": (__ctx.prefix || "") });
};
export const niReply1088 = (__ctx = {}) => {
    return __globalMessage("niReply1088", { "valor": (__ctx.e0()) });
};
export const niReply1089 = (__ctx = {}) => {
    return __globalMessage("niReply1089");
};
export const niReply1090 = (__ctx = {}) => {
    return __globalMessage("niReply1090");
};
export const niReply1091 = (__ctx = {}) => {
    return __globalMessage("niReply1091");
};
export const niReply1092 = (__ctx = {}) => {
    return __globalMessage("niReply1092", { "valor": (__ctx.e0()) });
};
export const niReply1093 = (__ctx = {}) => {
    return __globalMessage("niReply1093");
};
export const niReply1094 = (__ctx = {}) => {
    return __globalMessage("niReply1094", { "valor": (__ctx.e0()) });
};
export const niReply1095 = (__ctx = {}) => {
    return __globalMessage("niReply1095", { "valor": (__ctx.e0()) });
};
export const niReply1096 = (__ctx = {}) => {
    return __globalMessage("niReply1096");
};
export const niReply1097 = (__ctx = {}) => {
    return __globalMessage("niReply1097");
};
export const niReply1098 = (__ctx = {}) => {
    return __globalMessage("niReply1098", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niReply1099 = (__ctx = {}) => {
    return __globalMessage("niReply1099", { "valor": (__ctx.e0()) });
};
export const niReply1100 = (__ctx = {}) => {
    return __globalMessage("niReply1100");
};
export const niReply1101 = (__ctx = {}) => {
    return __globalMessage("niReply1101", { "valor": (__ctx.e0()) });
};
export const niReply1102 = (__ctx = {}) => {
    return __globalMessage("niReply1102");
};
export const niReply1103 = (__ctx = {}) => {
    return __globalMessage("niReply1103");
};
export const niReply1104 = (__ctx = {}) => {
    return __globalMessage("niReply1104");
};
export const niReply1105 = (__ctx = {}) => {
    return __globalMessage("niReply1105", { "valor": (__ctx.e0()) });
};
export const niReply1106 = (__ctx = {}) => {
    return __globalMessage("niReply1106");
};
export const niReply1107 = (__ctx = {}) => {
    return __globalMessage("niReply1107");
};
export const niReply1108 = (__ctx = {}) => {
    return __globalMessage("niReply1108");
};
export const niReply1109 = (__ctx = {}) => {
    return __globalMessage("niReply1109", { "valor": (__ctx.e0()) });
};
export const niReply1110 = (__ctx = {}) => {
    return __globalMessage("niReply1110", { "valor": (__ctx.e0()) });
};
export const niReply1111 = (__ctx = {}) => {
    return __globalMessage("niReply1111");
};
export const niReply1112 = (__ctx = {}) => {
    return __globalMessage("niReply1112");
};
export const niReply1113 = (__ctx = {}) => {
    return __globalMessage("niReply1113");
};
export const niReply1114 = (__ctx = {}) => {
    return __globalMessage("niReply1114");
};
export const niReply1115 = (__ctx = {}) => {
    return __globalMessage("niReply1115");
};
export const niReply1116 = (__ctx = {}) => {
    return __globalMessage("niReply1116", { "valor": (__ctx.e0()) });
};
export const niReply1117 = (__ctx = {}) => {
    return __globalMessage("niReply1117");
};
export const niReply1118 = (__ctx = {}) => {
    return __globalMessage("niReply1118");
};
export const niReply1119 = (__ctx = {}) => {
    return __globalMessage("niReply1119");
};
export const niReply1120 = (__ctx = {}) => {
    return __globalMessage("niReply1120", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()), "valor3": (__ctx.e2()), "valor4": (__ctx.e3()), "valor5": (__ctx.e4()), "valor6": (__ctx.e5()), "valor7": (__ctx.e6()), "valor8": (__ctx.e7()) });
};
export const niReply1121 = (__ctx = {}) => {
    return __globalMessage("niReply1121", { "valor": (__ctx.e0()) });
};
export const niReply1122 = (__ctx = {}) => {
    return __globalMessage("niReply1122", { "valor": (__ctx.e0()), "prefix": (__ctx.prefix || "") });
};
export const niReply1123 = (__ctx = {}) => {
    return __globalMessage("niReply1123", { "valor": (__ctx.e0()) });
};
export const niReply1124 = (__ctx = {}) => {
    return __globalMessage("niReply1124", { "valor": (__ctx.e0()), "prefix": (__ctx.prefix || "") });
};
export const niReply1125 = (__ctx = {}) => {
    return __globalMessage("niReply1125", { "valor": (__ctx.e0()) });
};
export const niReply1126 = (__ctx = {}) => {
    return __globalMessage("niReply1126", { "valor": (__ctx.e0()) });
};
export const niReply1127 = (__ctx = {}) => {
    return __globalMessage("niReply1127", { "valor": (__ctx.e0()) });
};
export const niReply1128 = (__ctx = {}) => {
    return __globalMessage("niReply1128", { "valor": (__ctx.e0()) });
};
export const niReply1129 = (__ctx = {}) => {
    return __globalMessage("niReply1129", { "valor": (__ctx.e0()), "prefix": (__ctx.prefix || "") });
};
export const niReply1130 = (__ctx = {}) => {
    return __globalMessage("niReply1130", { "valor": (__ctx.e0()), "prefix": (__ctx.prefix || "") });
};
export const niReply1131 = (__ctx = {}) => {
    return __globalMessage("niReply1131", { "valor": (__ctx.e0()) });
};
export const niReply1132 = (__ctx = {}) => {
    return __globalMessage("niReply1132", { "valor": (__ctx.e0()) });
};
export const niReply1133 = (__ctx = {}) => {
    return __globalMessage("niReply1133", { "valor": (__ctx.e0()) });
};
export const niReply1134 = (__ctx = {}) => {
    return __globalMessage("niReply1134", { "valor": (__ctx.e0()) });
};
export const niReply1135 = (__ctx = {}) => {
    return __globalMessage("niReply1135", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()), "valor3": (__ctx.e2()) });
};
export const niReply1136 = (__ctx = {}) => {
    return __globalMessage("niReply1136", { "valor": (__ctx.e0()) });
};
export const niReply1137 = (__ctx = {}) => {
    return __globalMessage("niReply1137", { "valor": (__ctx.e0()), "prefix": (__ctx.prefix || "") });
};
export const niReply1138 = (__ctx = {}) => {
    return __globalMessage("niReply1138");
};
export const niReply1139 = (__ctx = {}) => {
    return __globalMessage("niReply1139");
};
export const niReply1140 = (__ctx = {}) => {
    return __globalMessage("niReply1140", { "valor": (__ctx.e0()) });
};
export const niReply1141 = (__ctx = {}) => {
    return __globalMessage("niReply1141", { "valor": (__ctx.e0()) });
};
export const niReply1142 = (__ctx = {}) => {
    return __globalMessage("niReply1142", { "valor": (__ctx.e0()), "prefix": (__ctx.prefix || "") });
};
export const niReply1143 = (__ctx = {}) => {
    return __globalMessage("niReply1143");
};
export const niReply1144 = (__ctx = {}) => {
    return __globalMessage("niReply1144");
};
export const niReply1145 = (__ctx = {}) => {
    return __globalMessage("niReply1145", { "valor": (__ctx.e0()) });
};
export const niReply1146 = (__ctx = {}) => {
    return __globalMessage("niReply1146", { "valor": (__ctx.e0()) });
};
export const niReply1147 = (__ctx = {}) => {
    return __globalMessage("niReply1147");
};
export const niReply1148 = (__ctx = {}) => {
    return __globalMessage("niReply1148");
};
export const niReply1149 = (__ctx = {}) => {
    return __globalMessage("niReply1149", { "valor": (__ctx.e0()) });
};
export const niReply1150 = (__ctx = {}) => {
    return __globalMessage("niReply1150", { "valor": (__ctx.e0()), "prefix": (__ctx.prefix || "") });
};
export const niReply1151 = (__ctx = {}) => {
    return __globalMessage("niReply1151");
};
export const niReply1152 = (__ctx = {}) => {
    return __globalMessage("niReply1152", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niReply1153 = (__ctx = {}) => {
    return __globalMessage("niReply1153", { "valor": (__ctx.e0()) });
};
export const niReply1154 = (__ctx = {}) => {
    return __globalMessage("niReply1154");
};
export const niReply1155 = (__ctx = {}) => {
    return __globalMessage("niReply1155", { "valor": (__ctx.e0()) });
};
export const niReply1156 = (__ctx = {}) => {
    return __globalMessage("niReply1156", { "valor": (__ctx.e0()), "prefix": (__ctx.prefix || "") });
};
export const niReply1157 = (__ctx = {}) => {
    return __globalMessage("niReply1157", { "valor": (__ctx.e0()) });
};
export const niReply1158 = (__ctx = {}) => {
    return __globalMessage("niReply1158", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()), "valor3": (__ctx.e2()), "valor4": (__ctx.e3()) });
};
export const niReply1159 = (__ctx = {}) => {
    return __globalMessage("niReply1159", { "valor": (__ctx.e0()) });
};
export const niReply1160 = (__ctx = {}) => {
    return __globalMessage("niReply1160", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niReply1161 = (__ctx = {}) => {
    return __globalMessage("niReply1161", { "valor": (__ctx.e0()) });
};
export const niReply1162 = (__ctx = {}) => {
    return __globalMessage("niReply1162", { "valor": (__ctx.e0()) });
};
export const niReply1163 = (__ctx = {}) => {
    return __globalMessage("niReply1163");
};
export const niReply1164 = (__ctx = {}) => {
    return __globalMessage("niReply1164", { "valor": (__ctx.e0()) });
};
export const niReply1165 = (__ctx = {}) => {
    return __globalMessage("niReply1165", { "valor": (__ctx.e0()), "prefix": (__ctx.prefix || "") });
};
export const niReply1166 = (__ctx = {}) => {
    return __globalMessage("niReply1166");
};
export const niReply1167 = (__ctx = {}) => {
    return __globalMessage("niReply1167", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niReply1168 = (__ctx = {}) => {
    return __globalMessage("niReply1168", { "valor": (__ctx.e0()) });
};
export const niReply1169 = (__ctx = {}) => {
    return __globalMessage("niReply1169");
};
export const niReply1170 = (__ctx = {}) => {
    return __globalMessage("niReply1170", { "valor": (__ctx.e0()) });
};
export const niReply1171 = (__ctx = {}) => {
    return __globalMessage("niReply1171", { "valor": (__ctx.e0()) });
};
export const niReply1172 = (__ctx = {}) => {
    return __globalMessage("niReply1172");
};
export const niReply1173 = (__ctx = {}) => {
    return __globalMessage("niReply1173", { "valor": (__ctx.e0()), "prefix": (__ctx.prefix || "") });
};
export const niReply1174 = (__ctx = {}) => {
    return __globalMessage("niReply1174");
};
export const niReply1175 = (__ctx = {}) => {
    return __globalMessage("niReply1175", { "valor": (__ctx.e0()) });
};
export const niReply1176 = (__ctx = {}) => {
    return __globalMessage("niReply1176");
};
export const niReply1177 = (__ctx = {}) => {
    return __globalMessage("niReply1177", { "valor": (__ctx.e0()) });
};
export const niReply1178 = (__ctx = {}) => {
    return __globalMessage("niReply1178", { "valor": (__ctx.e0()) });
};
export const niReply1179 = (__ctx = {}) => {
    return __globalMessage("niReply1179", { "valor": (__ctx.e0()) });
};
export const niReply1180 = (__ctx = {}) => {
    return __globalMessage("niReply1180", { "valor": (__ctx.e0()), "prefix": (__ctx.prefix || "") });
};
export const niReply1181 = (__ctx = {}) => {
    return __globalMessage("niReply1181");
};
export const niReply1182 = (__ctx = {}) => {
    return __globalMessage("niReply1182", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niReply1183 = (__ctx = {}) => {
    return __globalMessage("niReply1183", { "valor": (__ctx.e0()) });
};
export const niReply1184 = (__ctx = {}) => {
    return __globalMessage("niReply1184");
};
export const niReply1185 = (__ctx = {}) => {
    return __globalMessage("niReply1185", { "valor": (__ctx.e0()) });
};
export const niReply1186 = (__ctx = {}) => {
    return __globalMessage("niReply1186", { "valor": (__ctx.e0()) });
};
export const niReply1187 = (__ctx = {}) => {
    return __globalMessage("niReply1187");
};
export const niReply1188 = (__ctx = {}) => {
    return __globalMessage("niReply1188");
};
export const niReply1189 = (__ctx = {}) => {
    return __globalMessage("niReply1189", { "valor": (__ctx.e0()) });
};
export const niReply1190 = (__ctx = {}) => {
    return __globalMessage("niReply1190", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()), "valor3": (__ctx.e2()) });
};
export const niReply1191 = (__ctx = {}) => {
    return __globalMessage("niReply1191", { "valor": (__ctx.e0()) });
};
export const niReply1192 = (__ctx = {}) => {
    return __globalMessage("niReply1192");
};
export const niReply1193 = (__ctx = {}) => {
    return __globalMessage("niReply1193", { "valor": (__ctx.e0()) });
};
export const niReply1194 = (__ctx = {}) => {
    return __globalMessage("niReply1194");
};
export const niReply1195 = (__ctx = {}) => {
    return __globalMessage("niReply1195", { "valor": (__ctx.e0()) });
};
export const niReply1196 = (__ctx = {}) => {
    return __globalMessage("niReply1196", { "valor": (__ctx.e0()), "prefix": (__ctx.prefix || "") });
};
export const niReply1197 = (__ctx = {}) => {
    return __globalMessage("niReply1197");
};
export const niReply1198 = (__ctx = {}) => {
    return __globalMessage("niReply1198");
};
export const niReply1199 = (__ctx = {}) => {
    return __globalMessage("niReply1199", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niReply1200 = (__ctx = {}) => {
    return __globalMessage("niReply1200", { "valor": (__ctx.e0()) });
};
export const niReply1201 = (__ctx = {}) => {
    return __globalMessage("niReply1201");
};
export const niReply1202 = (__ctx = {}) => {
    return __globalMessage("niReply1202", { "valor": (__ctx.e0()) });
};
export const niReply1203 = (__ctx = {}) => {
    return __globalMessage("niReply1203", { "valor": (__ctx.e0()) });
};
export const niReply1204 = (__ctx = {}) => {
    return __globalMessage("niReply1204", { "valor": (__ctx.e0()) });
};
export const niReply1205 = (__ctx = {}) => {
    return __globalMessage("niReply1205", { "valor": (__ctx.e0()) });
};
export const niReply1206 = (__ctx = {}) => {
    return __globalMessage("niReply1206", { "valor": (__ctx.e0()) });
};
export const niReply1207 = (__ctx = {}) => {
    return __globalMessage("niReply1207");
};
export const niReply1208 = (__ctx = {}) => {
    return __globalMessage("niReply1208", { "valor": (__ctx.e0()) });
};
export const niReply1209 = (__ctx = {}) => {
    return __globalMessage("niReply1209", { "valor": (__ctx.e0()) });
};
export const niReply1210 = (__ctx = {}) => {
    return __globalMessage("niReply1210");
};
export const niReply1211 = (__ctx = {}) => {
    return __globalMessage("niReply1211", { "valor": (__ctx.e0()) });
};
export const niReply1212 = (__ctx = {}) => {
    return __globalMessage("niReply1212");
};
export const niReply1213 = (__ctx = {}) => {
    return __globalMessage("niReply1213", { "valor": (__ctx.e0()) });
};
export const niReply1214 = (__ctx = {}) => {
    return __globalMessage("niReply1214");
};
export const niReply1215 = (__ctx = {}) => {
    return __globalMessage("niReply1215", { "valor": (__ctx.e0()) });
};
export const niReply1216 = (__ctx = {}) => {
    return __globalMessage("niReply1216", { "valor": (__ctx.e0()), "prefix": (__ctx.prefix || "") });
};
export const niReply1217 = (__ctx = {}) => {
    return __globalMessage("niReply1217");
};
export const niReply1218 = (__ctx = {}) => {
    return __globalMessage("niReply1218");
};
export const niReply1219 = (__ctx = {}) => {
    return __globalMessage("niReply1219");
};
export const niReply1220 = (__ctx = {}) => {
    return __globalMessage("niReply1220", { "valor": (__ctx.e0()) });
};
export const niReply1221 = (__ctx = {}) => {
    return __globalMessage("niReply1221", { "valor": (__ctx.e0()) });
};
export const niReply1222 = (__ctx = {}) => {
    return __globalMessage("niReply1222", { "valor": (__ctx.e0()) });
};
export const niReply1223 = (__ctx = {}) => {
    return __globalMessage("niReply1223");
};
export const niReply1224 = (__ctx = {}) => {
    return __globalMessage("niReply1224", { "valor": (__ctx.e0()) });
};
export const niReply1225 = (__ctx = {}) => {
    return __globalMessage("niReply1225", { "valor": (__ctx.e0()) });
};
export const niReply1226 = (__ctx = {}) => {
    return __globalMessage("niReply1226", { "valor": (__ctx.e0()) });
};
export const niReply1227 = (__ctx = {}) => {
    return __globalMessage("niReply1227", { "valor": (__ctx.e0()) });
};
export const niReply1228 = (__ctx = {}) => {
    return __globalMessage("niReply1228");
};
export const niReply1229 = (__ctx = {}) => {
    return __globalMessage("niReply1229");
};
export const niReply1230 = (__ctx = {}) => {
    return __globalMessage("niReply1230");
};
export const niReply1231 = (__ctx = {}) => {
    return __globalMessage("niReply1231");
};
export const niReply1232 = (__ctx = {}) => {
    return __globalMessage("niReply1232", { "valor": (__ctx.e0()) });
};
export const niReply1233 = (__ctx = {}) => {
    return __globalMessage("niReply1233");
};
export const niReply1234 = (__ctx = {}) => {
    return __globalMessage("niReply1234");
};
export const niReply1235 = (__ctx = {}) => {
    return __globalMessage("niReply1235");
};
export const niReply1236 = (__ctx = {}) => {
    return __globalMessage("niReply1236", { "valor": (__ctx.e0()) });
};
export const niReply1237 = (__ctx = {}) => {
    return __globalMessage("niReply1237");
};
export const niReply1238 = (__ctx = {}) => {
    return __globalMessage("niReply1238", { "valor": (__ctx.e0()) });
};
export const niReply1239 = (__ctx = {}) => {
    return __globalMessage("niReply1239");
};
export const niReply1240 = (__ctx = {}) => {
    return __globalMessage("niReply1240", { "valor": (__ctx.e0()) });
};
export const niReply1241 = (__ctx = {}) => {
    return __globalMessage("niReply1241");
};
export const niReply1242 = (__ctx = {}) => {
    return __globalMessage("niReply1242", { "valor": (__ctx.e0()) });
};
export const niReply1243 = (__ctx = {}) => {
    return __globalMessage("niReply1243");
};
export const niReply1244 = (__ctx = {}) => {
    return __globalMessage("niReply1244", { "valor": (__ctx.e0()) });
};
export const niReply1245 = (__ctx = {}) => {
    return __globalMessage("niReply1245");
};
export const niReply1246 = (__ctx = {}) => {
    return __globalMessage("niReply1246", { "valor": (__ctx.e0()) });
};
export const niReply1247 = (__ctx = {}) => {
    return __globalMessage("niReply1247");
};
export const niReply1248 = (__ctx = {}) => {
    return __globalMessage("niReply1248");
};
export const niReply1249 = (__ctx = {}) => {
    return __globalMessage("niReply1249", { "valor": (__ctx.e0()) });
};
export const niReply1250 = (__ctx = {}) => {
    return __globalMessage("niReply1250");
};
export const niReply1251 = (__ctx = {}) => {
    return __globalMessage("niReply1251", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()), "valor3": (__ctx.e2()), "valor4": (__ctx.e3()) });
};
export const niReply1252 = (__ctx = {}) => {
    return __globalMessage("niReply1252");
};
export const niReply1253 = (__ctx = {}) => {
    return __globalMessage("niReply1253", { "valor": (__ctx.e0()) });
};
export const niReply1254 = (__ctx = {}) => {
    return __globalMessage("niReply1254");
};
export const niReply1255 = (__ctx = {}) => {
    return __globalMessage("niReply1255", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()), "valor3": (__ctx.e2()), "valor4": (__ctx.e3()) });
};
export const niText1256 = (__ctx = {}) => {
    return __globalMessage("niText1256");
};
export const niText1257 = (__ctx = {}) => {
    return __globalMessage("niText1257", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niText1258 = (__ctx = {}) => {
    return __globalMessage("niText1258");
};
export const niText1259 = (__ctx = {}) => {
    return __globalMessage("niText1259");
};
export const niText1260 = (__ctx = {}) => {
    return __globalMessage("niText1260");
};
export const niText1261 = (__ctx = {}) => {
    return __globalMessage("niText1261", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niText1262 = (__ctx = {}) => {
    return __globalMessage("niText1262", { "valor": (__ctx.e0()) });
};
export const niText1263 = (__ctx = {}) => {
    return __globalMessage("niText1263", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niText1264 = (__ctx = {}) => {
    return __globalMessage("niText1264");
};
export const niText1265 = (__ctx = {}) => {
    return __globalMessage("niText1265");
};
export const niText1266 = (__ctx = {}) => {
    return __globalMessage("niText1266");
};
export const niText1267 = (__ctx = {}) => {
    return __globalMessage("niText1267");
};
export const niText1268 = (__ctx = {}) => {
    return __globalMessage("niText1268", { "valor": (__ctx.e0()) });
};
export const niText1269 = (__ctx = {}) => {
    return __globalMessage("niText1269", { "valor": (__ctx.e0()) });
};
export const niText1270 = (__ctx = {}) => {
    return __globalMessage("niText1270", { "valor": (__ctx.e0()) });
};
export const niText1271 = (__ctx = {}) => {
    return __globalMessage("niText1271");
};
export const niText1272 = (__ctx = {}) => {
    return __globalMessage("niText1272");
};
export const niText1273 = (__ctx = {}) => {
    return __globalMessage("niText1273");
};
export const niText1274 = (__ctx = {}) => {
    return __globalMessage("niText1274");
};
export const niText1275 = (__ctx = {}) => {
    return __globalMessage("niText1275");
};
export const niText1276 = (__ctx = {}) => {
    return __globalMessage("niText1276", { "valor": (__ctx.e0()) });
};
export const niText1277 = (__ctx = {}) => {
    return __globalMessage("niText1277", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niText1278 = (__ctx = {}) => {
    return __globalMessage("niText1278", { "valor": (__ctx.e0()) });
};
export const niText1279 = (__ctx = {}) => {
    return __globalMessage("niText1279", { "valor": (__ctx.e0()) });
};
export const niText1280 = (__ctx = {}) => {
    return __globalMessage("niText1280");
};
export const niText1281 = (__ctx = {}) => {
    return __globalMessage("niText1281", { "valor": (__ctx.e0()) });
};
export const niText1282 = (__ctx = {}) => {
    return __globalMessage("niText1282", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()), "valor3": (__ctx.e2()), "valor4": (__ctx.e3()), "valor5": (__ctx.e4()) });
};
export const niText1283 = (__ctx = {}) => {
    return __globalMessage("niText1283", { "valor": (__ctx.e0()) });
};
export const niText1284 = (__ctx = {}) => {
    return __globalMessage("niText1284", { "valor": (__ctx.e0()) });
};
export const niText1285 = (__ctx = {}) => {
    return __globalMessage("niText1285", { "valor": (__ctx.e0()) });
};
export const niText1286 = (__ctx = {}) => {
    return __globalMessage("niText1286", { "valor": (__ctx.e0()) });
};
export const niText1287 = (__ctx = {}) => {
    return __globalMessage("niText1287", { "valor": (__ctx.e0()) });
};
export const niText1288 = (__ctx = {}) => {
    return __globalMessage("niText1288", { "valor": (__ctx.e0()) });
};
export const niText1289 = (__ctx = {}) => {
    return __globalMessage("niText1289", { "valor": (__ctx.e0()) });
};
export const niText1290 = (__ctx = {}) => {
    return __globalMessage("niText1290", { "valor": (__ctx.e0()) });
};
export const niText1291 = (__ctx = {}) => {
    return __globalMessage("niText1291", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niText1292 = (__ctx = {}) => {
    return __globalMessage("niText1292");
};
export const niText1293 = (__ctx = {}) => {
    return __globalMessage("niText1293", { "valor": (__ctx.e0()) });
};
export const niText1294 = (__ctx = {}) => {
    return __globalMessage("niText1294");
};
export const niText1295 = (__ctx = {}) => {
    return __globalMessage("niText1295");
};
export const niText1296 = (__ctx = {}) => {
    return __globalMessage("niText1296");
};
export const niText1297 = (__ctx = {}) => {
    return __globalMessage("niText1297");
};
export const niText1298 = (__ctx = {}) => {
    return __globalMessage("niText1298");
};
export const niText1299 = (__ctx = {}) => {
    return __globalMessage("niText1299");
};
export const niText1300 = (__ctx = {}) => {
    return __globalMessage("niText1300");
};
export const niText1301 = (__ctx = {}) => {
    return __globalMessage("niText1301");
};
export const niText1302 = (__ctx = {}) => {
    return __globalMessage("niText1302");
};
export const niText1303 = (__ctx = {}) => {
    return __globalMessage("niText1303");
};
export const niText1304 = (__ctx = {}) => {
    return __globalMessage("niText1304");
};
export const niText1305 = (__ctx = {}) => {
    return __globalMessage("niText1305");
};
export const niText1306 = (__ctx = {}) => {
    return __globalMessage("niText1306");
};
export const niText1307 = (__ctx = {}) => {
    return __globalMessage("niText1307");
};
export const niText1308 = (__ctx = {}) => {
    return __globalMessage("niText1308");
};
export const niText1309 = (__ctx = {}) => {
    return __globalMessage("niText1309", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niText1310 = (__ctx = {}) => {
    return __globalMessage("niText1310");
};
export const niText1311 = (__ctx = {}) => {
    return __globalMessage("niText1311", { "valor": (__ctx.e0()) });
};
export const niText1312 = (__ctx = {}) => {
    return __globalMessage("niText1312");
};
export const niText1313 = (__ctx = {}) => {
    return __globalMessage("niText1313", { "valor": (__ctx.e0()) });
};
export const niText1314 = (__ctx = {}) => {
    return __globalMessage("niText1314");
};
export const niText1315 = (__ctx = {}) => {
    return __globalMessage("niText1315", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niText1316 = (__ctx = {}) => {
    return __globalMessage("niText1316", { "valor": (__ctx.e0()) });
};
export const niText1317 = (__ctx = {}) => {
    return __globalMessage("niText1317", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niText1318 = (__ctx = {}) => {
    return __globalMessage("niText1318");
};
export const niText1319 = (__ctx = {}) => {
    return __globalMessage("niText1319");
};
export const niText1320 = (__ctx = {}) => {
    return __globalMessage("niText1320");
};
export const niText1321 = (__ctx = {}) => {
    return __globalMessage("niText1321");
};
export const niText1322 = (__ctx = {}) => {
    return __globalMessage("niText1322");
};
export const niText1323 = (__ctx = {}) => {
    return __globalMessage("niText1323");
};
export const niText1324 = (__ctx = {}) => {
    return __globalMessage("niText1324");
};
export const niText1325 = (__ctx = {}) => {
    return __globalMessage("niText1325");
};
export const niText1326 = (__ctx = {}) => {
    return __globalMessage("niText1326");
};
export const niText1327 = (__ctx = {}) => {
    return __globalMessage("niText1327");
};
export const niText1328 = (__ctx = {}) => {
    return __globalMessage("niText1328");
};
export const niText1329 = (__ctx = {}) => {
    return __globalMessage("niText1329", { "valor": (__ctx.e0()) });
};
export const niText1330 = (__ctx = {}) => {
    return __globalMessage("niText1330");
};
export const niText1331 = (__ctx = {}) => {
    return __globalMessage("niText1331", { "valor": (__ctx.e0()), "prefix": (__ctx.prefix || "") });
};
export const niText1332 = (__ctx = {}) => {
    return __globalMessage("niText1332");
};
export const niText1333 = (__ctx = {}) => {
    return __globalMessage("niText1333", { "valor": (__ctx.e0()) });
};
export const niText1334 = (__ctx = {}) => {
    return __globalMessage("niText1334", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niText1335 = (__ctx = {}) => {
    return __globalMessage("niText1335", { "valor": (__ctx.e0()) });
};
export const niText1336 = (__ctx = {}) => {
    return __globalMessage("niText1336", { "valor": (__ctx.e0()) });
};
export const niText1337 = (__ctx = {}) => {
    return __globalMessage("niText1337", { "valor": (__ctx.e0()) });
};
export const niText1338 = (__ctx = {}) => {
    return __globalMessage("niText1338", { "valor": (__ctx.e0()) });
};
export const niText1339 = (__ctx = {}) => {
    return __globalMessage("niText1339", { "valor": (__ctx.e0()) });
};
export const niText1340 = (__ctx = {}) => {
    return __globalMessage("niText1340", { "valor": (__ctx.e0()) });
};
export const niText1341 = (__ctx = {}) => {
    return __globalMessage("niText1341", { "valor": (__ctx.e0()) });
};
export const niText1342 = (__ctx = {}) => {
    return __globalMessage("niText1342", { "valor": (__ctx.e0()) });
};
export const niText1343 = (__ctx = {}) => {
    return __globalMessage("niText1343", { "valor": (__ctx.e0()) });
};
export const niText1344 = (__ctx = {}) => {
    return __globalMessage("niText1344", { "valor": (__ctx.e0()) });
};
export const niText1345 = (__ctx = {}) => {
    return __globalMessage("niText1345", { "valor": (__ctx.e0()) });
};
export const niText1346 = (__ctx = {}) => {
    return __globalMessage("niText1346", { "valor": (__ctx.e0()) });
};
export const niText1347 = (__ctx = {}) => {
    return __globalMessage("niText1347", { "valor": (__ctx.e0()) });
};
export const niText1348 = (__ctx = {}) => {
    return __globalMessage("niText1348", { "valor": (__ctx.e0()) });
};
export const niText1349 = (__ctx = {}) => {
    return __globalMessage("niText1349", { "valor": (__ctx.e0()) });
};
export const niText1350 = (__ctx = {}) => {
    return __globalMessage("niText1350", { "valor": (__ctx.e0()) });
};
export const niText1351 = (__ctx = {}) => {
    return __globalMessage("niText1351", { "valor": (__ctx.e0()) });
};
export const niText1352 = (__ctx = {}) => {
    return __globalMessage("niText1352", { "valor": (__ctx.e0()) });
};
export const niText1353 = (__ctx = {}) => {
    return __globalMessage("niText1353", { "valor": (__ctx.e0()) });
};
export const niText1354 = (__ctx = {}) => {
    return __globalMessage("niText1354", { "valor": (__ctx.e0()) });
};
export const niText1355 = (__ctx = {}) => {
    return __globalMessage("niText1355", { "valor": (__ctx.e0()) });
};
export const niText1356 = (__ctx = {}) => {
    return __globalMessage("niText1356", { "valor": (__ctx.e0()) });
};
export const niText1357 = (__ctx = {}) => {
    return __globalMessage("niText1357", { "valor": (__ctx.e0()) });
};
export const niText1358 = (__ctx = {}) => {
    return __globalMessage("niText1358", { "valor": (__ctx.e0()) });
};
export const niText1359 = (__ctx = {}) => {
    return __globalMessage("niText1359", { "valor": (__ctx.e0()) });
};
export const niText1360 = (__ctx = {}) => {
    return __globalMessage("niText1360", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niText1361 = (__ctx = {}) => {
    return __globalMessage("niText1361");
};
export const niText1362 = (__ctx = {}) => {
    return __globalMessage("niText1362");
};
export const niText1363 = (__ctx = {}) => {
    return __globalMessage("niText1363", { "valor": (__ctx.e0()) });
};
export const niText1364 = (__ctx = {}) => {
    return __globalMessage("niText1364", { "valor": (__ctx.e0()) });
};
export const niText1365 = (__ctx = {}) => {
    return __globalMessage("niText1365", { "valor": (__ctx.e0()) });
};
export const niText1366 = (__ctx = {}) => {
    return __globalMessage("niText1366");
};
export const niText1367 = (__ctx = {}) => {
    return __globalMessage("niText1367");
};
export const niText1368 = (__ctx = {}) => {
    return __globalMessage("niText1368");
};
export const niText1369 = (__ctx = {}) => {
    return __globalMessage("niText1369");
};
export const niText1370 = (__ctx = {}) => {
    return __globalMessage("niText1370", { "valor": (__ctx.e0?.() || '0'), "valor2": (__ctx.e1?.() || '0'), "valor3": (__ctx.e2?.() || '0'), "valor4": (__ctx.e3?.() || '0'), "valor5": (__ctx.e4?.() || '') });
};
export const niText1371 = (__ctx = {}) => {
    return __globalMessage("niText1371", { "valor": (__ctx.e0?.() || '0'), "valor2": (__ctx.e1?.() || '0') });
};
export const niText1372 = (__ctx = {}) => {
    return __globalMessage("niText1372", { "valor": (__ctx.e0?.() || '0'), "valor2": (__ctx.e1?.() || '0'), "valor3": (__ctx.e2?.() || '0') });
};
export const niText1373 = (__ctx = {}) => {
    return __globalMessage("niText1373", { "valor": (__ctx.e0?.() || '0'), "valor2": (__ctx.e1?.() || '0'), "valor3": (__ctx.e2?.() || '0') });
};
export const niText1374 = (__ctx = {}) => {
    return __globalMessage("niText1374", { "valor": (__ctx.e0?.() || '0') });
};
export const niText1375 = (__ctx = {}) => {
    return __globalMessage("niText1375");
};
export const niText1376 = (__ctx = {}) => {
    return __globalMessage("niText1376", { "valor": (__ctx.e0?.() || '?'), "valor2": (__ctx.e1?.() || '?'), "valor3": (__ctx.e2?.() || '?'), "valor4": (__ctx.e3?.() || ''), "valor5": (__ctx.e4?.() || '0') });
};
export const niText1377 = (__ctx = {}) => {
    return __globalMessage("niText1377", { "valor": (__ctx.e0?.() || '0'), "valor2": (__ctx.e1?.() || '0'), "valor3": (__ctx.e2?.() || 'ᴠᴏᴄᴇ ᴇɴᴄᴏɴᴛʀᴏᴜ ᴍɪɴᴇʀɪᴏs ᴠᴀʟɪᴏsᴏs.') });
};
export const niText1378 = (__ctx = {}) => {
    return __globalMessage("niText1378", { "valor": (__ctx.e0?.() || '0'), "valor2": (__ctx.e1?.() || '0'), "valor3": (__ctx.e2?.() || 'sᴇʀᴠɪᴄᴏ ᴄᴏɴᴄʟᴜɪᴅᴏ.'), "valor4": (__ctx.e3?.() || '0') });
};
export const niText1379 = (__ctx = {}) => {
    return __globalMessage("niText1379", { "valor": (__ctx.e0?.() || '0'), "valor2": (__ctx.e1?.() || '0'), "valor3": (__ctx.e2?.() || '0'), "valor4": (__ctx.e3?.() || '0'), "valor5": (__ctx.e4?.() || '0') });
};
export const niText1380 = (__ctx = {}) => {
    return __globalMessage("niText1380", { "valor": (__ctx.e0?.() || '0'), "valor2": (__ctx.e1?.() || '0'), "valor3": (__ctx.e2?.() || '0') });
};
export const niText1381 = (__ctx = {}) => {
    return __globalMessage("niText1381", { "valor": (__ctx.e0?.() || '0'), "valor2": (__ctx.e1?.() || '0'), "valor3": (__ctx.e2?.() || '0'), "valor4": (__ctx.e3?.() || '0'), "valor5": (__ctx.e4?.() || ''), "valor6": (__ctx.e5?.() || '') });
};
export const niText1382 = (__ctx = {}) => {
    return __globalMessage("niText1382", { "valor": (__ctx.e0?.() || '0') });
};
export const niText1383 = (__ctx = {}) => {
    return __globalMessage("niText1383", { "valor": (__ctx.e0?.() || '0') });
};
export const niText1384 = (__ctx = {}) => {
    return __globalMessage("niText1384", { "valor": (__ctx.e0?.() || '0'), "valor2": (__ctx.e1?.() || '0'), "valor3": (__ctx.e2?.() || '0'), "valor4": (__ctx.e3?.() || '0') });
};
export const niText1385 = (__ctx = {}) => {
    return __globalMessage("niText1385", { "valor": (__ctx.e0?.() || '0') });
};
export const niText1386 = (__ctx = {}) => {
    return __globalMessage("niText1386", { "valor": (__ctx.e0?.() || '0'), "valor2": (__ctx.e1?.() || '0'), "valor3": (__ctx.e2?.() || '0') });
};
export const niText1387 = (__ctx = {}) => {
    return __globalMessage("niText1387", { "valor": (__ctx.e0?.() || '0'), "valor2": (__ctx.e1?.() || '0'), "valor3": (__ctx.e2?.() || '0'), "valor4": (__ctx.e3?.() || '0') });
};
export const niText1388 = (__ctx = {}) => {
    return __globalMessage("niText1388", { "valor": (__ctx.e0?.() || '0'), "valor2": (__ctx.e1?.() || '0'), "valor3": (__ctx.e2?.() || '0') });
};
export const niText1389 = (__ctx = {}) => {
    return __globalMessage("niText1389", { "valor": (__ctx.e0?.() || 'ɴᴀᴅᴀ ᴀᴄᴏɴᴛᴇᴄᴇᴜ.'), "valor2": (__ctx.e1?.() || '0') });
};
export const niText1390 = (__ctx = {}) => {
    return __globalMessage("niText1390", { "valor": (__ctx.e0?.() || '0'), "valor2": (__ctx.e1?.() || '0'), "valor3": (__ctx.e2?.() || '0'), "valor4": (__ctx.e3?.() || ''), "valor5": (__ctx.e4?.() || '') });
};
export const niText1391 = (__ctx = {}) => {
    return __globalMessage("niText1391", { "valor": (__ctx.e0?.() || '0'), "valor2": (__ctx.e1?.() || '0'), "valor3": (__ctx.e2?.() || '0'), "valor4": (__ctx.e3?.() || ''), "valor5": (__ctx.e4?.() || '') });
};
export const niText1392 = (__ctx = {}) => {
    return __globalMessage("niText1392", { "valor": (__ctx.e0?.() || '0'), "valor2": (__ctx.e1?.() || '0'), "valor3": (__ctx.e2?.() || '0'), "valor4": (__ctx.e3?.() || ''), "valor5": (__ctx.e4?.() || '') });
};
export const niText1393 = (__ctx = {}) => {
    return __globalMessage("niText1393", { "valor": (__ctx.e0()) });
};
export const niText1394 = (__ctx = {}) => {
    return __globalMessage("niText1394", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()), "valor3": (__ctx.e2()), "valor4": (__ctx.e3()) });
};
export const niText1395 = (__ctx = {}) => {
    return __globalMessage("niText1395", { "valor": (__ctx.e0()) });
};
export const niText1396 = (__ctx = {}) => {
    return __globalMessage("niText1396", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niText1397 = (__ctx = {}) => {
    return __globalMessage("niText1397", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()), "valor3": (__ctx.e2()) });
};
export const niText1398 = (__ctx = {}) => {
    return __globalMessage("niText1398", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()), "valor3": (__ctx.e2()) });
};
export const niText1399 = (__ctx = {}) => {
    return __globalMessage("niText1399", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()), "valor3": (__ctx.e2()), "valor4": (__ctx.e3()) });
};
export const niText1400 = (__ctx = {}) => {
    return __globalMessage("niText1400", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()), "valor3": (__ctx.e2()), "valor4": (__ctx.e3()) });
};
export const niText1401 = (__ctx = {}) => {
    return __globalMessage("niText1401", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()), "valor3": (__ctx.e2()) });
};
export const niText1402 = (__ctx = {}) => {
    return __globalMessage("niText1402", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()), "valor3": (__ctx.e2()), "valor4": (__ctx.e3()), "valor5": (__ctx.e4()), "valor6": (__ctx.e5()) });
};
export const niText1403 = (__ctx = {}) => {
    return __globalMessage("niText1403", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()), "valor3": (__ctx.e2()), "valor4": (__ctx.e3()), "valor5": (__ctx.e4()), "valor6": (__ctx.e5()), "valor7": (__ctx.e6()), "valor8": (__ctx.e7()), "valor9": (__ctx.e8()), "valor10": (__ctx.e9()), "valor11": (__ctx.e10()), "valor12": (__ctx.e11()), "valor13": (__ctx.e12()), "valor14": (__ctx.e13()), "valor15": (__ctx.e14()), "valor16": (__ctx.e15()), "valor17": (__ctx.e16()) });
};
export const niText1404 = (__ctx = {}) => {
    return __globalMessage("niText1404", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()), "valor3": (__ctx.e2()), "valor4": (__ctx.e3()), "valor5": (__ctx.e4()) });
};
export const niText1405 = (__ctx = {}) => {
    return __globalMessage("niText1405", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()), "valor3": (__ctx.e2()) });
};
export const niText1406 = (__ctx = {}) => {
    return __globalMessage("niText1406", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niText1407 = (__ctx = {}) => {
    return __globalMessage("niText1407", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niText1408 = (__ctx = {}) => {
    return __globalMessage("niText1408", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niText1409 = (__ctx = {}) => {
    return __globalMessage("niText1409", { "valor": (__ctx.e0()) });
};
export const niText1410 = (__ctx = {}) => {
    return __globalMessage("niText1410", { "valor": (__ctx.e0()) });
};
export const niText1411 = (__ctx = {}) => {
    return __globalMessage("niText1411");
};
export const niText1412 = (__ctx = {}) => {
    return __globalMessage("niText1412", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()), "valor3": (__ctx.e2()), "valor4": (__ctx.e3()), "valor5": (__ctx.e4()), "valor6": (__ctx.e5()) });
};
export const niText1413 = (__ctx = {}) => {
    return __globalMessage("niText1413", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niText1414 = (__ctx = {}) => {
    return __globalMessage("niText1414");
};
export const niText1415 = (__ctx = {}) => {
    return __globalMessage("niText1415", { "valor": (__ctx.e0()) });
};
export const niText1416 = (__ctx = {}) => {
    return __globalMessage("niText1416");
};
export const niText1417 = (__ctx = {}) => {
    return __globalMessage("niText1417", { "valor": (__ctx.e0()) });
};
export const niText1418 = (__ctx = {}) => {
    return __globalMessage("niText1418", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niText1419 = (__ctx = {}) => {
    return __globalMessage("niText1419", { "valor": (__ctx.e0()) });
};
export const niText1420 = (__ctx = {}) => {
    return __globalMessage("niText1420", { "valor": (__ctx.e0()) });
};
export const niText1421 = (__ctx = {}) => {
    return __globalMessage("niText1421", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()), "valor3": (__ctx.e2()), "valor4": (__ctx.e3()), "valor5": (__ctx.e4()) });
};
export const niText1422 = (__ctx = {}) => {
    return __globalMessage("niText1422", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niText1423 = (__ctx = {}) => {
    return __globalMessage("niText1423", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niText1424 = (__ctx = {}) => {
    return __globalMessage("niText1424", { "valor": (__ctx.e0()) });
};
export const niText1425 = (__ctx = {}) => {
    return __globalMessage("niText1425", { "valor": (__ctx.e0()) });
};
export const niText1426 = (__ctx = {}) => {
    return __globalMessage("niText1426", { "valor": (__ctx.e0()) });
};
export const niText1427 = (__ctx = {}) => {
    return __globalMessage("niText1427", { "valor": (__ctx.e0()) });
};
export const niText1428 = (__ctx = {}) => {
    return __globalMessage("niText1428", { "valor": (__ctx.e0()) });
};
export const niText1429 = (__ctx = {}) => {
    return __globalMessage("niText1429", { "valor": (__ctx.e0()) });
};
export const niText1430 = (__ctx = {}) => {
    return __globalMessage("niText1430", { "valor": (__ctx.e0()) });
};
export const niText1431 = (__ctx = {}) => {
    return __globalMessage("niText1431", { "valor": (__ctx.e0()) });
};
export const niText1433 = (__ctx = {}) => {
    return __globalMessage("niText1433", { "valor": (__ctx.e0()) });
};
export const niText1434 = (__ctx = {}) => {
    return __globalMessage("niText1434", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niText1435 = (__ctx = {}) => {
    return __globalMessage("niText1435", { "valor": (__ctx.e0()) });
};
export const niText1436 = (__ctx = {}) => {
    return __globalMessage("niText1436", { "valor": (__ctx.e0()) });
};
export const niText1437 = (__ctx = {}) => {
    return __globalMessage("niText1437", { "valor": (__ctx.e0()) });
};
export const niText1438 = (__ctx = {}) => {
    return __globalMessage("niText1438", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niText1439 = (__ctx = {}) => {
    return __globalMessage("niText1439", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niText1440 = (__ctx = {}) => {
    return __globalMessage("niText1440", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niText1441 = (__ctx = {}) => {
    return __globalMessage("niText1441", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niText1442 = (__ctx = {}) => {
    return __globalMessage("niText1442", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niText1443 = (__ctx = {}) => {
    return __globalMessage("niText1443", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niText1444 = (__ctx = {}) => {
    return __globalMessage("niText1444", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niText1445 = (__ctx = {}) => {
    return __globalMessage("niText1445", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niText1446 = (__ctx = {}) => {
    return __globalMessage("niText1446", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niText1447 = (__ctx = {}) => {
    return __globalMessage("niText1447", { "valor": (__ctx.e0()) });
};
export const niText1448 = (__ctx = {}) => {
    return __globalMessage("niText1448", { "valor": (__ctx.e0()) });
};
export const niText1449 = (__ctx = {}) => {
    return __globalMessage("niText1449", { "valor": (__ctx.e0()) });
};
export const niText1450 = (__ctx = {}) => {
    return __globalMessage("niText1450", { "valor": (__ctx.e0()) });
};
export const niText1451 = (__ctx = {}) => {
    return __globalMessage("niText1451", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niText1452 = (__ctx = {}) => {
    return __globalMessage("niText1452", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niText1453 = (__ctx = {}) => {
    return __globalMessage("niText1453", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niText1454 = (__ctx = {}) => {
    return __globalMessage("niText1454", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niText1455 = (__ctx = {}) => {
    return __globalMessage("niText1455", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niText1456 = (__ctx = {}) => {
    return __globalMessage("niText1456", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niText1457 = (__ctx = {}) => {
    return __globalMessage("niText1457", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niText1458 = (__ctx = {}) => {
    return __globalMessage("niText1458", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niText1459 = (__ctx = {}) => {
    return __globalMessage("niText1459", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niText1460 = (__ctx = {}) => {
    return __globalMessage("niText1460", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niText1461 = (__ctx = {}) => {
    return __globalMessage("niText1461", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niText1462 = (__ctx = {}) => {
    return __globalMessage("niText1462", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niText1463 = (__ctx = {}) => {
    return __globalMessage("niText1463", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niText1464 = (__ctx = {}) => {
    return __globalMessage("niText1464", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niText1465 = (__ctx = {}) => {
    return __globalMessage("niText1465", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()), "valor3": (__ctx.e2()) });
};
export const niText1466 = (__ctx = {}) => {
    return __globalMessage("niText1466", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()), "valor3": (__ctx.e2()) });
};
export const niText1467 = (__ctx = {}) => {
    return __globalMessage("niText1467", { "valor": (__ctx.e0()) });
};
export const niText1468 = (__ctx = {}) => {
    return __globalMessage("niText1468", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()), "valor3": (__ctx.e2()) });
};
export const niText1469 = (__ctx = {}) => {
    return __globalMessage("niText1469", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()), "valor3": (__ctx.e2()) });
};
export const niText1470 = (__ctx = {}) => {
    return __globalMessage("niText1470", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niText1471 = (__ctx = {}) => {
    return __globalMessage("niText1471");
};
export const niText1472 = (__ctx = {}) => {
    return __globalMessage("niText1472", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()), "valor3": (__ctx.e2()), "valor4": (__ctx.e3()), "valor5": (__ctx.e4()), "valor6": (__ctx.e5()) });
};
export const niText1473 = (__ctx = {}) => {
    return __globalMessage("niText1473", { "valor": (__ctx.e0()) });
};
export const niText1474 = (__ctx = {}) => {
    return __globalMessage("niText1474", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()), "valor3": (__ctx.e2()), "valor4": (__ctx.e3()), "valor5": (__ctx.e4()), "valor6": (__ctx.e5()), "valor7": (__ctx.e6()), "valor8": (__ctx.e7()), "valor9": (__ctx.e8()), "valor10": (__ctx.e9()), "valor11": (__ctx.e10()), "valor12": (__ctx.e11()), "valor13": (__ctx.e12()), "valor14": (__ctx.e13()), "valor15": (__ctx.e14()), "valor16": (__ctx.e15()) });
};
export const niText1475 = (__ctx = {}) => {
    return __globalMessage("niText1475", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niText1476 = (__ctx = {}) => {
    return __globalMessage("niText1476", { "valor": (__ctx.e0()) });
};
export const niText1477 = (__ctx = {}) => {
    return __globalMessage("niText1477", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()), "valor3": (__ctx.e2()) });
};
export const niText1478 = (__ctx = {}) => {
    return __globalMessage("niText1478", { "valor": (__ctx.e0()), "valor2": (__ctx.e1()) });
};
export const niReplyExtra001 = (__ctx = {}) => {
    return __globalMessage("niReplyExtra001", { "valor": (__niFormatBlock(typeof __ctx.e0 === "function" ? __ctx.e0() : "")) });
};
export const niReplyExtra002 = (__ctx = {}) => {
    return __globalMessage("niReplyExtra002", { "valor": (__niFormatBlock(typeof __ctx.e0 === "function" ? __ctx.e0() : "")) });
};
export const niReplyExtra003 = (__ctx = {}) => {
    return __globalMessage("niReplyExtra003", { "valor": (__niFormatBlock(typeof __ctx.e0 === "function" ? __ctx.e0() : "")) });
};
export const niReplyExtra004 = (__ctx = {}) => {
    return __globalMessage("niReplyExtra004", { "valor": (__niFormatBlock(typeof __ctx.e0 === "function" ? __ctx.e0() : "")) });
};
export const niReplyExtra005 = (__ctx = {}) => {
    return __globalMessage("niReplyExtra005", { "valor": (__niFormatBlock(typeof __ctx.e0 === "function" ? __ctx.e0() : "")) });
};
export const niReplyExtra006 = (__ctx = {}) => {
    return __globalMessage("niReplyExtra006", { "valor": (__niFormatBlock(typeof __ctx.e0 === "function" ? __ctx.e0() : "")) });
};
export const niReplyExtra007 = (__ctx = {}) => {
    return __globalMessage("niReplyExtra007", { "valor": (__niFormatBlock(typeof __ctx.e0 === "function" ? __ctx.e0() : "")) });
};
export const niReplyExtra008 = (__ctx = {}) => {
    return __globalMessage("niReplyExtra008", { "valor": (__niFormatBlock(typeof __ctx.e0 === "function" ? __ctx.e0() : "")) });
};
export const niReplyExtra009 = (__ctx = {}) => {
    return __globalMessage("niReplyExtra009", { "valor": (__niFormatBlock(typeof __ctx.e0 === "function" ? __ctx.e0() : "")) });
};
export const niReplyExtra010 = (__ctx = {}) => {
    return __globalMessage("niReplyExtra010", { "valor": (__niFormatBlock(typeof __ctx.e0 === "function" ? __ctx.e0() : "")) });
};
export const niReplyExtra011 = (__ctx = {}) => {
    return __globalMessage("niReplyExtra011", { "valor": (__niFormatBlock(typeof __ctx.e0 === "function" ? __ctx.e0() : "")) });
};
export const niReplyExtra012 = (__ctx = {}) => {
    return __globalMessage("niReplyExtra012", { "valor": (__niFormatBlock(typeof __ctx.e0 === "function" ? __ctx.e0() : "")) });
};
export const niReplyExtra013 = (__ctx = {}) => {
    return __globalMessage("niReplyExtra013", { "valor": (__niFormatBlock(typeof __ctx.e0 === "function" ? __ctx.e0() : "")) });
};
export const niReplyExtra014 = (__ctx = {}) => {
    return __globalMessage("niReplyExtra014", { "valor": (__niFormatBlock(typeof __ctx.e0 === "function" ? __ctx.e0() : "")) });
};
export const niReplyExtra015 = (__ctx = {}) => {
    return __globalMessage("niReplyExtra015", { "valor": (__niFormatBlock(typeof __ctx.e0 === "function" ? __ctx.e0() : "")) });
};
export const niReplyExtra016 = (__ctx = {}) => {
    return __globalMessage("niReplyExtra016", { "valor": (__niFormatBlock(typeof __ctx.e0 === "function" ? __ctx.e0() : "")) });
};
export const niReplyExtra017 = (__ctx = {}) => {
    return __globalMessage("niReplyExtra017", { "valor": (__niFormatBlock(typeof __ctx.e0 === "function" ? __ctx.e0() : "")) });
};
export const niReplyExtra018 = (__ctx = {}) => {
    return __globalMessage("niReplyExtra018", { "valor": (__niFormatBlock(typeof __ctx.e0 === "function" ? __ctx.e0() : "")) });
};
export const niReplyExtra019 = (__ctx = {}) => {
    return __globalMessage("niReplyExtra019", { "valor": (__niFormatBlock(typeof __ctx.e0 === "function" ? __ctx.e0() : "")) });
};
export const niReplyExtra020 = (__ctx = {}) => {
    return __globalMessage("niReplyExtra020", { "valor": (__niFormatBlock(typeof __ctx.e0 === "function" ? __ctx.e0() : "")) });
};
export const niReplyExtra021 = (__ctx = {}) => {
    return __globalMessage("niReplyExtra021", { "valor": (__niFormatBlock(typeof __ctx.e0 === "function" ? __ctx.e0() : "")) });
};
export const niReplyExtra022 = (__ctx = {}) => {
    return __globalMessage("niReplyExtra022", { "valor": (__niFormatBlock(typeof __ctx.e0 === "function" ? __ctx.e0() : "")) });
};
export const niReplyExtra023 = (__ctx = {}) => {
    return __globalMessage("niReplyExtra023", { "valor": (__niFormatBlock(typeof __ctx.e0 === "function" ? __ctx.e0() : "")) });
};
export const niReplyExtra024 = (__ctx = {}) => {
    return __globalMessage("niReplyExtra024", { "valor": (__niFormatBlock(typeof __ctx.e0 === "function" ? __ctx.e0() : "")) });
};
export const niConsole001 = () => '[YUTA LOG] [ANTI SYSTEM ERROR]';
export const niConsole002 = () => '[YUTA LOG] erro ao enviar x9soli:';
export const niConsole003 = () => '[YUTA LOG] ANTICANAL erro:';
export const niConsole004 = () => '[YUTA LOG] Erro ensureTakeDB:';
export const niConsole005 = () => __globalMessage("niConsole005__texto1");
export const niConsole006 = () => '[YUTA LOG] [AUTO LIMPEZA CONTADOR]';
export const niConsole007 = () => '[YUTA LOG] Erro ao desativar aluguel:';
export const niConsole008 = () => '[YUTA LOG] Erro ao remover:';
export const niConsole009 = () => '[YUTA LOG] erro ao carregar horarios:';
export const niConsole010 = () => '[YUTA LOG] Erro Auto TikTok:';
export const niConsole011 = () => '[YUTA LOG] Erro Auto Instagram:';
export const niConsole012 = () => __globalMessage("niConsole012__texto1");
export const niConsole013 = () => '[YUTA LOG] [';
export const niConsole014 = () => '[YUTA LOG] erro ao definir fechamento:';
export const niConsole015 = () => '[YUTA LOG] erro ao definir abertura:';
export const niConsole016 = () => '[YUTA LOG] erro ao remover horario:';
export const niConsole017 = () => '[YUTA LOG] Erro fundobv:';
export const niConsole018 = () => __globalMessage("niConsole018__texto1");
export const niConsole019 = () => '[YUTA LOG] Erro geral no anticanal:';
export const niConsole020 = () => '[YUTA LOG] Erro no Case Link:';
export const niConsole021 = () => '[YUTA LOG] erro ao transcrever:';
export const niConsole022 = () => '[YUTA LOG] Erro em play:';
export const niConsole023 = () => '[YUTA LOG] Erro em playvideo:';
export const niConsole024 = () => '[YUTA LOG] Erro em playdoc:';
export const niConsole025 = () => '[YUTA LOG] Erro em ytsearch:';
export const niConsole026 = () => '[YUTA LOG] ERRO WIKI:';
export const niConsole027 = () => '[YUTA LOG] ERRO CLIMA:';
export const niConsole028 = () => '[YUTA LOG] ERRO SIGNO API:';
export const niConsole029 = () => '[YUTA LOG] ERRO ALUGARPLANO:';
export const niConsole030 = () => '[YUTA LOG] ERRO LYRICS:';
export const niConsole031 = () => '[YUTA LOG] Erro no comando VORD:';
export const niConsole032 = () => __globalMessage("niConsole032__texto1");
export const niConsole033 = () => '[YUTA LOG] Erro no comando \'Eu Nunca\':';
export const niConsole034 = () => '[YUTA LOG] [COINS ERRO]';
export const niConsole035 = () => '[YUTA LOG] [PERFILCIDADE ERRO]';
export const niConsole036 = () => '[YUTA LOG] erro ao transcrever:';
export const niConsole037 = () => '[YUTA LOG] erro no gatilho do autorepo:';
export const niConsole038 = () => __globalMessage("niConsole038__texto1");
export const niAntiDeleteApagada = (__ctx = {}) => {
    const usuario = __ctx.e0?.() || '???';
    const conteudo = __ctx.e1?.() || __ctx.e0?.() || 'sᴇᴍ ᴛᴇxᴛᴏ';
    return __globalMessage("niAntiDeleteApagada", { "usuario": (usuario), "conteudo": (conteudo) });
};
export const niAntiDeleteMidiaApagada = (__ctx = {}) => {
    return __globalMessage("niAntiDeleteMidiaApagada", { "valor": (__ctx.e0?.() || '???') });
};
export const niAntiDeleteCardApagada = (__ctx = {}) => `🚨 𝗔𝗡𝗧𝗜 𝗗𝗘𝗟𝗘𝗧𝗘`;
export const niAntiDeleteCardBody = (__ctx = {}) => `ᴘᴏʀ: ${__ctx.e0?.() || 'ᴜsᴜᴀʀɪᴏ'}`;
export const niX9SolicitacaoRecusada = (__ctx = {}) => {
    return __globalMessage("niX9SolicitacaoRecusada", { "valor": (__ctx.e0?.() || '???'), "valor2": (__ctx.e1?.() || 'sᴇᴍ ᴅᴀᴛᴀ') });
};
export const niX9SolicitacaoAprovada = (__ctx = {}) => {
    return __globalMessage("niX9SolicitacaoAprovada", { "valor": (__ctx.e0?.() || '???'), "valor2": (__ctx.e1?.() || 'sᴇᴍ ᴅᴀᴛᴀ') });
};
export const niX9Promocao = (__ctx = {}) => {
    return __globalMessage("niX9Promocao", { "valor": (__ctx.e0?.() || '???'), "valor2": (__ctx.e1?.() || '???'), "valor3": (__ctx.e2?.() || 'sᴇᴍ ᴅᴀᴛᴀ') });
};
export const niX9Rebaixamento = (__ctx = {}) => {
    return __globalMessage("niX9Rebaixamento", { "valor": (__ctx.e0?.() || '???'), "valor2": (__ctx.e1?.() || '???'), "valor3": (__ctx.e2?.() || 'sᴇᴍ ᴅᴀᴛᴀ') });
};
export const niSolicitacoesLinha = (__ctx = {}) => {
    return __globalMessage("niSolicitacoesLinha", { "valor": (__ctx.e0?.() || '1'), "valor2": (__ctx.e1?.() || '???'), "valor3": (__ctx.e2?.() || 'sᴇᴍ ᴍᴇᴛᴏᴅᴏ'), "valor4": (__ctx.e3?.() || 'ɴᴀᴏ ɪᴅᴇɴᴛɪғɪᴄᴀᴅᴀ') });
};
export const niSolicitacoesPendentesLista = (__ctx = {}) => {
    return __globalMessage("niSolicitacoesPendentesLista", { "valor": (__ctx.e0?.() || '> *ɴᴇɴʜᴜᴍᴀ sᴏʟɪᴄɪᴛᴀᴄᴀᴏ ᴇɴᴄᴏɴᴛʀᴀᴅᴀ.*') });
};
export const niJogoVelhaRecusado = (__ctx = {}) => __globalMessage("niJogoVelhaRecusado__texto1", { "valor": (__ctx.e0?.() || '???') });
export const niJogoVelhaVencedor = (__ctx = {}) => __globalMessage("niJogoVelhaVencedor__texto1", { "valor": (__ctx.e0?.() || '???') });
export const niCoinsSaldoInsuficiente = (__ctx = {}) => __globalMessage("niCoinsSaldoInsuficiente__texto1", { "valor": (__ctx.e0?.() || '???') });
export const niCoinsUsuarioNaoRegistrado = (__ctx = {}) => __globalMessage("niCoinsUsuarioNaoRegistrado__texto1", { "valor": (__ctx.e0?.() || '???') });
export const niSorteioVencedor = (__ctx = {}) => __globalMessage("niSorteioVencedor__texto1", { "valor": (__ctx.e0?.() || '???') });
export const niRoletaEscapou = (__ctx = {}) => __globalMessage("niRoletaEscapou__texto1", { "valor": (__ctx.e0?.() || '???') });
export const niRoletaDono = (__ctx = {}) => __globalMessage("niRoletaDono__texto1", { "valor": (__ctx.e0?.() || '???') });
export const niRoletaPerdeu = (__ctx = {}) => __globalMessage("niRoletaPerdeu__texto1", { "valor": (__ctx.e0?.() || '???'), "valor2": (__ctx.e1?.() || 'ɴᴏ ᴘᴇ') });
export const niSerAdm = (__ctx = {}) => __globalMessage("niSerAdm__texto1", { "valor": (__ctx.e0?.() || '???') });
export const niSerMembro = (__ctx = {}) => __globalMessage("niSerMembro__texto1", { "valor": (__ctx.e0?.() || '???') });
export const niAddVipUso = (__ctx = {}) => __globalMessage("niAddVipUso__texto1", { "valor": (__ctx.e0?.() || '!addvip'), "valor2": (__ctx.e1?.() || '559999999999') });
export const niMuteJaSilenciado = (__ctx = {}) => __globalMessage("niMuteJaSilenciado__texto1", { "valor": (__ctx.e0?.() || '???') });
export const niMuteSilenciado = (__ctx = {}) => __globalMessage("niMuteSilenciado__texto1", { "valor": (__ctx.e0?.() || '???'), "valor2": (__ctx.e1?.() || '???') });
export const niMuteJaMutado = (__ctx = {}) => __globalMessage("niMuteJaMutado__texto1", { "valor": (__ctx.e0?.() || '???') });
export const niMuteMutado = (__ctx = {}) => __globalMessage("niMuteMutado__texto1", { "valor": (__ctx.e0?.() || '???'), "valor2": (__ctx.e1?.() || '???') });
export const niMuteNaoPunido = (__ctx = {}) => __globalMessage("niMuteNaoPunido__texto1", { "valor": (__ctx.e0?.() || '???') });
export const niMuteLiberado = (__ctx = {}) => __globalMessage("niMuteLiberado__texto1", { "valor": (__ctx.e0?.() || '???'), "valor2": (__ctx.e1?.() || '???') });
export const niAdminsChamada = (__ctx = {}) => __globalMessage("niAdminsChamada__texto1", { "valor": (__ctx.e0?.() || '???'), "valor2": (__ctx.e1?.() || 'ɴᴇɴʜᴜᴍ ᴍᴏᴛɪᴠᴏ ɪɴғᴏʀᴍᴀᴅᴏ') });
export const niConsultarVip = (__ctx = {}) => __globalMessage("niConsultarVip__texto1", { "valor": (__ctx.e0?.() || '???'), "valor2": (__ctx.e1?.() || 'sᴇᴍ ɪɴғᴏʀᴍᴀᴄᴀᴏ') });
export const niMencionarResultado = (__ctx = {}) => __globalMessage("niMencionarResultado__texto1", { "valor": (__ctx.e0?.() || 'ᴇssᴀ ᴏᴘᴄᴀᴏ'), "valor2": (__ctx.e1?.() || '???') });
export const niNamoroJaPediu = () => __globalMessage("niNamoroJaPediu__texto1");
export const niAntideleteStatus = (__ctx = {}) => __ctx.e0?.() === true
    ? __globalMessage("niAntideleteStatus__texto1")
    : __globalMessage("niAntideleteStatus__texto2");
export const niConsoleJogoVelhaExpirado = () => '[YUTA LOG] Jogo da velha expirado.';
export const niJogoVelhaTabuleiro = (__ctx = {}) => {
    return __globalMessage("niJogoVelhaTabuleiro", { "valor": (__ctx.e0?.() || '???'), "valor2": (__ctx.e1?.() || '???'), "valor3": (__ctx.e2?.() || '???'), "valor4": (__ctx.e3?.() || '') });
};

export const niAntirouboPromocaoDetectada = (__ctx = {}) => {
    return __globalMessage("niAntirouboPromocaoDetectada", { "valor": (__ctx.e0?.() || 'ʏᴜᴛᴀʙᴏᴛ'), "valor2": (__ctx.e1?.() || '@???'), "valor3": (__ctx.e2?.() || '???') });
};
export const niAntirouboRebaixamentoDetectado = (__ctx = {}) => {
    return __globalMessage("niAntirouboRebaixamentoDetectado", { "valor": (__ctx.e0?.() || 'ʏᴜᴛᴀʙᴏᴛ'), "valor2": (__ctx.e1?.() || '@???'), "valor3": (__ctx.e2?.() || '???') });
};

export const niAntirouboStatus = (__ctx = {}) => __ctx.e0?.() === true
    ? __globalMessage("niAntirouboStatus__texto1", { "valor": (__ctx.e1?.() || '!') })
    : __globalMessage("niAntirouboStatus__texto2");
export const niLimitarCmdStatus = (__ctx = {}) => __ctx.e0?.() === true
    ? __globalMessage("niLimitarCmdStatus__texto1", { "valor": (__ctx.e1?.() || 'ᴀᴛᴜᴀʟ') })
    : __globalMessage("niLimitarCmdStatus__texto2", { "valor": (__ctx.e1?.() || 'ᴀᴛᴜᴀʟ') });
const __niStatusSmallCaps = (texto = '') => String(texto).toLowerCase().replace(/[a-z]/g, letra => ({
    a: 'ᴀ', b: 'ʙ', c: 'ᴄ', d: 'ᴅ', e: 'ᴇ', f: 'ғ', g: 'ɢ', h: 'ʜ', i: 'ɪ', j: 'ᴊ',
    k: 'ᴋ', l: 'ʟ', m: 'ᴍ', n: 'ɴ', o: 'ᴏ', p: 'ᴘ', q: 'ǫ', r: 'ʀ', s: 's', t: 'ᴛ',
    u: 'ᴜ', v: 'ᴠ', w: 'ᴡ', x: 'x', y: 'ʏ', z: 'ᴢ'
}[letra] || letra));

const __niStatusBold = (texto = '') => String(texto).toUpperCase().replace(/[A-Z]/g, letra => String.fromCodePoint(0x1D400 + letra.charCodeAt(0) - 65));

export const niStatusPainelLinha = (__ctx = {}) => {
    const ativo = __ctx.e0?.() === true;
    const nome = __niStatusBold(__ctx.e1?.() || 'SISTEMA');
    const descricao = __niStatusSmallCaps(__ctx.e2?.() || 'sistema do bot');
    return {
        header: `${ativo ? '✅ 𝐀𝐓𝐈𝐕𝐀𝐃𝐎' : '❌ 𝐃𝐄𝐒𝐀𝐓𝐈𝐕𝐀𝐃𝐎'} • ${nome}`,
        title: ativo ? 'ᴛᴏǫᴜᴇ ᴘᴀʀᴀ ᴅᴇsᴀᴛɪᴠᴀʀ' : 'ᴛᴏǫᴜᴇ ᴘᴀʀᴀ ᴀᴛɪᴠᴀʀ',
        description: descricao
    };
};

export const niStatusPainelUI = (__ctx = {}) => ({
    texto: __globalMessage("niStatusPainelUI__texto1"),
    rodape: `✦ ${__ctx.e0?.() || 'ʏᴜᴛᴀʙᴏᴛ'} • sᴛᴀᴛᴜs ᴀᴛᴜᴀʟɪᴢᴀᴅᴏ ✦`,
    botao: __globalMessage("niStatusPainelUI__texto2"),
    ativado: '✅ 𝐀𝐓𝐈𝐕𝐀𝐃𝐎',
    desativado: '❌ 𝐃𝐄𝐒𝐀𝐓𝐈𝐕𝐀𝐃𝐎',
    toqueAtivar: 'ᴛᴏǫᴜᴇ ᴘᴀʀᴀ ᴀᴛɪᴠᴀʀ',
    toqueDesativar: 'ᴛᴏǫᴜᴇ ᴘᴀʀᴀ ᴅᴇsᴀᴛɪᴠᴀʀ',
    secoes: {
        protecao: __globalMessage("niStatusPainelUI__texto3"),
        administracao: __globalMessage("niStatusPainelUI__texto4"),
        automacoes: __globalMessage("niStatusPainelUI__texto5"),
        dono: __globalMessage("niStatusPainelUI__texto6")
    }
});

export const niModoBotoesStatus = (__ctx = {}) => __ctx.e0?.() === true
    ? __globalMessage("niModoBotoesStatus__texto1")
    : __globalMessage("niModoBotoesStatus__texto2");
export const niApresentarGrupo = (__ctx = {}) => {
    return __globalMessage("niApresentarGrupo", { "valor": (__ctx.e0?.() || 'ᴀᴛᴜᴀʟ') });
};
export const niRegrasApresentacaoPapo = () => {
    return __globalMessage("niRegrasApresentacaoPapo");
};
export const niDigtApresentacao = () => {
    return __globalMessage("niDigtApresentacao");
};
export const niNumerosPaisGrupo = (__ctx = {}) => {
    return __globalMessage("niNumerosPaisGrupo", { "valor": (__ctx.e0?.() || '??'), "valor2": (__ctx.e1?.() || '> *ɴᴇɴʜᴜᴍ ᴍᴇᴍʙʀᴏ ᴇɴᴄᴏɴᴛʀᴀᴅᴏ.*') });
};
export const niNumerosDDDGrupo = (__ctx = {}) => {
    return __globalMessage("niNumerosDDDGrupo", { "valor": (__ctx.e0?.() || '??'), "valor2": (__ctx.e1?.() || '> *ɴᴇɴʜᴜᴍ ᴍᴇᴍʙʀᴏ ᴇɴᴄᴏɴᴛʀᴀᴅᴏ.*') });
};
export const niListaCmdVip = (__ctx = {}) => {
    return __globalMessage("niListaCmdVip", { "valor": (__ctx.e0?.() || '0'), "valor2": (__ctx.e1?.() || '> *ɴᴇɴʜᴜᴍ ᴄᴏᴍᴀɴᴅᴏ ɴᴀ ʟɪsᴛᴀ.*') });
};
export const niListaBanidosBot = (__ctx = {}) => {
    return __globalMessage("niListaBanidosBot", { "valor": (__ctx.e0?.() || '0'), "valor2": (__ctx.e1?.() || '> *ɴᴇɴʜᴜᴍ ᴜsᴜᴀʀɪᴏ ɴᴀ ʟɪsᴛᴀ.*') });
};
export const niListaCmdBloqueadosGrupo = (__ctx = {}) => {
    return __globalMessage("niListaCmdBloqueadosGrupo", { "valor": (__ctx.e0?.() || '0'), "valor2": (__ctx.e1?.() || '> *ɴᴇɴʜᴜᴍ ᴄᴏᴍᴀɴᴅᴏ ʙʟᴏǫᴜᴇᴀᴅᴏ.*') });
};
export const niListaCmdBloqueadosGlobal = (__ctx = {}) => {
    return __globalMessage("niListaCmdBloqueadosGlobal", { "valor": (__ctx.e0?.() || '0'), "valor2": (__ctx.e1?.() || '> *ɴᴇɴʜᴜᴍ ᴄᴏᴍᴀɴᴅᴏ ʙʟᴏǫᴜᴇᴀᴅᴏ.*') });
};
export const niListaCidadesDDD = (__ctx = {}) => {
    return __globalMessage("niListaCidadesDDD", { "valor": (__ctx.e0?.() || '??'), "valor2": (__ctx.e1?.() || 'ɴᴀᴏ ɪᴅᴇɴᴛɪғɪᴄᴀᴅᴏ'), "valor3": (__ctx.e2?.() || '> *ɴᴇɴʜᴜᴍᴀ ᴄɪᴅᴀᴅᴇ ᴇɴᴄᴏɴᴛʀᴀᴅᴀ.*') });
};
export const niAnotacaoResposta = (__ctx = {}) => {
    return __globalMessage("niAnotacaoResposta", { "valor": (__ctx.e0?.() || 'sᴇᴍ ᴄᴏɴᴛᴇᴜᴅᴏ.') });
};
export const niListaAnotacoes = (__ctx = {}) => {
    return __globalMessage("niListaAnotacoes", { "valor": (__ctx.e0?.() || 'ᴀᴛᴜᴀʟ'), "valor2": (__ctx.e1?.() || '> *ɴᴇɴʜᴜᴍᴀ ᴀɴᴏᴛᴀᴄᴀᴏ ᴇɴᴄᴏɴᴛʀᴀᴅᴀ.*') });
};
export const niFamiliaInfo = (__ctx = {}) => {
    return __globalMessage("niFamiliaInfo", { "valor": (__ctx.e0?.() || '???'), "valor2": (__ctx.e1?.() || '???'), "valor3": (__ctx.e2?.() || '> *sᴇᴍ ᴅᴇᴛᴀʟʜᴇs ᴘᴀʀᴀ ᴍᴏsᴛʀᴀʀ.*') });
};
export const niPokemonBatalha = (__ctx = {}) => {
    return __globalMessage("niPokemonBatalha", { "valor": (__ctx.e0?.() || 'ᴀ ʙᴀᴛᴀʟʜᴀ ғᴏɪ ғɪɴᴀʟɪᴢᴀᴅᴀ.') });
};
export const niMeuNomeBot = (__ctx = {}) => {
    return __globalMessage("niMeuNomeBot", { "valor": (__ctx.e0?.() || 'sᴇᴍ ɴᴏᴍᴇ') });
};
export const niRouboPunicao = (__ctx = {}) => {
    return __globalMessage("niRouboPunicao", { "valor": (__ctx.e0?.() || 'ᴠᴏᴄᴇ ɴᴀᴏ ʟᴇᴠᴏᴜ ɴᴀᴅᴀ.'), "valor2": (__ctx.e1 ? __globalMessage("niRouboPunicao__texto1", { "valor": (__ctx.e1()) }) : '') });
};
export const niPetBatalhaResultado = (__ctx = {}) => {
    return __globalMessage("niPetBatalhaResultado", { "valor": (__ctx.e0?.() || 'ᴀ ʙᴀᴛᴀʟʜᴀ ғᴏɪ ғɪɴᴀʟɪᴢᴀᴅᴀ.') });
};
export const niPokemonBatalhaResultado = (__ctx = {}) => {
    return __globalMessage("niPokemonBatalhaResultado", { "valor": (__ctx.e0?.() || 'ᴀ ʙᴀᴛᴀʟʜᴀ ғᴏɪ ғɪɴᴀʟɪᴢᴀᴅᴀ.') });
};
export const niImcResultado = (__ctx = {}) => {
    return __globalMessage("niImcResultado", { "valor": (__ctx.e0?.() || '0'), "valor2": (__ctx.e1?.() || 'sᴇᴍ ᴀᴠᴀʟɪᴀᴄᴀᴏ') });
};
export const niEnviandoPv = () => {
    return __globalMessage("niEnviandoPv");
};
export const niFamiliaPedidoAdocao = (__ctx = {}) => {
    return __globalMessage("niFamiliaPedidoAdocao", { "valor": (__ctx.e0?.() || '???'), "valor2": (__ctx.e1?.() || '???'), "valor3": (__ctx.e2?.() || '???') });
};
export const niFamiliaDetalhes = (__ctx = {}) => {
    return __globalMessage("niFamiliaDetalhes", { "valor": (__ctx.e0?.() || '???'), "valor2": (__ctx.e1?.() || '???'), "valor3": (__ctx.e2?.() || '> *sᴇᴍ ғɪʟʜᴏs ʀᴇɢɪsᴛʀᴀᴅᴏs.*') });
};
export const niMarcarGrupoLista = (__ctx = {}) => {
    return __globalMessage("niMarcarGrupoLista", { "valor": (__ctx.e0?.() || 'ɢʀᴜᴘᴏ ᴀᴛᴜᴀʟ'), "valor2": (__ctx.e1?.() ? __globalMessage("niMarcarGrupoLista__texto1", { "valor": (__ctx.e1()) }) : ''), "valor3": (__ctx.e2?.() || '> *ɴᴇɴʜᴜᴍ ᴍᴇᴍʙʀᴏ ᴇɴᴄᴏɴᴛʀᴀᴅᴏ.*') });
};
export const niUsoAddCoins = (__ctx = {}) => {
    return __globalMessage("niUsoAddCoins", { "prefix": (__ctx.prefix || ''), "valor": (__ctx.command || 'addcoins'), "valor2": (__ctx.dono || 'numero') });
};
export const niUsoRemoveCoins = (__ctx = {}) => {
    return __globalMessage("niUsoRemoveCoins", { "prefix": (__ctx.prefix || ''), "valor": (__ctx.command || 'removecoins'), "valor2": (__ctx.dono || 'numero') });
};
export const niTttMsgBoard = (__ctx = {}) => {
    const extra = __ctx.e3?.() || '';
    return __globalMessage("niTttMsgBoard", { "valor": (__ctx.e0?.() || '???'), "valor2": (__ctx.e1?.() || '???'), "valor3": (__ctx.e2?.() || '???'), "valor4": (extra ? __globalMessage("niTttMsgBoard__texto1", { "extra": (extra) }) : ''), "valor5": (__ctx.e4?.() || '') });
};
export const niTttAlreadyAccepted = () => {
    return __globalMessage("niTttAlreadyAccepted");
};
export const niTttAlreadyStarted = (__ctx = {}) => {
    return __globalMessage("niTttAlreadyStarted", { "valor": (__ctx.e0?.() || '!') });
};
export const niTttChallengeRefused = (__ctx = {}) => {
    return __globalMessage("niTttChallengeRefused", { "valor": (__ctx.e0?.() || '???'), "valor2": (__ctx.e1?.() || '???') });
};
export const niTttWaitingAccept = () => {
    return __globalMessage("niTttWaitingAccept");
};
export const niTttWrongTurn = (__ctx = {}) => {
    return __globalMessage("niTttWrongTurn", { "valor": (__ctx.e0?.() || '???') });
};
export const niTttPositionBusy = () => {
    return __globalMessage("niTttPositionBusy");
};
export const niTttInvalidMove = () => {
    return __globalMessage("niTttInvalidMove");
};
export const niTttDraw = (__ctx = {}) => {
    return __globalMessage("niTttDraw", { "valor": (__ctx.e0?.() || '') });
};
export const niTttWinner = (__ctx = {}) => {
    return __globalMessage("niTttWinner", { "valor": (__ctx.e0?.() || '???'), "valor2": (__ctx.e1?.() || '') });
};
export const niTttGameRunning = (__ctx = {}) => {
    return __globalMessage("niTttGameRunning", { "valor": (__ctx.e0?.() || '???'), "valor2": (__ctx.e1?.() || '???'), "valor3": (__ctx.e2?.() || '!') });
};
export const niTttNeedOpponent = (__ctx = {}) => {
    return __globalMessage("niTttNeedOpponent", { "valor": (__ctx.e0?.() || '!jogodavelha') });
};
export const niTttInvalidOpponentSelf = () => {
    return __globalMessage("niTttInvalidOpponentSelf");
};
export const niTttInvalidOpponentBot = () => {
    return __globalMessage("niTttInvalidOpponentBot");
};
export const niTttChallengeSent = (__ctx = {}) => {
    return __globalMessage("niTttChallengeSent", { "valor": (__ctx.e0?.() || '???'), "valor2": (__ctx.e1?.() || '???'), "valor3": (__ctx.e2?.() || '!') });
};
export const niTttNoGame = () => {
    return __globalMessage("niTttNoGame");
};
export const niTttNoResetPermission = () => {
    return __globalMessage("niTttNoResetPermission");
};
export const niTttResetOk = () => {
    return __globalMessage("niTttResetOk");
};
export const niListaFakesGrupo = (__ctx = {}) => {
    return __globalMessage("niListaFakesGrupo", { "valor": (__ctx.e0?.() || '0'), "valor2": (__ctx.e1?.() || '> *ɴᴇɴʜᴜᴍ ɴᴜᴍᴇʀᴏ ғᴀᴋᴇ ɴᴀ ʟɪsᴛᴀ.*') });
};
export const niListaBrasileirosGrupo = (__ctx = {}) => {
    return __globalMessage("niListaBrasileirosGrupo", { "valor": (__ctx.e0?.() || '0'), "valor2": (__ctx.e1?.() || '> *ɴᴇɴʜᴜᴍ ɴᴜᴍᴇʀᴏ ʙʀ ɴᴀ ʟɪsᴛᴀ.*') });
};
export const niCoinsCassinoVitoriaAleatoria = () => {
    const lista = [
        __globalMessage("niCoinsCassinoVitoriaAleatoria__texto1"),
        __globalMessage("niCoinsCassinoVitoriaAleatoria__texto2"),
        __globalMessage("niCoinsCassinoVitoriaAleatoria__texto3")
    ];
    return lista[Math.floor(Math.random() * lista.length)];
};
export const niCoinsCassinoDerrotaAleatoria = () => {
    const lista = [
        __globalMessage("niCoinsCassinoDerrotaAleatoria__texto1"),
        __globalMessage("niCoinsCassinoDerrotaAleatoria__texto2"),
        __globalMessage("niCoinsCassinoDerrotaAleatoria__texto3")
    ];
    return lista[Math.floor(Math.random() * lista.length)];
};
export const niCoinsMineracaoSucessoAleatoria = (__ctx = {}) => {
    const valor = __ctx.e0?.() || '0';
    const lista = [
        __globalMessage("niCoinsMineracaoSucessoAleatoria__texto1", { "valor": (valor) }),
        __globalMessage("niCoinsMineracaoSucessoAleatoria__texto2", { "valor": (valor) }),
        __globalMessage("niCoinsMineracaoSucessoAleatoria__texto3", { "valor": (valor) }),
        __globalMessage("niCoinsMineracaoSucessoAleatoria__texto4", { "valor": (valor) })
    ];
    return lista[Math.floor(Math.random() * lista.length)];
};
export const niCoinsMineracaoFalhaAleatoria = (__ctx = {}) => {
    const restantes = __ctx.e0?.();
    const lista = [
        __globalMessage("niCoinsMineracaoFalhaAleatoria__texto1"),
        __globalMessage("niCoinsMineracaoFalhaAleatoria__texto2"),
        'ᴀ ᴍɪɴᴀ ᴇsᴛᴀᴠᴀ ᴠᴀᴢɪᴀ ᴅᴇssᴀ ᴠᴇᴢ.'
    ];
    let texto = __globalMessage("niCoinsMineracaoFalhaAleatoria__texto3", { "valor": (lista[Math.floor(Math.random() * lista.length)]) });
    texto += Number(restantes) <= 0
        ? __globalMessage("niCoinsMineracaoFalhaAleatoria__texto4")
        : __globalMessage("niCoinsMineracaoFalhaAleatoria__texto5", { "restantes": (restantes) });
    return texto;
};
export const niCoinsMineracaoFalhou = (__ctx = {}) => {
    return __globalMessage("niCoinsMineracaoFalhou", { "valor": (__ctx.e0?.() || 'ɴᴀᴅᴀ ғᴏɪ ᴇɴᴄᴏɴᴛʀᴀᴅᴏ.') });
};
export const niCoinsTrabalhoAleatorio = (__ctx = {}) => {
    const salario = __ctx.e0?.() || '0';
    const lista = [
        __globalMessage("niCoinsTrabalhoAleatorio__texto1", { "salario": (salario) }),
        __globalMessage("niCoinsTrabalhoAleatorio__texto2", { "salario": (salario) }),
        __globalMessage("niCoinsTrabalhoAleatorio__texto3", { "salario": (salario) }),
        __globalMessage("niCoinsTrabalhoAleatorio__texto4", { "salario": (salario) }),
        __globalMessage("niCoinsTrabalhoAleatorio__texto5", { "salario": (salario) }),
        __globalMessage("niCoinsTrabalhoAleatorio__texto6", { "salario": (salario) }),
        __globalMessage("niCoinsTrabalhoAleatorio__texto7", { "salario": (salario) })
    ];
    return __globalMessage("niCoinsTrabalhoAleatorio", { "valor": (lista[Math.floor(Math.random() * lista.length)]) });
};

export const niResetAnyCountOk = (__ctx = {}) => {
    return __globalMessage("niResetAnyCountOk", { "valor": (__ctx.e0?.() || 'sᴇᴍ ɴᴏᴍᴇ') });
};

export const niResetModoLevelOk = (__ctx = {}) => {
    return __globalMessage("niResetModoLevelOk", { "valor": (__ctx.e0?.() || 'sᴇᴍ ɴᴏᴍᴇ'), "valor2": (__ctx.e1?.() || 0) });
};

export const niResetContadorGrupoOk = (__ctx = {}) => {
    return __globalMessage("niResetContadorGrupoOk", { "valor": (__ctx.e0?.() || 'sᴇᴍ ɴᴏᴍᴇ'), "valor2": (__ctx.e1?.() || 0) });
};

export const niCoinsGrupoVazio = () => {
    return __globalMessage("niCoinsGrupoVazio");
};

export const niCoinsGrupoZerados = (__ctx = {}) => {
    return __globalMessage("niCoinsGrupoZerados", { "valor": (__ctx.e0?.() ?? 0), "valor2": (__ctx.e1?.() ?? '0') });
};

export const niRemoverPlanoPixUso = (__ctx = {}) => {
    return __globalMessage("niRemoverPlanoPixUso", { "valor": (__ctx.e0?.() || '.') });
};

export const niRemoverPlanoPixNaoEncontrado = (__ctx = {}) => {
    return __globalMessage("niRemoverPlanoPixNaoEncontrado", { "valor": (__ctx.e0?.() || 'N/A') });
};

export const niRemoverPlanoPixOk = (__ctx = {}) => {
    return __globalMessage("niRemoverPlanoPixOk", { "valor": (__ctx.e0?.() || 'N/A'), "valor2": (__ctx.e1?.() || 0) });
};

export const niRemoverAluguelGrupoOk = (__ctx = {}) => {
    return __globalMessage("niRemoverAluguelGrupoOk", { "valor": (__ctx.e0?.() || 'sᴇᴍ ɴᴏᴍᴇ'), "valor2": (__ctx.e1?.() || 0), "valor3": (__ctx.e2?.() || 0) });
};

//=============[ TEXTOS DO SISTEMA DE ALUGUEL / PIX ]=============\

export const aluguelModo = (ativo, prefix, NomeDoBot) => {
return (ativo) ? __globalMessage("aluguelModo", { "prefix": (prefix) }) : __globalMessage("aluguelModo__2")
}

export const pixModo = (ativo, prefix, NomeDoBot) => {
return (ativo) ? __globalMessage("pixModo", { "prefix": (prefix), "prefix2": (prefix) }) : __globalMessage("pixModo__2", { "prefix": (prefix), "prefix2": (prefix) })
}

export const painelAluguel = ({ prefix, aluguelAtivo, pixAtivo, pixManualSalvo, planosTexto } = {}) => {
return __globalMessage("painelAluguel", { "valor": (aluguelAtivo ? 'ʟɪɢᴀᴅᴏ ✅' : 'ᴅᴇsʟɪɢᴀᴅᴏ ❌'), "valor2": (pixAtivo ? 'ʟɪɢᴀᴅᴏ ✅' : 'ᴅᴇsʟɪɢᴀᴅᴏ ❌'), "valor3": (pixManualSalvo ? 'sᴀʟᴠᴏ ✅' : 'sᴇᴍ ᴄʜᴀᴠᴇ ❌'), "prefix": (prefix), "prefix2": (prefix), "prefix3": (prefix), "prefix4": (prefix), "prefix5": (prefix), "prefix6": (prefix), "prefix7": (prefix), "prefix8": (prefix), "valor4": (planosTexto || '> *ɴᴇɴʜᴜᴍ ᴘʟᴀɴᴏ sᴀʟᴠᴏ.*') })
}

export const alugarMenu = ({ NomeDoBot, planosTexto, usarBotoes, comandosTexto, prefix } = {}) => {
return __globalMessage("alugarMenu", { "botNome": (NomeDoBot || 'BOT'), "valor": (planosTexto || '> *ɴᴇɴʜᴜᴍ ᴘʟᴀɴᴏ sᴀʟᴠᴏ.*'), "prefix": (usarBotoes ? '> *ᴛᴏǫᴜᴇ ɴᴏ ʙᴏᴛᴀᴏ ᴅᴏ ᴘʟᴀɴᴏ ᴀʙᴀɪxᴏ.*' : (comandosTexto || `> *${prefix || ''}alugar 1*`)) })
}

export const pixManualAluguel = ({ NomeDoBot, planosTexto, planoTitulo, valor, dias, nomePix, chavePix, contato } = {}) => {
const plano = planoTitulo ? __globalMessage("pixManualAluguel__texto1", { "planoTitulo": (planoTitulo), "valor": (valor), "dias": (dias) }) : __globalMessage("pixManualAluguel__texto2", { "valor": (planosTexto || '> *ɴᴇɴʜᴜᴍ ᴘʟᴀɴᴏ sᴀʟᴠᴏ.*') })
return __globalMessage("pixManualAluguel", { "botNome": (NomeDoBot || 'BOT'), "plano": (plano), "valor": (nomePix || 'Nk Petrov'), "valor2": (contato || 'ɴᴀᴏ ɪɴғᴏʀᴍᴀᴅᴏ'), "valor3": (chavePix || 'sem chave') })
}

export const pixSemChave = (prefix, NomeDoBot) => {
return __globalMessage("pixSemChave", { "prefix": (prefix), "prefix2": (prefix) })
}

export const pixCopiar = (NomeDoBot) => {
return __globalMessage("pixCopiar")
}

export const chavePixUso = (prefix, NomeDoBot) => {
return __globalMessage("chavePixUso", { "prefix": (prefix), "prefix2": (prefix) })
}

export const chavePixSalva = (chave, NomeDoBot) => {
return __globalMessage("chavePixSalva", { "valor": (chave || '') })
}

export const tokenPixInfo = ({ tokenSalvo, pixAtivo, prefix } = {}) => {
return __globalMessage("tokenPixInfo", { "valor": (tokenSalvo ? 'sᴀʟᴠᴏ ✅' : 'ɴᴀᴏ sᴀʟᴠᴏ ❌'), "valor2": (pixAtivo ? 'ʟɪɢᴀᴅᴏ ✅' : 'ᴅᴇsʟɪɢᴀᴅᴏ ❌'), "prefix": (prefix), "prefix2": (prefix) })
}

export const tokenPixSalvo = (prefix, NomeDoBot) => {
return __globalMessage("tokenPixSalvo", { "prefix": (prefix) })
}

export const pixDadosUso = (prefix, NomeDoBot) => {
return __globalMessage("pixDadosUso", { "prefix": (prefix), "prefix2": (prefix) })
}

export const pixDadosFaltou = (prefix, NomeDoBot) => {
return __globalMessage("pixDadosFaltou", { "prefix": (prefix) })
}

export const pixDadosSalvo = (nome, chave, NomeDoBot) => {
return __globalMessage("pixDadosSalvo", { "valor": (nome || 'Nk Petrov'), "valor2": (chave || '') })
}

export const planoMenu = ({ planosTexto, pixAtivo, prefix, isDono } = {}) => {
return __globalMessage("planoMenu", { "valor": (planosTexto || '> *ɴᴇɴʜᴜᴍ ᴘʟᴀɴᴏ sᴀʟᴠᴏ.*'), "valor2": (pixAtivo ? 'ʟɪɢᴀᴅᴏ ✅' : 'ᴅᴇsʟɪɢᴀᴅᴏ ❌'), "prefix": (isDono ? __globalMessage("planoMenu__texto1", { "prefix": (prefix), "prefix2": (prefix) }) : '') })
}

export const planoUso = (prefix, NomeDoBot) => {
return __globalMessage("planoUso", { "prefix": (prefix), "prefix2": (prefix) })
}

export const planoSalvo = ({ dias, valor, prefix } = {}) => {
return __globalMessage("planoSalvo", { "dias": (dias), "valor": (valor), "prefix": (prefix) })
}

export const planoRemoverUso = (prefix) => {
return __globalMessage("planoRemoverUso", { "prefix": (prefix) })
}

export const planoNaoAchado = (planoId, prefix) => {
return __globalMessage("planoNaoAchado", { "valor": (planoId || 'plano'), "prefix": (prefix) })
}

export const planoRemovido = (planoId) => {
return __globalMessage("planoRemovido", { "valor": (planoId || 'plano') })
}

export const aluguelDesligado = (prefix) => {
return __globalMessage("aluguelDesligado", { "prefix": (prefix) })
}

export const aluguelAvisoDono = ({ nomeGrupo, idGrupo, linkGrupo, membros, admins, donoGrupo, adminsTxt, prefix, motivo } = {}) => {
const isVencimento = String(motivo || '').toLowerCase() === 'vencimento'
return __globalMessage("aluguelAvisoDono", { "valor": (isVencimento ? '𝗔𝗟𝗨𝗚𝗨𝗘𝗟 𝗩𝗘𝗡𝗖𝗜𝗗𝗢' : '𝗔𝗟𝗨𝗚𝗨𝗘𝗟 𝗙𝗜𝗡𝗔𝗟𝗜𝗭𝗔𝗗𝗢'), "valor2": (isVencimento ? 'ᴏ ᴀʟᴜɢᴜᴇʟ ᴅᴇ ᴜᴍ ɢʀᴜᴘᴏ ᴠᴇɴᴄᴇᴜ.' : 'ᴜᴍ ɢʀᴜᴘᴏ ᴛᴇᴠᴇ ᴏ ᴀʟᴜɢᴜᴇʟ ᴇɴᴄᴇʀʀᴀᴅᴏ.'), "valor3": (nomeGrupo || 'nao identificado'), "valor4": (idGrupo || 'nao identificado'), "valor5": (linkGrupo || 'nao consegui gerar'), "valor6": (membros || 0), "valor7": (admins || 0), "valor8": (donoGrupo || 'nao identificado'), "valor9": (adminsTxt || 'nao consegui identificar'), "prefix": (prefix), "valor10": (isVencimento ? __globalMessage("aluguelAvisoDono__texto1", { "valor": (idGrupo || 'nao identificado') }) : '') })
}

export const aluguelPvReplyUso = (prefix) => {
return __globalMessage("aluguelPvReplyUso")
}

export const aluguelPvGrupoNaoEncontrado = (idGrupo) => {
return __globalMessage("aluguelPvGrupoNaoEncontrado", { "valor": (idGrupo || 'nao identificado') })
}

export const aluguelGrupoSairAviso = ({ nomeGrupo, prefix } = {}) => {
return __globalMessage("aluguelGrupoSairAviso", { "prefix": (prefix) })
}

export const aluguelPvSaiuOk = (nomeGrupo) => {
return __globalMessage("aluguelPvSaiuOk", { "valor": (nomeGrupo || 'nao identificado') })
}

export const aluguelGrupoAguardarAviso = ({ nomeGrupo, prefix, admins } = {}) => {
return __globalMessage("aluguelGrupoAguardarAviso", { "valor": (admins || 0), "prefix": (prefix) })
}

export const aluguelPvAguardarOk = (nomeGrupo, admins = 0) => {
return __globalMessage("aluguelPvAguardarOk", { "valor": (nomeGrupo || 'nao identificado'), "valor2": (admins || 0) })
}

export const pixAutoErroAluguel = (prefix, NomeDoBot) => {
return __globalMessage("pixAutoErroAluguel")
}

export const pixAutoGeradoAluguel = ({ planoTitulo, valor, dias } = {}) => {
return __globalMessage("pixAutoGeradoAluguel", { "valor": (planoTitulo || 'plano'), "valor2": (valor || '0,00'), "valor3": (dias || 0) })
}

export const pixAutoLegenda = (bodyTxt, codigo) => {
return __globalMessage("pixAutoLegenda", { "bodyTxt": (bodyTxt), "valor": (codigo || '') })
}

export const pixDiretoUso = (prefix = '/') => {
return __globalMessage("pixDiretoUso", { "prefix": (prefix) })
}

export const pixDiretoGerado = ({ valor, pagamentoId } = {}) => {
return __globalMessage("pixDiretoGerado", { "valor": (valor || '0,00'), "valor2": (pagamentoId || 'nao identificado') })
}
export const pixDiretoFooter = () => {
return __globalMessage("pixDiretoFooter")
}
export const pixAutoConfirmadoAluguel = ({ planoTitulo } = {}) => {
return __globalMessage("pixAutoConfirmadoAluguel", { "valor": (planoTitulo || 'plano') })
}

export const pixComprovanteDonoAluguel = ({ pagador, valor, pagamentoId, planoTitulo, grupoNome, grupoId, acao } = {}) => {
return __globalMessage("pixComprovanteDonoAluguel", {
"valor": (pagador || 'nao identificado'),
"valor2": (valor || '0,00'),
"valor3": (pagamentoId || 'nao identificado'),
"valor4": (planoTitulo || 'plano'),
"valor5": (grupoNome || 'nao identificado'),
"valor6": (grupoId || 'nao identificado'),
"valor7": (acao || 'ᴀᴛɪᴠᴀᴅᴏ')
})
}

export const pixComprovanteDonoDireto = ({ pagador, valor, pagamentoId, origem } = {}) => {
return __globalMessage("pixComprovanteDonoDireto", {
"valor": (pagador || 'nao identificado'),
"valor2": (valor || '0,00'),
"valor3": (pagamentoId || 'nao identificado'),
"valor4": (origem || 'ᴘʀɪᴠᴀᴅᴏ')
})
}

export const semPlanoAluguel = (prefix) => {
return __globalMessage("semPlanoAluguel", { "prefix": (prefix) })
}

export const planoNaoEncontradoAluguel = (planosTexto, comandosTexto) => {
return __globalMessage("planoNaoEncontradoAluguel", { "valor": (planosTexto || '> *ɴᴇɴʜᴜᴍ ᴘʟᴀɴᴏ sᴀʟᴠᴏ.*'), "valor2": (comandosTexto || '> *alugar 1*') })
}

export const alugarPlanoUso = (prefix) => {
return __globalMessage("alugarPlanoUso", { "prefix": (prefix), "prefix2": (prefix) })
}

export const planoInvalidoAluguel = (planosTexto, comandosTexto) => {
return __globalMessage("planoInvalidoAluguel", { "valor": (planosTexto || '> *ɴᴇɴʜᴜᴍ ᴘʟᴀɴᴏ sᴀʟᴠᴏ.*'), "valor2": (comandosTexto || '> *alugar 1*') })
}

export const listaPlanosAluguel = (itens = []) => {
if (!Array.isArray(itens) || !itens.length) return __globalMessage("listaPlanosAluguel")
return itens.map((p, i) => `> *${i + 1}.* ${p.titulo} - *R$ ${p.valor}*`).join(__globalMessage("listaPlanosAluguel__texto1"))
}

export const comandosPlanosAluguel = (itens = [], prefix = '') => {
if (!Array.isArray(itens) || !itens.length) return __globalMessage("comandosPlanosAluguel", { "prefix": (prefix) })
return itens.map((p, i) => `> *${prefix}alugar ${i + 1}* - ${p.titulo}`).join(__globalMessage("comandosPlanosAluguel__texto1"))
}


export const modoModerador = (ativo, prefix = '/') => {
return __globalMessage("modoModerador", { "valor": (ativo ? 'ᴀᴛɪᴠᴀᴅᴏ' : 'ᴅᴇsᴀᴛɪᴠᴀᴅᴏ'), "prefix": (prefix), "prefix2": (prefix), "prefix3": (prefix), "prefix4": (prefix), "prefix5": (prefix) })
}

export const modoModeradorDesativado = (prefix = '/') => {
return __globalMessage("modoModeradorDesativado", { "prefix": (prefix) })
}

export const addModUso = (prefix = '/') => {
return __globalMessage("addModUso", { "prefix": (prefix) })
}

export const rmModUso = (prefix = '/') => {
return __globalMessage("rmModUso", { "prefix": (prefix) })
}

export const modUsuarioForaGrupo = () => {
return __globalMessage("modUsuarioForaGrupo")
}

export const modUsuarioAdmin = (jid = '') => {
return __globalMessage("modUsuarioAdmin", { "valor": (String(jid).split('@')[0]) })
}

export const modJaExiste = (jid = '') => {
return __globalMessage("modJaExiste", { "valor": (String(jid).split('@')[0]) })
}

export const modNaoExiste = (jid = '') => {
return __globalMessage("modNaoExiste", { "valor": (String(jid).split('@')[0]) })
}

export const modAdicionado = (jid = '') => {
return __globalMessage("modAdicionado", { "valor": (String(jid).split('@')[0]) })
}

export const modRemovido = (jid = '') => {
return __globalMessage("modRemovido", { "valor": (String(jid).split('@')[0]) })
}


export const rgCmdModUso = (prefix = '/') => {
return __globalMessage("rgCmdModUso", { "prefix": (prefix) })
}

export const rmCmdModUso = (prefix = '/') => {
return __globalMessage("rmCmdModUso", { "prefix": (prefix) })
}

export const cmdModNaoAdmin = (cmd = '') => {
return __globalMessage("cmdModNaoAdmin", { "cmd": (cmd) })
}

export const cmdModJaRegistrado = (cmd = '') => {
return __globalMessage("cmdModJaRegistrado", { "cmd": (cmd) })
}

export const cmdModRegistrado = (cmd = '', prefix = '/') => {
return __globalMessage("cmdModRegistrado", { "prefix": (prefix), "cmd": (cmd) })
}

export const cmdModNaoRegistrado = (cmd = '') => {
return __globalMessage("cmdModNaoRegistrado", { "cmd": (cmd) })
}

export const cmdModRemovido = (cmd = '', prefix = '/') => {
return __globalMessage("cmdModRemovido", { "prefix": (prefix), "cmd": (cmd) })
}

export const listaModeradores = ({ ativo = false, mods = [], cmds = [], prefix = '/' } = {}) => {
const lista = Array.isArray(mods) && mods.length
? mods.map((m, i) => `> *${i + 1}.* @${String(m).split('@')[0]}`).join(__globalMessage("listaModeradores__texto1"))
: '> *ɴᴇɴʜᴜᴍ ᴍᴏᴅᴇʀᴀᴅᴏʀ ᴀᴅɪᴄɪᴏɴᴀᴅᴏ.*'
const listaCmds = Array.from(cmds || []).length
? Array.from(cmds || []).map((c, i) => `> *${i + 1}.* ${prefix}${c}`).join(__globalMessage("listaModeradores__texto2"))
: '> *ɴᴇɴʜᴜᴍ ᴄᴏᴍᴀɴᴅᴏ ʀᴇɢɪsᴛʀᴀᴅᴏ.*'
return __globalMessage("listaModeradores", { "valor": (ativo ? 'ᴀᴛɪᴠᴏ ✅' : 'ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ❌'), "lista": (lista), "listaCmds": (listaCmds), "prefix": (prefix), "prefix2": (prefix), "prefix3": (prefix), "prefix4": (prefix) })
}

export const modoimg = ({ e0 }) => {
return __globalMessage("modoimg", { "valor": (e0() ? 'ᴀᴛɪᴠᴀᴅᴏ' : 'ᴅᴇsᴀᴛɪᴠᴀᴅᴏ') });
};

export const privateCmd = ({ e0, e1, e2 }) => {
return __globalMessage("privateCmd", { "valor": (e0()), "valor2": (e1()), "valor3": (e2()) });
};
export const messageAntiMsgAtivado = () => {
  return __globalMessage("messageAntiMsgAtivado");
};

export const messageAntiMsgDesativado = () => {
  return __globalMessage("messageAntiMsgDesativado");
};

export const messageAntiMsgRemovido = (sender) => {
  return __globalMessage("messageAntiMsgRemovido", { "valor": (String(sender || '').split('@')[0]) });
};

export const messageAntiPaymentAtivado = () => {
  return __globalMessage("messageAntiPaymentAtivado");
};

export const messageAntiPaymentDesativado = () => {
  return __globalMessage("messageAntiPaymentDesativado");
};



export const messageAntiMarcarAtivado = () => {
  return __globalMessage("messageAntiMarcarAtivado");
};

export const messageAntiMarcarDesativado = () => {
  return __globalMessage("messageAntiMarcarDesativado");
};

export const messageAntiMarcarRemovido = (sender) => {
  return __globalMessage("messageAntiMarcarRemovido", { "valor": (String(sender || '').split('@')[0]) });
};

export const playlistAdminSemUsuarios = () => {
return __globalMessage("playlistAdminSemUsuarios");
};

export const playlistAdminLista = ({ totalUsuarios = 0, totalMusicas = 0, duracaoGeral = '', rows = '', prefix = '/' } = {}) => {
return __globalMessage("playlistAdminLista", { "totalUsuarios": (totalUsuarios), "totalMusicas": (totalMusicas), "duracaoGeral": (duracaoGeral), "rows": (rows), "prefix": (prefix) });
};

export const playlistAdminRemoverUso = (prefix = '/') => {
return __globalMessage("playlistAdminRemoverUso", { "prefix": (prefix), "prefix2": (prefix) });
};

export const playlistAdminNaoEncontrada = () => {
return __globalMessage("playlistAdminNaoEncontrada");
};

export const playlistAdminPosicaoInvalida = (total = 0) => {
return __globalMessage("playlistAdminPosicaoInvalida", { "total": (total), "valor": (total === 1 ? '' : 's') });
};

export const playlistAdminUsuarioRemovido = ({ position = 0, numero = '', removedCount = 0, removedDuration = '' } = {}) => {
return __globalMessage("playlistAdminUsuarioRemovido", { "position": (position), "numero": (numero), "removedCount": (removedCount), "removedDuration": (removedDuration) });
};


export const playlistRemoverUso = (prefix = '/') => {
return __globalMessage("playlistRemoverUso", { "prefix": (prefix), "prefix2": (prefix) });
};

export const playlistRemoverVazia = (prefix = '/') => {
return __globalMessage("playlistRemoverVazia", { "prefix": (prefix), "prefix2": (prefix) });
};

export const playlistRemoverPosicaoInvalida = (total = 0) => {
return __globalMessage("playlistRemoverPosicaoInvalida", { "total": (total), "valor": (total === 1 ? '' : 's') });
};

export const playlistMusicaRemovida = ({ position = 0, title = '', duration = '', remaining = 0 } = {}) => {
return __globalMessage("playlistMusicaRemovida", { "position": (position), "title": (title), "duration": (duration), "remaining": (remaining) });
};


// =====================[ COMANDOS SEM PREFIXO ]=====================
export const noPrefixStatus = (ativo = false, prefix = '/') => {
return (ativo) ? __globalMessage("noPrefixStatus", { "prefix": (prefix) }) : __globalMessage("noPrefixStatus__2");
};

export const noPrefixDesativado = (prefix = '/') => {
return __globalMessage("noPrefixDesativado", { "prefix": (prefix) });
};

export const noPrefixRegistroUso = (prefix = '/') => {
return __globalMessage("noPrefixRegistroUso", { "prefix": (prefix), "prefix2": (prefix) });
};

export const noPrefixRegistroSucesso = (semPrefixo = '', comando = '', descricao = '') => {
return __globalMessage("noPrefixRegistroSucesso", { "semPrefixo": (semPrefixo), "comando": (comando), "descricao": (descricao) });
};

export const noPrefixRemoverUso = (prefix = '/') => {
return __globalMessage("noPrefixRemoverUso", { "prefix": (prefix) });
};

export const noPrefixNaoEncontrado = (texto = '') => {
return __globalMessage("noPrefixNaoEncontrado", { "texto": (texto) });
};

export const noPrefixRemovido = (texto = '') => {
return __globalMessage("noPrefixRemovido", { "texto": (texto) });
};

export const noPrefixListaVazia = () => {
return __globalMessage("noPrefixListaVazia");
};

export const noPrefixLista = (lista = [], prefix = '/') => {
const linhas = lista.map((item, index) => __globalMessage("noPrefixLista__texto1", { "valor": (index + 1), "valor2": (item?.cmdSemPrefixo || 'Sem texto'), "valor3": (item?.comandoOriginal || 'Desconhecido'), "valor4": (item?.descricao || 'Sem descrição.') })).join(__globalMessage("noPrefixLista__texto2"));
return __globalMessage("noPrefixLista", { "linhas": (linhas), "prefix": (prefix) });
};

// =====================[ COMANDOS POR FIGURINHA ]=====================
export const figComandosStatus = (ativo = false, prefix = '/') => {
return (ativo) ? __globalMessage("figComandosStatus", { "prefix": (prefix) }) : __globalMessage("figComandosStatus__2");
};

export const figComandosDesativados = (prefix = '/') => {
return __globalMessage("figComandosDesativados", { "prefix": (prefix) });
};

export const figRegistroSemSticker = (prefix = '/') => {
return __globalMessage("figRegistroSemSticker", { "prefix": (prefix) });
};

export const figRegistroUso = (prefix = '/') => {
return __globalMessage("figRegistroUso", { "prefix": (prefix) });
};

export const figRegistroSucesso = (comando = '', descricao = '') => {
return __globalMessage("figRegistroSucesso", { "comando": (comando), "descricao": (descricao) });
};

export const figRegistroNaoEncontrado = () => {
return __globalMessage("figRegistroNaoEncontrado");
};

export const figRegistroRemovido = () => {
return __globalMessage("figRegistroRemovido");
};

export const figListaVazia = () => {
return __globalMessage("figListaVazia");
};

export const figLista = (lista = [], prefix = '/') => {
const linhas = lista.map((item, index) => __globalMessage("figLista__texto1", { "valor": (index + 1), "valor2": (item?.comando || 'Desconhecido'), "valor3": (item?.descricao || 'Sem descrição.') })).join(__globalMessage("figLista__texto2"));
return __globalMessage("figLista", { "linhas": (linhas), "prefix": (prefix) });
};

export const registroComandoDonoBloqueado = (comando = '') => {
return __globalMessage("registroComandoDonoBloqueado", { "comando": (comando) });
};

// =====================[ CONTROLES DA PLAYLIST ]=====================
export const playlistTocando = ({ title = '', duration = '', number = 0, total = 0 } = {}) => {
return __globalMessage("playlistTocando", { "title": (title), "duration": (duration), "number": (number), "total": (total) });
};

export const playlistFinalizada = () => __globalMessage("playlistFinalizada__texto1");

export const playlistFaixaIgnorada = (title = '') => __globalMessage("playlistFaixaIgnorada__texto1", { "title": (title) });

export const playlistParada = (prefix = '/') => __globalMessage("playlistParada__texto1", { "prefix": (prefix) });

export const playlistNenhumaTocando = () => __globalMessage("playlistNenhumaTocando__texto1");

export const playlistUltimaFaixa = () => __globalMessage("playlistUltimaFaixa__texto1");

export const playlistPrimeiraFaixa = () => __globalMessage("playlistPrimeiraFaixa__texto1");

export const parceriaSemPermissao = (jid = '') => __globalMessage("parceriaSemPermissao__texto1", { "valor": (String(jid).split('@')[0]) });

export const parceriaLimiteSemBan = (jid = '') => __globalMessage("parceriaLimiteSemBan__texto1", { "valor": (String(jid).split('@')[0]) });

export const parceriaLimiteAtingidoSemBan = (jid = '') => __globalMessage("parceriaLimiteAtingidoSemBan__texto1", { "valor": (String(jid).split('@')[0]) });

// =====================[ TEXTOS DA AUTO DIVULGACAO ]=====================
const __autoDivulTipoNome = (tipo = '') => ({
    texto: '📝 ᴛᴇxᴛᴏ',
    imagem: '🖼️ ɪᴍᴀɢᴇᴍ',
    video: '🎥 ᴠɪᴅᴇᴏ/ɢɪғ'
}[String(tipo || '').toLowerCase()] || '📢 ᴅɪᴠᴜʟɢᴀᴄᴀᴏ');

const __autoDivulPreview = (texto = '') => {
    const limpo = String(texto || '').replace(/\s+/g, ' ').trim() || 'sᴇᴍ ᴛᴇxᴛᴏ';
    return limpo.length > 150 ? limpo.slice(0, 147) + '...' : limpo;
};

export const autoDivulAtivada = () => {
    return __globalMessage("autoDivulAtivada");
};

export const autoDivulDesativada = () => {
    return __globalMessage("autoDivulDesativada");
};

export const autoDivulDesativadaUso = (prefix = '/') => {
    return __globalMessage("autoDivulDesativadaUso", { "prefix": (prefix) });
};

export const autoDivulRgUso = (prefix = '/') => {
    return __globalMessage("autoDivulRgUso", { "prefix": (prefix), "prefix2": (prefix), "prefix3": (prefix) });
};

export const autoDivulFormatoInvalido = (prefix = '/') => {
    return __globalMessage("autoDivulFormatoInvalido", { "prefix": (prefix) });
};

export const autoDivulTipoInvalido = (prefix = '/') => {
    return __globalMessage("autoDivulTipoInvalido", { "prefix": (prefix) });
};

export const autoDivulTextoVazio = () => {
    return __globalMessage("autoDivulTextoVazio");
};

export const autoDivulMidiaNecessaria = (tipo = 'imagem', prefix = '/') => {
    const nome = tipo === 'imagem' ? 'ɪᴍᴀɢᴇᴍ' : 'ᴠɪᴅᴇᴏ';
    return __globalMessage("autoDivulMidiaNecessaria", { "nome": (nome), "prefix": (prefix), "tipo": (tipo) });
};

export const autoDivulMidiaErro = (tipo = 'imagem') => {
    return __globalMessage("autoDivulMidiaErro", { "tipo": (tipo) });
};

export const autoDivulRegistrada = ({ numero = 0, tipo = 'texto', texto = '' } = {}) => {
    return __globalMessage("autoDivulRegistrada", { "numero": (numero), "valor": (__autoDivulTipoNome(tipo)), "valor2": (__autoDivulPreview(texto)) });
};

export const autoDivulListaVazia = (prefix = '/') => {
    return __globalMessage("autoDivulListaVazia", { "prefix": (prefix) });
};

export const autoDivulRemoverUso = (prefix = '/') => {
    return __globalMessage("autoDivulRemoverUso", { "prefix": (prefix), "prefix2": (prefix) });
};

export const autoDivulDivulgacaoNaoEncontrada = (total = 0, prefix = '/') => {
    return __globalMessage("autoDivulDivulgacaoNaoEncontrada", { "total": (total), "prefix": (prefix) });
};

export const autoDivulDivulgacaoRemovida = ({ numero = 0, tipo = 'texto', texto = '' } = {}) => {
    return __globalMessage("autoDivulDivulgacaoRemovida", { "numero": (numero), "valor": (__autoDivulTipoNome(tipo)), "valor2": (__autoDivulPreview(texto)) });
};

export const autoDivulLista = ({ ativo = false, intervalo = '1H', divulgacoes = [], grupos = [] } = {}) => {
    const linhasDivulgacoes = divulgacoes.length
        ? divulgacoes.map((item, index) => '* ' + (index + 1) + ' • ' + __autoDivulTipoNome(item?.tipo) + __globalMessage("autoDivulLista__texto1") + __autoDivulPreview(item?.texto) + '*').join(__globalMessage("autoDivulLista__texto2"))
        : '> *ɴᴇɴʜᴜᴍᴀ ᴅɪᴠᴜʟɢᴀᴄᴀᴏ ʀᴇɢɪsᴛʀᴀᴅᴀ.*';
    const linhasGrupos = grupos.length
        ? grupos.map((item, index) => '* ' + (index + 1) + ' • ' + (item?.nome || 'ɢʀᴜᴘᴏ sᴇᴍ ɴᴏᴍᴇ') + '*').join(__globalMessage("autoDivulLista__texto3"))
        : '> *ɴᴇɴʜᴜᴍ ɢʀᴜᴘᴏ ʀᴇɢɪsᴛʀᴀᴅᴏ.*';
    return __globalMessage("autoDivulLista", { "valor": ((ativo ? 'ᴀᴛɪᴠᴀᴅᴀ ✅' : 'ᴅᴇsᴀᴛɪᴠᴀᴅᴀ ❌')), "intervalo": (intervalo), "length": (divulgacoes.length), "length2": (grupos.length), "linhasDivulgacoes": (linhasDivulgacoes), "linhasGrupos": (linhasGrupos) });
};

export const autoDivulGrupoUso = (prefix = '/') => {
    return __globalMessage("autoDivulGrupoUso", { "prefix": (prefix), "prefix2": (prefix) });
};

export const autoDivulGruposDisponiveis = (grupos = [], registrados = [], prefix = '/') => {
    const idsRegistrados = new Set((registrados || []).map(item => String(item?.jid || item?.id || '')));
    const linhas = grupos.map((item, index) => {
        const id = String(item?.id || '');
        const marcado = idsRegistrados.has(id) ? __globalMessage("autoDivulGruposDisponiveis__texto1") : '';
        return __globalMessage("autoDivulGruposDisponiveis", { "valor": ((index + 1)), "valor2": ((item?.subject || 'ɢʀᴜᴘᴏ sᴇᴍ ɴᴏᴍᴇ')), "valor3": ((Array.isArray(item?.participants) ? item.participants.length : (item?.size || 0))), "marcado": (marcado) });
    }).join(__globalMessage("autoDivulGruposDisponiveis__texto2"));
    return __globalMessage("autoDivulGruposDisponiveis__2", { "length": (grupos.length), "valor": ((linhas || '> *ɴᴇɴʜᴜᴍ ɢʀᴜᴘᴏ ᴇɴᴄᴏɴᴛʀᴀᴅᴏ.*')), "prefix": (prefix) });
};

export const autoDivulGruposVazios = (prefix = '/') => {
    return __globalMessage("autoDivulGruposVazios", { "prefix": (prefix) });
};

export const autoDivulGrupoIndiceInvalido = (total = 0, prefix = '/') => {
    return __globalMessage("autoDivulGrupoIndiceInvalido", { "total": (total), "prefix": (prefix) });
};

export const autoDivulGrupoRegistrado = (nome = '') => {
    return __globalMessage("autoDivulGrupoRegistrado", { "valor": ((nome || 'ɢʀᴜᴘᴏ sᴇᴍ ɴᴏᴍᴇ')) });
};

export const autoDivulGrupoJaRegistrado = (nome = '') => {
    return __globalMessage("autoDivulGrupoJaRegistrado", { "valor": ((nome || 'ɢʀᴜᴘᴏ sᴇᴍ ɴᴏᴍᴇ')) });
};

export const autoDivulGrupoRemoverUso = (prefix = '/') => {
    return __globalMessage("autoDivulGrupoRemoverUso", { "prefix": (prefix) });
};

export const autoDivulGrupoListaVazia = (prefix = '/') => {
    return __globalMessage("autoDivulGrupoListaVazia", { "prefix": (prefix) });
};

export const autoDivulGrupoRemovido = (nome = '') => {
    return __globalMessage("autoDivulGrupoRemovido", { "valor": ((nome || 'ɢʀᴜᴘᴏ sᴇᴍ ɴᴏᴍᴇ')) });
};

export const autoDivulTempoUso = (prefix = '/') => {
    return __globalMessage("autoDivulTempoUso", { "prefix": (prefix), "prefix2": (prefix), "prefix3": (prefix) });
};

export const autoDivulTempoSalvo = (intervalo = '1H') => {
    return __globalMessage("autoDivulTempoSalvo", { "intervalo": (intervalo) });
};

const __infoCmdDocs = {
    play: {
        categoria: 'downloads', permissao: 'todos', uso: 'play nome da musica', aliases: ['play'],
        explicacao: `> *📌 • ᴏ ᴄᴏᴍᴀɴᴅᴏ ᴘʟᴀʏ sᴇʀᴠᴇ ᴘᴀʀᴀ ᴘᴇsǫᴜɪsᴀʀ ᴜᴍᴀ ᴍᴜsɪᴄᴀ ᴘᴇʟᴏ ɴᴏᴍᴇ ᴇ ʙᴀɪxᴀʀ ᴏ ᴀᴜᴅɪᴏ ᴅɪʀᴇᴛᴀᴍᴇɴᴛᴇ ᴘᴇʟᴏ ᴡʜᴀᴛsᴀᴘᴘ.*
> *💡 • ᴅɪɢɪᴛᴇ {prefix}ᴘʟᴀʏ sᴇɢᴜɪᴅᴏ ᴅᴏ ɴᴏᴍᴇ ᴅᴀ ᴍᴜsɪᴄᴀ, ᴅᴏ ᴀʀᴛɪsᴛᴀ ᴏᴜ ᴅᴇ ᴘᴀʀᴛᴇ ᴅᴏ ᴛɪᴛᴜʟᴏ. ᴏ ʙᴏᴛ ғᴀʀᴀ ᴀ ᴘᴇsǫᴜɪsᴀ ᴇ ᴇɴᴠɪᴀʀᴀ ᴏ ʀᴇsᴜʟᴛᴀᴅᴏ ᴅɪsᴘᴏɴɪᴠᴇʟ ᴇᴍ ᴀᴜᴅɪᴏ. 🎵*

> *⌨️ • \`Exemplos:\`*
> *⌨️ • {prefix}play Charlie Brown Jr*
> *⌨️ • {prefix}play Alan Walker Faded*
> *⌨️ • {prefix}play MC Hariel*
> *⚠️ • ᴇ ɴᴇᴄᴇssᴀʀɪᴏ ᴍᴀɴᴛᴇʀ ᴀ ᴀᴘɪ ᴇ ᴏ ᴛᴏᴋᴇɴ ᴅᴏ ʙᴏᴛ ᴀᴛɪᴠᴏs. ᴄᴀsᴏ ᴀ ᴘᴇsǫᴜɪsᴀ ғᴀʟʜᴇ ᴏᴜ ᴅᴇᴍᴏʀᴇ ᴅᴇᴍᴀɪs, ᴛᴇɴᴛᴇ ɴᴏᴠᴀᴍᴇɴᴛᴇ ᴀᴘᴏs ᴀʟɢᴜɴs sᴇɢᴜɴᴅᴏs.*`
    },
    playvid: {
        categoria: 'downloads', permissao: 'todos', uso: 'playvid nome do video', aliases: ['playvid', 'playvideo', 'playmp4', 'ytmp4'],
        explicacao: `> *📌 • ᴏ ᴄᴏᴍᴀɴᴅᴏ ᴘʟᴀʏᴠɪᴅ sᴇʀᴠᴇ ᴘᴀʀᴀ ᴘᴇsǫᴜɪsᴀʀ ᴜᴍ ᴠɪᴅᴇᴏ ᴇ ᴇɴᴠɪᴀ-ʟᴏ ᴇᴍ ғᴏʀᴍᴀᴛᴏ ᴍᴘ4.*
> *💡 • ᴅɪɢɪᴛᴇ {prefix}ᴘʟᴀʏᴠɪᴅ sᴇɢᴜɪᴅᴏ ᴅᴏ ɴᴏᴍᴇ ᴅᴏ ᴠɪᴅᴇᴏ ǫᴜᴇ ᴅᴇsᴇᴊᴀ ʙᴀɪxᴀʀ. ᴏ ʙᴏᴛ ғᴀʀᴀ ᴀ ᴘᴇsǫᴜɪsᴀ ᴇ ᴇɴᴠɪᴀʀᴀ ᴏ ʀᴇsᴜʟᴛᴀᴅᴏ ᴇɴᴄᴏɴᴛʀᴀᴅᴏ. 🎬*

> *⌨️ • \`Exemplos:\`*
> *⌨️ • {prefix}playvid trailer Minecraft*
> *⌨️ • {prefix}playvid Alan Walker Faded*
> *⚠️ • ᴏ ᴛᴇᴍᴘᴏ ᴅᴇ ᴇɴᴠɪᴏ ᴅᴇᴘᴇɴᴅᴇ ᴅᴏ ᴛᴀᴍᴀɴʜᴏ ᴅᴏ ᴠɪᴅᴇᴏ ᴇ ᴅᴀ ᴠᴇʟᴏᴄɪᴅᴀᴅᴇ ᴅᴀ ᴀᴘɪ. ᴠɪᴅᴇᴏs ᴍᴜɪᴛᴏ ɢʀᴀɴᴅᴇs ᴘᴏᴅᴇᴍ ᴜʟᴛʀᴀᴘᴀssᴀʀ ᴏ ʟɪᴍɪᴛᴇ ᴘᴇʀᴍɪᴛɪᴅᴏ ᴘᴇʟᴏ ᴡʜᴀᴛsᴀᴘᴘ.*`
    },
    pinterest: {
        categoria: 'downloads', permissao: 'todos', uso: 'pinterest pesquisa', aliases: ['pinterest', 'pin'],
        explicacao: `> *📌 • ᴏ ᴄᴏᴍᴀɴᴅᴏ ᴘɪɴᴛᴇʀᴇsᴛ ᴘᴇsǫᴜɪsᴀ ɪᴍᴀɢᴇɴs ʀᴇʟᴀᴄɪᴏɴᴀᴅᴀs ᴀᴏ ᴛᴇxᴛᴏ ɪɴғᴏʀᴍᴀᴅᴏ.*
> *💡 • ᴅɪɢɪᴛᴇ {prefix}ᴘɪɴᴛᴇʀᴇsᴛ sᴇɢᴜɪᴅᴏ ᴅᴏ ǫᴜᴇ ᴅᴇsᴇᴊᴀ ᴇɴᴄᴏɴᴛʀᴀʀ. ᴏ ʙᴏᴛ ᴘᴇsǫᴜɪsᴀʀᴀ ᴇ ᴇɴᴠɪᴀʀᴀ ᴜᴍᴀ ɪᴍᴀɢᴇᴍ ᴅɪsᴘᴏɴɪᴠᴇʟ ɴᴏs ʀᴇsᴜʟᴛᴀᴅᴏs. 📌*

> *⌨️ • \`Exemplos:\`*
> *⌨️ • {prefix}pinterest Yuta Okkotsu*
> *⌨️ • {prefix}pinterest wallpaper roxo*
> *⌨️ • {prefix}pinterest anime icon*
> *⚠️ • ᴀ ɪᴍᴀɢᴇᴍ ᴇɴᴠɪᴀᴅᴀ ᴅᴇᴘᴇɴᴅᴇ ᴅᴏs ʀᴇsᴜʟᴛᴀᴅᴏs ᴅɪsᴘᴏɴɪᴠᴇɪs ɴᴀ ᴀᴘɪ ᴅᴇ ᴘᴇsǫᴜɪsᴀ.*`
    },
    s: {
        categoria: 'figurinhas', permissao: 'todos', uso: 's respondendo uma imagem ou video', aliases: ['s', 'st', 'stk', 'sticker'],
        explicacao: `> *📌 • ᴏ ᴄᴏᴍᴀɴᴅᴏ s ᴛʀᴀɴsғᴏʀᴍᴀ ᴜᴍᴀ ɪᴍᴀɢᴇᴍ, ᴠɪᴅᴇᴏ ᴄᴜʀᴛᴏ ᴏᴜ ɢɪғ ᴇᴍ ғɪɢᴜʀɪɴʜᴀ.*
> *💡 • ᴇɴᴠɪᴇ ᴜᴍᴀ ɪᴍᴀɢᴇᴍ ᴄᴏᴍ ᴏ ᴄᴏᴍᴀɴᴅᴏ ɴᴀ ʟᴇɢᴇɴᴅᴀ ᴏᴜ ʀᴇsᴘᴏɴᴅᴀ ᴀ ᴍɪᴅɪᴀ ᴅᴇsᴇᴊᴀᴅᴀ ᴜsᴀɴᴅᴏ {prefix}s. ᴘᴀʀᴀ ᴠɪᴅᴇᴏs ᴇ ɢɪғs, ʀᴇsᴘᴏɴᴅᴀ ᴅɪʀᴇᴛᴀᴍᴇɴᴛᴇ ᴀ ᴍɪᴅɪᴀ. 🖼️*

> *⌨️ • \`Exemplos:\`*
> *⌨️ • Envie uma imagem com a legenda {prefix}s*
> *⌨️ • Responda uma imagem com {prefix}s*
> *⌨️ • Responda um vídeo curto com {prefix}s*
> *⚠️ • ᴏs ᴠɪᴅᴇᴏs ᴘʀᴇᴄɪsᴀᴍ ᴛᴇʀ ᴍᴇɴᴏs ᴅᴇ 11 sᴇɢᴜɴᴅᴏs. ᴄᴀsᴏ sᴇᴊᴀᴍ ᴍᴀɪᴏʀᴇs, ᴄᴏʀᴛᴇ ᴀ ᴍɪᴅɪᴀ ᴀɴᴛᴇs ᴅᴇ ᴄʀɪᴀʀ ᴀ ғɪɢᴜʀɪɴʜᴀ.*`
    },
    rename: {
        categoria: 'figurinhas', permissao: 'todos', uso: 'rename pack/autor', aliases: ['rename', 'roubar'],
        explicacao: `> *📌 • ᴏ ᴄᴏᴍᴀɴᴅᴏ ʀᴇɴᴀᴍᴇ ᴀʟᴛᴇʀᴀ ᴏ ɴᴏᴍᴇ ᴅᴏ ᴘᴀᴄᴏᴛᴇ ᴇ ᴏ ᴀᴜᴛᴏʀ ᴅᴇ ᴜᴍᴀ ғɪɢᴜʀɪɴʜᴀ ᴇxɪsᴛᴇɴᴛᴇ.*
> *💡 • ʀᴇsᴘᴏɴᴅᴀ ᴀ ғɪɢᴜʀɪɴʜᴀ ǫᴜᴇ ᴅᴇsᴇᴊᴀ ᴇᴅɪᴛᴀʀ ᴇ ᴜsᴇ {prefix}ʀᴇɴᴀᴍᴇ sᴇɢᴜɪᴅᴏ ᴅᴏ ɴᴏᴠᴏ ᴘᴀᴄᴋ ᴇ ᴅᴏ ɴᴏᴠᴏ ᴀᴜᴛᴏʀ, sᴇᴘᴀʀᴀᴅᴏs ᴘᴏʀ ᴜᴍᴀ ʙᴀʀʀᴀ. ✏️*

> *⌨️ • \`Exemplo:\`*
> *⌨️ • {prefix}rename YutaBot-MD/Seu Nome*
> *⚠️ • ᴇ ᴏʙʀɪɢᴀᴛᴏʀɪᴏ ʀᴇsᴘᴏɴᴅᴇʀ ᴀ ᴜᴍᴀ ғɪɢᴜʀɪɴʜᴀ ᴇ ɪɴғᴏʀᴍᴀʀ ᴀs ᴅᴜᴀs ᴘᴀʀᴛᴇs: ᴘᴀᴄᴋ ᴇ ᴀᴜᴛᴏʀ.*`
    },
    take: {
        categoria: 'figurinhas', permissao: 'todos', uso: 'take respondendo uma figurinha', aliases: ['take'],
        explicacao: `> *📌 • ᴏ ᴄᴏᴍᴀɴᴅᴏ ᴛᴀᴋᴇ ᴀᴘʟɪᴄᴀ ᴀ sᴜᴀ ᴍᴀʀᴄᴀ ʀᴇɢɪsᴛʀᴀᴅᴀ ᴇᴍ ᴜᴍᴀ ғɪɢᴜʀɪɴʜᴀ.*
> *💡 • ᴘʀɪᴍᴇɪʀᴏ ʀᴇɢɪsᴛʀᴇ sᴜᴀ ᴍᴀʀᴄᴀ ᴜsᴀɴᴅᴏ {prefix}ʀɢᴛᴀᴋᴇ. ᴅᴇᴘᴏɪs, ʀᴇsᴘᴏɴᴅᴀ ᴀ ǫᴜᴀʟǫᴜᴇʀ ғɪɢᴜʀɪɴʜᴀ ᴄᴏᴍ {prefix}ᴛᴀᴋᴇ ᴘᴀʀᴀ ᴀᴘʟɪᴄᴀʀ ᴏ ᴘᴀᴄᴋ ᴇ ᴏ ᴀᴜᴛᴏʀ sᴀʟᴠᴏs. 🏷️*

> *⌨️ • \`Exemplos:\`*
> *⌨️ • {prefix}rgtake*
> *⌨️ • Responda uma figurinha com {prefix}take*
> *⚠️ • ᴄᴀsᴏ ɴᴇɴʜᴜᴍᴀ ᴍᴀʀᴄᴀ ᴇsᴛᴇᴊᴀ ʀᴇɢɪsᴛʀᴀᴅᴀ, ᴏ ʙᴏᴛ ᴘᴏᴅᴇʀᴀ ᴜᴛɪʟɪᴢᴀʀ sᴇᴜ ɴᴏᴍᴇ ᴄᴏᴍᴏ ɪᴅᴇɴᴛɪғɪᴄᴀᴄᴀᴏ ᴘᴀᴅʀᴀᴏ.*`
    },
    modoaluguel: {
        categoria: 'aluguel', permissao: 'dono', uso: 'modoaluguel', aliases: ['modoaluguel'],
        explicacao: `> *📌 • ᴏ ᴄᴏᴍᴀɴᴅᴏ ᴍᴏᴅᴏᴀʟᴜɢᴜᴇʟ ᴀᴛɪᴠᴀ ᴏᴜ ᴅᴇsᴀᴛɪᴠᴀ ɢʟᴏʙᴀʟᴍᴇɴᴛᴇ ᴏ sɪsᴛᴇᴍᴀ ᴅᴇ ᴀʟᴜɢᴜᴇʟ ᴅᴏ ʙᴏᴛ.*
> *💡 • ᴇʟᴇ ғᴜɴᴄɪᴏɴᴀ ᴄᴏᴍᴏ ᴜᴍ ɪɴᴛᴇʀʀᴜᴘᴛᴏʀ: ᴀᴏ ᴜsᴀʀ ᴏ ᴄᴏᴍᴀɴᴅᴏ, ᴏ ᴇsᴛᴀᴅᴏ ᴀᴛᴜᴀʟ sᴇʀᴀ ɪɴᴠᴇʀᴛɪᴅᴏ. ǫᴜᴀɴᴅᴏ ᴇsᴛɪᴠᴇʀ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ, ᴏs ᴅᴇᴍᴀɪs ᴄᴏᴍᴀɴᴅᴏs ᴅᴇ ᴀʟᴜɢᴜᴇʟ ɴᴀᴏ ғᴜɴᴄɪᴏɴᴀʀᴀᴏ. 🏠*

> *⌨️ • \`Exemplo:\`*
> *⌨️ • {prefix}modoaluguel*
> *⚠️ • ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ᴇ ᴇxᴄʟᴜsɪᴠᴏ ᴘᴀʀᴀ ᴏ ᴅᴏɴᴏ ᴅᴏ ʙᴏᴛ.*`
    },
    rg_aluguel: {
        categoria: 'aluguel', permissao: 'dono', uso: 'rg_aluguel tempo', aliases: ['rg_aluguel', 'aluguel'],
        explicacao: `> *📌 • ᴏ ᴄᴏᴍᴀɴᴅᴏ ʀɢ_ᴀʟᴜɢᴜᴇʟ ʀᴇɢɪsᴛʀᴀ ᴏᴜ ʀᴇɴᴏᴠᴀ ᴏ ᴀʟᴜɢᴜᴇʟ ᴅᴇ ᴜᴍ ɢʀᴜᴘᴏ.*
> *💡 • ᴅᴇɴᴛʀᴏ ᴅᴏ ɢʀᴜᴘᴏ, ɪɴғᴏʀᴍᴇ ᴏ ᴛᴇᴍᴘᴏ ᴅᴇsᴇᴊᴀᴅᴏ ᴇᴍ ᴅɪᴀs, ʜᴏʀᴀs ᴏᴜ ᴍɪɴᴜᴛᴏs. ᴛᴀᴍʙᴇᴍ ᴇ ᴘᴏssɪᴠᴇʟ ʀᴇɢɪsᴛʀᴀʀ ᴏᴜᴛʀᴏ ɢʀᴜᴘᴏ ᴜsᴀɴᴅᴏ ᴀ ᴘᴏsɪᴄᴀᴏ ᴅᴇʟᴇ ɴᴀ ʟɪsᴛᴀ, sᴇɢᴜɪᴅᴀ ᴅᴇ ᴜᴍᴀ ʙᴀʀʀᴀ ᴇ ᴅᴏ ᴛᴇᴍᴘᴏ. ⏳*

> *⌨️ • \`Exemplos:\`*
> *⌨️ • {prefix}rg_aluguel 30 dias*
> *⌨️ • {prefix}rg_aluguel 2d 12h*
> *⌨️ • {prefix}rg_aluguel 3/30 dias*
> *⚠️ • ᴏ ᴍᴏᴅᴏ ᴀʟᴜɢᴜᴇʟ ᴘʀᴇᴄɪsᴀ ᴇsᴛᴀʀ ᴀᴛɪᴠᴏ. ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ᴇ ᴇxᴄʟᴜsɪᴠᴏ ᴘᴀʀᴀ ᴏ ᴅᴏɴᴏ ᴅᴏ ʙᴏᴛ.*`
    },
    rm_aluguel: {
        categoria: 'aluguel', permissao: 'dono', uso: 'rm_aluguel ou rm_aluguel numero', aliases: ['rm_aluguel', 'removeraluguel', 'removealuguel'],
        explicacao: `> *📌 • ᴏ ᴄᴏᴍᴀɴᴅᴏ ʀᴍ_ᴀʟᴜɢᴜᴇʟ ʀᴇᴍᴏᴠᴇ ᴏ ᴀʟᴜɢᴜᴇʟ ᴅᴇ ᴜᴍ ɢʀᴜᴘᴏ.*
> *💡 • ǫᴜᴀɴᴅᴏ ᴜsᴀᴅᴏ ᴅᴇɴᴛʀᴏ ᴅᴇ ᴜᴍ ɢʀᴜᴘᴏ ᴀʟᴜɢᴀᴅᴏ sᴇᴍ ɪɴғᴏʀᴍᴀʀ ɴᴜᴍᴇʀᴏ, ʀᴇᴍᴏᴠᴇ ᴏ ᴀʟᴜɢᴜᴇʟ ᴅᴀǫᴜᴇʟᴇ ɢʀᴜᴘᴏ. ᴘᴀʀᴀ ʀᴇᴍᴏᴠᴇʀ ᴏᴜᴛʀᴏ, ɪɴғᴏʀᴍᴇ ᴀ ᴘᴏsɪᴄᴀᴏ ᴍᴏsᴛʀᴀᴅᴀ ᴇᴍ {prefix}ʟɪsᴛᴀ_ᴀʟᴜɢᴜᴇʟ. 🗑️*

> *⌨️ • \`Exemplos:\`*
> *⌨️ • {prefix}rm_aluguel*
> *⌨️ • {prefix}rm_aluguel 1*
> *⚠️ • ᴏ ᴍᴏᴅᴏ ᴀʟᴜɢᴜᴇʟ ᴘʀᴇᴄɪsᴀ ᴇsᴛᴀʀ ᴀᴛɪᴠᴏ. ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ᴇ ᴇxᴄʟᴜsɪᴠᴏ ᴘᴀʀᴀ ᴏ ᴅᴏɴᴏ ᴅᴏ ʙᴏᴛ.*`
    },
    lista_aluguel: {
        categoria: 'aluguel', permissao: 'dono', uso: 'lista_aluguel', aliases: ['lista_aluguel'],
        explicacao: `> *📌 • ᴏ ᴄᴏᴍᴀɴᴅᴏ ʟɪsᴛᴀ_ᴀʟᴜɢᴜᴇʟ ᴍᴏsᴛʀᴀ ᴛᴏᴅᴏs ᴏs ɢʀᴜᴘᴏs ǫᴜᴇ ᴘᴏssᴜᴇᴍ ᴀʟᴜɢᴜᴇʟ ᴀᴛɪᴠᴏ.*
> *💡 • ᴀ ʟɪsᴛᴀ ɪɴғᴏʀᴍᴀ ᴀ ᴘᴏsɪᴄᴀᴏ, ᴏ ɴᴏᴍᴇ ᴅᴏ ɢʀᴜᴘᴏ, ᴀ ǫᴜᴀɴᴛɪᴅᴀᴅᴇ ᴅᴇ ᴍᴇᴍʙʀᴏs, ᴏ ʟɪɴᴋ ǫᴜᴀɴᴅᴏ ᴅɪsᴘᴏɴɪᴠᴇʟ ᴇ ᴏ ᴛᴇᴍᴘᴏ ʀᴇsᴛᴀɴᴛᴇ ᴅᴏ ᴀʟᴜɢᴜᴇʟ. 📋*

> *⌨️ • \`Exemplo:\`*
> *⌨️ • {prefix}lista_aluguel*
> *⚠️ • ᴀ ɴᴜᴍᴇʀᴀᴄᴀᴏ ᴍᴏsᴛʀᴀᴅᴀ ᴘᴏᴅᴇ sᴇʀ ᴜsᴀᴅᴀ ᴇᴍ {prefix}ʀᴍ_ᴀʟᴜɢᴜᴇʟ. ᴏ ᴍᴏᴅᴏ ᴀʟᴜɢᴜᴇʟ ᴘʀᴇᴄɪsᴀ ᴇsᴛᴀʀ ᴀᴛɪᴠᴏ.*`
    },
    autodivul: {
        categoria: 'auto divulgacao', permissao: 'dono', uso: 'autodivul', aliases: ['autodivul'],
        explicacao: '> *📌 • ᴏ ᴄᴏᴍᴀɴᴅᴏ ᴀᴜᴛᴏᴅɪᴠᴜʟ ᴀᴛɪᴠᴀ ᴏᴜ ᴅᴇsᴀᴛɪᴠᴀ ᴀ ᴀᴜᴛᴏ ᴅɪᴠᴜʟɢᴀᴄᴀᴏ ᴅᴏ ᴅᴏɴᴏ.*\n' +
            '> *💡 • ᴏ ᴇɴᴠɪᴏ ᴜsᴀ ᴀᴘᴇɴᴀs ᴏs ɢʀᴜᴘᴏs ᴇ ᴅɪᴠᴜʟɢᴀᴄᴏᴇs ʀᴇɢɪsᴛʀᴀᴅᴏs.*\n\n' +
            '> *ᴄᴏᴍ ᴏ sɪsᴛᴇᴍᴀ ᴅᴇsʟɪɢᴀᴅᴏ, ᴏs ᴏᴜᴛʀᴏs ᴄᴏᴍᴀɴᴅᴏs ᴅᴀ ᴀᴜᴛᴏ ᴅɪᴠᴜʟɢᴀᴄᴀᴏ ғɪᴄᴀᴍ ʙʟᴏǫᴜᴇᴀᴅᴏs.*\n' +
            '> *⚠️ • ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ᴇ ᴇxᴄʟᴜsɪᴠᴏ ᴘᴀʀᴀ ᴏ ᴅᴏɴᴏ ᴅᴏ ʙᴏᴛ.*'
    },
    rg_divul: {
        categoria: 'auto divulgacao', permissao: 'dono', uso: 'rg_divul tipo / legenda', aliases: ['rg_divul'],
        explicacao: '> *📌 • ʀᴇɢɪsᴛʀᴇ ᴜᴍᴀ ɴᴏᴠᴀ ᴅɪᴠᴜʟɢᴀᴄᴀᴏ sᴇᴍ sᴜʙsᴛɪᴛᴜɪʀ ᴀs ᴀɴᴛᴇʀɪᴏʀᴇs.*\n' +
            '> *💡 • ᴏ "/" sᴇᴘᴀʀᴀ ᴏ ᴛɪᴘᴏ ᴅᴀ ᴅɪᴠᴜʟɢᴀᴄᴀᴏ ᴅᴏ ᴛᴇxᴛᴏ ᴏᴜ ʟᴇɢᴇɴᴅᴀ.*\n\n' +
            '> *⌨️ • `Exemplos:`*\n' +
            '> *{prefix}rg_divul texto / Seu texto aqui*\n' +
            '> *{prefix}rg_divul imagem / Sua legenda*\n' +
            '> *{prefix}rg_divul video / Sua legenda*\n' +
            '> *⚠️ • ɪᴍᴀɢᴇɴs ᴇ ᴠɪᴅᴇᴏs ᴅᴇᴠᴇᴍ sᴇʀ ᴇɴᴠɪᴀᴅᴏs ᴏᴜ ʀᴇsᴘᴏɴᴅɪᴅᴏs ᴊᴜɴᴛᴏ ᴄᴏᴍ ᴏ ᴄᴏᴍᴀɴᴅᴏ.*'
    },
    rm_divul: {
        categoria: 'auto divulgacao', permissao: 'dono', uso: 'rm_divul numero', aliases: ['rm_divul'],
        explicacao: '> *📌 • ʀᴇᴍᴏᴠᴀ ᴜᴍᴀ ᴅɪᴠᴜʟɢᴀᴄᴀᴏ ᴜsᴀɴᴅᴏ ᴀ ɴᴜᴍᴇʀᴀᴄᴀᴏ ᴅᴀ ʟɪsᴛᴀ.*\n\n' +
            '> *⌨️ • `Exemplo:`*\n' +
            '> *{prefix}rm_divul 1*\n' +
            '> *⚠️ • ᴏ ᴀʀǫᴜɪᴠᴏ ʟᴏᴄᴀʟ ᴅᴀ ᴍɪᴅɪᴀ ᴛᴀᴍʙᴇᴍ sᴇʀᴀ ʀᴇᴍᴏᴠɪᴅᴏ.*'
    },
    lista_divul: {
        categoria: 'auto divulgacao', permissao: 'dono', uso: 'lista_divul', aliases: ['lista_divul'],
        explicacao: '> *📌 • ᴍᴏsᴛʀᴀ ᴏ sᴛᴀᴛᴜs, ᴏ ᴛᴇᴍᴘᴏ, ᴀs ᴅɪᴠᴜʟɢᴀᴄᴏᴇs ᴇ ᴏs ɢʀᴜᴘᴏs ᴅᴀ ᴀᴜᴛᴏ ᴅɪᴠᴜʟɢᴀᴄᴀᴏ.*\n\n' +
            '> *⌨️ • `Exemplo:`*\n' +
            '> *{prefix}lista_divul*'
    },
    rg_group: {
        categoria: 'auto divulgacao', permissao: 'dono', uso: 'rg_group ou rg_group numero', aliases: ['rg_group'],
        explicacao: '> *📌 • ᴍᴏsᴛʀᴀ ᴏs ɢʀᴜᴘᴏs ᴏɴᴅᴇ ᴏ ʙᴏᴛ ᴘᴀʀᴛɪᴄɪᴘᴀ ᴇ ᴘᴇʀᴍɪᴛᴇ ʀᴇɢɪsᴛʀᴀʀ ᴜᴍ ᴅᴇsᴛɪɴᴏ.*\n' +
            '> *💡 • ᴏ ɴᴜᴍᴇʀᴏ ᴇ ᴀᴘᴇɴᴀs ᴜᴍᴀ sᴇʟᴇᴄᴀᴏ. ᴏ ᴊɪᴅ ʀᴇᴀʟ ᴇ ɢᴜᴀʀᴅᴀᴅᴏ ɴᴏ ᴀʀǫᴜɪᴠᴏ.*\n\n' +
            '> *⌨️ • `Exemplos:`*\n' +
            '> *{prefix}rg_group*\n' +
            '> *{prefix}rg_group 2*'
    },
    rm_group: {
        categoria: 'auto divulgacao', permissao: 'dono', uso: 'rm_group numero', aliases: ['rm_group'],
        explicacao: '> *📌 • ʀᴇᴍᴏᴠᴇ ᴜᴍ ɢʀᴜᴘᴏ ᴅᴀ ʟɪsᴛᴀ ᴅᴇ ᴅᴇsᴛɪɴᴏs.*\n' +
            '> *⚠️ • ᴏ ʙᴏᴛ ɴᴀᴏ sᴀɪ ᴅᴏ ɢʀᴜᴘᴏ ᴇ ɴᴀᴏ ᴀʟᴛᴇʀᴀ ᴏ ᴀʟᴜɢᴜᴇʟ.*\n\n' +
            '> *⌨️ • `Exemplo:`*\n' +
            '> *{prefix}rm_group 1*'
    },
    tempo_divul: {
        categoria: 'auto divulgacao', permissao: 'dono', uso: 'tempo_divul 1H', aliases: ['tempo_divul'],
        explicacao: '> *📌 • ᴅᴇғɪɴᴀ ᴏ ɪɴᴛᴇʀᴠᴀʟᴏ ᴇɴᴛʀᴇ ᴏs ᴄɪᴄʟᴏs ᴅᴀ ᴀᴜᴛᴏ ᴅɪᴠᴜʟɢᴀᴄᴀᴏ.*\n' +
            '> *💡 • ᴀᴄᴇɪᴛᴀ ᴍ ᴘᴀʀᴀ ᴍɪɴᴜᴛᴏs, ʜ ᴘᴀʀᴀ ʜᴏʀᴀs ᴇ ᴅ ᴘᴀʀᴀ ᴅɪᴀs.*\n\n' +
            '> *⌨️ • `Exemplos:`*\n' +
            '> *{prefix}tempo_divul 1M*\n' +
            '> *{prefix}tempo_divul 1H*\n' +
            '> *{prefix}tempo_divul 1D*'
    },
    botoes: {
        categoria: 'configuracao', permissao: 'dono', uso: 'botoes', aliases: ['botoes', 'modobotoes'],
        explicacao: `> *📌 • ᴏ ᴄᴏᴍᴀɴᴅᴏ ʙᴏᴛᴏᴇs ᴀᴛɪᴠᴀ ᴏᴜ ᴅᴇsᴀᴛɪᴠᴀ ᴏ ᴍᴏᴅᴏ ᴅᴇ ʙᴏᴛᴏᴇs ᴅᴏ ʙᴏᴛ.*
> *💡 • ǫᴜᴀɴᴅᴏ ᴀᴛɪᴠᴏ, ᴏs ᴄᴏᴍᴀɴᴅᴏs ᴄᴏᴍᴘᴀᴛɪᴠᴇɪs ᴘᴏᴅᴇᴍ ᴇɴᴠɪᴀʀ ʟɪsᴛᴀs ᴇ ʙᴏᴛᴏᴇs ɪɴᴛᴇʀᴀᴛɪᴠᴏs. ǫᴜᴀɴᴅᴏ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ, ᴏ ʙᴏᴛ ᴜᴛɪʟɪᴢᴀ ᴍᴇɴsᴀɢᴇɴs ᴛʀᴀᴅɪᴄɪᴏɴᴀɪs ᴇᴍ ᴛᴇxᴛᴏ ᴇ ᴍɪᴅɪᴀ. 🔘*

> *⌨️ • \`Exemplo:\`*
> *⌨️ • {prefix}botoes*
> *⚠️ • ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ᴇ ᴇxᴄʟᴜsɪᴠᴏ ᴘᴀʀᴀ ᴏ ᴅᴏɴᴏ ᴅᴏ ʙᴏᴛ. ᴇᴍ ᴀᴘᴀʀᴇʟʜᴏs ᴏᴜ ᴠᴇʀsᴏᴇs ɪɴᴄᴏᴍᴘᴀᴛɪᴠᴇɪs, ᴏ ғᴏʀᴍᴀᴛᴏ ᴛʀᴀᴅɪᴄɪᴏɴᴀʟ ᴘᴏᴅᴇʀᴀ sᴇʀ ᴜsᴀᴅᴏ ᴀᴜᴛᴏᴍᴀᴛɪᴄᴀᴍᴇɴᴛᴇ.*`
    },
    antiinvisivel: {
        categoria: 'protecao', permissao: 'administrador', uso: 'antiinvisivel', aliases: ['antiinvisivel', 'antimsg'],
        explicacao: `> *📌 • ᴏ ᴄᴏᴍᴀɴᴅᴏ ᴀɴᴛɪɪɴᴠɪsɪᴠᴇʟ ᴀᴛɪᴠᴀ ᴏᴜ ᴅᴇsᴀᴛɪᴠᴀ ᴀ ᴘʀᴏᴛᴇᴄᴀᴏ ᴄᴏɴᴛʀᴀ ᴍᴇɴsᴀɢᴇɴs ɪɴᴠɪsɪᴠᴇɪs ɴᴏ ɢʀᴜᴘᴏ.*
> *💡 • ǫᴜᴀɴᴅᴏ ᴇsᴛɪᴠᴇʀ ᴀᴛɪᴠᴏ, ᴏ ʙᴏᴛ ɪᴅᴇɴᴛɪғɪᴄᴀ ᴇssᴇ ᴛɪᴘᴏ ᴅᴇ ᴍᴇɴsᴀɢᴇᴍ ᴇ ᴀᴘʟɪᴄᴀ ᴀ ᴀᴄᴀᴏ ᴅᴇ sᴇɢᴜʀᴀɴᴄᴀ ᴄᴏɴғɪɢᴜʀᴀᴅᴀ. ᴜsᴇ ɴᴏᴠᴀᴍᴇɴᴛᴇ ᴏ ᴍᴇsᴍᴏ ᴄᴏᴍᴀɴᴅᴏ ᴘᴀʀᴀ ᴅᴇsᴀᴛɪᴠᴀʀ. 🛡️*

> *⌨️ • \`Exemplo:\`*
> *⌨️ • {prefix}antiinvisivel*
> *⚠️ • ғᴜɴᴄɪᴏɴᴀ ᴀᴘᴇɴᴀs ᴇᴍ ɢʀᴜᴘᴏs. ǫᴜᴇᴍ ᴜsᴀʀ ᴘʀᴇᴄɪsᴀ sᴇʀ ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀ ᴇ ᴏ ʙᴏᴛ ᴛᴀᴍʙᴇᴍ ᴘʀᴇᴄɪsᴀ ᴘᴏssᴜɪʀ ᴄᴀʀɢᴏ ᴅᴇ ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀ.*`
    },
};

const __infoCmdFind = (nome = '') => {
    const busca = String(nome || '').trim().toLowerCase().replace(/^\//, '');
    if (!busca) return null;
    return Object.entries(__infoCmdDocs).find(([chave, doc]) => chave === busca || doc.aliases.includes(busca)) || null;
};

export const infoCmdLista = (prefix = '') => {
    const descricoes = {
        play: ['🎵', 'Pesquise e baixe músicas em áudio.'],
        playvid: ['🎬', 'Pesquise e baixe vídeos em formato MP4.'],
        pinterest: ['📌', __globalMessage("infoCmdLista__texto1")],
        s: ['🖼️', __globalMessage("infoCmdLista__texto2")],
        rename: ['✏️', __globalMessage("infoCmdLista__texto3")],
        take: ['🏷️', __globalMessage("infoCmdLista__texto4")],
        modoaluguel: ['🏠', __globalMessage("infoCmdLista__texto5")],
        rg_aluguel: ['⏳', __globalMessage("infoCmdLista__texto6")],
        rm_aluguel: ['🗑️', __globalMessage("infoCmdLista__texto7")],
        lista_aluguel: ['📋', 'Veja todos os grupos com aluguel ativo.'],
        autodivul: ['📢', __globalMessage("infoCmdLista__texto8")],
        rg_divul: ['📢', __globalMessage("infoCmdLista__texto9")],
        rm_divul: ['📢', 'Remova uma divulgação registrada.'],
        lista_divul: ['📢', __globalMessage("infoCmdLista__texto10")],
        rg_group: ['📢', __globalMessage("infoCmdLista__texto11")],
        rm_group: ['📢', __globalMessage("infoCmdLista__texto12")],
        tempo_divul: ['📢', 'Defina o intervalo entre os envios.'],
        botoes: ['🔘', __globalMessage("infoCmdLista__texto13")],
        antiinvisivel: ['🛡️', __globalMessage("infoCmdLista__texto14")],
        update: ['💎', __globalMessage("infoCmdLista__texto15")]
    };

    const categorias = [
        ['🎧 • ᴅᴏᴡɴʟᴏᴀᴅs', ['play', 'playvid', 'pinterest']],
        ['🎨 • ғɪɢᴜʀɪɴʜᴀs', ['s', 'rename', 'take']],
        ['🏠 • sɪsᴛᴇᴍᴀ ᴅᴇ ᴀʟᴜɢᴜᴇʟ', ['modoaluguel', 'rg_aluguel', 'rm_aluguel', 'lista_aluguel']],
        ['📢 • ᴀᴜᴛᴏ ᴅɪᴠᴜʟɢᴀᴄᴀᴏ', ['autodivul', 'rg_divul', 'rm_divul', 'lista_divul', 'rg_group', 'rm_group', 'tempo_divul']],
        ['⚙️ • ᴄᴏɴғɪɢᴜʀᴀᴄᴀᴏ', ['botoes']],
        ['🛡️ • ᴘʀᴏᴛᴇᴄᴀᴏ', ['antiinvisivel']],
        ['💎 • sɪsᴛᴇᴍᴀ', ['update']]
    ];

    let numero = 1;
    const blocos = categorias.map(([titulo, comandos]) => {
        const itens = comandos.map(nome => {
            const [emoji, descricao] = descricoes[nome];
            return __globalMessage("infoCmdLista", { "valor": (numero++), "prefix": (prefix), "nome": (nome), "emoji": (emoji), "descricao": (descricao) });
        }).join(__globalMessage("infoCmdLista__texto16"));
        return __globalMessage("infoCmdLista__2", { "titulo": (titulo), "itens": (itens) });
    }).join(__globalMessage("infoCmdLista__texto17"));

    return __globalMessage("infoCmdLista__3", { "blocos": (blocos), "prefix": (prefix), "prefix2": (prefix) });
};

export const infoCmdDetalhe = (nome = '', prefix = '') => {
    const encontrado = __infoCmdFind(nome);
    if (!encontrado) return null;
    const [chave, doc] = encontrado;

    return __globalMessage("infoCmdDetalhe", { "prefix": (prefix), "chave": (chave), "categoria": (doc.categoria), "permissao": (doc.permissao), "prefix2": (prefix), "uso": (doc.uso), "prefix3": (doc.aliases.map(alias => `${prefix}${alias}`).join(', ')), "prefix4": (doc.explicacao.replaceAll('{prefix}', prefix)) });
};

export const infoCmdNaoEncontrado = (nome = '', prefix = '') => {
    return __globalMessage("infoCmdNaoEncontrado", { "valor": (nome || 'N/A'), "prefix": (prefix) });
};


// =====================[ GUIAS DE CONFIGURACAO ]=====================
export const configurarBotGuia = (prefix = '/') => {
    return __globalMessage("configurarBotGuia", { "prefix": (prefix), "prefix2": (prefix), "prefix3": (prefix), "prefix4": (prefix), "prefix5": (prefix), "prefix6": (prefix) });
};

export const infoBemVindoGuia = (prefix = '/') => {
    return __globalMessage("infoBemVindoGuia", { "prefix": (prefix), "prefix2": (prefix), "prefix3": (prefix), "prefix4": (prefix), "prefix5": (prefix), "prefix6": (prefix), "prefix7": (prefix), "prefix8": (prefix), "prefix9": (prefix), "prefix10": (prefix), "prefix11": (prefix), "prefix12": (prefix), "prefix13": (prefix), "prefix14": (prefix), "prefix15": (prefix), "prefix16": (prefix), "prefix17": (prefix), "prefix18": (prefix) });
};



export const statusGrupoUso = ({ prefix, command } = {}) => {
    return __globalMessage("statusGrupoUso", { "prefix": (prefix + command) });
};

export const modo18Ativado = (__ctx = {}) => __globalMessage("modo18Ativado", __ctx);
export const modo18Desativado = (__ctx = {}) => __globalMessage("modo18Desativado", __ctx);
export const modo18Necessario = (__ctx = {}) => __globalMessage("modo18Necessario", { prefix: (__ctx.prefix || "") });

// =====================[ YUTA APIS - TEXTOS DO MODULO ]=====================

const __yutaSmallCaps = (value = '') => String(value ?? '').toLowerCase().replace(/[a-z]/g, c => ({
    a:'ᴀ',b:'ʙ',c:'ᴄ',d:'ᴅ',e:'ᴇ',f:'ғ',g:'ɢ',h:'ʜ',i:'ɪ',j:'ᴊ',k:'ᴋ',l:'ʟ',m:'ᴍ',n:'ɴ',o:'ᴏ',p:'ᴘ',q:'ǫ',r:'ʀ',s:'s',t:'ᴛ',u:'ᴜ',v:'ᴠ',w:'ᴡ',x:'x',y:'ʏ',z:'ᴢ'
}[c] || c));
const __yutaUsoAlias = {
    p: 'play', play2: 'play', play_audio: 'play', playvideo: 'play', play_video: 'play', playvid: 'play', playmp4: 'play', playdoc: 'play', play_doc: 'play',
    ytmp3: 'youtube', ytaudio: 'youtube', ytmp4: 'youtube',
    pin: 'pinterest', pinterestvideo: 'pinterest', pinvid: 'pinterest', pinvideo: 'pinterest', pinterestmp3: 'pinterest', pinterestaudio: 'pinterest', pinaudio: 'pinterest',
    tt: 'tiktok', tiktokaudio: 'tiktok', ttaudio: 'tiktok', spotifyplay: 'spotify',
    reconhecermusica: 'shazam', 'emoji-mix': 'emojimix', translate: 'traduzir', text2img: 'textimg', local: 'buscarlocal',
    tiktokstalker: 'tiktokstalk', ttsearch: 'tiktoksearch', githubstalk: 'gitstalk', filmesearch: 'filmes',
    'perplexity-ai': 'perplexity', 'gemini-voz': 'geminivoz',
    fb: 'facebook', facebookvideo: 'facebook', fbvideo: 'facebook', facebookaudio: 'facebook', fbmp3: 'facebook'
};
export const yutaUso = (command = '', prefix = '/') => {
    const atual = String(command || '').toLowerCase().trim();
    const tipo = __yutaUsoAlias[atual] || atual;
    return __globalMessage(`yutaUso_${tipo.replace(/[^A-Za-z0-9_]/g, '')}`, { comando: `${prefix}${command}` });
};

export const yutaShazamResultado = (r = {}) => __globalMessage('yutaShazamResultado', {
    titulo: r?.titulo || 'Desconhecido', artista: r?.artista || 'Desconhecido',
    album: r?.album || 'Desconhecido', gravadora: r?.gravadora || 'Desconhecida'
});

export const yutaMemeResultado = (r = {}) => __globalMessage('yutaMemeResultado', {
    titulo: r?.title || 'Meme', subreddit: r?.subreddit || 'memes'
});

export const yutaLocalResultado = (r = {}, fallback = 'Local') => __globalMessage('yutaLocalResultado', {
    nome: r?.nome || fallback, link: r?.link || 'N/A'
});

export const yutaTiktokStalkResultado = (r = {}, fallback = '') => __globalMessage('yutaTiktokStalkResultado', {
    nome: r?.name || r?.idname || fallback || 'N/A', usuario: r?.idname || String(fallback || '').replace(/^@/, '') || 'N/A',
    seguidores: r?.seguidores ?? '-', seguindo: r?.seguindo ?? '-', likes: r?.likes ?? '-', videos: r?.videos ?? '-',
    regiao: r?.region || '-', verificado: r?.verified ? 'Sim' : 'Não', privado: r?.privateAccount ? 'Sim' : 'Não', descricao: r?.description || '-'
});

export const yutaPensadorResultado = (list = []) => {
    const itens = (Array.isArray(list) ? list : []).slice(0, 10)
        .map((v, i) => __globalMessage('yutaPensadorItem', { indice: i + 1, frase: v?.frase || v || '-' })).join('\n');
    return __globalMessage('yutaPensadorResultado', { itens });
};

export const yutaPlaystoreResultado = (list = []) => {
    const itens = (Array.isArray(list) ? list : []).slice(0, 8).map((v, i) => __globalMessage('yutaPlaystoreItem', {
        indice: i + 1, nome: v?.nome || 'N/A', estrelas: v?.estrelas || '-', desenvolvedor: v?.desenvolvedor || '-', link: v?.link || '-'
    })).join('\n\n');
    return __globalMessage('yutaPlaystoreResultado', { itens });
};

export const yutaWallpaperResultado = (r = {}, fallback = '') => __globalMessage('yutaWallpaperResultado', {
    titulo: r?.title || fallback || 'Wallpaper', fonte: r?.source || '-'
});

export const yutaGoogleResultado = (r = {}) => {
    const blocos = [];
    if (r?.answer) blocos.push(__globalMessage('yutaGoogleResposta', { valor: r.answer }));
    if (r?.abstract) blocos.push(__globalMessage('yutaGoogleResumo', { valor: r.abstract }));
    if (r?.url) blocos.push(__globalMessage('yutaGoogleLink', { valor: r.url }));
    const itens = (Array.isArray(r?.related) ? r.related : []).slice(0, 5).map((v, i) => __globalMessage('yutaGoogleRelacionadoItem', {
        indice: i + 1, texto: v?.Text || '-', url: v?.FirstURL || '-'
    })).join('\n');
    if (itens) blocos.push(__globalMessage('yutaGoogleRelacionados', { itens }));
    const conteudo = blocos.join('\n\n');
    return conteudo ? __globalMessage('yutaGoogleResultado', { conteudo }) : '';
};

export const yutaYtSearchResultado = (video = {}) => __globalMessage('yutaYtSearchResultado', {
    titulo: video?.title || 'N/A', duracao: video?.duration?.timestamp || '❌ Não disponível', views: video?.views || '❌ Não disponível',
    autor: video?.author?.name || '❌ Não disponível', canal: video?.author?.url || '❌ Não disponível', url: video?.url || 'N/A',
    descricao: video?.description || '❌ Não disponível'
});

export const yutaApiResultado = (titulo = 'RESULTADO', conteudo = '') => {
    const texto = String(conteudo || '').trim();
    return texto ? __globalMessage('yutaApiResultado', { titulo: String(titulo || 'RESULTADO').toUpperCase(), conteudo: texto }) : '';
};
export const yutaApiCampo = (chave = '', valor = '') => __globalMessage('yutaApiCampo', { chave: __yutaSmallCaps(chave), valor });
export const yutaApiItem = (indice = 0, conteudo = '') => {
    const texto = String(conteudo || '').trim();
    return __globalMessage(texto.startsWith('>') || texto.includes('\n') ? 'yutaApiItem' : 'yutaApiItemTexto', { indice, conteudo: texto });
};
