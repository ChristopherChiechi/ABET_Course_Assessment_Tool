import Image from 'next/image'
import {Text, Box, Center} from '@chakra-ui/react';

const Header = () => {
    return(
        <Center w="100%" bg="#9AE6B4;" height="130px" textAlign="center" padding="1em" boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)">
                {/* <Image src = "/logo.png" alt="logo" layout="fill" objectFit="none" quality={100}/> */}
                <Text align="center" fontSize="4xl" fontWeight="bold">UNT ABET Accreditation Tool</Text>
        </Center>
    )
}

export default Header;