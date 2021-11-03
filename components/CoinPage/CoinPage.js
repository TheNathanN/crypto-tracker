import { useState, useEffect } from 'react';
import CoinChart from './CoinChart';
import { formatPrice, formatTicker } from '../../helpers/helperFunctions';
import { getCoinHistory } from '../../helpers/data-fetchers';

import styles from './CoinPage.module.scss';

const CoinPage = props => {
  // Destructure Props / Data
  const { coinData } = props;
  const { data } = coinData;
  const { coin } = data;
  const {
    name,
    id,
    symbol,
    marketCap,
    change,
    price,
    rank,
    description,
    totalSupply,
    history,
    volume,
    allTimeHigh,
    links,
  } = coin;

  // Local Variables
  const timeOptions = ['24h', '7d', '30d', '1y', '5y'];

  // Local State
  const [timePeriod, setTimePeriod] = useState('24h');
  const [coinHistory, setCoinHistory] = useState();

  // Fetch Coin History
  useEffect(() => {
    try {
      getCoinHistory(id, timePeriod, setCoinHistory);
    } catch (error) {
      console.log(error);
    }

    return () => setCoinHistory();
  }, [getCoinHistory, id, timePeriod, setCoinHistory]);

  return (
    <main className={styles['container']}>
      <h1>{name}</h1>
      <CoinChart
        coinHistory={coinHistory}
        currentPrice={price}
        coinName={name}
        timePeriod={timePeriod}
        setTimePeriod={setTimePeriod}
      />
    </main>
  );
};

export default CoinPage;
