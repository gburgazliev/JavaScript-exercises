let input = ['4',
  '1 2 3 2 1',
  '2 1',
  '1 2 2 1',
  '4'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let n = +gets();
let isBool;
for (let i = 0; i < n; i++) {
  let currArr = gets().split(',').map(Number);
  for (let j = 0; j < currArr.length; j++) {
    if (currArr[j] > currArr[j + 1]) {
      isBool = false; break;
    }
    if (currArr[j] <= currArr[j + 1]) {
      isBool = true;
    }
  }
  console.log(isBool);
}
