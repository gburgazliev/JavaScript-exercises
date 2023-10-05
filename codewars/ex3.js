function paperwork(n, m) {
  let blankPages = n * m;
  if (n < 0 || m < 0) {
    blankPages = 0;
  }
  console.log(blankPages);
}
paperwork(5, 5);
