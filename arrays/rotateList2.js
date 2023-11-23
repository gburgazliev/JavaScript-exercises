let input = ['1,2,3,4,5', '2'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let list = gets().split(',').map(Number);
let n = +gets();
let temp = 0;
for (let i = 0; i < n; i++) {
  let firstEl = list.shift();
  list.push(firstEl);
}
console.log(list.join(','));
