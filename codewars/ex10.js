function triangle(a, b, c) {
  if ((a < (b + c)) && (b < (a + c) && (c < (a + b))) && a > 0 && b > 0 && c > 0) {
    return true;
  } else {
    return false;
  }
}
console.log(triangle(7, 2, 2));
