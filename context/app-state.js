import { useState, useEffect } from 'react';
import AppContext from './app-context';
import { getStats } from '../helpers/data-fetchers';

const AppState = props => {
  const [offsetVal, setOffsetVal] = useState(0); // Controls which tokens are fetched from api
  const [searchMode, setSearchMode] = useState(false); // Should be false as default
  const [selectedCoin, setSelectedCoin] = useState();
  const [totalCoinCount, setTotalCoinCount] = useState();

  useEffect(() => {
    try {
      getStats(setTotalCoinCount, '_TOTAL_COINS');
    } catch (error) {
      console.log(error);
    }
  }, [setTotalCoinCount]);

  return (
    <AppContext.Provider
      value={{
        offsetVal,
        setOffsetVal,
        searchMode,
        setSearchMode,
        selectedCoin,
        setSelectedCoin,
        totalCoinCount,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
