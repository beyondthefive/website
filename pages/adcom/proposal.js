import React, {useState} from 'react';
import Layout from '../../components/layout';
import {Flex, Text} from 'rebass';
import LoadingIndicator from '../../components/loadingIndicator';

const proposal = () => {
	const [loaded, setLoaded] = useState(false);
	const onLoad = () => setLoaded(true);
	return (
		<Layout instructorAd={false}>
			{!loaded ? (
				<Flex justifyContent="center">
					<LoadingIndicator/>
				</Flex>
			) : null}
			<script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"/>
			<iframe
				className="airtable-embed airtable-dynamic-height"
				src="https://airtable.com/embed/shrGzwdSCQTJwbaqa?backgroundColor=gray"
				frameBorder="0"
				width="100%"
				height="1967"
				style={{background: 'transparent'}}
				onLoad={() => onLoad()}
			 />
		</Layout>
	);
};

export default proposal;
