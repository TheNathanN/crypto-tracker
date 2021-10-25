import NewsSection from './NewsSection';

import styles from './NewsPage.module.scss';

const NewsPage = () => {
  return (
    <div className={styles['container']}>
      <h1>News</h1>
      <NewsSection />
    </div>
  );
};

export default NewsPage;
