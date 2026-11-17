// Gamepad support (standard mapping). Sticks and buttons are translated into
// the same keyboard events the game already listens to, so walking, flying,
// photo mode, the map and the journal all work without a second code path;
// only looking is analog.
//
//   left stick  move              right stick  look
//   A           jump / swim up    B            sprint (hold)
//   Y           fly (hold)        X            field journal
//   LB / RB     camera out / in   L3           first / third person
//   Select      map               Start        pause / resume
//   D-pad ↑     photo mode        D-pad ↓      controls sheet
//   D-pad →     settings
//   in photo mode: A shoots, B / D-pad ↑ exits, triggers zoom, LB / RB lower / raise

const DEAD = 0.18;

export class Gamepad {
  constructor({ player, photo, onStart, hud }) {
    this.player = player;
    this.photo = photo;
    this.onStart = onStart;
    this.hud = hud;
    this.prev = [];
    this.held = Object.create(null);
    this.active = false;
    addEventListener('gamepadconnected', (e) => {
      this.hud?.toast('Controller connected', e.gamepad.id.split('(')[0].trim().slice(0, 40));
    });
  }

  _key(code, down) {
    if (!!this.held[code] === down) return;
    this.held[code] = down;
    window.dispatchEvent(new KeyboardEvent(down ? 'keydown' : 'keyup', { code }));
  }

  _tap(code) {
    window.dispatchEvent(new KeyboardEvent('keydown', { code }));
    window.dispatchEvent(new KeyboardEvent('keyup', { code }));
  }

  update(dt, playing) {
    const pads = navigator.getGamepads ? navigator.getGamepads() : [];
    const g = [...pads].find((p) => p && p.connected && p.mapping === 'standard') || [...pads].find((p) => p && p.connected);
    this.active = !!g;
    if (!g) { this.prev = []; return; }
    const b = (i) => !!g.buttons[i]?.pressed;
    const pressed = (i) => b(i) && !this.prev[i];
    const photo = this.photo.active;

    // Start always works (the title / pause screen has no mouse to click)
    if (pressed(9) || (!playing && pressed(0))) this.onStart();
    if (pressed(8) && playing && !photo) this._tap('KeyM');
    if (pressed(2) && playing && !photo) this._tap('Tab');
    if (pressed(13)) this._tap('KeyH');
    if (pressed(15)) this._tap('KeyO');
    if (pressed(12) && playing) this._tap('KeyC');
    if (pressed(10) && playing && !photo) this._tap('KeyV');

    if (playing) {
      const ax = (i) => (Math.abs(g.axes[i] || 0) > DEAD ? g.axes[i] : 0);
      const lx = ax(0), ly = ax(1), rx = ax(2), ry = ax(3);
      this._key('KeyA', lx < -0.35);
      this._key('KeyD', lx > 0.35);
      this._key('KeyW', ly < -0.35);
      this._key('KeyS', ly > 0.35);
      if (photo) {
        this._key('ShiftLeft', Math.hypot(lx, ly) > 0.9);
        if (pressed(0)) this._tap('Enter');
        if (pressed(1)) this._tap('KeyC');
        this._key('KeyQ', b(4));
        this._key('KeyE', b(5));
        const z = (g.buttons[7]?.value || 0) - (g.buttons[6]?.value || 0); // RT in, LT out
        if (z) this.photo.fov = Math.min(95, Math.max(14, this.photo.fov * Math.exp(-z * dt * 1.2)));
        this.photo.look(rx * dt * 900, ry * dt * 900);
      } else {
        this._key('Space', b(0));
        this._key('ShiftLeft', b(1) || Math.hypot(lx, ly) > 0.97);
        this._key('KeyP', b(3));
        if (b(4)) this.player.camDist = Math.min(9.5, this.player.camDist + dt * 4);
        if (b(5)) this.player.camDist = Math.max(2.6, this.player.camDist - dt * 4);
        this.player.look(rx * dt * 900, ry * dt * 900);
      }
    } else {
      for (const k of Object.keys(this.held)) this._key(k, false);
    }
    this.prev = g.buttons.map((x) => x.pressed);
  }
}
