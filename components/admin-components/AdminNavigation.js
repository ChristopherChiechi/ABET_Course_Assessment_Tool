import { Link, Flex, Box, Button, HStack } from "@chakra-ui/react";
import NextLink from "next/link";

import API from "../../api/api";
import React, { useEffect, useState } from "react";
import cookieCutter from "cookie-cutter";
import jwt from "jsonwebtoken";
import { Custom } from "../../api/APIHelper";
import { useRouter } from "next/router";

const AdminNavigation = ({ link, user }) => {
  const logout = () => {
    new API().logout();
  };

  const router = useRouter();
  const token = cookieCutter.get("token");
  const json = jwt.decode(token);
  var roleArray = json.role;
  var role = "";
  if (roleArray.length > 1) {
    for (var i = 0; i < roleArray.length; i++) {
      if (roleArray[i] == "Instructor" || roleArray[i] == "Coordinator") {
        role = roleArray[i];
      }
    }
  }

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

  if (roleArray.includes("Instructor") || roleArray.includes("Coordinator")) {
    return (
      <Flex justifyContent="right" mt="1em" mr="1em" dir="row">
        <HStack spacing="10px">
          <Box as="button" color="black" fontSize="1.5em" w="105px">
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
          <Button
            onClick={() => router.push("/instructorHome")}
            bg="#016a31"
            color="white"
            ml="1em"
            _hover={{
              background: "teal",
              color: "white",
            }}
          >
            Instructor Home
          </Button>

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
  } else {
    return (
      <Flex justifyContent="right" mt="1em" mr="1em" dir="row">
        <HStack spacing="10px">
          <Box as="button" color="black" fontSize="1.5em" w="105px">
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
  }
};

export default AdminNavigation;
