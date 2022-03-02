import React, { useState, useEffect } from "react";
import { Box, Text, Select, Flex, VStack, useToast } from "@chakra-ui/react";
import {
  getSemesters,
  deleteSemester,
  addNewSemester,
} from "../../../api/APIHelper";
import SemesterTable from "./SemesterTable";
import { SingleSelect } from "react-select-material-ui";

const EditSemesterList = () => {
  //useEffect(() => {
    //document.getElementById("top").scrollIntoView();
  //});

  const toast = useToast({ position: "top" });
  const [refreshKey, setRefreshKey] = useState(0); //For refreshing the table
  const [semesters, setSemesterList] = useState();
  const [semJson, setSemJson] = useState();
  const [year, setYear] = useState();
  const [term, setTerm] = useState();
  const [lookupObject, setLookupObject] = useState();

  const columns = [
    {
      title: "Year",
      field: "year",
      type: "numeric",
      validate: (rowData) =>
        rowData.year ? true : "Year cannot be empty and must be numeric",
    },
    {
      title: "Term",
      field: "term",
      validate: (rowData) =>
        rowData.term ? true : "Term cannot be empty",
        lookup: { Summer: "Summer", Fall: "Fall", Winter: "Winter", Spring: "Spring" },
    },
  ];

  const getSemesterList = async () => {
    try {
      const semesterlistRes = await getSemesters();
      const res = semesterlistRes.status;
      if (res != "Success") {
        toast({
          title: "Error",
          description: `There was an error fetching the data! Error: ${res}`,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        return;
      }
      const sorted = semesterlistRes.data.sort((a, b) => {
        return b.year - a.year;
      });
      setSemesterList(sorted);
    } catch (error) {
      console.log(error);
    }
  };

  const refreshTable = () => {
    setRefreshKey(refreshKey + 1);
  };

  //Fetch semester list on department change
  useEffect(() => {
    getSemesterList();
  }, [refreshKey]);

  return (
    <div>
      <Box align="center" w="50%" margin="auto">
          <Text
            fontWeight="bold"
            mt="1em"
            mb="1em"
            fontSize="lg"
            align="center"
          >
            Semesters Table
          </Text>
          <SemesterTable
            columns={columns}
            data={semesters}
            refreshTable={refreshTable}
          />
      </Box>
    </div>
  );
};
export default EditSemesterList;















/*import { Grid, GridItem, Text, Button, useToast } from "@chakra-ui/react";
import { deleteSemester } from "../../../api/APIHelper";

const SemesterList = ({ refreshTable, year, term, color }) => {
  const toast = useToast({ position: "top" });

  const deleteSemesterFunc = async (term, year) => {
    try {
      if (
        confirm(`Are you sure you want to delete Year: ${year} Term: ${term} `)
      ) {
        const res = await deleteSemester(term, year);
        const status = res.status;
        if (status == "Success") {
          toast({
            description: `Successfuly removed ${year} ${term}`,
            status: "success",
            duration: 2000,
            isClosable: true,
          });
        } else {
          toast({
            description: `There was an error! Message: ${status} `,
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
    refreshTable();
  };

  return (
    <Grid
      templateColumns="repeat(2, 1fr)"
      bg={color}
      padding=".5em"
      alignItems="center"
    >
      <>
        <GridItem rowSpan={"auto"}>
          <Text>
            Year: {year} Term: {term}
          </Text>
        </GridItem>
        <GridItem>
          <Button
            variant="solid"
            onClick={() => {
              deleteSemesterFunc(term, year);
            }}
            marginLeft={"15em"}
          >
            Delete
          </Button>
        </GridItem>
      </>
    </Grid>
  );
};

export default SemesterList;
*/
