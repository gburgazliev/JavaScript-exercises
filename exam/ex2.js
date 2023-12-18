let input = ['1 2 3 4 5 7', '1 2 4 4 5 6'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let arr1 = gets().split(' ').map(Number);
let arr2 = gets().split(' ').map(Number);

let maxLength = Math.max(arr1.length, arr2.length);
for (let i = 0; i < maxLength; i++) {
  if (arr1[i] === arr2[i]) {
    console.log(`+ ${arr1[i]} ${arr2[i]} `);
  } else if (arr1[i] !== arr2[i] && arr2[i] !== undefined && arr1[i] !== undefined) {
    console.log(`- ${arr1[i]} ${arr2[i]}`);
  } else if (arr1[i] === undefined) {
    console.log(`- x ${arr2[i]}`);
  } else if (arr2[i] === undefined) {
    console.log(`- ${arr1[i]} x`);
  }
}