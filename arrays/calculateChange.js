let input = ['1.92', '5'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let price = Number(gets());
let paid = Number(gets());
let oneLev = 100;
let fifty = 50;
let twenty = 20;
let ten = 10;
const five = 5;
let two = 2;
let one = 1;
let changeInStotinki = 0;
let change = (paid - price) * 100;
if (change / oneLev >= 1) {
    changeInStotinki = Math.floor(change/oneLev)
  console.log(`${changeInStotinki} x 1 lev`);
  change -= changeInStotinki * oneLev;
}
if (change / fifty >= 1) {
  changeInStotinki = Math.floor(change/fifty);
  console.log(`${changeInStotinki} x 50 stotinki`);
  change -= changeInStotinki * fifty;
}
if (change / twenty >= 1) {
  changeInStotinki = Math.floor(change / twenty);
  console.log(`${changeInStotinki} x 20 stotinki`);
  change -= changeInStotinki * twenty;
}
if (change / ten >= 1) {
  changeInStotinki = Math.floor(change / ten);
  console.log(`${changeInStotinki} x 10 stotinki`);
  change -= changeInStotinki * ten;
}
if (change / five >= 1) {
  changeInStotinki = Math.floor(change / five);
  console.log(`${changeInStotinki} x 5 stotinki`);
  change -= changeInStotinki * five;
}
if (change / two >= 1) {
  changeInStotinki = Math.floor(change / two);
  console.log(`${changeInStotinki} x 2 stotinki`);
  change -= changeInStotinki * two;
}
if (change / one >= 1) {
  changeInStotinki = Math.floor(change / one);
  console.log(`${changeInStotinki} x 1 stotinka`);
  change -= changeInStotinki * one;
}
