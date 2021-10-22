import { useEffect } from 'react';

import styles from './MainPage.module.scss';

const MainPage = () => {
  return (
    <main>
      <div className={styles['market-cap']}>
        <p>Total Market Cap</p>
        <p>$2,000,000,000</p>
      </div>
    </main>
  );
};

export default MainPage;
