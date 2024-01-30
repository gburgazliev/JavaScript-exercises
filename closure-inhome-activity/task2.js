const createPerson = (name, age, gender) => {
  return {
    name,
    age,
    gender
  };
};
const add = (a, b) => a + b;
const decorateWithLogging = func => {
  let counter = 0;
  const counterFunction = (...args) => {
    console.log(`Times called: ${++counter}`);
    return func(...args);
  };
  return counterFunction;
};
const decoratedAdd = decorateWithLogging(add);
let result = decoratedAdd(1, 2);
console.log(result);
decoratedAdd(10, 20);

const decoratedCreate = decorateWithLogging(createPerson);
result = decoratedCreate(`John`, 30, `Male`);
console.log(result);
