function croockedDigits(n) {
  n = n.toString().split('');
  const newArr = [];
  n.forEach((element) => {
    if (element !== '-' && element !== '.') {
      newArr.push(parseInt(element, 10));
    }
  });
  let sum = 0;
  for (let i = 0; i < newArr.length; i++) {
    sum = newArr[i] + sum;
  }

  return sum;
}
let n = -7231;
let num = croockedDigits(n); while (num > 9) {
  n = n.toString();
  num = croockedDigits(num);
}
console.log(num);
