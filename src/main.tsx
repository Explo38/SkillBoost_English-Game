import React from 'react';  // Ajout de l'import React
import ReactDOM from 'react-dom';
import { StrictMode } from 'react';
import App from './App'; // Spécifier l'extension si nécessaire


ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
