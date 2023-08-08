function biggest(input) {
  const n1 = Number(input[0]);
  const n2 = Number(input[1]);
  const n3 = Number(input[2]);
  const n4 = Number(input[3]);
  const n5 = Number(input[4]);
  if (n1 >= n2 && n1 >= n3 && n1 >= n4 && n1 >= n5) {
    console.log(n1);
  } else if (n2 >= n1 && n2 >= n3 && n2 >= n4 && n2 >= n5) {
    console.log(n2);
  } else if (n3 >= n2 && n3 >= n1 && n3 >= n4 && n3 >= n5) {
    console.log(n3);
  } else if (n4 >= n2 && n4 >= n1 && n4 >= n3 && n4 >= n5) {
    console.log(n4);
  } else if (n5 >= n2 && n5 >= n1 && n5 >= n4 && n5 >= n3) {
    console.log(n5);
  }
}
biggest(['4', '4', '4', '4', '4']);
