let str1 = '2,4';
let str2 = '1,2,3,4';
str1 = str1.split(',').map(Number);
str2 = str2.split(',').map(Number);

function greaterNumber2(array1, array2) {
  const newArr = [];
  for (let i = 0; i < array1.length; i++) {
    let foundBigger = false;
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        for (let k = j++; k < array2.length; k++) {
          if (array1[i] < array2[k]) {
            newArr.push(array2[k]);
            foundBigger = true;
            break;
          }
        }
      }
    }
    if (!foundBigger) {
      newArr.push(-1);
    }
  }
  return newArr.join(',');
}
console.log(greaterNumber2(str1, str2));
