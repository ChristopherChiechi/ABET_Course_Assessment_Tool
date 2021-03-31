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
import Programs from "../Programs";

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

  const renderProgram = csePrograms.map((prog, idx) => {
    return (
      <ListItem align="center">
        <Programs      
          program={prog.name.name}
          color={idx %2 == 0 ? "gray.300" : "gray.100"}
          key={idx}>
    
        </Programs>
      </ListItem>
      
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
