import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Crypto Tracker</title>
        <meta
          name='description'
          content='A web app to help keep you updated on crypto prices.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main></main>
    </div>
  );
}
