function anagrams(word, n, array) {
  const sortedWord = word.split('').sort().join('');
  const sortedElementsArr = [];
  array.forEach((element) => {
    const sortedElements = element.split('').sort().join('');
    sortedElementsArr.push(sortedElements);
  });
  for (let i = 0; i < n; i++) {
    if (sortedWord === sortedElementsArr[i]) {
      console.log('Yes');
    } else {
      console.log('No');
    }
  }
}
anagrams('anagram', 6, ['gramana', 'aaagrnm', 'anagra', 'margana', 'abc', 'xy']);
