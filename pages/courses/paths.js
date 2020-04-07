import React from 'react'
import Layout from '../../components/layout'
import { Box, Flex, Text } from 'rebass'
import Math from '../../public/svgs/paths/math.svg'
import Physics from '../../public/svgs/paths/physics.svg'
import CS from '../../public/svgs/paths/cs.svg'

const Graphic = ({ children }) => <Box my={3}>{children}</Box>

const courses = () => {
  return (
    <Layout>
      <Box width={[1, 4 / 5]} mx="auto" my={2} p={2}>
        <Text fontSize={[3, 4, 5]}>Course Paths</Text>
        <Flex flexDirection="column" justifyContent="center">
          <Graphic>
            <Math width="65%" height="65%" />
          </Graphic>
          <Graphic>
            <Physics width="65%" height="65%" />
          </Graphic>
          <Graphic>
            <CS width="65%" height="65%" />
          </Graphic>
        </Flex>
      </Box>
    </Layout>
  )
}

export default courses
