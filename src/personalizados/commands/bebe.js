import { aplicarEfeito } from '../../funcoes/audio-effects.js';

export default {
  name: "vozbebe",
  aliases: ["voz-bebe"],
  description: 'Aplica o efeito bebe em um áudio.',
  async execute(ctx) {
    return aplicarEfeito(ctx, 'bebe', 'asetrate=48000*1.45,aresample=48000,atempo=0.689655');
  }
};
