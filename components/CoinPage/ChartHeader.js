import { useContext, useEffect, useState } from 'react';
import { formatTicker } from '../../helpers/helperFunctions';

import AppContext from '../../context/app-context';

import styles from './ChartHeader.module.scss';

const ChartHeader = props => {
  // Destructure Props
  const { symbol, change, priceLabels, priceIsUp, setPriceIsUp } = props;

  // Context / Global State
  const { setShowModal, timePeriod } = useContext(AppContext);

  // Local State
  const [currentChange, setCurrentChange] = useState('NaN');

  useEffect(() => {
    // Function to get the last index of priceLabels
    const getLastIndex = array => array.length - 1;

    // Check if priceIsUp by comparing the first and last price labels

    if (priceLabels && priceLabels.length > 0) {
      if (
        Number(priceLabels[0]) < Number(priceLabels[getLastIndex(priceLabels)])
      ) {
        setPriceIsUp(true);
      } else {
        setPriceIsUp(false);
      }
    }

    // Set the % change between first and last price labels
    if (priceLabels && timePeriod !== '24h') {
      const currentPriceDiff =
        priceLabels[getLastIndex(priceLabels)] - priceLabels[0];
      setCurrentChange(((currentPriceDiff / priceLabels[0]) * 100).toFixed(2));
    } else {
      setCurrentChange(change.toFixed(2));
    }
  }, [priceLabels, setPriceIsUp, setCurrentChange, timePeriod]);
  console.log(priceIsUp);

  return (
    <div className={styles['select-container']}>
      <div className={styles['chart-item']}>
        <p className={styles['ticker']}>{formatTicker(symbol)}</p>
      </div>
      <div className={styles['chart-item']}>
        <p style={priceIsUp ? { color: 'green' } : { color: 'red' }}>
          {currentChange === 'NaN'
            ? ' '
            : `${Number(currentChange).toLocaleString()}%`}
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
