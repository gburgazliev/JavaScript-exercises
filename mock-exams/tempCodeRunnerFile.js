let input = ['4', '3', '3', '2', '2'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let n = +gets(); 
let arr = [];
let arrZeroes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
for (let i = 0 ; i < n; i++) {
    let currNum = +gets();
  for (let j = 0; j < arrZeroes.length; j++) {
    arrZeroes[currNum - 1]++;
}
}
let mostRepeated = 0;
let result = '';
console.log(arrZeroes)
for (let k = 0; k < arrZeroes.length; k++) {
    if (mostRepeated < arrZeroes[k]) {
        mostRepeated = arrZeroes[k];
        result = k + 1;
    }
}
console.log(result);
