function solve(input) {
    const n = Number(input[0]);
    for (let i = 1; i <= 10; i++) {
      console.log(`${i} * ${n} = ${i * n}`);
    }
  }
  solve([5]);