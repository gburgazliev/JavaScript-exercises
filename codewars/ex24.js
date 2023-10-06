function countRedBeads(n) {
  let redsCounter = 0;
  if (n < 2) {
    console.log(0);
  } else {
    for (let i = 1; i < n; i++) {
      redsCounter++;
      redsCounter++;
    }
    console.log(redsCounter);
  }
}
countRedBeads(3);
