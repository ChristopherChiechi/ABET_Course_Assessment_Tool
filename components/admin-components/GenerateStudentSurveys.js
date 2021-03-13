import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  Button,
  List,
  ListItem,
  Link,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
import { getCoursesByDepartment } from "../../api/APIHelper";
import useToggle from "../../hooks/useToggle";
const GenerateStudentSurveys = () => {
  const [courseList, setCourses] = useState({ courses: [] });
  const [isOn, toggleOn] = useToggle();
  const getNewCourses = async () => {
    const newCourseList = await getCoursesByDepartment("CSCE");
    setCourses({
      ...courseList,
      courses: newCourseList,
    });
    console.log(courseList.courses);
  };
  const setButtonHandler = () => {
    setButtonName("Sort by Course Number");
  };
  const surveyCourses = []
    .concat(courseList.courses)
    .sort((a, b) => (a.courseNumber > b.courseNumber ? 1 : -1))
    .map((course, idx) => {
      return (
        <>
          <Tr key={idx} bg={idx % 2 == 0 ? "gray.300" : "gray.100"}>
            <Td>
              {course.department} {course.courseNumber},{course.displayName},
              Intsructor: {course.coordinator.firstName}{" "}
              {course.coordinator.lastName}, Survey Link:{" "}
              <Link color="teal" href="https://www.unt.edu/">
                Student Survey Link
              </Link>
            </Td>
            <br></br>
          </Tr>
        </>
      );
    });

  const surveyCoursesByInstuctor = []
    .concat(courseList.courses)
    .sort((a, b) => (a.lastName > b.lastName ? 1 : -1))
    .map((course, idx) => {
      console.log(course);
      return (
        <>
          <Tr key={idx} bg={idx % 2 == 0 ? "gray.300" : "gray.100"}>
            <Td>
              {course.department} {course.courseNumber},{course.displayName},
              Intsructor: {course.coordinator.firstName}{" "}
              {course.coordinator.lastName}, Survey Link:{" "}
              <Link color="teal" href="https://www.unt.edu/">
                Student Survey Link
              </Link>
            </Td>
            <br></br>
          </Tr>
        </>
      );
    });
  useEffect(() => {
    getNewCourses();
  }, []);
  const show = isOn;
  if (show) {
    return (
      <div id="top">
        <Box borderWidth="2px" rounded="lg" alignItems="center" m="1em" p="3em">
        <Table variant="striped" colorScheme="green" padding="1em">
        <TableCaption placement="top" fontWeight="bold" fontSize="xl">GenerateStudentSurveys</TableCaption>
              <Button onClick={toggleOn} mb="1em">
                Sort by Course Number
              </Button>
              <Tbody>{surveyCoursesByInstuctor}</Tbody>
          </Table>
        </Box>
      </div>
    );
  }
  if (!show) {
    return (
      <div id="top">
        <Box borderWidth="2px" rounded="lg" alignItems="center" m="1em" p="3em">
        <Table variant="striped" colorScheme="green" padding="1em">
        <TableCaption placement="top" fontWeight="bold" fontSize="xl">GenerateStudentSurveys</TableCaption>
              <Button onClick={toggleOn} mb="1em">
                Sort by Course Number
              </Button>
              <Tbody>{surveyCourses}</Tbody>
          </Table>
        </Box>
      </div>
    );
  }
};
export default GenerateStudentSurveys;

