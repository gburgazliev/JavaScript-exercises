function deckOfCards(input) {
  let cardSign = input[0];
  switch (cardSign) {
    case 'J': cardSign = 11; break;
    case 'Q': cardSign = 12; break;
    case 'K': cardSign = 13; break;
    case 'A': cardSign = 14; break;
  }
  for (let i = 2; i <= cardSign; i++) {
    let numToString = i + '';
    switch (numToString) {
      case '11': numToString = 'J'; break;
      case '12': numToString = 'Q'; break;
      case '13': numToString = 'K'; break;
      case '14': numToString = 'A'; break;
    }
    console.log(`${numToString} of spades, ${numToString} of clubs, ${numToString} of hearts, ${numToString} of diamonds`);
  }
}
deckOfCards(['5']);
