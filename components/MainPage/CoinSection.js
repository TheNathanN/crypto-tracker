import { useEffect, useState } from 'react';

import CoinInfo from './CoinInfo';

import styles from './CoinSection.module.scss';

const CoinSection = () => {
  useEffect(() => {}, []);

  return (
    <div className={styles['container']}>
      <CoinInfo coinName='bitcoin' />
    </div>
  );
};

export default CoinSection;
