let input = ['He is no spring chicken anymore'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let sentence = gets().split(' ');
let result = '';
let copyArr = [...sentence];

for (let i = 0; i < copyArr.length; i++) {
   
   let firstEl = sentence[i][0].toUpperCase();
   if (firstEl === 'A' || firstEl === 'E' || firstEl === 'I' || firstEl === 'O' || firstEl === 'U') {
      let sliced = copyArr[i].slice(0, 1);
      copyArr[i] = copyArr[i].slice(1);
    copyArr[i] = copyArr[i].concat(sliced).concat('che');
   } else {
      copyArr[i] = copyArr[i].concat('che');
   }
   if (sentence[i].length % 2 === 0) {
      copyArr[i] = copyArr[i].concat('e');
   }
   
}
console.log(copyArr.join(' '));