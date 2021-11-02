// Format Functions
export const formatPrice = price => {
  const number = Number(price);
  let formattedPrice;

  if (number > 0.001) {
    formattedPrice = number.toFixed(2);
  } else {
    formattedPrice = number.toFixed(8);
  }

  return formattedPrice.toLocaleString();
};

export const formatTicker = ticker => {
  const index = ticker.indexOf('*');
  if (index < 0) {
    return ticker;
  } else {
    return ticker.slice(0, index);
  }
};

export const createTimeLabels = data => {
  const date = new Date(data);
  const dateString = date.toLocaleDateString();
  const timeString = date.toLocaleTimeString();
  return `${dateString}, ${timeString}`;
};
