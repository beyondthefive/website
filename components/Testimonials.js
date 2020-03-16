import React from 'react'
import { Text, Box, Flex, Link } from 'rebass'

const data = [
  {
    name: 'Emini',
    //My experience with Beyond the Five is unlike anything I had ever imagined it to be. I've always wanted to speed by school and to learn online, but many of the online learning platforms available required just too much. I did not want to keep creating accounts, to watch lecture videos that ended up being worthless, and to have questions that I would never get the answers to. But when I found Beyond the Five, I knew it was for me. The organization provides exceptional learning courses, along with fun and understandable instructors and TA's. I am eternally grateful that I found Beyond the Five. If it had not been for this organization, I probably would have given up on online instructional learning."
    quote:
      'My experience with Beyond The Five is unlike anything I had ever imagined it to be. I\'ve always wanted to speed by school and to learn online, but many of the online learning platforms available required just too much. I did not want to keep creating accounts, to watch lecture videos that ended up being worthless, and to have questions that I would never get the answers to. But when I found Beyond the Five, I knew it was for me. The organization provides exceptional learning courses, along with fun and understandable instructors and TA\'s. I am eternally grateful that I found Beyond the Five. If it had not been for this organization, I probably would have given up on online instructional learning.'
  },
  {
    name: 'John Smith',
    quote: 'Beyond The Five is very good.'
  },
  {
    name: 'Jane Doe',
    quote: 'Beyond The Five is very nice.'
  }
]

const Item = ({ name, contents }) => (
  <Box sx={{ borderRadius: 6, boxShadow: '0 0 5px lightgrey' }} my={3} p={4}>
    <Text fontSize={[2, 3, 4]}>
    {contents}
    </Text>
    <Text fontSize={[2, 3, 4]} m={2} textAlign="right">
    - {name}
    </Text>
  </Box>
)

const testinmonials = () => {
  return (
    <Box width={1}  m={2} p={4}>
        <Text fontSize={[3, 4, 5]} mb={4}>
      What our students have to say:
    </Text>
      {data.map(t => (
        <Item key={t.name} name={t.name} contents={t.quote}></Item>
      ))}
    </Box>
  )
}

export default testinmonials
