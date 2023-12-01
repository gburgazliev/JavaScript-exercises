let input = ['anagram', '6', 'gramana', 'aaagrnm', 'anagra', 'margana', 'abc', 'xy' ];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let word = gets().split('').sort().join('');
let n = +gets();
let arr = [];
for (let i = 0; i < n; i++) {
    let currWord = gets();
    arr.push(currWord);
    
}
arr.forEach((element) => {
    element = element.split('').sort().join('');
  if (word === element) {
    console.log('Yes');
  }  else {
    console.log('No');
  }
})