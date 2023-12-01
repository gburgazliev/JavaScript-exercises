let input = ['22 34 523 12 122 4444 123'];
  let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let n = gets().split(' ').map(Number);
let isBool;
for (let i = 0; i < n.length; i++) {
  if (n[i - 1] === undefined && (n[i] > n[i + 1] || n[i] < n[i + 1])) {
    isBool = true;
    i++;
  }
  if (n[i - 1] === undefined && n[i] === n[i + 1]) {
    isBool = false; break;
  }
  if (n[i - 1] > n[i] && n[i] < n[i + 1]) {
    isBool = true;
    i++;
  }
  if (n[i - 1] >= n[i] && n[i] >= n[i + 1]) {
    isBool = false; break;
  }
  if (n[i - 1] > n[i] && n[i + 1] === undefined) {
    isBool = true;
  }
  if (n[i - 1] < n[i] && n[i + 1] === undefined) {
    isBool = true;
  }
  if (n[i - 1] < n[i] && n[i] > n[i + 1]) {
    isBool = true; i++;
  }
  if (n[i - 1] === n[i] && n[i + 1] === undefined) {
    isBool = false; break;
  }
}

if (isBool) {
  console.log('yes');
} else {
  console.log('no');
}
