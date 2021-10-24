import styles from '../styles/Home.module.scss';

import MainPage from '../components/MainPage/MainPage';
import MobileMenu from '../components/MobileMenu/MobileMenu';

const Home = () => {
  return (
    <div className={styles['container']}>
      <MainPage />
      <MobileMenu />
    </div>
  );
};

export default Home;
