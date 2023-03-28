import React, { useEffect, useState } from 'react';
import { modifyHighlightClass, modifyClass } from '../utils/functions';
import * as Tone from 'tone';

type SequencerProps = {
  bpm: number;
  isPlaying: boolean;
  isSwing: boolean;
};

const Sequencer: React.FC<SequencerProps> = ({ bpm, isPlaying, isSwing }) => {
  const [kit, setKit] = useState<Tone.Sampler>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [gain, setGain] = useState<Tone.Gain>();
  const [rows, setRows] = useState<HTMLDivElement[]>([]);
  const sounds = ['C2', 'D2', 'E2', 'F2', 'G2', 'C3', 'D3', 'G3'];
  let index = 0;

  const velocity = Math.random() * 0.5 + 0.5; // randomize velocity of each step

  useEffect(() => {
    // Create drum kit
    const sampler = new Tone.Sampler({
      C2: 'TONE1.wav',
      E2: 'TONE2.wav',
      D2: 'TONE3.wav',
      F2: 'FX2.wav',
      G2: 'CLAP.wav',
      C3: 'CHH.wav',
      D3: 'TOM.wav',
      G3: 'KICK.wav',
    }, {
      release: 1,
      baseUrl: '/sounds/',
    });
    setKit(sampler);

    // Connect synth to master gain (speakers)
    const masterGain = new Tone.Gain(0.6);
    masterGain.toMaster();
    sampler.connect(masterGain);
    setGain(masterGain);

    // Get rows
    const rows = [...document.body.querySelectorAll('div > div')] as HTMLDivElement[];
    setRows(rows);

    // Clean up
    return () => {
      sampler.dispose();
      masterGain.dispose();
    };
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const repeat = (time: number) => {
    const step = index % 16;
    rows.forEach((row, i) => {
      const sound = sounds[i];
      const input = [...row.children][step] as HTMLDivElement;
      const hasClicked = input?.classList?.contains('clicked');
      const hasDoubleClicked = input?.classList?.contains('dbl-clicked');

      if (hasClicked) {
        kit?.triggerAttack(sound, time, velocity);
      } else if (hasDoubleClicked) {
        kit?.triggerAttack(sound, time, velocity / 2);
      }

      Tone.Draw.schedule(() => {
        modifyHighlightClass(input, isSwing, modifyClass);
      }, time);
    });
    index++;
  };

  return (
    <div>
      Sequencer
    </div>
  );
};

export default Sequencer;