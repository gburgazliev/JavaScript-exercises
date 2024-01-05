const arr = [2, 1, 3, 4, 6, 0, 0, 5, 7, 8, 10];

const reversedArr = arr.slice().reverse();
console.log(reversedArr);

console.log('---------------------------------------------------------');

const newArr = arr.slice();
console.log(newArr);

console.log('---------------------------------------------------------');

console.log(arr.includes(10));
console.log('---------------------------------------------------------');

const greaterNumber = arr.find(function (number) {
  return number > 6;
});
console.log(greaterNumber);
console.log('----------------------------------------------------------');

arr.sort();
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === arr[i + 1]) {
    arr.splice(i, 1);
    i--;
  }
}
console.log(arr);
console.log('----------------------------------------------------------');

const arrTwo = [1, 2, [3, 4, [5, 6]]];
const flat = arrTwo.flat(Infinity);
console.log(flat);

console.log('-----------------------------------------------------------');

const arrMostFrequent = [1, 2, 1, 4, 2, 4, 2, 3, 3, 5, 6, 7, 3, 2];
arrMostFrequent.sort();
let counter = 1;
const mostFrequentResult = [];
for (let i = 0; i < arrMostFrequent.length; i++) {
  if (arrMostFrequent[i] === arrMostFrequent[i + 1]) {
    counter++;
  } else {
    mostFrequentResult.push(Array.of(arrMostFrequent[i], counter));
    counter = 1;
  }
}
mostFrequentResult.sort((a, b) => b[1] - a[1]);
console.log(mostFrequentResult[0][0]);

console.log('-----------------------------------------------------------');
const n = 4;
const matrix = [];
let char = 97;
for (let row = 0; row < n; row++) {
  matrix[row] = [];
  for (let col = 0; col < n; col++) {
    matrix[row][col] = String.fromCharCode(char);
    char++;
  }
}
console.log(matrix);

console.log('-----------------------------------------------------------');

const mainDiagonal = [];

for (let row = 0; row < n; row++) {
  for (let col = row; col < n; col++) {
    mainDiagonal.push(matrix[row][col]);
    row++;
  }
}
console.log(mainDiagonal);

console.log('-----------------------------------------------------------');

const secondaryDiagonal = [];

for (let row = 0; row <= n; row++) {
  for (let col = n - 1; col >= 0; col--) {
    secondaryDiagonal.push(matrix[row][col]);
    row++;
  }
}
console.log(secondaryDiagonal);
