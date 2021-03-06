import { useState, useEffect, useContext } from 'react';
import { formatPrice } from '../../helpers/helperFunctions';
import { getCoinHistory } from '../../helpers/data-fetchers';

import AppContext from '../../context/app-context';
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
    uuid,
    symbol,
    marketCap,
    change,
    price,
    rank,
    description,
    supply,
    allTimeHigh,
  } = coin;

  // Context / Global State
  const { timePeriod } = useContext(AppContext);

  // Local State
  const [coinHistory, setCoinHistory] = useState();

  // Fetch Coin History
  useEffect(() => {
    try {
      getCoinHistory(uuid, timePeriod, setCoinHistory);
    } catch (error) {
      console.log(error);
    }

    return () => setCoinHistory();
  }, [getCoinHistory, uuid, timePeriod, setCoinHistory]);

  // Function that formats the stats below
  const formatNumberStats = stat => {
    return Number(stat).toLocaleString();
  };

  // Create stats object for mapping through the stats component
  const stats = [
    { title: 'Rank', data: rank },
    { title: 'Market Cap', data: `$${formatNumberStats(marketCap)}` },
    { title: 'Volume', data: `$${formatNumberStats(coin['24hVolume'])}` },
    {
      title: 'All Time High',
      data: `$${formatNumberStats(formatPrice(allTimeHigh.price))}`,
    },
    {
      title: 'Total Supply',
      data: `${formatNumberStats(Number(supply.total).toFixed(0))}`,
    },
  ];

  return (
    <main className={styles['container']}>
      <div className={styles['section-container']}>
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
          change={+change}
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
      </div>
    </main>
  );
};

export default CoinPage;
