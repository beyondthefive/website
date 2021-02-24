import React, {useState} from 'react'
import Layout from '../components/layout.js'
import {Flex} from 'rebass'
import LoadingIndicator from '../components/loadingIndicator.js'

const register = () => {
	const [loaded, setLoaded] = useState(false)
	const onLoad = () => setLoaded(true)
	return (
		<Layout noFooter instructorAd={false}>
			{!loaded ? (
				<Flex justifyContent="center">
					<LoadingIndicator />
				</Flex>
			) : null}

			<iframe
				src="https://drive.google.com/file/d/1ziOucFfbeVVbv1dXFrphU0bTGbqxZ8xm/preview"
				frameBorder="0"
				width="100%"
				position="absolute"
				height="2100"
				style={{background: 'transparent'}}
				onLoad={() => onLoad()}
			/>
		</Layout>
	)
}

export default register
