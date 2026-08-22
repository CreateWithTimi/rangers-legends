import christianChukwu from './christian-chukwu.js';

export const legends = [christianChukwu];

export function getLegendBySlug(slug) {
  return legends.find((legend) => legend.slug === slug);
}
