import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  formatPrice,
  createTimeLabels,
  formatTicker,
} from '../../helpers/helperFunctions';

import styles from './CoinChart.module.scss';

const CoinChart = props => {
  // Destructure Props
  const { timePeriod, setTimePeriod, change, symbol } = props;
  const data = props?.coinHistory?.history;

  // Local State
  const [timeLabels, setTimeLabels] = useState();
  const [priceLabels, setPriceLabels] = useState();
  const [priceIsUp, setPriceIsUp] = useState();

  // Fetch Data for Chart
  useEffect(() => {
    // Arrays for chart data
    const timeLabelsData = [];
    const priceLabelsData = [];

    // Loop through the data and push the data into the arrays above.
    if (data) {
      for (let i = 0; i <= data?.length - 1; i += 1) {
        const timeData = data[i]?.timestamp;
        const priceData = data[i]?.price;
        if (timeData) {
          timeLabelsData.push(createTimeLabels(timeData, timePeriod));
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

  // The finished chart data
  const chartData = {
    labels: timeLabels,
    datasets: [
      {
        label: 'price/USD',
        data: priceLabels,
        borderColor: 'red',
        pointBackgroundColor: 'transparent',
        pointBorderColor: 'transparent',
        pointHoverBackgroundColor: 'red',
        pointHoverBorderColor: 'red',
        pointBorderWidth: 10,
      },
    ],
  };

  const chartOptions = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        ticks: {
          color: 'white',
        },
        grid: {
          borderColor: 'white',
          color: 'grey',
        },
      },
      x: {
        ticks: {
          color: 'white',
        },
        grid: {
          borderColor: 'white',
          color: 'grey',
        },
      },
    },
  };

  return (
    <div className={styles['container']}>
      <div className={styles['select-container']}>
        <div className={styles['chart-item']}>
          <p>{formatTicker(symbol)}</p>
        </div>
        <div className={styles['chart-item-change']}>
          {priceIsUp && <i className='fas fa-chevron-up'></i>}
          {!priceIsUp && <i className='fas fa-chevron-down'></i>}
          <p>{change}%</p>
        </div>
        <div className={styles['chart-item']}>
          <p>{timePeriod}</p>
          <i className='fas fa-angle-down'></i>
        </div>
      </div>
      <div className={styles['chart-container']}>
        {timeLabels && priceLabels && (
          <Line data={chartData} options={chartOptions} />
        )}
      </div>
    </div>
  );
};

export default CoinChart;
