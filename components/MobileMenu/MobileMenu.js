import { useContext } from 'react';
import { useRouter } from 'next/router';

import AppContext from '../../context/app-context';

import styles from './MobileMenu.module.scss';

const MobileMenu = () => {
  // Context / Global State
  const { setOffsetVal } = useContext(AppContext);

  // Router
  const router = useRouter();
  const newsRoute = 'news';

  // onClick Handlers
  const onClickHandler = route => {
    router.push(route);
  };
  const onHomeHandler = () => {
    setOffsetVal(0);
    onClickHandler('/');
  };

  return (
    <div className={styles['container']}>
      <i
        className='fas fa-newspaper'
        onClick={() => onClickHandler(newsRoute)}
      ></i>
      <i className='fas fa-home' onClick={onHomeHandler}></i>
      <i className='fas fa-calculator'></i>
    </div>
  );
};

export default MobileMenu;
