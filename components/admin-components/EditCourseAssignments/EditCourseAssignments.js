import React, { useEffect } from "react";
import { Box, Button, Divider, Text } from "@chakra-ui/react";
import AssignCourseInput from "./AssignCourseInput";
import fakeData from "../../../fake-data/course.json";

const EditCourseAssignments = () => {
  useEffect(() => {
    document.getElementById("top").scrollIntoView();
  });

  const handleSave = (event) => {
    event.preventDefault();
    //POST the course assignments to the db
    alert("Course Assignments Saved");
  };

  const courses = fakeData.courses;
  const renderCourses = courses.map((course, idx) => {
    return <AssignCourseInput course={course.code} key={idx} />;
  });

  return (
    <div id="top">
      <Box fontWeight="bold" marginTop="1em" marginBottom="1em">
        <Text align="center" fontSize="20px">
          Edit Assigned Courses
        </Text>
      </Box>
      <Box borderWidth="2px" rounded="lg" alignItems="center" m="1em" p="3em">
        <div className="course-input">
          <div className="course">
            <Text
              fontSize="lg"
              fontWeight="bold"
              display="inline"
              flexDirection="row"
              justifyContent="left"
              textAlign="left"
              marginLeft="2rem"
              width="8rem"
              marginBottom=".2em"
            >
              Course
            </Text>

            <Text
              fontSize="lg"
              fontWeight="bold"
              display="inline"
              flexDirection="row"
              justifyContent="left"
              textAlign="left"
              marginLeft="10rem"
              width="15rem"
              marginBottom=".2em"
            >
              Coordinator
            </Text>

            <Text
              fontSize="lg"
              fontWeight="bold"
              display="inline"
              flexDirection="row"
              justifyContent="left"
              textAlign="left"
              marginLeft="2rem"
              width="10rem"
              marginBottom=".2em"
            >
              Section
            </Text>

            <Text
              fontSize="lg"
              fontWeight="bold"
              display="inline"
              flexDirection="row"
              justifyContent="left"
              textAlign="left"
              marginLeft="2rem"
              width="15rem"
              marginBottom=".2em"
            >
              Instructor
            </Text>
          </div>
          <div className="coordinator"></div>
          <div className="section"></div>
          <div className="instructor"></div>
          <div className="trash">
            <Text
              fontSize="lg"
              fontWeight="bold"
              display="flex"
              flexDirection="row"
              justifyContent="left"
              textAlign="left"
              marginLeft="2rem"
              width="5rem"
              marginBottom=".2em"
            ></Text>
          </div>
        </div>
        <Divider mb="2rem" borderColor="black" />
        {renderCourses}
        <Button variantColor="green" variant="outline" onClick={handleSave}>
          Save
        </Button>
      </Box>
    </div>
  );
};
export default EditCourseAssignments;
