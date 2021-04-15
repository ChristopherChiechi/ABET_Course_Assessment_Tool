import {
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Center,
  Button,
  Flex,
  HStack,
} from "@chakra-ui/react";

const CourseOutcomesMapping = ({ courseOutcomes }) => {
  console.log(courseOutcomes);
  const renderOutcomeRows = courseOutcomes.map((outcome, idx) => {
    return (
      <Tr key={idx}>
        <Td>{outcome.outcome}</Td>
        <Td>
          {outcome.studentWorks.map((work, idx) => {
            return <Text color="teal">{work.fileName}</Text>;
          })}
        </Td>
        <Td>
          <Flex dir="row">
            <HStack w="50%">
              <Text>IT: </Text>
              <NumberInput defaultValue={outcome.numberOfIT} min={0} w="50%">
                <NumberInputField />
              </NumberInput>
            </HStack>

            <HStack w="50%">
              <Text>CS: </Text>
              <NumberInput defaultValue={outcome.numberOfCS} min={0} w="50%">
                <NumberInputField />
              </NumberInput>
            </HStack>

            <HStack w="50%">
              <Text>CE: </Text>
              <NumberInput defaultValue={outcome.numberOfCE} min={0} w="50%">
                <NumberInputField />
              </NumberInput>
            </HStack>
          </Flex>
        </Td>
      </Tr>
    );
  });

  return (
    <>
      <Text fontSize="xl" fontWeight="bold">
        Course Outcomes Mapping
      </Text>
      <Center m="2em" padding="1em" bg="#edf2f7" borderRadius="4px">
        <Table padding="1em" bg="white">
          <Thead>
            <Tr>
              <Th>Course Outcomes</Th>
              <Th>Student Work Used</Th>
              <Th>Number of Students Who Achieved 75% of this Outcome</Th>
            </Tr>
          </Thead>
          <Tbody>{renderOutcomeRows}</Tbody>
        </Table>
      </Center>
    </>
  );
};

export default CourseOutcomesMapping;
