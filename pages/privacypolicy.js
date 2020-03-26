import React, { useState } from 'react'
import { Heading, Text, Box } from 'rebass'
import Layout from '../components/layout'

const content = []

const privpol = () => (
  <Layout>
    <Box my={4} mx={[1,2,4]} p={1}>
      <Text fontSize={[3, 4, 5]}>Privacy Policy</Text>
    </Box>
  </Layout>
)

export default privpol
