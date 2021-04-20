//imports
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
//api
import { getCoursesByDepartment } from "../../api/APIHelper";
//hooks
import useToggle from "../../hooks/useToggle";
const GenerateStudentSurveys = () => {
  const [courseList, setCourses] = useState();
  //toggle sort by instructor
  const [sortByInstructor, toggleSortByInstructor] = useToggle();
  const getNewCourses = async () => {
    const courses = await getCoursesByDepartment("CSCE");
    setCourses({
      ...courseList,
      courses    
    });
  };
  console.log(courseList);
  const renderSurveyList = courseList ? courseList.courses.map((course, idx) => {
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
        </Tr>
      </>
    )
  }):null ;


  useEffect(() => {
    getNewCourses();
  }, []);

  useEffect(() => {
    if(!courseList)
      return;
    console.log(sortByInstructor);
    const courses = sortByInstructor ? 
    courseList.courses.sort((a, b) => (a.lastName > b.lastName ? 1 : -1)) 
    : 
    courseList.courses.sort((a, b) => (a.courseNumber > b.courseNumber ? 1 : -1));
    setCourses({
      ...courseList,
      courses    
    });
    
  }, [sortByInstructor]);

  return (

    <div id="top">
      { courseList ?
        <Box rounded="lg" alignItems="center" m="1em" p="3em">
          <Button onClick={toggleSortByInstructor} mb="1em">
              {sortByInstructor ? "Sort by Course Number" : "Sort by Instructor"}
          </Button>
          <Table variant="striped" colorScheme="green" padding="1em">
            <TableCaption placement="top" fontWeight="bold" fontSize="2xl" mt="1em" textColor="black">Generate Student Surveys</TableCaption>
            <Tbody>{renderSurveyList}</Tbody>
          </Table>
        </Box>
        :
        null
      }
    </div>
  );
};
export default GenerateStudentSurveys;

