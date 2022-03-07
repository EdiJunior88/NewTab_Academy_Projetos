import React from "react"
import ReactDOM from "react-dom"
/* import PrimeiroComponente from "./componentes/PrimeiroComponente"*/

import { CompA, CompB } from "./componentes/SegundoComponente"

const elemento = document.getElementById("root")

ReactDOM.render(
  <div>
    <CompA valor = "1" />,
    <CompB valor = "3" />
  </div>

  // <PrimeiroComponente valor = "Olá" nome ={Math.pow(2, 10)}/>
  , elemento)