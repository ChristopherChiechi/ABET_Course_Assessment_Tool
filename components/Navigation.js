import {
  Link,
  Flex,
  Box,
  Button,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import API from "../api/api";
import React, { useEffect, useState } from "react";
import cookieCutter from "cookie-cutter";
import jwt from "jsonwebtoken";
import { Custom } from "../api/APIHelper";
import { useRouter } from "next/router";

const Navigation = ({ link, user }) => {
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
        console.log(json.unique_name);
      }
      isLoading = false;
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <Flex justifyContent="left" mt="1em" mr="1em" dir="row">
        <HStack spacing="10px">
          <Box as="button" color="black" fontSize="1.5em" w="105px">
            {userID}
          </Box>
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

          <Link href="/" onClick={Custom}>
            <Button
              bg="#016a31"
              color="white"
              _hover={{
                background: "teal",
                color: "white",
              }}
            >
              [Debug] Reload Database
            </Button>
          </Link>
        </HStack>
      </Flex>
    </div>
  );

  // switch (link) {
  //     case '/formCompletion':
  //         return(
  //             <Box className="nav-container">
  //                 <Link href="/instructorHome">Home</Link>
  //                 <p><i className = "arrow right"></i></p>
  //                 <Link href="/formCompletion">Instructor ABET Form</Link>
  //                 <div className="alignright">
  //                     <Text className="user-name">bbb4200</Text>
  //                     <Link href="/" onClick={logout}>Sign Out</Link>
  //                 </div>
  //             </Box>
  //         )
  //         break;
  //     case '/coordinatorCommentInput':
  //         return(
  //             <Box className="nav-container">
  //                 <Link href="/instructorHome">Home</Link>
  //                 <p><i className = "arrow right"></i></p>
  //                 <Link href="/coordinatorCommentInput">Coordinator ABET Form</Link>
  //                 <div className="alignright">
  //                     <Text className="user-name">bbb4200</Text>
  //                     <Link href="/" onClick={logout}>Sign Out</Link>
  //                 </div>
  //             </Box>
  //         )
  //         break;
  //     default:
  //         return(
  //             <Box className="nav-container">
  //                 <Link href="/instructorHome">Home</Link>
  //                 {/* <Text className="user-name">bbb4200</Text> */}
  //                 <div className="alignright">
  //                     <Text className="user-name">MT2020</Text>
  //                     <Link href="/" onClick={logout}>Sign Out</Link>
  //                 </div>
  //             </Box>

  //         )
  //         break;
  // }
};

export default Navigation;
