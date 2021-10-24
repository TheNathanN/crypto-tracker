import Image from 'next/image';

import styles from './CoinInfo.module.scss';

const CoinInfo = props => {
  const { coinInfo } = props;
  const { rank, name, symbol, price, change, type, iconUrl } = coinInfo;

  const formatPrice = price => {
    const number = Number(price);
    let formattedPrice;

    if (number > 0.001) {
      formattedPrice = number.toFixed(2);
    } else {
      formattedPrice = number.toFixed(7);
    }

    return formattedPrice.toLocaleString();
  };

  return (
    <div className={styles['container']}>
      <div className={styles['rank']}>{rank}</div>
      <div className={styles['image']}>
        <Image src={iconUrl} width={10} height={10} alt={name} />
      </div>
      <div className={styles['name']}>{name}</div>
      <div className={styles['ticker']}>{symbol}</div>
      {change < 0 && (
        <div className={(styles['change'], styles['down'])}>{change}%</div>
      )}
      {change >= 0 && (
        <div className={(styles['change'], styles['up'])}>{change}%</div>
      )}
      <div className={styles['price']}>{`$${formatPrice(price)}`}</div>
    </div>
  );
};

export default CoinInfo;
