let input = ['3'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let n = +gets();
let matrix = [];
let counter = 1;

for (let row = 0; row < n; row++) {
  matrix[row] = Array.from({ length: n });
}

for (let col = 0; col < n; col++) {
  if (col % 2 === 0) {
    for (let row = 0; row < n; row++) {
      matrix[row][col] = counter++;
    }
  } else {
    for (let reverseRow = n - 1; reverseRow >= 0; reverseRow--) {
      matrix[reverseRow][col] = counter++;
    }
  }
}


matrix.forEach((arr) => {
    console.log(arr.join(' '))
})