function arraySort(input) {
  const list = input[0].split(',').map(Number);
  let zeroes = '';
  let numbers = '';
  for (let i = 0; i < list.length; i++) {
    if (list[i] === 0) {
      zeroes += list[i] + ',';
    }
    if (list[i] !== 0) {
      numbers += list[i] + ',';
    }
  }
  zeroes = zeroes.substring(0, zeroes.length - 1);
  const finalList = numbers.concat(zeroes);
  console.log(finalList);
}
arraySort(['0,0,0,5,0,3,2,3']);
