let input = [''];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let time = gets();
time = time.split(' ');
let timer = time[0].split(':');
let hour = parseInt(timer[0], 10);
let minutes = parseInt(timer[1], 10);
let designator = time[1];

if (hour > 0 && hour <= 12 && minutes >= 0 && minutes <= 59 && (designator === 'AM' || designator === 'PM') && timer[1].length === 2) {
  if (designator === 'PM') {
    if (hour >= 1 && hour <= 11) {
      if (minutes >= 0 && minutes <= 59) {
        console.log('beer time');
      }
    }
    if (hour === 12) {
      if (minutes >= 0 && minutes <= 59) {
        console.log('non-beer time');
      }
    }
  }
  if (designator === 'AM') {
    if (hour >= 3 && hour <= 11) {
      if (minutes >= 0 && minutes <= 59) {
        console.log('non-beer time');
      }
    }
    if (hour === 2 || hour === 1 || hour === 12) {
      if (minutes >= 0 && minutes <= 59) {
        console.log('beer time');
      }
    }
  }
} else {
  console.log('invalid time');
}