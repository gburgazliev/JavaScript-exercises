function invert(array) {
  const arr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      arr.push(Math.abs(array[i]));
    } else if (array[i] > 0) {
      arr.push(-Math.abs(array[i]));
    } else if (array[i] === 0) {
      arr.push(array[i]);
    }
  }
  console.log(arr);
}
invert([1, -2, 3, -4, 5, 0]);
