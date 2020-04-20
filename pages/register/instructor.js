import React, {useState} from 'react'
import Layout from '../../components/layout'
import {Flex, Text} from 'rebass'
import LoadingIndicator from '../../components/loadingIndicator'

const register = () => {
	const [loaded, setLoaded] = useState(false)
	const onLoad = () => setLoaded(true)
	return (
		<Layout instructorAd={false}>
			{/* {!loaded ? (
        <Flex justifyContent="center" m={3}>
          <LoadingIndicator />
        </Flex>
      ) : null} */}
			<Text m={4} fontSize={[2, 3, 4]}>
				Interested becoming an instructor for Beyond The Five?
				<Text>Join our discord and contact an Organization Representative.</Text>
			</Text>
		</Layout>
	)
}

export default register
