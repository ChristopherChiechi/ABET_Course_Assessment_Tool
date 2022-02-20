//import Image from 'next/image'
import { Image } from "@chakra-ui/react";
import { Text, Box, HStack } from "@chakra-ui/react";

const Header = () => {
  return (
    <>
      <HStack
        direction={["column", "row"]}
        bg="#016a31"
        justify="true"
        w={{ base: "200%", md: "100%" }}
      >
        <Box w={{ base: "100px", sm: "50%", md: "100px" }} height="100%">
          <Image
            src="/WhiteUNTLogo.png"
            pos="absolute"
            top="0.4"
            left="5"
            height="45px"
          />
        </Box>
        <Box w={{ base: "500px", sm: "100%", md: "210px" }} height="100%">
          <Text fontWeight="bold" color="white" marginLeft="20%">
            College of Engineering
          </Text>
        </Box>
      </HStack>
      <Box bg="#016a31" w={{ base: "200%", md: "100%" }} height="100%">
        <Text
          fontWeight="bold"
          color="white"
          marginLeft={{ base: "210px", md: "150px" }}
        >
          ABET Tool
        </Text>
      </Box>

      <Box
        boxsize="sm"
        w={{ base: "200%", md: "100%" }}
        bg="black"
        height="5%"
        padding="0.3em"
      ></Box>
    </>
  );
};
export default Header;
