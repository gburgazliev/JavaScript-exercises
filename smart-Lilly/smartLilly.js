function smartLilly(input) {
    const lillyAge = Number(input[0]);
    const washingMachinePrice = Number(input[1]);
    const singleToyPrice = Number(input[2]);
    let sum = 0;
    let toysSum = 0;
    let savings = 0;
    let allYears = 0;
    for (let i = 1; i <= lillyAge; i++) {
      if (i % 2 === 0) {
        sum += 10;
        allYears += sum - 1;
      } else if (i % 2 !== 0) {
        toysSum += singleToyPrice;
      }
    }
    savings = toysSum + allYears;
    if (savings >= washingMachinePrice) {
      return `Yes! ${(savings - washingMachinePrice).toFixed(2)}`;
    } if (savings < washingMachinePrice) {
      return `No! ${(washingMachinePrice - savings).toFixed(2)}`;
    }
  }
  
  console.log(smartLilly(['10', '170', '6']));
  