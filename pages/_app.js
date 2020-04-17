import App from 'next/app'
import Head from 'next/head'
import React from 'react'
import {ThemeProvider} from 'emotion-theming'
import theme from '../lib/theme'

export default class MyApp extends App {
	render() {
		const {Component, pageProps} = this.props

		return (
			<html lang="en">
				<Head>
					<title>Beyond The Five</title>
					<meta name="viewport" content="width=device-width, initial-scale=1"/>
					<meta
						name="description"
						content="Beyond The Five is an online platform and community that provides free instruction in AP®️, SAT/ACT, and college level classes. Students enrolled in our courses have a 100% AP®️ test pass rate. Registration for the 2020-21 school year is now open!"
					 />
					<link rel="icon" href="/favicon.ico"/>
				</Head>
				<ThemeProvider theme={theme}>
					<Component {...pageProps}/>
				</ThemeProvider>
			</html>
		)
	}
}
