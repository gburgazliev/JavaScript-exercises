let input = ['3', '1', '2', '3', '1', '2', '3'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let n = +gets();
let arrOne = [];
let arrTwo = [];
let result = '';

for (let i = 0; i < n; i++) {
  let currEl = +gets();
  arrOne.push(currEl);
}
for (let j = 0; j < arrOne.length; j++) {
  let currEl2 = +gets();
  arrTwo.push(currEl2);
}
for (let c = 0; c < n; c++) {
  if (arrOne[c] === arrTwo[c]) {
    result = 'equal';
  } else {
    result = 'not equal';
  }
}
console.log(result);
