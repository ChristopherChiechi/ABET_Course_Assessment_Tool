//imports
import React, { useState, useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  Flex,
  Input,
  Center
} from "@chakra-ui/react";
//api
import fakeData from "../../../fake-data/course.json";

const EditAssignedCourses = () => {
  const [courses, setCourses] = useState();
  const getCourseData = async () => {
    const data = fakeData.courses;
    console.log(data);
    setCourses(data);
  }

  useEffect(() => {
    getCourseData();
  }, []);

  const renderCourses = courses ? courses.map((course, idx) => {
    return (
      <Tr key={idx}>
        <Td>{course.code}</Td>
        <Td>
          <Input
            placeholder="Add a new section"
            variant="filled"
            size="sm"
          />
        </Td>
        <Td>
          <Input
            placeholder="Assign Instructor"
            variant="filled"
            size="sm"
          />
        </Td><Td>
          <Input
            placeholder="Assign Coordinator"
            variant="filled"
            size="sm"
          />
        </Td>
      </Tr>
    )
  }): null;

  return (
    <Center>
      <Flex mt="2em" direction="column" w="90%">
        <Text fontWeight="bold" fontSize="xl">
          Edit Assigned Courses
      </Text>

        <Center
          m="2em"
          padding="1em"
          bg="#edf2f7"
          borderRadius="4px"
        >
          <Table padding="1em" bg="white">
            <Thead>
              <Tr>
                <Th>Course</Th>
                <Th>Sections</Th>
                <Th>Instructors</Th>
                <Th>Coordinators</Th>
              </Tr>
            </Thead>
            {courses ?
              <Tbody>
                {renderCourses}
              </Tbody> : null
            }
          </Table>
        </Center>

      </Flex>
    </Center>
  );
};
export default EditAssignedCourses;
