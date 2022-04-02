import React from 'react'

export default props => {

  const nomes = ['Zetti', 'Cafú', 'Roberto Carlos', 'Ronaldinho']

  const gerarNomes = itens => {
    return itens.map(item => <li>{item}</li>)
  }

  return (
    <ul>
      {gerarNomes(nomes)}
    </ul>
  )
}