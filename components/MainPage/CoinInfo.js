import Image from 'next/image';
import { useRouter } from 'next/router';

import styles from './CoinInfo.module.scss';

const CoinInfo = props => {
  const router = useRouter();

  // Import Props
  const { coinInfo } = props;
  const { id, rank, name, symbol, price, change, type, iconUrl } = coinInfo;

  // Format Functions
  const formatPrice = price => {
    const number = Number(price);
    let formattedPrice;

    if (number > 0.001) {
      formattedPrice = number.toFixed(2);
    } else {
      formattedPrice = number.toFixed(8);
    }

    return formattedPrice.toLocaleString();
  };

  const formatTicker = ticker => {
    const index = ticker.indexOf('*');
    if (index < 0) {
      return ticker;
    } else {
      return ticker.slice(0, index);
    }
  };

  // onClick Functions

  const clickHandler = () => {
    router.push(`/${id}`);
  };

  return (
    <div className={styles['container']} onClick={clickHandler}>
      <section className={styles['coin-info']}>
        <div className={styles['rank']}>{rank}</div>
        <div className={styles['image']}>
          <Image src={iconUrl} width={10} height={10} alt={name} />
        </div>
        <div className={styles['name']}>{name}</div>
        <div className={styles['ticker']}>{formatTicker(symbol)}</div>
      </section>
      <section className={styles['price-info']}>
        {change < 0 && <div className={styles['down']}>{change}%</div>}
        {change >= 0 && <div className={styles['up']}>{change}%</div>}
        <div className={styles['price']}>{`$${formatPrice(price)}`}</div>
      </section>
    </div>
  );
};

export default CoinInfo;
