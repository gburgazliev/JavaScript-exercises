function reverseWords(str) {
  console.log(str.split("").reverse().join('').split(" ").reverse().join(' '));
}
reverseWords('The quick brown fox jumps over the lazy dog.');
