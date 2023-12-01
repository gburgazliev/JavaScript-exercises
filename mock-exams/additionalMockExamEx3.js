let input = ['5', 'telerik', 'alpha', 'java', 'Spring', 'nodeJS'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let n = +gets();
let letter = '';
let word = '';
let wordsArr = []; let currSum = 0;
let sum = 0;
let result = 0;
for (let i = 0; i < n; i++) {
    let currWord = gets();
    let tempWord = currWord.toLowerCase();
    for (let j = 0; j < tempWord.length; j++) {
     sum += tempWord.charCodeAt(j) - 96;
        
    }
    if (result < sum) {
        result = sum;
         word = currWord;
    }    
    sum = 0;
}

console.log(result, word)