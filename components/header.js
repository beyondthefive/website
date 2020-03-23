import React from 'react'
import { Flex, Box, Heading, Link, Image, Text } from 'rebass'
import RegisterButton from '../components/registerButton'
import Waves from './waves'
import Learn from '../public/svgs/undraw_researching_22gp.svg'
import Logo from '../public/logo.svg'

const links = [
  { href: '/#about', label: 'About' },
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
        width={[1, 4 / 5]}
        py={1}
        px={3}
        flexDirection={['column', 'row']}
      >
        <Flex width={[1, 1 / 2]}>
          <Flex justifyContent={['center', 'flex-start']} my="auto">
            <Logo height="5%" width="5%" />
            <Heading fontSize={[3, 4, 5]} my="auto" mx={3}>
              <Link href="/" color="white" sx={{ textDecoration: 'none' }}>
                Beyond The Five
              </Link>
            </Heading>
          </Flex>
        </Flex>
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
            px={[3, 5]}
            //width={[1, 1 / 2, 2 / 3]}
            width={[1]}
            flexDirection={['column', 'row']}
          >
            <Box width={[1, 1 / 2]} ml={[0, 5]} p={1}>
              <Text fontSize={[4, 5, 6]} textAlign={['center', 'left']}>
                <b>Free</b>, online, self-paced courses for students in AP®️ and
                higher-level classes
              </Text>
              <Flex>
                <RegisterButton mx={['auto', 0]} />
              </Flex>
            </Box>

            <Flex
              py={2}
              justifyContent={['center', 'flex-start']}
              width={[1, 1 / 2]}
            >
              <Learn height="80%" width="80%" />
            </Flex>
          </Flex>
        ) : null}
      </Box>
    </Box>

    {waves ? <Waves top /> : null}
  </Box>
)

export default header
