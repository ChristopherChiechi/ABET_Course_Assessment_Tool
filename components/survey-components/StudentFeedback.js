import {
    Text,
    Container,
    Textarea,
    
} from "@chakra-ui/react";

const StudentFeedback = ({ studentInput, setStudentInput }) => {

    const handleChange = (e, type) => {
        var temp = studentInput;
        temp[type] = e.target.value;
        setStudentInput(temp);
    }

    return (
        <>
        <Container
            m="2em"
            padding="1em"
            bg="#edf2f7"
            minW="80%"
        >
            <Text fontWeight="bold">Additional comments on the Course?</Text>
            <Textarea
                bg="white"
                onChange={(e) =>
                    handleChange(e, "additionalFeedback")
                }
            ></Textarea>
        </Container>
        
        <Container
                m="2em"
                padding="1em"
                bg="#edf2f7"
                minW="80%"
            >
                <Text fontWeight="bold">Additional comments on Instructor's performance</Text>
                <Textarea
                    bg="white"
                    onChange={(e) =>
                        handleChange(e, "INSTRUCTOReval")
                    }
                ></Textarea>
            </Container>

            <Container
                m="2em"
                padding="1em"
                bg="#edf2f7"
                minW="80%"
            >
                <Text fontWeight="bold">Additional comments on TA's performance</Text>
                <Textarea
                    bg="white"
                    onChange={(e) =>
                        handleChange(e, "TAeval")
                    }
                ></Textarea>
            </Container>

            <Container
                m="2em"
                padding="1em"
                bg="#edf2f7"
                minW="80%"
            >
                <Text fontWeight="bold">What parts of the class were obstacles to your learning?</Text>
                <Textarea
                    bg="white"
                    onChange={(e) =>
                        handleChange(e, "additionalFeedback")
                    }
                ></Textarea>
            </Container>

            <Container
                m="2em"
                padding="1em"
                bg="#edf2f7"
                minW="80%"
            >
                <Text fontWeight="bold">What changes might improve your learning?</Text>
                <Textarea
                    bg="white"
                    onChange={(e) =>
                        handleChange(e, "additionalFeedback")
                    }
                ></Textarea>
            </Container>
        </>
    )

}

export default StudentFeedback;