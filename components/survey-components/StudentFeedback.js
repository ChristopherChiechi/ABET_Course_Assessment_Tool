import { Text, Container, Textarea } from "@chakra-ui/react";

const StudentFeedback = ({ studentInput, setStudentInput }) => {
  const handleChange = (e, type) => {
    var temp = studentInput;
    temp[type] = e.target.value;
    setStudentInput(temp);
  };

  return (
    <div>
      <Container m="2em" padding="1em" bg="#edf2f7" minW="80%">
        <Text fontWeight="bold">Additional comments.</Text>
        <Textarea
          bg="white"
          onChange={(e) => handleChange(e, "additionalFeedback")}
        ></Textarea>
      </Container>
    </div>
  );
};

export default StudentFeedback;
