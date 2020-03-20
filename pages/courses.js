import React, { useState, useEffect } from 'react'
import Layout from '../components/layout'
import { Box, Flex, Text, Heading } from 'rebass'
import RegisterButton from '../components/registerButton'
import cor from '../lib/courses'
import LoadingIndicator from '../components/loadingIndicator'

let reqParse = s => {
  if (s != undefined) {
    return s
  }
  return 'None'
}

const courses = () => {
  const [apCourses, setApCourses] = useState([])
  const [hlCourses, setHLCourses] = useState([])

  useEffect(async () => {
    setApCourses(await cor())
    setHLCourses(await cor(true))
  }, [])

  return (
    <Layout>
      <Box width={[1, 4 / 5]} mx="auto" my={3} p={3}>
        <Text fontSize={[2, 3, 4]}>
          Beyond The Five currently offers {apCourses.length} AP®️ courses and{' '}
          {hlCourses.length} higher-level courses
        </Text>
        <Flex flexDirection={['column', 'row']}>
          <Box my={3} mx={[0,2]} width={[1, 1 / 2]}>
            <Text fontSize={[1, 2, 3]}>Deadlines to drop or enroll:</Text>
            <Text fontSize={[1, 2, 3]}>January 1 - 2+ point AP®️ courses</Text>
            <Text fontSize={[1, 2, 3]}>
              February 1 - 1 point AP®️ courses and all higher-level courses
            </Text>
          </Box>
          <Box my={3} mx={[0,2]} width={[1, 1 / 2]}>
            <Text fontSize={[1, 2, 3]}>
              You are permitted to enroll in up to:
            </Text>
            <Text fontSize={[1, 2, 3]}>10 Credits in AP®️ Courses</Text>
            <Text fontSize={[1, 2, 3]}>20 Credits in all non-AP®️ courses</Text>
          </Box>
        </Flex>

        <Flex flexDirection={['column', 'row']}>
          <Box width={[1, 1 / 2]} m={1}>
            <Heading my={2} fontSize={[3, 4, 5]}>
              AP®️ Courses
            </Heading>
            {apCourses.length === 0 ? (
              <LoadingIndicator />
            ) : (
              apCourses.map(c => (
                <Box key={c.Name} my={1} py={1}>
                  <Text my={2} fontSize={[1, 2, 3]} color="darkred">
                    <b>
                      {c.Name} ({c.Credits} Credits)
                    </b>
                  </Text>
                  <Text fontSize={[1, 2, 3]} color="#5c5f68">
                    {c.Notes}
                  </Text>
                  <Text fontSize={[1, 2, 3]} color="#5c5f68">
                    Prerequisite(s): {reqParse(c['Prerequisite(s)'])}
                  </Text>
                </Box>
              ))
            )}
          </Box>
          <Box width={[1, 1 / 2]} m={1}>
            <Heading my={2} fontSize={[3, 4, 5]}>
              Higher-Level Courses
            </Heading>

            {hlCourses.length === 0 ? (
              <LoadingIndicator />
            ) : (
              hlCourses.map(c => (
                <Box key={c.Name} my={1} py={1}>
                  <Text my={2} fontSize={[1, 2, 3]} color="darkred">
                    <b>
                      {c.Name} ({c.Credits} Credits)
                    </b>
                  </Text>
                  <Text fontSize={[1, 2, 3]} color="#5c5f68">
                    {c.Notes}
                  </Text>
                  <Text fontSize={[1, 2, 3]} color="#5c5f68">
                    Prerequisite(s): {reqParse(c['Prerequisite(s)'])}
                  </Text>
                </Box>
              ))
            )}
          </Box>
        </Flex>
        <Flex alignItems="center" mt={3} flexDirection="column">
          <Text fontSize={[2, 3, 4]} textAlign="center">
            Interested in taking courses with Beyond The Five?
          </Text>
          <RegisterButton />
        </Flex>
      </Box>
    </Layout>
  )
}

export default courses
