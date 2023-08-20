function distantWords(input) {
  const targetNumber = Number(input[0]);
  const numberOfWords = Number(input[1]);
  const words = ['coffee', 'tea', 'pineapple'];
  const arr = [];
  let counter = 0;
  let result = 0;
  let output = '';
  for (let i = 0; i < numberOfWords; i++) {
    for (let k = 0; k < words[i].length; k++) {
      switch (words[i][k]) {
        case 'a': counter += 1; break;
        case 'b': counter += 2; break;
        case 'c': counter += 3; break;
        case 'd': counter += 4; break;
        case 'e': counter += 5; break;
        case 'f': counter += 6; break;
        case 'g': counter += 7; break;
        case 'h': counter += 8; break;
        case 'i': counter += 9; break;
        case 'j': counter += 10; break;
        case 'k': counter += 11; break;
        case 'l': counter += 12; break;
        case 'm': counter += 13; break;
        case 'n': counter += 14; break;
        case 'o': counter += 15; break;
        case 'p': counter += 16; break;
        case 'q': counter += 17; break;
        case 'r': counter += 18; break;
        case 's': counter += 19; break;
        case 't': counter += 20; break;
        case 'u': counter += 21; break;
        case 'v': counter += 22; break;
        case 'w': counter += 23; break;
        case 'x': counter += 24; break;
        case 'y': counter += 25; break;
        case 'z': counter += 26; break;
      }
    }
    if (counter > targetNumber) {
      result = counter - targetNumber;
    } else if (counter < targetNumber) {
      result = targetNumber - counter;
    }
    arr.push(result);
    output = words[i] + ' ' + result;
    result = 0;
    counter = 0;
    console.log(output);
  }
  let avg = 0;
  for (let j = 0; j < arr.length; j++) {
    avg += arr[j];
  }
  avg /= numberOfWords;
  console.log(avg.toFixed(2));
}
distantWords(['28', '3']);
