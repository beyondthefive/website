import App from 'next/app'
import Head from 'next/head'
import React from 'react'
import {useAnalytics} from '@happykit/analytics'
import {ThemeProvider} from 'theme-ui'
import theme from '../lib/theme'

const MyApp = ({Component, pageProps}) => {
	useAnalytics({publicKey: 'pk_live_a5457a9a2d'})

	return (
		<html lang="en">
			<Head>
				<title>Beyond The Five</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta
					name="description"
					content="Beyond The Five is an online platform and community that provides free instruction in AP®️, SAT/ACT, and college level classes. 100% of our students pass their AP®️ exams. Registration for the 2020-21 school year is now open!"
				/>
				<link rel="icon" href="/favicon.ico" />
				<link
					href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap"
					rel="stylesheet"
				/>
				<script async src="https://arc.io/widget.min.js#U1666NxP"></script>
			</Head>
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</html>
	)
}

export default MyApp
