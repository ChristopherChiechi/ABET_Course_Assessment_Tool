import {Box, FormControl, FormLabel, Input, Button, Text, useToast} from '@chakra-ui/react';
import useInputState from '../hooks/useInputState';
import Link from 'next/link';
import { login } from '../api/APIHelper';

const LoginBox = () => {

    const [username, setUsername, resetUsername] = useInputState("");
    const [password, setPassword, resetPassword] = useInputState("");
    const toast = useToast();
    
    const handleSubmit = async (evt) => {
        evt.preventDefault();
        
        try {
            const response = await login(username, password);

            if (response) {
                //alert("success");
                toast({
                    title: "Token created.",
                    description: "Here's your token 🪙",
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                  })
                console.log(response);
            }
            else 
            toast({
                title: "Incorrect UserID or password",
                description: "Here's your token 🪙",
                status: "error",
                duration: 9000,
                isClosable: true,
              })
        } catch (error) {
            alert("try 'admin' & 'admin'");
        }
        finally{
            resetUsername();
            resetPassword();
        }
    }

    return(
    <Box mt="10%" ml="auto" mr="auto" padding="2em" bg="#edf2f7" w="80%" boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)">
        <Text fontSize="xl" fontWeight="bold">Login</Text>
            <form onSubmit={handleSubmit}>    
                <FormControl isRequired>
                    <FormLabel htmlFor="username" margin = "1rem" mt="3rem">Username</FormLabel>
                    <Input placeholder="EUID" value={username} onChange={setUsername} bg="white"/>
                </FormControl>

                <FormControl isRequired>
                    <FormLabel htmlFor="password" margin = "1rem">Password</FormLabel>
                    <Input placeholder="Password" type="password" value={password} onChange={setPassword} bg="white"/>
                </FormControl>

                <Button colorScheme="green" margin = "1rem" onClick = {handleSubmit} type="submit">Sign In</Button>
                <Link href="/instructorHome">
                    <Button colorScheme="blue" >Instructor Home</Button>
                </Link>

                <Link href="/adminHome">
                    <Button colorScheme="blue" margin = "1rem">Admin Home</Button>
                </Link>

                <Link href="/studentSurvey">
                    <Button colorScheme="blue" margin = "1rem">Student Survey</Button>
                </Link>
            </form>
      </Box>
    )
}

export default LoginBox;