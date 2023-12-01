let input = ['132', '123'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let temp = 0;
let arr = [];

while (temp < 1000) {
  const currNum = gets();
  if (!isNaN(currNum)) {
    arr.push(currNum);
  }
  temp++;
}
const resultArr = [];
arr.forEach((element) => {
  element = element.split('').map(Number);
  for (let i = 0; i < element.length; i++) {
    if (element[1] === (element[0] + element[2])) {
      resultArr.push(element.join('')); break;
    }
  }
});
let sum = 0;
for (let j = 0; j < resultArr.length; j++) {
  sum += Number(resultArr[j]);
}
console.log(sum);
