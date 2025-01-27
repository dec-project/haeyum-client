import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import GlobalStyle from './common/styles/GlobalStyle.ts';
import { ThemeProvider } from 'styled-components';
import theme from './common/styles/theme.ts';

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  // </StrictMode>,
);
