import { useState, useEffect } from "react";
import { Button, Select, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";

import { getAllCourses, getInstructorCourses } from "../../../api/APIHelper";
import CourseList from "./CourseList";

const GenerateSectionReport = ({ user }) => {
  const [term, setTerm] = useState({
    semester: "",
    year: null,
  });
  const [courses, setCourses] = useState();
  const terms = [
    {
      semester: "Spring",
      year: 2020,
    },
    {
      semester: "Summer",
      year: 2020,
    },
    {
      semester: "Fall",
      year: 2020,
    },
  ];
  const handleSetTerm = async (e) => {
    setTerm({
      semester: e.target.value.split(" ")[0],
      year: e.target.value.split(" ")[1],
    });
    console.log(e.target.value.split(" ")[1]);
    console.log(term.year);
    const coursesRes = await getAllCourses(user, "fall", 2020);
    console.log(coursesRes);
    setCourses(coursesRes);
  };

  

  return (
    <VStack id="top" w="80%" m="0 auto" marginBottom="5em">
      <Text fontSize="2xl" fontWeight="bold" mt="1em" marginBottom="2em">
        Find Section ABET Report
      </Text>
      {term.year == null ? (
        <Select
          mt="1em"
          w="80%"
          id="semester"
          placeholder="Choose Semester"
          variant="filled"
          onChange={handleSetTerm}
          value={term}
          marginBottom="1em"
        >
          <option value={terms[0].semester + " " + terms[0].year.toString(10)}>
            {terms[0].semester} {terms[0].year}
          </option>
          <option value={terms[1].semester + " " + terms[1].year.toString(10)}>
            {terms[1].semester} {terms[1].year}
          </option>
          <option value={terms[2].semester + " " + terms[2].year.toString(10)}>
            {terms[2].semester} {terms[2].year}
          </option>
        </Select>
      ) : (
        <>
          <Text fontSize="20px" fontWeight="bold" mt="1em" marginBottom="2em">
            {term.semester} {term.year}
          </Text>
          <CourseList courses={courses} term={term}/>
        </>
      )}
    </VStack>
  );
};

export default GenerateSectionReport;
