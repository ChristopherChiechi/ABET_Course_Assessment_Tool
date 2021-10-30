import React, { Component } from "react";
import { Link, Box, Text, Flex, Button } from "@chakra-ui/react";
import {

  TextField,
  Link as MaterialLink,
  Card,
  CardContent,
  MuiThemeProvider,
  createTheme,
  Grid,
} from "@material-ui/core";
import API from "./../../api/api";



const AdminNavigation = ({ link, user}) => {
  const logout = () => {
    new API().logout();
  };

  switch (link) {
    default:
      return (
        <>
          
          <Flex
            justifyContent="flex-end"
            mt="1em"
            mr="1em"
            dir="row">

            <Text
              float="right"
              marginLeft="auto"
              textAlign="right"
              display="flex"
              paddingRight="10px"
              lineHeight = "10"
              fontSize = "xl"
            >
              {user}
            </Text>
            <Button
              ml="1em" 
              bg="#016a31"
              color="white"
              _hover={{
                background: "teal",
                color: "white",
              }}
              >
              <Link href="/" onClick={logout}>Sign Out</Link>
            </Button>
                    
          </Flex>
          
        </>
      );
      break;
  }
};

export default AdminNavigation;
