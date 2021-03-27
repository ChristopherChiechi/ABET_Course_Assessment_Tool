import { useState } from "react";
import {
  Box,
  Button,
  Text,
  HStack,
  Table,
  Tbody,
  Tr,
  Td,
  Center,
  Checkbox
} from "@chakra-ui/react";
import CheckBoxGroup from "./CheckboxGroup";

const CourseOutcomeTable = ({ course, handleCheck }) => {
  const [outcomes, setOutcomes] = useState(course.outcomes);
  const [checkArray, setCheckArray] = useState(course);
  
  function handleCourseUpdate( courseIdx, studentIdx ){
    var temp = outcomes;
    const checkValue = temp[courseIdx].studentMap[studentIdx];
    temp[courseIdx].studentMap[studentIdx] = (checkValue === 0) ? 1 : 0;
    setOutcomes(temp);
  }

  return( 
      <Box  m="0 auto" w="80rem" padding="2em" bg="#edf2f7" mt="2em">
        <HStack textAlign="left">
          <Text fontWeight="bold">{course.name}</Text>
          <Text color="#38A169" fontWeight="bold">{course.code}</Text>
        </HStack>
        <Table  padding="1em" w="90%" bg="white" borderRadius="8px">
          <Tbody>
            {/* {rows} */}
            {course.outcomes.map((outcome, courseIdx) => {
                return (
                  <Tr key={courseIdx}>
                    <Td>
                      <Text>{courseIdx+1}. {outcome.outcome}</Text>
                      <br/>
                      <Center>
                        <Text mt="1em">Maps to: </Text>
                        {/* <CheckBoxGroup studentMap={outcome.studentMap} key={courseIdx}/> */}
                        <HStack w="90%" spacing={8} justify="center">
                          {outcome.studentMap.map((value, studentIdx) => {
                            return (
                              <Checkbox
                                value={value}
                                onChange={e => {
                                    e.preventDefault();
                                    handleCheck(course, studentIdx, courseIdx)
                                  }
                                }
                              >
                                {studentIdx + 1}
                              </Checkbox>
                            )
                          })}
                        </HStack>
                      </Center>
                    </Td>
                  </Tr>
                )
            })}
          </Tbody>
        </Table>
        <Button size="sm" colorScheme="teal" mt="1em">Update Course Mapping</Button>
      </Box>
    );
};
export default CourseOutcomeTable;
