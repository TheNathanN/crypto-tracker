import { createContext } from 'react';

let selectedCoin;
let setSelectedCoin;
let offsetVal;
let setOffsetVal;
let newsOffset;
let setNewsOffset;
let showModal;
let setShowModal;
let timePeriod;
let setTimePeriod;

const AppContext = createContext({
  selectedCoin,
  setSelectedCoin,
  offsetVal,
  setOffsetVal,
  newsOffset,
  setNewsOffset,
  showModal,
  setShowModal,
  timePeriod,
  setTimePeriod,
});

export default AppContext;
