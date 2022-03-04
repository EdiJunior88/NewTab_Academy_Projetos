import React from "react";

let condicao = false;

export default (props) =>
  <div>
    <h1>{props.valor}</h1>
    <h2>{props.nome}</h2>
    <p>{condicao ? "SIM" : "NÃO"}</p>
  </div>

  // export default () =>
  //   <h1>Olá Primeiro Componente2!!!!</h1>

// function primeiro(){
//   return <h1>Olá Primeiro Componente</h1>
// }

// export default primeiro