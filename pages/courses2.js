import React, { useState, useEffect } from 'react'
import Layout from '../components/layout'
import { Box, Flex, Text, Button, Link } from 'rebass'
import { Label, Radio } from '@rebass/forms'
import cor from '../lib/courses'
import LoadingIndicator from '../components/loadingIndicator'

let reqParse = s => {
  if (s != undefined) {
    return s
  }
  return 'None'
}

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
          <Box my={[1, 2, 3]} mx={[0, 1, 2]} width={[1, 1 / 3]}>
            <Box
              sx={{ border: '1px solid grey', borderRadius: 5 }}
              p={3}
              bg="whitesmoke"
            >
              {/*} <Text fontSize={[2, 3, 4]}>
                Beyond The Five currently offers:
                <Text>{courses.length} AP®️ courses</Text>
                <Text>{hlCourses.length} college-level courses</Text>
                {miscCourses.length} Test Prep & misc. courses
  </Text>*/}
              <Text mb={3} fontSize={[1, 2, 3]}>
                Deadlines to drop or enroll:
                <Text>January 1: 2+ point AP®️ courses</Text>
                February 1: 1 point AP®️ courses and all higher-level courses
              </Text>
              <Text fontSize={[1, 2, 3]}>
                You are permitted to enroll in up to:
                <Text>10 Credits in AP®️ Courses</Text>
                20 Credits in all non-AP®️ courses
              </Text>
              <Box mt={3}>
                <Text fontSize={[1, 2, 3]}>Course Category:</Text>
                <Label onClick={() => changeCourses()}>
                  <Radio name="color" id="red" value="red" defaultChecked />
                  <Text fontSize={[1, 2, 3]}>AP®️ Courses</Text>
                </Label>
                <Label onClick={() => changeCourses(2)}>
                  <Radio name="color" id="green" value="green" />
                  <Text fontSize={[1, 2, 3]}>College-Level Courses</Text>
                </Label>
                <Label onClick={() => changeCourses(3)}>
                  <Radio name="color" id="blue" value="blue" />
                  <Text fontSize={[1, 2, 3]}>Test Prep & Misc. Courses</Text>
                </Label>
                <Text mt={3} fontSize={[1, 2, 3]}>
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
              courses.map(c => (
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
                    {c.Notes}
                  </Text>
                  <Text fontSize={[1, 2, 3]} color="#5c5f68">
                    Prerequisite(s): {reqParse(c['Prerequisite(s)'])}
                  </Text>
                  {c.Instructors ? (
                    <Text fontSize={[1, 2, 3]} color="#5c5f68">
                      Instructors(s): {c.Instructors}
                    </Text>
                  ) : null}
                  {c.Syllabus ? (
                    <Link
                      target="_blank"
                      color="#0077CC"
                      sx={{ textDecoration: 'none' }}
                      href={c.Syllabus}
                    >
                      <Text fontSize={[1, 2, 3]}>Syllabus</Text>
                    </Link>
                  ) : null}
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
