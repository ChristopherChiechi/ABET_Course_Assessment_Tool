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
    <Grid templateColumns="repeat(2, 1fr)" bg={color} padding=".5em">
      <>
        <GridItem rowSpan={2}>
          <Text>{member}</Text>
        </GridItem>
        <GridItem>
          <Button
            variant="ghost"
            onClick={() => {
              removeCourse(year, semester, courseNumber, department)
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

export default Courses; ;
