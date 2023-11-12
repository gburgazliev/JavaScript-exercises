let input = ['2', '50', '40'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let n = +gets();
let result = [];
for (let i = 0; i < n; i++) {
  let currNum = +gets();
  let discount = currNum * 0.65;
  console.log((currNum - discount).toFixed(2));
}
