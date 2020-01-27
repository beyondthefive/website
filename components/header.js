import React from 'react'
import { Flex, Box, Heading, Button, Image } from 'rebass'
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

const header = ({ children }) => (
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
          <Heading fontSize={[ 4, 5]} my="auto">Beyond The Five</Heading>
        </Flex>
      </Box>
      <Box width={[1, 1 / 2]}>
        <Flex justifyContent={['center', 'flex-end']}>
          <NavLinks links={links} />
        </Flex>
      </Box>
    </Flex>
    <Box bg="#561B25" color="white" px={4}>
      {children}
    </Box>
    <Waves top />
  </Box>
)

export default header
