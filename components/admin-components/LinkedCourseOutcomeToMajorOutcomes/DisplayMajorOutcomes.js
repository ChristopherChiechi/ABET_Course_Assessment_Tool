//imports
import { Text, ListItem, Center, OrderedList } from "@chakra-ui/react";

const DisplayMajorOutcomes = ({ majorSelect, majorOutcomeDisplay }) => {
  return (
    <>
      <Text color="teal">Showing ABET outcomes for {majorSelect}</Text>
      <Center w="100%" padding="2em">
        <OrderedList w="80%">
          {majorOutcomeDisplay.map(function (d, idx) {
            return (
              <ListItem key={d.name}>
                <Text textAlign="left">{d.description}</Text>
              </ListItem>
            );
          })}
        </OrderedList>
      </Center>
    </>
  );
};
export default DisplayMajorOutcomes;
