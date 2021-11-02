import { useEffect, useState } from 'react';
import { formatPrice } from '../../hooks/customHooks';
import { Line } from 'react-chartjs-2';

import styles from './CoinChart.module.scss';

const CoinChart = props => {
  // Destructure Props
  const data = props?.coinHistory?.history;

  // Local State
  const [timeLabels, setTimeLabels] = useState();
  const [priceLabels, setPriceLabels] = useState();

  // Function to fill labels array
  const createTimeLabels = data => {
    const date = new Date(data);
    const dateString = date.toLocaleDateString('en-US');
    const timeString = date.toLocaleTimeString('en-US');
    return `${dateString}, ${timeString}`;
  };

  useEffect(() => {
    // Local Arrays for Chart Labels & Data
    const timeLabelsData = [];
    const priceLabelsData = [];

    // Loop through the data and push it into the local arrays above.
    if (data) {
      for (let i = 0; i <= data?.length; i++) {
        const timeData = data[i]?.timestamp;
        const priceData = data[i]?.price;
        if (timeData) {
          timeLabelsData.push(createTimeLabels(timeData));
        }
        if (priceData) {
          priceLabelsData.push(formatPrice(priceData));
        }
      }
    }

    // Set the Local Array Data into the Local State
    setTimeLabels(timeLabelsData);
    setPriceLabels(priceLabelsData);
  }, [data, setTimeLabels]);

  const chartData = {
    labels: timeLabels,
    datasets: [
      {
        label: 'price',
        data: priceLabels,
        borderColor: 'red',
      },
    ],
  };

  return (
    <div>
      <div>Coin Chart</div>
      {timeLabels && priceLabels && (
        <Line height={200} width={400} data={chartData} />
      )}
    </div>
  );
};

export default CoinChart;
