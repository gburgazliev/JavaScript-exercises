function matrixNumbers(input) {
  const number = Number(input[0]);
  for (let i = 1; i <= number; i++) {
    let result = '';
    for (let j = 1; j <= number; j++) {
      result += i + j + ' ';
    }
    console.log(result);
  }
}
matrixNumbers(['3']);
