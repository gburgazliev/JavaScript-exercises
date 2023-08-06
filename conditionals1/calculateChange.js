function phoneBill(input) {
  const price = Number(input[0]);
  const paid = Number(input[1]);
  const possibleCoins = [1, 0.50, 0.20, 0.10, 0.05, 0.02, 0.01];
  const output = [];
  let change = paid - price;
  while (change > 0) {
    for (let i = 0; i < possibleCoins.length; i++) {
      const coin = possibleCoins[i];
      if (change - coin >= 0) {
        output.push(coin);
        change -= coin;
        change = change.toFixed(3);
        break;
      }
    }
  }
  let counter = 0;
  let temp = output[0];
  for (let i = 0; i < output.length; i++) {
    if (output[i] === temp) {
      counter++;
    } else {
      if (temp >= 1) {
        console.log(`${counter} x ${temp} lev`);
      } else if (temp < 1) {
        console.log(`${counter} x ${temp * 100} stotinki`);
      }
      counter = 1;
      temp = output[i];
    }

    if (i === output.length - 1) {
      if (temp === 0.01) {
        console.log(`${counter} x ${temp * 100} stotinka`);
      } else if (temp > 0.01) {
        console.log(`${counter} x ${temp * 100} stotinki `);
      }
      counter = 1;
      temp = output[i];
    }
  }
}
phoneBill([0.76, 1]);
