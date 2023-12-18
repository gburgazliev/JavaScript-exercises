let input = ['-7231'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let numberArr = gets().split('');
let sum = 0;
numberArr.forEach((element) => {
  if (!isNaN(element)) {
    sum += parseInt(element, 10);
  }
});
while (sum > 9) {
  let temp = 0;
  sum = sum.toString().split('');
  sum.map((el) => {
    temp += parseInt(el, 10);
  });
  sum = temp;
}
console.log(sum);
