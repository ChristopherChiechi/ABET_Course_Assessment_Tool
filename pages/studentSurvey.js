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
  Center,
  Textarea,
  Divider,
  Button,
} from "@chakra-ui/react";

import useToggle from "../hooks/useToggle"
import questionData from "../fake-data/questions.json";
import courseData from "../fake-data/course.json";
import StudentLoginBox from "../components/survey-components/StudentLoginBox";

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
  const [studentInformationMajor, setStudentInformationMajor] = useState({
    major: "major",
  });
  const [studentInformationYear, setStudentInformationYear] = useState({
    year: "year",
  });
  const [studentInformationGrades, setStudentInformationGrades] = useState({
    grades: "grades",
  });
  const [taPerformanceText, setTaPerformanceText] = useState({ text: "" });
  const [classPerformanceText, setClassPerformanceText] = useState({
    text: "",
  });

  const [isLoggedIn, toggleLogin] = useToggle();

  const testFunction = () => {
    console.log(studentInformationMajor.major);
    console.log(studentInformationYear.year);
    console.log(studentInformationGrades.grades);
    console.log(taPerformanceText.text);
    console.log(classPerformanceText.text);
  };
  return (
    <>
      {isLoggedIn
        ?
        <VStack mt="2em">
          <Text fontSize="2xl" fontWeight="bold">{course.code} {course.name}</Text>

          <HStack w="80%">
            <Text>What is your major?</Text>
            <Select
              placeholder="major"
              value={studentInformationMajor.major}
              onChange={(e) =>
                setStudentInformationMajor({ major: e.target.value })
              }
            >
              {majors.map((major, idx) => {
                return (
                  <option value={major} key={idx}>
                    {major}
                  </option>
                );
              })}
            </Select>
          </HStack>
          <HStack w="80%">
            <Text>What is your classification?</Text>
            <Select
              placeholder="classifcation"
              value={studentInformationYear.year}
              onChange={(e) => setStudentInformationYear({ year: e.target.value })}
            >
              {years.map((year, idx) => {
                return <option key={idx}>{year} </option>;
              })}
            </Select>
          </HStack>
          <HStack w="80%">
            <Text>What grade do you expect?</Text>
            <Select
              placeholder="grade"
              value={studentInformationGrades.grades}
              onChange={(e) =>
                setStudentInformationGrades({ grades: e.target.value })
              }
            >
              {grades.map((year, idx) => {
                return <option key={idx}>{year} </option>;
              })}
            </Select>
          </HStack>
          <Text fontWeight="bold">
            For each of the course outcomes, rate each from 1 to 5 in terms of
        agreement with your level of agreement.{" "}
          </Text>
          <Center
            m="2em"
            padding="2em"
            bg="#edf2f7"
            w="80%"
          >
            <List padding="1em" w="90%" bg="white" borderRadius="8px">
              {course["course-outcomes"].map((outcome, idx) => {
                return (
                  <ListItem mb="1em">
                    { (idx > 0) ? <Divider /> : null}
                    <VStack>
                      <Text mt="1em">{outcome}</Text>
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
          </Center>

          <Text fontWeight="bold">
            TA evaluation Have each rated 1-5, with 5 being very satisfied and 1
        being very unsatisfied{" "}
          </Text>

          <Center
            m="2em"
            padding="2em"
            bg="#edf2f7"
            w="80%"
          >
            <List padding="1em" w="90%" bg="white" borderRadius="8px">
              {questions.map((question, idx) => {
                return (
                  <ListItem mb="1em">
                    { (idx > 0) ? <Divider /> : null}
                    <VStack>
                      <Text mt="1em">{question.question}</Text>
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
          </Center>

          <Container
            m="2em"
            padding="2em"
            bg="#edf2f7" a
            minW="80%"
          >
            <Text fontWeight="bold">Additional comments on TA's performance</Text>
            <Textarea
              onChange={(e) => setTaPerformanceText({ text: e.target.value })}
              bg="white"
            ></Textarea>
          </Container>

          <Container
            m="2em"
            padding="2em"
            bg="#edf2f7"
            minW="80%"
          >
            <Text fontWeight="bold">List ways this course can be improved</Text>
            <Textarea
              onChange={(e) => setClassPerformanceText({ text: e.target.value })}
              bg="white"
            ></Textarea>
          </Container>

          <Button onClick={testFunction} mb="1em" colorScheme="green">Submit Survey</Button>
        </VStack>
        :
        <StudentLoginBox toggleLoggin={toggleLogin} />
      }
    </>)
};
export default studentSurvey;
