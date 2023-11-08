let str = 'LLRD';
let arr = str.split('');
function militaryTanks2(array) {
  let rightLeft = 0;
  let upDown = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'U') {
      upDown++;
    } else if (array[i] === 'D') {
      upDown--;
    }
    if (array[i] === 'R') {
      rightLeft++;
    } else if (array[i] === 'L') {
      rightLeft--;
    }
  }
  return `(${rightLeft}, ${upDown})`;
}
console.log(militaryTanks2(arr));
