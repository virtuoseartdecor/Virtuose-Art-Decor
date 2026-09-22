import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { initGoogleAnalytics } from './lib/analytics';

// Inicialização segura do Google Analytics (LGPD / Cookies Seguros)
initGoogleAnalytics();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
