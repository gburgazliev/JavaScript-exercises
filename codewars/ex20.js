function findMissingNumber(sequence) {
  const arr = sequence.split(' ').map(Number);
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const list = [];
  for (let i = 1; i <= max; i++) {
    if (!arr.includes(i)) {
      list.push(i);
    }
  }
  if (arr.includes(NaN)) {
    list.push(1);
  }
  if (list.length === 0) {
    console.log(list.length);
  } else {
    console.log(Math.min(...list));
  }
}
findMissingNumber('2 3 4 5');
