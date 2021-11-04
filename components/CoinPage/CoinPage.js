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
    volume,
    allTimeHigh,
    links,
  } = coin;

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

  // Function that formats the stats below
  const formatNumberStats = stat => {
    return Number(stat).toLocaleString();
  };

  // Create stats object for mapping through the stats component
  const stats = [
    { title: 'Rank', data: rank },
    { title: 'Market Cap', data: `$${formatNumberStats(marketCap)}` },
    { title: 'Volume', data: `$${formatNumberStats(volume)}` },
    { title: 'Total Supply', data: `${formatNumberStats(totalSupply)}` },
    { title: 'All Time High', data: `$${formatNumberStats(allTimeHigh)}` },
  ];

  return (
    <main className={styles['container']}>
      <h1>{name}</h1>
      <p className={styles['price']}>{`$${formatPrice(price)}`}</p>
      <CoinChart
        coinHistory={coinHistory}
        currentPrice={price}
        coinName={name}
        timePeriod={timePeriod}
        setTimePeriod={setTimePeriod}
        change={change}
      />
      <div className={styles['stats']}>
        {/* Create Stats Component HERE!!!*/}
      </div>
      <div className={styles['details-container']}>
        <h2>{name} Details</h2>
        <div
          dangerouslySetInnerHTML={{ __html: description }}
          className={styles['description']}
        />
      </div>
    </main>
  );
};

export default CoinPage;
