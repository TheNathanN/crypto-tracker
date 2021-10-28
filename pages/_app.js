import Head from 'next/head';

import SearchSection from '../components/SearchComponents/SearchSection';
import MobileMenu from '../components/MobileMenu/MobileMenu';
import AppState from '../context/app-state';

import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Crypto Tracker</title>
        <meta
          name='description'
          content='A web app to help keep you updated on crypto prices.'
        />
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='stylesheet'
          href='https://use.fontawesome.com/releases/v5.15.4/css/all.css'
          integrity='sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm'
          crossorigin='anonymous'
        ></link>
      </Head>
      <AppState>
        <Component {...pageProps} />
        <MobileMenu />
      </AppState>
    </>
  );
}

export default MyApp;
