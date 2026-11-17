import { aplicarEfeito } from '../../funcoes/audio-effects.js';

export default {
  name: "vozestourar",
  aliases: ["vozestoura", "vozaudioestourado"],
  description: 'Aplica o efeito estourar em um áudio.',
  async execute(ctx) {
    return aplicarEfeito(ctx, 'estourar', 'volume=5,acrusher=bits=8:mix=0.65,asoftclip=type=hard:threshold=0.7,alimiter=limit=0.95');
  }
};
