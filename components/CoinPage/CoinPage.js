import { useState, useEffect } from 'react';
import { formatPrice } from '../../helpers/helperFunctions';
import { getCoinHistory } from '../../helpers/data-fetchers';

import CoinChart from './CoinChart';
import Stats from './Stats';

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
    {
      title: 'All Time High',
      data: `$${Number(formatPrice(allTimeHigh.price)).toLocaleString()}`,
    },
    { title: 'Total Supply', data: `${formatNumberStats(totalSupply)}` },
  ];

  return (
    <main className={styles['container']}>
      <div className={styles['title-section']}>
        <h1>{name}</h1>
        <p>{`$${
          formatPrice(price) > 999.99
            ? Number(formatPrice(price)).toLocaleString()
            : formatPrice(price)
        }`}</p>
      </div>
      <CoinChart
        coinHistory={coinHistory}
        currentPrice={price}
        coinName={name}
        timePeriod={timePeriod}
        setTimePeriod={setTimePeriod}
        change={change}
        symbol={symbol}
      />
      <div className={styles['stats-container']}>
        <h2>{name} Stats</h2>
        {stats.map(stat => (
          <Stats stat={stat} key={stat.title} />
        ))}
      </div>
      <div className={styles['details-container']}>
        <h2>{name} Overview</h2>
        <div
          dangerouslySetInnerHTML={{ __html: description }}
          className={styles['description']}
        />
      </div>
      <span className={styles['line']}></span>
    </main>
  );
};

export default CoinPage;
