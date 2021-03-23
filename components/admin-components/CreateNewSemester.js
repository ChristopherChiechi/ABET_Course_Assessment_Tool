import React, { useState, useEffect } from "react";
import { Box, Text, Select, Button, VStack } from "@chakra-ui/react";

const CreateNewSemester = () => {
  var d = new Date();
  var y = d.getFullYear();

  useEffect(() => {
    document.getElementById("top").scrollIntoView();
  });

  const handleConfirm = (event) => {
    event.preventDefault();
    if (
      window.confirm(
        "Are you sure you would like to create the selected new semester?"
      )
    ) {
      //POST the new semsester to the db
      alert("New Semester Created!");
    }
  };

  return (
    <div id="top">
      <VStack id="top" w="80%" m="0 auto" marginBottom="10em">
        <Text fontSize="2xl" fontWeight="bold" mt="1em">
          Create New Semester
        </Text>

        <Box fontWeight="bold">
          Select the term and year for the new semester.
        </Box>

        <Select
          mt="1em"
          id="term"
          placeholder="Select term"
          width="50%"
          marginBottom="1em"
        >
          <option value="Spring">Spring</option>
          <option value="Summer">Summer</option>
          <option value="Fall">Fall</option>
        </Select>

        <Select
          mt="1em"
          id="year"
          placeholder="Select year"
          marginTop="1em"
          marginBottom="2em"
          width="50%"
        >
          {/* should be filled with a list of years from db */}
          <option value="year1">{y}</option>
          <option value="year2">{y + 1}</option>
        </Select>

        <Button variantColor="green" variant="outline" onClick={handleConfirm}>
          Confirm
        </Button>
      </VStack>
    </div>
  );
};
export default CreateNewSemester;
