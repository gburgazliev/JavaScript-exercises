let input = ['100', '200', '12'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let start = +gets();
let end = +gets();
let target = +gets();

let arrElemenets = [];
let sum = 0;

for (let i = start; i <= end; i++) {
  arrElemenets.push(i);
}
for (let j = 0; j < arrElemenets.length; j++) {
  arrElemenets[j] = arrElemenets[j].toString().split('').map(Number);
  for (let k = 0; k < arrElemenets[j].length; k++) {
    if (arrElemenets[j][k] !== 0) {
      sum += arrElemenets[j][k];
    }
  }
  if (sum === target) {
    console.log(arrElemenets[j].join(''));
  }
  sum = 0;
}
