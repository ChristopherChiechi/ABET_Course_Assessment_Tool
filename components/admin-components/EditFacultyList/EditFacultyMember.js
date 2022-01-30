import { Input, Button } from "@chakra-ui/react";
import useInputState from "../../../hooks/useInputState";
import { editFacultyUser, deleteFacultyUser } from "../../../api/APIHelper";
import { useRouter } from "next/router";
import { Face } from "@mui/icons-material";

const EditFacultyMember = ({ toggle, id }) => {
  const router = useRouter();
  const [newFName, setNewFName] = useInputState("");
  const [newLName, setNewLName] = useInputState("");
  const [newEUID, setNewEUID] = useInputState("");
  console.log("toggleer" + toggle);

  const editUser = () => {
    console.log(newFName, newLName, newEUID);
    editFacultyUser(newFName, newLName, id);
    router.reload(window.location.pathname);
  };
  const cancel = () => {
    router.reload(window.location.pathname);
  };
  console.log(id);
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
        isReadOnly
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
        Cancel
      </Button>
    </form>
  );
};

export default EditFacultyMember;
