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
    // Arrays for chart data
    const timeLabelsData = [];
    const priceLabelsData = [];

    // Loop through the data and push it into the arrays above.
    if (data) {
      for (let i = 0; i <= data?.length - 1; i += 3) {
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

    // Set the timeLabels and priceLabels arrays into the local state
    setTimeLabels(timeLabelsData);
    setPriceLabels(priceLabelsData);
  }, [data, setTimeLabels]);

  // The finished chart object which uses the local state for data
  const chartData = {
    labels: timeLabels,
    datasets: [
      {
        label: 'price',
        data: priceLabels,
        borderColor: 'red',
        pointBackgroundColor: 'transparent',
        pointBorderColor: 'transparent',
      },
    ],
  };

  return (
    <div className={styles['container']}>
      {timeLabels && priceLabels && (
        <Line height={'100%'} width={'100%'} data={chartData} />
      )}
    </div>
  );
};

export default CoinChart;
