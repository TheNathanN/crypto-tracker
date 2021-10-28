import { useContext } from 'react';

import AppContext from '../context/app-context';
import MainPage from '../components/MainPage/MainPage';
import SearchSection from '../components/SearchComponents/SearchSection';

const Home = () => {
  const { searchMode } = useContext(AppContext);

  return (
    <div
      style={{
        overflow: searchMode ? 'hidden' : 'scroll',
        height: searchMode ? '95vh' : '100%',
      }}
    >
      {searchMode && <SearchSection />}
      <MainPage />
    </div>
  );
};

export default Home;
