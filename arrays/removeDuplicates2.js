let input = ['1,2,2,2,2,18,3,12'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let list = gets().split(',').map(Number);
let newArr = new Set(list);
console.log(Array.from(newArr).join(','));
