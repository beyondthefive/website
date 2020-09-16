import React, {useState} from 'react';
import Layout from '../../components/layout';
import {Flex, Text, Box} from 'rebass';
import LoadingIndicator from '../../components/loadingIndicator';

export default () => {
	const [loaded, setLoaded] = useState(false);
	const onLoad = () => setLoaded(true);
	return (
		<Layout instructorAd={false}>
			{!loaded ? (
				<Flex justifyContent="center">
					<LoadingIndicator/>
				</Flex>
			) : null}
			<Text fontSize={[2, 3, 4]} mt={2} textAlign="center">
				Released Courses
			</Text>
			<Box height="100%">
				<iframe
					className="airtable-embed"
					src="https://airtable.com/embed/shrs5PQox4r1xmSyc?backgroundColor=gray&viewControls=on"
					onMouseWheel=""
					width="100%"
					height="100%"
					frameBorder="0"
					position="absolute"
					style={{
						background: 'transparent',
						position: 'absolute'
					}}
					onLoad={() => onLoad()}
				/>
			</Box>
		</Layout>
	);
};
