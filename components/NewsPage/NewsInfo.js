import styles from './NewsInfo.module.scss';

const NewsInfo = props => {
  // Import Props from NewsSection
  const { articleData } = props;
  const { title, url } = articleData;

  return (
    <div className={styles['container']}>
      <p>{title}</p>
    </div>
  );
};

export default NewsInfo;
