import { useState } from 'react';
import AppContext from './app-context';

const AppState = props => {
  const [selectedCoin, setSelectedCoin] = useState();

  return (
    <AppContext.Provider
      value={{
        selectedCoin,
        setSelectedCoin,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
