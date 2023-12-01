let input = ['185'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let n = gets().split('');
let arr = [];
arr.push(Number(n[0] * Number(n[1]) * Number(n[2])));
arr.push(Number(n[0]) * Number(n[1]) + Number(n[2]));
arr.push(Number(n[0]) + Number(n[1]) * Number(n[2]));
arr.push(Number(n[0]) + Number(n[1]) + Number(n[2]));

console.log(Math.max(...arr));