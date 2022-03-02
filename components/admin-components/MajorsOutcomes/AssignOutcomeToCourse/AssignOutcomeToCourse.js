import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  Select,
  VStack,
  useToast,
  Center,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import {
  getCoursesByDepartment,
  getSemesters,
  getMajors,
} from "../../../../api/APIHelper";
import { SingleSelect } from "react-select-material-ui";
import AssignOutcomeToCourseTable from "./AssignOutcomeToCourseTable";
const AssignOutcomeToCourse = () => {
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
  const [lookupObjectCourse, setLookupObjectCourse] = useState();
  const [majorsList, setMajorsList] = useState();
  const [majorSelect, setMajorSelect] = useState();
  const [selectCourse, setSelectCourse] = useState();
  const [courseSelectionOptions, setCourseSelectionOptions] = useState();

  const getMajorsList = async () => {
    const lookup = {};
    if (!semJson) return;
    const semesterParse = JSON.parse(semJson);
    try {
      const majorListRes = await getMajors(
        semesterParse["term"],
        semesterParse["year"]
      );
      const majorListData = majorListRes.data;
      const status = majorListRes.status;
      if (!majorListData) return;
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
      setMajorsList(majorListData);
    } catch (error) {
      console.log(error);
    }
  };

  // Get the courses by department from the back-end.
  const getNewCourses = async () => {
    const lookup = {};
    if (!semJson) {
      return;
    }
    const semesterParse = JSON.parse(semJson);
    setYear(semesterParse["year"]);
    setTerm(semesterParse["term"]);
    try {
      const newCourseListRes = await getCoursesByDepartment(
        semesterParse["term"],
        semesterParse["year"],
        theDepartment
      );
      const courseList = newCourseListRes.data;
      const res = newCourseListRes.status;
      if (res != "Success") {
        toast({
          title: "Error",
          description: `There was an error fetching the course list! Error: ${res}`,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        return;
      }
      setNewCourses({
        ...theCourse,
        courses: courseList,
      });
      courseList.forEach((course) => {
        lookup[
          course.courseNumber
        ] = ` ${course.department} ${course.courseNumber} ${course.displayName}`;
      });
      setLookupObjectCourse(lookup);

      const courseMapToValueAndLabel = courseList.map((course) => ({
        value: course.courseNumber,
        label: course.displayName,
      }));

      if (_.isEmpty(courseList)) {
        setCourseSelectionOptions(["There are no course for this semester"]);
        setSelectCourse("");
        console.log("Empty courselist");
        return;
      }

      if (courseMapToValueAndLabel) {
        setCourseSelectionOptions(courseMapToValueAndLabel);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    {
      title: "Outcome Name",
      field: "outcomeName",
      validate: (rowData) =>
        rowData.outcomeName ? true : "Outcome name name can not be empty",
    },
    {
      title: "Outcome Description",
      field: "outcomeDescription",
      editable: "never",
    },
  ];

  const data = [
    {
      outcomeName: "CE Outcome 2",
      outcomeDescription: "Hi there",
    },
    {
      outcomeName: "Outcome 2",
      outcomeDescription: "Bye there",
    },
  ];

  //Check if the department is select before enable the dropdown for semester
  const checkIfSelectMajor = () => {
    if (!theDepartment) {
      return true;
    }
    return false;
  };

  //Check if the department and semester is select before enable the dropdown for major
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

  //Fetch course when semester or deparment change , or on table refresh
  useEffect(() => {
    getNewCourses();
  }, [semJson, theDepartment, refreshKey]);

  useEffect(() => {
    getMajorsList();
  }, [semJson]);

  return (
    <div>
      <Center>
        <Text fontWeight="bold" fontSize="xl" mt="1em">
          Assign course to major outcomes
        </Text>
      </Center>
      <VStack id="top" w="90%" m="0 auto">
        <Grid templateColumns="repeat(4, 1fr)" gap={1}>
          <GridItem>
            <Select
              id="department"
              width="100%"
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
          </GridItem>
          <GridItem>
            <Select
              id="term"
              placeholder="Select semester"
              borderColor="teal"
              width="100%"
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
          </GridItem>
          <GridItem>
            <Select
              id="majors"
              placeholder="Select major"
              borderColor="teal"
              width="100%"
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
          </GridItem>
          <GridItem>
            <SingleSelect
              disabled={checkIfSelectMajorAndSemseter()}
              style={{ bottom: "5px" }}
              fullWidth={true}
              value={selectCourse}
              placeholder="Select a course"
              options={courseSelectionOptions}
              onChange={(value) => {
                setSelectCourse(value);
                console.log(value);
              }}
            />
          </GridItem>
        </Grid>
      </VStack>
      <Box align="center" w="30%" margin="auto">
        {!semJson && !theDepartment && (
          <Text fontWeight="bold" mt="1em" fontSize="lg" align="center">
            [Table] Waiting for department and semester selection
          </Text>
        )}
        {semJson && theDepartment && (
          <Text fontWeight="bold" mb="1em" fontSize="lg" align="center">
            Outcome Table
          </Text>
        )}
        {selectCourse && semJson && theDepartment && selectCourse && (
          <AssignOutcomeToCourseTable
            term={term}
            year={year}
            department={theDepartment}
            selectCourseNumber={selectCourse}
            majorName={majorSelect}
            refreshTable={refreshTable}
            columns={columns}
            data={data}
          />
        )}
      </Box>
    </div>
  );
};
export default AssignOutcomeToCourse;