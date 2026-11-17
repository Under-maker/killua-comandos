import path from 'node:path';

const pasta = path.join(process.cwd(), 'src', 'personalizados', 'data');
const arquivo = path.join(pasta, 'apks.json');

function carregar(ctx) {
  ctx.fs.mkdirSync(pasta, { recursive: true });

  if (!ctx.fs.existsSync(arquivo)) {
    ctx.fs.writeFileSync(arquivo, '[]\n');
  }

  try {
    const dados = JSON.parse(ctx.fs.readFileSync(arquivo, 'utf8'));
    return Array.isArray(dados) ? dados : [];
  } catch {
    throw new Error('O arquivo apks.json está inválido. Corrija o JSON antes de continuar.');
  }
}

function salvar(ctx, dados) {
  const temporario = `${arquivo}.tmp`;
  ctx.fs.writeFileSync(temporario, JSON.stringify(dados, null, 2) + '\n');
  ctx.fs.renameSync(temporario, arquivo);
}

function linkValido(valor) {
  try {
    const url = new URL(valor);
    return ['http:', 'https:'].includes(url.protocol);
  } catch {
    return false;
  }
}

function separar(texto, quantidade) {
  return String(texto || '').split('|').map(v => v.trim()).slice(0, quantidade);
}

export default {
  name: 'apks',
  aliases: [
    'apk',
    'addapk',
    'editarapk',
    'delapk',
    'limparapks',
    'apk-selecionar'
  ],
  description: 'Catálogo de aplicativos premium.',

  async execute(ctx) {
    const {
      command, q, args, reply, yuta, from, yt,
      prefix, NomeDoBot, sender, fs
    } = ctx;

    const acao = String(command || 'apks').toLowerCase();
    const somenteDono = ctx.DonoOficial === true;

    if (['addapk', 'editarapk', 'delapk', 'limparapks'].includes(acao) && !somenteDono) {
      return reply('❌ Somente o dono global do bot pode gerenciar o catálogo de APKs.');
    }

    let dados;

    try {
      dados = carregar(ctx);
    } catch (erro) {
      return reply(`❌ ${erro.message}`);
    }

    if (acao === 'addapk') {
      const [nome, link] = separar(q, 2);

      if (!nome || !link) {
        return reply(
          `📦 *ADICIONAR APK*\n\n` +
          `Use:\n${prefix}addapk Nome | Link\n\n` +
          `Exemplo:\n${prefix}addapk Spotify Premium | https://exemplo.com/app`
        );
      }

      if (!linkValido(link)) {
        return reply('❌ Link inválido. Utilize um endereço HTTP ou HTTPS.');
      }

      dados.push({
        nome: nome.slice(0, 80),
        link
      });

      salvar(ctx, dados);

      return reply(`✅ APK cadastrado!\n\n📦 ${nome}\n🔢 Número: ${dados.length}`);
    }

    if (acao === 'editarapk') {
      const [numeroTexto, nome, link] = separar(q, 3);
      const numero = Number(numeroTexto);

      if (!Number.isInteger(numero) || numero < 1 || numero > dados.length || !nome || !link) {
        return reply(`✏️ Use:\n${prefix}editarapk Número | Nome | Link`);
      }

      if (!linkValido(link)) {
        return reply('❌ Link inválido. Utilize HTTP ou HTTPS.');
      }

      dados[numero - 1] = {
        nome: nome.slice(0, 80),
        link
      };

      salvar(ctx, dados);
      return reply(`✅ APK ${numero} atualizado com sucesso.`);
    }

    if (acao === 'delapk') {
      const numero = Number(String(q || args?.[0] || '').trim());

      if (!Number.isInteger(numero) || numero < 1 || numero > dados.length) {
        return reply(`🗑️ Use:\n${prefix}delapk Número`);
      }

      const removido = dados.splice(numero - 1, 1)[0];
      salvar(ctx, dados);

      return reply(`✅ APK removido:\n📦 ${removido.nome}`);
    }

    if (acao === 'limparapks') {
      if (!dados.length) return reply('📭 O catálogo já está vazio.');

      salvar(ctx, []);
      return reply('✅ Catálogo de APKs limpo com sucesso.');
    }

    if (acao === 'apk-selecionar') {
      const numero = Number(args?.[0]);

      if (!Number.isInteger(numero) || numero < 1 || numero > dados.length) {
        return reply('❌ Essa opção não existe mais. Abra o catálogo novamente.');
      }

      const apk = dados[numero - 1];

      return reply(
        `📦 *${apk.nome}*\n\n` +
        `🔗 Link para acessar:\n${apk.link}\n\n` +
        `☠️ ${NomeDoBot || 'KILLUA ZOLDYCK BOT'}`
      );
    }

    if (!dados.length) {
      return reply(
        `📭 *CATÁLOGO DE APKs VAZIO*\n\n` +
        `Ainda não há aplicativos cadastrados.\n\n` +
        `O dono global pode adicionar usando:\n` +
        `${prefix}addapk Nome | Link`
      );
    }

    const linhas = dados.map((apk, indice) => ({
      header: `📦 APLICATIVO ${indice + 1}`,
      title: String(apk.nome).slice(0, 60),
      description: 'Selecionar para visualizar o link',
      id: `${prefix}apk-selecionar ${indice + 1}`
    }));

    const secoes = [];

    for (let i = 0; i < linhas.length; i += 10) {
      secoes.push({
        title: `📂 APLICATIVOS ${i + 1} A ${Math.min(i + 10, linhas.length)}`,
        rows: linhas.slice(i, i + 10)
      });
    }

    const botoes = [{
      name: 'single_select',
      buttonParamsJson: JSON.stringify({
        title: '📱 ESCOLHA UM APLICATIVO',
        sections: secoes
      })
    }];

    try {
      await ctx.relayButtonMessage(yuta, from, {
        interactiveMessage: {
          body: {
            text:
              `📱 *CATÁLOGO DE APLICATIVOS*\n\n` +
              `📦 Aplicativos disponíveis: ${dados.length}\n\n` +
              `Selecione um aplicativo na lista abaixo para visualizar o link.`
          },
          footer: {
            text: `☠️ ${NomeDoBot || 'KILLUA ZOLDYCK BOT'}`
          },
          nativeFlowMessage: {
            buttons: botoes,
            messageParamsJson: '{}',
            messageVersion: 1
          }
        }
      }, { quoted: yt });

    } catch (erro) {
      console.error('[APKS] Erro ao enviar catálogo:', erro?.message || erro);
      return reply('❌ Não foi possível abrir o catálogo agora.');
    }
  }
};
