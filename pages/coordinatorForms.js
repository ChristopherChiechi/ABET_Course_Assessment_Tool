import { useEffect, useState } from "react";
import {
  VStack,
  Button,
  Text,
  Box,
  Flex,
  Center,
  Textarea,
} from "@chakra-ui/react";

import { getFormBySection, postCoordinatorComment } from "../api/APIHelper";
import CoordinatorGrades from "../components/form-components/CoordinatorGrades";
import CoordinatorOutcomes from "../components/form-components/CoordinatorOutcomes";

const formCompletion = ({ number, section, semester, year, id }) => {
  console.log(number, section, semester, year, id);
  const [form, setForm] = useState();
  const [comment, setComment] = useState({ coordinatorComment: "" });

  console.log(form);
  const getForm = async () => {
    const formData = await getFormBySection(
      id,
      2020,
      "Fall",
      "CSCE",
      number.toString(),
      section
    );
    setForm(formData);
  };
  const testHandler = () => {
    console.log(comment.coordinatorComment);
  };

  useEffect(() => {
    getForm();
  }, []);

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

          <CoordinatorGrades
            csGrades={form.csGrades}
            ceGrades={form.ceGrades}
            itGrades={form.itGrades}
            cGrades={form.cGrades}
          />
          <CoordinatorOutcomes courseOutcomes={form.outcomes} />
          <Text fontSize="xl" fontWeight="bold" mb="1em">
            Coordinator Comments
          </Text>
          <Textarea
            mb="1em"
            onChange={(event) => {
              setComment({ coordinatorComment: event.target.value });
            }}
          ></Textarea>

          <Box>
            <Button mb="1em" colorScheme="teal" w="max-content" mr="1em">
              Save Report
            </Button>

            <Button
              mb="1em"
              colorScheme="green"
              w="max-content"
              onClick={testHandler}
            >
              Submit Report
            </Button>
          </Box>
        </Flex>
      ) : null}
    </Center>
  );
};

formCompletion.getInitialProps = ({ query }) => {
  return {
    number: query.number,
    section: query.section,
    semester: query.semester,
    year: query.year,
    id: "MT2020",
  };
};

export default formCompletion;
