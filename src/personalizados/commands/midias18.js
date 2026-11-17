import fs from "node:fs";
import path from "node:path";

const categorias = [
  "chupar", "bater", "espancar", "comer-cu", "gozar",
  "humilhar", "mamar", "mijar", "punheta", "siririca",
  "surubao", "transar", "dar", "dar_adm", "dar_under", "melar",
  "morder", "estuprar"
];

const extensoes = /\.(gif|jpe?g|png|webp|mp4|mov|mkv|webm)$/i;

export default {
  name: "midias18",
  aliases: ["listar18", "fotos18", "list18"],
  description: "Lista as mídias cadastradas nos comandos +18.",

  async execute(ctx) {
    if (ctx.SoDono !== true) {
      await ctx.reply("❌ Este comando é exclusivo do dono do bot.");
      return;
    }

    const raiz = path.join(process.cwd(), "src/dados/data/media/18");
    const linhas = ["📂 MÍDIAS CADASTRADAS — SISTEMA +18", ""];

    let total = 0;

    for (const categoria of categorias) {
      const pasta = path.join(raiz, categoria);
      let arquivos = [];

      try {
        arquivos = fs.readdirSync(pasta).filter(nome => {
          try {
            return extensoes.test(nome) &&
              fs.statSync(path.join(pasta, nome)).isFile();
          } catch {
            return false;
          }
        });
      } catch {}

      total += arquivos.length;
      linhas.push(`📁 ${categoria} — ${arquivos.length} mídia(s)`);

      for (const nome of arquivos) {
        linhas.push(`  • ${nome}`);
      }

      linhas.push("");
    }

    linhas.push(`Total: ${total} mídia(s) cadastrada(s).`);
    await ctx.reply(linhas.join("\n"));
  }
};
