//imports
import {
  Tbody,
  Tr,
  Td,
  Text,
  Center,
  Stack,
  HStack,
  Table,
  Checkbox,
  RadioGroup,
  Select,
  Radio,
  Button,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

const MappingTable2 = ({ outcomeList, majorOutcomeDisplay }) => {
  const [value, setValue] = useState(outcomeList);
  const [storeSelect, setStoreSelect] = useState();

  const handleChange = (preStoreSelect, courseOutcomeName, newValue) => {
    setStoreSelect((preStoreSelect) => ({
      ...preStoreSelect, // keep all other key-value pairs
      [courseOutcomeName]: newValue, // update the value of specific key
    }));
    console.log(storeSelect);
  };

  const createStoreSelect = () => {
    const storedSelect = {};
    for (const key of outcomeList) {
      storedSelect[key.name] = 0;
    }
    setStoreSelect(storedSelect);
  };

  const updateOutcome = (courseOutcomeName) => {
    console.log(
      `Update outcome:${courseOutcomeName} value: ${storeSelect[courseOutcomeName]}`
    );
  };
  useEffect(() => {
    createStoreSelect();
  }, []);

  return (
    <>
      <Center w="80rem" padding="4em">
        <Table padding="1em" w="100%" borderRadius="8px" bg="#edf2f7">
          <Tbody>
            <Tr>
              <Td>
                <Text color="teal">Course Outcome</Text>
              </Td>
              <Td>
                <Text color="teal">Current</Text>
              </Td>
              <Td>
                <Text color="teal">Map To</Text>
              </Td>
            </Tr>
            {storeSelect &&
              outcomeList.map((courseOutcome, courseIdx) => {
                return (
                  <Tr key={courseIdx}>
                    <Td>
                      <Text>
                        {courseOutcome.name}. {courseOutcome.description}
                      </Text>
                    </Td>
                    <Td>
                      <Text>Current:{storeSelect[courseOutcome.name]}</Text>
                    </Td>
                    <Td>
                      <Select
                        id="Map"
                        width="160%"
                        isRequired={true}
                        borderColor="teal"
                        placeholder="Map to"
                        value={storeSelect[courseOutcome.name]}
                        onChange={(e) => {
                          console.log(e.target.value);
                          handleChange(
                            storeSelect,
                            courseOutcome.name,
                            e.target.value
                          );
                        }}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </Select>
                    </Td>
                    <Td>
                      <Button
                        colorScheme="teal"
                        onClick={() => updateOutcome(courseOutcome.name)}
                      >
                        update
                      </Button>
                    </Td>
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
      </Center>
    </>
  );
};
export default MappingTable2;
