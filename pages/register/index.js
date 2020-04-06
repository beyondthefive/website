import React, { useState } from 'react'
import Layout from '../../components/layout'
import { Flex, Text } from 'rebass'
import LoadingIndicator from '../../components/loadingIndicator'
import { MobileView } from 'react-device-detect'

const register = () => {
  const [loaded, setLoaded] = useState(false)
  let onLoad = () => setLoaded(true)
  return (
    <Layout instructorAd={false}>
       {/*{!loaded ? (
        <Flex justifyContent="center" m={3}>
          <LoadingIndicator />
        </Flex>
      ) : null}
     } <MobileView>
        <Flex>
          <Text my={4} mx={2} fontSize={[3, 4, 4]} textAlign="center">
            Please use a non-mobile device to register for Beyond The Five.
          </Text>
        </Flex>
      </MobileView>*/}

      <Text my={5} fontSize={[3, 4, 4]} textAlign="center">
        Registration is currently closed.
      </Text>
    </Layout>
  )
}

export default register
