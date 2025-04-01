import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme.ts';
import ContextProvider from './Context/index.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ContextProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ContextProvider>
  </StrictMode>
);
