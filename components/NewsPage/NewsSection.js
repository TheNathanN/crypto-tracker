import { useEffect, useState } from 'react';
import NewsInfo from './NewsInfo';

import styles from './NewsSection.module.scss';

const NewsSection = () => {
  // Local State
  const [newsData, setNewsData] = useState();

  //Local Variables
  const HOST_KEY = process.env.CRYPTONEWS_HOST;
  const API_KEY = process.env.COINRANK_KEY;

  // Fetch News Data
  useEffect(() => {
    const fetchNews = async () => {
      setNewsData();
      const response = await fetch(
        'https://get-crypto-news-from-different-sources.p.rapidapi.com/CoinDCX',
        {
          method: 'GET',
          headers: {
            'x-rapidapi-host': HOST_KEY,
            'x-rapidapi-key': API_KEY,
          },
        }
      );
      const resData = await response.json();
      setNewsData(resData);
    };

    // Call the Fetch Function
    fetchNews();
  }, [setNewsData]);

  console.log(newsData);

  return (
    <div className={styles['container']}>
      {newsData &&
        newsData.map(article => (
          <NewsInfo key={article.title} articleData={article} />
        ))}
    </div>
  );
};

export default NewsSection;
