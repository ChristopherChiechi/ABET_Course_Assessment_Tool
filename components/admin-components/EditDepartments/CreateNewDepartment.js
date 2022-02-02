import React, { useState, useEffect } from "react";
import {
  Text,
  Button,
  Input,
  VStack,
  ListItem,
  FormControl,
  FormLabel,
  List,
  useToast,
} from "@chakra-ui/react";
import { getSemesters, addNewSemester } from "../../../api/APIHelper";
import SemesterList from "./DepartmentList";

const CreateNewDepartment = () => {
  var d = new Date();
  var y = d.getFullYear();
  const [refreshKey, setRefreshKey] = useState(0); //For refreshing the table
  const [year, setYear] = useState(0);
  const [term, setTerm] = useState("");
  const toast = useToast();
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
    const sorted = semesterlist.data.sort((a, b) => {
      return a.year - b.year;
    });
    setSemesterList(sorted);
    //console.log(sorted);
    /*
    try {
      const semesterResponse = await getSemesters();
      console.log(semesterResponse);
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error fetching the data!",
        status: "Error",
        duration: 9000,
        isClosable: true,
      });
      console.log(`Error in getSemesterList: ${error}`);
    }*/
  };

  useEffect(() => {
    getSemesterList();
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
          Create New Department
        </Text>
        <FormControl w="80%" align="center">
          <FormLabel w="40%" textAlign={"center"}>
            Please enter the new department name
          </FormLabel>
          <Input align="center" w="20%" variant="filled" borderColor="teal" />
        </FormControl>
        <Button colorScheme="teal" variant="solid" onClick={addSemester}>
          Add Semester
        </Button>
      </VStack>
    </div>
  );
};
export default CreateNewDepartment;
