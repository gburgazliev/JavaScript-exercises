let input = ['6', '3'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let arr = [];
let spawns = +gets();
let indexA = 0;
let indexB = 0;

let indexOfSafeHouse = gets().split(' ').map(Number);
for (let i = 0; i < spawns; i++) {
  arr.push('X');
}
for (let element of indexOfSafeHouse) {
  arr[element] = 'S';
}
let resultArr = [];
for (let j = 0; j < arr.length; j++) {
  if (arr.every((el) => el === 'S')) {
    resultArr.push(0); break;
  } else {
    if (arr[j] === 'X') {
      indexB = arr.lastIndexOf('S', j);
      indexA = arr.indexOf('S', j);
      if (indexA === -1) {
        resultArr.push(j - indexB);
      }
      if (indexB === -1) {
        resultArr.push(indexA - j);
      }
      if (indexA - j < j - indexB) {
        resultArr.push(indexA - j);
      } else {
        resultArr.push(j - indexB);
      }
    }
  }
}
console.log(Math.max(...resultArr));
