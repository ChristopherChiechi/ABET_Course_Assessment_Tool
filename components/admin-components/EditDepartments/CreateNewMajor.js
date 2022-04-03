import React, { useState, useEffect } from "react";
import {
  Flex,
  Text,
  Button,
  Input,
  VStack,
  ListItem,
  FormControl,
  FormLabel,
  Box,
  Grid,
  GridItem,
  List,
  Select,
  useToast,
} from "@chakra-ui/react";
import { getSemesters, getMajors, addMajor } from "../../../api/APIHelper";
import SemesterList from "./MajorList";
import MajorList from "./MajorList";
import useInputState from "../../../hooks/useInputState";

const CreateNewMajor = () => {
  var d = new Date();
  var y = d.getFullYear();
  const [refreshKey, setRefreshKey] = useState(0); //For refreshing the table
  const [year, setYear] = useState(0);
  const [term, setTerm] = useState("");
  const [semID, setSemID] = useState();
  const [majors, setMajors] = useState();
  const [newMajor, setNewMajor] = useInputState("");

  const toast = useToast({ position: "top" });

  const [semesters, setSemesterList] = useState();

  const refreshTable = () => {
    setRefreshKey(refreshKey + 1);
  };

  const handleAddMajor = async () => {
    if (year == "" || term == "" || newMajor == "") {
      toast({
        description: `Please choose a semester and enter a new major!`,
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
      return;
    } else if (!majors) {
      return;
    } else {
      var checkDuplicate = false;
      Object.keys(majors).forEach(function (key) {
        let major = majors[key];
        console.log(major);
        if (major.name == newMajor) {
          console.log("Run");
          toast({
            description: `This semester and major already exists! Please choose a different semester and major.`,
            status: "warning",
            duration: 9000,
            isClosable: true,
          });
          checkDuplicate = true;
        }
      });
      if (checkDuplicate == true) {
        return;
      }
    }
    if (
      window.confirm("Are you sure you would like to create the new major?")
    ) {
      try {
        console.log(`Add major name: ${newMajor} term: ${term} year: ${year}`);
        const res = await addMajor(newMajor, term, year);
        const status = res.status;

        console.log(res);
        if (status == "Success") {
          toast({
            description: `Successfully added the new major! Please refresh the page if you don't see the new change.`,
            status: "success",
            duration: 2000,
            isClosable: true,
          });
        } else {
          toast({
            description: `There was an error! Message: ${status} `,
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        }
        refreshTable();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const getSemesterList = async () => {
    try {
      const semesterlist = await getSemesters();
      const status = semesterlist.status;
      console.log(status);
      if (status != "Success") {
        toast({
          title: "Error",
          description: `There was an error fetching the data!
          Error: ${status} `,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        return;
      }
      const sorted = semesterlist.data.sort((a, b) => {
        return b.year - a.year;
      });
      setSemesterList(sorted);
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error fetching the data!",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      console.log(`Error in getSemesterList: ${error}`);
    }
  };

  const getMajorList = async (semTerm, semYear) => {
    try {
      const majorList = await getMajors(semTerm, semYear);
      const status = majorList.status;
      console.log(status);
      //console.log(semTerm, semYear);
      if (status != "Success") {
        toast({
          title: "Error",
          description: `There was an error fetching the data!
          Error: ${status} `,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        return;
      }
      setMajors(majorList.data);
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error fetching the data!",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      console.log(`Error in getMajorList: ${error}`);
    }
  };

  useEffect(() => {
    document.getElementById("top").scrollIntoView();
  });

  useEffect(() => {
    if (semesters) {
      Object.keys(semesters).forEach(function (key) {
        let semester = semesters[key];
        if (semester.semesterId == semID) {
          //console.log(`Found: ${semester.term} ${semester.year}`);
          setTerm(semester.term);
          setYear(semester.year);
          getMajorList(semester.term, semester.year);
        }
      });
    }
  }, [semID]);

  useEffect(() => {
    getSemesterList();
  }, []);

  useEffect(() => {
    if (!term == "" || !year == 0) {
      getMajorList(term, year);
    }
  }, [refreshKey]);

  const renderMajor =
    majors &&
    majors.map((major, idx) => {
      return (
        <ListItem key={major.majorId}>
          <MajorList
            refreshTable={refreshTable}
            majorName={major.name}
            term={term}
            year={year}
            color={idx % 2 == 0 ? "green.200" : "gray.300"}
          />
        </ListItem>
      );
    });

  return (
    <div id="top">
      <VStack id="top" w="50%" m="0 auto" marginBottom="10em">
        <Text fontSize="2xl" fontWeight="bold" mt="1em">
          Majors List
        </Text>
        <Box fontWeight="bold">Choose a semester and hit submit.</Box>
        <Flex justifyContent="center">
          <Select
            align="center"
            id="term"
            placeholder="Select semester"
            borderColor="teal"
            width="100%"
            isRequired={true}
            value={semID}
            onChange={(e) => {
              console.log(`Semester ID: ${e.target.value}`);
              setSemID(e.target.value);
            }}
          >
            {semesters &&
              semesters.map((sem, idx) => {
                return (
                  <option value={sem.semesterId} id="ingredientId" key={idx}>
                    {sem.term} {sem.year}
                  </option>
                );
              })}
          </Select>
        </Flex>

        <List>{renderMajor}</List>
        <Text fontSize="2xl" fontWeight="bold" mt="1em">
          Create New Major
        </Text>
        <FormControl w="80%" align="center" justifyContent="center" isRequired>
          <FormLabel w="40%" textAlign={"center"}>
            Please enter the new major name
          </FormLabel>
          <Input
            align="center"
            w="15%"
            variant="outline"
            borderColor="teal"
            placeholder={term}
            disabled
            ml="1"
            errorBorderColor="red"
          />
          <Input
            align="center"
            w="15%"
            variant="outline"
            placeholder={year}
            borderColor="teal"
            disabled
            ml="1"
            errorBorderColor="red"
          />
          <Input
            align="center"
            w="20%"
            placeholder="Major Name"
            variant="filled"
            value={newMajor}
            onChange={setNewMajor}
            ml="1"
            borderColor="teal"
            errorBorderColor="red"
          />
        </FormControl>
        <Button colorScheme="teal" variant="solid" onClick={handleAddMajor}>
          Add Major
        </Button>
      </VStack>
    </div>
  );
};
export default CreateNewMajor;
