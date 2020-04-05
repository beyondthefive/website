import React, { useState, useEffect } from 'react'
import Layout from '../components/layout'
import { Text, Box, Flex, Link } from 'rebass'
import RegisterButton from '../components/registerButton'
import Testimonials from '../components/Testimonials'
import cor from '../lib/courses'
import Study from '../public/svgs/undraw_studying_s3l7.svg'
import Knowlege from '../public/svgs/undraw_knowledge_g5gf.svg'

const Item = ({ contents }) => (
  <Box sx={{ borderRadius: 6, boxShadow: '0 0 5px lightgrey' }} m={2} p={1}>
    <Text textAlign="center" fontSize={[3, 4, 5]}>
      {contents}
    </Text>
  </Box>
)

const desc2 = [
  'Our classes have lectures, homework, and other things you would expect from a classroom-type learning environnement.',
  'They are not for students who just want extra resources.'
]

const index = () => {
  const [apCourses, setApCourses] = useState('~')
  const [hlCourses, setHLCourses] = useState('~')
  const [oCourses, setOCourses] = useState('~')

  useEffect(async () => {
    setApCourses((await cor()).length)
    setHLCourses((await cor(2)).length)
    setOCourses((await cor(3)).length)
  }, [])
  return (
    <Layout waves header>
      <Box width={[1, 1 / 2, 2 / 3]} m={1} p={2} mx="auto">
        <Flex my={3} flexDirection={['column', 'row-reverse']} my={4}>
          <Flex justifyContent="center" width={[1, 1 / 2]} pt={[0, 4]}>
            <a name="about"></a>
            <Text mb={3} fontSize={[3, 4, 5]} mx={[3, 0]}>
              Beyond The Five is an online platform and community that provides
              free instruction for AP®️ courses, SAT/ACT preparation, and
              college level courses.
            </Text>
          </Flex>
          <Flex justifyContent="center" width={[1, 1 / 2]}>
            <Study width="90%" height="90%" />
          </Flex>
        </Flex>
        <Text mb={2} fontSize={[3, 4, 5]} textAlign="center">
          Beyond The Five currently offers:
        </Text>
        <Box
          mx="auto"
          flexDirection={['column', 'row']}
          sx={{
            display: 'grid',
            gridGap: 1,
            gridTemplateColumns: ['repeat(1, 1fr)', 'repeat(3, 1fr)']
          }}
        >
          <Item contents={apCourses + ' AP®️ Courses'} />
          <Item contents={hlCourses + ' Higher-Level Courses'} />
          <Item contents={oCourses + ' Test Prep & misc. Courses'} />
        </Box>
        <Text my={2} fontSize={[3, 4, 5]} textAlign="center">
          to over 160 students from all over the world
        </Text>

        <Text my={5} fontSize={[3, 4, 5]} textAlign="center">
          Students enrolled in our courses have a{' '}
          <b>100% AP®️ test pass rate</b>
        </Text>
        <Testimonials />
        <Flex my={3} flexDirection={['column', 'row']} my={4}>
          <Flex justifyContent="center" width={[1, 1 / 2]} pt={[0, 4]}>
            <Text mb={3} fontSize={[3, 4, 5]} mx={[3, 0]}>
              Our courses are intended for:
              <Text>- self-studying & low access students</Text>
              <Text>- students that need extra assistance</Text>
            </Text>
          </Flex>
          <Flex justifyContent="center" width={[1, 1 / 2]}>
            <Knowlege width="90%" height="90%" />
          </Flex>
        </Flex>

        <Box my={4}>
          {desc2.map(d => (
            <Text key={d} textAlign="center" fontSize={[3, 4, 5]}>
              {d}
            </Text>
          ))}
        </Box>
      </Box>
      <Box mt={3} mb={6}>
        <Text textAlign="center" fontSize={[3, 4, 5]}>
          Beyond The Five currently offers {apCourses + hlCourses + oCourses}{' '}
          courses.
        </Text>
        <Text textAlign="center" fontSize={[3, 4, 5]}>
          Find them on <Link href="/courses">our course catalog</Link>.
        </Text>
      </Box>
      <Text textAlign="center" fontSize={[3, 4, 5]}>
        Ready to learn with us?
      </Text>
      <Flex alignItems="center">
        <RegisterButton />
      </Flex>
    </Layout>
  )
}

export default index
