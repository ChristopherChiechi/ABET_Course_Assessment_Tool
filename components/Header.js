import Image from 'next/image'
import { Text, Box, HStack } from '@chakra-ui/react';

const Header = () => {
    return (
        <Box w="100%" bg="#68D391;" height="15%" padding="1em">
            {/* <Image src = "/logo.png" alt="logo" layout="fill" objectFit="none" quality={100}/> */}
            <HStack ml="7.5%">
                <Text fontSize="4xl" fontWeight="bold">UNT</Text>
                <Text fontSize="lg" fontWeight="bold">ABET Tool</Text>
            </HStack>
        </Box>
    )
}

export default Header;