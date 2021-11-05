// Format Functions
const formatPrice = price => {
  const number = Number(price);
  let formattedPrice;

  if (number > 0.8) {
    formattedPrice = number.toFixed(2);
  } else {
    formattedPrice = number.toFixed(8);
  }
  return formattedPrice;
};

const formatTicker = ticker => {
  const index = ticker.indexOf('*');
  if (index < 0) {
    return ticker;
  } else {
    return ticker.slice(0, index);
  }
};

const createTimeLabels = (data, chartContext) => {
  const date = new Date(data);
  const dateString = date.toLocaleDateString();
  const timeString = date.toLocaleTimeString();

  if (chartContext === '24h') {
    return `${timeString.replace(':00', '')}`;
  } else if (chartContext === '7d' || chartContext === '30d') {
    return `${dateString.slice(0, -5)}`;
  } else {
    return `${dateString}`;
  }
};

// Export Functions
export { formatTicker, formatPrice, createTimeLabels };
