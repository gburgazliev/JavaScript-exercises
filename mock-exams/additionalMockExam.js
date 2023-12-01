let input = ['3', '3', '9'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let smallBottles = +gets();
let bigBottles = +gets() * 5;
let capacity = +gets();
let totalCapacity = bigBottles + smallBottles;
if (totalCapacity < capacity || capacity - bigBottles < 0) {
    console.log(-1);
} else {
    console.log(capacity - bigBottles)
}
