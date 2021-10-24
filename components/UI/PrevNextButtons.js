import styles from './PrevNextButtons.module.scss';

const PrevNextButtons = props => {
  // Import Props
  const { offsetVal, setOffsetVal } = props;

  return (
    <div className={styles['buttons-container']}>
      <div className={styles['buttons-box']}>
        {offsetVal > 0 && (
          <>
            <button onClick={() => setOffsetVal(offsetVal - 50)}>
              <i className='fas fa-chevron-left'></i>
            </button>
            <button onClick={() => setOffsetVal(offsetVal + 50)}>
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
            onClick={() => setOffsetVal(offsetVal + 50)}
          >
            <i className='fas fa-chevron-right'></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default PrevNextButtons;
