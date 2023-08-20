function sortNumbers(input) {
  const numbers = input[0].split(',').map(Number);
  const arr = [];
  for (let i = 0; i < numbers.length; i++) {
    arr.push(numbers[i]);
  }
  arr.sort((a, b) => (a - b));
  arr.reverse();
  console.log(arr.join(', '));
}
sortNumbers(['8,5,5,5,18,14,1']);
