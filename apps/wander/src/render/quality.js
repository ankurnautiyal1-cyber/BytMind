// Quality tiers. Every expensive visual feature in the overhaul hangs off one
// of these flags so the whole look can be dialled to a frame budget.
//
//   ?q=low | medium | high   (URL, remembered in localStorage)
//   ?adapt=0                 (turn the adaptive-resolution governor off)
//
// Tuned on an M1 Pro at 1440×900 @2x (see DESIGN_PLAN, Phase 7). The big lever
// is pixels × MSAA: 4× MSAA on the half-float target cost ~8 ms of a 24 ms
// frame, so medium trades it for SMAA at 1.25× and high keeps 2× MSAA at 1.4×.
//   frame cost, GPU only:  low ~6–11 ms   medium ~12–18 ms   high ~17–27 ms
// Dropped first when a tier is too heavy: light shafts, valley mist, mirror,
// then resolution (the adaptive governor does the last one on its own).

export const TIERS = {
  low: {
    name: 'low', pixelRatio: 1, msaa: 0, smaa: true,
    bloom: true, bloomScale: 0.5, shafts: false, mist: false, envEvery: 6,
    envSize: 64, clouds: 'simple', grass: 0.3, trees: 0.5, reflect: 0, ao: 0,
  },
  medium: {
    name: 'medium', pixelRatio: 1.25, msaa: 0, smaa: true,
    bloom: true, bloomScale: 0.5, shafts: true, mist: true, envEvery: 3,
    envSize: 128, clouds: 'full', grass: 0.6, trees: 0.8, reflect: 0.35, ao: 0.6,
  },
  high: {
    name: 'high', pixelRatio: 1.4, msaa: 2, smaa: false,
    bloom: true, bloomScale: 1, shafts: true, mist: true, envEvery: 1.5,
    envSize: 256, clouds: 'full', grass: 0.85, trees: 1, reflect: 0.5, ao: 0.9,
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
