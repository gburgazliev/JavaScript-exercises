let input = ['omg', 'omg'];
let print = console.log;
let gets = ((arr, index) => () => arr[index++])(input, 0);
let strOne = gets().split('');
let strTwo = gets().split('');

if (strOne < strTwo) {
  console.log('first');
} else if (strOne > strTwo) {
  console.log('second');
} else if (strOne = strTwo) {
  console.log('equal');
}
