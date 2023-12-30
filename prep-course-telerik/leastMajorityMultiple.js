let input = ['0', '0', '0', '0', '0'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let counter = 0;
let temp = 0;
let arr = [];
while (temp < 5) {
  arr.push(+gets());
  temp++;
}
let result = 0;

outerLoop: for (let i = 1; i < 10000; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (i % arr[j] === 0) {
      counter++;
    }
   if (counter === 3) {
    result = i;
    break outerLoop;
   }  
  }
  
  counter = 0;
}
console.log(result);