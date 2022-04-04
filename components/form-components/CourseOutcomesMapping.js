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
        <Td>{outcome.outcome}</Td>
        <Td>
          <Flex direction="column" align="start">
            {outcome.studentWorks.map((work, idx) => {
              return (
                <Popover key={idx}>
                  <PopoverTrigger>
                    <HStack>
                      <Button variant="link" color="teal" size="sm">
                        {work.fileId}
                      </Button>
                      {work.fileName ? (
                        <Badge colorScheme="green">File</Badge>
                      ) : (
                        <Badge colorScheme="red">Nofile</Badge>
                      )}
                    </HStack>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>{work.fileId}</PopoverHeader>
                    <PopoverBody>
                      <Flex direction="column" align="start">
                        {work.fileName ? (
                          <HStack>
                            <Text>{work.fileName}</Text>
                            <Button size="sm">Remove File</Button>
                          </HStack>
                        ) : (
                          <Button>Add File</Button>
                        )}
                        <Button
                          size="sm"
                          colorScheme="red"
                          mt=".5em"
                          alignSelf="flex-end"
                        >
                          Remove Work
                        </Button>
                      </Flex>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              );
            })}
            <Popover>
              <PopoverTrigger>
                <Button variant="link" color="blue" size="sm">
                  Add Student Work
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Add a student work</PopoverHeader>
                <PopoverBody>
                  <Flex direction="column" align="start">
                    <HStack>
                      <Text>Work name</Text>
                      <Input size="sm" />
                    </HStack>
                    <Button size="sm" mt=".5em">
                      Add a file
                    </Button>
                    <Button
                      size="sm"
                      mt=".5em"
                      colorScheme="blue"
                      alignSelf="flex-end"
                    >
                      Add student work
                    </Button>
                  </Flex>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Flex>
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
                  handleOutcomesChange("IT", outcome.outcome, newNumber);
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
                  handleOutcomesChange("CS", outcome.outcome, newNumber);
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
              <Text>CE: </Text>
              <NumberInput
                defaultValue={outcome.numberOfCE}
                min={0}
                w="50%"
                onChange={(e) => {
                  const newNumber = parseInt(e);
                  handleOutcomesChange("CE", outcome.outcome, newNumber);
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
              <Text>CYS: </Text>
              <NumberInput
                defaultValue={outcome.numberOfCYS}
                min={0}
                w="50%"
                onChange={(e) => {
                  const newNumber = parseInt(e);
                  handleOutcomesChange("CYS", outcome.outcome, newNumber);
                }}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
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
      <Center mt="1em" mb="2em" padding="1em" bg="#edf2f7" borderRadius="4px">
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
