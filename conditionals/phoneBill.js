function phoneBill(input) {
    let price = Number(input[0]);
    let paid = Number(input[1]);
    let possibleCoins = [1, 0.50, 0.20, 0.10, 0.05, 0.02, 0.01];
    let output = [];
    let change = paid - price;
    while (change > 0) {
        for (let i = 0; i < possibleCoins.length; i++) {
           let coin = possibleCoins[i];
            if(change - coin >= 0) {
                output.push(coin);
                change -= coin;
                change = change.toFixed(3);
            }
        }
    }
  console.log(output);
}
phoneBill([1.92, 5]);
