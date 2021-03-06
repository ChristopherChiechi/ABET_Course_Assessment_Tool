import React, { useState, useEffect, setState } from "react";
import {
  Box,
  Select,
  Button,
  Text,
  CheckboxGroup,
  Checkbox,
  SimpleGrid,
  Divider,
  HStack,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption
} from "@chakra-ui/react";

const CourseOutcomeTable = ({ course, studentOutcomes }) => {
  //console.log(useRecoilValue(test));
  const numOfOutcomes = studentOutcomes.length;
  var rows = [];
  console.log(course.outcomes);
  for (var i = 0; i <numOfOutcomes; i++) {
    rows.push(
      <Tr>
        hi
      </Tr>
    );
  }


  return( 
      <Box  m="0 auto" w="80rem" padding="2em" bg="#edf2f7" mt="2em">
        <HStack textAlign="left">
          <Text fontWeight="bold">{course.name}</Text>
          <Text color="#38A169" fontWeight="bold">{course.code}</Text>
        </HStack>
        <Table  padding="1em" w="90%" bg="white" borderRadius="8px">
                    <Thead textAlign="center">
                      Student Oucomes
                    </Thead>
                    <Tbody>
                    </Tbody>
                </Table>
      </Box>
    );
};
export default CourseOutcomeTable;
