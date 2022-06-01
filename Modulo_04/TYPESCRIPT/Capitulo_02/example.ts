const a = 'Hello World';

console.log(a);

var nomeForaDoIf: string = 'Henrique Sousa';
let nomeDentroDoEscopo: string = 'Pedro Lucas';
let check: boolean = false;

var numberOfCheckins: number = 100;

if (check) {
  var nomeDentroDoIf = 'Mariana Albuquerque';
} else {
  nomeDentroDoIf = 'Maria Augusta';
}

//Declaração de Arrays
let nomes: string[] = ['João', 'Maria', 'Raquel', 'Felipe'];
let totais: number[] = [10, -10, 20, 0, 50, 8];
let checks: boolean[] = [true, false, true, true, false];

let sobrenome: Array<string> = ['Santos', 'Souza', 'Barata'];
let quantidade: Array<number> = [9, 7, 9, 1, 34];
let isEating: Array<boolean> = [false, true, false, true, true];

console.log(nomeForaDoIf.length);
console.log(nomeDentroDoIf.indexOf('Mariana'));
console.log(nomeForaDoIf);
console.log(nomeDentroDoIf);
console.log(nomeDentroDoEscopo);
