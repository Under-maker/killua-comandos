import { aplicarEfeito } from '../../funcoes/audio-effects.js';

export default {
  name: "vozlenta",
  aliases: ["vozdevagar", "vozaudiolento"],
  description: 'Aplica o efeito lenta em um áudio.',
  async execute(ctx) {
    return aplicarEfeito(ctx, 'lenta', 'atempo=0.72');
  }
};
