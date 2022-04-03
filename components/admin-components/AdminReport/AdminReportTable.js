import { Table, Thead, Tbody, Tr, Th, Td, Button } from "@chakra-ui/react";
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
          <Th>11</Th>
          <Th>12</Th>
          <Th>13</Th>
          <Th>14</Th>
          <Th>15</Th>
        </Tr>
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
                  <Td>{reportITJson[key][10]}</Td>
                  <Td>{reportITJson[key][11]}</Td>
                  <Td>{reportITJson[key][12]}</Td>
                  <Td>{reportITJson[key][13]}</Td>
                  <Td>{reportITJson[key][14]}</Td>
                </Tr>
              ))}
            </React.Fragment>
          }
          <Tr>
            <Td>All</Td>
            <Td>2</Td>
            <Td>15</Td>
            <Td>6</Td>
            <Td>9</Td>
            <Td>3</Td>
            <Td>2</Td>
            <Td>4</Td>
            <Td>3</Td>
            <Td>6</Td>
            <Td>5</Td>
            <Td>1</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>0</Td>
          </Tr>
          <Tr>
            <Td>Out Of</Td>
            <Td>30</Td>
            <Td>30</Td>
            <Td>30</Td>
            <Td>30</Td>
            <Td>30</Td>
            <Td>30</Td>
            <Td>30</Td>
            <Td>30</Td>
            <Td>30</Td>
            <Td>30</Td>
            <Td>30</Td>
            <Td>30</Td>
            <Td>30</Td>
            <Td>30</Td>
            <Td>30</Td>
          </Tr>
        </Tbody>
      </Table>
    </div>
  );
};
export default adminreportTable;
