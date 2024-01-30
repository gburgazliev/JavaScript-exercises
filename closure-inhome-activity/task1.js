const add = (a, b) => a + b;

const decorateWithLogging = func => {
  let counter = 0;
  const counterFunc = (...args) => {
    return `Times called: ${++counter} Result: ${func(...args)}`;
  };
  return counterFunc;
};

const decoratedAdd = decorateWithLogging(add);
const result = decoratedAdd(1, 2);
console.log(result);
const result2 = decoratedAdd(5, 6);
console.log(result2);


// You have function add, your task is to create the behavior
//  that whenever the function is invoked, to not only execute it,
//   but log the times that function was called,
//  without changing the add function directly.
