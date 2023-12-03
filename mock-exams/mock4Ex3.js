let input = ['peshoishere', '3', 'xho', 'piere', 'telerik'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let title = gets();
let n = +gets();
let separator = '*';

for (let i = 0; i < n; i++) {
  let word = gets();
  let lastIndex = 0;
  let arrayTitle = Array.from(title);
  let foundTitle = true;
  for (let j = 0; j < word.length; j++) {
    let index = arrayTitle.indexOf(word[j], lastIndex);
    if (index >= 0) {
      lastIndex = index;
      arrayTitle[index] = separator;
    } else {
      foundTitle = false;
    }
  }
  if (foundTitle) {
    title = arrayTitle.join('').split(separator).join('');
    console.log(title);
  } else {
    console.log('No such title found!');
  }
}
