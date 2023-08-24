function convertDegrees(input) {
  const list = input[0].split(' ').map(Number);
  list.forEach((element) => {
    const celsiusToFahrenheit = ((9 / 5) * element) + 32;
    console.log(celsiusToFahrenheit);
  });
}
convertDegrees(['0 15 30']);
