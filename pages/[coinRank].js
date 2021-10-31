import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getCoinData } from '../helpers/data-fetchers';

import ErrorPage from './error';
import CoinPage from '../components/CoinPage/CoinPage';

const Coin = () => {
  // Router
  const router = useRouter();
  const { coinRank } = router.query;

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
    <div>
      {responseData && responseData.status === 'success' && (
        <CoinPage coinData={responseData} />
      )}
      {!responseData && (
        <div
          style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Loading...
        </div>
      )}
      {responseData && responseData.status === 'fail' && <ErrorPage />}
    </div>
  );
};

export default Coin;
