import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  Select,
  Button,
  Input,
  VStack,
  ListItem,
  FormLabel,
  List,
} from "@chakra-ui/react";
import { getSemesters, addNewSemester } from "../../../api/APIHelper";
import SemesterList from "./SemesterList";

const CreateNewSemester = () => {
  var d = new Date();
  var y = d.getFullYear();
  const [refreshKey, setRefreshKey] = useState(0); //For refreshing the table
  const [year, setYear] = useState(0);
  const [term, setTerm] = useState("");

  const [semesters, setSemesterList] = useState();
  useEffect(() => {
    document.getElementById("top").scrollIntoView();
  });

  const refreshTable = () => {
    setRefreshKey(refreshKey + 1);
  };

  const addSemester = (event) => {
    event.preventDefault();
    if (year == "" && term == "") {
      alert("Please select a term and year!");
      return;
    }
    if (
      window.confirm(
        "Are you sure you would like to create the selected new semester?"
      )
    ) {
      addNewSemester(year, term);
      refreshTable();
    }
  };

  const getSemesterList = async () => {
    const semesterlist = await getSemesters();
    //console.log(semesterlist);
    const sorted = semesterlist.sort((a, b) => {
      return a.year - b.year;
    });
    setSemesterList(sorted);
    //console.log(sorted);
  };

  useEffect(() => {
    getSemesterList();
    /*Debug
    if(semesters){
      console.log(semesters);
    }
    */
  }, [refreshKey]);

  const renderSemester =
    semesters &&
    semesters.map((sem, idx) => {
      return (
        <ListItem key={sem.semesterId}>
          <SemesterList
            refreshTable={refreshTable}
            year={sem.year}
            term={sem.term}
            color={idx % 2 == 0 ? "green.200" : "gray.300"}
            key={sem.semesterId}
          />
        </ListItem>
      );
    });

  return (
    <div id="top">
      <VStack id="top" w="80%" m="0 auto" marginBottom="10em">
        <Text fontSize="2xl" fontWeight="bold" mt="1em">
          All Semester
        </Text>

        <List>{renderSemester}</List>

        <Text fontSize="2xl" fontWeight="bold" mt="1em">
          Create New Semester
        </Text>
        <Box fontWeight="bold">
          Select the term and year for the new semester.
        </Box>
        <Select
          mt="1em"
          id="term"
          placeholder="Select term"
          borderColor="teal"
          width="40%"
          marginBottom="1em"
          isRequired
          value={term}
          onChange={(e) => {
            console.log(e.target.value);
            setTerm(e.target.value);
          }}
        >
          <option value="Spring">Spring</option>
          <option value="Summer">Summer</option>
          <option value="Fall">Fall</option>
        </Select>
        <Select
          mt="1em"
          id="year"
          placeholder="Select year"
          borderColor="teal"
          marginTop="1em"
          marginBottom="2em"
          isRequired="true"
          value={year}
          onChange={(e) => {
            console.log(e.target.value);
            setYear(e.target.value);
          }}
          width="40%"
        >
          <option value={y - 1}>{y - 1}</option>
          <option value={y}>{y}</option>
          <option value={y + 1}>{y + 1}</option>
          <option value={y + 2}>{y + 2}</option>
        </Select>
        <Button colorScheme="teal" variant="solid" onClick={addSemester}>
          Add Semester
        </Button>
      </VStack>
    </div>
  );
};
export default CreateNewSemester;
