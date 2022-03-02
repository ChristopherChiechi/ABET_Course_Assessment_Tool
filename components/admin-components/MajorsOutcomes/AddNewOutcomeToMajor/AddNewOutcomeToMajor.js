import React, { useState, useEffect } from "react";
import { Box, Text, Select, Flex, VStack, useToast } from "@chakra-ui/react";
import { getSemesters, getMajors } from "../../../../api/APIHelper";
import AddNewOutcomeToMajorTable from "./AddNewOutcomeToMajorTable";

const AddNewOutcomeToMajor = () => {
  useEffect(() => {
    document.getElementById("top").scrollIntoView();
  });

  // State of the courses and function to set the new state.
  const [theCourse, setNewCourses] = useState({
    courses: [],
  });

  const toast = useToast({ position: "top" });
  const [refreshKey, setRefreshKey] = useState(0); //For refreshing the table
  const [theDepartment, setDepartment] = useState("");
  const [semesters, setSemesterList] = useState();
  const [semJson, setSemJson] = useState();
  const [year, setYear] = useState();
  const [term, setTerm] = useState();
  const [majorSelect, setMajorSelect] = useState();
  const [majorsList, setMajorsList] = useState();

  const getMajorsList = async () => {
    if (!semJson) return;
    const semesterParse = JSON.parse(semJson);
    try {
      const majorListRes = await getMajors(
        semesterParse["term"],
        semesterParse["year"]
      );
      setTerm(semesterParse["term"]);
      setYear(semesterParse["year"]);
      const majorListData = majorListRes.data;
      const status = majorListRes.status;

      if (status != "Success") {
        toast({
          title: "Error",
          description: `There was an error fetching the course list! Error: ${status}`,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        return;
      }
      if (!majorListData) return;
      setMajorsList(majorListData);
      if (majorsList) console.log(majorsList);
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    {
      title: "Name",
      field: "name",
      validate: (rowData) => (rowData.name ? true : "Name can not be empty"),
    },
    {
      title: "Description",
      field: "description",
      validate: (rowData) =>
        rowData.description ? true : "Description can not be empty",
    },
  ];

  const data = [
    {
      name: "IT Outcome 1",
      description:
        "An ability to apply knowledge of computing and mathematics appropriate to the program’s student outcomes and to the discipline",
    },
    {
      name: "IT Outcome 2",
      description:
        "An ability to analyze a problem, and identify and define the computing requirements appropriate to its solution.",
    },
    {
      name: "IT Outcome 3",
      description:
        "An ability to design, implement, and evaluate a computer-based system, process, component, or program to meet desired needs.      ",
    },
  ];

  //Check if the department is select before enable the dropdown for semester
  const checkIfSelectMajor = () => {
    if (!theDepartment) {
      return true;
    }
    return false;
  };

  const checkIfSelectMajorAndSemseter = () => {
    if (!theDepartment || !semJson) {
      return true;
    }
    return false;
  };

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
      if (semesters) {
        console.log(semesters);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const refreshTable = () => {
    setRefreshKey(refreshKey + 1);
  };

  //Fetch semester list on department change
  useEffect(() => {
    getSemesterList();
  }, [theDepartment]);

  useEffect(() => {
    getMajorsList();
  }, [semJson]);

  return (
    <div>
      <VStack id="top" w="90%" m="0 auto">
        <Box m="1em" p="3em">
          <Text align="center" fontSize="2xl" fontWeight="bold" mt="1em">
            Add New Outcome to Major
          </Text>

          <Flex justifyContent="center">
            <Select
              id="department"
              width="70%"
              mr="1em"
              isRequired={true}
              placeholder="Select Department"
              borderColor="teal"
              value={theDepartment}
              onChange={(e) => {
                setDepartment(e.target.value);
              }}
            >
              <option value="CSCE">Computer Science</option>
              <option value="EENG">Engineering</option>
              <option value="IT">Information Technology</option>
            </Select>
            <Select
              id="term"
              placeholder="Select semester"
              borderColor="teal"
              width="70%"
              isRequired={true}
              value={semJson}
              disabled={checkIfSelectMajor()}
              onChange={(e) => {
                setSemJson(e.target.value);
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
            <Select
              id="term"
              placeholder="Select major"
              borderColor="teal"
              ml="1em"
              width="60%"
              value={majorSelect}
              isRequired={true}
              disabled={checkIfSelectMajorAndSemseter()}
              onChange={(e) => {
                setMajorSelect(e.target.value);
                console.log(e.target.value);
              }}
            >
              {majorsList &&
                majorsList.map((major, idx) => {
                  return (
                    <option value={major.name} key={idx}>
                      {major.name}
                    </option>
                  );
                })}
            </Select>
          </Flex>
        </Box>
      </VStack>
      <Box align="center" w="60%" margin="auto">
        {!semJson && !theDepartment && (
          <Text fontWeight="bold" mt="1em" fontSize="lg" align="center">
            [Table] Waiting for department and semester selection
          </Text>
        )}
        {semJson && theDepartment && (
          <Text fontWeight="bold" mb="1em" fontSize="lg" align="center">
            Courses Table
          </Text>
        )}

        {semJson && theDepartment && majorSelect && (
          <AddNewOutcomeToMajorTable
            columns={columns}
            data={data}
            year={year}
            term={term}
            majorName={majorSelect}
            refreshTable={refreshTable}
          />
        )}
      </Box>
    </div>
  );
};
export default AddNewOutcomeToMajor;
