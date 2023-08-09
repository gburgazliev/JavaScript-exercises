function sortThreeNumbers(input) {
  const n1 = Number(input[0]);
  const n2 = Number(input[1]);
  const n3 = Number(input[2]);
  if (n1 === n2 && n1 === n3 && n2 === n3) {
    console.log(n1 + ' ' + n2 + ' ' + n3);
  }
  if (n1 > n2 && n1 > n3 && n2 > n3) {
    console.log(n1 + ' ' + n2 + ' ' + n3);
  } else if (n1 > n2 && n1 > n3 && n2 < n3) {
    console.log(n1 + ' ' + n3 + ' ' + n2);
  }
  if (n2 > n1 && n2 > n3 && n1 >= n3) {
    console.log(n2 + ' ' + n1 + ' ' + n3);
  } else if (n2 > n1 && n2 > n3 && n1 < n3) {
    console.log(n2 + ' ' + n3 + ' ' + n1);
  }
  if (n3 > n2 && n3 > n1 && n2 >= n1) {
    console.log(n3 + ' ' + n2 + ' ' + n1);
  } else if (n3 > n2 && n3 > n1 && n2 < n1) {
    console.log(n3 + ' ' + n1 + ' ' + n2);
  }
}
sortThreeNumbers(['-1', '-1', '-1']);
