function gooseFilter(birds) {
  const geese = ['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher'];
  const arr = [];
  for (let i = 0; i < birds.length; i++) {
    let isGoose = false;
    for (let j = 0; j < geese.length; j++) {
      if (birds[i] === geese[j]) {
        isGoose = true;
      }
    }
    if (!isGoose) {
      arr.push(birds[i]);
    }
  }

  console.log(arr);
}
gooseFilter(['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher']);
