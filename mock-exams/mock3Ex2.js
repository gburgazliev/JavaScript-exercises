let input = ['363'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let n = gets().split('').map(Number);
let sumEven = 0;
let sumOdd = 0;
for (let i = 0; i < n.length; i++) {
    if (n[i] % 2) {
        sumOdd += n[i];
    } else {
        sumEven += n[i];
    }
}
if (sumEven > sumOdd) {
    console.log(`${sumEven} energy drinks`);
} else if (sumEven < sumOdd) {
    console.log(`${sumOdd} cups of coffee`);
} else if (sumEven === sumOdd) {
    console.log(`${sumEven} of both`);
}
