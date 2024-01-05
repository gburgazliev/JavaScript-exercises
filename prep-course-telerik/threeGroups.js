let input = ['3 3 3 3 3 3 3'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let arr = gets().split(' ').map(Number);
let remainderZero = [];
let remainderOne = [];
let remainderTwo = [];
for (let number of arr) {
  if (number % 3 === 0) {
    remainderZero.push(number);
  }
  if (number % 3 === 2) {
    remainderTwo.push(number);
  }
  if (number % 3 === 1) {
    remainderOne.push(number);
  }
}
console.log(remainderZero.join(', '));
console.log(remainderOne.join(', '));
console.log(remainderTwo.join(', '));
