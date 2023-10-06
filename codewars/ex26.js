function enough(cap, on, wait) {
  if (on + wait <= cap) {
    console.log(0);
  } else if (on + wait > cap) {
    console.log((on + wait) - cap);
  }
}
enough(100, 50, 60);
