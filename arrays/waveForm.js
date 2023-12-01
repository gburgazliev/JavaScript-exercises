let input = ['22 34 12 523 122 4444 123'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let list = gets().split(' ').map(Number);
let bool = false;
for (let i = 0; i < list.length; i++) {
  if (list[i -1] === undefined && (list[i] > list[i +1] || list[i] < list[i + 1])) {
    i++; bool = true;
  }
  else if ((list[i-1]>list[i]&&list[i] < list[i +1]) || list[i -1] < list[i] && list[i] > list[i + 1]) {
    i++; bool = true;
  }
  else if ((list[i - 1] > list[i] || list[i - 1] < list[i]) && list[i + 1] === undefined) {
    bool = true;
  } else {
    bool = false; break;
  }
}
if (bool) {
  console.log('yes');
} else {
  console.log('no');
}
