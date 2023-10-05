function saleHotdogs(n) {
  if (n < 5) {
    console.log(n * 100);
  } else if (n >= 5 && n < 10) {
    console.log(n * 95);
  } else if (n >= 10) {
    console.log(n * 90);
  }
}
saleHotdogs(100);
