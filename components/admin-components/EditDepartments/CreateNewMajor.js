import React, { useState, useEffect } from "react";
import {
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
  const [semID, setSemID] = useState(9999);
  const [majors, setMajors] = useState();
  const [newMajor, setNewMajor] = useInputState("");

  const toast = useToast();

  const [semesters, setSemesterList] = useState();

  useEffect(() => {
    document.getElementById("top").scrollIntoView();
  });

  const refreshTable = () => {
    setRefreshKey(refreshKey + 1);
  };

  const handleAddMajor = async (event) => {
    if (year == "" || term == "" || newMajor == "") {
      toast({
        description: `Please choose a semester and enter a new major!`,
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
      return;
    } else {
      var checkDuplicate = false;
      Object.keys(majors).forEach(function (key) {
        // TODO: iterate through majors and not semesters?
        let major = majors[key];
        console.log(major);
        //console.log(`key: ${key} MAJOR: ${major}`); // semester.newMajor is undefined, but newMajor is defined
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
        console.log(res);
        if (res == "Success") {
          toast({
            description: `Successfully added the new major! Please refresh the page if you don't see the new change.`,
            status: "success",
            duration: 2000,
            isClosable: true,
          });
        } else {
          toast({
            description: `There was an error! Message: ${res} `,
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
    const semesterlist = await getSemesters();
    const sorted = semesterlist.data.sort((a, b) => {
      return b.year - a.year;
    });
    setSemesterList(sorted);
  };

  const getMajorList = async (semTerm, semYear) => {
    console.log(semTerm, semYear);
    const majorList = await getMajors(semTerm, semYear);
    setMajors(majorList.data);
  };

  const handleSubmit = () => {
    Object.keys(semesters).forEach(function (key) {
      let semester = semesters[key];
      if (semester.semesterId == semID) {
        //console.log(`Found: ${semester.term} ${semester.year}`);
        setTerm(semester.term);
        setYear(semester.year);
        getMajorList(semester.term, semester.year);
      }
    });
  };

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
        <Grid templateColumns="repeat(2, 1fr)" gap={1} w="40%">
          <GridItem>
            <Select
              ml="3em"
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
          </GridItem>
          <GridItem>
            <Button ml="3em" onClick={handleSubmit} colorScheme="teal">
              Submit
            </Button>
          </GridItem>
        </Grid>

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
