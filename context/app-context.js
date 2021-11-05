import { createContext } from 'react';

let selectedCoin;
let setSelectedCoin;
let offsetVal;
let setOffsetVal;
let newsOffset;
let setNewsOffset;
let showModal;
let setShowModal;

const AppContext = createContext({
  selectedCoin,
  setSelectedCoin,
  offsetVal,
  setOffsetVal,
  newsOffset,
  setNewsOffset,
  showModal,
  setShowModal,
});

export default AppContext;
