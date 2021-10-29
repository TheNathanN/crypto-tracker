import { useEffect, useState } from 'react';
import { getNewsData } from '../../helpers/data-fetchers';

import NewsInfo from './NewsInfo';

import styles from './NewsPage.module.scss';

const NewsPage = () => {
  const [newsData, setNewsData] = useState();

  useEffect(() => {
    getNewsData(0, setNewsData);
  }, [getNewsData, setNewsData]);

  console.log(newsData);

  return (
    <div className={styles['container']}>
      <h1>News</h1>
      <div
        className={styles['articles-container']}
        style={{ height: !newsData ? '100vh' : '100%' }}
      >
        {newsData &&
          newsData.map(article => (
            <NewsInfo key={article.name} articleData={article} />
          ))}
      </div>
    </div>
  );
};

export default NewsPage;
