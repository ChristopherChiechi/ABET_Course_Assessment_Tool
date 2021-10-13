//imports
import {
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Center,
  HStack,
} from "@chakra-ui/react";


const ReportGrades = ({ ceGrades, csGrades, itGrades, cGrades, handleGradeChange }) => {

  const renderCeGrades = Object.keys(ceGrades).map((entry, idx) => {
    return entry !== "totalStudents" ? (
      <Center key={idx}>
        <Text fontWeight="bold" textTransform="uppercase" mr="1em">
          {entry}
        </Text>
        <Text>{csGrades[entry]}</Text>
      </Center>
    ) :
      <Center key={idx}>
        <Text fontWeight="bold" textTransform="uppercase" mr="1em">
          Total
              </Text>
        <Text>{itGrades[entry]}</Text>
      </Center>
      ;
  });
  const renderCsGrades = Object.keys(csGrades).map((entry, idx) => {
    return entry !== "totalStudents" ? (
      <Center key={idx}>
        <Text fontWeight="bold" textTransform="uppercase" mr="1em">
          {entry}
        </Text>
        <Text>{csGrades[entry]}</Text>
      </Center>
    ) :
      <Center key={idx}>
        <Text fontWeight="bold" textTransform="uppercase" mr="1em">
          Total
              </Text>
        <Text>{itGrades[entry]}</Text>
      </Center>
      ;
  });
  const renderITGrades = Object.keys(itGrades).map((entry, idx) => {
    return entry !== "totalStudents" ? (
      <Center key={idx}>
        <Text fontWeight="bold" textTransform="uppercase" mr="1em">
          {entry}
        </Text>
        <Text>{itGrades[entry]}</Text>
      </Center>
    ) :
      <Center key={idx}>
        <Text fontWeight="bold" textTransform="uppercase" mr="1em">
          Total
              </Text>
        <Text>{itGrades[entry]}</Text>
      </Center>
      ;
  });
  const renderCGrades = Object.keys(cGrades).map((entry, idx) => {
    return entry !== "totalStudents" ? (
      <Center key={idx}>
        <Text fontWeight="bold" textTransform="uppercase" mr="1em">
          {entry}
        </Text>
        <Text>{cGrades[entry]}</Text>
      </Center>
    ) :
      <Center key={idx}>
        <Text fontWeight="bold" textTransform="uppercase" mr="1em">
          Total
              </Text>
        <Text>{cGrades[entry]}</Text>
      </Center>
      ;
  });
  return (
    <>
      <Text fontSize="xl" fontWeight="bold">Grades</Text>
      <Center
        m="2em"
        padding="1em"
        bg="#edf2f7"
        borderRadius="4px"
      >
        <Table padding="1em" bg="white">
          <Thead>
            <Tr>
              <Th>Major</Th>
              <Th>Grades</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>
                <Text fontWeight="bold">IT</Text>
              </Td>
              <Td>
                <HStack spacing={10}>
                  {renderITGrades}
                </HStack>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Text fontWeight="bold">CE</Text>
              </Td>
              <Td>
                <HStack spacing={10}>
                  {renderCeGrades}
                </HStack>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Text fontWeight="bold">CS</Text>
              </Td>
              <Td>
                <HStack spacing={10}>
                  {renderCsGrades}
                </HStack>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Text fontWeight="bold">CYS</Text>
              </Td>
              <Td>
                <HStack spacing={10}>
                  {renderCGrades}
                </HStack>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Center>
    </>
  );
};

export default ReportGrades;