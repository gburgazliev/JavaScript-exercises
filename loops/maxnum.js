let input = ['6', '9', '11', '3', '2', '1', '8'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let n = +gets();
let arr = [];
for (let i = 0; i < n; i++) {
  const currNum = +gets();
  arr.push(currNum);
}
arr = arr.sort((a, b) => (b - a));
console.log(`${arr[0]}, ${arr[1]} and ${arr[2]}`);
