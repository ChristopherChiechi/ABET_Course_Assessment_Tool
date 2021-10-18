import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    VStack,
    Button,
    Box
} from "@chakra-ui/react";
import Link from "next/link"

const FormsView = () => {
    
    

    const renderStudentCourses = () => {
        return (
            <Tr>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td isNumeric>25.4</Td>
            </Tr>
        )
    }

    
    return (
        <VStack w="75%">
            <Box bg="#edf2f7" w="100%" padding="1em">
                <Table variant="striped" colorScheme="green" padding="1em">
                    <TableCaption placement="top" fontWeight="bold" fontSize="xl">Course Survey</TableCaption>
                    <Thead>

                        <Tr>
                            <Th>Course Name</Th>
                            <Th>Course Number</Th>
                            <Th>Survey</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Computer Science 1</Td>
                            <Td>CSCE 1030</Td>
                            <Td ><Button colorScheme="teal"><Link href={{ pathname: "/studentSurvey",}}>Start</Link></Button></Td>
                        </Tr>
                        <Tr>
                            <Td>Computer Science 2</Td>
                            <Td>CSCE 1040</Td>
                            <Td ><Button colorScheme="teal"><Link href={{ pathname: "/",}}>Start</Link></Button></Td>
                        </Tr>
                        <Tr>
                            <Td>Capstone</Td>
                            <Td>CSCE 4901</Td>
                            <Td ><Button colorScheme="teal"><Link href={{ pathname: "/",}}>Start</Link></Button></Td>
                        </Tr>
                        <Tr>
                            <Td>Algorithms</Td>
                            <Td>CSCE 4110</Td>
                            <Td ><Button colorScheme="teal"><Link href={{ pathname: "/",}}>Start</Link></Button></Td>
                        </Tr>
                    </Tbody>
                </Table>
            </Box>
        </VStack>
    )
}


export default FormsView;