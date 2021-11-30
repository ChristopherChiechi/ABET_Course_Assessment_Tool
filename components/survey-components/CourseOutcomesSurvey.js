import {
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  HStack,
  RadioGroup,
  Radio,
  Center,
} from "@chakra-ui/react";

const CourseOutcomesSurvey = ({ outcomeSurvey, handleChange }) => {
  const renderRadios = Array.from(Array(5), (x, index) => {
    return (
      <Radio key={index} value={index + 1}>
        {index + 1}
      </Radio>
    );
  });

  const renderRows = outcomeSurvey.map((outcome, idx) => {
    return (
      <Tr key={idx}>
        <Td>{outcome.outcome}</Td>
        <Td>
          <RadioGroup
            value={outcome.rating}
            onChange={(e) => handleChange(e, idx, "Outcomes")}
          >
            <HStack spacing={10}>{renderRadios}</HStack>
          </RadioGroup>
        </Td>
      </Tr>
    );
  });

  return (
    <>
      <Center
        m="2em"
        padding="1em"
        w={{ base: "120%", md: "80%" }}
        borderRadius="4px"
        bg="#edf2f7"
      >
        <Text fontWeight="bold">
          For each course outcome below, rate your accomplishment using a scale of 1 to 5 where 1 is Very Low and 5 is Excellent.
        </Text>
      </Center>
      <Center
        m={{ base: "2em", md: "2em" }}
        padding="1em"
        w={{ base: "120%", md: "80%" }}
        borderRadius="4px"
      >
        <Table padding="1em" variant="striped">
          <Thead>
            <Tr>
              <Th>Course Outcome</Th>
              <Th>Rating</Th>
            </Tr>
          </Thead>
          <Tbody>{renderRows}</Tbody>
        </Table>
      </Center>
    </>
  );
};

export default CourseOutcomesSurvey;
