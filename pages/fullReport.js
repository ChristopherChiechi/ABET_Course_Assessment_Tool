//imports
import { useEffect, useState } from 'react';
import {
    VStack,
    Button,
    Text,
    Box,
    Flex,
    Center,
    Textarea,
    Grid,
    GridItem,
    GridItemProps,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
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
    <Grid templateColumns="repeat(4, 1fr)" gap={2}>
        <Table variant="striped" colorScheme="green" size="sm">
            <Thead>
                <Th>Information Technology</Th>
            </Thead>
            <Tbody>
                <Tr>
                    <Td>Course</Td>
                    <Td>1</Td>
                    <Td>2</Td>
                    <Td>3</Td>
                    <Td>4</Td>
                    <Td>5</Td>
                    <Td>6</Td>
                    <Td>7</Td>
                    <Td>Out Of</Td>
                </Tr>
                <Tr>
                    <Td>1030</Td>
                    <Td>9</Td>
                    <Td>10</Td>
                    <Td>11</Td>
                    <Td>12</Td>
                    <Td>13</Td>
                    <Td>14</Td>
                    <Td>15</Td>
                    <Td>16</Td>
                </Tr>
                <Tr>
                    <Td>1040</Td>
                    <Td>9</Td>
                    <Td>10</Td>
                    <Td>11</Td>
                    <Td>12</Td>
                    <Td>13</Td>
                    <Td>14</Td>
                    <Td>15</Td>
                    <Td>16</Td>
                </Tr>
                <Tr>
                    <Td>2100</Td>
                    <Td>9</Td>
                    <Td>10</Td>
                    <Td>11</Td>
                    <Td>12</Td>
                    <Td>13</Td>
                    <Td>14</Td>
                    <Td>15</Td>
                    <Td>16</Td>
                </Tr>
                <Tr>
                    <Td>2110</Td>
                    <Td>9</Td>
                    <Td>10</Td>
                    <Td>11</Td>
                    <Td>12</Td>
                    <Td>13</Td>
                    <Td>14</Td>
                    <Td>15</Td>
                    <Td>16</Td>
                </Tr>
            </Tbody>
        </Table>

        <Table variant="striped" colorScheme="green" size="sm">
            <Thead>
                <Th>Computer Science</Th>
            </Thead>
            <Tbody>
                <Tr>
                    <Td>Course</Td>
                    <Td>1</Td>
                    <Td>2</Td>
                    <Td>3</Td>
                    <Td>4</Td>
                    <Td>5</Td>
                    <Td>6</Td>
                    <Td>7</Td>
                    <Td>Out Of</Td>
                </Tr>
                <Tr>
                    <Td>1030</Td>
                </Tr>
                <Tr>
                    <Td>1040</Td>
                </Tr>
                <Tr>
                    <Td>2100</Td>
                </Tr>
                <Tr>
                    <Td>2110</Td>
                </Tr>
            </Tbody>
        </Table>

        <Table variant="striped" colorScheme="green" size="sm">
            <Thead>
                <Th>Computer Engineering</Th>
            </Thead>
            <Tbody>
                <Tr>
                    <Td>Course</Td>
                    <Td>1</Td>
                    <Td>2</Td>
                    <Td>3</Td>
                    <Td>4</Td>
                    <Td>5</Td>
                    <Td>6</Td>
                    <Td>7</Td>
                    <Td>Out Of</Td>
                </Tr>
                <Tr>
                    <Td>1030</Td>
                </Tr>
                <Tr>
                    <Td>1040</Td>
                </Tr>
                <Tr>
                    <Td>2100</Td>
                </Tr>
                <Tr>
                    <Td>2110</Td>
                </Tr>
            </Tbody>
        </Table>

        <Table variant="striped" colorScheme="green" size="sm">
            <Thead>
                <Th>Cybersecurity</Th>
            </Thead>
            <Tbody>
                <Tr>
                    <Td>Course</Td>
                    <Td>1</Td>
                    <Td>2</Td>
                    <Td>3</Td>
                    <Td>4</Td>
                    <Td>5</Td>
                    <Td>6</Td>
                    <Td>7</Td>
                    <Td>Out Of</Td>
                </Tr>
                <Tr>
                    <Td>1030</Td>
                </Tr>
                <Tr>
                    <Td>1040</Td>
                </Tr>
                <Tr>
                    <Td>2100</Td>
                </Tr>
                <Tr>
                    <Td>2110</Td>
                </Tr>
            </Tbody>
        </Table>
    </Grid>
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