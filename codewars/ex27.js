function spinAround(turns) {
  let leftCounter = 0;
  let rightCounter = 0;
  let result = 0;
  for (let i = 0; i < turns.length; i++) {
    if (turns[i] === 'left') {
      leftCounter++;
    } else if (turns[i] === 'right') {
      rightCounter++;
    }
  }
  const sumLeft = leftCounter * 90;
  const sumRight = rightCounter * 90;
  if (leftCounter < rightCounter) {
    result = sumRight - sumLeft;
  } else if (rightCounter < leftCounter) {
    result = sumLeft - sumRight;
  }
  if (result < 360) {
    console.log(0);
  } else {
    console.log((Math.floor(result / 360)));
  }
}
spinAround(["right","left","right","right","right","right","right","left","right","right","left","left","left","left","left","right","right","right","right","right","right","right","right","left","left","left","right","right","left","right"]);
