export default {
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
