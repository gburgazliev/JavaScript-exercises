let input = ['10', '2', '3', '-6', '-1', '2', '-1', '6', '4', '-8', '8'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let n = +gets();
let sum = 0;
let arr = [];
let sumArr = [];
for (let i = 0; i < n; i++) {
     let currNum = Number(gets());
     arr.push(currNum);
    
}
 for (let j = 0; j < arr.length; j++) {
    sum += arr[j];  
      sumArr.push(sum);
    if (sum + arr[j] < 0) {
        sum = 0;
        sumArr.push(sum);
    
      
    }

        
        
     }
console.log(sumArr);
