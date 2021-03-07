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
  Center
} from "@chakra-ui/react";
import CheckBoxGroup from "./CheckboxGroup";

const CourseOutcomeTable = ({ course }) => {
  const [outcomes, setOutcomes] = useState(course.outcomes);
  console.log(outcomes);
  
  function handleCourseUpdate( courseIdx, studentIdx ){
    var temp = outcomes;
    const checkValue = temp[courseIdx].studentMap[studentIdx];
    temp[courseIdx].studentMap[studentIdx] = (checkValue === 0) ? 1 : 0;
    setOutcomes(temp);
    console.log(outcomes);
  }

  const rows = outcomes ? outcomes.map((outcome, courseIdx) => {
    return (
      <Tr>
        <Td>
          <Text>{courseIdx+1}. {outcome.outcome}</Text>
          <br/>
          <Center>
            <Text mt="1em">Maps to: </Text>
            <CheckBoxGroup studentMap={outcome.studentMap}/>
          </Center>
        </Td>
      </Tr>
    )
  }) : <div></div>

  return( 
      <Box  m="0 auto" w="80rem" padding="2em" bg="#edf2f7" mt="2em">
        <HStack textAlign="left">
          <Text fontWeight="bold">{course.name}</Text>
          <Text color="#38A169" fontWeight="bold">{course.code}</Text>
        </HStack>
        <Table  padding="1em" w="90%" bg="white" borderRadius="8px">
          <Tbody>
            {rows}
          </Tbody>
        </Table>
        <Button size="sm" colorScheme="teal" mt="1em">Update Course Mapping</Button>
      </Box>
    );
};
export default CourseOutcomeTable;
