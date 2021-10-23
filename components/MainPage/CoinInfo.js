import styles from './CoinInfo.module.scss';

const CoinInfo = props => {
  const { coinName } = props;
  return (
    <div className={styles['container']}>
      <div>{coinName}</div>
    </div>
  );
};

export default CoinInfo;
