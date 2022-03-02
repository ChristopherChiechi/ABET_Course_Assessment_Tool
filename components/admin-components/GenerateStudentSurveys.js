//imports
import React, { useState, useEffect } from "react";
import { Link, Grid, Tr, Td, GridItem, Select, VStack } from "@chakra-ui/react";
const jwt = require("jsonwebtoken");
//api
import { getCoursesByDepartment, getSemesters } from "../../api/APIHelper";
//hooks
import useToggle from "../../hooks/useToggle";
const GenerateStudentSurveys = () => {
  const [courseList, setCourses] = useState();
  //toggle sort by instructor
  const [sortByInstructor, toggleSortByInstructor] = useToggle();
  const [selectDepartment, setSelectDepartment] = useState("");
  const [semJson, setSemJson] = useState();
  const [semesters, setSemesterList] = useState();
  const [year, setYear] = useState();
  const [term, setTerm] = useState();
  //Get Semester List after department is select
  const getSemesterList = async () => {
    try {
      const semesterlistRes = await getSemesters();
      const res = semesterlistRes.status;
      if (res != "Success") {
        toast({
          title: "Error",
          description: `There was an error fetching the data! Error: ${res}`,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        return;
      }
      const sorted = semesterlistRes.data.sort((a, b) => {
        return b.year - a.year;
      });
      setSemesterList(sorted);
    } catch (error) {
      console.log(error);
    }
  };

  //Check if the department is select before enable the dropdown for semester
  const checkIfSelectMajor = () => {
    if (!selectDepartment) {
      return true;
    }
    return false;
  };

  //Add error handling
  const getNewCourses = async () => {
    if (!semJson) {
      return;
    }
    const semesterParse = JSON.parse(semJson);
    setYear(semesterParse["year"]);
    setTerm(semesterParse["term"]);
    const coursesRes = await getCoursesByDepartment(
      semesterParse["term"],
      semesterParse["year"],
      selectDepartment
    );

    const courses = coursesRes.data;
    setCourses({
      ...courseList,
      courses,
    });
    if (courses) {
      console.log(courses);
    }
  };

  const secretKey = process.env.SURVEY_JWT_KEY;

  const renderSurveyList = async () => {
    if (!courseList) {
      return;
    }
    try {
      courseList.courses.map((course, idx) => {
        var token = jwt.sign(
          {
            courseNumber: course.courseNumber,
            courseSemester: term,
            courseYear: year,
            instructorID: course.coordinatorEUID,
            departmentName: selectDepartment,
            displayName: course.displayName,
          },
          secretKey
        );
        var link = "http://localhost:3000/survey/" + token;
        console.log(link);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSemesterList();
  }, [selectDepartment]);

  useEffect(() => {
    getNewCourses();
  }, [semJson]);

  useEffect(() => {
    renderSurveyList();
  }, [courseList]);

  useEffect(() => {
    if (!courseList) return;
    console.log(sortByInstructor);
    const courses = sortByInstructor
      ? courseList.courses.sort((a, b) => (a.lastName > b.lastName ? 1 : -1))
      : courseList.courses.sort((a, b) =>
          a.courseNumber > b.courseNumber ? 1 : -1
        );
    setCourses({
      ...courseList,
      courses,
    });
  }, [sortByInstructor]);

  return (
    <div id="top">
      <VStack id="top" w="100%">
        <Grid mt="2em" templateColumns="repeat(2, 1fr)" gap={4}>
          <GridItem>
            <Select
              id="department"
              width="100%"
              isRequired={true}
              placeholder="Select Department"
              borderColor="teal"
              value={selectDepartment}
              onChange={(e) => {
                if (e.target.value == "") {
                  setSelectDepartment(null);
                } else {
                  setSelectDepartment(e.target.value);
                }
              }}
            >
              <option value="CSCE">Computer Science</option>
              <option value="EENG">Engineering</option>
              <option value="IT">Information Technology</option>
            </Select>
          </GridItem>
          <GridItem>
            <Select
              id="term"
              placeholder="Select semester"
              borderColor="teal"
              width="100%"
              isRequired={true}
              value={semJson}
              disabled={checkIfSelectMajor()}
              onChange={(e) => {
                if (e.target.value == "") {
                  setSemJson(null);
                } else {
                  setSemJson(e.target.value);
                }
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
          </GridItem>
        </Grid>
      </VStack>
    </div>
  );
};

export default GenerateStudentSurveys;
