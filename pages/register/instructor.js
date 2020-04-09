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
      ) : null}*/}
      <Text m={4} fontSize={3}>
        Instructor applications are currently not open. Please contact us on discord.
      </Text>
    </Layout>
  )
}

export default register
