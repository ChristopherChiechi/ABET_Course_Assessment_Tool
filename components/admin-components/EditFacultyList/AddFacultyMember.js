import { useState } from "react";
import {
  Spacer,
  FormLabel,
  Button,
  Input,
  Select,
  Box,
  useToast,
} from "@chakra-ui/react";
import useInputState from "../../../hooks/useInputState";
import { addFacultyMember } from "../../../api/APIHelper";

const AddFacultyMember = ({ refreshTable }) => {
  const toast = useToast({position: "top"});
  const facultyTypes = ["Admin", "Instructor", "Coordinator"];
  const [faculty, setFaculty] = useState({
    admin: [],
    instructor: [],
    coordinator: [],
  });

  const [lastName, setLastName] = useInputState("");
  const [firstName, setFirstName] = useInputState("");
  const [ID, setID] = useInputState("");
  const [type, setType] = useState("Admin");

  const [isEdditing, SettoggleEdditing] = useState(false);

  const toggleEdditing = () => {
    SettoggleEdditing((isEdditing) => !isEdditing);
  };

  const addFaculty = async () => {
    if (lastName == "" || firstName == "" || ID == "") {
      toast({
        description: "Required field empty!",
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
      return;
    }
    try {
      const res = await addFacultyMember(lastName, firstName, ID, type);
      console.log(res);
      const status = res.status;
      console.log(status);
      if (status == "Success") {
        toast({
          description: `Successfully added the new faculty member! Please refresh the page if you don't see the new change.`,
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
    } catch (error) {
      console.log(error);
    }
    refreshTable();
  };

  return (
    <>
      {isEdditing ? (
        <>
          <FormLabel>Faculty Type</FormLabel>
          <Select
            onChange={(e) => {
              console.log(e.target.value);
              setType(e.target.value);
            }}
            value={type}
            w="50%"
          >
            <option mr="1em" value={facultyTypes[0]}>
              Admin
            </option>
            <option mr="1em" value={facultyTypes[1]}>
              Instructor
            </option>
            <option mr="1em" value={facultyTypes[2]}>
              Coordinator
            </option>
            <option mr="1em" value={facultyTypes[3]}>
              Super User
            </option>
          </Select>

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
          <Input w="50%" value={ID} onChange={setID} variant="filled" />

          <Button colorScheme="teal" mt="1em" onClick={addFaculty}>
            Add New Faculty
          </Button>
        </>
      ) : (
        <>
          <Box
            w="100%px"
            h="10"
            bg=""
            fontWeight="bold"
            marginTop="1em"
            marginBottom="1em"
          />
          <Spacer />
          <Button colorScheme="teal" display="inline" onClick={toggleEdditing}>
            Add Faculty Member
          </Button>
          <Spacer />
          <Box w="100%px" h="10" bg="" />
        </>
      )}
    </>
  );
};

export default AddFacultyMember;
