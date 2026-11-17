import { aplicarEfeito } from '../../funcoes/audio-effects.js';

export default {
  name: "vozgay",
  aliases: ["vozbrilhante"],
  description: 'Aplica o efeito gay em um áudio.',
  async execute(ctx) {
    return aplicarEfeito(ctx, 'gay', 'equalizer=f=1800:t=q:w=1.2:g=5,equalizer=f=4200:t=q:w=1:g=4,chorus=0.5:0.7:50:0.4:0.25:2');
  }
};
