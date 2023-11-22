let input = [];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let currFood = '';
let arr = [];
let longestStr = '';
let biggestLength = 0;
while (currFood !== 'END') {
  currFood = gets();
  if (currFood == 'END') {
    break;
  }
  arr.push(currFood);
  for (let i = 0; i < arr.length; i++) {
    if (biggestLength <= arr[i].length) {
      biggestLength = arr[i].length;
      longestStr = arr[i];
    }
  }
}
console.log(longestStr);