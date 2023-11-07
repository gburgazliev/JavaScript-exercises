function missingNumber(array1, array2) {
  const arr1 = array1.split(' ').map(Number).sort();
  const arr2 = array2.split(' ').map(Number).sort();
  const n = Math.max(arr1.length, arr2.length);

  for (let i = 0; i < n; i++) {
    if (arr1[i] === arr2[i]) {
      console.log(`+ ${arr1[i]} ${arr2[i]}`);
    } else {
      if (arr1[i] === undefined) {
        console.log(`- x ${arr2[i]}`);
      } else if (arr2[i] === undefined) {
        console.log(`- ${arr1[i]} x`);
      } else {
        console.log(`- ${arr1[i]} ${arr2[i]}`);
      }
    }
  }
}

missingNumber('1 2 3 5 4 7', '1 2 4 4 5 6 7 8');
