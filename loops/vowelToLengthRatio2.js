let input = ['3', 'banica', 'macaroni', 'kifute', 'pizza'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let n = +gets();
let arr = [];
let obj = {};
let arrObj = [];
let ratio = 0;
let vowelsCounter = 0;
let result = '';
for (let i = 0; i < n; i++) {
  arr.push(gets());
}

for (let j = 0; j < arr.length; j++) {
  arr[j] = arr[j].split('');
  for (let k = 0; k < arr[j].length; k++) {
    if (arr[j][k] === 'a' || arr[j][k] === 'o' || arr[j][k] === 'u' || arr[j][k] === 'e' || arr[j][k] === 'i') {
      vowelsCounter++;
    }
  }
  ratio = vowelsCounter / arr[j].length;
  obj = {
    word: arr[j].join(''),
    vowels: vowelsCounter,
    length: arr[j].length,
    ratioObj: ratio,
  };
  arrObj.push(obj);
  vowelsCounter = 0;
}
arrObj.sort(function (a, b) {
  return a.ratioObj - b.ratioObj;
});
let firstElement = arrObj[0];
for (let c = 1; c < arrObj.length; c++) {
  if (firstElement.ratioObj < arrObj[c].ratioObj) {
    result = `${firstElement.word} ${firstElement.vowels}/${firstElement.length}`;
  }
  if (firstElement.ratioObj === arrObj[c].ratioObj) {
    arrObj.sort(function (b, d) {
      return d.vowels - b.vowels;
    });
    result = `${arrObj[0].word} ${arrObj[0].vowels}/${arrObj[0].length}`;
  }
  if (firstElement.ratioObj === arrObj[c].ratioObj && firstElement.vowels === arrObj[c].vowels) {
    arrObj.sort(function (j, l) {
      return l.length - j.length;
    });
    result = `${arrObj[0].word} ${arrObj[0].vowels}/${arrObj[0].length}`;
  }
}
console.log(result);
