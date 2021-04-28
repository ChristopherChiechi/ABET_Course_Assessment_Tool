//imports
import { useEffect, useState } from 'react';
import {
    VStack,
    Button,
    Text,
    Box,
    Flex,
    Center,
    Textarea
} from "@chakra-ui/react";

//api
import { getFormBySection, postInstructorForm } from '../api/APIHelper';
//components
import GradesInput from '../components/form-components/GradesInput';
import CourseOutcomesMapping from '../components/form-components/CourseOutcomesMapping';

const formCompletion = ({ number, section, semester, year, id }) => {
    const [form, setForm] = useState();
    const getForm = async () => {
        const formData = await getFormBySection(id, 2020, "Fall", "CSCE", number.toString(), section);
        setForm(formData);
    };

    const handleGradeChange = (major, grade, newValue) => {
        let tempForm = form[major];
        tempForm[grade] = newValue;
        setForm({
            ...form,
            grade: tempForm
        });
    }

    const handleOutcomesChange = (major, grade, newValue) => {
        let tempForm = form[major];
        tempForm[grade] = newValue;
        setForm({
            ...form,
            grade: tempForm
        });
    }

    useEffect(() => {
        getForm();
    }, []);

    useEffect(() => {
    }, [form]);

    return (
        <Center>
            {form ? (
                <Flex mt="2em" direction="column" w="90%">
                    <Box w="80%">
                        <Text fontSize="2xl" fontWeight="bold">
                            {form.section.department} {number}.{section}
                        </Text>
                        <Text fontSize="xl" fontWeight="bold" color="green" mb="2em">
                            ABET Course Assesment
                        </Text>
                    </Box>

                    <GradesInput csGrades={form.csGrades} ceGrades={form.ceGrades} itGrades={form.itGrades} handleGradeChange={handleGradeChange} />
                    <CourseOutcomesMapping courseOutcomes={form.outcomes} handleOutcomesChange={handleOutcomesChange}/>
                    <Text fontSize="xl" fontWeight="bold" mb="1em">
                        Intructor Comments
                        </Text>
                    <Textarea mb="1em" size="lg"></Textarea>

                    <Box>
                        <Button mb="1em" colorScheme="teal" w="max-content" mr="1em">
                            Save Report
                        </Button>

                        <Button mb="1em" colorScheme="green" w="max-content">
                            Submit Report
                        </Button>
                    </Box>
                </Flex>)
                : null
            }
        </Center>
    )
}

formCompletion.getInitialProps = ({ query }) => {
    return {
        number: query.number,
        section: query.section,
        semester: query.semester,
        year: query.year,
        id: 'MT2020'
    };
}

export default formCompletion;