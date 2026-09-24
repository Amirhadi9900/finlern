// Lightweight success chime via the Web Audio API.
// No audio assets or extra CSP rules needed. The AudioContext must be created
// or resumed inside a user gesture (the submit click) to satisfy autoplay policy.

let audioCtx: AudioContext | null = null;

export function unlockAudio(): void {
  if (typeof window === 'undefined') return;
  try {
    const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!Ctx) return;
    if (!audioCtx) audioCtx = new Ctx();
    if (audioCtx.state === 'suspended') void audioCtx.resume();
  } catch {
    // Audio is a non-critical enhancement; ignore failures.
  }
}

export function playSuccessChime(): void {
  if (!audioCtx) return;
  try {
    const now = audioCtx.currentTime;
    // Soft two-tone (A5 -> C#6) with a gentle attack/decay envelope.
    const notes = [
      { freq: 880, start: 0 },
      { freq: 1108.73, start: 0.12 },
    ];
    const master = audioCtx.createGain();
    master.gain.value = 0.0001;
    master.connect(audioCtx.destination);

    for (const { freq, start } of notes) {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.value = freq;
      const t = now + start;
      gain.gain.setValueAtTime(0.0001, t);
      gain.gain.exponentialRampToValueAtTime(0.12, t + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.35);
      osc.connect(gain);
      gain.connect(master);
      osc.start(t);
      osc.stop(t + 0.4);
    }
    master.gain.setValueAtTime(0.9, now);
  } catch {
    // Ignore playback errors.
  }
}
