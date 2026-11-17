import { fileURLToPath as __fileURLToPath } from 'url';
import { dirname as __dirnamePath } from 'path';
import { readFileSync as __readJSONFileSync } from 'fs';
import fs from 'fs';
const __filename = __fileURLToPath(import.meta.url);
const __dirname = __dirnamePath(__filename);
const loadJSON = (file) => JSON.parse(__readJSONFileSync(file, 'utf8'));

const COMANDOS_PATH = './src/dados/settings/media/comandos.json';
const comandos = JSON.parse(fs.readFileSync(COMANDOS_PATH));

const sanitizeCommand = (value) => {
  if (typeof value !== 'string') return '';
  let cmd = value.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/ç/g, 'c');
  cmd = cmd.replace(/^[!./#\\]+/, '').trim();
  if (!cmd || ['null', 'undefined', 'nil', 'none'].includes(cmd)) return '';
  if (/\s/.test(cmd)) return '';
  return cmd;
};

const cleanupCommands = (list) => {
  if (!Array.isArray(list)) return [];
  return [...new Set(list.map(sanitizeCommand).filter(Boolean))];
};

let __dirty = false;
for (const item of comandos) {
  if (!item || typeof item !== 'object') continue;
  const clean = cleanupCommands(item.comandos);
  if (!Array.isArray(item.comandos) || JSON.stringify(clean) !== JSON.stringify(item.comandos)) {
    item.comandos = clean;
    __dirty = true;
  }
}
if (__dirty) fs.writeFileSync(COMANDOS_PATH, JSON.stringify(comandos));

const addComandosId = (from) => {
  if (!from || comandos.some(item => item?.groupId === from)) return false;
  comandos.push({ groupId: from, comandos: [] });
  fs.writeFileSync(COMANDOS_PATH, JSON.stringify(comandos));
  return true;
};
const getComandos = (from) => comandos.find(item => item?.groupId === from)?.groupId;
const addComandos = (from, oq) => {
  const cmd = sanitizeCommand(oq);
  if (!from || !cmd) return false;
  let item = comandos.find(item => item?.groupId === from);
  if (!item) {
    item = { groupId: from, comandos: [] };
    comandos.push(item);
  }
  item.comandos = cleanupCommands(item.comandos);
  if (item.comandos.includes(cmd)) return false;
  item.comandos.push(cmd);
  fs.writeFileSync(COMANDOS_PATH, JSON.stringify(comandos));
  return true;
};
const deleteComandos = (from, oq) => {
  const cmd = sanitizeCommand(oq);
  const item = comandos.find(item => item?.groupId === from);
  if (!item || !cmd) return false;
  item.comandos = cleanupCommands(item.comandos);
  const index = item.comandos.indexOf(cmd);
  if (index < 0) return false;
  item.comandos.splice(index, 1);
  fs.writeFileSync(COMANDOS_PATH, JSON.stringify(comandos));
  return true;
};
const getComandoBlock = (from) => {
  const item = comandos.find(item => item?.groupId === from);
  if (!item) return [];
  const clean = cleanupCommands(item.comandos);
  if (JSON.stringify(clean) !== JSON.stringify(item.comandos)) {
    item.comandos = clean;
    fs.writeFileSync(COMANDOS_PATH, JSON.stringify(comandos));
  }
  return item.comandos;
};

export { addComandosId, deleteComandos, getComandoBlock, getComandos, addComandos };
