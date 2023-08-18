function vowelToLengthRatio(input) {
  const n = Number(input[0]);
  const words = ['macaroni', 'kiufte', 'banica', 'pizza'];
  let ratio = 0;
  let vowels = 0;
  const arr = [];
  let object = {};
  let result = '';
  for (let i = 0; i < n; i++) {
    for (let k = 0; k < words[i].length; k++) {
      if (words[i][k] === 'a' || words[i][k] === 'o' || words[i][k] === 'u' || words[i][k] === 'e' || words[i][k] === 'i') {
        vowels++;
      }
    }
    ratio = vowels / words[i].length;
    object = {
      name: words[i], ratioObj: ratio, vowelsObj: vowels, wordLength: words[i].length,
    };
    arr.push(object);
    arr.sort(function (x, y) {
      return x.ratioObj - y.ratioObj;
    });
    vowels = 0;
  }
  const firstEl = arr[0];
  for (let m = 1; m < arr.length; m++) {
    if (firstEl.ratioObj < arr[m].ratioObj) {
      result = `${firstEl.name} ${firstEl.vowelsObj}/${firstEl.wordLength}`;
    }
    if (firstEl.ratioObj === arr[m].ratioObj) {
      arr.sort(function (a, b) {
        return b.vowelsObj - a.vowelsObj;
      });
      result = `${arr[0].name} ${arr[0].vowelsObj}/${arr[0].wordLength}`;
    }
    if (firstEl.ratioObj == arr[m].ratioObj && firstEl.vowelsObj === arr[m].vowelsObj) {
      arr.sort(function (j, k) {
        return k.wordLength - j.wordLength;
      });
      result = `${arr[0].name} ${arr[0].vowelsObj}/${arr[0].wordLength}`;
    }
  }
  console.log(result);
}
vowelToLengthRatio(['4']);
