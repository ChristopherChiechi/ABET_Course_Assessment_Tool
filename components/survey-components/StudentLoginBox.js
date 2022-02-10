import {Box, FormControl, FormLabel, Input, Button, Text, useToast} from '@chakra-ui/react';
import useInputState from '../../hooks/useInputState';
import Link from 'next/link';
import { login } from '../../api/APIHelper';

const StudentLoginBox = ({toggleLoggin}) => {

    const [username, setUsername, resetUsername] = useInputState("");
    const [password, setPassword, resetPassword] = useInputState("");
    const toast = useToast({position: "top"});
    
    const handleSubmit = async (evt) => {
        evt.preventDefault();
        
        try {
            const response = await login(username, password);

            if (response) {
                //alert("success");
                toast({
                    title: "Sign in successful",
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                  })
                console.log(response);
                toggleLoggin();
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
            </form>
      </Box>
    )
}

export default StudentLoginBox;