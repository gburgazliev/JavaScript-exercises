function balancedNumbers(number) {
  let sum = 0;
let isTrue = true;
do {
  if (number.length != 3 ) {break;}
  let n1 = parseInt(number[0]);
  let n2 = parseInt(number[1]);
  let n3 = parseInt(number[2]);
  if (n1 + n3 != n2) {break} 
  sum += parseInt(number);
} while (isTrue);
console.log(sum)
}
balancedNumbers('132');
