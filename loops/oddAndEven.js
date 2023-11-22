let input = ['5', '4', '3', '2', '5', '2'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let n = +gets();
let productEven = 1;
let productOdd = 1;
for (let i = 1; i <= n; i++) {
  let currNum = +gets();
  if (i % 2 === 0) {
    productEven *= currNum;
  }
  if (i % 2) {
    productOdd *= currNum;
  }
}
if (productEven === productOdd) {
  console.log(`yes ${productEven}`);
} else {
  console.log(`no ${productOdd} ${productEven}`);
}
