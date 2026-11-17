import { aplicarEfeito } from '../../funcoes/audio-effects.js';

export default {
  name: "vozmulher",
  aliases: ["vozfeminina"],
  description: 'Aplica o efeito mulher em um áudio.',
  async execute(ctx) {
    return aplicarEfeito(ctx, 'mulher', 'asetrate=48000*1.22,aresample=48000,atempo=0.819672');
  }
};
