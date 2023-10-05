function greaterNumber(input) {
  const arrOne = input[0].split(',').map(Number);
  const arrTwo = input[1].split(',').map(Number);
  const result = [];
  let temp = 0;
 let arr = []
  for (let i = 0; i < arrOne.length; i++) {
    for (let j = 0; j < arrTwo.length; j++) {
      if (arrOne[i] === arrTwo[j]) {
        temp = arrTwo[j]
         for (let k = temp; k < arrTwo.length; k++) {
            if (temp < arrTwo[k]) {
                arr.push(arrTwo[k]);
         } else {
            result.push(-1)
         }
      }
    }
  }
  console.log(result);
}
}
greaterNumber(['2,4', '1,2,3,4']);
