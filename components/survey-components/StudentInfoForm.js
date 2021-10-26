import { useContext } from 'react';
import {
    Select,
    Text,
    HStack,
    VStack,
    Center
} from "@chakra-ui/react";

import { PageContext } from './SurveyPageData';

const StudentInfoForm = ({ studentInformation, setStudentInformation }) => {
    const context = useContext(PageContext);
    const questions = context.studentQuestions;
    const attributes = ["Major", "Classification", "Grade"]

    const handleChange = (e, idx) => {
        const type = attributes[idx];
        var temp = studentInformation;
        temp[type] = e.target.value;
        setStudentInformation(temp);
    };

    const renderOptions = options => {
        return options.map((option, idx) => {
            return (
                <option value={option} key={idx}>
                    {option}
                </option>
            );
        });
    }

    return (
        <Center
            m="2em"
            padding="1em"
            bg="#edf2f7"
            w="80%"
            borderRadius="4px"
        >
            {questions.map((question, idx) => {
                return (
                    <HStack w="100%" justify="center">
                        <Text w="30%" fontWeight="bold">{question.question}</Text>
                        <Select
                            w="70%"
                            placeholder={attributes[idx]}
                            variant="filled"
                            bg="white"
                            mr="1em"
                            onChange={(e) =>
                                handleChange(e, idx)
                            }
                        >
                            {renderOptions(question.choices)}
                        </Select>
                    </HStack>
                )
            })
            }
        </Center>
    )

}

export default StudentInfoForm;