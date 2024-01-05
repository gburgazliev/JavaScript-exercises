let input = ['1,1,1,1,1,1,1,1'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let arr = gets().split(',').map(Number).sort();
let result = '';
for (let i = 0; i < arr.length; i++) { 
    if (!arr.includes(i) && i > 0) {
        result += i +',';
    }
}
console.log(result.slice(0, -1))
