import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router';
import { Provider } from 'react-redux';
import { App } from '@/app/init';
import { ErrorBoundary, ErrorFallback } from '@/app/error-boundary';
import { store } from '@/app/store';
import './index.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <ErrorBoundary fallback={<ErrorFallback />}>
            <App />
          </ErrorBoundary>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
