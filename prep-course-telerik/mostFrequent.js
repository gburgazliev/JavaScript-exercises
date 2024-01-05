let input = ['13', '4',"1","1","4","2","3","4","4","1","2","4","9","3"];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let n = +gets();
let temp = 0;
let arr = [];
let counter = 1;
while (temp < n) {
  arr.push(+gets());
  temp++;
}
let newArr = [];
arr.sort();

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === arr[i + 1]) {
    counter++;
  } else {
    newArr.push([counter, arr[i]]);
    counter = 1;
  }
}
newArr.sort((a, b) => b[0] - a[0]);
console.log(`${newArr[0][1]} (${newArr[0][0]} times)`);
