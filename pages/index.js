import React from "react";
import Layout from "../components/layout";
import { Text, Box, Flex, Link } from "rebass";
import RegisterButton from "../components/registerButton";
import Testimonials from "../components/Testimonials";
import apCourses from "../lib/apCourses";
import higherLevelCourses from "../lib/higherLevelCourses";
import Study from "../public/svgs/undraw_studying_s3l7.svg";
import Knowlege from "../public/svgs/undraw_knowledge_g5gf.svg";

const Item = ({ contents }) => (
  <Box sx={{ borderRadius: 6, boxShadow: "0 0 5px lightgrey" }} m={2} p={2}>
    <Text textAlign="center" fontSize={[3, 4, 5]}>
      {contents}
    </Text>
  </Box>
);

//Beyond the five is an online platform and community that provides free instruction in AP and other college level courses.
//we currently offer x this and x that to over 160 students
//Students enrolled in our courses have a 100% AP test pass rate
//Beyond the five is intended for

//What our students have to say:

//Become an instructor:

const desc1 = [
  "Our courses are intended for:",
  "self-studying & low access students",
  "students that need extra assistance"
];

const desc2 = [
  "Our classes have lectures, homework, and other things you would expect from a classroom-type learning environnement.",
  "They are not for students who just want extra resources."
];

const index = () => (
  <Layout waves header>
    <Box width={[1, 1 / 2, 2 / 3]} m={1} p={2} mx="auto">
      <Flex my={3} flexDirection={["column", "row-reverse"]} my={4}>
        <Flex justifyContent="center" width={[1, 1 / 2]} pt={[0, 4]}>
          <Text mb={3} fontSize={[3, 4, 5]} mx={[3, 0]}>
            Beyond The Five is an online platform and community that provides
            free instruction in AP®️ and other college level courses.
          </Text>
        </Flex>
        <Flex justifyContent="center" width={[1, 1 / 2]}>
          <Study width="90%" height="90%" />
        </Flex>
      </Flex>
      <Text mb={2} fontSize={[3, 4, 5]} textAlign="center">
        Beyond The Five currently offers:
      </Text>
      <Box
        mx="auto"
        flexDirection={["column", "row"]}
        sx={{
          display: "grid",
          gridGap: 1,
          gridTemplateColumns: ["repeat(1, 1fr)", "repeat(2, 1fr)"]
        }}
      >
        <Item contents={apCourses.length + " AP®️ Courses"} />
        <Item contents={higherLevelCourses.length + " higher-level courses"} />
      </Box>
      <Text my={2} fontSize={[3, 4, 5]} textAlign="center">
        to over 160 students from all over the world.
      </Text>

      <Text my={5} fontSize={[3, 4, 5]} textAlign="center">
        Students enrolled in our courses have a <b>100% AP®️ test pass rate</b>
      </Text>
      <Testimonials />
      <Flex my={3} flexDirection={["column", "row"]} my={4}>
        <Flex justifyContent="center" width={[1, 1 / 2]} pt={[0, 4]}>
          <Text mb={3} fontSize={[3, 4, 5]} mx={[3, 0]}>
            Our courses are intended for:
            <Text>- self-studying & low access students</Text>
            <Text>- students that need extra assistance</Text>
           
          </Text>
        </Flex>
        <Flex justifyContent="center" width={[1, 1 / 2]}>
          <Knowlege width="90%" height="90%" />
        </Flex>
      </Flex>

      <Box my={4}>
        {desc2.map(d => (
          <Text key={d} textAlign="center" fontSize={[3, 4, 5]}>
            {d}
          </Text>
        ))}
      </Box>
    </Box>

    <Text textAlign="center" my={2} mb={6} fontSize={[3, 4, 5]}>
      Check out <Link href="/courses">our course catalog</Link>!
    </Text>
    <Text textAlign="center" fontSize={[3, 4, 5]}>
      Ready to learn with us?
    </Text>
    <Flex alignItems="center">
      <RegisterButton />
    </Flex>
  </Layout>
);

export default index;
