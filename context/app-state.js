import { useState } from 'react';
import AppContext from './app-context';

const AppState = props => {
  const [selectedCoin, setSelectedCoin] = useState();
  const [offsetVal, setOffsetVal] = useState(0);

  return (
    <AppContext.Provider
      value={{
        selectedCoin,
        setSelectedCoin,
        offsetVal,
        setOffsetVal,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
