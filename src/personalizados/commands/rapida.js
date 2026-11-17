import { aplicarEfeito } from '../../funcoes/audio-effects.js';

export default {
  name: "vozrapida",
  aliases: ["vozrapido", "vozacelerar"],
  description: 'Aplica o efeito rapida em um áudio.',
  async execute(ctx) {
    return aplicarEfeito(ctx, 'rapida', 'atempo=1.45');
  }
};
