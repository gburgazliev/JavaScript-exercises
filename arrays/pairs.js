let input = ['40', '1 2 3 4 3 6 5 8 3 9'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let n = +gets();
let counter = 0;
let list = gets().split(' ').map(Number);
for (let i = 0; i < list.length; i++) {
  for (let j = i + 1; j < list.length; j++) {
    if (list[i] + list[j] === n) {
      console.log(`${list[i]},${list[j]}`);
      counter++;
    }
  }
}
if (counter === 0) {
  console.log('no pairs');
}
