import { Grid, GridItem, Text, Button } from "@chakra-ui/react";
import useToggle from "../../hooks/useToggle";
import EditFacultyMember from "../admin-components/EditFacultyList/EditFacultyMember";

const FacultyMember = ({ member, id, color, edit }) => {
  const [isEditing, toggle] = useToggle(false);

  return (
    <Grid
      templateColumns="repeat(2, 1fr)"
      bg={color}
      padding=".5em"
      alignItems="center"
    >
      {isEditing ? (
        <EditFacultyMember edit={edit} id={id} />
      ) : (
        <>
          <GridItem rowSpan={2}>
            <Text>{member}</Text>
          </GridItem>
          <GridItem>
            <Button
              variant="ghost"
              onClick={() => {
                toggle();
              }}
            >
              Edit
            </Button>
          </GridItem>
        </>
      )}
    </Grid>
  );
};

export default FacultyMember;
