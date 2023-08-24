function removeDuplicates(input) {
  const list = input[0].split(',');
  const arr = [];
  arr.push(...new Set(list));
  console.log(arr.join(','));
}
removeDuplicates(['1,2,2,2,2,18,3,12']);
