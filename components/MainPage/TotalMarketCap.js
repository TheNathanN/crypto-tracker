import { useEffect, useState } from 'react';

import styles from './TotalMarketCap.module.scss';

const TotalMarketCap = () => {
  // Local State
  const [totalMarket, setTotalMarket] = useState();

  //Local Variables
  const HOST_KEY = process.env.COINRANK_HOST;
  const API_KEY = process.env.COINRANK_KEY;

  useEffect(() => {
    // Fetch the Stats Data
    const getStats = async () => {
      const response = await fetch(
        'https://coinranking1.p.rapidapi.com/stats',
        {
          method: 'GET',
          headers: {
            'x-rapidapi-host': HOST_KEY,
            'x-rapidapi-key': API_KEY,
          },
        }
      );

      // Set Stats Data State
      const resData = await response.json();
      const { totalMarketCap } = await resData.data;
      setTotalMarket(await totalMarketCap);
    };

    // Call the Function to Fetch Data
    try {
      getStats();
    } catch (e) {
      console.log(e);
    }
  }, [setTotalMarket]);
  return (
    <section className={styles['market-cap']}>
      <p>Total Market Cap</p>
      {!totalMarket && <p></p>}
      {totalMarket && <p>{`$${Math.round(totalMarket).toLocaleString()}`}</p>}
    </section>
  );
};

export default TotalMarketCap;
