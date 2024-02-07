let arr1 = [24,45,212,6546,2332];
let filteredArr = (arr) => {
    return arr.filter((el,index) => (index % 2 === 0));
}
let result = filteredArr(arr1);
console.log(result)