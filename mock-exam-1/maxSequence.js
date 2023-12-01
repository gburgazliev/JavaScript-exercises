let input = ['10', '2', '3', '-6', '-1', '2', '-1', '6', '4', '-8', '8'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let n = +gets();
let sum = 0;
let arr = [];
let sumArr = [];
for (let i = 0; i < n; i++) {
  let currNum = Number(gets());
  if ((sum + currNum) < 0) {
    sum = 0;
    arr.push(sum);
  } else {
      sum += currNum;
  arr.push(sum);
  }

}

console.log(Math.max(...arr));
