import { useEffect, useState } from 'react';

import styles from './TotalMarketCap.module.scss';

const TotalMarketCap = () => {
  // Local State
  const [totalMarket, setTotalMarket] = useState();

  useEffect(() => {
    // Fetch the Stats Data
    const getStats = async () => {
      const response = await fetch(
        'https://coinranking1.p.rapidapi.com/stats',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
            'x-rapidapi-key':
              '380ff21feemsha9f51c492dcb640p191e08jsne1a7b9ee297e',
          },
        }
      );

      // Set Stats Data State
      const resData = await response.json();
      const { totalMarketCap } = resData.data;
      setTotalMarket(totalMarketCap);
    };

    // Call the Function to Fetch Data
    try {
      getStats();
    } catch (e) {
      console.log(e);
    }
  }, [setTotalMarket]);
  return (
    <div className={styles['market-cap']}>
      <p>Total Market Cap</p>
      {!totalMarket && <p></p>}
      {totalMarket && <p>{`$${Math.round(totalMarket).toLocaleString()}`}</p>}
    </div>
  );
};

export default TotalMarketCap;
