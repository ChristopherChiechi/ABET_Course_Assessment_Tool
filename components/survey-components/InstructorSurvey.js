import { useEffect, useState } from "react";
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

const InstructorSurvey = ({ instructorQuestions, handleChange }) => {
  useEffect(() => {
    console.log("instructor questions updated");
  }, [instructorQuestions]);

  const renderRadios = Array.from(Array(5), (x, index) => {
    return (
      <Radio key={index} value={index + 1}>
        {index + 1}
      </Radio>
    );
  });

  const renderRows =
    instructorQuestions &&
    instructorQuestions.map((question, idx) => {
      return (
        <Tr key={idx}>
          <Td>
            {idx + 1}. {question.question}
          </Td>
          <Td>
            <RadioGroup
              value={question.rating}
              onChange={(e) => handleChange(e, idx, "Instructor")}
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
          For each item below select a rating from 1-5, where 1 is Very Low
          Satisfaction and 5 is Very High Satisfaction.
        </Text>
      </Center>
      <Center
        m="2em"
        padding="1em"
        w={{ base: "120%", md: "80%" }}
        borderRadius="4px"
      >
        <Table padding="0.5em" variant="striped">
          <Thead>
            <Tr>
              <Th>Instructor Evaluation</Th>
              <Th>Rating</Th>
            </Tr>
          </Thead>
          <Tbody>{renderRows}</Tbody>
        </Table>
      </Center>
    </>
  );
};

export default InstructorSurvey;
