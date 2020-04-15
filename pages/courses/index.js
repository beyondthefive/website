import React, { useState, useEffect } from 'react'
import Layout from '../../components/layout'
import { Box, Flex, Text, Button, Link } from 'rebass'
import { Label, Radio } from '@rebass/forms'
import cor from '../../lib/courses'
import LoadingIndicator from '../../components/loadingIndicator'

const courses = () => {
  const [courses, setCourses] = useState([])

  useEffect(async () => {
    setCourses(await cor())
  }, [])

  let changeCourses = async (n = 1) => {
    setCourses([])
    setCourses(await cor(n))
  }

  return (
    <Layout>
      <Box width={[1, 4 / 5]} mx="auto" my={3} p={3}>
        <Flex flexDirection={['column', 'row']}>
          <Box my={[1, 2, 3]} mr={[0, 2, 3]} width={[1, 1 / 3]}>
            <Box
              sx={{
                border: '1px solid grey',
                borderRadius: 5,
                position: 'sticky',
                top: 12,
              }}
              p={2}
              bg="whitesmoke"
            >
              <Text mb={3} fontSize={[1, 2, 3]}>
                Deadline to enroll or switch courses: January 1
              </Text>
              <Text fontSize={[1, 2, 3]}>
                You are permitted to enroll in up to 30 credits of courses.
              </Text>
              <Box mt={3}>
                <Text fontSize={[1, 2, 3]}>Course Category:</Text>
                <Label onClick={() => changeCourses()}>
                  <Radio name="c" value="v" defaultChecked />
                  <Text fontSize={[1, 2, 3]}>AP®️ Courses</Text>
                </Label>
                <Label onClick={() => changeCourses(2)}>
                  <Radio name="c" value="v" />
                  <Text fontSize={[1, 2, 3]}>College-Level Courses</Text>
                </Label>
                <Label onClick={() => changeCourses(3)}>
                  <Radio name="c" value="v" />
                  <Text fontSize={[1, 2, 3]}>Test Prep Courses</Text>
                </Label>
                <Label onClick={() => changeCourses(4)}>
                  <Radio name="c" value="v" />
                  <Text fontSize={[1, 2, 3]}>Misc. Courses</Text>
                </Label>
                <Text my={3} fontSize={[1, 2, 3]}>
                  Don't know what courses to take?
                  <Text>
                    Look at our <Link href="/courses/paths">course paths</Link>
                  </Text>
                </Text>

                <Text mb={3} fontSize={[1, 2, 3]}>
                  Note: These courses <b>DO NOT</b> provide credit. The credits
                  are solely for the purposes of scheduling classes.
                </Text>

                <Text fontSize={[1, 2, 3]}>
                  Interested in taking courses with Beyond The Five?
                </Text>
                <Button my={1} bg="#1c7ed6">
                  <Link
                    sx={{ textDecoration: 'none' }}
                    color="white"
                    href="/register"
                  >
                    <Text fontSize={[1, 2, 3]}>
                      <b>Register now!</b>
                    </Text>
                  </Link>
                </Button>
              </Box>
            </Box>
          </Box>

          <Box my={2} mx={[0, 2]} width={[1, 2 / 3]}>
            {courses.length === 0 ? (
              <LoadingIndicator />
            ) : (
              courses.map((c) => (
                <Box
                  key={c.Name}
                  my={1}
                  py={1}
                  pb={2}
                  sx={{ borderBottom: '2px solid whitesmoke' }}
                >
                  <Text fontSize={[1, 2, 3]} my={2} color="darkred">
                    <b>{c.Name}</b> ({c.Credits} Credits)
                  </Text>
                  <Text fontSize={[1, 2, 3]} color="#5c5f68">
                    <Text>{c.Notes}</Text>
                    {c.Prerequisites ? (
                      <Text>Prerequisite(s): {c.Prerequisites}</Text>
                    ) : null}
                    {c.Corequisites ? (
                      <Text>Corequisite(s): {c.Corequisites}</Text>
                    ) : null}
                    {c.Instructors ? (
                      <Text>Instructors(s): {c.Instructors}</Text>
                    ) : null}
                    {c.ApproximateCompletionTime ? (
                      <Text>
                        Approximate Completion Time:{' '}
                        {c.ApproximateCompletionTime}
                      </Text>
                    ) : null}
                    {c.Syllabus ? (
                      <Link
                        target="_blank"
                        rel="noreferrer"
                        color="#0077CC"
                        sx={{ textDecoration: 'none' }}
                        href={c.Syllabus}
                      >
                        <Text>Syllabus</Text>
                      </Link>
                    ) : null}
                  </Text>
                </Box>
              ))
            )}
          </Box>
        </Flex>
      </Box>
    </Layout>
  )
}

export default courses
