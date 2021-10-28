import { useContext, useState, useEffect } from 'react';
import AppContext from '../../context/app-context';
import { getStats, getCoinsData } from '../../helpers/data-fetchers';

import SearchResult from './SearchResult';

import styles from './SearchSection.module.scss';

const SearchSection = () => {
  // Context / Global State
  const { setSearchMode, setSelectedCoin, totalCoinCount } =
    useContext(AppContext);

  // Local State
  const [searchInput, setSearchInput] = useState('');
  const [coinsData, setCoinsData] = useState();

  useEffect(() => {
    console.log(totalCoinCount);
  }, [totalCoinCount]);

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
