let input = ['27'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const n = +gets();
function isPrime(number) {
  if (number <= 3) {
    return true;
  }
  if (number % 2 === 0 || number % 3 === 0) {
    return false;
  }
  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}
let result = '';

for (let i = 1; i <= n; i++) {
  if (isPrime(i)) {
    for (let j = 1; j <= i; j++) {
      if (isPrime(j)) {
        result += '1';
      } else {
        result += '0';
      }
    }
    console.log(result);
  }
  result = '';
}
