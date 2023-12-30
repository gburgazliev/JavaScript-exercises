let input = ['256 768'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let list = gets().split(' ').map(Number);
let start = list[0];
let end = list[1];
let flag = false;
let counter = 0;

for (let i = start; i <= end; i++) {
  let currArr = i.toString().split('');
  for (let j = 0; j < currArr.length; j++) {
    if (currArr[j] === '0') {
      continue;
    }
    if (i % currArr[j] === 0) {
      flag = true;
    } else {
      flag = false; break;
    }
  }
  if (flag === true) {
    counter++;
  }
}
console.log(counter);
