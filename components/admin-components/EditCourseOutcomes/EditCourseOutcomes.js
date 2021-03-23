import React, { useState, useEffect } from "react";
import { Box, Select, Button, Text, VStack } from "@chakra-ui/react";
import OutcomeList from "../EditCourseOutcomes/EditOutcomeList";
import fakeData from "../../../fake-data/course.json";

const courses = fakeData.courses;

console.log(courses);

const EditCourseOutcomes = () => {
  useEffect(() => {
    document.getElementById("top").scrollIntoView();
  });

  const [option, setOption] = useState();
  const handleSetOption = (e) => {
    setOption(e.target.value);
  };

  console.log(option);

  const renderOptions = courses.map((course, idx) => {
    return (
      <option value={course.code} key={idx}>
        {course.code} {course.name}
      </option>
    );
  });

  const selectedCourse = courses.filter((course) => course.code == option)[0];

  console.log(selectedCourse);

  return (
    <>
      <VStack id="top" w="80%" m="0 auto" marginBottom="10em">
        <Text fontSize="2xl" fontWeight="bold" mt="1em">
          Edit Course Outcomes
        </Text>

        <Select
          mt="1em"
          w="70%"
          id="course"
          placeholder="Select course"
          variant="filled"
          onChange={handleSetOption}
          value={option}
          marginBottom="2em"
        >
          {/* this should be filled with a list of courses from db */}
          {renderOptions}
        </Select>

        <div>
          {option ? <OutcomeList prop={selectedCourse} /> : <div></div>}
        </div>
      </VStack>
    </>
  );
};

export default EditCourseOutcomes;
