let input = ["10",
"7",
'3',
'2',
'3',
'5',
'2',
'2',
'4',
'5',
'6'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let n = +gets();
let temp = 0;
let arr = [];
while (temp < n) {
  arr.push(+gets());
  temp++;
}

let counter = 1;
let resultArr = [];
for (let i = 0; i < arr.length; i++) {
 if (arr[i] < arr[i + 1]) {
    counter++;
 } else  {
    resultArr.push(counter);
    counter = 1;
 }
}
console.log(Math.max(...resultArr))