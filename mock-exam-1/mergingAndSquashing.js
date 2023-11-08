<<<<<<< HEAD
let input = ['-2', '-10', '0', '-1', '-3'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const n = +gets();
const arr = [];
const resultA = [];
const resultB = [];
for (let i = 0; i < n; i++) {
  arr.push(gets());
}
for (let j = 0; j < arr.length; j++) {
  if (arr[j + 1] !== undefined) {
    let a = arr[j][1];
    let b = arr[j + 1];
    b = b[0];
    resultA.push(a.concat(b));
  }
}
console.log(resultA.join(' '));
for (let k = 0; k < arr.length; k++) {
  if (arr[k + 1] !== undefined) {
    const c = arr[k][1];
    let d = arr[k + 1];
    d = d[0];
    let sum = parseInt(c) + parseInt(d);
    if (sum >= 10) {
      sum = sum.toString().split('')[1];
    }
    d = arr[k + 1];
    const temp = arr[k][0].concat(sum).concat(d[1]);
    resultB.push(temp);
  }
}
console.log(resultB.join(' '));
=======
function mergingAndSquashing(number) {
  const n = 4;
  for (let i = 0; i < n; i++) {
    let strEven = String;
    let strOdd = String;
    if (number[i] % 2 === 0) {
      strEven = number[i].toString();
      console.log(strEven[1]);
    }
    if (number[i] % 2 !== 0) {
      strOdd = number[i].toString();
      console.log(strOdd[0]);
    }
  }
}
mergingAndSquashing([12,
  23,
  34,
  45]);
>>>>>>> 197aebff9026ac41d37003f2fff309be9b68324a
