let input = ['28,1,45,255'];
let input2 = ['2,1,0,2'];
let print = console.log;
let gets = ((arr, index) => () => arr[index++])(input, 0);
let gets2 = ((arr, index) => () => arr[index++])(input2, 0);
const numArr2 = gets2().split(',').map(Number);
const numArr = gets().split(',').map(Number);
const modifiedArr = (arr) => {
  return arr.map((number, numIndex) => {
    let binary = number.toString(2);

    while (binary.length < 8) {
      binary = '0' + binary;
    }

    binary = Array.from(binary);
    if (numIndex % 2) {
      binary = binary.map((el, index) => {
        if (index % 2 === 0) {
          return el;
        }
      });
    } else {
      binary = binary.map((el, index) => {
        if (index % 2 !== 0) {
          return el;
        }
      });
    }
    return binary.join('');
  });
};

let result = modifiedArr(numArr).join('');
console.log(result);
result = modifiedArr(numArr2).join('');
console.log(result);
