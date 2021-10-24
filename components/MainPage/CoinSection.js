import { useEffect, useState } from 'react';

import CoinInfo from './CoinInfo';
import PrevNextButtons from '../UI/PrevNextButtons';

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
      <PrevNextButtons offsetVal={offsetVal} setOffsetVal={setOffsetVal} />
      {coinsData &&
        coinsData.map(coin => <CoinInfo key={coin.id} coinInfo={coin} />)}
      <PrevNextButtons offsetVal={offsetVal} setOffsetVal={setOffsetVal} />
    </section>
  );
};

export default CoinSection;
