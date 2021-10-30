import { Link, Flex, Text, Badge, Button, Box, Spacer, Heading } from "@chakra-ui/react";
import { createTheme, MuiThemeProvider, Grid } from "@material-ui/core";
import API from "./../../api/api";

const Navigation = ({user}) => {
        const logout = () => {
            new API().logout();
        }

        return(
            
            
            <Flex
                justifyContent="flex-end"
                mt="1em"
                mr="1em"
                dir="row">

                <Box as="button" px="4" fontSize="xl" >{user}</Box>
                <Button
                    
                    color="white"
                    bg="#016a31"
                    
                    _hover={{
                        background: "teal",
                        color: "white",
                      }}
                    >
                    <Link href="/" onClick={logout}>Sign Out</Link>
                    </Button>
                    
            </Flex>
          
            
            
        )

       

}

export default Navigation;