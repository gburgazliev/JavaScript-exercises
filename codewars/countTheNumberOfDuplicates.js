function duplicates(input) {
  let arr = input.split('').sort();
  let counter = 0;
  let uniqueChars = new Set();
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toUpperCase();
  }
  arr = arr.sort();
  for (let j = 0; j < arr.length; j++) {
    let current = arr[j];
    let next = arr[j + 1];
    if (current !== undefined && !uniqueChars.has(current)) {
      if (current === next) {
        uniqueChars.add(current);
        counter++;
      }
    }
  }
  // In this modified code, we maintain a uniqueChars Set to keep track of
  // characters that have already been counted as duplicates. We only increment the counter
  // when we find a character that's the same as the next character and hasn't been counted before.
  // This way, the counter will increment for each set of duplicates rather than for
  // each duplicate element.
  console.log(counter);
}
duplicates('aabB');
