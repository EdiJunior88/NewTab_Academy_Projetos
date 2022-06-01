function calc(): number {
  return 0;
}

function calcTowNumbers(x: number, y: number): number {
  return x + y;
}

function numberToString(x: number): string {
  return '${x}';
}

function stringConcat(a: string, b: string): string {
  return '${a} ${b}';
}

function isTrue(value: boolean): boolean {
  return value;
}

let result = calcTowNumbers(5, 4);
console.log(result);

let isTrueResult: boolean = isTrue(true);

if (isTrueResult) {
  console.log('É verdadeiro');
} else {
  console.log('É falso');
}
