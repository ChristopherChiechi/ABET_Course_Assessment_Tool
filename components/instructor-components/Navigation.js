import { Link, Flex, Text, Badge, Button, Box } from "@chakra-ui/react";
import API from "./../../api/api";

const Navigation = ({ link, user}) => {
        const logout = () => {
            new API().logout();
        }

        return(
            <Flex
                justifyContent="flex-end"
                mt="1em"
                mr="1em"
                dir="row"
            >
                <Box as="button" px="4" fontSize="xl">{user}</Box>
                <Button
                    color="white"
                    bg="#016a31"
                    _hover={{
                        background: "teal",
                        color: "white",
                      }}
                    >
                    <Link href="/" onClick={logout}>Sign Out</Link>
                </Button>
            </Flex>
        )

        // switch (link) {
        //     case '/formCompletion':
        //         return(
        //             <Box className="nav-container">
        //                 <Link href="/instructorHome">Home</Link>
        //                 <p><i className = "arrow right"></i></p>
        //                 <Link href="/formCompletion">Instructor ABET Form</Link>
        //                 <div className="alignright">
        //                     <Text className="user-name">bbb4200</Text>
        //                     <Link href="/" onClick={logout}>Sign Out</Link>
        //                 </div>
        //             </Box>
        //         )
        //         break;
        //     case '/coordinatorCommentInput':
        //         return(
        //             <Box className="nav-container">
        //                 <Link href="/instructorHome">Home</Link>
        //                 <p><i className = "arrow right"></i></p>
        //                 <Link href="/coordinatorCommentInput">Coordinator ABET Form</Link>
        //                 <div className="alignright">
        //                     <Text className="user-name">bbb4200</Text>
        //                     <Link href="/" onClick={logout}>Sign Out</Link>
        //                 </div>
        //             </Box>
        //         )
        //         break;
        //     default:
        //         return(
        //             <Box className="nav-container">
        //                 <Link href="/instructorHome">Home</Link>
        //                 {/* <Text className="user-name">bbb4200</Text> */}
        //                 <div className="alignright">
        //                     <Text className="user-name">MT2020</Text>
        //                     <Link href="/" onClick={logout}>Sign Out</Link>
        //                 </div>
        //             </Box>

        //         )
        //         break;
        // }

}

export default Navigation;