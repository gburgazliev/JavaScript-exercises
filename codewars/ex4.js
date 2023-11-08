function twoSort(s) {
  s.sort();
  let output = [];
  const str = s[0];
  for (let i = 0; i < str.length; i++) {
    output += str[i] + '***';
  }
  output = output.substring(0, output.length - 3);
  console.log(output);
}
twoSort(['bitcoin', 'take', 'over', 'the', 'world', 'maybe', 'who', 'knows', 'perhaps']);
