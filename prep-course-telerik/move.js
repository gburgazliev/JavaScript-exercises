let input = ['2',
    '7,14,21,28,35',
    '3 forward 1',
    '2 backwards 2',
    '4 forward 1',
    '2 backwards 1',
    'exit'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let currentPosition = +gets();
let arr = gets().split(',').map(Number);
let command = null;
let sumForwards = 0;
let sumBackwards = 0;

while ((command = gets()) && command !== 'exit') {
  let [step, direction, size] = command.split(' ');
  step = parseInt(step, 10);
  size = parseInt(size, 10);

  if (direction === 'forward') {
    for (let i = 0; i < step; i++) {
      currentPosition += size;
      if (currentPosition >= arr.length) {
        currentPosition %= arr.length;
      }
      sumForwards += arr[currentPosition];
    }
  } else if (direction === 'backwards') {
    for (let i = 0; i < step; i++) {
      currentPosition -= size;
      if (currentPosition < 0) {
        while (currentPosition < 0) {
          currentPosition = arr.length + currentPosition;
        }
        
      }
      sumBackwards += arr[currentPosition];
    }
  }
}
console.log(`Forward: ${sumForwards}`);
console.log(`Backwards: ${sumBackwards}`);
