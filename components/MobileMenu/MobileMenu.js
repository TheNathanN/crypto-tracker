import styles from './MobileMenu.module.scss';

const MobileMenu = () => {
  return (
    <div className={styles['container']}>
      <i className='fas fa-newspaper'></i>
      <i className='fas fa-home'></i>
      <i className='fas fa-calculator'></i>
    </div>
  );
};

export default MobileMenu;
