let input = ['hoboobbo422222Aaao'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let signal = gets().split('');
let index = 0;
for (let i = 0; i < signal.length; i++) {
  if (signal[i] === signal[i + 1]) {
    index = i + 1;
    i--;
    signal.splice(index, 1);
  }
}
console.log(signal.join(''));
