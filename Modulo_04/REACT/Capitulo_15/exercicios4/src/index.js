import React from "react"
import ReactDOM from "react-dom"
import PrimeiroComponente from "./componentes/PrimeiroComponente"

const elemento = document.getElementById("root")

ReactDOM.render(
  <PrimeiroComponente valor = "Olá" nome ={Math.pow(2, 10)}/>
  , elemento)