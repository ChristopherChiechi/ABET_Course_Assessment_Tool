import { Text, Container, Textarea } from "@chakra-ui/react";

const StudentFeedback = ({ studentInput, setStudentInput }) => {
  const handleChange = (e, type) => {
    var temp = studentInput;
    temp[type] = e.target.value;
    setStudentInput(temp);
  };

  return (
    <>
      <Container m="2em" padding="1em" bg="#edf2f7" minW="80%">
        <Text fontWeight="bold">
          Additional comments on TA's performance.
        </Text>
        <Textarea
          bg="white"
          onChange={(e) => handleChange(e, "INSTRUCTOReval")}
        ></Textarea>
      </Container>

      <Container m="2em" padding="1em" bg="#edf2f7" minW="80%">
        <Text fontWeight="bold">
          List what you liked about the course:
        </Text>
        <Textarea
          bg="white"
          onChange={(e) => handleChange(e, "TAeval")}
        ></Textarea>
      </Container>

      <Container m="2em" padding="1em" bg="#edf2f7" minW="80%">
        <Text fontWeight="bold">
          List ways this course could be improved:
        </Text>
        <Textarea
          bg="white"
          onChange={(e) => handleChange(e, "additionalFeedback")}
        ></Textarea>
      </Container>
    </>
  );
};

export default StudentFeedback;