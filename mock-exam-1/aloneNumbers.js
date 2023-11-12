const arr = '1,2,3,2,5,2';
const n = 2;
let newArr = [];

function aloneNumbers(arr, n) {
  arr = arr.split(',').map(Number);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      if (arr[i - 1] !== undefined && arr[i + 1] !== undefined) {
        if (arr[i - 1] !== arr[i] && arr[i + 1] !== arr[i]) {
          if (arr[i - 1] > arr[i + 1]) {
            arr[i] = arr[i - 1];
          } else if (arr[i + 1] > arr[i - 1]) {
            arr[i] = arr[i + 1];
          }
        }
      }
    }
    newArr.push(arr[i]);
  }
  return newArr;
}
let result = aloneNumbers(arr, n);
console.log([result]);
