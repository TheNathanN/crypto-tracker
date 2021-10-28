import { useEffect, useState } from 'react';
import { getStats } from '../../helpers/data-fetchers';

import styles from './TotalMarketCap.module.scss';

const TotalMarketCap = () => {
  // Local State
  const [totalMarket, setTotalMarket] = useState();

  // Fetch Data
  useEffect(() => {
    try {
      getStats(setTotalMarket, '_MARKET_CAP'); //
    } catch (error) {
      console.log(error);
    }
  }, [getStats, setTotalMarket]);

  return (
    <section className={styles['market-cap']}>
      <p>Total Market Cap</p>
      {!totalMarket && <p></p>}
      {totalMarket && <p>{`$${Math.round(totalMarket).toLocaleString()}`}</p>}
    </section>
  );
};

export default TotalMarketCap;
