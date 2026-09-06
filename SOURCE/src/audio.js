class MotelAudio {
  constructor(settings) {
    this.settings = settings;
    this.context = null;
    this.timer = null;
    this.step = 0;
  }
  start() {
    if (!this.context) {
      const Audio = window.AudioContext || window.webkitAudioContext;
      if (!Audio) return;
      this.context = new Audio();
      this.master = this.context.createGain();
      this.master.connect(this.context.destination);
      this.musicGain = this.context.createGain();
      this.musicGain.connect(this.master);
      this.fxGain = this.context.createGain();
      this.fxGain.connect(this.master);
      this.update();
    }
    if (this.context.state === "suspended") this.context.resume().catch(() => {
    });
    if (!this.timer) this.timer = setInterval(() => this.music(), 1800);
  }
  update() {
    if (!this.context) return;
    this.master.gain.setTargetAtTime(this.settings.mute ? 0 : this.settings.volume / 100, this.context.currentTime, 0.1);
    this.musicGain.gain.value = this.settings.music ? 0.28 : 0;
    this.fxGain.gain.value = 0.5;
  }
  tone(freq, duration = 0.2, type = "sine", gain = 0.15, delay = 0, target = this.fxGain) {
    if (!this.context || !target) return;
    const t = this.context.currentTime + delay, o = this.context.createOscillator(), g = this.context.createGain();
    o.type = type;
    o.frequency.value = freq;
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(gain, t + 0.015);
    g.gain.exponentialRampToValueAtTime(1e-4, t + duration);
    o.connect(g);
    g.connect(target);
    o.start(t);
    o.stop(t + duration + 0.05);
    o.onended = () => {
      o.disconnect();
      g.disconnect();
    };
  }
  effect(name) {
    this.start();
    if (name === "success") {
      this.tone(523, 0.28);
      this.tone(659, 0.4, "sine", 0.13, 0.1);
    } else if (name === "bell") {
      this.tone(880, 1, "sine", 0.12);
      this.tone(1320, 0.65, "sine", 0.06, 0.06);
    } else if (name === "warning") {
      this.tone(220, 0.25, "triangle", 0.13);
    } else if (name === "win") {
      [261, 329, 392, 523, 659].forEach((f, i) => this.tone(f, 1.4, "sine", 0.17, i * 0.18));
    } else this.tone(380, 0.09, "sine", 0.06);
  }
  music() {
    if (!this.context || this.context.state !== "running" || !this.settings.music || this.settings.mute) return;
    const chords = [[130.81, 164.81, 196], [110, 130.81, 164.81], [87.31, 130.81, 174.61], [98, 146.83, 196]];
    const chord = chords[Math.floor(this.step / 4) % 4];
    chord.forEach((f, i) => this.tone(f, 3, "sine", 0.1, i * 0.12, this.musicGain));
    this.tone(chord[this.step % 3] * 2, 1.7, "triangle", 0.08, 0.3, this.musicGain);
    this.step++;
  }
  suspend() {
    if (this.context?.state === "running") this.context.suspend().catch(() => {
    });
  }
}
export {
  MotelAudio
};
