let input = ['3'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let n=Number(gets());
let str = '';
let temp = 0;
for (let i = 1; i <= n; i++) {
 console.log(i)
 for (let j = i-1; j <= n; j++) {
   console.log(j)
 }
}
 
