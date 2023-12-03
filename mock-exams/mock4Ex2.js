let input = ['4,1,2', '1,3,4,2'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let subset = gets().split(',').map(Number);
let array = gets().split(',').map(Number);
let result = '';
for (let i = 0; i < subset.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (subset[i] === array[j]) {
      for (let k = j; k < array.length; k++) {
        if (array[k] > array[j]) {
          result += array[k] + ','; break;
        }
        if (array[k + 1] === undefined) {
          result += -1 + ',';
        }
      }
    }
  }
}

console.log(result.slice(0, -1));
