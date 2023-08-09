function chineseZodiac(input) {
  const year = Number(input[0]);
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  for (let i = 0; i <= arr.length; i++) {
    if (year % 12 == arr[i]) {
      switch (year % 12 + '') {
        case '0': console.log('Monkey'); break;
        case '1': console.log('Rooster'); break;
        case '2': console.log('Dog'); break;
        case '3': console.log('Pig'); break;
        case '4': console.log('Rat'); break;
        case '5': console.log('Ox'); break;
        case '6': console.log('Tiger'); break;
        case '7': console.log('Hare'); break;
        case '8': console.log('Dragon'); break;
        case '9': console.log('Snake'); break;
        case '10': console.log('Horse'); break;
        case '11': console.log('Sheep'); break;
        default: return;
      }
    }
  }
}
chineseZodiac(['1975']);
