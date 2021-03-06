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
  } from "@chakra-ui/react"

const FormsView = ({instructorCourses, coordinatorCourses}) => {

    instructorCourses.sort(
        (a, b) => (a.courseNumber + a.sectionNumber > b.courseNumber + b.sectionNumber)  ? 1 : -1
    );
    coordinatorCourses.sort(
        (a, b) => (a.courseNumber + a.sectionNumber > b.courseNumber+ b.sectionNumber) ? 1 : -1
    )
    
    const handleClick = async (course, section) => {
        document.cookie = `course=${course}; path=/`;
        document.cookie = `section=${section}; path=/`;
    }

    const renderInstructorCourses = instructorCourses.map(course => {
        return(
            <Tr>
                <Td>{course.displayName}</Td>
                <Td>{course.courseNumber}.{course.sectionNumber}</Td>
                <Td isNumeric>
                    <Button  colorScheme="blue" mt="1em" size="sm" variant="link" onClick={e => {
                        e.preventDefault();
                        handleClick(course.courseNumber, course.sectionNumber);
                        window.location.href = 'http://localhost:3000/formCompletion';
                    }}>
                        Work On Form
                    </Button>
                </Td>
            </Tr>
        )
    });

    const renderCoordinatorCourses = coordinatorCourses.map(course => {
        return(
            <Tr>
                <Td>{course.displayName}</Td>
                <Td>{course.courseNumber}.{course.sectionNumber}</Td>
                <Td isNumeric>
                    <Button  colorScheme="blue" mt="1em" size="sm" variant="link" onClick={e => {
                        e.preventDefault();
                        handleClick(course.courseNumber, course.sectionNumber);
                        window.location.href = 'http://localhost:3000/coordinatorCommentInput';
                    }}>
                        Add Comment
                    </Button>
                </Td>
            </Tr>
        )
    })
    return(
        <VStack w="75%">
            <Box bg="#edf2f7" w="100%" padding="1em">
                <Table variant="striped" colorScheme="green" padding="1em">
                    <TableCaption placement="top" fontWeight="bold" fontSize="xl">Instructor Forms</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Code</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {renderInstructorCourses}
                    </Tbody>
                </Table>
            </Box>
            <Box bg="#edf2f7" w="100%" padding="1em">
                <Table variant="striped" colorScheme="green" padding="1em">
                    <TableCaption placement="top" fontWeight="bold" fontSize="xl">Coordinator Forms</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Code</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {renderCoordinatorCourses}
                    </Tbody>
                </Table>
            </Box>
        </VStack>
    )
}



export default FormsView;