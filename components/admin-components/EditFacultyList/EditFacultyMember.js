import { Input } from "@chakra-ui/react";
import useInputState from "../../../hooks/useInputState";

const EditFacultyMember = ({ edit, id }) => {
  const [newName, setNewName] = useInputState("");

  const editName = () => {
    edit(newName, id);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        edit();
      }}
    >
      <Input
        value={newName}
        onChange={setNewName}
        placeholder="name"
        onSubmit={(e) => {
          e.preventDefault();
          editName(newName, id);
        }}
      />
    </form>
  );
};

export default EditFacultyMember;
