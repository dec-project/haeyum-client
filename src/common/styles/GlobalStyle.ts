import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Pretendard from '../assets/font/PretendardVariable.woff2';

const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: "Pretendard";
    src: url(${Pretendard}) format('woff2');
    font-weight: 100 900;
    font-style: normal;
  }

  :root {
    --min-width: 320px;
    --max-width: 640px;
  }

  * {
    box-sizing: border-box;
  }

  html {      
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
  }

  body {
    font-family: 'Pretendard', -apple-system, Arial, sans-serif;
    line-height: 1.5;
    background-color: #faf5f0;
    color: #211708;
    vertical-align: baseline;
  }

  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    border: 0;
  }

  button, input, textarea, select {
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    outline: none;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  ol, ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;