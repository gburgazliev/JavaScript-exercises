const numbers = [1, 2, 3, 4, 5];
 
const forEach = (array, fn) => {
  const copy = Array.of(...array);
  for (const el of copy) {
    fn(el);
  }
};
forEach(numbers, console.log);
/*
  EXPECTED BEHAVIOR:
 
  > 1
    2
    3
    4
    5
  */
