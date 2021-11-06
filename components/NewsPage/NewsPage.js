import { useEffect, useState, useContext } from 'react';
import { getNewsData } from '../../helpers/data-fetchers';
import AppContext from '../../context/app-context';

import NewsInfo from './NewsInfo';
import PrevNextButtons from '../UI/PrevNextButtons';

import styles from './NewsPage.module.scss';

const NewsPage = () => {
  // Context / Global State
  const { newsOffset, setTimePeriod } = useContext(AppContext);

  // Local State
  const [newsData, setNewsData] = useState();

  // Fetch Data
  useEffect(() => {
    setTimePeriod('24h');

    try {
      getNewsData(newsOffset, setNewsData);
    } catch (error) {
      console.log(error);
    }

    return () => setNewsData();
  }, [getNewsData, setNewsData, newsOffset]);

  return (
    <div className={styles['container']}>
      <h1>News</h1>
      <PrevNextButtons />
      <div
        className={styles['articles-container']}
        style={{ height: !newsData ? '100vh' : '100%' }}
      >
        {newsData &&
          newsData.map(article => (
            <NewsInfo key={article.name} articleData={article} />
          ))}
      </div>
      <PrevNextButtons />
    </div>
  );
};

export default NewsPage;
