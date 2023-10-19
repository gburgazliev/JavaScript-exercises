function solution(string) {
  const arr = string.split('').map((el) => {
    if (el === el.toUpperCase()) {
      el = ' ' + el;
    }
    return el;
  });
  console.log(arr.join(''));
}
solution('camelcaseok');
