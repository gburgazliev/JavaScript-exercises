function shortcut(word) {
  word = word.split('');
  const arr = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== 'a' && word[i] !== 'e' && word[i] !== 'i' && word[i] !== 'o' && word[i] !== 'u') {
      arr.push(word[i]);
    }
  }
  console.log(arr.join(''));
}
shortcut('goodbye');
