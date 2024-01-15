let input = ['1,1,1,1,1,1,1,1'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const list = gets().split(',').map(Number).sort();
let newArr = [];
for (let i = 0; i <= list.length; i++) {
  if (!list.includes(i)) {
    newArr.push(i);
  }
}
console.log(newArr.slice(1).join(','));
