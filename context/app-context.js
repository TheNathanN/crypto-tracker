import { createContext } from 'react';

let searchMode;
let setSearchMode;
let selectedCoin;
let setSelectedCoin;
let offsetVal;
let setOffsetVal;
let newsOffset;
let setNewsOffset;

const AppContext = createContext({
  searchMode,
  setSearchMode,
  selectedCoin,
  setSelectedCoin,
  offsetVal,
  setOffsetVal,
  newsOffset,
  setNewsOffset,
});

export default AppContext;
