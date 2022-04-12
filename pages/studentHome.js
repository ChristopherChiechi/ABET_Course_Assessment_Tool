import { useState, useEffect } from "react";
import Head from "next/head";
import {
  Flex,
  Heading,
  Text,
  Box,
  Stack,
  Link,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import Navigation from "../components/student-components/Navigation";
import cookieCutter from "cookie-cutter";
import jwt from "jsonwebtoken";

const studentHome = () => {
  const [user, setUser] = useState();
  const [term, setTerm] = useState({
    semester: "Spring",
    year: 2021,
  });
  const [courses, setCourses] = useState({
    instructorCourses: [],
    coordinatorCourses: [],
  });

  const getUser = async () => {
    const ISSERVER = typeof window === "undefined";
    if (!ISSERVER) {
      const token = cookieCutter.get("token");
      if (token) {
        const json = jwt.decode(token);
        console.log(json);
        setUser(json.unique_name.toUpperCase());
      }
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <Head>
        <title>UNT ABET: Student Page</title>
      </Head>
      {user && <Navigation user={user} />}
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>HELLO {user} </Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Text fontSize={"lg"} color={"gray.600"}>
              To begin the student survey, please use the link provided by your
              professor 💖
            </Text>
          </Box>
        </Stack>
      </Flex>
    </div>
  );
};

export default studentHome;
