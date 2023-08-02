function personGreeting(input) {
  const name = input[0];
  const greeting = `Hello, ${name}!`;
  return greeting;
}
console.log(personGreeting(['John']));
