import { createContext } from 'react';

let offsetVal;
let setOffsetVal;
let searchMode;
let setSearchMode;
let selectedCoin;
let setSelectedCoin;
let totalCoinCount;

const AppContext = createContext({
  offsetVal,
  setOffsetVal,
  searchMode,
  setSearchMode,
  selectedCoin,
  setSelectedCoin,
  totalCoinCount,
});

export default AppContext;
