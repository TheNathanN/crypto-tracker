import { useContext } from 'react';

import AppContext from '../../context/app-context';

import styles from './TimePeriodModal.module.scss';

const TimePeriodModal = () => {
  // Context / Global State
  const { setShowModal, timePeriod, setTimePeriod } = useContext(AppContext);

  // Time period options
  const timePeriodOptions = ['24h', '7d', '30d', '1y', '5y'];

  // Click Handeler
  const selectHandler = option => {
    setTimePeriod(option);
    setShowModal(false);
  };

  return (
    <div className={styles['container']}>
      <div className={styles['modal-container']}>
        <div className={styles['modal']}>
          {timePeriodOptions.map(option => (
            <div
              key={option}
              onClick={() => selectHandler(option)}
              className={styles['options']}
              style={
                timePeriod === option
                  ? { borderBottom: '1px solid black' }
                  : { borderBottom: 'none' }
              }
            >
              {option}
            </div>
          ))}
        </div>
      </div>
      <div
        className={styles['background']}
        onClick={() => setShowModal(false)}
      ></div>
    </div>
  );
};

export default TimePeriodModal;
