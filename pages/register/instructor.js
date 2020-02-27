import React, { useState } from 'react'
import Layout from '../../components/layout'
import { Flex } from 'rebass'
import ReactLoading from 'react-loading'

const register = () => {
  const [loaded, setLoaded] = useState(false)
  let onLoad = () => setLoaded(true)
  return (
    <Layout>
      {!loaded ? (
        <Flex justifyContent="center" m={3}>
          <ReactLoading type="spin" color="grey" height={'30%'} width={'30%'} />
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
