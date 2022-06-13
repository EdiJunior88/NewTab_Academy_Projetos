import React from 'react';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <span>Olá Mundo!</span>
  </React.StrictMode>
);