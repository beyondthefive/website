import React from 'react'
import { Flex, Box, Heading, Link, Image, Text } from 'rebass'
import RegisterButton from '../components/registerButton'
import Waves from './waves'

const links = [
  { href: '/', label: 'Home' },
  { href: '/courses', label: 'Courses' },
  { href: '/register', label: 'Register' }
]

const NavLinks = props => {
  const links = props.links
  const linkList = links.map(link => (
    <Box w={'100%'} p={1} m={1} py="auto" key={link.label}>
      <Link variant="nav" href={link.href}>
        <Text
          fontWeight="normal"
          textAlign="center"
          my={'auto'}
          fontSize={[2, 3, 4]}
        >
          {link.label}
        </Text>
      </Link>
    </Box>
  ))
  return <Flex p={[0, 3]}>{linkList}</Flex>
}

const header = ({ header = false, waves = false }) => (
  <Box color="white">
    <Box bg="#561B25">
      <Flex
        mx="auto"
        width={[1, 5 / 6]}
        py={1}
        px={3}
        flexDirection={['column', 'row']}
      >
        <Box width={[1, 1 / 2]}>
          <Flex justifyContent={['center', 'flex-start']}>
            <Image
              alt="Beyond The Five Logo"
              src={require('../public/logo-transparent.png')}
              sx={{
                height: ['25%', '20%', '15%'],
                width: ['25%', '20%', '15%']
              }}
            />
            {/*<Heading fontSize={[4, 5]} my="auto">
              Beyond The Five
            </Heading>*/}
          </Flex>
        </Box>
        <Box width={[1, 1 / 2]} alignSelf="center">
          <Flex justifyContent={['center', 'flex-end']}>
            <NavLinks links={links} />
          </Flex>
        </Box>
      </Flex>

      <Box bg="#561B25" color="white">
        {header ? (
          <Flex
            mx="auto"
            px={3}
            width={[1, 1 / 2, 2 / 3]}
            flexDirection="column"
          >
            <Heading py={3} textAlign="center" fontSize={[5, 6, 7]}>
              Beyond The Five
            </Heading>
            <Text textAlign="center" fontSize={[4, 5, 6]}>
              We provide <b>free</b>, online, self-paced courses for students in
              AP®️ and higher-level classes.
            </Text>

            <RegisterButton />
          </Flex>
        ) : null}
      </Box>
    </Box>

    {waves ? <Waves top /> : null}
  </Box>
)

export default header
