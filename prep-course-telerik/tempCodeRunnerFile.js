let list = gets().split(' ').map(Number);
let result = '';
let ascending = true;
let descending = true;
for (let i = 0 ; i < list.length - 1; i++) {
 ascending =  ascending && (list[i] < list[i + 1]);  // The && (logical AND) operator ensures that if ascending is already false at any point, it stays false throughout.
 descending =  descending && (list[i] > list[i + 1])
}
if (ascending) {
    console.log('Ascending'); 
} else if (descending) {
    console.log('Descending');
} else {
    console.log('Mixed');
}