import { aplicarEfeito } from '../../funcoes/audio-effects.js';

export default {
  name: "vozlula",
  aliases: ["vozparodialula"],
  description: 'Aplica o efeito lula em um áudio.',
  async execute(ctx) {
    return aplicarEfeito(ctx, 'lula', 'asetrate=48000*0.90,aresample=48000,atempo=1.111111,equalizer=f=180:t=q:w=1:g=3,equalizer=f=1200:t=q:w=1:g=2,acompressor=threshold=0.15:ratio=2.5');
  }
};
