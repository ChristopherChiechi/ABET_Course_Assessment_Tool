import { Link, Flex, Text, Badge, Button, Box, Spacer, Heading } from "@chakra-ui/react";
import { createTheme, MuiThemeProvider, Grid } from "@material-ui/core";
import API from "./../../api/api";

const theme = createTheme({
    palette: {
      primary: {
        main: "#016a31",
      },
    },
  });

const Navigation = ({user}) => {
        const logout = () => {
            new API().logout();
        }

        return(
            
            <MuiThemeProvider theme={theme}>
            <Flex
                justifyContent="flex-end"
                mt="1em"
                mr="1em"
                dir="row">

                <Box as="button" px="4" fontSize="xl" >{user}</Box>
                <Box
                    as="button"
                    color="white"
                    bg="#016a31"
                    height="10"
                    rounded="md"
                    width="20"
                    _hover={{
                        background: "teal",
                        color: "white",
                      }}
                    >
                    <Link href="/" onClick={logout}>Sign Out</Link>
                    </Box>
                    
            </Flex>
          </MuiThemeProvider>
            
            
        )

       

}

export default Navigation;