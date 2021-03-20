import React, { useState } from "react";
import {
  Box,
  Input,
  Text,
  Divider,
  List,
  ListItem,
  IconButton,
} from "@chakra-ui/react";
import useInputState from "../../../hooks/useInputState";
import Autocomplete from "./Autocomplete.js";

import fakeData from "../../../fake-data/faculty.json";

const faculty = fakeData.faculty;

const AssignCourseInput = ({ course }) => {
  const [section, setSection, reset] = useInputState("");
  const [sections, setSections] = useState([]);

  const addSection = (event) => {
    event.preventDefault();
    setSections([
      ...sections,
      {
        id: sections.length,
        name: section,
      },
    ]);
    reset();
  };

  const removeSection = (id) => {
    event.preventDefault();
    setSections(sections.filter((sect) => sect.id !== id));
  };

  const renderSection = sections.map((sect) => {
    console.log(sect.name);
    return (
      <Box display="inline" flexDirection="row" alignItems="center">
        <div className="section-field">
          <ListItem display="inline" flexDirection="row" color="">
            {sect.name}
          </ListItem>
        </div>
        <div className="instructor-field">
          <Autocomplete suggestions={faculty} />
        </div>
        <div className="trash-field">
          <IconButton
            marginLeft="2rem"
            width="5rem"
            marginBottom=".2em"
            icon="delete"
            onClick={(e) => {
              e.preventDefault();
              if (
                window.confirm(
                  "Are you sure you would like to delete section " +
                    sect.name +
                    "?"
                )
              ) {
                removeSection(sect.id);
              }
            }}
          ></IconButton>
        </div>
      </Box>
    );
  });
  return (
    <div>
      <div className="course-input">
        <div className="course-field">
          <Text
            fontSize="lg"
            mt="6px"
            display="inline"
            flexDirection="row"
            justifyContent="left"
            textAlign="left"
            marginLeft="2rem"
            width="8rem"
            marginBottom=".2em"
          >
            {course}
          </Text>
          <Text
            display="inline"
            flexDirection="row"
            justifyContent="left"
            textAlign="left"
            marginLeft="8.5rem"
            width="8rem"
            marginBottom=".2em"
          ></Text>
          <Text display="inline"></Text>
          <Autocomplete suggestions={faculty} display="inline" />
          <List display="inline" flexDirection="row" justifyContent="left">
            {renderSection}
          </List>
          <form onSubmit={addSection}>
            <Input
              display="inline"
              flexDirection="row"
              justifyContent="center"
              textAlign="left"
              mt="1rem"
              placeholder="enter a new section number"
              variant="flushed"
              type="text"
              value={section}
              onChange={setSection}
              w="13em"
            />
          </form>
        </div>
        <div className="coordinator-field"></div>
      </div>

      <IconButton
        display="inline"
        flexDirection="row"
        justifyContent="center"
        textAlign="left"
        variant="link"
        isActive="false"
        mt="1.8em"
        ml=".2em"
        variantColor="green"
        size="sm"
        icon="add"
        onClick={addSection}
      ></IconButton>
      <div className="section-input"></div>
      <Divider mb="2rem" mt="2rem" borderColor="black" />
    </div>
  );
};
export default AssignCourseInput;
