function tips(input) {
  const priceOfOrder = Number(input[0]);
  const sum = (priceOfOrder * 0.1) + priceOfOrder;
  console.log(sum);
}
tips(['20']);
