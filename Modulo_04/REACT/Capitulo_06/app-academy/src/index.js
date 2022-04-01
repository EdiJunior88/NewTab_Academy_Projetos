import React from "react";
import ReactDOM from "react-dom";

var texto = "Texto exemplo"
const rootComponent = document.getElementById("root")

var conteudo = 
  <div>
    {texto}
    <div style={{backgroundColor: "blue"}}>
      Exemplo 1
    </div>

    <div className="exemplo">
      Exemplo 2
    </div>
  </div>

ReactDOM.render(
  conteudo, 
  rootComponent);