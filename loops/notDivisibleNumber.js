function notDivisible(input) {
  const integer = Number(input[0]);
  let result = '';
  for (let i = 0; i <= integer; i++) {
    if (i % 3 !== 0 && i % 7 !== 0) {
      result += i + ' ';
    }
  }
  console.log(result);
}
notDivisible(['10']);
