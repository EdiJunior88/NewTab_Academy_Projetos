//Declaração de Arrays
let nomes: string[] = ['João', 'Maria', 'Raquel', 'Felipe'];
let totais: number[] = [10, -10, 20, 0, 50, 8];
let checks: boolean[] = [true, false, true, true, false];

let sobrenome: Array<string> = ['Santos', 'Souza', 'Barata'];
let quantidade: Array<number> = [9, 7, 9, 1, 34];
let isEating: Array<boolean> = [false, true, false, true, true];

console.log(nomes);
console.log(totais);

nomes.push('Lucas');
totais.push(0);

console.log(nomes);
console.log(totais);

nomes.pop();
totais.pop();

console.log(nomes);
console.log(totais);

//Somente Leitura
let NumerosDaMega: Readonly<number[]> = [60, 45, 9, 7, 21, 3];

//Tuplas
let Itens: [string, number] = ['Feijão', 90];
let pessoa: [string, number, number] = ['Pedro', 35, 90];

let pessoa2: [nome: string, idade: number, altura: number] = [
  'Marcos',
  28,
  175,
];
