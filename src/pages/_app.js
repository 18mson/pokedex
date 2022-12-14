import Head from 'next/head';
import React from 'react';

import { wrapper } from '../store/configureStore';
import '../styles/index.css';

function MyApp(props) {
  // eslint-disable-next-line react/prop-types
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Pokedex by Muhamad Son ani</title>
        <meta
          content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
          name="viewport"
        />

        {/* Favicon */}
        <link href={`${process.env.NEXT_PUBLIC_IMAGES}/favicon.ico`} rel="shortcut icon" />
      </Head>

      {/* Component yang dirender */}
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp);
