// Adaptive resolution: if the frame rate sags for a few seconds, render fewer
// pixels (the one cost that scales with every effect at once); if there is
// plenty of headroom for a long while, give them back. Hitches and hidden-tab
// frames are ignored, and a step up that immediately costs frames is locked out.

const WINDOW = 90;          // frames per decision
const SLOW = 1 / 47;        // average frame time that triggers a step down
const FAST = 1 / 57;        // …and the one that allows a step up
const STEPS = [1, 0.85, 0.72, 0.6];

export class Adaptive {
  constructor(onScale, enabled = true) {
    this.onScale = onScale;
    this.enabled = enabled;
    this.level = 0;          // index into STEPS
    this.sum = 0;
    this.n = 0;
    this.goodWindows = 0;
    this.t = 0;              // seconds of play measured
    this.lastUp = -1e9;
    this.lockUntil = 0;
    this.verify = false;     // the window after a step down: did fewer pixels help?
    this.before = 0;
    this.noDownUntil = 0;
  }

  get scale() { return STEPS[this.level]; }

  // dt: raw frame time in seconds; active: false while paused / warping
  feed(dt, active = true) {
    if (!this.enabled || !active) { this.sum = this.n = 0; return; }
    if (dt > 0.1 || dt <= 0) return; // a hitch (loading, tab switch), not a trend
    this.t += dt;
    this.sum += dt;
    if (++this.n < WINDOW) return;
    const avg = this.sum / this.n;
    this.sum = this.n = 0;

    if (this.verify) {
      this.verify = false;
      // fewer pixels but no faster: the frame is bound by geometry or the CPU,
      // not fill — give the resolution back and stop trying for a while
      if (avg > this.before * 0.93) {
        this.level--;
        this.noDownUntil = this.t + 90;
        this.goodWindows = 0;
        this.onScale(this.scale);
        return;
      }
    }

    if (avg > SLOW && this.level < STEPS.length - 1 && this.t > this.noDownUntil) {
      // a step up that went badly: stop trying for two minutes
      if (this.t - this.lastUp < 10) this.lockUntil = this.t + 120;
      this.before = avg;
      this.verify = true;
      this.level++;
      this.goodWindows = 0;
      this.onScale(this.scale);
    } else if (avg < FAST && this.level > 0 && this.t > this.lockUntil) {
      if (++this.goodWindows >= 12 && this.t - this.lastUp > 20) {
        this.level--;
        this.goodWindows = 0;
        this.lastUp = this.t;
        this.onScale(this.scale);
      }
    } else {
      this.goodWindows = 0;
    }
  }
}
