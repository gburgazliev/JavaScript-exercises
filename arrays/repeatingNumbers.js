let input = ['6', '6', '1', '3', '3', '5', '5'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let n = +gets();
let index = 0;
if (n === 1) {
  let singleNum = +gets();
  console.log(singleNum);
} else {
  let arrCounter = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  for (let i = 0; i < n; i++) {
    let currNum = +gets();
    arrCounter[currNum - 1]++;
  }
  let biggestIndex = 0;
  for (let j = 0; j < arrCounter.length; j++) {
    if (arrCounter[j] > arrCounter[biggestIndex]) {
      biggestIndex = j;
    }
  }
  console.log(biggestIndex + 1);
}
