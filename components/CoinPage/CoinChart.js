import { useEffect, useState, useContext } from 'react';
import { formatPrice, createTimeLabels } from '../../helpers/helperFunctions';

import AppContext from '../../context/app-context';
import Chart from './Chart';
import ChartHeader from './ChartHeader';

import styles from './CoinChart.module.scss';

const CoinChart = props => {
  // Destructure Props
  const { change, symbol } = props;
  const data = props?.coinHistory?.history;

  // Context / Global State
  const { timePeriod } = useContext(AppContext);

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
    setTimeLabels(timeLabelsData.reverse());
    setPriceLabels(priceLabelsData.reverse());
  }, [data, setTimeLabels]);

  return (
    <div className={styles['container']}>
      <ChartHeader
        symbol={symbol}
        change={change}
        priceLabels={priceLabels}
        priceIsUp={priceIsUp}
        setPriceIsUp={setPriceIsUp}
      />
      <Chart
        timeLabels={timeLabels}
        priceLabels={priceLabels}
        priceIsUp={priceIsUp}
      />
    </div>
  );
};

export default CoinChart;
