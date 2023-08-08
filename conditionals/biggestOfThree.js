function biggest(input) {
  const numberOne = Number(input[0]);
  const numberTwo = Number(input[1]);
  const numberThree = Number(input[2]);
  console.log(Math.max(numberOne, numberTwo, numberThree));
}
biggest(['-10', '-1', '0']);
