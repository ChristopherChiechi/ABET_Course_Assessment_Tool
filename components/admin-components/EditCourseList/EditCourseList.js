import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  Select,
  Button,
  IconButton,
  List,
  Input,
  ListItem,
  Flex,
  VStack,
} from "@chakra-ui/react";
import useInputState from "../../../hooks/useInputState";
import fakeData from "../../../fake-data/course.json";
import Courses from "../../Courses";
import {
  getCoursesByDepartment,
  addCourse,
  removeCourse,
} from "../../../api/APIHelper";
import AddCourse from "./AddCourse";
const EditCourseList = () => {
  useEffect(() => {
    document.getElementById("top").scrollIntoView();
  });
  // State of the courses and function to set the new state.
  const [theCourse, setNewCourses] = useState({
    courses: [],
  });

  const [newCourse, addNewCourse] = useState({
    firstName: "",
    userid: "",
    lastName: "",
    year: 0,
    semester: "",
    courseNumber: "",
    displayName: "",
    department: "",
  });
  // State of the department choices and function to set the new state.
  const [theDepartment, setNewDepartment] = useState({
    value: "CSCE",
  });

  // Grabs the courses by department from the back-end.
  const getNewCourses = async () => {
    const newCourseList = await getCoursesByDepartment(theDepartment.value);
    setNewCourses({
      ...theCourse,
      courses: newCourseList,
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
  // Sets the department state to the value of the department selected.
  const dropDownHandler = (event) => {
    event.preventDefault();
    setNewDepartment({
      value: event.target.value,
    });
  };

  // const courseList = fakeData.courses;
  // var cseCourses = [];
  // for (var i = 0; i < courseList.length; i++) {
  //   var obj = {};

  //   obj["name"] = courseList[i].code + " " + courseList[i].name;
  //   obj["id"] = i;
  //   cseCourses.push(obj);
  // }

  // const [course, setCourse, reset] = useInputState("");
  // const [courses, setCourses] = useState(cseCourses);

  // const addCourse = (event) => {
  //   event.preventDefault();
  //   setCourses([
  //     ...courses,
  //     {
  //       id: courses.length,
  //       name: course,
  //     },
  //   ]);
  //   reset();
  // };

  // const removeCourse = (id) => {
  //   event.preventDefault();
  //   setCourses(courses.filter((cours) => cours.id !== id));
  // };

  useEffect(() => {
    getNewCourses();
  }, []);

  useEffect(() => {
    if (newCourse.lastName !== "") {
      addCourse(
        newCourse.userid,
        newCourse.firstName,
        newCourse.lastName,
        newCourse.year,
        newCourse.semester,
        newCourse.courseNumber,
        newCourse.displayName,
        newCourse.department
      );
      alert("New Course Added");
      getNewCourses();
    }
  }, [newCourse]);
  console.log(newCourse);

  const renderCourse = theCourse.courses.map((cours, idx) => {
    return (
      // <Box display="flex" alignItems="center">
      //     <div className="courses-list">
      //         <ListItem className="course-list-card">{cours.name}</ListItem>
      //         <IconButton ml="1em" icon="delete" onClick={(e)=>{
      //                 e.preventDefault();
      //                 if (window.confirm('Are you sure you would like to delete '+cours.name+'?')){
      //                     removeCourse(cours.id)
      //                 }
      //         }}></IconButton>
      //     </div>
      // </Box>
      <ListItem display="inline" justifyContent="center" alignItems="center">
        <Courses
          member={
            cours.department +
            " " +
            cours.courseNumber +
            "\n" +
            cours.displayName
          }
          color={idx % 2 == 0 ? "gray.300" : "gray.100"}
          key={idx}
          year={cours.year}
          semester={cours.semester}
          courseNumber={cours.courseNumber}
          department={cours.department}
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
              mr="1em"
              alignSelf="c"
              width="80%"
              onChange={dropDownHandler}
            >
              <option value="CSCE">Computer Science</option>
              <option value="EENG">Engineering</option>
              <option value="IT">Information Technology</option>
            </Select>
            <Button
              variantColor="green"
              variant="outline"
              display="inline"
              onClick={getNewCourses}
            >
              Submit
            </Button>
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
          {/* <div className="course-list-input">
          <form>
            <Input
              mt="1rem"
              placeholder="enter a new course (i.e. CSCE 3530 Computer Networks)"
              variant="flushed"
              type="text"
              // value={course}
              // onChange={setCourse}
              w="30em"
            />
          </form>
          <IconButton
            variant="link"
            isActive="false"
            mt="1.5em"
            ml="1em"
            variantColor="green"
            size="sm"
            icon="add"
            // onClick={addCourse}
          ></IconButton>
        </div> */}
          {/* <Button variantColor="green" variant="outline" onClick={handleSubmit}>
          Submit
        </Button> */}

          <AddCourse addNewCourse={addNewCourse}></AddCourse>
        </Box>
      </VStack>
    </div>
  );
};
export default EditCourseList;
