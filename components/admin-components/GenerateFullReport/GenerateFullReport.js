import { useState, useEffect } from "react";
import { Button, Select, Text, VStack, Box } from "@chakra-ui/react";
import Link from "next/link";

import { getAllCourses, getInstructorCourses } from "../../../api/APIHelper";
import CourseList from "../GenerateSectionReport/CourseList"; // this will have to be changed

const GenerateFullReport = ({ user }) => {
  const [term, setTerm] = useState({
    semester: "",
    year: null,
  });
  const [courses, setCourses] = useState();
  const handleConfirm = (e) => {
    e.preventDefault();
    // will have to be updated when backend is completed
  };

  // this is hard coded data that will have to be changed when the backend is completed
  const terms = [
    {
      term: "Spring",
    },
    {
      term: "Summer",
    },
    {
      term: "Fall",
    },
  ];
  const years = [
    {
      year: 2020,
    },
    {
      year: 2021,
    },
    {
      year: 2022,
    },
  ];

  return (
    <VStack id="top" w="80%" m="0 auto" marginBottom="5em">
      <Text fontSize="2xl" fontWeight="bold" mt="1em" marginBottom="2em">
        Generate Full ABET Report
      </Text>

      <Box fontWeight="bold">
          Select the Term and Year
      </Box>
        <Select
          mt="1em"
          w="50%"
          id="term"
          placeholder=""
          variant="filled"
          //onChange={handleSetTerm}
          marginBottom="1em"
        >
          <option value={terms[0].term}>
            {terms[0].term}
          </option>
          <option value={terms[1].term}>
            {terms[1].term}
          </option>
          <option value={terms[2].term}>
            {terms[2].term}
          </option>
        </Select>
      <Select
          mt="1em"
          id="year"
          placeholder=""
          variant="filled"
          //onChange={handleSetYear}
          marginTop="1em"
          marginBottom="2em"
          width="50%"
        >
          <option value={years[0].year.toString(10)}>
            {years[0].year}
          </option>
          <option value={years[1].year.toString(10)}>
            {years[1].year}
          </option>
          <option value={years[2].year.toString(10)}>
            {years[2].year}
          </option>
        </Select>
        <Button
          //onClick={handleConfirm}
          color="white"
          bg="#016a31"
          height="10"
          rounded="md"
          width="20"
                        
        _hover={{
        background: "teal",
        color: "white",
        }}
                        
        variant="link" onClick={e => {
          e.preventDefault();
          //handleConfirm(terms.term, years.year);
        }}
        >
        <Link
          href={{
          pathname: "/fullReport",
          query: { 
            semester: terms.term,
            year: years.year
          },
        }}>
          Confirm
          </Link>
        </Button>
    </VStack>
  );
};

export default GenerateFullReport;
