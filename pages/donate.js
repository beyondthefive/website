import React, {useState} from 'react';
import Layout from '../components/layout';
import {Flex} from 'rebass';
import LoadingIndicator from '../components/loadingIndicator';

const register = () => {
	const [loaded, setLoaded] = useState(false);
	const onLoad = () => setLoaded(true);
	return (
		<Layout instructorAd={false}>
			{!loaded ? (
				<Flex justifyContent="center">
					<LoadingIndicator/>
				</Flex>
			) : null}

			<iframe
				src="https://bank.hackclub.com/donations/start/beyondthefive"
				frameBorder="0"
				width="100%"
				position="absolute"
				height="1300"
				style={{background: 'transparent'}}
				onLoad={() => onLoad()}
			/>
		</Layout>
	);
};

export default register;
