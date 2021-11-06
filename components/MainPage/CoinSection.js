import { useEffect, useState, useContext } from 'react';
import PrevNextButtons from '../UI/PrevNextButtons';
import AppContext from '../../context/app-context';
import { getCoinsData } from '../../helpers/data-fetchers';

import CoinInfo from './CoinInfo';

import styles from './CoinSection.module.scss';

const CoinSection = () => {
  // Context - Global State
  const { offsetVal, setTimePeriod } = useContext(AppContext);

  // Local State
  const [coinsData, setCoinsData] = useState();

  // Fetch Data
  useEffect(() => {
    setTimePeriod('24h');

    const _END_POINT = 'offset';

    try {
      getCoinsData(_END_POINT, offsetVal, setCoinsData);
    } catch (error) {
      console.log(error);
    }

    return () => setCoinsData();
  }, [getCoinsData, offsetVal]);

  return (
    <>
      <PrevNextButtons />
      <section
        className={styles['container']}
        style={{ height: !coinsData ? '100vh' : '100%' }}
      >
        {coinsData &&
          coinsData.map(coin => <CoinInfo key={coin.id} coinInfo={coin} />)}
      </section>
      <PrevNextButtons />
    </>
  );
};

export default CoinSection;
