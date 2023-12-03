let input = ['He is no spring chicken anymore'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
let sentence = gets().split(' ');
let result = '';
