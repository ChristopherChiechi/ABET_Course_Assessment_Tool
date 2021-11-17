//import Image from 'next/image'
import { Image } from "@chakra-ui/react"
import { Text, Box, HStack } from '@chakra-ui/react';

const Header = () => {
    return (
        <>
        <Box bg="#016a31" padding="0.75em" width="100%" height="100%">
            <Image
                src="/UNTbanner.png"
                pos="absolute"
                top="0"
                left="3"
                boxSize="94px"
            />
            <HStack ml="7.5%">
                <Text fontSize="sm" fontWeight="hairline" /*letterSpacing="tighter"*/ color="white">College of Engineering</Text>
            </HStack>
            <HStack ml="7.5%">
                <Text fontSize="xl" fontWeight="bold" color="white">ABET Tool</Text>
            </HStack>
        </Box>
        <Box boxsize="sm" w="100%" bg="black" height="5%" padding="0.3em"></Box>
        </>
    )
}
export default Header;