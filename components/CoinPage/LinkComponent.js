import styles from './LinkComponent.module.scss';

const LinkComponent = props => {
  // Destructure Props
  const { url } = props;

  return (
    <div className={styles['container']}>
      <div></div>
    </div>
  );
};

export default LinkComponent;
