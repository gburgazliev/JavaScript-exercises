function getDivisorsCnt(n) {
  let counter = 0;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      counter += 2;
    }
  }
  if (Math.floor(Math.sqrt(n) * Math.floor(Math.sqrt(n))) === n) {
    counter--;
  }
  return counter;
}
console.log(getDivisorsCnt(25));
