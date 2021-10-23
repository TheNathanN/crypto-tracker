import TotalMarketCap from './TotalMarketCap';
import CoinSection from './CoinSection';

import styles from './MainPage.module.scss';

const MainPage = () => {
  return (
    <main className={styles['container']}>
      <TotalMarketCap />
      <CoinSection />
    </main>
  );
};

export default MainPage;
