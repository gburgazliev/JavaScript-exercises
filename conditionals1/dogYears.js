function dogYears(input) {
  const humanYears = Number(input[0]);
  let dogYear = 0;
  if (humanYears <= 2) {
    dogYear = humanYears * 10;
  }
  if (humanYears > 2) {
    const lastYears = humanYears - 2;
    dogYear = (2 * 10) + lastYears * 4;
  }
  console.log(dogYear);
}
dogYears([4]);
