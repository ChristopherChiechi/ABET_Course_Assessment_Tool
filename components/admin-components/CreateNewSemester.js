import React, { useState, useEffect } from "react";
import { Box, Text, Select, Button } from "@chakra-ui/react";

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
      <Box fontWeight="bold" marginTop="1em" marginBottom="1em">
        <Text align="center" fontSize="20px">
          Create New Semester
        </Text>
      </Box>
      <Box borderWidth="2px" rounded="lg" alignItems="center" m="1em" p="3em">
        <div>
          <Box fontWeight="bold">
            Select the term and year for the new semester.
          </Box>
          <div className="dropdown-container">
            <Select
              mt="1em"
              id="term"
              placeholder="Select term"
              margin-left="30%"
              margin-right="30%"
            >
              <option value="Spring">Spring</option>
              <option value="Summer">Summer</option>
              <option value="Fall">Fall</option>
            </Select>

            <Select
              mt="1em"
              id="year"
              placeholder="Select year"
              marginRight="30%"
              marginTop="1em"
              marginBottom="2em"
            >
              {/* should be filled with a list of years from db */}
              <option value="year1">{y}</option>
              <option value="year2">{y + 1}</option>
            </Select>
          </div>
          <Button
            variantColor="green"
            variant="outline"
            onClick={handleConfirm}
            margin-left="30%"
            margin-right="30%"
          >
            Confirm
          </Button>
        </div>
      </Box>
    </div>
  );
};
export default CreateNewSemester;
