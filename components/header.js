import React from "react";
import { Flex, Box, Heading, Button, Image, Text } from "rebass";
import Link from "next/link";
import Waves from "./waves";

const links = [
  { href: "/#about", label: "About" },
  { href: "/courses", label: "Courses" },
  { href: "/register", label: "Register" }
];

const NavLinks = props => {
  const links = props.links;
  const linkList = links.map(link => (
    <Link key={link.label} href={link.href}>
      <Button bg="transparent" fontWeight="normal" fontSize={[1, 2, 3]}>
        {link.label}
      </Button>
    </Link>
  ));
  return (
    <Box direction="row-responsive" wrap="true" pad="small">
      {linkList}
    </Box>
  );
};

const header = ({ header = false }) => (
  <Box>
    <Flex bg="#561B25" color="white" p={3} flexDirection={["column", "row"]}>
      <Box width={[1, 1 / 2]}>
        <Link href="/">
          <Flex justifyContent={["center", "flex-start"]}>
            <Image
              src={require("../public/icon.png")}
              sx={{
                height: ["20%", "9%"],
                width: ["20%", "9%"],
                borderRadius: 8
              }}
            />
            <Heading fontSize={[4, 5]} my="auto">
              BT5
            </Heading>
          </Flex>
        </Link>
      </Box>
      <Box width={[1, 1 / 2]}>
        <Flex justifyContent={["center", "flex-end"]}>
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
          <Heading py={3} textAlign="center" fontSize={[4, 5, 6]}>
            Beyond The Five
          </Heading>
          <Text textAlign="center" fontSize={[3, 4, 5]}>
            We connect students studying for AP exams with instructors, so you
            can get the resources you need.
          </Text>
          <Text
            textAlign="center"
            fontWeight="bold"
            fontSize={[3, 4, 5]}
          >
            For free.
          </Text>
          <Link href="/register">
            <Button
              m={4}
              bg="#1c7ed6"
              mx="auto"
              sx={{ borderRadius: 10, boxShadow: "0 0 5px skyblue" }}
            >
              <Text fontWeight="normal" fontSize={[2, 3, 4]} mx={2} my={1}>
                Register now!
              </Text>
            </Button>
          </Link>
        </Flex>
      ) : null}
    </Box>
    {/*<Waves top />*/}
  </Box>
);

export default header;
