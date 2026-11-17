import { aplicarEfeito } from '../../funcoes/audio-effects.js';

export default {
  name: "vozhomem",
  aliases: ["vozmasculina"],
  description: 'Aplica o efeito homem em um áudio.',
  async execute(ctx) {
    return aplicarEfeito(ctx, 'homem', 'asetrate=48000*0.82,aresample=48000,atempo=1.219512');
  }
};
