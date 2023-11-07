function repeatingNumber(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    const numbers = [1, 2, 3, 1, 2, 2, 1];
    arr.push(numbers[i]);
  }
  const obj = {};
  arr.forEach((element) => {
    obj[element] = (obj[element] || 0) + 1;
  });
  let biggest = 0;
  let mostRepeated;
  for (const counter in obj) {
    if (obj[counter] > biggest) {
      biggest = obj[counter];
      mostRepeated = counter;
    }
  }
  console.log(mostRepeated);
  console.log(obj);
}

repeatingNumber(2);
