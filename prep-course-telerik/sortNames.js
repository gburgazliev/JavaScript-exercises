let input = ['Ivan Maria Stoyan Petar Iva'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const list = gets().split(' ');
const copyArr = list.slice();
const resultArr = [];
for (const element of copyArr) {
  resultArr.push(Array.from(element).sort().join(''));
}
console.log(resultArr.sort().join(', '));
