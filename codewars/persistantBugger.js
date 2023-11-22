function persistence(num) {
  let counter = 0;
  while (num >= 10) {
    let digits = num.toString().split('').map(Number);
    console.log(digits)
    num = digits.reduce((acc, curr) => acc * curr, 1);
    counter++;
  }
  return counter;
}
console.log(persistence(999));