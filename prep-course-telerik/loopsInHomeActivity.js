const arr = [2, 1, 3, 4, 6, 0, 0, 5, 7, 8, 10];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
console.log("----------------------------------------------------------");
let index = 0;
while (index < arr.length) {
  console.log(arr[index]);
  index++;
}
console.log("----------------------------------------------------------");
for (const element in arr) {
  console.log(arr[element]);
}
console.log("----------------------------------------------------------");
for (const element of arr) {
  console.log(element);
}
console.log("----------------------------------------------------------");
for (let i = 0; i < arr.length / 2; i++) {
  console.log(arr[i]);
}
console.log("----------------------------------------------------------");
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
    continue;
  } else {
    console.log(arr[i]);
  }
}
