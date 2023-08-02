function time(input) {
  const days = Number(input[0]) * 24 * 60 * 60;
  const hours = Number(input[1]) * 60 * 60;
  const minutes = Number(input[2]) * 60;
  const seconds = Number(input[3]);
  const sum = days + hours + minutes + seconds;
  console.log(sum);
}
time(['4', '3', '11', '40']);
