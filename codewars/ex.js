function XO(str) {
  let XCounter = 0;
  let OCounter = 0;
  const isTrue = true;
  const isFalse = false;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'x' || str[i] === 'X') {
      XCounter++;
    }
    if (str[i] === 'o' || str[i] === 'O') {
      OCounter++;
    }
  }
  if (XCounter === OCounter) {
    console.log(isTrue);
  } else {
    console.log(isFalse);
  }
}
XO('xxxm');
