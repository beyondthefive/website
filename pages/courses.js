import React from "react";
import Layout from "../components/layout";
import { Box, Flex, Text, Heading } from "rebass";
import RegisterButton from "../components/registerButton";
import apCourses from "../lib/apCourses";
import higherLevelCourses from "../lib/higherLevelCourses";
import CourseTable from "../components/courseTable/courseTable"

const courses = () => {
  return (
    <Layout>
      <Box width={[1, 2 / 3]} mx="auto" my={3} p={3}>
        <Heading fontSize={[2, 3, 4]}>
          Beyond The Five currently offers {apCourses.length} AP®️ courses and{" "}
          {higherLevelCourses.length} higher-level courses.
        </Heading>
        <Box my={3}>
          <Text fontSize={[1, 2, 3]}>Deadlines for dropping or enrolling:</Text>
          <Text fontSize={[1, 2, 3]}>2+ point AP®️ courses - January 1</Text>
          <Text fontSize={[1, 2, 3]}>
            1 point AP®️ courses and all higher-level courses - February 1
          </Text>
        </Box>
        <CourseTable title="AP Courses" data={apCourses} />
        <CourseTable title="Higher-Level Courses" data={higherLevelCourses} />

        <Flex alignItems="center" mt={3} flexDirection="column">
          <Text fontSize={[2, 3, 4]}> Interested in Beyond The Five?</Text>
          <RegisterButton />
        </Flex>
      </Box>
    </Layout>
  );
};

export default courses;
