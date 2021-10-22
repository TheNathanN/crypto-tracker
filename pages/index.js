import styles from '../styles/Home.module.scss';

import MainPage from '../components/MainPage/MainPage';

const Home = () => {
  return (
    <div className={styles['container']}>
      <MainPage />
    </div>
  );
};

export default Home;
