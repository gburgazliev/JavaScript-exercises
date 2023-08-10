function findAverage(input) {
  const numberOfValues = Number(input[0]);
  const integers = input[1];
  let sum = 0;
  for (let i = 0; i < numberOfValues; i++) {
    sum += integers[i];
  }
  console.log((sum / numberOfValues).toFixed(2));
}
findAverage(['3', [2.5, 1.25, 3, 1]]);
