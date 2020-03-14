import React, { useState } from 'react'
import Layout from '../../components/layout'
import { Flex, Text } from 'rebass'
import LoadingIndicator from '../../components/loadingIndicator'
import { MobileView } from 'react-device-detect'

const register = () => {
  const [loaded, setLoaded] = useState(false)
  let onLoad = () => setLoaded(true)
  return (
    <Layout>
      {!loaded ? (
        <Flex justifyContent="center" m={3}>
          <LoadingIndicator/>
        </Flex>
      ) : null}
      <MobileView>
        <Flex>
          <Text my={4} mx={2} fontSize={[3, 4, 4]} textAlign="center">
            Please use a non-mobile device to register for Beyond The Five.
          </Text>
        </Flex>
      </MobileView>
      
      <iframe
        onLoad={() => onLoad()}
        src="https://form.jotform.com/200454457448155"
        width="100%"
        height="100%"
        marginHeight="0"
        marginWidth="0"
        frameBorder="0"
      />
    </Layout>
  )
}

export default register
