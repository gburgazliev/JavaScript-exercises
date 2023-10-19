function repeatingNumber(n) {
  let previousElement = 0;
  const arr = [];
  const output = [];
  for (let i = 0; i < n; i++) {
    const numbers = [1, 2, 3, 4, 5, 1, 2, 6, 7, 8, 3, 4, 5, 9, 10,
      11, 12, 13, 6, 14, 15, 16, 17, 18, 19, 7, 8, 9, 20,
      21, 22, 23, 24, 25, 10, 11, 26, 27, 28, 29, 30, 12, 13, 14,
      31, 32, 15, 33, 34, 35, 36, 16, 17, 37, 38, 39, 40, 41, 18,
      19, 42, 43, 44, 45, 46, 47, 20, 21, 48, 22, 23, 49, 50,
      51, 24, 52, 25, 26, 53, 54, 55, 27, 28, 56, 57, 29, 30, 58,
      59, 60, 31, 32, 61, 33, 62, 34, 63, 35, 64, 65, 36, 66, 37,
      38, 67, 68, 39, 69, 40, 70, 41, 71, 42, 72, 73, 43, 74, 75,
      44, 76, 45, 46, 77, 78, 79, 47, 80, 81, 48, 82, 49, 83, 50,
      84, 51, 85, 52, 86, 53, 87, 54, 88, 55, 56, 89, 57, 90, 58,
      91, 59, 92, 60, 93, 61, 94, 62, 95, 63, 96, 97, 64, 98, 65,
      66, 99, 100];
    arr.push(numbers[i]);
  }
  arr.sort();
  arr.forEach((element) => {
    if (element === previousElement) {
      output.push(previousElement);
    } else {
      previousElement = element;
    }
  });
  if (arr.length <= 2) {
    console.log(arr[0]);
  } else {
    console.log(Math.min(...output));
  }
}
repeatingNumber(150);
