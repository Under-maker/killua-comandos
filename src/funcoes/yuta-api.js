import fs from 'fs';
import YutaApis from 'yutaapis';

const SETTINGS_URL = new URL('../dados/settings/media/settings.json', import.meta.url);
const DEFAULT_SITE = 'https://yuta-apis.xyz';

let client = null;
let currentToken = '';
let currentSite = '';

function readSettings() {
    try {
        return JSON.parse(fs.readFileSync(SETTINGS_URL, 'utf8'));
    } catch {
        return {};
    }
}

function normalizeSite(site) {
    return String(site || DEFAULT_SITE).replace(/\/+$/, '');
}

function resolveConfig(overrides = {}) {
    const settings = readSettings();
    return {
        token: String(overrides.token ?? settings.TOKEN ?? settings.token ?? settings.apitoken ?? settings.apiToken ?? '').trim(),
        site: normalizeSite(overrides.site ?? settings.SITE ?? settings.site ?? settings.API ?? settings.api)
    };
}

export function getYutaConfig(overrides = {}) {
    return resolveConfig(overrides);
}

export function yutaUrl(pathname, params = {}) {
    const { token, site } = resolveConfig();
    if (!token) throw new Error('Token da Yuta API não configurado.');

    const url = new URL(String(pathname || '').replace(/^\/+/, ''), `${site}/`);
    for (const [key, value] of Object.entries(params)) {
        if (value !== undefined && value !== null) url.searchParams.set(key, String(value));
    }
    url.searchParams.set('apitoken', token);
    return url.toString();
}

function createClient(token, site) {
    if (!token) throw new Error('Token da Yuta API não configurado.');
    return new YutaApis({ apiToken: token, httpOptions: { baseUrl: site } });
}

export function getYutaApi(overrides = {}) {
    const { token, site } = resolveConfig(overrides);
    if (!client || token !== currentToken || site !== currentSite) {
        client = createClient(token, site);
        currentToken = token;
        currentSite = site;
    }
    return client;
}

export function setYutaApiToken(token, site) {
    const config = resolveConfig({ token, site });
    client = createClient(config.token, config.site);
    currentToken = config.token;
    currentSite = config.site;
    return client;
}

export const api = new Proxy({}, {
    get(_target, prop) {
        const active = getYutaApi();
        const value = active[prop];
        return typeof value === 'function' ? value.bind(active) : value;
    }
});

export async function uploadYuta(buffer, name, mimeType) {
    const { token, site } = resolveConfig();
    // A versão 1.3.1 do SDK altera internamente a base do upload ao cachear a rota.
    // Uma instância curta somente para upload evita /api/api em chamadas seguintes.
    const uploader = createClient(token, site);
    const response = await uploader.upload(buffer, name, mimeType);
    const result = response?.resultado ?? response?.result;
    return response?.link || response?.url || result?.link || result?.url || (typeof result === 'string' ? result : null);
}
