import { Flex, Box, Link } from 'rebass'
import Waves from './waves'
import { FaDiscord, FaInstagram } from 'react-icons/fa'
const links = [

  {
    component: <FaInstagram color="white" size="2em" />,
    alt: 'Instagram',
    link: 'https://www.instagram.com/beyond_the_five/'
  }
]

const footer = () => (
  <Box>
   {/* <Waves />*/}
    <Flex
      bg="#561B25"
      color="white"
      flexDirection={['column', 'row']}
      mt={-1}
      px={[3,5]}
      py={3}
    >
      <Box width={[1, 2 / 3]} my={[3,'auto']}>AP®️ is a registered trademark of the College Board, which does not sponsor or endorse Beyond The Five.</Box>
      <Box width={[1, 1 / 3]} my={[2,'auto']}>
        <Flex justifyContent={['center', 'flex-end']}>
          {links.map(icon => (
            <Box key={icon.alt} px={2}>
              <Link href={icon.link}>{icon.component} </Link>
            </Box>
          ))}
        </Flex>
      </Box>
    </Flex>
  </Box>
)

export default footer
