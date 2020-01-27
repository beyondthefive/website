import React from 'react'
import Layout from '../../components/layout'
import { Flex, Text, Box, Button } from 'rebass'
import Link from 'next/link'

const register = () => (
  <Layout>
     <Flex justifyContent={['center', 'flex-end']}>
      <Box p={1} mx={[0,5]}>
        <Text fontSize={[2, 3, 4]}>
          Looking to register as a student?
        </Text>
        <Flex justifyContent={['center', 'flex-end']}>
          <Link href="/register">
            <Button m={2}>
              <Text fontSize={[1, 2, 3]}>Student Registration</Text>
            </Button>
          </Link>
        </Flex>
      </Box>
    </Flex>
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSfeAjAUVn04UtO6Gm2gpk95Tbddh6UgsCCTTdR9svT0nB8oNQ/viewform?embedded=true"
      width="100%"
      height="1500"
      marginHeight="0"
      marginWidth="0"
      frameBorder="0"
    ></iframe>
  </Layout>
)

export default register
