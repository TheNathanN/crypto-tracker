import { useContext, useEffect } from 'react';
import { formatTicker } from '../../helpers/helperFunctions';

import AppContext from '../../context/app-context';

import styles from './ChartHeader.module.scss';

const ChartHeader = props => {
  // Destructure Props
  const { symbol, change, priceLabels, priceIsUp, setPriceIsUp } = props;

  // Context / Global State
  const { setShowModal, timePeriod } = useContext(AppContext);

  useEffect(() => {
    // Function to get the last index of priceLabels
    const getLastIndex = array => array.length - 1;

    // Check if priceIsUp by comparing the first and last price labels
    if (
      priceLabels &&
      priceLabels[0] < priceLabels[getLastIndex(priceLabels)]
    ) {
      setPriceIsUp(true);
    } else {
      setPriceIsUp(false);
    }
  }, [priceLabels, setPriceIsUp]);

  return (
    <div className={styles['select-container']}>
      <div className={styles['chart-item']}>
        <p className={styles['ticker']}>{formatTicker(symbol)}</p>
      </div>
      <div className={styles['chart-item']}>
        <p style={priceIsUp ? { color: 'green' } : { color: 'red' }}>
          {change}%
        </p>
      </div>
      <div className={styles['chart-item']} onClick={() => setShowModal(true)}>
        <div className={styles['time-period-container']}>
          <p className={styles['time-period']}>{timePeriod}</p>
          <i className='fas fa-angle-down'></i>
        </div>
      </div>
    </div>
  );
};

export default ChartHeader;
