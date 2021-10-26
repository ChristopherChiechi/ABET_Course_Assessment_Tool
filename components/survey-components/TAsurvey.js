import { useEffect, useState } from 'react';
import {
    Text,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    HStack,
    RadioGroup,
    Radio,
    Center,
} from "@chakra-ui/react";


const TAsurvey = ({ TAquestions, handleChange }) => {
    useEffect(() => {
        console.log('tas updated');
    }, [TAquestions]);

    const renderRadios = Array.from(Array(5), (x, index) => {
        return <Radio key={index} value={index + 1}>{index + 1}</Radio>
    });

    const renderRows = TAquestions.map((question, idx) => {
        return (
            <Tr key={idx}>
                <Td>{question.question}</Td>
                <Td>
                    <RadioGroup
                        value={question.rating}
                        onChange={(e) =>
                            handleChange(e, idx, "TA")
                        }
                    >
                        <HStack spacing={10}>
                            {renderRadios}
                        </HStack>
                    </RadioGroup>
                </Td>
            </Tr>
        )
    });

    return (
        <>
            <Text fontWeight="bold">
                TA Evaluation Section: Please rate the following statements on a scale from 
                1 - 5, with 1 being strongly disagree and 5 being strongly agree.
            </Text>
            <Center
                m="2em"
                padding="1em"
                bg="#edf2f7"
                w="80%"
                borderRadius="4px"
            >
                <Table padding="1em" bg="white">
                    <Thead>
                        <Tr>
                            <Th>Quality</Th>
                            <Th>Rating</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {renderRows}
                    </Tbody>
                </Table>
            </Center>

        </>
    );

}

export default TAsurvey;