import { Flex, List, ListItem, Text, Divider } from "@chakra-ui/react";

const ReportOutcome = ({ outcome }) => {
  console.log(outcome);
  const renderWorksList = outcome.studentWorks.map((work) => {
    return <ListItem mb=".5em">{work.studentWork}</ListItem>;
  });

  return (
    <div>
      <Flex direction="row">
        <div className="outcome-name">
          <Text w="50%">{outcome.outcome}</Text>
        </div>
        <div className="student-works">
          <List>{renderWorksList}</List>
        </div>
        <div className="percentages">
          <List>
            <ListItem mb=".5em">CE: {outcome.numberOfIT}</ListItem>
            <ListItem mb=".5em">CS: {outcome.numberOfCS}</ListItem>
            <ListItem mb=".5em">IT: {outcome.numberOfCE}</ListItem>
            <ListItem mb=".5em">CYS: {outcome.numberOfC}</ListItem>
          </List>
        </div>
      </Flex>
      <Divider orientation="horizontal" borderColor="black" border />
    </div>
  );
};

export default ReportOutcome;
