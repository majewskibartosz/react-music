import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
};

const ButtonWrapper = styled.button<{ variant: string; size: string }>`
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  border: none;
  border-radius: 50px;
  padding: ${({ size }) => {
    switch (size) {
      case 'small':
        return '0.25rem 0.5rem';
      case 'medium':
        return '0.5rem 1rem';
      case 'large':
        return '1rem 2rem';
      default:
        return '0.5rem 1rem';
    }
  }};
  background-color: ${({ variant }) => {
    switch (variant) {
      case 'primary':
        return '#ef4565';
      case 'secondary':
        return '#282c34';
      default:
        return '#ef4565';
    }
  }};
  color: ${({ variant }) => {
    switch (variant) {
      case 'primary':
        return '#fff';
      case 'secondary':
        return '#fff';
      default:
        return '#fff';
    }
  }};
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: ${({ variant }) => {
      switch (variant) {
        case 'primary':
          return '#c4213f';
        case 'secondary':
          return '#484e5c';
        default:
          return '#c4213f';
      }
    }};
    transform: scale(1.05);
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px
      ${({ variant }) => (variant === 'secondary' ? '#fff' : '#282c34')};
  }
`;

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  ...props
}) => {
  return (
    <ButtonWrapper variant={variant} size={size} {...props}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
