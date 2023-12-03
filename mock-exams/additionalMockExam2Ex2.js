let input = ['111', '222', '333', '444', '555'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let temp = 0;
let multiply = 1;
let result = '';
while (temp < 5) {
  let currNumber = gets().split('').map(Number);
  for (let i = 0; i < currNumber.length; i++) {
    multiply *= currNumber[i];
  }
  result += multiply.toString().slice(-1);
  temp++;
  multiply = 1;
}
console.log(result);
