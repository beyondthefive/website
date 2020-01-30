import React from 'react'
import { Flex, Box, Heading, Button, Image, Text } from 'rebass'
import Link from 'next/link'
import Waves from './waves'

const links = [
  { href: '/', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#courses', label: 'Courses' }
]

const NavLinks = props => {
  const links = props.links
  const linkList = links.map(link => (
    <Link key={link.label} href={link.href}>
      <Button bg="transparent" fontWeight="normal" fontSize={[1, 2, 3]}>
        {link.label}
      </Button>
    </Link>
  ))
  return (
    <Box direction="row-responsive" wrap="true" pad="small">
      {linkList}
    </Box>
  )
}

const header = ({ header = false }) => (
  <Box>
    <Flex bg="#561B25" color="white" p={3} flexDirection={['column', 'row']}>
      <Box width={[1, 1 / 2]}>
        <Flex justifyContent={['center', 'flex-start']}>
          <Image
            src={require('../public/icon.png')}
            sx={{
              height: ['20%', '9%'],
              width: ['20%', '9%'],
              borderRadius: 8
            }}
          />
          <Heading fontSize={[4, 5]} my="auto">
            Beyond The Five
          </Heading>
        </Flex>
      </Box>
      <Box width={[1, 1 / 2]}>
        <Flex justifyContent={['center', 'flex-end']}>
          <NavLinks links={links} />
        </Flex>
      </Box>
    </Flex>
    <Box bg="#561B25" color="white" px={4}>
      {header ? (
        <Box>
          <Box display={['block', 'flex']}>
            <Box width={[1, 1 / 2]} mx={[0,1]} mb={[3,0]}>
              <Text fontSize={[3, 4, 5]}>
                We connect students studying for AP exams with instructors, so
                you can get the resources you need.
              </Text>
              <Heading fontSize={[3, 4, 5]}>For free.</Heading>
            </Box>
            <Box width={[1, 1 / 2]} mx={[0,1]} mb={[1,0]}>
              <Text fontSize={[3, 4, 5]}>We have</Text>
              <Text fontSize={[3, 4, 5]}>- 15 AP Courses</Text>
              <Text fontSize={[3, 4, 5]}>- Over 160 Students</Text>
              <Text fontSize={[3, 4, 5]}>
                - A <b>100% AP Test pass rate</b>
              </Text>
            </Box>
          </Box>

          <Flex pt={[3, 5]} width={[1, 1 / 3]}>
            <Link href="/register">
              <Button
                mx="auto"
                sx={{ borderRadius: 10, boxShadow: '0 0 5px skyblue' }}
              >
                <Text fontSize={[2, 3, 4]} p={1}>
                  Register now!
                </Text>
              </Button>
            </Link>
          </Flex>
        </Box>
      ) : null}
    </Box>
    <Waves top />
  </Box>
)

export default header
