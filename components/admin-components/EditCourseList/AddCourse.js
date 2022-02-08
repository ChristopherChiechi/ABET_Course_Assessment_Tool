import { useState, useEffect } from "react";
import { Button, Input, Select } from "@chakra-ui/react";
import { Flex, FormLabel } from "@chakra-ui/react";
import useToggle from "../../../hooks/useToggle";
import useInputState from "../../../hooks/useInputState";
import { getSemesters, getMajors } from "../../../api/APIHelper";

const AddCourse = ({ addNewCourse }) => {
  const years = [2020, 2021, 2022];
  const [courseDisplayName, setCourseDisplayName] = useInputState("");
  const [courseNameCode, setCourseNameCode] = useInputState("");
  const [year, setYear] = useState(0);
  const [term, setTerm] = useState("");
  const [semID, setSemID] = useState(9999);
  const [semJson, setSemJson] = useState(9999);
  const [majors, setMajors] = useState();
  const [selectMajor, setSelectMajor] = useState();

  const [userid, setID] = useInputState("");
  const [semesters, setSemesterList] = useState();

  const [isEdditing, toggleEdditing] = useToggle();

  const addCourse = () => {
    /*
    addNewCourse({
      courseDisplayName: courseDisplayName,
      year: yearValue,
      semester: semester,
      courseNumber: courseNumber,
      displayName: displayName,
      department: department,
    });*/
    toggleEdditing();
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

  useEffect(() => {
    document.getElementById("top").scrollIntoView();
    getSemesterList();
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
          <FormLabel>Course Display Name</FormLabel>
          <Input
            borderColor="teal"
            w="50%"
            value={courseDisplayName}
            onChange={setCourseDisplayName}
            variant="filled"
          />
          <FormLabel>Course Name Code</FormLabel>
          <Input
            borderColor="teal"
            w="50%"
            value={courseNameCode}
            onChange={setCourseNameCode}
            variant="filled"
          />
          <FormLabel>Set Semester</FormLabel>
          <Select
            id="term"
            placeholder="Select semester"
            borderColor="teal"
            width="50%"
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
          <FormLabel>Major</FormLabel>
          <Select
            id="term"
            placeholder="Select major"
            borderColor="teal"
            width="50%"
            isRequired={true}
            value={selectMajor}
            onChange={(e) => {
              console.log(`Semester ID: ${e.target.value}`);
              setSelectMajor(e.target.value);
            }}
          >
            {majors &&
              majors.map((major, idx) => {
                return (
                  <option value={major} key={idx}>
                    {major.name}
                  </option>
                );
              })}
          </Select>
          <Button variantColor="green" mt="1em" onClick={addCourse}>
            Add New Course
          </Button>
        </Flex>
      ) : (
        <Flex justifyContent="center">
          <Button variantColor="green" mt="2em" onClick={toggleEdditing}>
            Add Course
          </Button>
        </Flex>
      )}
    </>
  );
};
export default AddCourse;
