import { useState } from 'react';
import AppContext from './app-context';

const AppState = props => {
  const [offsetVal, setOffsetVal] = useState(0); // Controls which tokens are fetched from api
  const [searchMode, setSearchMode] = useState(true); // Should be false as default
  const [selectedCoin, setSelectedCoin] = useState();

  return (
    <AppContext.Provider
      value={{
        offsetVal,
        setOffsetVal,
        searchMode,
        setSearchMode,
        selectedCoin,
        setSelectedCoin,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
