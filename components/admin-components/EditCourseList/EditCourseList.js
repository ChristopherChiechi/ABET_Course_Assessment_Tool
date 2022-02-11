import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  Select,
  List,
  ListItem,
  Flex,
  VStack,
} from "@chakra-ui/react";
import Courses from "../../Courses";
import { getCoursesByDepartment, getSemesters } from "../../../api/APIHelper";
import AddCourse from "./AddCourse";
const EditCourseList = () => {
  useEffect(() => {
    document.getElementById("top").scrollIntoView();
  });
  // State of the courses and function to set the new state.
  const [theCourse, setNewCourses] = useState({
    courses: [],
  });
  const [refreshKey, setRefreshKey] = useState(0); //For refreshing the table
  const [theDepartment, setDepartment] = useState("");
  const [semesters, setSemesterList] = useState();
  const [semJson, setSemJson] = useState();

  // Grabs the courses by department from the back-end.
  const getNewCourses = async () => {
    console.log("ran");
    if (!semJson) {
      return;
    }
    const semesterParse = JSON.parse(semJson);
    console.log(semesterParse);
    const newCourseList = await getCoursesByDepartment(
      semesterParse["term"],
      semesterParse["year"],
      theDepartment
    );
    setNewCourses({
      ...theCourse,
      courses: newCourseList.data,
    });
    console.log(theCourse.courses);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      window.confirm("Are you sure you would like to submit these changes?")
    ) {
      //POST the course list change to the db here
      alert("Course List Updated!");
    }
  };

  //Check if the department is select before enable the dropdown for semester
  const checkIfSelectMajor = () => {
    console.log(theDepartment);
    if (!theDepartment) {
      return true;
    }
    return false;
  };

  const getSemesterList = async () => {
    const semesterlist = await getSemesters();
    const sorted = semesterlist.data.sort((a, b) => {
      return b.year - a.year;
    });
    setSemesterList(sorted);
  };

  const refreshTable = () => {
    setRefreshKey(refreshKey + 1);
  };

  useEffect(() => {
    getSemesterList();
  }, []);

  useEffect(() => {
    getNewCourses();
    console.log("refresh");
  }, [semJson, theDepartment, refreshKey]);

  const renderCourse =
    theCourse.courses &&
    theCourse.courses.map((cours, idx) => {
      return (
        <ListItem
          key={idx}
          display="inline"
          justifyContent="center"
          alignItems="center"
        >
          <Courses
            DisplayName={cours.displayName}
            coordinatorID={cours.coordinatorEUID}
            color={idx % 2 == 0 ? "green.200" : "gray.300"}
            key={idx}
            year={cours.year}
            semester={cours.semester}
            courseNumber={cours.courseNumber}
            department={cours.department}
            courseComplete={cours.isCourseCompleted}
          />
        </ListItem>
      );
    });

  return (
    <div id="top">
      <VStack id="top" w="90%" m="0 auto">
        <Text fontSize="2xl" fontWeight="bold" mt="1em">
          Edit Course List
        </Text>

        <Box m="1em" p="3em">
          <Text
            align="center"
            fontWeight="bold"
            mt="1em"
            mb="1em"
            fontSize="lg"
          >
            Select Department
          </Text>
          <Flex justifyContent="center">
            <Select
              id="department"
              width="70%"
              mr="1em"
              isRequired={true}
              placeholder="Select Department"
              borderColor="teal"
              value={theDepartment}
              onChange={(e) => {
                console.log(`Department select: ${e.target.value}`);
                setDepartment(e.target.value);
              }}
            >
              <option value="CSCE">Computer Science</option>
              <option value="EENG">Engineering</option>
              <option value="IT">Information Technology</option>
            </Select>
            <Select
              id="term"
              placeholder="Select semester"
              borderColor="teal"
              width="70%"
              isRequired={true}
              value={semJson}
              disabled={checkIfSelectMajor()}
              onChange={(e) => {
                console.log(`Semester ID: ${e.target.value}`);
                setSemJson(e.target.value);
              }}
            >
              {semesters &&
                semesters.map((sem, idx) => {
                  return (
                    <option value={JSON.stringify(sem)} key={idx}>
                      {sem.term} {sem.year}
                    </option>
                  );
                })}
            </Select>
          </Flex>
          <Text
            fontWeight="bold"
            mt="1em"
            mb="1em"
            fontSize="lg"
            align="center"
          >
            Courses
          </Text>
          <Flex justifyContent="center">
            <List w="80%">{renderCourse}</List>
          </Flex>

          <AddCourse refreshTable={refreshTable}></AddCourse>
        </Box>
      </VStack>
    </div>
  );
};
export default EditCourseList;
