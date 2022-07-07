import React  from 'react';
import { Layout } from '../components';
import '../styles/globals.css';
import  '../styles/home.module.css';
import { StateContext } from '../context/StateContext';

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}

export default MyApp
