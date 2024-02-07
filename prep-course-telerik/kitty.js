let input = ['@@@xx@*', '1 -1 -1 4'];
let print = console.log;
let gets = ((arr, index) => () => arr[index++])(input, 0);
const list = gets().split('');
let currPosition = 0;
const counterArr = gets().split(' ').map(Number);
let coderSouls = 0;
let food = 0;
let deadlocks = 0;
let jumps = 0;
let result = '';
const firstEl = list[0];

if (firstEl === 'x') {
  result = `You are deadlocked, you greedy kitty!
Jumps before deadlock: ${jumps}`;
} else {
  if (firstEl === '*') {
    food++;
    list[0] = '';
  } else if (firstEl === '@') {
    coderSouls++;
    list[0] = '';
  }

  for (const el of counterArr) {
    jumps++;
    currPosition += el;
    if (currPosition < 0) {
      while (currPosition < 0) {
        currPosition = list.length + currPosition;
      }
    } else if (currPosition >= list.length) {
      currPosition %= list.length;
    }
    switch (list[currPosition]) {
      case '@':
        coderSouls++;
        list[currPosition] = ''; break;
      case '*':
        food++;
        list[currPosition] = ''; break;
      case 'x':
        deadlocks++; break;
    }

    if (list[currPosition] === 'x' && (currPosition % 2 === 0)) {
      if (coderSouls > 0) {
        coderSouls--;
        list[currPosition] = '@';
      } else {
        result = ` 
You are deadlocked, you greedy kitty!
Jumps before deadlock: ${jumps}`; break;
      }
    } else if (list[currPosition] === 'x' && (currPosition % 2 !== 0)) {
      if (food > 0) {
        food--;
        list[currPosition] = '*';
      } else {
        result = ` 
You are deadlocked, you greedy kitty!
Jumps before deadlock: ${jumps}`; break;
      }
    }
    result = `Coder souls collected: ${coderSouls}
    Food collected: ${food}
    Deadlocks: ${deadlocks}`;
  }
}
console.log(result);