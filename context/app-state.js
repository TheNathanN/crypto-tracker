import { useState } from 'react';
import AppContext from './app-context';

const AppState = props => {
  const [offsetVal, setOffsetVal] = useState(0); // Changes the page of the main page
  const [newsOffset, setNewsOffset] = useState(0); // Changes the page of the news page
  const [showModal, setShowModal] = useState(false);
  const [timePeriod, setTimePeriod] = useState('24h');

  return (
    <AppContext.Provider
      value={{
        offsetVal,
        setOffsetVal,
        newsOffset,
        setNewsOffset,
        showModal,
        setShowModal,
        timePeriod,
        setTimePeriod,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
