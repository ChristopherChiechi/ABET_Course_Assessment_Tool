import { Grid, GridItem, Text, Button } from "@chakra-ui/react";
import { deleteMajor } from "../../../api/APIHelper";

const MajorList = ({ refreshTable, majorName, term, year, color }) => {
  const handleDeleteMajor = async (majorName, year, term) => {
    //console.log(`Year:${year} Term:${term} `);
    if (
      confirm(
        `Are you sure you want to delete Major: ${majorName} for ${year} ${term}?`
      )
    ) {
      const res = await deleteMajor(majorName, term, year);
      console.log(res);
      refreshTable();
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
            Major Name: {majorName} Term: {term} Year: {year}
          </Text>
        </GridItem>
        <GridItem>
          <Button
            variant="solid"
            onClick={() => {
              handleDeleteMajor(majorName, year, term);
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
export default MajorList;
