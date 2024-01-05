let input = ['30'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let n = +gets();
let matrix = [];
let sum = BigInt(0);
for (let i = 0; i < n; i++) {
  matrix[i] = [];
  for (let j = 0; j < n; j++) {
    matrix[i][j] = Math.pow(2, i + j);
  }
}

for (let col = 0; col < n; col++) {
  for (let row = col + 1; row < n; row++) {
    sum += BigInt(matrix[row][col]);
  }
}
console.log(sum);
