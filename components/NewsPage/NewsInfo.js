import Image from 'next/image';

import styles from './NewsInfo.module.scss';

const NewsInfo = props => {
  // Import Props from NewsSection
  const { articleData } = props;
  const { name, image, url, datePublished } = articleData;
  const { contentUrl } = image.thumbnail;

  return (
    <div className={styles['container']}>
      <Image src={contentUrl} alt={name} width={110} height={110} />
      <p>{name}</p>
    </div>
  );
};

export default NewsInfo;
