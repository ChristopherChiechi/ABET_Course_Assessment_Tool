import { Grid, GridItem, Text, Flex } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import useToggle from "../hooks/useToggle";
import { removeCourse } from "../api/APIHelper";

const Courses = ({
  DisplayName,
  courseNumber,
  coordinatorID,
  color,
  year,
  semester,
  department,
  courseComplete,
}) => {
  return (
    <Grid templateColumns="repeat(5, 1fr)" bg={color} padding=".5em">
      <>
        <GridItem colStart={1} colEnd="auto">
          <Text fontSize="15px">
            {department}&nbsp;{DisplayName}&nbsp;{courseNumber}
          </Text>
          <Text fontSize="15px">Coordinator&nbsp;EUID:{coordinatorID}</Text>
        </GridItem>
        <GridItem colStart={5} colEnd={6}>
          <Button
            variant="ghost"
            onClick={() => {
              removeCourse(year, semester, courseNumber, department);
              alert("This will remove your entry");
            }}
          >
            Remove
          </Button>
        </GridItem>
      </>
    </Grid>
  );
};

export default Courses;
