import { Input, Button, useToast } from "@chakra-ui/react";
import useInputState from "../../../hooks/useInputState";
import { editFacultyUser } from "../../../api/APIHelper";
import { useState } from "react";

const EditFacultyMember = ({ refreshTable, toggleEditing, id }) => {
  const toast = useToast();
  const [refreshKey, setRefreshKey] = useState(0);
  const [newFName, setNewFName] = useInputState("");
  const [newLName, setNewLName] = useInputState("");
  const [newEUID, setNewEUID] = useInputState("");

  const editUser = async (event) => {
    console.log(newFName, newLName, id, newEUID);
    if (newEUID == "") {
      toast({
        description: 'Required field empty!',
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
      return;
    }
    try {
      const res = await editFacultyUser(newFName, newLName, id, newEUID);
      console.log(res);
      if (res == "Success") {
        toast({
          description: `Change Successful! Please refresh the page if you don't see the new change.`,
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      } else {
        toast({
          description: `There was an error! Message: ${res} `,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
      refreshTable();
    } catch (error) {
      console.log(error);
    }
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
