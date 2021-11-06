import { useContext } from 'react';

import AppContext from '../../context/app-context';

import styles from './TimePeriodModal.module.scss';

const TimePeriodModal = () => {
  // Context /Global State
  const { setShowModal } = useContext(AppContext);

  return (
    <div className={styles['container']}>
      <div className={styles['modal']}>Time Period Modal</div>
      <div
        className={styles['background']}
        onClick={() => setShowModal(false)}
      ></div>
    </div>
  );
};

export default TimePeriodModal;
