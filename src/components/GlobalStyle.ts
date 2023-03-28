import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    background-color: #282c34;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;