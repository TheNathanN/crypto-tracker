import TotalMarketCap from './TotalMarketCap';
import CoinInfo from './CoinInfo';

import styles from './MainPage.module.scss';

const MainPage = () => {
  return (
    <main className={styles['container']}>
      <TotalMarketCap />
      <CoinInfo />
    </main>
  );
};

export default MainPage;
