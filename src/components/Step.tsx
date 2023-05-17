import React from 'react';
import styled from 'styled-components';

type StepProps = {
  isActive: boolean;
  isBeat: boolean;
  handleClick: () => void;
  handleDoubleClick: () => void;
};

const StepButton = styled.button<{ isActive: boolean; isBeat: boolean }>`
  width: 1.5rem;
  height: 1.5rem;
  border: none;
  border-radius: 50%;
  margin: 0.25rem;
  background-color: ${({ isActive, isBeat }) =>
    isActive ? (isBeat ? '#ff8c00' : '#FFD152') : '#282c34'};
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${({ isActive, isBeat }) =>
      isActive ? (isBeat ? '#b36b00' : '#c5a523') : '#5c5f66'};
  }
`;

const Step: React.FC<StepProps> = ({
  isActive,
  isBeat,
  handleClick,
  handleDoubleClick,
}) => {
  return (
    <StepButton
      type="button"
      isActive={isActive}
      isBeat={isBeat}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
    />
  );
};

export default Step;
