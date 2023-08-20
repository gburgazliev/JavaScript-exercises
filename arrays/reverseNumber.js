function reverseNumber(input) {
  const number = input[0].split('');
  number.reverse();
  console.log(number.join(''));
}
reverseNumber(['123.45']);
