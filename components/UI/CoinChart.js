import { useEffect, useState } from 'react';
import { formatPrice, createTimeLabels } from '../../hooks/customHooks';
import { Line } from 'react-chartjs-2';

import styles from './CoinChart.module.scss';

const CoinChart = props => {
  // Destructure Props
  const data = props?.coinHistory?.history;

  // Local State
  const [timeLabels, setTimeLabels] = useState();
  const [priceLabels, setPriceLabels] = useState();

  useEffect(() => {
    // Local Arrays for Chart Data
    const timeLabelsData = [];
    const priceLabelsData = [];

    // Loop through the data and push it into the local arrays above.
    if (data) {
      for (let i = 0; i <= data?.length; i += 10) {
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

  // The finished chart object
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
    <div className={styles['container']}>
      <div>Coin Chart</div>
      {timeLabels && priceLabels && (
        <Line height={200} width={400} data={chartData} />
      )}
    </div>
  );
};

export default CoinChart;
