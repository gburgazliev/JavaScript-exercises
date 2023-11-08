function game(number) {
  const sum1 = Number(number[0]) + Number(number[1]) * Number(number[2]);
  const sum2 = Number(number[0]) * Number(number[1]) + Number(number[2]);
  const sum3 = Number(number[0]) * Number(number[1]) * Number(number[2]);
  const sum4 = Number(number[0]) + Number(number[1]) + Number(number[2]);
  console.log(Math.max(sum1, sum2, sum3, sum4));
}
game('185');
