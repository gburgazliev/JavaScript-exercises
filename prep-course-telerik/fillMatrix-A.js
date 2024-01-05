let input = ['2'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let n = +gets();
let matrix = [];
let counter = 1;
for (let i = 0; i < n; i++) {
  matrix[i] = Array.from({ length: n });
}

for (let col = 0; col < n; col++) {
  for (let row = 0; row < n; row++) {
    matrix[row][col] = counter++;
  }
}

matrix.forEach((arr) => {
    console.log(arr.join(' '))
})
