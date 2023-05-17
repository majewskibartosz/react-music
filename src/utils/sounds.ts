import * as Tone from 'tone';

// Create drum kit
const kit = new Tone.Sampler(
  {
    C2: 'TONE1.wav',
    E2: 'TONE2.wav',
    D2: 'TONE3.wav',
    F2: 'FX2.wav',
    G2: 'CLAP.wav',
    C3: 'CHH.wav',
    D3: 'TOM.wav',
    G3: 'KICK.wav',
  },
  {
    release: 1,
    baseUrl: '/sounds/',
  },
);

// Connect kit to master gain (speakers)
const gain = new Tone.Gain(0.6);
gain.toMaster();
kit.connect(gain);

// Available sounds
const sounds = ['C2', 'D2', 'E2', 'F2', 'G2', 'C3', 'D3', 'G3'];

// Velocity
const velocity = () => Math.random() * 0.5 + 0.5; // randomize velocity of each step

export { kit, gain, sounds, velocity };
