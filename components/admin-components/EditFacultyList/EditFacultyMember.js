import { Input, Button } from "@chakra-ui/react";
import useInputState from "../../../hooks/useInputState";
import { editFacultyUser } from "../../../api/APIHelper";

const EditFacultyMember = ({ refreshTable, toggleEditing, id }) => {
  const [newFName, setNewFName] = useInputState("");
  const [newLName, setNewLName] = useInputState("");
  const [newEUID, setNewEUID] = useInputState("");

  const editUser = () => {
    console.log(newFName, newLName, id, newEUID);
    if (newEUID == "") {
      editFacultyUser(newFName, newLName, id, id);
    } else {
      editFacultyUser(newFName, newLName, id, newEUID);
    }
    refreshTable();
  };

  const cancel = () => {
    toggleEditing();
    refreshTable();
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      alignContent="center"
      justifyContent="center"
      align="center"
    >
      <Input
        value={newFName}
        onChange={setNewFName}
        placeholder="First Name"
        focusBorderColor="black"
      />
      <Input
        value={newLName}
        onChange={setNewLName}
        placeholder="Last Name"
        focusBorderColor="black"
      />
      <Input
        value={newEUID}
        onChange={setNewEUID}
        placeholder={id}
        focusBorderColor="red"
      />
      <Button
        marginTop={"2em"}
        variant="solid"
        onClick={() => {
          editUser();
        }}
      >
        Change
      </Button>
      <Button
        marginTop={"2em"}
        marginLeft={"2em"}
        variant="solid"
        onClick={() => {
          cancel();
        }}
      >
        Done
      </Button>
    </form>
  );
};

export default EditFacultyMember;
