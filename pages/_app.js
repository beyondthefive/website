import App from 'next/app'
import Head from 'next/head'
import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import theme from '../lib/theme'


export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <title>Beyond The Five</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="Beyond The Five is an online platform and community that provides free instruction in AP®️ and other college level courses. We currently offer 76 courses to over 160 students from around the world. Students enrolled in our courses have a 100% AP®️ test pass rate."
          ></meta>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    )
  }
}
