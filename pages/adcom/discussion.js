import React, {useState} from 'react';
import Layout from '../../components/layout';
import {Flex, Text} from 'rebass';
import LoadingIndicator from '../../components/loadingIndicator';

const proposal = () => {
	const [loaded, setLoaded] = useState(false);
	const onLoad = () => setLoaded(true);
	return (
		<Layout instructorAd={false}><Text fontSize={[2,3,4]} textAlign="center" m={[1,2]}>Current Advisement Committee Discussions</Text>
			{!loaded ? (
				<Flex justifyContent="center">
					<LoadingIndicator/>
				</Flex>
			) : null}
		
			<iframe
				className="airtable-embed airtable-dynamic-height"
				src="https://airtable.com/embed/shrouiBj6ooI9ihzS?backgroundColor=gray&viewControls=on"
				frameBorder="0"
				width="100%"
				height="533"
				style={{background: 'transparent'}}
				onLoad={() => onLoad()}
			 />
		</Layout>
	);
};

export default proposal;
