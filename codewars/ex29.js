function comp(array1, array2) {
  const newArr = [];
  if (array1 === null || array2 === null) {
    return false;
  }
  if (array1.length === 0 && array2.length === 0) {
    return true;
  }
  array2.map((element) => newArr.push(Math.sqrt(element)));
  if (array1.sort().join(',') === newArr.sort().join(',')) {
    return true;
} else {
    return false;
}
}
console.log(comp([], []));
