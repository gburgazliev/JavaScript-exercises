let input = ['10', '2', '1', '1', '2', '3', '3', '2', '2', '2', '1'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let n = +gets();
let arr = [];
let counter = 1;
let counterArr = [];
for (let i = 0; i < n; i++) {
  let currElement = +gets();
  arr.push(currElement);
}
for (let j = 0; j < arr.length; j++) {
  if (arr[j] === arr[j + 1]) {
    counter++;
    counterArr.push(counter);
  } else {
    counter = 1;
  }
}
console.log(Math.max(...counterArr));
