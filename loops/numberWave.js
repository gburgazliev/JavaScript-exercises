let input = ['5'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let n = +gets();
let result = '';
for (let i = 1; i <= n; i++) {
  result += i + ' ';
  if (i === n) {
    for (let j = n - 1; j >= 1; j--) {
      result += j + ' ';
    }
  }
}
console.log(result);
