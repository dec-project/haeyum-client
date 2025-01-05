import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Pretendard from '../assets/font/PretendardVariable.woff2';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "pretendard";
    src: "url(${Pretendard}) format('woff2')";
  }
  ${reset}
  :root {
    --min-width: 320px;
    --max-width: 640px;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
  *{
    box-sizing: border-box;
  }
  *, html, body{
    background-color: #faf5f0;
  }
  html, body {
    width: 100%;
    height: 100%;
  }

  html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
  a, dl, dt, dd, ol, ul, li, form, label, table{
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 16px;
    font-family: 'pretendard', sans-serif;
    font-weight: 400;
    vertical-align: baseline;
  }
  ol, ul{
    list-style: none;
  }
`;

export default GlobalStyle;
