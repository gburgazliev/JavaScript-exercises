function calculateDiscount(input) {
  const itemsNumber = Number(input[0]);
  const eachItemPrice = (input[1]);
  for (let i = 0; i < itemsNumber; i++) {
    console.log((eachItemPrice[i] * 0.35).toFixed(2)); // 65% discount
  }
}
calculateDiscount(['4', [9.99, 19.99, 29.99, 39.99]]);
