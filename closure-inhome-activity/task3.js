const add = (a, b) => a + b; 
// TODO: Use "memoization"
const decorateWithCache = func => {
  const cache = {};
  const cacheFunction = (...args) => {
    let key = args.join('');
    if (!cache.hasOwnProperty(key)) {
      key = args.join('');
      cache[key] = func(...args);
    }
    if (cache.hasOwnProperty(key)) {
      return cache[key];
    }
  };
  return cacheFunction;
};
 
const addWithCache = decorateWithCache(add);
console.log(addWithCache(1, 2));
console.log(addWithCache(1, 2));
 
// Test: In a loop from 0 to 1000, print the sum of two randomly generated numbers
for (let i = 0; i < 1000; i++) {
  const number1 = Math.floor(Math.random() * 10);
  const number2 = Math.floor(Math.random() * 10);
  console.log(addWithCache(number1, number2));
}