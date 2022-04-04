import { Table, Thead, Tbody, Tr, Th, Td, Text } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";

const adminreportTable = ({ reportITJson, majorName }) => {
  const renderOutcome = (outcomes) => {
    console.log(outcomes);
    var row = " ";
    for (var i = 0; i < outcomes.length; i++) {
      console.log(i);
      row = row + `<Td>${outcomes[i]}</Td>\n`;
    }
    console.log(row);
    row = "{" + row + "}";
    return row;
  };

  return (
    <div className="tableBorder">
      <Table
        placement="top"
        variant="simple"
        colorScheme="teal"
        size="sm"
        border="5px"
        borderColor="gray.200"
      >
        <Thead>{majorName}</Thead>
        <Thead>
          <Tr>
            <Text textAlign="left">Student Outcome</Text>
          </Tr>
          <Tr>
            <Th>Course</Th>
            <Th>1</Th>
            <Th>2</Th>
            <Th>3</Th>
            <Th>4</Th>
            <Th>5</Th>
            <Th>6</Th>
            <Th>7</Th>
            <Th>8</Th>
            <Th>9</Th>
            <Th>10</Th>
          </Tr>
        </Thead>

        <Tbody>
          {
            <React.Fragment>
              {Object.keys(reportITJson).map((key) => (
                <Tr>
                  <Td>{key}</Td>
                  <Td>{reportITJson[key][0]}</Td>
                  <Td>{reportITJson[key][1]}</Td>
                  <Td>{reportITJson[key][2]}</Td>
                  <Td>{reportITJson[key][3]}</Td>
                  <Td>{reportITJson[key][4]}</Td>
                  <Td>{reportITJson[key][5]}</Td>
                  <Td>{reportITJson[key][6]}</Td>
                  <Td>{reportITJson[key][7]}</Td>
                  <Td>{reportITJson[key][8]}</Td>
                  <Td>{reportITJson[key][9]}</Td>
                </Tr>
              ))}
            </React.Fragment>
          }
        </Tbody>
      </Table>
    </div>
  );
};
export default adminreportTable;
