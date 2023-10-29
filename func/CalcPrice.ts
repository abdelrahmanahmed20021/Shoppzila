export function formatTotalPrice(prices: number[]) {
  // Calculate the total price
  const totalPrice = prices.reduce((sum, price) => sum + price, 0);

  // Format the total price with two decimal places
  const formattedTotalPrice = totalPrice.toFixed(2);

  return formattedTotalPrice;
}

// Example usage:
const prices = [123.45, 67.89, 341.89];
const totalFormattedPrice = formatTotalPrice(prices);
console.log(totalFormattedPrice);
