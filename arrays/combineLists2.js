let input = ['5,3,2,1', '2'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let listOne = gets().split(',');
let listTwo = gets().split(',');
let result = [];
for (let i = 0; i < listOne.length; i++) {
  result.push(listOne[i]);
  result.push(listTwo[i]);
}
console.log(result.join(','));
