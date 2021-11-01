import { Line } from 'react-chartjs-2';

import styles from './CoinChart.module.scss';

const CoinChart = props => {
  const { historyData } = props;

  const data = 14;

  console.log(historyData);
  return (
    <div>
      <div>Coin Chart</div>
      {/* <Line /> */}
    </div>
  );
};

export default CoinChart;
