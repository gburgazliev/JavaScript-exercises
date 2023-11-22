let input = ['12'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let element = gets();
if (isNaN(element)) {
  console.log(element.split('').reverse().join(''));
} else {
  console.log(Number(element) + 1);
}
