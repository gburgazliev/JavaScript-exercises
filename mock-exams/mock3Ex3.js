let input = ['1, 1, 1, 2', '1'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let list = gets().split(', ').map(Number);
let target = +gets();
let copyArr = [];
for (let i = 0; i < list.length; i++) {
    if (list[i] === target) {
        if (!isNaN(list[i-1]) && !isNaN(list[i + 1])){
            if (list [i - 1] > list[i + 1] && list[i - 1] !== list[i]) {
                list[i] = list[i - 1];
            } else if (list[i - 1] < list[i + 1] && list[i+1] !== list[i]) {
                list[i] = list[i + 1];
            }
        }
}
copyArr.push(list[i]);
}
console.log((`[${copyArr.join(', ')}]`))