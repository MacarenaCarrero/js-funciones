//las variables fuera de una función son globales y las variables que se declaran dentros de una función, solo se aplica a esa función y no la podrás llamar fuera de ella.
let numberA = 89;

const numberB = 64;

console.log(numberA + numberB);

numberA = 12;
console.log(numberB + numberA);

console.log(1);
console.log(2);
console.log(3);

//funcion
function printOne() {
  console.log(numberA);
  console.log(numberB);
}

// llamar a la función. (Las veces que la necesite)
printOne();

// function printFour() {
//   console.log(4);
// }
// function printFive() {
//   console.log(5);
// }
// function printSix() {
//   console.log(6);
// }

// printFour();
// printFive();
// printSix();

//en vez de hacer lo de arroba podemos hacer la siguiente función

function printNumber(number) {
  console.log(number);
}

printNumber(1);
printNumber(2);
printNumber(3);

//se puede poner separados por comas
function printOperation(numberC, numberD) {
  const result = numberC + numberD;
  console.log(numberC + numberD); //el console log solo sirve para que vea el resultado
}

printOperation(2, 3);
printOperation(5, 1);
