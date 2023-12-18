let input = ['Tempera#### na @#$ata 23 grad#%&.'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let string = gets()
let counter = 0;
let arr = [];
for (let i = 0; i < string.length; i++) {
  if (!string[i].match(/^[A-Za-z0-9]*$/) && string[i] !== '.' && string[i] !== ' ') {
    counter++;
  } else {
    arr.push(counter);
    counter = 0;
  }
}
console.log(arr);
