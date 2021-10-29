import { useContext } from 'react';
import { useRouter } from 'next/router';

import AppContext from '../../context/app-context';

import styles from './MobileMenu.module.scss';

const MobileMenu = () => {
  // Context / Global State
  const { setOffsetVal, setNewsOffset } = useContext(AppContext);

  // Router
  const router = useRouter();
  const homeRoute = '/';
  const newsRoute = '/news';
  const calcRoute = '/calc';

  // onClick Handlers
  const onClickHandler = route => {
    setOffsetVal(0);
    setNewsOffset(0);
    router.push(route);
  };

  return (
    <div className={styles['container']}>
      <i
        className='fas fa-newspaper'
        onClick={() => onClickHandler(newsRoute)}
      ></i>
      <i className='fas fa-home' onClick={() => onClickHandler(homeRoute)}></i>
      <i
        className='fas fa-calculator'
        onClick={() => onClickHandler(calcRoute)}
      ></i>
    </div>
  );
};

export default MobileMenu;
