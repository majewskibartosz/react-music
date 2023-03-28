import React, { useState } from 'react';
import GlobalStyle from './GlobalStyle';
import Header from './Header';
import Sequencer from './Sequencer';
import DrumMachine from './DrumMachine';
import Slider from './Slider';
import Button from './Button';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#ef4565',
    secondary: '#282c34',
  },
};


const App: React.FC = () => {
  const [bpm, setBpm] = useState<number>(120);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isSwing, setIsSwing] = useState<boolean>(false);

  const handleBpmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setBpm(value);
  };

  const handlePlayClick = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSwingClick = () => {
    setIsSwing(!isSwing);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <DrumMachine
        bpm={bpm}
        isPlaying={isPlaying}
        isSwing={isSwing}
        handleBpmChange={handleBpmChange}
        handlePlayPauseClick={handlePlayClick}
        handleSwingClick={handleSwingClick}
      />
      <Sequencer bpm={bpm} isPlaying={isPlaying} isSwing={isSwing} />
      <Slider bpm={bpm} onChange={handleBpmChange} />
      <Button variant="primary" onClick={handlePlayClick}>
        {isPlaying ? 'Stop' : 'Play'}
      </Button>
      <Button variant="secondary" onClick={handleSwingClick}>
        {isSwing ? 'Swing off' : 'Swing on'}
      </Button>
    </ThemeProvider>
  );
}

export default App;