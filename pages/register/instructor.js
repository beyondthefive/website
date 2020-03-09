import React, { useState } from 'react'
import Layout from '../../components/layout'
import { Flex, Text } from 'rebass'
import ReactLoading from 'react-loading'
import { MobileView } from 'react-device-detect'

const register = () => {
  const [loaded, setLoaded] = useState(false)
  let onLoad = () => setLoaded(true)
  return (
    <Layout>
       <MobileView>
        <Flex>
          <Text my={4} mx={2} fontSize={[3, 4, 4]} textAlign="center">
            Please use a non-mobile device to register for Beyond The Five.
          </Text>
        </Flex>
      </MobileView>
      {!loaded ? (
        <Flex justifyContent="center" m={3}>
          <ReactLoading type="spokes" color="grey" height={'10%'} width={'10%'} />
        </Flex>
      ) : null}
      <iframe
        onLoad={() => onLoad()}
        src="https://docs.google.com/forms/d/e/1FAIpQLSfeAjAUVn04UtO6Gm2gpk95Tbddh6UgsCCTTdR9svT0nB8oNQ/viewform?embedded=true"
        width="100%"
        height="1300"
        marginHeight="0"
        marginWidth="0"
        frameBorder="0"
      />
    </Layout>
  )
}

export default register
