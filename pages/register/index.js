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
      {!loaded ? (
        <Flex justifyContent="center" m={3}>
          <LoadingIndicator />
        </Flex>
      ) : null}
      <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script>
      <iframe
        onLoad={() => onLoad()}
        className="airtable-embed airtable-dynamic-height"
        src="https://airtable.com/embed/shrtLpsHjJtC3KIat?backgroundColor=gray"
        frameBorder="0"
        onmousewheel=""
        width="100%"
        height="4507"
        style={{ background: 'transparent' }}
      ></iframe>
    </Layout>
  )
}

export default register
