import React from 'react';
import styled from 'styled-components';

type SliderProps = {
  bpm: number;
  min?: number;
  max?: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SliderWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  margin: 0 1rem;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
`;

const Slider: React.FC<SliderProps> = ({ bpm, min, max, onChange }) => {
  return (
    <SliderWrapper>
      <Slider
        bpm={bpm}
        min={(min = 20)}
        max={(max = 240)}
        onChange={handleBpmChange}
      />
    </SliderWrapper>
  );
};

export default Slider;
