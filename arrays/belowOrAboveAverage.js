function belowOrAboveAverage(input) {
  const list = input[0].split(',').map(Number);
  let avg = list[0];
  let aboveAverage = '';
  let belowAverage = '';
  for (let i = 1; i < list.length; i++) {
    avg += list[i];
  }
  avg /= list.length;
  console.log(`avg: ${avg.toFixed(2)}`);

  for (let j = 0; j < list.length; j++) {
    if (list[j] < avg) {
      belowAverage += list[j] + ',';
    }
    if (list[j] > avg) {
      aboveAverage += list[j] + ',';
    }
  }
  console.log(`below: ${belowAverage.replace(/,*$/, '')}`);
  console.log(`above: ${aboveAverage.substring(0, aboveAverage.length - 1)}`);
}
belowOrAboveAverage(['0,1,-1']);
