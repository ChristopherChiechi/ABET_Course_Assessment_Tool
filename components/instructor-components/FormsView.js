import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  VStack,
  Button,
  Box,
} from "@chakra-ui/react";
import Link from "next/link";
import cookieCutter from "cookie-cutter";
import jwt from "jsonwebtoken";

const FormsView = ({ instructorCourses, coordinatorCourses, term }) => {
  const token = cookieCutter.get("token");
  const json = jwt.decode(token);
  var roleArray = json.role;
  var role = "";
  if (roleArray.length > 1) {
    for (var i = 0; i < roleArray.length; i++) {
      console.log(roleArray[i]);
      if (roleArray[i] == "Instructor" || roleArray[i] == "Coordinator") {
        role = roleArray[i];
      }
    }
  }
  console.log(role);
  instructorCourses.sort((a, b) =>
    a.courseNumber + a.sectionNumber > b.courseNumber + b.sectionNumber ? 1 : -1
  );
  coordinatorCourses.sort((a, b) =>
    a.courseNumber + a.sectionNumber > b.courseNumber + b.sectionNumber ? 1 : -1
  );

  const handleClick = async (course, section) => {
    document.cookie = `course=${course}; path=/`;
    document.cookie = `section=${section}; path=/`;
  };

  const renderInstructorCourses = instructorCourses.map((course, idx) => {
    return (
      <Tr key={idx}>
        <Td>{course.displayName}</Td>
        <Td>
          {course.courseNumber}.{course.sectionNumber}
        </Td>
        <Td>
          <Button
            color="white"
            bg="#016a31"
            height="10"
            rounded="md"
            width="20"
            _hover={{
              background: "teal",
              color: "white",
            }}
            variant="link"
            onClick={(e) => {
              e.preventDefault();
              //handleClick(course.courseNumber, course.sectionNumber);
              //window.location.href = 'http://localhost:3000/formCompletion';
            }}
          >
            <Link
              href={{
                pathname: "/formCompletion",
                query: {
                  department: "CSCE",
                  number: course.courseNumber,
                  section: course.sectionNumber,
                  semester: term.semester,
                  year: term.year,
                },
              }}
            >
              Start
            </Link>
          </Button>
        </Td>
      </Tr>
    );
  });

  const renderCoordinatorCourses = coordinatorCourses.map((course, idx) => {
    return (
      <Tr key={idx}>
        <Td>{course.displayName}</Td>
        <Td>
          {course.courseNumber}.{course.sectionNumber}
        </Td>
        <Td>
          <Button
            color="white"
            bg="#016a31"
            height="10"
            rounded="md"
            width="20"
            _hover={{
              background: "teal",
              color: "white",
            }}
            variant="link"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <Link
              href={{
                pathname: "/coordinatorForms",
                query: {
                  department: "CSCE",
                  number: course.courseNumber,
                  section: course.sectionNumber,
                  semester: term.semester,
                  year: term.year,
                },
              }}
            >
              Comment
            </Link>
          </Button>
        </Td>
      </Tr>
    );
  });

  if (roleArray.includes("Instructor") && roleArray.includes("Coordinator")) {
    return (
      <VStack w="75%">
        <Box bg="#edf2f7" w="100%" padding="1em">
          <Table variant="striped" colorScheme="green" padding="1em">
            <TableCaption placement="top" fontWeight="bold" fontSize="xl">
              Instructor Forms
            </TableCaption>
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Code</Th>
                <Th>Form</Th>
              </Tr>
            </Thead>
            <Tbody>{renderInstructorCourses}</Tbody>
          </Table>
        </Box>
        <Box bg="#edf2f7" w="100%" padding="1em">
          <Table variant="striped" colorScheme="green" padding="1em">
            <TableCaption placement="top" fontWeight="bold" fontSize="xl">
              Coordinator Forms
            </TableCaption>
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Code</Th>
                <Th>Form</Th>
              </Tr>
            </Thead>
            <Tbody>{renderCoordinatorCourses}</Tbody>
          </Table>
        </Box>
      </VStack>
    );
  }
  if (roleArray.includes("Instructor")) {
    return (
      <VStack w="75%">
        <Box bg="#edf2f7" w="100%" padding="1em">
          <Table variant="striped" colorScheme="green" padding="1em">
            <TableCaption placement="top" fontWeight="bold" fontSize="xl">
              Instructor Forms
            </TableCaption>
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Code</Th>
                <Th>Form</Th>
              </Tr>
            </Thead>
            <Tbody>{renderInstructorCourses}</Tbody>
          </Table>
        </Box>
      </VStack>
    );
  }

  if (roleArray.includes("Coordinator")) {
    return (
      <VStack w="75%">
        <Box bg="#edf2f7" w="100%" padding="1em">
          <Table variant="striped" colorScheme="green" padding="1em">
            <TableCaption placement="top" fontWeight="bold" fontSize="xl">
              Coordinator Forms
            </TableCaption>
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Code</Th>
                <Th>Form</Th>
              </Tr>
            </Thead>
            <Tbody>{renderCoordinatorCourses}</Tbody>
          </Table>
        </Box>
      </VStack>
    );
  }
};

export default FormsView;
