import { Grid, GridItem, Text, Button, useToast } from "@chakra-ui/react";
import { deleteSemester } from "../../../api/APIHelper";

const SemesterList = ({ refreshTable, year, term, color }) => {
  const toast = useToast();

  const deleteSemesterFunc = async (term, year) => {
    try {
      if (
        confirm(`Are you sure you want to delete Year: ${year} Term: ${term} `)
      ) {
        const res = await deleteSemester(term, year);
        if (res == "Success") {
          toast({
            description: `Successfuly removed ${year} ${term}`,
            status: "success",
            duration: 2000,
            isClosable: true,
          });
        } else {
          toast({
            description: `There was an error! Message: ${res} `,
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
