function militaryTanks(input) {
  const string = input[0];
  let x = 0;
  let y = 0;
  for (let i = 0; i < string.length; i++) {
    switch (string[i]) {
      case 'D': x += 0; y -= 1; break;
      case 'U': x += 0; y += 1; break;
      case 'R': x += 1; y += 0; break;
      case 'L': x -= 1; y += 0; break;
    }
  }
  console.log(`(${x}, ${y})`);
}
militaryTanks(['DU']);
