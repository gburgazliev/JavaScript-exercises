let input = ['4', '5 2 3 2 5', '2 1', '1 2 2 1', '4'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let n = +gets();
for (let i = 0; i < n; i++) {
  let currArr = gets().split(' ');
  let lastElement = currArr.slice(-1).join('')
  if (currArr[0] === lastElement) {
    console.log('Yes');
  } else {
    console.log('No');
  }
}
