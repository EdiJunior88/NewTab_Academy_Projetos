function buscaCep() {
  let inputCep = document.getElementById('cep');
  let cep = inputCep.value.replace('-', '');
  let url = 'https://viacep.com.br/ws' + cep + '/json';
  let xhr = new XMLHttpRequest();
  
  xhr.open('GET', url, true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      alert(xhr.responseText);
    }
  }
  xhr.send();
}