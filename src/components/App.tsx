import React, { useState } from 'react';
import GlobalStyle from './GlobalStyle';
import Header from './components/Header';
import Sequencer from './Sequencer';
import Slider from './Slider';
import Button from './Button';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#ef4565',
    secondary: '#282c34',
  },
};

function App() {
  const [bpm, setBpm] = useState<number>(120);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isSwing, setIsSwing] = useState<boolean>(false);

  const handleBpmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setBpm(value);
  };

  const handlePlayToggle = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSwingToggle = () => {
    setIsSwing(!isSwing);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Sequencer bpm={bpm} isPlaying={isPlaying} isSwing={isSwing} />
      <Slider bpm={bpm} onChange={handleBpmChange} />
      <Button variant="primary" onClick={handlePlayToggle}>
        {isPlaying ? 'Stop' : 'Play'}
      </Button>
      <Button variant="secondary" onClick={handleSwingToggle}>
        {isSwing ? 'Swing off' : 'Swing on'}
      </Button>
    </ThemeProvider>
  );
}

export default App;