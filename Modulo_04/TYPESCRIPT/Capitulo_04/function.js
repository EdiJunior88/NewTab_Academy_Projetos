function calc() {
    return 0;
}
function calcTowNumbers(x, y) {
    return x + y;
}
function numberToString(x) {
    return '${x}';
}
function stringConcat(a, b) {
    return '${a} ${b}';
}
function isTrue(value) {
    return value;
}
var result = calcTowNumbers(5, 4);
console.log(result);
var isTrueResult = isTrue(true);
if (isTrueResult) {
    console.log('É verdadeiro');
}
else {
    console.log('É falso');
}
