import { Grid, GridItem, Text, Button } from "@chakra-ui/react";
import useToggle from "../../hooks/useToggle";
import EditFacultyMember from "../admin-components/EditFacultyList/EditFacultyMember";
import { deleteFacultyUser } from "../../api/APIHelper";
import { useRouter } from "next/router";

const FacultyMember = ({ member, id, color, edit }) => {
  const router = useRouter();
  const [isEditing, toggle] = useToggle(false);
  console.log("is editing:" + isEditing);
  function deleteUser(id = { id }) {
    const res = deleteFacultyUser(id.id);
    console.log(res);
    router.reload(window.location.pathname);
  }

  function setChanged() {
    toggle();
  }

  return (
    <Grid
      templateColumns="repeat(2, 1fr)"
      bg={color}
      padding=".5em"
      alignItems="center"
    >
      {isEditing ? (
        <EditFacultyMember edit={setChanged} id={id} />
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
                toggle();
              }}
              marginRight="1em"
            >
              Edit
            </Button>
            <Button
              variant="solid"
              onClick={() => {
                deleteUser({ id });
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
