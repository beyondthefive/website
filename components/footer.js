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

const footer = ({ waves = false }) => (
  <Box>
    {waves ? <Waves /> : null}

    <Flex bg="#561B25" color="white" mt={-1} px={[3, 5]} py={3}>
      <Box width={1}>
        <Flex width={1} flexDirection={['column', 'row']}>
          <Box width={[1, 2 / 3]} my={[3, 'auto']}>
            AP®️ is a registered trademark of the College Board, which does not
            sponsor or endorse Beyond The Five.
          </Box>
          <Box width={[1, 1 / 3]} my={[2, 'auto']}>
            <Flex justifyContent={['center', 'flex-end']}>
              {links.map(icon => (
                <Box key={icon.alt} px={2}>
                  <Link href={icon.link}>{icon.component} </Link>
                </Box>
              ))}
            </Flex>
          </Box>
        </Flex>
        Interested in being a teacher or content creator for Beyond The Five?{' '}
        <Link href="/register/instructor">Apply now!</Link>
      </Box>
    </Flex>
  </Box>
)

export default footer
