import React from 'react';
import { createRoot } from 'react-dom/client';
import TimeComponentes from './componentes/TimeComponentes';
// import { CompA, CompB } from './componentes/SegundoComponente';
// import PrimeiroComponente from './componentes/PrimeiroComponente';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <TimeComponentes />
    {/* <CompA valor='1' />
    <CompB valor='1' /> */}
    {/* <PrimeiroComponente valor='Olá' nome={Math.pow(2,10)} /> */}
  </React.StrictMode>
);
