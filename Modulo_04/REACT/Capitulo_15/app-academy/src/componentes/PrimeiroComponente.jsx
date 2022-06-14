import React from 'react';

let condicao = false;

export default (props) => (
  <div>
    <h1>{props.valor}</h1>
    <h2>{props.nome}</h2>
    <p>{condicao? 'SIM' : 'NÃO'}</p>
  </div>
);

// import React from 'react';

// function primeiro() {
//   return <h1>Olá primeiro componente!!!</h1>;
// }

// export default primeiro;
