import { Link, Flex, Button, Box, useColorModeValue } from "@chakra-ui/react";
import API from "./../../api/api";

const Navigation = ({ user }) => {
  const logout = () => {
    new API().logout();
  };

  return (
    <Flex
      justifyContent="flex-end"
      mt="1em"
      mr="1em"
      dir="row"
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Box as="button" px="4" fontSize="xl">
        {user}
      </Box>
      <Link href="/" onClick={logout}>
        <Button
          bg="#016a31"
          color="white"
          _hover={{
            background: "teal",
            color: "white",
          }}
        >
          Sign Out
        </Button>
      </Link>
    </Flex>
  );
};

export default Navigation;
