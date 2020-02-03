import React from "react";
import Layout from "../components/layout";
import { Text, Box, Flex, Card } from "rebass";

const Item = ({ contents }) => (
  <Box
    sx={{ borderRadius: 5, boxShadow: "0 0 5px lightgrey" }}
    m={2}
    border={1}
    borderColor={"grey"}
  >
    <Text m={2} fontSize={[3, 4, 5]}>
      {contents}
    </Text>
  </Box>
);

const desc1 = [
  "Our courses are intended for:",
  "- self-studying & low access students",
  "- students that need extra assistance"
];

const desc2 = [
  "Our courses are actual classes, with lectures, homework, and other things you would expect from a classroom-type learning environnement.",
  "They are not for students that just want extra resources."
];

const index = () => (
  <Layout header>
    <Box width={[1, 1 / 2, 2 / 3]} m={1} p={2} mx="auto" my={4}>
      <Text fontSize={[3, 4, 5]} textAlign="center">
        Beyond The Five has:
      </Text>
      <Flex mx="auto" px={2} my={3} width={1} flexDirection={["column", "row"]}>
        <Item contents="41 Courses" />
        <Item contents="Over 160 Students" />
        <Item contents="A 100% AP®️ test pass rate!" />
      </Flex>
      <Box width={1} my={3}>
        {desc1.map(d => (
          <Text fontSize={[3, 4, 5]}>{d}</Text>
        ))}
      </Box>

      {desc2.map(d => (
        <Text fontSize={[3, 4, 5]}>{d}</Text>
      ))}
    </Box>
  </Layout>
);

export default index;
