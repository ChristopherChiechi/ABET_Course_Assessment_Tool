import React, { useState, useEffect } from "react";
import {
  Box,
  Select,
  Button,
  IconButton,
  List,
  Input,
  Text,
  ListItem,
  VStack,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import useInputState from "../../../hooks/useInputState";
import fakeData from "../../../fake-data/programs.json";
import FacultyMember from "../FacultyMember";

const EditProgramList = () => {
  useEffect(() => {
    document.getElementById("top").scrollIntoView();
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      window.confirm("Are you sure you would like to submit these changes?")
    ) {
      //POST the program list change to the db here
      alert("Program List Updated!");
    }
  };

  const programList = fakeData.programs;
  var csePrograms = [];
  for (var i = 0; i < programList.length; i++) {
    var obj = {};

    obj["name"] = programList[i];
    obj["id"] = i;
    csePrograms.push(obj);
  }

  const [program, setProgram, reset] = useInputState("");
  const [programs, setPrograms] = useState(csePrograms);

  const addProgram = (event) => {
    event.preventDefault();
    setPrograms([
      ...programs,
      {
        id: programs.length,
        name: program,
      },
    ]);
    reset();
  };

  const removeProgram = (id) => {
    event.preventDefault();
    setPrograms(programs.filter((prog) => prog.id !== id));
  };

  const renderProgram = programList.map((prog, idx) => {
    return (
      // <Box display="flex" alignItems="center">
      //     <div className="program">
      //         <ListItem className="program-card">{prog.name}</ListItem>
      //         <IconButton ml="1em" icon="delete" onClick={(e)=>{
      //                 e.preventDefault();
      //                 if (window.confirm('Are you sure you would like to delete '+prog.name+'?')){
      //                     removeProgram(prog.id)
      //                 }
      //         }}></IconButton>
      //     </div>
      // </Box>
      <div>
        <Grid templateColumns="repeat(5, 1fr)" padding=".5em">
          <>
            <GridItem colSpan={4}>
              <ListItem
                className="outcome-list-card"
                key={idx}
                background="#edf2f7"
                boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                borderRadius="5px"
                padding="10px"
                width="75%"
                float="right"
              >
                {prog.name}
              </ListItem>
            </GridItem>
            <GridItem colStart={5} colEnd={6}>
              <Button
                variant="ghost"
                onClick={() => {
                  alert(
                    "This will change the name of the department everywhere it appears in the system. Are you sure you would like to change this? "
                  );
                }}
              >
                Edit
              </Button>
            </GridItem>
          </>
        </Grid>
      </div>
    );
  });

  return (
    <div id="top">
      <VStack id="top" w="80%" m="0 auto" marginBottom="5em">
        <Text fontSize="2xl" fontWeight="bold" mt="1em">
          Edit Program List
        </Text>

        <Text fontWeight="bold" mt="1em" mb="1em" fontSize="lg">
          Programs
        </Text>
        <List w="90%">{renderProgram}</List>
        <form onSubmit={addProgram}>
          <Input
            mt="1rem"
            placeholder="enter a new program"
            variant="flushed"
            type="text"
            value={program}
            onChange={setProgram}
            w="14em"
          />
        </form>
        <IconButton
          variant="link"
          isActive="false"
          mt="1.5em"
          ml="1em"
          variantColor="green"
          size="sm"
          icon="add"
          onClick={addProgram}
        ></IconButton>
        <Button variantColor="green" variant="outline" onClick={handleSubmit}>
          Submit
        </Button>
      </VStack>
    </div>
  );
};
export default EditProgramList;
