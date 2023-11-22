let input = ['8', '1', 'go', '1', '1', 'there', 'IT', 'kur', 'sist'];
let input1 = ['3', '1', '3', '3'];
let input2 = ['9', 'try', 'google', 'it', '2', 'plus', '2', '=', '52', '-10'];
let input3 = [
    '6',
    'tel',
    'eri',
    'k',
    'aca',
    'de',
    'my',
]
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let n = +gets();
let arr = [];
let str = '';
let sum = 0;
let temp = '';
for (let i = 0; i < n; i++) {
  let currElement = gets();
  arr.push(currElement);
}
let onlyNumbers = arr.every(function (element) {
  return !isNaN(element);
});
let onlyStr = arr.every(function (element) {
  return isNaN(element);
});
if (onlyStr) {
  for (let word of arr) {
    temp += word.concat('-');
  }
  console.log(temp.slice(0, -1));
}

if (onlyNumbers) {
  for (let num of arr) {
    sum += Number(num);
  }
  console.log(sum);
} else {
  for (let j = 0; j < arr.length; j++) {
    if (isNaN(arr[j]) && isNaN(arr[j + 1])) {
      str += arr[j].concat('-');
    }
    if (isNaN(arr[j]) && !isNaN(arr[j + 1]) && isNaN(arr[j - 1])) {
      str += arr[j].concat('-');
      console.log(str.slice(0, -1));
    }
    if (!isNaN(arr[j - 1]) && isNaN(arr[j]) && !isNaN(arr[j + 1])) {
      console.log(arr[j]);
    }
    if (isNaN(arr[j - 1]) && !isNaN(arr[j]) && isNaN(arr[j + 1])) {
      console.log(arr[j]);
    }
    if (isNaN(arr[j - 1]) && !isNaN(arr[j]) && !isNaN(arr[j + 1])) {
      sum += Number(arr[j]) + Number(arr[j + 1]);
    }
    if (!isNaN(arr[j - 1]) && !isNaN(arr[j]) && isNaN(arr[j + 1])) {
      sum = Number(arr[j - 1]) + Number(arr[j]);
      console.log(sum);
    }
    if (!isNaN(arr[j - 1]) && isNaN(arr[j]) && isNaN(arr[j + 1])) {
      str = arr[j].concat('-') + arr[j + 1];
      console.log(str);
    }
  }
}
