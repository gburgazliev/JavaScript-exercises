let input = ['3', '1', '1', '7'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let str = '';
let num = 0;
const n = +gets();
for (let i = 0; i < n; i++) {
  const currElement = gets();
  if (isNaN(currElement)) { str += currElement.concat('-'); } else { num += Number(currElement); }
}
if (str === '') { console.log('no words'); } else { console.log(str.substring(0, str.length - 1)); }
console.log(num);
