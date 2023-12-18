let input = ['11 March 2021', '22', '27', '35'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let expectedBlossomDate = new Date(gets());
expectedBlossomDate.setDate(expectedBlossomDate.getDate());
let avgTemperaturePrediction = +gets();
let temperatureBonus = 0;
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let rain = +gets();
let winterLength = +gets();
let temp = avgTemperaturePrediction - 20;

expectedBlossomDate.setDate(expectedBlossomDate.getDate() - temp);
let rainDelay = Math.floor(Math.abs(rain - 30) / 3);
expectedBlossomDate.setDate(expectedBlossomDate.getDate() + rainDelay);
expectedBlossomDate.setDate(expectedBlossomDate.getDate() + Math.floor(winterLength / 7));
if (expectedBlossomDate.getFullYear % 4 === 0) {
  temperatureBonus = temp - 5;
  expectedBlossomDate.setDate(expectedBlossomDate.getDate() - temperatureBonus);
}
let result = `${expectedBlossomDate.getDate()} ${months[expectedBlossomDate.getMonth()]} ${expectedBlossomDate.getFullYear()}`;

console.log(result);