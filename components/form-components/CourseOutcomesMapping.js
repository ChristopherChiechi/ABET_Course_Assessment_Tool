//imports
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
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Badge,
  Input,
} from "@chakra-ui/react";

const CourseOutcomesMapping = ({ courseOutcomes, handleOutcomesChange }) => {
  const renderOutcomeRows = courseOutcomes.map((outcome, idx) => {
    return (
      <Tr key={idx}>
        <Td>
          {outcome.outcomeName}. {outcome.outcomeDescription}
        </Td>
        <Td>
          <Flex direction="row">
            <HStack w="50%">
              <Text>IT: </Text>
              <NumberInput
                defaultValue={outcome.numberOfIT}
                min={0}
                w="50%"
                onChange={(e) => {
                  const newNumber = parseInt(e);
                  handleOutcomesChange(
                    "numberOfIT",
                    outcome.outcomeName,
                    newNumber
                  );
                }}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </HStack>

            <HStack w="50%">
              <Text>CS: </Text>
              <NumberInput
                defaultValue={outcome.numberOfCS}
                min={0}
                w="50%"
                onChange={(e) => {
                  const newNumber = parseInt(e);
                  handleOutcomesChange(
                    "numberOfCS",
                    outcome.outcomeName,
                    newNumber
                  );
                }}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </HStack>

            {outcome.numberOfCE && (
              <HStack w="50%">
                <Text>CE: </Text>
                <NumberInput
                  defaultValue={outcome.numberOfCE}
                  min={0}
                  w="50%"
                  onChange={(e) => {
                    const newNumber = parseInt(e);
                    handleOutcomesChange(
                      "numberOfCE",
                      outcome.outcomeName,
                      newNumber
                    );
                  }}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </HStack>
            )}
            {outcome.numberOfCYS && (
              <HStack w="50%">
                <Text>CYS: </Text>
                <NumberInput
                  defaultValue={outcome.numberOfCYS}
                  min={0}
                  w="50%"
                  onChange={(e) => {
                    const newNumber = parseInt(e);
                    handleOutcomesChange(
                      "numberOfCYS",
                      outcome.outcomeName,
                      newNumber
                    );
                  }}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </HStack>
            )}
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
      <Center mt="1em" mb="2em" padding="1em" bg="#edf2f7" borderRadius="4px">
        <Table padding="1em" bg="white">
          <Thead>
            <Tr>
              <Th>Course Outcomes</Th>
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
