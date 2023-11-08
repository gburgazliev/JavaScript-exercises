let input = ['real', '-2.5'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let typeOfInput = gets();
let value = gets();
switch (typeOfInput) {
    case 'integer':
       console.log(parseInt(value, 10) + 1); break;
    case 'real':
        console.log((Number((value)) + 1).toFixed(2)); break;
    case 'text':
        console.log(`${value}*`) 
}
console.log(Number((value)))