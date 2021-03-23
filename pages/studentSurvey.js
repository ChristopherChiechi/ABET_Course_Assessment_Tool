import { useState, useEffect } from "react";
import {
  List,
  ListItem,
  Select,
  Text,
  VStack,
  HStack,
  RadioGroup,
  Radio,
  Container,
  Textarea,
  Button,
} from "@chakra-ui/react";

import questionData from "../fake-data/questions.json";
import courseData from "../fake-data/course.json";

const studentSurvey = () => {
  const majors = [
    "Computer Science",
    "Software Engineering",
    "Computer Engineering",
    "Information Technology",
    "Cyber Secuirity",
  ];
  const years = ["Freshman", "Sophomore", "Junior", "Senior"];
  const grades = ["A", "B", "C", "D", "F"];
  const course = courseData.courses[0];
  const questions = questionData.TAquestions;
  console.log(course);
  console.log(questions);
  const [studentInformation, setStudentInformation] = useState({
    major: "",
    year: "",
    anticipatedGrade: "",
  });
  const studentInformationHandler = (event) => {
    setStudentInformation({
      major: event.target.value,
    });
    console.log(major);
  };
  return (
    <VStack mt="2em">
      <HStack>
        <Text fontWeight="bold">{course.code}</Text>
        <Text fontWeight="bold">{course.name}</Text>
      </HStack>

      <HStack w="80%">
        <Text>What is your major?</Text>
        <Select placeholder="major">
          {majors.map((major, idx) => {
            return (
              <option key={idx} onChange={studentInformationHandler}>
                {major}
              </option>
            );
          })}
        </Select>
      </HStack>

      <HStack w="80%">
        <Text>What is your classification?</Text>
        <Select placeholder="classifcation">
          {years.map((year, idx) => {
            return (
              <option key={idx} onChange={studentInformationHandler}>
                {year}{" "}
              </option>
            );
          })}
        </Select>
      </HStack>
      <HStack w="80%">
        <Text>What grade do you expect?</Text>
        <Select placeholder="grade">
          {grades.map((year, idx) => {
            return (
              <option key={idx} onChange={studentInformationHandler}>
                {year}{" "}
              </option>
            );
          })}
        </Select>
      </HStack>

      <Text fontWeight="bold">
        For each of the course outcomes, rate each from 1 to 5 in terms of
        agreement with your level of agreement.{" "}
      </Text>
      <List
        m="2em"
        padding="2em"
        bg="#edf2f7"
        w="80%"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      >
        {course["course-outcomes"].map((outcome, idx) => {
          return (
            <ListItem>
              <VStack>
                <Text>{outcome}</Text>
                <RadioGroup>
                  <HStack spacing={10}>
                    <Radio bg="white">1</Radio>
                    <Radio bg="white">2</Radio>
                    <Radio bg="white">3</Radio>
                    <Radio bg="white">4</Radio>
                    <Radio bg="white">5</Radio>
                  </HStack>
                </RadioGroup>
              </VStack>
            </ListItem>
          );
        })}
      </List>
      <Text fontWeight="bold">
        TA evaluation Have each rated 1-5, with 5 being very satisfied and 1
        being very unsatisfied{" "}
      </Text>
      <List
        m="2em"
        padding="2em"
        bg="#edf2f7"
        w="80%"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      >
        {questions.map((question, key) => {
          return (
            <ListItem>
              <VStack>
                <Text>{question.question}</Text>
                <RadioGroup>
                  <HStack spacing={10}>
                    <Radio bg="white">1</Radio>
                    <Radio bg="white">2</Radio>
                    <Radio bg="white">3</Radio>
                    <Radio bg="white">4</Radio>
                    <Radio bg="white">5</Radio>
                    <Radio bg="white">NA</Radio>
                  </HStack>
                </RadioGroup>
              </VStack>
            </ListItem>
          );
        })}
      </List>

      <Container
        m="2em"
        padding="2em"
        bg="#edf2f7"
        minW="80%"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      >
        <Text fontWeight="bold">Additional comments on TA's performance</Text>
        <Textarea bg="white"></Textarea>
      </Container>

      <Container
        m="2em"
        padding="2em"
        bg="#edf2f7"
        minW="80%"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      >
        <Text fontWeight="bold">List ways this course can be improved</Text>
        <Textarea bg="white"></Textarea>
      </Container>

      <Button>Submit Survey</Button>
    </VStack>
  );
};
export default studentSurvey;
