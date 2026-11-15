// Quality tiers. Every expensive visual feature in the overhaul hangs off one
// of these flags so the whole look can be dialled to a frame budget.
//
//   ?q=low | medium | high   (URL, remembered in localStorage)

export const TIERS = {
  low: {
    name: 'low', pixelRatio: 1, msaa: 0, smaa: true,
    bloom: true, bloomScale: 0.5, shafts: false, mist: false, envEvery: 6,
    envSize: 64, clouds: 'simple', grass: 0.3, trees: 0.5, reflect: 0,
  },
  medium: {
    name: 'medium', pixelRatio: 1.5, msaa: 4, smaa: false,
    bloom: true, bloomScale: 0.5, shafts: true, mist: true, envEvery: 3,
    envSize: 128, clouds: 'full', grass: 0.6, trees: 0.8, reflect: 0.35,
  },
  high: {
    name: 'high', pixelRatio: 2, msaa: 4, smaa: false,
    bloom: true, bloomScale: 1, shafts: true, mist: true, envEvery: 1.5,
    envSize: 256, clouds: 'full', grass: 1, trees: 1, reflect: 0.5,
  },
};

const KEY = 'wander:quality';

export function pickQuality() {
  const q = new URLSearchParams(location.search).get('q');
  if (q && TIERS[q]) {
    try { localStorage.setItem(KEY, q); } catch { /* ignore */ }
    return TIERS[q];
  }
  let saved = null;
  try { saved = localStorage.getItem(KEY); } catch { /* ignore */ }
  return TIERS[saved] || TIERS.medium;
}
