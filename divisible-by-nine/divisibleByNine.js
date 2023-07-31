function divisibleByNine(input) {
    const n = Number(input[0]);
    const m = Number(input[1]);
    let sum = 0;
    let numbers = '';
    for (let i = n; i < m; i++) {
      if (i % 9 === 0) {
        sum += i;
        numbers += i + '\n';
      }
    }
    console.log(`The sum: ${sum}`);
    console.log(numbers);
  }
  divisibleByNine(['100', '200']);
   
  