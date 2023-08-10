function oneToN(input) {
  const number = Number(input[0]);
  let result = '';
  for (let i = 1; i <= number; i++) {
    result += i + ' ';
  }
  console.log(result);
}
oneToN(['10']);
