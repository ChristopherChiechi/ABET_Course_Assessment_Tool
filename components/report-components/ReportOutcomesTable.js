//imports
import {
    Text,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Center,
    Button,
    Flex,
    HStack,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
    Badge,
    Input
} from "@chakra-ui/react";


const ReportOutcomesTable = ({ courseOutcomes }) => {
    const renderOutcomeRows = courseOutcomes.map((outcome, idx) => {
        return (
            <Tr key={idx}>
                <Td>{outcome.outcome}</Td>
                <Td>
                    <Flex direction="column" align="start">
                        {
                            outcome.studentWorks.map((work, idx) => {
                                return (
                                    <Text>
                                        {work.fileName}
                                    </Text>
                                )
                            })
                        }
                    </Flex>
                </Td>
                <Td>
                    <Flex direction="row">

                        <HStack w="50%">
                            <Text fontWeight="bold">IT:</Text>
                            <Text>{outcome.numberOfIT}</Text>
                        </HStack>

                        <HStack w="50%">
                            <Text fontWeight="bold">CS:</Text>
                            <Text>{outcome.numberOfCS}</Text>
                        </HStack>

                        <HStack w="50%">
                            <Text fontWeight="bold">CE:</Text>
                            <Text>{outcome.numberOfCE}</Text>
                        </HStack>

                        <HStack w="50%">
                            <Text fontWeight="bold">CYS:</Text>
                            <Text>{outcome.numberOfC}</Text>
                        </HStack>

                    </Flex>
                </Td>
            </Tr>
        )
    })

    return (
        <>
            <Text fontSize="xl" fontWeight="bold">Course Outcomes Mapping</Text>
            <Center
                m="2em"
                padding="1em"
                bg="#edf2f7"
                borderRadius="4px"
            >
                <Table padding="1em" bg="white">
                    <Thead>
                        <Tr>
                            <Th>Course Outcomes</Th>
                            <Th>Student Work Used</Th>
                            <Th>Number of Students Who Achieved 75% of this Outcome</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {renderOutcomeRows}
                    </Tbody>
                </Table>
            </Center>
        </>
    );
};

export default ReportOutcomesTable;