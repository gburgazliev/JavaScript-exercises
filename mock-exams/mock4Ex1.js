let input = ['LLRD'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let str = gets();
let counterUpDown = 0;
let counterLeftRight = 0;
for (let i = 0; i < str.length; i++) {
    if (str[i] === 'L') {
        counterLeftRight--;
    } else  if (str[i] === 'R') {
        counterLeftRight++;
    }
    if (str[i] === 'U') {
        counterUpDown++;
    } else if (str[i]==='D') {
        counterUpDown--;
    }
}
console.log(`(${counterUpDown},  ${counterLeftRight})`)