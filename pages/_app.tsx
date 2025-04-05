import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import ThemeContainer from '../context/theme/ThemeContainer';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <title>Interior Home Design</title>
        <meta
          name="description"
          content="Interior home design project made using Next.js and Chakra UI"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeContainer>
        <Component {...pageProps} />
      </ThemeContainer>
    </>
  );
};

export default MyApp;