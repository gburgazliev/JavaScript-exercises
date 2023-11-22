let input = ['300', '400', '4'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const start = +gets();
const end = +gets();
const target = +gets();
for (let i = start; i <= end; i++) {
  const str = i.toString();
  const firstChar = Number(str.charAt(0));
  const secondChar = Number(str.charAt(1));
  const thirdChar = Number(str.charAt(2));
  if (firstChar + secondChar + thirdChar === target) {
    console.log(i);
  }
}
