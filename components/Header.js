import Image from 'next/image'
//import { Image } from "@chakra-ui/react"
import { Text, Box, HStack } from '@chakra-ui/react';

const Header = () => {
    return (
        <Box boxsize="sm" w="100%" bg="#016a31" height="15%" padding="1em">
            {/*<Image 
                src = {"/UNTbanner.png"} 
                alt={"UNTbanner"}
                //layout={"fill"}
                objectFit={"none"}
                quality={100}
                width={211}
                height={239}
                priority
            />
            */}
            <HStack ml="7.5%">
                <Text fontSize="4xl" fontWeight="bold" color="white">UNT</Text>
                <Text fontSize="lg" fontWeight="bold" color="white">ABET Tool</Text>
            </HStack>
        </Box>
    )
}
export default Header;