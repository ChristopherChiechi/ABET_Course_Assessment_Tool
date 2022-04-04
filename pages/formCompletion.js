//imports
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import cookieCutter from "cookie-cutter";
import jwt from "jsonwebtoken";

import {
  VStack,
  Button,
  Text,
  Box,
  Flex,
  useToast,
  Center,
  Textarea,
} from "@chakra-ui/react";

//api
import {
  getFormBySection,
  postInstructorForm,
  getSection,
} from "../api/APIHelper";
//components
import GradesInput from "../components/form-components/GradesInput";
import CourseOutcomesMapping from "../components/form-components/CourseOutcomesMapping";

const formCompletion = ({
  number,
  section,
  semester,
  year,
  id,
  department,
}) => {
  const router = useRouter();
  const [form, setForm] = useState();
  const [sectionInstructorEUID, setSectionInstructorEUID] = useState();
  const toast = useToast({ position: "top" });

  const checkUser = async () => {
    const ISSERVER = typeof window === "undefined";
    let isLoading = true;
    if (!ISSERVER) {
      const token = cookieCutter.get("token");
      const json = jwt.decode(token);
      const jsonUserId = json.unique_name;
      if (json == null) {
        router.push("/");
      } else {
        console.log(jsonUserId, sectionInstructorEUID);
        if (jsonUserId != sectionInstructorEUID) {
          toast({
            title: "Error",
            description: `This section instructor is not the same as the login user!`,
            status: "error",
            duration: 3000,
            isClosable: true,
          });
          router.push("/");
        }
      }
      isLoading = false;
    }
  };

  const getSectionInformation = async () => {
    try {
      const sectionRes = await getSection(
        semester,
        year,
        department,
        number,
        section
      );
      const sectionData = sectionRes.data;
      const status = sectionRes.status;
      if (status != "Success") {
        toast({
          title: "Error",
          description: `There was an error fetching the section information! Error: ${status}`,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        return;
      }
      setSectionInstructorEUID(sectionData.instructorEUID);
      console.log(sectionData.instructorEUID);
    } catch (error) {
      console.log(error);
    }
    console.log(number, section, semester, year, id, department);
  };

  const getForm = async () => {
    const formData = await getFormBySection(
      id,
      2020,
      "Fall",
      "CSCE",
      number.toString(),
      section
    );
    console.log(formData);
    setForm(formData);
  };

  const handleGradeChange = (major, grade, newValue) => {
    let tempForm = form[major];
    tempForm[grade] = newValue;
    setForm({
      ...form,
      grade: tempForm,
    });
  };

  const handleOutcomesChange = (major, grade, newValue) => {
    let tempForm = form[major];
    tempForm[grade] = newValue;
    setForm({
      ...form,
      grade: tempForm,
    });
  };

  useEffect(() => {
    getSectionInformation();
    //getForm();
  }, []);

  useEffect(() => {
    if (sectionInstructorEUID != null) checkUser();
  }, [sectionInstructorEUID]);

  useEffect(() => {}, [form]);

  const handleSubmit = async () => {
    console.log(form);
  };
  return (
    <Center>
      {form ? (
        <Flex mt="2em" direction="column" w="90%">
          <Box w="80%">
            <Text fontSize="2xl" fontWeight="bold">
              {department} {number}.{section}
            </Text>
            <Text fontSize="xl" fontWeight="bold" color="green" mb="2em">
              ABET Course Assesment
            </Text>
          </Box>

          {form && (
            <GradesInput
              csGrades={form.csGrades}
              ceGrades={form.ceGrades}
              itGrades={form.itGrades}
              cGrades={form.cGrades}
              handleGradeChange={handleGradeChange}
            />
          )}
          <CourseOutcomesMapping
            courseOutcomes={form.outcomes}
            handleOutcomesChange={handleOutcomesChange}
          />
          <Text fontSize="xl" fontWeight="bold" mb="1em">
            Instructor Comments
          </Text>
          <Textarea
            mb="1em"
            size="lg"
            bg="#edf2f7"
            placeholder="// Write a comment"
          ></Textarea>

          <Box>
            <Button mb="1em" colorScheme="teal" w="max-content" mr="1em">
              Save Report
            </Button>

            <Button
              mb="1em"
              colorScheme="green"
              w="max-content"
              onClick={handleSubmit}
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
    department: query.department,
    number: query.number,
    section: query.section,
    semester: query.semester,
    year: query.year,
    id: "MT2020",
  };
};

export default formCompletion;
