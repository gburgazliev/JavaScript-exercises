let input = ['4'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let n = +gets();
let sum = 0;
let matrix = [];
for (let i = 0; i < n; i++) {
  matrix[i] = [];
  for (let j = 0; j < n; j++) {
    matrix[i][j] = Math.pow(2, i + j);
  }
}
for (let row = 0; row < n; row++) {
  for (let col = row + 1; col < n; col++) {
    sum += matrix[row][col];
  }
}
console.log(sum);
