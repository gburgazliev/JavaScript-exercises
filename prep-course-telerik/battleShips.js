let input = ['2 2',
  "0 1",
  "1 1",
  "1 0",
  "1 1",
  'Shoot 1 1',
//   'Shoot 0 1',
//   'Shoot 0 0',
//   'Shoot 0 0',
//   'Shoot 1 1',
//   'Shoot 1 0',
//   "Shoot 1 1",
//   "Shoot 1 1",
  'END'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let R;
let C;
[R, C] = gets().split(' ');
let player1 = [];
let player2 = [];
for (let i = 0; i < R; i++) {
  player1[i] = Array.from({ length: C });
  player2[i] = Array.from({ length: C });
}
for (let j = 0; j < R; j++) {
  player1[j] = gets().split(' ').map(Number);
}

for (let k = 0; k < R; k++) {
  player2[k] = gets().split(' ').map(Number);
}

player2.reverse();
console.log(player2)
player2.forEach((el) => {
  el.reverse();
});
console.log(player2)

// let command;
// let currentBoard = player2;
// let playerOneBoats = 0;
// let playerTwoBoats = 0;
// while ((command = gets()) && command !== 'END') {
//   let x;
//   let y;
//   [command, x, y] = command.split(' ');
//   let row = +x;
//   let col = +y;
//   if (currentBoard[row][col] === 1) {
//     currentBoard[row][col] = 'x';
//     console.log('Booom');
//   } else if (currentBoard[row][col] === 'x') {
//     console.log('You already shot there!');
//   } else if (currentBoard[row][col] === 0) {
//     currentBoard[row][col] = 'x';
//     console.log('Missed');
//   }
//   if (currentBoard === player1) {
//     currentBoard = player2;
//   } else {
//     currentBoard = player1;
//   }
// }
// player1.forEach((el) => {
//   el.forEach((element) => {
//     if (element === 1) {
//       playerOneBoats++;
//     }
//   });
// });
// player2.forEach((el) => {
//   el.forEach((element) => {
//     if (element === 1) {
//       playerTwoBoats++;
//     }
//   });
// });
// console.log(`${playerOneBoats}:${playerTwoBoats}`);
