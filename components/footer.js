import { Flex, Box, Link, Text } from "rebass";
import Waves from "./waves";
import { FaDiscord, FaInstagram } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
const links = [
  {
    component: <FaInstagram color="white" size="2em" />,
    alt: "Instagram",
    link: "https://www.instagram.com/beyond_the_five/"
  },
  {
    component: <MdMailOutline color="white" size="2em" />,
    alt: "Email",
    link: "mailto:team@beyondthefive.com"
  }
];

const footer = ({ waves = false }) => (
  <Box>
    {waves ? <Waves /> : null}

    <Flex bg="#561B25" color="white" my={-2} px={[3, 5]} py={3}>
      <Box width={1}>
        <Flex width={1} my={2} flexDirection={["column", "row"]}>
          <Box width={[1, 2 / 3]} my={[3, "auto"]}>
            <Flex>
              <Box>
                <Text fontSize={[1, 2, 3]}>
                  <b>
                    Interested in being a teacher or content creator for Beyond
                    The Five?
                  </b>
                </Text>
                <Text fontSize={[1, 2, 3]}>
                  Teachers for Beyond The Five have the opportunity to teach
                  hundreds of students from around the world without leaving
                  home.
                  <Text>
                    We provide the tools and the platform to teach what you
                    love.
                  </Text>
                  <Text>
                    <Link href="/register/instructor">Apply now!</Link>
                  </Text>
                </Text>
              </Box>
            </Flex>
          </Box>
          <Box width={[1, 1 / 3]} my={[2, "auto"]}>
            <Flex justifyContent={["center", "flex-end"]}>
              <Box>
                {links.map(icon => (
                  <Flex key={icon.alt} justifyContent="flex-end">
                    <Text m={1} fontSize={[1, 2, 3]} my="auto">
                      {icon.alt}
                    </Text>
                    <Link href={icon.link}>{icon.component}</Link>
                  </Flex>
                ))}
              </Box>
            </Flex>
          </Box>
        </Flex>
        <Box mt={4}>
          <Text fontSize={[1, 2, 3]}>
            Have a question? Shoot us an email:{" "} 
            <Link href="mailto:team@beyondthefive.com">
              team@beyondthefive.com
            </Link>
          </Text>
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
);

export default footer;
