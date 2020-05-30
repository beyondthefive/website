import { Flex, Box, Link, Text, Heading, Button } from "rebass";
import Waves from "./waves";
import {
  FaDiscord,
  FaInstagram,
  FaTumblrSquare,
  FaFacebookSquare,
} from "react-icons/fa";
const socialLinks = [
  {
    component: <FaInstagram color="white" size="1.3em" />,
    alt: "Instagram",
    link: "https://www.instagram.com/beyond_the_five/",
  },
  {
    component: <FaDiscord color="white" size="1.3em" />,
    alt: "Discord",
    link: "/discord",
  },
  {
    component: <FaTumblrSquare color="white" size="1.3em" />,
    alt: "Tumblr",
    link: "https://beyondthefive.tumblr.com/",
  },
  {
    component: <FaFacebookSquare color="white" size="1.3em" />,
    alt: "Facebook",
    link: "https://www.facebook.com/beyond.thefive/",
  },
];

const aboutLinks = [
  { link: "/privacypolicy", text: "Privacy Policy" },
  { link: "/#about", text: "About Us" },
  { link: "/staff", text: "Our Staff" },
  { link: "/register/instructor", text: "Join Our Team" },
  { link: "/register", text: "Register Now!" },
];

const footer = ({ waves = false, instructorAd = true }) => (
  <Box>
    {waves ? <Waves /> : null}

    <Flex bg="bt5blue" color="white" my={-2} px={[3, 5]} pt={waves ? 0 : 3} pb={4}>
      <Box width={1}>
        <Flex width={1} my={2} flexDirection={["column", "row"]}>
          <Box width={[1, 1 / 2]} my={[3, "auto"]}>
            <Flex>
              {instructorAd ? (
                <Box pl={[0, 1, 2]}>
                  <Text fontSize={[1, 2]}>
                    <b>
                      Interested in being a teacher or content creator for
                      Beyond The Five?
                    </b>
                  </Text>
                  <Text fontSize={[1, 2]} my={[1, 2, 3]}>
                    Teachers for Beyond The Five have the opportunity to teach
                    hundreds of students from around the world. We provide the
                    tools and the platform to teach what you love.
                  </Text>
                  <Link href="/register/instructor">
                    <Button bg="whitesmoke">
                      <Text fontSize={[1, 2]} color="bt5blue">
                        Apply now!
                      </Text>
                    </Button>
                  </Link>
                </Box>
              ) : null}
            </Flex>
          </Box>
          <Box width={[1, 1 / 2]} my={[2, "auto"]}>
            <Flex justifyContent={["center", "flex-end"]}>
              {instructorAd ? (
                <Box>
                  <Flex>
                    <Box mr={[1, 2, 3]}>
                      <Heading mb={3}>Connect</Heading>
                      <Text py={1} my={2} fontSize={[1, 2]}>
                        <Link
                          sx={{ textDecoration: "none" }}
                          href="mailto:team@beyondthefive.com"
                          color="white"
                        >
                          team@beyondthefive.com
                        </Link>
                      </Text>
                      {socialLinks.map((icon) => (
                        <Link
                          key={icon.alt}
                          color="white"
                          sx={{ textDecoration: "none" }}
                          href={icon.link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Flex my={2} py={1}>
                            {icon.component}
                            <Text my="auto" mx={1} fontSize={[1, 2]}>
                              {icon.alt}
                            </Text>
                          </Flex>
                        </Link>
                      ))}
                    </Box>
                    <Box ml={2}>
                      <Heading mb={3}>About</Heading>
                      {aboutLinks.map((l) => (
                        <Link
                          key={l.link}
                          color="white"
                          sx={{ textDecoration: "none" }}
                          href={l.link}
                        >
                          <Text py={1} my={2} fontSize={[1, 2]}>
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
        <Flex mt={instructorAd ? 3 : 1} flexDirection={["column", "row"]}>
          <Box width={[1, 2 / 3]}>
            <Text fontSize={[1, 2]}>
              AP®️ is a registered trademark of the College Board, which does
              not sponsor or endorse Beyond The Five.
            </Text>
          </Box>
          <Flex width={[1, 1 / 3]} justifyContent={["center", "flex-end"]}>
            <Text fontSize={[1, 2]}>
              © 2020 Beyond The Five 501(c)(3) nonprofit
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  </Box>
);

export default footer;
