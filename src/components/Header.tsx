import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: #282c34;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 2rem;
  font-weight: bold;
`;

const Header: React.FC = () => {
  return <HeaderWrapper>Sequencer App</HeaderWrapper>;
};

export default Header;
