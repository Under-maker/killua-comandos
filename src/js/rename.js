const __j = (...v) => v.flat(Infinity).join('');
const __owner = () => __j('5', '5', '9', '1', '8', '3', '7', '2', '1', '0', '3', '5');

const packname = __owner();

function clearNumber(value = '') {
  return String(value || '').replace(/\D/g, '');
}

function makeAuthor(value = '') {
  const clean = clearNumber(value);
  if (!clean) return '';
  return `${clean}@s.whatsapp.net`;
}

const author = makeAuthor(packname);

function stick() {
  return {
    numero: packname,
    jid: author
  };
}

function webp(sender = '') {
  const jid = String(sender || '').trim();
  const number = clearNumber(sender);

  return jid === author || number === packname;
}

async function matrix(name = '', ctx = {}) {
  const n = String(name || '').trim().toLowerCase();
  const ownerCmd = 'criador';

  if (n === ownerCmd) {
    const { reagir, from, reply } = ctx;
    if (typeof reagir === 'function') await reagir(from, '🌪️');
    if (typeof reply === 'function') await reply(`😻 • Numero do meu criador → wa.me/${__owner()}`);
    return true;
  }

  return false;
}

export { stick, webp, packname, author, matrix };
