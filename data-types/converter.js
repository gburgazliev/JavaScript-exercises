function converter(input) {
  const milesPerGallon = Number(input[0]);
  const kmPerGallon = milesPerGallon * 1.6;
  const litresPerKm = (4.54 / kmPerGallon) * 100;
  console.log(`${Math.floor(litresPerKm)} litres per 100 km`);
}
converter([20]);
