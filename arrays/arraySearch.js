function arraySearch(input) {
  const arr = input[0].split(',').map(Number);;
  arr.sort();
  const missingNumbers = [];
  for (let i = 1; i <= arr.length; i++) {
    if (!arr.includes(i)) {
      missingNumbers.push(i);
    }
  }
  console.log(missingNumbers.join(','));
}
arraySearch(['4,3,2,7,8,2,3,1']);
