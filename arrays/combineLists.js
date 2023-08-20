function combineList(input) {
  const listOne = input[0].split(',');
  const listTwo = input[1].split(',');
  const combinedArr = [];
  const n = listOne.length;
  for (let i = 0; i < n; i++) {
    combinedArr.push(listOne[i]);
    combinedArr.push(listTwo[i]);
  }
  console.log(combinedArr.join(', '));
}
combineList(['2,3,1', '5,2,3']);
