import Link from "next/link";
import { Text, Center, Box } from "@chakra-ui/react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
export default function unAuthPage() {
  return (
    <>
      <Navigation />
      <Center>
        <Box
          mt="10%"
          ml="auto"
          mr="auto"
          padding="2em"
          bg="#edf2f7"
          w="50%"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        >
          <Center>
            <Text
              fontSize={{ base: "24px", md: "40px", lg: "46px" }}
              fontWeight="bold"
            >
              401 | Unauthorized
            </Text>
          </Center>
        </Box>
      </Center>
    </>
  );
}
