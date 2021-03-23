import { Text, Box, Flex } from "@chakra-ui/react";

const ReportGrades = ({ ceGrades, csGrades, itGrades }) => {
  const renderCeGrades = Object.keys(ceGrades).map((entry) => {
    return entry !== "totalStudents" ? (
      <Text textTransform="uppercase" mr="1em">
        {entry} - {ceGrades[entry]}{" "}
      </Text>
    ) : (
      <Text>Actual - {ceGrades[entry]} </Text>
    );
  });
  const renderCsGrades = Object.keys(ceGrades).map((entry) => {
    return (
      <Text textTransform="uppercase">
        {entry} - {csGrades[entry]}{" "}
      </Text>
    );
  });
  const renderItGrades = Object.keys(ceGrades).map((entry) => {
    return (
      <Text textTransform="uppercase">
        {entry} - {itGrades[entry]}{" "}
      </Text>
    );
  });
  return (
    <Flex align="center" border=".25em solid black" h="10em">
      <Box bg="lightgreen" padding="1em" mr="1em" fontWeight="bold" h="9.5em">
        <Text mt="3em">Grades</Text>
      </Box>
      <Flex direction="column" mr="1em">
        <Flex>
          <Text fontWeight="bold" mr="1em">
            CE:
          </Text>
          <Flex>{renderCeGrades}</Flex>
        </Flex>
        <Flex>
          <Text fontWeight="bold" mr="1em">
            CS:
          </Text>
          <Flex>{renderCeGrades}</Flex>
        </Flex>
        <Flex>
          <Text fontWeight="bold" mr="1em">
            IT:
          </Text>
          <Flex>{renderCeGrades}</Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ReportGrades;
