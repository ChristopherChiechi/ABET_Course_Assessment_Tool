import { Link, Flex, Text, Badge, Button, Box, Spacer, Heading } from "@chakra-ui/react";
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
                
                <Box>
                <Box as="button" mr="1em" borderRadius="md" fontWeight="semibold" color="black" fontSize="lg" px={4} h={10}>{user}</Box>
                <Button colorScheme="teal"><Link href="/" onClick={logout}>Sign Out</Link></Button>
                </Box>
            </Flex>
            
        )

       

}

export default Navigation;