import { useContext } from 'react';
import {
    Select,
    Text,
    HStack,
} from "@chakra-ui/react";

import {PageContext} from './SurveyPageData';

const StudentInfoForm = ( {studentInformation, setStudentInformation} ) => {
    const context = useContext(PageContext);

    const handleChange = (e, type) => {
        var temp = studentInformation;
        temp[type] = e.target.value;
        setStudentInformation(temp);
    } 

    return (
        <>
            <HStack w="80%" justify="center">
                <Text w="30%">What is your major?</Text>
                <Select
                    w="70%"
                    placeholder="major"
                    onChange={(e) =>
                        handleChange(e, "major")
                    }
                >
                    {context.majors.map((major, idx) => {
                        return (
                            <option value={major} key={idx}>
                                {major}
                            </option>
                        );
                    })}
                </Select>
            </HStack>

            <HStack w="80%">
                <Text w="30%">What is your classification?</Text>
                <Select
                    w="70%"
                    placeholder="classifcation"
                    onChange={(e) =>
                        handleChange(e, "classification")
                    }
                >
                    {context.years.map((year, idx) => {
                        return <option key={idx}>{year} </option>;
                    })}
                </Select>
            </HStack>

            <HStack w="80%" mb="2em">
                <Text w="30%">What grade do you expect?</Text>
                <Select
                    w="70%"
                    placeholder="grade"
                    onChange={(e) =>
                        handleChange(e, "expectedGrade")
                    }
                >
                    {context.grades.map((year, idx) => {
                        return <option key={idx}>{year} </option>;
                    })}
                </Select>
            </HStack>
        </>
    )

}

export default StudentInfoForm;