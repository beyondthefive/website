import React from 'react'
import Layout from '../components/layout'
import { Text, Box, Flex, Card } from 'rebass'

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
  <Layout header>
    <Box width={[1, 1 / 2, 2 / 3]} m={1} p={2} mx="auto" my={4}>
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
        <Item contents="30 AP®️ Courses" />
        <Item contents="41 higher-level courses" />
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
  </Layout>
)

export default index
