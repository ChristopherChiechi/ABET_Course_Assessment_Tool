import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  IconButton,
  List,
  Input,
  ListItem,
  VStack,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import useInputState from "../../../hooks/useInputState";
import fakeData from "../../../fake-data/outcomes.json";

const EditOutcomeList = ({ prop }) => {
  console.log(prop);
  var shortName = prop.code;
  var className = prop.name;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      window.confirm("Are you sure you would like to submit these changes?")
    ) {
      //POST the program list change to the db here
      alert(
        "Course outcomes for '" + shortName + " " + className + "' updated!"
      );
    }
  };

  const outcomeList = fakeData.outcomes;
  var courseOutcomes = [];
  for (var i = 0; i < outcomeList.length; i++) {
    if (shortName == outcomeList[i].code) {
      for (var j = 0; j < outcomeList[i].courseOutcomes.length; j++) {
        var obj = {};
        obj["name"] = outcomeList[i].courseOutcomes[j];
        obj["id"] = j;
        courseOutcomes.push(obj);
      }
    }
  }

  const [outcome, setOutcome, reset] = useInputState("");
  const [outcomes, setOutcomes] = useState(courseOutcomes);
  useEffect(() => {
    setOutcomes(courseOutcomes);
  }, [prop]);

  const addOutcome = (event) => {
    event.preventDefault();
    setOutcomes([
      ...outcomes,
      {
        id: outcomes.length,
        name: outcome,
      },
    ]);
    reset();
  };

  const removeOutcome = (id) => {
    event.preventDefault();
    setOutcomes(outcomes.filter((outc) => outc.id !== id));
  };

  const renderOutcome = outcomes.map((outc, idx) => {
    return (
      <div>
        <Grid
          templateColumns="repeat(5, 1fr)"
          padding=".5em"
          justifyContent="center"
        >
          <>
            <GridItem colSpan={4}>
              <ListItem
                className="outcome-list-card"
                key={idx}
                background="#edf2f7"
                boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                borderRadius="5px"
                padding="10px"
                width="82%"
                float="right"
              >
                {outc.name}
              </ListItem>
            </GridItem>
            <GridItem colStart={5} colEnd={6}>
              <Button
                variant="ghost"
                onClick={() => {
                  alert("This will remove your entry");
                }}
              >
                Remove
              </Button>
            </GridItem>
          </>
        </Grid>
      </div>
    );
  });

  return (
    <div>
      <VStack id="top" w="100%" m="0 auto" marginBottom="3em">
        <Text fontWeight="bold" fontSize="20px" display="inline">
          Edit Course Outcome List for {shortName}{" "}
        </Text>
        <div className="outcome-list-container">
          <List>{renderOutcome}</List>
        </div>
        <div className="outcome-list-input">
          <form onSubmit={addOutcome}>
            <Input
              mt="1rem"
              placeholder="enter a new course outcome"
              variant="flushed"
              type="text"
              value={outcome}
              onChange={setOutcome}
              w="30em"
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
            onClick={addOutcome}
          ></IconButton>
        </div>
        <Button variantColor="green" variant="outline" onClick={handleSubmit}>
          Submit
        </Button>
      </VStack>
    </div>
  );
};
export default EditOutcomeList;
