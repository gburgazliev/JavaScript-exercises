function guessTheSeason(input) {
  const month = input[0];
  const day = Number(input[1]);
  let season;
  if (month === 'September' && day >= 22 || month === 'October' && day <= 31 || month === 'November' && day <= 30 || month === 'December' && day <= 20) {
    season = 'Autumn';
  }
  if (month === 'December' && day >= 21 || month === 'January' && day <= 31 || month === 'February' && day <= 29 || month === 'March' && day <= 19) {
    season = 'Winter';
  }
  if (month === 'March' && day >= 20 || month === 'April' && day <= 30 || month === 'May' && day <= 31 || month === 'June' && day <= 20) {
    season = 'Spring';
  }
  if (month === 'June' && day >= 21 || month === 'July' && day <= 31 || month === 'August' && day <= 31 || month === 'September' && day <= 21) {
    season = 'Summer';
  }
  return season;
}
console.log(guessTheSeason(['April', 1]));
