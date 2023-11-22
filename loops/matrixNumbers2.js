let input = ['3'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let n = +gets();
let str = '';
let temp = 0;
for (let i = 1; i <= n; i++) {
  for (let j = i; j < n+i; j++) {
    str += j + ' ';
  }
  console.log(str);
  str = '';
}
