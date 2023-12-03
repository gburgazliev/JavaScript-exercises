let input = ['4', '5', '1', '3', '5'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let targets = +gets();
let georgeSpeed = +gets();
let georgeLatency = +gets();
let peterSpeed = +gets();
let peterLatency = +gets();
let georgeTime = (targets * georgeSpeed) + georgeLatency + georgeLatency;
let peterTime = (targets * peterSpeed) + peterLatency + peterLatency;
if (georgeTime < peterTime) {
  console.log('George');
} else if (georgeTime > peterTime) {
  console.log('Peter');
} else if (georgeTime === peterTime) {
  console.log('Draw');
}
