function descendingOrder(n) {
  const str = n.toString().split('').map(Number).sort((a, b) => b - a).join('');
  console.log(parseInt(str));
}
descendingOrder(123456789);
