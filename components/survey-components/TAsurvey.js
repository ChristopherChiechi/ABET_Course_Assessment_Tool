import { useEffect, useState } from 'react';
import {
    List,
    ListItem,
    Text,
    VStack,
    HStack,
    RadioGroup,
    Radio,
    Center,
    Divider,
} from "@chakra-ui/react";


const TAsurvey = ({ TAquestions, handleChange }) => {
    useEffect(() => {
        console.log('tas updated');
    }, [TAquestions]);

    const renderRadios = Array.from(Array(5), (x, index) => {
        return <Radio key={index} value={index + 1}>{index + 1}</Radio>
    });

    return (
        <>
            <Text fontWeight="bold">
                TA evaluation. Have each rated 1-5, with 5 being very satisfied and 1
                being very unsatisfied
            </Text>
            <Center
                m="2em"
                padding="2em"
                bg="#edf2f7"
                w="80%"
            >
                <List padding="1em" w="90%" bg="white" borderRadius="8px">
                    {TAquestions.map((question, idx) => {
                        return (
                            <ListItem mb="1em" key={idx}>
                                { (idx > 0) ? <Divider /> : null}
                                <VStack>
                                    <Text mt="1em">{question.question}</Text>
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
                                </VStack>
                            </ListItem>
                        );
                    })}
                </List>
            </Center>

        </>
    );

}

export default TAsurvey;