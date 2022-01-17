console.log('sasasaa', 2, ['sds']);

function nomeFuncao(param) {
  console.log(param);
}

funcao = (param) => {
   console.log(param);
}

nomeFuncao('teste função');
funcao('teste 2');
array1 = ['teste'];
array2 = [3];

arraycombine = [...array1,array2];
objeto = {
  zeste: 'valor 2',
  teste: 'valor',
}
console.log(typeof arraycombine);
console.log(objeto.teste);
console.log(objeto['teste']);
console.log(arraycombine[0]);
console.log(arraycombine[1]);

arraycombine.sort();

console.log(Object.values(objeto));
console.log(Object.keys(objeto).sort().map((val) => {return objeto[val]; }));