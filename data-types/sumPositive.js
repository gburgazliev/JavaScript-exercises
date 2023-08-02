function sumPositive(input) {
  const n = Number(input[0]);
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  console.log(sum);
}
sumPositive([3]);
