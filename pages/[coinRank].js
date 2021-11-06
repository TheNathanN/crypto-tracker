import { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { getCoinData } from '../helpers/data-fetchers';

import AppContext from '../context/app-context';
import ErrorPage from './error';
import CoinPage from '../components/CoinPage/CoinPage';

import styles from '../styles/coinRank.module.scss';
import TimePeriodModal from '../components/CoinPage/TimePeriodModal';

const Coin = () => {
  // Router
  const router = useRouter();
  const { coinRank } = router.query;

  // Context / Global State
  const { showModal } = useContext(AppContext);

  // Local State
  const [responseData, setResponseData] = useState();

  // Fetch Coin Data
  useEffect(() => {
    try {
      getCoinData(coinRank, setResponseData);
    } catch (error) {
      console.log(error);
    }

    return () => {
      setResponseData();
    };
  }, [getCoinData, coinRank, setResponseData]);

  return (
    <>
      <div
        style={
          showModal
            ? { height: '100vh', overflow: 'hidden', position: 'relative' }
            : { width: '100%' }
        }
      >
        {!responseData && <div className={styles['loading']}>Loading...</div>}
        {showModal && <TimePeriodModal />}
        {responseData && responseData.status === 'success' && (
          <CoinPage coinData={responseData} />
        )}
        {responseData && responseData.status === 'fail' && <ErrorPage />}
      </div>
    </>
  );
};

export default Coin;
