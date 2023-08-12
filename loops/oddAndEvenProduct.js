function oddAndEven(input) {
  const n = Number(input[0]);
  const numbers = input[1];
  let evenNumbers = 1;
  let oddNumbers = 1;
  for (let i = 0; i < n; i++) {
    if (i % 2 !== 0) {
      oddNumbers *= numbers[i];
    } else if (i % 2 == 0) {
      evenNumbers *= numbers[i];
    }
  }
  if (oddNumbers === evenNumbers) {
    console.log(`yes ${evenNumbers}`);
  } else {
    console.log(`no ${evenNumbers} ${oddNumbers}`);
  }
}
oddAndEven(['5', [4, 3, 2, 5, 2]]);
