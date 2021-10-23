import Image from 'next/image';

import styles from './CoinInfo.module.scss';

const CoinInfo = props => {
  const { coinInfo } = props;
  const { rank, name, symbol, price, change, type, iconUrl } = coinInfo;

  return (
    <div className={styles['container']}>
      <div className={styles['rank']}>{rank}</div>
      <div className={styles['image']}>
        <Image src={iconUrl} width={10} height={10} alt={name} />
      </div>
      <div className={styles['name']}>{name}</div>
      <div className={styles['ticker']}>{symbol}</div>
      <div className={styles['change']}>{change}</div>
      <div className={styles['price']}>{`$${price}`}</div>
    </div>
  );
};

export default CoinInfo;
