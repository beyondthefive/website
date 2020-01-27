import React from 'react'
import Layout from '../../components/layout'
import { Heading, Flex, Text, Button, Box } from 'rebass'
import Link from 'next/link'

const register = () => (
  <Layout>
    <Flex p={3} justifyContent={['center', 'flex-end']}>
      <Box p={1} mx={[0,5]}>
        <Text fontSize={[2, 3, 4]}>
          Interested in being a teacher or content creator for Beyond The Five?
        </Text>
        <Flex justifyContent={['center', 'flex-end']}>
          <Link href="register/instructor">
            <Button m={2}>
              <Text fontSize={[1, 2, 3]}>Instructor Application</Text>
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
