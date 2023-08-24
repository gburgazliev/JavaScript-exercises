function isAListSorted(input) {
  const n = input[0].split(',').map(Number);
  let status = Boolean;
  const listOfNumbers = input[1];
  for (let i = 0; i < n; i++) {
    for (let k = 0; k < listOfNumbers[i].length; k++) {
      if (listOfNumbers[i][k] <= listOfNumbers[i][k + 1]) {
        status = true;
      } else if (listOfNumbers[i][k] > listOfNumbers[i][k + 1]) {
        status = false;
      }
    }
    console.log(status);
  }
}
isAListSorted(['3', [[1, 2, 3, 4, 5], [1, 2, 8, 9, 9], [1, 2, 2, 3, 2]]]);
