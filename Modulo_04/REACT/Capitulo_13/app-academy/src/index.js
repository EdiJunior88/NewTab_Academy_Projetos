import React from 'react';
import { createRoot } from 'react-dom/client';
import PrimeiroComponente from './componentes/PrimeiroComponente';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <PrimeiroComponente />
  </React.StrictMode>
);
