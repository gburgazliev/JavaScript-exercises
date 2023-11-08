let input = [];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let title = gets();
let copyTitle = title;
let n = +gets();

for (let i = 0; i < n; i++) {
  let isFound = true;
  let currentString = gets();
  let currentIndex = 0;
  for (let char of currentString) {
    let charIndex = title.indexOf(char, currentIndex);
    if (charIndex > 0) {
      title = title.slice(0, charIndex) + title.slice(charIndex + 1);
      currentIndex = charIndex;
    } else if (charIndex === 0) {
      title = title.slice(1);
    } else {
      isFound = false;
      break;
    }
  }
  if (isFound) {
    copyTitle = title;
    console.log(title);
  } else {
    title = copyTitle;
    console.log('No such title found!');
  }
}
