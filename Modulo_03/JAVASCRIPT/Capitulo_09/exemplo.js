// console.log('sasasaa', 2, ['sds']);

// function nomeFuncao(param) {
//   console.log(param);
// }

// funcao = (param) => {
//   console.log(param);
// }

// nomeFuncao('teste função');
// funcao('teste 2');
// array1 = ['teste'];
// array2 = [3];

// arraycombine = [...array1,array2];
// console.log(arraycombine);

tiposdevar = {
  integer: 45/0,
  float: 65.12,
  string: 'Texto',
  boolean: true,
}

let variav, teste, teste2 = '';

Object.values(tiposdevar).map((val) => {
  val = val 
  console.log(typeof val);
  console.log(val);
})