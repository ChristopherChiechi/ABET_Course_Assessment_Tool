import { useState } from "react";
import { Button, Input, Select } from "@chakra-ui/react";
import { Flex, FormLabel } from "@chakra-ui/react";
import useToggle from "../../../hooks/useToggle";
import useInputState from "../../../hooks/useInputState";

const AddCourse = ({ addNewCourse }) => {
  const years = [2020, 2021, 2022];
  const semesters = ["Spring", "Summer", "Fall", "Winter"];
  const departments = ["CSCE", "EENG", "IT"];
  const [lastName, setLastName] = useInputState("");
  const [firstName, setFirstName] = useInputState("");
  const [userid, setID] = useInputState("");
  const [yearValue, setYear] = useState(years[0]);
  const [semester, setSemester] = useState(semesters[0]);
  const [courseNumber, setCourseNumber] = useInputState("");
  const [displayName, setDisplayName] = useInputState("");
  const [department, setDepartment] = useState(departments[0]);

  const [isEdditing, toggleEdditing] = useToggle();

  const addCourse = () => {
    addNewCourse({
      id: userid,
      firstName: firstName,
      lastName: lastName,
      year: yearValue,
      semester: semester,
      courseNumber: courseNumber,
      displayName: displayName,
      department: department,
    });
    toggleEdditing();
  };

  return (
    <>
      {isEdditing ? (
        <Flex direction="column" align="center">
          <FormLabel>Last Name</FormLabel>
          <Input
            w="50%"
            value={lastName}
            onChange={setLastName}
            variant="filled"
          />
          <FormLabel>First Name</FormLabel>
          <Input
            w="50%"
            value={firstName}
            onChange={setFirstName}
            variant="filled"
          />
          <FormLabel>ID</FormLabel>
          <Input w="50%" value={userid} onChange={setID} variant="filled" />

          <FormLabel>Year</FormLabel>
          <Select
            onChange={(event) => {
              setYear(event.target.value);
            }}
            value={yearValue}
            w="50%"
            variant="filled"
          >
            <option mr="1em" value={years[0]}>
              2020
            </option>
            <option mr="1em" value={years[1]}>
              2021
            </option>
            <option mr="1em" value={years[2]}>
              2022
            </option>
          </Select>
          <FormLabel>Semester</FormLabel>
          <Select
            onChange={(event) => {
              setSemester(event.target.value);
            }}
            value={semester}
            w="50%"
            variant="filled"
          >
            <option mr="1em" value={semesters[0]}>
              Spring
            </option>
            <option mr="1em" value={semesters[1]}>
              Summer
            </option>
            <option mr="1em" value={semesters[2]}>
              Fall
            </option>
            <option mr="1em" value={semesters[3]}>
              Winter
            </option>
          </Select>
          <FormLabel>Course Number</FormLabel>
          <Input
            w="50%"
            value={courseNumber}
            onChange={setCourseNumber}
            variant="filled"
          ></Input>
          <FormLabel>Display Name</FormLabel>
          <Input
            w="50%"
            value={displayName}
            onChange={setDisplayName}
            variant="filled"
          ></Input>
          <FormLabel>Department</FormLabel>
          <Select
            onChange={(event) => {
              setDepartment(event.target.value);
            }}
            value={department}
            w="50%"
            variant="filled"
          >
            <option mr="1em" value={departments[0]}>
              CSCE
            </option>
            <option mr="1em" value={departments[1]}>
              EENG
            </option>
            <option mr="1em" value={departments[2]}>
              IT
            </option>
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
