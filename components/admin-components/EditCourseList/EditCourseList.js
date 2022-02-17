import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  Select,
  List,
  ListItem,
  Flex,
  VStack,
  useToast,
} from "@chakra-ui/react";
import Courses from "../../Courses";
import {
  getCoursesByDepartment,
  getSemesters,
  deleteCourse,
} from "../../../api/APIHelper";
import AddCourse from "./AddCourse";
import MaterialTable from "material-table";
import { forwardRef } from "react";

import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import DeleteIcon from "@material-ui/icons/Delete";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

const EditCourseList = () => {
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

  // Grabs the courses by department from the back-end.
  const getNewCourses = async () => {
    if (!semJson) {
      return;
    }
    const semesterParse = JSON.parse(semJson);
    console.log(semesterParse);
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
    } catch (error) {
      console.log(error);
    }
    if (theCourse) {
      console.log(theCourse.courses);
    }
  };

  const removeCourse = async (department, courseName) => {
    console.log(term, year, department, courseName);
    try {
      const deleteRes = await deleteCourse(term, year, department, courseName);
      const status = deleteRes.status;
      if (status != "Success") {
        toast({
          title: "Error",
          description: `There was an error deleting the course! Error: ${status}`,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        return;
      } else {
        toast({
          title: "Success",
          description: `Course ${courseName} deleted`,
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        refreshTable();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    { title: "Department", field: "department" },
    { title: "Course ID", field: "courseId" },
    { title: "Course Name", field: "displayName" },
    { title: "Course Number", field: "courseNumber" },
    { title: "Coordinator EUID", field: "coordinatorEUID" },
    { title: "Is Complete", field: "isCourseCompleted" },
    { title: "Coordinator Comment", field: "coordinatorComment" },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      window.confirm("Are you sure you would like to submit these changes?")
    ) {
      //POST the course list change to the db here
      alert("Course List Updated!");
    }
  };

  //Check if the department is select before enable the dropdown for semester
  const checkIfSelectMajor = () => {
    if (!theDepartment) {
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

  useEffect(() => {
    getSemesterList();
  }, [theDepartment]);

  useEffect(() => {
    getNewCourses();
  }, [semJson, theDepartment, refreshKey]);

  const renderCourse =
    theCourse.courses &&
    theCourse.courses.map((cours, idx) => {
      return (
        <ListItem
          key={idx}
          display="inline"
          justifyContent="center"
          alignItems="center"
        >
          <Courses
            DisplayName={cours.displayName}
            coordinatorID={cours.coordinatorEUID}
            color={idx % 2 == 0 ? "green.200" : "gray.300"}
            key={idx}
            year={cours.year}
            semester={cours.semester}
            courseNumber={cours.courseNumber}
            department={cours.department}
            courseComplete={cours.isCourseCompleted}
          />
        </ListItem>
      );
    });

  return (
    <div>
      <VStack id="top" w="90%" m="0 auto">
        <Text fontSize="2xl" fontWeight="bold" mt="1em">
          Edit Course List
        </Text>

        <Box m="1em" p="3em">
          <Text
            align="center"
            fontWeight="bold"
            mt="1em"
            mb="1em"
            fontSize="lg"
          >
            Select Department
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
                console.log(`Department select: ${e.target.value}`);
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
                console.log(`Semester ID: ${e.target.value}`);
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
          </Flex>
          <Text
            fontWeight="bold"
            mt="1em"
            mb="1em"
            fontSize="lg"
            align="center"
          >
            Old Layout
          </Text>
          <Flex justifyContent="center">
            <List w="80%">{renderCourse}</List>
          </Flex>
        </Box>
      </VStack>
      <Box align="center" w="80%" margin="auto">
        <Text fontWeight="bold" mt="1em" mb="1em" fontSize="lg" align="center">
          New Layout
        </Text>
        <MaterialTable
          icons={tableIcons}
          options={{
            search: true,
          }}
          actions={[
            {
              icon: () => <DeleteIcon />,
              tooltip: "Delete Course",
              onClick: (event, rowData) => {
                if (confirm("You want to delete " + rowData.displayName)) {
                  removeCourse(rowData.department, rowData.courseNumber);
                }
              },
            },
          ]}
          columns={columns}
          data={theCourse.courses}
          title="Course List"
        />
        {semJson && <AddCourse refreshTable={refreshTable}></AddCourse>}
      </Box>
    </div>
  );
};
export default EditCourseList;
