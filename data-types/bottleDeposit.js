function bottleDeposit(input) {
  const halfLBottles = Number(input[0]) * 0.1;
  const oneLBottles = Number(input[1]) * 0.25;
  const sum = halfLBottles + oneLBottles;
  console.log(sum.toFixed(2));
}
bottleDeposit(['3', '2']);
