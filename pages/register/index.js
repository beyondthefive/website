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
          <ReactLoading type="spin" color="grey" height={'10%'} width={'10%'} />
        </Flex>
      ) : null}
      <iframe
        onLoad={() => onLoad()}
        src="https://form.jotform.com/200454457448155"
        width="100%"
        height="625"
        marginHeight="0"
        marginWidth="0"
        frameBorder="0"
      />
    </Layout>
  )
}

export default register
