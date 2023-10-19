function mergingAndSquashing(number) {
    let n = 4;
 for (let i = 0; i < n; i++) {
    let strEven = String;
    let strOdd = String;
    if (number[i] % 2 === 0) {
      strEven = number[i].toString();
      console.log(strEven[1])
    }
    if (number[i] % 2 !== 0) {
     strOdd = number[i].toString();
     console.log(strOdd[0])
    }
    
}
}
mergingAndSquashing([12,
    23,
    34,
    45]);
