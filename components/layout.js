import React from 'react'
import {Flex, Box} from 'rebass'
import Header from './header.js'
import Footer from './footer.js'

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
		</>
	)
}

export default layout
