function phoneBill(input) {
  const messages = Number(input[0]);
  const minutes = Number(input[1]);
  let additionalMessagesPrice = (messages - 20) * 0.06;
  let additionalMinutesPrice = (minutes - 60) * 0.10;
  let additionalMessages = messages - 20;
  let additionalMinutes = minutes - 60;
  let additionalTaxes = 0;
  let totalBill = 0;
  if (messages <= 20) {
    additionalMessages = 0;
    additionalMessagesPrice = 0;
    additionalTaxes = 0;
    console.log(`${additionalMessages} additional messages for ${additionalMessagesPrice.toFixed(2)} levas`);
  } else {
    console.log(`${additionalMessages} additional messages for ${Number(additionalMessagesPrice.toFixed(2))} levas`);
    // additionalMessagesPrice = (messages - 20) * 0.06;
    additionalTaxes += additionalMessagesPrice;
  }
  if (minutes <= 60) {
    additionalMinutes = 0;
    additionalMinutesPrice = 0;
    additionalTaxes = 0;
    console.log(`${additionalMinutes} additional minutes for ${additionalMinutesPrice.toFixed(2)} levas `);
  } else {
    console.log(`${additionalMinutes} additional minutes for ${additionalMinutesPrice.toFixed(2)} levas`);
    // additionalMinutesPrice = (minutes - 60) * 0.10;
    additionalTaxes += additionalMinutesPrice;
  }
  if (additionalTaxes === 0) {
    console.log(`${additionalTaxes.toFixed(2)} additional taxes`);
  } else {
    console.log(`${(additionalTaxes * 0.20).toFixed(2)} additional taxes`);
  }
  totalBill = additionalMessagesPrice + additionalMinutesPrice + (additionalTaxes * 0.20) + 12;
  console.log(`${totalBill.toFixed(2)} total bill`);
}
phoneBill(['21', '15']);
