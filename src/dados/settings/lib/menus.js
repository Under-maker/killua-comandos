import fs from 'fs';

// O texto/design dos menus fica fora do JS para sobreviver às atualizações.
// menus.txt         = arquivo do usuário (não deve ser sobrescrito em updates)
// menus-padrao.txt  = referência oficial atualizada, usada para detectar comandos novos
const MENU_USER_FILE = new URL('../textos/menus.txt', import.meta.url);
const MENU_DEFAULT_FILE = new URL('../textos/menus-padrao.txt', import.meta.url);

const cache = new Map();

const parseSections = (raw = '') => {
    const sections = new Map();
    const rx = /^[ \t]*\[([A-Za-z0-9_]+)\][ \t]*\r?\n([\s\S]*?)^[ \t]*\[\/\1\][ \t]*(?:\r?\n|$)/gm;
    let match;
    while ((match = rx.exec(String(raw)))) {
        sections.set(match[1], match[2].replace(/\r?\n$/, ''));
    }
    return sections;
};

const readSections = (fileUrl) => {
    try {
        const stat = fs.statSync(fileUrl);
        const key = String(fileUrl);
        const old = cache.get(key);
        if (old?.mtime === stat.mtimeMs) return old.sections;
        const sections = parseSections(fs.readFileSync(fileUrl, 'utf8'));
        cache.set(key, { mtime: stat.mtimeMs, sections });
        return sections;
    } catch {
        return new Map();
    }
};

const ensureUserMenuFile = () => {
    try {
        if (!fs.existsSync(MENU_USER_FILE) && fs.existsSync(MENU_DEFAULT_FILE)) {
            fs.copyFileSync(MENU_DEFAULT_FILE, MENU_USER_FILE);
        }
    } catch {}
};

const render = (text, vars = {}) => String(text ?? '').replace(/\{([A-Za-z0-9_]+)\}/g, (all, key) => {
    if (!Object.prototype.hasOwnProperty.call(vars, key)) return all;
    const value = vars[key];
    return String(value ?? '');
});

const esc = (value = '') => String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// Mantém o visual do usuário e injeta novidades do menu padrão dentro da categoria correta.
// Categorias novas entram completas; comandos novos nunca são jogados soltos no final.
const normalizeCategory = (value = '') => String(value)
    .normalize('NFKD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^A-Za-z0-9]+/g, '')
    .toLowerCase();

const categoryTitle = (line = '') => {
    const match = String(line).match(/〔\s*•\s*(.*?)\s*〕/);
    return match ? normalizeCategory(match[1]) : '';
};

const categoryBlocks = (text = '') => {
    const lines = String(text).split('\n');
    const titles = [];

    lines.forEach((line, i) => {
        if (!line.includes('┣━〔') || !line.includes('〕')) return;
        const name = categoryTitle(line);
        if (name) titles.push({ name, title: i });
    });

    return titles.map((item, i) => {
        // O cabeçalho da categoria começa uma linha antes do título (borda superior).
        const start = Math.max(0, item.title - 1);
        const next = titles[i + 1];
        const end = next ? Math.max(start, next.title - 1) : lines.length;
        return { ...item, start, end, lines: lines.slice(start, end) };
    });
};

const commandsFrom = (text = '', prefix = '') => {
    if (!prefix) return [];
    const rx = new RegExp(esc(prefix) + '([A-Za-zÀ-ÿ0-9_-]+)', 'i');
    return String(text).split('\n').flatMap((line, i) => {
        const match = rx.exec(line);
        return match ? [{ command: match[1].toLowerCase(), line, index: i }] : [];
    });
};

const mergeCommandsIntoBlock = (customBlock, officialBlock, prefix) => {
    const have = new Set(commandsFrom(customBlock, prefix).map(x => x.command));
    const missing = commandsFrom(officialBlock, prefix).filter(x => !have.has(x.command));
    if (!missing.length) return customBlock;

    const lines = String(customBlock).split('\n');
    const customCommand = commandsFrom(customBlock, prefix)[0];
    const officialRx = new RegExp(esc(prefix) + '([A-Za-zÀ-ÿ0-9_-]+)', 'i');
    const visualPrefix = customCommand
        ? customCommand.line.slice(0, customCommand.line.search(officialRx))
        : null;

    const additions = missing.map(({ line }) => {
        if (!visualPrefix) return line;
        const pos = line.search(officialRx);
        return pos >= 0 ? visualPrefix + line.slice(pos) : line;
    });

    // Insere antes do fechamento interno da caixa de comandos.
    let insertAt = lines.findIndex(line => /┃╰|│╰|┊╰/.test(line));
    if (insertAt < 0) insertAt = lines.length;
    lines.splice(insertAt, 0, ...additions);
    return lines.join('\n');
};

const mergeNewCommands = (custom, official, prefix) => {
    prefix = String(prefix ?? '');
    if (!prefix || !custom || !official) return custom;

    const officialCommands = commandsFrom(official, prefix);
    const customCommands = new Set(commandsFrom(custom, prefix).map(x => x.command));
    if (!officialCommands.some(x => !customCommands.has(x.command))) return custom;

    const officialBlocks = categoryBlocks(official);
    const customBlocks = categoryBlocks(custom);
    if (!officialBlocks.length || !customBlocks.length) return custom;

    const officialByName = new Map(officialBlocks.map(block => [block.name, block]));
    const customByName = new Map(customBlocks.map(block => [block.name, block]));

    // 1) Atualiza categorias já existentes no menu personalizado.
    const customLines = String(custom).split('\n');
    const replacements = [];
    for (const block of customBlocks) {
        const officialBlock = officialByName.get(block.name);
        if (!officialBlock) continue;
        const current = block.lines.join('\n');
        const merged = mergeCommandsIntoBlock(current, officialBlock.lines.join('\n'), prefix);
        if (merged !== current) replacements.push({ start: block.start, end: block.end, lines: merged.split('\n') });
    }
    replacements.sort((a, b) => b.start - a.start).forEach(({ start, end, lines }) => {
        customLines.splice(start, end - start, ...lines);
    });

    let output = customLines.join('\n');

    // 2) Categorias inteiramente novas entram como bloco completo na mesma ordem do padrão.
    for (let i = 0; i < officialBlocks.length; i++) {
        const block = officialBlocks[i];
        if (customByName.has(block.name)) continue;
        if (!commandsFrom(block.lines.join('\n'), prefix).length) continue;

        const currentBlocks = categoryBlocks(output);
        const currentNames = new Set(currentBlocks.map(x => x.name));
        if (currentNames.has(block.name)) continue;

        const nextOfficial = officialBlocks.slice(i + 1).find(x => currentNames.has(x.name));
        const lines = output.split('\n');
        if (nextOfficial) {
            const target = categoryBlocks(output).find(x => x.name === nextOfficial.name);
            lines.splice(target.start, 0, ...block.lines);
        } else {
            lines.push('', ...block.lines);
        }
        output = lines.join('\n');
    }

    return output.replace(/\n{3,}/g, '\n\n');
};

const getMenu = (name, vars = {}) => {
    ensureUserMenuFile();

    const userSections = readSections(MENU_USER_FILE);
    const defaultSections = readSections(MENU_DEFAULT_FILE);

    const userText = userSections.get(name);
    const defaultText = defaultSections.get(name) ?? '';
    const chosen = userText == null || userText === '' ? defaultText : userText;

    let output = render(chosen, vars);
    const official = render(defaultText, vars);
    output = mergeNewCommands(output, official, vars.prefix);
    return output;
};

const enabled = (value) => value ? 'ᴀᴛɪᴠᴀᴅᴏ ✅' : 'ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ❌';

export const menu = (prefix, sender, isChVip, isCargo, fast, uptimeBot, botNome, versionBaileys, ownerName, isBotoff) => getMenu('menu', {
    prefix,
    sender,
    senderNumber: String(sender ?? '').split('@')[0],
    isChVip,
    isCargo,
    fast: Number(fast ?? 0).toFixed(3),
    uptimeBot,
    botNome,
    versionBaileys,
    ownerName,
    modoMembro: isBotoff ? 'Não ❌' : 'Sim ✅'
});

export const adms = (prefix) => getMenu('adms', { prefix });
export const menudono = (prefix) => getMenu('menudono', { prefix });
export const menulogos = (prefix) => getMenu('menulogos', { prefix });
export const brincadeiras = (prefix) => getMenu('brincadeiras', { prefix });
export const rpg = (prefix) => getMenu('rpg', { prefix });
export const ativic = (prefix) => getMenu('ativic', { prefix });

export const consultas = (prefix, numero_dono1, numero_dono2, numero_dono3, numero_dono4, numero_dono5, numero_dono6, NomeDoBot, ownerName, ownerNumber) => getMenu('consultas', {
    prefix, numero_dono1, numero_dono2, numero_dono3, numero_dono4, numero_dono5, numero_dono6,
    NomeDoBot, ownerName, ownerNumber
});

export const dono = (prefix, NomeDoBot, NumeroDoBot, ownerNumber, isBotoff, ownerName, versionBaileys) => getMenu('dono', {
    prefix,
    NomeDoBot,
    NumeroDoBot,
    ownerNumber,
    ownerName,
    versionBaileys,
    botStatus: isBotoff ? 'OFF-LINE ❌' : 'ON-LINE ✅'
});

export const menu18 = (prefix) => getMenu('menu18', { prefix });

export const status = (
    prefix, isAntiImg, isAntiVid, isAntiAudio, isAntiSticker, Antidoc,
    isAntiCtt, Antiloc, isAntilinkgp, isAntiLinkEasy, isAntiLinkHard,
    isAntifake, isAntiNotas, isAnticatalogo, isPalavrao, isAntiFlood,
    isAntiDDD, isModobn, isAutorepo, isModoCoins, isAutofigu,
    isAnticall, isAntiPv, ANT_SP, nescessario,
    isBotoff, So_Adm, isMultiP, isx9, isAntistatus,
    welcomeStatus, welcomeModo, extras = {}
) => {
    extras = extras ?? {};
    nescessario = nescessario ?? {};

    return getMenu('status', {
        prefix,
        isAntiImgStatus: enabled(isAntiImg),
        isAntiVidStatus: enabled(isAntiVid),
        isAntiAudioStatus: enabled(isAntiAudio),
        isAntiStickerStatus: enabled(isAntiSticker),
        AntidocStatus: enabled(Antidoc),
        isAntiCttStatus: enabled(isAntiCtt),
        AntilocStatus: enabled(Antiloc),
        isAntilinkgpStatus: enabled(isAntilinkgp),
        isAntiLinkEasyStatus: enabled(isAntiLinkEasy),
        isAntiLinkHardStatus: enabled(isAntiLinkHard),
        isAntifakeStatus: enabled(isAntifake),
        isAntiNotasStatus: enabled(isAntiNotas),
        isAnticatalogoStatus: enabled(isAnticatalogo),
        isPalavraoStatus: enabled(isPalavrao),
        isAntiFloodStatus: enabled(isAntiFlood),
        isAntiDDDStatus: enabled(isAntiDDD),
        isModobnStatus: enabled(isModobn),
        isAutorepoStatus: enabled(isAutorepo),
        isModoCoinsStatus: enabled(isModoCoins),
        isAutofiguStatus: enabled(isAutofigu),
        isAnticallStatus: enabled(isAnticall),
        isAntiPvStatus: enabled(isAntiPv),
        ANT_SPStatus: enabled(ANT_SP),
        OdeleteStatus: enabled(nescessario.Odelete),
        isBotoffStatus: enabled(isBotoff),
        So_AdmStatus: enabled(So_Adm),
        isMultiPStatus: enabled(isMultiP),
        isx9Status: enabled(isx9),
        isAntistatusStatus: enabled(isAntistatus),
        welcomeStatusText: welcomeStatus
            ? `ᴀᴛɪᴠᴀᴅᴏ ✅ (${welcomeModo ? String(welcomeModo).toUpperCase() : 'MODO'})`
            : 'ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ❌',
        antiDeleteStatus: enabled(extras.antiDelete),
        antiStatusStatus: enabled(extras.antiStatus),
        antiBotStatus: enabled(extras.antiBot),
        antiMarcarStatus: enabled(extras.antiMarcar),
        antiSpamStatus: enabled(extras.antiSpam),
        antiInvisivelStatus: enabled(extras.antiInvisivel),
        antiPaymentStatus: enabled(extras.antiPayment),
        antiRouboStatus: enabled(extras.antiRoubo),
        antiPornStatus: enabled(extras.antiPorn),
        modoRpgStatus: enabled(extras.modoRpg),
        modoModeradorStatus: enabled(extras.modoModerador),
        modoLevelStatus: enabled(extras.modoLevel),
        modoIaNormalStatus: enabled(extras.modoIaNormal),
        modoIaAvancadoStatus: enabled(extras.modoIaAvancado),
        autoDlStatus: enabled(extras.autoDl),
        bangpStatus: enabled(extras.bangp),
        limitarCmdStatus: enabled(extras.limitarCmd),
        contadorMsgStatus: enabled(extras.contadorMsg),
        noPrefixStatus: enabled(extras.noPrefix),
        comandosFigStatus: enabled(extras.comandosFig),
        modoCoinsStatus: enabled(extras.modoCoins),
        registrarFigusStatus: enabled(extras.registrarFigus)
    });
};

export const menuvip = (prefix, comandosVip = []) => {
    const comandos = Array.isArray(comandosVip)
        ? comandosVip.filter(Boolean).map(cmd => `┃╎✧ 💎 ${prefix}${cmd}`).join('\n')
        : '';

    return getMenu('menuvip', {
        prefix,
        comandosVip: comandos || '┃╎✧ 💎 ɴᴇɴʜᴜᴍ ᴄᴏᴍᴀɴᴅᴏ ᴠɪᴘ ʀᴇɢɪsᴛʀᴀᴅᴏ'
    });
};
