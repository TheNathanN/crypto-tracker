import { useContext } from 'react';

import AppContext from '../context/app-context';
import MainPage from '../components/MainPage/MainPage';
import SearchSection from '../components/SearchComponents/SearchSection';
import MobileMenu from '../components/MobileMenu/MobileMenu';

const Home = () => {
  return (
    <div>
      <MainPage />
      <MobileMenu />
    </div>
  );
};

export default Home;
