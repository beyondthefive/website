import React from 'react'

import { Box, Heading, Text, Flex, Button } from 'rebass'
import CourseBlock from './courseBlock'

const table = ({ title, data }) => (
  <Box my={3}>
    <Heading my={1}>AP Courses</Heading>
    <Flex>
      <Flex
        p={1}
        sx={{ border: '1px black solid', borderBottom: '0px' }}
        width={2 / 5}
      >
        <Text my="auto" fontSize={[1, 2, 3]}>
          Course Name
        </Text>
      </Flex>
      <Flex sx={{ borderTop: '1px black solid' }} width={1 / 9}>
        <Text m="auto" fontSize={[1, 2, 3]}>
          Credits
        </Text>
      </Flex>
      <Flex
        sx={{ border: '1px black solid', borderBottom: '0px' }}
        width={32 / 45}
       
      >
        <Text ml={1} my="auto" fontSize={[1, 2, 3]}>
          Prerequisite(s)
        </Text>
      </Flex>
    </Flex>
    {data.map(c => (
      <CourseBlock
        key={c.name}
        name={c.name}
        credits={c.credits}
        prerequisites={c.prerequisites}
        notes={c.notes}
        last={c.name == data[data.length - 1].name}
      />
    ))}
  </Box>
)

export default table
