import { Grid, GridItem, Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import useToggle from "../hooks/useToggle";
import { removeCourse } from "../api/APIHelper";

const Courses = ({
  member,
  color,
  year,
  semester,
  courseNumber,
  department,
}) => {
  return (
    <Grid templateColumns="repeat(5, 1fr)" bg={color} padding=".5em">
      <>
        <GridItem colSpan={2}>
          <Text align="center" fontSize="20px">
            {member}
          </Text>
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
