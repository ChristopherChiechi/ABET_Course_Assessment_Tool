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
    HStack,
} from "@chakra-ui/react";


const GradesInput = ({ ceGrades, csGrades, itGrades, cGrades, handleGradeChange }) => {
  
    const renderCeGrades = Object.keys(ceGrades).map((entry, idx) => {
        return entry !== "totalStudents" ? (
            <Center key={idx}>
                <Text fontWeight="bold" textTransform="uppercase" mr="1em">
                    {entry}
                </Text>
                <NumberInput
                    value={ceGrades[entry]}
                    min={0}
                    max={30}
                    w="50%"
                    onChange={e => {
                        const newGrade = parseInt(e);
                        handleGradeChange('ceGrades', entry, newGrade);
                    }}
                >
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
            </Center>
        ) : null
            ;
    });
    const renderCsGrades = Object.keys(csGrades).map((entry, idx) => {
        return entry !== "totalStudents" ? (
            <Center key={idx}>
                <Text fontWeight="bold" textTransform="uppercase" mr="1em">
                    {entry}
                </Text>
                <NumberInput
                    value={csGrades[entry]}
                    min={0}
                    max={30}
                    w="50%"
                    onChange={e => {
                        const newGrade = parseInt(e);
                        handleGradeChange('csGrades', entry, newGrade);
                    }}
                >
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
            </Center>
        ) : null
            ;
    });
    const renderITGrades = Object.keys(itGrades).map((entry, idx) => {
        return entry !== "totalStudents" ? (
            <Center key={idx}>
                <Text fontWeight="bold" textTransform="uppercase" mr="1em">
                    {entry}
                </Text>
                <NumberInput
                    value={itGrades[entry]}
                    min={0}
                    max={30}
                    w="50%"
                    onChange={e => {
                        const newGrade = parseInt(e);
                        handleGradeChange('itGrades', entry, newGrade);
                    }}
                >
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
            </Center>
        ) : null
            ;
    });
    const renderCGrades = Object.keys(cGrades).map((entry, idx) => {
        return entry !== "totalStudents" ? (
            <Center key={idx}>
                <Text fontWeight="bold" textTransform="uppercase" mr="1em">
                    {entry}
                </Text>
                <NumberInput
                    value={cGrades[entry]}
                    min={0}
                    max={30}
                    w="50%"
                    onChange={e => {
                        const newGrade = parseInt(e);
                        handleGradeChange('cGrades', entry, newGrade);
                    }}
                >
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
            </Center>
        ) : null
            ;
    });
    
    return (
        <>
            <Text fontSize="xl" fontWeight="bold">Grades</Text>
            <Center
                m="2em"
                padding="1em"
                bg="#edf2f7"
                borderRadius="4px"
            >
                <Table padding="1em" bg="white">
                    <Thead>

                        <Tr>
                            <Th>Major</Th>
                            <Th>Grades</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>
                                <Text fontWeight="bold">IT</Text>
                            </Td>
                            <Td>
                                <HStack>
                                    {renderITGrades}
                                </HStack>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                                <Text fontWeight="bold">CE</Text>
                            </Td>
                            <Td>
                                <HStack>
                                    {renderCeGrades}
                                </HStack>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                                <Text fontWeight="bold">CS</Text>
                            </Td>
                            <Td>
                                <HStack>
                                    {renderCsGrades}
                                </HStack>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                                <Text fontWeight="bold">C</Text>
                            </Td>
                            <Td>
                                <HStack>
                                    {renderCGrades}
                                </HStack>
                            </Td>
                        </Tr>
                    </Tbody>
                </Table>
            </Center>
        </>
    );
};

export default GradesInput;