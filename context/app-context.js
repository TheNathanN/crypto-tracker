import { createContext } from 'react';

let selectedCoin;
let setSelectedCoin;

const AppContext = createContext({
  selectedCoin,
  setSelectedCoin,
});

export default AppContext;
