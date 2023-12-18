let input = ['2,3,1', '5,2,3'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let arr1 = gets().split(',');
let arr2 = gets().split(',');
let resultArr = [];
for (let i = 0; i < arr1.length; i++) {
  resultArr.push(arr1[i]);
  resultArr.push(arr2[i]);
}
console.log(resultArr.join(','));
