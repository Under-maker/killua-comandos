import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { spawn, execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..', '..');

const cores = {
  reset: '\x1b[0m',
  negrito: '\x1b[1m',
  branco: '\x1b[37m',
  verde: '\x1b[32m',
  vermelho: '\x1b[31m',
  amarelo: '\x1b[33m',
  ciano: '\x1b[36m',
  magenta: '\x1b[35m'
};

const imprimirLog = (rotulo, msg, cor = cores.branco) => {
  const etiqueta = `${cor}${cores.negrito}[ ${String(rotulo).toUpperCase()} ]${cores.reset}`;
  console.log(`${etiqueta} - ${msg}`);
};

const log = msg => imprimirLog('Processo', msg, cores.branco);
const logOk = msg => imprimirLog('Sucesso', msg, cores.verde);
const logErro = msg => imprimirLog('Erro', msg, cores.vermelho);
const logAviso = msg => imprimirLog('Aviso', msg, cores.amarelo);
const logAuto = msg => imprimirLog('Limpeza', msg, cores.magenta);

function removerTesteJogosHtml() {
  const dir = path.join(ROOT_DIR, 'src', 'funcoes', 'html-games');

  try {
    const marcador = path.join(dir, '_htmlGameCommand.js');
    const indice = path.join(dir, 'index.js');

    if (fs.existsSync(dir) && fs.existsSync(marcador) && fs.existsSync(indice)) {
      fs.rmSync(dir, { recursive: true, force: true });
      imprimirLog('Limpeza', 'Teste de jogos HTML removido.', cores.ciano);
    }
  } catch {}
}

removerTesteJogosHtml();

const YUTA_INVISIBLE_PATCH_MARKER = 'YUTA_INVISIBLE_RECEIVER_PATCH_V7';

function localizarArquivoRecepcaoBaileys() {
  const candidatos = [
    path.join(ROOT_DIR, 'node_modules', '@whiskeysockets', 'baileys', 'lib', 'Socket', 'messages-recv.js'),
    path.join(ROOT_DIR, 'node_modules', 'baileys', 'lib', 'Socket', 'messages-recv.js')
  ];

  return candidatos.find(arquivo => fs.existsSync(arquivo)) || null;
}

function removerPatchesInvisiveisAntigos(codigo) {
  let atualizado = String(codigo || '');

  atualizado = atualizado.replace(
    /\n\s*\/\/ YUTA_INVISIBLE_RECEIVER_PATCH_V6[\s\S]*?(?=\n\s*if \(msg\.key\?\.remoteJid && msg\.key\?\.id && msg\.message && messageRetryManager\) \{)/g,
    ''
  );
  atualizado = atualizado.replace(
    /\n\s*\/\/ YUTA_INVISIBLE_RECEIVER_PATCH_V5[\s\S]*?(?=\n\s*if \(msg\.key\?\.remoteJid && msg\.key\?\.id && msg\.message && messageRetryManager\))/g,
    ''
  );
  atualizado = atualizado.replace(
    /\n\s*\/\/ YUTA_INVISIBLE_RECEIVER_PATCH_V4[\s\S]*?(?=\n\s*if \(msg\.key\?\.remoteJid && msg\.key\?\.id && msg\.message && messageRetryManager\))/g,
    ''
  );
  atualizado = atualizado.replace(
    /\n\s*\/\/ YUTA_INVISIBLE_RECEIVER_PATCH_V3[\s\S]*?(?=\n\s*if \(msg\.key\?\.remoteJid && msg\.key\?\.id && msg\.message && messageRetryManager\))/g,
    ''
  );
  atualizado = atualizado.replace(
    /\n\s*\/\/ YUTA_STEALTH_META_PATCH_V2[\s\S]*?(?=\n\s*if \(msg\.key\?\.remoteJid && msg\.key\?\.id && msg\.message && messageRetryManager\))/g,
    ''
  );
  atualizado = atualizado.replace(
    /\n\s*\/\/ YUTA_STEALTH_META_PATCH_V1[\s\S]*?(?=\n\s*if \(msg\.key\?\.remoteJid && msg\.key\?\.id && msg\.message && messageRetryManager\))/g,
    ''
  );

  return atualizado;
}

function aplicarPatchRecepcaoMensagemInvisivel({ silencioso = false } = {}) {
  const arquivo = localizarArquivoRecepcaoBaileys();

  if (!arquivo) {
    if (!silencioso) {
      imprimirLog('Patch', 'O Baileys ainda não está instalado.', cores.amarelo);
    }
    return { aplicado: false, motivo: 'baileys-ausente' };
  }

  const original = fs.readFileSync(arquivo, 'utf8');

  if (original.includes(YUTA_INVISIBLE_PATCH_MARKER)) {
    if (!silencioso) {
      imprimirLog('Patch', 'O recebimento de mensagens invisíveis já está configurado.', cores.ciano);
    }
    return { aplicado: false, motivo: 'ja-ativado', arquivo };
  }

  const limpo = removerPatchesInvisiveisAntigos(original);
  const ancoraRegex = /^[ \t]*if \(msg\.key\?\.remoteJid && msg\.key\?\.id && msg\.message && messageRetryManager\) \{/m;
  const correspondenciaAncora = ancoraRegex.exec(limpo);
  const indiceAncora = correspondenciaAncora?.index ?? -1;

  if (indiceAncora < 0) {
    throw new Error('A versão instalada do Baileys não possui um ponto de recepção compatível.');
  }

  const patch = `
                // ${YUTA_INVISIBLE_PATCH_MARKER}
                // Normaliza o ciphertext criado pelo modo Só Membros antes do fluxo de retry.
                try {
                    const yutaDecryptFail = encNode?.attrs?.['decrypt-fail'] || node?.attrs?.['decrypt-fail'] || null;
                    const yutaRemoteJid = msg?.key?.remoteJid || node?.attrs?.from || '';
                    const yutaParticipant = msg?.key?.participant || msg?.participant || node?.attrs?.participant || null;
                    const yutaParticipantAlt = msg?.key?.participantAlt || node?.attrs?.participant_pn || node?.attrs?.sender_pn || null;
                    const yutaStanzaType = String(node?.attrs?.type || '').toLowerCase();
                    const yutaIsGroup = String(yutaRemoteJid).endsWith('@g.us');
                    const yutaIsCiphertext = msg?.messageStubType === proto.WebMessageInfo.StubType.CIPHERTEXT;
                    const yutaIsReaction = yutaStanzaType === 'reaction';
                    const yutaIsCandidate = yutaDecryptFail === 'hide' && yutaIsGroup && Boolean(yutaParticipant || yutaParticipantAlt) && yutaIsCiphertext && !yutaIsReaction;

                    if (yutaIsCandidate) {
                        msg.stealthMeta = {
                            patch: '${YUTA_INVISIBLE_PATCH_MARKER}',
                            candidate: true,
                            decryptFail: yutaDecryptFail,
                            encType: encNode?.attrs?.type || null,
                            stanzaType: yutaStanzaType || null,
                            failedToDecrypt: true,
                            participant: yutaParticipant || yutaParticipantAlt,
                            participantAlt: yutaParticipantAlt,
                            stubError: Array.isArray(msg?.messageStubParameters) ? msg.messageStubParameters.join(' | ') : null,
                            messageId: msg?.key?.id || node?.attrs?.id || null,
                            detectedAt: Date.now()
                        };

                        msg.yutaInvisibleCandidate = true;
                        msg.yutaInvisibleMessage = false;
                        msg.message = {
                            requestPaymentMessage: {
                                currencyCodeIso4217: 'BRL',
                                amount1000: 0,
                                requestFrom: yutaParticipantAlt || yutaParticipant
                            }
                        };
                        msg.messageStubType = undefined;
                        msg.messageStubParameters = [];
                        msg.category = undefined;
                    }
                }
                catch (yutaInvisibleError) {
                    // Em caso de falha, o Baileys segue o comportamento original.
                }
`;

  const modificado = limpo.slice(0, indiceAncora) + patch + limpo.slice(indiceAncora);
  fs.writeFileSync(arquivo, modificado, 'utf8');

  const validacao = fs.readFileSync(arquivo, 'utf8');
  const valido = validacao.includes(YUTA_INVISIBLE_PATCH_MARKER) &&
    validacao.includes("encNode?.attrs?.['decrypt-fail']") &&
    validacao.includes('yutaInvisibleCandidate') &&
    validacao.includes('stanzaType') &&
    validacao.includes('msg.messageStubType = undefined');

  if (!valido) {
    throw new Error('O patch foi gravado, mas não passou na validação interna.');
  }

  if (!silencioso) {
    imprimirLog('Patch', 'O recebimento de mensagens invisíveis foi configurado com sucesso.', cores.verde);
  }

  return { aplicado: true, motivo: 'aplicado-v7', arquivo };
}

function loadEnvFile() {
  const envPath = path.join(ROOT_DIR, '.env');
  if (!fs.existsSync(envPath)) return;

  const lines = fs.readFileSync(envPath, 'utf8').split(/\r?\n/);

  for (const line of lines) {
    const clean = line.trim();
    if (!clean || clean.startsWith('#')) continue;

    const index = clean.indexOf('=');
    if (index === -1) continue;

    const key = clean.slice(0, index).trim();
    let value = clean.slice(index + 1).trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    if (key && !process.env[key]) process.env[key] = value;
  }
}

loadEnvFile();

const SQLITE_DEPENDENCIA = 'better-sqlite3';
const SQLITE_VERSAO = '12.10.0';

function lerDependenciasPackage() {
  try {
    const packagePath = path.join(ROOT_DIR, 'package.json');
    const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'));

    return Object.keys({
      ...(pkg.dependencies || {}),
      ...(pkg.optionalDependencies || {})
    }).sort();
  } catch {
    return [];
  }
}

const deps = lerDependenciasPackage();

function pacoteExiste(dep) {
  try {
    const partes = dep.split('/');
    const pasta = dep.startsWith('@')
      ? path.join(ROOT_DIR, 'node_modules', partes[0], partes[1])
      : path.join(ROOT_DIR, 'node_modules', dep);

    return fs.existsSync(path.join(pasta, 'package.json'));
  } catch {
    return false;
  }
}

function estaNoTermux() {
  return String(process.env.PREFIX || '').includes('com.termux') ||
    fs.existsSync('/data/data/com.termux/files/usr/bin/pkg');
}

async function nodeSQLiteDisponivel() {
  try {
    const modulo = await import('node:sqlite');
    return typeof modulo.DatabaseSync === 'function';
  } catch {
    return false;
  }
}

function faltaDependencia() {
  for (const dep of deps) {
    if (dep === SQLITE_DEPENDENCIA && estaNoTermux()) continue;

    if (!pacoteExiste(dep)) {
      log(`Dependência não encontrada: ${dep}`);
      return true;
    }
  }

  return false;
}

function garantirDependenciasNpm() {
  if (fs.existsSync(path.join(ROOT_DIR, 'node_modules')) && !faltaDependencia()) {
    return;
  }

  log('Instalando dependências automaticamente...');

  const comando = estaNoTermux()
    ? 'npm install --omit=dev --omit=optional --no-audit --no-fund --no-bin-links'
    : 'npm install --omit=dev --no-audit --no-fund --no-bin-links';

  execSync(comando, {
    cwd: ROOT_DIR,
    stdio: 'inherit'
  });
}

async function garantirDependenciaSQLite() {
  if (estaNoTermux() && await nodeSQLiteDisponivel()) {
    imprimirLog('SQLite', 'Termux detectado. Usando o SQLite nativo do Node.js.', cores.ciano);
    return true;
  }

  if (pacoteExiste(SQLITE_DEPENDENCIA)) return true;

  if (estaNoTermux()) {
    logErro(`O módulo ${SQLITE_DEPENDENCIA} não está disponível e o SQLite nativo do Node.js não foi encontrado.`);
    return false;
  }

  try {
    execSync(`npm install --omit=dev --no-audit --no-fund --no-bin-links ${SQLITE_DEPENDENCIA}@${SQLITE_VERSAO}`, {
      cwd: ROOT_DIR,
      stdio: 'inherit'
    });
  } catch (erro) {
    logErro(`Não foi possível instalar ${SQLITE_DEPENDENCIA}: ${erro?.message || erro}`);
    return false;
  }

  return pacoteExiste(SQLITE_DEPENDENCIA);
}

async function carregarBancoSQLite() {
  console.log('');
  imprimirLog('SQLite', 'Banco de dados carregando...', cores.amarelo);

  if (!await garantirDependenciaSQLite()) return false;

  const inicio = Date.now();

  try {
    const sqliteModule = await import('./sqlite.js');
    const tempo = Date.now() - inicio;
    imprimirLog('SQLite', `Banco de dados carregado com sucesso. (${tempo}ms)`, cores.verde);
    imprimirLog('SQLite', `Backend ativo: ${sqliteModule.SQLITE_BACKEND || 'SQLite'}.`, cores.ciano);
    console.log('');
    return true;
  } catch (erro) {
    imprimirLog('SQLite', `Falha ao carregar o banco de dados: ${erro?.message || erro}`, cores.vermelho);
    return false;
  }
}

function comandoDisponivel(cmd) {
  try {
    execSync(`${cmd} -version`, { stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
}

function localizarComando(cmd) {
  try {
    const resolved = execSync(`command -v ${cmd}`, {
      stdio: ['ignore', 'pipe', 'ignore'],
      encoding: 'utf8',
      shell: '/bin/sh'
    }).trim();
    return resolved || null;
  } catch {
    return null;
  }
}

function testarFfmpeg() {
  const caminho = localizarComando('ffmpeg');
  if (!caminho) return { estado: 'ausente', caminho: null, erro: '' };

  try {
    execSync('ffmpeg -version', {
      stdio: ['ignore', 'ignore', 'pipe'],
      encoding: 'utf8',
      timeout: 10000
    });
    return { estado: 'ok', caminho, erro: '' };
  } catch (err) {
    const stderr = String(err?.stderr || err?.message || '').trim();
    return { estado: 'quebrado', caminho, erro: stderr };
  }
}

function garantirFfmpegSistema() {
  const teste = testarFfmpeg();
  if (teste.estado === 'ok') return;

  if (teste.estado === 'quebrado') {
    logAviso('FFmpeg está instalado, mas não consegue iniciar. A reinstalação automática foi ignorada.');

    if (estaNoTermux()) {
      logAviso('No Termux, tente executar uma vez: pkg upgrade');
    }
    return;
  }

  if (estaNoTermux()) {
    log('FFmpeg não instalado. Instalando pelo Termux...');

    try {
      execSync('pkg install -y ffmpeg', {
        cwd: ROOT_DIR,
        stdio: 'inherit'
      });

      const depois = testarFfmpeg();
      if (depois.estado === 'ok') {
        logOk('FFmpeg instalado com sucesso.');
        return;
      }
    } catch {
      logAviso('Não foi possível instalar o FFmpeg automaticamente.');
    }
  }

  logAviso('FFmpeg não encontrado. Alguns comandos de áudio e vídeo podem não funcionar.');
}

function garantirImagemagickSistema() {
  if (comandoDisponivel('magick') || comandoDisponivel('convert')) return;

  if (estaNoTermux()) {
    log('ImageMagick não encontrado. Instalando suporte alternativo para o comando togif...');

    try {
      execSync('pkg install -y imagemagick', {
        cwd: ROOT_DIR,
        stdio: 'inherit'
      });

      if (comandoDisponivel('magick') || comandoDisponivel('convert')) {
        logOk('ImageMagick instalado com sucesso.');
        return;
      }
    } catch {
      logAviso('Não foi possível instalar o ImageMagick automaticamente.');
    }
  }
}

function verificarArquivosPersonalizados() {
  const comandosExemplo = path.join(ROOT_DIR, 'src', 'personalizados', 'commands', 'example.js');
  const eventosExemplo = path.join(ROOT_DIR, 'src', 'personalizados', 'events', 'example.js');
  const encontrados = [comandosExemplo, eventosExemplo].filter(arquivo => fs.existsSync(arquivo));

  if (encontrados.length === 2) {
    logOk('Os arquivos de exemplo da pasta personalizados foram encontrados.');
  } else if (encontrados.length === 1) {
    logAviso('Apenas um dos arquivos example.js da pasta personalizados foi encontrado.');
  } else {
    logAviso('Nenhum arquivo example.js foi encontrado na pasta personalizados.');
  }
}

let bot = null;
let reiniciando = false;

async function prepararAmbiente() {
  garantirDependenciasNpm();

  const sqliteCarregado = await carregarBancoSQLite();
  if (!sqliteCarregado) {
    throw new Error('Inicialização pausada porque o SQLite não pôde ser carregado.');
  }

  verificarArquivosPersonalizados();

  try {
    aplicarPatchRecepcaoMensagemInvisivel();
  } catch (erro) {
    logErro(`Falha ao configurar o recebimento de mensagens invisíveis: ${erro?.message || erro}`);
  }

  garantirFfmpegSistema();
  garantirImagemagickSistema();
}

async function iniciarBot(autoLimpeza = false) {
  if (reiniciando) return;

  try {
    await prepararAmbiente();
  } catch (erro) {
    logErro(erro?.message || erro);
    process.exit(1);
    return;
  }

  logOk('Iniciando o bot...');

  bot = spawn(process.execPath, [path.join(ROOT_DIR, 'src', 'connect.js')], {
    cwd: ROOT_DIR,
    stdio: 'inherit',
    env: {
      ...process.env,
      AUTO_LIMPEZA: autoLimpeza ? 'true' : 'false'
    }
  });

  bot.on('exit', code => {
    if (Number(code) === 79) {
      process.exit(1);
      return;
    }

    log(`Bot finalizado (código: ${code}), reiniciando...`);
    reiniciando = true;

    setTimeout(() => {
      reiniciando = false;
      iniciarBot(false);
    }, Number(process.env.YUTA_RESTART_DELAY_MS || 1200));
  });

  bot.on('error', err => {
    logErro(`Não foi possível iniciar o bot: ${err?.message || err}`);
  });
}

function iniciarAutoLimpeza() {
  const caminhoQR = path.join(ROOT_DIR, 'src', 'dados', 'qr-code');
  let ultimaExecucao = null;

  setInterval(async () => {
    try {
      if (!fs.existsSync(caminhoQR)) return;

      const agora = new Date();
      const partes = new Intl.DateTimeFormat('pt-BR', {
        timeZone: 'America/Sao_Paulo',
        hour: '2-digit',
        minute: '2-digit',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour12: false
      }).formatToParts(agora);

      const valor = tipo => partes.find(p => p.type === tipo)?.value || '00';
      const hora = `${valor('hour')}:${valor('minute')}`;
      const hoje = `${valor('year')}-${valor('month')}-${valor('day')}`;

      if (hora === '00:00' && ultimaExecucao !== hoje) {
        ultimaExecucao = hoje;
        logAuto('Limpeza automática em andamento...');

        const arquivos = await fs.promises.readdir(caminhoQR);
        const filtrados = arquivos.filter(arq => /sender|pre-key/i.test(arq));

        for (const arquivo of filtrados) {
          try {
            await fs.promises.unlink(path.join(caminhoQR, arquivo));
          } catch (err) {
            logErro(`Não foi possível apagar ${arquivo}: ${err?.message || err}`);
          }
        }

        logAuto(`${filtrados.length} ARQUIVO(S) REMOVIDO(S).`);
      }
    } catch (e) {
      logErro(`Falha na limpeza automática: ${e?.message || e}`);
    }
  }, 30000);
}

iniciarBot();
iniciarAutoLimpeza();
