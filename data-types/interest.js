function deposit(input) {
  const depositedSum = Number(input[0]);
  const yearOne = (depositedSum * 0.05) + depositedSum;
  const yearTwo = (yearOne * 0.05) + yearOne;
  const yearThree = (yearTwo * 0.05) + yearTwo;
  console.log(yearOne.toFixed(2));
  console.log(yearTwo.toFixed(2));
  console.log(yearThree.toFixed(2));
}
deposit([2000]);
