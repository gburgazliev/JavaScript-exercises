function game(number) {
    let sum1 = Number(number[0]) + Number(number[1]) * Number(number[2]);
    let sum2 = Number(number[0]) * Number(number[1]) + Number(number[2]);
    let sum3 = Number(number[0]) * Number(number[1]) * Number(number[2]);
    let sum4 = Number(number[0]) + Number(number[1]) + Number(number[2]);
    console.log(Math.max(sum1,sum2,sum3,sum4))
}
game('185');