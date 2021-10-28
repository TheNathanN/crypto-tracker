import styles from './NewsInfo.module.scss';

const NewsInfo = props => {
  // Import Props from NewsSection
  const { articleData } = props;
  const { name } = articleData;

  return (
    <div className={styles['container']}>
      <p>{name}</p>
    </div>
  );
};

export default NewsInfo;
