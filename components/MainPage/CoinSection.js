import { useEffect, useState } from 'react';

import CoinInfo from './CoinInfo';

import styles from './CoinSection.module.scss';

const CoinSection = () => {
  // Local State
  const [coinsData, setCoinsData] = useState();
  const [offsetVal, setOffsetVal] = useState(0);

  //Local Variables
  const HOST_KEY = process.env.COINRANK_HOST;
  const API_KEY = process.env.COINRANK_KEY;

  useEffect(() => {
    // Fetch Coins Data
    const getCoinsData = async () => {
      const response = await fetch(
        `https://coinranking1.p.rapidapi.com/coins?offset=${offsetVal}`,
        {
          method: 'GET',
          headers: {
            'x-rapidapi-host': HOST_KEY,
            'x-rapidapi-key': API_KEY,
          },
        }
      );
      const resData = await response.json();
      const fetchedData = resData.data.coins;
      setCoinsData(fetchedData);
    };

    getCoinsData();
  }, [setCoinsData, offsetVal]);

  return (
    <section className={styles['container']}>
      {coinsData &&
        coinsData.map(coin => <CoinInfo key={coin.id} coinInfo={coin} />)}
      <div className={styles['buttons-container']}>
        <div className={styles['buttons-box']}>
          {offsetVal > 0 && (
            <>
              <button onClick={() => setOffsetVal(offsetVal - 50)}>
                <i className='fas fa-chevron-left'></i>
              </button>
              <button onClick={() => setOffsetVal(offsetVal + 50)}>
                <i className='fas fa-chevron-right'></i>
              </button>
            </>
          )}
          {offsetVal <= 0 && (
            <button
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-end',
              }}
              onClick={() => setOffsetVal(offsetVal + 50)}
            >
              <i className='fas fa-chevron-right'></i>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default CoinSection;
