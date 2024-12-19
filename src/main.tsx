import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import GlobalStyle from './styles/GlobalStyle.ts';
import { ThemeProvider } from 'styled-components';

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <ThemeProvider theme={{}}>
    <GlobalStyle />
    <App />
  </ThemeProvider>
  // </StrictMode>,
);
