function deleteNth(arr, n) {
  const obj = {};
  const newArr = [];
  arr.forEach((element) => {
    obj[element] = (obj[element] || 0) + 1;
    if (obj[element] <= n) {
      newArr.push(element);
    }
  });
  console.log(newArr);
}
deleteNth([1,2,3,1,2,1,2,3], 2);
