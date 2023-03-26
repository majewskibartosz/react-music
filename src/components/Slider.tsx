import React from 'react';
import styled from 'styled-components';

type SliderProps = {
  value: number;
  min: number;
  max: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SliderWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SliderInput = styled.input`
  flex: 1;
  margin: 0 1rem;
`;

const SliderValue = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
`;

const Slider: React.FC<SliderProps> = ({ value, min, max, onChange }) => {
  return (
    <SliderWrapper>
      <SliderInput type="range" value={value} min={min} max={max} onChange={onChange} />
      <SliderValue>{value}</SliderValue>
    </SliderWrapper>
  );
};

export default Slider;
