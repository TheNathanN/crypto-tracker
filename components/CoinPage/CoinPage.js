import { Line } from 'react-chartjs-2';

import styles from './CoinPage.module.scss';

const CoinPage = props => {
  // Destructure Props / Data
  const { coinData } = props;
  const { data } = coinData;
  const { coin } = data;
  const {
    name,
    symbol,
    marketCap,
    change,
    price,
    rank,
    description,
    totalSupply,
    history,
    volume,
    allTimeHigh,
    links,
  } = coin;

  console.log(coin);
  return (
    <main className={styles['container']}>
      <h1>{name}</h1>
    </main>
  );
};

export default CoinPage;
