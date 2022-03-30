import React, {useState} from "react";


export default props => {

  const [contador, setContador] = useState(50);

  return (
    <div>
      <h1>{contador}</h1>
      <button onClick={() => setContador(contador + 1)}>INC</button>
    </div>
  )
}