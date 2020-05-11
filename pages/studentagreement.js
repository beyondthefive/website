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
				<Flex justifyContent="center" m={3}>
					<LoadingIndicator/>
				</Flex>
			) : null}

			<iframe
				src="https://docs.google.com/document/d/e/2PACX-1vQ-6Uojkr23fRa0rM3GJ_6HuuPLA1XA0XHCv2Dbk76GTxasdflyydkxEbwCuUYELiO8WCpKRt9HcNbQ/pub"
				frameBorder="0"
				width="100%"
				height="2100"
				style={{background: 'transparent'}}
				onLoad={() => onLoad()}
			/>
		</Layout>
	);
};

export default register;
