let input = ['abbCCCcddBBBxx'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let string = gets()
let newArr = [];
let counter = 1;
let str = '';


for (let i = 0; i < string.length - 1; i++) {
  if (string[i] === string[i + 1]) {
    counter++;
    newArr.push(Array.of(counter, string[i]))
  } else {
    counter = 1;
    newArr.push(Array.of(counter, string[i]));
  }
}
let resultStr = '';

newArr.sort((a, b) => b[0] - a[0]);
let mostRepeating = newArr[0];
for (let k = 0; k < mostRepeating[0]; k++) {
  resultStr += mostRepeating[1];
}
console.log(resultStr);