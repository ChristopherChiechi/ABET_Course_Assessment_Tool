import { Grid, GridItem, Text, Button } from "@chakra-ui/react";
import EditFacultyMember from "../admin-components/EditFacultyList/EditFacultyMember";
import { deleteFacultyUser } from "../../api/APIHelper";
import { useState, useRef } from "react";

const FacultyMember = ({ refreshTable, member, id, color }) => {
  const [isEditing, SettoggleEdditing] = useState(false);

  const deleteUser = (id = { id }) => {
    if (confirm("Are you sure you want to delete User: " + id)) {
      console.log("Delete ID " + id);
      const res = deleteFacultyUser(id);
    }
  };

  const toggleEditing = () => {
    SettoggleEdditing((isEdditing) => !isEdditing);
  };

  return (
    <Grid
      templateColumns="repeat(2, 1fr)"
      bg={color}
      padding=".5em"
      alignItems="center"
    >
      {isEditing ? (
        <EditFacultyMember
          refreshTable={refreshTable}
          toggleEditing={toggleEditing}
          id={id}
        />
      ) : (
        <>
          <GridItem rowSpan={"auto"}>
            <Text>Name: {member}</Text>
            <Text>ID: {id}</Text>
          </GridItem>

          <GridItem>
            <Button
              variant="solid"
              onClick={() => {
                toggleEditing();
              }}
              marginRight="1em"
            >
              Edit
            </Button>
            <Button
              variant="solid"
              onClick={() => {
                deleteUser(id);
                refreshTable();
              }}
            >
              Delete
            </Button>
          </GridItem>
        </>
      )}
    </Grid>
  );
};

export default FacultyMember;
