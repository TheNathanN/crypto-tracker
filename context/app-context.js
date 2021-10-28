import { createContext } from 'react';

let offsetVal;
let setOffsetVal;
let searchMode;
let setSearchMode;
let selectedCoin;
let setSelectedCoin;

const AppContext = createContext({
  offsetVal,
  setOffsetVal,
  searchMode,
  setSearchMode,
  selectedCoin,
  setSelectedCoin,
});

export default AppContext;
