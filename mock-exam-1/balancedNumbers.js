function balancedNumbers(number) {
  let sum = 0;
  const isTrue = true;
  do {
    if (number.length != 3) { break; }
    const n1 = parseInt(number[0]);
    const n2 = parseInt(number[1]);
    const n3 = parseInt(number[2]);
    if (n1 + n3 != n2) { break; }
    sum += parseInt(number);
  } while (isTrue);
  console.log(sum);
}
balancedNumbers('132');
