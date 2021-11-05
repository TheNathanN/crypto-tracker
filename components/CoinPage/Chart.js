import { Line } from 'react-chartjs-2';

import styles from './Chart.module.scss';

const Chart = props => {
  // Destructure Props
  const { priceLabels, timeLabels, priceIsUp } = props;

  // The finished chart data
  const chartDataDown = {
    labels: timeLabels,
    datasets: [
      {
        label: 'price/USD',
        data: priceLabels,
        pointBackgroundColor: 'transparent',
        pointBorderColor: 'transparent',
        borderColor: 'red',
        pointHoverBackgroundColor: 'red',
        pointHoverBorderColor: 'red',
        pointBorderWidth: 10,
      },
    ],
  };

  const chartDataUp = {
    labels: timeLabels,
    datasets: [
      {
        label: 'price/USD',
        data: priceLabels,
        pointBackgroundColor: 'transparent',
        pointBorderColor: 'transparent',
        borderColor: 'green',
        pointHoverBackgroundColor: 'green',
        pointHoverBorderColor: 'green',
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
    <div className={styles['chart-container']}>
      {timeLabels && priceLabels && (
        <Line
          data={priceIsUp ? chartDataUp : chartDataDown}
          options={chartOptions}
        />
      )}
    </div>
  );
};

export default Chart;
