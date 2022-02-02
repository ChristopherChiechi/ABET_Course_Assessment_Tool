import { Grid, GridItem, Text, Button } from "@chakra-ui/react";
import { deleteSemester } from "../../../api/APIHelper";

const DepartmentList = ({ refreshTable, year, term, color }) => {
  const deleteSemesterFunc = (year, term) => {
    //console.log(`Year:${year} Term:${term} `);
    if (confirm(`Are you sure you want to delete Year:${year} Term:${term} `)) {
      deleteSemester(term, year);
    }
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
              refreshTable();
              deleteSemesterFunc(year, term);
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

export default DepartmentList;
