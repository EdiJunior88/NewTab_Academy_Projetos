import React from 'react';
import ReactDOM from 'react-dom/client';

var texto = 'Texto exemplo';
var conteudo = (
  <div>
    {texto}
    <div style={{ backgroundColor: 'blue' }}>Exemplo 1</div>
    <div>Exemplo 2</div>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(conteudo);
