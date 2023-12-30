let input = ['5'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const width = +gets();
const height = 2 * width - 1;

let dots = '';
for (let i = 0; i < width; i++) {
  dots += '.';
}
dots = dots.split('');
outerLoop : for (let j = 0; j < height; j++) {
  for (let c = 0; c <= dots.length; c++) {
    if (c === dots.length) {
      for (let k = dots.length - 1; k >= 0; k--) {
        if (dots[k - 1] === undefined) {
          break outerLoop;
        }
        dots[k] = '.';
        dots[k - 1] = '*';
        console.log(dots.join(''));
      }
    }
    dots[c] = '*';
    if (dots[c - 1] !== undefined && dots[c] !== undefined) {
      dots[c - 1] = '.';
    }
    console.log(dots.join(''));
  }
}
