import App from 'next/app'
import Head from 'next/head'
import React from 'react'

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <title>Beyond The Five</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="We connect students studying for AP exams with instructors, so you can get the resources you need. For free."
          ></meta>
          <link rel="icon" href="../public/favicon.ico" />
        </Head>

        <Component {...pageProps} />
      </>
    )
  }
}
