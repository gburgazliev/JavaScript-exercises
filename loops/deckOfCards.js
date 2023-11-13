let input = ['14'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let n = gets();
switch (n) {
  case 'J': n = 11; break;
  case 'Q': n = 12; break;
  case 'K': n = 13; break;
  case 'A': n = 14; break;
}
for (let i = 2; i <= n; i++) {
  let str = i + '';
  switch(str) {
    case '11': str = 'J'; break;
    case '12': str = 'Q'; break;
    case '13': str = 'K'; break;
    case '14': str = 'A'; break;
  }

console.log(`${str} of spades, ${str} of clubs, ${str} of hearts, ${str} of diamonds`);
}
