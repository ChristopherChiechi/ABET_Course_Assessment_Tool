import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  Button,
  List,
  ListItem,
  Link,
} from "@chakra-ui/react";
import { getCoursesByDepartment } from "../../api/APIHelper";
import { listParser } from "@chakra-ui/styled-system";
import useToggle from "../../hooks/useToggle"
const GenerateStudentSurveys = () => {



  const [courseList, setCourses] = useState({ courses: [] });
  const [isOn,toggleOn]= useToggle()
  const getNewCourses = async () => {
    const newCourseList = await getCoursesByDepartment("CSCE");
    setCourses({
      ...courseList,
      courses: newCourseList,
    });
    console.log(courseList.courses);
  };
  const setButtonHandler =()=>{
    setButtonName("Sort by Course Number")
    
  }
  const surveyCourses = []
    .concat(courseList.courses)
    .sort((a, b) => (a.courseNumber > b.courseNumber ? 1 : -1))
    .map((course, idx) => {
      return (
        <>
        <ListItem key={idx}  bg={idx % 2 == 0 ? "gray.300" : "gray.100"}>
          {course.department} {course.courseNumber}.{course.sectionNumber}{" "}
          {course.displayName}{" "}
          <br></br>
          <Text>
            {course.coordinator.firstName} {course.coordinator.lastName}
          </Text>
          <Link color="teal" href="https://www.unt.edu/">Student Survey Link</Link>
        </ListItem>
        </>
      );
    });

    const surveyCoursesByInstuctor = []
    .concat(courseList.courses)
    .sort((a, b) => (a.lastName > b.lastName ? 1 : -1))
    .map((course, idx) => {
      console.log(course)
      return (
        <>
        <ListItem key={idx}  bg={idx % 2 == 0 ? "gray.300" : "gray.100"}>
          
          {course.department} {course.courseNumber}.{course.sectionNumber}{" "}
          {course.displayName} {" "}
          <br></br>
          <Text>
            {course.coordinator.firstName} {course.coordinator.lastName}
          </Text>
          <Link color="teal" href="https://www.unt.edu/">Student Survey Link</Link>
        </ListItem>
        </>
      );
    });
  useEffect(() => {
    getNewCourses();
  }, []);
  const show = isOn
  if (show) {
    return(
      <div id="top">
      <Box borderWidth="2px" rounded="lg" alignItems="center" m="1em" p="3em">
        <div>
          <Box>
            <Text fontWeight="bold" fontSize="lg" mb="1em">
              Generate Student Surveys
            </Text>
            <Button onClick={toggleOn} mb="1em">Sort by Course Number</Button>
            <List>{surveyCoursesByInstuctor}</List>
            
          </Box>
        </div>
      </Box>
    </div>
    )
  }
  if(!show){
    return(
      <div id="top">
      <Box borderWidth="2px" rounded="lg" alignItems="center" m="1em" p="3em">
        <div>
          <Box>
            <Text fontWeight="bold" fontSize="lg" mb="1em">
              Generate Student Surveys
            </Text>
            <Button onClick={toggleOn} mb="1em">Sort by Instructors</Button>
            <List>{surveyCourses}</List>
          </Box>
        </div>
      </Box>
    </div>
    )
  }

};
export default GenerateStudentSurveys;
