function chessSquareColor(input) {
  const label = input[0];
  const rank = Number(input[1]);
  let result;
  switch (label) {
    case 'a':
      if (rank % 2 === 0) {
        result = 'light';
      } else {
        result = 'dark';
      } break;
    case 'b':
      if (rank % 2 !== 0) {
        result = 'light';
      } else {
        result = 'dark';
      } break;
    case 'c':
      if (rank % 2 === 0) {
        result = 'light';
      } else {
        result = 'dark';
      } break;
    case 'd':
      if (rank % 2 !== 0) {
        result = 'light';
      } else {
        result = 'dark';
      } break;
    case 'e':
      if (rank % 2 === 0) {
        result = 'light';
      } else {
        result = 'dark';
      } break;
    case 'f':
      if (rank % 2 !== 0) {
        result = 'light';
      } else {
        result = 'dark';
      } break;
    case 'g':
      if (rank % 2 === 0) {
        result = 'light';
      } else {
        result = 'dark';
      } break;
    case 'h':
      if (rank % 2 !== 0) {
        result = 'light';
      } else {
        result = 'dark';
      } break;
    default: break;
  }
  return result;
}
console.log(chessSquareColor(['g', 3]));
