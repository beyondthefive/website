import React from 'react'
import { Flex, Box, Heading, Button, Image, Text } from 'rebass'
import Link from 'next/link'
import RegisterButton from '../components/registerButton'
import Waves from './waves'

const links = [
  { href: '/#about', label: 'About' },
  { href: '/courses', label: 'Courses' },
  { href: '/register', label: 'Register' }
]

const NavLinks = props => {
  const links = props.links
  const linkList = links.map(link => (
    <Link key={link.label} href={link.href}>
      <Button bg="transparent" fontWeight="normal" fontSize={3}>
        {link.label}
      </Button>
    </Link>
  ))
  return (
    <Box direction="row-responsive" wrap="true" p={[0, 3]}>
      {linkList}
    </Box>
  )
}

const header = ({ header = false }) => (
  <Box bg="#561B25" color="white">
    <Flex
      mx="auto"
      width={[1,7 / 8]}
      py={1}
      px={3}
      flexDirection={['column', 'row']}
    >
      <Box width={[1, 1 / 2]}>
        <Link href="/">
          <Flex justifyContent={['center', 'flex-start']}>
            <Image
              src={require('../public/icon.png')}
              sx={{
                height: ['25%', '20%', '12%'],
                width: ['25%', '20%', '12%']
              }}
            />
            {/*<Heading fontSize={[4, 5]} my="auto">
              Beyond The Five
            </Heading>*/}
          </Flex>
        </Link>
      </Box>
      <Box width={[1, 1 / 2]}>
        <Flex justifyContent={['center', 'flex-end']}>
          <NavLinks links={links} />
        </Flex>
      </Box>
    </Flex>

    <Box bg="#561B25" color="white">
      {header ? (
        <Flex mx="auto" px={3} width={[1, 1 / 2, 2 / 3]} flexDirection="column">
          <Heading py={3} textAlign="center" fontSize={[4, 5, 6]}>
            Beyond The Five
          </Heading>
          <Text textAlign="center" fontSize={[3, 4, 5]}>
            We provide free, online, self-paced courses for students to complete
            to become experts in AP®️ and higher-level classes.
          </Text>
          <Text textAlign="center" fontWeight="bold" fontSize={[3, 4, 5]}>
            For free.
          </Text>
          <RegisterButton/>
         
        </Flex>
      ) : null}
    </Box>
    {/*<Waves top />*/}
  </Box>
)

export default header
