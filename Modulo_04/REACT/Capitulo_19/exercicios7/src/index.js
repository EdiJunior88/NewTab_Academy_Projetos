import React from "react"
import ReactDOM from "react-dom"
/* import PrimeiroComponente from "./componentes/PrimeiroComponente"*/
/* import { CompA, CompB } from "./componentes/SegundoComponente" */
/* import Time from "./componentes/TimeComponentes" */
import ComponenteFuncao from "./componentes/ComponenteFuncao"

const elemento = document.getElementById("root")

ReactDOM.render(
  <ComponenteFuncao/>
  // <Time />
  // <div>
  //   <CompA valor = "1" />,
  //   <CompB valor = "3" />
  // </div>

  // <PrimeiroComponente valor = "Olá" nome ={Math.pow(2, 10)}/>
  , elemento)