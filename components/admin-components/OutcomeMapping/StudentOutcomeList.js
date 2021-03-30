import {
  Box,
  Button,
  Text,
  SimpleGrid,
  Center,
} from "@chakra-ui/react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';


import { List, ListItem, ListIcon, OrderedList, UnorderedList } from "@chakra-ui/react"
import fakeData from "../../../fake-data/course.json";
import abetOutcomes from "../../../fake-data/abetStudentOutcomes.json";

const StudentOutcomeList = ({ selectedProgram }) => {
  /* fill from db when integrated*/

  const programName = selectedProgram.name;
  const outcomes = selectedProgram.outcomes; 

  //console.log(outcomes);
 
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      window.confirm("Are you sure you would like to submit these changes?")
    ) {p
      //POST the program list change to the db here
      alert("Outcome Mapping for '" + selectedProgram + "' updated!");
    }
  };

  const renderStudentOutcomes = outcomes.map((outcome, idx) => {
    return <ListItem key={idx}><Text textAlign="left">{outcome}</Text></ListItem>
  })

  return (
    <>
      <Text textAlign="center">Showing ABET outcomes for</Text>
      <Text textAlign="center" color="#38A169" fontWeight="bold" mb="1em">{programName}</Text>
      <Center m="0 auto" w="80rem" padding="4em" bg="#edf2f7">
        <OrderedList>
          {renderStudentOutcomes}
        </OrderedList>
    </Center>
    </>
  );
};
export default StudentOutcomeList;
