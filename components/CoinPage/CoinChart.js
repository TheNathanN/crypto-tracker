import { useEffect, useState } from 'react';
import { formatPrice, createTimeLabels } from '../../helpers/helperFunctions';
import { Line } from 'react-chartjs-2';

import styles from './CoinChart.module.scss';

const CoinChart = props => {
  // Destructure Props
  const { timePeriod, setTimePeriod } = props;
  const data = props?.coinHistory?.history;

  // Local State
  const [timeLabels, setTimeLabels] = useState();
  const [priceLabels, setPriceLabels] = useState();

  // Local Variables
  const timeOptions = ['24h', '7d', '30d', '1y', '5y'];

  // Fetch Data for Chart
  useEffect(() => {
    // Arrays for chart data
    const timeLabelsData = [];
    const priceLabelsData = [];

    // Loop through the data and push it into the arrays above.
    if (data) {
      for (let i = 0; i <= data?.length - 1; i += 7) {
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

  // The finished chart object which uses the local state for data
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
        pointBorderWidth: 20,
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
        <select
          name='time'
          id='time'
          defaultValue={timePeriod}
          onChange={e => setTimePeriod(e.target.value)}
        >
          {timeOptions.map(time => (
            <option value={time} key={time}>
              {time}
            </option>
          ))}
        </select>
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
