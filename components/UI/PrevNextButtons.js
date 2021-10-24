import { useContext } from 'react';

import AppContext from '../../context/app-context';

import styles from './PrevNextButtons.module.scss';

const PrevNextButtons = () => {
  // Import Props
  const { offsetVal, setOffsetVal } = useContext(AppContext);

  const prevHandler = () => {
    setOffsetVal(offsetVal - 50);
    window.scrollTo(0, 0);
  };

  const nextHandler = () => {
    setOffsetVal(offsetVal + 50);
    window.scrollTo(0, 0);
  };

  return (
    <div className={styles['container']}>
      <div className={styles['buttons-box']}>
        {offsetVal > 0 && (
          <>
            <button onClick={prevHandler}>
              <i className='fas fa-chevron-left'></i>
            </button>
            <button onClick={nextHandler}>
              <i className='fas fa-chevron-right'></i>
            </button>
          </>
        )}
        {offsetVal <= 0 && (
          <button
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-end',
            }}
            onClick={nextHandler}
          >
            <i className='fas fa-chevron-right'></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default PrevNextButtons;
