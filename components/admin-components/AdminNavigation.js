import React, { Component } from "react";
import { Link, Box, Text } from "@chakra-ui/react";
import API from "./../../api/api";

const AdminNavigation = ({ link, user }) => {
  const logout = () => {
    new API().logout();
  };

  switch (link) {
    default:
      return (
        <>
          <Box
            color="#00853E"
            fontStyle="normal"
            fontWeight="bold"
            fontSize="14px"
            top="15%"
            flexDirection="row"
            width="100%"
            padding="10px"
            marginBottom="20px"
          >
            <div>
              <Link
                float="left"
                marginLeft="auto"
                textAlign="left"
                display="flex"
                paddingLeft="10px"
                href="/adminHome"
              >
                Home
              </Link>
            </div>
            <div>
              <Link
                href="/"
                onClick={logout}
                float="right"
                marginLeft="auto"
                textAlign="right"
                display="block"
                paddingRight="10px"
              >
                Sign Out
              </Link>
              <Text
                float="right"
                marginLeft="auto"
                textAlign="right"
                display="flex"
                paddingRight="10px"
              >
                {user}
              </Text>
            </div>
          </Box>
        </>
      );
      break;
  }
};

export default AdminNavigation;
