function findDifference(a, b) {
  let sumOne = 1;
  let sumTwo = 1;
  for (let i = 0; i < a.length; i++) {
    sumOne *= a[i];
    sumTwo *= b[i];
  }
  if (sumOne > sumTwo) {
    return sumOne - sumTwo;
  }
  return sumTwo - sumOne;
}
console.log(findDifference([13, 1, 18], [22, 26, 25]));
