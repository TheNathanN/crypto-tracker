import { useEffect, useState } from 'react';

import CoinInfo from './CoinInfo';

import styles from './CoinSection.module.scss';

const CoinSection = () => {
  // Local State
  const [coinsData, setCoinsData] = useState();
  const [offsetVal, setOffsetVal] = useState(0);

  useEffect(() => {
    // Fetch Coins Data
    const getCoinsData = async () => {
      const response = await fetch(
        `https://coinranking1.p.rapidapi.com/coins?offset=${offsetVal}`,
        {
          method: 'GET',
          headers: {
            'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
            'x-rapidapi-key':
              '380ff21feemsha9f51c492dcb640p191e08jsne1a7b9ee297e',
          },
        }
      );
      const resData = await response.json();
      const fetchedData = resData.data.coins;
      setCoinsData(fetchedData);
    };

    getCoinsData();
  }, [setCoinsData, offsetVal]);

  console.log(coinsData);

  return (
    <div className={styles['container']}>
      {coinsData &&
        coinsData.map(coin => <CoinInfo key={coin.id} coinInfo={coin} />)}
      {offsetVal > 0 && (
        <button onClick={() => setOffsetVal(offsetVal - 50)}>prev page</button>
      )}
      <button onClick={() => setOffsetVal(offsetVal + 50)}>next page</button>
    </div>
  );
};

export default CoinSection;
