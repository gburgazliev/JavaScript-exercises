let input = ['3,-12,0,0,13,5,1,0,-2'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let list = gets().split(',').map(Number);
let positiveArr = [];
let negativeArr = [];
let zeroesArr = [];
for (let i = 0; i < list.length; i++) {
  if (list[i] < 0) {
    negativeArr.push(list[i]);
  }
  if (list[i] > 0) {
    positiveArr.push(list[i]);
  }
  if (list[i] === 0) {
    zeroesArr.push(list[i]);
  }
}
console.log(negativeArr.concat(zeroesArr).concat(positiveArr).join(','));
