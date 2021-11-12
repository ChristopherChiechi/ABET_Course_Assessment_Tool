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
import { getFormBySection } from '../api/APIHelper';
import ReportGrades from '../components/report-components/ReportGrades';
import ReportOutcomesTable from '../components/report-components/ReportOutcomesTable';

// will need to update when backend is completed
const fullReport = ({ /*semester, year*/ number, section, semester, year, id }) => {
    /*
    const [form, setForm] = useState();
    const getForm = async () => {
        const formData = await getFormBySection( id, 2020, "Fall", "CSCE", number.toString(), section); //semester, year
        setForm(formData);
    };
    console.log(form);
    useEffect(() => {
        getForm();
    }, []);
    */

    return (
        <Center>
            <Text>
                Test
            </Text>
        </Center>
    )
}

fullReport.getInitialProps = ({ query }) => {
    return {
        /*
        semester: query.semester,
        year: query.year,
        id: 'MT2020'
        */
        number: query.number,
        section: query.section,
        semester: query.semester,
        year: query.year,
        id: 'MT2020'
    };
}

export default fullReport;