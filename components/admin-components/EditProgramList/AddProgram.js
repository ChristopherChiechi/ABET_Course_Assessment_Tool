import { useState } from "react";
import { Button, Input, Select } from "@chakra-ui/react";
import { Flex, FormLabel } from "@chakra-ui/react";
import useToggle from "../../../hooks/useToggle";
import useInputState from "../../../hooks/useInputState";

const AddProgram = ({addNewProgram}) => {
    const [program, setProgram] = useInputState("");

    const [isEdditing, toggleEdditing] = useToggle();

    const addProgram = () => {
        addNewProgram({program: program});
        toggleEdditing();
    };

    return (
        <>
        {isEdditing ? (
        <Flex direction="column" align="center">
          <FormLabel>New Program</FormLabel>
          <Input
            w="100%"
            value={program}
            onChange={setProgram}
            variant="filled"
          />
           <Button variantColor="green" mt="1em" onClick={addProgram}>
              Add New Program
          </Button>
          </Flex>
         
        ) : (
            <Flex justifyContent="center">
          <Button variantColor="green" mt="2em" onClick={toggleEdditing}>
            Add Program
          </Button>
        </Flex>
        )}
        </>
    );
};
export default AddProgram;