import { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { getCoinData } from '../helpers/data-fetchers';

import AppContext from '../context/app-context';
import ErrorPage from './error';
import CoinPage from '../components/CoinPage/CoinPage';
import MobileMenu from '../components/MobileMenu/MobileMenu';

import styles from '../styles/coinRank.module.scss';
import TimePeriodModal from '../components/CoinPage/TimePeriodModal';

const Coin = () => {
  // Router
  const router = useRouter();
  const { coinId } = router.query;

  // Context / Global State
  const { showModal } = useContext(AppContext);

  // Local State
  const [responseData, setResponseData] = useState();

  // Fetch Coin Data
  useEffect(() => {
    try {
      getCoinData(coinId, setResponseData);
    } catch (error) {
      console.log(error);
    }

    return () => {
      setResponseData();
    };
  }, [getCoinData, coinId, setResponseData]);

  return (
    <div
      style={
        showModal
          ? { height: '100vh', overflow: 'hidden', position: 'relative' }
          : { width: '100%' }
      }
    >
      {showModal && <TimePeriodModal />}
      {!responseData && <div className={styles['loading']}>Loading...</div>}
      {responseData && responseData.status === 'success' && (
        <CoinPage coinData={responseData} />
      )}
      {responseData && responseData.status === 'fail' && <ErrorPage />}
      <MobileMenu />
    </div>
  );
};

export default Coin;
