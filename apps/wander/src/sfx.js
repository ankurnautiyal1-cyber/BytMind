// Tiny WebAudio helper — synthesized chimes, no audio files.

let ctx = null;

export function initAudio() {
  if (!ctx) {
    try {
      ctx = new (window.AudioContext || window.webkitAudioContext)();
    } catch { /* audio unavailable — the world stays silent, no harm */ }
  }
  if (ctx && ctx.state === 'suspended') ctx.resume();
}

function tone(freq, t0, dur, vol, type = 'sine') {
  if (!ctx) return;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  gain.gain.setValueAtTime(0, ctx.currentTime + t0);
  gain.gain.linearRampToValueAtTime(vol, ctx.currentTime + t0 + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + t0 + dur);
  osc.connect(gain).connect(ctx.destination);
  osc.start(ctx.currentTime + t0);
  osc.stop(ctx.currentTime + t0 + dur + 0.05);
}

// landmark discovered — rising major arpeggio
export function chimeDiscover() {
  tone(523.25, 0.00, 0.5, 0.16);
  tone(659.25, 0.09, 0.5, 0.14);
  tone(783.99, 0.18, 0.65, 0.15);
  tone(1046.5, 0.27, 0.8, 0.12);
}

// shard collected — bright bell
export function chimeShard() {
  tone(1318.5, 0.00, 0.35, 0.12, 'triangle');
  tone(1760.0, 0.06, 0.45, 0.09, 'sine');
}

// every shard found — little fanfare
export function chimeComplete() {
  [523.25, 659.25, 783.99, 1046.5, 1318.5].forEach((f, i) => tone(f, i * 0.11, 0.7, 0.13));
}

// stepping through the Ancient Gate — a rising weave
export function chimePortal() {
  tone(196, 0.00, 0.9, 0.12, 'sawtooth');
  tone(294, 0.10, 0.9, 0.10, 'sawtooth');
  tone(392, 0.20, 0.9, 0.11, 'sine');
  tone(587, 0.32, 1.1, 0.10, 'sine');
  tone(880, 0.46, 1.3, 0.07, 'sine');
}
