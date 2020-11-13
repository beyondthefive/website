import React from 'react'
import {Flex, Box} from 'rebass'
import Header from './header'
import Footer from './footer'
import css from 'styled-jsx/css'
// Import IBMPlexSans from '../public/fonts/IBMPlexSans-Regular.ttf';

const globalStyle = css.global`
	@font-face {
		font-family: 'IBM Plex Sans';

		font-weight: 400;
		font-display: fallback;
	}
	:global(body) {
		font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;
		margin: 0;
	}
`

const layout = ({
	children,
	header = false,
	waves = false,
	instructorAd = true,
	noFooter = false
}) => {
	return (
		<>
			<Flex
				sx={{
					flexDirection: 'column',
					minHeight: '100vh'
				}}
			>
				<Header waves={waves} header={header} />

				<Flex
					sx={{
						flex: 1,
						flexDirection: ['column', 'row']
					}}
				>
					<Box
						sx={{
							flex: 1,
							minWidth: 0
						}}
						bg="#ffffff"
					>
						{children}
					</Box>
				</Flex>
				{!noFooter ? (
					<Footer instructorAd={instructorAd} waves={waves} />
				) : null}
			</Flex>
			<style jsx global>
				{globalStyle}
			</style>
		</>
	)
}

export default layout
