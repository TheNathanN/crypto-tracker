import { useContext } from 'react';
import { useRouter } from 'next/router';

import AppContext from '../../context/app-context';

import styles from './MobileMenu.module.scss';

const MobileMenu = () => {
  // Context / Global State
  const { setOffsetVal } = useContext(AppContext);

  // Router
  const router = useRouter();

  // Functions
  const onHomeClick = () => {
    setOffsetVal(0);
    router.push('/');
  };

  return (
    <div className={styles['container']}>
      <i className='fas fa-newspaper'></i>
      <i className='fas fa-home' onClick={onHomeClick}></i>
      <i className='fas fa-calculator'></i>
    </div>
  );
};

export default MobileMenu;
