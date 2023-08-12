function calComplexSum(input) {
  const n = Number(input[0]);
  const x = Number(input[1]);
  let sum = 1;
  let product = 1;
  for (let i = 1; i <= n; i++) {
    product *= i / x;
    sum += product;
  }
  console.log(sum.toFixed(5));
}
calComplexSum(['3', '2']);
