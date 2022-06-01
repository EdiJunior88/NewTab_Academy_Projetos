//Decisão
//IF ou ELSE
function verifyLegalAge(age) {
    if (age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
/* let isLegalAge: boolean = verifyLegalAge(18);
console.log(isLegalAge); */
function candidates(candidate) {
    switch (candidate) {
        case 10:
            return 'Pedrinho';
            break;
        case 22:
            return 'Luluzinho';
            break;
        case 40:
            return 'Pistoleiro';
            break;
        case 51:
            return 'Cana Brava';
            break;
        default:
            return 'Voto Nulo';
            break;
    }
}
console.log(candidates(10));
console.log(candidates(40));
console.log(candidates(22));
console.log(candidates(51));
console.log(candidates(0));
console.log(candidates(15));
console.log(candidates(99));
