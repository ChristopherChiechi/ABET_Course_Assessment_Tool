import { useContext } from 'react';
import {
    List,
    ListItem,
    Text,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    VStack,
    HStack,
    RadioGroup,
    Radio,
    Center,
    Divider,
} from "@chakra-ui/react";

import { PageContext } from './SurveyPageData';
const CourseOutcomesSurvey = ({ outcomeSurvey, handleChange }) => {
    const renderRadios = Array.from(Array(5), (x, index) => {
        return <Radio key={index} value={index + 1}>{index + 1}</Radio>
    });

    const renderRows = outcomeSurvey.map((outcome, idx) => {
        return (
            <Tr key={idx}>
                <Td>{outcome.outcome}</Td>
                <Td>
                    <RadioGroup
                        value={outcome.rating}
                        onChange={(e) =>
                            handleChange(e, idx, "Outcomes")
                        }
                    >
                        <HStack spacing={10}>
                            {renderRadios}
                        </HStack>
                    </RadioGroup>
                </Td>
            </Tr>
        )
})

    return (
        <>
            <Text fontWeight="bold">
                For each of the course outcomes, rate each from 1 to 5 in terms of
        agreement with your level of agreement.
            </Text>
            <Center
                m="2em"
                padding="1em"
                bg="#edf2f7"
                w="80%"
            >
                <Table padding="1em" bg="white">
                    <Thead>

                        <Tr>
                            <Th>Course Outcome</Th>
                            <Th>Rating</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {renderRows}
                    </Tbody>
                </Table>
            </Center>

        </>
    )

}

export default CourseOutcomesSurvey;