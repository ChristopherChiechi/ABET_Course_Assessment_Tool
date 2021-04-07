import { useEffect, useState } from 'react';
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
    Text,
    Box
} from "@chakra-ui/react";


import { getFormBySection } from '../api/APIHelper';

const formCompletion = ({ number, section, semester, year, id }) => {
    console.log(number, section, semester, year, id);
    const [form, setForm] = useState(); 
    console.log(form);
    const getForm = async () => {
        const formData = await getFormBySection(id, 2020, "Fall", "CSCE", number.toString(), section);
        setForm(formData);
    };


    useEffect(() => {
        getForm();
    }, []);

    return (
        <Text>
        </Text>
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