// let fn = (a) => { console.log(a + 5); };
const arr = [1, 2, 3, 4, 5];
// arr.forEach((el) => {
//   fn(el);
// });
const checkFn = (item) => {
  if (item % 2 === 0) {
    return item;
  }
  return false;
};

const filter = function (array, fn) {
  let resultArr = [];
  array.forEach((el) => {
    if (fn(el)) {
      resultArr.push(el);
    }
  });
  console.log(resultArr);
};
filter(arr, checkFn);
