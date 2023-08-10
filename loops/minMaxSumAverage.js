function minMaxSumAverage(input) {
  const counter = Number(input[0]);
  const numbers = (input[1]);
  let min = Number.MAX_SAFE_INTEGER; // 1
  let max = Number.MIN_SAFE_INTEGER; // 1
  let sum = 0;
  for (let i = 0; i < counter; i++) {
    if (numbers[i] <= min) {
      min = numbers[i];
    }
    if (numbers[i] >= max) {
      max = numbers[i];
    }
    sum += numbers[i];
  }
  console.log(`min=${min.toFixed(2)}`);
  console.log(`max=${max.toFixed(2)}`);
  console.log(`sum=${sum.toFixed(2)}`);
  console.log(`avg=${(sum / counter).toFixed(2)}`);
}
minMaxSumAverage(['3', [2, 5, 1]]);
