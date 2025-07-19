import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import ThemeContainer from '../context/theme/ThemeContainer';
import Layout from '../components/Layout';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    // Disable browser's automatic scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // Prevent default anchor scrolling on initial page load
    const handleLoad = () => {
      if (window.location.hash) {
        // Temporarily remove the hash to prevent jump
        const hash = window.location.hash;
        window.history.replaceState(null, '', window.location.pathname);

        // Restore hash after a moment without triggering scroll
        setTimeout(() => {
          window.history.replaceState(null, '', hash);
        }, 1);
      }
    };

    // Run on mount
    handleLoad();
  }, []);

  return (
    <>
      <Head>
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        /> */}

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Arvo:ital,wght@0,400;0,700;1,400;1,700&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />

        {/* <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anyonymous"/>
<link href="https://fonts.googleapis.com/css2?family=Graduate&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/> */}

        <title>Montague Mobile Veterinary Services</title>
        <meta
          name="description"
          content="Interior home design project made using Next.js and Chakra UI"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeContainer>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeContainer>
    </>
  );
};

export default MyApp;
