import App from 'next/app'
import Head from 'next/head'
import React from 'react'

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
            content="We provide free, online, self-paced courses for students in AP®️ and higher-level classes. Our students have access a 100% AP test pass rate. We currently offer 74 courses to over 160 students from around the world."
          ></meta>
          <link rel="icon" href="../public/favicon.ico" />
        </Head>

        <Component {...pageProps} />
      </>
    )
  }
}
