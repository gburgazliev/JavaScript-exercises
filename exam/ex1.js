let input = ['1000000 dollar'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let list = gets().split(' ');
let result = '';
list.forEach((element) => {
  if (element.length >= 3) {
    let firstEl = Array.from(element).splice(0, 1);
    let lastEl = Array.from(element).splice(-1);
    let length = element.slice(1, -1).length;
    let firstAsciiSymbol = firstEl.toString().charCodeAt(0) + 1;
    let lastAsciiSymbol = lastEl.toString().charCodeAt(0) + 1;
    let str1 = String.fromCharCode(firstAsciiSymbol);
    let str2 = String.fromCharCode(lastAsciiSymbol);
    result += str1.concat(length).concat(str2) + ' ';
  } else {
    result += element + ' ';
  }
});
console.log(result);
