function energy(input) {
  const arr = input.split('').map(Number);
  let even = 0;
  let odd = 0;
  arr.forEach((element) => {
    if (element % 2 === 0) {
      even += element;
    } else if (element % 2 !== 0) {
      odd += element;
    }
  });
  if (even > odd) {
    console.log(`${even} energy drinks`);
  }
  if (odd > even) {
    console.log(`${odd} cups of coffee`);
  }
  if (even === odd) {
    console.log(`${even} of both`);
  }
}
energy('3621');
