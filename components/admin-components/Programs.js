import { Grid, GridItem, Text } from "@chakra-ui/react";
import useToggle from "../../hooks/useToggle";
import { removeCourse } from "../../api/APIHelper";

const Programs = ({
  program,
  color,
}) => {
  return (
    <Grid templateColumns="repeat(1, 1fr)" bg={color} padding=".5em">
      <>
        <GridItem colSpan={1}>
          <Text align="center" fontSize="20px">
            {program}
          </Text>
        </GridItem>
      </>
    </Grid>
  );
};

export default Programs;
