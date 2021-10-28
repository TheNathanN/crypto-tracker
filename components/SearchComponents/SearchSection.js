import { useContext, useState, useEffect } from 'react';
import AppContext from '../../context/app-context';

import SearchResult from './SearchResult';

import styles from './SearchSection.module.scss';

const SearchSection = () => {
  // Context / Global State
  const { setSearchMode, setSelectedCoin } = useContext(AppContext);

  // Local State
  const [searchInput, setSearchInput] = useState('');
  const [coinsData, setCoinsData] = useState();
  const [totalCoinCount, setTotalCoinCount] = useState();

  //Local Variables
  const HOST_KEY = process.env.COINRANK_HOST;
  const API_KEY = process.env.COINRANK_KEY;

  useEffect(() => {
    // Fetch Total Coin Count
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
      const { totalCoins } = await resData.data;
      setTotalCoinCount(await totalCoins);
    };

    // Fetch Coins Data
    const getCoinsData = async () => {
      const response = await fetch(
        `https://coinranking1.p.rapidapi.com/coins?limit=100`,
        {
          method: 'GET',
          headers: {
            'x-rapidapi-host': HOST_KEY,
            'x-rapidapi-key': API_KEY,
          },
        }
      );
      const resData = await response.json();
      const fetchedData = await resData.data;
      setCoinsData(await fetchedData);
    };

    try {
      getStats();
      getCoinsData(totalCoinCount);
    } catch (e) {
      console.log(e);
    }
  }, [setCoinsData, setTotalCoinCount]);

  console.log(coinsData);

  return (
    <section className={styles['container']}>
      <input
        type='text'
        placeholder={'Enter Token'}
        value={searchInput}
        onChange={e => setSearchInput(e.target.value)}
      />
      <div className={styles['results-container']}>
        <SearchResult />
      </div>
    </section>
  );
};

export default SearchSection;
