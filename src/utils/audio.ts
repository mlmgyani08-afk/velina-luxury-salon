// Web Audio API ambient chime for luxury sensory experience
let audioCtx: AudioContext | null = null;

export const playLuxuryChime = (tone: 'subtle' | 'radiant' | 'deep' = 'subtle') => {
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;

    if (!audioCtx) {
      audioCtx = new AudioContextClass();
    }

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const now = audioCtx.currentTime;

    // Frequencies for soothing luxury chords (Pentatonic warm tones)
    const freqs = tone === 'radiant' 
      ? [523.25, 659.25, 783.99, 1046.50] // C5, E5, G5, C6
      : tone === 'deep'
      ? [261.63, 329.63, 392.00, 523.25] // C4, E4, G4, C5
      : [392.00, 493.88, 587.33, 783.99]; // G4, B4, D5, G5

    freqs.forEach((freq, idx) => {
      if (!audioCtx) return;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.05);

      gain.gain.setValueAtTime(0, now + idx * 0.05);
      gain.gain.linearRampToValueAtTime(0.035 / (idx + 1), now + idx * 0.05 + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.05 + 1.2);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start(now + idx * 0.05);
      osc.stop(now + idx * 0.05 + 1.3);
    });
  } catch {
    // Ignore audio playback if user hasn't interacted or browser restricts
  }
};
