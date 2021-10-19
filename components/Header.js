//import Image from 'next/image'
import { Image } from "@chakra-ui/react"
import { Text, Box, HStack } from '@chakra-ui/react';

const Header = () => {
    return (
        <>
        <Box boxsize="sm" w="100%" bg="#016a31" height="15%" padding="0.75em">
            <Image
                src="/UNTbanner.png"
                pos="absolute"
                top="0"
                left="3"
                boxSize="96px"
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