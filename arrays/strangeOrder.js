function strangeOrder(input) {
  const list = input[0].split(',').map(Number);
  let positive = '';
  let zero = '';
  let negative = '';
  let str = '';
  for (let i = 0; i < list.length; i++) {
    if (list[i] < 0) {
      negative += list[i] + ',';
    }
    if (list[i] === 0) {
      zero += list[i] + ',';
    }
    if (list[i] > 0) {
      positive += list[i] + ',';
    }
  }
  str = negative.concat(zero, positive);
  str = str.substring(0, str.length - 1);
  console.log(str);
}
strangeOrder(['-12,-13,-5,-1,-2']);
