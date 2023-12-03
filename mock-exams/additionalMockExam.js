let input = ['2', '3', '8'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let smallBottles = +gets();
let bigBottles = +gets() * 5;
let truckCapacity = +gets();
while (bigBottles > truckCapacity) {
  bigBottles -= 5;
}
let smallBottlesNeeded = truckCapacity - bigBottles;
if (smallBottles < smallBottlesNeeded) {
  console.log(-1);
} else {
  console.log(truckCapacity - bigBottles);
}
