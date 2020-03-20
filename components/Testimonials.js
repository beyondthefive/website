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
    name: 'David',
    quote: 'I would like to thank Beyond the Five for everything that the organization has taught me. They transcend past the curricula tested on the AP Exam, and I feel that I am more than prepared to do well on the exams. The instructors have a deep understanding of the material tested on the exam, and they have done extraordinary things for the organization. I cannot thank the organization enough for everything they have taught me.'
  },
  {
    name: 'Jane Doe',
    quote: 'Beyond The Five is very nice.'
  }
]

const Item = ({ name, contents }) => (
  <Box sx={{ borderRadius: 6, boxShadow: '0 0 5px lightgrey' }} my={3} p={[3,4]}>
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
    <Box width={1}  m={[1,2]} p={[2,4]}>
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
