let outerFunc = (a) => {  
    let counter = 0;
    let innerFunc = (b) => {
    let c = a + b;
    console.log(`${c} ${++counter} times`);
    }
    return innerFunc
}
let result = outerFunc(5);
result(1)
