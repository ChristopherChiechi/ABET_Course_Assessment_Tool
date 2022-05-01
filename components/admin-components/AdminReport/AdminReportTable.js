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
        mt="1em"
        placement="top"
        variant="simple"
        colorScheme="teal"
        size="sm"
        border="5px"
        borderColor="gray.200"
      >
        <Thead>
          <Th colspan="11">
            <Text textAlign="center" fontWeight="bold" fontSize="15px">
              {majorName}
            </Text>
          </Th>
        </Thead>
        <Thead>
          <Th></Th>
          <Th colspan="10">
            <Text textAlign="center" color="teal">
              Student Outcome %
            </Text>
          </Th>
          <Tr>
            <Th>
              <Text fontWeight="bold" fontSize="14px">
                Course
              </Text>
            </Th>
            <Th>
              <Text fontWeight="bold" fontSize="14px">
                1
              </Text>
            </Th>
            <Th>
              <Text fontWeight="bold" fontSize="14px">
                2
              </Text>
            </Th>
            <Th>
              <Text fontWeight="bold" fontSize="14px">
                3
              </Text>
            </Th>
            <Th>
              <Text fontWeight="bold" fontSize="14px">
                4
              </Text>
            </Th>
            <Th>
              <Text fontWeight="bold" fontSize="14px">
                5
              </Text>
            </Th>
            <Th>
              <Text fontWeight="bold" fontSize="14px">
                6
              </Text>
            </Th>
            <Th>
              <Text fontWeight="bold" fontSize="14px">
                7
              </Text>
            </Th>
            <Th>
              <Text fontWeight="bold" fontSize="14px">
                8
              </Text>
            </Th>
            <Th>
              <Text fontWeight="bold" fontSize="14px">
                9
              </Text>
            </Th>
            <Th>
              <Text fontWeight="bold" fontSize="14px">
                10
              </Text>
            </Th>
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
