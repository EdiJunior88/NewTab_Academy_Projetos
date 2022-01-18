function validarForm() {
  if (
    document.getElementById('nome').value == '' ||
    document.getElementById('senha').value == '' ||
    document.getElementById('senha2').value == '' ||
    document.getElementById('senha2').value != document.getElementById('senha').value
  ) {
    console.log('Form inválido')
    document.querySelector('.mensagem').innerHTML = 'Seu formulário está errado por favor confira'
    document.querySelector('.mensagem').style.color = 'red';

    document.createElement(div)
    return false;
  }
  console.log('Form válido')

  return false;
}