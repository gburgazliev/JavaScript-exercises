function printError() {
  throw new Error('not a number');
}
function checkIfNumber(num) {
  if (typeof (num) !== 'number') {
    printError();
  }
}

function add(num1, num2) {
  try {
    checkIfNumber(num1);
    checkIfNumber(num2);
    return num1 + num2;
  } catch (error) {
    printError();
  }
}

function subtract(num1, num2) {
  try {
    checkIfNumber(num1);
    checkIfNumber(num2);
    return num1 - num2;
  } catch (error) {
    printError();
  }
}

function multiply(num1, num2) {
  try {
    checkIfNumber(num1);
    checkIfNumber(num2);
    return num1 * num2;
  } catch (error) {
    printError();
  }
}

function divide(num1, num2) {
  try {
    checkIfNumber(num1);
    checkIfNumber(num2);
    return num1 / num2;
  } catch (error) {
    printError();
  }
}

function addAll(...numbers) {
  try {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      checkIfNumber(numbers[i]);
      sum += numbers[i];
    }
    return sum;
  } catch (error) {
    printError();
  }
}
function calculator(num1, num2, func) {
  return func(num1, num2);
}

function updatedCalculator(num1, num2) {
  const arr = [];
  for (let i = 2; i < arguments.length; i++) {
    if (typeof (arguments[i]) === 'function') {
      arr.push(arguments[i](num1, num2));
    }
  }
  return arr;
}

console.log(add(10, 10));
console.log(subtract(10, 5));
console.log(multiply(10, 5));
console.log(divide(10, 5));
console.log(addAll(1, 3, 4, 5));
console.log(calculator(10, 10, add));
console.log(updatedCalculator(10, 10, subtract, add, multiply));
