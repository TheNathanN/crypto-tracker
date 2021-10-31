import { useState } from 'react';
import AppContext from './app-context';
import { getStats } from '../helpers/data-fetchers';

const AppState = props => {
  const [searchMode, setSearchMode] = useState(false); // Should be false as default
  const [offsetVal, setOffsetVal] = useState(0); // Changes the page of the main page
  const [newsOffset, setNewsOffset] = useState(0);

  return (
    <AppContext.Provider
      value={{
        searchMode,
        setSearchMode,
        offsetVal,
        setOffsetVal,
        newsOffset,
        setNewsOffset,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
