import { aplicarEfeito } from '../../funcoes/audio-effects.js';

export default {
  name: "vozsilvio",
  aliases: ["vozsilviosantos", "vozauditorio"],
  description: 'Aplica o efeito silvio em um áudio.',
  async execute(ctx) {
    return aplicarEfeito(ctx, 'silvio', 'asetrate=48000*1.10,aresample=48000,atempo=0.909091,equalizer=f=2200:t=q:w=1:g=3,aecho=0.8:0.6:35:0.18,acompressor=threshold=0.12:ratio=3');
  }
};
