import { useEffect, useState, useContext } from 'react';
import PrevNextButtons from '../UI/PrevNextButtons';
import AppContext from '../../context/app-context';

import CoinInfo from './CoinInfo';

import styles from './CoinSection.module.scss';

const CoinSection = () => {
  // Context - Global State
  const { offsetVal } = useContext(AppContext);

  // Local State
  const [coinsData, setCoinsData] = useState();

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
    <div className={styles['container']}>
      <PrevNextButtons />
      {coinsData &&
        coinsData.map(coin => <CoinInfo key={coin.id} coinInfo={coin} />)}
      <PrevNextButtons />
    </div>
  );
};

export default CoinSection;
