import { aplicarEfeito } from '../../funcoes/audio-effects.js';

export default {
  name: "vozbolsonaro",
  aliases: ["vozparodiabolsonaro"],
  description: 'Aplica o efeito bolsonaro em um áudio.',
  async execute(ctx) {
    return aplicarEfeito(ctx, 'bolsonaro', 'asetrate=48000*0.96,aresample=48000,atempo=1.041667,equalizer=f=900:t=q:w=1.3:g=3,equalizer=f=2600:t=q:w=1:g=2,acompressor=threshold=0.14:ratio=2.8');
  }
};
