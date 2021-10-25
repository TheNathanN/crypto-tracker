import NewsInfo from './NewsInfo';

import styles from './NewsSection.module.scss';

// Fetch News Data In Here

const NewsSection = () => {
  return (
    <div className={styles['container']}>
      <NewsInfo />
    </div>
  );
};

export default NewsSection;
