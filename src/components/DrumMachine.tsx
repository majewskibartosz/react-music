import React from 'react';
import styled from 'styled-components';
import Sequencer from './Sequencer';
import Slider from './Slider';
import Button from './Button';

const DrumMachineWrapper = styled.div`
  // Add your drum machine related styles here
`;

type DrumMachineProps = {
  bpm: number;
  isPlaying: boolean;
  isSwing: boolean;
  handleBpmChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlePlayPauseClick: () => void;
  handleSwingClick: () => void;
};

const DrumMachine: React.FC<DrumMachineProps> = ({
  bpm,
  isPlaying,
  isSwing,
  handleBpmChange,
  handlePlayPauseClick,
  handleSwingClick,
}) => {
  return (
    <DrumMachineWrapper>
      <Sequencer bpm={bpm} isPlaying={isPlaying} isSwing={isSwing} />
      <Slider bpm={90} min={40} max={240} onChange={handleBpmChange} />
      <Button onClick={handlePlayPauseClick}>
        {isPlaying ? 'STOP' : 'PLAY'}
      </Button>
      <Button onClick={handleSwingClick}>
        {isSwing ? 'SWING ON' : 'SWING OFF'}
      </Button>
    </DrumMachineWrapper>
  );
};

export default DrumMachine;
