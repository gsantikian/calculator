var sget = require('sget');

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function squareRoot(num) {
  return Math.sqrt(num);
}

var userSelection = sget("Please select from the list (Enter number):\n1. Add\n2. Subtract\n3. Multiply\n4. Divide\n5. Square root\n6. Quit");

switch (Number(userSelection)) {
  case 1:
    console.log("Add");
    break;

  case 2:
    console.log("Subtract");
    break;

  case 3:
    console.log("Multiply");
    break;

  case 4:
    console.log("Divide");
    break;

  case 5:
    console.log("Square Root");
    break;

  case 6:
    console.log("Goodbye");
    break;
}