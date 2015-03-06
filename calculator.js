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

function getValidNumber() {
  var num = sget("Enter number: ");
  if (isValidNumber(num)) {
    return Number(num);
  } else {
    return getValidNumber();
  }
}

function isValidNumber(input) {
  return Number(input) == input;
}

function performAnotherCalc() {
  var userInput = sget("Would you like to perform another calculation? (y/n)");
  userInput = userInput.trim();
  if (userInput === 'y') {
    return true;
  } else {
    return false;
  }
}

var run = true;

while (run) {
  var userSelection = sget("Please select from the list (Enter number):\n1. Add\n2. Subtract\n3. Multiply\n4. Divide\n5. Square root");
  if (Number(userSelection) != userSelection) {
    console.log("Invalid Selection!");
    continue;
  }

  switch (Number(userSelection)) {
    case 1:
      console.log("Add");
      var num1 = getValidNumber();
      var num2 = getValidNumber();
      console.log("%s + %s = %s", num1, num2, add(num1, num2));
      break;

    case 2:
      console.log("Subtract");
      var num1 = getValidNumber();
      var num2 = getValidNumber();
      console.log("%s - %s = %s", num1, num2, subtract(num1, num2));
      break;

    case 3:
      console.log("Multiply");
      var num1 = getValidNumber();
      var num2 = getValidNumber();
      console.log("%s * %s = %s", num1, num2, multiply(num1, num2));
      break;

    case 4:
      console.log("Divide");
      var num1 = getValidNumber();
      var num2 = getValidNumber();
      console.log("%s / %s = %s", num1, num2, divide(num1, num2));
      break;

    case 5:
      console.log("Square Root");
      var num = getValidNumber();
      console.log("Square Root of %s is: %s", num, squareRoot(num1, num2));
      break;
  }
  run = performAnotherCalc();
}