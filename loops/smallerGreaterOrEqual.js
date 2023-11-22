let input = ['4', '24', '12', '41', '5'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let n = +gets();
let arr = [];
let output = '';
for (let i = 0; i < n; i++) {
  let currNumber = +gets();
  arr.push(currNumber);
}
for (let j = 0; j < arr.length; j++) {
  if (arr[j] > arr[j + 1]) {
    output += `${arr[j]}>`;
  }
  if (arr[j] < arr[j + 1]) {
    output += `${arr[j]}<`;
  }
  if (arr[j] === arr[j + 1]) {
    output += `${arr[j]}=`;
  }
  if (arr[j + 1] === undefined) {
    output += arr[j];
  }
}
console.log(output);
