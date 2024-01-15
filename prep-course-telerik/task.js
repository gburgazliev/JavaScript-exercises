const printErrorMessage = function (msg) {
  console.log(msg);
};

function add(num1, num2) {
  if (typeof num1 !== 'number') {
    printErrorMessage(`${num1} is not a number`);
  }
  if (typeof num2 !== 'number') {
    printErrorMessage(`${num2} is not a number`);
  }
  return num1 + num2;
}

// function subtract(num1, num2) {
//   try {
//     checkIfNumber(num1);
//     checkIfNumber(num2);
//     return num1 - num2;
//   } catch (error) {
//     printError();
//   }
// }

// function multiply(num1, num2) {
//   try {
//     checkIfNumber(num1);
//     checkIfNumber(num2);
//     return num1 * num2;
//   } catch (error) {
//     printError();
//   }
// }

// function divide(num1, num2) {
//   try {
//     checkIfNumber(num1);
//     checkIfNumber(num2);
//     return num1 / num2;
//   } catch (error) {
//     printError();
//   }
// }

// function addAll(...numbers) {
//   try {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//       checkIfNumber(numbers[i]);
//       sum += numbers[i];
//     }
//     return sum;
//   } catch (error) {
//     printError();
//   }
// }
// function calculator(num1, num2, func) {
//   return func(num1, num2);
// }

// function updatedCalculator(num1, num2) {
//   const arr = [];
//   for (let i = 2; i < arguments.length; i++) {
//     if (typeof (arguments[i]) === 'function') {
//       arr.push(arguments[i](num1, num2));
//     }
//   }
//   return arr;
// }
try {
  console.log(add('Telerik', 10, 10));
} catch (e) {
  console.log(e.message);
}
 
 
  


// console.log(subtract(10, 5));
// console.log(multiply(10, 5));
// console.log(divide(10, 5));
// console.log(addAll(1, 4, 4, 5));
// console.log(calculator(10, 10, add));
// console.log(updatedCalculator(10, 10, subtract, add, multiply));
