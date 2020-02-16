import React from 'react'
import Layout from '../components/layout'
import { Box, Flex, Text, Heading } from 'rebass'
import RegisterButton from '../components/registerButton'
import apCourses from '../lib/apCourses'
import higherLevelCourses from '../lib/higherLevelCourses'

const listing = (name, desc ,courses) => (
  <Box width={[1, 1 / 2]}>
    <Heading fontSize={[1, 2, 3]}>{name}</Heading>
    <Text fontSize={[1, 2, 3]}>
      {desc}
    </Text>

    <Box pl={2}>
      {courses.map(course => (
        <Box key={course.name} m={2}>
          <Text fontSize={[1, 2, 3]}>{course.name}</Text>
          <Box ml={1}>
            <Text fontSize={[1, 2]}>Prerequisites: {course.prerequisites}</Text>
            {course.notes != null ? (
              <Text fontSize={[1, 2]}>Note: {course.notes}</Text>
            ) : null}
            <Text fontSize={[1, 2]}>Credits: {course.credits}</Text>
          </Box>
        </Box>
      ))}
    </Box>
  </Box>
)

const courses = () => (
  <Layout>
    <Box width={[1, 2 / 3]} mx="auto" my={3} p={3}>
      <Heading fontSize={[2, 3, 4]}>
        Beyond The Five currently offers 30 AP®️ courses and 41 higher-level
        courses.
      </Heading>
      <Text fontSize={[1, 2, 3]}>
        Courses worth 2 credits last 2 semesters. Courses worth 1 credit last 1
        semester.
      </Text>
      <Flex p={3}>
        {listing('AP®️ Courses', 'You can enroll in up to 8 credits worth of AP®️ courses.', apCourses)}
        {listing('Higher-Level Courses', 'You can enroll in up to 20 credits worth of higher-level courses.', higherLevelCourses)}
      </Flex>
      <Flex alignItems="center" mt={3} flexDirection="column">
        <Text fontSize={[2, 3, 4]}> Interested in Beyond The Five?</Text>
        <RegisterButton />
      </Flex>
    </Box>
  </Layout>
)

export default courses
