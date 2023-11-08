function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
function arrayFromRandomNumbers(n) {
  const arr = [];
  for (let i = 0; i <= n; i++) {
    const number = randomNumber(10, 99);
    arr.push(Math.floor(number));
  }
  return arr;
}
function printer(numberscount, countPerRow) {
  const arr = arrayFromRandomNumbers(numberscount, 8).sort();
  let string = '';
  let currentCount = 1;
  for (let i = 0; i < arr.length; i++) {
    string += arr[i] + ' ';
    if (currentCount === countPerRow) {
      console.log(string);
      string = '';
      currentCount = 0;
    }
    currentCount++;
  }
  console.log(string);
}
randomNumber();
printer(14, 3);
