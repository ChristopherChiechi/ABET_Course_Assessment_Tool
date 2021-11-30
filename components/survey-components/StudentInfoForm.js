import { useContext } from "react";
import {
  Select,
  Text,
  HStack,
  VStack,
  Center,
  Box,
  Container,
} from "@chakra-ui/react";

import { PageContext } from "./SurveyPageData";

const StudentInfoForm = ({ studentInformation, setStudentInformation }) => {
  const context = useContext(PageContext);
  const questions = context.studentQuestions;
  const attributes = ["Select", "Select", "Select"];

  const handleChange = (e, idx) => {
    const type = attributes[idx];
    var temp = studentInformation;
    temp[type] = e.target.value;
    setStudentInformation(temp);
  };

  const renderOptions = (options) => {
    return options.map((option, idx) => {
      return (
        <option value={option} key={idx}>
          {option}
        </option>
      );
    });
  };

  return (
    <Box
      bg="#edf2f7"
      m="2em"
      padding="1em"
      w={{ base: "120%", sm: "50%", md: "80%" }}
    >
      {questions.map((question, idx) => {
        return (
          <HStack>
            <Box w={{ base: "50%", sm: "50%", md: "80%" }}>
              <Text
                fontSize={{ base: "100%", sm: "50%", md: "80%" }}
                fontWeight="bold"
              >
                {question.question}
              </Text>
              <Select
                size="xs"
                w={{ base: "80%", sm: "100%", md: "80%" }}
                placeholder={attributes[idx]}
                variant="outline"
                bg="white"
                mr="0.5em"
                isFullWidth
                onChange={(e) => handleChange(e, idx)}
              >
                {renderOptions(question.choices)}
              </Select>
            </Box>
          </HStack>
        );
      })}
    </Box>
  );
};

export default StudentInfoForm;
