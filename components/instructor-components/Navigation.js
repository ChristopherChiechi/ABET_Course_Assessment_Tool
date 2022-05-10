import { Link, Flex, Text, Badge, Button, Box, HStack } from "@chakra-ui/react";
import API from "./../../api/api";
import React, { useEffect, useState } from "react";
import cookieCutter from "cookie-cutter";
import jwt from "jsonwebtoken";
import NextLink from "next/link";
const Navigation = () => {
  const logout = () => {
    new API().logout();
  };
  const [userID, setUser] = useState("");

  const getUser = async () => {
    const ISSERVER = typeof window === "undefined";
    let isLoading = true;
    if (!ISSERVER) {
      const token = cookieCutter.get("token");
      const json = jwt.decode(token);
      if (json == null) {
        setUser("");
      } else {
        setUser(json.unique_name);
      }
      isLoading = false;
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Flex justifyContent="flex-end" mt="1em" mr="1em" dir="row">
      <HStack spacing="10px">
        <Box as="button" color="black" fontSize="1.0em" w="90px">
          {userID}
        </Box>
        <NextLink href="/" style={{ textDecoration: "none" }}>
          <Button
            bg="#016a31"
            color="white"
            _hover={{
              background: "teal",
              color: "white",
            }}
          >
            Home
          </Button>
        </NextLink>
        <Link href="/" onClick={logout} style={{ textDecoration: "none" }}>
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
      </HStack>
    </Flex>
  );
};

export default Navigation;
