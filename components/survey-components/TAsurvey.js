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

import { PageContext } from './SurveyPageData';
const TAsurvey = ({ TAquestions, setTAquestions }) => {
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
                                    <Text mt="1em">{question.question.question}</Text>
                                    <RadioGroup
                                        value={question.rating}
                                    >
                                        <HStack spacing={10}>
                                            <Radio bg="white">1</Radio>
                                            <Radio bg="white">2</Radio>
                                            <Radio bg="white">3</Radio>
                                            <Radio bg="white">4</Radio>
                                            <Radio bg="white">5</Radio>
                                        </HStack>
                                    </RadioGroup>
                                </VStack>
                            </ListItem>
                        );
                    })}
                </List>
            </Center>

        </>
    )

}

export default TAsurvey;