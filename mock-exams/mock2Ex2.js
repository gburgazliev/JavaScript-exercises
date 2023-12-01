let input = ['5', '15', '82', '11', '22', '11'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let n = +gets();
let arr = [];
for (let i = 0; i < n; i++) {
  let currNum = gets();
  arr.push(currNum);
}
let merged = '';
let squashed = '';
for (let j = 0; j <= arr.length; j++) {
  if (arr[j + 1] !== undefined) {
    let sum = Number(arr[j][1]) + Number(arr[j + 1][0]);
    if (sum > 9) {
      sum = sum.toString()[1];
    }
    squashed += arr[j][0].concat(sum).concat(arr[j + 1][1]) + ' ';
    merged += arr[j][1].concat(arr[j + 1][0]) + ' ';
  }
}
console.log(merged);
console.log(squashed);
