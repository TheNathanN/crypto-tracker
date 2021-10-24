import { createContext } from 'react';

let selectedCoin;
let setSelectedCoin;
let offsetVal;
let setOffsetVal;

const AppContext = createContext({
  selectedCoin,
  setSelectedCoin,
  offsetVal,
  setOffsetVal,
});

export default AppContext;
