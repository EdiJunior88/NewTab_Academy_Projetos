var a = 'Hello World';
console.log(a);
var nomeForaDoIf = 'Henrique Sousa';
var nomeDentroDoEscopo = 'Pedro Lucas';
var check = false;
var numberOfCheckins = 100;
if (check) {
    var nomeDentroDoIf = 'Mariana Albuquerque';
}
else {
    nomeDentroDoIf = 'Maria Augusta';
}
console.log(nomeForaDoIf.length);
console.log(nomeDentroDoIf.indexOf('Mariana'));
console.log(nomeForaDoIf);
console.log(nomeDentroDoIf);
console.log(nomeDentroDoEscopo);
