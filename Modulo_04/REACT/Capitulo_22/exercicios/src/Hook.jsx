import React, {useState} from "react";

export default props => {
  const [contador, setContadorAux] = useState(50)

  return (
    <div>
      <h1>{contador}</h1>
      <button
        onClick={() => 
          setContadorAux(contador + 1)
        }>
        Incremento
      </button>
    </div>
  )
}