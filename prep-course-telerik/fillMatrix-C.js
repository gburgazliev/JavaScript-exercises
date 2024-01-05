let input = ['3'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let matrix = [];
let n = +gets();
let counter = 1;

for (let i = 0; i < n; i++) {
  matrix[i] = Array.from({ length: n });
}
let startCol = 0;
let startRow = n - 1;
while (counter <= n * n) {
  let row = startRow;
  let col = startCol;
  while (row < n && col < n) {
    matrix[row][col] = counter++;
    row++;
    col++;
  }
  if (startRow > 0) {
    startCol = 0;
    startRow--;
  } else {
    startRow = 0;
    startCol++;
  }
}

matrix.forEach((arr) => {
  console.log(arr.join(' '));
});
