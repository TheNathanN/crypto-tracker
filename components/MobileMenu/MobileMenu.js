import { useContext } from 'react';
import { useRouter } from 'next/router';

import AppContext from '../../context/app-context';

import styles from './MobileMenu.module.scss';

const MobileMenu = () => {
  // Context / Global State
  const { setOffsetVal, setNewsOffset, setShowModal } = useContext(AppContext);

  // Router
  const router = useRouter();
  const homeRoute = '/';
  const newsRoute = '/news';

  // onClick Handlers
  const onClickHandler = route => {
    setOffsetVal(0);
    setNewsOffset(0);
    router.push(route);
    setShowModal(false);
  };

  return (
    <div className={styles['container']}>
      <i className='fas fa-home' onClick={() => onClickHandler(homeRoute)}></i>
      <i
        className='fas fa-newspaper'
        onClick={() => onClickHandler(newsRoute)}
      ></i>
    </div>
  );
};

export default MobileMenu;
