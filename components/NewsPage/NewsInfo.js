import Link from 'next/link';
import Image from 'next/image';

import styles from './NewsInfo.module.scss';

const NewsInfo = props => {
  // Import and Destructure Props from NewsSection
  const { articleData } = props;
  const { name, image, url, datePublished } = articleData;
  let imageUrl;
  if (image) {
    const { contentUrl } = image.thumbnail;
    imageUrl = contentUrl;
  }

  return (
    <Link href={url}>
      <a target='_blank'>
        <div className={styles['container']}>
          {image && (
            <Image src={imageUrl} alt={name} width={120} height={120} />
          )}
          {!image && (
            <div
              style={{
                width: 120,
                height: 120,
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              No Image Found
            </div>
          )}
          <p>{name}</p>
        </div>
      </a>
    </Link>
  );
};

export default NewsInfo;
