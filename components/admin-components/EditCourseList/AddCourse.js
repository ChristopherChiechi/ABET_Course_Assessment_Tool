import { useState, useEffect } from "react";
import { Button, Input, Select, Checkbox } from "@chakra-ui/react";
import { Flex, FormLabel } from "@chakra-ui/react";
import useToggle from "../../../hooks/useToggle";
import useInputState from "../../../hooks/useInputState";
import {
  getSemesters,
  getMajors,
  getUsersByRole,
  addNewCourse,
} from "../../../api/APIHelper";

const AddCourse = ({ refreshTable }) => {
  const [courseDisplayName, setCourseDisplayName] = useInputState("");
  const [courseNameCode, setCourseNameCode] = useInputState("");
  const [year, setYear] = useState(0);
  const [term, setTerm] = useState("");
  const [semJson, setSemJson] = useState();
  const [majors, setMajors] = useState();
  const [selectDepartment, setSelectDepartment] = useState();
  const [coordinatorComment, setCoordinatorComment] = useInputState("");
  const [isCourseCompleted, setIsCourseCompleted] = useState(true);
  const [coordinatorList, setCoordinatorList] = useState();
  const [coordinatorSelect, setCoordinatorSelect] = useState();
  const [semesters, setSemesterList] = useState();
  const [courseID, setCourseID] = useInputState();

  const [isEdditing, toggleEdditing] = useToggle();

  const handleAddCourseButton = async () => {
    try {
      const coordinatorParse = JSON.parse(coordinatorSelect);
      const coordinatorEUID = coordinatorParse["euid"];
      const semesterParse = JSON.parse(semJson);
      console.log(
        ` Course Name: ${courseDisplayName} CourseNumber: ${courseNameCode} semester: ${semesterParse["term"]} ${semesterParse["year"]} Coordinator EUID: ${coordinatorEUID} isComplete: ${isCourseCompleted} department: ${selectDepartment} coordinator comment: ${coordinatorComment}`
      );
      const res = await addNewCourse(
        semesterParse["year"],
        semesterParse["term"],
        courseID,
        coordinatorEUID,
        courseNameCode,
        courseDisplayName,
        coordinatorComment,
        isCourseCompleted,
        selectDepartment
      );
      const status = res.status;
      console.log(status);
    } catch (error) {
      console.log(error);
    }
    refreshTable();
    toggleEdditing();
  };

  const getSemesterList = async () => {
    const semesterlist = await getSemesters();
    const sorted = semesterlist.data.sort((a, b) => {
      return b.year - a.year;
    });
    setSemesterList(sorted);
  };

  const getCoordinatorList = async () => {
    try {
      const coordinatorL = await getUsersByRole("Coordinator");
      if (coordinatorL) {
        setCoordinatorList(coordinatorL.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getMajorList = async (semTerm, semYear) => {
    console.log(semTerm, semYear);
    const majorList = await getMajors(semTerm, semYear);
    setMajors(majorList.data);
  };

  useEffect(() => {
    document.getElementById("top").scrollIntoView();
    getSemesterList();
    getCoordinatorList();
  }, []);

  useEffect(() => {
    document.getElementById("top").scrollIntoView();
    if (semJson) {
      var semJsonParse = JSON.parse(semJson);
      console.log(semJsonParse["year"]);
      getMajorList(semJsonParse["term"], semJsonParse["year"]);
    }
    if (majors) {
      console.log(majors);
    }
  }, [semJson]);

  return (
    <>
      {isEdditing ? (
        <Flex direction="column" align="center">
          <FormLabel>Course ID</FormLabel>
          <Input
            borderColor="teal"
            width="70%"
            value={courseID}
            onChange={setCourseID}
            variant="filled"
          />
          <FormLabel>Course Display Name</FormLabel>
          <Input
            borderColor="teal"
            width="70%"
            value={courseDisplayName}
            onChange={setCourseDisplayName}
            variant="filled"
          />
          <FormLabel>Course Name Code</FormLabel>
          <Input
            borderColor="teal"
            width="70%"
            value={courseNameCode}
            onChange={setCourseNameCode}
            variant="filled"
          />
          <FormLabel>Coordinator EUID</FormLabel>
          <Select
            id="instructor"
            placeholder="Select instructor"
            borderColor="teal"
            width="70%"
            isRequired={true}
            value={coordinatorSelect}
            onChange={(e) => {
              console.log(`Semester ID: ${e.target.value}`);
              setCoordinatorSelect(e.target.value);
            }}
          >
            {coordinatorList &&
              coordinatorList.map((coordinator, idx) => {
                return (
                  <option value={JSON.stringify(coordinator)} key={idx}>
                    {coordinator.firstName} {coordinator.lastName} |{" "}
                    {coordinator.euid}
                  </option>
                );
              })}
          </Select>
          <FormLabel>Set Semester</FormLabel>
          <Select
            id="term"
            placeholder="Select semester"
            borderColor="teal"
            width="70%"
            isRequired={true}
            value={semJson}
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
          <FormLabel>Department</FormLabel>
          <Select
            id="term"
            placeholder="Select Department"
            borderColor="teal"
            width="70%"
            isRequired={true}
            value={selectDepartment}
            onChange={(e) => {
              console.log(`Semester ID: ${e.target.value}`);
              setSelectDepartment(e.target.value);
            }}
          >
            <option value="CSCE">Computer Science</option>
            <option value="EENG">Computer Engineer</option>
            <option value="IT">Information Technology</option>
          </Select>
          <FormLabel>Coordinator Comment</FormLabel>
          <Input
            borderColor="teal"
            width="70%"
            value={coordinatorComment}
            onChange={setCoordinatorComment}
            variant="filled"
          />
          <Checkbox
            mt="1em"
            colorScheme="green"
            defaultIsChecked
            value={isCourseCompleted}
            onChange={setIsCourseCompleted}
          >
            Course Completed
          </Checkbox>
          <Button mt="1em" onClick={handleAddCourseButton}>
            Add New Course
          </Button>
        </Flex>
      ) : (
        <Flex justifyContent="center">
          <Button mt="2em" onClick={toggleEdditing}>
            Add Course
          </Button>
        </Flex>
      )}
    </>
  );
};
export default AddCourse;
