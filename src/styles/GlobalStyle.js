// src/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial, sans-serif';
    background-color: #f0f2f5;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  #root {
    width: 100%;
    max-width: 1200px;
    min-width: 800px;
    margin: auto;
  }
`;

export default GlobalStyle;
