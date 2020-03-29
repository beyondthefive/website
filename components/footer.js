import { Flex, Box, Link, Text, Heading } from 'rebass'
import Waves from './waves'
import { FaDiscord, FaInstagram } from 'react-icons/fa'
const socialLinks = [
  {
    component: <FaInstagram color="white" size="2em" />,
    alt: 'Instagram',
    link: 'https://www.instagram.com/beyond_the_five/'
  }
]

const aboutLinks = [
  { link: '/privacypolicy', text: 'Privacy Policy' },
  { link: '/#about', text: 'About us' }
]

const footer = ({ waves = false, instructorAd = true }) => (
  <Box>
    {waves ? <Waves /> : null}

    <Flex bg="#561B25" color="white" my={-2} px={[3, 5]} py={3}>
      <Box width={1}>
        <Flex width={1} my={2} flexDirection={['column', 'row']}>
          <Box width={[1, 2 / 3]} my={[3, 'auto']}>
            <Flex>
              {instructorAd ? (
                <Box>
                  <Text fontSize={[1, 2, 3]}>
                    <b>
                      Interested in being a teacher or content creator for
                      Beyond The Five?
                    </b>
                  </Text>
                  <Text fontSize={[1, 2, 3]}>
                    Teachers for Beyond The Five have the opportunity to teach
                    hundreds of students from around the world. We provide the
                    tools and the platform to teach what you love.
                    <Text>
                      <Link href="/register/instructor">
                        <Text color="skyblue">Apply now!</Text>
                      </Link>
                    </Text>
                  </Text>
                </Box>
              ) : null}
            </Flex>
          </Box>
          <Box width={[1, 1 / 3]} my={[2, 'auto']}>
            <Flex justifyContent={['center', 'flex-end']}>
              {instructorAd ? (
                <Box>
                  <Flex>
                    <Box mx={2}>
                      <Heading mb={3}>Connect</Heading>
                      <Text py={1} my={2} fontSize={[1, 2, 3]}>
                        <Link
                          sx={{ textDecoration: 'none' }}
                          href="mailto:team@beyondthefive.com"
                          color="white"
                        >
                          team@beyondthefive.com
                        </Link>
                      </Text>
                      {socialLinks.map(icon => (
                        <Link
                          key={icon.alt}
                          color="white"
                          sx={{ textDecoration: 'none' }}
                          href={icon.link}
                        >
                          <Flex my={2} py={1}>
                            {icon.component}
                            <Text my="auto" mx={1} fontSize={[1, 2, 3]}>
                              {icon.alt}
                            </Text>
                          </Flex>
                        </Link>
                      ))}
                    </Box>
                    <Box mx={2}>
                      <Heading mb={3}>About</Heading>
                      {aboutLinks.map(l => (
                        <Link
                          key={l.link}
                          color="white"
                          sx={{ textDecoration: 'none' }}
                          href={l.link}
                        >
                          <Text py={1} my={2} fontSize={[1, 2, 3]}>
                            {l.text}
                          </Text>
                        </Link>
                      ))}
                    </Box>
                  </Flex>
                </Box>
              ) : null}
            </Flex>
          </Box>
        </Flex>
        <Box mt={instructorAd ? 4 : 2}>
          <Text fontSize={[1, 2, 3]} my={2}>
            AP®️ is a registered trademark of the College Board, which does not
            sponsor or endorse Beyond The Five.
          </Text>
          <Text fontSize={[1, 2, 3]} mt={2}>
            © 2020 Beyond The Five 501(c)(3) nonprofit
          </Text>
        </Box>
      </Box>
    </Flex>
  </Box>
)

export default footer
