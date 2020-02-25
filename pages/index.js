import React from 'react'
import Layout from '../components/layout'
import { Text, Box, Flex } from 'rebass'
import RegisterButton from '../components/registerButton'
import Link from 'next/link'
import apCourses from '../lib/apCourses'
import higherLevelCourses from '../lib/higherLevelCourses'

const Item = ({ contents }) => (
  <Box sx={{ borderRadius: 6, boxShadow: '0 0 5px lightgrey' }} m={2}>
    <Text textAlign="center" m={2} fontSize={[3, 4, 5]}>
      {contents}
    </Text>
  </Box>
)

const desc1 = [
  'Our courses are intended for:',
  '- self-studying & low access students',
  '- students that need extra assistance'
]

const desc2 = [
  'Our courses have lectures, homework, and other things you would expect from a classroom-type learning environnement.',
  'They are not for students that just want extra resources.'
]

const index = () => (
  <Layout waves header>
    <Box width={[1, 1 / 2, 2 / 3]} m={1} p={2} mx="auto" mt={4}>
      <Text mb={3} fontSize={[3, 4, 5]} textAlign="center">
        Beyond The Five has:
      </Text>
      <Box
        mx="auto"
        flexDirection={['column', 'row']}
        sx={{
          display: 'grid',
          gridGap: 3,
          gridTemplateColumns: ['repeat(1, 1fr)', 'repeat(2, 1fr)']
        }}
      >
        <Item contents={apCourses.length + ' AP®️ Courses'} />
        <Item contents={higherLevelCourses.length + ' higher-level courses'} />
        <Item contents="Over 160 Students" />
        <Item contents="A 100% AP®️ test pass rate!" />
      </Box>
      <Box my={5}>
        {desc1.map(d => (
          <Text key={d} textAlign="center" fontSize={[3, 4, 5]}>
            {d}
          </Text>
        ))}
      </Box>
      <Box my={5}>
        {desc2.map(d => (
          <Text key={d} textAlign="center" fontSize={[3, 4, 5]}>
            {d}
          </Text>
        ))}
      </Box>
    </Box>

    <Text textAlign="center" m={2} fontSize={[3, 4, 5]}>
      Check out our <Link href="/courses">course catalog</Link>!
    </Text>
    <Flex alignItems="center">
      <RegisterButton />
    </Flex>
  </Layout>
)

export default index
