let input = ['7 2 -2 1 -5 4 5 -3 1'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let list = gets().split(' ').map(Number);
let positiveArr = [];
let negativeArr = [];
for (let i = 0; i < list.length; i++) {
  if (list[i] < 0) {
    negativeArr.push(list[i]);
  } else {
    positiveArr.push(list[i]);
  }
}
console.log(negativeArr.concat(positiveArr).join(' '));
