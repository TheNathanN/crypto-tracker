// Format Functions
const formatPrice = price => {
  const number = Number(price);
  let formattedPrice;

  if (number > 0.001) {
    formattedPrice = number.toFixed(2);
  } else {
    formattedPrice = number.toFixed(8);
  }

  return formattedPrice.toLocaleString();
};

const formatTicker = ticker => {
  const index = ticker.indexOf('*');
  if (index < 0) {
    return ticker;
  } else {
    return ticker.slice(0, index);
  }
};

const createTimeLabels = data => {
  const date = new Date(data);
  const dateString = date.toLocaleDateString();
  const timeString = date.toLocaleTimeString();
  return `${timeString}`;
};

// Export Functions
export { formatTicker, formatPrice, createTimeLabels };
