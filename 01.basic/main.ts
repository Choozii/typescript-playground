function getFindPrice(price: number, discount: number) {
  return price - price / discount;
}

console.log(getFindPrice(100, 10));

function calcTax(state: string, income: number, dependents: number): number | undefined {
  if (state == 'NY') {
    return income * 0.06 - dependents * 500;
  } else if (state == 'NJ') {
    return income * 0.06 - dependents * 500;
  }
}

let tax = calcTax('NY', 20000, 2);
