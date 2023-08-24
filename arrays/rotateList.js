function rotateList(input) {
  const listOfNumbers = input[0].split(',');
  const n = input[1].split(',').map(Number);
  for (let i = 0; i < n; i++) {
    listOfNumbers.push(listOfNumbers.shift());
  }
  console.log(listOfNumbers.join(','));
}
rotateList(['2,1,3,4', '5']);
