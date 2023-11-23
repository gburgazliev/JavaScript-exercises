let input = ['0 15 30'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let arr = gets().split(' ').map(Number);
arr.forEach((element) => {
  console.log((9 / 5) * element + 32);
});
