import { useEffect, useState, useContext } from 'react';
import PrevNextButtons from '../UI/PrevNextButtons';
import AppContext from '../../context/app-context';
import { getCoinsData } from '../../helpers/data-fetchers';

import CoinInfo from './CoinInfo';

import styles from './CoinSection.module.scss';

const CoinSection = () => {
  // Context - Global State
  const { offsetVal } = useContext(AppContext);

  // Local State
  const [coinsData, setCoinsData] = useState();

  // //Local Variables
  const _END_POINT = 'offset';

  useEffect(() => {
    try {
      getCoinsData(_END_POINT, offsetVal, setCoinsData);
    } catch (error) {
      console.log(error);
    }
  }, [getCoinsData, offsetVal, _END_POINT]);

  return (
    <section className={styles['container']}>
      <PrevNextButtons />
      {coinsData &&
        coinsData.map(coin => <CoinInfo key={coin.id} coinInfo={coin} />)}
      <PrevNextButtons />
    </section>
  );
};

export default CoinSection;
